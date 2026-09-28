# Cite checker

Send a citation. The product should say whether it is a real authority, what is wrong if it is not, and (for overruled law) that the case is no longer good law.

Three banks. The 5,300-item set is the one to run. The other two are the earlier banks it was built from, kept so a harness can run a smaller or differently labeled slice.

| Bank | Inputs | Answer key | Rows |
|---|---|---|---:|
| Combined suite | [`5300/inputs.json`](5300/inputs.json) | [`5300/answer-key.json`](5300/answer-key.json) | 5,300 |
| Per-state bank | [`state-1006/inputs.json`](state-1006/inputs.json) | [`state-1006/bank.json`](state-1006/bank.json) | 1,006 |
| Overruled only | [`overruled-100/inputs.json`](overruled-100/inputs.json) | [`overruled-100/answer-key.json`](overruled-100/answer-key.json) | 100 |

Human-readable twins sit next to the JSON (`inputs.md`, `answer-key.md`, `bank.md`). The JSON is what a runner should load. Each input row is `{ "id", "query" }` in the smaller `inputs.json` files. The 5,300 `inputs.json` keeps the original wrapper (`n`, `id`, `cite`).

## Request

```http
POST /api/v1/citecheck/cite
{ "citation": "Gray v. Morley, 460 Mich. 738 (Mich. 1999)" }
```

Or a batch: `{ "citations": ["...", "..."] }`. Match results back to rows by input string and by position. If you resume a run, match on `id` **and** the input string, because a rebuilt bank can reuse an id for a different cite.

## How to score

Each answer-key row has three verdict sets:

| Field | Meaning |
|---|---|
| `accept` | Fully correct. |
| `partial` | Defensible but weaker. Usually a hedge where a commitment was possible, or an honest "we do not cover this" from a product that lacks that corpus. |
| `reject` | Affirmatively wrong. |

A verdict in none of the three sets scores as wrong. Timeouts and transport errors are not answers. Exclude them from the denominator unless the accept set already contains `error`.

### Verdict vocabulary

| Verdict | Means |
|---|---|
| `valid` | Locator, caption, and (when asserted) year and court match a real authority. `correctedCitation` should be Bluebook form. |
| `likely_valid` | Soft confirm. Antique reporter, whitespace, or a pin that falls inside the opinion. |
| `name_mismatch` | The locator is a real case. The asserted parties, year, or court are not that case. |
| `page_mismatch` | Right volume and reporter, wrong first page. Often an interior pin used as the opening page. |
| `implausible` | The volume, series, or reporter shape cannot exist. |
| `not_in_corpus` | The product searched a range it holds and found nothing. |
| `not_covered` | The product does not hold or search that range, or the input is not a case citation it parses. |
| `unverified` | Nothing could confirm or deny it. |
| `error` | The row was not checked. |

### Stances

Not every product implements every check. The 5,300 key labels each row with a stance so a narrower checker is not punished for lacking a feature, and is punished for claiming a feature it got wrong.

| Stance | Rows | A correct checker must | A limited checker may |
|---|---:|---|---|
| `must_confirm` | 2,447 | Return `valid` or `likely_valid` as listed in `accept`. Never invent a different case. | Soft-confirm when `accept` allows it. |
| `must_decline` | 2,643 | Refuse a hard `valid`. | Prefer the listed accept verdict. `not_covered` / `unverified` is partial when the product lacks that slice of the corpus. |
| `open` | 210 | Prefer `accept` when it has the capability. | A locator-only checker may confirm. A pin-aware or name-aware checker should decline. Both paths score through accept ∪ partial. |

### Six accuracy categories

Report these separately. A single overall percent hides whether the product is inventing cases or merely failing on typos.

| Cat | What it measures | Bar used on the LawDiver run | Families |
|---|---|---|---|
| 1 | Overruled or reversed. The cite is real. The failure mode is silence about negative treatment. | 100% | `overruled`, and `bad_law` rows whose treatment is the point |
| 2 | Fabricated authorities and identity traps. Invented volumes, fake captions on a real page, Mata-style fakes. | 99.7% | `outright_hallucination`, `close_hallucination`, `name_mismatch`, `implausible`, `fabricated_series`, `federal_fabrication`, `real_neighbor_page` |
| 3 | Clean real cites. | 99% | `perfect`, `valid_exact`, `bare_reporter`, `good_law`, `parallel_cite` |
| 4 | Bluebook or form noise. The case is real. Spacing, abbreviations, "vs.", parallel reporters, short forms. | 95% | `bluebook_variant`, and form-only rows |
| 5 | Hard mangling. Recover the case or flag the defect. A silent `valid` on a transposed page is wrong. | 80% | `mild_mangle`, `severe_mangle`, `page_mismatch`, `transposed_volume`, `structural` |
| 6 | Unresolved. Bare `Id.` or `supra` with no antecedent. | unscored | `id_supra` |

A prior LawDiver scoreboard is in [`5300/prior-product-scoreboard.md`](5300/prior-product-scoreboard.md). It is a result, not the key. Do not treat those percentages as the expected score of a different product.

## Families in the 5,300

`family` on each answer-key row. Counts are from [`../manifest.json`](../manifest.json).

### Clean cites — confirm

| Family | Rows | What is being tested |
|---|---:|---|
| `perfect` | 1,782 | Caption, volume, reporter, page, and court or year are all right. Example: `Gray v. Morley, 460 Mich. 738 (Mich. 1999)`. |
| `valid_exact` | 50 | Heavily cited high-court decisions, fully correct. |
| `bare_reporter` | 50 | Volume, reporter, and page only, no caption. Example shape: `347 U.S. 483`. |
| `good_law` | 50 | Accurate cite to a case that is still good law. Treatment, if returned, should not say overruled. |
| `parallel_cite` | 34 | A real parallel reporter of the same decision (`86 S. Ct. 1602` for *Miranda*). Confirm, and prefer the primary reporter in a corrected cite when the product has one. |
| `parallel_trap` | 1 | A journal or service parallel that must not be read as an interior pin. |
| `secondary_form` | 46 | Vendor or advance-sheet form of a real case (LEXIS, advance reports). Confirm the case. |
| `bluebook_variant` | 71 | Same case, form that is not quite Bluebook: `vs.`, missing periods, small-caps noise, table T6 abbreviations. Confirm. Do not reject it for cosmetics. |
| `short_form` | 51 | Bluebook R10.9 short form with a pin, such as `City of, 48 Tex. Sup. Ct. J. at 852`. Confirm the host case. The pin is inside the opinion. |
| `string_cite` | 51 | Several authorities in one string. The primary cite is real. A later unit may be fabricated. Confirm the primary and do not let the fake tail flip the whole string to invalid. |
| `compound_history` | 51 | A real cite plus a subsequent-history tail (`aff'd`, `rev'd`) that is fake. Confirm the primary. Do not treat the fake tail as the case. |
| `caption_trap` | 7 | Party normalization. A brand such as `USA` in a caption is not the sovereign `United States`. Confirm the case as written. Do not expand the brand into a different party. |

### Overruled — confirm the cite, and say so

| Family | Rows | What is being tested |
|---|---:|---|
| `overruled` | 100 | Well-formed cites to decisions a good-law pass marks overruled. About two per large state, one per other state, the rest federal. Accept is `valid`. The candidate payload must surface negative treatment. A checker that says only "valid" and stays silent has blessed overruled law. The same 100 rows are also [`overruled-100/`](overruled-100/). |
| `bad_law` | 37 | Negative treatment, but the locator itself may be messy. Confirm when the locator is clean. Follow `why` on the row when it is not. |

### Real locator, wrong identity — do not confirm the caption

| Family | Rows | What is being tested |
|---|---:|---|
| `close_hallucination` | 660 | The volume and page exist. The parties are invented. Preferred verdict: `name_mismatch`. Returning `valid` means the product trusted the caption over the book. |
| `name_mismatch` | 51 | Same pattern, written as an explicit mismatch rather than a generated hallucination. |
| `real_neighbor_page` | 50 | Right volume, adjacent page, so the cite lands on a different real case. The asserted caption is not that neighbor. |
| `year_court_mismatch` | 50 | Right locator, wrong year or a foreign court in the parenthetical. Example: a New Mexico case wearing `(Colo. 2004)`. |
| `wrong_state_regional` | 1 | Right reporter region used for the wrong state. |

### Hard mangling — recover or flag, do not silently confirm

| Family | Rows | What is being tested |
|---|---:|---|
| `mild_mangle` | 153 | Near-miss on a real cite. Often a transposed page (`886` printed as `868`). Preferred decline is `page_mismatch`, with the real case offered as a correction. |
| `page_mismatch` | 50 | The number given is an interior pin, not the first page. |
| `transposed_volume` | 45 | Volume digits swapped. A hard `valid` is wrong. |
| `severe_mangle` | 61 | The locator is broken badly enough that a confident confirm is wrong. A correction is a bonus. Silence or `not_in_corpus` can be acceptable. `valid` is not. |
| `structural` | 40 | Paired near-miss controls: one field moved (extra comma, dropped party, docket noise) against a clean twin. |

### Fabrications — decline

| Family | Rows | What is being tested |
|---|---:|---|
| `outright_hallucination` | 1,403 | Invented parties, impossible volumes, or both, often inside a real reporter series (`8005 Sandf. 987`). |
| `implausible` | 38 | Volume above the published ceiling of a real reporter. Ceilings move when new volumes print. Re-check U.S., F.3d, F.4th, and similar before trusting an old `implausible` row. |
| `fabricated_series` | 50 | The reporter series itself is invented. |
| `federal_fabrication` | 2 | Mata v. Avianca style: a confident, fully formed cite to a case that does not exist. |
| `vendor_cite` | 50 | A Westlaw or Lexis number that was never assigned, sometimes hung on a real case name. `not_covered` is partial if the product does not index vendor cites. `valid` is wrong. |
| `statute_fabricated` | 50 | A code section that cannot exist (`Alaska Stat. § 999999.99`). |

### Not a judicial opinion, or not a citation

| Family | Rows | What is being tested |
|---|---:|---|
| `statute` | 50 | A real statute. Confirm if the product covers statutes. `not_covered` is an honest accept-or-partial if it only does cases. |
| `constitution_rule` | 4 | Constitutional or rules cite. Same coverage rule. |
| `tax_authority` | 5 | Code, regulation, or revenue ruling. |
| `immigration_authority` | 4 | INA or related non-case cite. |
| `ip_authority` | 5 | Patent, trademark, or copyright statute or rule. |
| `garbage_input` | 50 | Prose that is not a citation (`see generally the Idaho cases on this point, passim`). |
| `id_supra` | 47 | `Id.` or `supra` with no antecedent in the input. Unscored as accuracy. The honest answer is that it cannot be resolved alone. |

## The 1,006 state bank

[`state-1006/bank.json`](state-1006/bank.json) is the earlier, fully audited bank: 51 jurisdictions (federal plus each state), labeled `moderate` / `hard` / `expert` (252 / 293 / 461). Every case has `probe` (what defect was planted), `groundTruth` (the fact), `accept` / `partial` / `reject`, and often `expectCandidateName` or `expectCorrectedContains`.

Aspects, which are the test types:

| Aspect | Rows | Planted defect |
|---|---:|---|
| `valid_exact` | 50 | Fully correct, heavily cited decision. |
| `bare_reporter` | 50 | No caption, just the locator. |
| `federal_landmark` | 1 | *Brown v. Board of Education*, fully correct. |
| `parallel_cite` | 35 | Real parallel reporter. |
| `secondary_form` | 46 | Vendor or advance form of a real case. |
| `short_form` | 51 | R10.9 short form plus pin. |
| `string_cite` | 51 | Multi-authority string. |
| `compound_history` | 51 | Real primary, fake history tail. |
| `good_law` | 51 | Accurate cite; treatment should not be negative. |
| `page_mismatch` | 51 | Pin cited as the first page. |
| `real_neighbor_page` | 51 | Adjacent page is a different case. |
| `name_mismatch` | 51 | Real locator, wrong parties. |
| `year_court_mismatch` | 50 | Real locator, wrong year or court. |
| `wrong_state_regional` | 1 | Regional reporter attributed to the wrong state. |
| `transposed_volume` | 45 | Swapped volume digits. |
| `implausible` | 51 | Volume past the reporter ceiling. |
| `federal_fabrication` | 2 | Fully formed fake federal cite. |
| `fabricated_series` | 50 | Invented reporter. |
| `statute` | 50 | Real code section. |
| `statute_fabricated` | 50 | Impossible section number. |
| `tax_authority` | 5 | Tax materials. |
| `immigration_authority` | 4 | Immigration materials. |
| `ip_authority` | 5 | IP materials. |
| `constitution_rule` | 4 | Constitution or court rule. |
| `vendor_cite` | 50 | Fake WL / LEXIS locator. |
| `id_supra` | 50 | No antecedent. |
| `garbage_input` | 50 | Not a citation. |

The 5,300 set was expanded from this bank plus reporter samples, jurisdiction samples, and the overruled sample. Where an id exists in both (`BANK-*`, `OVRL-*`), the 5,300 answer key is the one to score.

## Capability tags

The 5,300 key also lists which product function a row actually exercises. Use these when a checker fails a category, so you can see the missing function instead of a vague "accuracy" drop.

| Tag | Function |
|---|---|
| `parse_locator` | Pull volume, reporter, page, and parallels out of the string. |
| `corpus_lookup` | Resolve that locator against a case database. |
| `caption_match` | Compare asserted parties to the resolved case. |
| `party_normalization` | Sovereign and table-T6 expansions, without rewriting brands. |
| `pin_page_check` | Detect an interior pin used as the first page. |
| `volume_plausibility` | Reject impossible volumes and invented series. |
| `non_case_authority` | Statutes, rules, constitutions, specialty codes. |
| `antecedent_or_empty_input` | `Id.`, `supra`, and non-citation prose. |
| `multi_unit_parse` | String cites and subsequent-history tails. |
| `treatment_history` | Overruling and other negative treatment. Required for `overruled`. |
| `vendor_locator` | Westlaw and Lexis style cites. |
