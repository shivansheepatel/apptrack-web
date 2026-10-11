## Data engine run `2026-10-11-20760806`

Crawled **95** pages · **0** model calls · ~**$0.00** · **0** auto-applied · **95** need review · **0** to archive

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

<details><summary><strong>Canada Speak & Debate Competition</strong> — Canada Speak & Debate Competition (70/100)</summary>

Source: sheet-row:Canada Speak & Debate Competition

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- No application link given, so organization defaults to the program title. Please fill in.
- Sheet's "Format" column ("Speech/debate competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Needs verification". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Not verified") isn't in a recognizable yyyy-mm-dd form and was left blank.

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
| summary | summary: `City advisory council where Kitchener youth shape initiatives and advise council` → `Youth advisory council. The Kitchener Youth Action Council (KYAC) is for young p` |
| eligibility | eligibility: `Ages 14–24 who live, attend school, work or take part in recreation in Kitchener` → `KYAC members must: be between 14 and 24 years old live, play or attend school in` |

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
| summary | summary: `Volunteer at city youth drop-ins and community activities while earning service ` → `Volunteer leadership. The Kitchener Youth Crew gives kids aged 12 to 17 a chance` |
| eligibility | eligibility: `Ages 12–17, able to attend the assigned Kitchener location. A parent or guardian` → `kids aged 12 to 17 Must fall within the listed age range and be able to attend t` |

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
| program_start_date | program_start_date: _(none)_ → `2026-10-21` |
| cost_type | cost_type: `Registration fee — check the current City of Kitchener program listing` → `Unknown` |
| location_type | location_type: `Leadership training and placement` → `Unknown` |
| summary | summary: `Leadership training plus an optional recreation placement that earns volunteer h` → `Leadership training + placement. The City of Kitchener’s Building Youth Leadersh` |
| eligibility | eligibility: `Ages 12–15. Kitchener residents normally get earlier registration access. Placem` → `Ages 12-15 Age-limited program. Kitchener residents normally receive earlier reg` |

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
| summary | summary: `Student-run business case competition where teams present recommendations to jud` → `Business case competition. Prosper is Canada's largest high school student organ` |
| eligibility | eligibility: `High-school teams, usually up to five students, often with a teacher advisor. Co` → `High-school teams, usually up to 5 Typically requires a high-school team and may` |

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
| summary | summary: `Student leadership role organising the competition — operations, marketing, outr` → `Student executive role. A student leadership role helping organize the competiti` |
| eligibility | eligibility: `High-school students. Role-specific — prior business, case-competition, marketin` → `High-school students; role-specific Student leadership role; applicants may need` |

Extractor notes:
- Organization guessed from the application link's domain ("prosperontario.org") — the sheet has no organization column.
- Sheet's "Format" column ("Student executive role") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2027 cycle") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Ivey High School Case Competition</strong> — uwo.ca (70/100)</summary>

Source: https://ivey.uwo.ca/high-school-case-competitions

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("uwo.ca") — the sheet has no organization column.
- Sheet's "Format" column ("One-day case competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Spring 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Wharton Global High School Investment Competition</strong> — upenn.edu (70/100)</summary>

Source: https://globalyouth.wharton.upenn.edu/competitions/investment-competition

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Wharton Global High School Investment Competition" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `The Wharton School, University of Pennsylvania` → `upenn.edu` |
| app_deadline | app_deadline: _(none)_ → `2026-09-11` |
| app_open_date | app_open_date: _(none)_ → `2026-08-10` |
| program_start_date | program_start_date: _(none)_ → `2026-09-28` |
| cost_type | cost_type: `Free to enter` → `Unknown` |
| location_type | location_type: `Online team investment competition` → `Unknown` |
| summary | summary: `School teams build and defend an investment strategy for a real client over a fu` → `Investment competition. School teams build and defend an investment strategy for` |
| eligibility | eligibility: `Grades 9–12 in teams of four to seven from the same high school, with one teache` → `Grades 9-12; teams of 4-6 from same school; teacher advisor Teams must generally` |

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
| application_link | application_link: `https://schulich.yorku.ca/` → `https://schulich.yorku.ca/future-students/business-excellence-academy/` |
| summary | summary: `Week-long introduction to business disciplines taught by Schulich faculty.` → `Business academy + case competition. A business-enrichment academy offering work` |
| eligibility | eligibility: `Students entering Grades 10–12.` → `Ontario Grades 10-12; equity-deserving groups Applicants must meet the grade req` |

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
| application_link | application_link: `https://www.ivey.uwo.ca/hba/` → `https://www.ivey.uwo.ca/summerleadership/` |
| summary | summary: `Business case-method week on the Ivey campus.` → `Residential leadership/business program. The John F. Wood Summer Leadership Prog` |
| eligibility | eligibility: `Students entering Grade 11 or 12, by application.` → `High school students currently in Grades 9, 10, and 11 who are curious, motivate` |

Extractor notes:
- Organization guessed from the application link's domain ("uwo.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Residential leadership/business program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Coming soon") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>OJEN Futures in Justice</strong> — ojen.ca (70/100)</summary>

Source: https://ojen.ca/en/program/futures-in-justice

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("ojen.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Justice career program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2026-27") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Ontario High School Model Parliament</strong> — ola.org (70/100)</summary>

Source: https://ola.org/en/visit-learn/programs/model-parliament-high-school-students

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Ontario High School Model Parliament" — title 100% similar, same domain, identical deadline.

| field | change |
| --- | --- |
| organization | organization: `Ontario Legislative Assembly partners` → `ola.org` |
| program_start_date | program_start_date: _(none)_ → `2026-11-05` |
| cost_type | cost_type: `Delegate fee; subsidies available` → `Unknown` |
| location_type | location_type: `In person` → `Unknown` |
| application_link | application_link: `https://www.ola.org/` → `https://www.ola.org/en/visit-learn/programs/model-parliament-high-school-student` |
| summary | summary: `Debate real bills in the provincial legislative chamber.` → `Three-day provincial parliament simulation. The High School Model Parliament pro` |
| eligibility | eligibility: `Students in Grades 10–12 selected through an application and school endorsement.` → `civic-minded Ontario students in grades 10 to 12 Must attend an Ontario high sch` |

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

<details><summary><strong>Young Canadians' Parliament</strong> — childrenfirstcanada.org (70/100)</summary>

Source: https://childrenfirstcanada.org/campaign/young-canadians-parliament

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("childrenfirstcanada.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Youth rights and civic engagement") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("One-year program") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Forum for Young Canadians</strong> — forum.ca (70/100)</summary>

Source: https://forum.ca/forum-for-young-canadians-national-summit

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Forum for Young Canadians" — title 100% similar, same domain.

| field | change |
| --- | --- |
| organization | organization: `Foundation for the Study of Processes of Government in Canada` → `forum.ca` |
| program_start_date | program_start_date: _(none)_ → `2027-02-07` |
| cost_type | cost_type: `Program fee; substantial bursaries available` → `Unknown` |
| location_type | location_type: `In person, residential` → `Unknown` |
| application_link | application_link: `https://forum.ca/` → `https://forum.ca/forum-for-young-canadians-national-summit/` |
| summary | summary: `A week inside federal politics in Ottawa with MPs, senators and public servants.` → `National civic leadership summit. The Forum for Young Canadians National Summit ` |
| eligibility | eligibility: `Students aged 15–19 from across Canada.` → `Ages 15-18 Canadian students in the eligible grade/age range. A school nominatio` |

Evidence:
- **program_start_date** = `2027-02-07` (labelled) — “2027-02-07 to 2027-02-12; 2027-02-28 to 2027-03-05; 2027-04-18 to 2027-04-23”

Extractor notes:
- Organization guessed from the application link's domain ("forum.ca") — the sheet has no organization column.
- Sheet's "Format" column ("National civic leadership summit") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Open". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet gives one "Program Date"; the site tracks a separate start and end date. Used it as the start date only — add an end date on review if the program runs more than one day.

</details>

<details><summary><strong>Young Politicians of Canada</strong> — youngpoliticians.org (70/100)</summary>

Source: https://youngpoliticians.org/

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("youngpoliticians.org") — the sheet has no organization column.
- Sheet's "Format" column ("Youth political engagement network") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Needs verification". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Varies") isn't in a recognizable yyyy-mm-dd form and was left blank.

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
| summary | summary: `Fully funded leadership academy on global development, community action and inte` → `Fully funded leadership academy. AKFC's Youth Leadership Academy is a fully fund` |
| eligibility | eligibility: `Ages 16–18, returning to high school, based in an eligible Canadian location. Fu` → `Be between 16 and 18 years old at the time of the program (as of July 27, 2026).` |

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
| summary | summary: `Stipended one-year advisory role shaping AKFC's youth programming from the insid` → `Paid/stipended youth advisory role. The YAC focuses on its members’ diverse skil` |
| eligibility | eligibility: `Ages 16–21, based in Canada, able to commit about four hours monthly for a one-y` → `Be based in Canada and able to commit up to 4 hours per month for a one-year ter` |

Extractor notes:
- Organization guessed from the application link's domain ("akfc.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Paid/stipended youth advisory role") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2027 term") isn't in a recognizable yyyy-mm-dd form and was left blank.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>RCMP National Youth Advisory Committee</strong> — rcmp.ca (70/100)</summary>

Source: https://rcmp.ca/en/youth/national-youth-advisory-committee

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("rcmp.ca") — the sheet has no organization column.
- Sheet's "Format" column ("National youth advisory committee") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2026-27 or 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

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
| summary | summary: `Paid summer placement in a focused-ultrasound biomedical research lab with scien` → `Paid biomedical research internship. A paid summer placement introducing student` |
| eligibility | eligibility: `Typically age 16+ with authorisation to work in Canada, Canadian high-school sta` → `Typically age 16+ with authorization to work in Canada Usually requires Canadian` |

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
| summary | summary: `Virtual research mentorship where students design a question and produce a real ` → `Research mentorship program. A virtual research mentorship program where student` |
| eligibility | eligibility: `Grades 9–12, CEGEP and some first-year university students. Applicants must comm` → `Grades 9-12, CEGEP, and some first-year university students Open to students fro` |

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
| summary | summary: `Health and medicine enrichment program with mentorship and academic pathway guid` → `Health/medicine leadership program. The Emily Stowe Scholar Program was named in` |
| eligibility | eligibility: `Grades 11–12 interested in medicine or health sciences. Confirm geographic and s` → `Grades 11-12 Designed for young women and gender-diverse students in Grades 11-1` |

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
| summary | summary: `Week-long university physics camp with lessons, experiments and problem-solving.` → `Physics summer camp. A university-based summer camp featuring physics lessons, e` |
| eligibility | eligibility: `Students who will have completed Grade 10 or 11 by the August program date. Dail` → `Students completing Grade 10 or 11 by August Must have completed the specified G` |

Extractor notes:
- Organization guessed from the application link's domain ("utoronto.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Physics summer camp") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>ISSYP - Perimeter Institute</strong> — perimeterinstitute.ca (50/100)</summary>

Source: https://perimeterinstitute.ca/issyp

- New listing (confidence 50/100, low).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("perimeterinstitute.ca") — the sheet has no organization column.
- Sheet's "Format" column ("International theoretical physics summer school") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>Waterloo QSYS</strong> — uwaterloo.ca (50/100)</summary>

Source: https://uwaterloo.ca/institute-for-quantum-computing/outreach/quantum-school-young-students

- New listing (confidence 50/100, low).
- Source: Master Tracker Google Sheet.

Evidence:
- **app_deadline** = `2026-05-15` (labelled) — “2026-05-15 11:59 p.m. ET”
- **program_start_date** = `2026-08-04` (labelled) — “2026-08-04 to 2026-08-13 (online); optional Waterloo lab day 2026-08-17”

Extractor notes:
- Organization guessed from the application link's domain ("uwaterloo.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Quantum enrichment program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Closed". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet gives one "Program Date"; the site tracks a separate start and end date. Used it as the start date only — add an end date on review if the program runs more than one day.
- The application link in the sheet did not respond — check it still works.

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

<details><summary><strong>Waterloo SPARCS</strong> — uwaterloo.ca (70/100)</summary>

Source: https://cemc.uwaterloo.ca/workshops/student-workshops/sparcs

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("uwaterloo.ca") — the sheet has no organization column.
- Sheet's "Format" column ("In-person computer science workshop") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Usually one week in May") isn't in a recognizable yyyy-mm-dd form and was left blank.

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
| summary | summary: `Highly selective advanced mathematics program built around proof-writing and abs` → `Advanced mathematics camp. A highly selective mathematics program where students` |
| eligibility | eligibility: `Grades 10–11 at application, age 15+ during the program. Open worldwide, but adv` → `Grades 10-11 at application; age 15+ during program Applicants worldwide may app` |

Extractor notes:
- Organization guessed from the application link's domain ("stanford.edu") — the sheet has no organization column.
- Country guessed as "US" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Advanced mathematics camp") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Research Science Institute (RSI)</strong> — cee.org (70/100)</summary>

Source: https://cee.org/programs/research-science-institute-rsi/rsi-application-faqs

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("cee.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Selective summer research institute") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
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
| application_link | application_link: `https://youthscience.ca/science-fairs/cwsf/` → `https://youthscience.ca/science-fairs/regional-fairs/` |
| summary | summary: `National science fair reached by winning your regional fair first.` → `Science fair pathway. A science-fair pathway where students design an independen` |
| eligibility | eligibility: `Students aged 12–20 who place at an affiliated regional fair.` → `Students; regional fair rules vary Students must enter through their local or re` |

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
| summary | summary: `Paid high-school technology internship working on real innovation projects insid` → `Paid technology internship. A paid high-school internship where students work on` |
| eligibility | eligibility: `Usually Grades 11–12 and posting-specific. Requires legal authorisation to work ` → `Usually Grades 11-12; posting-specific Must have legal authorization to work in ` |

Extractor notes:
- Could not confidently map the sheet's Category ("Jobs / Tech") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("rbc.com") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Paid technology internship") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Federal Student Work Experience Program (FSWEP)</strong> — canada.ca (70/100)</summary>

Source: https://canada.ca/en/public-service-commission/jobs/services/recruitment/students/federal-student-work-program.html

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("canada.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Federal student job inventory") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Open". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Year-round") isn't in a recognizable yyyy-mm-dd form and was left blank.

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
| category | category: `Leadership` → `STEM` |
| cost_type | cost_type: `Varies by listing` → `Unknown` |
| location_type | location_type: `Internship directory` → `Unknown` |
| summary | summary: `Online directory of renewable-energy internship listings — a starting point, not` → `Internship directory. EnergyMag offers virtual internships to college and high s` |
| eligibility | eligibility: `Varies entirely by listing. Confirm country, age, work authorisation, paid or un` → `College students: GPA above 3.0; High school students: sophomores, juniors, and ` |

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
| app_deadline | app_deadline: `2027-01-15` → `2026-10-15` |
| app_open_date | app_open_date: _(none)_ → `2026-09-16` |
| cost_type | cost_type: `Paid, with substantial need-based financial aid` → `Unknown` |
| location_type | location_type: `Residential academic program` → `Unknown` |
| summary | summary: `Selective residential academic program with university-style seminars on global ` → `Academic summer program. A selective residential academic program where students` |
| eligibility | eligibility: `Ages 16–18 during the program, currently a high-school sophomore or junior or th` → `High-school sophomores/juniors or international equivalents; age rules apply Mus` |

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
| category | category: `Leadership` → `STEM` |
| cost_type | cost_type: `Paid commercial program — review the cost against the value carefully` → `Unknown` |
| location_type | location_type: `Paid academic summer program` → `Unknown` |
| summary | summary: `Fee-based academic summer program hosted on a Waterloo campus, run independently` → `Paid academic summer program. University of Waterloo summer programs for high sc` |
| eligibility | eligibility: `High-school students; course-specific. Confirm age, English proficiency, visa an` → `High-school students; course-specific Private fee-based provider rather than a U` |

Extractor notes:
- Could not confidently map the sheet's Category ("Global / Academic") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("immerse.education") — the sheet has no organization column.
- Sheet's "Format" column ("Paid academic summer program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Open / rolling". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Ontario Women's Parliamentary Forum</strong> — ola.org (70/100)</summary>

Source: https://ola.org/en/visit-learn/programs/ontario-womens-parliamentary-forum/application-form

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("ola.org") — the sheet has no organization column.
- Sheet's "Format" column ("Provincial civic leadership forum") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Closed". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2026 program (completed)") isn't in a recognizable yyyy-mm-dd form and was left blank.

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
| summary | summary: `Youth committee advising the city on parks, recreation spaces and community plan` → `Youth city-planning advisory committee. PYEC is a group where youth voices infor` |
| eligibility | eligibility: `Ages 14–18 who live in Kitchener and can attend recurring meetings and outdoor c` → `PYEC members must: be between 14 and 18 years old live in the City of Kitchener ` |

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
| summary | summary: `Stipended one-year advisory role shaping AKFC's youth programming from the insid` → `Youth advisory + stipend. A youth advisory role where members help shape program` |
| eligibility | eligibility: `Ages 16–21, based in Canada, able to commit about four hours monthly for a one-y` → `Ages 16-21 Must be based in Canada, age 16-21, and able to commit about four hou` |

Extractor notes:
- Organization guessed from the application link's domain ("akfc.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Youth advisory + stipend") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2027 term") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>#RAREis Scholarship Fund</strong> — scholarshipamerica.org (70/100)</summary>

Source: https://scholarshipamerica.org/students/browse-scholarships

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Could not confidently map the sheet's Category ("General") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("scholarshipamerica.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.

</details>

_…and 55 more in `data/review-queue.json`._

<details><summary>Discovery log</summary>

```
Google Sheet sync: 95 row(s) read, no model calls.
```

</details>