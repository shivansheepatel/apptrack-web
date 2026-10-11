/**
 * The sink: git.
 *
 * There is no database in the hot path. A run produces two artifacts:
 *
 *   1. Edits to `src/data/programs.ts` — only the changes the gate cleared for
 *      auto-apply (never a date, never a new listing).
 *   2. `data/review-queue.json` — everything a human has to look at.
 *
 * Both land in one pull request. The PR body is the run report. A counsellor
 * with no database access and no local checkout can read the diff, see exactly
 * which deadline moved and what sentence on what page says so, and approve by
 * clicking Merge. That property is worth more here than a real-time sync.
 *
 * `/admin/review` is the friendlier front door onto the same queue file; its
 * output (`data/review-decisions.json`) is fed back through `applyDecisions`.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import type { Proposal, FieldChange } from "./types.mts";
import {
  readCatalogSource,
  writeCatalogSource,
  scanEntries,
  replaceField,
  renderEntry,
  appendEntries,
  mintId,
} from "./catalog.mts";

export const QUEUE_PATH = "data/review-queue.json";
export const DECISIONS_PATH = "data/review-decisions.json";

export interface QueueFile {
  generatedAt: string;
  runId: string;
  items: Proposal[];
}

/** Map the engine's field names onto the names `Program` actually uses. */
const FIELD_MAP: Record<string, string> = {
  organization: "org",
  app_deadline: "deadline",
  app_open_date: "appOpenDate",
  program_start_date: "programStartDate",
  program_end_date: "programEndDate",
  cost_type: "cost",
  location_type: "format",
  location_note: "location",
  application_link: "url",
  category: "category",
  summary: "summary",
  eligibility: "eligibility",
  grade_levels: "grades",
  title: "title",
};

export function toProgramField(field: string): string {
  return FIELD_MAP[field] ?? field;
}

/* ----------------------------------------------------------- auto-applying */

export interface ApplyReport {
  applied: { id: string; field: string; before: unknown; after: unknown }[];
  demoted: { id: string; field: string; why: string }[];
}

/** Write the cleared changes into programs.ts. Everything else is untouched. */
export async function applyAuto(proposals: Proposal[]): Promise<ApplyReport> {
  const report: ApplyReport = { applied: [], demoted: [] };
  let src = await readCatalogSource();

  for (const p of proposals) {
    if (p.disposition !== "auto-apply" || !p.matchedProgramId) continue;
    for (const change of p.changes) {
      if (!change.autoApplicable) continue;
      const field = toProgramField(change.field);
      if (isDowngrade(field, change.before, change.after)) continue;
      // Re-scan each time: every successful edit shifts the offsets after it.
      const span = scanEntries(src).find((s) => s.id === p.matchedProgramId);
      if (!span) {
        report.demoted.push({
          id: p.matchedProgramId,
          field,
          why: "entry not found in programs.ts",
        });
        continue;
      }
      const next = replaceField(src, span, field, change.after);
      if (next == null) {
        report.demoted.push({
          id: p.matchedProgramId,
          field,
          why: "value is multi-line; edit by hand",
        });
        continue;
      }
      src = next;
      report.applied.push({
        id: p.matchedProgramId,
        field,
        before: change.before,
        after: change.after,
      });
    }
    // Catalogue freshness is a single global date (`CHECKED` in programs.ts),
    // not a per-entry field, so there is nothing else to touch here once the
    // field edits above have landed.
  }

  if (report.applied.length) await writeCatalogSource(src);
  return report;
}

/* ------------------------------------------------------------------ queue */

export async function writeQueue(items: Proposal[], runId: string): Promise<void> {
  await mkdir("data", { recursive: true });
  const payload: QueueFile = { generatedAt: new Date().toISOString(), runId, items };
  await writeFile(QUEUE_PATH, JSON.stringify(payload, null, 2) + "\n");
}

export async function readQueue(): Promise<QueueFile> {
  try {
    return JSON.parse(await readFile(QUEUE_PATH, "utf8")) as QueueFile;
  } catch {
    return { generatedAt: new Date().toISOString(), runId: "none", items: [] };
  }
}

/* -------------------------------------------------------------- decisions */

export interface Decision {
  proposalId: string;
  action: "approve" | "reject";
  /** Reviewer edits, keyed by the engine's field names. Overrides the extraction. */
  edits?: Record<string, unknown>;
  reviewer?: string;
  decidedAt: string;
}

export interface DecisionsFile {
  decisions: Decision[];
}

/** Unwrap an extracted `{ value, quote }` date to its value; pass anything else through. */
function plain(v: unknown): unknown {
  if (v && typeof v === "object" && !Array.isArray(v) && "value" in v) {
    return (v as { value: unknown }).value ?? null;
  }
  return v === undefined ? null : v;
}

const PLACEHOLDER = /^(unknown|n\/?a|tbd|none|-)?$/i;
const isBlank = (v: unknown) =>
  v === null || v === undefined || (typeof v === "string" && PLACEHOLDER.test(v.trim()));

/**
 * A change that would make a listing worse rather than more current: blanking a
 * known value, or replacing a curated organisation name with a bare domain.
 * Sheet rows often carry "Unknown" or the link's host in those columns. The
 * reviewer approves a proposal for its dates; the placeholders should not ride
 * along and overwrite hand-written copy. An explicit reviewer edit bypasses this.
 */
function isDowngrade(field: string, before: unknown, after: unknown): boolean {
  // A listing's title is its identity: the URL, saved lists and shortlists are
  // all keyed by the slug of it. Re-wording it is never a "more current" fact.
  if (field === "title") return !isBlank(before);
  if (isBlank(before)) return false;
  if (isBlank(after)) return true;
  if (
    field === "org" &&
    typeof after === "string" &&
    /^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(after.trim())
  ) {
    return true;
  }
  return false;
}

/**
 * Apply what a human approved. Runs as its own job so the review step and the
 * crawl never race, and so an approval is always a separate, reviewable commit.
 */
export async function applyDecisions(): Promise<{
  added: string[];
  updated: string[];
  rejected: string[];
}> {
  const queue = await readQueue();
  let decisions: Decision[] = [];
  try {
    decisions =
      (JSON.parse(await readFile(DECISIONS_PATH, "utf8")) as DecisionsFile).decisions ?? [];
  } catch {
    return { added: [], updated: [], rejected: [] };
  }

  let src = await readCatalogSource();
  const taken = new Set(scanEntries(src).map((s) => s.id));
  const added: string[] = [];
  const updated: string[] = [];
  const rejected: string[] = [];
  const newEntries: string[] = [];

  for (const d of decisions) {
    const item = queue.items.find((i) => i.id === d.proposalId);
    if (!item) continue;
    if (d.action === "reject") {
      rejected.push(d.proposalId);
      continue;
    }

    const e = { ...item.extracted, ...(d.edits ?? {}) } as typeof item.extracted &
      Record<string, unknown>;

    if (item.matchedProgramId) {
      const edits = d.edits ?? {};
      // Reviewer edits are keyed by the engine's field names (app_deadline),
      // so look them up under both spellings. An edit always wins.
      const editFor = (engineField: string): { hit: boolean; value: unknown } => {
        const programField = toProgramField(engineField);
        if (engineField in edits) return { hit: true, value: edits[engineField] };
        if (programField in edits) return { hit: true, value: edits[programField] };
        return { hit: false, value: undefined };
      };
      const writes: { field: string; value: unknown }[] = [];
      const covered = new Set<string>();
      for (const change of item.changes) {
        const field = toProgramField(change.field);
        covered.add(field);
        const edit = editFor(change.field);
        if (edit.hit) {
          writes.push({ field, value: plain(edit.value) });
        } else if (!isDowngrade(field, change.before, plain(change.after))) {
          writes.push({ field, value: plain(change.after) });
        }
      }
      // Fields the reviewer corrected that the extraction never proposed.
      for (const [key, value] of Object.entries(edits)) {
        const field = toProgramField(key);
        if (!covered.has(field)) writes.push({ field, value: plain(value) });
      }
      // A reviewer who deliberately renames a listing must not change its id:
      // pin the current id first so links and saved lists keep working.
      if (writes.some((w) => w.field === "title")) {
        const span = scanEntries(src).find((s) => s.id === item.matchedProgramId);
        if (span && !/\bid:\s*["'`]/.test(span.source)) {
          const next = replaceField(src, span, "id", item.matchedProgramId);
          if (next) src = next;
        }
      }
      for (const w of writes) {
        const span = scanEntries(src).find((s) => s.id === item.matchedProgramId);
        if (!span) break;
        const next = replaceField(src, span, w.field, w.value);
        if (next) src = next;
      }
      if (!updated.includes(item.matchedProgramId)) updated.push(item.matchedProgramId);
      continue;
    }

    const id = mintId(e.title, e.organization, taken);
    taken.add(id);
    newEntries.push(
      renderEntry({
        id,
        title: e.title,
        org: e.organization,
        category: e.category,
        country: e.country ?? "CA",
        grades: e.grade_levels.length ? e.grade_levels : [9, 10, 11, 12],
        cost: e.cost_note ?? e.cost_type,
        format: e.location_type,
        location: e.location_note ?? "",
        // A reviewer edit replaces the extracted { value, quote } with a bare
        // string, so read either shape.
        deadline: plain(e.app_deadline),
        appOpenDate: plain(e.app_open_date),
        programStartDate: plain(e.program_start_date),
        programEndDate: plain(e.program_end_date),
        confidence: item.confidence.siteConfidence,
        url: e.application_link ?? item.url,
        sourceUrl: item.url,
        summary: e.summary,
        // The extraction schema has no separate long-form field, so the
        // hand-authored `description` starts as a copy of the summary; a
        // reviewer can always expand it by hand later.
        description: e.summary,
        eligibility: e.eligibility ?? "",
      }),
    );
    added.push(id);
  }

  if (newEntries.length) src = appendEntries(src, newEntries);
  if (added.length || updated.length) await writeCatalogSource(src);

  // Consume the decisions so the next run does not replay them.
  await writeFile(DECISIONS_PATH, JSON.stringify({ decisions: [] }, null, 2) + "\n");
  return { added, updated, rejected };
}

/* ------------------------------------------------------------- the report */

function describeChange(c: FieldChange): string {
  const fmt = (v: unknown) =>
    v === null || v === "" ? "_(none)_" : "`" + String(v).slice(0, 80) + "`";
  return `${c.field}: ${fmt(c.before)} → ${fmt(c.after)}`;
}

export function prBody(args: {
  runId: string;
  proposals: Proposal[];
  apply: ApplyReport;
  crawled: number;
  llmCalls: number;
  costUsd: number;
  discoveryLog: string[];
  deadLinks: { url: string; status: number | null }[];
}): string {
  const byDisp = (d: Proposal["disposition"]) => args.proposals.filter((p) => p.disposition === d);
  const review = byDisp("needs-review");
  const archive = byDisp("archive");
  const L: string[] = [];

  L.push(`## Data engine run \`${args.runId}\``, "");
  L.push(
    `Crawled **${args.crawled}** pages · **${args.llmCalls}** model calls · ~**$${args.costUsd.toFixed(2)}** · ` +
      `**${args.apply.applied.length}** auto-applied · **${review.length}** need review · ` +
      `**${archive.length}** to archive`,
    "",
  );

  L.push("### Dates in this PR", "");
  L.push(
    "No date in this diff was written by the pipeline. Every date change is in the review queue below,",
    "with the sentence from the source page that supports it. That is by design — see `docs/DATA-PIPELINE.md`.",
    "",
  );

  if (args.apply.applied.length) {
    L.push("### Auto-applied (non-date fields, high confidence)", "");
    for (const a of args.apply.applied) {
      L.push(
        `- \`${a.id}\` — ${a.field}: \`${String(a.before).slice(0, 60)}\` → \`${String(a.after).slice(0, 60)}\``,
      );
    }
    L.push("");
  }

  if (review.length) {
    L.push("### Needs review", "", "Open `/admin/review` locally, or read them here:", "");
    for (const p of review.slice(0, 40)) {
      L.push(
        `<details><summary><strong>${p.extracted.title}</strong> — ${p.extracted.organization} (${p.confidence.score}/100)</summary>`,
        "",
      );
      L.push(`Source: ${p.url}`, "");
      for (const r of p.reasons) L.push(`- ${r}`);
      if (p.changes.length) {
        L.push("", "| field | change |", "| --- | --- |");
        for (const c of p.changes) L.push(`| ${c.field} | ${describeChange(c)} |`);
      }
      const quotes = (
        ["app_open_date", "app_deadline", "program_start_date", "program_end_date"] as const
      )
        .map((f) => [f, p.extracted[f]] as const)
        .filter(([, c]) => c != null);
      if (quotes.length) {
        L.push("", "Evidence:");
        for (const [f, c] of quotes)
          L.push(`- **${f}** = \`${c!.value}\` (${c!.evidence}) — “${c!.quote.slice(0, 180)}”`);
      }
      if (p.extracted.notes.length) {
        L.push("", "Extractor notes:");
        for (const n of p.extracted.notes) L.push(`- ${n}`);
      }
      L.push("", "</details>", "");
    }
    if (review.length > 40)
      L.push(`_…and ${review.length - 40} more in \`data/review-queue.json\`._`, "");
  }

  if (archive.length) {
    L.push("### Proposed for archive", "");
    for (const p of archive) L.push(`- ${p.extracted.title || p.url} — ${p.reasons.join(" ")}`);
    L.push("");
  }

  if (args.deadLinks.length) {
    L.push("### Link health", "");
    for (const d of args.deadLinks) L.push(`- ${d.url} — ${d.status ?? "no response"}`);
    L.push("");
  }

  L.push(
    "<details><summary>Discovery log</summary>",
    "",
    "```",
    ...args.discoveryLog,
    "```",
    "",
    "</details>",
  );
  return L.join("\n");
}
