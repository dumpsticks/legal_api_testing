# LawDiver API — law-firm test series, findings (run 2026-10-05)

What a litigation firm needs from a caselaw API, measured against production `https://lawdiver.com/api/v1` on 2026-10-05 (≈10,000 API calls, no 429s, no HTTP errors). Generated numbers are in [`REPORT.md`](REPORT.md). Every imperfect row, with what is wrong with *that* case, is in the `problems-*.md` files next to it. This file is the reading of those results: what is broken, how widely, why (with the evidence the API itself returned), and where in the `casediver` code the cause sits.

No LawDiver code was changed. Code locations are pointers for whoever fixes it.

## Scorecard

| Suite | Graded | Perfect | One-line verdict |
|---|---:|---:|---|
| Boolean search, jurisdiction-scoped (5,000 new) | 5,000 | 71.7% | Jurisdiction filters hold except `all_states`; connectors are ignored in `auto`, and `%` is broken in `keyword`. |
| Boolean search, realworld carried forward | 286 | 51.0% | Landmark recall 128/259. |
| Good law, state + federal | 855 of 1,000 | 69.4% | Overrulings of famous cases are caught; reversals on appeal are not; separate opinions and other states' constitutions create false "questioned" flags. |
| Bluebook from slightly-off cites | 1,000 | 48.6% | Locator repair is strong; case-name form is not Bluebook; `2nd`/`3rd` cites fail outright. |
| Cite check carried forward (5,300-bank families) | 657 | 97.1% | Holding steady. |
| Opinion output (text + PDF) | 200 | 0% | Two defects on every opinion; 30% clean apart from those. |

---

## General fixes, ranked

### 1. Case names in every citation the API emits are not Bluebook form — **largest single defect**
- Bluebook off-cites: the case name is the only thing wrong on most of the 514 failures. `full_caption` scored **0/50**, `t6_spelled_out` 16/50.
- Search result citation lines (38,699 hits): T6 words unabbreviated 10,313; T10 place names 1,620; "and" for "&" 903; captions over 90 characters 802; all caps 698; "Inc." after "Corp./Co." 297; descriptive phrases 182; extra parties 161.
- Opinion headers: 61 of 200 fail T6.
- Examples:
  - `Celotex Corp. v. Catrett, Administratrix of the Estate of Catrett, 477 U.S. 317 (1986)` should be `Celotex Corp. v. Catrett, 477 U.S. 317 (1986)`.
  - `Brookie v. Winn-Dixie Stores, Inc. and The Lewis Bear Company, 213 So. 3d 1129 (Fla. 1st DCA 2017)` should be `Brookie v. Winn-Dixie Stores, Inc., 213 So. 3d 1129 (Fla. Dist. Ct. App. 2017)`.
  - `Masias v. Secretary of Health and Human Services` should be `Masias v. Sec'y of Health & Hum. Servs.`
  - `Phyllis Elam, for Kamea Golay v. Commissioner of Social Security` should be `Elam ex rel. Golay v. Comm'r of Soc. Sec.`
  - `Linda Hamilton, Individually and as of the Estate of George Hamilton v. Atlas Turner, Inc.` should be `Hamilton v. Atlas Turner, Inc.`
- **Cause:** `shortenCaseCaption` / `formatCaseBluebook` in `packages/server/src/services/citeChecker/bluebook.ts` strip role words and handle "State of X", but have:
  - no T6 table, no T10 table, and no "and" → "&";
  - no cut at a second party joined by "and";
  - no cut at descriptive appositives ("Administratrix…", "Individually and as…");
  - no Rule 10.2.1(h) handling (drop "Inc." when the name already has "Corp.", "Co." and the like).
- **Fix:** one shared formatter. Every surface goes through it: search `bluebookCitation`, cite-check `correctedCitation`, `/cases/:id`, and the PDF header.

### 2. `searchType: "auto"` ignores terms-and-connectors; `keyword` mode has its own failures
- Of top-3 opinions checked against the full text:
  - `auto`: **363 of 1,182** do not satisfy the query.
  - `keyword`: 65 of 439 do not.
- Of the `auto` failures, 44 opinions contain the term the query excluded (`NOT`, `%`); 9 in keyword mode.
  - Example: `LF-BS-0024 (brady OR "exculpatory evidence") AND suppress! NOT civil` returned *Strickler v. Greene*, which contains "civil".
- `keyword` mode, conversely:
  - empties: **20.9%** of queries (auto 2.8%);
  - landmark in the top 10: 411/683 (auto 521/679).
- **Westlaw `%` (BUT NOT) in keyword mode: 133 of 161 queries return nothing.** The same exclusion terms written `AND NOT` return nothing on only 12 of 173. The `%` operator is not parsed.
- **Fix:**
  - When the query contains connectors (`/s`, `/p`, `/n`, `w/n`, `pre/n`, `+s`, `!`, `%`, `AND NOT`), `auto` must route to the boolean engine and post-filter semantic hits against the expression.
  - Add `%` (and `BUT NOT`) to the keyword lexer.
  - Look at why proximity-only queries (`wl-root-near`, `wl-sentence`, `wl-ordered`, `lx-w-n`) come back empty 20–25% of the time in keyword mode, including nationwide. Examples: `LF-BS-0405 nondischargeab! /p "false pretenses" & debtor` (all federal) and `LF-BS-0647 utteran! /25 "startling event"`.

### 3. `all_states` scope returns federal courts
- **376 out-of-scope hits on 107 of 260 `all_states` queries** (41%). Every other scope had **zero** out-of-scope hits.
  - `one_state`: 1,725 queries.
  - `one_state_plus_federal`: 1,110.
  - `federal_circuit`: 751.
  - `federal_district`: 385.
  - `us_supreme_court`: 224.
- **Cause:** `packages/server/src/api/v1/jurisdiction.ts:147` maps `all_states` to `multi_state` over all state codes. That filters on `scope_state`, which federal district and bankruptcy courts also carry (the `federal_district` comment at line 188 says so).
- **Fix:** pin `jurisdictionTiers` to the state tier for `all_states`, as `federal_district` and `us_supreme_court` already pin theirs.

### 4. Reporter ordinals "2nd" / "3rd" are not recognised
- `644 F.3rd 909`, `507 S.E.2nd 344`, `104 A.3rd 328` → **`not_in_corpus`, no correction, 0/50**.
- Every other spacing, period or case variant of the same reporters resolves (22–26/50 perfect; the remaining failures are case-name form).
- **Fix:** normalise `2nd`→`2d` and `3rd`→`3d` inside reporter abbreviations before extraction and lookup (input stage, e.g. `services/citeCheckCore/expandCiteInputs.ts`).

### 5. Good law: reversals on appeal are not recorded against the reversed decision
- **Only 9 of 38** resolved lower-court decisions that the Supreme Court or a state high court reversed or vacated are flagged. 20 of the federal ones come back `unknown`. Examples:
  - *Twombly v. Bell Atl. Corp.*, 425 F.3d 99 (2d Cir. 2005)
  - *Iqbal v. Hasty*, 490 F.3d 143
  - *Jackson Women's Health Org. v. Dobbs*, 945 F.3d 265
  - *Loper Bright*, 45 F.4th 359
  - *Shelby County*, 679 F.3d 848
  - *DeBoer v. Snyder*, 772 F.3d 388
  - *Lewis v. Epic Sys.*, 823 F.3d 1147
- **Fix:** link each Supreme Court / state-high-court decision to the decision below (the opinion names the court below and ends "Reversed" / "Vacated"). Then write a `reversed` / `vacated` treatment onto that cluster.

### 6. Good law: false "questioned" / "overruled" flags on landmarks still in force
20 of 191 independently known good-law landmarks are flagged negative. The evidence the API returns shows why:
- **Concurrences and dissents counted as treatment of the court.**
  - *Apprendi*: questioned, from *Mathis* (Kennedy, J., concurring) and *Oregon v. Ice* (Scalia, J., dissenting).
  - *Daimler AG v. Bauman*: from *BNSF v. Tyrrell* (Sotomayor, J., concurring in part and dissenting).
  - The same pattern hits *Booker*, *Blakely*, *Melendez-Diaz*, *Lopez*, *Raich*, *Seminole Tribe* and *Whren*.
- **A state court applying its own constitution counted as questioning a U.S. Supreme Court case.** *Kelo* is marked questioned because the Iowa Supreme Court declined to follow it under the Iowa Constitution (*Puntenney*, 2019).
- **Treatment attached to the wrong case.** *Crawford v. Washington* is marked **overruled** from *Michigan v. Bryant*. The rationale stored is "We reversed, overruling Ohio v. Roberts." The overruled case is *Ohio v. Roberts*, not *Crawford*.
- **Fix:**
  - Only majority / lead opinions may supply negative treatment.
  - A court can only question or overrule a case it is bound by or binds.
  - Attach a treatment to the case named in the treating sentence, not to every case cited near it.

### 7. Good law: overrulings recorded as "limited" or only "questioned"
- *Goldman v. United States* (overruled by *Katz*) has `good`, because *Katz* is recorded as `limited`.
- *Collector v. Day*, *O'Callahan v. Parker*, *United States v. Bramblett* and *Hepburn v. Griswold* are `good`.
- *Grady v. Corbin*, *South Carolina v. Gathers*, *James* and *Sykes v. United States*, and *Rabinowitz* are only `questioned`.
- Overall: 75/81 Supreme Court overrulings are flagged negative; 6 of those understate it as "questioned" or below-threshold.

### 8. Good law: `unknown` for many reported cases, and duplicate case records
- 175 rows came back `unknown`. Most are state cases (121 of the 148 unknown presumed-good rows) and lower-court decisions reversed above (23).
- **Duplicate records disagree.**
  - `410 U.S. 113` resolves to two opinions: `200197300000030` is `overruled`, and `200197300000079` is `good`.
  - *Katz* appears twice in *Goldman*'s treatment list.
  - 115 search queries returned the same opinion twice on one results page (same reporter cite, two ids).
- **Wrong case on a locator.** `819 F.3d 880` (*United States v. Carpenter*, 6th Cir. 2016) resolves to *United States v. Sanders*.
- **Internal note exposed.** *Roe*'s and *Plessy*'s treatment rationale reads "Landmark overruling (API audit F-02)", an internal audit note shown to customers.

### 9. Wrong court abbreviations in Bluebook parentheticals
- `Colo. Ct. App.` → should be **`Colo. App.`**
- `Mass. Ct. App.` → **`Mass. App. Ct.`**
- The same fallback also produces wrong forms for Conn. App. Ct., Ill. App. Ct., Pa. Super. Ct. / Pa. Commw. Ct., N.J. Super. Ct. App. Div. and Md. App. Ct.
- **Cause:** `bluebookCourtFromName` in `services/citeChecker/bluebook.ts` falls back to a generic `"<State> Ct. App."`.
- **Redundant court:** 17 rows add the court where the reporter already identifies it (Rule 10.4(b)).

### 10. Corrected cites string parallel reporters together
- 73 corrected citations read like `Toure v. Avis Rent a Car Systems, Inc., 98 N.Y.2d 345, 746 N.Y.S.2d 865, 774 N.E.2d 1197 (2002)`.
- Bluebook (Rule 10.3.1) wants one reporter, regional if available, with the court in the parenthetical: `774 N.E.2d 1197 (N.Y. 2002)`.
- **Fix:** `selectBluebookCiteLocators` should return a single locator unless the caller asks for local-rule parallels.

### 11. Citation lines with no locator at all
- **7,467 of 38,699 search hits** carry a `bluebookCitation` of the form `Edenfield v. Hiscox, Inc. (S.D. Ga. 2022)`: no reporter, no neutral cite, no WL/Lexis number, no docket. A firm cannot cite that.
- Rule 10.8.1 needs the docket number and a database cite or slip-opinion date. The corpus has the docket number (`docketNumber` is on `/cases/:id`).

### 12. Vendor cites and pin pages
- **Westlaw number in place of the reporter:** 14/50 perfect.
  - 28 come back with the wrong verdict.
  - 13 come back with no correction, though the case is in `F.3d` / `F. Supp.` and `knownCitations` lists the WL number.
- **Pin page given as the first page:** 22/50 perfect.
  - 15 come back with the wrong verdict.
  - 12 come back with no correction.

### 13. Opinion output (all 200 opinions)
- **PDF header still reads "LAWTOOLS · LAWTOOLS.AI"**: 200/200. Source: `services/publicApi/reportStyle.ts:337`; also the "Retrieved from LawTools" line in `caseDossierReport.ts:187`.
- **`/cases/:id` and `/good-law` report different `clusterId`s** for the same opinion: 200/200. Example: `5109201700000750` vs `4380383`.
  - `caseDossier.ts:385` uses `cd_decision_id ?? cluster_id`.
  - `caseQueries.ts:387` uses `cluster_id`.
- **Slip-opinion page numbers and running headers left in the text:** 85/200.
- **PDF line wraps kept as blank-line paragraph breaks mid-sentence:** 73/200. Example: Brookie, "summary\n\njudgment". Text pasted into a brief comes out broken.
- **Paragraphs repeated:** 8. **Hyphenation not rejoined:** 6. **HTML entities leaking:** 2.
- **No star paging (pin cites impossible):** 27.
- **PDF caption block collapsed into one run-on paragraph** (seen on Florida DCA slip opinions).
- Apart from the two all-opinion defects, 60/200 (30%) are clean.

### 14. Data gaps that blocked tests (coverage, not form)
- **`not_in_corpus` / `unverified`:**
  - *Matal v. Tam*, 582 U.S. 218 (2017)
  - *Becker v. IRM Corp.*, 38 Cal. 3d 454
  - *Sullivan v. N.Y. Times*, 273 Ala. 656
  - 2021 circuit decisions *Kennedy v. Bremerton* (991 F.3d 1004), *303 Creative* (6 F.4th 1160), *SFFA v. Harvard* (980 F.3d 157), *Am. Lung Ass'n* (985 F.3d 914), *Sackett* (8 F.4th 1075)
- **69 search hits with `court: null`.** Scope cannot be enforced on them and a firm cannot tell which court decided.
- **11 hits outside the requested date window.** Example: `LF-BS-1752` with `dateTo 1999-12-31` returned a 2004 opinion.
- *Erie R.R. Co. v. Tompkins* is stored as "Railroad v. Tompkins".

---

## What is working

- **Jurisdiction filters** for single state, state + federal, circuit, district and Supreme Court: zero out-of-scope hits across 4,195 queries.
- **Unpublished opinions** never leak by default (0 / 38,699 hits).
- **No HTTP errors or rate-limit rejections** across ~10,000 calls. Mean search latency is 2.3 s.
- **Overrulings of well-known Supreme Court cases** are caught (75/81), as are the state overrulings in the carried-forward bank (77/78).
- **Clean good law stays clean** for 545/577 known-good and presumed-good cases.
- **Locator repair:** S. Ct.-only → U.S. (46/50); page typos, punctuation, missing parentheticals, wrong years and "State of X" are repaired. Failures there are almost all case-name form.
- **The 5,300-bank families a firm uses daily** (mild mangles, Bluebook variants, history, string cites, name traps, vendor cites, statutes) hold at 97.1% perfect.

## How to read the per-case files

| File | One row per | Shows |
|---|---|---|
| `problems-search.md` | imperfect query | scope, type, query, and each problem (out-of-scope hit with its court, missing landmark, opinion that fails the boolean, duplicate, date) |
| `problems-goodlaw.md` | imperfect case | cite, known truth, API status, and the negative citation the API relied on |
| `problems-bluebook.md` | imperfect off-cite | input, LawDiver's corrected cite, the expected Bluebook cite, and each defect |
| `problems-opinions.md` | opinion | each formatting defect with its measurement |
| `problems-carried-cites.md` | carried-forward cite | verdict vs key |

The `graded-*.json` files hold the same per-row grades for machine use. The raw API responses (trimmed) are in `raw/*.jsonl.gz`.

## Caveats

- The expected Bluebook forms come from an independent formatter (`scripts/law-firm/lib/bluebook.mjs`). Case-name failures are scored by lint (Rule 10.2.1 / T6 / T10) plus a first-party check, not by exact string match, so a formatter quirk cannot fail a row on its own. Florida's `Fla. 1st DCA` local form is accepted alongside the T1 form.
- The full-text boolean check treats `/s` as same sentence *or* within 60 words, and `/p` as same paragraph *or* within 250 words, because many opinion texts carry hard line breaks. It is lenient; a failure there is a real failure.
- Good law: 145 presumed-good inputs from older banks had captions that do not match the case at that locator. The API correctly said `name_mismatch`, so they are excluded rather than scored. 12 presumed-good cases the API flags negative are listed for a lawyer to confirm; they are not scored wrong.
