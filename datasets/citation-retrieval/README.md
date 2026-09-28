# Citation retrieval

Send a citation string. The product should return the opinion it points at, or refuse when it does not point at one.

Cite checking and citation retrieval share these strings. The grade is different. Cite check scores a verdict (`valid`, `name_mismatch`, `implausible`). Retrieval scores whether the right case object came back. A checker can say `name_mismatch` without handing you the case. A retrieval API has to hand you the case, or say it will not.

| File | Rows | Role |
|---|---:|---|
| [`inputs.json`](inputs.json) | 5,300 | The cite string only. Send `query`. |
| [`answer-key.json`](answer-key.json) | 5,300 | Retrieval class, outcome, locator, accept/reject, and why. |
| [`golden-inputs.json`](golden-inputs.json) | 8 | Landmark reporter cites. |
| [`golden-answer-key.json`](golden-answer-key.json) | 8 | Grade-3 labels. |

The cite-check verdict bands are copied onto each row so you can grade both behaviors from one response if your product returns them together.

## Request

```http
POST /api/v1/cases/retrieve
{ "query": "460 Mich. 738" }
```

Full strings are what the bank contains (`Gray v. Morley, 460 Mich. 738 (Mich. 1999)`), not only the bare locator. Bare locators are the `bare_reporter` family inside the same file.

## Retrieval classes

`retrievalClass` and `outcome` are the retrieval grade. `family` is the cite-check family, documented in [the cite-checker readme](../citechecker/README.md).

| Class | Rows | Outcome | What a pass looks like |
|---|---:|---|---|
| `exact_citation` | 2,032 | `hit`, or `hit_and_flag_negative_treatment` for the 100 overruled rows | One case, and its citation contains `locator` when `locator` is set. Caption on the response should agree with `assertedCaption` when that field is set. Overruled rows must also flag negative treatment. |
| `form_variant` | 203 | `hit` | Bluebook noise, parallel reporters, advance sheets, short forms. Same case as the clean cite. Do not drop it because the form is off. |
| `caption_normalization` | 7 | `hit_as_written` | Do not rewrite a brand in the caption into a sovereign and retrieve a different case. |
| `string_cite` | 51 | `hit_primary_only` | Return the first real authority. Do not retrieve the fabricated later unit, and do not fail the whole string because of that unit. |
| `subsequent_history` | 51 | `hit_primary_only` | Return the primary case. The `aff'd` / `rev'd` tail is fake. |
| `pin_or_page` | 50 | `do_not_silent_confirm` | The number is an interior pin or the wrong first page. Returning that page's case as if the cite were perfect fails. Returning the host opinion and saying the page is a pin passes. |
| `hard_mangle` | 259 | `do_not_silent_confirm` | Transposed pages, swapped volumes, broken locators. Offer the nearest real case as a correction, or decline. A confident hit that treats the broken cite as exact fails. |
| `near_miss` | 40 | `do_not_silent_confirm` | One structural defect against a clean twin. Same rule as hard mangles. |
| `wrong_identity` | 812 | `reject_asserted_caption` | The locator is often real. The parties, year, or court are not. If you return a case, it must be the case that actually sits at the locator, and you must not present the asserted caption as correct. Returning nothing is also a pass. Returning the fake caption as a confirmed match fails. |
| `defective_or_treated` | 37 | `see_why` | `bad_law` rows. Read `why` on the row. Some locators are clean and the point is treatment. Some locators are damaged. |
| `no_such_case` | 1,493 | `no_hit` | Invented volume, invented series, or a fully formed fake. No confident case. A did-you-mean list of unrelated popular cases fails. |
| `vendor_or_fake` | 50 | `no_confident_hit` | Fabricated Westlaw or Lexis numbers. Decline, or say vendor cites are not covered. Do not invent an opinion for that number. |
| `not_a_citation` | 50 | `no_hit` | Prose. No case. |
| `needs_antecedent` | 47 | `no_hit` | Bare `Id.` or `supra`. Cannot be retrieved without the previous cite. |
| `non_case` | 118 | `not_an_opinion` or `no_hit` | Statutes, rules, tax, immigration, and IP materials, plus fabricated section numbers. A case-only retriever correctly returns nothing. A product that covers those authorities should return the statute or rule, and should still reject the fabricated section numbers. |

`locator` and `assertedCaption` are null when the string has no `v.` / `vs.` / `versus` caption (bare reporters, statutes, garbage). Grade those from `family`, `outcome`, and `why`.

## Golden citations

Eight landmarks. The query is the reporter cite. Grade 3 means that cite is the retrieved case, or is on the first page of a search.

| Id | Query |
|---|---|
| `cite-miranda` | `384 U.S. 436` |
| `cite-brown` | `347 U.S. 483` |
| `cite-marbury` | `5 U.S. 137` |
| `cite-roe` | `410 U.S. 113` |
| `cite-terry` | `392 U.S. 1` |
| `cite-chevron` | `467 U.S. 837` |
| `cite-iqbal` | `556 U.S. 662` |
| `cite-twombly` | `550 U.S. 544` |

These are the same rows as `kind: "citation"` in [`../search/golden-set/queries.json`](../search/golden-set/queries.json).

## Scoring notes

- Match a hit on `locator` appearing in the returned citation, or in a parallel of that citation. `384 U.S. 436` and `86 S. Ct. 1602` are the same case. The answer key's `locator` is the locator printed in the input, so a parallel-only response still passes a `form_variant` / `parallel_cite` row when the case name matches `assertedCaption`.
- Did-you-mean is a pass for `hit` rows when the expected case is in the list. It is a fail for `no_hit` rows when the list is presented as "this is probably the case."
- Empty and timeout are not `no_hit`. Drop them from the denominator.
- The 5,300 cite-check answer key in [`../citechecker/5300/answer-key.json`](../citechecker/5300/answer-key.json) is the same ids. If the two files disagree, the cite-checker file is the source and this view should be rebuilt with `scripts/package-datasets.mjs`.
