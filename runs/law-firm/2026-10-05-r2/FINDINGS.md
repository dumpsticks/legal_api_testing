# LawDiver API — law-firm test series, run 2 (2026-10-05/06)

Full re-run of every suite against production after LawDiver shipped commits `38cde20` (boolean alias) and `d505804` (citation, search and API text fixes). Same datasets and grader as run 1 ([`../2026-10-05/FINDINGS.md`](../2026-10-05/FINDINGS.md)), so every number compares directly. About 10,900 API calls, 0 HTTP errors, 0 rate-limit rejections.

Per-case lists: `problems-*.md` in this folder. Generated tables: [`REPORT.md`](REPORT.md).

## Scorecard, run 1 → run 2

| Suite | Rows | Run 1 perfect | Run 2 perfect | Change |
|---|---:|---:|---:|---|
| Boolean search, 5,000 scoped | 5,000 | 71.7% | 72.7% | Scope fixed; precision in auto improved; keyword landmark recall fell |
| Boolean search, realworld carried | 286 | 51.0% | 49.7% | flat |
| Good law, state + federal | 853–855 | 69.4% | 69.3% | **no change — nothing in good law shipped** |
| Bluebook from slightly-off cites | 1,000 | 49.6% | **78.1%** | large gain |
| Cite check, carried forward | 657 | 97.1% | 97.1% | holding |
| Opinion output (text + PDF) | 200 | 0% | **72.0%** | large gain |

(Run-1 Bluebook was re-scored at 49.6% after a grader fix to the given-name check; both runs use the same grader.)

## What the fixes fixed (confirmed)

| Problem in run 1 | Run 1 | Run 2 |
|---|---:|---:|
| `all_states` scope returning federal courts (queries) | 107 | **0** (1 hit anywhere, a `one_state` row) |
| `F.3rd` / `So. 2nd` ordinal cites — correct | 0 / 50 | **40 / 50** |
| T6 words unabbreviated in corrected cites | 272 | 34 |
| T10 place names unabbreviated | 51 | 0 |
| "and" for "&" | 28 | 0 |
| Parallel reporters strung together | 73 | **0** (`parallel_only` now 50/50) |
| `full_caption` off-cites perfect | 0 / 50 | 39 / 50 |
| PDF branded LawTools | 200 | **0** |
| `clusterId` differs between `/cases/:id` and `/good-law` | 200 | **0** |
| Opinion text with page numbers / running headers | 85 | 17 |
| Opinion text with mid-sentence hard wraps | 73 | 10 |
| Opinion header citation failing T6 | 61 | 7 |
| Duplicate opinion on one results page (queries) | 115 | 74 |
| Search hits with no court | 69 | 36 |
| Auto-mode top-3 opinions failing the connectors | 363 / 1,182 (31%) | 313 / 1,147 (27%) |

## What is still wrong, ranked

### 1. Good law — untouched, every run-1 defect still present
- Reversals on appeal not recorded: **9 of 38** caught. *Twombly v. Bell Atl.*, 425 F.3d 99 and *Iqbal v. Hasty*, 490 F.3d 143 are still `unknown`.
- Treatment attached to the wrong case: *Crawford v. Washington* is still `overruled` (from *Michigan v. Bryant* overruling *Ohio v. Roberts*).
- Concurrences, dissents and other states' constitutions still count: *Apprendi* and *Kelo* are still `questioned`. 20 landmarks are falsely flagged.
- Overrulings recorded as "limited": *Goldman v. United States* is still `good`.
- `unknown`: 174 checks.
- Internal "API audit F-02" rationale still exposed on *Roe* and *Plessy*.

**Fix:** the good-law items 16–21 in the run-1 brief (reversal linkage; majority-opinion-only treatment; binding-court rule; attach treatment to the named target; Supreme Court overruling table; drop internal notes).

### 2. Boolean operators `%`, `!` and `*` still not implemented
`searchType: "boolean"` is now accepted and maps to the keyword engine, but the parser gaps remain:

| Query (boolean / keyword) | Run 2 result |
|---|---|
| `"summary judgment" & "material fact" % patent` (all federal) | 0. `%` rows: 47.7% empty overall, 120 of 133 keyword rows empty |
| `relocat! /25 "best interests of the child"` (WA) | **0** (`relocation …` returns 24) |
| `negligen* /p invitee` (FL) | **0** (`negligence …` returns 194) |

**Fix:** lex `%` and `BUT NOT` as `AND NOT`; expand `!` as a prefix and `*` as a wildcard on the unstemmed field.

### 3. Keyword (boolean) mode is not strict, and now finds landmarks less often
- **Precision:** 120 of 935 top-3 opinions (12.8%) fail the full-text check in keyword mode. All 433 failing opinions across both modes were re-fetched and re-checked with star-page markers stripped; every one still fails.
  - Example: `LF-BS-0073 "personal jurisdiction" AND "minimum contacts" AND NOT divorce` returned *International Shoe*, whose text never says "personal jurisdiction" (it says "in personam").
  - **Causes in code** (`services/caselawSearch/keywordOpenSearch.ts`, `engineKeyword.ts`):
    - `fuzziness: 'AUTO'` on short queries.
    - A silent relaxed-threshold retry when a strict AND of 3+ terms returns nothing (AL-4).
    - `/s` and `/p` implemented as `span_near` with slop 15 and 60.
- **Recall:**
  - 21.3% of keyword queries return an empty page (auto: 2.7%).
  - Landmark in the top 10 fell from **411 / 683 to 308 / 683** after "no landmark injection" in keyword mode. Ordering is BM25 relevance re-scored by citations weighted toward recent citing years, plus a recency curve centred on 2026, so old controlling cases sink.
- **Fixes:**
  - No fuzziness and no silent relaxation in boolean mode. If a relaxed retry ever runs, set a response flag.
  - Index sentence and paragraph ids so `/s` and `/p` are exact.
  - Rebuild the search index from the new typeset text (hard wraps and headers are gone from `/text`; the false-empty pattern is unchanged, so the index likely still holds the old text).
  - Add `sort` (`relevance`, `date_desc`, `date_asc`, `cited_by`) and weight lifetime citations and court level in relevance order.

### 4. Auto mode still returns opinions that break the connectors
- 313 of 1,147 top-3 opinions (27%) fail, including excluded terms (e.g. `…AND suppress! NOT civil` → *Strickler v. Greene*, which contains "civil").
- The run-2 change drops rows marked `connectorMatch=false` (and keeps them when the keyword page is empty), but rows that break the expression still come through, so the connector check is not catching them.
- **Fix:** filter auto results against the parsed boolean expression with the same evaluator the keyword engine uses.

### 5. Bluebook — what remains (781 / 1,000 perfect)

| Defect | Run 1 | Run 2 | Note |
|---|---:|---:|---|
| `redundant_court` | 27 | **15** | **Regression:** `461 U.S. 424 (U.S. 1983)` now gets verdict `name_mismatch` (29 rows), though the correction is right |
| `vendor_cite` (WL number for a reported case) | 14 | 19 | 13 still get no correction; 28 wrong verdict |
| `pin_as_first_page` | 22 | 30 | 12 still get no correction |
| given names / "In re:" | — | 41 | `In re: Marvin Griffin` (should be `In re Griffin`), `Frederick v. Deborah Morse Juneau Sch. Bd.`, `Az v. Christopher George Theodore Lamar` |
| new casing bug | — | — | `Bauman v. Daimlerchrysler Corp.`: the T6 pass lower-cases inner capitals |
| `Inc.` kept after `Co.` / `Corp.` | 11 | 17 | Rule 10.2.1(h) |

**Fix:**
- Treat a redundant court that matches the reporter as a form issue (`valid` with correction), not a caption mismatch.
- Strip `In re:` colons and given names.
- Preserve inner capitals when abbreviating.
- Finish vendor-cite and pin-page correction (run-1 brief item 13).

### 6. Smaller items still open
- Duplicate opinions on a page: 74 queries. Null court: 36 hits. Date filter leaks: 10 queries.
- Opinions: no star paging on 22; page furniture on 17; hard wraps on 10; duplicated text on 4.
- Carried cite check: `page_mismatch` 42 / 50 and `statute` 45 / 50 (partials), unchanged.

## Bottom line

The citation-form and opinion-output work landed: Bluebook went from half right to nearly four in five, PDFs and text are clean on almost three of four opinions, and jurisdiction scoping is now essentially perfect.

The two areas a firm leans on hardest did not move:
- **Good law:** nothing shipped, so reversals, misattributed treatment and false "questioned" flags remain.
- **Strict boolean search:** `%`, `!` and `*` are still missing, keyword mode still relaxes or fuzzes, and keyword-mode landmark recall dropped.
