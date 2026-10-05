/**
 * Court tables for scope grading and Bluebook court parentheticals.
 * Sources: Bluebook T1 (courts), T7 (court names), T10 (geographic terms).
 */

export const STATES = {
  AL: { name: 'Alabama', bb: 'Ala.', circuit: '11' },
  AK: { name: 'Alaska', bb: 'Alaska', circuit: '9' },
  AZ: { name: 'Arizona', bb: 'Ariz.', circuit: '9' },
  AR: { name: 'Arkansas', bb: 'Ark.', circuit: '8' },
  CA: { name: 'California', bb: 'Cal.', circuit: '9' },
  CO: { name: 'Colorado', bb: 'Colo.', circuit: '10' },
  CT: { name: 'Connecticut', bb: 'Conn.', circuit: '2' },
  DE: { name: 'Delaware', bb: 'Del.', circuit: '3' },
  DC: { name: 'District of Columbia', bb: 'D.C.', circuit: 'dc' },
  FL: { name: 'Florida', bb: 'Fla.', circuit: '11' },
  GA: { name: 'Georgia', bb: 'Ga.', circuit: '11' },
  HI: { name: 'Hawaii', bb: 'Haw.', circuit: '9' },
  ID: { name: 'Idaho', bb: 'Idaho', circuit: '9' },
  IL: { name: 'Illinois', bb: 'Ill.', circuit: '7' },
  IN: { name: 'Indiana', bb: 'Ind.', circuit: '7' },
  IA: { name: 'Iowa', bb: 'Iowa', circuit: '8' },
  KS: { name: 'Kansas', bb: 'Kan.', circuit: '10' },
  KY: { name: 'Kentucky', bb: 'Ky.', circuit: '6' },
  LA: { name: 'Louisiana', bb: 'La.', circuit: '5' },
  ME: { name: 'Maine', bb: 'Me.', circuit: '1' },
  MD: { name: 'Maryland', bb: 'Md.', circuit: '4' },
  MA: { name: 'Massachusetts', bb: 'Mass.', circuit: '1' },
  MI: { name: 'Michigan', bb: 'Mich.', circuit: '6' },
  MN: { name: 'Minnesota', bb: 'Minn.', circuit: '8' },
  MS: { name: 'Mississippi', bb: 'Miss.', circuit: '5' },
  MO: { name: 'Missouri', bb: 'Mo.', circuit: '8' },
  MT: { name: 'Montana', bb: 'Mont.', circuit: '9' },
  NE: { name: 'Nebraska', bb: 'Neb.', circuit: '8' },
  NV: { name: 'Nevada', bb: 'Nev.', circuit: '9' },
  NH: { name: 'New Hampshire', bb: 'N.H.', circuit: '1' },
  NJ: { name: 'New Jersey', bb: 'N.J.', circuit: '3' },
  NM: { name: 'New Mexico', bb: 'N.M.', circuit: '10' },
  NY: { name: 'New York', bb: 'N.Y.', circuit: '2' },
  NC: { name: 'North Carolina', bb: 'N.C.', circuit: '4' },
  ND: { name: 'North Dakota', bb: 'N.D.', circuit: '8' },
  OH: { name: 'Ohio', bb: 'Ohio', circuit: '6' },
  OK: { name: 'Oklahoma', bb: 'Okla.', circuit: '10' },
  OR: { name: 'Oregon', bb: 'Or.', circuit: '9' },
  PA: { name: 'Pennsylvania', bb: 'Pa.', circuit: '3' },
  RI: { name: 'Rhode Island', bb: 'R.I.', circuit: '1' },
  SC: { name: 'South Carolina', bb: 'S.C.', circuit: '4' },
  SD: { name: 'South Dakota', bb: 'S.D.', circuit: '8' },
  TN: { name: 'Tennessee', bb: 'Tenn.', circuit: '6' },
  TX: { name: 'Texas', bb: 'Tex.', circuit: '5' },
  UT: { name: 'Utah', bb: 'Utah', circuit: '10' },
  VT: { name: 'Vermont', bb: 'Vt.', circuit: '2' },
  VA: { name: 'Virginia', bb: 'Va.', circuit: '4' },
  WA: { name: 'Washington', bb: 'Wash.', circuit: '9' },
  WV: { name: 'West Virginia', bb: 'W. Va.', circuit: '4' },
  WI: { name: 'Wisconsin', bb: 'Wis.', circuit: '7' },
  WY: { name: 'Wyoming', bb: 'Wyo.', circuit: '10' },
};

export const TERRITORIES = {
  PR: { name: 'Puerto Rico', bb: 'P.R.', circuit: '1' },
  VI: { name: 'Virgin Islands', bb: 'V.I.', circuit: '3' },
  GU: { name: 'Guam', bb: 'Guam', circuit: '9' },
  MP: { name: 'Northern Mariana Islands', bb: 'N. Mar. I.', circuit: '9' },
};

export const STATE_BY_NAME = Object.fromEntries(
  Object.entries(STATES).map(([k, v]) => [v.name.toLowerCase(), k]),
);

export const CIRCUITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', 'dc', 'federal'];

export const CIRCUIT_BB = {
  1: '1st Cir.', 2: '2d Cir.', 3: '3d Cir.', 4: '4th Cir.', 5: '5th Cir.', 6: '6th Cir.',
  7: '7th Cir.', 8: '8th Cir.', 9: '9th Cir.', 10: '10th Cir.', 11: '11th Cir.',
  dc: 'D.C. Cir.', federal: 'Fed. Cir.',
};

const ORD = {
  first: '1', second: '2', third: '3', fourth: '4', fifth: '5', sixth: '6', seventh: '7',
  eighth: '8', ninth: '9', tenth: '10', eleventh: '11',
  '1st': '1', '2nd': '2', '2d': '2', '3rd': '3', '3d': '3', '4th': '4', '5th': '5', '6th': '6',
  '7th': '7', '8th': '8', '9th': '9', '10th': '10', '11th': '11',
};

function findState(text) {
  const t = ` ${String(text ?? "").toLowerCase()} `;
  // longest names first so "west virginia" beats "virginia"
  const names = Object.keys(STATE_BY_NAME).sort((a, b) => b.length - a.length);
  for (const n of names) {
    if (t.includes(` ${n} `) || t.includes(` ${n},`) || t.includes(`(${n}`) || t.includes(` ${n})`)) {
      return STATE_BY_NAME[n];
    }
  }
  return null;
}

const DIR = { northern: 'N.', southern: 'S.', eastern: 'E.', western: 'W.', middle: 'M.', central: 'C.' };

/**
 * Classify a court from the API's court / jurisdiction / abbreviation strings.
 * Returns { system, level, state, circuit, bb } where bb is the Bluebook court
 * abbreviation for the parenthetical (without year), or null when unknown.
 */
export function classifyCourt(court = '', jurisdiction = '', abbr = '') {
  const c = `${court || ''}`.trim();
  const lc = c.toLowerCase();
  const j = `${jurisdiction || ''}`.toLowerCase();
  const a = `${abbr || ''}`.trim();
  const out = { system: null, level: null, state: null, circuit: null, bb: null, raw: c };

  if (/supreme court of the united states|^u\.?s\.? supreme court|united states supreme court/.test(lc) || a === 'SCOTUS' || j === 'u.s. supreme court') {
    return { ...out, system: 'federal', level: 'scotus', bb: '' };
  }
  let m = lc.match(/court of appeals for the (\w+) circuit|^(\w+) circuit court of appeals|united states court of appeals,? (\w+) circuit/);
  if (m) {
    const word = m[1] || m[2] || m[3];
    if (word === 'federal') return { ...out, system: 'federal', level: 'circuit', circuit: 'federal', bb: 'Fed. Cir.' };
    if (word === 'district' || /district of columbia circuit/.test(lc)) return { ...out, system: 'federal', level: 'circuit', circuit: 'dc', bb: 'D.C. Cir.' };
    const n = ORD[word];
    if (n) return { ...out, system: 'federal', level: 'circuit', circuit: n, bb: CIRCUIT_BB[n] };
  }
  if (/district of columbia circuit|d\.c\. cir/.test(lc)) return { ...out, system: 'federal', level: 'circuit', circuit: 'dc', bb: 'D.C. Cir.' };
  if (/federal circuit/.test(lc)) return { ...out, system: 'federal', level: 'circuit', circuit: 'federal', bb: 'Fed. Cir.' };
  if (/court of federal claims|claims court/.test(lc)) return { ...out, system: 'federal', level: 'specialty', circuit: 'federal', bb: 'Fed. Cl.' };
  if (/tax court/.test(lc) && /united states|u\.s\./.test(lc)) return { ...out, system: 'federal', level: 'specialty', bb: 'T.C.' };
  if (/court of international trade/.test(lc)) return { ...out, system: 'federal', level: 'specialty', circuit: 'federal', bb: "Ct. Int'l Trade" };
  if (/armed forces|military appeals|court of criminal appeals/.test(lc) && /army|navy|air force|armed|coast guard|military/.test(lc)) {
    return { ...out, system: 'federal', level: 'specialty', bb: null };
  }
  if (/judicial panel on multidistrict/.test(lc)) return { ...out, system: 'federal', level: 'specialty', bb: 'J.P.M.L.' };
  if (/bankruptcy appellate panel/.test(lc)) {
    const n = (lc.match(/(\w+) circuit/) || [])[1];
    return { ...out, system: 'federal', level: 'bap', circuit: ORD[n] ?? null, bb: ORD[n] ? `B.A.P. ${CIRCUIT_BB[ORD[n]]}` : null };
  }
  const isBankr = /bankruptcy/.test(lc);
  if (!c && /^federal$/i.test(jurisdiction || '')) return { ...out, system: 'federal', level: 'unknown' };
  if (/board of immigration appeals|^bia$/i.test(lc)) return { ...out, system: 'federal', level: 'agency', bb: 'BIA' };
  const stateBbs = new Set(Object.values(STATES).map((v) => v.bb));
  const fedAbbr = !stateBbs.has(a) && /^(?:[NSEWMC]\.D\.\s?[A-Z]|D\.\s?[A-Z])/.test(a) && !/\b(?:Ct|App|Sup|Super)\b/.test(a);
  if ((/district court/.test(lc) && /united states|u\.s\.|federal/.test(lc)) || /^district court,/.test(lc) || isBankr || fedAbbr) {
    for (const [k, t] of Object.entries(TERRITORIES)) {
      if (lc.includes(t.name.toLowerCase())) {
        const dm = lc.match(/(northern|southern|eastern|western|middle|central) district/);
        const bbD = closeUpCourt(dm ? `${DIR[dm[1]]}D. ${t.bb}` : `D. ${t.bb}`);
        return { ...out, system: 'federal', level: isBankr ? 'bankruptcy' : 'district', state: k, circuit: t.circuit, bb: isBankr ? `Bankr. ${bbD}` : bbD };
      }
    }
    const st = findState(c) ?? findState(jurisdiction);
    if (st) {
      const dm = lc.match(/(northern|southern|eastern|western|middle|central) district/);
      const dm2 = lc.match(/\b([nsewmc])\.\s?d\.\s/);
      const dist = dm ? `${DIR[dm[1]]}D. ${STATES[st].bb}` : dm2 ? `${dm2[1].toUpperCase()}.D. ${STATES[st].bb}` : `D. ${STATES[st].bb}`;
      const bbDist = st === 'DC' ? 'D.D.C.' : closeUpCourt(dist.replace(/^([NSEWMC])\. D\. /, '$1.D. '));
      return {
        ...out,
        system: 'federal',
        level: isBankr ? 'bankruptcy' : 'district',
        state: st,
        circuit: STATES[st].circuit,
        bb: isBankr ? `Bankr. ${bbDist}` : bbDist,
      };
    }
    return { ...out, system: 'federal', level: isBankr ? 'bankruptcy' : 'district' };
  }
  if (/united states|federal|u\.s\. court/.test(lc) && !findState(c)) {
    return { ...out, system: 'federal', level: 'other' };
  }

  // ---- state courts
  const st = findState(c) ?? findState(jurisdiction) ?? stateFromAbbr(a);
  if (!st) return out;
  const S = STATES[st].bb;
  const res = { ...out, system: 'state', state: st, circuit: STATES[st].circuit };
  if (st === 'DC') {
    if (/court of appeals/.test(lc)) return { ...res, level: 'supreme', bb: 'D.C.' };
    return { ...res, level: 'trial', bb: 'D.C. Super. Ct.' };
  }
  if (/supreme judicial court/.test(lc)) return { ...res, level: 'supreme', bb: S };
  if (st === 'NY') {
    if (/court of appeals/.test(lc)) return { ...res, level: 'supreme', bb: 'N.Y.' };
    if (/appellate division/.test(lc)) return { ...res, level: 'intermediate', bb: 'N.Y. App. Div.' };
    if (/appellate term/.test(lc)) return { ...res, level: 'intermediate', bb: 'N.Y. App. Term' };
    if (/supreme court/.test(lc)) return { ...res, level: 'trial', bb: 'N.Y. Sup. Ct.' };
    if (/surrogate/.test(lc)) return { ...res, level: 'trial', bb: 'N.Y. Sur. Ct.' };
    if (/family court/.test(lc)) return { ...res, level: 'trial', bb: 'N.Y. Fam. Ct.' };
    if (/civil court/.test(lc)) return { ...res, level: 'trial', bb: 'N.Y. Civ. Ct.' };
    if (/criminal court/.test(lc)) return { ...res, level: 'trial', bb: 'N.Y. Crim. Ct.' };
    if (/court of claims/.test(lc)) return { ...res, level: 'trial', bb: 'N.Y. Ct. Cl.' };
    if (/district court|city court|county court/.test(lc)) return { ...res, level: 'trial', bb: null };
  }
  if (st === 'MD' && /court of appeals|supreme court/.test(lc) && !/special/.test(lc)) return { ...res, level: 'supreme', bb: 'Md.' };
  if (st === 'MD' && /special appeals|appellate court/.test(lc)) return { ...res, level: 'intermediate', bb: /special/.test(lc) ? 'Md. Ct. Spec. App.' : 'Md. App. Ct.' };
  if (st === 'TX' && /court of criminal appeals/.test(lc)) return { ...res, level: 'supreme', bb: 'Tex. Crim. App.' };
  if (st === 'OK' && /court of criminal appeals/.test(lc)) return { ...res, level: 'supreme', bb: 'Okla. Crim. App.' };
  if (st === 'OK' && /civil appeals/.test(lc)) return { ...res, level: 'intermediate', bb: 'Okla. Civ. App.' };
  if (st === 'TX' && /court of appeals/.test(lc)) return { ...res, level: 'intermediate', bb: 'Tex. App.' };
  if (st === 'FL' && /district court of appeal|dca/.test(lc + ' ' + a.toLowerCase())) {
    return { ...res, level: 'intermediate', bb: 'Fla. Dist. Ct. App.' };
  }
  if (st === 'PA' && /superior court/.test(lc)) return { ...res, level: 'intermediate', bb: 'Pa. Super. Ct.' };
  if (st === 'PA' && /commonwealth court/.test(lc)) return { ...res, level: 'intermediate', bb: 'Pa. Commw. Ct.' };
  if (st === 'NJ' && /appellate division/.test(lc)) return { ...res, level: 'intermediate', bb: 'N.J. Super. Ct. App. Div.' };
  if (st === 'NJ' && /superior court/.test(lc)) return { ...res, level: 'trial', bb: 'N.J. Super. Ct.' };
  if (st === 'MA' && /appeals court/.test(lc)) return { ...res, level: 'intermediate', bb: 'Mass. App. Ct.' };
  if (st === 'CT' && /appellate court/.test(lc)) return { ...res, level: 'intermediate', bb: 'Conn. App. Ct.' };
  if (st === 'IL' && /appellate court/.test(lc)) return { ...res, level: 'intermediate', bb: 'Ill. App. Ct.' };
  if (st === 'CO' && /court of appeals/.test(lc)) return { ...res, level: 'intermediate', bb: 'Colo. App.' };
  if (st === 'VA' && /court of appeals/.test(lc)) return { ...res, level: 'intermediate', bb: 'Va. Ct. App.' };
  if (st === 'VA' && /circuit court/.test(lc)) return { ...res, level: 'trial', bb: 'Va. Cir. Ct.' };
  if (st === 'LA' && /court of appeal/.test(lc)) return { ...res, level: 'intermediate', bb: 'La. Ct. App.' };
  if (st === 'CA' && /appellate division|superior court/.test(lc)) return { ...res, level: 'trial', bb: /appellate division/.test(lc) ? 'Cal. App. Dep\'t Super. Ct.' : 'Cal. Super. Ct.' };
  if (/court of criminal appeals/.test(lc)) return { ...res, level: 'intermediate', bb: `${S} Crim. App.` };
  if (/court of civil appeals/.test(lc)) return { ...res, level: 'intermediate', bb: `${S} Civ. App.` };
  if (/court of claims/.test(lc)) return { ...res, level: 'trial', bb: `${S} Ct. Cl.` };
  if (/business court|common pleas|judicial discipline|workers'? comp/.test(lc)) return { ...res, level: 'trial', bb: null };
  if (/supreme court|court of last resort|highest court/.test(lc) && !/appellate division/.test(lc)) return { ...res, level: 'supreme', bb: S };
  if (/court of appeals?|appellate court|intermediate/.test(lc)) return { ...res, level: 'intermediate', bb: `${S} Ct. App.` };
  if (/chancery/.test(lc)) return { ...res, level: 'trial', bb: `${S} Ch.` };
  if (/superior court/.test(lc)) return { ...res, level: 'trial', bb: `${S} Super. Ct.` };
  if (/tax court/.test(lc)) return { ...res, level: 'trial', bb: `${S} T.C.` };
  if (/district court|circuit court|county court|family court|probate|court of common pleas|trial/.test(lc)) return { ...res, level: 'trial', bb: null };
  if (/attorney general|workers|commission|board/.test(lc)) return { ...res, level: 'agency', bb: null };
  return { ...res, level: 'unknown', bb: null };
}

function closeUpCourt(s) {
  let t = s;
  for (let i = 0; i < 4; i++) t = t.replace(/\b([A-Z])\. (?=[A-Z]\.(?:[^a-z]|$))/g, '$1.');
  return t;
}

function stateFromAbbr(a) {
  if (!a) return null;
  const head = a.split(/\s+\d|\s+(?:Ct|App|Sup|Super|Dist|DCA|Cir|Crim|Civ)\b/)[0].trim();
  for (const [k, v] of Object.entries(STATES)) if (head === v.bb) return k;
  return null;
}

/** Is a classified court inside the requested search scope? */
export function inScope(cls, juris) {
  const t = juris?.type;
  if (!cls || !cls.system) return { ok: null, why: 'court_unclassified' };
  const fed = cls.system === 'federal';
  switch (t) {
    case 'all_federal':
      return { ok: fed, why: fed ? '' : 'state_court_in_federal_scope' };
    case 'all_states':
      return { ok: !fed, why: !fed ? '' : 'federal_court_in_state_scope' };
    case 'all_states_and_federal':
      return { ok: true, why: '' };
    case 'us_supreme_court':
      return { ok: cls.level === 'scotus', why: cls.level === 'scotus' ? '' : 'non_scotus_in_scotus_scope' };
    case 'one_state':
      if (fed) return { ok: false, why: 'federal_court_in_one_state_scope' };
      return { ok: cls.state === juris.state, why: cls.state === juris.state ? '' : `other_state_${cls.state}` };
    case 'one_state_plus_federal': {
      if (!fed) return { ok: cls.state === juris.state, why: cls.state === juris.state ? '' : `other_state_${cls.state}` };
      if (cls.level === 'scotus') return { ok: true, why: '' };
      if (cls.level === 'circuit') {
        const ok = cls.circuit === STATES[juris.state].circuit;
        return { ok, why: ok ? '' : `other_circuit_${cls.circuit}` };
      }
      if (cls.state) return { ok: cls.state === juris.state, why: cls.state === juris.state ? '' : `federal_court_other_state_${cls.state}` };
      return { ok: null, why: 'federal_court_unplaced' };
    }
    case 'federal_circuit': {
      if (!fed) return { ok: false, why: 'state_court_in_circuit_scope' };
      if (cls.level === 'scotus') return { ok: true, why: 'scotus_binding' };
      if (cls.circuit) return { ok: cls.circuit === juris.circuit, why: cls.circuit === juris.circuit ? '' : `other_circuit_${cls.circuit}` };
      return { ok: null, why: 'federal_court_unplaced' };
    }
    case 'federal_district': {
      if (!fed) return { ok: false, why: 'state_court_in_district_scope' };
      if (cls.level === 'district' || cls.level === 'bankruptcy') {
        const ok = cls.state === juris.districtState;
        return { ok, why: ok ? '' : `district_other_state_${cls.state}` };
      }
      return { ok: false, why: `non_district_${cls.level}` };
    }
    default:
      return { ok: null, why: 'unknown_scope' };
  }
}
