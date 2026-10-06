# Cite check — all banks, run 2026-10-06-cites

Every cite-check bank sent to `POST /api/v1/citecheck/cite` (batches of 10) and scored against its own answer key. **Pass** = verdict in the key's accept list (and, where the key demands it, the right case and a negative good-law flag). **Partial** = verdict in the key's partial list. The law-firm Bluebook off-cite and carried-forward suites are scored in `REPORT.md`.

## Headline

Timeouts (LawDiver returned `error` / `deadline_exceeded` even when the cite was re-sent alone) are counted separately and left out of Scored.

| Bank | Scored | Pass | Partial | Fail | Timeout |
|---|---:|---:|---:|---:|---:|
| Cite-check bank (5,300) | 5254 | 5020 (95.5%) | 70 | 164 | 46 |
| Overruled authorities (100) | 100 | 76 (76.0%) | 0 | 24 | 0 |
| State bank (1,006) | 1006 | 948 (94.2%) | 21 | 37 | 0 |
| Anatomy of a Caselaw API (473 scored) | 465 | 450 (96.8%) | 0 | 15 | 8 |

Bluebook form of confirmed corrected citations (2979 checked): redundant_business_designation 61, t6_unabbreviated 60, leading_the 20, all_caps_name 12, state_long_form 6, t10_unabbreviated 4, et_al 3, v_form 2, descriptive_phrase_in_name 1, reporter_spacing 1, multiple_parties 1, party_role_in_name 1.

## Cite-check bank (5,300) — by family

| family | Rows | Pass | Partial | Fail |
|---|---:|---:|---:|---:|
| perfect | 1759 | 1621 | 39 | 99 |
| short_form | 51 | 20 | 3 | 28 |
| overruled | 100 | 76 | 0 | 24 |
| severe_mangle | 56 | 46 | 10 | 0 |
| page_mismatch | 50 | 42 | 7 | 1 |
| outright_hallucination | 1386 | 1381 | 0 | 5 |
| statute | 50 | 45 | 5 | 0 |
| mild_mangle | 153 | 149 | 4 | 0 |
| bad_law | 37 | 35 | 1 | 1 |
| secondary_form | 46 | 45 | 0 | 1 |
| bluebook_variant | 70 | 69 | 1 | 0 |
| immigration_authority | 4 | 3 | 0 | 1 |
| tax_authority | 5 | 4 | 0 | 1 |
| constitution_rule | 4 | 3 | 0 | 1 |
| caption_trap | 7 | 6 | 0 | 1 |
| ip_authority | 5 | 4 | 0 | 1 |
| vendor_cite | 50 | 50 | 0 | 0 |
| year_court_mismatch | 50 | 50 | 0 | 0 |
| close_hallucination | 660 | 660 | 0 | 0 |
| compound_history | 51 | 51 | 0 | 0 |
| statute_fabricated | 50 | 50 | 0 | 0 |
| string_cite | 51 | 51 | 0 | 0 |
| parallel_cite | 34 | 34 | 0 | 0 |
| garbage_input | 50 | 50 | 0 | 0 |
| structural | 40 | 40 | 0 | 0 |
| good_law | 50 | 50 | 0 | 0 |
| fabricated_series | 50 | 50 | 0 | 0 |
| valid_exact | 50 | 50 | 0 | 0 |
| bare_reporter | 50 | 50 | 0 | 0 |
| id_supra | 47 | 47 | 0 | 0 |
| real_neighbor_page | 50 | 50 | 0 | 0 |
| name_mismatch | 51 | 51 | 0 | 0 |
| transposed_volume | 45 | 45 | 0 | 0 |
| implausible | 38 | 38 | 0 | 0 |
| parallel_trap | 1 | 1 | 0 | 0 |
| wrong_state_regional | 1 | 1 | 0 | 0 |
| federal_fabrication | 2 | 2 | 0 | 0 |

## Overruled authorities (100) — by family

| family | Rows | Pass | Partial | Fail |
|---|---:|---:|---:|---:|
| federal | 30 | 6 | 0 | 24 |
| state | 30 | 30 | 0 | 0 |
| large | 40 | 40 | 0 | 0 |

## State bank (1,006) — by family

| family | Rows | Pass | Partial | Fail |
|---|---:|---:|---:|---:|
| short_form | 51 | 20 | 3 | 28 |
| page_mismatch | 51 | 43 | 7 | 1 |
| secondary_form | 46 | 39 | 6 | 1 |
| statute | 50 | 45 | 5 | 0 |
| parallel_cite | 35 | 34 | 0 | 1 |
| tax_authority | 5 | 4 | 0 | 1 |
| immigration_authority | 4 | 3 | 0 | 1 |
| ip_authority | 5 | 4 | 0 | 1 |
| constitution_rule | 4 | 3 | 0 | 1 |
| valid_exact | 50 | 49 | 0 | 1 |
| bare_reporter | 50 | 49 | 0 | 1 |
| federal_landmark | 1 | 1 | 0 | 0 |
| real_neighbor_page | 51 | 51 | 0 | 0 |
| name_mismatch | 51 | 51 | 0 | 0 |
| implausible | 51 | 51 | 0 | 0 |
| federal_fabrication | 2 | 2 | 0 | 0 |
| compound_history | 51 | 51 | 0 | 0 |
| good_law | 51 | 51 | 0 | 0 |
| string_cite | 51 | 51 | 0 | 0 |
| wrong_state_regional | 1 | 1 | 0 | 0 |
| year_court_mismatch | 50 | 50 | 0 | 0 |
| transposed_volume | 45 | 45 | 0 | 0 |
| id_supra | 50 | 50 | 0 | 0 |
| statute_fabricated | 50 | 50 | 0 | 0 |
| fabricated_series | 50 | 50 | 0 | 0 |
| vendor_cite | 50 | 50 | 0 | 0 |
| garbage_input | 50 | 50 | 0 | 0 |

## Anatomy of a Caselaw API (473 scored) — by family

| family | Rows | Pass | Partial | Fail |
|---|---:|---:|---:|---:|
| jurisdictional_sweep | 188 | 178 | 0 | 10 |
| mangled_citations | 54 | 52 | 0 | 2 |
| overruled_and_questioned_law | 35 | 33 | 0 | 2 |
| correct_citation_forms | 55 | 54 | 0 | 1 |
| temporal_sweep | 29 | 29 | 0 | 0 |
| bluebook_form_errors | 17 | 17 | 0 | 0 |
| fabricated_citations | 45 | 45 | 0 | 0 |
| structural_traps | 42 | 42 | 0 | 0 |
