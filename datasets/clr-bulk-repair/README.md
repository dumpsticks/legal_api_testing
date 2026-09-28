# CLR bulk repair

This suite answers one question: **is the vendor serving a repaired caselaw corpus, or the CourtListener / Harvard CAP bulk download as shipped?**

Every row is a defect a repaired corpus has already fixed. An unrepaired bulk load fails it. A repaired corpus passes it. Nothing in this folder depends on a repair that has not shipped (no author-id filters, no still-open missing opinions, no parallels that have not been attached).

Send the **inputs** files. Grade with the **answer keys**. Do not send an answer key to the system under test.

| List | Send | File | Grade with |
|---|---|---|---|
| Cites | The reporter string alone | [cites.json](cites.json) | [cites-answer-key.json](cites-answer-key.json) |
| Case names | The caption alone | [case-names.json](case-names.json) | [case-names-answer-key.json](case-names-answer-key.json) |
| Queries | A research question | [queries.json](queries.json) | [queries-answer-key.json](queries-answer-key.json) |

Sixteen cases. The same sixteen appear on each list, asked a different way.

## What a pass is

The returned case must **carry `mustCite`**. That string is the cite the bulk citation table did not have, or had under the wrong reporter series.

These are fails, even when the opinion text is in the dump:

- No hit.
- A hit on the right parties that shows only a docket number, a LEXIS number, or no reporter.
- A hit that shows only `bulkCite` (the cite the dump already contained). For Allen v. Milligan, returning `599 U.S. 1` and not `143 S. Ct. 1487` is a fail. For People v. Belge, returning `41 N.Y. 60` and not `41 N.Y.2d 60` is a fail.

`bulkCite` is null when the dump had no reporter cite for that case at all (the Florida `So. 3d` holes, and PayPal).

## The three defects, and only these

1. **Florida `So. 3d` missing from mid-2019.** The opinion is in the bulk opinions file. The `So. 3d` row is not in the bulk citation file. A repaired corpus attached it. Rows: Hayslip, Fried, Airbnb, Bowles.
2. **New York Reports series scramble.** Harvard CAP shelved these Court of Appeals cases under the first-series `N.Y.` path. The bulk file stores `41 N.Y. 60`. The case is `41 N.Y.2d 60`. A repaired corpus keeps the bad key as a non-canonical alias and files `N.Y.2d` as the cite. Rows: Belge, Huffman, New York Times, Buffalo v. Cargill, Hunt.
3. **Supreme Court Reporter parallel missing.** The bulk citation row has the `U.S.` cite and not `S. Ct.` A repaired corpus added the `S. Ct.` cite. Rows: Allen, Trump v. Anderson, Lindke, NRA v. Vullo, Vidal v. Elster, McElrath.
4. **District reporter missing.** PayPal, Inc. v. CFPB is in the dump without `512 F. Supp. 3d 1`. A repaired corpus attached that cite.

## How to send one row

```http
POST /api/v1/cases/retrieve
Content-Type: application/json

{ "query": "276 So. 3d 109" }
```

Use `cites.json` for that call, `case-names.json` for `People v. Belge`, and `queries.json` for `Hayslip deed arbitration covenant running with the land`. Same pass rule on all three: the case that comes back must include `mustCite`.
