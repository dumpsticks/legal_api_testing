# Law-firm test series — run 2026-10-05-keyword

System under test: LawDiver API v1 (`https://lawdiver.com/api/v1`). Datasets: `datasets/law-firm/`. Harness: `scripts/law-firm/`. A row is **perfect** only when every check on it passes; everything else is listed by case in the `problems-*.md` files next to this report.

## Headline

| Suite | Rows run | Perfect | Notes |
|---|---:|---:|---|
| Boolean search, jurisdiction-scoped (new) | 4164 | 2665 (64.0%) | out-of-scope hits on 95 queries; landmark top-10 719/1149; boolean full-text check 659/750 opinions satisfy the query |
| Boolean search, realworld carried forward | 0 | 0 (n/a) | landmark top-10 0/0 |
| Good-law check (state + federal) | 0 | 0 (n/a) | negative history caught 0/0; good law kept clean 0/0; unresolved 0 |
| Bluebook form from slightly-off cites | 0 | 0 (n/a) | exact string match to expected 0 |
| Cite check, carried forward | 0 | 0 (n/a) | partial 0 |
| Opinion output (text + PDF) | 0 | 0 (n/a) | every opinion has the old LawTools PDF header and a clusterId mismatch; apart from those two, 0 (n/a) are clean |

## General fixes (ranked by rows affected)

Each line is one root cause seen across many cases. Examples are row ids from this run; the full per-case list is in the matching `problems-*.md`.

### Search

| Rows | Fix | Examples |
|---:|---|---|
| 430 | Controlling landmark for the doctrine not in the top 10 of an in-scope boolean search. `landmark_missing_bank` | LF-BS-0002 [CA + federal] bystand! /p "zone of danger" → want dillon v\. legg\|thing v\. la chusa<br>LF-BS-0019 [4 Cir.] (retaliation OR "protected activity") /s "materially adverse" → want burlington n\|nassar\|crawford v\. metro\|t<br>LF-BS-0025 [all_states] "market share liability" w/s des → want sindell\|hymowitz |
| 330 | Scope "all_states" returned federal court in state scope. `scope_all_states_federal_court_in_state_scope` | LF-BS-0025: District Court, District of Columbia — Bortell v. Eli Lilly and Co.<br>LF-BS-0025: District Court, E.D. New York — In re DES Cases<br>LF-BS-0044: District Court, S.D. Indiana — Encompass Insurance Company v. Samsung Electronics |
| 119 | Empty result page for an in-scope doctrine query that has a controlling landmark. `search_empty_keyed` | LF-BS-0002 [CA + federal] bystand! /p "zone of danger"<br>LF-BS-0031 [5 Cir.] "economic substance" & "business purpose" % criminal<br>LF-BS-0108 [all_states] "social host" w/p intoxicat! and "guest" |
| 14 | Westlaw "%" (BUT NOT) query returns nothing in a nationwide scope — the % operator is not parsed (the same exclusion written "AND NOT" returns results). `search_empty_but_not` | LF-BS-0212 [keyword] "motion to dismiss" & plausib! % habeas<br>LF-BS-0223 [keyword] "proportional to the needs of the case" & discovery % habeas<br>LF-BS-0236 [keyword] "cell-site location" & warrant % civil |
| 12 | Nationwide-scope boolean query on a mainstream doctrine returns an empty page. `search_empty_broad` | LF-BS-0108 [keyword] "social host" w/p intoxicat! and "guest"<br>LF-BS-0405 [keyword] nondischargeab! /p "false pretenses" & debtor<br>LF-BS-1251 [keyword] nondischargeab! w/15 ("false pretenses" or debtor) |
| 11 | NOT / % / AND NOT exclusion ignored (template or-and-not). `boolean_not_or-and-not` | LF-BS-0024: (brady OR "exculpatory evidence") AND suppress! NOT civil → Strickler v. Greene<br>LF-BS-0072: ("ineffective assistance of counsel" OR "deficient performance") AND " → Strickland v. Washington<br>LF-BS-1104: ("qualified immunity" OR "clearly established") AND officer NOT contra → Pearson v. Callahan |
| 9 | Returned opinion does not satisfy the connectors (template wl-root-para). `boolean_unsatisfied_wl-root-para` | LF-BS-0888: impractic! /p frustration → McGlinchey v. Aetna Casualty & Surety Co<br>LF-BS-1152: consorti! /p spouse → Watts v. State<br>LF-BS-1176: impractic! /p frustration → State v. Coffman |
| 9 | Returned opinion does not satisfy the connectors (template wl-sentence). `boolean_unsatisfied_wl-sentence` | LF-BS-1044: "hostile work environment" /s "severe or pervasive" → Meritor Savings Bank, FSB v. Vinson<br>LF-BS-1896: "rule of reason" /s "anticompetitive effects" → Eastman Kodak Co. v. Image Technical Ser<br>LF-BS-2532: "claim construction" /s specification → OPTRONIC SCIENCES LLC v. BOE Technology  |
| 8 | Result outside the requested date window. `search_date_filter` | LF-BS-0013: 2013-06-17 vs 1990-01-01–2010-12-31<br>LF-BS-0194: 2011-02-28 vs 1990-01-01–2010-12-31<br>LF-BS-1752: 2004-05-03 vs –1999-12-31 |
| 8 | Returned opinion does not satisfy the connectors (template lx-w-s). `boolean_unsatisfied_lx-w-s` | LF-BS-0036: "actual malice" w/s "public figure" → New York Times Co. v. Sullivan<br>LF-BS-0372: "malicious prosecution" w/s "probable cause" → Illinois v. Gates<br>LF-BS-0732: "prior bad acts" w/s "other crimes" → Thomas v. Commonwealth |
| 7 | Returned opinion does not satisfy the connectors (template wl-numeric). `boolean_unsatisfied_wl-numeric` | LF-BS-0672: "fraudulent joinder" /10 remand → Jackson v. Morse<br>LF-BS-0672: "fraudulent joinder" /10 remand → Jenner v. CVS, Inc.<br>LF-BS-1260: "medical malpractice" /10 "standard of care" → Singing River Health System v. Amy Brand |
| 6 | Returned opinion does not satisfy the connectors (template and-not). `boolean_unsatisfied_and-not` | LF-BS-0048: "equitable distribution" AND "nonmarital" AND NOT criminal → Cassara v. Cassara<br>LF-BS-0516: homestead AND devise AND NOT criminal → Hall v. Turney<br>LF-BS-0516: homestead AND devise AND NOT criminal → White v. Bates |
| 6 | Returned opinion does not satisfy the connectors (template wl-ordered). `boolean_unsatisfied_wl-ordered` | LF-BS-0120: "fair use" +s copyright → New York Times Co. v. Tasini<br>LF-BS-0468: "free exercise" +s "neutral and generally applicable" → United States v. Sineneng-Smith<br>LF-BS-1668: "diversity jurisdiction" +s "amount in controversy" → Kan v. General Motors LLC |
| 6 | Returned opinion does not satisfy the connectors (template lx-w-p-and). `boolean_unsatisfied_lx-w-p-and` | LF-BS-0708: "business judgment rule" w/p "duty of care" and director! → Gantler v. Stephens<br>LF-BS-0900: daubert w/p reliab! and "rule 702" → Daubert v. Merrell Dow Pharmaceuticals, <br>LF-BS-0900: daubert w/p reliab! and "rule 702" → General Electric Co. v. Joiner |
| 5 | Returned opinion does not satisfy the connectors (template lx-w-n). `boolean_unsatisfied_lx-w-n` | LF-BS-0180: "open and obvious" w/15 (invitee or "duty to warn") → Rowland v. Christian<br>LF-BS-1272: retaliation w/15 ("materially adverse" or "causal connection") → Drake v. Minnesota Mining & Manufacturin<br>LF-BS-2016: "design defect" w/15 ("consumer expectations" or "risk-utility") → Punsoda-Diaz v. Ford Motor Company |
| 5 | Returned opinion does not satisfy the connectors (template wl-root-near). `boolean_unsatisfied_wl-root-near` | LF-BS-0504: substan! /25 commissioner → Skarbek, Norbert v. Barnhart, Jo Anne<br>LF-BS-2892: locat! /25 "reasonable expectation of privacy" → Katz v. United States<br>LF-BS-2892: locat! /25 "reasonable expectation of privacy" → Commonwealth v. Duncan |
| 5 | Returned opinion does not satisfy the connectors (template wl-or-group). `boolean_unsatisfied_wl-or-group` | LF-BS-0552: ("design defect" OR "strict liability") /s "consumer expectations" → Greenman v. Yuba Power Products, Inc.<br>LF-BS-1032: (guardianship OR "incapacitated person") /s ward → Bandelin v. Quinlan<br>LF-BS-1908: (abstention OR "younger abstention") /s "pending state" → Younger v. Harris |
| 5 | NOT / % / AND NOT exclusion ignored (template and-not). `boolean_not_and-not` | LF-BS-0780: "second amendment" AND "historical tradition" AND NOT contract → District of Columbia v. Heller<br>LF-BS-1080: "hostile work environment" AND "severe or pervasive" AND NOT criminal → Meritor Savings Bank, FSB v. Vinson<br>LF-BS-2592: "malicious prosecution" AND "probable cause" AND NOT contract → Albright v. Oliver |
| 4 | Returned opinion does not satisfy the connectors (template wl-para-and). `boolean_unsatisfied_wl-para-and` | LF-BS-0240: "duty to warn" /p psychotherapist & "identifiable victim" → Thompson v. County of Alameda<br>LF-BS-0936: "business judgment rule" /p "duty of care" & director! → Gantler v. Stephens<br>LF-BS-2580: "medical malpractice" /p "standard of care" & "expert testimony" → Daubert v. Merrell Dow Pharmaceuticals,  |
| 4 | Returned opinion does not satisfy the connectors (template three-and). `boolean_unsatisfied_three-and` | LF-BS-0540: "procedural due process" AND "property interest" AND deprivat! → Mullane v. Central Hanover Bank & Trust <br>LF-BS-1644: "automobile exception" AND "probable cause" AND warrantless → Chambers v. Maroney<br>LF-BS-2304: "rule of reason" AND "anticompetitive effects" AND "relevant market" → DIXON v. NATIONAL HOT ROD ASSOCIATION |
| 1 | Returned opinion does not satisfy the connectors (template or-and-not). `boolean_unsatisfied_or-and-not` | LF-BS-3996: ("confrontation clause" OR "testimonial hearsay") AND cross-examin! NO → Hightower v. Dixon |

### Corpus data

| Rows | Fix | Examples |
|---:|---|---|
| 96 | Same opinion (same id or same reporter cite) twice on one results page — duplicate records. `search_duplicate_hit` | LF-BS-0035: Hofer v. DPHHS 2005 MT 302<br>LF-BS-0115: Pipe & Piling Supplies (U.S.A.), Ltd. v. Betterman & Katelma 596 N.W.2d 24<br>LF-BS-0211: Zahl v. Harper 282 F.3d 204 |
| 63 | Search hit has no court (court field null), so a firm cannot tell where it was decided and scope cannot be enforced. `result_missing_court` | LF-BS-0148: CEC Entertainment, Inc. 202000012134<br>LF-BS-0170: Crawford v. Ford Motor Company 202600020041<br>LF-BS-0170: Swaine v. XPO Logistics Freight, Inc. et al. 202600019849 |

## Boolean search detail

| Measure | New bank | Realworld carried |
|---|---:|---:|
| Queries run | 4164 | 0 |
| Perfect | 2665 | 0 |
| HTTP errors | 0 | 0 |
| Degraded | 0 | 0 |
| Empty pages | 914 | 0 |
| Queries with an out-of-scope hit | 95 | 0 |
| Out-of-scope hits / all hits | 330/26743 | 0/0 |
| Date-filter violations (queries) | 8 | 0 |
| Unpublished leaks (queries) | 0 | 0 |
| Duplicate hit on a page (queries) | 88 | 0 |
| Landmark keyed | 1149 | 0 |
| Landmark in top 10 | 719 | 0 |
| Landmark at rank 1 | 524 | 0 |
| Landmark MRR | 0.520 | n/a |
| Avg latency ms | 1450 | 0 |

**Full-text boolean verification** (top 3 opinions on every 12th query, evaluated with `lib/boolean.mjs`): 750 opinions checked, 91 do not satisfy the query.

### By scope

| Scope | Queries | Perfect | Any out-of-scope hit | Empty |
|---|---:|---:|---:|---:|
| one_state | 1436 | 64.3% | 0.0% | 30.6% |
| one_state_plus_federal | 917 | 67.1% | 0.0% | 20.5% |
| federal_circuit | 636 | 67.5% | 0.0% | 15.6% |
| federal_district | 319 | 69.0% | 0.0% | 29.5% |
| all_federal | 282 | 63.1% | 0.0% | 6.7% |
| all_states | 213 | 40.8% | 44.6% | 5.6% |
| us_supreme_court | 193 | 66.3% | 0.0% | 23.3% |
| all_states_and_federal | 168 | 50.6% | 0.0% | 10.1% |

### By connector template

| Template | Queries | Perfect | Empty | Opinions failing full-text check |
|---|---:|---:|---:|---:|
| wl-numeric | 325 | 65.2% | 19.4% | 7/57 |
| lx-w-s | 323 | 67.5% | 16.4% | 8/64 |
| wl-para-and | 315 | 66.7% | 20.3% | 4/55 |
| wl-or-group | 315 | 75.2% | 9.8% | 5/63 |
| or-and-not | 310 | 83.9% | 4.2% | 12/86 |
| wl-root-para | 302 | 52.3% | 25.8% | 9/39 |
| lx-w-n | 300 | 59.3% | 24.0% | 5/55 |
| and-not | 294 | 79.9% | 7.8% | 11/74 |
| wl-root-near | 285 | 56.5% | 27.7% | 5/24 |
| wl-sentence | 282 | 62.1% | 22.3% | 9/57 |
| wl-but-not | 281 | 14.6% | 83.6% | 0/0 |
| wl-ordered | 281 | 60.9% | 22.4% | 6/45 |
| lx-w-p-and | 277 | 63.9% | 21.7% | 6/59 |
| three-and | 274 | 84.7% | 6.2% | 4/72 |

### keyword vs auto

| searchType | Queries | Perfect | Empty | Landmark top-10 | Opinions failing full-text boolean check |
|---|---:|---:|---:|---:|---:|
| keyword | 4164 | 64.0% | 22.0% | 719/1149 | 91/750 |
| auto | 0 | n/a | n/a | 0/0 | 0/0 |

### Bluebook lint on search-result citation lines

| Issue | Hits |
|---|---:|
| t6_unabbreviated | 6439 |
| no_locator | 5522 |
| t10_unabbreviated | 1045 |
| and_not_ampersand | 566 |
| name_too_long | 561 |
| local_rule_court_form | 452 |
| all_caps_name | 436 |
| reporter_not_t1 | 247 |
| redundant_business_designation | 182 |
| descriptive_phrase_in_name | 137 |
| unparseable | 122 |
| multiple_parties | 110 |
| reporter_spacing | 105 |
| leading_the | 86 |
| party_role_in_name | 48 |
| usa_long_form | 35 |
| v_form | 33 |
| et_al | 16 |
| no_year | 10 |
| state_long_form | 9 |

### Courts the grader could not place (scope not graded for these hits)

| Court \| jurisdiction | Hits |
|---|---:|
| null \| null | 63 |
| Patent Trial and Appeal Board \| Federal | 6 |
| Trademark Trial and Appeal Board \| Federal | 1 |
| High Court of American Samoa \| American Samoa | 1 |

## Good-law detail

| Group | Rows | Truth | Perfect | Caught / kept clean | Unresolved |
|---|---:|---|---:|---:|---:|

Status values seen: .

Presumed-good cases the API flags negative (0) are listed in `problems-goodlaw.md` with the negative citation it relied on, for a lawyer to confirm.

## Bluebook off-cite detail

| Defect | Rows | Perfect | Verdict wrong | No correction | Locator | Year | Court | Case name |
|---|---:|---:|---:|---:|---:|---:|---:|---:|

Sources excluded before mangling (control lookup could not give a clean court/year): 130. Year conflicts between a curated source cite and the corpus: 1 (listed in the answer key under `excludedSources`).

## Cite check, carried forward

| Family | Rows | Perfect | Partial | Fail |
|---|---:|---:|---:|---:|

## Opinion output detail

| Check | Opinions failing |
|---|---:|

By court group: .
