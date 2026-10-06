# Cite check — every bank, run 2026-10-06

All cite-check test sets sent to production `POST /api/v1/citecheck/cite` on 2026-10-06 (after LawDiver commits through `1f6aa5d`): **8,543 citations**, 0 rate-limit rejections. Scored against each set's own answer key by `scripts/law-firm/grade-citecheck.mjs` (banks) and `grade.mjs` (law-firm suites). Generated tables: [`CITECHECK-REPORT.md`](CITECHECK-REPORT.md); every row that did not pass: `problems-citecheck-*.md`, `problems-bluebook.md`, `problems-carried-cites.md`.

## Scores

| Set | Scored | Pass | Partial | Fail | Timeout | Earlier |
|---|---:|---:|---:|---:|---:|---|
| Cite-check bank (5,300) | 5,254 | **95.5%** | 70 | 164 | 46 | 94.6% accept on 2026-09-19 (LawDiver's own run) |
| State bank (1,006) | 1,006 | **94.2%** | 21 | 37 | 0 | — |
| Overruled authorities (100) | 100 | **76.0%** | 0 | 24 | 0 | 100% on 2026-09-19 |
| Anatomy of a Caselaw API (473 scored) | 465 | **96.8%** | 0 | 15 | 8 | — |
| Law-firm Bluebook off-cites (1,000) | 1,000 | **78.2%** perfect form | — | — | 0 | 49.6% run 1, 78.1% run 2 |
| Law-firm carried-forward cites (657) | 657 | **97.0%** | 17 | 3 | 0 | 97.1% |

Gains since September (5,300 bank): `fabricated_series` 22→50/50, `statute` 19→45/50, `transposed_volume` 26→45/45, tax and constitution authorities up one each. Fabrication handling stays perfect: `outright_hallucination` 1,381/1,386 (5 timeouts are the rest), `close_hallucination` 660/660, `statute_fabricated` 50/50, `implausible` 38/38.

## Problems, ranked

### 1. Regression — Supreme Court cites with a court in the parenthetical are called `name_mismatch`
Every correct U.S. Supreme Court cite written `(SCOTUS 2004)` or `(U.S. 1983)` now returns `name_mismatch` — **33 distinct citations, 66 rows across the banks** because the banks share cites (all 33 such rows in the 5,300 bank, 24 of the 30 federal rows of overruled-100, 9 of the anatomy failures), plus **29 more** in the Bluebook off-cite set's `redundant_court` defect. The correction is right; the verdict is wrong, and the explanation contradicts itself:

> Roe v. Wade, 410 U.S. 113 (SCOTUS 1973) → "the court as written (U.S.) does not match the resolved court (U.S.)."

Overruled-100 fell from 100% to 76% on this alone. **Fix:** in the court-field comparison, normalise both sides before comparing (`SCOTUS`, `U.S.`, `U.S. Sup. Ct.`, empty all mean the Supreme Court), and treat a court the reporter already identifies as a form issue: `valid` with the corrected cite.

### 2. Regression — a pin page given as the first page now returns `not_in_corpus`
`severe_mangle` fell from 61/61 to 46/56 (+5 timeouts). Cites that point inside a real opinion — `Primate Constr., Inc. v. Silver, 884 S.W.2d 158`, `Decker Coal Co. v. Commw. Edison Co., 805 F.2d 438`, `New York Life Ins. Co. v. Brown, 84 F.3d 731` — now get `not_in_corpus` instead of `page_mismatch` with the first page. Likely from "definite miss after a settled near-page probe" (`a77a72d`). **Fix:** when the volume holds an opinion whose page span covers the cited page and the caption matches, return `page_mismatch` with the corrected first page before declaring a miss.

### 3. Timeouts that do not clear
54 cites time out even when re-sent one at a time (46 in the 5,300 bank, 8 in anatomy, 1 carried) — mostly malformed input such as `King v. Nationwide Insurance, 35 208 (Ohio 1988)` (no reporter), `6l A.D.3d 62` (letter l for 1), `6 Cal.4th 96S`, and long all-caps captions. **Fix:** short-circuit unparseable or OCR-damaged locators to `not_covered` / `implausible` before the soft lookup, and cap name-lookup fan-out on very long captions.

### 4. Short forms without an antecedent — unchanged
`Williams, 305 S.C. at 120` style cites: 20/51 pass, 27 `unverified` (same as September). The key wants a confirmation of the pinpointed case. **Fix:** resolve `Name, vol Rep. at page` by finding the opinion in that volume whose page span contains the pin and whose caption contains the name.

### 5. "Perfect" cites declined — mostly the test bank, partly LawDiver
99 of 1,759 `perfect` rows fail (75 `name_mismatch`, 21 `not_covered`). LawDiver's explanations show many are **answer-key errors**: the bank's court is wrong and LawDiver is right (`Loughran v. Superior Court of Maricopa, 699 P.2d 1287` is Arizona, not Alaska; `People of the State of Michigan v. Hackler` is `503 Mich. 1002`). Some look like LawDiver data errors (`In re Timbers, 674 A.2d 1221 (R.I. 1996)` resolves to a Pennsylvania judicial-discipline court). The full list is in `problems-citecheck-5300.md`; the bank's `perfect` family should be re-audited against these explanations.

### 6. Good-law flags on cite-check candidates
- `Bivens v. Six Unknown Named Agents` confirmed with good-law `good` (key expects negative treatment).
- `Williamson County RPC v. Hamilton Bank, 473 U.S. 175` — wrong first page, now `not_in_corpus` (was `page_mismatch`), so no treatment is shown.

### 7. Bluebook form of confirmed corrections (2,979 checked)
Remaining issues are small: `Inc.` kept after `Co.`/`Corp.` 61, T6 words 60, leading "The" 20, all caps 12. The law-firm off-cite set holds at 78.2% perfect; its open items (vendor WL cites, pin pages, given names, "In re:" colon, `Daimlerchrysler` casing) are unchanged from run 2.

## Bottom line

Cite check is strong where it matters most — fabrications, near-miss fakes, name traps and history are at or near 100% — and statutes, fabricated series and transposed volumes improved sharply since September. Two regressions from the latest deploys need fixing first: the self-contradicting `(SCOTUS …)` court comparison (62 correct cites declined, overruled-100 down to 76%) and pin-page cites now treated as misses.
