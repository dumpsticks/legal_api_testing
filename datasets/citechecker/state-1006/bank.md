# CiteCheck Test Bank

A reusable, model-independent test corpus for `POST /api/v1/citecheck/cite`. Every case states the input, the ground truth, and the graded answer key. This document contains **no API output** — it is the test, not a result. Run results live in `docs/headtohead[USPS].md` and `docs/headtoheadSUMMARY.md`.

**Cases:** 1006 across 51 sections.

**Difficulty mix:** 252 moderate, 293 hard, 461 expert.

## How to read the answer key

Each case carries three ordered verdict sets:

| Field | Meaning | Credit |
|---|---|---:|
| **Accept** | Fully correct answer(s). | 10/10 |
| **Partial** | Defensible but weaker — usually a hedge where a commitment was possible. | 6/10 |
| **Reject** | Affirmatively wrong. Treat as a correctness bug, not a tuning miss. | 0/10 |

A verdict in none of the three sets also scores 0, reported as *outside the answer key*. Secondary assertions (`expectMinUnits`, `expectCandidateName`, `expectCorrectedContains`) each deduct one point when violated, so a case can score 9/10 with the right verdict but a missing candidate.

**Timeouts are not answers.** A row that comes back `error` with `lookupStatus: deadline_exceeded` (or `skipped_budget` / `failed`) exhausted the sync soft-lookup budget without producing a verdict. Those cases are excluded from the denominator and reported separately, because counting them as wrong answers measures latency while appearing to measure accuracy. The exception is a case whose Accept set already contains `error` — there the error *is* the expected answer.

### Verdict vocabulary

| Verdict | Means |
|---|---|
| `valid` | Resolves cleanly; `correctedCitation` carries Bluebook form. |
| `name_mismatch` | Locator resolves to a real case, but party names / year / court differ. |
| `page_mismatch` | Locator targets an internal pin page, not the first page. |
| `likely_valid` | Candidates offered, deliberately no pick. |
| `implausible` | Series or volume cannot exist. Strong fabrication signal. |
| `not_in_corpus` | Searched a range we hold; no match. |
| `not_covered` | Range not held / not searchable, or input unparseable. |
| `unverified` | No source could confirm or deny. |
| `error` | This row could not be checked (includes soft-lookup deadline). |

## Reviewer checklist

This bank is meant to be audited by a stronger model or a human before it is trusted as ground truth. When reviewing, confirm each of the following and correct the answer key in place:

1. **Ground truth is factually right.** Does the case actually begin on the page claimed? Is the year and court correct? Is the parallel cite real?
2. **Fabrications are actually fabrications.** Cases marked as nonexistent must not turn out to be real authorities. Any case whose note says `FLAGGED FOR REVIEW` needs external confirmation.
3. **Accept sets are not too narrow.** If a hedge is genuinely as correct as a commitment, move it from Partial to Accept.
4. **Reject sets are not too broad.** Only list a verdict as Reject when it is affirmatively wrong, not merely suboptimal.
5. **Reporter ceilings are current.** Volume-ceiling cases (`implausible`) drift as new volumes publish. Re-verify ceilings for U.S., F.3d/F.4th, I. & N. Dec., T.C., and U.S.P.Q.2d.
6. **Good-law cases separate two questions.** A citation to an overruled case is still an *accurate citation*; `valid` is correct, and the negative treatment belongs in the candidate payload.
7. **Statute and rule coverage.** Where an authority family is not mirrored, an honest coverage verdict must stay in Accept — do not demand `valid` for something the corpus cannot confirm.

## Section index

| Section | Cases | Moderate | Hard | Expert |
|---|---:|---:|---:|---:|
| [Federal, tax, immigration, IP, constitution & rules](#national) | 32 | 2 | 9 | 21 |
| [Alaska (AK)](#state-ak) | 19 | 5 | 5 | 9 |
| [Alabama (AL)](#state-al) | 19 | 5 | 5 | 9 |
| [Arkansas (AR)](#state-ar) | 19 | 5 | 6 | 8 |
| [Arizona (AZ)](#state-az) | 20 | 5 | 6 | 9 |
| [California (CA)](#state-ca) | 20 | 5 | 6 | 9 |
| [Colorado (CO)](#state-co) | 19 | 5 | 5 | 9 |
| [Connecticut (CT)](#state-ct) | 19 | 5 | 6 | 8 |
| [Delaware (DE)](#state-de) | 19 | 5 | 5 | 9 |
| [Florida (FL)](#state-fl) | 19 | 5 | 5 | 9 |
| [Georgia (GA)](#state-ga) | 20 | 5 | 6 | 9 |
| [Hawaii (HI)](#state-hi) | 19 | 5 | 6 | 8 |
| [Iowa (IA)](#state-ia) | 19 | 5 | 5 | 9 |
| [Idaho (ID)](#state-id) | 20 | 5 | 6 | 9 |
| [Illinois (IL)](#state-il) | 20 | 5 | 6 | 9 |
| [Indiana (IN)](#state-in) | 19 | 5 | 5 | 9 |
| [Kansas (KS)](#state-ks) | 19 | 5 | 6 | 8 |
| [Kentucky (KY)](#state-ky) | 19 | 5 | 5 | 9 |
| [Louisiana (LA)](#state-la) | 19 | 5 | 5 | 9 |
| [Massachusetts (MA)](#state-ma) | 20 | 5 | 6 | 9 |
| [Maryland (MD)](#state-md) | 20 | 5 | 6 | 9 |
| [Maine (ME)](#state-me) | 20 | 5 | 6 | 9 |
| [Michigan (MI)](#state-mi) | 19 | 5 | 6 | 8 |
| [Minnesota (MN)](#state-mn) | 19 | 5 | 5 | 9 |
| [Missouri (MO)](#state-mo) | 19 | 5 | 5 | 9 |
| [Mississippi (MS)](#state-ms) | 19 | 5 | 5 | 9 |
| [Montana (MT)](#state-mt) | 20 | 5 | 6 | 9 |
| [North Carolina (NC)](#state-nc) | 20 | 5 | 6 | 9 |
| [North Dakota (ND)](#state-nd) | 19 | 5 | 5 | 9 |
| [Nebraska (NE)](#state-ne) | 19 | 5 | 6 | 8 |
| [New Hampshire (NH)](#state-nh) | 20 | 5 | 6 | 9 |
| [New Jersey (NJ)](#state-nj) | 20 | 5 | 6 | 9 |
| [New Mexico (NM)](#state-nm) | 19 | 5 | 6 | 8 |
| [Nevada (NV)](#state-nv) | 19 | 5 | 6 | 8 |
| [New York (NY)](#state-ny) | 19 | 5 | 6 | 8 |
| [Ohio (OH)](#state-oh) | 20 | 5 | 6 | 9 |
| [Oklahoma (OK)](#state-ok) | 20 | 5 | 6 | 9 |
| [Oregon (OR)](#state-or) | 20 | 5 | 6 | 9 |
| [Pennsylvania (PA)](#state-pa) | 20 | 5 | 6 | 9 |
| [Rhode Island (RI)](#state-ri) | 19 | 5 | 5 | 9 |
| [South Carolina (SC)](#state-sc) | 20 | 5 | 6 | 9 |
| [South Dakota (SD)](#state-sd) | 20 | 5 | 6 | 9 |
| [Tennessee (TN)](#state-tn) | 19 | 5 | 5 | 9 |
| [Texas (TX)](#state-tx) | 20 | 5 | 6 | 9 |
| [Utah (UT)](#state-ut) | 19 | 5 | 6 | 8 |
| [Virginia (VA)](#state-va) | 20 | 5 | 6 | 9 |
| [Vermont (VT)](#state-vt) | 20 | 5 | 6 | 9 |
| [Washington (WA)](#state-wa) | 20 | 5 | 6 | 9 |
| [Wisconsin (WI)](#state-wi) | 20 | 5 | 6 | 9 |
| [West Virginia (WV)](#state-wv) | 20 | 5 | 6 | 9 |
| [Wyoming (WY)](#state-wy) | 19 | 5 | 5 | 9 |

## Federal, tax, immigration, IP, constitution & rules

<a id="national"></a>

### US-01 — `federal_landmark` (moderate)

| | |
|---|---|
| **Input** | `Brown v. Board of Education, 347 U.S. 483 (1954)` |
| **Probe** | Landmark Supreme Court citation, fully correct. |
| **Ground truth** | Brown v. Board of Education of Topeka, 347 U.S. 483 (1954). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Brown |

### US-02 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Miranda v. Arizona, 86 S. Ct. 1602 (1966)` |
| **Probe** | Supreme Court decision cited to S. Ct. rather than U.S. |
| **Ground truth** | Miranda v. Arizona, 384 U.S. 436 (1966), parallel 86 S. Ct. 1602. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **correctedCitation contains** | `U.S.` |
| **Reviewer note** | If it resolves, Bluebook form should prefer 384 U.S. 436 per T1.1. |

### US-03 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Chevron U.S.A. Inc. v. Natural Resources Defense Council, Inc., 467 U.S. 843 (1984)` |
| **Probe** | Correct first page for Chevron — control case for the pin-cite tests. |
| **Ground truth** | Chevron begins at 467 U.S. 837; 843 is the famous two-step pin page. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `valid`, `likely_valid` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Reviewer note** | The most-miscited pin in American law. 843 is inside the opinion, so page_mismatch with a correction to 837 is the ideal answer. |

### US-04 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Roe v. Wade, 410 U.S. 179 (1973)` |
| **Probe** | Real caption over the locator of the companion case decided the same day. |
| **Ground truth** | Roe v. Wade is 410 U.S. 113 (1973); 410 U.S. 179 is Doe v. Bolton (1973). |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Both halves are real; only the pairing is wrong. `valid` is a correctness bug. |

### US-05 — `name_mismatch` (hard)

| | |
|---|---|
| **Input** | `Hollingsworth v. Perrymount, 570 U.S. 744 (2013)` |
| **Probe** | Real U.S. Reports locator with a fabricated caption. |
| **Ground truth** | 570 U.S. 744 is United States v. Windsor (2013). |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hollingsworth v. Perry is a real 2013 case at 570 U.S. 693 — the fabricated party name makes this a mismatch, not a valid cite. |

### US-06 — `implausible` (hard)

| | |
|---|---|
| **Input** | `812 U.S. 44 (2019)` |
| **Probe** | U.S. Reports volume above the published ceiling. |
| **Ground truth** | U.S. Reports is in the 600s; volume 812 does not exist. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch` |

### US-07 — `federal_fabrication` (expert)

| | |
|---|---|
| **Input** | `Varghese v. China Southern Airlines Co., 925 F.3d 1339 (11th Cir. 2019)` |
| **Probe** | The canonical ChatGPT-fabricated case from Mata v. Avianca. |
| **Ground truth** | Varghese does not exist; it was invented by ChatGPT and sanctioned in Mata v. Avianca, Inc., 678 F. Supp. 3d 443 (S.D.N.Y. 2023). 925 F.3d 1339 is a different, real case. |
| **Accept (10/10)** | `name_mismatch`, `not_in_corpus`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Highest-value single test in the bank. `valid` here reproduces the exact failure that got lawyers sanctioned. |

### US-08 — `federal_fabrication` (expert)

| | |
|---|---|
| **Input** | `Shaboon v. Egyptair, 2013 IL App (1st) 111279-U, 2013 WL 3963583` |
| **Probe** | Another fabricated authority from the same sanctions record. |
| **Ground truth** | Cited in Mata v. Avianca as nonexistent/unverifiable. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified`, `name_mismatch` |
| **Partial (6/10)** | `implausible`, `error` |
| **Reject (0/10)** | `valid` |

### US-09 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Bell Atlantic Corp. v. Twombly, 550 U.S. 544 (2007), rev'd, 999 U.S. 1 (2024)` |
| **Probe** | Real primary with an impossible reversal tail. |
| **Ground truth** | Twombly is real; 999 U.S. 1 cannot exist, and Twombly was never reversed. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | History unit must be rejected; primary must stay valid. |

### US-10 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Plessy v. Ferguson, 163 U.S. 537 (1896)` |
| **Probe** | Accurate citation to an overruled decision. |
| **Ground truth** | The citation is correct. Plessy was overruled by Brown v. Board of Education, 347 U.S. 483 (1954). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `implausible`, `not_in_corpus` |
| **Reviewer note** | Citation accuracy and good-law status are different questions. `valid` is correct; the candidate should surface the negative treatment. |

### US-11 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Chevron U.S.A., Inc. v. Natural Res. Def. Council, Inc., 467 U.S. 837 (1984)` |
| **Probe** | Correct cite to a decision overruled in 2024. |
| **Ground truth** | Correct citation. Overruled by Loper Bright Enterprises v. Raimondo, 603 U.S. 369 (2024). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_in_corpus`, `name_mismatch` |
| **Reviewer note** | This is the correct first page (837). Verdict must be valid. |

### US-12 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Twombly, 550 U.S. at 570` |
| **Probe** | Bluebook R10.9 short form with the pleading-standard pin. |
| **Ground truth** | Short form for Bell Atlantic Corp. v. Twombly, 550 U.S. 544, 570 (2007). |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |

### US-13 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Ashcroft v. Iqbal, 556 U.S. 662 (2009); Bell Atlantic Corp. v. Twombly, 550 U.S. 544 (2007); Conley v. Gibson, 355 U.S. 41 (1957)` |
| **Probe** | Three-authority string cite, all real. |
| **Ground truth** | All three citations are correct as written. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `name_mismatch` |
| **Min units** | 3 |
| **Reviewer note** | Expansion into three units, all valid, is the ideal answer. |

### US-14 — `wrong_state_regional` (expert)

| | |
|---|---|
| **Input** | `Palsgraf v. Long Island Railroad Co., 162 N.E. 99 (Mass. 1928)` |
| **Probe** | Correct locator for Palsgraf with the wrong state court. |
| **Ground truth** | Palsgraf is a New York Court of Appeals decision: 248 N.Y. 339, 162 N.E. 99 (1928). Not Massachusetts. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible`, `not_in_corpus` |
| **Reviewer note** | N.E. covers both states, so the locator resolves — the court parenthetical is what is wrong. |

### TAX-01 — `tax_authority` (hard)

| | |
|---|---|
| **Input** | `26 U.S.C. § 162(a)` |
| **Probe** | Core Internal Revenue Code section in Bluebook form. |
| **Ground truth** | IRC 162(a) allows deduction of ordinary and necessary business expenses. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |

### TAX-02 — `tax_authority` (expert)

| | |
|---|---|
| **Input** | `Welch v. Helvering, 290 U.S. 111 (1933)` |
| **Probe** | Foundational tax decision defining ordinary and necessary. |
| **Ground truth** | Welch v. Helvering, 290 U.S. 111 (1933). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `name_mismatch` |

### TAX-03 — `tax_authority` (expert)

| | |
|---|---|
| **Input** | `Treas. Reg. § 1.162-4` |
| **Probe** | Treasury regulation citation form (Bluebook R14.2). |
| **Ground truth** | Treas. Reg. 1.162-4 addresses repairs and maintenance deductions. |
| **Accept (10/10)** | `valid`, `likely_valid`, `unverified`, `not_covered` |
| **Partial (6/10)** | `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch` |
| **Reviewer note** | Regulation families may not be mirrored; honest coverage answers are fine. |

### TAX-04 — `tax_authority` (expert)

| | |
|---|---|
| **Input** | `Estate of Fenwick v. Commissioner, 142 T.C. 88 (2014)` |
| **Probe** | Tax Court reporter cite with a likely-fabricated caption. |
| **Ground truth** | T.C. volume 142 exists (2014), but no reported Estate of Fenwick decision at page 88. Reviewer should confirm against the T.C. volume index. |
| **Accept (10/10)** | `name_mismatch`, `not_in_corpus`, `likely_valid`, `not_covered` |
| **Partial (6/10)** | `unverified`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | FLAGGED FOR REVIEW: verify no such T.C. case before treating `valid` as a failure. |

### TAX-05 — `tax_authority` (expert)

| | |
|---|---|
| **Input** | `Rev. Rul. 99-7, 1999-1 C.B. 361` |
| **Probe** | Revenue Ruling citation form (Bluebook T1.2). |
| **Ground truth** | Rev. Rul. 99-7, 1999-1 C.B. 361, governs deductibility of daily transportation costs. |
| **Accept (10/10)** | `valid`, `likely_valid`, `unverified`, `not_covered` |
| **Partial (6/10)** | `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch` |

### IMM-01 — `immigration_authority` (hard)

| | |
|---|---|
| **Input** | `8 U.S.C. § 1101(a)(42)` |
| **Probe** | INA refugee definition, cited to the U.S. Code. |
| **Ground truth** | INA 101(a)(42) = 8 U.S.C. 1101(a)(42), the refugee definition. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch` |

### IMM-02 — `immigration_authority` (expert)

| | |
|---|---|
| **Input** | `Matter of Acosta, 19 I. & N. Dec. 211 (BIA 1985)` |
| **Probe** | BIA precedent decision in Bluebook administrative form. |
| **Ground truth** | Matter of Acosta, 19 I. & N. Dec. 211 (BIA 1985), defined particular social group. |
| **Accept (10/10)** | `valid`, `likely_valid`, `not_covered`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `name_mismatch` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | I. & N. Dec. may be outside the case corpus; honest coverage answers are fine. |

### IMM-03 — `immigration_authority` (expert)

| | |
|---|---|
| **Input** | `INS v. Cardoza-Fonseca, 480 U.S. 421 (1987)` |
| **Probe** | Supreme Court asylum standard decision. |
| **Ground truth** | INS v. Cardoza-Fonseca, 480 U.S. 421 (1987). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `name_mismatch` |

### IMM-04 — `immigration_authority` (expert)

| | |
|---|---|
| **Input** | `Matter of Velasquez-Ortiz, 31 I. & N. Dec. 902 (BIA 2024)` |
| **Probe** | Plausible-looking BIA cite with a volume beyond the published series. |
| **Ground truth** | I. & N. Dec. is in the 28-29 range as of the mid-2020s; volume 31 is not published. |
| **Accept (10/10)** | `implausible`, `not_in_corpus`, `not_covered`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `valid` |

### IP-01 — `ip_authority` (hard)

| | |
|---|---|
| **Input** | `35 U.S.C. § 101` |
| **Probe** | Patent-eligibility statute. |
| **Ground truth** | 35 U.S.C. 101 defines patentable subject matter. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch` |

### IP-02 — `ip_authority` (expert)

| | |
|---|---|
| **Input** | `Alice Corp. Pty. Ltd. v. CLS Bank International, 573 U.S. 208 (2014)` |
| **Probe** | Controlling patent-eligibility decision. |
| **Ground truth** | Alice Corp. v. CLS Bank Intl, 573 U.S. 208 (2014). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `name_mismatch` |

### IP-03 — `ip_authority` (expert)

| | |
|---|---|
| **Input** | `In re Bilski, 545 F.3d 943 (Fed. Cir. 2008) (en banc)` |
| **Probe** | Federal Circuit en banc decision with a procedural parenthetical. |
| **Ground truth** | In re Bilski, 545 F.3d 943 (Fed. Cir. 2008) (en banc). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Reviewer note** | The (en banc) parenthetical must not break parsing. |

### IP-04 — `ip_authority` (expert)

| | |
|---|---|
| **Input** | `In re Chippendale Holdings, 118 U.S.P.Q.2d 1445 (T.T.A.B. 2016)` |
| **Probe** | TTAB decision in U.S.P.Q.2d with a fabricated caption. |
| **Ground truth** | U.S.P.Q.2d volume 118 corresponds to 2016, but no such TTAB decision is reported at page 1445. Reviewer should confirm. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `unverified`, `likely_valid`, `name_mismatch` |
| **Partial (6/10)** | `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | FLAGGED FOR REVIEW: U.S.P.Q.2d is rarely mirrored; coverage answers expected. |

### IP-05 — `ip_authority` (expert)

| | |
|---|---|
| **Input** | `15 U.S.C. § 1125(a)` |
| **Probe** | Lanham Act 43(a) false-designation provision. |
| **Ground truth** | Lanham Act 43(a) = 15 U.S.C. 1125(a). |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch` |

### CON-01 — `constitution_rule` (moderate)

| | |
|---|---|
| **Input** | `U.S. Const. amend. XIV, § 1` |
| **Probe** | Constitutional citation (Bluebook R11). |
| **Ground truth** | Fourteenth Amendment, Section 1 — due process and equal protection. |
| **Accept (10/10)** | `valid`, `likely_valid`, `not_covered`, `unverified` |
| **Partial (6/10)** | `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |

### CON-02 — `constitution_rule` (hard)

| | |
|---|---|
| **Input** | `Fed. R. Civ. P. 12(b)(6)` |
| **Probe** | Federal rule citation (Bluebook R12.9.3). |
| **Ground truth** | Rule 12(b)(6) — failure to state a claim. |
| **Accept (10/10)** | `valid`, `likely_valid`, `not_covered`, `unverified` |
| **Partial (6/10)** | `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch` |

### CON-03 — `constitution_rule` (expert)

| | |
|---|---|
| **Input** | `Fed. R. Civ. P. 97(z)(14)` |
| **Probe** | Real rule set, nonexistent rule number. |
| **Ground truth** | The FRCP end at Rule 86; there is no Rule 97. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |

### CON-04 — `constitution_rule` (expert)

| | |
|---|---|
| **Input** | `U.S. Const. amend. XXVIII` |
| **Probe** | Amendment that does not exist. |
| **Ground truth** | The Constitution has 27 ratified amendments; there is no Twenty-Eighth. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |

## Alaska (AK)

<a id="state-ak"></a>

### AK-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Zeman v. Lufthansa German Airlines, 699 P.2d 1274 (1985)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Zeman v. Lufthansa German Airlines is reported at 699 P.2d 1274 (1985); cited 165 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Zeman v. Lufthansa German Airlines |

### AK-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `699 P.2d 1274` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 699 P.2d 1274 is Zeman v. Lufthansa German Airlines (1985). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Zeman v. Lufthansa German Airlines |

### AK-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Zeman v. Lufthansa German Airlines, 1985 Alas. LEXIS 269` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1985 Alas. LEXIS 269 is a secondary locator for Zeman v. Lufthansa German Airlines; Bluebook form is 699 P.2d 1274. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `P.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### AK-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 699 P.2d 1274 (1985)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 699 P.2d 1274 is Zeman v. Lufthansa German Airlines, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Zeman v. Lufthansa German Airlines |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### AK-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Zeman v. Lufthansa German Airlines, 699 P.2d 1277 (1985)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Zeman v. Lufthansa German Airlines begins at page 1274, not 1277. Page 1277 is verified not to be any other case's first page in 699 P.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Zeman v. Lufthansa German Airlines |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### AK-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Zeman v. Lufthansa German Airlines, 699 P.2d 1265 (1985)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 699 P.2d 1265 is Tolan v. ERA Helicopters, Inc. (1985), not Zeman v. Lufthansa German Airlines. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### AK-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Zeman v. Lufthansa German Airlines, 699 P.2d 1274 (Wash. 1991)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Zeman v. Lufthansa German Airlines is a 1985 Alaska decision, not a 1991 Wash. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### AK-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Zeman v. Lufthansa German Airlines, 996 P.2d 1274 (1985)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 699 P.2d 1274. Volume 996 carries no case at page 1274 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### AK-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Zeman, 699 P.2d at 1278` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Zeman v. Lufthansa German Airlines, 699 P.2d 1274; pin 1278 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### AK-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 1277` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### AK-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Zeman v. Lufthansa German Airlines, 699 P.2d 1274 (1985); Marbury v. Quillon, 88888 P.2d 9 (1987)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (699 P.2d 1274); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### AK-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Zeman v. Lufthansa German Airlines, 699 P.2d 1274 (1985), aff'd, 999 F.3d 1 (11th Cir. 1988)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 699 P.2d 1274 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### AK-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Alaska Stat. § 09.55.580` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Alaska Stat. § 09.55.580 is a real provision of Alaska law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### AK-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Alaska Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Alaska code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### AK-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 P.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | P.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### AK-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Zeman v. Lufthansa German Airlines, 12 Alaska Sup. Rptr. 4th 88 (1985)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Alaska Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### AK-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Zeman v. Lufthansa German Airlines, 1985 WL 9999999 (Alaska 1985)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Zeman v. Lufthansa German Airlines has a print cite (699 P.2d 1274); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### AK-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Wetherhorn v. Alaska Psychiatric Institute, 156 P.3d 371 (2007)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Wetherhorn v. Alaska Psychiatric Institute carries good-law status "overruled" with 4 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### AK-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Alaska cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Alabama (AL)

<a id="state-al"></a>

### AL-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `West v. Founders Life Assur. Co. of Florida, 547 So. 2d 870 (1989)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | West v. Founders Life Assur. Co. of Florida is reported at 547 So. 2d 870 (1989); cited 1765 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | West v. Founders Life Assur. Co. of Florida |

### AL-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `547 So. 2d 870` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 547 So. 2d 870 is West v. Founders Life Assur. Co. of Florida (1989). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | West v. Founders Life Assur. Co. of Florida |

### AL-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `West v. Founders Life Assur. Co. of Florida, 1989 Ala. LEXIS 446` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1989 Ala. LEXIS 446 is a secondary locator for West v. Founders Life Assur. Co. of Florida; Bluebook form is 547 So. 2d 870. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `So. 2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### AL-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 547 So. 2d 870 (1989)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 547 So. 2d 870 is West v. Founders Life Assur. Co. of Florida, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | West v. Founders Life Assur. Co. of Florida |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### AL-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `West v. Founders Life Assur. Co. of Florida, 547 So. 2d 874 (1989)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | West v. Founders Life Assur. Co. of Florida begins at page 870, not 874. Page 874 is verified not to be any other case's first page in 547 So. 2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | West v. Founders Life Assur. Co. of Florida |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### AL-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `West v. Founders Life Assur. Co. of Florida, 547 So. 2d 868 (1989)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 547 So. 2d 868 is Wilson v. City of Bessemer (1989), not West v. Founders Life Assur. Co. of Florida. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### AL-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `West v. Founders Life Assur. Co. of Florida, 547 So. 2d 870 (Ga. 1995)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | West v. Founders Life Assur. Co. of Florida is a 1989 Alabama decision, not a 1995 Ga. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### AL-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `West v. Founders Life Assur. Co. of Florida, 745 So. 2d 870 (1989)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 547 So. 2d 870. Volume 745 carries no case at page 870 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### AL-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `West, 547 So. 2d at 874` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for West v. Founders Life Assur. Co. of Florida, 547 So. 2d 870; pin 874 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### AL-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 873` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### AL-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `West v. Founders Life Assur. Co. of Florida, 547 So. 2d 870 (1989); Marbury v. Quillon, 88888 So. 2d 9 (1991)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (547 So. 2d 870); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### AL-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `West v. Founders Life Assur. Co. of Florida, 547 So. 2d 870 (1989), aff'd, 999 F.3d 1 (11th Cir. 1992)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 547 So. 2d 870 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### AL-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Ala. Code § 6-5-410` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Ala. Code § 6-5-410 is a real provision of Alabama law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### AL-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Ala. Code § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Alabama code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### AL-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 So. 2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | So. 2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### AL-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `West v. Founders Life Assur. Co. of Florida, 12 Ala. Sup. Rptr. 4th 88 (1989)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Ala. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### AL-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `West v. Founders Life Assur. Co. of Florida, 1989 WL 9999999 (Ala. 1989)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | West v. Founders Life Assur. Co. of Florida has a print cite (547 So. 2d 870); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### AL-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Clements v. State, 370 So. 2d 723 (1979)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Clements v. State carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### AL-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Alabama cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Arkansas (AR)

<a id="state-ar"></a>

### AR-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Finn v. McCuen, 303 Ark. 418 (1990)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Finn v. McCuen is reported at 303 Ark. 418 (1990); cited 416 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Finn v. McCuen |

### AR-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `303 Ark. 418` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 303 Ark. 418 is Finn v. McCuen (1990). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Finn v. McCuen |

### AR-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Finn v. McCuen, 798 S.W.2d 34 (1990)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Finn v. McCuen carries parallel cites 303 Ark. 418 / 798 S.W.2d 34. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Finn v. McCuen |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### AR-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Finn v. McCuen, 1990 Ark. LEXIS 491` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1990 Ark. LEXIS 491 is a secondary locator for Finn v. McCuen; Bluebook form is 303 Ark. 418. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Ark.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### AR-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 303 Ark. 418 (1990)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 303 Ark. 418 is Finn v. McCuen, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Finn v. McCuen |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### AR-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Finn v. McCuen, 303 Ark. 421 (1990)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Finn v. McCuen begins at page 418, not 421. Page 421 is verified not to be any other case's first page in 303 Ark.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Finn v. McCuen |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### AR-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Finn v. McCuen, 303 Ark. 415 (1990)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 303 Ark. 415 is Donn v. McCuen (1990), not Finn v. McCuen. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### AR-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Finn v. McCuen, 303 Ark. 418 (Mo. 1996)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Finn v. McCuen is a 1990 Arkansas decision, not a 1996 Mo. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### AR-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Finn, 303 Ark. at 422` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Finn v. McCuen, 303 Ark. 418; pin 422 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### AR-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 421` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### AR-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Finn v. McCuen, 303 Ark. 418 (1990); Marbury v. Quillon, 88888 Ark. 9 (1992)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (303 Ark. 418); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### AR-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Finn v. McCuen, 303 Ark. 418 (1990), aff'd, 999 F.3d 1 (11th Cir. 1993)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 303 Ark. 418 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### AR-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Ark. Code Ann. § 16-56-105` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Ark. Code Ann. § 16-56-105 is a real provision of Arkansas law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### AR-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Ark. Code Ann. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Arkansas code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### AR-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Ark. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Ark. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### AR-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Finn v. McCuen, 12 Ark. Sup. Rptr. 4th 88 (1990)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Ark. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### AR-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Finn v. McCuen, 1990 WL 9999999 (Ark. 1990)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Finn v. McCuen has a print cite (303 Ark. 418); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### AR-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `In Re Memorandum Opinions, 700 S.W.2d 63 (1985)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. In Re Memorandum Opinions carries good-law status "overruled" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### AR-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Arkansas cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Arizona (AZ)

<a id="state-az"></a>

### AZ-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `State v. Henderson, 210 Ariz. 561 (2005)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | State v. Henderson is reported at 210 Ariz. 561 (2005); cited 950 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Henderson |

### AZ-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `210 Ariz. 561` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 210 Ariz. 561 is State v. Henderson (2005). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Henderson |

### AZ-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Henderson, 115 P.3d 601 (2005)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | State v. Henderson carries parallel cites 210 Ariz. 561 / 115 P.3d 601. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Henderson |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### AZ-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `State v. Henderson, 456 Ariz. Adv. Rep. 10` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 456 Ariz. Adv. Rep. 10 is a secondary locator for State v. Henderson; Bluebook form is 210 Ariz. 561. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Ariz.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### AZ-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 210 Ariz. 561 (2005)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 210 Ariz. 561 is State v. Henderson, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | State v. Henderson |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### AZ-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Henderson, 210 Ariz. 564 (2005)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | State v. Henderson begins at page 561, not 564. Page 564 is verified not to be any other case's first page in 210 Ariz.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | State v. Henderson |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### AZ-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `State v. Henderson, 210 Ariz. 554 (2005)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 210 Ariz. 554 is State v. Fell (2005), not State v. Henderson. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### AZ-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Henderson, 210 Ariz. 561 (N.M. 2011)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | State v. Henderson is a 2005 Arizona decision, not a 2011 N.M. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### AZ-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `State v. Henderson, 12 Ariz. 561 (2005)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 210 Ariz. 561. Volume 12 carries no case at page 561 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### AZ-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Henderson, 210 Ariz. at 565` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for State v. Henderson, 210 Ariz. 561; pin 565 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### AZ-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 564` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### AZ-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `State v. Henderson, 210 Ariz. 561 (2005); Marbury v. Quillon, 88888 Ariz. 9 (2007)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (210 Ariz. 561); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### AZ-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `State v. Henderson, 210 Ariz. 561 (2005), aff'd, 999 F.3d 1 (11th Cir. 2008)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 210 Ariz. 561 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### AZ-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Ariz. Rev. Stat. § 13-1204` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Ariz. Rev. Stat. § 13-1204 is a real provision of Arizona law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### AZ-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Ariz. Rev. Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Arizona code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### AZ-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Ariz. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Ariz. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### AZ-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `State v. Henderson, 12 Ariz. Sup. Rptr. 4th 88 (2005)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Ariz. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### AZ-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Henderson, 2005 WL 9999999 (Ariz. 2005)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | State v. Henderson has a print cite (210 Ariz. 561); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### AZ-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Donnelly Const. Co. v. Oberg/Hunt/Gilleland, 677 P.2d 1292 (1984)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Donnelly Const. Co. v. Oberg/Hunt/Gilleland carries good-law status "negative" with 4 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### AZ-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Arizona cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## California (CA)

<a id="state-ca"></a>

### CA-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `People v. Kelly, 51 Cal. Rptr. 3d 98 (2006)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | People v. Kelly is reported at 51 Cal. Rptr. 3d 98 (2006); cited 2837 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. Kelly |

### CA-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `51 Cal. Rptr. 3d 98` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 51 Cal. Rptr. 3d 98 is People v. Kelly (2006). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. Kelly |

### CA-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `People v. Kelly, 146 P.3d 547 (2006)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | People v. Kelly carries parallel cites 51 Cal. Rptr. 3d 98 / 146 P.3d 547 / 40 Cal. 4th 106 / 2006 Daily Journal DAR 15444 / 2006 Cal. Daily Op. Serv. 10808. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. Kelly |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### CA-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `People v. Kelly, 2006 Cal. LEXIS 13945` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2006 Cal. LEXIS 13945 is a secondary locator for People v. Kelly; Bluebook form is 51 Cal. Rptr. 3d 98. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Cal. Rptr. 3d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### CA-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 51 Cal. Rptr. 3d 98 (2006)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 51 Cal. Rptr. 3d 98 is People v. Kelly, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | People v. Kelly |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### CA-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `People v. Kelly, 51 Cal. Rptr. 3d 101 (2006)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | People v. Kelly begins at page 98, not 101. Page 101 is verified not to be any other case's first page in 51 Cal. Rptr. 3d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | People v. Kelly |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### CA-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `People v. Kelly, 51 Cal. Rptr. 3d 80 (2006)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 51 Cal. Rptr. 3d 80 is People v. Wright (2006), not People v. Kelly. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### CA-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `People v. Kelly, 51 Cal. Rptr. 3d 98 (Nev. 2012)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | People v. Kelly is a 2006 California decision, not a 2012 Nev. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### CA-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `People v. Kelly, 15 Cal. Rptr. 3d 98 (2006)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 51 Cal. Rptr. 3d 98. Volume 15 carries no case at page 98 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### CA-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Kelly, 51 Cal. Rptr. 3d at 102` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for People v. Kelly, 51 Cal. Rptr. 3d 98; pin 102 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### CA-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 101` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### CA-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `People v. Kelly, 51 Cal. Rptr. 3d 98 (2006); Marbury v. Quillon, 88888 Cal. Rptr. 3d 9 (2008)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (51 Cal. Rptr. 3d 98); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### CA-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `People v. Kelly, 51 Cal. Rptr. 3d 98 (2006), aff'd, 999 F.3d 1 (11th Cir. 2009)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 51 Cal. Rptr. 3d 98 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### CA-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Cal. Civ. Code § 1714` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Cal. Civ. Code § 1714 is a real provision of California law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### CA-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Cal. Civ. Code § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the California code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### CA-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Cal. Rptr. 3d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Cal. Rptr. 3d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### CA-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `People v. Kelly, 12 Cal. Sup. Rptr. 4th 88 (2006)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Cal. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### CA-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `People v. Kelly, 2006 WL 9999999 (Cal. 2006)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | People v. Kelly has a print cite (51 Cal. Rptr. 3d 98); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### CA-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `People v. Dorado, 62 Cal. 2d 338 (1965)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. People v. Dorado carries good-law status "negative" with 2 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### CA-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the California cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Colorado (CO)

<a id="state-co"></a>

### CO-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `People v. District Court, Second Judicial District, 713 P.2d 918 (1986)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | People v. District Court, Second Judicial District is reported at 713 P.2d 918 (1986); cited 354 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. District Court, Second Judicial District |

### CO-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `713 P.2d 918` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 713 P.2d 918 is People v. District Court, Second Judicial District (1986). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. District Court, Second Judicial District |

### CO-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `People v. District Court, Second Judicial District, 1986 Colo. LEXIS 501` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1986 Colo. LEXIS 501 is a secondary locator for People v. District Court, Second Judicial District; Bluebook form is 713 P.2d 918. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `P.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### CO-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 713 P.2d 918 (1986)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 713 P.2d 918 is People v. District Court, Second Judicial District, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | People v. District Court, Second Judicial District |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### CO-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `People v. District Court, Second Judicial District, 713 P.2d 921 (1986)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | People v. District Court, Second Judicial District begins at page 918, not 921. Page 921 is verified not to be any other case's first page in 713 P.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | People v. District Court, Second Judicial District |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### CO-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `People v. District Court, Second Judicial District, 713 P.2d 914 (1986)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 713 P.2d 914 is Sweaney v. DIST. COURT. EIGHTEENTH JUD. DIST. (1986), not People v. District Court, Second Judicial District. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### CO-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `People v. District Court, Second Judicial District, 713 P.2d 918 (Kan. 1992)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | People v. District Court, Second Judicial District is a 1986 Colorado decision, not a 1992 Kan. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### CO-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `People v. District Court, Second Judicial District, 317 P.2d 918 (1986)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 713 P.2d 918. Volume 317 carries no case at page 918 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### CO-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `District Court, 713 P.2d at 922` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for People v. District Court, Second Judicial District, 713 P.2d 918; pin 922 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### CO-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 921` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### CO-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `People v. District Court, Second Judicial District, 713 P.2d 918 (1986); Marbury v. Quillon, 88888 P.2d 9 (1988)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (713 P.2d 918); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### CO-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `People v. District Court, Second Judicial District, 713 P.2d 918 (1986), aff'd, 999 F.3d 1 (11th Cir. 1989)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 713 P.2d 918 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### CO-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Colo. Rev. Stat. § 13-21-102` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Colo. Rev. Stat. § 13-21-102 is a real provision of Colorado law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### CO-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Colo. Rev. Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Colorado code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### CO-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 P.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | P.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### CO-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `People v. District Court, Second Judicial District, 12 Colo. Sup. Rptr. 4th 88 (1986)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Colo. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### CO-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `People v. District Court, Second Judicial District, 1986 WL 9999999 (Colo. 1986)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | People v. District Court, Second Judicial District has a print cite (713 P.2d 918); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### CO-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Bogdanov v. People, 941 P.2d 247 (1997)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Bogdanov v. People carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### CO-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Colorado cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Connecticut (CT)

<a id="state-ct"></a>

### CT-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Ferryman v. City of Groton, 212 Conn. 138 (1989)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Ferryman v. City of Groton is reported at 212 Conn. 138 (1989); cited 1082 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Ferryman v. City of Groton |

### CT-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `212 Conn. 138` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 212 Conn. 138 is Ferryman v. City of Groton (1989). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Ferryman v. City of Groton |

### CT-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Ferryman v. City of Groton, 561 A.2d 432 (1989)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Ferryman v. City of Groton carries parallel cites 212 Conn. 138 / 561 A.2d 432. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Ferryman v. City of Groton |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### CT-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Ferryman v. City of Groton, 1989 Conn. LEXIS 213` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1989 Conn. LEXIS 213 is a secondary locator for Ferryman v. City of Groton; Bluebook form is 212 Conn. 138. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Conn.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### CT-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 212 Conn. 138 (1989)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 212 Conn. 138 is Ferryman v. City of Groton, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Ferryman v. City of Groton |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### CT-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Ferryman v. City of Groton, 212 Conn. 141 (1989)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Ferryman v. City of Groton begins at page 138, not 141. Page 141 is verified not to be any other case's first page in 212 Conn.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Ferryman v. City of Groton |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### CT-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Ferryman v. City of Groton, 212 Conn. 147 (1989)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 212 Conn. 147 is Hall Manor Owner's Ass'n v. City of West Haven (1989), not Ferryman v. City of Groton. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### CT-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Ferryman v. City of Groton, 212 Conn. 138 (R.I. 1995)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Ferryman v. City of Groton is a 1989 Connecticut decision, not a 1995 R.I. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### CT-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Ferryman, 212 Conn. at 142` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Ferryman v. City of Groton, 212 Conn. 138; pin 142 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### CT-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 141` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### CT-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Ferryman v. City of Groton, 212 Conn. 138 (1989); Marbury v. Quillon, 88888 Conn. 9 (1991)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (212 Conn. 138); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### CT-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Ferryman v. City of Groton, 212 Conn. 138 (1989), aff'd, 999 F.3d 1 (11th Cir. 1992)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 212 Conn. 138 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### CT-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Conn. Gen. Stat. § 52-557n` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Conn. Gen. Stat. § 52-557n is a real provision of Connecticut law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### CT-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Conn. Gen. Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Connecticut code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### CT-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Conn. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Conn. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### CT-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Ferryman v. City of Groton, 12 Conn. Sup. Rptr. 4th 88 (1989)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Conn. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### CT-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Ferryman v. City of Groton, 1989 WL 9999999 (Conn. 1989)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Ferryman v. City of Groton has a print cite (212 Conn. 138); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### CT-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Strazza v. McKittrick, 146 Conn. 714 (1959)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Strazza v. McKittrick carries good-law status "overruled" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### CT-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Connecticut cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Delaware (DE)

<a id="state-de"></a>

### DE-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Brehm v. Eisner, 746 A.2d 244 (2000)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Brehm v. Eisner is reported at 746 A.2d 244 (2000); cited 785 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Brehm v. Eisner |

### DE-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `746 A.2d 244` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 746 A.2d 244 is Brehm v. Eisner (2000). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Brehm v. Eisner |

### DE-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Brehm v. Eisner, 2000 Del. LEXIS 51` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2000 Del. LEXIS 51 is a secondary locator for Brehm v. Eisner; Bluebook form is 746 A.2d 244. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `A.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### DE-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 746 A.2d 244 (2000)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 746 A.2d 244 is Brehm v. Eisner, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Brehm v. Eisner |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### DE-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Brehm v. Eisner, 746 A.2d 247 (2000)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Brehm v. Eisner begins at page 244, not 247. Page 247 is verified not to be any other case's first page in 746 A.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Brehm v. Eisner |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### DE-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Brehm v. Eisner, 746 A.2d 236 (2000)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 746 A.2d 236 is Ives v. Nmtc, Inc. (1999), not Brehm v. Eisner. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### DE-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Brehm v. Eisner, 746 A.2d 244 (N.J. 2006)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Brehm v. Eisner is a 2000 Delaware decision, not a 2006 N.J. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### DE-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Brehm v. Eisner, 647 A.2d 244 (2000)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 746 A.2d 244. Volume 647 carries no case at page 244 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### DE-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Brehm, 746 A.2d at 248` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Brehm v. Eisner, 746 A.2d 244; pin 248 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### DE-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 247` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### DE-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Brehm v. Eisner, 746 A.2d 244 (2000); Marbury v. Quillon, 88888 A.2d 9 (2002)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (746 A.2d 244); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### DE-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Brehm v. Eisner, 746 A.2d 244 (2000), aff'd, 999 F.3d 1 (11th Cir. 2003)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 746 A.2d 244 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### DE-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Del. Code Ann. tit. 8, § 141` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Del. Code Ann. tit. 8, § 141 is a real provision of Delaware law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### DE-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Del. Code Ann. tit. 8, § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Delaware code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### DE-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 A.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | A.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### DE-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Brehm v. Eisner, 12 Del. Sup. Rptr. 4th 88 (2000)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Del. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### DE-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Brehm v. Eisner, 2000 WL 9999999 (Del. 2000)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Brehm v. Eisner has a print cite (746 A.2d 244); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### DE-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Price v. E.I. DuPont De Nemours & Co., 26 A.3d 162 (2011)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Price v. E.I. DuPont De Nemours & Co. carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### DE-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Delaware cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Florida (FL)

<a id="state-fl"></a>

### FL-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `State v. DiGuilio, 491 So. 2d 1129 (1986)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | State v. DiGuilio is reported at 491 So. 2d 1129 (1986); cited 2401 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. DiGuilio |

### FL-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `491 So. 2d 1129` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 491 So. 2d 1129 is State v. DiGuilio (1986). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. DiGuilio |

### FL-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `State v. DiGuilio, 11 Fla. L. Weekly 339` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 11 Fla. L. Weekly 339 is a secondary locator for State v. DiGuilio; Bluebook form is 491 So. 2d 1129. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `So. 2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### FL-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 491 So. 2d 1129 (1986)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 491 So. 2d 1129 is State v. DiGuilio, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | State v. DiGuilio |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### FL-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. DiGuilio, 491 So. 2d 1132 (1986)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | State v. DiGuilio begins at page 1129, not 1132. Page 1132 is verified not to be any other case's first page in 491 So. 2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | State v. DiGuilio |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### FL-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `State v. DiGuilio, 491 So. 2d 1128 (1986)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 491 So. 2d 1128 is In re Sentencing Guidelines (Florida Rules of Criminal Procedure 3.701, 3.988) (1986), not State v. DiGuilio. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### FL-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. DiGuilio, 491 So. 2d 1129 (Ala. 1992)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | State v. DiGuilio is a 1986 Florida decision, not a 1992 Ala. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### FL-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `State v. DiGuilio, 194 So. 2d 1129 (1986)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 491 So. 2d 1129. Volume 194 carries no case at page 1129 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### FL-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `DiGuilio, 491 So. 2d at 1133` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for State v. DiGuilio, 491 So. 2d 1129; pin 1133 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### FL-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 1132` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### FL-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `State v. DiGuilio, 491 So. 2d 1129 (1986); Marbury v. Quillon, 88888 So. 2d 9 (1988)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (491 So. 2d 1129); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### FL-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `State v. DiGuilio, 491 So. 2d 1129 (1986), aff'd, 999 F.3d 1 (11th Cir. 1989)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 491 So. 2d 1129 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### FL-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Fla. Stat. § 90.302` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Fla. Stat. § 90.302 is a real provision of Florida law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### FL-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Fla. Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Florida code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### FL-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 So. 2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | So. 2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### FL-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `State v. DiGuilio, 12 Fla. Sup. Rptr. 4th 88 (1986)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Fla. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### FL-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `State v. DiGuilio, 1986 WL 9999999 (Fla. 1986)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | State v. DiGuilio has a print cite (491 So. 2d 1129); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### FL-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Clark v. State, 363 So. 2d 331 (1978)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Clark v. State carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### FL-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Florida cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Georgia (GA)

<a id="state-ga"></a>

### GA-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Lau's Corp., Inc. v. Haskins, 261 Ga. 491 (1991)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Lau's Corp., Inc. v. Haskins is reported at 261 Ga. 491 (1991); cited 1705 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Lau's Corp., Inc. v. Haskins |

### GA-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `261 Ga. 491` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 261 Ga. 491 is Lau's Corp., Inc. v. Haskins (1991). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Lau's Corp., Inc. v. Haskins |

### GA-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Lau's Corp., Inc. v. Haskins, 405 S.E.2d 474 (1991)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Lau's Corp., Inc. v. Haskins carries parallel cites 261 Ga. 491 / 405 S.E.2d 474. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Lau's Corp., Inc. v. Haskins |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### GA-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Lau's Corp., Inc. v. Haskins, 1991 Ga. LEXIS 321` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1991 Ga. LEXIS 321 is a secondary locator for Lau's Corp., Inc. v. Haskins; Bluebook form is 261 Ga. 491. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Ga.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### GA-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 261 Ga. 491 (1991)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 261 Ga. 491 is Lau's Corp., Inc. v. Haskins, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Lau's Corp., Inc. v. Haskins |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### GA-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Lau's Corp., Inc. v. Haskins, 261 Ga. 494 (1991)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Lau's Corp., Inc. v. Haskins begins at page 491, not 494. Page 494 is verified not to be any other case's first page in 261 Ga.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Lau's Corp., Inc. v. Haskins |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### GA-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Lau's Corp., Inc. v. Haskins, 261 Ga. App. 493 (1991)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 261 Ga. App. 493 is Thomas v. State (2003), not Lau's Corp., Inc. v. Haskins. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### GA-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Lau's Corp., Inc. v. Haskins, 261 Ga. 491 (Fla. 1997)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Lau's Corp., Inc. v. Haskins is a 1991 Georgia decision, not a 1997 Fla. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### GA-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Lau's Corp., Inc. v. Haskins, 162 Ga. 491 (1991)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 261 Ga. 491. Volume 162 carries no case at page 491 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### GA-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Lau's, 261 Ga. at 495` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Lau's Corp., Inc. v. Haskins, 261 Ga. 491; pin 495 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### GA-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 494` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### GA-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Lau's Corp., Inc. v. Haskins, 261 Ga. 491 (1991); Marbury v. Quillon, 88888 Ga. 9 (1993)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (261 Ga. 491); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### GA-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Lau's Corp., Inc. v. Haskins, 261 Ga. 491 (1991), aff'd, 999 F.3d 1 (11th Cir. 1994)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 261 Ga. 491 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### GA-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Ga. Code Ann. § 51-1-11` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Ga. Code Ann. § 51-1-11 is a real provision of Georgia law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### GA-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Ga. Code Ann. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Georgia code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### GA-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Ga. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Ga. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### GA-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Lau's Corp., Inc. v. Haskins, 12 Ga. Sup. Rptr. 4th 88 (1991)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Ga. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### GA-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Lau's Corp., Inc. v. Haskins, 1991 WL 9999999 (Ga. 1991)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Lau's Corp., Inc. v. Haskins has a print cite (261 Ga. 491); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### GA-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State v. Thornton, 322 S.E.2d 711 (1984)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State v. Thornton carries good-law status "overruled" with 4 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### GA-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Georgia cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Hawaii (HI)

<a id="state-hi"></a>

### HI-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Kema v. Gaddis, 91 Haw. 200 (1999)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Kema v. Gaddis is reported at 91 Haw. 200 (1999); cited 492 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Kema v. Gaddis |

### HI-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `91 Haw. 200` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 91 Haw. 200 is Kema v. Gaddis (1999). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Kema v. Gaddis |

### HI-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Kema v. Gaddis, 982 P.2d 334 (1999)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Kema v. Gaddis carries parallel cites 91 Haw. 200 / 982 P.2d 334. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Kema v. Gaddis |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### HI-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Kema v. Gaddis, 1999 Haw. LEXIS 283` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1999 Haw. LEXIS 283 is a secondary locator for Kema v. Gaddis; Bluebook form is 91 Haw. 200. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Haw.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### HI-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 91 Haw. 200 (1999)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 91 Haw. 200 is Kema v. Gaddis, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Kema v. Gaddis |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### HI-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Kema v. Gaddis, 91 Haw. 203 (1999)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Kema v. Gaddis begins at page 200, not 203. Page 203 is verified not to be any other case's first page in 91 Haw.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Kema v. Gaddis |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### HI-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Kema v. Gaddis, 91 Haw. 206 (1999)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 91 Haw. 206 is State v. Lee (1999), not Kema v. Gaddis. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### HI-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Kema v. Gaddis, 91 Haw. 200 (Alaska 2005)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Kema v. Gaddis is a 1999 Hawaii decision, not a 2005 Alaska decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### HI-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Kema v. Gaddis, 19 Haw. 200 (1999)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 91 Haw. 200. Volume 19 carries no case at page 200 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### HI-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Kema, 91 Haw. at 204` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Kema v. Gaddis, 91 Haw. 200; pin 204 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### HI-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 203` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### HI-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Kema v. Gaddis, 91 Haw. 200 (1999); Marbury v. Quillon, 88888 Haw. 9 (2001)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (91 Haw. 200); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### HI-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Kema v. Gaddis, 91 Haw. 200 (1999), aff'd, 999 F.3d 1 (11th Cir. 2002)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 91 Haw. 200 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### HI-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Haw. Rev. Stat. § 663-1` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Haw. Rev. Stat. § 663-1 is a real provision of Hawaii law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### HI-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Haw. Rev. Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Hawaii code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### HI-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Haw. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Haw. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### HI-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Kema v. Gaddis, 12 Haw. Sup. Rptr. 4th 88 (1999)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Haw. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### HI-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Kema v. Gaddis, 1999 WL 9999999 (Haw. 1999)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Kema v. Gaddis has a print cite (91 Haw. 200); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### HI-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Hawaii cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Iowa (IA)

<a id="state-ia"></a>

### IA-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `In Re P.L., 778 N.W.2d 33 (2010)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | In Re P.L. is reported at 778 N.W.2d 33 (2010); cited 1459 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | In Re P.L. |

### IA-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `778 N.W.2d 33` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 778 N.W.2d 33 is In Re P.L. (2010). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | In Re P.L. |

### IA-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `In Re P.L., 2010 WL 323032` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2010 WL 323032 is a secondary locator for In Re P.L.; Bluebook form is 778 N.W.2d 33. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `N.W.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### IA-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 778 N.W.2d 33 (2010)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 778 N.W.2d 33 is In Re P.L., not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | In Re P.L. |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### IA-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `In Re P.L., 778 N.W.2d 36 (2010)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | In Re P.L. begins at page 33, not 36. Page 36 is verified not to be any other case's first page in 778 N.W.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | In Re P.L. |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### IA-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `In Re P.L., 778 N.W.2d 29 (2010)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 778 N.W.2d 29 is In the Matter of Disciplinary Proceedings Against Batt (2010), not In Re P.L.. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### IA-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `In Re P.L., 778 N.W.2d 33 (Neb. 2016)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | In Re P.L. is a 2010 Iowa decision, not a 2016 Neb. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### IA-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `In Re P.L., 877 N.W.2d 33 (2010)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 778 N.W.2d 33. Volume 877 carries no case at page 33 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### IA-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `In Re, 778 N.W.2d at 37` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for In Re P.L., 778 N.W.2d 33; pin 37 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### IA-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 36` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### IA-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `In Re P.L., 778 N.W.2d 33 (2010); Marbury v. Quillon, 88888 N.W.2d 9 (2012)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (778 N.W.2d 33); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### IA-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `In Re P.L., 778 N.W.2d 33 (2010), aff'd, 999 F.3d 1 (11th Cir. 2013)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 778 N.W.2d 33 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### IA-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Iowa Code § 668.3` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Iowa Code § 668.3 is a real provision of Iowa law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### IA-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Iowa Code § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Iowa code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### IA-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 N.W.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | N.W.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### IA-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `In Re P.L., 12 Iowa Sup. Rptr. 4th 88 (2010)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Iowa Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### IA-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `In Re P.L., 2010 WL 9999999 (Iowa 2010)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | In Re P.L. has a print cite (778 N.W.2d 33); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### IA-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State Of Iowa Vs. Mark Thomas Hennings, 791 N.W.2d 828 (2010)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State Of Iowa Vs. Mark Thomas Hennings carries good-law status "negative" with 4 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### IA-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Iowa cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Idaho (ID)

<a id="state-id"></a>

### ID-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `State v. Oliver, 144 Idaho 722 (2007)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | State v. Oliver is reported at 144 Idaho 722 (2007); cited 2719 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Oliver |

### ID-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `144 Idaho 722` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 144 Idaho 722 is State v. Oliver (2007). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Oliver |

### ID-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Oliver, 170 P.3d 387 (2007)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | State v. Oliver carries parallel cites 144 Idaho 722 / 170 P.3d 387. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Oliver |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### ID-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `State v. Oliver, 2007 Ida. LEXIS 192` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2007 Ida. LEXIS 192 is a secondary locator for State v. Oliver; Bluebook form is 144 Idaho 722. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Idaho` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### ID-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 144 Idaho 722 (2007)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 144 Idaho 722 is State v. Oliver, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | State v. Oliver |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### ID-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Oliver, 144 Idaho 725 (2007)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | State v. Oliver begins at page 722, not 725. Page 725 is verified not to be any other case's first page in 144 Idaho. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | State v. Oliver |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### ID-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `State v. Oliver, 144 Idaho 718 (2007)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 144 Idaho 718 is Blanton v. Canyon County (2007), not State v. Oliver. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### ID-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Oliver, 144 Idaho 722 (Mont. 2013)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | State v. Oliver is a 2007 Idaho decision, not a 2013 Mont. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### ID-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `State v. Oliver, 441 Idaho 722 (2007)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 144 Idaho 722. Volume 441 carries no case at page 722 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### ID-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Oliver, 144 Idaho at 726` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for State v. Oliver, 144 Idaho 722; pin 726 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### ID-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 725` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### ID-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `State v. Oliver, 144 Idaho 722 (2007); Marbury v. Quillon, 88888 Idaho 9 (2009)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (144 Idaho 722); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### ID-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `State v. Oliver, 144 Idaho 722 (2007), aff'd, 999 F.3d 1 (11th Cir. 2010)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 144 Idaho 722 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### ID-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Idaho Code § 6-1603` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Idaho Code § 6-1603 is a real provision of Idaho law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### ID-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Idaho Code § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Idaho code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### ID-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Idaho 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Idaho has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### ID-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `State v. Oliver, 12 Idaho Sup. Rptr. 4th 88 (2007)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Idaho Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### ID-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Oliver, 2007 WL 9999999 (Idaho 2007)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | State v. Oliver has a print cite (144 Idaho 722); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### ID-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State v. Urrabazo, 244 P.3d 1244 (2010)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State v. Urrabazo carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### ID-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Idaho cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Illinois (IL)

<a id="state-il"></a>

### IL-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `People v. Enoch, 122 Ill. 2d 176 (1988)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | People v. Enoch is reported at 122 Ill. 2d 176 (1988); cited 2857 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. Enoch |

### IL-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `122 Ill. 2d 176` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 122 Ill. 2d 176 is People v. Enoch (1988). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. Enoch |

### IL-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `People v. Enoch, 522 N.E.2d 1124 (1988)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | People v. Enoch carries parallel cites 122 Ill. 2d 176 / 522 N.E.2d 1124 / 119 Ill. Dec. 265. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. Enoch |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### IL-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `People v. Enoch, 1988 Ill. LEXIS 41` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1988 Ill. LEXIS 41 is a secondary locator for People v. Enoch; Bluebook form is 122 Ill. 2d 176. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Ill. 2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### IL-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 122 Ill. 2d 176 (1988)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 122 Ill. 2d 176 is People v. Enoch, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | People v. Enoch |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### IL-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `People v. Enoch, 122 Ill. 2d 179 (1988)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | People v. Enoch begins at page 176, not 179. Page 179 is verified not to be any other case's first page in 122 Ill. 2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | People v. Enoch |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### IL-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `People v. Enoch, 122 Ill. 2d 163 (1988)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 122 Ill. 2d 163 is In Re Mason (1988), not People v. Enoch. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### IL-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `People v. Enoch, 122 Ill. 2d 176 (Ind. 1994)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | People v. Enoch is a 1988 Illinois decision, not a 1994 Ind. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### IL-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `People v. Enoch, 221 Ill. 2d 176 (1988)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 122 Ill. 2d 176. Volume 221 carries no case at page 176 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### IL-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Enoch, 122 Ill. 2d at 180` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for People v. Enoch, 122 Ill. 2d 176; pin 180 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### IL-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 179` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### IL-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `People v. Enoch, 122 Ill. 2d 176 (1988); Marbury v. Quillon, 88888 Ill. 2d 9 (1990)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (122 Ill. 2d 176); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### IL-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `People v. Enoch, 122 Ill. 2d 176 (1988), aff'd, 999 F.3d 1 (11th Cir. 1991)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 122 Ill. 2d 176 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### IL-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `735 Ill. Comp. Stat. 5/2-615` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | 735 Ill. Comp. Stat. 5/2-615 is a real provision of Illinois law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### IL-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `735 Ill. Comp. Stat. 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Illinois code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### IL-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Ill. 2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Ill. 2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### IL-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `People v. Enoch, 12 Ill. Sup. Rptr. 4th 88 (1988)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Ill. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### IL-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `People v. Enoch, 1988 WL 9999999 (Ill. 1988)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | People v. Enoch has a print cite (122 Ill. 2d 176); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### IL-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Doe v. Calumet City, 641 N.E.2d 498 (1994)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Doe v. Calumet City carries good-law status "overruled" with 6 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### IL-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Illinois cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Indiana (IN)

<a id="state-in"></a>

### IN-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Cardwell v. State, 895 N.E.2d 1219 (2008)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Cardwell v. State is reported at 895 N.E.2d 1219 (2008); cited 1831 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Cardwell v. State |

### IN-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `895 N.E.2d 1219` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 895 N.E.2d 1219 is Cardwell v. State (2008). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Cardwell v. State |

### IN-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Cardwell v. State, 2008 Ind. LEXIS 1049` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2008 Ind. LEXIS 1049 is a secondary locator for Cardwell v. State; Bluebook form is 895 N.E.2d 1219. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `N.E.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### IN-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 895 N.E.2d 1219 (2008)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 895 N.E.2d 1219 is Cardwell v. State, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Cardwell v. State |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### IN-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Cardwell v. State, 895 N.E.2d 1222 (2008)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Cardwell v. State begins at page 1219, not 1222. Page 1222 is verified not to be any other case's first page in 895 N.E.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Cardwell v. State |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### IN-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Cardwell v. State, 895 N.E.2d 1215 (2008)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 895 N.E.2d 1215 is Bailey v. Mann (2008), not Cardwell v. State. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### IN-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Cardwell v. State, 895 N.E.2d 1219 (Ohio 2014)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Cardwell v. State is a 2008 Indiana decision, not a 2014 Ohio decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### IN-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Cardwell v. State, 598 N.E.2d 1219 (2008)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 895 N.E.2d 1219. Volume 598 at page 1219 is a real but different case: Gargallo v. Nationwide General Insurance (1991). |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `not_in_corpus`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is a real different case, so name_mismatch is the correct answer. |

### IN-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Cardwell, 895 N.E.2d at 1223` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Cardwell v. State, 895 N.E.2d 1219; pin 1223 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### IN-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 1222` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### IN-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Cardwell v. State, 895 N.E.2d 1219 (2008); Marbury v. Quillon, 88888 N.E.2d 9 (2010)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (895 N.E.2d 1219); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### IN-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Cardwell v. State, 895 N.E.2d 1219 (2008), aff'd, 999 F.3d 1 (11th Cir. 2011)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 895 N.E.2d 1219 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### IN-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Ind. Code § 34-51-2-1` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Ind. Code § 34-51-2-1 is a real provision of Indiana law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### IN-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Ind. Code § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Indiana code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### IN-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 N.E.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | N.E.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### IN-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Cardwell v. State, 12 Ind. Sup. Rptr. 4th 88 (2008)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Ind. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### IN-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Cardwell v. State, 2008 WL 9999999 (Ind. 2008)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Cardwell v. State has a print cite (895 N.E.2d 1219); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### IN-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `German v. State, 428 N.E.2d 234 (1981)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. German v. State carries good-law status "overruled" with 2 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### IN-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Indiana cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Kansas (KS)

<a id="state-ks"></a>

### KS-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `State v. Ward, 292 Kan. 541 (2011)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | State v. Ward is reported at 292 Kan. 541 (2011); cited 1177 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Ward |

### KS-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `292 Kan. 541` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 292 Kan. 541 is State v. Ward (2011). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Ward |

### KS-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Ward, 256 P.3d 801 (2011)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | State v. Ward carries parallel cites 292 Kan. 541 / 256 P.3d 801. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Ward |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### KS-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `State v. Ward, 2011 Kan. LEXIS 249` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2011 Kan. LEXIS 249 is a secondary locator for State v. Ward; Bluebook form is 292 Kan. 541. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Kan.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### KS-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 292 Kan. 541 (2011)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 292 Kan. 541 is State v. Ward, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | State v. Ward |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### KS-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Ward, 292 Kan. 544 (2011)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | State v. Ward begins at page 541, not 544. Page 544 is verified not to be any other case's first page in 292 Kan.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | State v. Ward |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### KS-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `State v. Ward, 292 Kan. 533 (2011)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 292 Kan. 533 is State v. Stieben (2011), not State v. Ward. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### KS-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Ward, 292 Kan. 541 (Okla. 2017)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | State v. Ward is a 2011 Kansas decision, not a 2017 Okla. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### KS-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Ward, 292 Kan. at 545` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for State v. Ward, 292 Kan. 541; pin 545 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### KS-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 544` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### KS-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `State v. Ward, 292 Kan. 541 (2011); Marbury v. Quillon, 88888 Kan. 9 (2013)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (292 Kan. 541); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### KS-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `State v. Ward, 292 Kan. 541 (2011), aff'd, 999 F.3d 1 (11th Cir. 2014)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 292 Kan. 541 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### KS-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Kan. Stat. Ann. § 60-513` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Kan. Stat. Ann. § 60-513 is a real provision of Kansas law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### KS-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Kan. Stat. Ann. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Kansas code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### KS-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Kan. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Kan. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### KS-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `State v. Ward, 12 Kan. Sup. Rptr. 4th 88 (2011)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Kan. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### KS-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Ward, 2011 WL 9999999 (Kan. 2011)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | State v. Ward has a print cite (292 Kan. 541); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### KS-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State v. Murdock, 299 Kan. 312 (2014)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State v. Murdock carries good-law status "overruled" with 2 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### KS-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Kansas cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Kentucky (KY)

<a id="state-ky"></a>

### KY-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Commonwealth v. English, 993 S.W.2d 941 (1999)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Commonwealth v. English is reported at 993 S.W.2d 941 (1999); cited 1065 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Commonwealth v. English |

### KY-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `993 S.W.2d 941` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 993 S.W.2d 941 is Commonwealth v. English (1999). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Commonwealth v. English |

### KY-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. English, 1999 Ky. LEXIS 65` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1999 Ky. LEXIS 65 is a secondary locator for Commonwealth v. English; Bluebook form is 993 S.W.2d 941. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `S.W.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### KY-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 993 S.W.2d 941 (1999)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 993 S.W.2d 941 is Commonwealth v. English, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Commonwealth v. English |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### KY-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Commonwealth v. English, 993 S.W.2d 944 (1999)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Commonwealth v. English begins at page 941, not 944. Page 944 is verified not to be any other case's first page in 993 S.W.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Commonwealth v. English |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### KY-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. English, 993 S.W.2d 946 (1999)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 993 S.W.2d 946 is Kentucky Off-Track Betting, Inc. v. McBurney (1999), not Commonwealth v. English. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### KY-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Commonwealth v. English, 993 S.W.2d 941 (Tenn. 2005)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Commonwealth v. English is a 1999 Kentucky decision, not a 2005 Tenn. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### KY-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. English, 399 S.W.2d 941 (1999)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 993 S.W.2d 941. Volume 399 at page 941 is a real but different case: Home Indemnity Co. v. Martin (1966). |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `not_in_corpus`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is a real different case, so name_mismatch is the correct answer. |

### KY-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `English, 993 S.W.2d at 945` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Commonwealth v. English, 993 S.W.2d 941; pin 945 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### KY-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 944` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### KY-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. English, 993 S.W.2d 941 (1999); Marbury v. Quillon, 88888 S.W.2d 9 (2001)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (993 S.W.2d 941); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### KY-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. English, 993 S.W.2d 941 (1999), aff'd, 999 F.3d 1 (11th Cir. 2002)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 993 S.W.2d 941 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### KY-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Ky. Rev. Stat. Ann. § 411.182` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Ky. Rev. Stat. Ann. § 411.182 is a real provision of Kentucky law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### KY-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Ky. Rev. Stat. Ann. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Kentucky code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### KY-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 S.W.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | S.W.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### KY-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. English, 12 Ky. Sup. Rptr. 4th 88 (1999)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Ky. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### KY-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Commonwealth v. English, 1999 WL 9999999 (Ky. 1999)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Commonwealth v. English has a print cite (993 S.W.2d 941); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### KY-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Bowling v. Commonwealth, 942 S.W.2d 293 (1997)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Bowling v. Commonwealth carries good-law status "overruled" with 2 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### KY-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Kentucky cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Louisiana (LA)

<a id="state-la"></a>

### LA-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `State Ex Rel. Glover v. State, 660 So. 2d 1189 (1995)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | State Ex Rel. Glover v. State is reported at 660 So. 2d 1189 (1995); cited 5258 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State Ex Rel. Glover v. State |

### LA-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `660 So. 2d 1189` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 660 So. 2d 1189 is State Ex Rel. Glover v. State (1995). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State Ex Rel. Glover v. State |

### LA-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `State Ex Rel. Glover v. State, 1995 WL 520198` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1995 WL 520198 is a secondary locator for State Ex Rel. Glover v. State; Bluebook form is 660 So. 2d 1189. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `So. 2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### LA-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 660 So. 2d 1189 (1995)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 660 So. 2d 1189 is State Ex Rel. Glover v. State, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | State Ex Rel. Glover v. State |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### LA-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `State Ex Rel. Glover v. State, 660 So. 2d 1192 (1995)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | State Ex Rel. Glover v. State begins at page 1189, not 1192. Page 1192 is verified not to be any other case's first page in 660 So. 2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | State Ex Rel. Glover v. State |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### LA-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `State Ex Rel. Glover v. State, 660 So. 2d 1187 (1995)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 660 So. 2d 1187 is Adams v. State (1995), not State Ex Rel. Glover v. State. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### LA-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `State Ex Rel. Glover v. State, 660 So. 2d 1189 (Miss. 2001)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | State Ex Rel. Glover v. State is a 1995 Louisiana decision, not a 2001 Miss. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### LA-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `State Ex Rel. Glover v. State, 66 So. 2d 1189 (1995)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 660 So. 2d 1189. Volume 66 carries no case at page 1189 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### LA-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `State, 660 So. 2d at 1193` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for State Ex Rel. Glover v. State, 660 So. 2d 1189; pin 1193 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### LA-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 1192` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### LA-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `State Ex Rel. Glover v. State, 660 So. 2d 1189 (1995); Marbury v. Quillon, 88888 So. 2d 9 (1997)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (660 So. 2d 1189); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### LA-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `State Ex Rel. Glover v. State, 660 So. 2d 1189 (1995), aff'd, 999 F.3d 1 (11th Cir. 1998)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 660 So. 2d 1189 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### LA-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `La. Civ. Code art. 2315` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | La. Civ. Code art. 2315 is a real provision of Louisiana law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### LA-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `La. Civ. Code art. 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Louisiana code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### LA-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 So. 2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | So. 2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### LA-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `State Ex Rel. Glover v. State, 12 La. Sup. Rptr. 4th 88 (1995)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "La. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### LA-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `State Ex Rel. Glover v. State, 1995 WL 9999999 (La. 1995)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | State Ex Rel. Glover v. State has a print cite (660 So. 2d 1189); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### LA-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State v. Godejohn, 425 So. 2d 750 (1983)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State v. Godejohn carries good-law status "overruled" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### LA-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Louisiana cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Massachusetts (MA)

<a id="state-ma"></a>

### MA-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Kourouvacilis v. General Motors Corp., 410 Mass. 706 (1991)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Kourouvacilis v. General Motors Corp. is reported at 410 Mass. 706 (1991); cited 1953 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Kourouvacilis v. General Motors Corp. |

### MA-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `410 Mass. 706` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 410 Mass. 706 is Kourouvacilis v. General Motors Corp. (1991). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Kourouvacilis v. General Motors Corp. |

### MA-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Kourouvacilis v. General Motors Corp., 575 N.E.2d 734 (1991)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Kourouvacilis v. General Motors Corp. carries parallel cites 410 Mass. 706 / 575 N.E.2d 734. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Kourouvacilis v. General Motors Corp. |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### MA-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Kourouvacilis v. General Motors Corp., 1991 Mass. LEXIS 392` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1991 Mass. LEXIS 392 is a secondary locator for Kourouvacilis v. General Motors Corp.; Bluebook form is 410 Mass. 706. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Mass.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### MA-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 410 Mass. 706 (1991)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 410 Mass. 706 is Kourouvacilis v. General Motors Corp., not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Kourouvacilis v. General Motors Corp. |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### MA-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Kourouvacilis v. General Motors Corp., 410 Mass. 709 (1991)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Kourouvacilis v. General Motors Corp. begins at page 706, not 709. Page 709 is verified not to be any other case's first page in 410 Mass.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Kourouvacilis v. General Motors Corp. |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### MA-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Kourouvacilis v. General Motors Corp., 410 Mass. 695 (1991)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 410 Mass. 695 is In the Matter of Driscoll (1991), not Kourouvacilis v. General Motors Corp.. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### MA-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Kourouvacilis v. General Motors Corp., 410 Mass. 706 (Conn. 1997)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Kourouvacilis v. General Motors Corp. is a 1991 Massachusetts decision, not a 1997 Conn. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### MA-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Kourouvacilis v. General Motors Corp., 14 Mass. 706 (1991)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 410 Mass. 706. Volume 14 carries no case at page 706 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### MA-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Kourouvacilis, 410 Mass. at 710` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Kourouvacilis v. General Motors Corp., 410 Mass. 706; pin 710 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### MA-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 709` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### MA-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Kourouvacilis v. General Motors Corp., 410 Mass. 706 (1991); Marbury v. Quillon, 88888 Mass. 9 (1993)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (410 Mass. 706); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### MA-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Kourouvacilis v. General Motors Corp., 410 Mass. 706 (1991), aff'd, 999 F.3d 1 (11th Cir. 1994)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 410 Mass. 706 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### MA-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Mass. Gen. Laws ch. 231, § 85K` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Mass. Gen. Laws ch. 231, § 85K is a real provision of Massachusetts law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### MA-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Mass. Gen. Laws ch. 231, § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Massachusetts code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### MA-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Mass. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Mass. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### MA-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Kourouvacilis v. General Motors Corp., 12 Mass. Sup. Rptr. 4th 88 (1991)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Mass. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### MA-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Kourouvacilis v. General Motors Corp., 1991 WL 9999999 (Mass. 1991)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Kourouvacilis v. General Motors Corp. has a print cite (410 Mass. 706); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### MA-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Shapiro v. Public Service Mutual Insurance, 477 N.E.2d 146 (1985)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Shapiro v. Public Service Mutual Insurance carries good-law status "overruled" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### MA-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Massachusetts cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Maryland (MD)

<a id="state-md"></a>

### MD-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Kaczorowski v. Mayor of Baltimore, 309 Md. 505 (1987)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Kaczorowski v. Mayor of Baltimore is reported at 309 Md. 505 (1987); cited 471 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Kaczorowski v. Mayor of Baltimore |

### MD-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `309 Md. 505` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 309 Md. 505 is Kaczorowski v. Mayor of Baltimore (1987). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Kaczorowski v. Mayor of Baltimore |

### MD-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Kaczorowski v. Mayor of Baltimore, 525 A.2d 628 (1987)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Kaczorowski v. Mayor of Baltimore carries parallel cites 309 Md. 505 / 525 A.2d 628. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Kaczorowski v. Mayor of Baltimore |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### MD-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Kaczorowski v. Mayor of Baltimore, 1987 Md. LEXIS 231` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1987 Md. LEXIS 231 is a secondary locator for Kaczorowski v. Mayor of Baltimore; Bluebook form is 309 Md. 505. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Md.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### MD-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 309 Md. 505 (1987)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 309 Md. 505 is Kaczorowski v. Mayor of Baltimore, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Kaczorowski v. Mayor of Baltimore |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### MD-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Kaczorowski v. Mayor of Baltimore, 309 Md. 508 (1987)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Kaczorowski v. Mayor of Baltimore begins at page 505, not 508. Page 508 is verified not to be any other case's first page in 309 Md.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Kaczorowski v. Mayor of Baltimore |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### MD-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Kaczorowski v. Mayor of Baltimore, 309 Md. 523 (1987)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 309 Md. 523 is State Highway Administration v. Kee (1987), not Kaczorowski v. Mayor of Baltimore. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### MD-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Kaczorowski v. Mayor of Baltimore, 309 Md. 505 (Va. 1993)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Kaczorowski v. Mayor of Baltimore is a 1987 Maryland decision, not a 1993 Va. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### MD-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Kaczorowski v. Mayor of Baltimore, 903 Md. 505 (1987)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 309 Md. 505. Volume 903 carries no case at page 505 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### MD-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Kaczorowski, 309 Md. at 509` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Kaczorowski v. Mayor of Baltimore, 309 Md. 505; pin 509 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### MD-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 508` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### MD-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Kaczorowski v. Mayor of Baltimore, 309 Md. 505 (1987); Marbury v. Quillon, 88888 Md. 9 (1989)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (309 Md. 505); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### MD-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Kaczorowski v. Mayor of Baltimore, 309 Md. 505 (1987), aff'd, 999 F.3d 1 (11th Cir. 1990)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 309 Md. 505 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### MD-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Md. Code Ann., Cts. & Jud. Proc. § 5-101` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Md. Code Ann., Cts. & Jud. Proc. § 5-101 is a real provision of Maryland law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### MD-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Md. Code Ann., Cts. & Jud. Proc. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Maryland code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### MD-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Md. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Md. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### MD-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Kaczorowski v. Mayor of Baltimore, 12 Md. Sup. Rptr. 4th 88 (1987)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Md. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### MD-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Kaczorowski v. Mayor of Baltimore, 1987 WL 9999999 (Md. 1987)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Kaczorowski v. Mayor of Baltimore has a print cite (309 Md. 505); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### MD-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `H & R BLOCK, INC. v. Testerman, 338 A.2d 48 (1975)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. H & R BLOCK, INC. v. Testerman carries good-law status "overruled" with 2 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### MD-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Maryland cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Maine (ME)

<a id="state-me"></a>

### ME-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Curtis v. Porter, 784 A.2d 18 (2001)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Curtis v. Porter is reported at 784 A.2d 18 (2001); cited 445 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Curtis v. Porter |

### ME-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `784 A.2d 18` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 784 A.2d 18 is Curtis v. Porter (2001). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Curtis v. Porter |

### ME-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Curtis v. Porter, 2001 ME 158 (2001)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Curtis v. Porter carries parallel cites 784 A.2d 18 / 2001 ME 158. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Curtis v. Porter |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### ME-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Curtis v. Porter, 2001 Me. LEXIS 161` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2001 Me. LEXIS 161 is a secondary locator for Curtis v. Porter; Bluebook form is 784 A.2d 18. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `A.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### ME-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 784 A.2d 18 (2001)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 784 A.2d 18 is Curtis v. Porter, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Curtis v. Porter |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### ME-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Curtis v. Porter, 784 A.2d 21 (2001)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Curtis v. Porter begins at page 18, not 21. Page 21 is verified not to be any other case's first page in 784 A.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Curtis v. Porter |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### ME-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Curtis v. Porter, 784 A.2d 27 (2001)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 784 A.2d 27 is State v. Bavouset (2001), not Curtis v. Porter. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### ME-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Curtis v. Porter, 784 A.2d 18 (N.H. 2007)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Curtis v. Porter is a 2001 Maine decision, not a 2007 N.H. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### ME-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Curtis v. Porter, 487 A.2d 18 (2001)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 784 A.2d 18. Volume 487 carries no case at page 18 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### ME-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Curtis, 784 A.2d at 22` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Curtis v. Porter, 784 A.2d 18; pin 22 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### ME-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 21` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### ME-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Curtis v. Porter, 784 A.2d 18 (2001); Marbury v. Quillon, 88888 A.2d 9 (2003)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (784 A.2d 18); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### ME-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Curtis v. Porter, 784 A.2d 18 (2001), aff'd, 999 F.3d 1 (11th Cir. 2004)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 784 A.2d 18 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### ME-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Me. Rev. Stat. Ann. tit. 14, § 752` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Me. Rev. Stat. Ann. tit. 14, § 752 is a real provision of Maine law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### ME-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Me. Rev. Stat. Ann. tit. 14, § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Maine code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### ME-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 A.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | A.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### ME-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Curtis v. Porter, 12 Me. Sup. Rptr. 4th 88 (2001)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Me. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### ME-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Curtis v. Porter, 2001 WL 9999999 (Me. 2001)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Curtis v. Porter has a print cite (784 A.2d 18); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### ME-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Baybutt Construction Corp. v. Commercial Union Insurance, 455 A.2d 914 (1983)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Baybutt Construction Corp. v. Commercial Union Insurance carries good-law status "overruled" with 2 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### ME-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Maine cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Michigan (MI)

<a id="state-mi"></a>

### MI-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `People v. Carines, 460 Mich. 750 (1999)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | People v. Carines is reported at 460 Mich. 750 (1999); cited 3422 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. Carines |

### MI-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `460 Mich. 750` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 460 Mich. 750 is People v. Carines (1999). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. Carines |

### MI-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `People v. Carines, 597 N.W.2d 130 (1999)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | People v. Carines carries parallel cites 460 Mich. 750 / 597 N.W.2d 130. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. Carines |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### MI-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 460 Mich. 750 (1999)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 460 Mich. 750 is People v. Carines, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | People v. Carines |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### MI-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `People v. Carines, 460 Mich. 753 (1999)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | People v. Carines begins at page 750, not 753. Page 753 is verified not to be any other case's first page in 460 Mich.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | People v. Carines |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### MI-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `People v. Carines, 460 Mich. 738 (1999)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 460 Mich. 738 is Gray v. Morley (1999), not People v. Carines. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### MI-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `People v. Carines, 460 Mich. 750 (Wis. 2005)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | People v. Carines is a 1999 Michigan decision, not a 2005 Wis. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### MI-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `People v. Carines, 64 Mich. 750 (1999)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 460 Mich. 750. Volume 64 carries no case at page 750 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### MI-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Carines, 460 Mich. at 754` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for People v. Carines, 460 Mich. 750; pin 754 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### MI-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 753` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### MI-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `People v. Carines, 460 Mich. 750 (1999); Marbury v. Quillon, 88888 Mich. 9 (2001)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (460 Mich. 750); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### MI-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `People v. Carines, 460 Mich. 750 (1999), aff'd, 999 F.3d 1 (11th Cir. 2002)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 460 Mich. 750 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### MI-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Mich. Comp. Laws § 600.2912a` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Mich. Comp. Laws § 600.2912a is a real provision of Michigan law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### MI-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Mich. Comp. Laws § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Michigan code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### MI-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Mich. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Mich. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### MI-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `People v. Carines, 12 Mich. Sup. Rptr. 4th 88 (1999)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Mich. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### MI-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `People v. Carines, 1999 WL 9999999 (Mich. 1999)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | People v. Carines has a print cite (460 Mich. 750); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### MI-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Lugo v. Ameritech Corp., Inc., 629 N.W.2d 384 (2001)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Lugo v. Ameritech Corp., Inc. carries good-law status "overruled" with 6 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### MI-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Michigan cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Minnesota (MN)

<a id="state-mn"></a>

### MN-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Thiele v. Stich, 425 N.W.2d 580 (1988)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Thiele v. Stich is reported at 425 N.W.2d 580 (1988); cited 871 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Thiele v. Stich |

### MN-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `425 N.W.2d 580` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 425 N.W.2d 580 is Thiele v. Stich (1988). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Thiele v. Stich |

### MN-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Thiele v. Stich, 1988 Minn. LEXIS 138` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1988 Minn. LEXIS 138 is a secondary locator for Thiele v. Stich; Bluebook form is 425 N.W.2d 580. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `N.W.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### MN-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 425 N.W.2d 580 (1988)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 425 N.W.2d 580 is Thiele v. Stich, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Thiele v. Stich |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### MN-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Thiele v. Stich, 425 N.W.2d 583 (1988)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Thiele v. Stich begins at page 580, not 583. Page 583 is verified not to be any other case's first page in 425 N.W.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Thiele v. Stich |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### MN-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Thiele v. Stich, 425 N.W.2d 575 (1988)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 425 N.W.2d 575 is In Re McDivitt Estate (1988), not Thiele v. Stich. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### MN-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Thiele v. Stich, 425 N.W.2d 580 (Iowa 1994)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Thiele v. Stich is a 1988 Minnesota decision, not a 1994 Iowa decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### MN-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Thiele v. Stich, 524 N.W.2d 580 (1988)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 425 N.W.2d 580. Volume 524 carries no case at page 580 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### MN-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Thiele, 425 N.W.2d at 584` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Thiele v. Stich, 425 N.W.2d 580; pin 584 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### MN-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 583` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### MN-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Thiele v. Stich, 425 N.W.2d 580 (1988); Marbury v. Quillon, 88888 N.W.2d 9 (1990)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (425 N.W.2d 580); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### MN-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Thiele v. Stich, 425 N.W.2d 580 (1988), aff'd, 999 F.3d 1 (11th Cir. 1991)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 425 N.W.2d 580 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### MN-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Minn. Stat. § 541.05` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Minn. Stat. § 541.05 is a real provision of Minnesota law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### MN-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Minn. Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Minnesota code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### MN-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 N.W.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | N.W.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### MN-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Thiele v. Stich, 12 Minn. Sup. Rptr. 4th 88 (1988)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Minn. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### MN-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Thiele v. Stich, 1988 WL 9999999 (Minn. 1988)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Thiele v. Stich has a print cite (425 N.W.2d 580); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### MN-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Hendrickson v. Minnesota Power & Light Co., 258 Minn. 368 (1960)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Hendrickson v. Minnesota Power & Light Co. carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### MN-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Minnesota cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Missouri (MO)

<a id="state-mo"></a>

### MO-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 371 (1993)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp. is reported at 854 S.W.2d 371 (1993); cited 2035 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp. |

### MO-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `854 S.W.2d 371` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 854 S.W.2d 371 is ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp. (1993). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp. |

### MO-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 1993 Mo. LEXIS 45` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1993 Mo. LEXIS 45 is a secondary locator for ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp.; Bluebook form is 854 S.W.2d 371. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `S.W.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### MO-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 854 S.W.2d 371 (1993)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 854 S.W.2d 371 is ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp. |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### MO-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 374 (1993)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp. begins at page 371, not 374. Page 374 is verified not to be any other case's first page in 854 S.W.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp. |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### MO-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 370 (1993)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 854 S.W.2d 370 is Williams v. State (1993), not ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp.. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### MO-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 371 (Ark. 1999)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp. is a 1993 Missouri decision, not a 1999 Ark. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### MO-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 458 S.W.2d 371 (1993)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 854 S.W.2d 371. Volume 458 at page 371 is a real but different case: Hinkle v. Rockefeller (1970). |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `not_in_corpus`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is a real different case, so name_mismatch is the correct answer. |

### MO-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `ITT Commercial, 854 S.W.2d at 375` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 371; pin 375 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### MO-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 374` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### MO-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 371 (1993); Marbury v. Quillon, 88888 S.W.2d 9 (1995)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (854 S.W.2d 371); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### MO-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 854 S.W.2d 371 (1993), aff'd, 999 F.3d 1 (11th Cir. 1996)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 854 S.W.2d 371 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### MO-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Mo. Rev. Stat. § 516.120` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Mo. Rev. Stat. § 516.120 is a real provision of Missouri law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### MO-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Mo. Rev. Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Missouri code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### MO-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 S.W.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | S.W.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### MO-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 12 Mo. Sup. Rptr. 4th 88 (1993)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Mo. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### MO-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp., 1993 WL 9999999 (Mo. 1993)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | ITT Commercial Finance Corp. v. Mid-America Marine Supply Corp. has a print cite (854 S.W.2d 371); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### MO-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Davis v. Research Medical Center, 903 S.W.2d 557 (1995)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Davis v. Research Medical Center carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### MO-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Missouri cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Mississippi (MS)

<a id="state-ms"></a>

### MS-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Bush v. State, 895 So. 2d 836 (2005)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Bush v. State is reported at 895 So. 2d 836 (2005); cited 1067 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Bush v. State |

### MS-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `895 So. 2d 836` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 895 So. 2d 836 is Bush v. State (2005). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Bush v. State |

### MS-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Bush v. State, 2005 WL 312039` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2005 WL 312039 is a secondary locator for Bush v. State; Bluebook form is 895 So. 2d 836. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `So. 2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### MS-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 895 So. 2d 836 (2005)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 895 So. 2d 836 is Bush v. State, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Bush v. State |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### MS-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Bush v. State, 895 So. 2d 839 (2005)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Bush v. State begins at page 836, not 839. Page 839 is verified not to be any other case's first page in 895 So. 2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Bush v. State |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### MS-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Bush v. State, 895 So. 2d 828 (2005)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 895 So. 2d 828 is Anderson v. LaVere (2004), not Bush v. State. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### MS-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Bush v. State, 895 So. 2d 836 (La. 2011)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Bush v. State is a 2005 Mississippi decision, not a 2011 La. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### MS-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Bush v. State, 598 So. 2d 836 (2005)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 895 So. 2d 836. Volume 598 carries no case at page 836 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### MS-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Bush, 895 So. 2d at 840` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Bush v. State, 895 So. 2d 836; pin 840 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### MS-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 839` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### MS-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Bush v. State, 895 So. 2d 836 (2005); Marbury v. Quillon, 88888 So. 2d 9 (2007)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (895 So. 2d 836); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### MS-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Bush v. State, 895 So. 2d 836 (2005), aff'd, 999 F.3d 1 (11th Cir. 2008)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 895 So. 2d 836 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### MS-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Miss. Code Ann. § 15-1-49` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Miss. Code Ann. § 15-1-49 is a real provision of Mississippi law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### MS-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Miss. Code Ann. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Mississippi code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### MS-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 So. 2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | So. 2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### MS-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Bush v. State, 12 Miss. Sup. Rptr. 4th 88 (2005)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Miss. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### MS-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Bush v. State, 2005 WL 9999999 (Miss. 2005)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Bush v. State has a print cite (895 So. 2d 836); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### MS-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Rowland v. State, 42 So. 3d 503 (2010)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Rowland v. State carries good-law status "overruled" with 2 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### MS-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Mississippi cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Montana (MT)

<a id="state-mt"></a>

### MT-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Carbon County v. Union Reserve Coal Co., Inc., 271 Mont. 459 (1995)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Carbon County v. Union Reserve Coal Co., Inc. is reported at 271 Mont. 459 (1995); cited 260 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Carbon County v. Union Reserve Coal Co., Inc. |

### MT-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `271 Mont. 459` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 271 Mont. 459 is Carbon County v. Union Reserve Coal Co., Inc. (1995). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Carbon County v. Union Reserve Coal Co., Inc. |

### MT-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Carbon County v. Union Reserve Coal Co., Inc., 898 P.2d 680 (1995)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Carbon County v. Union Reserve Coal Co., Inc. carries parallel cites 271 Mont. 459 / 898 P.2d 680 / 52 State Rptr. 529. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Carbon County v. Union Reserve Coal Co., Inc. |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### MT-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Carbon County v. Union Reserve Coal Co., Inc., 1995 Mont. LEXIS 124` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1995 Mont. LEXIS 124 is a secondary locator for Carbon County v. Union Reserve Coal Co., Inc.; Bluebook form is 271 Mont. 459. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Mont.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### MT-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 271 Mont. 459 (1995)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 271 Mont. 459 is Carbon County v. Union Reserve Coal Co., Inc., not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Carbon County v. Union Reserve Coal Co., Inc. |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### MT-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Carbon County v. Union Reserve Coal Co., Inc., 271 Mont. 462 (1995)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Carbon County v. Union Reserve Coal Co., Inc. begins at page 459, not 462. Page 462 is verified not to be any other case's first page in 271 Mont.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Carbon County v. Union Reserve Coal Co., Inc. |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### MT-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Carbon County v. Union Reserve Coal Co., Inc., 271 Mont. 450 (1995)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 271 Mont. 450 is Montana Public Employee's Ass'n v. Office of the Governor (1995), not Carbon County v. Union Reserve Coal Co., Inc.. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### MT-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Carbon County v. Union Reserve Coal Co., Inc., 271 Mont. 459 (Wyo. 2001)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Carbon County v. Union Reserve Coal Co., Inc. is a 1995 Montana decision, not a 2001 Wyo. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### MT-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Carbon County v. Union Reserve Coal Co., Inc., 172 Mont. 459 (1995)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 271 Mont. 459. Volume 172 carries no case at page 459 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### MT-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Carbon County, 271 Mont. at 463` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Carbon County v. Union Reserve Coal Co., Inc., 271 Mont. 459; pin 463 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### MT-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 462` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### MT-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Carbon County v. Union Reserve Coal Co., Inc., 271 Mont. 459 (1995); Marbury v. Quillon, 88888 Mont. 9 (1997)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (271 Mont. 459); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### MT-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Carbon County v. Union Reserve Coal Co., Inc., 271 Mont. 459 (1995), aff'd, 999 F.3d 1 (11th Cir. 1998)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 271 Mont. 459 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### MT-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Mont. Code Ann. § 27-1-701` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Mont. Code Ann. § 27-1-701 is a real provision of Montana law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### MT-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Mont. Code Ann. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Montana code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### MT-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Mont. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Mont. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### MT-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Carbon County v. Union Reserve Coal Co., Inc., 12 Mont. Sup. Rptr. 4th 88 (1995)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Mont. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### MT-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Carbon County v. Union Reserve Coal Co., Inc., 1995 WL 9999999 (Mont. 1995)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Carbon County v. Union Reserve Coal Co., Inc. has a print cite (271 Mont. 459); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### MT-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State v. Just, 602 P.2d 957 (1979)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State v. Just carries good-law status "negative" with 5 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### MT-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Montana cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## North Carolina (NC)

<a id="state-nc"></a>

### NC-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `State v. Lawrence, 365 N.C. 506 (2012)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | State v. Lawrence is reported at 365 N.C. 506 (2012); cited 669 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Lawrence |

### NC-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `365 N.C. 506` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 365 N.C. 506 is State v. Lawrence (2012). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Lawrence |

### NC-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Lawrence, 723 S.E.2d 326 (2012)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | State v. Lawrence carries parallel cites 365 N.C. 506 / 723 S.E.2d 326. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Lawrence |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### NC-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `State v. Lawrence, 2012 N.C. LEXIS 265` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2012 N.C. LEXIS 265 is a secondary locator for State v. Lawrence; Bluebook form is 365 N.C. 506. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `N.C.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### NC-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 365 N.C. 506 (2012)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 365 N.C. 506 is State v. Lawrence, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | State v. Lawrence |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### NC-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Lawrence, 365 N.C. 509 (2012)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | State v. Lawrence begins at page 506, not 509. Page 509 is verified not to be any other case's first page in 365 N.C.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | State v. Lawrence |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### NC-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `State v. Lawrence, 365 N.C. 520 (2012)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 365 N.C. 520 is Variety Wholesalers, Inc. v. Salem Logistics Traffic Services, LLC (2012), not State v. Lawrence. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### NC-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Lawrence, 365 N.C. 506 (S.C. 2018)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | State v. Lawrence is a 2012 North Carolina decision, not a 2018 S.C. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### NC-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `State v. Lawrence, 563 N.C. 506 (2012)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 365 N.C. 506. Volume 563 carries no case at page 506 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### NC-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Lawrence, 365 N.C. at 510` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for State v. Lawrence, 365 N.C. 506; pin 510 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### NC-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 509` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### NC-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `State v. Lawrence, 365 N.C. 506 (2012); Marbury v. Quillon, 88888 N.C. 9 (2014)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (365 N.C. 506); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### NC-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `State v. Lawrence, 365 N.C. 506 (2012), aff'd, 999 F.3d 1 (11th Cir. 2015)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 365 N.C. 506 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### NC-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `N.C. Gen. Stat. § 1-52` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | N.C. Gen. Stat. § 1-52 is a real provision of North Carolina law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### NC-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `N.C. Gen. Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the North Carolina code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### NC-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 N.C. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | N.C. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### NC-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `State v. Lawrence, 12 N.C. Sup. Rptr. 4th 88 (2012)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "N.C. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### NC-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Lawrence, 2012 WL 9999999 (N.C. 2012)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | State v. Lawrence has a print cite (365 N.C. 506); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### NC-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State v. Carter, 370 S.E.2d 553 (1988)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State v. Carter carries good-law status "overruled" with 2 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### NC-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the North Carolina cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## North Dakota (ND)

<a id="state-nd"></a>

### ND-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `County of Stutsman v. State Historical Society of North Dakota, 371 N.W.2d 321 (1985)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | County of Stutsman v. State Historical Society of North Dakota is reported at 371 N.W.2d 321 (1985); cited 127 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | County of Stutsman v. State Historical Society of North Dakota |

### ND-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `371 N.W.2d 321` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 371 N.W.2d 321 is County of Stutsman v. State Historical Society of North Dakota (1985). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | County of Stutsman v. State Historical Society of North Dakota |

### ND-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `County of Stutsman v. State Historical Society of North Dakota, 1985 N.D. LEXIS 354` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1985 N.D. LEXIS 354 is a secondary locator for County of Stutsman v. State Historical Society of North Dakota; Bluebook form is 371 N.W.2d 321. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `N.W.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### ND-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 371 N.W.2d 321 (1985)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 371 N.W.2d 321 is County of Stutsman v. State Historical Society of North Dakota, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | County of Stutsman v. State Historical Society of North Dakota |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### ND-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `County of Stutsman v. State Historical Society of North Dakota, 371 N.W.2d 324 (1985)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | County of Stutsman v. State Historical Society of North Dakota begins at page 321, not 324. Page 324 is verified not to be any other case's first page in 371 N.W.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | County of Stutsman v. State Historical Society of North Dakota |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### ND-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `County of Stutsman v. State Historical Society of North Dakota, 371 N.W.2d 317 (1985)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 371 N.W.2d 317 is State v. Knight (1985), not County of Stutsman v. State Historical Society of North Dakota. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### ND-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `County of Stutsman v. State Historical Society of North Dakota, 371 N.W.2d 321 (Minn. 1991)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | County of Stutsman v. State Historical Society of North Dakota is a 1985 North Dakota decision, not a 1991 Minn. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### ND-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `County of Stutsman v. State Historical Society of North Dakota, 173 N.W.2d 321 (1985)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 371 N.W.2d 321. Volume 173 carries no case at page 321 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### ND-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `County of, 371 N.W.2d at 325` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for County of Stutsman v. State Historical Society of North Dakota, 371 N.W.2d 321; pin 325 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### ND-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 324` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### ND-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `County of Stutsman v. State Historical Society of North Dakota, 371 N.W.2d 321 (1985); Marbury v. Quillon, 88888 N.W.2d 9 (1987)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (371 N.W.2d 321); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### ND-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `County of Stutsman v. State Historical Society of North Dakota, 371 N.W.2d 321 (1985), aff'd, 999 F.3d 1 (11th Cir. 1988)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 371 N.W.2d 321 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### ND-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `N.D. Cent. Code § 28-01-16` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | N.D. Cent. Code § 28-01-16 is a real provision of North Dakota law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### ND-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `N.D. Cent. Code § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the North Dakota code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### ND-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 N.W.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | N.W.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### ND-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `County of Stutsman v. State Historical Society of North Dakota, 12 N.D. Sup. Rptr. 4th 88 (1985)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "N.D. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### ND-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `County of Stutsman v. State Historical Society of North Dakota, 1985 WL 9999999 (N.D. 1985)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | County of Stutsman v. State Historical Society of North Dakota has a print cite (371 N.W.2d 321); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### ND-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `ACUITY v. Burd & Smith Construction, Inc., 2006 ND 187 (2006)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. ACUITY v. Burd & Smith Construction, Inc. carries good-law status "negative" with 3 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### ND-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the North Dakota cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Nebraska (NE)

<a id="state-ne"></a>

### NE-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Law Offices of Ronald J. Palagi v. Howard, 275 Neb. 334 (2008)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Law Offices of Ronald J. Palagi v. Howard is reported at 275 Neb. 334 (2008); cited 165 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Law Offices of Ronald J. Palagi v. Howard |

### NE-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `275 Neb. 334` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 275 Neb. 334 is Law Offices of Ronald J. Palagi v. Howard (2008). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Law Offices of Ronald J. Palagi v. Howard |

### NE-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Law Offices of Ronald J. Palagi v. Howard, 747 N.W.2d 1 (2008)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Law Offices of Ronald J. Palagi v. Howard carries parallel cites 275 Neb. 334 / 747 N.W.2d 1. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Law Offices of Ronald J. Palagi v. Howard |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### NE-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 275 Neb. 334 (2008)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 275 Neb. 334 is Law Offices of Ronald J. Palagi v. Howard, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Law Offices of Ronald J. Palagi v. Howard |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### NE-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Law Offices of Ronald J. Palagi v. Howard, 275 Neb. 337 (2008)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Law Offices of Ronald J. Palagi v. Howard begins at page 334, not 337. Page 337 is verified not to be any other case's first page in 275 Neb.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Law Offices of Ronald J. Palagi v. Howard |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### NE-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Law Offices of Ronald J. Palagi v. Howard, 275 Neb. 322 (2008)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 275 Neb. 322 is In Re Estate of Cooper (2008), not Law Offices of Ronald J. Palagi v. Howard. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### NE-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Law Offices of Ronald J. Palagi v. Howard, 275 Neb. 334 (S.D. 2014)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Law Offices of Ronald J. Palagi v. Howard is a 2008 Nebraska decision, not a 2014 S.D. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### NE-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Law Offices of Ronald J. Palagi v. Howard, 572 Neb. 334 (2008)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 275 Neb. 334. Volume 572 carries no case at page 334 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### NE-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Law Offices, 275 Neb. at 338` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Law Offices of Ronald J. Palagi v. Howard, 275 Neb. 334; pin 338 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### NE-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 337` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### NE-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Law Offices of Ronald J. Palagi v. Howard, 275 Neb. 334 (2008); Marbury v. Quillon, 88888 Neb. 9 (2010)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (275 Neb. 334); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### NE-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Law Offices of Ronald J. Palagi v. Howard, 275 Neb. 334 (2008), aff'd, 999 F.3d 1 (11th Cir. 2011)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 275 Neb. 334 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### NE-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Neb. Rev. Stat. § 25-207` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Neb. Rev. Stat. § 25-207 is a real provision of Nebraska law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### NE-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Neb. Rev. Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Nebraska code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### NE-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Neb. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Neb. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### NE-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Law Offices of Ronald J. Palagi v. Howard, 12 Neb. Sup. Rptr. 4th 88 (2008)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Neb. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### NE-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Law Offices of Ronald J. Palagi v. Howard, 2008 WL 9999999 (Neb. 2008)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Law Offices of Ronald J. Palagi v. Howard has a print cite (275 Neb. 334); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### NE-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State v. Thomas, 637 N.W.2d 632 (2002)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State v. Thomas carries good-law status "overruled" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### NE-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Nebraska cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## New Hampshire (NH)

<a id="state-nh"></a>

### NH-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Vogel v. Vogel, 137 N.H. 321 (1993)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Vogel v. Vogel is reported at 137 N.H. 321 (1993); cited 425 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Vogel v. Vogel |

### NH-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `137 N.H. 321` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 137 N.H. 321 is Vogel v. Vogel (1993). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Vogel v. Vogel |

### NH-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Vogel v. Vogel, 627 A.2d 595 (1993)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Vogel v. Vogel carries parallel cites 137 N.H. 321 / 627 A.2d 595. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Vogel v. Vogel |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### NH-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Vogel v. Vogel, 1993 N.H. LEXIS 77` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1993 N.H. LEXIS 77 is a secondary locator for Vogel v. Vogel; Bluebook form is 137 N.H. 321. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `N.H.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### NH-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 137 N.H. 321 (1993)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 137 N.H. 321 is Vogel v. Vogel, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Vogel v. Vogel |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### NH-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Vogel v. Vogel, 137 N.H. 324 (1993)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Vogel v. Vogel begins at page 321, not 324. Page 324 is verified not to be any other case's first page in 137 N.H.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Vogel v. Vogel |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### NH-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Vogel v. Vogel, 137 N.H. 322 (1993)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 137 N.H. 322 is State v. Paris (1993), not Vogel v. Vogel. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### NH-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Vogel v. Vogel, 137 N.H. 321 (Vt. 1999)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Vogel v. Vogel is a 1993 New Hampshire decision, not a 1999 Vt. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### NH-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Vogel v. Vogel, 731 N.H. 321 (1993)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 137 N.H. 321. Volume 731 carries no case at page 321 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### NH-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Vogel, 137 N.H. at 325` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Vogel v. Vogel, 137 N.H. 321; pin 325 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### NH-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 324` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### NH-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Vogel v. Vogel, 137 N.H. 321 (1993); Marbury v. Quillon, 88888 N.H. 9 (1995)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (137 N.H. 321); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### NH-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Vogel v. Vogel, 137 N.H. 321 (1993), aff'd, 999 F.3d 1 (11th Cir. 1996)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 137 N.H. 321 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### NH-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `N.H. Rev. Stat. Ann. § 508:4` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | N.H. Rev. Stat. Ann. § 508:4 is a real provision of New Hampshire law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### NH-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `N.H. Rev. Stat. Ann. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the New Hampshire code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### NH-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 N.H. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | N.H. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### NH-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Vogel v. Vogel, 12 N.H. Sup. Rptr. 4th 88 (1993)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "N.H. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### NH-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Vogel v. Vogel, 1993 WL 9999999 (N.H. 1993)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Vogel v. Vogel has a print cite (137 N.H. 321); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### NH-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Dean v. Smith, 106 N.H. 314 (1965)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Dean v. Smith carries good-law status "overruled" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### NH-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the New Hampshire cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## New Jersey (NJ)

<a id="state-nj"></a>

### NJ-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Brill v. Guardian Life Insurance Co. of America, 142 N.J. 520 (1995)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Brill v. Guardian Life Insurance Co. of America is reported at 142 N.J. 520 (1995); cited 2862 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Brill v. Guardian Life Insurance Co. of America |

### NJ-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `142 N.J. 520` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 142 N.J. 520 is Brill v. Guardian Life Insurance Co. of America (1995). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Brill v. Guardian Life Insurance Co. of America |

### NJ-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Brill v. Guardian Life Insurance Co. of America, 666 A.2d 146 (1995)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Brill v. Guardian Life Insurance Co. of America carries parallel cites 142 N.J. 520 / 666 A.2d 146. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Brill v. Guardian Life Insurance Co. of America |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### NJ-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Brill v. Guardian Life Insurance Co. of America, 1995 N.J. LEXIS 1040` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1995 N.J. LEXIS 1040 is a secondary locator for Brill v. Guardian Life Insurance Co. of America; Bluebook form is 142 N.J. 520. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `N.J.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### NJ-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 142 N.J. 520 (1995)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 142 N.J. 520 is Brill v. Guardian Life Insurance Co. of America, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Brill v. Guardian Life Insurance Co. of America |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### NJ-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Brill v. Guardian Life Insurance Co. of America, 142 N.J. 524 (1995)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Brill v. Guardian Life Insurance Co. of America begins at page 520, not 524. Page 524 is verified not to be any other case's first page in 142 N.J.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Brill v. Guardian Life Insurance Co. of America |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### NJ-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Brill v. Guardian Life Insurance Co. of America, 142 N.J. Eq. 523 (1995)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 142 N.J. Eq. 523 is Tompkins v. Pryor (1948), not Brill v. Guardian Life Insurance Co. of America. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### NJ-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Brill v. Guardian Life Insurance Co. of America, 142 N.J. 520 (Pa. 2001)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Brill v. Guardian Life Insurance Co. of America is a 1995 New Jersey decision, not a 2001 Pa. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### NJ-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Brill v. Guardian Life Insurance Co. of America, 241 N.J. 520 (1995)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 142 N.J. 520. Volume 241 carries no case at page 520 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### NJ-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Brill, 142 N.J. at 524` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Brill v. Guardian Life Insurance Co. of America, 142 N.J. 520; pin 524 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### NJ-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 523` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### NJ-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Brill v. Guardian Life Insurance Co. of America, 142 N.J. 520 (1995); Marbury v. Quillon, 88888 N.J. 9 (1997)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (142 N.J. 520); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### NJ-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Brill v. Guardian Life Insurance Co. of America, 142 N.J. 520 (1995), aff'd, 999 F.3d 1 (11th Cir. 1998)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 142 N.J. 520 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### NJ-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `N.J. Stat. Ann. § 2A:14-1` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | N.J. Stat. Ann. § 2A:14-1 is a real provision of New Jersey law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### NJ-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `N.J. Stat. Ann. § 2A:999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the New Jersey code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### NJ-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 N.J. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | N.J. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### NJ-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Brill v. Guardian Life Insurance Co. of America, 12 N.J. Sup. Rptr. 4th 88 (1995)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "N.J. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### NJ-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Brill v. Guardian Life Insurance Co. of America, 1995 WL 9999999 (N.J. 1995)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Brill v. Guardian Life Insurance Co. of America has a print cite (142 N.J. 520); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### NJ-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State v. Cooke, 751 A.2d 92 (2000)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State v. Cooke carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### NJ-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the New Jersey cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## New Mexico (NM)

<a id="state-nm"></a>

### NM-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `State v. Rojo, 126 N.M. 438 (1998)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | State v. Rojo is reported at 126 N.M. 438 (1998); cited 1119 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Rojo |

### NM-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `126 N.M. 438` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 126 N.M. 438 is State v. Rojo (1998). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Rojo |

### NM-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Rojo, 971 P.2d 829 (1998)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | State v. Rojo carries parallel cites 126 N.M. 438 / 971 P.2d 829 / 1999 NMSC 001. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Rojo |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### NM-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 126 N.M. 438 (1998)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 126 N.M. 438 is State v. Rojo, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | State v. Rojo |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### NM-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Rojo, 126 N.M. 441 (1998)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | State v. Rojo begins at page 438, not 441. Page 441 is verified not to be any other case's first page in 126 N.M.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | State v. Rojo |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### NM-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `State v. Rojo, 126 N.M. 433 (1998)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 126 N.M. 433 is Dugie v. Cameron (1998), not State v. Rojo. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### NM-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Rojo, 126 N.M. 438 (Colo. 2004)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | State v. Rojo is a 1998 New Mexico decision, not a 2004 Colo. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### NM-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `State v. Rojo, 621 N.M. 438 (1998)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 126 N.M. 438. Volume 621 carries no case at page 438 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### NM-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Rojo, 126 N.M. at 442` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for State v. Rojo, 126 N.M. 438; pin 442 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### NM-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 441` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### NM-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `State v. Rojo, 126 N.M. 438 (1998); Marbury v. Quillon, 88888 N.M. 9 (2000)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (126 N.M. 438); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### NM-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `State v. Rojo, 126 N.M. 438 (1998), aff'd, 999 F.3d 1 (11th Cir. 2001)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 126 N.M. 438 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### NM-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `N.M. Stat. Ann. § 37-1-4` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | N.M. Stat. Ann. § 37-1-4 is a real provision of New Mexico law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### NM-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `N.M. Stat. Ann. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the New Mexico code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### NM-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 N.M. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | N.M. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### NM-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `State v. Rojo, 12 N.M. Sup. Rptr. 4th 88 (1998)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "N.M. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### NM-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Rojo, 1998 WL 9999999 (N.M. 1998)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | State v. Rojo has a print cite (126 N.M. 438); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### NM-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State v. Moore, 782 P.2d 91 (1989)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State v. Moore carries good-law status "overruled" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### NM-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the New Mexico cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Nevada (NV)

<a id="state-nv"></a>

### NV-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Wood v. Safeway, Inc., 121 Nev. 724 (2005)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Wood v. Safeway, Inc. is reported at 121 Nev. 724 (2005); cited 835 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Wood v. Safeway, Inc. |

### NV-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `121 Nev. 724` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 121 Nev. 724 is Wood v. Safeway, Inc. (2005). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Wood v. Safeway, Inc. |

### NV-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Wood v. Safeway, Inc., 121 P.3d 1026 (2005)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Wood v. Safeway, Inc. carries parallel cites 121 Nev. 724 / 121 P.3d 1026. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Wood v. Safeway, Inc. |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### NV-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Wood v. Safeway, Inc., 121 Nev. Adv. Rep. 73` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 121 Nev. Adv. Rep. 73 is a secondary locator for Wood v. Safeway, Inc.; Bluebook form is 121 Nev. 724. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Nev.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### NV-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 121 Nev. 724 (2005)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 121 Nev. 724 is Wood v. Safeway, Inc., not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Wood v. Safeway, Inc. |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### NV-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Wood v. Safeway, Inc., 121 Nev. 727 (2005)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Wood v. Safeway, Inc. begins at page 724, not 727. Page 727 is verified not to be any other case's first page in 121 Nev.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Wood v. Safeway, Inc. |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### NV-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Wood v. Safeway, Inc., 121 Nev. 706 (2005)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 121 Nev. 706 is Flores v. State (2005), not Wood v. Safeway, Inc.. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### NV-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Wood v. Safeway, Inc., 121 Nev. 724 (Utah 2011)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Wood v. Safeway, Inc. is a 2005 Nevada decision, not a 2011 Utah decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### NV-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Wood, 121 Nev. at 728` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Wood v. Safeway, Inc., 121 Nev. 724; pin 728 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### NV-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 727` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### NV-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Wood v. Safeway, Inc., 121 Nev. 724 (2005); Marbury v. Quillon, 88888 Nev. 9 (2007)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (121 Nev. 724); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### NV-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Wood v. Safeway, Inc., 121 Nev. 724 (2005), aff'd, 999 F.3d 1 (11th Cir. 2008)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 121 Nev. 724 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### NV-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Nev. Rev. Stat. § 11.190` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Nev. Rev. Stat. § 11.190 is a real provision of Nevada law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### NV-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Nev. Rev. Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Nevada code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### NV-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Nev. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Nev. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### NV-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Wood v. Safeway, Inc., 12 Nev. Sup. Rptr. 4th 88 (2005)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Nev. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### NV-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Wood v. Safeway, Inc., 2005 WL 9999999 (Nev. 2005)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Wood v. Safeway, Inc. has a print cite (121 Nev. 724); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### NV-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Lisby v. State, 414 P.2d 592 (1966)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Lisby v. State carries good-law status "negative" with 2 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### NV-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Nevada cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## New York (NY)

<a id="state-ny"></a>

### NY-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `People v. Danielson, 9 N.Y.3d 342 (2007)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | People v. Danielson is reported at 9 N.Y.3d 342 (2007); cited 8071 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. Danielson |

### NY-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `9 N.Y.3d 342` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 9 N.Y.3d 342 is People v. Danielson (2007). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. Danielson |

### NY-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `People v. Danielson, 880 N.E.2d 1 (2007)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | People v. Danielson carries parallel cites 9 N.Y.3d 342 / 880 N.E.2d 1 / 849 N.Y.S.2d 480. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | People v. Danielson |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### NY-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 9 N.Y.3d 342 (2007)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 9 N.Y.3d 342 is People v. Danielson, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | People v. Danielson |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### NY-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `People v. Danielson, 9 N.Y.3d 345 (2007)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | People v. Danielson begins at page 342, not 345. Page 345 is verified not to be any other case's first page in 9 N.Y.3d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | People v. Danielson |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### NY-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `People v. Danielson, 9 N.Y.3d 351 (2007)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 9 N.Y.3d 351 is Fung v. Japan Airlines Co. (2007), not People v. Danielson. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### NY-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `People v. Danielson, 9 N.Y.3d 342 (N.J. 2013)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | People v. Danielson is a 2007 New York decision, not a 2013 N.J. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### NY-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `People v. Danielson, 10 N.Y.3d 342 (2007)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 9 N.Y.3d 342. Volume 10 carries no case at page 342 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### NY-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Danielson, 9 N.Y.3d at 346` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for People v. Danielson, 9 N.Y.3d 342; pin 346 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### NY-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 345` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### NY-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `People v. Danielson, 9 N.Y.3d 342 (2007); Marbury v. Quillon, 88888 N.Y.3d 9 (2009)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (9 N.Y.3d 342); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### NY-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `People v. Danielson, 9 N.Y.3d 342 (2007), aff'd, 999 F.3d 1 (11th Cir. 2010)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 9 N.Y.3d 342 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### NY-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `N.Y. C.P.L.R. 3211` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | N.Y. C.P.L.R. 3211 is a real provision of New York law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### NY-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `N.Y. C.P.L.R. 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the New York code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### NY-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 N.Y.3d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | N.Y.3d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### NY-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `People v. Danielson, 12 N.Y. Sup. Rptr. 4th 88 (2007)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "N.Y. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### NY-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `People v. Danielson, 2007 WL 9999999 (N.Y. 2007)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | People v. Danielson has a print cite (9 N.Y.3d 342); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### NY-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Saratoga County Chamber of Commerce, Inc. v. Pataki, 798 N.E.2d 1047 (2003)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Saratoga County Chamber of Commerce, Inc. v. Pataki carries good-law status "overruled" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### NY-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the New York cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Ohio (OH)

<a id="state-oh"></a>

### OH-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `State v. Thompkins, 78 Ohio St. 3d 380 (1997)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | State v. Thompkins is reported at 78 Ohio St. 3d 380 (1997); cited 12817 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Thompkins |

### OH-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `78 Ohio St. 3d 380` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 78 Ohio St. 3d 380 is State v. Thompkins (1997). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Thompkins |

### OH-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Thompkins, 678 N.E.2d 541 (1997)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | State v. Thompkins carries parallel cites 78 Ohio St. 3d 380 / 678 N.E.2d 541. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Thompkins |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### OH-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `State v. Thompkins, 2018 WL 994352` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2018 WL 994352 is a secondary locator for State v. Thompkins; Bluebook form is 78 Ohio St. 3d 380. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Ohio St. 3d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### OH-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 78 Ohio St. 3d 380 (1997)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 78 Ohio St. 3d 380 is State v. Thompkins, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | State v. Thompkins |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### OH-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Thompkins, 78 Ohio St. 3d 383 (1997)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | State v. Thompkins begins at page 380, not 383. Page 383 is verified not to be any other case's first page in 78 Ohio St. 3d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | State v. Thompkins |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### OH-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `State v. Thompkins, 78 Ohio St. 3d 376 (1997)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 78 Ohio St. 3d 376 is Perez v. Cleveland (1997), not State v. Thompkins. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### OH-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Thompkins, 78 Ohio St. 3d 380 (Ky. 2003)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | State v. Thompkins is a 1997 Ohio decision, not a 2003 Ky. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### OH-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `State v. Thompkins, 87 Ohio St. 3d 380 (1997)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 78 Ohio St. 3d 380. Volume 87 carries no case at page 380 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### OH-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Thompkins, 78 Ohio St. 3d at 384` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for State v. Thompkins, 78 Ohio St. 3d 380; pin 384 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### OH-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 383` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### OH-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `State v. Thompkins, 78 Ohio St. 3d 380 (1997); Marbury v. Quillon, 88888 Ohio St. 3d 9 (1999)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (78 Ohio St. 3d 380); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### OH-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `State v. Thompkins, 78 Ohio St. 3d 380 (1997), aff'd, 999 F.3d 1 (11th Cir. 2000)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 78 Ohio St. 3d 380 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### OH-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Ohio Rev. Code Ann. § 2305.09` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Ohio Rev. Code Ann. § 2305.09 is a real provision of Ohio law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### OH-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Ohio Rev. Code Ann. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Ohio code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### OH-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Ohio St. 3d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Ohio St. 3d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### OH-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `State v. Thompkins, 12 Ohio Sup. Rptr. 4th 88 (1997)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Ohio Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### OH-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Thompkins, 1997 WL 9999999 (Ohio 1997)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | State v. Thompkins has a print cite (78 Ohio St. 3d 380); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### OH-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State v. Fischer, 2010 Ohio 6238 (2010)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State v. Fischer carries good-law status "negative" with 2 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### OH-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Ohio cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Oklahoma (OK)

<a id="state-ok"></a>

### OK-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Carmichael v. Beller, 914 P.2d 1051 (1996)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Carmichael v. Beller is reported at 914 P.2d 1051 (1996); cited 276 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Carmichael v. Beller |

### OK-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `914 P.2d 1051` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 914 P.2d 1051 is Carmichael v. Beller (1996). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Carmichael v. Beller |

### OK-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Carmichael v. Beller, 1996 OK 48 (1996)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Carmichael v. Beller carries parallel cites 914 P.2d 1051 / 1996 OK 48. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Carmichael v. Beller |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### OK-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Carmichael v. Beller, 1996 Okla. LEXIS 55` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1996 Okla. LEXIS 55 is a secondary locator for Carmichael v. Beller; Bluebook form is 914 P.2d 1051. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `P.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### OK-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 914 P.2d 1051 (1996)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 914 P.2d 1051 is Carmichael v. Beller, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Carmichael v. Beller |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### OK-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Carmichael v. Beller, 914 P.2d 1054 (1996)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Carmichael v. Beller begins at page 1051, not 1054. Page 1054 is verified not to be any other case's first page in 914 P.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Carmichael v. Beller |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### OK-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Carmichael v. Beller, 914 P.2d 1046 (1996)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 914 P.2d 1046 is State Ex Rel. Oklahoma Bar Ass'n v. Briery (1996), not Carmichael v. Beller. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### OK-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Carmichael v. Beller, 914 P.2d 1051 (Tex. 2002)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Carmichael v. Beller is a 1996 Oklahoma decision, not a 2002 Tex. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### OK-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Carmichael v. Beller, 419 P.2d 1051 (1996)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 914 P.2d 1051. Volume 419 carries no case at page 1051 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### OK-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Carmichael, 914 P.2d at 1055` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Carmichael v. Beller, 914 P.2d 1051; pin 1055 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### OK-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 1054` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### OK-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Carmichael v. Beller, 914 P.2d 1051 (1996); Marbury v. Quillon, 88888 P.2d 9 (1998)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (914 P.2d 1051); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### OK-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Carmichael v. Beller, 914 P.2d 1051 (1996), aff'd, 999 F.3d 1 (11th Cir. 1999)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 914 P.2d 1051 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### OK-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Okla. Stat. tit. 12, § 95` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Okla. Stat. tit. 12, § 95 is a real provision of Oklahoma law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### OK-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Okla. Stat. tit. 12, § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Oklahoma code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### OK-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 P.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | P.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### OK-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Carmichael v. Beller, 12 Okla. Sup. Rptr. 4th 88 (1996)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Okla. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### OK-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Carmichael v. Beller, 1996 WL 9999999 (Okla. 1996)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Carmichael v. Beller has a print cite (914 P.2d 1051); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### OK-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Keel v. MFA Insurance Company, 553 P.2d 153 (1976)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Keel v. MFA Insurance Company carries good-law status "negative" with 2 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### OK-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Oklahoma cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Oregon (OR)

<a id="state-or"></a>

### OR-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Portland General Electric Co. v. Bureau of Labor & Industries, 317 Or. 606 (1993)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Portland General Electric Co. v. Bureau of Labor & Industries is reported at 317 Or. 606 (1993); cited 2030 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Portland General Electric Co. v. Bureau of Labor & Industries |

### OR-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `317 Or. 606` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 317 Or. 606 is Portland General Electric Co. v. Bureau of Labor & Industries (1993). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Portland General Electric Co. v. Bureau of Labor & Industries |

### OR-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Portland General Electric Co. v. Bureau of Labor & Industries, 859 P.2d 1143 (1993)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Portland General Electric Co. v. Bureau of Labor & Industries carries parallel cites 317 Or. 606 / 859 P.2d 1143 / 17 Employee Benefits Cas. (BNA) 1517. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Portland General Electric Co. v. Bureau of Labor & Industries |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### OR-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Portland General Electric Co. v. Bureau of Labor & Industries, 1993 Ore. LEXIS 152` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1993 Ore. LEXIS 152 is a secondary locator for Portland General Electric Co. v. Bureau of Labor & Industries; Bluebook form is 317 Or. 606. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Or.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### OR-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 317 Or. 606 (1993)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 317 Or. 606 is Portland General Electric Co. v. Bureau of Labor & Industries, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Portland General Electric Co. v. Bureau of Labor & Industries |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### OR-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Portland General Electric Co. v. Bureau of Labor & Industries, 317 Or. 609 (1993)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Portland General Electric Co. v. Bureau of Labor & Industries begins at page 606, not 609. Page 609 is verified not to be any other case's first page in 317 Or.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Portland General Electric Co. v. Bureau of Labor & Industries |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### OR-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Portland General Electric Co. v. Bureau of Labor & Industries, 317 Or. 604 (1993)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 317 Or. 604 is Allison v. Kleinman (1993), not Portland General Electric Co. v. Bureau of Labor & Industries. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### OR-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Portland General Electric Co. v. Bureau of Labor & Industries, 317 Or. 606 (Idaho 1999)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Portland General Electric Co. v. Bureau of Labor & Industries is a 1993 Oregon decision, not a 1999 Idaho decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### OR-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Portland General Electric Co. v. Bureau of Labor & Industries, 713 Or. 606 (1993)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 317 Or. 606. Volume 713 carries no case at page 606 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### OR-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Portland General, 317 Or. at 610` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Portland General Electric Co. v. Bureau of Labor & Industries, 317 Or. 606; pin 610 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### OR-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 609` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### OR-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Portland General Electric Co. v. Bureau of Labor & Industries, 317 Or. 606 (1993); Marbury v. Quillon, 88888 Or. 9 (1995)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (317 Or. 606); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### OR-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Portland General Electric Co. v. Bureau of Labor & Industries, 317 Or. 606 (1993), aff'd, 999 F.3d 1 (11th Cir. 1996)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 317 Or. 606 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### OR-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Or. Rev. Stat. § 12.110` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Or. Rev. Stat. § 12.110 is a real provision of Oregon law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### OR-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Or. Rev. Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Oregon code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### OR-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Or. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Or. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### OR-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Portland General Electric Co. v. Bureau of Labor & Industries, 12 Or. Sup. Rptr. 4th 88 (1993)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Or. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### OR-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Portland General Electric Co. v. Bureau of Labor & Industries, 1993 WL 9999999 (Or. 1993)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Portland General Electric Co. v. Bureau of Labor & Industries has a print cite (317 Or. 606); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### OR-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Smothers v. Gresham Transfer, Inc., 23 P.3d 333 (2001)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Smothers v. Gresham Transfer, Inc. carries good-law status "overruled" with 7 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### OR-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Oregon cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Pennsylvania (PA)

<a id="state-pa"></a>

### PA-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Commonwealth v. Turner, 518 Pa. 491 (1988)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Commonwealth v. Turner is reported at 518 Pa. 491 (1988); cited 3908 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Commonwealth v. Turner |

### PA-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `518 Pa. 491` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 518 Pa. 491 is Commonwealth v. Turner (1988). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Commonwealth v. Turner |

### PA-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Commonwealth v. Turner, 544 A.2d 927 (1988)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Commonwealth v. Turner carries parallel cites 518 Pa. 491 / 544 A.2d 927. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Commonwealth v. Turner |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### PA-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. Turner, 1988 Pa. LEXIS 212` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1988 Pa. LEXIS 212 is a secondary locator for Commonwealth v. Turner; Bluebook form is 518 Pa. 491. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Pa.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### PA-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 518 Pa. 491 (1988)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 518 Pa. 491 is Commonwealth v. Turner, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Commonwealth v. Turner |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### PA-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Commonwealth v. Turner, 518 Pa. 494 (1988)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Commonwealth v. Turner begins at page 491, not 494. Page 494 is verified not to be any other case's first page in 518 Pa.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Commonwealth v. Turner |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### PA-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. Turner, 518 Pa. 485 (1988)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 518 Pa. 485 is In Re Investigating Grand Jury (1988), not Commonwealth v. Turner. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### PA-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Commonwealth v. Turner, 518 Pa. 491 (Del. 1994)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Commonwealth v. Turner is a 1988 Pennsylvania decision, not a 1994 Del. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### PA-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. Turner, 815 Pa. 491 (1988)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 518 Pa. 491. Volume 815 carries no case at page 491 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### PA-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Turner, 518 Pa. at 495` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Commonwealth v. Turner, 518 Pa. 491; pin 495 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### PA-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 494` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### PA-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. Turner, 518 Pa. 491 (1988); Marbury v. Quillon, 88888 Pa. 9 (1990)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (518 Pa. 491); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### PA-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. Turner, 518 Pa. 491 (1988), aff'd, 999 F.3d 1 (11th Cir. 1991)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 518 Pa. 491 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### PA-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `42 Pa. Cons. Stat. § 5524` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | 42 Pa. Cons. Stat. § 5524 is a real provision of Pennsylvania law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### PA-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `42 Pa. Cons. Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Pennsylvania code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### PA-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Pa. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Pa. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### PA-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. Turner, 12 Pa. Sup. Rptr. 4th 88 (1988)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Pa. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### PA-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Commonwealth v. Turner, 1988 WL 9999999 (Pa. 1988)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Commonwealth v. Turner has a print cite (518 Pa. 491); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### PA-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Commonwealth Ex Rel. Washington v. Maroney, 427 Pa. 599 (1967)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Commonwealth Ex Rel. Washington v. Maroney carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### PA-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Pennsylvania cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Rhode Island (RI)

<a id="state-ri"></a>

### RI-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Accent Store Design, Inc. v. Marathon House, Inc., 674 A.2d 1223 (1996)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Accent Store Design, Inc. v. Marathon House, Inc. is reported at 674 A.2d 1223 (1996); cited 252 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Accent Store Design, Inc. v. Marathon House, Inc. |

### RI-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `674 A.2d 1223` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 674 A.2d 1223 is Accent Store Design, Inc. v. Marathon House, Inc. (1996). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Accent Store Design, Inc. v. Marathon House, Inc. |

### RI-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Accent Store Design, Inc. v. Marathon House, Inc., 1996 R.I. LEXIS 130` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1996 R.I. LEXIS 130 is a secondary locator for Accent Store Design, Inc. v. Marathon House, Inc.; Bluebook form is 674 A.2d 1223. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `A.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### RI-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 674 A.2d 1223 (1996)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 674 A.2d 1223 is Accent Store Design, Inc. v. Marathon House, Inc., not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Accent Store Design, Inc. v. Marathon House, Inc. |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### RI-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Accent Store Design, Inc. v. Marathon House, Inc., 674 A.2d 1226 (1996)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Accent Store Design, Inc. v. Marathon House, Inc. begins at page 1223, not 1226. Page 1226 is verified not to be any other case's first page in 674 A.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Accent Store Design, Inc. v. Marathon House, Inc. |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### RI-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Accent Store Design, Inc. v. Marathon House, Inc., 674 A.2d 1221 (1996)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 674 A.2d 1221 is In Re Timbers (1996), not Accent Store Design, Inc. v. Marathon House, Inc.. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### RI-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Accent Store Design, Inc. v. Marathon House, Inc., 674 A.2d 1223 (Mass. 2002)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Accent Store Design, Inc. v. Marathon House, Inc. is a 1996 Rhode Island decision, not a 2002 Mass. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### RI-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Accent Store Design, Inc. v. Marathon House, Inc., 476 A.2d 1223 (1996)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 674 A.2d 1223. Volume 476 carries no case at page 1223 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### RI-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Accent Store, 674 A.2d at 1227` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Accent Store Design, Inc. v. Marathon House, Inc., 674 A.2d 1223; pin 1227 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### RI-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 1226` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### RI-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Accent Store Design, Inc. v. Marathon House, Inc., 674 A.2d 1223 (1996); Marbury v. Quillon, 88888 A.2d 9 (1998)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (674 A.2d 1223); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### RI-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Accent Store Design, Inc. v. Marathon House, Inc., 674 A.2d 1223 (1996), aff'd, 999 F.3d 1 (11th Cir. 1999)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 674 A.2d 1223 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### RI-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `R.I. Gen. Laws § 9-1-14` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | R.I. Gen. Laws § 9-1-14 is a real provision of Rhode Island law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### RI-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `R.I. Gen. Laws § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Rhode Island code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### RI-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 A.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | A.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### RI-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Accent Store Design, Inc. v. Marathon House, Inc., 12 R.I. Sup. Rptr. 4th 88 (1996)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "R.I. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### RI-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Accent Store Design, Inc. v. Marathon House, Inc., 1996 WL 9999999 (R.I. 1996)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Accent Store Design, Inc. v. Marathon House, Inc. has a print cite (674 A.2d 1223); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### RI-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Sherwood Ice Co. v. U. S. Casualty Co., 100 A. 572 (1917)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Sherwood Ice Co. v. U. S. Casualty Co. carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### RI-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Rhode Island cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## South Carolina (SC)

<a id="state-sc"></a>

### SC-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `State v. Williams, 305 S.C. 116 (1991)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | State v. Williams is reported at 305 S.C. 116 (1991); cited 2224 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Williams |

### SC-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `305 S.C. 116` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 305 S.C. 116 is State v. Williams (1991). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Williams |

### SC-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Williams, 406 S.E.2d 357 (1991)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | State v. Williams carries parallel cites 305 S.C. 116 / 406 S.E.2d 357. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Williams |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### SC-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `State v. Williams, 1991 S.C. LEXIS 172` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1991 S.C. LEXIS 172 is a secondary locator for State v. Williams; Bluebook form is 305 S.C. 116. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `S.C.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### SC-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 305 S.C. 116 (1991)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 305 S.C. 116 is State v. Williams, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | State v. Williams |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### SC-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Williams, 305 S.C. 119 (1991)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | State v. Williams begins at page 116, not 119. Page 119 is verified not to be any other case's first page in 305 S.C.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | State v. Williams |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### SC-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `State v. Williams, 305 S.C. 115 (1991)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 305 S.C. 115 is Key v. Currie (1991), not State v. Williams. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### SC-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Williams, 305 S.C. 116 (N.C. 1997)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | State v. Williams is a 1991 South Carolina decision, not a 1997 N.C. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### SC-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `State v. Williams, 503 S.C. 116 (1991)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 305 S.C. 116. Volume 503 carries no case at page 116 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### SC-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Williams, 305 S.C. at 120` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for State v. Williams, 305 S.C. 116; pin 120 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### SC-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 119` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### SC-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `State v. Williams, 305 S.C. 116 (1991); Marbury v. Quillon, 88888 S.C. 9 (1993)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (305 S.C. 116); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### SC-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `State v. Williams, 305 S.C. 116 (1991), aff'd, 999 F.3d 1 (11th Cir. 1994)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 305 S.C. 116 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### SC-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `S.C. Code Ann. § 15-3-530` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | S.C. Code Ann. § 15-3-530 is a real provision of South Carolina law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### SC-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `S.C. Code Ann. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the South Carolina code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### SC-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 S.C. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | S.C. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### SC-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `State v. Williams, 12 S.C. Sup. Rptr. 4th 88 (1991)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "S.C. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### SC-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Williams, 1991 WL 9999999 (S.C. 1991)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | State v. Williams has a print cite (305 S.C. 116); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### SC-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State v. Owens, 552 S.E.2d 745 (2001)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State v. Owens carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### SC-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the South Carolina cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## South Dakota (SD)

<a id="state-sd"></a>

### SD-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Permann v. South Dakota Department of Labor, Unemployment Insurance Division, 411 N.W.2d 113 (1987)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Permann v. South Dakota Department of Labor, Unemployment Insurance Division is reported at 411 N.W.2d 113 (1987); cited 182 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Permann v. South Dakota Department of Labor, Unemployment Insurance Division |

### SD-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `411 N.W.2d 113` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 411 N.W.2d 113 is Permann v. South Dakota Department of Labor, Unemployment Insurance Division (1987). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Permann v. South Dakota Department of Labor, Unemployment Insurance Division |

### SD-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Permann v. South Dakota Department of Labor, Unemployment Insurance Division, 41 Educ. L. Rep. 322 (1987)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Permann v. South Dakota Department of Labor, Unemployment Insurance Division carries parallel cites 411 N.W.2d 113 / 41 Educ. L. Rep. 322. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Permann v. South Dakota Department of Labor, Unemployment Insurance Division |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### SD-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Permann v. South Dakota Department of Labor, Unemployment Insurance Division, 1987 S.D. LEXIS 317` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1987 S.D. LEXIS 317 is a secondary locator for Permann v. South Dakota Department of Labor, Unemployment Insurance Division; Bluebook form is 411 N.W.2d 113. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `N.W.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### SD-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 411 N.W.2d 113 (1987)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 411 N.W.2d 113 is Permann v. South Dakota Department of Labor, Unemployment Insurance Division, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Permann v. South Dakota Department of Labor, Unemployment Insurance Division |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### SD-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Permann v. South Dakota Department of Labor, Unemployment Insurance Division, 411 N.W.2d 116 (1987)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Permann v. South Dakota Department of Labor, Unemployment Insurance Division begins at page 113, not 116. Page 116 is verified not to be any other case's first page in 411 N.W.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Permann v. South Dakota Department of Labor, Unemployment Insurance Division |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### SD-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Permann v. South Dakota Department of Labor, Unemployment Insurance Division, 411 N.W.2d 108 (1987)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 411 N.W.2d 108 is Lee v. South Dakota Department of Health (1987), not Permann v. South Dakota Department of Labor, Unemployment Insurance Division. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### SD-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Permann v. South Dakota Department of Labor, Unemployment Insurance Division, 411 N.W.2d 113 (N.D. 1993)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Permann v. South Dakota Department of Labor, Unemployment Insurance Division is a 1987 South Dakota decision, not a 1993 N.D. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### SD-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Permann v. South Dakota Department of Labor, Unemployment Insurance Division, 114 N.W.2d 113 (1987)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 411 N.W.2d 113. Volume 114 carries no case at page 113 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### SD-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Permann, 411 N.W.2d at 117` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Permann v. South Dakota Department of Labor, Unemployment Insurance Division, 411 N.W.2d 113; pin 117 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### SD-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 116` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### SD-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Permann v. South Dakota Department of Labor, Unemployment Insurance Division, 411 N.W.2d 113 (1987); Marbury v. Quillon, 88888 N.W.2d 9 (1989)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (411 N.W.2d 113); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### SD-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Permann v. South Dakota Department of Labor, Unemployment Insurance Division, 411 N.W.2d 113 (1987), aff'd, 999 F.3d 1 (11th Cir. 1990)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 411 N.W.2d 113 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### SD-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `S.D. Codified Laws § 15-2-13` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | S.D. Codified Laws § 15-2-13 is a real provision of South Dakota law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### SD-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `S.D. Codified Laws § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the South Dakota code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### SD-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 N.W.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | N.W.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### SD-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Permann v. South Dakota Department of Labor, Unemployment Insurance Division, 12 S.D. Sup. Rptr. 4th 88 (1987)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "S.D. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### SD-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Permann v. South Dakota Department of Labor, Unemployment Insurance Division, 1987 WL 9999999 (S.D. 1987)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Permann v. South Dakota Department of Labor, Unemployment Insurance Division has a print cite (411 N.W.2d 113); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### SD-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State v. Houghton, 272 N.W.2d 788 (1978)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State v. Houghton carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### SD-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the South Dakota cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Tennessee (TN)

<a id="state-tn"></a>

### TN-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `State v. Bland, 958 S.W.2d 651 (1997)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | State v. Bland is reported at 958 S.W.2d 651 (1997); cited 3130 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Bland |

### TN-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `958 S.W.2d 651` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 958 S.W.2d 651 is State v. Bland (1997). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Bland |

### TN-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `State v. Bland, 1997 Tenn. LEXIS 587` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1997 Tenn. LEXIS 587 is a secondary locator for State v. Bland; Bluebook form is 958 S.W.2d 651. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `S.W.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### TN-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 958 S.W.2d 651 (1997)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 958 S.W.2d 651 is State v. Bland, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | State v. Bland |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### TN-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Bland, 958 S.W.2d 654 (1997)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | State v. Bland begins at page 651, not 654. Page 654 is verified not to be any other case's first page in 958 S.W.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | State v. Bland |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### TN-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `State v. Bland, 958 S.W.2d 643 (1997)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 958 S.W.2d 643 is Nelson v. Martin (1997), not State v. Bland. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### TN-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Bland, 958 S.W.2d 651 (Ky. 2003)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | State v. Bland is a 1997 Tennessee decision, not a 2003 Ky. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### TN-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `State v. Bland, 859 S.W.2d 651 (1997)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 958 S.W.2d 651. Volume 859 at page 651 is a real but different case: Aktienggesellschaft v. Kirk (1993). |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `not_in_corpus`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is a real different case, so name_mismatch is the correct answer. |

### TN-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Bland, 958 S.W.2d at 655` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for State v. Bland, 958 S.W.2d 651; pin 655 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### TN-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 654` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### TN-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `State v. Bland, 958 S.W.2d 651 (1997); Marbury v. Quillon, 88888 S.W.2d 9 (1999)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (958 S.W.2d 651); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### TN-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `State v. Bland, 958 S.W.2d 651 (1997), aff'd, 999 F.3d 1 (11th Cir. 2000)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 958 S.W.2d 651 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### TN-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Tenn. Code Ann. § 28-3-104` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Tenn. Code Ann. § 28-3-104 is a real provision of Tennessee law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### TN-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Tenn. Code Ann. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Tennessee code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### TN-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 S.W.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | S.W.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### TN-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `State v. Bland, 12 Tenn. Sup. Rptr. 4th 88 (1997)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Tenn. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### TN-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Bland, 1997 WL 9999999 (Tenn. 1997)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | State v. Bland has a print cite (958 S.W.2d 651); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### TN-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `State v. Bingham, 910 S.W.2d 448 (1995)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. State v. Bingham carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### TN-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Tennessee cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Texas (TX)

<a id="state-tx"></a>

### TX-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `City of Keller v. Wilson, 48 Tex. Sup. Ct. J. 848 (2005)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | City of Keller v. Wilson is reported at 48 Tex. Sup. Ct. J. 848 (2005); cited 9305 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | City of Keller v. Wilson |

### TX-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `48 Tex. Sup. Ct. J. 848` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 48 Tex. Sup. Ct. J. 848 is City of Keller v. Wilson (2005). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | City of Keller v. Wilson |

### TX-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `City of Keller v. Wilson, 168 S.W.3d 802 (2005)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | City of Keller v. Wilson carries parallel cites 48 Tex. Sup. Ct. J. 848 / 168 S.W.3d 802. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | City of Keller v. Wilson |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### TX-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `City of Keller v. Wilson, 48 Tex. Sup. Ct. J. 848` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 48 Tex. Sup. Ct. J. 848 is a secondary locator for City of Keller v. Wilson; Bluebook form is 48 Tex. Sup. Ct. J. 848. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Tex. Sup. Ct. J.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### TX-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 48 Tex. Sup. Ct. J. 848 (2005)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 48 Tex. Sup. Ct. J. 848 is City of Keller v. Wilson, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | City of Keller v. Wilson |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### TX-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `City of Keller v. Wilson, 48 Tex. Sup. Ct. J. 851 (2005)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | City of Keller v. Wilson begins at page 848, not 851. Page 851 is verified not to be any other case's first page in 48 Tex. Sup. Ct. J.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | City of Keller v. Wilson |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### TX-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `City of Keller v. Wilson, 48 Tex. Sup. Ct. J. 833 (2005)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 48 Tex. Sup. Ct. J. 833 is R.R. Street & Co. v. Pilgrim Enterprises, Inc. (2005), not City of Keller v. Wilson. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### TX-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `City of Keller v. Wilson, 48 Tex. Sup. Ct. J. 848 (Okla. 2011)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | City of Keller v. Wilson is a 2005 Texas decision, not a 2011 Okla. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### TX-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `City of Keller v. Wilson, 84 Tex. Sup. Ct. J. 848 (2005)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 48 Tex. Sup. Ct. J. 848. Volume 84 carries no case at page 848 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### TX-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `City of, 48 Tex. Sup. Ct. J. at 852` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for City of Keller v. Wilson, 48 Tex. Sup. Ct. J. 848; pin 852 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### TX-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 851` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### TX-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `City of Keller v. Wilson, 48 Tex. Sup. Ct. J. 848 (2005); Marbury v. Quillon, 88888 Tex. Sup. Ct. J. 9 (2007)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (48 Tex. Sup. Ct. J. 848); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### TX-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `City of Keller v. Wilson, 48 Tex. Sup. Ct. J. 848 (2005), aff'd, 999 F.3d 1 (11th Cir. 2008)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 48 Tex. Sup. Ct. J. 848 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### TX-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Tex. Civ. Prac. & Rem. Code § 16.003` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Tex. Civ. Prac. & Rem. Code § 16.003 is a real provision of Texas law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### TX-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Tex. Civ. Prac. & Rem. Code § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Texas code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### TX-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Tex. Sup. Ct. J. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Tex. Sup. Ct. J. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### TX-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `City of Keller v. Wilson, 12 Tex. Sup. Rptr. 4th 88 (2005)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Tex. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### TX-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `City of Keller v. Wilson, 2005 WL 9999999 (Tex. 2005)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | City of Keller v. Wilson has a print cite (48 Tex. Sup. Ct. J. 848); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### TX-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Clewis v. State, 922 S.W.2d 126 (1996)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Clewis v. State carries good-law status "overruled" with 4 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### TX-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Texas cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Utah (UT)

<a id="state-ut"></a>

### UT-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `State v. Pena, 232 Utah Adv. Rep. 3 (1994)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | State v. Pena is reported at 232 Utah Adv. Rep. 3 (1994); cited 389 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Pena |

### UT-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `232 Utah Adv. Rep. 3` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 232 Utah Adv. Rep. 3 is State v. Pena (1994). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Pena |

### UT-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Pena, 869 P.2d 932 (1994)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | State v. Pena carries parallel cites 232 Utah Adv. Rep. 3 / 869 P.2d 932. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | State v. Pena |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### UT-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `State v. Pena, 232 Utah Adv. Rep. 3` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 232 Utah Adv. Rep. 3 is a secondary locator for State v. Pena; Bluebook form is 232 Utah Adv. Rep. 3. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Utah Adv. Rep.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### UT-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 232 Utah Adv. Rep. 3 (1994)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 232 Utah Adv. Rep. 3 is State v. Pena, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | State v. Pena |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### UT-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Pena, 232 Utah Adv. Rep. 6 (1994)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | State v. Pena begins at page 3, not 6. Page 6 is verified not to be any other case's first page in 232 Utah Adv. Rep.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | State v. Pena |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### UT-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `State v. Pena, 232 Utah Adv. Rep. 9 (1994)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 232 Utah Adv. Rep. 9 is City of Orem v. Henrie (1994), not State v. Pena. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### UT-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `State v. Pena, 232 Utah Adv. Rep. 3 (Nev. 2000)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | State v. Pena is a 1994 Utah decision, not a 2000 Nev. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### UT-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Pena, 232 Utah Adv. Rep. at 7` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for State v. Pena, 232 Utah Adv. Rep. 3; pin 7 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### UT-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 6` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### UT-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `State v. Pena, 232 Utah Adv. Rep. 3 (1994); Marbury v. Quillon, 88888 Utah Adv. Rep. 9 (1996)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (232 Utah Adv. Rep. 3); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### UT-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `State v. Pena, 232 Utah Adv. Rep. 3 (1994), aff'd, 999 F.3d 1 (11th Cir. 1997)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 232 Utah Adv. Rep. 3 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### UT-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Utah Code Ann. § 78B-2-307` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Utah Code Ann. § 78B-2-307 is a real provision of Utah law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### UT-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Utah Code Ann. § 78B-999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Utah code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### UT-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Utah Adv. Rep. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Utah Adv. Rep. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### UT-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `State v. Pena, 12 Utah Sup. Rptr. 4th 88 (1994)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Utah Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### UT-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `State v. Pena, 1994 WL 9999999 (Utah 1994)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | State v. Pena has a print cite (232 Utah Adv. Rep. 3); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### UT-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Lyon v. Hartford Accident and Indemnity Company, 480 P.2d 739 (1971)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Lyon v. Hartford Accident and Indemnity Company carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### UT-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Utah cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Virginia (VA)

<a id="state-va"></a>

### VA-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Commonwealth v. Hudson, 265 Va. 505 (2003)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Commonwealth v. Hudson is reported at 265 Va. 505 (2003); cited 777 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Commonwealth v. Hudson |

### VA-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `265 Va. 505` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 265 Va. 505 is Commonwealth v. Hudson (2003). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Commonwealth v. Hudson |

### VA-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Commonwealth v. Hudson, 578 S.E.2d 781 (2003)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Commonwealth v. Hudson carries parallel cites 265 Va. 505 / 578 S.E.2d 781. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Commonwealth v. Hudson |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### VA-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. Hudson, 2003 Va. LEXIS 49` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2003 Va. LEXIS 49 is a secondary locator for Commonwealth v. Hudson; Bluebook form is 265 Va. 505. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Va.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### VA-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 265 Va. 505 (2003)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 265 Va. 505 is Commonwealth v. Hudson, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Commonwealth v. Hudson |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### VA-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Commonwealth v. Hudson, 265 Va. 508 (2003)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Commonwealth v. Hudson begins at page 505, not 508. Page 508 is verified not to be any other case's first page in 265 Va.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Commonwealth v. Hudson |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### VA-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. Hudson, 265 Va. 500 (2003)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 265 Va. 500 is Harrell v. City of Norfolk (2003), not Commonwealth v. Hudson. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### VA-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Commonwealth v. Hudson, 265 Va. 505 (Md. 2009)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Commonwealth v. Hudson is a 2003 Virginia decision, not a 2009 Md. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### VA-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. Hudson, 562 Va. 505 (2003)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 265 Va. 505. Volume 562 carries no case at page 505 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### VA-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Hudson, 265 Va. at 509` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Commonwealth v. Hudson, 265 Va. 505; pin 509 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### VA-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 508` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### VA-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. Hudson, 265 Va. 505 (2003); Marbury v. Quillon, 88888 Va. 9 (2005)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (265 Va. 505); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### VA-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. Hudson, 265 Va. 505 (2003), aff'd, 999 F.3d 1 (11th Cir. 2006)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 265 Va. 505 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### VA-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Va. Code Ann. § 8.01-243` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Va. Code Ann. § 8.01-243 is a real provision of Virginia law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### VA-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Va. Code Ann. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Virginia code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### VA-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Va. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Va. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### VA-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Commonwealth v. Hudson, 12 Va. Sup. Rptr. 4th 88 (2003)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Va. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### VA-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Commonwealth v. Hudson, 2003 WL 9999999 (Va. 2003)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Commonwealth v. Hudson has a print cite (265 Va. 505); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### VA-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Luginbyhl v. Commonwealth, 618 S.E.2d 347 (2005)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Luginbyhl v. Commonwealth carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### VA-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Virginia cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Vermont (VT)

<a id="state-vt"></a>

### VT-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Robertson v. Mylan Laboratories, Inc., 176 Vt. 356 (2004)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Robertson v. Mylan Laboratories, Inc. is reported at 176 Vt. 356 (2004); cited 304 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Robertson v. Mylan Laboratories, Inc. |

### VT-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `176 Vt. 356` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 176 Vt. 356 is Robertson v. Mylan Laboratories, Inc. (2004). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Robertson v. Mylan Laboratories, Inc. |

### VT-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Robertson v. Mylan Laboratories, Inc., 848 A.2d 310 (2004)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Robertson v. Mylan Laboratories, Inc. carries parallel cites 176 Vt. 356 / 848 A.2d 310 / 2004 VT 15. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Robertson v. Mylan Laboratories, Inc. |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### VT-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Robertson v. Mylan Laboratories, Inc., 2004 Vt. LEXIS 13` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2004 Vt. LEXIS 13 is a secondary locator for Robertson v. Mylan Laboratories, Inc.; Bluebook form is 176 Vt. 356. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Vt.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### VT-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 176 Vt. 356 (2004)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 176 Vt. 356 is Robertson v. Mylan Laboratories, Inc., not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Robertson v. Mylan Laboratories, Inc. |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### VT-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Robertson v. Mylan Laboratories, Inc., 176 Vt. 359 (2004)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Robertson v. Mylan Laboratories, Inc. begins at page 356, not 359. Page 359 is verified not to be any other case's first page in 176 Vt.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Robertson v. Mylan Laboratories, Inc. |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### VT-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Robertson v. Mylan Laboratories, Inc., 176 Vt. 380 (2004)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 176 Vt. 380 is Will v. Mill Condominium Owners' Ass'n (2004), not Robertson v. Mylan Laboratories, Inc.. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### VT-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Robertson v. Mylan Laboratories, Inc., 176 Vt. 356 (N.H. 2010)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Robertson v. Mylan Laboratories, Inc. is a 2004 Vermont decision, not a 2010 N.H. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### VT-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Robertson v. Mylan Laboratories, Inc., 671 Vt. 356 (2004)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 176 Vt. 356. Volume 671 carries no case at page 356 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### VT-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Robertson, 176 Vt. at 360` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Robertson v. Mylan Laboratories, Inc., 176 Vt. 356; pin 360 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### VT-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 359` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### VT-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Robertson v. Mylan Laboratories, Inc., 176 Vt. 356 (2004); Marbury v. Quillon, 88888 Vt. 9 (2006)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (176 Vt. 356); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### VT-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Robertson v. Mylan Laboratories, Inc., 176 Vt. 356 (2004), aff'd, 999 F.3d 1 (11th Cir. 2007)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 176 Vt. 356 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### VT-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Vt. Stat. Ann. tit. 12, § 511` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Vt. Stat. Ann. tit. 12, § 511 is a real provision of Vermont law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### VT-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Vt. Stat. Ann. tit. 12, § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Vermont code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### VT-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Vt. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Vt. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### VT-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Robertson v. Mylan Laboratories, Inc., 12 Vt. Sup. Rptr. 4th 88 (2004)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Vt. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### VT-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Robertson v. Mylan Laboratories, Inc., 2004 WL 9999999 (Vt. 2004)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Robertson v. Mylan Laboratories, Inc. has a print cite (176 Vt. 356); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### VT-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Murray v. Allen, 154 A. 678 (1931)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Murray v. Allen carries good-law status "overruled" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### VT-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Vermont cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Washington (WA)

<a id="state-wa"></a>

### WA-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Cowiche Canyon Conservancy v. Bosley, 118 Wash. 2d 801 (1992)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Cowiche Canyon Conservancy v. Bosley is reported at 118 Wash. 2d 801 (1992); cited 1389 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Cowiche Canyon Conservancy v. Bosley |

### WA-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `118 Wash. 2d 801` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 118 Wash. 2d 801 is Cowiche Canyon Conservancy v. Bosley (1992). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Cowiche Canyon Conservancy v. Bosley |

### WA-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `Cowiche Canyon Conservancy v. Bosley, 828 P.2d 549 (1992)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | Cowiche Canyon Conservancy v. Bosley carries parallel cites 118 Wash. 2d 801 / 828 P.2d 549. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | Cowiche Canyon Conservancy v. Bosley |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### WA-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Cowiche Canyon Conservancy v. Bosley, 1992 Wash. LEXIS 97` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1992 Wash. LEXIS 97 is a secondary locator for Cowiche Canyon Conservancy v. Bosley; Bluebook form is 118 Wash. 2d 801. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Wash. 2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### WA-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 118 Wash. 2d 801 (1992)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 118 Wash. 2d 801 is Cowiche Canyon Conservancy v. Bosley, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Cowiche Canyon Conservancy v. Bosley |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### WA-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Cowiche Canyon Conservancy v. Bosley, 118 Wash. 2d 804 (1992)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Cowiche Canyon Conservancy v. Bosley begins at page 801, not 804. Page 804 is verified not to be any other case's first page in 118 Wash. 2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Cowiche Canyon Conservancy v. Bosley |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### WA-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Cowiche Canyon Conservancy v. Bosley, 118 Wash. 2d 782 (1992)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 118 Wash. 2d 782 is In Re the Disciplinary Proceeding Against Stoker (1992), not Cowiche Canyon Conservancy v. Bosley. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### WA-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Cowiche Canyon Conservancy v. Bosley, 118 Wash. 2d 801 (Or. 1998)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Cowiche Canyon Conservancy v. Bosley is a 1992 Washington decision, not a 1998 Or. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### WA-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Cowiche Canyon Conservancy v. Bosley, 811 Wash. 2d 801 (1992)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 118 Wash. 2d 801. Volume 811 carries no case at page 801 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### WA-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Cowiche Canyon, 118 Wash. 2d at 805` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Cowiche Canyon Conservancy v. Bosley, 118 Wash. 2d 801; pin 805 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### WA-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 804` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### WA-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Cowiche Canyon Conservancy v. Bosley, 118 Wash. 2d 801 (1992); Marbury v. Quillon, 88888 Wash. 2d 9 (1994)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (118 Wash. 2d 801); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### WA-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Cowiche Canyon Conservancy v. Bosley, 118 Wash. 2d 801 (1992), aff'd, 999 F.3d 1 (11th Cir. 1995)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 118 Wash. 2d 801 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### WA-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Wash. Rev. Code § 4.16.080` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Wash. Rev. Code § 4.16.080 is a real provision of Washington law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### WA-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Wash. Rev. Code § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Washington code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### WA-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Wash. 2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Wash. 2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### WA-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Cowiche Canyon Conservancy v. Bosley, 12 Wash. Sup. Rptr. 4th 88 (1992)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Wash. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### WA-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Cowiche Canyon Conservancy v. Bosley, 1992 WL 9999999 (Wash. 1992)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Cowiche Canyon Conservancy v. Bosley has a print cite (118 Wash. 2d 801); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### WA-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `In Re Marriage of Littlefield, 940 P.2d 1362 (1997)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. In Re Marriage of Littlefield carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### WA-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Washington cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Wisconsin (WI)

<a id="state-wi"></a>

### WI-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `State Ex Rel. Kalal v. Circuit Court for Dane County, 271 Wis. 2d 633 (2004)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | State Ex Rel. Kalal v. Circuit Court for Dane County is reported at 271 Wis. 2d 633 (2004); cited 1171 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State Ex Rel. Kalal v. Circuit Court for Dane County |

### WI-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `271 Wis. 2d 633` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 271 Wis. 2d 633 is State Ex Rel. Kalal v. Circuit Court for Dane County (2004). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | State Ex Rel. Kalal v. Circuit Court for Dane County |

### WI-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `State Ex Rel. Kalal v. Circuit Court for Dane County, 681 N.W.2d 110 (2004)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | State Ex Rel. Kalal v. Circuit Court for Dane County carries parallel cites 271 Wis. 2d 633 / 681 N.W.2d 110 / 2004 WI 58. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | State Ex Rel. Kalal v. Circuit Court for Dane County |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### WI-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `State Ex Rel. Kalal v. Circuit Court for Dane County, 2004 Wisc. LEXIS 421` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2004 Wisc. LEXIS 421 is a secondary locator for State Ex Rel. Kalal v. Circuit Court for Dane County; Bluebook form is 271 Wis. 2d 633. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `Wis. 2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### WI-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 271 Wis. 2d 633 (2004)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 271 Wis. 2d 633 is State Ex Rel. Kalal v. Circuit Court for Dane County, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | State Ex Rel. Kalal v. Circuit Court for Dane County |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### WI-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `State Ex Rel. Kalal v. Circuit Court for Dane County, 271 Wis. 2d 636 (2004)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | State Ex Rel. Kalal v. Circuit Court for Dane County begins at page 633, not 636. Page 636 is verified not to be any other case's first page in 271 Wis. 2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | State Ex Rel. Kalal v. Circuit Court for Dane County |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### WI-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `State Ex Rel. Kalal v. Circuit Court for Dane County, 271 Wis. 2d 610 (2004)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 271 Wis. 2d 610 is Harold Sampson Children's Trust v. Linda Gale Sampson 1979 Trust (2004), not State Ex Rel. Kalal v. Circuit Court for Dane County. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### WI-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `State Ex Rel. Kalal v. Circuit Court for Dane County, 271 Wis. 2d 633 (Mich. 2010)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | State Ex Rel. Kalal v. Circuit Court for Dane County is a 2004 Wisconsin decision, not a 2010 Mich. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### WI-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `State Ex Rel. Kalal v. Circuit Court for Dane County, 172 Wis. 2d 633 (2004)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 271 Wis. 2d 633. Volume 172 carries no case at page 633 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### WI-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Circuit Court, 271 Wis. 2d at 637` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for State Ex Rel. Kalal v. Circuit Court for Dane County, 271 Wis. 2d 633; pin 637 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### WI-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 636` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### WI-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `State Ex Rel. Kalal v. Circuit Court for Dane County, 271 Wis. 2d 633 (2004); Marbury v. Quillon, 88888 Wis. 2d 9 (2006)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (271 Wis. 2d 633); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### WI-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `State Ex Rel. Kalal v. Circuit Court for Dane County, 271 Wis. 2d 633 (2004), aff'd, 999 F.3d 1 (11th Cir. 2007)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 271 Wis. 2d 633 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### WI-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Wis. Stat. § 893.53` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Wis. Stat. § 893.53 is a real provision of Wisconsin law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### WI-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Wis. Stat. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Wisconsin code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### WI-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 Wis. 2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | Wis. 2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### WI-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `State Ex Rel. Kalal v. Circuit Court for Dane County, 12 Wis. Sup. Rptr. 4th 88 (2004)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Wis. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### WI-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `State Ex Rel. Kalal v. Circuit Court for Dane County, 2004 WL 9999999 (Wis. 2004)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | State Ex Rel. Kalal v. Circuit Court for Dane County has a print cite (271 Wis. 2d 633); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### WI-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Ernst v. State, 170 N.W.2d 713 (1969)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Ernst v. State carries good-law status "negative" with 2 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### WI-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Wisconsin cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## West Virginia (WV)

<a id="state-wv"></a>

### WV-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `In Re Cecil T., 228 W. Va. 89 (2011)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | In Re Cecil T. is reported at 228 W. Va. 89 (2011); cited 2228 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | In Re Cecil T. |

### WV-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `228 W. Va. 89` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 228 W. Va. 89 is In Re Cecil T. (2011). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | In Re Cecil T. |

### WV-03 — `parallel_cite` (hard)

| | |
|---|---|
| **Input** | `In Re Cecil T., 717 S.E.2d 873 (2011)` |
| **Probe** | Same decision cited to its parallel print reporter instead of the primary. |
| **Ground truth** | In Re Cecil T. carries parallel cites 228 W. Va. 89 / 717 S.E.2d 873. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered`, `error` |
| **Expected candidate** | In Re Cecil T. |
| **Reviewer note** | Parallel-reporter equivalence. A name_mismatch here means the parallel is not linked to the same cluster. |

### WV-04 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `In Re Cecil T., 2011 W. Va. LEXIS 15` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 2011 W. Va. LEXIS 15 is a secondary locator for In Re Cecil T.; Bluebook form is 228 W. Va. 89. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `W. Va.` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### WV-05 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 228 W. Va. 89 (2011)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 228 W. Va. 89 is In Re Cecil T., not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | In Re Cecil T. |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### WV-06 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `In Re Cecil T., 228 W. Va. 92 (2011)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | In Re Cecil T. begins at page 89, not 92. Page 92 is verified not to be any other case's first page in 228 W. Va.. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | In Re Cecil T. |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### WV-07 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `In Re Cecil T., 228 W. Va. 84 (2011)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 228 W. Va. 84 is Whittaker v. Whittaker (2011), not In Re Cecil T.. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### WV-08 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `In Re Cecil T., 228 W. Va. 89 (Va. 2017)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | In Re Cecil T. is a 2011 West Virginia decision, not a 2017 Va. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### WV-09 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `In Re Cecil T., 822 W. Va. 89 (2011)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 228 W. Va. 89. Volume 822 carries no case at page 89 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### WV-10 — `short_form` (hard)

| | |
|---|---|
| **Input** | `In Re, 228 W. Va. at 93` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for In Re Cecil T., 228 W. Va. 89; pin 93 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### WV-11 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 92` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### WV-12 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `In Re Cecil T., 228 W. Va. 89 (2011); Marbury v. Quillon, 88888 W. Va. 9 (2013)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (228 W. Va. 89); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### WV-13 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `In Re Cecil T., 228 W. Va. 89 (2011), aff'd, 999 F.3d 1 (11th Cir. 2014)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 228 W. Va. 89 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### WV-14 — `statute` (moderate)

| | |
|---|---|
| **Input** | `W. Va. Code § 55-2-12` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | W. Va. Code § 55-2-12 is a real provision of West Virginia law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### WV-15 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `W. Va. Code § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the West Virginia code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### WV-16 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 W. Va. 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | W. Va. has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### WV-17 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `In Re Cecil T., 12 W. Va. Sup. Rptr. 4th 88 (2011)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "W. Va. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### WV-18 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `In Re Cecil T., 2011 WL 9999999 (W. Va. 2011)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | In Re Cecil T. has a print cite (228 W. Va. 89); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### WV-19 — `good_law` (expert)

| | |
|---|---|
| **Input** | `Miners in General Group v. Hix, 17 S.E.2d 810 (1941)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. Miners in General Group v. Hix carries good-law status "negative" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### WV-20 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the West Virginia cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Wyoming (WY)

<a id="state-wy"></a>

### WY-01 — `valid_exact` (moderate)

| | |
|---|---|
| **Input** | `Vaughn v. State, 962 P.2d 149 (1998)` |
| **Probe** | Correct party names + locator + year for a heavily-cited high-court decision. |
| **Ground truth** | Vaughn v. State is reported at 962 P.2d 149 (1998); cited 232 times in corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Vaughn v. State |

### WY-02 — `bare_reporter` (moderate)

| | |
|---|---|
| **Input** | `962 P.2d 149` |
| **Probe** | Bare reporter locator with no caption — exact-key path only. |
| **Ground truth** | 962 P.2d 149 is Vaughn v. State (1998). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `not_in_corpus`, `implausible`, `not_covered`, `error` |
| **Expected candidate** | Vaughn v. State |

### WY-03 — `secondary_form` (expert)

| | |
|---|---|
| **Input** | `Vaughn v. State, 1998 Wyo. LEXIS 97` |
| **Probe** | Vendor/advance-sheet locator for a case that has an official print cite. |
| **Ground truth** | 1998 Wyo. LEXIS 97 is a secondary locator for Vaughn v. State; Bluebook form is 962 P.2d 149. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **correctedCitation contains** | `P.2d` |
| **Reviewer note** | Key check: if it resolves, correctedCitation must prefer the official reporter, not the vendor form. |

### WY-04 — `name_mismatch` (moderate)

| | |
|---|---|
| **Input** | `Thornbury v. Aldenmoor Holdings, LLC, 962 P.2d 149 (1998)` |
| **Probe** | Real locator, fabricated caption — the classic hallucinated-case shape. |
| **Ground truth** | 962 P.2d 149 is Vaughn v. State, not Thornbury v. Aldenmoor Holdings. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid` |
| **Reject (0/10)** | `valid` |
| **Expected candidate** | Vaughn v. State |
| **Reviewer note** | A `valid` verdict here is a silent-accept failure — the worst class of error. |

### WY-05 — `page_mismatch` (hard)

| | |
|---|---|
| **Input** | `Vaughn v. State, 962 P.2d 152 (1998)` |
| **Probe** | Correct case and volume, but an internal pin page given as the first page. |
| **Ground truth** | Vaughn v. State begins at page 149, not 152. Page 152 is verified not to be any other case's first page in 962 P.2d. |
| **Accept (10/10)** | `page_mismatch` |
| **Partial (6/10)** | `likely_valid`, `valid` |
| **Reject (0/10)** | `implausible` |
| **Expected candidate** | Vaughn v. State |
| **Reviewer note** | If `valid`, correctedCitation must carry the true first page. |

### WY-06 — `real_neighbor_page` (expert)

| | |
|---|---|
| **Input** | `Vaughn v. State, 962 P.2d 153 (1998)` |
| **Probe** | Caption of one case pasted onto a real, different case in the same volume. |
| **Ground truth** | 962 P.2d 153 is Hodgins v. State (1998), not Vaughn v. State. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Hardest mismatch shape: both halves exist, only the pairing is wrong. `valid` is a correctness bug. |

### WY-07 — `year_court_mismatch` (hard)

| | |
|---|---|
| **Input** | `Vaughn v. State, 962 P.2d 149 (Mont. 2004)` |
| **Probe** | Correct locator with a wrong year and a foreign-court parenthetical. |
| **Ground truth** | Vaughn v. State is a 1998 Wyoming decision, not a 2004 Mont. decision. |
| **Accept (10/10)** | `name_mismatch` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Year/court are part of the citation; endorsing them as `valid` is wrong. |

### WY-08 — `transposed_volume` (expert)

| | |
|---|---|
| **Input** | `Vaughn v. State, 269 P.2d 149 (1998)` |
| **Probe** | Typo-shaped error: volume digits transposed, caption correct. |
| **Ground truth** | Correct locator is 962 P.2d 149. Volume 269 carries no case at page 149 in the corpus. |
| **Accept (10/10)** | `likely_valid`, `not_in_corpus`, `not_covered` |
| **Partial (6/10)** | `name_mismatch`, `page_mismatch`, `implausible`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Verified: the transposed volume is empty at this page. A name-lookup hedge surfacing the real case is the best answer. |

### WY-09 — `short_form` (hard)

| | |
|---|---|
| **Input** | `Vaughn, 962 P.2d at 153` |
| **Probe** | Bluebook R10.9 short form with an internal pin page. |
| **Ground truth** | Short form for Vaughn v. State, 962 P.2d 149; pin 153 is inside the opinion. |
| **Accept (10/10)** | `valid`, `likely_valid`, `page_mismatch` |
| **Partial (6/10)** | `name_mismatch`, `not_covered` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | A pin in a short form is not an error. `implausible` would be wrong. |

### WY-10 — `id_supra` (expert)

| | |
|---|---|
| **Input** | `Id. at 152` |
| **Probe** | Bare `Id.` sent with no antecedent citation in the batch. |
| **Ground truth** | Unresolvable in isolation — there is no prior authority to attach it to. |
| **Accept (10/10)** | `not_covered`, `unverified`, `error` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must not invent an antecedent. Any affirmative verdict is a hallucination. |

### WY-11 — `string_cite` (expert)

| | |
|---|---|
| **Input** | `Vaughn v. State, 962 P.2d 149 (1998); Marbury v. Quillon, 88888 P.2d 9 (2000)` |
| **Probe** | String cite mixing a real authority with a fabricated one. |
| **Ground truth** | First unit is real (962 P.2d 149); second is fabricated (volume 88888 does not exist). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch` |
| **Reject (0/10)** | `not_in_corpus`, `implausible` |
| **Min units** | 2 |
| **Reviewer note** | Scored on the primary unit; expansion into >=2 units is asserted separately. The fabricated unit must NOT come back valid. |

### WY-12 — `compound_history` (expert)

| | |
|---|---|
| **Input** | `Vaughn v. State, 962 P.2d 149 (1998), aff'd, 999 F.3d 1 (11th Cir. 2001)` |
| **Probe** | Real primary with a fabricated subsequent-history tail. |
| **Ground truth** | Primary 962 P.2d 149 is real; 999 F.3d 1 does not exist (F.3d ended at vol. 1000 in 2021, and no such case). |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `name_mismatch` |
| **Reject (0/10)** | `implausible`, `not_covered` |
| **Min units** | 2 |
| **Reviewer note** | The history unit should be rejected (not_in_corpus / implausible / not_covered), never valid. |

### WY-13 — `statute` (moderate)

| | |
|---|---|
| **Input** | `Wyo. Stat. Ann. § 1-3-105` |
| **Probe** | Real, in-force state statute in Bluebook T1.3 form. |
| **Ground truth** | Wyo. Stat. Ann. § 1-3-105 is a real provision of Wyoming law. |
| **Accept (10/10)** | `valid`, `likely_valid` |
| **Partial (6/10)** | `unverified`, `not_covered`, `not_in_corpus` |
| **Reject (0/10)** | `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Statutes ride the statute ladder, not the reporter corpus. An honest coverage miss is acceptable; invention is not. |

### WY-14 — `statute_fabricated` (expert)

| | |
|---|---|
| **Input** | `Wyo. Stat. Ann. § 999999.99` |
| **Probe** | Real code name, impossible section number. |
| **Ground truth** | No such section exists in the Wyoming code. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `implausible`, `unverified` |
| **Partial (6/10)** | `likely_valid`, `error` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Confirming a nonexistent section as `valid` is a hallucination. |

### WY-15 — `implausible` (hard)

| | |
|---|---|
| **Input** | `99999 P.2d 1` |
| **Probe** | Volume far above the published ceiling for a real reporter series. |
| **Ground truth** | P.2d has never reached volume 99999. |
| **Accept (10/10)** | `implausible` |
| **Partial (6/10)** | `not_in_corpus`, `not_covered` |
| **Reject (0/10)** | `valid`, `likely_valid`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Strong fabrication signal; the ideal answer names it as implausible. |

### WY-16 — `fabricated_series` (expert)

| | |
|---|---|
| **Input** | `Vaughn v. State, 12 Wyo. Sup. Rptr. 4th 88 (1998)` |
| **Probe** | Invented reporter series attached to a real caption. |
| **Ground truth** | No reporter named "Wyo. Sup. Rptr. 4th" exists. |
| **Accept (10/10)** | `not_covered`, `implausible`, `likely_valid`, `not_in_corpus` |
| **Partial (6/10)** | `name_mismatch`, `unverified` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | `likely_valid` is acceptable only if candidates are offered without endorsing the fake series. |

### WY-17 — `vendor_cite` (hard)

| | |
|---|---|
| **Input** | `Vaughn v. State, 1998 WL 9999999 (Wyo. 1998)` |
| **Probe** | Westlaw locator with a fabricated WL number. |
| **Ground truth** | Vaughn v. State has a print cite (962 P.2d 149); this WL number is invented. |
| **Accept (10/10)** | `not_in_corpus`, `not_covered`, `likely_valid`, `unverified` |
| **Partial (6/10)** | `name_mismatch`, `implausible` |
| **Reject (0/10)** | `valid` |
| **Reviewer note** | Vendor IDs are not verifiable from the corpus; do not confirm them. |

### WY-18 — `good_law` (expert)

| | |
|---|---|
| **Input** | `McClellan v. Tottenhoff, 666 P.2d 408 (1983)` |
| **Probe** | Authority the corpus flags as no longer good law. |
| **Ground truth** | The citation is accurate. McClellan v. Tottenhoff carries good-law status "overruled" with 1 negative treatment(s) in the corpus. |
| **Accept (10/10)** | `valid` |
| **Partial (6/10)** | `likely_valid`, `page_mismatch`, `not_covered`, `unverified`, `not_in_corpus` |
| **Reject (0/10)** | `implausible` |
| **Reviewer note** | Citation accuracy and good-law status are separate questions: the cite is correct, so `valid` is the right verdict. The candidate payload must expose goodLaw so the caller sees the negative treatment — that is asserted separately, not via the verdict. |

### WY-19 — `garbage_input` (moderate)

| | |
|---|---|
| **Input** | `see generally the Wyoming cases on this point, passim` |
| **Probe** | Prose with no citation in it. |
| **Ground truth** | Contains no citation; nothing to verify. |
| **Accept (10/10)** | `not_covered`, `error`, `unverified` |
| **Partial (6/10)** | `not_in_corpus`, `likely_valid` |
| **Reject (0/10)** | `valid`, `implausible`, `name_mismatch`, `page_mismatch` |
| **Reviewer note** | Must degrade honestly rather than resolve prose to a case. |

## Machine-readable copy

The same bank is emitted as JSON for harness use: `bank.json`.
