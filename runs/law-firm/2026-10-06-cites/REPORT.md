# Law-firm test series — run 2026-10-06-cites

System under test: LawDiver API v1 (`https://lawdiver.com/api/v1`). Datasets: `datasets/law-firm/`. Harness: `scripts/law-firm/`. A row is **perfect** only when every check on it passes; everything else is listed by case in the `problems-*.md` files next to this report.

## Headline

| Suite | Rows run | Perfect | Notes |
|---|---:|---:|---|
| Boolean search, jurisdiction-scoped (new) | 0 | 0 (n/a) | out-of-scope hits on 0 queries; landmark top-10 0/0; boolean full-text check 0/0 opinions satisfy the query |
| Boolean search, realworld carried forward | 0 | 0 (n/a) | landmark top-10 0/0 |
| Good-law check (state + federal) | 0 | 0 (n/a) | negative history caught 0/0; good law kept clean 0/0; unresolved 0 |
| Bluebook form from slightly-off cites | 1000 | 782 (78.2%) | exact string match to expected 698 |
| Cite check, carried forward | 657 | 637 (97.0%) | partial 17 |
| Opinion output (text + PDF) | 0 | 0 (n/a) | old LawTools PDF header on 0; clusterId mismatch on 0; apart from header, clusterId and star paging, 0 (n/a) are clean |

## General fixes (ranked by rows affected)

Each line is one root cause seen across many cases. Examples are row ids from this run; the full per-case list is in the matching `problems-*.md`.

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
| 3 | Wrong verdict on a slightly-off cite (court_missing). `bluebook_verdict_court_missing` | LF-BB-0358 "Antonelli v. Fed. Bureau of Prisons, 591 F. Supp. 2d 15 (2008)" → name_mismatch<br>LF-BB-0377 "Hancock v. Am. Tel. & Tel. Co., 701 F.3d 1248 (2012)" → name_mismatch<br>LF-BB-0398 "Sussex v. U.S. Dist. Ct., 781 F.3d 1065 (2015)" → name_mismatch |
| 2 | Wrong verdict on a slightly-off cite (reporter_spacing). `bluebook_verdict_reporter_spacing` | LF-BB-0034 "Sterilite Corp. v. Cont'l Cas. Co., 458 N. E. 2d 338 (Mass. App. Ct. 1" → name_mismatch<br>LF-BB-0036 "Nat'l Fed'n of Indep. Bus. v. Sebelius, 567 U. S. 519 (2012)" → name_mismatch |
| 2 | Corrected cite carries the wrong volume/reporter/page (reporter_lowercase). `bluebook_locator_reporter_lowercase` | LF-BB-0159 "Babula v. Robertson, 536 n.w.2d 834 (Mich. Ct. App. 1995)" → Babula v. Robertson, 212 Mich. App. 45 (Mich. Ct. App. 1995)<br>LF-BB-0194 "Halvorsen v. Ferguson, 735 p.2d 675 (Wash. Ct. App. 1986)" → Halvorsen v. Ferguson, 46 Wash. App. 708 (Wash. Ct. App. 1986) |
| 2 | Wrong verdict on a slightly-off cite (reporter_lowercase). `bluebook_verdict_reporter_lowercase` | LF-BB-0193 "Morley v. Cent. Intelligence Agency, 508 f.3d 1108 (D.C. Cir. 2007)" → name_mismatch<br>LF-BB-0196 "Winter v. Nat. Res. Def. Council, Inc., 555 u.s. 7 (2008)" → name_mismatch |
| 2 | Wrong verdict on a slightly-off cite (v_form). `bluebook_verdict_v_form` | LF-BB-0204 "Rapid Litig. Mgmt. Ltd. VS CellzDirect, Inc., 827 F.3d 1042 (Fed. Cir." → name_mismatch<br>LF-BB-0208 "City of Pontiac Policemen's & Firemen's Ret. Sys. VS Ubs Ag, 752 F.3d " → name_mismatch |
| 2 | Corrected cite carries the wrong volume/reporter/page (full_caption). `bluebook_locator_full_caption` | LF-BB-0569 "Winston & Strawn, LLP v. James P. McLean, Jr., 843 F.3d 503 " → Winston & Strawn, LLP v. McLean, 96 Fed. R. Serv. 3d 742 (D.C. Cir. 2016)<br>LF-BB-0593 "Myrtle Nell Catrett, Administratrix of the Estate of Louis H" → Catrett v. Johns-Manville Sales Corp., 1 Fed. R. Serv. 3d 817 (D.C. Cir. 1985) |
| 2 | Corrected cite has the wrong or no year (page_typo). `bluebook_year_page_typo` | LF-BB-0959 "Beach v. Jean, 746 A.2d 282 (Conn. Super. Ct. 1999)" → Critchell v. Critchell, 746 A.2d 282 (D.C. 2000)<br>LF-BB-0979 "McClellan v. Tottenhoff, 666 P.2d 480 (Wyo. 1983)" → State v. Geschwind, 666 P.2d 480 (1982) |
| 1 | Corrected cite carries the wrong volume/reporter/page (reporter_spacing). `bluebook_locator_reporter_spacing` | LF-BB-0034 "Sterilite Corp. v. Cont'l Cas. Co., 458 N. E. 2d 338 (Mass. " → Sterilite Corp. v. Cont'l Cas. Co., 17 Mass. App. Ct. 316 (Mass. App. Ct. 1983) |
| 1 | Wrong verdict on a slightly-off cite (ordinal_form). `bluebook_verdict_ordinal_form` | LF-BB-0074 "Joseph M. Black, Jr., Tr. v. Educ. Credit Mgmt. Corp., 459 F.3rd 796 (" → name_mismatch |
| 1 | Wrong verdict on a slightly-off cite (reporter_no_periods). `bluebook_verdict_reporter_no_periods` | LF-BB-0126 "Shapiro v. Pub. Serv. Mut. Ins., 477 NE2d 146 (Mass. App. Ct. 1985)" → name_mismatch |
| 1 | Corrected cite carries the wrong volume/reporter/page (reporter_no_periods). `bluebook_locator_reporter_no_periods` | LF-BB-0126 "Shapiro v. Pub. Serv. Mut. Ins., 477 NE2d 146 (Mass. App. Ct" → Shapiro v. Pub. Serv. Mut. Ins., 19 Mass. App. Ct. 648 (Mass. App. Ct. 1985) |
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
| 1 | Carried-forward cite-check family "bluebook_variant" regressed or still wrong. `carried_bluebook_variant` | ANAT-A294 "Jolly v. Eli Lilly & Co., 44Cal. 3d 1103 (Cal. 1988)" → error |
| 1 | Carried-forward cite-check family "secondary_form" regressed or still wrong. `carried_secondary_form` | BANK-FL-03 "State v. DiGuilio, 11 Fla. L. Weekly 339" → name_mismatch |

## Boolean search detail

| Measure | New bank | Realworld carried |
|---|---:|---:|
| Queries run | 0 | 0 |
| Perfect | 0 | 0 |
| HTTP errors | 0 | 0 |
| Degraded | 0 | 0 |
| Empty pages | 0 | 0 |
| Queries with an out-of-scope hit | 0 | 0 |
| Out-of-scope hits / all hits | 0/0 | 0/0 |
| Date-filter violations (queries) | 0 | 0 |
| Unpublished leaks (queries) | 0 | 0 |
| Duplicate hit on a page (queries) | 0 | 0 |
| Landmark keyed | 0 | 0 |
| Landmark in top 10 | 0 | 0 |
| Landmark at rank 1 | 0 | 0 |
| Landmark MRR | n/a | n/a |
| Avg latency ms | 0 | 0 |

**Full-text boolean verification** (top 3 opinions on every 12th query, evaluated with `lib/boolean.mjs`): 0 opinions checked, 0 do not satisfy the query.

### By scope

| Scope | Queries | Perfect | Any out-of-scope hit | Empty |
|---|---:|---:|---:|---:|

### By connector template

| Template | Queries | Perfect | Empty | Opinions failing full-text check |
|---|---:|---:|---:|---:|

### keyword vs auto

| searchType | Queries | Perfect | Empty | Landmark top-10 | Opinions failing full-text boolean check |
|---|---:|---:|---:|---:|---:|
| keyword | 0 | n/a | n/a | 0/0 | 0/0 |
| auto | 0 | n/a | n/a | 0/0 | 0/0 |

### Bluebook lint on search-result citation lines

| Issue | Hits |
|---|---:|

## Good-law detail

| Group | Rows | Truth | Perfect | Caught / kept clean | Unresolved |
|---|---:|---|---:|---:|---:|

Status values seen: .

Presumed-good cases the API flags negative (0) are listed in `problems-goodlaw.md` with the negative citation it relied on, for a lawyer to confirm.

## Bluebook off-cite detail

| Defect | Rows | Perfect | Verdict wrong | No correction | Locator | Year | Court | Case name |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| reporter_spacing | 50 | 46 | 2 | 0 | 1 | 0 | 0 | 2 |
| ordinal_form | 50 | 41 | 1 | 0 | 3 | 0 | 1 | 8 |
| reporter_no_periods | 50 | 45 | 1 | 0 | 1 | 0 | 1 | 3 |
| reporter_lowercase | 50 | 37 | 2 | 0 | 2 | 0 | 2 | 7 |
| v_form | 50 | 41 | 2 | 0 | 0 | 0 | 1 | 6 |
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
| bluebook_variant | 71 | 69 | 1 | 1 |
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

By court group: .
