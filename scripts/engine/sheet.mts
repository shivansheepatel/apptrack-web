/**
 * Second source for the data engine: the Master Tracker Google Sheet.
 *
 * This is deliberately NOT a second code path with its own rules. A sheet row
 * is turned into exactly the same `Proposal` shape a crawled page produces,
 * then handed to the same confidence gate and the same sink (`sink-git.mts`).
 * That means every guarantee the crawler has already earned — dates never
 * auto-publish, every new listing is seen by a human once, every change is
 * visible as a diff in `/admin/review` — applies to the sheet for free.
 *
 * No model calls happen here. A sheet row is a human stating a fact on
 * purpose, not a page a model has to interpret, so there is nothing to
 * extract — only to read, normalize, and hand to the same gate as everything
 * else. That also means this mode has no API cost and can run often.
 *
 * Reading is the same trick the Discord bot already uses (`sheet_sync.py`):
 * Google will serve any sheet as a CSV at a public export URL as long as it's
 * shared "Anyone with the link can view" — no OAuth, no service account.
 */
import { createHash } from "node:crypto";
import type { Program } from "../../src/data/programs.ts";
import { registrableDomain, canonicalUrl } from "./sources.mts";
import { checkOne } from "./linkcheck.mts";
import { findDuplicate, fingerprint, fingerprintId, normalizeTitle } from "./dedupe.mts";
import { diffFields, decide, siteConfidenceFor } from "./confidence.mts";
import { isDowngrade, toProgramField } from "./sink-git.mts";
import type { Proposal, ExtractedProgram, Confidence, Claim } from "./types.mts";

const GOOGLE_SHEET_ID = process.env["GOOGLE_SHEET_ID"];
const GOOGLE_SHEET_GID = process.env["GOOGLE_SHEET_GID"] ?? "0";

export function isConfigured(): boolean {
  return Boolean(GOOGLE_SHEET_ID);
}

function sheetCsvUrl(): string {
  return `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/export?format=csv&gid=${GOOGLE_SHEET_GID}`;
}

/* --------------------------------------------------------------- CSV read */

/** Minimal RFC4180 parser: handles quoted fields, embedded commas/newlines/quotes. */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  // Normalize line endings up front so \r\n inside/outside quotes behaves the same.
  const s = text.replace(/\r\n/g, "\n");
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (inQuotes) {
      if (c === '"') {
        if (s[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
      continue;
    }
    if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

export interface SheetRow {
  [header: string]: string;
}

export async function fetchSheetRows(): Promise<SheetRow[]> {
  if (!GOOGLE_SHEET_ID) {
    throw new Error("GOOGLE_SHEET_ID is not set. See .env.example.");
  }
  const res = await fetch(sheetCsvUrl());
  if (!res.ok) {
    throw new Error(`Sheet export returned HTTP ${res.status}. Is it shared "Anyone with the link can view"?`);
  }
  const text = await res.text();
  if (/^<!DOCTYPE html/i.test(text.trim())) {
    throw new Error(
      "Got an HTML page instead of CSV — the sheet is probably not shared publicly, or the gid is wrong.",
    );
  }
  const grid = parseCsv(text);
  if (!grid.length) return [];
  const header = grid[0]!.map((h) => h.trim());
  return grid.slice(1).map((cells) => {
    const row: SheetRow = {};
    header.forEach((h, i) => {
      row[h] = (cells[i] ?? "").trim();
    });
    return row;
  });
}

/* ---------------------------------------------------------- normalization */

const ISO_DATE_RE_G = /\b(\d{4})-(\d{2})-(\d{2})\b/g;

/**
 * The parts of a date cell that describe *this* cycle.
 *
 * People write cells like "TBA (2026 deadline was 2026-03-13)" or "Expected
 * Jan 2027 (2026 cycle: 2026-01-07)". The only ISO date in those is last
 * year's, and reading it as the current date would show a closed program as
 * if it had a real date. So: a cell that opens with TBA / Expected / Not
 * announced has no current date, and any parenthetical that talks about a
 * previous cycle ("was", "last", "ran", "2026 cycle", ...) is dropped.
 */
function currentCycleText(raw: string): string {
  const text = raw.trim();
  if (/^(tba|tbd|expected|not announced|not verified|next round|unknown)\b/i.test(text)) return "";
  // "Summer 2027 TBA (2026: on-site 2026-07-05 to 2026-07-18)": the only date
  // is the bracketed reference to last year.
  const outside = text.replace(/\([^)]*\)/g, "");
  if (/\b(tba|tbd|expected|not announced)\b/i.test(outside) && !ISO_DATE_RE_G.test(outside)) return "";
  ISO_DATE_RE_G.lastIndex = 0;
  return text.replace(
    /\(([^)]*)\)/g,
    (whole, inner: string) =>
      /\b(was|were|last|previous|prior|ran|opened|closed|cycle)\b|^\s*20\d\d\s*:/i.test(inner) ? "" : whole,
  );
}

function isoDatesIn(text: string): string[] {
  return [...text.matchAll(ISO_DATE_RE_G)].map((m) => m[0]).filter((d) => !Number.isNaN(Date.parse(d)));
}

function claim(value: string, raw: string): Claim<string> {
  // "labelled" because a human put this value under a named column on
  // purpose — the same trust level the extractor gives an explicitly
  // labelled field on a web page, never "structured" (that is reserved for
  // machine-readable markup) and a cut above "prose".
  return { value, evidence: "labelled", quote: raw.trim() };
}

/** The first current-cycle date in a cell (open dates, start dates). */
function dateClaim(raw: string): Claim<string> | null {
  const iso = isoDatesIn(currentCycleText(raw))[0];
  return iso ? claim(iso, raw) : null;
}

/**
 * A deadline cell can list several rounds ("Early: 2026-11-08; Final:
 * 2027-01-06"). The site shows one deadline, so use the next one that has not
 * passed yet — once the early round closes, the next sync moves the listing
 * on to the final round instead of showing it as closed. If every round has
 * passed, the last one is the honest closing date.
 */
function deadlineClaim(raw: string, today = new Date()): Claim<string> | null {
  const dates = isoDatesIn(currentCycleText(raw)).sort();
  if (!dates.length) return null;
  const todayIso = today.toISOString().slice(0, 10);
  return claim(dates.find((d) => d >= todayIso) ?? dates[dates.length - 1]!, raw);
}

/** "2026-08-04 to 2026-08-13" → the end date, so a finished program reads as finished. */
function endDateClaim(raw: string): Claim<string> | null {
  const m = /\b(\d{4}-\d{2}-\d{2})\s*(?:to|–|—|-|through|until)\s*(\d{4}-\d{2}-\d{2})\b/i.exec(
    currentCycleText(raw),
  );
  return m && m[2]! >= m[1]! ? claim(m[2]!, raw) : null;
}


const CATEGORY_KEYWORDS: [Program["category"], string[]][] = [
  ["STEM", ["stem", "science", "technology", "engineering", "math", "robotic", "coding", "computer", "ai", "data"]],
  ["Business", ["business", "entrepreneur", "finance", "econom", "marketing", "accounting"]],
  ["Medicine", ["medicine", "medical", "health", "biology", "nursing", "clinical"]],
  ["Law & Civics", ["law", "civics", "debate", "model un", "mun", "politic", "government", "policy"]],
  ["Leadership", ["leadership", "volunteer", "community service", "mentor", "youth council"]],
  ["Arts", ["art", "music", "design", "film", "creative", "writing", "theatre", "theater"]],
];

/** Best-effort guess only — every new listing still goes through human review. */
function normalizeCategory(raw: string): { category: Program["category"]; guessed: boolean } {
  const t = raw.toLowerCase();
  for (const [category, keywords] of CATEGORY_KEYWORDS) {
    if (keywords.some((k) => t.includes(k))) return { category, guessed: false };
  }
  return { category: "STEM", guessed: true };
}

function organizationFromLink(link: string, title: string): { organization: string; guessed: boolean } {
  if (!link) return { organization: title, guessed: true };
  try {
    return { organization: registrableDomain(link), guessed: true };
  } catch {
    return { organization: title, guessed: true };
  }
}

/**
 * The sheet has no location column at all, so this leans on whatever text
 * clues exist: a Canadian place name or "Canada" in the title/description, a
 * US state or "United States" the same way, and — only when neither is
 * present — the application link's domain. Defaults to CA, since this
 * directory is Ontario-first and the sheet has historically been all-Canadian;
 * only the uncertain cases (resolved from the domain alone) are flagged for a
 * human to double-check, the same convention as the category guess above.
 */
const CA_COUNTRY_HINTS =
  /\b(canada|canadian|ontario|toronto|ottawa|waterloo|hamilton|kingston|mississauga|brampton|windsor|london,? ontario|british columbia|alberta|qu[eé]bec|manitoba|nova scotia|saskatchewan)\b/i;
const US_COUNTRY_HINTS =
  /\b(united states|u\.s\.a?\.|\busa\b|california|new york|massachusetts|connecticut|\btexas\b|florida|illinois|pennsylvania|washington,? d\.?c\.?|virginia|georgia|michigan|\bohio\b|north carolina)\b/i;
const US_DOMAIN_HINTS = /\.(edu|us)$/i;

function countryFromRow(
  link: string,
  title: string,
  about: string,
): { country: "CA" | "US"; guessed: boolean } {
  const haystack = `${title} ${about}`;
  if (CA_COUNTRY_HINTS.test(haystack)) return { country: "CA", guessed: false };
  if (US_COUNTRY_HINTS.test(haystack)) return { country: "US", guessed: false };
  let domain = "";
  try {
    domain = link ? registrableDomain(link) : "";
  } catch {
    domain = "";
  }
  if (domain.endsWith(".ca")) return { country: "CA", guessed: false };
  if (US_DOMAIN_HINTS.test(domain)) return { country: "US", guessed: true };
  return { country: "CA", guessed: true };
}

/** Turn one sheet row into the engine's extracted shape, with no model call involved. */
export function rowToExtracted(row: SheetRow): { extracted: ExtractedProgram; notes: string[] } {
  const notes: string[] = [];
  const title = (row["Program"] ?? "").trim();
  const link = (row["Official Link"] ?? "").trim();
  const about = (row["About the Program"] ?? "").trim();
  const programType = (row["Format"] ?? "").trim(); // what KIND of opportunity — not delivery mode
  const eligibility = [row["Eligibility"], row["Additional Eligibility Requirements"]]
    .map((v) => (v ?? "").trim())
    .filter(Boolean)
    .join(" ");
  const sheetStatus = (row["Status"] ?? "").trim();

  const { category, guessed: categoryGuessed } = normalizeCategory(row["Category"] ?? "");
  if (categoryGuessed) {
    notes.push(
      `Could not confidently map the sheet's Category ("${row["Category"] ?? ""}") to one of the site's six tracks — defaulted to "${category}". Please correct.`,
    );
  }

  const { organization, guessed: orgGuessed } = organizationFromLink(link, title);
  if (orgGuessed) {
    notes.push(
      link
        ? `Organization guessed from the application link's domain ("${organization}") — the sheet has no organization column.`
        : `No application link given, so organization defaults to the program title. Please fill in.`,
    );
  }

  const { country, guessed: countryGuessed } = countryFromRow(link, title, about);
  if (countryGuessed) {
    notes.push(
      `Country guessed as "${country}" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.`,
    );
  }

  let summary = about;
  if (programType) {
    summary = summary ? `${programType}. ${summary}` : programType;
    notes.push(`Sheet's "Format" column ("${programType}") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.`);
  }

  if (sheetStatus) {
    notes.push(
      `Sheet "Status" says "${sheetStatus}". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.`,
    );
  }
  if ((row["Priority"] ?? "").trim() || (row["Planning Note"] ?? "").trim()) {
    notes.push(`Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.`);
  }

  const appOpen = dateClaim(row["Applications Open"] ?? "");
  const deadline = deadlineClaim(row["Deadline"] ?? "");
  const programDate = dateClaim(row["Program Date"] ?? "");
  const programEnd = endDateClaim(row["Program Date"] ?? "");
  if ((row["Program Date"] ?? "").trim() && !programDate) {
    notes.push(`Sheet's Program Date ("${row["Program Date"]}") isn't in a recognizable yyyy-mm-dd form and was left blank.`);
  }
  if ((row["Program Date"] ?? "").trim() && programDate && !programEnd) {
    notes.push(`Sheet gives one "Program Date"; the site tracks a separate start and end date. Used it as the start date only — add an end date on review if the program runs more than one day.`);
  }

  const extracted: ExtractedProgram = {
    title,
    organization,
    category,
    country,
    grade_levels: [],
    app_open_date: appOpen,
    app_deadline: deadline,
    program_start_date: programDate,
    program_end_date: programEnd,
    cost_type: "Unknown",
    cost_note: null,
    location_type: "Unknown",
    location_note: null,
    essay_prompts: [],
    required_documents: [],
    application_link: link || null,
    summary,
    eligibility: eligibility || null,
    rolling: /rolling|ongoing|open until full/i.test(`${sheetStatus} ${row["Deadline"] ?? ""}`),
    not_a_program: false,
    notes,
  };

  return { extracted, notes };
}

/* ------------------------------------------------------------- proposals */

/** Project a catalogue Program into the extractor's field names, for diffing. Mirrors run.mts. */
function programAsExtracted(p: Program): Record<string, unknown> {
  return {
    title: p.title,
    organization: p.org,
    category: p.category,
    country: p.country,
    grade_levels: p.grades,
    app_deadline: p.deadline ?? null,
    app_open_date: p.appOpenDate ?? null,
    program_start_date: p.programStartDate ?? null,
    program_end_date: p.programEndDate ?? null,
    cost_type: p.cost,
    location_type: p.format,
    location_note: p.location,
    application_link: p.url,
    summary: p.summary,
    eligibility: p.eligibility,
  };
}

function extractedAsComparable(e: ExtractedProgram): Record<string, unknown> {
  return {
    title: e.title,
    organization: e.organization,
    category: e.category,
    country: e.country,
    grade_levels: e.grade_levels.length ? e.grade_levels : undefined,
    app_deadline: e.app_deadline?.value ?? null,
    app_open_date: e.app_open_date?.value ?? null,
    program_start_date: e.program_start_date?.value ?? null,
    program_end_date: e.program_end_date?.value ?? null,
    cost_type: e.cost_note ?? e.cost_type,
    location_type: e.location_type,
    location_note: e.location_note ?? undefined,
    application_link: e.application_link ?? undefined,
    summary: e.summary,
    eligibility: e.eligibility ?? undefined,
  };
}

/**
 * A fixed, moderate confidence rather than a computed one: a sheet row isn't
 * scored on page health or evidence quality the way a crawl is (there is no
 * page), it's a human's direct statement. "medium" keeps it from skipping
 * review by accident while still letting non-date fields auto-apply later,
 * on a *second* sync, once a human has approved the listing once.
 */
function sheetConfidence(extracted: ExtractedProgram, linkOk: boolean | null): Confidence {
  let score = 70;
  const signals: Record<string, number> = { humanEntered: 70 };
  if (linkOk === false) {
    score -= 20;
    signals["applyLinkDead"] = -20;
  }
  score = Math.max(0, Math.min(100, score));
  const band: Confidence["band"] = score >= 78 ? "high" : score >= 55 ? "medium" : "low";
  return { score, band, siteConfidence: siteConfidenceFor(extracted), signals };
}

export async function buildProposals(rows: SheetRow[], known: Program[]): Promise<Proposal[]> {
  const proposals: Proposal[] = [];
  // A listing two sheet rows both point at would otherwise be proposed twice,
  // and the two rows would overwrite each other on every run.
  const claimed = new Set<string>();
  for (const row of rows) {
    const title = (row["Program"] ?? "").trim();
    if (!title) continue; // a blank row — nothing to propose

    const { extracted, notes } = rowToExtracted(row);
    const link = extracted.application_link;
    const linkOk = link ? await checkOne(link) : null;
    if (linkOk === false) notes.push(`The application link in the sheet did not respond — check it still works.`);

    const confidence = sheetConfidence(extracted, linkOk);
    const url = link ? canonicalUrl(link) : `sheet-row:${title}`;
    const domain = link ? registrableDomain(link) : "google-sheet";

    // The sheet has no organisation column, so the "organisation" is guessed
    // from the link's domain — and fixing a link (an aggregator swapped for
    // the official site) changes it. An identical title is the stronger
    // signal: when exactly one listing has it, that is the match.
    const sameTitle = known.filter((p) => normalizeTitle(p.title) === normalizeTitle(extracted.title));
    const match =
      sameTitle.length === 1
        ? { kind: "exact" as const, item: sameTitle[0]! }
        : findDuplicate(
            { title: extracted.title, organization: extracted.organization, url, deadline: extracted.app_deadline?.value ?? null },
            known.map((p) => ({ ...p, organization: p.org, deadline: p.deadline ?? null })),
          );
    const matchedProgram = match ? known.find((p) => p.id === (match.item as unknown as Program).id) : undefined;
    if (matchedProgram) {
      if (claimed.has(matchedProgram.id)) {
        console.log(`  sheet: "${title}" is a second row for "${matchedProgram.title}" — skipped; keep one row in the sheet.`);
        continue;
      }
      claimed.add(matchedProgram.id);
    }
    // Drop "changes" that would only make the listing worse — the sheet's
    // "Unknown" cost/format, a bare domain where the curated organisation name
    // is, a reworded title. The apply step refuses them anyway; proposing them
    // just re-fills /admin/review with the same noise every two hours. What is
    // left is real news: dates, links, categories, new text.
    const changes = matchedProgram
      ? diffFields(programAsExtracted(matchedProgram), extractedAsComparable(extracted), confidence).filter(
          (c) => !isDowngrade(toProgramField(c.field), c.before, c.after),
        )
      : [];

    const decision = decide({
      changes,
      confidence,
      isNew: !matchedProgram,
      pageGone: false,
      probableDuplicate: match?.kind === "probable",
    });
    const reasons = [...decision.reasons, "Source: Master Tracker Google Sheet."];
    if (match?.kind === "probable") {
      reasons.push(`Possible duplicate of "${matchedProgram?.title}" — ${match.reason}.`);
    }

    const fp = fingerprint({ title: extracted.title, organization: extracted.organization, url });
    extracted.notes = notes;

    proposals.push({
      id: fingerprintId(fp),
      fingerprint: fp,
      url,
      domain,
      contentHash: createHash("sha256").update(JSON.stringify(row)).digest("hex"),
      fetchedAt: new Date().toISOString(),
      extracted,
      confidence,
      ...(matchedProgram ? { matchedProgramId: matchedProgram.id } : {}),
      changes,
      disposition: decision.disposition,
      reasons,
    });
  }
  return proposals;
}
