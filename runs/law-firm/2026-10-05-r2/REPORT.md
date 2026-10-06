# Law-firm test series — run 2026-10-05-r2

System under test: LawDiver API v1 (`https://lawdiver.com/api/v1`). Datasets: `datasets/law-firm/`. Harness: `scripts/law-firm/`. A row is **perfect** only when every check on it passes; everything else is listed by case in the `problems-*.md` files next to this report.

## Headline

| Suite | Rows run | Perfect | Notes |
|---|---:|---:|---|
| Boolean search, jurisdiction-scoped (new) | 5000 | 3634 (72.7%) | out-of-scope hits on 1 queries; landmark top-10 805/1362; boolean full-text check 1649/2082 opinions satisfy the query |
| Boolean search, realworld carried forward | 286 | 142 (49.7%) | landmark top-10 121/259 |
| Good-law check (state + federal) | 853 | 591 (69.3%) | negative history caught 221/258; good law kept clean 542/574; unresolved 21 |
| Bluebook form from slightly-off cites | 1000 | 781 (78.1%) | exact string match to expected 697 |
| Cite check, carried forward | 657 | 638 (97.1%) | partial 17 |
| Opinion output (text + PDF) | 200 | 144 (72.0%) | old LawTools PDF header on 0; clusterId mismatch on 0; apart from header, clusterId and star paging, 150 (75.0%) are clean |

Good law: 147 of 1,000 rows are excluded from scoring — presumed-good inputs whose caption (taken from older banks) does not match the case at that locator; the API correctly answered `name_mismatch`, so there is no good-law answer to grade for the case intended. They are listed in `problems-goodlaw.md`.

## General fixes (ranked by rows affected)

Each line is one root cause seen across many cases. Examples are row ids from this run; the full per-case list is in the matching `problems-*.md`.

### Search

| Rows | Fix | Examples |
|---:|---|---|
| 557 | Controlling landmark for the doctrine not in the top 10 of an in-scope boolean search. `landmark_missing_bank` | LF-BS-0011 [CA + federal] ("second amendment" OR "keep and bear arms") /s "historical tradition" → want bruen\|heller\|mcdonald\|rahimi<br>LF-BS-0019 [4 Cir.] (retaliation OR "protected activity") /s "materially adverse" → want burlington n\|nassar\|crawford v\. metro\|t<br>LF-BS-0028 [9 Cir.] ("likelihood of confusion" OR "sleekcraft factors") /s trademark → want sleekcraft\|amf inc |
| 138 | Carried-forward realworld boolean row lost its landmark. `landmark_missing_carried` | rw-0004 [all_federal] "self defense" /s "imminent" AND ("reasonable belief" OR "stand your g → want people v\.? goetz\|state v\.? norman\|bear<br>rw-0005 [all_federal] "material breach" /s "substantial performance" NOT construction → want jacob & youngs\|k & g construction\|walker<br>rw-0007 [all_federal] "homeowners association" /p ("restrictive covenant" OR "architectural" → want nahrstedt\|shelley v\.? kraemer\|tulk v\.? |
| 106 | Empty result page for an in-scope doctrine query that has a controlling landmark. `search_empty_keyed` | LF-BS-0031 [5 Cir.] "economic substance" & "business purpose" % criminal<br>LF-BS-0057 [DE state courts] "business judgment rule" & "duty of care" % criminal<br>LF-BS-0159 [all_federal] "qualified immunity" & "constitutional right" % contract |
| 41 | Returned opinion does not satisfy the connectors (template wl-para-and). `boolean_unsatisfied_wl-para-and` | LF-BS-0217: "vacate the arbitration award" /p "exceeded their powers" & "evident p → Globe Transport & Trading Ltd. v. Guthri<br>LF-BS-0240: "duty to warn" /p psychotherapist & "identifiable victim" → Thompson v. County of Alameda<br>LF-BS-0276: "loss causation" /p "inflated price" & "economic loss" → Leegin Creative Leather Products, Inc. v |
| 40 | NOT / % / AND NOT exclusion ignored (template wl-but-not). `boolean_not_wl-but-not` | LF-BS-0144: "free exercise" & "neutral and generally applicable" % contract → Nicosia v. Amazon.com, Inc.<br>LF-BS-0144: "free exercise" & "neutral and generally applicable" % contract → Sveen v. Melin<br>LF-BS-0144: "free exercise" & "neutral and generally applicable" % contract → Meyer v. Uber Technologies, Inc. |
| 38 | Returned opinion does not satisfy the connectors (template wl-numeric). `boolean_unsatisfied_wl-numeric` | LF-BS-0433: "diversity jurisdiction" /10 "amount in controversy" → Self Storage Advisors, LLC v. SE Boise B<br>LF-BS-0541: "design defect" /10 "consumer expectations" → Deskevich v. Spirit Fabs, Inc.<br>LF-BS-0672: "fraudulent joinder" /10 remand → Jackson v. Morse |
| 34 | Returned opinion does not satisfy the connectors (template wl-root-para). `boolean_unsatisfied_wl-root-para` | LF-BS-0612: defen! /p "potential for coverage" → Mount Vernon Fire Insurance Co. v. Visio<br>LF-BS-0612: defen! /p "potential for coverage" → Clear Blue Specialty Insurance Company v<br>LF-BS-0877: prosecut! /p "probable cause" → Ybarra v. Illinois |
| 31 | Returned opinion does not satisfy the connectors (template wl-ordered). `boolean_unsatisfied_wl-ordered` | LF-BS-0120: "fair use" +s copyright → New York Times Co. v. Tasini<br>LF-BS-0133: "age discrimination" +s "but-for" → Browning v. United States<br>LF-BS-0133: "age discrimination" +s "but-for" → Cambra v. Exploration |
| 28 | Returned opinion does not satisfy the connectors (template wl-but-not). `boolean_unsatisfied_wl-but-not` | LF-BS-0060: "vacate the arbitration award" & "exceeded their powers" % criminal → At&T Technologies, Inc. v. Workers<br>LF-BS-0060: "vacate the arbitration award" & "exceeded their powers" % criminal → Seifert v. US Home Corp.<br>LF-BS-0060: "vacate the arbitration award" & "exceeded their powers" % criminal → Prima Paint Corp. v. Flood & Conklin Mfg |
| 28 | Returned opinion does not satisfy the connectors (template lx-w-p-and). `boolean_unsatisfied_lx-w-p-and` | LF-BS-0096: "market share liability" w/p des and manufacturer → McLaughlin v. Michelin Tire Corp.<br>LF-BS-0096: "market share liability" w/p des and manufacturer → Schneider National, Inc. v. Holland Hitc<br>LF-BS-0096: "market share liability" w/p des and manufacturer → Chrysler Corp. v. Todorovich |
| 27 | Returned opinion does not satisfy the connectors (template lx-w-n). `boolean_unsatisfied_lx-w-n` | LF-BS-0180: "open and obvious" w/15 (invitee or "duty to warn") → Rowland v. Christian<br>LF-BS-0192: retaliation w/15 ("materially adverse" or "causal connection") → Miller v. Wachovia Bank, N.A.<br>LF-BS-0925: "eminent domain" w/15 ("just compensation" or taking) → City of Wilmington Ex Rel. Water Departm |
| 26 | Returned opinion does not satisfy the connectors (template wl-root-near). `boolean_unsatisfied_wl-root-near` | LF-BS-0264: relocat! /25 "best interests of the child" → In re Dependency of K.W.<br>LF-BS-0312: capaci! /25 "natural objects of his bounty" → Diaz, Jimmy<br>LF-BS-0504: substan! /25 commissioner → Skarbek, Norbert v. Barnhart, Jo Anne |
| 25 | Returned opinion does not satisfy the connectors (template lx-w-s). `boolean_unsatisfied_lx-w-s` | LF-BS-0036: "actual malice" w/s "public figure" → New York Times Co. v. Sullivan<br>LF-BS-0372: "malicious prosecution" w/s "probable cause" → Illinois v. Gates<br>LF-BS-0420: "equitable distribution" w/s "nonmarital" → Bradshaw v. Bradshaw |
| 24 | Returned opinion does not satisfy the connectors (template wl-sentence). `boolean_unsatisfied_wl-sentence` | LF-BS-1044: "hostile work environment" /s "severe or pervasive" → Meritor Savings Bank v. Vinson<br>LF-BS-1896: "rule of reason" /s "anticompetitive effects" → Eastman Kodak Co. v. Image Technical Ser<br>LF-BS-2400: "negligence per se" /s "class of persons" → Townsend v. Noah Pierre (072357) |
| 21 | Returned opinion does not satisfy the connectors (template wl-or-group). `boolean_unsatisfied_wl-or-group` | LF-BS-0049: ("mcdonnell douglas" OR "burden-shifting") /s pretext → Medina v. Univ of Mississippi<br>LF-BS-0492: ("reasonable accommodation" OR "undue hardship") /s "interactive proce → Trans World Airlines, Inc. v. Hardison<br>LF-BS-0492: ("reasonable accommodation" OR "undue hardship") /s "interactive proce → Smith v. Publishing |
| 19 | Returned opinion does not satisfy the connectors (template three-and). `boolean_unsatisfied_three-and` | LF-BS-0373: "underinsured motorist" AND stacking AND policy → Pacheco v. Shelter Mutual Insurance<br>LF-BS-0480: homestead AND devise AND "surviving spouse" → Murphy v. McCloud<br>LF-BS-0480: homestead AND devise AND "surviving spouse" → Sarbacher v. McNamara |
| 19 | Search came back degraded (an engine failed or timed out). `search_degraded` | LF-BS-0397<br>LF-BS-0510<br>LF-BS-0954 |
| 16 | Returned opinion does not satisfy the connectors (template and-not). `boolean_unsatisfied_and-not` | LF-BS-0048: "equitable distribution" AND "nonmarital" AND NOT criminal → Cassara v. Cassara<br>LF-BS-0073: "personal jurisdiction" AND "minimum contacts" AND NOT divorce → International Shoe Co. v. Washington<br>LF-BS-0516: homestead AND devise AND NOT criminal → First National Bank & Trust Co. v. Sandi |
| 15 | Westlaw "%" (BUT NOT) query returns nothing in a nationwide scope — the % operator is not parsed (the same exclusion written "AND NOT" returns results). `search_empty_but_not` | LF-BS-0159 [keyword] "qualified immunity" & "constitutional right" % contract<br>LF-BS-0223 [keyword] "proportional to the needs of the case" & discovery % habeas<br>LF-BS-1011 [keyword] "parol evidence rule" & integrat! % criminal |
| 14 | Nationwide-scope boolean query on a mainstream doctrine returns an empty page. `search_empty_broad` | LF-BS-0405 [keyword] nondischargeab! /p "false pretenses" & debtor<br>LF-BS-0407 [keyword] "motion to compel arbitration" +s unconscionab!<br>LF-BS-1251 [keyword] nondischargeab! w/15 ("false pretenses" or debtor) |
| 12 | Returned opinion does not satisfy the connectors (template or-and-not). `boolean_unsatisfied_or-and-not` | LF-BS-0097: ("respondeat superior" OR "vicarious liability") AND employer NOT pate → Jett v. Dallas Independent School Distri<br>LF-BS-0456: ("rule 11" OR "frivolous") AND "reasonable inquiry" NOT habeas → Committee on Legal Ethics of the West Vi<br>LF-BS-0864: ("modification of the trust" OR "trust modification") AND beneficiar!  → In the Matter of the H. Boone Porter Tru |
| 12 | NOT / % / AND NOT exclusion ignored (template and-not). `boolean_not_and-not` | LF-BS-0432: "qualified immunity" AND "constitutional right" AND NOT contract → Siegert v. Gilley<br>LF-BS-0780: "second amendment" AND "historical tradition" AND NOT contract → District of Columbia v. Heller<br>LF-BS-1080: "hostile work environment" AND "severe or pervasive" AND NOT criminal → Meritor Savings Bank v. Vinson |
| 11 | NOT / % / AND NOT exclusion ignored (template or-and-not). `boolean_not_or-and-not` | LF-BS-0024: (brady OR "exculpatory evidence") AND suppress! NOT civil → Strickler v. Greene<br>LF-BS-0072: ("ineffective assistance of counsel" OR "deficient performance") AND " → Strickland v. Washington<br>LF-BS-0949: ("comparative negligence" OR "comparative fault") AND apportion! NOT c → Lippard v. Houdaille Industries, Inc. |
| 10 | Result outside the requested date window. `search_date_filter` | LF-BS-0013: 2013-06-17 vs 1990-01-01–2010-12-31<br>LF-BS-0194: 2011-02-28 vs 1990-01-01–2010-12-31<br>LF-BS-1752: 2004-05-03 vs –1999-12-31 |
| 1 | Scope "one_state" returned other state. `scope_one_state_other_state` | LF-BS-0925: Pennsylvania Court of Common Pleas, Delaware County — Jacobs v. Nether Providence Township |

### Good law

| Rows | Fix | Examples |
|---:|---|---|
| 151 | No good-law determination ("unknown") for a reported case. `goodlaw_unknown` | LF-GL-0252 AT&T Mobility LLC v. Concepcion, 563 U.S. 333 (2011)<br>LF-GL-0266 eBay Inc. v. MercExchange, L.L.C., 547 U.S. 388 (2006)<br>LF-GL-0271 Google LLC v. Oracle Am., Inc., 593 U.S. 1 (2021) |
| 29 | Overruled or reversed case reported as clean good law (false clean bill of health). `goodlaw_missed_hard_reversed-below` | LF-GL-0082 Twombly v. Bell Atl. Corp., 425 F.3d 99 (2d Cir. 2005) → unknown [reversed by Bell Atl. Corp. v. Twombly, 550 U.S. 544 (2007)]<br>LF-GL-0083 Iqbal v. Hasty, 490 F.3d 143 (2d Cir. 2007) → unknown [reversed by Ashcroft v. Iqbal, 556 U.S. 662 (2009)]<br>LF-GL-0084 Jackson Women's Health Org. v. Dobbs, 945 F.3d 265 (5th Cir. → unknown [reversed by Dobbs v. Jackson Women's Health Org., 597 U.S. 215] |
| 20 | Good law (landmark still in force) flagged as negative. `goodlaw_false_alarm` | LF-GL-0166 Daimler AG v. Bauman, 571 U.S. 117 (2014) → questioned: BNSF RAILWAY CO. v. Kelli TYRRELL, special adminis (question<br>LF-GL-0192 Reynolds v. Sims, 377 U.S. 533 (1964) → questioned: CARRINGTON v. RASH Et Al. (criticized)<br>LF-GL-0199 Cent. Hudson Gas & Elec. Corp. v. Pub. Serv. Comm'n, 447 U.S → questioned: Borgner Et Al. v. Florida Board of Dentistry Et Al (question |
| 12 | Good-law input could not be resolved to a case (presumed-good). `goodlaw_unresolved_presumed-good` | LF-GL-0486 Ecc International Constructors, LLC v. Secretary of the Army, 79 F.4th → error<br>LF-GL-0849 Sunita ESWARAPPA, Plaintiff, v. SHED INC./KID’S CLUB, Defendant, 172 F → not_in_corpus<br>LF-GL-0851 Ramiro MOLINA, Plaintiff, v. Thomas J. VILSACK, Defendant, 273 F.3d 11 → not_in_corpus |
| 10 | Overruled/reversed case shown only as "questioned"/below-threshold instead of overruled/reversed. `goodlaw_understated` | LF-GL-0012 Adamson v. California, 332 U.S. 46 (1947) → questioned<br>LF-GL-0032 James v. United States, 550 U.S. 192 (2007) → questioned<br>LF-GL-0033 Sykes v. United States, 564 U.S. 1 (2011) → questioned |
| 10 | Case is flagged negative but the overruling / reversing decision is not named in the treatment evidence. `goodlaw_authority_not_named` | LF-GL-0046 South Carolina v. Gathers, 490 U.S. 805 (1989) — want Payne v. Tennessee, 501 U.S. 808 (1991)<br>LF-GL-0047 Grady v. Corbin, 495 U.S. 508 (1990) — want United States v. Dixon, 509 U.S. 688 (1993)<br>LF-GL-0076 Trans World Airlines, Inc. v. Hardison, 432 U.S. 6 — want Groff v. DeJoy, 600 U.S. 447 (2023) |
| 8 | Good-law input could not be resolved to a case (independent). `goodlaw_unresolved_independent` | LF-GL-0091 Kennedy v. Bremerton Sch. Dist., 991 F.3d 1004 (9th Cir. 2021) → not_in_corpus<br>LF-GL-0092 303 Creative LLC v. Elenis, 6 F.4th 1160 (10th Cir. 2021) → not_in_corpus<br>LF-GL-0093 Students for Fair Admissions, Inc. v. President & Fellows of Harvard C → not_in_corpus |
| 6 | Overruled or reversed case reported as clean good law (false clean bill of health). `goodlaw_missed_hard_scotus-overruled` | LF-GL-0007 Goldman v. United States, 316 U.S. 129 (1942) → good [overruled by Katz v. United States, 389 U.S. 347 (1967)]<br>LF-GL-0015 Collector v. Day, 78 U.S. (11 Wall.) 113 (1871) → good [overruled by Graves v. New York ex rel. O'Keefe, 306 U.S. 466 (]<br>LF-GL-0058 O'Callahan v. Parker, 395 U.S. 258 (1969) → good [overruled by Solorio v. United States, 483 U.S. 435 (1987)] |
| 6 | Correct citation to a known case resolves to a different case in the corpus (reporter locator attached to the wrong opinion). `goodlaw_resolved_other_case` | LF-GL-0089 United States v. Carpenter, 819 F.3d 880 (6th Cir. 2016) → name_mismatch United States v. Sanders<br>LF-GL-0519 Local Government Assistance Corporation, 2 N.Y. 731 (2004) → valid Matter of Latimore<br>LF-GL-0639 The STATE of Ohio, 197 Ohio App. 3d 705 (2012) → valid State v. Culberson |
| 3 | Internal audit note exposed as the treatment rationale (e.g. "Landmark overruling (API audit F-02)"). `goodlaw_internal_rationale` | LF-GL-0001 Plessy v. Ferguson<br>LF-GL-0021 Roe v. Wade<br>LF-GL-0410 Roe v. Wade |
| 1 | Overruled or reversed case reported as clean good law (false clean bill of health). `goodlaw_missed_hard_overruled-100` | LF-GL-0398 Wood v. Strickland, 420 U.S. 308 (SCOTUS 1975) → good |
| 1 | Good-law input could not be resolved to a case (prior-bank). `goodlaw_unresolved_prior-bank` | LF-GL-0408 Williamson County RPC v. Hamilton Bank, 473 U.S. 175 (1985) → not_in_corpus |
| 1 | Partially overruled / abrogated / limited case reported as clean good law. `goodlaw_missed_soft_5300-bad_law` | LF-GL-0434 Bivens v. Six Unknown Named Agents, 403 U.S. 400 (1971) → good |

### Bluebook output

| Rows | Fix | Examples |
|---:|---|---|
| 34 | Case-name words that T6 abbreviates are spelled out (Company, Corporation, Department, Insurance, Association…) (Rule 10.2.2). `bluebook_name_t6_unabbreviated` | LF-BB-0001 → Elam v. Commissioner of Soc. Sec., 348 F.3d 124 (6th Cir. 2003)<br>LF-BB-0014 → Lesesne v. District of Columbia, 447 F.3d 828 (D.C. Cir. 2006)<br>LF-BB-0057 → Eley v. District of Columbia, 417 App. D.C. 97 (D.C. Cir. 2015) |
| 29 | Wrong verdict on a slightly-off cite (redundant_court). `bluebook_verdict_redundant_court` | LF-BB-0901 "Kennedy v. Bremerton Sch. Dist., 597 U.S. 507 (U.S. 2022)" → name_mismatch<br>LF-BB-0904 "Rawlings v. Kentucky, 448 U.S. 98 (U.S. 1980)" → name_mismatch<br>LF-BB-0905 "Plessy v. Ferguson, 163 U.S. 537 (U.S. 1896)" → name_mismatch |
| 28 | Wrong verdict on a slightly-off cite (vendor_cite). `bluebook_verdict_vendor_cite` | LF-BB-0751 "United States v. Nichols, 1994 WL 119002 (D.C. Cir. 1994)" → name_mismatch<br>LF-BB-0752 "United States v. Ganoe, 2015 WL 4430466 (9th Cir. 2008)" → name_mismatch<br>LF-BB-0753 "Moore v. Quarterman, 2012 WL 3996836 (5th Cir. 2008)" → not_covered |
| 18 | Court named in the parenthetical although the reporter already identifies it (Rule 10.4(b)) — e.g. "(U.S. 1986)", "(Cal. 1975)". `bluebook_court_redundant` | LF-BB-0151 → "(Ga. Ct. App. 2003)" want "(2003)"<br>LF-BB-0186 → "(Ga. Ct. App. 2003)" want "(2003)"<br>LF-BB-0290 → "(Ill. App. Ct. 2005)" want "(2005)" |
| 17 | Case name: redundant_business_designation `bluebook_name_redundant_business_designation` | LF-BB-0053 → W & W Equip. Co., Inc. v. Mink, 568 N.E.2d 564 (Ind. Ct. App. 1991)<br>LF-BB-0062 → Olympic S.S. Co., Inc. v. Centennial Ins. Co., 117 Wash. 2d 37 (1991)<br>LF-BB-0094 → In re Focus Media, Inc., Debtor, Focus Media, Inc. v. Nat'l Broad. Co. Inc. Abc Inc. Paxson Commc'ns |
| 15 | Wrong verdict on a slightly-off cite (pin_as_first_page). `bluebook_verdict_pin_as_first_page` | LF-BB-0651 "Harrell v. City of Norfolk, 265 Va. 505 (2003)" → name_mismatch<br>LF-BB-0652 "Pizza v. Workers' Comp. Appeals Bd., 51 Cal. Rptr. 3d 122 (Cal. Ct. Ap" → not_in_corpus<br>LF-BB-0657 "Pearson v. Lincoln Tel. Co., 513 N.W.2d 365 (Neb. Ct. App. 1994)" → not_in_corpus |
| 13 | Case name in capitals. `bluebook_name_all_caps_name` | LF-BB-0147 → MARKMAN Et Al. v. WESTVIEW INSTRUMENTS, INC., 517 U.S. 370 (1996)<br>LF-BB-0160 → Wallace v. MILLIKEN & CO., 406 S.E.2d 358 (S.C. 1991)<br>LF-BB-0172 → SAUCIER v. KATZ Et Al., 533 U.S. 194 (2001) |
| 13 | No corrected citation returned for a recoverable off-cite (vendor_cite). `bluebook_no_correction_vendor_cite` | LF-BB-0753 "Moore v. Quarterman, 2012 WL 3996836 (5th Cir. 2008)" → not_covered<br>LF-BB-0759 "United States v. Lyons, 2015 WL 4899590 (6th Cir. 2012)" → not_covered<br>LF-BB-0763 "United States v. Baston, 2016 WL 1162202 (11th Cir. 2016)" → not_covered |
| 12 | Court abbreviation in the parenthetical is not the T1/T7 form. `bluebook_court_form` | LF-BB-0132 → "(N.H. Super. 1818)" want "(N.H. Super. Ct. 1818)"<br>LF-BB-0249 → "(Conn. Super. 1999)" want "(Conn. Super. Ct. 1999)"<br>LF-BB-0257 → "(Tex. App. 10th Dist. 1996)" want "(Tex. App. 1996)" |
| 12 | No corrected citation returned for a recoverable off-cite (pin_as_first_page). `bluebook_no_correction_pin_as_first_page` | LF-BB-0652 "Pizza v. Workers' Comp. Appeals Bd., 51 Cal. Rptr. 3d 122 (Cal. Ct. Ap" → not_in_corpus<br>LF-BB-0657 "Pearson v. Lincoln Tel. Co., 513 N.W.2d 365 (Neb. Ct. App. 1994)" → not_in_corpus<br>LF-BB-0661 "Careau & Co. v. Sec. Pac. Bus. Credit, Inc., 222 Cal. App. 3d 1376 (19" → not_in_corpus |
| 11 | Corrected cite carries the wrong volume/reporter/page (vendor_cite). `bluebook_locator_vendor_cite` | LF-BB-0752 "United States v. Ganoe, 2015 WL 4430466 (9th Cir. 2008)" → Huff v. Spaw, 794 F.3d 543 (6th Cir. 2015)<br>LF-BB-0754 "McKinney v. Ryan, 2014 WL 1013859 (9th Cir. 2013)" → McKinney v. Ryan, 745 F.3d 963 (9th Cir. 2014)<br>LF-BB-0767 "Laster v. Dist. of Columbia, 2013 WL 5460281 (D.D.C. 2005)" → D.K. Ex Rel. Klein v. District of Columbia, 983 F. Supp. 2d 138 (D.D.C. 2013) |
| 10 | Individual parties keep given names / extra words before the surname (Rule 10.2.1(g): surname only). `bluebook_name_given_names` | LF-BB-0114 "In re: Marvin Griffin" want "In re Marvin Griffin"<br>LF-BB-0171 "In the Matter of Driscoll" want "In re Driscoll"<br>LF-BB-0287 "In re: Marckson Saint Fleur" want "In re Marckson Saint Fleur" |
| 10 | Corrected cite has the wrong or no year (vendor_cite). `bluebook_year_vendor_cite` | LF-BB-0752 "United States v. Ganoe, 2015 WL 4430466 (9th Cir. 2008)" → Huff v. Spaw, 794 F.3d 543 (6th Cir. 2015)<br>LF-BB-0754 "McKinney v. Ryan, 2014 WL 1013859 (9th Cir. 2013)" → McKinney v. Ryan, 745 F.3d 963 (9th Cir. 2014)<br>LF-BB-0767 "Laster v. Dist. of Columbia, 2013 WL 5460281 (D.D.C. 2005)" → D.K. Ex Rel. Klein v. District of Columbia, 983 F. Supp. 2d 138 (D.D.C. 2013) |
| 9 | Wrong verdict on a slightly-off cite (government_long_form). `bluebook_verdict_government_long_form` | LF-BB-0852 "Bogdanov v. People of the State of Colorado, 941 P.2d 247 (Colo. 1997)" → name_mismatch<br>LF-BB-0855 "People of the State of California v. Kelly, 51 Cal. Rptr. 3d 98 (Cal. " → name_mismatch<br>LF-BB-0856 "People of the State of New York v. Danielson, 9 N.Y.3d 342 (2007)" → name_mismatch |
| 8 | Leading "The" kept in a party name (Rule 10.2.1(c)). `bluebook_name_leading_the` | LF-BB-0237 → The Estate of Wayne Hage v. United States, 687 F.3d 1281 (Fed. Cir. 2012)<br>LF-BB-0371 → Oral Surgeons, P.C. v. The Cincinnati Ins. Co., 2 F.4th 1141 (8th Cir. 2021)<br>LF-BB-0418 → Thoen v. The United States, 765 F.2d 1110 (Fed. Cir. 1985) |
| 6 | Corrected cite carries the wrong volume/reporter/page (page_typo). `bluebook_locator_page_typo` | LF-BB-0955 "Peckham v. Ronrico Corp., 171 F.2d 635 (1st Cir. 1948)" → Midwest-Radiant Corp. v. Hentze, 171 F.2d 635 (1948)<br>LF-BB-0959 "Beach v. Jean, 746 A.2d 282 (Conn. Super. Ct. 1999)" → Critchell v. Critchell, 746 A.2d 282 (D.C. 2000)<br>LF-BB-0962 "Tex. Dep't of Parks & Wildlife v. Miranda, 133 S.W.3d 271 (T" → State & Cnty. Mut. Fire Ins. Co. v. MacIas, 133 S.W.3d 271 (Tex. 2004) |
| 5 | Reporter abbreviation not in T1. `bluebook_name_reporter_not_t1` | LF-BB-0057 → Eley v. District of Columbia, 417 App. D.C. 97 (D.C. Cir. 2015)<br>LF-BB-0085 → Cohen v. Bd. of Trustees of the Univ., 94 Fed. R. Serv. 3d 488 (D.C. Cir. 2016)<br>LF-BB-0475 → Haim v. Islamic Republic of Iran, 77 A.L.R. Fed. 2d 685 (D.D.C. 2011) |
| 5 | Court omitted from the parenthetical where the reporter does not identify it (Rule 10.4). `bluebook_court_missing` | LF-BB-0062 → "(1991)" want "(Wash. 1991)"<br>LF-BB-0437 → "(2018)" want "(D.C. Cir. 2018)"<br>LF-BB-0761 → "(2010)" want "(5th Cir. 2010)" |
| 5 | Case name over 90 characters — not a citation short form. `bluebook_name_name_too_long` | LF-BB-0094 → In re Focus Media, Inc., Debtor, Focus Media, Inc. v. Nat'l Broad. Co. Inc. Abc Inc. Paxson Commc'ns<br>LF-BB-0451 → 34 Fed. R. Evid. Serv. 1145, prod.liab.rep. (Cch) P 13,014 William Daubert Joyce Daubert, Individual<br>LF-BB-0521 → Thomas S. Amlie Estate of June T. Amlie, Deceased Richard R. Epple Jr. v. Commissioner of the Intern |
| 5 | Reporter abbreviation in corrected cite not in T1 form. `bluebook_reporter_form` | LF-BB-0327 VT vs Vt.<br>LF-BB-0392 ME vs Me.<br>LF-BB-0515 ND vs N.D. |
| 4 | Corrected cite carries the wrong volume/reporter/page (pin_as_first_page). `bluebook_locator_pin_as_first_page` | LF-BB-0651 "Harrell v. City of Norfolk, 265 Va. 505 (2003)" → Commonwealth v. Hudson, 265 Va. 505 (2003)<br>LF-BB-0674 "United States v. Dunkel, 927 F.2d 957 (7th Cir. 1991)" → Schroeder v. City of Chicago, John J. Tully, & Audley Connor, 927 F.2d 957 (7th Cir. 1991)<br>LF-BB-0691 "United States v. Hardin, 9 F.3d 1554 (6th Cir. 1993)" → United States v. Brady, 9 F.3d 1554 (9th Cir. 1993) |
| 4 | Wrong verdict on a slightly-off cite (page_typo). `bluebook_verdict_page_typo` | LF-BB-0957 "Nat. Res. Def. Council, Inc. v. Gorsuch, 685 F.2d 781 (D.C. Cir. 1982)" → not_in_corpus<br>LF-BB-0990 "Katz v. Cellco P'ship, 794 F.3d 314 (2d Cir. 2015)" → not_in_corpus<br>LF-BB-0993 "Marine Midland Bank v. Bicknell, 176 Vt. 398 (2004)" → not_in_corpus |
| 4 | No corrected citation returned for a recoverable off-cite (page_typo). `bluebook_no_correction_page_typo` | LF-BB-0957 "Nat. Res. Def. Council, Inc. v. Gorsuch, 685 F.2d 781 (D.C. Cir. 1982)" → not_in_corpus<br>LF-BB-0990 "Katz v. Cellco P'ship, 794 F.3d 314 (2d Cir. 2015)" → not_in_corpus<br>LF-BB-0993 "Marine Midland Bank v. Bicknell, 176 Vt. 398 (2004)" → not_in_corpus |
| 3 | Corrected cite carries the wrong volume/reporter/page (ordinal_form). `bluebook_locator_ordinal_form` | LF-BB-0057 "Eley v. Dist. of Columbia, 793 F.3rd 97 (D.C. Cir. 2015)" → Eley v. District of Columbia, 417 App. D.C. 97 (D.C. Cir. 2015)<br>LF-BB-0062 "Olympic S.S. Co. v. Centennial Ins. Co., 811 P.2nd 673 (Wash" → Olympic S.S. Co., Inc. v. Centennial Ins. Co., 117 Wash. 2d 37 (1991)<br>LF-BB-0085 "Cohen v. Bd. of Trustees of the Univ., 819 F.3rd 476 (D.C. C" → Cohen v. Bd. of Trustees of the Univ., 94 Fed. R. Serv. 3d 488 (D.C. Cir. 2016) |
| 3 | Case name keeps "et al." (Rule 10.2.1(a)). `bluebook_name_et_al` | LF-BB-0147 → MARKMAN Et Al. v. WESTVIEW INSTRUMENTS, INC., 517 U.S. 370 (1996)<br>LF-BB-0172 → SAUCIER v. KATZ Et Al., 533 U.S. 194 (2001)<br>LF-BB-0489 → Nathaniel MOSLEY Et Al. v. GEN. MOTORS CORP. Et Al., 497 F.2d 1330 (8th Cir. 1974) |
| 3 | Wrong verdict on a slightly-off cite (v_form). `bluebook_verdict_v_form` | LF-BB-0204 "Rapid Litig. Mgmt. Ltd. VS CellzDirect, Inc., 827 F.3d 1042 (Fed. Cir." → name_mismatch<br>LF-BB-0208 "City of Pontiac Policemen's & Firemen's Ret. Sys. VS Ubs Ag, 752 F.3d " → name_mismatch<br>LF-BB-0232 "Ecc Int'l Constructors, LLC vs. Sec'y of the Army, 79 F.4th 1364 (Fed." → error |
| 3 | Wrong verdict on a slightly-off cite (court_missing). `bluebook_verdict_court_missing` | LF-BB-0358 "Antonelli v. Fed. Bureau of Prisons, 591 F. Supp. 2d 15 (2008)" → name_mismatch<br>LF-BB-0377 "Hancock v. Am. Tel. & Tel. Co., 701 F.3d 1248 (2012)" → name_mismatch<br>LF-BB-0398 "Sussex v. U.S. Dist. Ct., 781 F.3d 1065 (2015)" → name_mismatch |
| 2 | Wrong verdict on a slightly-off cite (reporter_spacing). `bluebook_verdict_reporter_spacing` | LF-BB-0034 "Sterilite Corp. v. Cont'l Cas. Co., 458 N. E. 2d 338 (Mass. App. Ct. 1" → name_mismatch<br>LF-BB-0036 "Nat'l Fed'n of Indep. Bus. v. Sebelius, 567 U. S. 519 (2012)" → name_mismatch |
| 2 | Corrected cite carries the wrong volume/reporter/page (reporter_lowercase). `bluebook_locator_reporter_lowercase` | LF-BB-0159 "Babula v. Robertson, 536 n.w.2d 834 (Mich. Ct. App. 1995)" → Babula v. Robertson, 212 Mich. App. 45 (Mich. Ct. App. 1995)<br>LF-BB-0194 "Halvorsen v. Ferguson, 735 p.2d 675 (Wash. Ct. App. 1986)" → Halvorsen v. Ferguson, 46 Wash. App. 708 (Wash. Ct. App. 1986) |
| 2 | Wrong verdict on a slightly-off cite (reporter_lowercase). `bluebook_verdict_reporter_lowercase` | LF-BB-0193 "Morley v. Cent. Intelligence Agency, 508 f.3d 1108 (D.C. Cir. 2007)" → name_mismatch<br>LF-BB-0196 "Winter v. Nat. Res. Def. Council, Inc., 555 u.s. 7 (2008)" → name_mismatch |
| 2 | Corrected cite carries the wrong volume/reporter/page (full_caption). `bluebook_locator_full_caption` | LF-BB-0569 "Winston & Strawn, LLP v. James P. McLean, Jr., 843 F.3d 503 " → Winston & Strawn, LLP v. McLean, 96 Fed. R. Serv. 3d 742 (D.C. Cir. 2016)<br>LF-BB-0593 "Myrtle Nell Catrett, Administratrix of the Estate of Louis H" → Catrett v. Johns-Manville Sales Corp., 1 Fed. R. Serv. 3d 817 (D.C. Cir. 1985) |
| 2 | Corrected cite has the wrong or no year (page_typo). `bluebook_year_page_typo` | LF-BB-0959 "Beach v. Jean, 746 A.2d 282 (Conn. Super. Ct. 1999)" → Critchell v. Critchell, 746 A.2d 282 (D.C. 2000)<br>LF-BB-0979 "McClellan v. Tottenhoff, 666 P.2d 480 (Wyo. 1983)" → State v. Geschwind, 666 P.2d 480 (1982) |
| 1 | Corrected cite carries the wrong volume/reporter/page (reporter_spacing). `bluebook_locator_reporter_spacing` | LF-BB-0034 "Sterilite Corp. v. Cont'l Cas. Co., 458 N. E. 2d 338 (Mass. " → Sterilite Corp. v. Cont'l Cas. Co., 17 Mass. App. Ct. 316 (Mass. App. Ct. 1983) |
| 1 | Wrong verdict on a slightly-off cite (ordinal_form). `bluebook_verdict_ordinal_form` | LF-BB-0074 "Joseph M. Black, Jr., Tr. v. Educ. Credit Mgmt. Corp., 459 F.3rd 796 (" → name_mismatch |
| 1 | Wrong verdict on a slightly-off cite (reporter_no_periods). `bluebook_verdict_reporter_no_periods` | LF-BB-0126 "Shapiro v. Pub. Serv. Mut. Ins., 477 NE2d 146 (Mass. App. Ct. 1985)" → name_mismatch |
| 1 | Corrected cite carries the wrong volume/reporter/page (reporter_no_periods). `bluebook_locator_reporter_no_periods` | LF-BB-0126 "Shapiro v. Pub. Serv. Mut. Ins., 477 NE2d 146 (Mass. App. Ct" → Shapiro v. Pub. Serv. Mut. Ins., 19 Mass. App. Ct. 648 (Mass. App. Ct. 1985) |
| 1 | No corrected citation returned for a recoverable off-cite (v_form). `bluebook_no_correction_v_form` | LF-BB-0232 "Ecc Int'l Constructors, LLC vs. Sec'y of the Army, 79 F.4th 1364 (Fed." → error |
| 1 | Wrong verdict on a slightly-off cite (no_parenthetical). `bluebook_verdict_no_parenthetical` | LF-BB-0252 "United States v. Carpenter, 819 F.3d 880" → name_mismatch |
| 1 | Corrected cite carries the wrong volume/reporter/page (no_parenthetical). `bluebook_locator_no_parenthetical` | LF-BB-0286 "Luginbyhl v. Commonwealth, 618 S.E.2d 347" → Luginbyhl v. Commonwealth, 46 Va. App. 460 (Va. Ct. App. 2005) |
| 1 | Corrected cite carries the wrong volume/reporter/page (year_off_by_one). `bluebook_locator_year_off_by_one` | LF-BB-0348 "Am. Mech. Corp. v. Union MacHine Co. of Lynn, 485 N.E.2d 680" → Am. Mech. Corp. v. Union Mach. Co. of Lynn, Inc., 21 Mass. App. Ct. 97 (Mass. App. Ct. 198 |
| 1 | Corrected cite carries the wrong volume/reporter/page (court_nonbluebook). `bluebook_locator_court_nonbluebook` | LF-BB-0406 "Allen v. Allen, 789 S.E.2d 787 (Va. App. 2016)" → Allen v. Allen, 66 Va. App. 586 (Va. Ct. App. 2016) |
| 1 | Wrong verdict on a slightly-off cite (full_date). `bluebook_verdict_full_date` | LF-BB-0451 "Daubert v. Merrell Dow Pharms., Inc., 951 F.2d 1128 (9th Cir. Dec. 20," → name_mismatch |
| 1 | Case name keeps descriptive phrases ("Administratrix of the Estate of…", "as Trustee", "individually") (Rule 10.2.1(a)). `bluebook_name_descriptive_phrase_in_name` | LF-BB-0451 → 34 Fed. R. Evid. Serv. 1145, prod.liab.rep. (Cch) P 13,014 William Daubert Joyce Daubert, Individual |
| 1 | Corrected cite carries the wrong volume/reporter/page (full_date). `bluebook_locator_full_date` | LF-BB-0475 "Haim v. Islamic Republic of Iran, 784 F. Supp. 2d 1 (D.D.C. " → Haim v. Islamic Republic of Iran, 77 A.L.R. Fed. 2d 685 (D.D.C. 2011) |
| 1 | Wrong verdict on a slightly-off cite (t6_spelled_out). `bluebook_verdict_t6_spelled_out` | LF-BB-0524 "Permann v. SouthernD. Department of Labor, Unemployment Insurance Divi" → name_mismatch |
| 1 | Wrong verdict on a slightly-off cite (all_caps_name). `bluebook_verdict_all_caps_name` | LF-BB-0635 "S&W ENTERS., L.L.C. v. SOUTHTRUST BANK OF ALA., NA, AN ALA. BANKING CO" → name_mismatch |
| 1 | Corrected cite carries the wrong volume/reporter/page (all_caps_name). `bluebook_locator_all_caps_name` | LF-BB-0646 "IN RE MCDIVITT ESTATE, 425 N.W.2d 575 (Mich. Ct. App. 1988)" → In re McDivitt Estate, 169 Mich. App. 435 (Mich. Ct. App. 1988) |
| 1 | Case name uses "vs."/"v" instead of "v." `bluebook_name_v_form` | LF-BB-0695 → Iowa Vs. Mark Thomas Hennings, 791 N.W.2d 828 (Iowa 2010) |

### Cite check (carried forward)

| Rows | Fix | Examples |
|---:|---|---|
| 1 | Carried-forward cite-check family "page_mismatch" regressed or still wrong. `carried_page_mismatch` | BANK-VT-06 "Robertson v. Mylan Laboratories, Inc., 176 Vt. 359 (2004)" → not_in_corpus |
| 1 | Carried-forward cite-check family "secondary_form" regressed or still wrong. `carried_secondary_form` | BANK-FL-03 "State v. DiGuilio, 11 Fla. L. Weekly 339" → name_mismatch |

### Opinion output

| Rows | Fix | Examples |
|---:|---|---|
| 22 | No star paging (*page markers) — a firm cannot pin-cite the reporter from this text. `opinion_no_star_paging` | LF-OP-008 200198600000147 Celotex Corp. v. Catrett<br>LF-OP-010 200198600000051 Matsushita Electric Industrial Co., Ltd. v. Zenith<br>LF-OP-009 200198600000144 Anderson v. Liberty Lobby, Inc. |
| 17 | Slip-opinion page numbers / running headers left in the opinion body. `opinion_page_furniture` | LF-OP-008 200198600000147 Celotex Corp. v. Catrett — 38 bare page-number lines, 0 running headers<br>LF-OP-010 200198600000051 Matsushita Electric Industrial Co., Ltd. v. Zenith — 60 bare page-number lines, 0 running headers<br>LF-OP-009 200198600000144 Anderson v. Liberty Lobby, Inc. — 72 bare page-number lines, 0 running headers |
| 10 | Opinion text keeps PDF line wraps as paragraph breaks (blank line mid-sentence) — text pastes badly into a brief. `opinion_hard_wrapped_text` | LF-OP-024 200202200000038 New York State Rifle & Pistol Assn., Inc. v. Bruen — 2.36 mid-sentence paragraph breaks per 1k words<br>LF-OP-041 202100025726 TransUnion LLC v. Ramirez — 2.56 mid-sentence paragraph breaks per 1k words<br>LF-OP-063 300201900019117 Jackson Women's Health Orgn v. Dobbs — 6.3 mid-sentence paragraph breaks per 1k words |
| 7 | Opinion header citation fails Bluebook: Case-name words that T6 abbreviates are spelled out (Company, Corporation, Department, Insurance, Association…) (Rule 10.2.2). `opinion_bluebook_t6_unabbreviated` | LF-OP-022 200200800000002 District of Columbia v. Heller — District of Columbia v. Heller, 554 U.S. 570 (2008)<br>LF-OP-026 200193800000082 Railroad v. Tompkins — Railroad v. Tompkins, 304 U.S. 64 (1938)<br>LF-OP-053 200600019931 Northern v. White — Northern v. White, 548 U.S. 53 (2006) |
| 5 | Opinion header citation fails Bluebook: redundant_business_designation `opinion_bluebook_redundant_business_designation` | LF-OP-010 200198600000051 Matsushita Electric Industrial Co., Ltd. v. Zenith — Matsushita Elec. Indus. Co., Ltd. v. Zenith Radio Corp., 475 U.S. 574 (1986)<br>LF-OP-157 122200100000040 Lugo v. Ameritech Corp., Inc. — Lugo v. Ameritech Corp., Inc., 464 Mich. 512 (2001)<br>LF-OP-158 138197800000726 Azzarello v. Black Bros. Co., Inc. — Azzarello v. Black Bros. Co., Inc., 391 A.2d 1020 (Pa. 1978) |
| 4 | Opinion text repeats paragraphs or the whole opinion. `opinion_duplicated_text` | LF-OP-043 200195200000072 Sheet v. Sawyer — 2 repeated paragraphs<br>LF-OP-045 200196200000039 Baker v. Carr — 3 repeated paragraphs<br>LF-OP-134 451200400000285 Judicial Watch, Inc. v. United States Department o — 3 repeated paragraphs |
| 4 | Opinion header citation fails Bluebook: Reporter abbreviation not in T1. `opinion_bluebook_reporter_not_t1` | LF-OP-072 300198500002285 Catrett v. Johns-Manville Sales Corporation — Catrett v. Johns-Manville Sales Corp., 1 Fed. R. Serv. 3d 817 (D.C. Cir. 1985)<br>LF-OP-114 447200100000017 Lara v. Arctic King Ltd. — Lara v. Arctic King Ltd., 2001 A.M.C. 2665 (W.D. Wash. 2001)<br>LF-OP-119 409201200000024 Lobegeiger v. Celebrity Cruises, Inc. — Lobegeiger v. Celebrity Cruises, Inc., 2013 A.M.C. 1254 (S.D. Fla. 2012) |
| 3 | Opinion text under 1,500 characters (stub, syllabus only, or truncated). `opinion_text_short` | LF-OP-076 300200500009975 Mercexchange, L.L.C. v. Ebay, Inc. — 1306 chars<br>LF-OP-077 300201000011733 Prometheus Laboratories v. Collaborative — 1028 chars<br>LF-OP-185 104198500000165 In re Memorandum Opinions — 1432 chars |
| 3 | Opinion header citation fails Bluebook: Case name in capitals. `opinion_bluebook_all_caps_name` | LF-OP-078 300200900013906 Laster v. AT & T MOBILITY LLC — Laster v. AT & T MOBILITY LLC, 584 F.3d 849 (9th Cir. 2009)<br>LF-OP-115 401200900000035 Scott v. MOREQUITY, INC. — Scott v. MOREQUITY, INC., 683 F. Supp. 2d 1280 (N.D. Ala. 2009)<br>LF-OP-118 432201000000826 Johnson v. STATE DEPT. OF CORRECTIONAL SERVICES — Johnson v. STATE DEPT. OF CORR. SERVS., 709 F. Supp. 2d 178 (N.D.N.Y. 2010) |
| 2 | PDF prints part of the opinion more than once. `opinion_pdf_duplicated` | LF-OP-033 200197600000018 Mathews v. Eldridge — 2 copies of a mid-opinion passage<br>LF-OP-090 300198400008883 Pure Gold, Inc. v. Syntex (u.s.a.), Inc. — 2 copies of a mid-opinion passage |
| 1 | HTML tags or entities (&amp;, <p>) leak into opinion text. `opinion_html_leak` | LF-OP-075 300200500012185 Carhart v. Gonzales — 1 tags/entities |
| 1 | Opinion header citation fails Bluebook: Case name keeps descriptive phrases ("Administratrix of the Estate of…", "as Trustee", "individually") (Rule 10.2.1(a)). `opinion_bluebook_descriptive_phrase_in_name` | LF-OP-083 300199100018349 34 Fed. R. Evid. Serv. 1145, prod.liab.rep. (Cch)  — 34 Fed. R. Evid. Serv. 1145, prod.liab.rep. (Cch) P 13,014 William Daubert Joyce |
| 1 | Opinion header citation fails Bluebook: Case name over 90 characters — not a citation short form. `opinion_bluebook_name_too_long` | LF-OP-083 300199100018349 34 Fed. R. Evid. Serv. 1145, prod.liab.rep. (Cch)  — 34 Fed. R. Evid. Serv. 1145, prod.liab.rep. (Cch) P 13,014 William Daubert Joyce |

### Corpus data

| Rows | Fix | Examples |
|---:|---|---|
| 74 | Same opinion (same id or same reporter cite) twice on one results page — duplicate records. `search_duplicate_hit` | LF-BS-0035: Hofer v. DPHHS 2005 MT 302<br>LF-BS-0436: MECHANICAL AIR ENGINEER. v. Totem Const. 801 P.2d 426<br>LF-BS-0458: TRANSPORT v. Liberty Mut. Ins. Co. 2010 WI 49 |
| 36 | Search hit has no court (court field null), so a firm cannot tell where it was decided and scope cannot be enforced. `result_missing_court` | LF-BS-0148: CEC Entertainment, Inc. 202000012134<br>LF-BS-0170: Crawford v. Ford Motor Company 202600020041<br>LF-BS-0455: Lowe v. City of Brookfield, Joshua Schaber, Brandon Schulz,  202500024994 |

## Boolean search detail

| Measure | New bank | Realworld carried |
|---|---:|---:|
| Queries run | 5000 | 286 |
| Perfect | 3634 | 142 |
| HTTP errors | 0 | 0 |
| Degraded | 18 | 1 |
| Empty pages | 600 | 0 |
| Queries with an out-of-scope hit | 1 | 0 |
| Out-of-scope hits / all hits | 1/36759 | 0/2593 |
| Date-filter violations (queries) | 10 | 0 |
| Unpublished leaks (queries) | 0 | 0 |
| Duplicate hit on a page (queries) | 57 | 9 |
| Landmark keyed | 1362 | 259 |
| Landmark in top 10 | 805 | 121 |
| Landmark at rank 1 | 518 | 112 |
| Landmark MRR | 0.458 | 0.443 |
| Avg latency ms | 1989 | 2257 |

**Full-text boolean verification** (top 3 opinions on every 12th query, evaluated with `lib/boolean.mjs`): 2082 opinions checked, 433 do not satisfy the query.

### By scope

| Scope | Queries | Perfect | Any out-of-scope hit | Empty |
|---|---:|---:|---:|---:|
| one_state | 1725 | 76.9% | 0.1% | 15.1% |
| one_state_plus_federal | 1110 | 72.0% | 0.0% | 11.4% |
| federal_circuit | 751 | 66.0% | 0.0% | 10.7% |
| federal_district | 385 | 81.8% | 0.0% | 13.5% |
| all_federal | 338 | 63.3% | 0.0% | 7.4% |
| all_states | 260 | 83.1% | 0.0% | 2.7% |
| us_supreme_court | 224 | 67.0% | 0.0% | 16.1% |
| all_states_and_federal | 207 | 56.5% | 0.0% | 6.3% |

### By connector template

| Template | Queries | Perfect | Empty | Opinions failing full-text check |
|---|---:|---:|---:|---:|
| wl-numeric | 384 | 70.6% | 11.5% | 38/163 |
| wl-para-and | 381 | 74.8% | 11.5% | 41/171 |
| lx-w-s | 377 | 78.0% | 9.5% | 25/159 |
| wl-root-para | 371 | 63.9% | 14.3% | 34/139 |
| wl-or-group | 364 | 78.8% | 5.8% | 21/164 |
| or-and-not | 363 | 87.6% | 1.4% | 23/180 |
| and-not | 360 | 85.3% | 4.2% | 28/167 |
| lx-w-n | 359 | 79.1% | 5.3% | 27/152 |
| wl-sentence | 355 | 70.7% | 12.4% | 24/156 |
| lx-w-p-and | 352 | 73.9% | 11.6% | 28/143 |
| three-and | 342 | 85.4% | 3.8% | 19/154 |
| wl-but-not | 333 | 38.4% | 47.7% | 68/93 |
| wl-root-near | 332 | 64.2% | 15.7% | 26/107 |
| wl-ordered | 327 | 63.3% | 16.5% | 31/134 |

### keyword vs auto

| searchType | Queries | Perfect | Empty | Landmark top-10 | Opinions failing full-text boolean check |
|---|---:|---:|---:|---:|---:|
| keyword | 2500 | 63.3% | 21.3% | 308/683 | 120/935 |
| auto | 2500 | 82.0% | 2.7% | 497/679 | 313/1147 |

### Bluebook lint on search-result citation lines

| Issue | Hits |
|---|---:|
| no_locator | 6820 |
| t6_unabbreviated | 835 |
| local_rule_court_form | 683 |
| all_caps_name | 516 |
| reporter_not_t1 | 485 |
| redundant_business_designation | 393 |
| unparseable | 299 |
| name_too_long | 238 |
| reporter_spacing | 146 |
| leading_the | 136 |
| t10_unabbreviated | 81 |
| party_role_in_name | 51 |
| v_form | 49 |
| multiple_parties | 31 |
| et_al | 23 |
| state_long_form | 16 |
| no_year | 15 |
| usa_long_form | 14 |
| descriptive_phrase_in_name | 13 |

### Courts the grader could not place (scope not graded for these hits)

| Court \| jurisdiction | Hits |
|---|---:|
| null \| null | 36 |
| Patent Trial and Appeal Board \| Federal | 4 |
| Supreme Court of Puerto Rico \| Puerto Rico | 3 |
| Trademark Trial and Appeal Board \| Federal | 1 |
| High Court of American Samoa \| American Samoa | 1 |

## Good-law detail

| Group | Rows | Truth | Perfect | Caught / kept clean | Unresolved |
|---|---:|---|---:|---:|---:|
| presumed-good | 396 | presumed-good | 225 | 372/384 | 12 |
| scotus-good | 169 | independent | 147 | 150/168 | 1 |
| scotus-overruled | 81 | independent | 62 | 75/81 | 0 |
| overruled-100 | 78 | prior-bank | 77 | 77/78 | 0 |
| 5300-good_law | 45 | prior-bank | 45 | 45/45 | 0 |
| reversed-below | 44 | independent | 3 | 9/38 | 6 |
| state-good | 22 | independent | 19 | 20/22 | 0 |
| 5300-bad_law | 10 | prior-bank | 7 | 8/9 | 1 |
| state-overruled | 8 | independent | 6 | 7/7 | 1 |

Status values seen: good 344, overruled 176, unknown 174, negative_below_threshold 63, questioned 43, overruled_in_part 32.

Presumed-good cases the API flags negative (12) are listed in `problems-goodlaw.md` with the negative citation it relied on, for a lawyer to confirm.

## Bluebook off-cite detail

| Defect | Rows | Perfect | Verdict wrong | No correction | Locator | Year | Court | Case name |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| reporter_spacing | 50 | 46 | 2 | 0 | 1 | 0 | 0 | 2 |
| ordinal_form | 50 | 41 | 1 | 0 | 3 | 0 | 1 | 8 |
| reporter_no_periods | 50 | 45 | 1 | 0 | 1 | 0 | 1 | 3 |
| reporter_lowercase | 50 | 37 | 2 | 0 | 2 | 0 | 2 | 7 |
| v_form | 50 | 40 | 3 | 1 | 0 | 0 | 1 | 6 |
| no_parenthetical | 50 | 43 | 1 | 0 | 1 | 0 | 2 | 3 |
| year_off_by_one | 50 | 44 | 0 | 0 | 2 | 0 | 1 | 5 |
| court_missing | 50 | 39 | 3 | 0 | 1 | 0 | 1 | 7 |
| court_nonbluebook | 50 | 41 | 0 | 0 | 1 | 0 | 2 | 6 |
| full_date | 50 | 41 | 1 | 0 | 1 | 0 | 2 | 7 |
| t6_spelled_out | 50 | 40 | 1 | 0 | 1 | 0 | 3 | 6 |
| full_caption | 50 | 39 | 0 | 0 | 3 | 0 | 1 | 10 |
| all_caps_name | 50 | 43 | 1 | 0 | 1 | 0 | 2 | 5 |
| pin_as_first_page | 50 | 31 | 15 | 12 | 4 | 0 | 1 | 3 |
| punctuation | 50 | 48 | 0 | 0 | 0 | 0 | 0 | 2 |
| vendor_cite | 50 | 19 | 28 | 13 | 11 | 10 | 7 | 3 |
| parallel_only | 50 | 50 | 0 | 0 | 0 | 0 | 0 | 0 |
| government_long_form | 50 | 37 | 9 | 0 | 0 | 0 | 1 | 3 |
| redundant_court | 50 | 17 | 29 | 0 | 1 | 0 | 4 | 2 |
| page_typo | 50 | 40 | 4 | 4 | 6 | 2 | 3 | 0 |

Sources excluded before mangling (control lookup could not give a clean court/year): 130. Year conflicts between a curated source cite and the corpus: 1 (listed in the answer key under `excludedSources`).

## Cite check, carried forward

| Family | Rows | Perfect | Partial | Fail |
|---|---:|---:|---:|---:|
| mild_mangle | 153 | 149 | 4 | 0 |
| bluebook_variant | 71 | 70 | 1 | 0 |
| compound_history | 51 | 51 | 0 | 0 |
| string_cite | 51 | 51 | 0 | 0 |
| name_mismatch | 51 | 51 | 0 | 0 |
| vendor_cite | 50 | 50 | 0 | 0 |
| year_court_mismatch | 50 | 50 | 0 | 0 |
| statute | 50 | 45 | 5 | 0 |
| page_mismatch | 50 | 42 | 7 | 1 |
| secondary_form | 46 | 45 | 0 | 1 |
| parallel_cite | 34 | 34 | 0 | 0 |

## Opinion output detail

| Check | Opinions failing |
|---|---:|
| no_star_paging | 22 |
| page_furniture | 17 |
| hard_wrapped_text | 10 |
| bluebook_t6_unabbreviated | 7 |
| bluebook_redundant_business_designation | 5 |
| duplicated_text | 4 |
| bluebook_reporter_not_t1 | 4 |
| text_short | 3 |
| bluebook_all_caps_name | 3 |
| pdf_duplicated | 2 |
| html_leak | 1 |
| bluebook_descriptive_phrase_in_name | 1 |
| bluebook_name_too_long | 1 |
| pdf_text_differs | 1 |

By court group: scotus 44/60 perfect · circuit 24/45 perfect · state-supreme 36/40 perfect · district 23/30 perfect · state-intermediate 17/25 perfect.
