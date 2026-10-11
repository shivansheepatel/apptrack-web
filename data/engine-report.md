## Data engine run `2026-10-11-ab96e5ab`

Crawled **96** pages · **0** model calls · ~**$0.00** · **0** auto-applied · **8** need review · **0** to archive

### Dates in this PR

No date in this diff was written by the pipeline. Every date change is in the review queue below,
with the sentence from the source page that supports it. That is by design — see `docs/DATA-PIPELINE.md`.

### Needs review

Open `/admin/review` locally, or read them here:

<details><summary><strong>Prosper Ontario</strong> — prosperontario.org (70/100)</summary>

Source: https://prosperontario.org/

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Prosper Ontario Case Competition" — title 100% similar, same domain.

Extractor notes:
- Organization guessed from the application link's domain ("prosperontario.org") — the sheet has no organization column.
- Sheet's "Format" column ("Business case competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Spring 2027 expected") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Schulich Business Excellence Academy</strong> — yorku.ca (70/100)</summary>

Source: https://schulich.yorku.ca/future-students/business-excellence-academy

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Schulich Summer Business Academy" — title 100% similar, same domain.

Extractor notes:
- Organization guessed from the application link's domain ("yorku.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Business academy + case competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Ivey John F. Wood Summer Leadership Program</strong> — uwo.ca (70/100)</summary>

Source: https://ivey.uwo.ca/summerleadership

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Ivey Summer Leadership Program" — title 100% similar, same domain.

Extractor notes:
- Organization guessed from the application link's domain ("uwo.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Residential leadership/business program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027 (TBA)") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>SPRINT — Summer Psychology Research Initiative</strong> — google.com (70/100)</summary>

Source: https://sites.google.com/view/uoftsprint

- Changes needing review: category.
- Confidence 70/100.
- Source: Master Tracker Google Sheet.

| field | change |
| --- | --- |
| category | category: `Medicine` → `STEM` |

Extractor notes:
- Organization guessed from the application link's domain ("google.com") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Psychology research program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Late Jul 2027 (2026 ran Jul 20-31), U of T St. George; expanding to UTSC") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Stanford SUMaC</strong> — stanford.edu (70/100)</summary>

Source: https://sumac.spcs.stanford.edu/sumac-admissions

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Stanford University Mathematics Camp (SUMaC)" — title 100% similar, same domain.

Extractor notes:
- Organization guessed from the application link's domain ("stanford.edu") — the sheet has no organization column.
- Country guessed as "US" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Advanced mathematics camp") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>EnergyMag internships</strong> — energymag.net (70/100)</summary>

Source: https://energymag.net/internships

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "EnergyMag Internship Directory" — title 76% similar, same domain.

Extractor notes:
- Could not confidently map the sheet's Category ("Jobs / Remote") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("energymag.net") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Internship directory") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Needs verification". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Varies") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>DECA Ontario High School Program</strong> — deca.ca (70/100)</summary>

Source: https://deca.ca/

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "DECA Ontario Provincials" — title 100% similar, same domain, identical deadline.

Evidence:
- **app_deadline** = `2026-12-07` (labelled) — “2026-12-07 (Provincials registration/payment)”
- **program_start_date** = `2027-02-04` (labelled) — “Regionals Nov 8-22, 2026; Provincials 2027-02-04 to 2027-02-06 (Sheraton, Toronto)”
- **program_end_date** = `2027-02-06` (labelled) — “Regionals Nov 8-22, 2026; Provincials 2027-02-04 to 2027-02-06 (Sheraton, Toronto)”

Extractor notes:
- Organization guessed from the application link's domain ("deca.ca") — the sheet has no organization column.
- Sheet's "Format" column ("School club + competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Annual". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.

</details>

<details><summary><strong>Duke of Edinburgh’s International Award Canada</strong> — dukeofed.org (70/100)</summary>

Source: https://dukeofed.org/

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Duke of Edinburgh's International Award" — title 100% similar, same domain.

Extractor notes:
- Organization guessed from the application link's domain ("dukeofed.org") — the sheet has no organization column.
- Sheet's "Format" column ("Long-term award program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Open". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Ongoing") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary>Discovery log</summary>

```
Google Sheet sync: 96 row(s) read, no model calls.
```

</details>