## Data engine run `2026-10-11-d886307e`

Crawled **95** pages · **0** model calls · ~**$0.00** · **0** auto-applied · **50** need review · **0** to archive

### Dates in this PR

No date in this diff was written by the pipeline. Every date change is in the review queue below,
with the sentence from the source page that supports it. That is by design — see `docs/DATA-PIPELINE.md`.

### Needs review

Open `/admin/review` locally, or read them here:

<details><summary><strong>CAIMUN 2027 Delegate Registration</strong> — caimun.ca (70/100)</summary>

Source: https://caimun.ca/registration

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Evidence:
- **app_open_date** = `2026-03-09` (labelled) — “2026-03-09”
- **app_deadline** = `2027-02-04` (labelled) — “2027-02-04”
- **program_start_date** = `2027-03-05` (labelled) — “2027-03-05 to 2027-03-07”

Extractor notes:
- Organization guessed from the application link's domain ("caimun.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Model UN conference") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Open". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet gives one "Program Date"; the site tracks a separate start and end date. Used it as the start date only — add an end date on review if the program runs more than one day.

</details>

<details><summary><strong>Kitchener Youth Action Council (KYAC)</strong> — kitchener.ca (70/100)</summary>

Source: https://kitchener.ca/council-and-city-administration/civic-engagement/leadership-development/kitchener-youth-action-council

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Kitchener Youth Action Council (KYAC)" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `City of Kitchener` → `kitchener.ca` |
| cost_type | cost_type: `Free` → `Unknown` |
| location_type | location_type: `Youth advisory council` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("kitchener.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Youth advisory council") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Closed". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2026-2027 cohort") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Kitchener Youth Crew</strong> — kitchener.ca (70/100)</summary>

Source: https://kitchener.ca/council-and-city-administration/civic-engagement/leadership-development/kitchener-youth-crew

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Kitchener Youth Crew" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `City of Kitchener` → `kitchener.ca` |
| cost_type | cost_type: `Free` → `Unknown` |
| location_type | location_type: `Volunteer leadership placement` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("kitchener.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Volunteer leadership") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Open". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2026") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Kitchener BYLD</strong> — kitchener.ca (70/100)</summary>

Source: https://kitchener.ca/recreation-and-sports/children-and-youth-programs/summer-programs/byld-program

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Kitchener BYLD Program" — title 100% similar, same domain.

| field | change |
| --- | --- |
| title | title: `Kitchener BYLD Program` → `Kitchener BYLD` |
| organization | organization: `City of Kitchener` → `kitchener.ca` |
| cost_type | cost_type: `Registration fee — check the current City of Kitchener program listing` → `Unknown` |
| location_type | location_type: `Leadership training and placement` → `Unknown` |

Evidence:
- **program_start_date** = `2026-10-21` (labelled) — “2026-10-21 to 2026-12-02”

Extractor notes:
- Organization guessed from the application link's domain ("kitchener.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Leadership training + placement") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Upcoming". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet gives one "Program Date"; the site tracks a separate start and end date. Used it as the start date only — add an end date on review if the program runs more than one day.

</details>

<details><summary><strong>JA Company Program</strong> — jacanada.org (70/100)</summary>

Source: https://jacanada.org/program/company-program

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("jacanada.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Entrepreneurship program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Check local intake". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("School-year program") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Prosper Ontario</strong> — prosperontario.org (70/100)</summary>

Source: https://prosperontario.org/

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Prosper Ontario Case Competition" — title 100% similar, same domain.

| field | change |
| --- | --- |
| title | title: `Prosper Ontario Case Competition` → `Prosper Ontario` |
| organization | organization: `Prosper Ontario` → `prosperontario.org` |
| cost_type | cost_type: `Registration fee — early registration is cheaper` → `Unknown` |
| location_type | location_type: `Business case competition` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("prosperontario.org") — the sheet has no organization column.
- Sheet's "Format" column ("Business case competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Spring 2027 expected") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Prosper Ontario Executive Team</strong> — prosperontario.org (70/100)</summary>

Source: https://prosperontario.org/faq

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Prosper Ontario Executive Team" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `Prosper Ontario` → `prosperontario.org` |
| cost_type | cost_type: `Free` → `Unknown` |
| location_type | location_type: `Student executive role` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("prosperontario.org") — the sheet has no organization column.
- Sheet's "Format" column ("Student executive role") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2027 cycle") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Wharton Global High School Investment Competition</strong> — upenn.edu (70/100)</summary>

Source: https://globalyouth.wharton.upenn.edu/competitions/investment-competition

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Wharton Global High School Investment Competition" — title 100% similar, same domain, identical deadline.

| field | change |
| --- | --- |
| organization | organization: `The Wharton School, University of Pennsylvania` → `upenn.edu` |
| cost_type | cost_type: `Free to enter` → `Unknown` |
| location_type | location_type: `Online team investment competition` → `Unknown` |

Evidence:
- **app_open_date** = `2026-08-10` (labelled) — “2026-08-10”
- **app_deadline** = `2026-09-11` (labelled) — “2026-09-11 5:00 p.m. ET”
- **program_start_date** = `2026-09-28` (labelled) — “Competition: 2026-09-28 to 2026-12-04; Global Finale: 2027-04-29 to 2027-04-30”

Extractor notes:
- Organization guessed from the application link's domain ("upenn.edu") — the sheet has no organization column.
- Country guessed as "US" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Investment competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Closed". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet gives one "Program Date"; the site tracks a separate start and end date. Used it as the start date only — add an end date on review if the program runs more than one day.

</details>

<details><summary><strong>Schulich Business Excellence Academy</strong> — yorku.ca (70/100)</summary>

Source: https://schulich.yorku.ca/future-students/business-excellence-academy

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Schulich Summer Business Academy" — title 100% similar, same domain.

| field | change |
| --- | --- |
| title | title: `Schulich Summer Business Academy` → `Schulich Business Excellence Academy` |
| organization | organization: `Schulich School of Business, York University` → `yorku.ca` |
| cost_type | cost_type: `Program fee; some subsidised seats` → `Unknown` |
| location_type | location_type: `In person` → `Unknown` |

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

| field | change |
| --- | --- |
| title | title: `Ivey Summer Leadership Program` → `Ivey John F. Wood Summer Leadership Program` |
| organization | organization: `Ivey Business School, Western University` → `uwo.ca` |
| cost_type | cost_type: `Program fee with residence; bursaries available` → `Unknown` |
| location_type | location_type: `In person, residential` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("uwo.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Residential leadership/business program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Coming soon") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Ontario High School Model Parliament</strong> — ola.org (70/100)</summary>

Source: https://ola.org/en/visit-learn/programs/model-parliament-high-school-students

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Ontario High School Model Parliament" — title 100% similar, same domain, identical deadline.

| field | change |
| --- | --- |
| organization | organization: `Ontario Legislative Assembly partners` → `ola.org` |
| cost_type | cost_type: `Delegate fee; subsidies available` → `Unknown` |
| location_type | location_type: `In person` → `Unknown` |

Evidence:
- **app_deadline** = `2026-10-04` (labelled) — “2026-10-04”
- **program_start_date** = `2026-11-05` (labelled) — “Virtual starts 2026-11-05; Toronto 2027-02-24 to 2027-02-26”

Extractor notes:
- Organization guessed from the application link's domain ("ola.org") — the sheet has no organization column.
- Sheet's "Format" column ("Three-day provincial parliament simulation") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Open". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet gives one "Program Date"; the site tracks a separate start and end date. Used it as the start date only — add an end date on review if the program runs more than one day.

</details>

<details><summary><strong>Forum for Young Canadians</strong> — forum.ca (70/100)</summary>

Source: https://forum.ca/forum-for-young-canadians-national-summit

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Forum for Young Canadians" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `Foundation for the Study of Processes of Government in Canada` → `forum.ca` |
| cost_type | cost_type: `Program fee; substantial bursaries available` → `Unknown` |
| location_type | location_type: `In person, residential` → `Unknown` |

Evidence:
- **program_start_date** = `2027-02-07` (labelled) — “2027-02-07 to 2027-02-12; 2027-02-28 to 2027-03-05; 2027-04-18 to 2027-04-23”

Extractor notes:
- Organization guessed from the application link's domain ("forum.ca") — the sheet has no organization column.
- Sheet's "Format" column ("National civic leadership summit") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Open". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet gives one "Program Date"; the site tracks a separate start and end date. Used it as the start date only — add an end date on review if the program runs more than one day.

</details>

<details><summary><strong>AKFC Youth Leadership Academy</strong> — akfc.ca (70/100)</summary>

Source: https://akfc.ca/get-involved/youth-leadership-academy

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "AKFC Youth Leadership Academy" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `Aga Khan Foundation Canada` → `akfc.ca` |
| cost_type | cost_type: `Fully funded` → `Unknown` |
| location_type | location_type: `Residential leadership academy` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("akfc.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Fully funded leadership academy") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2027 not yet announced") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>AKFC Youth Advisory Committee</strong> — akfc.ca (50/100)</summary>

Source: https://akfc.ca/yac-recruitment

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "AKFC Youth Advisory Committee" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `Aga Khan Foundation Canada` → `akfc.ca` |
| cost_type | cost_type: `Stipended` → `Unknown` |
| location_type | location_type: `Youth advisory role` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("akfc.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Paid/stipended youth advisory role") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2027 term") isn't in a recognizable yyyy-mm-dd form and was left blank.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>Sunnybrook Focused Ultrasound High School Summer Research</strong> — sunnybrook.ca (70/100)</summary>

Source: https://research.sunnybrook.ca/careers-and-students/summer-students/focused-ultrasound-high-school-summer-research-program

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Sunnybrook Focused Ultrasound Summer Research" — title 100% similar, same domain.

| field | change |
| --- | --- |
| title | title: `Sunnybrook Focused Ultrasound Summer Research` → `Sunnybrook Focused Ultrasound High School Summer Research` |
| organization | organization: `Sunnybrook Research Institute` → `sunnybrook.ca` |
| cost_type | cost_type: `Paid placement` → `Unknown` |
| location_type | location_type: `Paid research internship` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("sunnybrook.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Paid biomedical research internship") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Youreka Canada Student Investigator</strong> — yourekacanada.org (70/100)</summary>

Source: https://yourekacanada.org/apply

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Youreka Canada Student Investigator Program" — title 100% similar, same domain.

| field | change |
| --- | --- |
| title | title: `Youreka Canada Student Investigator Program` → `Youreka Canada Student Investigator` |
| organization | organization: `Youreka Canada` → `yourekacanada.org` |
| cost_type | cost_type: `Not listed — check the official page` → `Unknown` |
| location_type | location_type: `Online research mentorship` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("yourekacanada.org") — the sheet has no organization column.
- Sheet's "Format" column ("Research mentorship program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Opening soon". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2026-27") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Emily Stowe Scholars Program</strong> — womensacademics.ca (70/100)</summary>

Source: https://womensacademics.ca/learning/emily-stowe-scholars-program

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Emily Stowe Scholars Program" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `Canadian Association for Women in Academia` → `womensacademics.ca` |
| cost_type | cost_type: `Not listed — check the official page` → `Unknown` |
| location_type | location_type: `Mentorship and enrichment program` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("womensacademics.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Health/medicine leadership program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("TBA") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>University of Toronto Physics Summer Camp</strong> — utoronto.ca (70/100)</summary>

Source: https://summercamp.physics.utoronto.ca/

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "University of Toronto Physics Summer Camp" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `Department of Physics, University of Toronto` → `utoronto.ca` |
| cost_type | cost_type: `About $300 — verify the current fee` → `Unknown` |
| location_type | location_type: `In-person day camp` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("utoronto.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Physics summer camp") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>SPRINT Psychology Research Program</strong> — SPRINT Psychology Research Program (70/100)</summary>

Source: sheet-row:SPRINT Psychology Research Program

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- No application link given, so organization defaults to the program title. Please fill in.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Psychology research program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2027 cycle") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Stanford SUMaC</strong> — stanford.edu (70/100)</summary>

Source: https://sumac.spcs.stanford.edu/sumac-admissions

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Stanford University Mathematics Camp (SUMaC)" — title 100% similar, same domain.

| field | change |
| --- | --- |
| title | title: `Stanford University Mathematics Camp (SUMaC)` → `Stanford SUMaC` |
| organization | organization: `Stanford Pre-Collegiate Studies` → `stanford.edu` |
| cost_type | cost_type: `Paid, with financial aid available — verify current fees` → `Unknown` |
| location_type | location_type: `Residential or online mathematics camp` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("stanford.edu") — the sheet has no organization column.
- Country guessed as "US" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Advanced mathematics camp") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Youth Science Canada Regional Fair</strong> — youthscience.ca (70/100)</summary>

Source: https://youthscience.ca/science-fairs/regional-fairs

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Canada-Wide Science Fair" — title 75% similar, same domain.

| field | change |
| --- | --- |
| title | title: `Canada-Wide Science Fair` → `Youth Science Canada Regional Fair` |
| organization | organization: `Youth Science Canada` → `youthscience.ca` |
| cost_type | cost_type: `Free for finalists; regional fair entry may have a small fee` → `Unknown` |
| location_type | location_type: `In person` → `Unknown` |
| summary | summary: `National science fair. The Canada-Wide Science Fair (CWSF) is the pinnacle of yo` → `Science fair pathway. A science-fair pathway where students design an independen` |
| eligibility | eligibility: `The CWSF showcases the talents of students from grades 7 through 12, winners of ` → `Students; regional fair rules vary Students must enter through their local or re` |

Extractor notes:
- Organization guessed from the application link's domain ("youthscience.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Science fair pathway") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2026-27 fair season") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>RBC Summer Tech Labs</strong> — rbc.com (70/100)</summary>

Source: https://jobs.rbc.com/ca/en

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "RBC Summer Tech Labs" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `RBC (Royal Bank of Canada)` → `rbc.com` |
| cost_type | cost_type: `Paid internship` → `Unknown` |
| location_type | location_type: `Paid technology internship` → `Unknown` |

Extractor notes:
- Could not confidently map the sheet's Category ("Jobs / Tech") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("rbc.com") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Paid technology internship") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>EnergyMag internships</strong> — energymag.net (70/100)</summary>

Source: https://energymag.net/internships

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "EnergyMag Internship Directory" — title 76% similar, same domain.

| field | change |
| --- | --- |
| title | title: `EnergyMag Internship Directory` → `EnergyMag internships` |
| organization | organization: `EnergyMag` → `energymag.net` |
| cost_type | cost_type: `Varies by listing` → `Unknown` |
| location_type | location_type: `Internship directory` → `Unknown` |

Extractor notes:
- Could not confidently map the sheet's Category ("Jobs / Remote") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("energymag.net") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Internship directory") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Directory". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Varies") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Yale Young Global Scholars</strong> — yale.edu (70/100)</summary>

Source: https://globalscholars.yale.edu/

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Yale Young Global Scholars" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `Yale University` → `yale.edu` |
| app_deadline | app_deadline: `2027-01-06` → `2026-10-15` |
| app_open_date | app_open_date: _(none)_ → `2026-09-16` |
| cost_type | cost_type: `Paid, with substantial need-based financial aid` → `Unknown` |
| location_type | location_type: `Residential academic program` → `Unknown` |

Evidence:
- **app_open_date** = `2026-09-16` (labelled) — “2026-09-16”
- **app_deadline** = `2026-10-15` (labelled) — “Early Action: 2026-10-15 11:59 p.m. ET; Regular: 2027-01-06 11:59 p.m. ET”

Extractor notes:
- Organization guessed from the application link's domain ("yale.edu") — the sheet has no organization column.
- Country guessed as "US" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Academic summer program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Open". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Immerse Education - Waterloo programs</strong> — immerse.education (70/100)</summary>

Source: https://immerse.education/study-abroad/canada/university-of-waterloo-summer-programs-high-school-students

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Immerse Education — Waterloo Summer Programs" — title 100% similar, same domain.

| field | change |
| --- | --- |
| title | title: `Immerse Education — Waterloo Summer Programs` → `Immerse Education - Waterloo programs` |
| organization | organization: `Immerse Education (commercial provider)` → `immerse.education` |
| cost_type | cost_type: `Paid commercial program — review the cost against the value carefully` → `Unknown` |
| location_type | location_type: `Paid academic summer program` → `Unknown` |

Extractor notes:
- Could not confidently map the sheet's Category ("Global / Academic") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("immerse.education") — the sheet has no organization column.
- Sheet's "Format" column ("Paid academic summer program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Open / rolling". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Kitchener Parks Youth Engagement Committee</strong> — kitchener.ca (70/100)</summary>

Source: https://kitchener.ca/council-and-city-administration/civic-engagement/leadership-development/parks-youth-engagement-committee

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Kitchener Parks Youth Engagement Committee" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `City of Kitchener` → `kitchener.ca` |
| cost_type | cost_type: `Free` → `Unknown` |
| location_type | location_type: `Youth advisory committee` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("kitchener.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Youth city-planning advisory committee") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2027 cohort") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>AKFC Youth Advisory Committee</strong> — akfc.ca (70/100)</summary>

Source: https://akfc.ca/yac-recruitment

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "AKFC Youth Advisory Committee" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `Aga Khan Foundation Canada` → `akfc.ca` |
| cost_type | cost_type: `Stipended` → `Unknown` |
| location_type | location_type: `Youth advisory role` → `Unknown` |
| summary | summary: `Paid/stipended youth advisory role. The YAC focuses on its members’ diverse skil` → `Youth advisory + stipend. A youth advisory role where members help shape program` |
| eligibility | eligibility: `Be based in Canada and able to commit up to 4 hours per month for a one-year ter` → `Ages 16-21 Must be based in Canada, age 16-21, and able to commit about four hou` |

Extractor notes:
- Organization guessed from the application link's domain ("akfc.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Youth advisory + stipend") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2027 term") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Canada-Wide Science Fair</strong> — youthscience.ca (70/100)</summary>

Source: https://youthscience.ca/science-fairs/cwsf

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Canada-Wide Science Fair" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `Youth Science Canada` → `youthscience.ca` |
| cost_type | cost_type: `Free for finalists; regional fair entry may have a small fee` → `Unknown` |
| location_type | location_type: `In person` → `Unknown` |
| application_link | application_link: `https://youthscience.ca/science-fairs/regional-fairs/` → `https://youthscience.ca/science-fairs/cwsf/` |

Extractor notes:
- Organization guessed from the application link's domain ("youthscience.ca") — the sheet has no organization column.
- Sheet's "Format" column ("National science fair") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Annual". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("May 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Canadian Biology Olympiad</strong> — usabo-trc.org (50/100)</summary>

Source: https://usabo-trc.org/canadian-biology-olympiad

- New listing (confidence 50/100, low).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("usabo-trc.org") — the sheet has no organization column.
- Sheet's "Format" column ("Exam / olympiad") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Spring/summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>Career Edge NYU Summer High School Program</strong> — nyu.edu (70/100)</summary>

Source: https://sps.nyu.edu/high-school-academy/programs/career-edge.html

- Changes needing review: country.
- Confidence 70/100.
- Source: Master Tracker Google Sheet.

| field | change |
| --- | --- |
| country | country: `CA` → `US` |

Extractor notes:
- Organization guessed from the application link's domain ("nyu.edu") — the sheet has no organization column.
- Country guessed as "US" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("In-person") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2027 dates TBA") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>City of Kitchener Summer Student Jobs</strong> — kitchener.ca (50/100)</summary>

Source: https://kitchener.ca/council-and-city-administration/jobs-and-volunteering/find-a-job

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "City of Kitchener Summer Student Jobs" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `City of Kitchener` → `kitchener.ca` |
| cost_type | cost_type: `Paid` → `Unknown` |
| location_type | location_type: `Paid summer employment` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("kitchener.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Paid summer employment") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>City of Waterloo Student Jobs</strong> — waterloo.ca (50/100)</summary>

Source: https://waterloo.ca/en/government/jobs.aspx

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "City of Waterloo Student Jobs" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `City of Waterloo` → `waterloo.ca` |
| cost_type | cost_type: `Paid` → `Unknown` |
| location_type | location_type: `Paid summer employment` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("waterloo.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Paid summer employment") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>COSMOS</strong> — ucsd.edu (70/100)</summary>

Source: https://summer.ucsd.edu/program-finder/index.html

- Changes needing review: country.
- Confidence 70/100.
- Source: Master Tracker Google Sheet.

| field | change |
| --- | --- |
| country | country: `CA` → `US` |

Extractor notes:
- Could not confidently map the sheet's Category ("General") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("ucsd.edu") — the sheet has no organization column.
- Country guessed as "US" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Residential") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet's Program Date ("2026 (four-week program)") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>CyberTitan National Youth Cyber Defence Competition</strong> — cybertitan.ca (50/100)</summary>

Source: https://cybertitan.ca/

- New listing (confidence 50/100, low).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Could not confidently map the sheet's Category ("Cybersecurity") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("cybertitan.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Team competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2026-2027 competition season") isn't in a recognizable yyyy-mm-dd form and was left blank.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>DECA Ontario High School Program</strong> — deca.ca (70/100)</summary>

Source: https://deca.ca/

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "DECA Ontario Provincials" — title 100% similar, same domain.

| field | change |
| --- | --- |
| title | title: `DECA Ontario Provincials` → `DECA Ontario High School Program` |
| organization | organization: `DECA Ontario` → `deca.ca` |
| cost_type | cost_type: `Chapter membership plus conference fees` → `Unknown` |
| location_type | location_type: `In person conference` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("deca.ca") — the sheet has no organization column.
- Sheet's "Format" column ("School club + competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Annual". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2026-2027 season") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>DMZ Basecamp</strong> — torontomu.ca (70/100)</summary>

Source: https://dmz.torontomu.ca/basecamp

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "DMZ Basecamp" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `DMZ, Toronto Metropolitan University` → `torontomu.ca` |
| cost_type | cost_type: `Not listed — confirm whether the next cohort is free` → `Unknown` |
| location_type | location_type: `Entrepreneurship bootcamp` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("torontomu.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Entrepreneurship bootcamp") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Duke of Edinburgh’s International Award Canada</strong> — dukeofed.org (70/100)</summary>

Source: https://dukeofed.org/

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Duke of Edinburgh's International Award" — title 100% similar, same domain.

| field | change |
| --- | --- |
| title | title: `Duke of Edinburgh's International Award` → `Duke of Edinburgh’s International Award Canada` |
| organization | organization: `The Duke of Edinburgh's International Award — Canada` → `dukeofed.org` |
| cost_type | cost_type: `Registration fee, often covered by schools` → `Unknown` |
| location_type | location_type: `Self-directed` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("dukeofed.org") — the sheet has no organization column.
- Sheet's "Format" column ("Long-term award program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Open". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Ongoing") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Euclid Mathematics Contest</strong> — uwaterloo.ca (70/100)</summary>

Source: https://cemc.uwaterloo.ca/contests/euclid

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Euclid Mathematics Contest" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `CEMC, University of Waterloo` → `uwaterloo.ca` |
| cost_type | cost_type: `Registration fee set by your school` → `Unknown` |
| location_type | location_type: `Written at your school` → `Unknown` |

Evidence:
- **program_start_date** = `2027-04-06` (labelled) — “2027-04-06 (North/South America); 2027-04-07 (outside North/South America)”

Extractor notes:
- Organization guessed from the application link's domain ("uwaterloo.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Math contest") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Annual". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet gives one "Program Date"; the site tracks a separate start and end date. Used it as the start date only — add an end date on review if the program runs more than one day.

</details>

<details><summary><strong>FIRST Tech Challenge</strong> — firstinspires.org (70/100)</summary>

Source: https://firstinspires.org/robotics/ftc

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "FIRST Tech Challenge" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `FIRST Robotics Canada` → `firstinspires.org` |
| cost_type | cost_type: `Team registration fees and equipment costs apply` → `Unknown` |
| location_type | location_type: `Team robotics competition` → `Unknown` |

Extractor notes:
- Organization guessed from the application link's domain ("firstinspires.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Team competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Annual". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2026-2027 season") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>HACU National Internship Program (HNIP)</strong> — neiu.edu (70/100)</summary>

Source: https://neiu.edu/academics/our-centers-and-programs/student-center-science-engagement/opportunities-stem/stem-researchinternship-opportunities

- Changes needing review: country.
- Confidence 70/100.
- Source: Master Tracker Google Sheet.

| field | change |
| --- | --- |
| country | country: `CA` → `US` |

Extractor notes:
- Organization guessed from the application link's domain ("neiu.edu") — the sheet has no organization column.

</details>

_…and 10 more in `data/review-queue.json`._

<details><summary>Discovery log</summary>

```
Google Sheet sync: 95 row(s) read, no model calls.
```

</details>