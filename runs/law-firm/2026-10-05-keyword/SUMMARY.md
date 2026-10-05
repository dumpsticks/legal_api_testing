# Boolean search, keyword engine forced — run 2026-10-05 (stopped early)

Every row of `boolean-search-5000` re-sent with `searchType: "keyword"` (the API has no separate "boolean" type; `keyword` pins the terms-and-connectors engine). Stopped on request at **4,164 of 5,000** new-bank rows; the 286 carried-forward rows were not reached. Graded by the same rules as the main run (`scripts/law-firm/grade.mjs`); per-query problems are in `problems-search.md`, generated tables in `REPORT.md`.

## Score

| Measure | Keyword (this run) |
|---|---:|
| Queries graded | 4,164 |
| Perfect (in scope, in dates, no dupes, landmark found when keyed, opinions satisfy query) | 2,665 (64.0%) |
| Empty result pages | 914 (22.0%) |
| Queries with an out-of-scope hit | 95 (all in `all_states`) |
| Landmark in top 10 / rank 1 / MRR | 719 of 1,149 (62.6%) / 524 / 0.520 |
| Top-3 opinions failing a full-text check of the connectors | 91 of 750 (12.1%) |
| Avg latency | 1.45 s |
| HTTP errors / degraded | 0 / 0 |

### Same 2,082 queries sent earlier as `auto`

| | auto | keyword |
|---|---:|---:|
| Perfect | 1,648 | 1,299 |
| Empty pages | 56 | 474 |
| Landmark in top 10 (577 keyed) | 449 | 374 |
| Opinions failing the full-text connector check | 137 / 788 (17%) | 91 / 750 (12%) |

Keyword mode is more precise (fewer returned opinions violate the query) but returns nothing far more often and finds the controlling case less often. It is deterministic: the 2,082 rows sent as keyword in both runs gave identical empty counts (440 / 440).

**False empties.** Of 69 keyword-empty queries where the earlier auto run returned opinions we could check, **26 had an opinion whose full text satisfies the exact query** — the boolean engine missed real matches.

### By operator (keyword)

| Query contains | Empty |
|---|---:|
| `%` (Westlaw BUT NOT) | **83.6%** of 281 |
| `!` root expander | **31.7%** of 1,260 |
| no `!` | 17.7% of 2,904 |
| `AND NOT` / `NOT` | 6.0% of 604 |
| nationwide scope, no `%`, no date window | 2.8% of 433 |

Live confirmation (all federal / one state, `keyword`):

| Query | Results |
|---|---:|
| `"summary judgment" & "material fact" % patent` | 1 |
| `"summary judgment" & "material fact" AND NOT patent` | 200 |
| `relocat! /25 "best interests of the child"` (WA) | **0** |
| `relocation /25 "best interests of the child"` (WA) | 24 |
| `negligen* /p invitee` (FL) | **0** |
| `negligence /p invitee` (FL) | 194 |

### By scope (keyword)

| Scope | Perfect | Out-of-scope | Empty |
|---|---:|---:|---:|
| one_state | 64.3% | 0% | 30.6% |
| one_state_plus_federal | 67.1% | 0% | 20.5% |
| federal_circuit | 67.5% | 0% | 15.6% |
| federal_district | 69.0% | 0% | 29.5% |
| all_federal | 63.1% | 0% | 6.7% |
| all_states | 40.8% | **44.6%** | 5.6% |
| us_supreme_court | 66.3% | 0% | 23.3% |
| all_states_and_federal | 50.6% | 0% | 10.1% |

## Improvements, in order of payoff

1. **Parse `%` and `BUT NOT`.** `%` is the Westlaw exclusion operator; today it collapses the query to ~nothing (83.6% empty). Lex it as `AND NOT`.
2. **Make `!` and `*` real expanders.** `relocat!` must match relocate/relocation/relocating; today it matches only the literal stem (or a stemmer coincidence), and `*` returns nothing. Expand against the index term dictionary (prefix query on the unstemmed field) rather than the stemmed field.
3. **Fix `all_states`.** 44.6% of `all_states` queries return federal district/bankruptcy courts: `api/v1/jurisdiction.ts:147` maps it to `multi_state` on `scope_state`, which federal trial courts also carry. Pin the state tier.
4. **Route connector queries in `auto` to the boolean engine and filter.** Auto finds more (2.8% empty, better landmark recall) but 17–31% of its top opinions violate the connectors, including excluded terms. When a query contains `/s /p /n w/n pre/n +s ! % AND NOT`, run the boolean engine for the result set and use semantic only to rank inside it — or post-filter semantic hits against the expression.
5. **Close the boolean engine's recall gap.** 26 verified false empties: check that `/p` uses real paragraph boundaries (opinion text keeps PDF line wraps as blank lines, which splits paragraphs mid-sentence and makes `/p` and `/s` fail) and that quoted phrases match across hard line breaks and hyphenation.
6. **Rank by authority inside keyword results.** Keyword found the controlling case 62.6% of the time vs 77.8% for auto on the same rows; ties on term score should break on citation count / court level so *Celotex*, *Strickland*, *McDonnell Douglas* surface first.
7. **Tell the user when the boolean parse failed.** The suggestion text says "No case matched this boolean search" even when the cause is an unparsed operator; echo the parsed expression (`searchInfo.parsedQuery`) so a firm can see `%` or `!` was dropped.
8. **De-duplicate records.** 88 queries show the same opinion twice on a page (two ids, one reporter cite) — same defect as the main run.
