/**
 * Carry forward the parts of the earlier cite-check banks a law firm leans on
 * daily: Bluebook variants, mild mangles, pin-as-first-page, parallel and
 * vendor cites, subsequent history, string cites, caption/year/court traps,
 * and statutes. Rows keep their original ids and answer keys.
 *
 *   node scripts/law-firm/build-carried.mjs
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const OUT = resolve(ROOT, 'datasets/law-firm/carried-forward/citecheck');
const FAMILIES = ['bluebook_variant', 'mild_mangle', 'page_mismatch', 'parallel_cite', 'compound_history', 'string_cite', 'vendor_cite', 'secondary_form', 'year_court_mismatch', 'name_mismatch', 'statute'];
const key = JSON.parse(readFileSync(resolve(ROOT, 'datasets/citechecker/5300/answer-key.json'), 'utf8')).cases.filter((c) => FAMILIES.includes(c.family));
mkdirSync(OUT, { recursive: true });
writeFileSync(resolve(OUT, 'inputs.json'), JSON.stringify({ suite: 'law-firm/carried-forward/citecheck', source: 'datasets/citechecker/5300', families: FAMILIES, count: key.length, rows: key.map((c) => ({ id: c.id, citation: c.cite, family: c.family })) }, null, 1) + '\n');
writeFileSync(resolve(OUT, 'answer-key.json'), JSON.stringify({ suite: 'law-firm/carried-forward/citecheck', count: key.length, rows: key }, null, 1) + '\n');
console.log('carried cites', key.length, key.reduce((m, c) => ((m[c.family] = (m[c.family] ?? 0) + 1), m), {}));
