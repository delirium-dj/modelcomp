// Detailed dump of specific AA records + name-based lookup in curated bench tables.
const fs = require('fs');
const path = require('path');
const T = process.env.TEMP;
const load = (f) => { const p = path.join(T, f); return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {}; };
const aa = { ...load('aa-merged.json'), ...load('aa-extra.json') };
const evdb = load('evdb.json');

const WANT = process.argv.slice(2);
for (const k of WANT) {
  const rec = aa[k];
  console.log('\n===== AA ' + k + ' =====');
  if (!rec) { console.log('  (absent)'); continue; }
  for (const [f, v] of Object.entries(rec)) {
    if (v === null || v === undefined) continue;
    console.log('  ' + f + ' = ' + (typeof v === 'object' ? JSON.stringify(v) : v));
  }
}
// Name-based lookup in the curated bench tables (keys are rank numbers).
const NAMES = {
  valsTb4: 'Terminal-Bench 4.0 (Vals)', valsTb21: 'Terminal-Bench 2.1 (Vals)',
  valsTb: 'Terminal-Bench (Vals)', tb40: 'Terminal-Bench 4.0 (board)', aa: 'AA curated',
};
const PROBE = process.env.PROBE ? process.env.PROBE.split('|') : [];
for (const [src, label] of Object.entries(NAMES)) {
  const obj = evdb[src] || {};
  const rows = [];
  for (const [k, v] of Object.entries(obj)) {
    const s = JSON.stringify(v);
    if (PROBE.some((p) => s.toLowerCase().includes(p.toLowerCase()))) rows.push(k + ' => ' + s);
  }
  if (rows.length) { console.log('\n===== ' + label + ' (' + src + ') ====='); rows.forEach((r) => console.log('  ' + r)); }
}
