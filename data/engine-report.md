## Data engine run `2026-10-22-9a6c1b6a`

Crawled **101** pages · **0** model calls · ~**$0.00** · **0** auto-applied · **66** need review · **0** to archive

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

| field | change |
| --- | --- |
| summary | summary: `Business academy + case competition. A business-enrichment academy offering work` → `Business academy + case competition. The Schulich Business Excellence Academy is` |
| eligibility | eligibility: `Ontario Grades 10-12; equity-deserving groups Applicants must meet the grade req` → `Grade 10, 11, and 12 high school students across Ontario, from equity-deserving ` |

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

| field | change |
| --- | --- |
| summary | summary: `Advanced mathematics camp. A highly selective mathematics program where students` → `Advanced mathematics camp. SUMaC invites students who seek to be challenged in m` |
| eligibility | eligibility: `Grades 10-11 at application; age 15+ during program Applicants worldwide may app` → `Students in grades 10 and 11 at the time of application submission and that are ` |

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

<details><summary><strong>AEOP High School Internship STEM Research Program</strong> — charlotte.edu (70/100)</summary>

Source: https://cstem.charlotte.edu/pk-20-students/stem-research-experience-program

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("charlotte.edu") — the sheet has no organization column.
- Country guessed as "US" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("In-person") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("June 29, 2026 – July 24, 2026") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>After-School STEM Lab Internship</strong> — uchicago.edu (70/100)</summary>

Source: https://pme.uchicago.edu/academics/stem-education-community-outreach/k-12-student-programs/after-school-stem-lab-internship

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("uchicago.edu") — the sheet has no organization column.
- Country guessed as "US" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("In-person") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("6-week summer research program") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>BigFuture $40,000 Scholarship</strong> — fastweb.com (50/100)</summary>

Source: https://fastweb.com/college-scholarships/articles/scholarships-for-high-school-seniors

- Changes needing review: application_link.
- Confidence 50/100.
- Source: Master Tracker Google Sheet.

| field | change |
| --- | --- |
| application_link | application_link: `https://bigfuture.collegeboard.org/pay-for-college/bigfuture-scholarships-2027` → `https://www.fastweb.com/college-scholarships/articles/scholarships-for-high-scho` |

Extractor notes:
- Could not confidently map the sheet's Category ("General") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("fastweb.com") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet "Status" says "Expired". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>Canadian Agricultural Youth Council</strong> — canada.ca (50/100)</summary>

Source: https://agriculture.canada.ca/en/department/initiatives/canadian-agricultural-youth-council

- New listing (confidence 50/100, low).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("canada.ca") — the sheet has no organization column.
- Sheet's "Format" column ("National advisory council") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Closed for current cohort". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Two-year term") isn't in a recognizable yyyy-mm-dd form and was left blank.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>Canadian Chemistry Contest and Olympiad</strong> — uwaterloo.ca (50/100)</summary>

Source: https://uwaterloo.ca/chemistry/community-outreach/chemistry-high-school-exams

- New listing (confidence 50/100, low).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Could not confidently map the sheet's Category ("Chemistry") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("uwaterloo.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Exam / olympiad") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Annual". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("April 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>Canadian Computing Competition</strong> — uwaterloo.ca (70/100)</summary>

Source: https://cemc.uwaterloo.ca/contests/ccc

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Canadian Computing Competition (CCC)" — title 100% similar, same domain.

| field | change |
| --- | --- |
| application_link | application_link: `https://www.cemc.uwaterloo.ca/contests/computing.html` → `https://cemc.uwaterloo.ca/contests/ccc` |
| summary | summary: `National programming contest and the entry point to Canada's IOI team.` → `Programming contest. The Canadian Computing Competition (CCC) is a fun challenge` |
| eligibility | eligibility: `Any secondary school student. Your school must register you as a contest centre.` → `Participants have the option to compete at either the Junior or Senior level. Ju` |

Extractor notes:
- Organization guessed from the application link's domain ("uwaterloo.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Programming contest") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Annual". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("February 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>CHA Scholarship Program</strong> — thecha.org (70/100)</summary>

Source: https://thecha.org/resident-programs-services/unlock-your-college-potential/cha-scholarship-program

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Could not confidently map the sheet's Category ("General") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("thecha.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.

</details>

<details><summary><strong>Civic Leadership Program</strong> — learntoearndayton.org (70/100)</summary>

Source: https://learntoearndayton.org/post/applications-now-open-for-civic-leadership-program-2026-2027

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("learntoearndayton.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("August 2026 - April 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>CIVIC RESPONSIBILITY FOR YOUNG LEADERS SUMMER PROGRAM</strong> — npuatlanta.org (70/100)</summary>

Source: https://npuatlanta.org/dnucp1005

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("npuatlanta.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("In-person") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("null") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>COMC — Canadian Open Mathematics Challenge</strong> — math.ca (70/100)</summary>

Source: https://cms.math.ca/competitions/comc

- Changes needing review: summary, eligibility.
- Confidence 70/100.
- Source: Master Tracker Google Sheet.

| field | change |
| --- | --- |
| summary | summary: `National problem-solving contest and a gateway to advanced Canadian math opportu` → `Math contest. The Canadian Open Mathematics Challenge (COMC) is Canada’s premier` |
| eligibility | eligibility: `Students in Canada and internationally; school or individual registration option` → `Students in Canada and internationally; school or individual registration option` |

Extractor notes:
- Organization guessed from the application link's domain ("math.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Math contest") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Upcoming". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("October/November 2026") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>CyberTitan National Youth Cyber Defence Competition</strong> — etalentcanada.ca (70/100)</summary>

Source: https://etalentcanada.ca/for-educators/programs/cybertitan

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "CyberTitan National Youth Cyber Defence Challenge" — title 82% similar, same domain.

Extractor notes:
- Could not confidently map the sheet's Category ("Cybersecurity") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("etalentcanada.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Team competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Needs verification". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Online rounds Nov 2026-Feb/Mar 2027; national finals spring 2027 (2026 finals were Mar 23-24)") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Designing Mitochondria for the Future</strong> — utoronto.ca (70/100)</summary>

Source: https://outreach.engineering.utoronto.ca/event/designing-mitochondria-for-the-future-youth-summer-program/2026-07-13

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("utoronto.ca") — the sheet has no organization column.
- Sheet's "Format" column ("In-person workshop") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>fhgfh</strong> — popop.com (50/100)</summary>

Source: https://popop.com/

- New listing (confidence 50/100, low).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("popop.com") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>FIRST Robotics Competition</strong> — firstinspires.org (70/100)</summary>

Source: https://firstinspires.org/robotics/frc

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("firstinspires.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Team competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Annual". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("January-April 2027 season") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>GatorLabs Precollege Scholars (Virtual)</strong> — ufl.edu (70/100)</summary>

Source: https://cpet.ufl.edu/students/summer-programs

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("ufl.edu") — the sheet has no organization column.
- Sheet's "Format" column ("Virtual") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet's Program Date ("July 13 - July 17, 2026") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Girls Who Code Summer Programs</strong> — girlswhocode.com (50/100)</summary>

Source: https://girlswhocode.com/programs/summer-immersion-program

- New listing (confidence 50/100, low).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("girlswhocode.com") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Virtual or in-person summer program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>Google Summer Program</strong> — hphsnyc.org (70/100)</summary>

Source: https://hphsnyc.org/apps/news/article/438122

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("hphsnyc.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("In-person") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet's Program Date ("three-week program") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Hands On Atlanta Civic Leadership Program</strong> — handsonatlanta.org (70/100)</summary>

Source: https://handsonatlanta.org/civic-leadership

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("handsonatlanta.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("In-person") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet's Program Date ("2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>High School Internship Opportunities</strong> — austintexas.gov (70/100)</summary>

Source: https://austintexas.gov/economic-development/programs/high-school-internship-opportunities

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Could not confidently map the sheet's Category ("General") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("austintexas.gov") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("In-person") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("June 1, 2026 – July 10, 2026") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>International Brain Bee — Local Canadian Competition</strong> — brainbee.ca (70/100)</summary>

Source: https://brainbee.ca/

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "International Brain Bee — Canadian Chapters" — title 80% similar, same domain.

| field | change |
| --- | --- |
| summary | summary: `Neuroscience competition on brain anatomy, neurological disease and research.` → `Academic competition. The Canadian National Brain Bee is a neuroscience competit` |
| eligibility | eligibility: `High-school students; local chapter rules apply. You must qualify through a loca` → `To compete in the Canadian National, students must first compete in a regional b` |

Extractor notes:
- Organization guessed from the application link's domain ("brainbee.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Academic competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Spring 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>JA Titan Business Challenge</strong> — jacanada.org (70/100)</summary>

Source: https://jacanada.org/program/ja-titan

- Changes needing review: summary, eligibility.
- Confidence 70/100.
- Source: Master Tracker Google Sheet.

| field | change |
| --- | --- |
| summary | summary: `Teams run a simulated company, setting price, production, marketing and investme` → `Business simulation competition. Through an interactive business simulation, you` |
| eligibility | eligibility: `High-school students; local JA availability varies. May require school registrat` → `Grades 8-12` |

Extractor notes:
- Organization guessed from the application link's domain ("jacanada.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Business simulation competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2026-2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Junior Achievement Investment Strategies Program</strong> — investja.org (70/100)</summary>

Source: https://investja.org/

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "JA Investment Strategies Program" — title 73% similar, same domain.

Extractor notes:
- Organization guessed from the application link's domain ("investja.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Financial literacy program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Recurring". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2026-2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Kode With Klossy Summer Camp</strong> — kodewithklossy.com (70/100)</summary>

Source: https://kodewithklossy.com/programs

- Changes needing review: summary, eligibility.
- Confidence 70/100.
- Source: Master Tracker Google Sheet.

| field | change |
| --- | --- |
| summary | summary: `Free two-week coding camp in web development, mobile apps or data science.` → `Virtual or in-person coding camp. Kode With Klossy provides FREE technical skill` |
| eligibility | eligibility: `Typically ages 13–18. Location and age eligibility vary by camp, and full attend` → `No prior experience is required for our FREE onboarding programs that serve scho` |

Extractor notes:
- Organization guessed from the application link's domain ("kodewithklossy.com") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Virtual or in-person coding camp") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Leadership Grow Program</strong> — leadershippbc.org (70/100)</summary>

Source: https://leadershippbc.org/grow

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("leadershippbc.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("In-person") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("September 2026 through April 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Leadership High School</strong> — lonestar.edu (70/100)</summary>

Source: https://lonestar.edu/leadership-highschool.htm

- Changes needing review: country, application_link, summary, eligibility.
- Confidence 70/100.
- Source: Master Tracker Google Sheet.

| field | change |
| --- | --- |
| country | country: `CA` → `US` |
| application_link | application_link: `https://myneighborhoodnews.com/lone-star-college-leadership-high-school-program-` → `https://www.lonestar.edu/leadership-highschool.htm` |
| summary | summary: `Hybrid (monthly experiential learning sessions). The Leadership High School prog` → `Leadership High School is Lone Star College's premier leadership development pro` |
| eligibility | eligibility: `Public high school sophomores or juniors attending a school within the LSCS serv` → `Open to sophomore and junior students attending public high schools within the L` |

Extractor notes:
- Organization guessed from the application link's domain ("lonestar.edu") — the sheet has no organization column.
- Country guessed as "US" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's Program Date ("Saturday, October 17, 2026 - Saturday, April 10, 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Library and Archives Canada Youth Advisory Council</strong> — canada.ca (70/100)</summary>

Source: https://canada.ca/en/library-archives/corporate/about-us/partners/youth-advisory-council.html

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("canada.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Paid national advisory council") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2026-2027 or 2027-2028 term") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>McMaster STEM Immersive Experience</strong> — mcmaster.ca (70/100)</summary>

Source: https://eng.mcmaster.ca/community/outreach-programs/summer-camp

- Changes needing review: summary, eligibility.
- Confidence 70/100.
- Source: Master Tracker Google Sheet.

| field | change |
| --- | --- |
| summary | summary: `A week of university-style activities across science, technology, engineering an` → `In-person day program. Our engineering camps offer campers the chance to explore` |
| eligibility | eligibility: `Students entering Grades 9–12. A program fee applies and daily travel to Hamilto` → `Students entering Grade 2 – 8 as of September 2026 should enroll in Engineering ` |

Extractor notes:
- Organization guessed from the application link's domain ("mcmaster.ca") — the sheet has no organization column.
- Sheet's "Format" column ("In-person day program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("July-August 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>NASA Internship Programs</strong> — nasa.gov (50/100)</summary>

Source: https://nasa.gov/learning-resources/internship-programs

- New listing (confidence 50/100, low).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("nasa.gov") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>NYC Summer Academy</strong> — nytedu.com (70/100)</summary>

Source: https://nytedu.com/pre-college/summer-academy/nyc

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("nytedu.com") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Residential") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet's Program Date ("Term 1: June 7–19, Term 2: June 21–July 3, Term 3: July 5–17, Term 4: July 19–31") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Ocean Wise Youth to Sea</strong> — ocean.org (50/100)</summary>

Source: https://ocean.org/learn-explore/youth-programs/youth-to-sea

- Changes needing review: summary, eligibility.
- Confidence 50/100.
- Source: Master Tracker Google Sheet.

| field | change |
| --- | --- |
| summary | summary: `Service-learning program in ocean conservation with outdoor experiences and an a` → `Leadership / conservation program. A service-learning program involving ocean co` |
| eligibility | eligibility: `Age and location requirements vary by cohort. May prioritise youth from specific` → `Youth age and location requirements vary by cohort — May prioritize youth from s` |

Extractor notes:
- Organization guessed from the application link's domain ("ocean.org") — the sheet has no organization column.
- Country guessed as "CA" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's "Format" column ("Leadership / conservation program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Monitor". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("2026-2027") isn't in a recognizable yyyy-mm-dd form and was left blank.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>Ontario Justice Education Network Mock Trial Tournament</strong> — ojen.ca (50/100)</summary>

Source: https://ojen.ca/en/program/mock-trials

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Mock Trial Tournament" — title 100% similar, same domain.

| field | change |
| --- | --- |
| application_link | application_link: `https://ojen.ca/` → `https://ojen.ca/en/program/mock-trials` |
| summary | summary: `Argue a criminal case in a real courtroom with lawyer coaches.` → `School team competition. Students act as lawyers and witnesses in a simulated co` |
| eligibility | eligibility: `School teams with a teacher sponsor; OJEN pairs teams with lawyer coaches.` → `Ontario secondary-school students — Requires a registered school team, teacher c` |

Extractor notes:
- Organization guessed from the application link's domain ("ojen.ca") — the sheet has no organization column.
- Sheet's "Format" column ("School team competition") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Annual". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Winter-spring 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.
- The application link in the sheet did not respond — check it still works.

</details>

<details><summary><strong>Ontario Public Service Summer Employment Opportunities</strong> — gov.on.ca (70/100)</summary>

Source: https://gojobs.gov.on.ca/Pages/SEP.aspx

- Looks like an existing listing under a different name.
- Source: Master Tracker Google Sheet.
- Possible duplicate of "Ontario Public Service Summer Employment" — title 100% similar, same domain.

| field | change |
| --- | --- |
| category | category: `Leadership` → `Law & Civics` |
| summary | summary: `Paid summer jobs across Ontario ministries — policy, parks, science, communicati` → `Paid summer employment. Paid summer jobs across Ontario ministries in administra` |
| eligibility | eligibility: `Students generally aged 15–24, legally entitled to work in Canada, meeting each ` → `Students generally ages 15-24, or up to 29 with a disability — Must be legally e` |

Extractor notes:
- Organization guessed from the application link's domain ("gov.on.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Paid summer employment") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Watch". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Ontario Summer Company</strong> — ontario.ca (70/100)</summary>

Source: https://ontario.ca/page/start-summer-company-students

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Organization guessed from the application link's domain ("ontario.ca") — the sheet has no organization column.
- Sheet's "Format" column ("Entrepreneurship grant/program") describes the kind of opportunity, not delivery mode — folded into the summary since the site has no separate field for it.
- Sheet "Status" says "Expected annual". The website computes its own live status from the dates below on every page load, so this is shown only for your own cross-check, not written anywhere.
- Sheet "Priority"/"Planning Note" are Discord-bot-only fields and are not carried to the website.
- Sheet's Program Date ("Summer 2027") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

<details><summary><strong>Penn SAS High School Summer Programs</strong> — upenn.edu (70/100)</summary>

Source: https://hs.sas.upenn.edu/summer-programs

- New listing (confidence 70/100, medium).
- Source: Master Tracker Google Sheet.

Extractor notes:
- Could not confidently map the sheet's Category ("General") to one of the site's six tracks — defaulted to "STEM". Please correct.
- Organization guessed from the application link's domain ("upenn.edu") — the sheet has no organization column.
- Country guessed as "US" from the application link's domain — the sheet has no location column. Please correct if this one runs in the other country.
- Sheet's Program Date ("June 30 - August 8, 2026 (Pre-College Residential Program)") isn't in a recognizable yyyy-mm-dd form and was left blank.

</details>

_…and 26 more in `data/review-queue.json`._

<details><summary>Discovery log</summary>

```
Google Sheet sync: 101 row(s) read, no model calls.
```

</details>