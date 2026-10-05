# Search — per-query problems

Run `2026-10-05-keyword`. 1499 of 4164 graded rows have at least one problem. Every row below names what is wrong with *that* case.

| Id | Scope | Type | Query | Problems |
|---|---|---|---|---|
| LF-BS-0002 | one_state_plus_federal CA | keyword | bystand! /p "zone of danger" | **empty**: no results<br>**landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-0003 | one_state MD 2020-01-01– | keyword | homestead /p devise & "surviving spouse" | **empty**: no results |
| LF-BS-0004 | one_state MN 2023-01-01– | keyword | "punitive damages" w/s "due process" | **empty**: no results |
| LF-BS-0008 | one_state_plus_federal OK | keyword | "equitable distribution" & "nonmarital" % criminal | **empty**: no results |
| LF-BS-0013 | federal_circuit 1 1990-01-01–2010-12-31 | keyword | apprendi /s jury | **after_dateTo**: #10 2013-06-17 > 2010-12-31 |
| LF-BS-0019 | federal_circuit 4 | keyword | (retaliation OR "protected activity") /s "materially adverse" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-0024 | one_state_plus_federal NY | keyword | (brady OR "exculpatory evidence") AND suppress! NOT civil | **boolean_not_violated**: Strickler v. Greene — contains excluded term(s): civil |
| LF-BS-0025 | all_states | keyword | "market share liability" w/s des | **out_of_scope**: #4 Bortell v. Eli Lilly and Co. — District Court, District of Columbia (federal_court_in_state_scope)<br>**out_of_scope**: #6 In re DES Cases — District Court, E.D. New York (federal_court_in_state_scope)<br>**landmark_missing**: wanted /sindell\|hymowitz/ in top 10 |
| LF-BS-0028 | federal_circuit 9 | keyword | ("likelihood of confusion" OR "sleekcraft factors") /s trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-0031 | federal_circuit 5 | keyword | "economic substance" & "business purpose" % criminal | **empty**: no results<br>**landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-0035 | one_state MT 2000-01-01–2009-12-31 | keyword | religio! /25 burden | **duplicate_hit**: #3 Hofer v. DPHHS 2005 MT 302 |
| LF-BS-0036 | us_supreme_court | keyword | "actual malice" w/s "public figure" | **boolean_unsatisfied**: New York Times Co. v. Sullivan — required terms/proximity not met in full text |
| LF-BS-0044 | all_states 2023-01-01– | keyword | "strict liability" AND "design defect" AND "unreasonably dangerous" | **out_of_scope**: #2 Encompass Insurance Company v. Samsung Electronics America,  — District Court, S.D. Indiana (federal_court_in_state_scope)<br>**out_of_scope**: #3 Groth v. Ceska Zbrojovka Defence SE — District Court, D. Arizona (federal_court_in_state_scope)<br>**out_of_scope**: #5 Harvard v. Sig Sauer, Inc. — District Court, N.D. Georgia (federal_court_in_state_scope)<br>**out_of_scope**: #6 Allstate Vehicle and Property Insurance Co. v. Samsung Elect — District Court, N.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #7 Demanget v. Samsung Electronics America, Inc., A New Jersey  — District Court, M.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #9 Smith v. Link Snacks, Inc. — District Court, E.D. California (federal_court_in_state_scope) |
| LF-BS-0047 | one_state_plus_federal CA 2020-01-01– | keyword | "dog bite" +s "strict liability" | **empty**: no results |
| LF-BS-0048 | one_state NY 2000-01-01–2009-12-31 | keyword | "equitable distribution" AND "nonmarital" AND NOT criminal | **boolean_unsatisfied**: Cassara v. Cassara — required terms/proximity not met in full text |
| LF-BS-0050 | all_states 2023-01-01– | keyword | "transitory foreign substance" w/15 ("actual or constructive knowledge" or premises) | **out_of_scope**: #1 Corrales v. Walmart Stores East, LP — District Court, M.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #3 Ortiz v. Walmart Stores East, LP — District Court, M.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #5 Siegal v. Holiday CVS, L.L.C. — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #7 Hughes v. Wal-Mart Stores East, LP — District Court, S.D. Florida (federal_court_in_state_scope) |
| LF-BS-0054 | federal_circuit 4 | keyword | "automatic stay" w/s "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-0055 | one_state_plus_federal OH | keyword | jeopard! /25 "multiple punishments" | **landmark_missing**: wanted /blockburger\|united states v\. dixon\|gamble\|brown v\. ohio/ in top 10 |
| LF-BS-0056 | federal_district NC | keyword | "preferential transfer" AND "ordinary course" AND NOT criminal | **empty**: no results |
| LF-BS-0057 | one_state DE | keyword | "business judgment rule" & "duty of care" % criminal | **landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-0060 | one_state_plus_federal FL –1999-12-31 | keyword | "vacate the arbitration award" & "exceeded their powers" % criminal | **empty**: no results |
| LF-BS-0071 | one_state OR –1999-12-31 | keyword | "additional insured" & "arising out of" % criminal | **empty**: no results |
| LF-BS-0072 | one_state_plus_federal AZ | keyword | ("ineffective assistance of counsel" OR "deficient performance") AND "reasonable probability" NOT civil | **boolean_not_violated**: Strickland v. Washington — contains excluded term(s): civil |
| LF-BS-0074 | one_state_plus_federal NY 2000-01-01–2009-12-31 | keyword | foresee! /25 "intervening cause" | **empty**: no results |
| LF-BS-0078 | federal_circuit federal –1999-12-31 | keyword | retaliation /s "materially adverse" | **empty**: no results |
| LF-BS-0079 | federal_district FL 2000-01-01–2009-12-31 | keyword | "excited utterance" w/p hearsay and "startling event" | **empty**: no results |
| LF-BS-0080 | one_state_plus_federal CT | keyword | "anticipatory repudiation" & repudiat! % criminal | **empty**: no results |
| LF-BS-0083 | one_state_plus_federal ND | keyword | "cell-site location" /s warrant | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-0089 | one_state_plus_federal NC | keyword | "quiet title" & deed % criminal | **empty**: no results |
| LF-BS-0096 | one_state WY | keyword | "market share liability" w/p des and manufacturer | **empty**: no results |
| LF-BS-0105 | federal_circuit dc 2000-01-01–2009-12-31 | keyword | plausib! /25 "factual allegations" | **empty**: no results |
| LF-BS-0108 | all_states | keyword | "social host" w/p intoxicat! and "guest" | **empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query<br>**landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-0110 | one_state_plus_federal OH 2000-01-01–2009-12-31 | keyword | "equitable indemnity" w/15 (contribution or tortfeasor) | **empty**: no results |
| LF-BS-0113 | all_states 2015-01-01– | keyword | "comparative negligence" +s "contributory negligence" | **out_of_scope**: #5 GOSSELIN v. PASSAIC VALLEY SEWERAGE COMMISSION — District Court, D. New Jersey (federal_court_in_state_scope)<br>**out_of_scope**: #6 New Prime, Inc., a Nebraska Corporation v. McGriff Insurance — District Court, W.D. Missouri (federal_court_in_state_scope)<br>**out_of_scope**: #7 Armbruster v. Eskola — District Court, M.D. Pennsylvania (federal_court_in_state_scope)<br>**out_of_scope**: #8 Stinson, Deyontae v. Schueler, Renee — District Court, W.D. Wisconsin (federal_court_in_state_scope)<br>**out_of_scope**: #10 Igwemadu v. United States — District Court, Virgin Islands (federal_court_in_state_scope) |
| LF-BS-0115 | one_state NE | keyword | "res judicata" w/p "final judgment" and "same cause of action" | **duplicate_hit**: #9 Pipe & Piling Supplies (U.S.A.), Ltd. v. Betterman & Katelma 596 N.W.2d 24 |
| LF-BS-0119 | one_state MT | keyword | "forum non conveniens" w/p "private interest" and "public interest" | **empty**: no results |
| LF-BS-0120 | us_supreme_court 1990-01-01–2010-12-31 | keyword | "fair use" +s copyright | **boolean_unsatisfied**: New York Times Co. v. Tasini — required terms/proximity not met in full text |
| LF-BS-0125 | all_federal | keyword | "diversity jurisdiction" AND "amount in controversy" AND NOT bankruptcy | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-0126 | one_state NC | keyword | "negligent infliction of emotional distress" /10 "zone of danger" | **empty**: no results |
| LF-BS-0133 | one_state_plus_federal CA | keyword | "age discrimination" +s "but-for" | **landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10 |
| LF-BS-0138 | one_state IL | keyword | "vacate the arbitration award" & "exceeded their powers" % criminal | **empty**: no results |
| LF-BS-0141 | one_state DE | keyword | "business judgment rule" /10 "duty of care" | **landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-0144 | federal_circuit 2 | keyword | "free exercise" & "neutral and generally applicable" % contract | **empty**: no results<br>**landmark_missing**: wanted /employment div\|smith\|lukumi\|fulton\|kennedy v\. bremerton\|tandon\|masterpiece\|hobby lobby/ in top 10 |
| LF-BS-0146 | federal_circuit 3 | keyword | nonmov! /p "genuine dispute" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-0148 | all_states_and_federal 2020-01-01– | keyword | "force majeure" /10 frustration | **result_missing_court**: #2 CEC Entertainment, Inc. (no cite) |
| LF-BS-0151 | one_state VA 1990-01-01–2010-12-31 | keyword | ("intentional infliction of emotional distress" OR "outrageous conduct") /s "extreme and outrageous" | **empty**: no results |
| LF-BS-0152 | federal_district MI | keyword | "default judgment" & "excusable neglect" % criminal | **empty**: no results |
| LF-BS-0153 | federal_district IL | keyword | "motion to dismiss" w/15 (plausib! or "factual allegations") | **empty**: no results |
| LF-BS-0154 | all_states 2023-01-01– | keyword | ("res judicata" OR "claim preclusion") AND "same cause of action" NOT criminal | **out_of_scope**: #3 Mason v. Bank of America, N.A. — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #5 Kahler v. Walmart, Inc. — District Court, D. Colorado (federal_court_in_state_scope)<br>**out_of_scope**: #6 Edwards v. Houser — District Court, M.D. Pennsylvania (federal_court_in_state_scope)<br>**out_of_scope**: #9 Certain Underwriters at Lloyds, London that Subscribe to Cer — District Court, E.D. Pennsylvania (federal_court_in_state_scope) |
| LF-BS-0155 | one_state MA | keyword | intoxica! /25 "driving under the influence" | **empty**: no results |
| LF-BS-0156 | one_state NJ | keyword | "attorney-client privilege" & waiv! % immigration | **empty**: no results |
| LF-BS-0160 | one_state OH | keyword | "creditor's claim" & "personal representative" % criminal | **empty**: no results |
| LF-BS-0170 | all_states_and_federal | keyword | "diversity jurisdiction" /10 "amount in controversy" | **result_missing_court**: #2 Crawford v. Ford Motor Company (no cite)<br>**result_missing_court**: #8 Swaine v. XPO Logistics Freight, Inc. et al. (no cite)<br>**landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-0172 | one_state TN 2015-01-01– | keyword | "transitory foreign substance" AND "actual or constructive knowledge" AND NOT medical | **empty**: no results |
| LF-BS-0178 | federal_district OH | keyword | "crime involving moral turpitude" /s "categorical approach" | **empty**: no results |
| LF-BS-0180 | all_states –1999-12-31 | keyword | "open and obvious" w/15 (invitee or "duty to warn") | **boolean_unsatisfied**: Rowland v. Christian — required terms/proximity not met in full text |
| LF-BS-0184 | federal_circuit 5 | keyword | obviousness & "prior art" % criminal | **empty**: no results<br>**landmark_missing**: wanted /ksr\|graham v\. john deere/ in top 10 |
| LF-BS-0189 | one_state AK 2015-01-01– | keyword | "promissory estoppel" w/15 ("clear and definite promise" or reliance) | **empty**: no results |
| LF-BS-0191 | one_state OH | keyword | interfer! /25 justif! | **empty**: no results |
| LF-BS-0193 | one_state AK 2000-01-01–2009-12-31 | keyword | foreclos! /25 "holder of the note" | **empty**: no results |
| LF-BS-0194 | one_state_plus_federal FL 1990-01-01–2010-12-31 | keyword | "confrontation clause" /p testimonial & cross-examin! | **after_dateTo**: #1 2011-02-28 > 2010-12-31 |
| LF-BS-0204 | federal_circuit 1 | keyword | retaliation w/15 ("materially adverse" or "causal connection") | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-0207 | us_supreme_court | keyword | "claim construction" /p specification & "intrinsic evidence" | **landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-0209 | federal_circuit 6 | keyword | "age discrimination" & "but-for" % criminal | **empty**: no results<br>**landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10 |
| LF-BS-0211 | all_federal 2000-01-01–2009-12-31 | keyword | abstention /s "pending state" | **duplicate_hit**: #3 Zahl v. Harper 282 F.3d 204 |
| LF-BS-0212 | all_federal | keyword | "motion to dismiss" & plausib! % habeas | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-0213 | all_states_and_federal | keyword | "malicious prosecution" AND "probable cause" AND NOT contract | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-0222 | all_states_and_federal –1999-12-31 | keyword | ("fraudulent joinder" OR "improper joinder") /s remand | **result_missing_court**: #2 Cabalceta v. Standard Fruit Co. (883 F.2d 1553)<br>**result_missing_court**: #5 Winburn v. Liberty Mutual Insurance (933 F. Supp. 664)<br>**result_missing_court**: #6 Rossbach v. Lorillard, Inc. (71 F. Supp. 2d 221)<br>**result_missing_court**: #7 Gottlieb v. Westin Hotel Co. (990 F.2d 323)<br>**result_missing_court**: #8 Updike v. West (172 F.2d 663) |
| LF-BS-0223 | all_states_and_federal | keyword | "proportional to the needs of the case" & discovery % habeas | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query |
| LF-BS-0226 | one_state_plus_federal NH 2020-01-01– | keyword | "tortious interference" w/15 ("business relationship" or justif!) | **empty**: no results |
| LF-BS-0228 | one_state CA | keyword | "bad faith" /s insurer | **landmark_missing**: wanted /comunale\|crisci\|gruenberg\|egan v\. mutual/ in top 10 |
| LF-BS-0229 | one_state MI 2000-01-01–2009-12-31 | keyword | "transitory foreign substance" /s "actual or constructive knowledge" | **empty**: no results |
| LF-BS-0230 | federal_circuit dc | keyword | "prior bad acts" /10 "other crimes" | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-0231 | all_federal | keyword | condemn! /p "just compensation" | **landmark_missing**: wanted /kelo\|berman v\. parker\|hawaii housing\|midkiff/ in top 10 |
| LF-BS-0233 | all_federal | keyword | "cell-site location" +s warrant | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-0236 | all_states_and_federal | keyword | "cell-site location" & warrant % civil | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-0237 | all_federal | keyword | "prior bad acts" w/p "other crimes" and propensity | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-0240 | all_states | keyword | "duty to warn" /p psychotherapist & "identifiable victim" | **landmark_missing**: wanted /tarasoff/ in top 10<br>**boolean_unsatisfied**: Thompson v. County of Alameda — required terms/proximity not met in full text |
| LF-BS-0243 | one_state FL 2000-01-01–2009-12-31 | keyword | "procedural due process" w/15 ("property interest" or deprivat!) | **empty**: no results |
| LF-BS-0246 | one_state CA 2000-01-01–2009-12-31 | keyword | "demand futility" +s "demand excused" | **empty**: no results |
| LF-BS-0250 | one_state_plus_federal UT –1999-12-31 | keyword | pierc! /p undercapitaliz! | **empty**: no results |
| LF-BS-0256 | all_federal | keyword | erisa w/15 ("abuse of discretion" or "arbitrary and capricious") | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-0259 | federal_district NY | keyword | "preferential transfer" +s "ordinary course" | **empty**: no results |
| LF-BS-0264 | one_state WA | keyword | relocat! /25 "best interests of the child" | **empty**: no results |
| LF-BS-0266 | all_states | keyword | "second amendment" AND "historical tradition" AND firearm | **out_of_scope**: #5 Arms v. City of Chicago — District Court, N.D. Illinois (federal_court_in_state_scope) |
| LF-BS-0271 | one_state CA 2000-01-01–2009-12-31 | keyword | "market share liability" +s des | **empty**: no results |
| LF-BS-0273 | all_states | keyword | invitee +s trespasser | **duplicate_hit**: #9 Gladon v. Greater Cleveland Regional Transit Auth. 75 Ohio St. 3d 312<br>**landmark_missing**: wanted /rowland v\. christian/ in top 10 |
| LF-BS-0275 | us_supreme_court 2020-01-01– | keyword | ("collateral estoppel" OR "issue preclusion") AND "full and fair opportunity" NOT patent | **empty**: no results |
| LF-BS-0276 | us_supreme_court | keyword | "loss causation" /p "inflated price" & "economic loss" | **empty**: no results<br>**landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-0283 | federal_district CA | keyword | "res judicata" & "final judgment" % criminal | **empty**: no results |
| LF-BS-0286 | one_state LA | keyword | "force majeure" /s frustration | **empty**: no results |
| LF-BS-0287 | one_state OH 2020-01-01– | keyword | "anticipatory repudiation" /s repudiat! | **empty**: no results |
| LF-BS-0290 | federal_circuit 9 | keyword | "likelihood of confusion" /s trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-0295 | one_state MA | keyword | "promissory estoppel" w/p "clear and definite promise" and reliance | **empty**: no results |
| LF-BS-0298 | one_state NY | keyword | "forum non conveniens" w/s "private interest" | **empty**: no results |
| LF-BS-0300 | federal_district NH | keyword | "fair use" w/p copyright and "market harm" | **empty**: no results |
| LF-BS-0303 | federal_district AL | keyword | "economic substance" /s "business purpose" | **empty**: no results |
| LF-BS-0306 | all_federal | keyword | "arbitrary and capricious" w/15 (agency or "administrative record") | **landmark_missing**: wanted /state farm\|motor vehicle mfrs\|overton park\|dhs v\. regents\|fcc v\. fox\|encino/ in top 10 |
| LF-BS-0312 | one_state TX | keyword | capaci! /25 "natural objects of his bounty" | **empty**: no results |
| LF-BS-0313 | one_state NJ 1990-01-01–2010-12-31 | keyword | "parol evidence rule" w/s integrat! | **empty**: no results |
| LF-BS-0314 | one_state ND | keyword | "negligence per se" w/s "class of persons" | **empty**: no results |
| LF-BS-0315 | all_federal | keyword | cramdown +s "absolute priority rule" | **landmark_missing**: wanted /bank of am\|203 n\. lasalle\|till v\. sct\|radlax\|czyzewski/ in top 10 |
| LF-BS-0316 | all_states_and_federal 2000-01-01–2009-12-31 | keyword | obviousness /s "prior art" | **result_missing_court**: #7 Eurand, Inc. v. Mylan Pharmaceuticals, Inc. (263 F.R.D. 136)<br>**result_missing_court**: #9 Johnson & Johnson Vision Care, Inc. v. CIBA VISION CORPORATI (616 F. Supp. 2d 1250) |
| LF-BS-0319 | one_state TX 2020-01-01– | keyword | "preliminary injunction" w/p "irreparable harm" and "likelihood of success" | **empty**: no results |
| LF-BS-0322 | one_state CA | keyword | "social host" +s intoxicat! | **empty**: no results |
| LF-BS-0324 | one_state MN 2020-01-01– | keyword | "restrictive covenant" w/15 ("homeowners association" or enforc!) | **empty**: no results |
| LF-BS-0328 | one_state KY | keyword | "market share liability" & des % contract | **empty**: no results |
| LF-BS-0339 | federal_district ID | keyword | "second amendment" & "historical tradition" % contract | **empty**: no results |
| LF-BS-0347 | one_state_plus_federal MO | keyword | ("prior bad acts" OR "404(b)") /s "other crimes" | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-0348 | one_state VA | keyword | "proximate cause" /p foreseeab! & "intervening cause" | **empty**: no results |
| LF-BS-0350 | all_states_and_federal | keyword | "informed consent" /s "material risk" | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-0351 | one_state MN | keyword | "cohabitation" w/15 ("express contract" or implied) | **empty**: no results |
| LF-BS-0354 | one_state MS 2015-01-01– | keyword | "implied covenant of good faith and fair dealing" /s discretion | **empty**: no results |
| LF-BS-0355 | one_state_plus_federal NJ | keyword | "prenuptial agreement" w/15 ("full disclosure" or unconscionab!) | **empty**: no results |
| LF-BS-0358 | one_state FL –1999-12-31 | keyword | ("promissory estoppel" OR "detrimental reliance") /s "clear and definite promise" | **empty**: no results |
| LF-BS-0359 | one_state OH | keyword | "creditor's claim" & "personal representative" % criminal | **empty**: no results |
| LF-BS-0364 | one_state VT | keyword | "social host" /10 intoxicat! | **empty**: no results |
| LF-BS-0368 | one_state LA | keyword | liquidat! /p penalty | **empty**: no results |
| LF-BS-0369 | one_state NJ | keyword | "anticipatory repudiation" w/15 (repudiat! or "adequate assurance") | **empty**: no results |
| LF-BS-0372 | one_state_plus_federal KY | keyword | "malicious prosecution" w/s "probable cause" | **boolean_unsatisfied**: Illinois v. Gates — required terms/proximity not met in full text |
| LF-BS-0374 | federal_circuit 9 | keyword | "likelihood of confusion" /s trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-0375 | one_state_plus_federal RI 2020-01-01– | keyword | relocat! /25 "best interests of the child" | **empty**: no results |
| LF-BS-0376 | one_state_plus_federal CA | keyword | ("informed consent" OR "lack of informed consent") /s "material risk" | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-0377 | one_state_plus_federal FL | keyword | "parol evidence rule" w/15 (integrat! or ambigu!) | **empty**: no results |
| LF-BS-0379 | one_state FL | keyword | "child support" & imput! % criminal | **empty**: no results |
| LF-BS-0381 | one_state CA | keyword | "duty to warn" AND psychotherapist AND "identifiable victim" | **landmark_missing**: wanted /tarasoff/ in top 10 |
| LF-BS-0386 | one_state TX | keyword | "demand futility" w/s "demand excused" | **empty**: no results |
| LF-BS-0388 | one_state_plus_federal LA | keyword | "proximate cause" /s foreseeab! | **empty**: no results |
| LF-BS-0389 | one_state_plus_federal IL | keyword | "trade secret" & "reasonable measures" % criminal | **empty**: no results |
| LF-BS-0390 | federal_circuit 1 | keyword | "motion to dismiss" w/15 (plausib! or "factual allegations") | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-0391 | one_state_plus_federal GA 2000-01-01–2009-12-31 | keyword | "dog bite" w/s "strict liability" | **empty**: no results |
| LF-BS-0401 | one_state_plus_federal UT | keyword | "implied consent" w/15 (refus! or "driving under the influence") | **landmark_missing**: wanted /birchfield\|missouri v\. mcneely\|mitchell v\. wisconsin/ in top 10 |
| LF-BS-0402 | federal_circuit 5 | keyword | removab! /p "categorical approach" | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-0405 | all_federal | keyword | nondischargeab! /p "false pretenses" & debtor | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-0406 | one_state AZ –1999-12-31 | keyword | "preliminary injunction" & "irreparable harm" % divorce | **empty**: no results |
| LF-BS-0407 | all_federal | keyword | "motion to compel arbitration" +s unconscionab! | **landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-0414 | federal_circuit 3 | keyword | "likelihood of confusion" AND trademark AND NOT criminal | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-0416 | all_states | keyword | "proportional to the needs of the case" w/p discovery and "undue burden" | **out_of_scope**: #1 Securities and Exchange Commission v. John S. Clayton, First — District Court, D. Utah (federal_court_in_state_scope)<br>**out_of_scope**: #2 Goodnight v. Hammons — District Court, W.D. Oklahoma (federal_court_in_state_scope)<br>**out_of_scope**: #3 Gondola v. USMD PPM, LLC — District Court, N.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #4 Vinci Brands LLC v. Coach Services, Inc., Kate Spade, LLC, T — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #5 Crumidy v. Wramage-Caporoso — District Court, D. New Jersey (federal_court_in_state_scope)<br>**out_of_scope**: #6 In re: Asher Homes, LLC; Justin Fengler and Marissa Fengler, — United States Bankruptcy Court, N.D. Oklahoma (federal_court_in_state_scope)<br>**out_of_scope**: #7 Bourell v. Ronscavage — District Court, D. Connecticut (federal_court_in_state_scope) |
| LF-BS-0417 | one_state_plus_federal PA 2020-01-01– | keyword | insur! /p insurer | **empty**: no results |
| LF-BS-0419 | one_state MD 1990-01-01–2010-12-31 | keyword | "general jurisdiction" w/s "at home" | **empty**: no results |
| LF-BS-0420 | one_state_plus_federal TX | keyword | "equitable distribution" w/s "nonmarital" | **empty**: no results |
| LF-BS-0422 | federal_district IN 2000-01-01–2009-12-31 | keyword | apprendi +s jury | **empty**: no results |
| LF-BS-0424 | all_states | keyword | "procedural due process" AND "property interest" AND deprivat! | **out_of_scope**: #3 Kingston v. Gregory Strange, Frank Caridi, Kevin Greiner, St — District Court, D. Massachusetts (federal_court_in_state_scope)<br>**out_of_scope**: #6 Gallo v. District of Columbia — District Court, District of Columbia (federal_court_in_state_scope)<br>**out_of_scope**: #9 Lotts v. Rich — District Court, M.D. Florida (federal_court_in_state_scope) |
| LF-BS-0426 | federal_circuit 6 | keyword | scienter & "rule 10b-5" % criminal | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-0427 | one_state WA | keyword | homestead & devise % criminal | **empty**: no results |
| LF-BS-0436 | one_state AZ | keyword | ("liquidated damages" OR "liquidated damages clause") AND "reasonable forecast" NOT criminal | **duplicate_hit**: #3 MECHANICAL AIR ENGINEER. v. Totem Const. 801 P.2d 426 |
| LF-BS-0439 | one_state NY 2023-01-01– | keyword | "forum non conveniens" & "private interest" % arbitration | **empty**: no results |
| LF-BS-0440 | all_federal | keyword | estop! /25 "full and fair opportunity" | **landmark_missing**: wanted /parklane\|blonder-tongue\|b & b hardware\|montana v\. united states/ in top 10 |
| LF-BS-0441 | federal_circuit 10 | keyword | "rule of reason" AND "anticompetitive effects" AND NOT criminal | **landmark_missing**: wanted /leegin\|ohio v\. am\|american express\|state oil\|alston\|continental t\.v\|bmi\|broad\. music/ in top 10 |
| LF-BS-0443 | one_state AR 2023-01-01– | keyword | "pierce the corporate veil" AND undercapitaliz! AND "corporate form" | **empty**: no results |
| LF-BS-0444 | one_state MT | keyword | "second amendment" & "historical tradition" % contract | **empty**: no results |
| LF-BS-0445 | one_state PA | keyword | "force majeure" +s frustration | **empty**: no results |
| LF-BS-0446 | one_state_plus_federal NJ | keyword | "pierce the corporate veil" /s undercapitaliz! | **empty**: no results |
| LF-BS-0447 | one_state CA | keyword | "market share liability" /10 des | **landmark_missing**: wanted /sindell\|hymowitz/ in top 10 |
| LF-BS-0449 | federal_circuit 7 | keyword | scienter w/p "rule 10b-5" and pslra | **landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-0450 | all_states_and_federal | keyword | "automatic stay" /p "section 362" & debtor | **result_missing_court**: #3 In re Wood (590 B.R. 120)<br>**landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-0452 | all_states_and_federal | keyword | disclos! /25 physician | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-0455 | all_states_and_federal | keyword | abstention +s "pending state" | **duplicate_hit**: #3 Zahl v. Harper 282 F.3d 204<br>**result_missing_court**: #7 Demetrious Lowe and Trayvond Burton v. City of Brookfield, J (no cite)<br>**landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-0458 | one_state_plus_federal WI | keyword | "bad faith" AND insurer AND "failure to settle" | **duplicate_hit**: #7 TRANSPORT v. Liberty Mut. Ins. Co. 2010 WI 49 |
| LF-BS-0459 | one_state_plus_federal WY 2000-01-01–2009-12-31 | keyword | "implied consent" w/15 (refus! or "driving under the influence") | **empty**: no results |
| LF-BS-0460 | one_state AL | keyword | "res ipsa loquitur" & inference % contract | **empty**: no results |
| LF-BS-0462 | all_states_and_federal | keyword | "intentional infliction of emotional distress" w/15 ("extreme and outrageous" or "severe emotional distress") | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-0466 | one_state CO 2000-01-01–2009-12-31 | keyword | "liquidated damages" /p penalty & "reasonable forecast" | **empty**: no results |
| LF-BS-0468 | one_state_plus_federal NJ 2020-01-01– | keyword | "free exercise" +s "neutral and generally applicable" | **boolean_unsatisfied**: United States v. Sineneng-Smith — required terms/proximity not met in full text |
| LF-BS-0475 | one_state WV | keyword | guardianship w/p ward and "least restrictive" | **empty**: no results |
| LF-BS-0477 | federal_district NJ 1990-01-01–2010-12-31 | keyword | obviousness & "prior art" % criminal | **empty**: no results |
| LF-BS-0480 | one_state DC | keyword | homestead AND devise AND "surviving spouse" | **empty**: no results |
| LF-BS-0482 | all_federal | keyword | nondischargeab! AND "false pretenses" AND debtor | **landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-0484 | one_state NE | keyword | "procedural due process" w/15 ("property interest" or deprivat!) | **empty**: no results |
| LF-BS-0490 | federal_district MI | keyword | substan! /p "business purpose" | **empty**: no results |
| LF-BS-0492 | one_state_plus_federal KY –1999-12-31 | keyword | ("reasonable accommodation" OR "undue hardship") /s "interactive process" | **empty**: no results |
| LF-BS-0495 | one_state NH –1999-12-31 | keyword | "proportional to the needs of the case" +s discovery | **empty**: no results |
| LF-BS-0497 | one_state_plus_federal NY 2015-01-01– | keyword | foresee! /25 "intervening cause" | **empty**: no results |
| LF-BS-0498 | one_state_plus_federal AZ 2020-01-01– | keyword | intoxica! /25 "driving under the influence" | **empty**: no results |
| LF-BS-0499 | federal_circuit 6 | keyword | "motion to dismiss" w/p plausib! and "factual allegations" | **landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-0500 | one_state CT 2020-01-01– | keyword | premis! /25 "duty to warn" | **empty**: no results |
| LF-BS-0503 | federal_circuit 3 2023-01-01– | keyword | "economic substance" /p "business purpose" & commissioner | **empty**: no results |
| LF-BS-0504 | federal_circuit 7 2000-01-01–2009-12-31 | keyword | substan! /25 commissioner | **boolean_unsatisfied**: Skarbek, Norbert v. Barnhart, Jo Anne — required terms/proximity not met in full text |
| LF-BS-0506 | federal_circuit federal 2015-01-01– | keyword | municipal! /25 "deliberate indifference" | **empty**: no results |
| LF-BS-0511 | all_states_and_federal | keyword | "crime involving moral turpitude" AND "categorical approach" AND NOT contract | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-0515 | all_states_and_federal | keyword | survivor! /25 decedent | **result_missing_court**: #2 Gibson v. City of Chicago (910 F.2d 1510) |
| LF-BS-0516 | one_state IL | keyword | homestead AND devise AND NOT criminal | **boolean_unsatisfied**: Hall v. Turney — required terms/proximity not met in full text<br>**boolean_unsatisfied**: White v. Bates — required terms/proximity not met in full text |
| LF-BS-0517 | one_state NJ 2000-01-01–2009-12-31 | keyword | "testamentary capacity" +s testator | **empty**: no results |
| LF-BS-0519 | federal_district DC 2023-01-01– | keyword | "trade secret" /s "reasonable measures" | **empty**: no results |
| LF-BS-0521 | one_state OH | keyword | foreclosure & standing % criminal | **empty**: no results |
| LF-BS-0522 | federal_circuit 10 –1999-12-31 | keyword | "age discrimination" w/s "but-for" | **duplicate_hit**: #10 62 Fair empl.prac.cas. 1289, 62 Empl. Prac. Dec. P 42,536 He 3 F.3d 1419 |
| LF-BS-0526 | one_state ME | keyword | "prenuptial agreement" w/15 ("full disclosure" or unconscionab!) | **empty**: no results |
| LF-BS-0531 | one_state NM 2015-01-01– | keyword | "statute of frauds" w/15 ("part performance" or writing) | **empty**: no results |
| LF-BS-0532 | one_state KS | keyword | "anticipatory repudiation" +s repudiat! | **empty**: no results |
| LF-BS-0533 | federal_circuit 2 | keyword | deference & "statutory ambiguity" % criminal | **empty**: no results<br>**landmark_missing**: wanted /loper bright\|chevron\|skidmore\|kisor\|auer\|mead/ in top 10 |
| LF-BS-0534 | one_state NJ 2000-01-01–2009-12-31 | keyword | ("creditor's claim" OR "claim against the estate") /s "personal representative" | **empty**: no results |
| LF-BS-0535 | federal_district RI 1990-01-01–2010-12-31 | keyword | "regulatory taking" /10 "investment-backed expectations" | **empty**: no results |
| LF-BS-0539 | federal_circuit 11 –1999-12-31 | keyword | "punitive damages" & "due process" % patent | **empty**: no results |
| LF-BS-0540 | us_supreme_court | keyword | "procedural due process" AND "property interest" AND deprivat! | **boolean_unsatisfied**: Mullane v. Central Hanover Bank & Trust Co. — required terms/proximity not met in full text |
| LF-BS-0542 | federal_circuit 7 | keyword | "loss causation" /10 "inflated price" | **landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-0544 | federal_district NJ | keyword | nondischargeab! w/p "false pretenses" and debtor | **empty**: no results |
| LF-BS-0547 | federal_circuit 1 | keyword | erisa +s "abuse of discretion" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-0552 | all_states | keyword | ("design defect" OR "strict liability") /s "consumer expectations" | **out_of_scope**: #8 Perez v. Apyx Medical Corporation — District Court, N.D. California (federal_court_in_state_scope)<br>**out_of_scope**: #10 Kirkland v. Emhart Glass S.A. — District Court, W.D. Washington (federal_court_in_state_scope)<br>**landmark_missing**: wanted /tincher\|azzarello/ in top 10<br>**boolean_unsatisfied**: Greenman v. Yuba Power Products, Inc. — required terms/proximity not met in full text |
| LF-BS-0553 | federal_district MO 2000-01-01–2009-12-31 | keyword | "qualified immunity" & "constitutional right" % contract | **empty**: no results |
| LF-BS-0559 | all_federal | keyword | erisa /10 "abuse of discretion" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-0560 | one_state AR 2015-01-01– | keyword | "cohabitation" AND "express contract" AND NOT criminal | **empty**: no results |
| LF-BS-0561 | one_state ND 2015-01-01– | keyword | "comparative negligence" & "contributory negligence" % contract | **empty**: no results |
| LF-BS-0562 | one_state DC 2015-01-01– | keyword | ("anticipatory repudiation" OR "anticipatory breach") AND "adequate assurance" NOT criminal | **empty**: no results |
| LF-BS-0566 | federal_district AL | keyword | ("patent eligible" OR "abstract idea") /s "section 101" | **empty**: no results |
| LF-BS-0567 | all_states 2023-01-01– | keyword | "rule 11" +s sanction! | **out_of_scope**: #3 Schiller v. Wisconsin, Sheila Reiff, Lisa Friedrich, Shane F — District Court, W.D. Wisconsin (federal_court_in_state_scope)<br>**out_of_scope**: #4 Bakambia v. Alexandria Hart, Michael Oliveras, and Christine — District Court, D. Minnesota (federal_court_in_state_scope)<br>**out_of_scope**: #6 In re Dexilant (Dexlansoprazole) Antitrust Litigation — District Court, N.D. California (federal_court_in_state_scope)<br>**out_of_scope**: #7 Hack v. Daniel M. Preston a/k/a Daniel Preston Martin, Jeffr — District Court, D. Utah (federal_court_in_state_scope)<br>**out_of_scope**: #8 Johnson v. David Mazie, Esq. — District Court, D. New Jersey (federal_court_in_state_scope)<br>**out_of_scope**: #9 Smith v. Brown — District Court, W.D. Michigan (federal_court_in_state_scope) |
| LF-BS-0569 | federal_district WY | keyword | cramdown w/15 ("absolute priority rule" or "fair and equitable") | **empty**: no results |
| LF-BS-0571 | federal_circuit 7 | keyword | "loss causation" w/s "inflated price" | **landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-0572 | one_state_plus_federal WA 2020-01-01– | keyword | ("adverse possession" OR "hostile possession") /s "open and notorious" | **empty**: no results |
| LF-BS-0573 | one_state_plus_federal GA | keyword | "cohabitation" /p "express contract" & implied | **empty**: no results |
| LF-BS-0574 | one_state GA | keyword | "cell-site location" & warrant % civil | **empty**: no results |
| LF-BS-0583 | all_states | keyword | foreclosure w/15 (standing or "holder of the note") | **out_of_scope**: #8 In re Foreclosure Cases — District Court, S.D. Ohio (federal_court_in_state_scope) |
| LF-BS-0585 | all_states | keyword | homestead w/15 (devise or "surviving spouse") | **out_of_scope**: #10 In re Sanon — United States Bankruptcy Court, M.D. Florida (federal_court_in_state_scope) |
| LF-BS-0587 | one_state WY | keyword | "pierce the corporate veil" w/s undercapitaliz! | **empty**: no results |
| LF-BS-0591 | all_states 2020-01-01– | keyword | "economic loss rule" /s "purely economic" | **out_of_scope**: #3 Green Technology Lighting Corp. v. Insure Idaho, LLC — District Court, D. Idaho (federal_court_in_state_scope)<br>**out_of_scope**: #5 Critical Systems, LLC v. Addison HVAC,LLC — District Court, D. Maryland (federal_court_in_state_scope)<br>**out_of_scope**: #8 MJW Investments, Inc. v. SentryWest Insurance Services, Inc. — District Court, D. Utah (federal_court_in_state_scope)<br>**out_of_scope**: #9 Fuller v. BMO Bank — District Court, C.D. California (federal_court_in_state_scope) |
| LF-BS-0593 | one_state NY | keyword | "trade secret" /p "reasonable measures" & "independent economic value" | **empty**: no results |
| LF-BS-0594 | all_federal | keyword | "age discrimination" /10 "but-for" | **landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10 |
| LF-BS-0596 | federal_district ID | keyword | "attorney-client privilege" +s waiv! | **empty**: no results |
| LF-BS-0599 | one_state IL | keyword | "comparative negligence" & "contributory negligence" % contract | **empty**: no results<br>**landmark_missing**: wanted /alvis v\. ribar/ in top 10 |
| LF-BS-0607 | one_state AL 2000-01-01–2009-12-31 | keyword | "non-compete" /10 "legitimate business interest" | **empty**: no results |
| LF-BS-0609 | one_state NY 2000-01-01–2009-12-31 | keyword | homestead /p devise & "surviving spouse" | **empty**: no results |
| LF-BS-0610 | us_supreme_court | keyword | "crime involving moral turpitude" +s "categorical approach" | **empty**: no results<br>**landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-0611 | one_state AZ | keyword | defen! /p "potential for coverage" | **empty**: no results |
| LF-BS-0612 | one_state MA 2015-01-01– | keyword | defen! /p "potential for coverage" | **empty**: no results |
| LF-BS-0614 | one_state MN 2020-01-01– | keyword | alimony /s modif! | **empty**: no results |
| LF-BS-0616 | all_states 2023-01-01– | keyword | defect! /25 "unreasonably dangerous" | **out_of_scope**: #3 Groth v. Ceska Zbrojovka Defence SE — District Court, D. Arizona (federal_court_in_state_scope)<br>**out_of_scope**: #4 Scruggs v. Walmart Inc. — District Court, E.D. Tennessee (federal_court_in_state_scope)<br>**out_of_scope**: #5 Karwatka v. Bic Corporation — District Court, N.D. Indiana (federal_court_in_state_scope)<br>**out_of_scope**: #6 Mason St. Clair v. Ardagh Metal Packaging USA Corp. and Keur — District Court, M.D. Tennessee (federal_court_in_state_scope)<br>**out_of_scope**: #7 Hawkins v. Kaiser Foundation Health Plan of the Northwest — District Court, D. Oregon (federal_court_in_state_scope)<br>**out_of_scope**: #8 Michael v. FCA US LLC — District Court, D. Arizona (federal_court_in_state_scope)<br>**out_of_scope**: #9 Summers v. FCA US LLC — District Court, E.D. Louisiana (federal_court_in_state_scope) |
| LF-BS-0617 | one_state NC | keyword | "consent to search" & "totality of the circumstances" % civil | **empty**: no results |
| LF-BS-0618 | all_states | keyword | "liquidated damages" w/p penalty and "reasonable forecast" | **out_of_scope**: #8 The Hanover Insurance Company v. Binnacle Development, LLC f — District Court, S.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #9 Iron Workers Local No. 25 Pension Fund v. Quality Steel Fabr — District Court, E.D. Michigan (federal_court_in_state_scope) |
| LF-BS-0621 | one_state DE 2023-01-01– | keyword | "pierce the corporate veil" w/p undercapitaliz! and "corporate form" | **empty**: no results |
| LF-BS-0623 | federal_circuit 5 | keyword | eligib! /p "section 101" | **empty**: no results<br>**landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-0628 | federal_circuit 9 | keyword | "economic substance" /10 "business purpose" | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-0630 | one_state_plus_federal AL | keyword | exculpat! /p material! | **empty**: no results<br>**landmark_missing**: wanted /brady v\. maryland\|giglio\|kyles\|bagley\|strickler\|wearry/ in top 10 |
| LF-BS-0631 | federal_circuit 8 | keyword | "intentional infliction of emotional distress" w/15 ("extreme and outrageous" or "severe emotional distress") | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-0633 | federal_district SD | keyword | firearm! /p "historical tradition" | **empty**: no results |
| LF-BS-0641 | one_state RI | keyword | "proximate cause" /s foreseeab! | **empty**: no results |
| LF-BS-0642 | all_states 2015-01-01– | keyword | domicil! /25 "principal place of business" | **out_of_scope**: #1 3 Brothers Plumbing & Heating LLC v. Desilva — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #2 CTC Inc v. Schneider National Carriers Inc — District Court, W.D. Oklahoma (federal_court_in_state_scope)<br>**out_of_scope**: #3 Lakeside Industries Inc v. General Reinsurance Corporation — District Court, W.D. Washington (federal_court_in_state_scope)<br>**out_of_scope**: #4 Fuller v. American Economy Insurance Company — District Court, D. Colorado (federal_court_in_state_scope)<br>**out_of_scope**: #5 Weisberg v. Chubb Insurance Company — District Court, E.D. Michigan (federal_court_in_state_scope)<br>**out_of_scope**: #6 Shelly Marie Ewert - Adversary Proceeding — United States Bankruptcy Court, N.D. Iowa (federal_court_in_state_scope)<br>**out_of_scope**: #7 Young v. JM Bozeman Enterprises, Inc. — District Court, M.D. Louisiana (federal_court_in_state_scope) |
| LF-BS-0643 | one_state_plus_federal OK | keyword | "statute of limitations" /p "equitable tolling" & "discovery rule" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-0644 | one_state FL | keyword | ("comparative negligence" OR "comparative fault") AND apportion! NOT contract | **landmark_missing**: wanted /hoffman v\. jones/ in top 10 |
| LF-BS-0646 | one_state_plus_federal CA 2023-01-01– | keyword | "demand futility" w/p "demand excused" and board | **empty**: no results |
| LF-BS-0647 | all_federal 2023-01-01– | keyword | utteran! /25 "startling event" | **empty**: no results |
| LF-BS-0649 | one_state_plus_federal CA | keyword | habitab! /25 rent | **empty**: no results<br>**landmark_missing**: wanted /javins\|green v\. superior court/ in top 10 |
| LF-BS-0650 | one_state_plus_federal UT | keyword | "attorney-client privilege" +s waiv! | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-0652 | one_state_plus_federal AK | keyword | "prenuptial agreement" +s "full disclosure" | **empty**: no results |
| LF-BS-0654 | one_state OH | keyword | "comparative negligence" & "contributory negligence" % contract | **empty**: no results |
| LF-BS-0657 | one_state_plus_federal KS –1999-12-31 | keyword | "loss causation" /10 "inflated price" | **empty**: no results |
| LF-BS-0658 | one_state OR 2020-01-01– | keyword | relian! /25 reliance | **empty**: no results |
| LF-BS-0664 | one_state PA 2000-01-01–2009-12-31 | keyword | "negligent infliction of emotional distress" /s "zone of danger" | **empty**: no results |
| LF-BS-0667 | federal_circuit 3 | keyword | confus! /25 "strength of the mark" | **empty**: no results<br>**landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-0668 | all_states –1999-12-31 | keyword | "underinsured motorist" /10 stacking | **out_of_scope**: #10 Estate of Franks v. Allstate Insurance — District Court, M.D. Pennsylvania (federal_court_in_state_scope) |
| LF-BS-0672 | federal_district NH | keyword | "fraudulent joinder" /10 remand | **boolean_unsatisfied**: Jackson v. Morse — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Jenner v. CVS, Inc. — required terms/proximity not met in full text |
| LF-BS-0673 | all_states_and_federal 2023-01-01– | keyword | "informed consent" /s "material risk" | **result_missing_court**: #6 In re Maughan (549 P.3d 1134)<br>**result_missing_court**: #7 Frank L. Slaughter, Jr. v. Board of Professional Responsibil (no cite) |
| LF-BS-0674 | all_federal 2000-01-01–2009-12-31 | keyword | "likelihood of confusion" & trademark % criminal | **empty**: no results |
| LF-BS-0682 | one_state DC | keyword | therap! /p psychotherapist | **empty**: no results |
| LF-BS-0684 | one_state NY 2000-01-01–2009-12-31 | keyword | "modification of the trust" w/p settlor and beneficiar! | **empty**: no results |
| LF-BS-0686 | one_state CA | keyword | "duty to warn" w/15 (psychotherapist or "identifiable victim") | **landmark_missing**: wanted /tarasoff/ in top 10 |
| LF-BS-0687 | one_state TX 2020-01-01– | keyword | "transitory foreign substance" /s "actual or constructive knowledge" | **empty**: no results |
| LF-BS-0688 | one_state NJ | keyword | guardianship /s ward | **duplicate_hit**: #7 DS v. East Brunswick Tp. Bd. of Ed. 458 A.2d 129 |
| LF-BS-0689 | all_federal | keyword | "statute of limitations" /p "equitable tolling" & "discovery rule" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-0691 | one_state NY | keyword | foresee! /p foreseeab! | **empty**: no results<br>**landmark_missing**: wanted /palsgraf/ in top 10 |
| LF-BS-0692 | federal_circuit 9 2000-01-01–2009-12-31 | keyword | "parallel conduct" /10 conspira! | **empty**: no results |
| LF-BS-0697 | federal_circuit dc | keyword | "parallel conduct" /s conspira! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|bell atl\|matsushita\|monsanto co\|copperweld/ in top 10 |
| LF-BS-0700 | federal_district AK 1990-01-01–2010-12-31 | keyword | "rule 11" AND sanction! AND NOT habeas | **empty**: no results |
| LF-BS-0703 | one_state AZ | keyword | ("pierce the corporate veil" OR "alter ego") /s undercapitaliz! | **empty**: no results |
| LF-BS-0707 | one_state MO 2023-01-01– | keyword | ("parol evidence rule" OR "parol evidence") /s integrat! | **empty**: no results |
| LF-BS-0708 | one_state DE | keyword | "business judgment rule" w/p "duty of care" and director! | **boolean_unsatisfied**: Gantler v. Stephens — required terms/proximity not met in full text |
| LF-BS-0713 | one_state SD | keyword | "restrictive covenant" & "homeowners association" % criminal | **empty**: no results |
| LF-BS-0715 | all_states –1999-12-31 | keyword | impractic! /p frustration | **out_of_scope**: #9 Bank IV Salina, N.A. v. Aetna Casualty & Surety Co. — District Court, D. Kansas (federal_court_in_state_scope) |
| LF-BS-0718 | one_state NY 2000-01-01–2009-12-31 | keyword | "equitable indemnity" w/s contribution | **empty**: no results |
| LF-BS-0719 | one_state CA | keyword | "warranty of habitability" & tenant % criminal | **empty**: no results<br>**landmark_missing**: wanted /javins\|green v\. superior court/ in top 10 |
| LF-BS-0720 | all_states 2020-01-01– | keyword | "personal jurisdiction" /p "minimum contacts" & "fair play" | **out_of_scope**: #4 Reyes Welding Contractors LLC v. Pilgrim’s Pride Corporation — District Court, N.D. Alabama (federal_court_in_state_scope)<br>**out_of_scope**: #9 BLU PRODUCTS, INC. v. EXCESS TELECOM, INC. — District Court, S.D. Florida (federal_court_in_state_scope) |
| LF-BS-0721 | federal_district OH –1999-12-31 | keyword | "economic substance" w/p "business purpose" and commissioner | **empty**: no results |
| LF-BS-0723 | one_state_plus_federal MD 2020-01-01– | keyword | "underinsured motorist" +s stacking | **empty**: no results |
| LF-BS-0726 | all_federal | keyword | "likelihood of confusion" w/15 (trademark or "strength of the mark") | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-0727 | one_state AZ | keyword | apprendi & jury % civil | **empty**: no results |
| LF-BS-0728 | one_state_plus_federal NM 2015-01-01– | keyword | "prevailing party" & lodestar % criminal | **empty**: no results |
| LF-BS-0729 | one_state LA 2000-01-01–2009-12-31 | keyword | "non-compete" +s "legitimate business interest" | **empty**: no results |
| LF-BS-0732 | all_states | keyword | "prior bad acts" w/s "other crimes" | **boolean_unsatisfied**: Thomas v. Commonwealth — required terms/proximity not met in full text |
| LF-BS-0734 | federal_district MA 2000-01-01–2009-12-31 | keyword | abstention & "pending state" % patent | **empty**: no results |
| LF-BS-0738 | federal_district CA | keyword | "parallel conduct" w/p conspira! and "sherman act" | **empty**: no results |
| LF-BS-0741 | one_state IL | keyword | indemni! /p contribution | **empty**: no results |
| LF-BS-0747 | one_state_plus_federal AZ 2020-01-01– | keyword | "child support" +s imput! | **empty**: no results |
| LF-BS-0750 | one_state TN | keyword | domicil! /p "at home" | **empty**: no results |
| LF-BS-0751 | federal_circuit 9 | keyword | "claim construction" w/p specification and "intrinsic evidence" | **landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-0753 | one_state_plus_federal MA 2020-01-01– | keyword | "bad faith" w/p insurer and "failure to settle" | **empty**: no results |
| LF-BS-0755 | us_supreme_court 2023-01-01– | keyword | abstention AND "pending state" AND NOT patent | **empty**: no results |
| LF-BS-0756 | one_state ME 2000-01-01–2009-12-31 | keyword | "design defect" w/15 ("consumer expectations" or "risk-utility") | **empty**: no results |
| LF-BS-0758 | one_state IL | keyword | "prenuptial agreement" w/15 ("full disclosure" or unconscionab!) | **empty**: no results |
| LF-BS-0759 | one_state DC | keyword | "pierce the corporate veil" /10 undercapitaliz! | **empty**: no results |
| LF-BS-0762 | us_supreme_court 2020-01-01– | keyword | cramdown +s "absolute priority rule" | **empty**: no results |
| LF-BS-0764 | us_supreme_court | keyword | substan! /p "business purpose" | **empty**: no results<br>**landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-0772 | one_state TX 2023-01-01– | keyword | foreclosure w/p standing and "holder of the note" | **empty**: no results |
| LF-BS-0775 | federal_circuit 5 | keyword | "vacate the arbitration award" & "exceeded their powers" % criminal | **empty**: no results<br>**landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-0778 | all_states_and_federal | keyword | ("diversity jurisdiction" OR "complete diversity") AND remov! NOT bankruptcy | **result_missing_court**: #9 Katoria Development Group, LLC v. Encova Mutual Insurance Gr (no cite) |
| LF-BS-0780 | all_federal | keyword | "second amendment" AND "historical tradition" AND NOT contract | **boolean_not_violated**: District of Columbia v. Heller — contains excluded term(s): contract |
| LF-BS-0782 | all_federal | keyword | "motion to dismiss" w/15 (plausib! or "factual allegations") | **landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-0783 | one_state_plus_federal NJ 2000-01-01–2009-12-31 | keyword | ("social host" OR "dram shop") /s intoxicat! | **empty**: no results |
| LF-BS-0785 | one_state_plus_federal OR | keyword | foresee! /p foreseeab! | **empty**: no results |
| LF-BS-0788 | one_state NY | keyword | "equitable indemnity" /p contribution & tortfeasor | **empty**: no results |
| LF-BS-0790 | one_state NY 2000-01-01–2009-12-31 | keyword | ("prescriptive easement" OR "easement by necessity") /s servient | **empty**: no results |
| LF-BS-0794 | one_state_plus_federal HI 1990-01-01–2010-12-31 | keyword | habitab! /25 rent | **empty**: no results |
| LF-BS-0796 | us_supreme_court | keyword | classif! /25 classification | **landmark_missing**: wanted /cleburne\|romer\|craig v\. boren\|virginia\|students for fair\|adarand\|vill\. of willowbrook/ in top 10 |
| LF-BS-0798 | all_states | keyword | "vacate the arbitration award" w/s "exceeded their powers" | **out_of_scope**: #1 Hutchinson v. FARM FAMILY CAS. INS. CO. — District Court, D. Connecticut (federal_court_in_state_scope)<br>**out_of_scope**: #8 ZIMMER, INC. v. Scott — District Court, N.D. Illinois (federal_court_in_state_scope) |
| LF-BS-0801 | federal_district IN | keyword | "punitive damages" w/p "due process" and ratio | **empty**: no results |
| LF-BS-0805 | all_federal | keyword | "attorney-client privilege" +s waiv! | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-0807 | one_state PA | keyword | ("design defect" OR "strict liability") AND "risk-utility" NOT contract | **landmark_missing**: wanted /tincher\|azzarello/ in top 10 |
| LF-BS-0812 | all_federal | keyword | retaliat! /p "materially adverse" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-0813 | one_state_plus_federal CO | keyword | "fraudulent joinder" & remand % patent | **empty**: no results |
| LF-BS-0815 | federal_circuit 11 | keyword | pretext! /p pretext | **landmark_missing**: wanted /mcdonnell douglas\|burdine\|st\. mary\|reeves v\. sanderson/ in top 10 |
| LF-BS-0818 | one_state RI | keyword | "speedy trial" & delay % civil | **empty**: no results |
| LF-BS-0820 | one_state GA 1990-01-01–2010-12-31 | keyword | "proximate cause" w/p foreseeab! and "intervening cause" | **empty**: no results |
| LF-BS-0821 | one_state CA | keyword | habitab! /p tenant | **empty**: no results<br>**landmark_missing**: wanted /javins\|green v\. superior court/ in top 10 |
| LF-BS-0826 | federal_circuit 3 | keyword | pretext! /p pretext | **landmark_missing**: wanted /mcdonnell douglas\|burdine\|st\. mary\|reeves v\. sanderson/ in top 10 |
| LF-BS-0829 | all_states_and_federal | keyword | "modification of the trust" w/s settlor | **result_missing_court**: #2 In re Estate of Brown (87 Va. Cir. 353) |
| LF-BS-0833 | one_state_plus_federal RI | keyword | privileg! /p waiv! | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-0834 | one_state OK 1990-01-01–2010-12-31 | keyword | "additional insured" /p "arising out of" & coverage | **empty**: no results |
| LF-BS-0835 | one_state OR | keyword | "pollution exclusion" /s irritant | **empty**: no results |
| LF-BS-0836 | one_state_plus_federal KS | keyword | "proximate cause" /10 foreseeab! | **empty**: no results |
| LF-BS-0838 | all_states_and_federal | keyword | "prescriptive easement" w/p servient and dominant | **result_missing_court**: #8 Aizpitarte v. Minear (508 P.3d 1260) |
| LF-BS-0839 | all_federal | keyword | abstention w/15 ("pending state" or "comity") | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-0840 | one_state ME | keyword | "implied consent" w/15 (refus! or "driving under the influence") | **empty**: no results |
| LF-BS-0842 | one_state DE | keyword | "deceptive and unfair trade practices" /p consumer & "actual damages" | **empty**: no results |
| LF-BS-0843 | one_state DC | keyword | "res ipsa loquitur" /p inference & negligence | **duplicate_hit**: #7 Crenshaw v. WA METRO. AREA TRANS. AUTH. 731 A.2d 381 |
| LF-BS-0846 | one_state_plus_federal NC | keyword | "statute of limitations" w/p "equitable tolling" and "discovery rule" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-0851 | all_states_and_federal | keyword | "fair use" /10 copyright | **result_missing_court**: #8 Lenz v. Universal Music Corp. (572 F. Supp. 2d 1150)<br>**landmark_missing**: wanted /campbell\|acuff-rose\|warhol\|google llc v\. oracle\|harper & row\|sony corp/ in top 10 |
| LF-BS-0852 | one_state TN | keyword | "fraudulent inducement" AND "justifiable reliance" AND NOT criminal | **boolean_unsatisfied**: Brown v. Raines — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Alley v. Quebecor World Kingsportet al — required terms/proximity not met in full text |
| LF-BS-0855 | federal_district CA 2000-01-01–2009-12-31 | keyword | "mcdonnell douglas" +s pretext | **empty**: no results |
| LF-BS-0857 | one_state MA 2020-01-01– | keyword | "equitable distribution" w/15 ("nonmarital" or commingl!) | **empty**: no results |
| LF-BS-0866 | one_state_plus_federal CA 2015-01-01– | keyword | "demand futility" & "demand excused" % criminal | **empty**: no results |
| LF-BS-0869 | federal_circuit 11 | keyword | deference & "statutory ambiguity" % criminal | **empty**: no results<br>**landmark_missing**: wanted /loper bright\|chevron\|skidmore\|kisor\|auer\|mead/ in top 10 |
| LF-BS-0870 | one_state NJ 2000-01-01–2009-12-31 | keyword | "free exercise" w/s "neutral and generally applicable" | **empty**: no results |
| LF-BS-0874 | all_states_and_federal | keyword | "excessive force" w/s "fourth amendment" | **result_missing_court**: #4 Tran v. City of Las Vegas (no cite) |
| LF-BS-0876 | federal_circuit 3 | keyword | monell w/s "policy or custom" | **boolean_unsatisfied**: Monell v. New York City Dept. of Social Servs. — required terms/proximity not met in full text |
| LF-BS-0877 | federal_circuit 7 | keyword | prosecut! /p "probable cause" | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-0879 | one_state_plus_federal WI | keyword | "transitory foreign substance" /s "actual or constructive knowledge" | **empty**: no results |
| LF-BS-0880 | one_state_plus_federal TX 2023-01-01– | keyword | "cell-site location" & warrant % civil | **empty**: no results |
| LF-BS-0882 | one_state_plus_federal CA 2023-01-01– | keyword | "market share liability" /s des | **empty**: no results |
| LF-BS-0884 | one_state VT | keyword | "negligent infliction of emotional distress" & "zone of danger" % contract | **empty**: no results |
| LF-BS-0887 | one_state LA 2000-01-01–2009-12-31 | keyword | "fraudulent inducement" /10 "justifiable reliance" | **empty**: no results |
| LF-BS-0888 | all_states | keyword | impractic! /p frustration | **out_of_scope**: #3 Days Inn of America, Inc. v. Patel — District Court, C.D. Illinois (federal_court_in_state_scope)<br>**out_of_scope**: #9 Warn v. Sears — District Court, D. Maryland (federal_court_in_state_scope)<br>**out_of_scope**: #10 In re Mississippi Sports & Recreation, Inc. — United States Bankruptcy Court, W.D. Wisconsin (federal_court_in_state_scope)<br>**boolean_unsatisfied**: McGlinchey v. Aetna Casualty & Surety Co. — required terms/proximity not met in full text |
| LF-BS-0889 | one_state NV 2020-01-01– | keyword | (guardianship OR "incapacitated person") /s ward | **empty**: no results |
| LF-BS-0894 | federal_district TX 2020-01-01– | keyword | exculpat! /25 suppress! | **empty**: no results |
| LF-BS-0898 | one_state_plus_federal SD 2023-01-01– | keyword | premis! /p invitee | **empty**: no results |
| LF-BS-0900 | one_state_plus_federal MI | keyword | daubert w/p reliab! and "rule 702" | **boolean_unsatisfied**: Daubert v. Merrell Dow Pharmaceuticals, Inc. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: General Electric Co. v. Joiner — required terms/proximity not met in full text |
| LF-BS-0904 | federal_circuit 6 | keyword | confirm! /p "absolute priority rule" | **landmark_missing**: wanted /bank of am\|203 n\. lasalle\|till v\. sct\|radlax\|czyzewski/ in top 10 |
| LF-BS-0907 | all_federal 2020-01-01– | keyword | "ineffective assistance of counsel" & prejudice % civil | **empty**: no results |
| LF-BS-0909 | federal_district GA | keyword | "procedural due process" w/15 ("property interest" or deprivat!) | **empty**: no results |
| LF-BS-0910 | us_supreme_court | keyword | (retaliation OR "protected activity") AND "causal connection" NOT criminal | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-0936 | one_state_plus_federal DE | keyword | "business judgment rule" /p "duty of care" & director! | **boolean_unsatisfied**: Gantler v. Stephens — required terms/proximity not met in full text |
| LF-BS-0937 | all_states_and_federal 2015-01-01– | keyword | "force majeure" /p frustration & unforeseeab! | **result_missing_court**: #1 CEC Entertainment, Inc. (no cite)<br>**result_missing_court**: #9 SVAP III Poway Crossings, LLC v. Fitness Internat., LLC (no cite)<br>**result_missing_court**: #10 TEC Olmos, LLC v. ConocoPhillips Co. (555 S.W.3d 176) |
| LF-BS-0938 | one_state_plus_federal DC 2015-01-01– | keyword | nuptial! /25 unconscionab! | **empty**: no results |
| LF-BS-0943 | federal_circuit 2 | keyword | daubert & reliab! % criminal | **duplicate_hit**: #4 United States v. Dukagjini 326 F.3d 45 |
| LF-BS-0945 | one_state_plus_federal CA | keyword | negligen! /p "contributory negligence" | **landmark_missing**: wanted /li v\. yellow cab/ in top 10 |
| LF-BS-0947 | one_state CT | keyword | "modification of the trust" /p settlor & beneficiar! | **empty**: no results |
| LF-BS-0950 | one_state CO | keyword | "pierce the corporate veil" /p undercapitaliz! & "corporate form" | **empty**: no results |
| LF-BS-0952 | one_state_plus_federal TX 2020-01-01– | keyword | "negligent infliction of emotional distress" AND "zone of danger" AND NOT contract | **empty**: no results |
| LF-BS-0954 | federal_district AL | keyword | "default judgment" /s "excusable neglect" | **empty**: no results |
| LF-BS-0956 | one_state PA | keyword | "cohabitation" w/p "express contract" and implied | **empty**: no results |
| LF-BS-0957 | one_state_plus_federal WV 2023-01-01– | keyword | "underinsured motorist" +s stacking | **empty**: no results |
| LF-BS-0958 | one_state CA | keyword | "unjust enrichment" & benefit % criminal | **empty**: no results |
| LF-BS-0959 | one_state MT 2023-01-01– | keyword | "anticipatory repudiation" w/15 (repudiat! or "adequate assurance") | **empty**: no results |
| LF-BS-0961 | one_state CA | keyword | "equitable distribution" & "nonmarital" % criminal | **empty**: no results |
| LF-BS-0962 | one_state WI | keyword | "prenuptial agreement" AND "full disclosure" AND NOT criminal | **empty**: no results |
| LF-BS-0971 | all_federal | keyword | "rule 11" w/15 (sanction! or "reasonable inquiry") | **landmark_missing**: wanted /cooter\|business guides\|chambers v\. nasco/ in top 10 |
| LF-BS-0975 | one_state_plus_federal RI | keyword | "pierce the corporate veil" /s undercapitaliz! | **empty**: no results |
| LF-BS-0976 | one_state_plus_federal SC 2015-01-01– | keyword | "patent eligible" & "section 101" % criminal | **empty**: no results |
| LF-BS-0977 | one_state_plus_federal TX | keyword | "motion to compel arbitration" /p unconscionab! & delegation | **landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-0980 | one_state PA | keyword | "proximate cause" /10 foreseeab! | **empty**: no results |
| LF-BS-0981 | all_states_and_federal | keyword | ("regulatory taking" OR "inverse condemnation") AND "economically viable" NOT criminal | **landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10 |
| LF-BS-0989 | one_state_plus_federal CT 2000-01-01–2009-12-31 | keyword | "business judgment rule" & "duty of care" % criminal | **empty**: no results |
| LF-BS-0990 | all_states_and_federal | keyword | scienter AND "rule 10b-5" AND NOT criminal | **result_missing_court**: #8 In re Computer Sciences Corp. Securities Litigation (890 F. Supp. 2d 650)<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-0996 | one_state NV | keyword | "open and obvious" +s invitee | **empty**: no results |
| LF-BS-1002 | one_state OH 2000-01-01–2009-12-31 | keyword | capaci! /25 "natural objects of his bounty" | **empty**: no results |
| LF-BS-1007 | all_federal | keyword | ("statute of limitations" OR "limitations period") /s "equitable tolling" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-1009 | federal_circuit 2 2015-01-01– | keyword | "summary judgment" & "genuine dispute" % patent | **empty**: no results |
| LF-BS-1011 | all_states_and_federal | keyword | "parol evidence rule" & integrat! % criminal | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query |
| LF-BS-1022 | federal_district IL | keyword | "arbitrary and capricious" & agency % criminal | **empty**: no results |
| LF-BS-1023 | us_supreme_court 2015-01-01– | keyword | "economic substance" /p "business purpose" & commissioner | **empty**: no results |
| LF-BS-1024 | one_state DC | keyword | misrepresent! /p "justifiable reliance" | **empty**: no results |
| LF-BS-1027 | all_states_and_federal | keyword | "prenuptial agreement" w/s "full disclosure" | **result_missing_court**: #2 Kelly v. Kelly (898 So. 2d 1096) |
| LF-BS-1032 | one_state_plus_federal ID | keyword | (guardianship OR "incapacitated person") /s ward | **boolean_unsatisfied**: Bandelin v. Quinlan — required terms/proximity not met in full text |
| LF-BS-1034 | one_state_plus_federal MI | keyword | "patent eligible" w/15 ("section 101" or "inventive concept") | **landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-1038 | all_states_and_federal 1990-01-01–2010-12-31 | keyword | nondischargeab! w/p "false pretenses" and debtor | **empty**: no results |
| LF-BS-1039 | one_state NJ 2020-01-01– | keyword | ("vacate the arbitration award" OR "manifest disregard") /s "exceeded their powers" | **empty**: no results |
| LF-BS-1044 | federal_circuit 4 | keyword | "hostile work environment" /s "severe or pervasive" | **boolean_unsatisfied**: Meritor Savings Bank, FSB v. Vinson — required terms/proximity not met in full text |
| LF-BS-1046 | federal_circuit 7 | keyword | abstention w/p "pending state" and "comity" | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-1048 | us_supreme_court 2015-01-01– | keyword | "loss causation" w/p "inflated price" and "economic loss" | **empty**: no results |
| LF-BS-1049 | one_state TX | keyword | foreclos! /25 "holder of the note" | **empty**: no results |
| LF-BS-1050 | federal_district MI | keyword | "likelihood of confusion" & trademark % criminal | **empty**: no results |
| LF-BS-1053 | one_state OH | keyword | "proximate cause" /10 foreseeab! | **empty**: no results |
| LF-BS-1054 | federal_circuit 2 | keyword | "excited utterance" /10 hearsay | **duplicate_hit**: #3 Michigan v. Bryant 562 U.S. 344 |
| LF-BS-1056 | federal_district ND –1999-12-31 | keyword | "general jurisdiction" /10 "at home" | **empty**: no results |
| LF-BS-1061 | all_states | keyword | "additional insured" & "arising out of" % criminal | **empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query |
| LF-BS-1063 | federal_district DE 2023-01-01– | keyword | "intentional infliction of emotional distress" & "extreme and outrageous" % patent | **empty**: no results |
| LF-BS-1066 | federal_district GA 2015-01-01– | keyword | "consent to search" w/p "totality of the circumstances" and coerc! | **empty**: no results |
| LF-BS-1068 | one_state NJ | keyword | "deceptive and unfair trade practices" w/s consumer | **empty**: no results |
| LF-BS-1070 | us_supreme_court | keyword | nondischargeab! +s "false pretenses" | **empty**: no results<br>**landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-1073 | one_state_plus_federal CO –1999-12-31 | keyword | alcohol! /p intoxicat! | **empty**: no results |
| LF-BS-1080 | federal_circuit 6 | keyword | "hostile work environment" AND "severe or pervasive" AND NOT criminal | **boolean_not_violated**: Meritor Savings Bank, FSB v. Vinson — contains excluded term(s): criminal |
| LF-BS-1082 | one_state_plus_federal VA 2023-01-01– | keyword | ("comparative negligence" OR "pure comparative") AND abolish! NOT contract | **empty**: no results |
| LF-BS-1083 | all_states | keyword | "double jeopardy" & blockburger % civil | **empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query |
| LF-BS-1085 | one_state_plus_federal KY | keyword | "undue influence" & testator % criminal | **empty**: no results |
| LF-BS-1086 | us_supreme_court 2015-01-01– | keyword | "attorney-client privilege" +s waiv! | **empty**: no results |
| LF-BS-1088 | one_state KY | keyword | relocat! /25 "best interests of the child" | **empty**: no results |
| LF-BS-1090 | one_state NC –1999-12-31 | keyword | "prescriptive easement" w/s servient | **empty**: no results |
| LF-BS-1091 | all_states 1990-01-01–2010-12-31 | keyword | ("implied warranty of merchantability" OR "breach of warranty") AND conspicuous NOT criminal | **out_of_scope**: #2 Bussian v. DaimlerChrysler Corp. — District Court, M.D. North Carolina (federal_court_in_state_scope)<br>**out_of_scope**: #8 Dj Coleman, Inc. v. Nufarm Americas, Inc. — District Court, D. North Dakota (federal_court_in_state_scope)<br>**out_of_scope**: #9 In re Air Bag Products Liability Litigation — District Court, E.D. Louisiana (federal_court_in_state_scope) |
| LF-BS-1099 | federal_district ND 2015-01-01– | keyword | spoliation w/p "adverse inference" and sanction! | **empty**: no results |
| LF-BS-1101 | all_states_and_federal 2000-01-01–2009-12-31 | keyword | ("negligent hiring" OR "negligent retention") /s "negligent supervision" | **result_missing_court**: #6 Favale v. Roman Catholic Diocese (233 F.R.D. 243) |
| LF-BS-1102 | one_state_plus_federal DC 2000-01-01–2009-12-31 | keyword | exculpat! /p material! | **empty**: no results |
| LF-BS-1104 | federal_circuit 8 | keyword | ("qualified immunity" OR "clearly established") AND officer NOT contract | **boolean_not_violated**: Pearson v. Callahan — contains excluded term(s): contract |
| LF-BS-1106 | one_state SD | keyword | "summary judgment" & "genuine dispute" % patent | **empty**: no results |
| LF-BS-1108 | all_states | keyword | negligen! /25 "last clear chance" | **landmark_missing**: wanted /li v\. yellow cab/ in top 10 |
| LF-BS-1114 | all_states | keyword | "punitive damages" w/p "due process" and ratio | **out_of_scope**: #2 ICE Corp. v. Hamilton Sundstrand Corp. — District Court, D. Kansas (federal_court_in_state_scope) |
| LF-BS-1116 | one_state AL 2015-01-01– | keyword | ("modification of the trust" OR "trust modification") /s settlor | **empty**: no results |
| LF-BS-1119 | federal_district WA 2015-01-01– | keyword | cramdown & "absolute priority rule" % criminal | **empty**: no results |
| LF-BS-1124 | one_state_plus_federal OK | keyword | "negligent infliction of emotional distress" AND "zone of danger" AND "close relationship" | **empty**: no results |
| LF-BS-1125 | all_states | keyword | defect! /p "consumer expectations" | **out_of_scope**: #8 Perez v. Apyx Medical Corporation — District Court, N.D. California (federal_court_in_state_scope)<br>**landmark_missing**: wanted /tincher\|azzarello/ in top 10 |
| LF-BS-1128 | all_states_and_federal | keyword | ("negligent infliction of emotional distress" OR "bystander recovery") /s "zone of danger" | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-1130 | one_state OH 2020-01-01– | keyword | "negligent infliction of emotional distress" & "zone of danger" % contract | **empty**: no results |
| LF-BS-1133 | one_state IA –1999-12-31 | keyword | spoliation & "adverse inference" % patent | **empty**: no results |
| LF-BS-1134 | one_state AK 1990-01-01–2010-12-31 | keyword | ("joint and several liability" OR "several liability") /s tortfeasor! | **duplicate_hit**: #9 State Farm Mutual Automobile Insurance Co. v. Wilson 199 P.3d 581 |
| LF-BS-1140 | one_state IN | keyword | "prenuptial agreement" w/p "full disclosure" and unconscionab! | **empty**: no results |
| LF-BS-1141 | one_state MN 2000-01-01–2009-12-31 | keyword | "force majeure" w/p frustration and unforeseeab! | **empty**: no results |
| LF-BS-1143 | all_states 2023-01-01– | keyword | "fraudulent inducement" w/s "justifiable reliance" | **out_of_scope**: #2 American Battery Technology Company, Inc. v. Tysadco Partner — District Court, D. Nevada (federal_court_in_state_scope)<br>**out_of_scope**: #6 Over v. Amedisys, Inc. — District Court, W.D. Pennsylvania (federal_court_in_state_scope)<br>**out_of_scope**: #7 Northstar Regional P.S.C. v. InSync Healthcare Solutions LLC — District Court, M.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #8 Mobu Enterprises Pty Ltd v. John Galt Solutions Inc — District Court, N.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #9 ECB USA, Inc. v. Savencia, S.A. — District Court, D. Delaware (federal_court_in_state_scope) |
| LF-BS-1152 | all_states | keyword | consorti! /p spouse | **boolean_unsatisfied**: Watts v. State — required terms/proximity not met in full text |
| LF-BS-1159 | one_state NC | keyword | "deceptive and unfair trade practices" /s consumer | **empty**: no results |
| LF-BS-1161 | one_state MS 2020-01-01– | keyword | statut! /p "class of persons" | **empty**: no results |
| LF-BS-1166 | one_state NM | keyword | "anticipatory repudiation" /10 repudiat! | **empty**: no results |
| LF-BS-1167 | federal_circuit 7 | keyword | "attorney-client privilege" +s waiv! | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-1168 | us_supreme_court 2020-01-01– | keyword | ("cell-site location" OR "cell phone") AND "reasonable expectation of privacy" NOT civil | **empty**: no results |
| LF-BS-1170 | one_state MA | keyword | "implied covenant of good faith and fair dealing" & discretion % criminal | **empty**: no results |
| LF-BS-1171 | all_states 2015-01-01– | keyword | "comparative negligence" /10 "contributory negligence" | **out_of_scope**: #6 GOSSELIN v. PASSAIC VALLEY SEWERAGE COMMISSION — District Court, D. New Jersey (federal_court_in_state_scope)<br>**out_of_scope**: #7 New Prime, Inc., a Nebraska Corporation v. McGriff Insurance — District Court, W.D. Missouri (federal_court_in_state_scope)<br>**out_of_scope**: #10 Childress v. Johnson — District Court, S.D. West Virginia (federal_court_in_state_scope) |
| LF-BS-1175 | one_state_plus_federal SD | keyword | "transitory foreign substance" w/p "actual or constructive knowledge" and premises | **empty**: no results |
| LF-BS-1176 | one_state_plus_federal OH 2020-01-01– | keyword | impractic! /p frustration | **boolean_unsatisfied**: State v. Coffman — required terms/proximity not met in full text<br>**boolean_unsatisfied**: McIntosh v. United States — required terms/proximity not met in full text |
| LF-BS-1179 | one_state_plus_federal MD | keyword | "vacate the arbitration award" +s "exceeded their powers" | **landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-1180 | one_state CA | keyword | utteran! /p hearsay | **empty**: no results |
| LF-BS-1188 | all_states_and_federal | keyword | nondischargeab! AND "false pretenses" AND debtor | **landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-1191 | one_state AZ | keyword | trust! /p settlor | **duplicate_hit**: #8 Matter of Marital Trust 819 P.2d 1029 |
| LF-BS-1193 | one_state PA | keyword | "prenuptial agreement" w/p "full disclosure" and unconscionab! | **empty**: no results |
| LF-BS-1196 | one_state_plus_federal NY | keyword | bystand! /25 "close relationship" | **empty**: no results |
| LF-BS-1200 | us_supreme_court 2023-01-01– | keyword | scienter & "rule 10b-5" % criminal | **empty**: no results |
| LF-BS-1205 | one_state CA | keyword | "negligent infliction of emotional distress" AND "zone of danger" AND NOT contract | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-1206 | one_state_plus_federal GA | keyword | "negligence per se" & "class of persons" % contract | **empty**: no results |
| LF-BS-1207 | one_state TN –1999-12-31 | keyword | "duty to warn" w/15 (psychotherapist or "identifiable victim") | **empty**: no results |
| LF-BS-1208 | one_state CO | keyword | homestead & devise % criminal | **empty**: no results |
| LF-BS-1211 | federal_circuit 11 | keyword | "parallel conduct" /10 conspira! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|bell atl\|matsushita\|monsanto co\|copperweld/ in top 10 |
| LF-BS-1217 | all_states 2023-01-01– | keyword | "res judicata" AND "final judgment" AND "same cause of action" | **out_of_scope**: #1 Mason v. Bank of America, N.A. — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #3 Edwards v. Houser — District Court, M.D. Pennsylvania (federal_court_in_state_scope)<br>**out_of_scope**: #4 Craig Ninja Antonio Brewton v. United States, Matthew C. Smi — District Court, D. South Carolina (federal_court_in_state_scope)<br>**out_of_scope**: #6 Wiggins v. Jefferson Einstein Hospital — District Court, E.D. Pennsylvania (federal_court_in_state_scope)<br>**out_of_scope**: #9 Kahler v. Walmart, Inc. — District Court, D. Colorado (federal_court_in_state_scope) |
| LF-BS-1221 | federal_district WA | keyword | confus! /p trademark | **empty**: no results |
| LF-BS-1230 | one_state_plus_federal PA | keyword | "design defect" & "consumer expectations" % contract | **empty**: no results<br>**landmark_missing**: wanted /tincher\|azzarello/ in top 10 |
| LF-BS-1232 | all_states | keyword | "forum non conveniens" w/s "private interest" | **out_of_scope**: #6 Urbanek v. Stryjewski — District Court, M.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #8 Foster Poultry Farms Incorporated v. LaClaire — District Court, D. Arizona (federal_court_in_state_scope)<br>**out_of_scope**: #9 FUFC, LLC v. Excel Contractors, LLC — District Court, M.D. Louisiana (federal_court_in_state_scope)<br>**out_of_scope**: #10 Dahmani v. SHL Medical AG — District Court, N.D. Illinois (federal_court_in_state_scope) |
| LF-BS-1236 | one_state MI | keyword | "pierce the corporate veil" AND undercapitaliz! AND NOT criminal | **empty**: no results |
| LF-BS-1238 | one_state_plus_federal IN | keyword | "prescriptive easement" w/s servient | **empty**: no results |
| LF-BS-1243 | one_state_plus_federal PA | keyword | "joint and several liability" & tortfeasor! % contract | **empty**: no results |
| LF-BS-1248 | one_state_plus_federal OR | keyword | "parol evidence rule" w/s integrat! | **empty**: no results |
| LF-BS-1250 | all_states_and_federal | keyword | (scienter OR "strong inference") /s "rule 10b-5" | **landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-1251 | all_states_and_federal | keyword | nondischargeab! w/15 ("false pretenses" or debtor) | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-1253 | one_state MI | keyword | relocat! /25 "best interests of the child" | **empty**: no results |
| LF-BS-1254 | federal_district MD 2015-01-01– | keyword | utteran! /25 "startling event" | **empty**: no results |
| LF-BS-1257 | one_state_plus_federal AR –1999-12-31 | keyword | classif! /25 classification | **empty**: no results |
| LF-BS-1260 | one_state MS 2023-01-01– | keyword | "medical malpractice" /10 "standard of care" | **boolean_unsatisfied**: Singing River Health System v. Amy Brand, Individually and a — required terms/proximity not met in full text |
| LF-BS-1261 | one_state UT 2015-01-01– | keyword | "negligence per se" +s "class of persons" | **empty**: no results |
| LF-BS-1266 | all_federal | keyword | prosecut! /25 "fourth amendment" | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-1268 | one_state AK 1990-01-01–2010-12-31 | keyword | "equitable indemnity" & contribution % patent | **empty**: no results |
| LF-BS-1269 | one_state_plus_federal KY 2000-01-01–2009-12-31 | keyword | ("business judgment rule" OR "duty of loyalty") AND director! NOT criminal | **duplicate_hit**: #8 United States ex rel. Rural Utilities Service of the Departm 355 F.3d 415 |
| LF-BS-1272 | one_state_plus_federal IL | keyword | retaliation w/15 ("materially adverse" or "causal connection") | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10<br>**boolean_unsatisfied**: Drake v. Minnesota Mining & Manufacturing Company — required terms/proximity not met in full text |
| LF-BS-1274 | one_state_plus_federal KY | keyword | "prescriptive easement" /10 servient | **empty**: no results |
| LF-BS-1281 | all_states_and_federal | keyword | "social host" w/p intoxicat! and "guest" | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-1284 | all_states | keyword | "implied covenant of good faith and fair dealing" AND discretion AND NOT criminal | **boolean_unsatisfied**: Kirke La Shelle Co. v. Paul Armstrong Co. — required terms/proximity not met in full text |
| LF-BS-1287 | one_state GA | keyword | "equitable distribution" w/s "nonmarital" | **empty**: no results |
| LF-BS-1289 | one_state MS | keyword | "non-compete" /10 "legitimate business interest" | **empty**: no results |
| LF-BS-1293 | one_state VA 2023-01-01– | keyword | "parol evidence rule" w/p integrat! and ambigu! | **empty**: no results |
| LF-BS-1297 | all_states | keyword | "implied warranty of merchantability" AND disclaim! AND conspicuous | **out_of_scope**: #5 Plevnik v. MarineMax, Inc. — District Court, M.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #6 Gold Peak Homeowners Association, Inc. v. GAF Materials, LLC — District Court, D. Colorado (federal_court_in_state_scope)<br>**out_of_scope**: #7 Foster v. Corteva Agriscience LLC — District Court, N.D. Texas (federal_court_in_state_scope) |
| LF-BS-1299 | one_state CA | keyword | "testamentary capacity" & testator % criminal | **empty**: no results |
| LF-BS-1300 | one_state IL | keyword | "economic loss rule" & "purely economic" % criminal | **empty**: no results |
| LF-BS-1303 | us_supreme_court | keyword | "motion to dismiss" /10 plausib! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-1304 | one_state WA | keyword | "economic loss rule" & "purely economic" % criminal | **empty**: no results |
| LF-BS-1306 | one_state OR | keyword | "free exercise" & "neutral and generally applicable" % contract | **empty**: no results |
| LF-BS-1308 | one_state AL | keyword | "rule 11" & sanction! % habeas | **empty**: no results |
| LF-BS-1310 | one_state MN | keyword | "proportional to the needs of the case" AND discovery AND NOT habeas | **empty**: no results |
| LF-BS-1312 | one_state IN | keyword | foresee! /25 "intervening cause" | **empty**: no results |
| LF-BS-1314 | one_state_plus_federal IN | keyword | "intentional infliction of emotional distress" w/p "extreme and outrageous" and "severe emotional distress" | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-1316 | federal_district LA | keyword | nondischargeab! /s "false pretenses" | **empty**: no results |
| LF-BS-1320 | federal_circuit 9 | keyword | asylum & persecution % contract | **empty**: no results<br>**landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-1321 | one_state PA 2015-01-01– | keyword | "proximate cause" w/p foreseeab! and "intervening cause" | **empty**: no results |
| LF-BS-1326 | federal_district NH 2020-01-01– | keyword | persecut! /p persecution | **empty**: no results |
| LF-BS-1332 | one_state WY | keyword | proportional! /p discovery | **boolean_unsatisfied**: Requejo v. State — required terms/proximity not met in full text |
| LF-BS-1335 | one_state CA | keyword | "informed consent" AND "material risk" AND physician | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-1337 | all_states | keyword | "equitable indemnity" w/p contribution and tortfeasor | **out_of_scope**: #7 Alpha Energy and Electric, Inc. v. Medrala — District Court, D. Nevada (federal_court_in_state_scope) |
| LF-BS-1339 | one_state MS | keyword | "proximate cause" +s foreseeab! | **empty**: no results |
| LF-BS-1340 | all_federal | keyword | apprendi /10 jury | **duplicate_hit**: #9 Alleyne v. United States 570 U.S. 99 |
| LF-BS-1341 | one_state AL | keyword | "promissory estoppel" w/p "clear and definite promise" and reliance | **empty**: no results |
| LF-BS-1342 | all_states 2023-01-01– | keyword | "prevailing party" /10 lodestar | **out_of_scope**: #1 Bank of America, N.A. v. Ztar Mobile, Inc. and Kevin T. Hadd — District Court, N.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #2 Joe Hand Promotions Incorporated v. Taco Spot III LLC — District Court, D. Arizona (federal_court_in_state_scope)<br>**out_of_scope**: #3 Joe Hand Promotions Incorporated v. La Casa De Las Flores Go — District Court, D. Arizona (federal_court_in_state_scope)<br>**out_of_scope**: #4 PNC BANK, N.A. v. Demos — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #5 Finite Management LLC v. OtoPilot LLC — District Court, D. Arizona (federal_court_in_state_scope)<br>**out_of_scope**: #6 American Registry of Radiologic Technologists v. Cannon — District Court, W.D. Tennessee (federal_court_in_state_scope)<br>**out_of_scope**: #7 Kretsch v. Barton — District Court, D. Arizona (federal_court_in_state_scope) |
| LF-BS-1346 | one_state_plus_federal CA | keyword | dog! /p "strict liability" | **duplicate_hit**: #9 Farnam v. California 84 Cal. App. 4th 1448 |
| LF-BS-1349 | one_state_plus_federal SD | keyword | "pollution exclusion" AND irritant AND contaminant | **duplicate_hit**: #10 State Cement Plant Comm. v. Wausau Und. Ins. Co. 2000 SD 116 |
| LF-BS-1350 | all_states | keyword | "deceptive and unfair trade practices" w/15 (consumer or "actual damages") | **out_of_scope**: #2 Treehouse Foods, Inc. v. Green Mountain Coffee Roasters, Inc — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #3 Technolojoy, LLC v. BHPH Consulting Services, LLC — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #5 Midway Labs USA, LLC v. South Service Trading, S.A. — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #6 Greer v. Hagen — District Court, E.D. Tennessee (federal_court_in_state_scope)<br>**out_of_scope**: #7 Metro Worldwide, LLC v. ZYP, LLC — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #8 Edgewater by the Bay LLLP v. Gaunchez (In re Edgewater by th — United States Bankruptcy Court, S.D. Florida. (federal_court_in_state_scope)<br>**out_of_scope**: #10 Hodges v. Harrison — District Court, S.D. Florida (federal_court_in_state_scope) |
| LF-BS-1352 | federal_circuit 2 | keyword | "likelihood of confusion" w/15 (trademark or "strength of the mark") | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-1357 | all_states_and_federal 2020-01-01– | keyword | "design defect" w/s "consumer expectations" | **result_missing_court**: #7 Bruce v. Igloo Products Corp. (no cite) |
| LF-BS-1358 | all_states 1990-01-01–2010-12-31 | keyword | invitee /10 trespasser | **duplicate_hit**: #3 Gladon v. Greater Cleveland Regional Transit Auth. 75 Ohio St. 3d 312 |
| LF-BS-1362 | all_federal | keyword | "cell-site location" & warrant % civil | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-1363 | all_states_and_federal | keyword | ("rule of reason" OR "per se") /s "anticompetitive effects" | **result_missing_court**: #8 Sidibe v. Health (no cite)<br>**landmark_missing**: wanted /leegin\|ohio v\. am\|american express\|state oil\|alston\|continental t\.v\|bmi\|broad\. music/ in top 10 |
| LF-BS-1364 | one_state GA | keyword | ("parol evidence rule" OR "parol evidence") /s integrat! | **empty**: no results |
| LF-BS-1366 | one_state CO 1990-01-01–2010-12-31 | keyword | "cohabitation" /p "express contract" & implied | **empty**: no results |
| LF-BS-1370 | all_federal | keyword | asylum AND persecution AND "particular social group" | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-1372 | all_federal | keyword | ("fair labor standards act" OR overtime) AND "regular rate" NOT criminal | **landmark_missing**: wanted /encino\|christopher v\. smithkline\|helix energy\|integrity staffing/ in top 10 |
| LF-BS-1374 | one_state WA | keyword | "pollution exclusion" /p irritant & contaminant | **duplicate_hit**: #6 City of Bremerton v. Harbor Ins. Co. 963 P.2d 194 |
| LF-BS-1375 | one_state_plus_federal NV | keyword | ("non-compete" OR "covenant not to compete") /s "legitimate business interest" | **empty**: no results |
| LF-BS-1379 | federal_circuit 9 –1999-12-31 | keyword | "patent eligible" w/s "section 101" | **empty**: no results |
| LF-BS-1382 | one_state IA 2015-01-01– | keyword | foreclosure & standing % criminal | **empty**: no results |
| LF-BS-1384 | one_state_plus_federal MA 2023-01-01– | keyword | ("cohabitation" OR "nonmarital partners") /s "express contract" | **empty**: no results |
| LF-BS-1388 | one_state CT | keyword | "restrictive covenant" +s "homeowners association" | **empty**: no results |
| LF-BS-1394 | one_state_plus_federal CT | keyword | "security deposit" & tenant % criminal | **empty**: no results |
| LF-BS-1402 | all_federal | keyword | (asylum OR "well-founded fear") AND "particular social group" NOT contract | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-1406 | federal_circuit 11 | keyword | "automatic stay" w/p "section 362" and debtor | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-1407 | one_state MI | keyword | "parol evidence rule" +s integrat! | **empty**: no results |
| LF-BS-1409 | one_state_plus_federal DE | keyword | ("business judgment rule" OR "duty of loyalty") /s "duty of care" | **landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-1414 | federal_district NH | keyword | spoliation /s "adverse inference" | **duplicate_hit**: #4 Masello v. The Stanley Works et al. 2011 DNH 195 |
| LF-BS-1416 | one_state_plus_federal MT | keyword | "cohabitation" w/s "express contract" | **empty**: no results |
| LF-BS-1418 | federal_circuit 3 2020-01-01– | keyword | "likelihood of confusion" & trademark % criminal | **empty**: no results |
| LF-BS-1422 | federal_circuit 1 | keyword | "motion to dismiss" w/s plausib! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-1423 | one_state WY 2020-01-01– | keyword | "joint and several liability" AND tortfeasor! AND NOT contract | **empty**: no results |
| LF-BS-1426 | federal_district PA | keyword | "malicious prosecution" & "probable cause" % contract | **empty**: no results |
| LF-BS-1432 | one_state DC | keyword | "trade secret" /s "reasonable measures" | **empty**: no results |
| LF-BS-1434 | one_state MN –1999-12-31 | keyword | hir! /p "negligent supervision" | **empty**: no results |
| LF-BS-1435 | one_state SD | keyword | "demand futility" AND "demand excused" AND NOT criminal | **empty**: no results |
| LF-BS-1439 | one_state_plus_federal GA | keyword | "parol evidence rule" w/p integrat! and ambigu! | **empty**: no results |
| LF-BS-1441 | one_state_plus_federal MD | keyword | "child support" & imput! % criminal | **empty**: no results |
| LF-BS-1443 | one_state AZ 2023-01-01– | keyword | "tortious interference" /10 "business relationship" | **empty**: no results |
| LF-BS-1445 | one_state NV 2015-01-01– | keyword | "prenuptial agreement" +s "full disclosure" | **empty**: no results |
| LF-BS-1447 | one_state_plus_federal CA | keyword | "informed consent" & "material risk" % patent | **empty**: no results<br>**landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-1449 | federal_circuit 9 | keyword | indiffer! /25 "eighth amendment" | **landmark_missing**: wanted /estelle\|farmer v\. brennan\|helling\|wilson v\. seiter/ in top 10 |
| LF-BS-1452 | federal_circuit 9 2000-01-01–2009-12-31 | keyword | "patent eligible" w/p "section 101" and "inventive concept" | **empty**: no results |
| LF-BS-1456 | federal_circuit 2 | keyword | "likelihood of confusion" AND trademark AND NOT criminal | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-1458 | one_state AZ 1990-01-01–2010-12-31 | keyword | (guardianship OR "incapacitated person") /s ward | **duplicate_hit**: #2 Kelly v. Elliston 910 P.2d 665<br>**duplicate_hit**: #5 Fiduciary Services, Inc. v. Shano 869 P.2d 1203 |
| LF-BS-1465 | all_federal | keyword | "prevailing party" /10 lodestar | **landmark_missing**: wanted /hensley\|buckhannon\|perdue\|fox v\. vice\|christiansburg/ in top 10 |
| LF-BS-1466 | federal_district MA | keyword | deprivat! /25 deprivat! | **empty**: no results |
| LF-BS-1469 | all_states | keyword | relian! /p "clear and definite promise" | **empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query |
| LF-BS-1479 | federal_circuit 3 | keyword | "patent eligible" w/15 ("section 101" or "inventive concept") | **landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-1480 | one_state_plus_federal WA | keyword | spoliation & "adverse inference" % patent | **empty**: no results |
| LF-BS-1481 | all_federal | keyword | "rule of reason" w/p "anticompetitive effects" and "relevant market" | **landmark_missing**: wanted /leegin\|ohio v\. am\|american express\|state oil\|alston\|continental t\.v\|bmi\|broad\. music/ in top 10 |
| LF-BS-1483 | federal_circuit 7 2015-01-01– | keyword | plausib! /p plausib! | **empty**: no results |
| LF-BS-1484 | one_state_plus_federal NV | keyword | abstention +s "pending state" | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-1486 | all_federal | keyword | stay! /p "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-1487 | one_state NV | keyword | relian! /p "clear and definite promise" | **empty**: no results |
| LF-BS-1492 | one_state OH | keyword | "undue influence" & testator % criminal | **empty**: no results |
| LF-BS-1493 | one_state OK | keyword | "motion to compel arbitration" & unconscionab! % criminal | **empty**: no results |
| LF-BS-1494 | one_state_plus_federal ME –1999-12-31 | keyword | "restrictive covenant" /10 "homeowners association" | **empty**: no results |
| LF-BS-1495 | one_state_plus_federal IA 2023-01-01– | keyword | pierc! /p undercapitaliz! | **empty**: no results |
| LF-BS-1496 | one_state ME 2000-01-01–2009-12-31 | keyword | "prenuptial agreement" w/s "full disclosure" | **empty**: no results |
| LF-BS-1497 | us_supreme_court | keyword | "economic substance" AND "business purpose" AND NOT criminal | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-1499 | federal_circuit dc | keyword | ("arbitrary and capricious" OR "reasoned decisionmaking") /s agency | **landmark_missing**: wanted /state farm\|motor vehicle mfrs\|overton park\|dhs v\. regents\|fcc v\. fox\|encino/ in top 10 |
| LF-BS-1502 | federal_district LA 2000-01-01–2009-12-31 | keyword | "motion to dismiss" /s plausib! | **empty**: no results |
| LF-BS-1506 | federal_circuit 2 | keyword | "likelihood of confusion" AND trademark AND "strength of the mark" | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-1512 | all_states 2023-01-01– | keyword | "procedural due process" AND "property interest" AND NOT contract | **out_of_scope**: #1 Moy v. City of Milwaukee and Jeffrey Norman — District Court, E.D. Wisconsin (federal_court_in_state_scope)<br>**out_of_scope**: #2 Kingston v. Gregory Strange, Frank Caridi, Kevin Greiner, St — District Court, D. Massachusetts (federal_court_in_state_scope)<br>**out_of_scope**: #4 Gallo v. District of Columbia — District Court, District of Columbia (federal_court_in_state_scope)<br>**out_of_scope**: #5 Lotts v. Rich — District Court, M.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #6 Joshua Lawrence Robert Hughes v. Francisco M. Rabauliman, in — District Court, Northern Mariana Islands (federal_court_in_state_scope)<br>**out_of_scope**: #7 Robinson v. Debra Stephens et al. — District Court, W.D. Washington (federal_court_in_state_scope)<br>**out_of_scope**: #8 Eleveld v. Illinois Department of Children and Family Servic — District Court, N.D. Illinois (federal_court_in_state_scope) |
| LF-BS-1513 | all_states_and_federal | keyword | "restrictive covenant" /p "homeowners association" & enforc! | **result_missing_court**: #7 Pratik Pandharipande, MD. v. FSD Corporation (no cite) |
| LF-BS-1515 | federal_district AL | keyword | nondischargeab! +s "false pretenses" | **empty**: no results |
| LF-BS-1516 | one_state ND 1990-01-01–2010-12-31 | keyword | "fraudulent inducement" & "justifiable reliance" % criminal | **empty**: no results |
| LF-BS-1518 | us_supreme_court | keyword | tak! /p "investment-backed expectations" | **landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10 |
| LF-BS-1522 | one_state CO 2000-01-01–2009-12-31 | keyword | "dog bite" w/s "strict liability" | **empty**: no results |
| LF-BS-1523 | one_state_plus_federal MI | keyword | "parol evidence rule" +s integrat! | **empty**: no results |
| LF-BS-1524 | one_state_plus_federal NH | keyword | "child support" & imput! % criminal | **empty**: no results |
| LF-BS-1527 | one_state HI 1990-01-01–2010-12-31 | keyword | "informed consent" /10 "material risk" | **empty**: no results |
| LF-BS-1529 | one_state_plus_federal MA | keyword | preclu! /25 "same cause of action" | **empty**: no results<br>**landmark_missing**: wanted /taylor v\. sturgell\|federated dep\|allen v\. mccurry\|semtek/ in top 10 |
| LF-BS-1530 | one_state_plus_federal TX | keyword | "anticipatory repudiation" w/15 (repudiat! or "adequate assurance") | **empty**: no results |
| LF-BS-1531 | one_state NJ | keyword | "proximate cause" /s foreseeab! | **empty**: no results |
| LF-BS-1532 | federal_circuit 4 2020-01-01– | keyword | "excessive force" & "fourth amendment" % contract | **empty**: no results |
| LF-BS-1533 | one_state SC | keyword | "anticipatory repudiation" AND repudiat! AND "adequate assurance" | **empty**: no results |
| LF-BS-1535 | one_state AK | keyword | therap! /25 "identifiable victim" | **empty**: no results |
| LF-BS-1536 | all_states_and_federal 2020-01-01– | keyword | "parallel conduct" w/15 (conspira! or "sherman act") | **empty**: no results |
| LF-BS-1543 | one_state_plus_federal ID –1999-12-31 | keyword | "parol evidence rule" /s integrat! | **empty**: no results |
| LF-BS-1544 | one_state DE | keyword | "liquidated damages" & penalty % criminal | **empty**: no results |
| LF-BS-1546 | all_states | keyword | "prevailing party" w/s lodestar | **out_of_scope**: #2 Peterson v. West TN Expediting, Inc. — District Court, W.D. Tennessee (federal_court_in_state_scope)<br>**out_of_scope**: #4 Kubiak v. County of Ravalli — District Court, D. Montana (federal_court_in_state_scope)<br>**out_of_scope**: #5 Joe Hand Promotions Incorporated v. Taco Spot III LLC — District Court, D. Arizona (federal_court_in_state_scope)<br>**out_of_scope**: #8 Gonzalez v. MultiCare Health System — District Court, W.D. Washington (federal_court_in_state_scope)<br>**out_of_scope**: #9 T.H. v. DeKalb County School District — District Court, N.D. Georgia (federal_court_in_state_scope)<br>**out_of_scope**: #10 Roma v. David Carmili, Physician, P.C., David Carmili — District Court, E.D. New York (federal_court_in_state_scope) |
| LF-BS-1547 | one_state_plus_federal KS | keyword | constru! /25 "intrinsic evidence" | **empty**: no results<br>**landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-1551 | us_supreme_court | keyword | "statute of limitations" AND "equitable tolling" AND "discovery rule" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-1552 | one_state_plus_federal MN | keyword | "respondeat superior" w/s "scope of employment" | **duplicate_hit**: #10 CB Ex Rel. LB v. LUTHERAN 726 N.W.2d 127 |
| LF-BS-1554 | one_state_plus_federal NY 2015-01-01– | keyword | "modification of the trust" w/s settlor | **empty**: no results |
| LF-BS-1556 | federal_district LA | keyword | causat! /p "inflated price" | **empty**: no results |
| LF-BS-1557 | one_state AL | keyword | "second amendment" w/s "historical tradition" | **empty**: no results |
| LF-BS-1560 | one_state MA 2015-01-01– | keyword | "pollution exclusion" /10 irritant | **empty**: no results |
| LF-BS-1563 | all_federal | keyword | "crime involving moral turpitude" /10 "categorical approach" | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-1565 | federal_circuit 8 | keyword | "claim construction" w/p specification and "intrinsic evidence" | **landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-1573 | all_states_and_federal 2023-01-01– | keyword | "personal jurisdiction" w/p "minimum contacts" and "fair play" | **result_missing_court**: #4 RDF Agent, LLC, Related Fund Managment, LLC, and Brian Sedri (no cite) |
| LF-BS-1574 | one_state WY | keyword | "wrongful death" /10 damages | **duplicate_hit**: #7 In the Matter of the Wrongful Death of Daniel P. Soran, Ii,  2014 WY 28<br>**duplicate_hit**: #10 Gibson v. STATE THROUGH DEPT. OF REVENUE 811 P.2d 726 |
| LF-BS-1577 | one_state TX 2000-01-01–2009-12-31 | keyword | exculpat! /25 suppress! | **empty**: no results |
| LF-BS-1581 | one_state CT –1999-12-31 | keyword | "economic loss rule" AND "purely economic" AND NOT criminal | **empty**: no results |
| LF-BS-1584 | federal_circuit 11 | keyword | persecut! /25 "particular social group" | **empty**: no results<br>**landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-1586 | us_supreme_court | keyword | citizen! /25 remov! | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-1587 | all_states_and_federal | keyword | "pierce the corporate veil" /10 undercapitaliz! | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query |
| LF-BS-1589 | federal_district CO 2023-01-01– | keyword | "motion to dismiss" /p plausib! & "factual allegations" | **empty**: no results |
| LF-BS-1591 | all_states | keyword | "collateral estoppel" /p "actually litigated" & "full and fair opportunity" | **out_of_scope**: #6 Sial v. Hameed — United States Bankruptcy Court, D. Colorado (federal_court_in_state_scope) |
| LF-BS-1597 | all_states | keyword | ("statute of limitations" OR "limitations period") /s "equitable tolling" | **out_of_scope**: #3 Sehr v. Val Verde Hosp. Corp. — District Court, W.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #5 Holloway v. Jones — District Court, E.D. Michigan (federal_court_in_state_scope)<br>**out_of_scope**: #9 Rodriguez v. Elo — District Court, E.D. Michigan (federal_court_in_state_scope) |
| LF-BS-1599 | federal_circuit 8 2000-01-01–2009-12-31 | keyword | "vacate the arbitration award" w/15 ("exceeded their powers" or "evident partiality") | **duplicate_hit**: #6 Manion v. Nagin 392 F.3d 294 |
| LF-BS-1600 | one_state FL 2020-01-01– | keyword | "parol evidence rule" AND integrat! AND ambigu! | **empty**: no results |
| LF-BS-1603 | one_state FL 2020-01-01– | keyword | ("negligent infliction of emotional distress" OR "bystander recovery") AND "close relationship" NOT contract | **empty**: no results |
| LF-BS-1609 | us_supreme_court | keyword | "motion to dismiss" w/s plausib! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-1610 | one_state IA –1999-12-31 | keyword | "motion to compel arbitration" w/s unconscionab! | **empty**: no results |
| LF-BS-1611 | all_states | keyword | ("prevailing party" OR "attorney's fees") /s lodestar | **out_of_scope**: #8 Velazquez v. Johnson Deli NY Inc. — District Court, S.D. New York (federal_court_in_state_scope) |
| LF-BS-1615 | one_state_plus_federal GA | keyword | ("automatic stay" OR "relief from stay") /s "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-1622 | all_states | keyword | "economic loss rule" /p "purely economic" & contract | **out_of_scope**: #6 Kelly v. Georgia-Pacific LLC — District Court, E.D. North Carolina (federal_court_in_state_scope) |
| LF-BS-1623 | one_state_plus_federal AZ | keyword | scienter w/s "rule 10b-5" | **landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-1628 | one_state_plus_federal NE 2020-01-01– | keyword | "anticipatory repudiation" /10 repudiat! | **empty**: no results |
| LF-BS-1629 | all_states 2015-01-01– | keyword | "promissory estoppel" w/15 ("clear and definite promise" or reliance) | **out_of_scope**: #4 Louis DeGidio, Inc. v. Industrial Combustion, LLC — District Court, D. Minnesota (federal_court_in_state_scope)<br>**out_of_scope**: #6 Lead-Off Management, Inc. v. Congo Brands Holding Company, L — District Court, D. Maryland (federal_court_in_state_scope)<br>**out_of_scope**: #7 Frozen Wheels, LLC v. Potomac Valley Home Medical, Inc. — District Court, D. Maryland (federal_court_in_state_scope)<br>**out_of_scope**: #9 Newark Cab Ass'n v. City of Newark — District Court, D. New Jersey (federal_court_in_state_scope)<br>**out_of_scope**: #10 Trugreen Limited Partnership v. Allegis Global Solutions, In — District Court, D. Maryland (federal_court_in_state_scope) |
| LF-BS-1631 | one_state NJ | keyword | hir! /p "negligent supervision" | **empty**: no results |
| LF-BS-1635 | federal_circuit federal | keyword | classif! /25 classification | **landmark_missing**: wanted /cleburne\|romer\|craig v\. boren\|virginia\|students for fair\|adarand\|vill\. of willowbrook/ in top 10 |
| LF-BS-1636 | one_state KY | keyword | locat! /25 "reasonable expectation of privacy" | **empty**: no results |
| LF-BS-1640 | one_state_plus_federal NJ 1990-01-01–2010-12-31 | keyword | "social host" & intoxicat! % contract | **empty**: no results |
| LF-BS-1642 | federal_circuit 11 2000-01-01–2009-12-31 | keyword | arbitra! /p unconscionab! | **empty**: no results |
| LF-BS-1643 | federal_district SC 2000-01-01–2009-12-31 | keyword | nonmov! /p "genuine dispute" | **empty**: no results |
| LF-BS-1644 | one_state_plus_federal MA | keyword | "automobile exception" AND "probable cause" AND warrantless | **boolean_unsatisfied**: Chambers v. Maroney — required terms/proximity not met in full text |
| LF-BS-1646 | all_states –1999-12-31 | keyword | ("economic loss rule" OR "economic loss doctrine") AND contract NOT criminal | **out_of_scope**: #1 Budgetel Inns, Inc. v. Micros Systems, Inc. — District Court, E.D. Wisconsin (federal_court_in_state_scope) |
| LF-BS-1648 | one_state MI | keyword | "anticipatory repudiation" AND repudiat! AND "adequate assurance" | **empty**: no results |
| LF-BS-1660 | all_states_and_federal 2000-01-01–2009-12-31 | keyword | "preferential transfer" /p "ordinary course" & trustee | **result_missing_court**: #2 Warsco v. Household Bank F.S.B. (272 B.R. 246) |
| LF-BS-1661 | one_state KS | keyword | "wrongful death" /s damages | **duplicate_hit**: #4 Adams v. VIA CHRISTI REGINAL MED. CENTER 19 P.3d 132 |
| LF-BS-1665 | one_state_plus_federal MS | keyword | "cell-site location" /s warrant | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-1668 | all_federal | keyword | "diversity jurisdiction" +s "amount in controversy" | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10<br>**boolean_unsatisfied**: Kan v. General Motors LLC — required terms/proximity not met in full text |
| LF-BS-1669 | one_state MT | keyword | "transitory foreign substance" +s "actual or constructive knowledge" | **empty**: no results |
| LF-BS-1674 | all_federal | keyword | "likelihood of confusion" +s trademark | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-1675 | federal_circuit 9 | keyword | scienter /p "rule 10b-5" & pslra | **landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-1677 | all_federal | keyword | "prior bad acts" /10 "other crimes" | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-1678 | one_state_plus_federal CA | keyword | consorti! /p spouse | **empty**: no results |
| LF-BS-1681 | one_state HI | keyword | "double jeopardy" & blockburger % civil | **empty**: no results |
| LF-BS-1682 | one_state_plus_federal TN | keyword | "fraudulent inducement" & "justifiable reliance" % criminal | **empty**: no results |
| LF-BS-1688 | one_state CA | keyword | "negligent infliction of emotional distress" /p "zone of danger" & "close relationship" | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-1689 | one_state_plus_federal FL | keyword | "motion to compel arbitration" /p unconscionab! & delegation | **landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-1690 | one_state GA | keyword | therap! /25 "identifiable victim" | **empty**: no results |
| LF-BS-1692 | one_state_plus_federal CA | keyword | disclos! /25 physician | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-1693 | us_supreme_court –1999-12-31 | keyword | ("second amendment" OR "keep and bear arms") /s "historical tradition" | **empty**: no results |
| LF-BS-1695 | one_state_plus_federal NH 1990-01-01–2010-12-31 | keyword | "duty to warn" w/p psychotherapist and "identifiable victim" | **empty**: no results |
| LF-BS-1699 | federal_circuit 6 | keyword | confirm! /25 "fair and equitable" | **duplicate_hit**: #9 RFC v. Denver & RGWR Co. 328 U.S. 495<br>**landmark_missing**: wanted /bank of am\|203 n\. lasalle\|till v\. sct\|radlax\|czyzewski/ in top 10 |
| LF-BS-1700 | all_federal 2000-01-01–2009-12-31 | keyword | nondischargeab! /p "false pretenses" & debtor | **empty**: no results |
| LF-BS-1702 | one_state RI 2020-01-01– | keyword | "constructive eviction" & tenant % criminal | **empty**: no results |
| LF-BS-1703 | one_state CA | keyword | "additional insured" & "arising out of" % criminal | **empty**: no results |
| LF-BS-1704 | one_state_plus_federal NY | keyword | "anticipatory repudiation" w/p repudiat! and "adequate assurance" | **empty**: no results |
| LF-BS-1705 | federal_circuit 2 | keyword | "likelihood of confusion" & trademark % criminal | **empty**: no results<br>**landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-1707 | all_states_and_federal | keyword | "fair labor standards act" /10 exempt! | **result_missing_court**: #6 Opinion No. (1985) (no cite)<br>**result_missing_court**: #9 Opinion Number (no cite)<br>**landmark_missing**: wanted /encino\|christopher v\. smithkline\|helix energy\|integrity staffing/ in top 10 |
| LF-BS-1709 | all_states_and_federal | keyword | "deceptive and unfair trade practices" & consumer % criminal | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query |
| LF-BS-1710 | one_state NJ | keyword | "anticipatory repudiation" /p repudiat! & "adequate assurance" | **empty**: no results |
| LF-BS-1712 | one_state GA | keyword | "equitable distribution" +s "nonmarital" | **empty**: no results |
| LF-BS-1713 | all_federal | keyword | "prevailing party" w/p lodestar and "reasonable hourly rate" | **landmark_missing**: wanted /hensley\|buckhannon\|perdue\|fox v\. vice\|christiansburg/ in top 10 |
| LF-BS-1716 | all_states 2015-01-01– | keyword | "implied warranty of merchantability" & disclaim! % criminal | **empty**: no results |
| LF-BS-1720 | one_state_plus_federal WA 2015-01-01– | keyword | "force majeure" /s frustration | **empty**: no results |
| LF-BS-1725 | one_state GA 2020-01-01– | keyword | "modification of the trust" AND settlor AND NOT criminal | **empty**: no results |
| LF-BS-1728 | all_states | keyword | "warranty of habitability" w/s tenant | **landmark_missing**: wanted /javins\|green v\. superior court/ in top 10 |
| LF-BS-1730 | federal_circuit 1 1990-01-01–2010-12-31 | keyword | scienter w/p "rule 10b-5" and pslra | **empty**: no results |
| LF-BS-1732 | federal_district RI | keyword | ("procedural due process" OR "notice and an opportunity to be heard") AND deprivat! NOT contract | **empty**: no results |
| LF-BS-1735 | one_state IL | keyword | "creditor's claim" /s "personal representative" | **empty**: no results |
| LF-BS-1740 | all_states 2023-01-01– | keyword | defen! /p "potential for coverage" | **empty**: no results |
| LF-BS-1745 | all_states | keyword | "comparative negligence" /p "contributory negligence" & "last clear chance" | **landmark_missing**: wanted /li v\. yellow cab/ in top 10 |
| LF-BS-1746 | one_state_plus_federal WY | keyword | "anticipatory repudiation" /s repudiat! | **empty**: no results |
| LF-BS-1751 | one_state UT | keyword | "cohabitation" w/s "express contract" | **empty**: no results |
| LF-BS-1752 | one_state_plus_federal TN –1999-12-31 | keyword | tortfeas! /p tortfeasor! | **after_dateTo**: #4 2004-05-03 > 1999-12-31 |
| LF-BS-1756 | all_federal 2023-01-01– | keyword | standing & "injury in fact" % divorce | **empty**: no results |
| LF-BS-1757 | all_states_and_federal | keyword | asylum w/15 (persecution or "particular social group") | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-1759 | one_state GA | keyword | "anticipatory repudiation" AND repudiat! AND "adequate assurance" | **empty**: no results |
| LF-BS-1761 | one_state_plus_federal GA | keyword | "cohabitation" AND "express contract" AND implied | **empty**: no results |
| LF-BS-1762 | one_state VT | keyword | "equitable distribution" /p "nonmarital" & commingl! | **empty**: no results |
| LF-BS-1763 | one_state WA | keyword | "duty to defend" w/15 ("potential for coverage" or insurer) | **duplicate_hit**: #2 Overton v. Consolidated Ins. Co. 38 P.3d 322 |
| LF-BS-1764 | one_state IL 2000-01-01–2009-12-31 | keyword | "economic loss rule" /10 "purely economic" | **empty**: no results |
| LF-BS-1769 | one_state WY 2015-01-01– | keyword | "respondeat superior" w/s "scope of employment" | **empty**: no results |
| LF-BS-1774 | all_states_and_federal 2020-01-01– | keyword | retaliation AND "materially adverse" AND NOT criminal | **result_missing_court**: #6 Wilson v. District of Columbia (no cite) |
| LF-BS-1781 | federal_circuit 4 | keyword | "claim construction" & specification % criminal | **empty**: no results<br>**landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-1784 | one_state GA | keyword | "promissory estoppel" /s "clear and definite promise" | **empty**: no results |
| LF-BS-1787 | all_states | keyword | "design defect" AND "consumer expectations" AND NOT contract | **landmark_missing**: wanted /tincher\|azzarello/ in top 10 |
| LF-BS-1789 | one_state KS 2023-01-01– | keyword | "creditor's claim" /s "personal representative" | **empty**: no results |
| LF-BS-1793 | one_state_plus_federal AK | keyword | "parol evidence rule" w/s integrat! | **empty**: no results |
| LF-BS-1794 | one_state MD | keyword | "vacate the arbitration award" AND "exceeded their powers" AND NOT criminal | **duplicate_hit**: #10 PG CTY. EDUCATORS'ASS'N, INC. v. Bd. of Educ. 486 A.2d 228 |
| LF-BS-1795 | one_state_plus_federal KS | keyword | "promissory estoppel" +s "clear and definite promise" | **empty**: no results |
| LF-BS-1796 | federal_circuit 7 | keyword | erisa w/15 ("abuse of discretion" or "arbitrary and capricious") | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-1797 | us_supreme_court | keyword | "patent eligible" & "section 101" % criminal | **empty**: no results<br>**landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-1799 | one_state_plus_federal OH | keyword | "parol evidence rule" +s integrat! | **empty**: no results |
| LF-BS-1804 | federal_circuit 10 2023-01-01– | keyword | arbitra! /p unconscionab! | **empty**: no results |
| LF-BS-1808 | one_state_plus_federal MI –1999-12-31 | keyword | "cohabitation" +s "express contract" | **empty**: no results |
| LF-BS-1809 | one_state_plus_federal GA | keyword | "prior bad acts" w/p "other crimes" and propensity | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-1810 | one_state IN | keyword | "duty to warn" /p psychotherapist & "identifiable victim" | **empty**: no results |
| LF-BS-1811 | all_states 1990-01-01–2010-12-31 | keyword | ("trade secret" OR misappropriat!) /s "reasonable measures" | **out_of_scope**: #1 Western Medical Consultants, Inc. v. Johnson — District Court, D. Oregon (federal_court_in_state_scope)<br>**out_of_scope**: #2 United Rentals, Inc. v. Price — District Court, D. Connecticut (federal_court_in_state_scope)<br>**out_of_scope**: #4 Medassets, Inc. v. Federal Insurance — District Court, N.D. Georgia (federal_court_in_state_scope)<br>**out_of_scope**: #5 United States v. Genovese — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #6 IDX Systems Corp. v. Epic Systems Corp. — District Court, W.D. Wisconsin (federal_court_in_state_scope)<br>**out_of_scope**: #7 Acrymed, Inc. v. Convatec — District Court, D. Oregon (federal_court_in_state_scope)<br>**out_of_scope**: #8 United States v. Hsu — District Court, E.D. Pennsylvania (federal_court_in_state_scope) |
| LF-BS-1812 | one_state FL | keyword | "proportional to the needs of the case" w/15 (discovery or "undue burden") | **empty**: no results |
| LF-BS-1813 | one_state RI 2000-01-01–2009-12-31 | keyword | ("liquidated damages" OR "liquidated damages clause") AND "reasonable forecast" NOT criminal | **empty**: no results |
| LF-BS-1814 | one_state_plus_federal MA | keyword | "prenuptial agreement" w/s "full disclosure" | **empty**: no results |
| LF-BS-1819 | one_state_plus_federal IL | keyword | "pierce the corporate veil" w/15 (undercapitaliz! or "corporate form") | **empty**: no results |
| LF-BS-1820 | one_state_plus_federal CA | keyword | invit! /p trespasser | **landmark_missing**: wanted /rowland v\. christian/ in top 10 |
| LF-BS-1827 | one_state_plus_federal NJ | keyword | confirm! /25 "fair and equitable" | **duplicate_hit**: #8 RFC v. Denver & RGWR Co. 328 U.S. 495<br>**landmark_missing**: wanted /bank of am\|203 n\. lasalle\|till v\. sct\|radlax\|czyzewski/ in top 10 |
| LF-BS-1828 | one_state_plus_federal KS | keyword | erisa & "abuse of discretion" % criminal | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-1831 | one_state CA | keyword | defect! /25 "unreasonably dangerous" | **landmark_missing**: wanted /greenman/ in top 10 |
| LF-BS-1833 | all_states_and_federal | keyword | "business judgment rule" +s "duty of care" | **landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-1834 | us_supreme_court 2015-01-01– | keyword | "claim construction" /s specification | **empty**: no results |
| LF-BS-1835 | one_state CA | keyword | "equitable distribution" w/15 ("nonmarital" or commingl!) | **empty**: no results |
| LF-BS-1837 | one_state_plus_federal MI 2015-01-01– | keyword | "negligent infliction of emotional distress" /10 "zone of danger" | **empty**: no results |
| LF-BS-1838 | one_state_plus_federal IL | keyword | ("intentional infliction of emotional distress" OR "outrageous conduct") /s "extreme and outrageous" | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-1841 | federal_district WY 2020-01-01– | keyword | "age discrimination" w/p "but-for" and pretext | **empty**: no results |
| LF-BS-1842 | one_state_plus_federal OH 2015-01-01– | keyword | "non-compete" & "legitimate business interest" % criminal | **empty**: no results |
| LF-BS-1844 | federal_district MN | keyword | "cell-site location" w/15 (warrant or "reasonable expectation of privacy") | **empty**: no results |
| LF-BS-1846 | all_states –1999-12-31 | keyword | "trade secret" AND "reasonable measures" AND NOT criminal | **out_of_scope**: #1 Ivy Mar Co., Inc. v. CR Seasons Ltd. — District Court, E.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #9 Western Medical Consultants, Inc. v. Johnson — District Court, D. Oregon (federal_court_in_state_scope)<br>**out_of_scope**: #10 Flotec, Inc. v. Southern Research, Inc. — District Court, S.D. Indiana (federal_court_in_state_scope) |
| LF-BS-1848 | one_state NH 1990-01-01–2010-12-31 | keyword | "implied consent" & refus! % civil | **empty**: no results |
| LF-BS-1849 | one_state MT | keyword | consorti! /25 derivative | **empty**: no results |
| LF-BS-1854 | one_state WV 2020-01-01– | keyword | "social host" AND intoxicat! AND "guest" | **empty**: no results |
| LF-BS-1856 | all_states | keyword | employ! /p "scope of employment" | **out_of_scope**: #10 White v. Montesano — District Court, W.D. New York (federal_court_in_state_scope) |
| LF-BS-1857 | one_state CT | keyword | "negligent infliction of emotional distress" /p "zone of danger" & "close relationship" | **empty**: no results |
| LF-BS-1858 | one_state AR | keyword | "equitable indemnity" /10 contribution | **empty**: no results |
| LF-BS-1859 | one_state_plus_federal IL | keyword | bystand! /p "zone of danger" | **empty**: no results |
| LF-BS-1860 | one_state_plus_federal ID | keyword | "cell-site location" w/p warrant and "reasonable expectation of privacy" | **boolean_unsatisfied**: Katz v. United States — required terms/proximity not met in full text |
| LF-BS-1863 | all_states 2015-01-01– | keyword | "economic loss rule" /10 "purely economic" | **out_of_scope**: #2 Green Technology Lighting Corp. v. Insure Idaho, LLC — District Court, D. Idaho (federal_court_in_state_scope)<br>**out_of_scope**: #6 Critical Systems, LLC v. Addison HVAC,LLC — District Court, D. Maryland (federal_court_in_state_scope)<br>**out_of_scope**: #8 W.A. Call Mfg. Co., Inc. v. WiLine Networks Inc. — District Court, N.D. California (federal_court_in_state_scope) |
| LF-BS-1865 | all_states_and_federal | keyword | "market share liability" w/s des | **result_missing_court**: #9 Mellon v. Barre-National Drug Co. (1993 Pa. Dist. & Cnty. Dec. LEXIS 197)<br>**result_missing_court**: #10 In re New York County Des Litigation (142 F.R.D. 58)<br>**landmark_missing**: wanted /sindell\|hymowitz/ in top 10 |
| LF-BS-1867 | all_states_and_federal | keyword | ("preliminary injunction" OR "temporary restraining order") AND "likelihood of success" NOT divorce | **result_missing_court**: #3 Mesa v. City of Mesa (no cite)<br>**landmark_missing**: wanted /winter v\. n\|winter v\. natural\|ebay\|munaf\|nken/ in top 10 |
| LF-BS-1869 | federal_circuit 5 | keyword | "motion to dismiss" /p plausib! & "factual allegations" | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-1870 | federal_circuit 10 | keyword | "crime involving moral turpitude" /p "categorical approach" & removab! | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-1873 | one_state LA | keyword | "design defect" w/s "consumer expectations" | **empty**: no results |
| LF-BS-1874 | all_states_and_federal 2023-01-01– | keyword | vacat! /25 "evident partiality" | **result_missing_court**: #9 The Matter of TCR Sports Broadcasting Holding v. Partner (no cite) |
| LF-BS-1878 | us_supreme_court | keyword | ("automatic stay" OR "relief from stay") /s "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-1883 | federal_circuit 4 | keyword | asylum AND persecution AND "particular social group" | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-1885 | federal_circuit 11 | keyword | "regulatory taking" +s "investment-backed expectations" | **landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10 |
| LF-BS-1887 | one_state CO 1990-01-01–2010-12-31 | keyword | "parol evidence rule" +s integrat! | **empty**: no results |
| LF-BS-1888 | federal_circuit dc | keyword | prosecut! /p "probable cause" | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-1890 | one_state_plus_federal MA –1999-12-31 | keyword | "parol evidence rule" /10 integrat! | **empty**: no results |
| LF-BS-1896 | one_state_plus_federal TX | keyword | "rule of reason" /s "anticompetitive effects" | **boolean_unsatisfied**: Eastman Kodak Co. v. Image Technical Services, Inc. — required terms/proximity not met in full text |
| LF-BS-1897 | one_state NH | keyword | "duty to defend" AND "potential for coverage" AND insurer | **empty**: no results |
| LF-BS-1901 | one_state GA –1999-12-31 | keyword | "prevailing party" /s lodestar | **empty**: no results |
| LF-BS-1902 | one_state_plus_federal IL 2023-01-01– | keyword | "deliberate indifference" & prison! % contract | **empty**: no results |
| LF-BS-1905 | one_state_plus_federal MI | keyword | "modification of the trust" /10 settlor | **empty**: no results |
| LF-BS-1908 | all_federal | keyword | (abstention OR "younger abstention") /s "pending state" | **boolean_unsatisfied**: Younger v. Harris — required terms/proximity not met in full text |
| LF-BS-1909 | all_federal | keyword | obviousness +s "prior art" | **landmark_missing**: wanted /ksr\|graham v\. john deere/ in top 10 |
| LF-BS-1915 | one_state MO | keyword | "security deposit" & tenant % criminal | **empty**: no results |
| LF-BS-1917 | one_state OK | keyword | "prescriptive easement" /s servient | **empty**: no results |
| LF-BS-1919 | one_state_plus_federal PA 2020-01-01– | keyword | "social host" w/15 (intoxicat! or "guest") | **empty**: no results |
| LF-BS-1920 | one_state_plus_federal CT –1999-12-31 | keyword | "procedural due process" /10 "property interest" | **boolean_unsatisfied**: Mullane v. Central Hanover Bank & Trust Co. — required terms/proximity not met in full text |
| LF-BS-1921 | all_states | keyword | "negligent infliction of emotional distress" AND "zone of danger" AND NOT contract | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-1925 | all_federal | keyword | retaliat! /25 "causal connection" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-1927 | one_state MA | keyword | "prenuptial agreement" w/s "full disclosure" | **empty**: no results |
| LF-BS-1931 | federal_circuit 8 | keyword | utteran! /p hearsay | **empty**: no results |
| LF-BS-1932 | one_state_plus_federal PA 1990-01-01–2010-12-31 | keyword | "deceptive and unfair trade practices" +s consumer | **duplicate_hit**: #3 J & R Ice Cream Corp. v. California Smoothie Licensing Corp. 31 F.3d 1259 |
| LF-BS-1933 | us_supreme_court | keyword | deprivat! /p "property interest" | **empty**: no results<br>**landmark_missing**: wanted /mathews v\. eldridge\|goldberg v\. kelly\|loudermill\|roth\|mullane/ in top 10 |
| LF-BS-1934 | federal_circuit 2 2015-01-01– | keyword | "likelihood of confusion" & trademark % criminal | **empty**: no results |
| LF-BS-1935 | one_state_plus_federal WY | keyword | ("anticipatory repudiation" OR "anticipatory breach") /s repudiat! | **empty**: no results |
| LF-BS-1939 | federal_circuit 5 2023-01-01– | keyword | "motion to compel arbitration" w/s unconscionab! | **empty**: no results |
| LF-BS-1940 | one_state WV | keyword | "testamentary capacity" & testator % criminal | **empty**: no results |
| LF-BS-1945 | one_state MA 2020-01-01– | keyword | "cohabitation" /s "express contract" | **empty**: no results |
| LF-BS-1946 | federal_circuit 11 | keyword | "crime involving moral turpitude" /s "categorical approach" | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-1951 | one_state NE 2015-01-01– | keyword | "proportional to the needs of the case" w/p discovery and "undue burden" | **empty**: no results |
| LF-BS-1952 | all_federal | keyword | "loss causation" +s "inflated price" | **landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-1954 | federal_circuit 6 2015-01-01– | keyword | nondischargeab! /p "false pretenses" & debtor | **empty**: no results |
| LF-BS-1956 | federal_circuit 3 | keyword | "likelihood of confusion" +s trademark | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-1957 | one_state ME | keyword | interrogat! /p custody | **empty**: no results |
| LF-BS-1958 | one_state CA | keyword | manufactur! /25 manufacturer | **landmark_missing**: wanted /sindell\|hymowitz/ in top 10 |
| LF-BS-1959 | all_federal | keyword | "prevailing party" +s lodestar | **landmark_missing**: wanted /hensley\|buckhannon\|perdue\|fox v\. vice\|christiansburg/ in top 10 |
| LF-BS-1970 | one_state OH | keyword | "liquidated damages" w/p penalty and "reasonable forecast" | **empty**: no results |
| LF-BS-1973 | one_state NJ | keyword | pollut! /p irritant | **duplicate_hit**: #6 BRONZE v. Commerce & Ind. 611 A.2d 667 |
| LF-BS-1979 | one_state MA 2015-01-01– | keyword | "prenuptial agreement" +s "full disclosure" | **empty**: no results |
| LF-BS-1984 | one_state NJ 1990-01-01–2010-12-31 | keyword | "modification of the trust" /s settlor | **empty**: no results |
| LF-BS-1994 | all_states_and_federal | keyword | "prevailing party" /p lodestar & "reasonable hourly rate" | **landmark_missing**: wanted /hensley\|buckhannon\|perdue\|fox v\. vice\|christiansburg/ in top 10 |
| LF-BS-1998 | one_state KY | keyword | ("anticipatory repudiation" OR "anticipatory breach") AND "adequate assurance" NOT criminal | **empty**: no results |
| LF-BS-2000 | federal_circuit 10 | keyword | "motion to dismiss" /p plausib! & "factual allegations" | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-2003 | one_state_plus_federal DC | keyword | "vacate the arbitration award" /p "exceeded their powers" & "evident partiality" | **empty**: no results<br>**landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-2006 | federal_district DC | keyword | confus! /p trademark | **empty**: no results |
| LF-BS-2007 | federal_district MI | keyword | "parallel conduct" & conspira! % criminal | **empty**: no results |
| LF-BS-2009 | one_state_plus_federal WI | keyword | "pierce the corporate veil" /10 undercapitaliz! | **empty**: no results |
| LF-BS-2010 | one_state_plus_federal ND | keyword | ("intentional infliction of emotional distress" OR "outrageous conduct") /s "extreme and outrageous" | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-2012 | one_state WV | keyword | deprivat! /p "property interest" | **empty**: no results |
| LF-BS-2014 | one_state PA 1990-01-01–2010-12-31 | keyword | "procedural due process" w/15 ("property interest" or deprivat!) | **empty**: no results |
| LF-BS-2016 | one_state_plus_federal RI 2000-01-01–2009-12-31 | keyword | "design defect" w/15 ("consumer expectations" or "risk-utility") | **boolean_unsatisfied**: Punsoda-Diaz v. Ford Motor Company — required terms/proximity not met in full text |
| LF-BS-2019 | federal_district MN | keyword | "regulatory taking" /p "investment-backed expectations" & "economically viable" | **empty**: no results |
| LF-BS-2021 | one_state_plus_federal RI | keyword | "prior bad acts" +s "other crimes" | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-2023 | all_states_and_federal 2020-01-01– | keyword | "cohabitation" & "express contract" % criminal | **empty**: no results |
| LF-BS-2025 | one_state_plus_federal IL 2023-01-01– | keyword | "adverse possession" w/s "open and notorious" | **empty**: no results |
| LF-BS-2026 | one_state_plus_federal WA 2023-01-01– | keyword | relocat! /p custod! | **empty**: no results |
| LF-BS-2028 | one_state AZ | keyword | "economic loss rule" /s "purely economic" | **duplicate_hit**: #2 HUGHES CUSTOM BLDG, LLC v. Davey 212 P.3d 865 |
| LF-BS-2031 | one_state CA | keyword | "force majeure" & frustration % criminal | **empty**: no results |
| LF-BS-2032 | one_state NC | keyword | "promissory estoppel" AND "clear and definite promise" AND reliance | **empty**: no results |
| LF-BS-2033 | one_state_plus_federal TX 2020-01-01– | keyword | retaliat! /p "materially adverse" | **empty**: no results |
| LF-BS-2038 | one_state_plus_federal IL 1990-01-01–2010-12-31 | keyword | "default judgment" & "excusable neglect" % criminal | **empty**: no results |
| LF-BS-2042 | one_state AR | keyword | "equitable indemnity" w/15 (contribution or tortfeasor) | **empty**: no results |
| LF-BS-2043 | all_states | keyword | "preliminary injunction" AND "irreparable harm" AND NOT divorce | **out_of_scope**: #5 Midwest Sign & Screen Printing Supply Co. v. Robert Dalpe &  — District Court, D. Maine (federal_court_in_state_scope)<br>**out_of_scope**: #7 Centerline Logistics Corp. v. United States Department of La — District Court, District of Columbia (federal_court_in_state_scope)<br>**out_of_scope**: #8 Field v. McMaster — District Court, D. South Carolina (federal_court_in_state_scope) |
| LF-BS-2050 | one_state_plus_federal OH | keyword | homestead & devise % criminal | **empty**: no results |
| LF-BS-2052 | one_state SC 2000-01-01–2009-12-31 | keyword | "implied covenant of good faith and fair dealing" /10 discretion | **boolean_unsatisfied**: RoTec Services, Inc. v. Encompass Services, Inc. — required terms/proximity not met in full text |
| LF-BS-2056 | one_state IN –1999-12-31 | keyword | "motion to compel arbitration" /p unconscionab! & delegation | **empty**: no results |
| LF-BS-2062 | federal_circuit 5 | keyword | ("automatic stay" OR "relief from stay") /s "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-2068 | all_federal –1999-12-31 | keyword | (spoliation OR "destruction of evidence") /s "adverse inference" | **duplicate_hit**: #7 Vodusek v. Bayliner Marine Corporation 71 F.3d 148<br>**duplicate_hit**: #8 West v. Goodyear Tire & Rubber Company 167 F.3d 776 |
| LF-BS-2074 | one_state_plus_federal OH | keyword | ("negligent infliction of emotional distress" OR "bystander recovery") /s "zone of danger" | **duplicate_hit**: #4 Vance v. Consol. Rail Corp. 73 Ohio St. 3d 222 |
| LF-BS-2076 | one_state_plus_federal AL | keyword | "vacate the arbitration award" /10 "exceeded their powers" | **empty**: no results<br>**landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-2079 | one_state AK | keyword | "duty to defend" /s "potential for coverage" | **empty**: no results |
| LF-BS-2086 | one_state GA | keyword | "pierce the corporate veil" & undercapitaliz! % criminal | **empty**: no results |
| LF-BS-2089 | one_state VT 1990-01-01–2010-12-31 | keyword | "non-compete" AND "legitimate business interest" AND reasonabl! | **empty**: no results |
| LF-BS-2094 | one_state_plus_federal TN –1999-12-31 | keyword | "equitable distribution" +s "nonmarital" | **empty**: no results |
| LF-BS-2098 | us_supreme_court | keyword | nondischargeab! w/p "false pretenses" and debtor | **empty**: no results<br>**landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-2100 | one_state OK –1999-12-31 | keyword | convenien! /p "private interest" | **empty**: no results |
| LF-BS-2111 | one_state_plus_federal WI | keyword | "motion to compel arbitration" & unconscionab! % criminal | **landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-2112 | federal_circuit dc | keyword | "hostile work environment" w/s "severe or pervasive" | **boolean_unsatisfied**: Meritor Savings Bank, FSB v. Vinson — required terms/proximity not met in full text |
| LF-BS-2113 | one_state_plus_federal SD | keyword | "force majeure" & frustration % criminal | **empty**: no results |
| LF-BS-2114 | all_states 2000-01-01–2009-12-31 | keyword | "negligent infliction of emotional distress" w/s "zone of danger" | **out_of_scope**: #1 Faulkner v. Dowson Holding Co. — District Court, Virgin Islands (federal_court_in_state_scope)<br>**out_of_scope**: #2 Hutton v. Norwegian Cruise Line Ltd. — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #5 Sultan v. PLEASURE CRAFT CONTENDER 25' — District Court, D. Puerto Rico (federal_court_in_state_scope)<br>**out_of_scope**: #7 Siegel v. Ridgewells, Inc. — District Court, District of Columbia (federal_court_in_state_scope) |
| LF-BS-2120 | all_states | keyword | "general jurisdiction" w/s "at home" | **out_of_scope**: #5 Pathfinder Software, LLC v. Core Cashless, LLC — District Court, M.D. North Carolina (federal_court_in_state_scope) |
| LF-BS-2125 | one_state GA | keyword | convenien! /25 "public interest" | **empty**: no results |
| LF-BS-2129 | one_state SD 1990-01-01–2010-12-31 | keyword | ("negligent infliction of emotional distress" OR "bystander recovery") /s "zone of danger" | **empty**: no results |
| LF-BS-2141 | one_state MI | keyword | "liquidated damages" w/15 (penalty or "reasonable forecast") | **empty**: no results |
| LF-BS-2142 | all_federal | keyword | deference w/s "statutory ambiguity" | **landmark_missing**: wanted /loper bright\|chevron\|skidmore\|kisor\|auer\|mead/ in top 10 |
| LF-BS-2143 | one_state_plus_federal GA | keyword | stay! /p "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-2146 | all_states_and_federal | keyword | defect! /25 "risk-utility" | **landmark_missing**: wanted /tincher\|azzarello/ in top 10 |
| LF-BS-2150 | one_state MI | keyword | distribut! /p "nonmarital" | **empty**: no results |
| LF-BS-2151 | us_supreme_court | keyword | causat! /p "inflated price" | **empty**: no results<br>**landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2153 | one_state AL | keyword | "dog bite" AND "strict liability" AND NOT contract | **empty**: no results |
| LF-BS-2156 | one_state NE –1999-12-31 | keyword | "res judicata" /p "final judgment" & "same cause of action" | **duplicate_hit**: #9 Pipe & Piling Supplies (U.S.A.), Ltd. v. Betterman & Katelma 596 N.W.2d 24 |
| LF-BS-2159 | all_states | keyword | "parol evidence rule" w/s integrat! | **out_of_scope**: #1 Crockett & Myers, Ltd. v. NAPIER, FITZGERALLD & KIRBY, LLP — District Court, D. Nevada (federal_court_in_state_scope)<br>**out_of_scope**: #2 United States v. Wallace & Wallace Fuel Oil Co. — District Court, S.D. New York (federal_court_in_state_scope) |
| LF-BS-2161 | all_federal | keyword | "age discrimination" /p "but-for" & pretext | **landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10 |
| LF-BS-2163 | federal_district IL | keyword | apprendi & jury % civil | **empty**: no results |
| LF-BS-2164 | all_states 2020-01-01– | keyword | "proportional to the needs of the case" w/s discovery | **out_of_scope**: #1 Scott v. Complete Logistical Services, LLC — District Court, E.D. Louisiana (federal_court_in_state_scope)<br>**out_of_scope**: #2 Paulman v. Jones — District Court, E.D. Arkansas (federal_court_in_state_scope)<br>**out_of_scope**: #3 Boston Retirement System v. Alexion Pharmaceuticals Inc — District Court, D. Connecticut (federal_court_in_state_scope)<br>**out_of_scope**: #4 Steelers Keys, LLC v. High Tech National, LLC — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #5 (PS) Ysaguirre v. Rodriguez — District Court, E.D. California (federal_court_in_state_scope)<br>**out_of_scope**: #6 Tomassetti v. Little Giant Ladder Systems, LLC — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #7 Dr. Erik Natkin, DO PC v. American Osteopathic Association — District Court, D. Oregon (federal_court_in_state_scope)<br>**out_of_scope**: #8 FRAZIER v. KUHN — District Court, D. New Jersey (federal_court_in_state_scope)<br>**out_of_scope**: #9 Moore v. Smith — District Court, W.D. Tennessee (federal_court_in_state_scope) |
| LF-BS-2166 | one_state HI | keyword | ("pierce the corporate veil" OR "alter ego") /s undercapitaliz! | **empty**: no results |
| LF-BS-2169 | federal_circuit 6 2023-01-01– | keyword | substan! /p "business purpose" | **empty**: no results |
| LF-BS-2172 | one_state_plus_federal CA | keyword | ("market share liability" OR "market share") AND manufacturer NOT contract | **boolean_not_violated**: Pharmaceutical Research and Manufacturers of America v. Wals — contains excluded term(s): contract |
| LF-BS-2174 | one_state OK 2015-01-01– | keyword | "anticipatory repudiation" w/15 (repudiat! or "adequate assurance") | **empty**: no results |
| LF-BS-2181 | one_state_plus_federal CA | keyword | "negligent infliction of emotional distress" AND "zone of danger" AND NOT contract | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-2185 | all_federal | keyword | "automobile exception" & "probable cause" % civil | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /carroll\|california v\. acevedo\|arizona v\. gant\|collins v\. virginia\|chambers v\. maroney/ in top 10 |
| LF-BS-2188 | one_state AZ 2023-01-01– | keyword | "implied warranty of merchantability" w/s disclaim! | **empty**: no results |
| LF-BS-2192 | one_state MI –1999-12-31 | keyword | "undue influence" & testator % criminal | **empty**: no results |
| LF-BS-2193 | all_federal | keyword | "intentional infliction of emotional distress" /10 "extreme and outrageous" | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-2196 | all_states 2015-01-01– | keyword | "intentional infliction of emotional distress" w/p "extreme and outrageous" and "severe emotional distress" | **out_of_scope**: #3 Anderson v. Entergy Corporation et al. — District Court, E.D. Louisiana (federal_court_in_state_scope)<br>**out_of_scope**: #4 Oliver v. Dep't of Pub. Safety & Corr. Servs. — District Court, D. Maryland (federal_court_in_state_scope)<br>**out_of_scope**: #5 Martin v. Author Shepard, Durham Police Department — District Court, M.D. North Carolina (federal_court_in_state_scope) |
| LF-BS-2197 | one_state_plus_federal ND 2015-01-01– | keyword | therap! /25 "identifiable victim" | **empty**: no results |
| LF-BS-2198 | one_state AL | keyword | ("social host" OR "dram shop") /s intoxicat! | **empty**: no results |
| LF-BS-2200 | one_state PA | keyword | "prenuptial agreement" w/15 ("full disclosure" or unconscionab!) | **empty**: no results |
| LF-BS-2203 | all_federal 2020-01-01– | keyword | "procedural due process" w/15 ("property interest" or deprivat!) | **empty**: no results |
| LF-BS-2205 | one_state_plus_federal MS 2023-01-01– | keyword | "comparative negligence" +s "contributory negligence" | **empty**: no results |
| LF-BS-2208 | federal_circuit 9 | keyword | "likelihood of confusion" & trademark % criminal | **empty**: no results<br>**landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-2211 | one_state_plus_federal MD 2023-01-01– | keyword | ("economic substance" OR "sham transaction") AND commissioner NOT criminal | **empty**: no results |
| LF-BS-2212 | all_states | keyword | "market share liability" w/p des and manufacturer | **out_of_scope**: #9 Bortell v. Eli Lilly and Co. — District Court, District of Columbia (federal_court_in_state_scope) |
| LF-BS-2218 | one_state_plus_federal CA 2015-01-01– | keyword | "comparative negligence" w/p "contributory negligence" and "last clear chance" | **empty**: no results |
| LF-BS-2219 | one_state NE 2015-01-01– | keyword | ("anticipatory repudiation" OR "anticipatory breach") /s repudiat! | **empty**: no results |
| LF-BS-2225 | federal_circuit 7 | keyword | privileg! /25 confidential! | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-2234 | federal_circuit 3 | keyword | "likelihood of confusion" /10 trademark | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-2239 | one_state_plus_federal IL 2015-01-01– | keyword | "attorney-client privilege" & waiv! % immigration | **empty**: no results |
| LF-BS-2240 | all_federal –1999-12-31 | keyword | ("trade secret" OR misappropriat!) /s "reasonable measures" | **duplicate_hit**: #6 Vermont Microsystems, Inc. v. Autodesk, Inc. 88 F.3d 142 |
| LF-BS-2243 | all_states_and_federal | keyword | "statute of limitations" w/15 ("equitable tolling" or "discovery rule") | **result_missing_court**: #5 Gable v. United States (319 F. Supp. 3d 37)<br>**landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-2245 | federal_district NY | keyword | "procedural due process" & "property interest" % contract | **empty**: no results |
| LF-BS-2248 | one_state_plus_federal WA | keyword | invitee /p trespasser & "duty of care" | **duplicate_hit**: #8 Kamla v. Space Needle Corp. 52 P.3d 472 |
| LF-BS-2251 | one_state IL | keyword | "additional insured" /s "arising out of" | **duplicate_hit**: #4 State Auto. Mut. v. Development 364 Ill. App. 3d 946<br>**duplicate_hit**: #8 Casualty Insurance v. North-Brook Property & Casualty Insura 150 Ill. App. 3d 472 |
| LF-BS-2253 | one_state_plus_federal NM | keyword | hir! /p "negligent supervision" | **empty**: no results |
| LF-BS-2258 | one_state NY 2023-01-01– | keyword | "proximate cause" w/15 (foreseeab! or "intervening cause") | **empty**: no results |
| LF-BS-2259 | all_states_and_federal | keyword | "open and obvious" w/p invitee and "duty to warn" | **landmark_missing**: wanted /kandil-elsayed\|lugo v\. ameritech/ in top 10 |
| LF-BS-2260 | all_states_and_federal | keyword | "trade secret" /10 "reasonable measures" | **result_missing_court**: #10 Perez v. Blue Collar Scholars, LLC (no cite) |
| LF-BS-2261 | federal_circuit 7 | keyword | scienter /s "rule 10b-5" | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2262 | one_state_plus_federal IL | keyword | guardianship w/15 (ward or "least restrictive") | **duplicate_hit**: #2 Mabry v. Roberts 281 Ill. App. 3d 76 |
| LF-BS-2264 | us_supreme_court 2015-01-01– | keyword | purposeful! /25 "fair play" | **empty**: no results |
| LF-BS-2267 | one_state DC | keyword | "force majeure" +s frustration | **empty**: no results |
| LF-BS-2269 | one_state OH | keyword | ("demand futility" OR "derivative action") /s "demand excused" | **empty**: no results |
| LF-BS-2272 | one_state_plus_federal AZ | keyword | "parol evidence rule" /10 integrat! | **empty**: no results |
| LF-BS-2273 | us_supreme_court | keyword | scienter & "rule 10b-5" % criminal | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2277 | one_state_plus_federal NJ | keyword | "social host" /s intoxicat! | **empty**: no results<br>**landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-2281 | federal_circuit 8 | keyword | persecut! /25 "particular social group" | **empty**: no results<br>**landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-2290 | all_states 2023-01-01– | keyword | "prevailing party" w/p lodestar and "reasonable hourly rate" | **out_of_scope**: #1 St. Ignatius High School of Cleveland v. Alexy Metals, Ltd. — District Court, N.D. Ohio (federal_court_in_state_scope)<br>**out_of_scope**: #2 Manuela B.H. v. Chestnut — District Court, E.D. California (federal_court_in_state_scope)<br>**out_of_scope**: #3 Copeland v. BDC United LLC — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #4 Lewis v. United States of America — District Court, M.D. Louisiana (federal_court_in_state_scope)<br>**out_of_scope**: #5 Cavin v. American Healthcare Solutions LLC — District Court, D. Arizona (federal_court_in_state_scope)<br>**out_of_scope**: #7 Rosa Sly and Devona Hollingsworth v. Secretary, Department o — District Court, M.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #9 BestLife Holdings, Inc. v. Anti-Aging and Wellness Clinic — District Court, D. Nevada (federal_court_in_state_scope) |
| LF-BS-2295 | one_state NC | keyword | "medical malpractice" & "standard of care" % patent | **empty**: no results |
| LF-BS-2299 | one_state DE | keyword | "social host" /s intoxicat! | **empty**: no results |
| LF-BS-2301 | all_states_and_federal | keyword | "promissory estoppel" /p "clear and definite promise" & reliance | **result_missing_court**: #8 GAGE v. PREFERRED CONTRACTORS INSURANCE COMPANY (no cite) |
| LF-BS-2303 | one_state_plus_federal ND | keyword | "duty to warn" w/15 (psychotherapist or "identifiable victim") | **empty**: no results |
| LF-BS-2304 | federal_district IN | keyword | "rule of reason" AND "anticompetitive effects" AND "relevant market" | **boolean_unsatisfied**: DIXON v. NATIONAL HOT ROD ASSOCIATION — required terms/proximity not met in full text |
| LF-BS-2308 | all_federal 2015-01-01– | keyword | nondischargeab! w/15 ("false pretenses" or debtor) | **empty**: no results |
| LF-BS-2309 | federal_circuit 3 | keyword | "likelihood of confusion" & trademark % criminal | **empty**: no results<br>**landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-2310 | federal_district DC 2000-01-01–2009-12-31 | keyword | "loss causation" +s "inflated price" | **empty**: no results |
| LF-BS-2312 | one_state MA | keyword | "medical malpractice" & "standard of care" % patent | **empty**: no results |
| LF-BS-2313 | one_state AZ 2023-01-01– | keyword | "implied consent" +s refus! | **empty**: no results |
| LF-BS-2314 | one_state_plus_federal PA | keyword | defen! /p "potential for coverage" | **empty**: no results |
| LF-BS-2316 | one_state WY | keyword | ("underinsured motorist" OR "uninsured motorist") AND policy NOT criminal | **boolean_not_violated**: State Farm Mutual Automobile Insurance Co. v. Shrader — contains excluded term(s): criminal |
| LF-BS-2319 | all_federal | keyword | obviousness & "prior art" % criminal | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /ksr\|graham v\. john deere/ in top 10 |
| LF-BS-2320 | federal_circuit 11 | keyword | "loss causation" & "inflated price" % criminal | **empty**: no results<br>**landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2322 | federal_district VT | keyword | persecut! /p persecution | **empty**: no results |
| LF-BS-2323 | federal_circuit 3 | keyword | "likelihood of confusion" w/s trademark | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-2331 | federal_circuit 11 | keyword | "diversity jurisdiction" +s "amount in controversy" | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-2334 | federal_district HI 2020-01-01– | keyword | discharg! /p "false pretenses" | **empty**: no results |
| LF-BS-2336 | federal_circuit 9 | keyword | "likelihood of confusion" w/s trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-2337 | one_state SD 1990-01-01–2010-12-31 | keyword | "constructive eviction" w/p tenant and abandon! | **empty**: no results |
| LF-BS-2338 | one_state CT | keyword | "equitable distribution" AND "nonmarital" AND commingl! | **empty**: no results |
| LF-BS-2342 | federal_circuit 3 | keyword | retaliat! /25 "causal connection" | **empty**: no results<br>**landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-2350 | federal_circuit 7 2020-01-01– | keyword | "economic substance" /p "business purpose" & commissioner | **empty**: no results |
| LF-BS-2352 | one_state_plus_federal MD | keyword | "testamentary capacity" & testator % criminal | **empty**: no results |
| LF-BS-2356 | all_states 2020-01-01– | keyword | "implied covenant of good faith and fair dealing" w/p discretion and breach | **out_of_scope**: #2 Tank Bros, LLC v. Acuantia, Inc. and Grupo Rotoplas, S.A.B.  — District Court, M.D. Pennsylvania (federal_court_in_state_scope)<br>**out_of_scope**: #4 Eastwood Assisted Living Inc. v. Sprint Spectrum LLC — District Court, W.D. Virginia (federal_court_in_state_scope)<br>**out_of_scope**: #5 Alan B. McNichols, individually and on behalf of all others  — District Court, E.D. Virginia (federal_court_in_state_scope)<br>**out_of_scope**: #7 Jimenez v. State Farm Fire and Casualty Company — District Court, D. Connecticut (federal_court_in_state_scope)<br>**out_of_scope**: #10 In re: Robertshaw US Holding Corp. — United States Bankruptcy Court, S.D. Texas (federal_court_in_state_scope) |
| LF-BS-2357 | one_state IL | keyword | "parol evidence rule" w/s integrat! | **empty**: no results |
| LF-BS-2358 | federal_circuit 9 | keyword | "malicious prosecution" & "probable cause" % contract | **empty**: no results<br>**landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-2365 | all_states_and_federal | keyword | easement! /p servient | **result_missing_court**: #9 Thar v. Edwin N. Moran Revocable Trust (905 P.2d 413) |
| LF-BS-2366 | one_state_plus_federal VA | keyword | "cell-site location" /s warrant | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-2368 | one_state PA | keyword | "promissory estoppel" AND "clear and definite promise" AND NOT criminal | **empty**: no results |
| LF-BS-2369 | one_state ME | keyword | "duty to warn" & psychotherapist % contract | **empty**: no results |
| LF-BS-2371 | federal_circuit 6 –1999-12-31 | keyword | "crime involving moral turpitude" /10 "categorical approach" | **empty**: no results |
| LF-BS-2372 | federal_district GA | keyword | "economic substance" /p "business purpose" & commissioner | **empty**: no results |
| LF-BS-2374 | one_state KS 2020-01-01– | keyword | "unjust enrichment" AND benefit AND "express contract" | **empty**: no results |
| LF-BS-2377 | one_state NE | keyword | "anticipatory repudiation" /p repudiat! & "adequate assurance" | **empty**: no results |
| LF-BS-2379 | one_state DE | keyword | "business judgment rule" /10 "duty of care" | **landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-2380 | one_state NV 1990-01-01–2010-12-31 | keyword | "res ipsa loquitur" w/p inference and negligence | **after_dateTo**: #3 2013-04-25 > 2010-12-31 |
| LF-BS-2381 | one_state_plus_federal MS | keyword | "child support" & imput! % criminal | **empty**: no results |
| LF-BS-2383 | one_state WY | keyword | "trade secret" w/p "reasonable measures" and "independent economic value" | **empty**: no results |
| LF-BS-2391 | one_state_plus_federal FL | keyword | "transitory foreign substance" & "actual or constructive knowledge" % medical | **empty**: no results |
| LF-BS-2393 | one_state CA 2015-01-01– | keyword | "equitable distribution" /p "nonmarital" & commingl! | **empty**: no results |
| LF-BS-2394 | all_states_and_federal | keyword | "malicious prosecution" +s "probable cause" | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-2397 | all_states | keyword | "market share liability" /p des & manufacturer | **out_of_scope**: #10 Bortell v. Eli Lilly and Co. — District Court, District of Columbia (federal_court_in_state_scope) |
| LF-BS-2398 | one_state WA 2015-01-01– | keyword | "confrontation clause" & testimonial % civil | **empty**: no results |
| LF-BS-2400 | one_state NJ | keyword | "negligence per se" /s "class of persons" | **empty**: no results |
| LF-BS-2408 | all_states_and_federal –1999-12-31 | keyword | retaliation /s "materially adverse" | **result_missing_court**: #3 Treglia v. Town of Manlius (68 F. Supp. 2d 153)<br>**result_missing_court**: #8 Kipnis v. Baram (949 F. Supp. 618) |
| LF-BS-2409 | federal_circuit 3 2023-01-01– | keyword | "summary judgment" & "genuine dispute" % patent | **empty**: no results |
| LF-BS-2410 | federal_circuit 11 | keyword | abstention w/15 ("pending state" or "comity") | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-2419 | all_states_and_federal –1999-12-31 | keyword | "parallel conduct" /s conspira! | **empty**: no results |
| LF-BS-2420 | all_federal | keyword | "intentional infliction of emotional distress" w/15 ("extreme and outrageous" or "severe emotional distress") | **duplicate_hit**: #10 Journey v. United States 316 F. App'x 670<br>**landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-2421 | federal_circuit 8 2020-01-01– | keyword | locat! /25 "reasonable expectation of privacy" | **empty**: no results |
| LF-BS-2424 | one_state_plus_federal NY | keyword | "reasonable suspicion" +s frisk | **boolean_unsatisfied**: Terry v. Ohio — required terms/proximity not met in full text |
| LF-BS-2426 | us_supreme_court 2023-01-01– | keyword | "personal jurisdiction" & "minimum contacts" % divorce | **empty**: no results |
| LF-BS-2430 | all_federal | keyword | nonmov! /p "genuine dispute" | **landmark_missing**: wanted /celotex\|liberty lobby\|matsushita/ in top 10 |
| LF-BS-2434 | one_state IL | keyword | relian! /p "clear and definite promise" | **empty**: no results |
| LF-BS-2435 | federal_district SC | keyword | deference +s "statutory ambiguity" | **empty**: no results |
| LF-BS-2437 | federal_circuit 11 | keyword | propensit! /25 propensity | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-2443 | federal_circuit 8 | keyword | substan! /25 commissioner | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-2448 | one_state OR 2015-01-01– | keyword | "anticipatory repudiation" w/15 (repudiat! or "adequate assurance") | **empty**: no results |
| LF-BS-2449 | one_state_plus_federal ID | keyword | ("negligent infliction of emotional distress" OR "bystander recovery") /s "zone of danger" | **duplicate_hit**: #5 Rivera v. Passenger 331 F.3d 1074 |
| LF-BS-2451 | us_supreme_court | keyword | "motion to dismiss" +s plausib! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-2452 | one_state_plus_federal PA | keyword | confront! /25 cross-examin! | **landmark_missing**: wanted /crawford v\. washington\|davis v\. washington\|melendez-diaz\|bullcoming\|ohio v\. clark\|smith v\. arizona/ in top 10 |
| LF-BS-2453 | all_federal | keyword | "intentional infliction of emotional distress" & "extreme and outrageous" % patent | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-2455 | federal_district AK | keyword | (asylum OR "well-founded fear") /s persecution | **empty**: no results |
| LF-BS-2458 | federal_circuit 6 1990-01-01–2010-12-31 | keyword | "consent to search" & "totality of the circumstances" % civil | **empty**: no results |
| LF-BS-2464 | federal_circuit 7 | keyword | scient! /p "rule 10b-5" | **landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2465 | federal_district NC 2020-01-01– | keyword | interrogat! /25 waiv! | **empty**: no results |
| LF-BS-2467 | one_state NE | keyword | "fraudulent inducement" /10 "justifiable reliance" | **empty**: no results |
| LF-BS-2475 | all_states | keyword | daubert w/15 (reliab! or "rule 702") | **out_of_scope**: #1 Cooperative Communications, Inc. v. at & T — District Court, D. Utah (federal_court_in_state_scope)<br>**out_of_scope**: #2 Rabiu v. Abbott Laboratories — District Court, N.D. Illinois (federal_court_in_state_scope)<br>**out_of_scope**: #4 Tailored Chemical Products, Inc. v. DAFCO Inc. — District Court, W.D. North Carolina (federal_court_in_state_scope)<br>**out_of_scope**: #5 P.T. v. The Rockefeller University — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #6 Mecea v. IBT Media Inc. — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #7 Stallings v. Wellife Network, Inc. — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #8 Dominguez v. Amsterdam Gourmet Foods, Inc. — District Court, S.D. New York (federal_court_in_state_scope) |
| LF-BS-2478 | one_state ID 2000-01-01–2009-12-31 | keyword | "promissory estoppel" w/15 ("clear and definite promise" or reliance) | **empty**: no results |
| LF-BS-2481 | all_states | keyword | "quiet title" & deed % criminal | **empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query |
| LF-BS-2482 | federal_circuit dc | keyword | preclu! /25 "same cause of action" | **empty**: no results<br>**landmark_missing**: wanted /taylor v\. sturgell\|federated dep\|allen v\. mccurry\|semtek/ in top 10 |
| LF-BS-2486 | one_state AL | keyword | "demand futility" w/15 ("demand excused" or board) | **empty**: no results |
| LF-BS-2487 | federal_circuit 1 | keyword | "respondeat superior" & "scope of employment" % patent | **empty**: no results |
| LF-BS-2489 | one_state FL | keyword | "force majeure" & frustration % criminal | **empty**: no results |
| LF-BS-2494 | one_state_plus_federal VT | keyword | preclu! /25 "same cause of action" | **empty**: no results<br>**landmark_missing**: wanted /taylor v\. sturgell\|federated dep\|allen v\. mccurry\|semtek/ in top 10 |
| LF-BS-2496 | us_supreme_court | keyword | scienter & "rule 10b-5" % criminal | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2498 | one_state_plus_federal CA | keyword | "claim construction" & specification % criminal | **empty**: no results<br>**landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-2501 | one_state OK | keyword | "prenuptial agreement" /p "full disclosure" & unconscionab! | **empty**: no results |
| LF-BS-2502 | all_states_and_federal | keyword | "attorney-client privilege" w/15 (waiv! or confidential!) | **result_missing_court**: #2 White v. NYLIFE Securities, LLC (no cite)<br>**result_missing_court**: #10 Jonathan Corp. v. Prime Computer, Inc. (114 F.R.D. 693)<br>**landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-2504 | one_state MA –1999-12-31 | keyword | "proportional to the needs of the case" /s discovery | **empty**: no results |
| LF-BS-2505 | federal_district NM 2023-01-01– | keyword | nondischargeab! /10 "false pretenses" | **empty**: no results |
| LF-BS-2506 | all_federal | keyword | "free exercise" /s "neutral and generally applicable" | **landmark_missing**: wanted /employment div\|smith\|lukumi\|fulton\|kennedy v\. bremerton\|tandon\|masterpiece\|hobby lobby/ in top 10 |
| LF-BS-2508 | federal_district NM –1999-12-31 | keyword | "crime involving moral turpitude" & "categorical approach" % contract | **empty**: no results |
| LF-BS-2515 | one_state_plus_federal CA | keyword | habitab! /p tenant | **empty**: no results<br>**landmark_missing**: wanted /javins\|green v\. superior court/ in top 10 |
| LF-BS-2516 | one_state_plus_federal FL | keyword | foreclosure & standing % criminal | **empty**: no results |
| LF-BS-2517 | all_states | keyword | "open and obvious" AND invitee AND "duty to warn" | **landmark_missing**: wanted /kandil-elsayed\|lugo v\. ameritech/ in top 10 |
| LF-BS-2518 | one_state AZ | keyword | "tortious interference" & "business relationship" % criminal | **empty**: no results |
| LF-BS-2520 | one_state_plus_federal SC | keyword | "personal jurisdiction" w/15 ("minimum contacts" or "fair play") | **boolean_unsatisfied**: International Shoe Co. v. Washington — required terms/proximity not met in full text |
| LF-BS-2522 | one_state_plus_federal ND –1999-12-31 | keyword | "non-compete" /10 "legitimate business interest" | **empty**: no results |
| LF-BS-2527 | federal_circuit 9 | keyword | abstain! /25 "comity" | **duplicate_hit**: #7 31 Collier bankr.cas.2d 890, Bankr. L. Rep. P 75,965 in Re V 27 F.3d 406<br>**landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-2532 | federal_circuit 5 2015-01-01– | keyword | "claim construction" /s specification | **boolean_unsatisfied**: OPTRONIC SCIENCES LLC v. BOE Technology Group Co., Ltd. — required terms/proximity not met in full text<br>**boolean_unsatisfied**: NEC Corporation v. Anker Innovations Technology Co., Ltd., a — required terms/proximity not met in full text |
| LF-BS-2533 | all_states | keyword | "respondeat superior" /s "scope of employment" | **out_of_scope**: #4 Jones v. Simmons — District Court, E.D. Louisiana (federal_court_in_state_scope) |
| LF-BS-2537 | one_state_plus_federal ND 1990-01-01–2010-12-31 | keyword | "motion to dismiss" /p plausib! & "factual allegations" | **empty**: no results |
| LF-BS-2540 | all_states_and_federal | keyword | capaci! /25 "natural objects of his bounty" | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query |
| LF-BS-2544 | all_states_and_federal | keyword | "motion to dismiss" +s plausib! | **landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-2546 | one_state MD 2023-01-01– | keyword | "design defect" /10 "consumer expectations" | **empty**: no results |
| LF-BS-2549 | all_states | keyword | "deceptive and unfair trade practices" w/s consumer | **out_of_scope**: #1 In re Packaged Ice Antitrust Litigation — District Court, E.D. Michigan (federal_court_in_state_scope)<br>**out_of_scope**: #6 Harper v. LG ELECTRONICS USA, INC. — District Court, D. New Jersey (federal_court_in_state_scope) |
| LF-BS-2550 | federal_circuit 2 | keyword | retaliation /p "materially adverse" & "causal connection" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-2553 | federal_district FL 2000-01-01–2009-12-31 | keyword | "reasonable suspicion" w/s frisk | **empty**: no results |
| LF-BS-2554 | one_state OH | keyword | "implied consent" & refus! % civil | **empty**: no results |
| LF-BS-2555 | one_state IL 1990-01-01–2010-12-31 | keyword | invitee /p trespasser & "duty of care" | **duplicate_hit**: #9 Vega v. NORTHEAST ILL. REG. COMMUTER RR 371 Ill. App. 3d 572 |
| LF-BS-2559 | federal_circuit 11 | keyword | indiffer! /p prison! | **landmark_missing**: wanted /estelle\|farmer v\. brennan\|helling\|wilson v\. seiter/ in top 10 |
| LF-BS-2563 | us_supreme_court | keyword | condemn! /p "just compensation" | **landmark_missing**: wanted /kelo\|berman v\. parker\|hawaii housing\|midkiff/ in top 10 |
| LF-BS-2564 | one_state ND –1999-12-31 | keyword | "adverse possession" /s "open and notorious" | **empty**: no results |
| LF-BS-2565 | one_state MI –1999-12-31 | keyword | "liquidated damages" & penalty % criminal | **empty**: no results |
| LF-BS-2567 | one_state_plus_federal CA | keyword | invit! /25 "duty of care" | **landmark_missing**: wanted /rowland v\. christian/ in top 10 |
| LF-BS-2569 | one_state NJ | keyword | apprendi & jury % civil | **empty**: no results |
| LF-BS-2572 | one_state MD 2023-01-01– | keyword | "deceptive and unfair trade practices" & consumer % criminal | **empty**: no results |
| LF-BS-2577 | one_state FL 2015-01-01– | keyword | "promissory estoppel" w/s "clear and definite promise" | **empty**: no results |
| LF-BS-2580 | all_states_and_federal | keyword | "medical malpractice" /p "standard of care" & "expert testimony" | **boolean_unsatisfied**: Daubert v. Merrell Dow Pharmaceuticals, Inc. — required terms/proximity not met in full text |
| LF-BS-2587 | federal_circuit 11 | keyword | "crime involving moral turpitude" +s "categorical approach" | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-2588 | us_supreme_court | keyword | "automatic stay" /10 "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-2592 | us_supreme_court | keyword | "malicious prosecution" AND "probable cause" AND NOT contract | **boolean_not_violated**: Albright v. Oliver — contains excluded term(s): contract |
| LF-BS-2596 | one_state_plus_federal TX | keyword | "prenuptial agreement" w/p "full disclosure" and unconscionab! | **empty**: no results |
| LF-BS-2600 | all_federal 2000-01-01–2009-12-31 | keyword | "summary judgment" w/15 ("genuine dispute" or "material fact") | **duplicate_hit**: #6 A.S.A. Produce Co. v. Everest National Insurance 318 F. App'x 589 |
| LF-BS-2601 | one_state_plus_federal WA | keyword | "economic substance" AND "business purpose" AND commissioner | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-2603 | all_states 1990-01-01–2010-12-31 | keyword | "market share liability" w/p des and manufacturer | **out_of_scope**: #4 Bortell v. Eli Lilly and Co. — District Court, District of Columbia (federal_court_in_state_scope)<br>**out_of_scope**: #8 Mills v. Allegiance Healthcare Corp. — District Court, D. Massachusetts (federal_court_in_state_scope) |
| LF-BS-2606 | federal_circuit 8 | keyword | plausib! /25 "factual allegations" | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-2609 | one_state KS | keyword | "vacate the arbitration award" /p "exceeded their powers" & "evident partiality" | **empty**: no results |
| LF-BS-2610 | one_state MD | keyword | defen! /p "potential for coverage" | **empty**: no results |
| LF-BS-2613 | all_federal | keyword | eligib! /p "section 101" | **empty**: no results<br>**empty_broad_scope**: nothing in all_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-2618 | one_state_plus_federal NE | keyword | "comparative negligence" & "contributory negligence" % contract | **empty**: no results |
| LF-BS-2619 | one_state ME 2015-01-01– | keyword | "child support" /10 imput! | **empty**: no results |
| LF-BS-2620 | one_state VT | keyword | "social host" w/s intoxicat! | **empty**: no results |
| LF-BS-2622 | federal_circuit 6 | keyword | "loss causation" & "inflated price" % criminal | **empty**: no results<br>**landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2623 | one_state MI –1999-12-31 | keyword | "economic loss rule" AND "purely economic" AND NOT criminal | **empty**: no results |
| LF-BS-2626 | all_states_and_federal 2000-01-01–2009-12-31 | keyword | conspir! /25 "sherman act" | **result_missing_court**: #6 Opinion Number (no cite) |
| LF-BS-2627 | one_state WA –1999-12-31 | keyword | default! /p "excusable neglect" | **duplicate_hit**: #2 In re the Estate of Stevens 971 P.2d 58 |
| LF-BS-2628 | federal_circuit 2 | keyword | asylum AND persecution AND NOT contract | **boolean_not_violated**: Lin v. United States Department of Justice — contains excluded term(s): contract |
| LF-BS-2637 | one_state_plus_federal IL | keyword | retaliat! /p "materially adverse" | **empty**: no results<br>**landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-2642 | us_supreme_court 2020-01-01– | keyword | erisa & "abuse of discretion" % criminal | **empty**: no results |
| LF-BS-2645 | one_state SD | keyword | "anticipatory repudiation" AND repudiat! AND NOT criminal | **empty**: no results |
| LF-BS-2660 | all_states_and_federal 2000-01-01–2009-12-31 | keyword | "motion to dismiss" /s plausib! | **empty**: no results |
| LF-BS-2664 | all_federal | keyword | "age discrimination" /s "but-for" | **landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10 |
| LF-BS-2667 | one_state TX | keyword | "pierce the corporate veil" AND undercapitaliz! AND "corporate form" | **empty**: no results |
| LF-BS-2668 | one_state_plus_federal LA | keyword | "regulatory taking" /s "investment-backed expectations" | **landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10 |
| LF-BS-2669 | federal_circuit 2 | keyword | "economic substance" /10 "business purpose" | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-2671 | all_states 2020-01-01– | keyword | "deceptive and unfair trade practices" AND consumer AND "actual damages" | **out_of_scope**: #3 Castillo v. RPST Group Holdings, LLC — District Court, M.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #5 Technolojoy, LLC v. BHPH Consulting Services, LLC — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #6 Aviation TC Ltd. v. MD Turbine Repairs, Inc. — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #7 CMR Construction & Roofing LLC v. The Orchards Condominium A — District Court, M.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #8 Midway Labs USA, LLC v. South Service Trading, S.A. — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #10 Sports Camp, Inc. d/b/a Sports C.L.U.B. v. Mason Classical A — District Court, M.D. Florida (federal_court_in_state_scope) |
| LF-BS-2673 | one_state_plus_federal MS 1990-01-01–2010-12-31 | keyword | "open and obvious" w/p invitee and "duty to warn" | **duplicate_hit**: #5 Andres Hill, Andres Hill v. International Paper Company 121 F.3d 168 |
| LF-BS-2678 | all_federal | keyword | citizen! /p "amount in controversy" | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-2679 | federal_circuit 11 | keyword | immun! /p "constitutional right" | **landmark_missing**: wanted /harlow\|pearson v\. callahan\|al-kidd\|saucier\|anderson v\. creighton\|kisela\|mullenix\|district of columbia v\. wesby/ in top 10 |
| LF-BS-2680 | us_supreme_court 2023-01-01– | keyword | "parallel conduct" w/s conspira! | **empty**: no results |
| LF-BS-2687 | one_state CO | keyword | "promissory estoppel" /s "clear and definite promise" | **empty**: no results |
| LF-BS-2689 | one_state WA 2020-01-01– | keyword | expert! /25 "rule 702" | **empty**: no results |
| LF-BS-2690 | one_state FL | keyword | "promissory estoppel" /10 "clear and definite promise" | **empty**: no results |
| LF-BS-2694 | federal_district SC | keyword | (asylum OR "well-founded fear") AND "particular social group" NOT contract | **empty**: no results |
| LF-BS-2697 | all_states | keyword | "market share liability" w/s des | **out_of_scope**: #5 Bortell v. Eli Lilly and Co. — District Court, District of Columbia (federal_court_in_state_scope)<br>**out_of_scope**: #7 In re DES Cases — District Court, E.D. New York (federal_court_in_state_scope)<br>**landmark_missing**: wanted /sindell\|hymowitz/ in top 10 |
| LF-BS-2708 | one_state_plus_federal DE | keyword | locat! /p warrant | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-2709 | all_states | keyword | "proportional to the needs of the case" AND discovery AND NOT habeas | **out_of_scope**: #2 Motorola Solutions, Inc. v. Hytera Commc'ns Corp. — District Court, E.D. Illinois (federal_court_in_state_scope)<br>**out_of_scope**: #3 GAINES v. DART TRANSIT COMPANY — District Court, E.D. Missouri (federal_court_in_state_scope)<br>**out_of_scope**: #4 In the Matter of Cenac Towing Co., LLC — District Court, E.D. Louisiana (federal_court_in_state_scope)<br>**out_of_scope**: #5 Rohwer v. Warner Bros. Discovery, Inc. — District Court, W.D. Washington (federal_court_in_state_scope)<br>**out_of_scope**: #6 Boston Retirement System v. Alexion Pharmaceuticals Inc — District Court, D. Connecticut (federal_court_in_state_scope)<br>**out_of_scope**: #7 Williams v. Baker — District Court, E.D. Michigan (federal_court_in_state_scope)<br>**out_of_scope**: #8 Mason v. New York Life Insurance Company — District Court, S.D. New York (federal_court_in_state_scope) |
| LF-BS-2710 | all_states_and_federal | keyword | "prior bad acts" & "other crimes" % contract | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-2712 | us_supreme_court | keyword | "malicious prosecution" w/s "probable cause" | **boolean_unsatisfied**: Illinois v. Gates — required terms/proximity not met in full text |
| LF-BS-2717 | federal_circuit 2 | keyword | "likelihood of confusion" /p trademark & "strength of the mark" | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-2723 | one_state_plus_federal NJ | keyword | alcohol! /p intoxicat! | **empty**: no results<br>**landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-2724 | federal_circuit 11 | keyword | nondischargeab! & "false pretenses" % criminal | **empty**: no results<br>**landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-2729 | one_state IL | keyword | "equitable indemnity" w/s contribution | **duplicate_hit**: #3 Solich v. PORTES CANCER PREVENTION CENT. 273 Ill. App. 3d 977 |
| LF-BS-2732 | one_state_plus_federal AK 2015-01-01– | keyword | intoxica! /25 "driving under the influence" | **empty**: no results<br>**landmark_missing**: wanted /birchfield\|missouri v\. mcneely\|mitchell v\. wisconsin/ in top 10 |
| LF-BS-2736 | one_state MT | keyword | "fraudulent inducement" /p "justifiable reliance" & misrepresent! | **empty**: no results |
| LF-BS-2739 | one_state CA | keyword | "comparative negligence" /10 "contributory negligence" | **landmark_missing**: wanted /li v\. yellow cab/ in top 10 |
| LF-BS-2744 | federal_circuit 5 | keyword | "diversity jurisdiction" /s "amount in controversy" | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-2746 | one_state_plus_federal CA | keyword | "bad faith" /s insurer | **landmark_missing**: wanted /comunale\|crisci\|gruenberg\|egan v\. mutual/ in top 10 |
| LF-BS-2747 | one_state FL 1990-01-01–2010-12-31 | keyword | (guardianship OR "incapacitated person") /s ward | **duplicate_hit**: #6 In re Guardianship of Gechtman 719 So. 2d 960<br>**duplicate_hit**: #8 Public Trustee of Stewart House v. First Union National Bank 639 So. 2d 60 |
| LF-BS-2748 | one_state SD | keyword | "fraudulent inducement" & "justifiable reliance" % criminal | **empty**: no results |
| LF-BS-2760 | federal_district WI | keyword | confus! /25 "strength of the mark" | **empty**: no results |
| LF-BS-2761 | us_supreme_court 2000-01-01–2009-12-31 | keyword | "parallel conduct" +s conspira! | **empty**: no results |
| LF-BS-2773 | all_federal | keyword | anticompetit! /25 "relevant market" | **landmark_missing**: wanted /leegin\|ohio v\. am\|american express\|state oil\|alston\|continental t\.v\|bmi\|broad\. music/ in top 10 |
| LF-BS-2776 | federal_district MA | keyword | scienter +s "rule 10b-5" | **empty**: no results |
| LF-BS-2777 | one_state DE | keyword | "motion to compel arbitration" +s unconscionab! | **empty**: no results |
| LF-BS-2779 | one_state_plus_federal CA | keyword | disclos! /p "material risk" | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-2782 | all_states 2015-01-01– | keyword | "liquidated damages" /p penalty & "reasonable forecast" | **out_of_scope**: #4 Iron Workers Local No. 25 Pension Fund v. Quality Steel Fabr — District Court, E.D. Michigan (federal_court_in_state_scope)<br>**out_of_scope**: #6 Ureteknologia De Mexico S.A. De C.V. v. Uretek (USA), Inc. — District Court, S.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #7 The Hanover Insurance Company v. Binnacle Development, LLC f — District Court, S.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #10 Shenzhen Yunzhongge Technology Co Ltd v. Amazon.com Services — District Court, W.D. Washington (federal_court_in_state_scope) |
| LF-BS-2787 | one_state UT | keyword | guardian! /p ward | **duplicate_hit**: #3 Moreno v. Board of Education of the Jordan School District 926 P.2d 886 |
| LF-BS-2789 | federal_circuit dc 1990-01-01–2010-12-31 | keyword | "parallel conduct" /p conspira! & "sherman act" | **empty**: no results |
| LF-BS-2791 | one_state TX –1999-12-31 | keyword | "transitory foreign substance" w/p "actual or constructive knowledge" and premises | **empty**: no results |
| LF-BS-2794 | one_state NJ | keyword | "social host" /10 intoxicat! | **empty**: no results<br>**landmark_missing**: wanted /kelly v\. gwinnell/ in top 10 |
| LF-BS-2796 | one_state_plus_federal MI | keyword | "malicious prosecution" /s "probable cause" | **boolean_unsatisfied**: Illinois v. Gates — required terms/proximity not met in full text |
| LF-BS-2800 | federal_circuit federal 2015-01-01– | keyword | "statute of limitations" & "equitable tolling" % patent | **empty**: no results |
| LF-BS-2802 | one_state PA | keyword | "anticipatory repudiation" /s repudiat! | **empty**: no results |
| LF-BS-2809 | federal_circuit 3 | keyword | "likelihood of confusion" /p trademark & "strength of the mark" | **duplicate_hit**: #10 Freedom Card, Inc. Urban Television Network, Inc. v. Jpmorga 432 F.3d 463<br>**landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-2811 | all_federal | keyword | outrage! /25 "severe emotional distress" | **landmark_missing**: wanted /hustler\|snyder v\. phelps/ in top 10 |
| LF-BS-2815 | one_state OH | keyword | "negligent infliction of emotional distress" w/s "zone of danger" | **duplicate_hit**: #3 Vance v. Consol. Rail Corp. 73 Ohio St. 3d 222 |
| LF-BS-2817 | all_federal | keyword | retaliation /p "materially adverse" & "causal connection" | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-2819 | one_state AZ 2015-01-01– | keyword | "constructive eviction" & tenant % criminal | **empty**: no results |
| LF-BS-2820 | all_federal | keyword | "cell-site location" w/p warrant and "reasonable expectation of privacy" | **boolean_unsatisfied**: Katz v. United States — required terms/proximity not met in full text |
| LF-BS-2830 | one_state OH | keyword | "joint and several liability" & tortfeasor! % contract | **empty**: no results |
| LF-BS-2831 | federal_circuit 7 2015-01-01– | keyword | asylum & persecution % contract | **empty**: no results |
| LF-BS-2832 | one_state_plus_federal NJ | keyword | "loss of consortium" & spouse % patent | **empty**: no results |
| LF-BS-2833 | all_federal 2015-01-01– | keyword | asylum & persecution % contract | **empty**: no results |
| LF-BS-2838 | federal_circuit 1 | keyword | scienter w/15 ("rule 10b-5" or pslra) | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2848 | one_state HI 2023-01-01– | keyword | "warranty of habitability" w/p tenant and rent | **empty**: no results |
| LF-BS-2849 | one_state UT | keyword | "pierce the corporate veil" /p undercapitaliz! & "corporate form" | **empty**: no results |
| LF-BS-2851 | federal_circuit 2 | keyword | "prevailing party" w/s lodestar | **landmark_missing**: wanted /hensley\|buckhannon\|perdue\|fox v\. vice\|christiansburg/ in top 10 |
| LF-BS-2852 | one_state_plus_federal CO | keyword | "motion to dismiss" w/15 (plausib! or "factual allegations") | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-2853 | one_state OH 2000-01-01–2009-12-31 | keyword | "creditor's claim" w/15 ("personal representative" or "barred") | **empty**: no results |
| LF-BS-2856 | one_state CA | keyword | "negligent infliction of emotional distress" /s "zone of danger" | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10<br>**boolean_unsatisfied**: Thing v. Chusa — required terms/proximity not met in full text |
| LF-BS-2858 | one_state_plus_federal WA –1999-12-31 | keyword | "attorney-client privilege" w/15 (waiv! or confidential!) | **duplicate_hit**: #5 27 Collier bankr.cas.2d 1442, Bankr. L. Rep. P 75,016 978 F.2d 1159 |
| LF-BS-2861 | one_state_plus_federal MA | keyword | ("regulatory taking" OR "inverse condemnation") /s "investment-backed expectations" | **landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10 |
| LF-BS-2862 | one_state_plus_federal NM | keyword | "medical malpractice" & "standard of care" % patent | **empty**: no results |
| LF-BS-2865 | one_state_plus_federal IA | keyword | "loss of consortium" & spouse % patent | **empty**: no results |
| LF-BS-2868 | one_state TX | keyword | "free exercise" w/15 ("neutral and generally applicable" or burden) | **boolean_unsatisfied**: Children of the Kingdom v. Central Appraisal District of Tay — required terms/proximity not met in full text |
| LF-BS-2869 | all_federal 2023-01-01– | keyword | "crime involving moral turpitude" & "categorical approach" % contract | **empty**: no results |
| LF-BS-2875 | all_states 1990-01-01–2010-12-31 | keyword | "parol evidence rule" w/s integrat! | **out_of_scope**: #1 Crockett & Myers, Ltd. v. NAPIER, FITZGERALLD & KIRBY, LLP — District Court, D. Nevada (federal_court_in_state_scope) |
| LF-BS-2876 | us_supreme_court –1999-12-31 | keyword | "procedural due process" w/15 ("property interest" or deprivat!) | **empty**: no results |
| LF-BS-2878 | one_state FL 2000-01-01–2009-12-31 | keyword | "equitable indemnity" w/s contribution | **empty**: no results |
| LF-BS-2880 | all_states | keyword | "bad faith" +s insurer | **out_of_scope**: #8 Sheflyand v. Integon General Insurance Corporation — District Court, N.D. Ohio (federal_court_in_state_scope)<br>**landmark_missing**: wanted /comunale\|crisci\|gruenberg\|egan v\. mutual/ in top 10<br>**boolean_unsatisfied**: U.S. Acute Care Solutions, L.L.C. v. Doctors Co. Risk Retent — required terms/proximity not met in full text |
| LF-BS-2881 | all_states 2023-01-01– | keyword | enrich! /p benefit | **out_of_scope**: #6 Ortiz v. Keystone Premier Settlement Services LLC — District Court, M.D. Pennsylvania (federal_court_in_state_scope)<br>**out_of_scope**: #7 THERMAL ENGINEERING INTERNATIONAL (USA) INC. v. HYPRO, INC. — District Court, W.D. Missouri (federal_court_in_state_scope)<br>**out_of_scope**: #8 Stratifyd, Inc. v. Wang — District Court, W.D. North Carolina (federal_court_in_state_scope)<br>**out_of_scope**: #10 Electronic Merchant Systems LLC v. Hutson — District Court, N.D. Ohio (federal_court_in_state_scope) |
| LF-BS-2887 | one_state MA | keyword | "anticipatory repudiation" w/s repudiat! | **empty**: no results |
| LF-BS-2889 | all_federal | keyword | "regulatory taking" /s "investment-backed expectations" | **landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10 |
| LF-BS-2890 | all_federal | keyword | "fair labor standards act" w/s exempt! | **landmark_missing**: wanted /encino\|christopher v\. smithkline\|helix energy\|integrity staffing/ in top 10 |
| LF-BS-2891 | one_state WV 2023-01-01– | keyword | nuptial! /25 unconscionab! | **empty**: no results |
| LF-BS-2892 | one_state_plus_federal PA | keyword | locat! /25 "reasonable expectation of privacy" | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10<br>**boolean_unsatisfied**: Katz v. United States — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Commonwealth v. Duncan — required terms/proximity not met in full text<br>**boolean_unsatisfied**: United States v. Katzin — required terms/proximity not met in full text |
| LF-BS-2895 | one_state LA | keyword | "implied covenant of good faith and fair dealing" & discretion % criminal | **empty**: no results |
| LF-BS-2896 | all_states 2000-01-01–2009-12-31 | keyword | "proportional to the needs of the case" AND discovery AND NOT habeas | **empty**: no results |
| LF-BS-2901 | one_state TX | keyword | "transitory foreign substance" & "actual or constructive knowledge" % medical | **empty**: no results |
| LF-BS-2904 | one_state_plus_federal GA –1999-12-31 | keyword | premis! /25 "duty to warn" | **empty**: no results |
| LF-BS-2911 | all_states | keyword | ("negligent infliction of emotional distress" OR "bystander recovery") /s "zone of danger" | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-2912 | federal_circuit federal | keyword | "statute of limitations" w/p "equitable tolling" and "discovery rule" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-2913 | one_state_plus_federal TN | keyword | benefit! /25 "arbitrary and capricious" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-2914 | all_federal | keyword | ("statute of limitations" OR "limitations period") AND "discovery rule" NOT patent | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-2915 | all_states_and_federal | keyword | ("collateral estoppel" OR "issue preclusion") /s "actually litigated" | **result_missing_court**: #5 Malfatti v. Bank of America, N.A. (99 So. 3d 1221) |
| LF-BS-2918 | all_states | keyword | "proportional to the needs of the case" w/15 (discovery or "undue burden") | **out_of_scope**: #1 Franco v. 380 Second LLC — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #2 Abdelaziz v. SDG MGMT Company, LLC., et. al. — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #3 Mancuso v. Starr Surplus Lines Insurance Company — District Court, W.D. Louisiana (federal_court_in_state_scope)<br>**out_of_scope**: #5 Scott v. Complete Logistical Services, LLC — District Court, E.D. Louisiana (federal_court_in_state_scope)<br>**out_of_scope**: #6 Ocean Semiconductors LLC v. Analog Devices Inc. — District Court, D. Massachusetts (federal_court_in_state_scope)<br>**out_of_scope**: #7 Tomassetti v. Little Giant Ladder Systems, LLC — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #8 Abramson v. Federal Insurance Company — District Court, M.D. Florida (federal_court_in_state_scope) |
| LF-BS-2919 | federal_circuit 11 | keyword | "automatic stay" AND "section 362" AND NOT criminal | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-2924 | all_states | keyword | "informed consent" /s "material risk" | **out_of_scope**: #4 Nasset v. United States — District Court, E.D. Louisiana (federal_court_in_state_scope)<br>**landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-2925 | all_states_and_federal –1999-12-31 | keyword | "cohabitation" w/s "express contract" | **result_missing_court**: #8 Champion v. Frazier (977 S.W.2d 61) |
| LF-BS-2927 | one_state MT 2015-01-01– | keyword | "fraudulent inducement" w/p "justifiable reliance" and misrepresent! | **empty**: no results |
| LF-BS-2939 | one_state_plus_federal CA 2020-01-01– | keyword | "non-compete" w/p "legitimate business interest" and reasonabl! | **empty**: no results |
| LF-BS-2942 | one_state MT 1990-01-01–2010-12-31 | keyword | "cell-site location" w/15 (warrant or "reasonable expectation of privacy") | **empty**: no results |
| LF-BS-2944 | all_states | keyword | "economic loss rule" +s "purely economic" | **out_of_scope**: #1 Kelly v. Georgia-Pacific LLC — District Court, E.D. North Carolina (federal_court_in_state_scope)<br>**out_of_scope**: #2 W.A. Call Mfg. Co., Inc. v. WiLine Networks Inc. — District Court, N.D. California (federal_court_in_state_scope)<br>**out_of_scope**: #7 Vawter v. Quality Loan Service Corp. of Washington — District Court, W.D. Washington (federal_court_in_state_scope)<br>**out_of_scope**: #8 Pycsa Panama, S.A. v. Tensar Earth Technologies, Inc. — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #10 Pattern Design LLC v. We are Sechey Inc. — District Court, N.D. California (federal_court_in_state_scope) |
| LF-BS-2948 | federal_circuit federal | keyword | "parallel conduct" & conspira! % criminal | **empty**: no results<br>**landmark_missing**: wanted /twombly\|bell atl\|matsushita\|monsanto co\|copperweld/ in top 10 |
| LF-BS-2950 | federal_circuit 10 2000-01-01–2009-12-31 | keyword | "motion to compel arbitration" /s unconscionab! | **empty**: no results |
| LF-BS-2957 | one_state MO | keyword | "negligent hiring" & "negligent supervision" % patent | **empty**: no results |
| LF-BS-2961 | federal_district OR 1990-01-01–2010-12-31 | keyword | "mcdonnell douglas" /10 pretext | **empty**: no results |
| LF-BS-2966 | one_state OK | keyword | fee! /p lodestar | **duplicate_hit**: #5 HESS v. VOLKSWAGEN OF AMERICA, INC. 2014 OK 111 |
| LF-BS-2969 | one_state AK | keyword | "cell-site location" +s warrant | **empty**: no results |
| LF-BS-2970 | one_state_plus_federal IL | keyword | negligen! /25 abolish! | **landmark_missing**: wanted /alvis v\. ribar/ in top 10 |
| LF-BS-2971 | us_supreme_court | keyword | scienter /s "rule 10b-5" | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-2974 | one_state DE 2015-01-01– | keyword | "child support" +s imput! | **empty**: no results |
| LF-BS-2975 | federal_circuit 10 | keyword | "motion to compel arbitration" & unconscionab! % criminal | **landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-2977 | one_state_plus_federal LA | keyword | foresee! /25 "intervening cause" | **empty**: no results |
| LF-BS-2981 | one_state TN –1999-12-31 | keyword | "duty to warn" /10 psychotherapist | **empty**: no results |
| LF-BS-2982 | one_state AZ –1999-12-31 | keyword | "pollution exclusion" w/s irritant | **empty**: no results |
| LF-BS-2986 | one_state MI | keyword | "motion to compel arbitration" & unconscionab! % criminal | **empty**: no results |
| LF-BS-2988 | all_states 2023-01-01– | keyword | "implied warranty of merchantability" w/p disclaim! and conspicuous | **out_of_scope**: #1 Foster v. Corteva Agriscience LLC — District Court, N.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #2 Gold Peak Homeowners Association, Inc. v. GAF Materials, LLC — District Court, D. Colorado (federal_court_in_state_scope)<br>**out_of_scope**: #3 Plevnik v. MarineMax, Inc. — District Court, M.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #5 Phoenix Financial & Investments, Inc. v. McLaren Automotive, — District Court, S.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #7 The Mark on 287 Owner LLC v. Croft LLC — District Court, N.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #8 RTREE Logistics, LLC v. Neely Coble Company — District Court, S.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #9 Blackman v. Boston Whaler, Inc. — District Court, E.D. North Carolina (federal_court_in_state_scope) |
| LF-BS-2992 | federal_circuit 5 | keyword | "prior bad acts" /10 "other crimes" | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-2993 | all_states_and_federal | keyword | ("fraudulent joinder" OR "improper joinder") /s remand | **result_missing_court**: #4 Thornton v. Hamilton Sundstrand Corp. (121 F. Supp. 3d 819)<br>**result_missing_court**: #6 Carrasco v. T-Mobile USA, Inc. (no cite)<br>**result_missing_court**: #7 Taco Bell Corp. v. Dairy Farmers of America, Inc. (727 F. Supp. 2d 604)<br>**result_missing_court**: #9 Gregory Watkins et al v. Crescent Cargo Inc et al (no cite) |
| LF-BS-2995 | one_state MI | keyword | miranda & custody % civil | **empty**: no results |
| LF-BS-2996 | one_state DE | keyword | "equal protection" & "strict scrutiny" % contract | **empty**: no results |
| LF-BS-2997 | one_state_plus_federal NY | keyword | "likelihood of confusion" +s trademark | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-2999 | us_supreme_court 2015-01-01– | keyword | "statute of limitations" +s "equitable tolling" | **duplicate_hit**: #6 United States v. Kwai Fun Wong. United States 575 U.S. 402 |
| LF-BS-3001 | federal_district GA | keyword | retaliation & "materially adverse" % criminal | **empty**: no results |
| LF-BS-3004 | one_state PA | keyword | "pollution exclusion" & irritant % criminal | **empty**: no results |
| LF-BS-3005 | federal_district WY | keyword | apprendi /s jury | **empty**: no results |
| LF-BS-3007 | one_state CA 2023-01-01– | keyword | "negligent infliction of emotional distress" /p "zone of danger" & "close relationship" | **empty**: no results |
| LF-BS-3008 | one_state PA 2015-01-01– | keyword | "default judgment" w/p "excusable neglect" and "meritorious defense" | **empty**: no results |
| LF-BS-3010 | all_federal 2020-01-01– | keyword | erisa & "abuse of discretion" % criminal | **empty**: no results |
| LF-BS-3012 | one_state CA | keyword | habitab! /p tenant | **empty**: no results<br>**landmark_missing**: wanted /javins\|green v\. superior court/ in top 10 |
| LF-BS-3013 | one_state_plus_federal TX 2015-01-01– | keyword | therap! /p psychotherapist | **empty**: no results |
| LF-BS-3016 | federal_circuit 11 2020-01-01– | keyword | "economic substance" /10 "business purpose" | **empty**: no results |
| LF-BS-3019 | one_state CO | keyword | spoliation & "adverse inference" % patent | **empty**: no results |
| LF-BS-3023 | one_state GA | keyword | "design defect" +s "consumer expectations" | **empty**: no results |
| LF-BS-3027 | one_state_plus_federal CO 2000-01-01–2009-12-31 | keyword | "trade secret" /p "reasonable measures" & "independent economic value" | **empty**: no results |
| LF-BS-3028 | one_state MA 1990-01-01–2010-12-31 | keyword | "creditor's claim" w/15 ("personal representative" or "barred") | **empty**: no results |
| LF-BS-3029 | us_supreme_court | keyword | constru! /25 "intrinsic evidence" | **empty**: no results<br>**landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-3031 | one_state_plus_federal NJ 2020-01-01– | keyword | "attorney-client privilege" & waiv! % immigration | **empty**: no results |
| LF-BS-3032 | one_state_plus_federal FL 2000-01-01–2009-12-31 | keyword | "equitable indemnity" w/15 (contribution or tortfeasor) | **empty**: no results |
| LF-BS-3033 | us_supreme_court | keyword | retaliation /p "materially adverse" & "causal connection" | **empty**: no results<br>**landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-3036 | federal_circuit 1 2023-01-01– | keyword | "parallel conduct" /10 conspira! | **empty**: no results |
| LF-BS-3040 | one_state ME 2023-01-01– | keyword | ("preliminary injunction" OR "temporary restraining order") AND "likelihood of success" NOT divorce | **empty**: no results |
| LF-BS-3042 | all_federal | keyword | ("likelihood of confusion" OR "sleekcraft factors") AND "strength of the mark" NOT criminal | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-3044 | all_states_and_federal 2023-01-01– | keyword | "vacate the arbitration award" w/15 ("exceeded their powers" or "evident partiality") | **result_missing_court**: #8 GEORGE v. RUSHMORE SERVICE CENTER, LLC (no cite) |
| LF-BS-3045 | us_supreme_court | keyword | "crime involving moral turpitude" /s "categorical approach" | **empty**: no results<br>**landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-3049 | one_state TN | keyword | "loss of consortium" & spouse % patent | **empty**: no results |
| LF-BS-3050 | all_federal 1990-01-01–2010-12-31 | keyword | "class certification" w/15 (commonality or predominance) | **duplicate_hit**: #4 In re: 1994 Exxon 461 F.3d 598 |
| LF-BS-3051 | all_states | keyword | negligen! /p "contributory negligence" | **landmark_missing**: wanted /li v\. yellow cab/ in top 10 |
| LF-BS-3052 | all_federal 1990-01-01–2010-12-31 | keyword | "reasonable suspicion" & frisk % civil | **empty**: no results |
| LF-BS-3060 | one_state MN | keyword | "general jurisdiction" /p "at home" & "principal place of business" | **empty**: no results |
| LF-BS-3061 | one_state_plus_federal IA 1990-01-01–2010-12-31 | keyword | "class certification" & commonality % arbitration | **empty**: no results |
| LF-BS-3062 | one_state NY | keyword | brady & material! % civil | **empty**: no results |
| LF-BS-3063 | one_state IN 2000-01-01–2009-12-31 | keyword | nuptial! /25 unconscionab! | **empty**: no results |
| LF-BS-3064 | one_state DC | keyword | "transitory foreign substance" AND "actual or constructive knowledge" AND NOT medical | **empty**: no results |
| LF-BS-3065 | one_state WY | keyword | "attorney-client privilege" & waiv! % immigration | **empty**: no results |
| LF-BS-3066 | one_state GA | keyword | "negligent infliction of emotional distress" /p "zone of danger" & "close relationship" | **empty**: no results |
| LF-BS-3067 | one_state_plus_federal KS 2020-01-01– | keyword | ("parallel conduct" OR "plus factors") /s conspira! | **empty**: no results |
| LF-BS-3069 | federal_district FL | keyword | "fair use" & copyright % criminal | **empty**: no results |
| LF-BS-3070 | federal_district MS | keyword | spoliation & "adverse inference" % patent | **empty**: no results |
| LF-BS-3074 | us_supreme_court 2023-01-01– | keyword | "parallel conduct" AND conspira! AND NOT criminal | **empty**: no results |
| LF-BS-3080 | federal_district GA | keyword | confus! /p trademark | **empty**: no results |
| LF-BS-3083 | all_states 2023-01-01– | keyword | "economic loss rule" w/15 ("purely economic" or contract) | **out_of_scope**: #1 MJW Investments, Inc. v. SentryWest Insurance Services, Inc. — District Court, D. Utah (federal_court_in_state_scope)<br>**out_of_scope**: #3 Quan v. BAM Trading Services, Inc. — District Court, N.D. California (federal_court_in_state_scope)<br>**out_of_scope**: #4 Brickman v. Maximus, Inc. — District Court, S.D. Ohio (federal_court_in_state_scope)<br>**out_of_scope**: #6 Apex Tool Group LLC v. Cyderes, LLC — District Court, W.D. North Carolina (federal_court_in_state_scope)<br>**out_of_scope**: #9 Lipp v. Mixedbread AI, Inc. — District Court, N.D. California (federal_court_in_state_scope)<br>**out_of_scope**: #10 Critical Systems, LLC v. Addison HVAC,LLC — District Court, D. Maryland (federal_court_in_state_scope) |
| LF-BS-3085 | one_state NH –1999-12-31 | keyword | "business judgment rule" w/15 ("duty of care" or director!) | **empty**: no results |
| LF-BS-3086 | one_state IN 2023-01-01– | keyword | tortfeas! /p tortfeasor! | **empty**: no results |
| LF-BS-3088 | one_state ME | keyword | relocat! /25 "best interests of the child" | **empty**: no results |
| LF-BS-3089 | one_state_plus_federal OH 2020-01-01– | keyword | "anticipatory repudiation" & repudiat! % criminal | **empty**: no results |
| LF-BS-3096 | one_state WA 2000-01-01–2009-12-31 | keyword | defen! /p "potential for coverage" | **empty**: no results |
| LF-BS-3097 | federal_circuit 7 | keyword | "preferential transfer" & "ordinary course" % criminal | **empty**: no results |
| LF-BS-3100 | all_states | keyword | "second amendment" AND "historical tradition" AND NOT contract | **out_of_scope**: #1 Arms v. City of Chicago — District Court, N.D. Illinois (federal_court_in_state_scope) |
| LF-BS-3101 | all_states_and_federal 2020-01-01– | keyword | (brady OR "exculpatory evidence") AND suppress! NOT civil | **result_missing_court**: #9 Smith v. Tennessee (no cite) |
| LF-BS-3102 | one_state_plus_federal VA 2015-01-01– | keyword | consorti! /p spouse | **empty**: no results |
| LF-BS-3103 | one_state AZ | keyword | ("economic loss rule" OR "economic loss doctrine") AND contract NOT criminal | **duplicate_hit**: #7 HUGHES CUSTOM BLDG, LLC v. Davey 212 P.3d 865 |
| LF-BS-3105 | one_state NE | keyword | "negligence per se" w/15 ("class of persons" or statute) | **empty**: no results |
| LF-BS-3106 | all_federal | keyword | "rule of reason" w/15 ("anticompetitive effects" or "relevant market") | **landmark_missing**: wanted /leegin\|ohio v\. am\|american express\|state oil\|alston\|continental t\.v\|bmi\|broad\. music/ in top 10 |
| LF-BS-3108 | one_state GA 2000-01-01–2009-12-31 | keyword | "adverse possession" w/s "open and notorious" | **empty**: no results |
| LF-BS-3109 | one_state_plus_federal SC | keyword | "market share liability" & des % contract | **empty**: no results |
| LF-BS-3110 | all_states 2020-01-01– | keyword | "implied warranty of merchantability" /p disclaim! & conspicuous | **out_of_scope**: #1 Gold Peak Homeowners Association, Inc. v. GAF Materials, LLC — District Court, D. Colorado (federal_court_in_state_scope)<br>**out_of_scope**: #2 Foster v. Corteva Agriscience LLC — District Court, N.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #3 Plevnik v. MarineMax, Inc. — District Court, M.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #5 Turner v. Sony Corporation of America — District Court, N.D. California (federal_court_in_state_scope)<br>**out_of_scope**: #6 Phoenix Financial & Investments, Inc. v. McLaren Automotive, — District Court, S.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #7 The Mark on 287 Owner LLC v. Croft LLC — District Court, N.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #8 RTREE Logistics, LLC v. Neely Coble Company — District Court, S.D. Texas (federal_court_in_state_scope) |
| LF-BS-3111 | one_state GA | keyword | "trade secret" /p "reasonable measures" & "independent economic value" | **empty**: no results |
| LF-BS-3112 | one_state_plus_federal IL 2015-01-01– | keyword | "negligent infliction of emotional distress" /10 "zone of danger" | **empty**: no results |
| LF-BS-3113 | federal_district TX 2000-01-01–2009-12-31 | keyword | "preferential transfer" w/s "ordinary course" | **empty**: no results |
| LF-BS-3117 | all_federal | keyword | "motion to compel arbitration" w/s unconscionab! | **landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-3118 | one_state ID 1990-01-01–2010-12-31 | keyword | "deceptive and unfair trade practices" & consumer % criminal | **empty**: no results |
| LF-BS-3119 | us_supreme_court 1990-01-01–2010-12-31 | keyword | "consent to search" w/p "totality of the circumstances" and coerc! | **empty**: no results |
| LF-BS-3127 | all_states | keyword | ("unjust enrichment" OR "quantum meruit") /s benefit | **out_of_scope**: #10 THERMAL ENGINEERING INTERNATIONAL (USA) INC. v. HYPRO, INC. — District Court, W.D. Missouri (federal_court_in_state_scope) |
| LF-BS-3129 | us_supreme_court | keyword | "prior bad acts" w/15 ("other crimes" or propensity) | **empty**: no results<br>**landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-3131 | one_state_plus_federal SD | keyword | "implied covenant of good faith and fair dealing" w/s discretion | **duplicate_hit**: #7 Headley v. McCleary, Inc. 447 F.3d 1115 |
| LF-BS-3133 | us_supreme_court | keyword | scienter /10 "rule 10b-5" | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-3136 | one_state NY | keyword | therap! /25 "identifiable victim" | **empty**: no results |
| LF-BS-3142 | one_state CA | keyword | ("strict liability" OR "strict products liability") AND "unreasonably dangerous" NOT contract | **landmark_missing**: wanted /greenman/ in top 10 |
| LF-BS-3143 | us_supreme_court | keyword | "vacate the arbitration award" /10 "exceeded their powers" | **empty**: no results<br>**landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-3147 | all_states | keyword | "trade secret" /s "reasonable measures" | **out_of_scope**: #1 Valmarc Corporation v. Nike, Inc. — District Court, D. Oregon (federal_court_in_state_scope)<br>**out_of_scope**: #2 Sigma Corporation v. Island Industries, Inc. — District Court, W.D. Tennessee (federal_court_in_state_scope)<br>**out_of_scope**: #3 Investment Science LLC v. Oath Holdings Inc. — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #4 Industrial v. 360 Electrical — District Court, D. Utah (federal_court_in_state_scope)<br>**out_of_scope**: #5 Edelman Financial Engines, LLC v. Mariner Wealth Advisors LL — District Court, D. Kansas (federal_court_in_state_scope)<br>**out_of_scope**: #6 MST & Associates, Inc. and Rue Enterprises, LLC v. Brenda Wi — District Court, E.D. Virginia (federal_court_in_state_scope)<br>**out_of_scope**: #7 HOUSER v. FELDMAN — District Court, E.D. Pennsylvania (federal_court_in_state_scope) |
| LF-BS-3150 | federal_circuit 3 | keyword | eligib! /25 "inventive concept" | **empty**: no results<br>**landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-3153 | one_state FL 2000-01-01–2009-12-31 | keyword | "undue influence" w/s testator | **duplicate_hit**: #5 Greenwood v. Flohl 764 So. 2d 802 |
| LF-BS-3154 | federal_circuit 9 | keyword | "automatic stay" & "section 362" % criminal | **empty**: no results<br>**landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-3156 | federal_district UT | keyword | "cell-site location" +s warrant | **empty**: no results |
| LF-BS-3158 | one_state FL | keyword | jeopard! /25 "multiple punishments" | **duplicate_hit**: #4 NH v. State 723 So. 2d 889 |
| LF-BS-3160 | federal_circuit 4 | keyword | "age discrimination" & "but-for" % criminal | **empty**: no results<br>**landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10 |
| LF-BS-3161 | all_federal | keyword | "likelihood of confusion" /p trademark & "strength of the mark" | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-3168 | one_state CA | keyword | ("negligent infliction of emotional distress" OR "bystander recovery") AND "close relationship" NOT contract | **landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10<br>**boolean_not_violated**: Ochoa v. Superior Court — contains excluded term(s): contract<br>**boolean_not_violated**: Coon v. Joseph — contains excluded term(s): contract |
| LF-BS-3171 | one_state VT | keyword | "restrictive covenant" /p "homeowners association" & enforc! | **empty**: no results |
| LF-BS-3180 | one_state_plus_federal CA | keyword | "loss causation" w/p "inflated price" and "economic loss" | **landmark_missing**: wanted /dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-3181 | federal_district MA –1999-12-31 | keyword | cramdown w/15 ("absolute priority rule" or "fair and equitable") | **empty**: no results |
| LF-BS-3188 | one_state IL 2023-01-01– | keyword | ("procedural due process" OR "notice and an opportunity to be heard") AND deprivat! NOT contract | **empty**: no results |
| LF-BS-3191 | all_federal | keyword | "vacate the arbitration award" AND "exceeded their powers" AND NOT criminal | **landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-3192 | one_state_plus_federal TX 2015-01-01– | keyword | ("negligence per se" OR "statutory violation") AND statute NOT contract | **boolean_not_violated**: Spokeo, Inc. v. Robins — contains excluded term(s): contract |
| LF-BS-3194 | federal_circuit federal | keyword | deference & "statutory ambiguity" % criminal | **empty**: no results<br>**landmark_missing**: wanted /loper bright\|chevron\|skidmore\|kisor\|auer\|mead/ in top 10 |
| LF-BS-3198 | one_state NJ 2023-01-01– | keyword | misrepresent! /p "justifiable reliance" | **empty**: no results |
| LF-BS-3201 | all_federal | keyword | "malicious prosecution" AND "probable cause" AND "fourth amendment" | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-3203 | federal_circuit 4 | keyword | abstention w/p "pending state" and "comity" | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-3208 | federal_circuit 5 2023-01-01– | keyword | "motion to dismiss" w/s plausib! | **empty**: no results |
| LF-BS-3210 | all_states 2015-01-01– | keyword | "additional insured" /10 "arising out of" | **out_of_scope**: #2 Reidy Contracting Group, LLC v. Mt. Hawley Insurance Company — District Court, W.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #7 APAC-Atlantic, Inc. v. Owners Insurance Company — District Court, W.D. North Carolina (federal_court_in_state_scope)<br>**out_of_scope**: #10 Owners Insurance Company v. Colliers Bennett Kahnweiler, LLC — District Court, N.D. Illinois (federal_court_in_state_scope) |
| LF-BS-3220 | all_federal | keyword | "age discrimination" AND "but-for" AND NOT criminal | **landmark_missing**: wanted /gross v\. fbl\|hazen\|reeves\|o'connor v\. consol/ in top 10 |
| LF-BS-3223 | one_state AK | keyword | "pierce the corporate veil" +s undercapitaliz! | **empty**: no results |
| LF-BS-3224 | all_states_and_federal | keyword | nondischargeab! +s "false pretenses" | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query<br>**landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-3225 | one_state CA 2000-01-01–2009-12-31 | keyword | "testamentary capacity" w/p testator and "natural objects of his bounty" | **empty**: no results |
| LF-BS-3228 | all_federal | keyword | "hostile work environment" /p "severe or pervasive" & employer | **boolean_unsatisfied**: Meritor Savings Bank, FSB v. Vinson — required terms/proximity not met in full text |
| LF-BS-3239 | all_states_and_federal 2015-01-01– | keyword | "trade secret" /10 "reasonable measures" | **result_missing_court**: #10 Perez v. Blue Collar Scholars, LLC (no cite) |
| LF-BS-3244 | one_state GA | keyword | impractic! /25 unforeseeab! | **empty**: no results |
| LF-BS-3250 | one_state_plus_federal OK | keyword | citizen! /25 remov! | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-3258 | one_state FL | keyword | "quiet title" & deed % criminal | **empty**: no results |
| LF-BS-3262 | one_state_plus_federal KY –1999-12-31 | keyword | "social host" /p intoxicat! & "guest" | **empty**: no results |
| LF-BS-3263 | one_state_plus_federal KY | keyword | "prior bad acts" w/15 ("other crimes" or propensity) | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-3267 | one_state_plus_federal MA 2020-01-01– | keyword | cohabit! /p "express contract" | **empty**: no results |
| LF-BS-3271 | one_state LA | keyword | "duty to defend" /s "potential for coverage" | **empty**: no results |
| LF-BS-3277 | federal_circuit 9 | keyword | redress! /25 traceab! | **empty**: no results<br>**landmark_missing**: wanted /lujan\|spokeo\|transunion\|clapper\|summers v\. earth/ in top 10 |
| LF-BS-3279 | federal_district NV 2015-01-01– | keyword | "procedural due process" w/15 ("property interest" or deprivat!) | **empty**: no results |
| LF-BS-3285 | all_states | keyword | "punitive damages" +s "due process" | **out_of_scope**: #9 Simonds v. Boyer — District Court, W.D. Pennsylvania (federal_court_in_state_scope) |
| LF-BS-3288 | one_state LA 2000-01-01–2009-12-31 | keyword | nuptial! /25 unconscionab! | **empty**: no results |
| LF-BS-3289 | one_state_plus_federal MA 2020-01-01– | keyword | utteran! /p hearsay | **empty**: no results |
| LF-BS-3299 | federal_circuit federal 2015-01-01– | keyword | cramdown & "absolute priority rule" % criminal | **empty**: no results |
| LF-BS-3300 | one_state_plus_federal RI | keyword | ("default judgment" OR "motion to vacate") AND "meritorious defense" NOT criminal | **boolean_not_violated**: Webster v. Perrotta — contains excluded term(s): criminal |
| LF-BS-3301 | one_state OH | keyword | "duty to warn" /p psychotherapist & "identifiable victim" | **duplicate_hit**: #2 Estates of Morgan v. Fairfield Family Counseling Ctr. 77 Ohio St. 3d 284 |
| LF-BS-3302 | federal_circuit 2 | keyword | ("likelihood of confusion" OR "polaroid factors") AND "strength of the mark" NOT criminal | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-3305 | one_state CA | keyword | "security deposit" +s tenant | **duplicate_hit**: #9 In re Cassil 37 Cal. App. 4th 1081 |
| LF-BS-3307 | one_state MN 1990-01-01–2010-12-31 | keyword | deprivat! /25 deprivat! | **empty**: no results |
| LF-BS-3309 | all_federal | keyword | "likelihood of confusion" w/s trademark | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-3310 | one_state DE | keyword | "business judgment rule" /s "duty of care" | **landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-3323 | one_state KY 1990-01-01–2010-12-31 | keyword | "proximate cause" & foreseeab! % contract | **empty**: no results |
| LF-BS-3324 | one_state OK 2000-01-01–2009-12-31 | keyword | "transitory foreign substance" AND "actual or constructive knowledge" AND NOT medical | **empty**: no results |
| LF-BS-3328 | federal_circuit 8 2015-01-01– | keyword | "parallel conduct" w/p conspira! and "sherman act" | **empty**: no results |
| LF-BS-3330 | one_state_plus_federal IL | keyword | "vacate the arbitration award" & "exceeded their powers" % criminal | **empty**: no results<br>**landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-3331 | one_state KY | keyword | "prenuptial agreement" & "full disclosure" % criminal | **empty**: no results |
| LF-BS-3336 | one_state DC 2020-01-01– | keyword | "social host" /p intoxicat! & "guest" | **empty**: no results |
| LF-BS-3339 | one_state CO | keyword | "social host" +s intoxicat! | **empty**: no results |
| LF-BS-3341 | us_supreme_court –1999-12-31 | keyword | "confrontation clause" AND testimonial AND cross-examin! | **after_dateTo**: #9 2009-06-25 > 1999-12-31 |
| LF-BS-3342 | one_state MN | keyword | "transitory foreign substance" AND "actual or constructive knowledge" AND NOT medical | **empty**: no results |
| LF-BS-3347 | all_federal | keyword | constru! /p specification | **landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-3350 | federal_circuit 9 | keyword | deprivat! /25 deprivat! | **empty**: no results<br>**landmark_missing**: wanted /mathews v\. eldridge\|goldberg v\. kelly\|loudermill\|roth\|mullane/ in top 10 |
| LF-BS-3351 | one_state MI 2015-01-01– | keyword | "reasonable suspicion" w/15 (frisk or "articulable facts") | **empty**: no results |
| LF-BS-3360 | one_state_plus_federal SD | keyword | easement! /p servient | **boolean_unsatisfied**: Johnson v. RADLE — required terms/proximity not met in full text |
| LF-BS-3362 | us_supreme_court 2023-01-01– | keyword | "fair labor standards act" /p exempt! & "regular rate" | **empty**: no results |
| LF-BS-3363 | one_state_plus_federal ME | keyword | "negligent infliction of emotional distress" & "zone of danger" % contract | **empty**: no results |
| LF-BS-3365 | all_states | keyword | "negligent infliction of emotional distress" /s "zone of danger" | **out_of_scope**: #8 Faulkner v. Dowson Holding Co. — District Court, Virgin Islands (federal_court_in_state_scope)<br>**out_of_scope**: #9 Hutton v. Norwegian Cruise Line Ltd. — District Court, S.D. Florida (federal_court_in_state_scope)<br>**landmark_missing**: wanted /dillon v\. legg\|thing v\. la chusa/ in top 10 |
| LF-BS-3371 | federal_circuit 9 | keyword | "likelihood of confusion" /10 trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-3379 | federal_circuit 2 | keyword | interrogat! /p custody | **landmark_missing**: wanted /miranda\|berghuis\|edwards v\. ariz\|j\.d\.b\.\|rhode island v\. innis\|dickerson/ in top 10 |
| LF-BS-3380 | one_state_plus_federal IN 2015-01-01– | keyword | (cramdown OR "cram down") /s "absolute priority rule" | **empty**: no results |
| LF-BS-3381 | one_state CA | keyword | "informed consent" w/s "material risk" | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-3382 | all_states_and_federal 1990-01-01–2010-12-31 | keyword | "anticipatory repudiation" /p repudiat! & "adequate assurance" | **empty**: no results |
| LF-BS-3384 | one_state_plus_federal MO | keyword | "fair use" AND copyright AND NOT criminal | **boolean_not_violated**: Metro-Goldwyn-Mayer Studios Inc. v. Grokster, Ltd. — contains excluded term(s): criminal |
| LF-BS-3385 | one_state WI | keyword | "equitable distribution" +s "nonmarital" | **empty**: no results |
| LF-BS-3387 | one_state VA 2020-01-01– | keyword | defen! /p "potential for coverage" | **empty**: no results |
| LF-BS-3388 | one_state NJ | keyword | intoxica! /25 "driving under the influence" | **empty**: no results |
| LF-BS-3392 | one_state_plus_federal CT 1990-01-01–2010-12-31 | keyword | interrogat! /p custody | **empty**: no results |
| LF-BS-3393 | one_state_plus_federal GA | keyword | "forum non conveniens" w/s "private interest" | **duplicate_hit**: #10 LIQUIDATION COM'N OF BANCO INTERCONT. v. Renta 530 F.3d 1339 |
| LF-BS-3394 | one_state_plus_federal IL | keyword | "wrongful death" w/15 (damages or decedent) | **duplicate_hit**: #10 Sheahan v. NORTHEAST ILL. REG. COMMUTER RR CORP. 146 Ill. App. 3d 116 |
| LF-BS-3399 | one_state IL | keyword | classif! /p "strict scrutiny" | **empty**: no results |
| LF-BS-3401 | one_state_plus_federal WV | keyword | "demand futility" /s "demand excused" | **empty**: no results |
| LF-BS-3406 | all_states 2020-01-01– | keyword | "prenuptial agreement" w/15 ("full disclosure" or unconscionab!) | **empty**: no results |
| LF-BS-3407 | all_federal | keyword | "diversity jurisdiction" /10 "amount in controversy" | **landmark_missing**: wanted /hertz\|strawbridge\|exxon mobil\|dart cherokee\|lincoln property/ in top 10 |
| LF-BS-3408 | all_federal | keyword | "qualified immunity" /s "constitutional right" | **boolean_unsatisfied**: Dobbs v. Jackson Women's Health Organization — required terms/proximity not met in full text |
| LF-BS-3411 | one_state_plus_federal ND | keyword | "equal protection" /10 "strict scrutiny" | **duplicate_hit**: #8 In Interest of Pf 2008 ND 37 |
| LF-BS-3412 | one_state MI | keyword | "adverse possession" & "open and notorious" % criminal | **empty**: no results |
| LF-BS-3414 | federal_circuit 10 2020-01-01– | keyword | scienter /s "rule 10b-5" | **empty**: no results |
| LF-BS-3415 | one_state TX 2020-01-01– | keyword | "duty to warn" AND psychotherapist AND NOT contract | **empty**: no results |
| LF-BS-3418 | one_state WY | keyword | ("non-compete" OR "covenant not to compete") /s "legitimate business interest" | **empty**: no results |
| LF-BS-3419 | all_states | keyword | religio! /25 burden | **out_of_scope**: #3 SIMPSON v. DAVENPORT — District Court, W.D. Pennsylvania (federal_court_in_state_scope) |
| LF-BS-3428 | one_state MI | keyword | spoliation /10 "adverse inference" | **empty**: no results |
| LF-BS-3434 | one_state_plus_federal GA | keyword | ("cohabitation" OR "nonmarital partners") /s "express contract" | **empty**: no results |
| LF-BS-3438 | all_federal | keyword | "patent eligible" w/p "section 101" and "inventive concept" | **landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-3439 | one_state_plus_federal WA | keyword | "attorney-client privilege" w/15 (waiv! or confidential!) | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-3442 | one_state_plus_federal WI | keyword | stay! /p "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-3443 | federal_circuit 8 | keyword | "automatic stay" w/15 ("section 362" or debtor) | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-3444 | one_state_plus_federal PA | keyword | (brady OR "exculpatory evidence") AND suppress! NOT civil | **boolean_not_violated**: Strickler v. Greene — contains excluded term(s): civil |
| LF-BS-3446 | federal_district SC | keyword | "public forum" & "content-based" % contract | **empty**: no results |
| LF-BS-3448 | all_states | keyword | indemni! /p contribution | **out_of_scope**: #2 Gonzalez v. Wal-Mart Stores, Inc. — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #7 The Ohio Security Insurance Company v. Kinsale Insurance Com — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #8 Casino Cruises Investment Co. v. Ravens Manufacturing Co. — District Court, M.D. Florida (federal_court_in_state_scope) |
| LF-BS-3449 | all_states 2015-01-01– | keyword | "force majeure" /s frustration | **out_of_scope**: #3 Scott Herritt — United States Bankruptcy Court, D. Massachusetts (federal_court_in_state_scope)<br>**out_of_scope**: #7 Regal Cinemas, Inc. v. Town of Culpeper — District Court, W.D. Virginia (federal_court_in_state_scope)<br>**out_of_scope**: #9 Falk v. Wells Fargo Bank N. A. — District Court, D. Massachusetts (federal_court_in_state_scope)<br>**out_of_scope**: #10 1600 Walnut Corporation, General Partner of L-A 1600 Walnut  — District Court, E.D. Pennsylvania (federal_court_in_state_scope) |
| LF-BS-3451 | one_state_plus_federal MO | keyword | "business judgment rule" AND "duty of care" AND NOT criminal | **duplicate_hit**: #6 Cooperative v. Farmland Industries, Inc. 198 F.3d 685 |
| LF-BS-3453 | federal_circuit 3 | keyword | retaliation & "materially adverse" % criminal | **empty**: no results<br>**landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-3454 | one_state TX | keyword | "social host" /s intoxicat! | **empty**: no results |
| LF-BS-3456 | us_supreme_court 2000-01-01–2009-12-31 | keyword | deference w/s "statutory ambiguity" | **boolean_unsatisfied**: Alaska Department of Environmental Conservation v. Environme — required terms/proximity not met in full text |
| LF-BS-3459 | one_state NV | keyword | "market share liability" /p des & manufacturer | **empty**: no results |
| LF-BS-3465 | one_state MI | keyword | "reasonable suspicion" & frisk % civil | **empty**: no results |
| LF-BS-3467 | one_state ME | keyword | foresee! /25 "intervening cause" | **empty**: no results |
| LF-BS-3471 | federal_circuit 3 | keyword | "reasonable accommodation" w/15 ("interactive process" or "qualified individual") | **duplicate_hit**: #4 No. 01-3212 292 F.3d 356 |
| LF-BS-3473 | all_states | keyword | exculpat! /p material! | **out_of_scope**: #1 Cassels Brock & Blackwell LLP v. VeroBlue Farms USA, Inc. — District Court, N.D. Iowa (federal_court_in_state_scope) |
| LF-BS-3474 | federal_circuit federal –1999-12-31 | keyword | scienter w/p "rule 10b-5" and pslra | **empty**: no results |
| LF-BS-3475 | federal_circuit 5 1990-01-01–2010-12-31 | keyword | "parallel conduct" /p conspira! & "sherman act" | **empty**: no results |
| LF-BS-3476 | one_state SC | keyword | "second amendment" w/15 ("historical tradition" or firearm) | **empty**: no results |
| LF-BS-3478 | one_state PA 2023-01-01– | keyword | "free exercise" +s "neutral and generally applicable" | **empty**: no results |
| LF-BS-3480 | all_states_and_federal | keyword | ("trade secret" OR misappropriat!) /s "reasonable measures" | **result_missing_court**: #7 Milliman, Inc. v. Gradient A.I. Corp. (no cite)<br>**result_missing_court**: #9 Perez v. Blue Collar Scholars, LLC (no cite) |
| LF-BS-3482 | one_state WA | keyword | "non-compete" w/s "legitimate business interest" | **empty**: no results |
| LF-BS-3484 | one_state_plus_federal FL | keyword | benefit! /25 "arbitrary and capricious" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-3485 | one_state MI | keyword | "prescriptive easement" /s servient | **empty**: no results |
| LF-BS-3486 | all_states | keyword | tak! /25 "economically viable" | **empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query |
| LF-BS-3487 | all_states | keyword | "promissory estoppel" /s "clear and definite promise" | **out_of_scope**: #6 MASTERANK WAX, INC. v. RFC CONTAINER LLC — District Court, D. New Jersey (federal_court_in_state_scope)<br>**out_of_scope**: #9 SOLTIS v. CATALENT PHARMA SOLUTIONS — District Court, D. New Jersey (federal_court_in_state_scope) |
| LF-BS-3488 | one_state OK | keyword | ("child support" OR "imputed income") AND underemploy! NOT criminal | **duplicate_hit**: #2 IN THE INTEREST OF THE CHILDREN OF KNIGHT 317 P.3d 210 |
| LF-BS-3491 | one_state MA 2015-01-01– | keyword | "motion to compel arbitration" & unconscionab! % criminal | **empty**: no results |
| LF-BS-3492 | one_state_plus_federal NH | keyword | subrogation AND insurer AND reimburse! | **boolean_unsatisfied**: Coventry Health Care of Mo., Inc. v. Nevils — required terms/proximity not met in full text |
| LF-BS-3498 | one_state NY | keyword | "promissory estoppel" w/15 ("clear and definite promise" or reliance) | **empty**: no results |
| LF-BS-3500 | all_federal 2000-01-01–2009-12-31 | keyword | nondischargeab! /s "false pretenses" | **empty**: no results |
| LF-BS-3503 | all_states | keyword | "implied covenant of good faith and fair dealing" +s discretion | **out_of_scope**: #5 Pensford Financial Group, LLC v. 303 Software, Inc. — District Court, D. Colorado (federal_court_in_state_scope)<br>**out_of_scope**: #7 RSS UBSCM 2017-C4-IL FDGFM, LLC v. 400 Townline, LLC — District Court, N.D. Illinois (federal_court_in_state_scope)<br>**out_of_scope**: #8 400 Townline, LLC v. Wilmington Trust, National Association — District Court, N.D. Illinois (federal_court_in_state_scope) |
| LF-BS-3504 | one_state_plus_federal HI | keyword | "promissory estoppel" +s "clear and definite promise" | **boolean_unsatisfied**: Gonsalves v. Nissan Motor Corp. in Hawai'i, Ltd. — required terms/proximity not met in full text |
| LF-BS-3506 | one_state_plus_federal VA | keyword | "attorney-client privilege" /s waiv! | **landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-3507 | federal_circuit 5 1990-01-01–2010-12-31 | keyword | "loss causation" & "inflated price" % criminal | **empty**: no results |
| LF-BS-3508 | federal_circuit 7 | keyword | "claim construction" & specification % criminal | **empty**: no results<br>**landmark_missing**: wanted /markman\|phillips v\. awh\|teva pharms\|nautilus/ in top 10 |
| LF-BS-3509 | one_state ME 1990-01-01–2010-12-31 | keyword | deprivat! /25 deprivat! | **empty**: no results |
| LF-BS-3510 | one_state_plus_federal CA 2020-01-01– | keyword | "adverse possession" /10 "open and notorious" | **empty**: no results |
| LF-BS-3512 | one_state CA | keyword | "motion to compel arbitration" /p unconscionab! & delegation | **empty**: no results |
| LF-BS-3513 | one_state_plus_federal FL | keyword | "negligent infliction of emotional distress" w/p "zone of danger" and "close relationship" | **empty**: no results |
| LF-BS-3515 | all_states | keyword | "economic loss rule" AND "purely economic" AND NOT criminal | **out_of_scope**: #5 Kelly v. Georgia-Pacific LLC — District Court, E.D. North Carolina (federal_court_in_state_scope) |
| LF-BS-3519 | all_states | keyword | "business judgment rule" /10 "duty of care" | **landmark_missing**: wanted /aronson\|smith v\. van gorkom\|unocal\|revlon\|brehm\|caremark\|corwin\|zapata/ in top 10 |
| LF-BS-3524 | all_states_and_federal | keyword | "medical malpractice" AND "standard of care" AND "expert testimony" | **result_missing_court**: #7 Bryant v. Wake Forest Univ. Baptist Med. Ctr. (no cite) |
| LF-BS-3528 | one_state NM | keyword | "deceptive and unfair trade practices" w/15 (consumer or "actual damages") | **empty**: no results |
| LF-BS-3534 | one_state_plus_federal NC | keyword | frivol! /p sanction! | **landmark_missing**: wanted /cooter\|business guides\|chambers v\. nasco/ in top 10 |
| LF-BS-3537 | federal_circuit 2 | keyword | (retaliation OR "protected activity") AND "causal connection" NOT criminal | **landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-3539 | one_state MO | keyword | "economic loss rule" & "purely economic" % criminal | **empty**: no results |
| LF-BS-3540 | us_supreme_court | keyword | "parallel conduct" w/15 (conspira! or "sherman act") | **empty**: no results<br>**landmark_missing**: wanted /twombly\|bell atl\|matsushita\|monsanto co\|copperweld/ in top 10 |
| LF-BS-3542 | one_state SC | keyword | (foreclosure OR "mortgage foreclosure") /s standing | **duplicate_hit**: #7 FEDERAL NAT'L. MTG. ASSN. v. Brooks 405 S.E.2d 604 |
| LF-BS-3543 | one_state UT | keyword | "pierce the corporate veil" +s undercapitaliz! | **empty**: no results |
| LF-BS-3547 | one_state SD | keyword | "force majeure" /10 frustration | **empty**: no results |
| LF-BS-3548 | federal_district VT | keyword | standing & "injury in fact" % divorce | **empty**: no results |
| LF-BS-3550 | one_state GA | keyword | "second amendment" /10 "historical tradition" | **empty**: no results |
| LF-BS-3552 | federal_circuit dc | keyword | erisa w/s "abuse of discretion" | **boolean_unsatisfied**: Pierce v. Underwood — required terms/proximity not met in full text |
| LF-BS-3559 | one_state IL 2000-01-01–2009-12-31 | keyword | "cell-site location" /10 warrant | **empty**: no results |
| LF-BS-3560 | one_state MS | keyword | defen! /p "potential for coverage" | **empty**: no results |
| LF-BS-3566 | one_state UT | keyword | "pollution exclusion" +s irritant | **empty**: no results |
| LF-BS-3567 | all_states_and_federal | keyword | cohabit! /25 implied | **landmark_missing**: wanted /marvin v\. marvin/ in top 10 |
| LF-BS-3569 | federal_circuit 10 | keyword | "excited utterance" +s hearsay | **duplicate_hit**: #3 Michigan v. Bryant 562 U.S. 344 |
| LF-BS-3571 | federal_circuit 6 | keyword | certif! /p commonality | **landmark_missing**: wanted /wal-mart\|dukes\|comcast\|amchem\|tyson foods\|falcon/ in top 10 |
| LF-BS-3572 | us_supreme_court | keyword | purposeful! /25 "fair play" | **landmark_missing**: wanted /international shoe\|world-wide volkswagen\|burger king\|daimler\|goodyear\|ford motor\|bristol-myers\|walden/ in top 10 |
| LF-BS-3575 | one_state CA 2000-01-01–2009-12-31 | keyword | relian! /p "clear and definite promise" | **empty**: no results |
| LF-BS-3576 | all_federal | keyword | preclu! /p "final judgment" | **landmark_missing**: wanted /taylor v\. sturgell\|federated dep\|allen v\. mccurry\|semtek/ in top 10 |
| LF-BS-3580 | one_state CA | keyword | "vacate the arbitration award" & "exceeded their powers" % criminal | **empty**: no results |
| LF-BS-3581 | all_federal | keyword | conspir! /p conspira! | **landmark_missing**: wanted /twombly\|bell atl\|matsushita\|monsanto co\|copperweld/ in top 10 |
| LF-BS-3582 | all_federal | keyword | ("likelihood of confusion" OR "lapp factors") AND "strength of the mark" NOT criminal | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-3590 | all_federal | keyword | abstention +s "pending state" | **duplicate_hit**: #3 Zahl v. Harper 282 F.3d 204<br>**landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-3595 | federal_district NE | keyword | exculpat! /25 suppress! | **empty**: no results |
| LF-BS-3597 | one_state_plus_federal LA | keyword | (erisa OR "plan administrator") /s "abuse of discretion" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-3598 | one_state_plus_federal OH | keyword | expert! /p reliab! | **landmark_missing**: wanted /daubert\|kumho\|joiner/ in top 10 |
| LF-BS-3603 | federal_circuit 1 | keyword | retaliation & "materially adverse" % criminal | **empty**: no results<br>**landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-3605 | federal_district KY –1999-12-31 | keyword | daubert /10 reliab! | **empty**: no results |
| LF-BS-3609 | federal_district MS | keyword | ("loss causation" OR "corrective disclosure") /s "inflated price" | **empty**: no results |
| LF-BS-3610 | one_state MI | keyword | "anticipatory repudiation" w/p repudiat! and "adequate assurance" | **empty**: no results |
| LF-BS-3612 | all_states_and_federal | keyword | "pierce the corporate veil" /p undercapitaliz! & "corporate form" | **empty**: no results<br>**empty_broad_scope**: nothing in all_states_and_federal for a mainstream doctrine query |
| LF-BS-3614 | one_state CT | keyword | "promissory estoppel" & "clear and definite promise" % criminal | **empty**: no results |
| LF-BS-3615 | one_state NJ 1990-01-01–2010-12-31 | keyword | "demand futility" /s "demand excused" | **empty**: no results |
| LF-BS-3624 | one_state IL | keyword | "demand futility" /p "demand excused" & board | **empty**: no results |
| LF-BS-3632 | all_states | keyword | "unjust enrichment" w/15 (benefit or "express contract") | **out_of_scope**: #2 Clark v. Pizza Baker, Inc. — District Court, S.D. Ohio (federal_court_in_state_scope)<br>**out_of_scope**: #4 Advance v. Litiscape — District Court, D. Utah (federal_court_in_state_scope)<br>**out_of_scope**: #6 Dillon v. Leazer Group, Inc. — District Court, E.D. North Carolina (federal_court_in_state_scope)<br>**out_of_scope**: #9 Great Northern Insurance Company v. 100 Park Avenue Homeowne — District Court, D. Colorado (federal_court_in_state_scope) |
| LF-BS-3633 | all_federal | keyword | overtim! /p exempt! | **landmark_missing**: wanted /encino\|christopher v\. smithkline\|helix energy\|integrity staffing/ in top 10 |
| LF-BS-3635 | federal_circuit 3 | keyword | ("likelihood of confusion" OR "lapp factors") /s trademark | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-3636 | federal_circuit 10 | keyword | ("excessive force" OR "objective reasonableness") /s "fourth amendment" | **boolean_unsatisfied**: Tennessee v. Garner — required terms/proximity not met in full text |
| LF-BS-3641 | one_state_plus_federal MI 1990-01-01–2010-12-31 | keyword | "testamentary capacity" w/p testator and "natural objects of his bounty" | **empty**: no results |
| LF-BS-3646 | federal_circuit 6 | keyword | substan! /25 commissioner | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-3649 | one_state_plus_federal FL –1999-12-31 | keyword | "anticipatory repudiation" /s repudiat! | **empty**: no results |
| LF-BS-3653 | all_states | keyword | "duty to warn" +s psychotherapist | **out_of_scope**: #5 United States v. Landor — District Court, E.D. Kentucky (federal_court_in_state_scope)<br>**out_of_scope**: #10 Currie v. United States — District Court, M.D. North Carolina (federal_court_in_state_scope)<br>**landmark_missing**: wanted /tarasoff/ in top 10 |
| LF-BS-3654 | federal_circuit 11 | keyword | interrogat! /25 waiv! | **empty**: no results<br>**landmark_missing**: wanted /miranda\|berghuis\|edwards v\. ariz\|j\.d\.b\.\|rhode island v\. innis\|dickerson/ in top 10 |
| LF-BS-3655 | one_state NM 1990-01-01–2010-12-31 | keyword | ("creditor's claim" OR "claim against the estate") AND "barred" NOT criminal | **duplicate_hit**: #10 Toney v. Coe 826 P.2d 576 |
| LF-BS-3658 | one_state_plus_federal CA –1999-12-31 | keyword | "informed consent" & "material risk" % patent | **empty**: no results |
| LF-BS-3660 | federal_district GA | keyword | avoid! /25 trustee | **boolean_unsatisfied**: Perkins v. American International Specialty Lines Insurance — required terms/proximity not met in full text |
| LF-BS-3661 | federal_circuit dc | keyword | "automatic stay" /10 "section 362" | **duplicate_hit**: #10 Comm v. FCC 254 F.3d 130<br>**landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-3662 | federal_circuit 9 | keyword | confus! /p trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-3663 | all_states 1990-01-01–2010-12-31 | keyword | "fraudulent inducement" /10 "justifiable reliance" | **out_of_scope**: #5 Generale Bank, New York Branch v. Choudhury — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #10 Telular Corp. v. Mentor Graphics Corp. — District Court, N.D. Illinois (federal_court_in_state_scope) |
| LF-BS-3667 | federal_circuit 3 | keyword | ("likelihood of confusion" OR "lapp factors") AND "strength of the mark" NOT criminal | **landmark_missing**: wanted /lapp\|interpace/ in top 10 |
| LF-BS-3668 | one_state NJ 2023-01-01– | keyword | "forum non conveniens" /s "private interest" | **empty**: no results |
| LF-BS-3670 | one_state_plus_federal OH | keyword | stay! /p "section 362" | **landmark_missing**: wanted /city of chicago v\. fulton\|strumpf/ in top 10 |
| LF-BS-3673 | one_state MI 2023-01-01– | keyword | "additional insured" /p "arising out of" & coverage | **empty**: no results |
| LF-BS-3675 | one_state NH | keyword | tortfeas! /25 apportion! | **empty**: no results |
| LF-BS-3676 | one_state WA | keyword | "additional insured" & "arising out of" % criminal | **empty**: no results |
| LF-BS-3682 | one_state MA | keyword | "fraudulent inducement" & "justifiable reliance" % criminal | **empty**: no results |
| LF-BS-3684 | federal_circuit 5 | keyword | "motion to dismiss" /10 plausib! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-3685 | all_states_and_federal | keyword | "design defect" /s "consumer expectations" | **landmark_missing**: wanted /tincher\|azzarello/ in top 10 |
| LF-BS-3686 | one_state_plus_federal OR | keyword | "parol evidence rule" +s integrat! | **empty**: no results |
| LF-BS-3692 | one_state_plus_federal NM | keyword | "crime involving moral turpitude" +s "categorical approach" | **landmark_missing**: wanted /mathis\|descamps\|taylor v\. united states\|moncrieffe\|esquivel-quintana\|pereira\|niz-chavez\|sessions v\. dimaya/ in top 10 |
| LF-BS-3693 | federal_circuit 8 2015-01-01– | keyword | cramdown w/15 ("absolute priority rule" or "fair and equitable") | **empty**: no results |
| LF-BS-3696 | us_supreme_court | keyword | "patent eligible" w/15 ("section 101" or "inventive concept") | **empty**: no results<br>**landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-3697 | one_state MT 2000-01-01–2009-12-31 | keyword | "economic loss rule" /s "purely economic" | **empty**: no results |
| LF-BS-3711 | one_state_plus_federal FL 2000-01-01–2009-12-31 | keyword | ("social host" OR "dram shop") /s intoxicat! | **empty**: no results |
| LF-BS-3713 | one_state SD 2023-01-01– | keyword | "general jurisdiction" /10 "at home" | **empty**: no results |
| LF-BS-3716 | one_state_plus_federal IL | keyword | tak! /25 "economically viable" | **empty**: no results<br>**landmark_missing**: wanted /penn central\|lucas\|lingle\|nollan\|dolan\|cedar point\|knick\|murr/ in top 10 |
| LF-BS-3717 | one_state VT 2015-01-01– | keyword | "dog bite" w/15 ("strict liability" or owner) | **empty**: no results |
| LF-BS-3719 | one_state OH | keyword | punitive! /p "due process" | **duplicate_hit**: #2 Williams v. Aetna Fin. Co. 83 Ohio St. 3d 464 |
| LF-BS-3721 | federal_circuit 1 | keyword | "statute of limitations" w/p "equitable tolling" and "discovery rule" | **landmark_missing**: wanted /holland v\. florida\|pace v\. digug\|irwin v\. dep\|menominee\|lozano/ in top 10 |
| LF-BS-3726 | federal_circuit 2 | keyword | "likelihood of confusion" /10 trademark | **landmark_missing**: wanted /polaroid/ in top 10 |
| LF-BS-3727 | federal_circuit 10 –1999-12-31 | keyword | "second amendment" w/s "historical tradition" | **empty**: no results |
| LF-BS-3729 | one_state NC | keyword | "res ipsa loquitur" & inference % contract | **empty**: no results |
| LF-BS-3731 | one_state_plus_federal WA 1990-01-01–2010-12-31 | keyword | municipal! /25 "deliberate indifference" | **after_dateTo**: #2 2016-08-15 > 2010-12-31 |
| LF-BS-3732 | one_state_plus_federal MN | keyword | (relocation OR "move away") AND "best interests of the child" NOT criminal | **boolean_not_violated**: Troxel v. Granville — contains excluded term(s): criminal |
| LF-BS-3733 | one_state GA | keyword | "free exercise" & "neutral and generally applicable" % contract | **empty**: no results |
| LF-BS-3736 | one_state MT 2015-01-01– | keyword | "social host" w/15 (intoxicat! or "guest") | **empty**: no results |
| LF-BS-3739 | one_state_plus_federal MD | keyword | prosecut! /p "probable cause" | **landmark_missing**: wanted /thompson v\. clark\|manuel v\. joliet\|mcdonough\|heck v\. humphrey/ in top 10 |
| LF-BS-3741 | federal_circuit 8 | keyword | scient! /p "rule 10b-5" | **landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-3742 | federal_circuit 11 | keyword | abstention /p "pending state" & "comity" | **landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-3743 | all_states | keyword | foreclosure AND standing AND NOT criminal | **out_of_scope**: #4 In re Foreclosure Cases — District Court, S.D. Ohio (federal_court_in_state_scope) |
| LF-BS-3750 | one_state_plus_federal NY 2020-01-01– | keyword | "pierce the corporate veil" /p undercapitaliz! & "corporate form" | **empty**: no results |
| LF-BS-3752 | one_state_plus_federal TX | keyword | "vacate the arbitration award" AND "exceeded their powers" AND NOT criminal | **landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-3753 | federal_district OH | keyword | cramdown w/15 ("absolute priority rule" or "fair and equitable") | **empty**: no results |
| LF-BS-3754 | one_state_plus_federal IN 2000-01-01–2009-12-31 | keyword | "likelihood of confusion" & trademark % criminal | **empty**: no results |
| LF-BS-3763 | one_state_plus_federal DC | keyword | "child support" w/p imput! and underemploy! | **empty**: no results |
| LF-BS-3766 | one_state_plus_federal PA | keyword | ("design defect" OR "strict liability") /s "consumer expectations" | **landmark_missing**: wanted /tincher\|azzarello/ in top 10 |
| LF-BS-3767 | one_state_plus_federal MN | keyword | "force majeure" w/15 (frustration or unforeseeab!) | **empty**: no results |
| LF-BS-3773 | all_states_and_federal | keyword | estop! /p "actually litigated" | **result_missing_court**: #7 Doe v. Briggs (945 F. Supp. 2d 210)<br>**landmark_missing**: wanted /parklane\|blonder-tongue\|b & b hardware\|montana v\. united states/ in top 10 |
| LF-BS-3785 | one_state_plus_federal CA | keyword | ("duty to warn" OR "duty to protect") /s psychotherapist | **landmark_missing**: wanted /tarasoff/ in top 10 |
| LF-BS-3792 | one_state OH | keyword | spoliation & "adverse inference" % patent | **empty**: no results |
| LF-BS-3796 | federal_district DE | keyword | scienter /10 "rule 10b-5" | **empty**: no results |
| LF-BS-3804 | one_state IA | keyword | locat! /p warrant | **boolean_unsatisfied**: Iowa Department of Revenue & Finance v. Peterson — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Iowa v. Sampson — required terms/proximity not met in full text<br>**boolean_unsatisfied**: Fisher v. SEDGWICK IN AND FOR STORY COUNTY — required terms/proximity not met in full text |
| LF-BS-3808 | one_state NC 1990-01-01–2010-12-31 | keyword | "promissory estoppel" w/15 ("clear and definite promise" or reliance) | **empty**: no results |
| LF-BS-3810 | federal_district ND | keyword | indiffer! /25 "eighth amendment" | **empty**: no results |
| LF-BS-3816 | one_state TX 2023-01-01– | keyword | "parol evidence rule" /p integrat! & ambigu! | **empty**: no results |
| LF-BS-3818 | one_state IL 2015-01-01– | keyword | "statute of frauds" w/p "part performance" and writing | **empty**: no results |
| LF-BS-3819 | one_state MA | keyword | "excited utterance" & hearsay % contract | **empty**: no results |
| LF-BS-3821 | one_state AZ | keyword | "equitable distribution" /s "nonmarital" | **empty**: no results |
| LF-BS-3823 | all_federal | keyword | "free exercise" /10 "neutral and generally applicable" | **landmark_missing**: wanted /employment div\|smith\|lukumi\|fulton\|kennedy v\. bremerton\|tandon\|masterpiece\|hobby lobby/ in top 10 |
| LF-BS-3825 | federal_circuit 6 | keyword | scienter +s "rule 10b-5" | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-3830 | us_supreme_court 2000-01-01–2009-12-31 | keyword | interrogat! /25 waiv! | **empty**: no results |
| LF-BS-3831 | one_state NJ 1990-01-01–2010-12-31 | keyword | "consent to search" & "totality of the circumstances" % civil | **empty**: no results |
| LF-BS-3832 | federal_circuit 1 | keyword | redress! /25 traceab! | **empty**: no results<br>**landmark_missing**: wanted /lujan\|spokeo\|transunion\|clapper\|summers v\. earth/ in top 10 |
| LF-BS-3834 | all_federal | keyword | "automobile exception" w/p "probable cause" and warrantless | **duplicate_hit**: #5 California v. Acevedo 500 U.S. 565 |
| LF-BS-3836 | one_state OK 2020-01-01– | keyword | ("res judicata" OR "claim preclusion") AND "same cause of action" NOT criminal | **empty**: no results |
| LF-BS-3841 | one_state HI | keyword | foresee! /p foreseeab! | **empty**: no results |
| LF-BS-3843 | one_state_plus_federal NE 2020-01-01– | keyword | support! /25 underemploy! | **empty**: no results |
| LF-BS-3849 | federal_circuit 4 | keyword | "motion to dismiss" & plausib! % habeas | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-3853 | one_state IL 2000-01-01–2009-12-31 | keyword | "parol evidence rule" & integrat! % criminal | **empty**: no results |
| LF-BS-3857 | all_states | keyword | physician! /25 "expert testimony" | **out_of_scope**: #5 Equal Employment Opportunity Commission v. Brown-Thompson Ge — District Court, W.D. Oklahoma (federal_court_in_state_scope)<br>**out_of_scope**: #6 Logan v. Westfield Insurance Co — District Court, W.D. Louisiana (federal_court_in_state_scope)<br>**out_of_scope**: #8 Williams v. Devlin — District Court, District of Columbia (federal_court_in_state_scope)<br>**out_of_scope**: #10 Garcia v. Columbia Medical Center of Sherman — District Court, E.D. Texas (federal_court_in_state_scope) |
| LF-BS-3858 | one_state_plus_federal KS | keyword | "anticipatory repudiation" AND repudiat! AND "adequate assurance" | **empty**: no results |
| LF-BS-3862 | federal_district NV 2015-01-01– | keyword | "motion to dismiss" w/s plausib! | **empty**: no results |
| LF-BS-3863 | federal_circuit 1 | keyword | substan! /25 commissioner | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-3865 | federal_circuit 8 | keyword | "cell-site location" +s warrant | **landmark_missing**: wanted /carpenter\|riley v\. california\|united states v\. jones/ in top 10 |
| LF-BS-3868 | one_state_plus_federal NV | keyword | "likelihood of confusion" w/s trademark | **landmark_missing**: wanted /sleekcraft\|amf inc/ in top 10 |
| LF-BS-3882 | all_federal | keyword | abstention /10 "pending state" | **duplicate_hit**: #9 Zahl v. Harper 282 F.3d 204<br>**landmark_missing**: wanted /younger\|colorado river\|burford\|pullman\|sprint commc/ in top 10 |
| LF-BS-3883 | federal_circuit 10 | keyword | "patent eligible" & "section 101" % criminal | **empty**: no results<br>**landmark_missing**: wanted /alice\|mayo\|bilski\|myriad\|diehr/ in top 10 |
| LF-BS-3884 | one_state MD 2015-01-01– | keyword | "joint and several liability" +s tortfeasor! | **empty**: no results |
| LF-BS-3888 | all_states | keyword | "prescriptive easement" /10 servient | **boolean_unsatisfied**: Sandt v. Royster — required terms/proximity not met in full text<br>**boolean_unsatisfied**: House v. Close — required terms/proximity not met in full text |
| LF-BS-3889 | one_state_plus_federal OH | keyword | "attorney-client privilege" & waiv! % immigration | **empty**: no results<br>**landmark_missing**: wanted /upjohn\|hickman\|swidler\|zolin\|jaffee/ in top 10 |
| LF-BS-3891 | federal_district GA | keyword | "prior bad acts" w/15 ("other crimes" or propensity) | **empty**: no results |
| LF-BS-3893 | one_state PA | keyword | "cohabitation" w/s "express contract" | **empty**: no results |
| LF-BS-3898 | federal_circuit 11 | keyword | "automobile exception" /p "probable cause" & warrantless | **duplicate_hit**: #5 California v. Acevedo 500 U.S. 565 |
| LF-BS-3900 | federal_circuit dc | keyword | scienter /p "rule 10b-5" & pslra | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-3904 | one_state IL 2023-01-01– | keyword | "constructive eviction" /10 tenant | **empty**: no results |
| LF-BS-3908 | one_state NJ | keyword | "equitable indemnity" AND contribution AND tortfeasor | **empty**: no results |
| LF-BS-3911 | all_states | keyword | "undue influence" /10 testator | **duplicate_hit**: #5 Redman v. Watch Tower Bible & Tract Soc. of Pennsylvania 69 Ohio St. 3d 98 |
| LF-BS-3913 | one_state LA 2015-01-01– | keyword | "statute of frauds" w/15 ("part performance" or writing) | **empty**: no results |
| LF-BS-3918 | one_state WA | keyword | "pierce the corporate veil" /10 undercapitaliz! | **empty**: no results |
| LF-BS-3920 | one_state WA 1990-01-01–2010-12-31 | keyword | "duty to defend" /s "potential for coverage" | **duplicate_hit**: #2 Overton v. Consolidated Ins. Co. 38 P.3d 322 |
| LF-BS-3925 | all_federal | keyword | vacat! /p "exceeded their powers" | **landmark_missing**: wanted /hall street\|oxford health\|stolt-nielsen\|eastern associated/ in top 10 |
| LF-BS-3926 | one_state IL | keyword | "proportional to the needs of the case" /10 discovery | **empty**: no results |
| LF-BS-3934 | federal_circuit 10 | keyword | "economic substance" w/s "business purpose" | **landmark_missing**: wanted /gregory v\. helvering\|frank lyon\|knetsch/ in top 10 |
| LF-BS-3937 | one_state IL | keyword | impractic! /25 unforeseeab! | **empty**: no results |
| LF-BS-3939 | all_states | keyword | miranda & custody % civil | **empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query |
| LF-BS-3942 | one_state VA 2020-01-01– | keyword | guardianship /10 ward | **empty**: no results |
| LF-BS-3943 | one_state CA | keyword | disclos! /p "material risk" | **landmark_missing**: wanted /canterbury\|cobbs v\. grant/ in top 10 |
| LF-BS-3944 | federal_circuit federal | keyword | obvious! /p "prior art" | **landmark_missing**: wanted /ksr\|graham v\. john deere/ in top 10 |
| LF-BS-3950 | one_state_plus_federal MS –1999-12-31 | keyword | "medical malpractice" & "standard of care" % patent | **empty**: no results |
| LF-BS-3951 | federal_district AK | keyword | ("crime involving moral turpitude" OR "aggravated felony") /s "categorical approach" | **empty**: no results |
| LF-BS-3952 | one_state MI 2023-01-01– | keyword | "child support" w/s imput! | **empty**: no results |
| LF-BS-3953 | all_states | keyword | ("trade secret" OR misappropriat!) /s "reasonable measures" | **out_of_scope**: #1 Valmarc Corporation v. Nike, Inc. — District Court, D. Oregon (federal_court_in_state_scope)<br>**out_of_scope**: #2 Sigma Corporation v. Island Industries, Inc. — District Court, W.D. Tennessee (federal_court_in_state_scope)<br>**out_of_scope**: #3 Investment Science LLC v. Oath Holdings Inc. — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #4 Industrial v. 360 Electrical — District Court, D. Utah (federal_court_in_state_scope)<br>**out_of_scope**: #5 Edelman Financial Engines, LLC v. Mariner Wealth Advisors LL — District Court, D. Kansas (federal_court_in_state_scope)<br>**out_of_scope**: #6 MST & Associates, Inc. and Rue Enterprises, LLC v. Brenda Wi — District Court, E.D. Virginia (federal_court_in_state_scope)<br>**out_of_scope**: #7 HOUSER v. FELDMAN — District Court, E.D. Pennsylvania (federal_court_in_state_scope) |
| LF-BS-3954 | one_state_plus_federal CA | keyword | "comparative negligence" w/s "contributory negligence" | **landmark_missing**: wanted /li v\. yellow cab/ in top 10 |
| LF-BS-3960 | all_states_and_federal 2015-01-01– | keyword | ("hostile work environment" OR "sexual harassment") /s "severe or pervasive" | **result_missing_court**: #1 Broil v. Kansas Bureau of Investigation (no cite)<br>**result_missing_court**: #6 United States v. Prashad (no cite)<br>**boolean_unsatisfied**: Broil v. Kansas Bureau of Investigation — required terms/proximity not met in full text |
| LF-BS-3961 | all_states 1990-01-01–2010-12-31 | keyword | "free exercise" w/s "neutral and generally applicable" | **out_of_scope**: #3 Grace United Methodist Church v. City of Cheyenne — District Court, D. Wyoming (federal_court_in_state_scope)<br>**out_of_scope**: #5 C.L.U.B. v. City of Chicago — District Court, N.D. Illinois (federal_court_in_state_scope)<br>**out_of_scope**: #6 Battles v. Anne Arundel County Board of Education — District Court, D. Maryland (federal_court_in_state_scope)<br>**out_of_scope**: #7 Centro Familiar Cristiano Buenas Nuevas v. City of Yuma — District Court, D. Arizona (federal_court_in_state_scope)<br>**out_of_scope**: #9 Tart v. Young — District Court, W.D. Virginia (federal_court_in_state_scope) |
| LF-BS-3968 | all_states | keyword | interfer! /25 justif! | **empty**: no results<br>**empty_broad_scope**: nothing in all_states for a mainstream doctrine query |
| LF-BS-3969 | all_states_and_federal 2000-01-01–2009-12-31 | keyword | "prescriptive easement" +s servient | **result_missing_court**: #7 In re Lightwave Technologies (971 So. 2d 712)<br>**duplicate_hit**: #7 In re Lightwave Technologies 971 So. 2d 712 |
| LF-BS-3972 | us_supreme_court | keyword | monell /s "policy or custom" | **boolean_unsatisfied**: Monell v. New York City Dept. of Social Servs. — required terms/proximity not met in full text |
| LF-BS-3973 | federal_circuit 10 –1999-12-31 | keyword | "confrontation clause" w/s testimonial | **after_dateTo**: #1 2009-06-25 > 1999-12-31 |
| LF-BS-3976 | all_states 2015-01-01– | keyword | (homestead OR "homestead exemption") /s devise | **out_of_scope**: #8 William L. Ostrander and Joyce M. Ostrander — United States Bankruptcy Court, N.D. Iowa (federal_court_in_state_scope) |
| LF-BS-3980 | one_state_plus_federal AK | keyword | retaliat! /25 "causal connection" | **empty**: no results<br>**landmark_missing**: wanted /burlington n\|nassar\|crawford v\. metro\|thompson v\. n/ in top 10 |
| LF-BS-3984 | all_states | keyword | ("proportional to the needs of the case" OR proportionality) AND "undue burden" NOT habeas | **out_of_scope**: #1 U.S. Equal Employment Opportunity Commission v. D.R. Horton, — District Court, D. Maryland (federal_court_in_state_scope)<br>**out_of_scope**: #3 In the Matter of Cenac Towing Co., LLC — District Court, E.D. Louisiana (federal_court_in_state_scope)<br>**out_of_scope**: #4 Gondola v. USMD PPM, LLC — District Court, N.D. Texas (federal_court_in_state_scope)<br>**out_of_scope**: #5 Chia-Hui Chang et al. v. Liljana Sinojmeri et al.; Mario Mar — District Court, E.D. Pennsylvania (federal_court_in_state_scope)<br>**out_of_scope**: #6 Ramel Gibson, individually and on behalf of all those simila — District Court, E.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #7 Goodnight v. Hammons — District Court, W.D. Oklahoma (federal_court_in_state_scope)<br>**out_of_scope**: #8 Bourell v. Ronscavage — District Court, D. Connecticut (federal_court_in_state_scope) |
| LF-BS-3989 | all_federal 1990-01-01–2010-12-31 | keyword | "excited utterance" /s hearsay | **after_dateTo**: #1 2011-02-28 > 2010-12-31 |
| LF-BS-3990 | federal_circuit 11 | keyword | "motion to dismiss" /10 plausib! | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-3996 | federal_district FL | keyword | ("confrontation clause" OR "testimonial hearsay") AND cross-examin! NOT civil | **boolean_unsatisfied**: Hightower v. Dixon — required terms/proximity not met in full text |
| LF-BS-3999 | one_state MO | keyword | "implied covenant of good faith and fair dealing" +s discretion | **empty**: no results |
| LF-BS-4001 | one_state AR 2000-01-01–2009-12-31 | keyword | "constructive eviction" /p tenant & abandon! | **empty**: no results |
| LF-BS-4008 | federal_district DE –1999-12-31 | keyword | spoliation /p "adverse inference" & sanction! | **empty**: no results |
| LF-BS-4009 | all_states_and_federal | keyword | "rule of reason" w/p "anticompetitive effects" and "relevant market" | **landmark_missing**: wanted /leegin\|ohio v\. am\|american express\|state oil\|alston\|continental t\.v\|bmi\|broad\. music/ in top 10 |
| LF-BS-4012 | one_state CA 2000-01-01–2009-12-31 | keyword | "market share liability" /10 des | **empty**: no results |
| LF-BS-4017 | federal_circuit 11 | keyword | nondischargeab! /p "false pretenses" & debtor | **empty**: no results<br>**landmark_missing**: wanted /husky\|field v\. mans\|bartenwerfer\|lamar, archer\|grogan v\. garner/ in top 10 |
| LF-BS-4019 | all_states 2000-01-01–2009-12-31 | keyword | "testamentary capacity" w/15 (testator or "natural objects of his bounty") | **duplicate_hit**: #3 In re Estate of Whitaker 547 S.E.2d 853 |
| LF-BS-4022 | federal_circuit 9 2015-01-01– | keyword | "parallel conduct" & conspira! % criminal | **empty**: no results |
| LF-BS-4025 | federal_circuit 10 | keyword | persecut! /p persecution | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-4026 | one_state_plus_federal PA | keyword | "design defect" +s "consumer expectations" | **landmark_missing**: wanted /tincher\|azzarello/ in top 10 |
| LF-BS-4028 | federal_circuit 8 | keyword | scienter /s "rule 10b-5" | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-4036 | one_state CA | keyword | "joint and several liability" w/15 (tortfeasor! or apportion!) | **duplicate_hit**: #2 EXPRESSIONS AT RANCHO NIGUEL ASS'N v. Ahmanson Developments, 86 Cal. App. 4th 1135 |
| LF-BS-4039 | one_state_plus_federal IL | keyword | "modification of the trust" /10 settlor | **empty**: no results |
| LF-BS-4040 | one_state VA 2023-01-01– | keyword | "liquidated damages" /p penalty & "reasonable forecast" | **empty**: no results |
| LF-BS-4041 | one_state SD –1999-12-31 | keyword | "adverse possession" w/15 ("open and notorious" or "continuous") | **duplicate_hit**: #2 Brown v. PENNINGTON CTY. BD. OF COM'RS 422 N.W.2d 440 |
| LF-BS-4043 | one_state_plus_federal PA 2020-01-01– | keyword | "cohabitation" w/p "express contract" and implied | **empty**: no results |
| LF-BS-4045 | all_federal | keyword | "prior bad acts" /10 "other crimes" | **landmark_missing**: wanted /huddleston\|old chief/ in top 10 |
| LF-BS-4050 | one_state TX | keyword | "anticipatory repudiation" +s repudiat! | **empty**: no results |
| LF-BS-4054 | one_state HI 2000-01-01–2009-12-31 | keyword | statut! /p "class of persons" | **duplicate_hit**: #7 Kahoohanohano v. DHS, STATE 178 P.3d 538 |
| LF-BS-4056 | one_state_plus_federal SC | keyword | exculpat! /p material! | **empty**: no results<br>**landmark_missing**: wanted /brady v\. maryland\|giglio\|kyles\|bagley\|strickler\|wearry/ in top 10 |
| LF-BS-4059 | all_federal | keyword | "motion to compel arbitration" /10 unconscionab! | **landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-4064 | one_state NH | keyword | "economic loss rule" +s "purely economic" | **empty**: no results |
| LF-BS-4068 | one_state TX | keyword | "second amendment" w/p "historical tradition" and firearm | **boolean_unsatisfied**: Noyes v. Texas for the Protection of Samantha Jo Voges — required terms/proximity not met in full text |
| LF-BS-4075 | one_state_plus_federal MI | keyword | "testamentary capacity" /p testator & "natural objects of his bounty" | **duplicate_hit**: #2 Miller v. Prosser 359 Mich. 167<br>**duplicate_hit**: #5 In re Fay Estate 353 Mich. 83<br>**duplicate_hit**: #6 Mancani v. Sprenger 337 Mich. 514<br>**duplicate_hit**: #8 Walker v. Hinckley 270 Mich. 33 |
| LF-BS-4076 | all_states_and_federal | keyword | (obviousness OR "obvious") /s "prior art" | **landmark_missing**: wanted /ksr\|graham v\. john deere/ in top 10 |
| LF-BS-4080 | one_state TN | keyword | "market share liability" /p des & manufacturer | **empty**: no results |
| LF-BS-4086 | us_supreme_court 2000-01-01–2009-12-31 | keyword | "consent to search" w/s "totality of the circumstances" | **empty**: no results |
| LF-BS-4087 | one_state_plus_federal TX | keyword | "motion to compel arbitration" w/s unconscionab! | **landmark_missing**: wanted /concepcion\|epic sys\|rent-a-center\|italian colors\|moses h\. cone\|henry schein\|lamps plus/ in top 10 |
| LF-BS-4090 | federal_circuit 4 | keyword | (erisa OR "plan administrator") /s "abuse of discretion" | **landmark_missing**: wanted /firestone\|glenn\|conkright\|black & decker/ in top 10 |
| LF-BS-4092 | one_state PA 2015-01-01– | keyword | "statute of frauds" /10 "part performance" | **empty**: no results |
| LF-BS-4094 | federal_district MA | keyword | arbitra! /p unconscionab! | **empty**: no results |
| LF-BS-4099 | federal_circuit 8 2023-01-01– | keyword | eligib! /p "section 101" | **empty**: no results |
| LF-BS-4100 | federal_circuit dc 2015-01-01– | keyword | "consent to search" w/s "totality of the circumstances" | **empty**: no results |
| LF-BS-4101 | one_state_plus_federal CA | keyword | "preferential transfer" AND "ordinary course" AND NOT criminal | **duplicate_hit**: #9 Haberbush v. CHARLES CUMMINS FAMILY LP 139 Cal. App. 4th 1630 |
| LF-BS-4102 | us_supreme_court | keyword | scienter w/s "rule 10b-5" | **empty**: no results<br>**landmark_missing**: wanted /tellabs\|ernst & ernst\|matrixx\|omnicare\|dura pharm\|halliburton\|basic inc/ in top 10 |
| LF-BS-4103 | one_state AZ 1990-01-01–2010-12-31 | keyword | title! /p deed | **duplicate_hit**: #5 In re Estate of Olson 224 P.3d 938 |
| LF-BS-4104 | one_state WA | keyword | "prescriptive easement" /s servient | **boolean_unsatisfied**: Huff v. Northern Pacific Railway Co. — required terms/proximity not met in full text |
| LF-BS-4105 | one_state_plus_federal MI 1990-01-01–2010-12-31 | keyword | relocation & custod! % criminal | **empty**: no results |
| LF-BS-4108 | one_state NE | keyword | "pierce the corporate veil" w/15 (undercapitaliz! or "corporate form") | **empty**: no results |
| LF-BS-4109 | one_state PA | keyword | ("eminent domain" OR "public use") AND taking NOT criminal | **duplicate_hit**: #7 Lehigh-Northampton Airport Authority Lehigh Valley Internati 972 A.2d 576 |
| LF-BS-4113 | all_states | keyword | spoliation w/s "adverse inference" | **out_of_scope**: #6 New Mexico v. United States Environmental Protection Agency — District Court, D. New Mexico (federal_court_in_state_scope)<br>**out_of_scope**: #8 Cortes v. Peter Pan Bus Lines, Inc. — District Court, D. Connecticut (federal_court_in_state_scope)<br>**out_of_scope**: #9 Young v. BL Development Corp. — District Court, N.D. Mississippi (federal_court_in_state_scope)<br>**out_of_scope**: #10 Brown v. Commonwealth of Pennsylvania, Department of Correct — District Court, M.D. Pennsylvania (federal_court_in_state_scope) |
| LF-BS-4114 | one_state MI | keyword | "social host" /p intoxicat! & "guest" | **empty**: no results |
| LF-BS-4120 | one_state FL | keyword | "equitable indemnity" & contribution % patent | **empty**: no results |
| LF-BS-4126 | federal_district NM | keyword | avoid! /p "ordinary course" | **empty**: no results |
| LF-BS-4127 | one_state_plus_federal ME | keyword | asylum +s persecution | **landmark_missing**: wanted /cardoza-fonseca\|elias-zacarias\|garland v\. ming dai/ in top 10 |
| LF-BS-4136 | all_federal | keyword | "motion to dismiss" /10 plausib! | **landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-4140 | one_state_plus_federal WA 2020-01-01– | keyword | "non-compete" & "legitimate business interest" % criminal | **empty**: no results |
| LF-BS-4142 | one_state_plus_federal MA 1990-01-01–2010-12-31 | keyword | "cohabitation" w/p "express contract" and implied | **empty**: no results |
| LF-BS-4146 | federal_circuit 2 | keyword | cramdown & "absolute priority rule" % criminal | **empty**: no results<br>**landmark_missing**: wanted /bank of am\|203 n\. lasalle\|till v\. sct\|radlax\|czyzewski/ in top 10 |
| LF-BS-4149 | federal_circuit federal | keyword | "motion to dismiss" w/15 (plausib! or "factual allegations") | **empty**: no results<br>**landmark_missing**: wanted /twombly\|iqbal\|bell atl/ in top 10 |
| LF-BS-4151 | one_state NH 2015-01-01– | keyword | "res judicata" & "final judgment" % criminal | **empty**: no results |
| LF-BS-4152 | federal_district AZ | keyword | "confrontation clause" & testimonial % civil | **empty**: no results |
| LF-BS-4157 | us_supreme_court | keyword | exculpat! /25 suppress! | **empty**: no results<br>**landmark_missing**: wanted /brady v\. maryland\|giglio\|kyles\|bagley\|strickler\|wearry/ in top 10 |
| LF-BS-4160 | all_states 2020-01-01– | keyword | secre! /p "reasonable measures" | **out_of_scope**: #2 Valmarc Corporation v. Nike, Inc. — District Court, D. Oregon (federal_court_in_state_scope)<br>**out_of_scope**: #3 Edelman Financial Engines, LLC v. Mariner Wealth Advisors LL — District Court, D. Kansas (federal_court_in_state_scope)<br>**out_of_scope**: #4 Verbena Products LLC v. Toro — District Court, S.D. Florida (federal_court_in_state_scope)<br>**out_of_scope**: #5 Investment Science LLC v. Oath Holdings Inc. — District Court, S.D. New York (federal_court_in_state_scope)<br>**out_of_scope**: #6 Sigma Corporation v. Island Industries, Inc. — District Court, W.D. Tennessee (federal_court_in_state_scope)<br>**out_of_scope**: #7 MST & Associates, Inc. and Rue Enterprises, LLC v. Brenda Wi — District Court, E.D. Virginia (federal_court_in_state_scope)<br>**out_of_scope**: #8 Negative, Inc. v. McNamara — District Court, E.D. New York (federal_court_in_state_scope) |
| LF-BS-4161 | one_state_plus_federal MI | keyword | "statute of frauds" & "part performance" % criminal | **empty**: no results |
