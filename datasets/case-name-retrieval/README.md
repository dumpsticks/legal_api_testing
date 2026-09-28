# Case-name retrieval

Send a case caption. The product should return that opinion, not a research essay about the topic and not a different case that shares a party name.

This is the "which case is *Gray v. Morley*?" question. It is not cite checking (the caption may omit the reporter) and it is not search (the query is not a doctrine).

| File | Rows | Role |
|---|---:|---|
| [`inputs.json`](inputs.json) | 1,461 | Captions only. Send `query`. |
| [`answer-key.json`](answer-key.json) | 1,461 | Expected reporter locator, family, and why. |
| [`golden-inputs.json`](golden-inputs.json) | 6 | Informal lowercase landmarks. |
| [`golden-answer-key.json`](golden-answer-key.json) | 6 | Grade-3 reporter cite that must come back. |

## Request

```http
POST /api/v1/cases/retrieve
{ "query": "Gray v. Morley" }
```

The same endpoint accepts a citation. Those rows live in [citation retrieval](../citation-retrieval/README.md). Keep the runs separate so a caption failure is not averaged together with a reporter-parse failure.

## Where the 1,461 rows came from

They are captions parsed out of cites the 5,300 cite-check key already marks as real: `perfect`, `valid_exact`, `good_law`, `overruled`, `bluebook_variant`, `secondary_form`, `parallel_cite`, and `caption_trap`. One row per distinct caption plus locator. When the same caption appeared as both a perfect cite and a form variant, the perfect row was kept.

The query is the parties only.

| Source cite | Query you send | Locator that must come back |
|---|---|---|
| `Gray v. Morley, 460 Mich. 738 (Mich. 1999)` | `Gray v. Morley` | `460 Mich. 738` |
| `Subaru versus David McDavid Nissan, 84 S.W.3d 212 (Tex. 2002)` | `Subaru versus David McDavid Nissan` | `84 S.W.3d 212` |

`connector` on the answer key is `v.`, `vs.`, or `versus`. A product that only splits on `v.` will miss the `versus` rows. That is the test.

## How to score

| `outcome` | Rows it covers | Pass |
|---|---|---|
| `hit` | Ordinary confirmed captions | The returned case's citation contains `expectLocator`. A did-you-mean list passes when that case is on the list. A confident hit on a different locator fails. |
| `hit_and_flag_negative_treatment` | `family` = `overruled` | Same locator match, and the payload says the case is overruled or otherwise negatively treated. Returning the case and calling it good law fails. |
| `hit_as_written` | `family` = `caption_trap` | The parties come back as written. Do not expand a brand (`USA`) into the sovereign `United States` and retrieve a different case. |

`sourceCite` is the full citation the caption was cut from. `why` is the cite-check explanation. Use them when a human reviews a miss. Do not send them to the API.

Party order matters. `Morley v. Gray` is a different query and is not what these rows ask. Extra words the product adds in a display title (`of Topeka`, `Inc.`) are fine. A different volume or a different reporter that is not a known parallel of `expectLocator` is not.

## Golden names

Six landmarks, typed the way a person types them, with no reporter and no capitals:

| Id | Query | Must retrieve |
|---|---|---|
| `name-miranda` | `miranda v. arizona` | `384 U.S. 436` |
| `name-brown` | `brown v. board of education` | `347 U.S. 483` |
| `name-terry` | `terry v. ohio` | `392 U.S. 1` |
| `name-gideon` | `gideon v. wainwright` | `372 U.S. 335` |
| `name-mapp` | `mapp v. ohio` | `367 U.S. 643` |
| `name-loving` | `loving v. virginia` | `388 U.S. 1` |

Grade 3 in the answer key means that cite is on the first page, or is the single retrieved case. These six also appear as `kind: "name"` in the [search golden set](../search/golden-set/queries.json).

## What this suite does not include

- Doctrine questions (`summary judgment material fact`). Those are [search](../search/README.md).
- Reporter cites with no caption (`347 U.S. 483`). Those are [citation retrieval](../citation-retrieval/README.md).
- Invented captions on a real page (`close_hallucination`). Those are cite-check identity traps. Sending the fake caption alone, with the locator stripped, does not have a stable expected case, so they were not turned into name-retrieval rows.
