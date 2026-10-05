/**
 * Independent Bluebook (21st ed.) helpers used to build expected answers and
 * to lint what the system under test returns. Nothing here calls the API.
 *
 *  - T1 reporter abbreviations and spacing (Rule 6.1(a): no space between
 *    adjacent single capitals; ordinals "2d"/"3d"/"4th").
 *  - Rule 10.2.1 case-name trimming (first party on each side, no "et al.",
 *    no procedural or descriptive phrases, surnames for individuals).
 *  - T6 abbreviations required in citation case names (Rule 10.2.2).
 *  - Rule 10.4 court/year parenthetical (court omitted when the reporter
 *    unambiguously names it).
 */
import { CIRCUIT_BB, STATES } from './courts.mjs';

// ---------------------------------------------------------------- reporters
// canonical form -> { court: implied court bb ('' = SCOTUS), state }
const R = (canon, implies = undefined, state = undefined) => ({ canon, implies, state });
export const REPORTERS = [
  R('U.S.', 'SCOTUS'), R('S. Ct.'), R('L. Ed.'), R('L. Ed. 2d'),
  R('F.'), R('F.2d'), R('F.3d'), R('F.4th'), R('F. App\'x'),
  R('F. Supp.'), R('F. Supp. 2d'), R('F. Supp. 3d'), R('F.R.D.'), R('B.R.'), R('Fed. Cl.'), R('Cl. Ct.'), R('T.C.'), R('M.J.'), R('Vet. App.'),
  R('A.'), R('A.2d'), R('A.3d'), R('N.E.'), R('N.E.2d'), R('N.E.3d'), R('N.W.'), R('N.W.2d'), R('N.W.3d'),
  R('P.'), R('P.2d'), R('P.3d'), R('S.E.'), R('S.E.2d'), R('S.W.'), R('S.W.2d'), R('S.W.3d'), R('So.'), R('So. 2d'), R('So. 3d'),
  R('Cal. Rptr.'), R('Cal. Rptr. 2d'), R('Cal. Rptr. 3d'), R('N.Y.S.'), R('N.Y.S.2d'), R('N.Y.S.3d'),
  R('Cal.', 'Cal.', 'CA'), R('Cal. 2d', 'Cal.', 'CA'), R('Cal. 3d', 'Cal.', 'CA'), R('Cal. 4th', 'Cal.', 'CA'), R('Cal. 5th', 'Cal.', 'CA'),
  R('Cal. App.', 'Cal. Ct. App.', 'CA'), R('Cal. App. 2d', 'Cal. Ct. App.', 'CA'), R('Cal. App. 3d', 'Cal. Ct. App.', 'CA'), R('Cal. App. 4th', 'Cal. Ct. App.', 'CA'), R('Cal. App. 5th', 'Cal. Ct. App.', 'CA'),
  R('N.Y.', 'N.Y.', 'NY'), R('N.Y.2d', 'N.Y.', 'NY'), R('N.Y.3d', 'N.Y.', 'NY'),
  R('A.D.', 'N.Y. App. Div.', 'NY'), R('A.D.2d', 'N.Y. App. Div.', 'NY'), R('A.D.3d', 'N.Y. App. Div.', 'NY'),
  R('Misc.'), R('Misc. 2d'), R('Misc. 3d'),
  R('Ill.', 'Ill.', 'IL'), R('Ill. 2d', 'Ill.', 'IL'), R('Ill. App.', 'Ill. App. Ct.', 'IL'), R('Ill. App. 2d', 'Ill. App. Ct.', 'IL'), R('Ill. App. 3d', 'Ill. App. Ct.', 'IL'),
  R('Mass.', 'Mass.', 'MA'), R('Mass. App. Ct.', 'Mass. App. Ct.', 'MA'),
  R('Mich.', 'Mich.', 'MI'), R('Mich. App.', 'Mich. Ct. App.', 'MI'),
  R('Ohio St.', 'Ohio', 'OH'), R('Ohio St. 2d', 'Ohio', 'OH'), R('Ohio St. 3d', 'Ohio', 'OH'), R('Ohio App.', 'Ohio Ct. App.', 'OH'), R('Ohio App. 2d', 'Ohio Ct. App.', 'OH'), R('Ohio App. 3d', 'Ohio Ct. App.', 'OH'),
  R('Pa.', 'Pa.', 'PA'), R('Pa. Super.', 'Pa. Super. Ct.', 'PA'), R('Pa. Commw.', 'Pa. Commw. Ct.', 'PA'),
  R('N.J.', 'N.J.', 'NJ'), R('N.J. Super.'),
  R('Wis. 2d'), R('Wash. 2d', 'Wash.', 'WA'), R('Wash.', 'Wash.', 'WA'), R('Wash. App.', 'Wash. Ct. App.', 'WA'),
  R('Ariz.', 'Ariz.', 'AZ'), R('Ariz. App.', 'Ariz. Ct. App.', 'AZ'), R('Ark.', 'Ark.', 'AR'), R('Ark. App.', 'Ark. Ct. App.', 'AR'),
  R('Colo.', 'Colo.', 'CO'), R('Conn.', 'Conn.', 'CT'), R('Conn. App.', 'Conn. App. Ct.', 'CT'), R('Del.', 'Del.', 'DE'),
  R('Fla.', 'Fla.', 'FL'), R('Ga.', 'Ga.', 'GA'), R('Ga. App.', 'Ga. Ct. App.', 'GA'), R('Haw.', 'Haw.', 'HI'), R('Haw. App.', 'Haw. Ct. App.', 'HI'),
  R('Idaho', 'Idaho', 'ID'), R('Ind.', 'Ind.', 'IN'), R('Ind. App.', 'Ind. Ct. App.', 'IN'), R('Iowa', 'Iowa', 'IA'),
  R('Kan.', 'Kan.', 'KS'), R('Kan. App. 2d', 'Kan. Ct. App.', 'KS'), R('Ky.', 'Ky.', 'KY'), R('La.', 'La.', 'LA'), R('Me.', 'Me.', 'ME'),
  R('Md.', 'Md.', 'MD'), R('Md. App.'), R('Minn.', 'Minn.', 'MN'), R('Miss.', 'Miss.', 'MS'), R('Mo.', 'Mo.', 'MO'),
  R('Mont.', 'Mont.', 'MT'), R('Neb.', 'Neb.', 'NE'), R('Neb. App.', 'Neb. Ct. App.', 'NE'), R('Nev.', 'Nev.', 'NV'), R('N.H.', 'N.H.', 'NH'),
  R('N.M.', 'N.M.', 'NM'), R('N.C.', 'N.C.', 'NC'), R('N.C. App.', 'N.C. Ct. App.', 'NC'), R('N.D.', 'N.D.', 'ND'),
  R('Okla.', 'Okla.', 'OK'), R('Or.', 'Or.', 'OR'), R('Or. App.', 'Or. Ct. App.', 'OR'), R('R.I.', 'R.I.', 'RI'),
  R('S.C.', 'S.C.', 'SC'), R('S.D.', 'S.D.', 'SD'), R('Tenn.', 'Tenn.', 'TN'), R('Tex.', 'Tex.', 'TX'),
  R('Utah', 'Utah', 'UT'), R('Utah 2d', 'Utah', 'UT'), R('Vt.', 'Vt.', 'VT'), R('Va.', 'Va.', 'VA'), R('Va. App.', 'Va. Ct. App.', 'VA'),
  R('W. Va.', 'W. Va.', 'WV'), R('Wyo.', 'Wyo.', 'WY'), R('Alaska', 'Alaska', 'AK'), R('Ala.', 'Ala.', 'AL'),
];
// Wis. 2d holds both Wisconsin Supreme Court and Court of Appeals; N.J. Super.
// holds App. Div. and Law Div.; Md. App. spans renamed courts — court stays.

export const reporterKey = (s) => String(s).toLowerCase().replace(/[^a-z0-9']/g, '');
const REPORTER_BY_KEY = new Map(REPORTERS.map((r) => [reporterKey(r.canon), r]));

// common bad ordinals people type
const ORDINAL_FIXES = [[/2nd\b/gi, '2d'], [/3rd\b/gi, '3d']];

/** Canonicalise a reporter string the way a Bluebook-aware checker should. */
export function canonicalReporter(s) {
  let t = String(s || '').trim();
  for (const [re, to] of ORDINAL_FIXES) t = t.replace(re, to);
  const r = REPORTER_BY_KEY.get(reporterKey(t));
  return r ? r.canon : null;
}
export function reporterInfo(canon) {
  return REPORTER_BY_KEY.get(reporterKey(canon)) ?? null;
}

// ------------------------------------------------------------- cite parsing
const CITE_RX = /^(?<name>.+?),?\s+(?<vol>\d{1,4})\s+(?<rep>[A-Za-z][A-Za-z0-9.' ]*?)\s+(?<page>\d{1,5})(?:\s*,\s*(?<pin>\d{1,5}(?:[-–]\d+)?)(?![\d]*\s+[A-Za-z]))?(?<par>(?:\s*,\s*\d{1,4}\s+[A-Za-z][A-Za-z0-9.' ]*?\s+\d{1,5})*)(?:\s*,\s*[^()]*?)?\s*(?:\((?<paren>[^()]*)\))?\s*(?:,.*)?$/;

/** Parse "Name, 123 Rep. 456, 460 (Ct. 1999)" into parts. */
export function parseCite(str) {
  const s = String(str || '').replace(/\s+/g, ' ').replace(/[’‘]/g, "'").trim();
  const m = s.match(CITE_RX);
  if (!m) return null;
  const g = m.groups;
  const paren = (g.paren || '').trim();
  const ym = paren.match(/(\d{4})\s*$/);
  const court = ym ? paren.slice(0, ym.index).replace(/[,\s]+$/, '').trim() : paren;
  return {
    name: g.name.trim().replace(/,$/, ''),
    vol: g.vol,
    reporterRaw: g.rep.trim(),
    reporter: canonicalReporter(g.rep),
    page: g.page,
    pin: g.pin || null,
    parallels: (g.par || '').split(',').map((x) => x.trim()).filter(Boolean),
    paren,
    court,
    year: ym ? ym[1] : null,
  };
}

// ------------------------------------------------------- T6 abbreviations
// Words that MUST be abbreviated in a citation case name (Rule 10.2.2 + T6).
// Kept to unambiguous, high-frequency entries so the lint does not false-flag.
export const T6 = {
  Academy: 'Acad.', Administration: 'Admin.', Administrative: 'Admin.', Administrator: "Adm'r", Administratrix: "Adm'x",
  America: 'Am.', American: 'Am.', Associate: 'Assoc.', Associates: 'Assocs.', Association: "Ass'n", Atlantic: 'Atl.',
  Authority: 'Auth.', Automobile: 'Auto.', Automotive: 'Auto.', Avenue: 'Ave.', Bankruptcy: 'Bankr.', Board: 'Bd.',
  Broadcasting: 'Broad.', Brothers: 'Bros.', Brotherhood: 'Bhd.', Building: 'Bldg.', Business: 'Bus.', Casualty: 'Cas.',
  Center: 'Ctr.', Centre: 'Ctr.', Central: 'Cent.', Chemical: 'Chem.', Coalition: 'Coal.', College: 'Coll.',
  Commission: "Comm'n", Commissioner: "Comm'r", Committee: 'Comm.', Communication: "Commc'n", Communications: "Commc'ns",
  Community: 'Cmty.', Company: 'Co.', Compensation: 'Comp.', Condominium: 'Condo.', Congressional: 'Cong.',
  Consolidated: 'Consol.', Construction: 'Constr.', Continental: "Cont'l", Cooperative: 'Coop.', Corporation: 'Corp.',
  Correction: 'Corr.', Commercial: 'Com.', Social: 'Soc.', Court: 'Ct.', Judicial: 'Jud.', Human: 'Hum.', Corrections: 'Corr.', County: 'Cnty.', Defense: 'Def.', Department: "Dep't", Development: 'Dev.',
  Director: 'Dir.', Discount: 'Disc.', Distributing: 'Distrib.', Distribution: 'Distrib.', Distributor: 'Distrib.',
  District: 'Dist.', Division: 'Div.', Eastern: 'E.', Economic: 'Econ.', Economics: 'Econ.', Education: 'Educ.',
  Educational: 'Educ.', Electric: 'Elec.', Electrical: 'Elec.', Electronic: 'Elec.', Engineering: "Eng'g", Engineer: "Eng'r",
  Entertainment: 'Ent.', Enterprise: 'Enter.', Enterprises: 'Enters.', Environment: "Env't", Environmental: 'Env\'t',
  Equipment: 'Equip.', Exchange: 'Exch.', Executive: 'Exec.', Executor: "Ex'r", Executrix: "Ex'x", Federal: 'Fed.',
  Federation: "Fed'n", Fidelity: 'Fid.', Finance: 'Fin.', Financial: 'Fin.', Foundation: 'Found.', General: 'Gen.',
  Government: "Gov't", Guaranty: 'Guar.', Hospital: 'Hosp.', Housing: 'Hous.', Incorporated: 'Inc.', Independent: 'Indep.',
  Industrial: 'Indus.', Industries: 'Indus.', Industry: 'Indus.', Information: 'Info.', Institute: 'Inst.', Institution: 'Inst.',
  Insurance: 'Ins.', International: "Int'l", Investment: 'Inv.', Investments: 'Invs.', Laboratory: "Lab'y", Laboratories: "Lab'ys",
  Liability: 'Liab.', Limited: 'Ltd.', Litigation: 'Litig.', Machine: 'Mach.', Machinery: 'Mach.', Maintenance: 'Maint.',
  Management: 'Mgmt.', Manufacturer: "Mfr.", Manufacturers: 'Mfrs.', Manufacturing: 'Mfg.', Maritime: 'Mar.', Market: 'Mkt.',
  Marketing: 'Mktg.', Mechanic: 'Mech.', Mechanical: 'Mech.', Medical: 'Med.', Medicine: 'Med.', Memorial: "Mem'l",
  Merchandise: 'Merch.', Merchant: 'Merch.', Metropolitan: 'Metro.', Mortgage: 'Mortg.', Municipal: 'Mun.', Mutual: 'Mut.',
  National: "Nat'l", Northern: 'N.', Northeastern: 'Ne.', Northwestern: 'Nw.', Number: 'No.', Organization: 'Org.',
  Pacific: 'Pac.', Partnership: "P'ship", Pharmaceutical: 'Pharm.', Pharmaceuticals: 'Pharms.', Physician: 'Physician',
  Product: 'Prod.', Products: 'Prods.', Professional: 'Pro.', Property: 'Prop.', Properties: 'Props.', Protection: 'Prot.',
  Public: 'Pub.', Publication: "Publ'n", Publishing: "Publ'g", Railroad: 'R.R.', Railway: 'Ry.', Refining: 'Ref.',
  Regional: "Reg'l", Rehabilitation: 'Rehab.', Resource: 'Res.', Resources: 'Res.', Restaurant: 'Rest.', Retirement: 'Ret.',
  Savings: 'Sav.', School: 'Sch.', Schools: 'Schs.', Science: 'Sci.', Secretary: "Sec'y", Securities: 'Sec.', Security: 'Sec.',
  Service: 'Serv.', Services: 'Servs.', Society: "Soc'y", Southern: 'S.', Southeastern: 'Se.', Southwestern: 'Sw.',
  Steamship: 'S.S.', Street: 'St.', Subcommittee: 'Subcomm.', Surety: 'Sur.', System: 'Sys.', Systems: 'Sys.',
  Technology: 'Tech.', Technologies: 'Techs.', Telecommunication: 'Telecomm.', Telecommunications: 'Telecomms.',
  Telephone: 'Tel.', Telegraph: 'Tel.', Transcontinental: 'Transcon.', Transport: 'Transp.', Transportation: 'Transp.',
  Trustee: 'Tr.', Turnpike: 'Tpk.', Uniform: 'Unif.', University: 'Univ.', Utility: 'Util.', Utilities: 'Utils.',
  Village: 'Vill.', Western: 'W.',
};
delete T6.Physician;

// Words whose abbreviation is skipped when the word is the whole party name
// or starts a geographic unit (Rule 10.2.2: do not abbreviate "United States";
// a geographic word that is the entire party is spelled out).
const NEVER_ABBREV_ALONE = new Set(['America']);

export function abbreviateT6(name) {
  // Rule 10.2.2: abbreviate any word in T6 unless the abbreviation would
  // leave only one word, and never "United States".
  return name.replace(/\b([A-Z][a-z]+)\b/g, (w, _1, off, all) => {
    const ab = T6[w];
    if (!ab) return w;
    if (w === 'America' && /United States of\s*$/.test(all.slice(0, off))) return w;
    if (NEVER_ABBREV_ALONE.has(w) && all.trim() === w) return w;
    return ab;
  });
}

/** List full T6 words still present in a case name (lint). */
export function unabbreviatedT6(name) {
  const hits = [];
  for (const w of String(name).match(/\b[A-Z][a-z]+\b/g) || []) {
    if (T6[w] && !(w === 'America')) hits.push(w);
  }
  return [...new Set(hits)];
}

// ---------------------------------------------------- Rule 10.2.1 names
const ENTITY = /\b(inc|co|corp|llc|l\.l\.c|ltd|llp|l\.p|lp|plc|n\.a|ass'n|association|bank|trust|company|corporation|incorporated|partnership|p'ship|group|holdings?|fund|insurance|ins|county|cnty|city|town|township|village|state|commonwealth|people|united|board|bd|dep't|department|commission|comm'n|university|univ|school|district|dist|authority|auth|hospital|hosp|church|club|union|council|agency|office|services?|servs?|systems?|sys|industries|indus|enterprises?|enters?|products?|prods?|motors?|railroad|r\.r|railway|ry|airlines?|stores?|realty|properties|props?|estate|assocs?|associates|federation|foundation|institute|society|soc'y|committee|government|gov't|republic|nation|tribe|v\.|co\.|corp\.|inc\.)\b/i;

const PROCEDURAL_TAIL = /,\s*(?:et al\.?|et ux\.?|et vir\.?|as (?:trustee|executor|executrix|administrat\w+|personal representative|next friend|guardian|parent)[^,]*|individually[^,]*|in (?:his|her|their) (?:official|individual) capacit\w+[^,]*|administratrix[^,]*|administrator[^,]*|executrix[^,]*|executor[^,]*|personal representative[^,]*|(?:plaintiffs?|defendants?|appellants?|appellees?|petitioners?|respondents?|cross[- ]\w+|intervenors?)(?:[-–\s/,]+(?:plaintiffs?|defendants?|appellants?|appellees?|petitioners?|respondents?|cross[- ]\w+))*\b[^,]*)$/i;

const PARTY_ROLE = /\b(?:plaintiffs?|defendants?|appellants?|appellees?|petitioners?|respondents?|cross[- ]appellants?|cross[- ]appellees?|intervenors?|third[- ]party)\b/i;

const ACRONYMS = new Set(['LLC', 'LLP', 'USA', 'NAACP', 'IBM', 'FBI', 'CIA', 'EPA', 'NLRB', 'FCC', 'SEC', 'FTC', 'IRS', 'AT&T', 'ACLU', 'BMW', 'UPS', 'CSX', 'AFL-CIO', 'AFSCME', 'NCAA', 'NFL', 'NBA', 'MLB', 'HSBC', 'PNC', 'BNSF', 'CBS', 'NBC', 'ABC', 'RCA', 'GTE', 'TWA', 'MCI', 'KFC', 'IBEW', 'II', 'III', 'IV', 'NA', 'PLC', 'LP', 'DBA', 'USAA', 'GEICO', 'CVS', 'HMO', 'PPO', 'FDIC', 'HUD', 'FHA', 'OSHA', 'UAW', 'SEIU']);
function titleCaseIfShouting(s) {
  const letters = s.replace(/[^A-Za-z]/g, '');
  if (!letters) return s;
  const upper = letters.replace(/[^A-Z]/g, '').length / letters.length;
  if (upper < 0.6) {
    // mixed caption with SHOUTED surnames ("Andres PERALTA"): fix word by word
    return s.replace(/\b[A-Z][A-Z'’-]{3,}\b/g, (w) =>
      ACRONYMS.has(w) || /^[A-Z]{2,3}(?:-[A-Z]{2,3})+$/.test(w) ? w : w.charAt(0) + w.slice(1).toLowerCase().replace(/([-'’])([a-z])/g, (_m, p, c) => p + c.toUpperCase()),
    );
  }
  const small = new Set(['of', 'the', 'and', 'for', 'in', 'on', 'at', 'to', 'by', 'a', 'an', 'ex', 'rel.', 'v.']);
  return s
    .toLowerCase()
    .split(/(\s+)/)
    .map((w, i) => {
      if (/^\s+$/.test(w)) return w;
      if (i > 0 && small.has(w)) return w;
      if (/^(llc|l\.l\.c\.|lp|llp|n\.a\.|plc|usa|u\.s\.|ii|iii|iv|jr\.|sr\.)[,.]?$/i.test(w)) return w.toUpperCase().replace('JR.', 'Jr.').replace('SR.', 'Sr.');
      return w.replace(/(^|[-'(/])([a-z])/g, (_m, p, c) => p + c.toUpperCase()).replace(/^Mc([a-z])/, (_m, c) => 'Mc' + c.toUpperCase());
    })
    .join('');
}

// Common US given names: only reduce "Given [M.] Surname" to the surname when
// the first word is plainly a given name or a middle initial is present, so
// entity names like "Washington Convention Center" are left alone.
const GIVEN = new Set(('james john robert michael william david richard joseph thomas charles christopher daniel matthew anthony mark donald steven paul andrew joshua kenneth kevin brian george timothy ronald edward jason jeffrey ryan jacob gary nicholas eric jonathan stephen larry justin scott brandon benjamin samuel gregory alexander frank patrick raymond jack dennis jerry tyler aaron jose adam nathan henry douglas zachary peter kyle walter ethan jeremy harold keith christian roger noah gerald carl terry sean austin arthur lawrence jesse dylan bryan joe jordan billy bruce albert willie gabriel logan alan juan wayne roy ralph randy eugene vincent russell elijah louis bobby philip johnny mary patricia jennifer linda elizabeth barbara susan jessica sarah karen nancy lisa betty margaret sandra ashley kimberly emily donna michelle dorothy carol amanda melissa deborah stephanie rebecca sharon laura cynthia kathleen amy shirley angela helen anna brenda pamela nicole emma samantha katherine christine debra rachel catherine carolyn janet ruth maria heather diane virginia julie joyce victoria olivia kelly christina lauren joan evelyn judith megan cheryl andrea hannah martha jacqueline frances gloria ann teresa kathryn sara janice jean alice madison doris abigail julia judy grace denise amber marilyn beverly danielle theresa sophia marie diana brittany natalie isabella charlotte rose alexis kayla linda phyllis andres carlos luis miguel jorge pedro manuel francisco antonio rafael ricardo roberto alejandro fernando eduardo sergio javier mario hector oscar raul ruben victor maria rosa ana carmen lucia daniel kamea carly christina carl janos william kevin ian justin maria'.split(' ')));
function surnameOnly(party, shouted = false) {
  if (ENTITY.test(party)) return party;
  const words = party.replace(/,?\s+(Jr\.|Sr\.|II|III|IV)$/i, '').split(/\s+/).filter(Boolean);
  if (words.length < 2 || words.length > 4 || !words.every((w) => /^[A-Z][A-Za-z'’.-]*$/.test(w))) return party;
  const hasInitial = words.slice(1, -1).some((w) => /^[A-Z]\.$/.test(w));
  if (shouted || hasInitial || GIVEN.has(words[0].toLowerCase())) return words[words.length - 1];
  return party;
}

/**
 * Trim one side of a caption to its first party, per Rule 10.2.1.
 * stateUsps: the state of the deciding court, for "State of X" → "State".
 */
export function firstParty(side, stateUsps) {
  let p = side.trim();
  const shouted = /\b[A-Z][a-z]+\s+(?:[A-Z]\.\s+)?[A-Z]{3,}\b/.test(p);
  p = titleCaseIfShouting(p);
  p = p.replace(/^the\s+/i, '');
  // drop trailing role descriptors and "et al."
  for (let i = 0; i < 4; i++) p = p.replace(PROCEDURAL_TAIL, '').trim();
  // first-listed party only: cut at " and " / ";" when what follows is another party
  p = p.split(/\s*;\s*/)[0];
  // Cut at " and " only when the head is plainly a complete party (ends in an
  // entity suffix, or the tail starts with "The"/a comma-delimited list).
  const am = p.match(/^(.*?(?:\b(?:Inc|Co|Corp|Ltd|LLC|L\.L\.C|LLP|L\.P|N\.A|P\.A|P\.C|PLLC)\.?|Company|Corporation|Incorporated)),?\s+and\s+(?:the\s+)?[A-Z].*$/i)
    || p.match(/^([^,]+?),\s+(?:[^,]+,\s+)*and\s+[A-Z].*$/)
    || p.match(/^(.+?)\s+and\s+The\s+[A-Z].*$/);
  if (am) p = am[1];
  p = p.replace(/,?\s+et al\.?$/i, '').replace(/,\s*$/, '');
  p = p.replace(PARTY_ROLE, '').replace(/\s{2,}/g, ' ').replace(/[,\s]+$/, '').trim();
  // governments
  if (/^united states of america$/i.test(p) || /^u\.?s\.?a\.?$/i.test(p)) return 'United States';
  let m = p.match(/^(?:the\s+)?state of ([A-Za-z .]+)$/i);
  if (m) return stateUsps && STATES[stateUsps]?.name.toLowerCase() === m[1].trim().toLowerCase() ? 'State' : m[1].trim();
  m = p.match(/^(?:the\s+)?commonwealth of ([A-Za-z .]+)$/i);
  if (m) return stateUsps && STATES[stateUsps]?.name.toLowerCase() === m[1].trim().toLowerCase() ? 'Commonwealth' : m[1].trim();
  m = p.match(/^(?:the\s+)?people of the state of ([A-Za-z .]+)$/i);
  if (m) return 'People';
  p = p.replace(/^(.*?),?\s+a(?:n)? (?:\w+ )?(?:corporation|company|limited liability company|partnership|municipal corporation|political subdivision)\b.*$/i, '$1');
  p = surnameOnly(p, shouted);
  return p;
}

// Rule 10.2.1(h): drop "Inc.", "Ltd.", "L.L.C.", "N.A." etc. when the name
// already shows it is a business firm (Co., Corp., Ass'n, Bros., R.R., Ry.).
const BUSINESS_WORD = /\b(?:Co|Corp|Bros|R\.R|Ry)\.|\bAss'n\b/;
export function dropRedundantDesignation(p) {
  if (!BUSINESS_WORD.test(p)) return p;
  return p.replace(/,?\s+(?:Inc|Ltd|L\.L\.C|LLC|L\.P|N\.A|P\.C|S\.A)\.?$/, '').trim();
}

function finishParty(p) {
  return dropRedundantDesignation(abbreviateT6(abbreviateT10(p)).replace(/\s+and\s+/g, ' & '));
}

/** Bluebook citation case name from a full caption. */
const ROLE_ANYWHERE = /,\s*(?:(?:individually|personally)\s+and\s+)?(?:plaintiffs?|defendants?|appellants?|appellees?|petitioners?|respondents?|cross[- ](?:appellants?|appellees?|petitioners?|respondents?)|intervenors?|movants?|claimants?|counter[- ](?:plaintiffs?|defendants?)|third[- ]party (?:plaintiffs?|defendants?))(?:[-–\s/]+(?:and\s+)?(?:plaintiffs?|defendants?|appellants?|appellees?|petitioners?|respondents?|cross[- ]\w+))*\b\.?(?=,|\s+v\.?\s|$)/gi;

export function bluebookCaseName(full, stateUsps) {
  let s = String(full || '').replace(/\s+/g, ' ').replace(/[’‘]/g, "'").trim();
  s = s.replace(ROLE_ANYWHERE, '').replace(/,\s*,/g, ',').replace(/,\s+v\.?\s+/g, ' v. ');
  s = s.replace(/\s*\((?:order|opinion|memorandum|per curiam)[^)]*\)\s*$/i, '');
  s = titleCaseIfShouting(s);
  // procedural phrases (Rule 10.2.1(b))
  let m = s.match(/^(?:in re:?|in the matter of|matter of|in re the marriage of|in re marriage of|application of|petition of)\s+(.+)$/i);
  if (m) {
    let rest = m[1].replace(/,?\s+(?:debtors?|a minor|minor child(?:ren)?|deceased|an? (?:alleged )?incapacitated person)\b.*$/i, '').trim();
    rest = rest.split(/\s*,\s*(?:d\/b\/a|f\/d\/b\/a|aka|a\/k\/a)\b/i)[0];
    if (/\bv\.\s/.test(rest)) {
      const [a, b] = rest.split(/\s+v\.?\s+/);
      return `In re ${finishParty(firstParty(a, stateUsps))} v. ${finishParty(firstParty(b, stateUsps))}`;
    }
    return `In re ${finishParty(firstParty(rest, stateUsps))}`;
  }
  m = s.match(/^ex parte\s+(.+)$/i);
  if (m) return `Ex parte ${finishParty(firstParty(m[1], stateUsps))}`;
  const parts = s.split(/\s+(?:v\.?|vs\.?|versus)\s+/i);
  if (parts.length < 2) return finishParty(firstParty(s, stateUsps));
  let [left, ...rightParts] = parts;
  let right = rightParts.join(' v. ');
  // "State ex rel. X v. Y" keeps ex rel.
  const exrel = left.match(/^(.*?)\s+ex rel\.?\s+(.+)$/i) || left.match(/^(.*?),?\s+(?:for|on behalf of|o\/b\/o)\s+(.+)$/i);
  let L;
  if (exrel) L = `${firstParty(exrel[1], stateUsps)} ex rel. ${firstParty(exrel[2], stateUsps)}`;
  else L = firstParty(left, stateUsps);
  const R_ = firstParty(right, stateUsps);
  return `${finishParty(L)} v. ${finishParty(R_)}`;
}

// ----------------------------------------------------- court parenthetical
/**
 * Expected court part of the parenthetical, given the reporter and the
 * Bluebook court abbreviation from classifyCourt(). '' means "year only".
 */
export function expectedCourtParen(reporterCanon, courtBb, level) {
  const info = reporterInfo(reporterCanon);
  if (level === 'scotus') return '';
  if (info?.implies && info.implies === courtBb) return '';
  if (info?.implies === 'Cal.' && courtBb === 'Cal.') return '';
  return courtBb ?? null;
}

/** Court equivalences a careful cite-checker should accept. */
export function courtEquivalent(got, want) {
  const n = (x) => String(x || '').replace(/\s+/g, ' ').replace(/[–—]/g, '-').trim().toLowerCase();
  const g = n(got);
  const w = n(want);
  if (g === w) return true;
  // Florida: the Bluebook form is "Fla. Dist. Ct. App."; Fla. R. App. P. 9.800
  // uses "Fla. 1st DCA". Accept either (and the district-numbered Bluebook form).
  if (w === 'fla. dist. ct. app.' && /^fla\. (\d+(st|d|nd|rd|th) )?(dist\. ct\. app\.|dca)$/.test(g)) return true;
  // Texas: "Tex. App." may carry the city/district suffix.
  if (w === 'tex. app.' && /^tex\. app\.(\s*-\s*.+)?$/.test(g)) return true;
  // N.Y. App. Div. may carry the department.
  if (w === 'n.y. app. div.' && /^n\.y\. app\. div\./.test(g)) return true;
  if (w === 'ill. app. ct.' && /^ill\. app\. ct\./.test(g)) return true;
  if (w === 'la. ct. app.' && /^la\. ct\. app\./.test(g)) return true;
  if (w === 'cal. ct. app.' && /^cal\. ct\. app\./.test(g)) return true;
  if (w === 'ohio ct. app.' && /^ohio ct\. app\./.test(g)) return true;
  return false;
}

// ----------------------------------------------------------------- lint
/**
 * Lint a full citation string for Bluebook form problems that do not depend
 * on knowing the right answer. Returns a list of { code, detail }.
 */
export function lintCitation(str) {
  const issues = [];
  const p = parseCite(str);
  if (!p) {
    // "Name (Court Year)" with no reporter, neutral, WL or docket locator at all
    if (/\d{4}\)\s*$/.test(str) && !/,\s*\d+\s+[A-Za-z]/.test(str)) return [{ code: 'no_locator', detail: str }];
    return [{ code: 'unparseable', detail: str }];
  }
  const name = p.name;
  // public-domain / medium-neutral forms ("2019 MT 12", "2010-Ohio-6238", "NY Slip Op") are proper Bluebook
  const neutral = /^(?:S\.?D\.?|N\.?D\.?|[A-Z]{2}(?:\s(?:App|CR|CIV APP|Ct|COA))?|Ohio|NY Slip Op|NMCA|NMSC|COA|NCBC|UT App|IL|IL App|ND|SD|ME|VT|WI App|Ark\.|Ark\. App\.)$/.test(p.reporterRaw);
  if (neutral && /^[A-Z]{2,}|^Ohio$|NY Slip Op/.test(p.reporterRaw) && !/\./.test(p.reporterRaw)) {
    // medium-neutral cite: not a T1 reporter question
  } else if (!p.reporter) issues.push({ code: 'reporter_not_t1', detail: p.reporterRaw });
  else if (p.reporterRaw !== p.reporter) issues.push({ code: 'reporter_spacing', detail: `${p.reporterRaw} → ${p.reporter}` });
  if (!p.year) issues.push({ code: 'no_year', detail: p.paren || '(missing)' });
  if (/\b(?:et al\.?|et ux\.?)/i.test(name)) issues.push({ code: 'et_al', detail: name });
  if (/\b(?:plaintiffs?|defendants?|appellants?|appellees?|petitioners?|respondents?)\b/i.test(name)) issues.push({ code: 'party_role_in_name', detail: name });
  if (/\b(?:administratrix|administrator|executrix|executor|trustee|personal representative|as next friend|individually|in (?:his|her) (?:official|individual) capacity)\b/i.test(name)) {
    issues.push({ code: 'descriptive_phrase_in_name', detail: name });
  }
  const sides = name.split(/\s+v\.\s+/);
  for (const side of sides) {
    if (/(?:\b(?:Inc|Co|Corp|Ltd|LLC|LLP|L\.P|N\.A)\.?|Company|Corporation),?\s+(?:and|&)\s+[A-Z]/.test(side) || /\s+and\s+The\s+[A-Z]/.test(side)) {
      issues.push({ code: 'multiple_parties', detail: side });
    }
    if (/;/.test(side)) issues.push({ code: 'multiple_parties', detail: side });
  }
  if (/\b(?:vs\.?|versus)\s/i.test(name) || /\sv\s/.test(name)) issues.push({ code: 'v_form', detail: name });
  const letters = name.replace(/[^A-Za-z]/g, '');
  if (letters.length > 6 && letters.replace(/[^A-Z]/g, '').length / letters.length > 0.6) issues.push({ code: 'all_caps_name', detail: name });
  const t6 = unabbreviatedT6(name);
  if (t6.length) issues.push({ code: 't6_unabbreviated', detail: t6.join(', ') });
  if (/\s+and\s+/.test(name)) issues.push({ code: 'and_not_ampersand', detail: name });
  for (const side of name.split(/\s+v\.\s+/)) {
    if (BUSINESS_WORD.test(side.replace(/,?\s+(?:Inc|Ltd|L\.L\.C|LLC|L\.P|N\.A|P\.C|S\.A)\.?$/, '')) && /,?\s+(?:Inc|Ltd|L\.L\.C|LLC|L\.P|N\.A)\.?$/.test(side)) {
      issues.push({ code: 'redundant_business_designation', detail: side });
    }
  }
  const t10 = unabbreviatedT10(name);
  if (t10.length) issues.push({ code: 't10_unabbreviated', detail: t10.join(', ') });
  if (/\bUnited States of America\b/.test(name)) issues.push({ code: 'usa_long_form', detail: name });
  if (/\b(?:State|Commonwealth|People) of (?:the State of )?[A-Z]/.test(name)) issues.push({ code: 'state_long_form', detail: name });
  if (/^The\s/.test(name) || /\sv\. The\s/.test(name)) issues.push({ code: 'leading_the', detail: name });
  if (/\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\.?\s+\d{1,2},\s+\d{4}/.test(p.paren)) issues.push({ code: 'full_date_on_reported_case', detail: p.paren });
  if (/\b(?:DCA)\b/.test(p.court)) issues.push({ code: 'local_rule_court_form', detail: p.court });
  if (name.length > 90) issues.push({ code: 'name_too_long', detail: `${name.length} chars` });
  return issues;
}

export function normCite(s) {
  return String(s || '')
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .replace(/\s+,/g, ',')
    .trim();
}

export function assemble({ name, vol, reporter, page, court, year }) {
  const paren = court ? `${court} ${year}` : `${year}`;
  return `${name}, ${vol} ${reporter} ${page} (${paren})`;
}

export { CIRCUIT_BB };

/** Rule 6.1(a): close up adjacent single capitals ("S.D. N.Y." → "S.D.N.Y."). */
export function closeUp(s) {
  let t = String(s);
  for (let i = 0; i < 4; i++) t = t.replace(/\b([A-Z])\. (?=[A-Z]\.(?:[^a-z]|$))/g, '$1.');
  return t;
}

// T10 geographic abbreviations used inside a longer party name (Rule 10.2.2).
export const T10_CASE_NAME = {
  'Puerto Rico': 'P.R.', 'New York': 'N.Y.', 'New Jersey': 'N.J.', 'New Mexico': 'N.M.', 'New Hampshire': 'N.H.',
  'North Carolina': 'N.C.', 'South Carolina': 'S.C.', 'North Dakota': 'N.D.', 'South Dakota': 'S.D.',
  'Rhode Island': 'R.I.', 'West Virginia': 'W. Va.', 'District of Columbia': 'D.C.',
  Alabama: 'Ala.', Arizona: 'Ariz.', Arkansas: 'Ark.', California: 'Cal.', Colorado: 'Colo.', Connecticut: 'Conn.',
  Delaware: 'Del.', Florida: 'Fla.', Georgia: 'Ga.', Hawaii: 'Haw.', Illinois: 'Ill.', Indiana: 'Ind.', Kansas: 'Kan.',
  Kentucky: 'Ky.', Louisiana: 'La.', Maine: 'Me.', Maryland: 'Md.', Massachusetts: 'Mass.', Michigan: 'Mich.',
  Minnesota: 'Minn.', Mississippi: 'Miss.', Missouri: 'Mo.', Montana: 'Mont.', Nebraska: 'Neb.', Nevada: 'Nev.',
  Oklahoma: 'Okla.', Oregon: 'Or.', Pennsylvania: 'Pa.', Tennessee: 'Tenn.', Texas: 'Tex.', Vermont: 'Vt.',
  Virginia: 'Va.', Washington: 'Wash.', Wisconsin: 'Wis.', Wyoming: 'Wyo.',
};
const T10_RX = new RegExp(`\\b(${Object.keys(T10_CASE_NAME).sort((a, b) => b.length - a.length).join('|')})\\b`, 'g');

/** Abbreviate geographic words inside a party that is more than the place itself. */
export function abbreviateT10(party) {
  const whole = party.trim();
  if (T10_CASE_NAME[whole]) return whole;
  if (/^(?:State|Commonwealth|People) of /.test(whole)) return whole;
  if (whole !== 'United States') party = whole.replace(/\bUnited States(?! of America)\b/g, 'U.S.');
  else return whole;
  const w2 = party;
  return w2.replace(T10_RX, (m, _g, off, all) => {
    if (/\bWashington\b/.test(m) && /(George|Booker|Martha)\s*$/.test(all.slice(0, off))) return m;
    return T10_CASE_NAME[m];
  });
  return whole.replace(T10_RX, (m, _g, off, all) => {
    // "University of Virginia" style: keep when the place is the object of "of"? Bluebook still abbreviates.
    if (/\bWashington\b/.test(m) && /(George|Booker|Martha)\s*$/.test(all.slice(0, off))) return m;
    return T10_CASE_NAME[m];
  });
}

/** Geographic words left unabbreviated inside a longer party (lint). */
export function unabbreviatedT10(name) {
  const hits = [];
  for (const side of String(name).split(/\s+v\.\s+/)) {
    const t = side.trim();
    if (T10_CASE_NAME[t] || /^(?:State|Commonwealth|People|United States)\b/.test(t)) continue;
    const m = t.match(T10_RX);
    if (m) hits.push(...m.filter((w) => !(w === 'Washington' && /(George|Booker)\s+Washington/.test(t))));
  }
  return [...new Set(hits)];
}
