// Strict per-slug evidence audit for $TEMP/remaining.txt.
// Usage: node .tmp-audit.cjs
const fs = require('fs');
const path = require('path');
const T = process.env.TEMP;
const listFile = process.argv[2] || path.join(T, 'remaining.txt');
const slugs = fs.readFileSync(listFile, 'utf8').split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
const load = (f) => { const p = path.join(T, f); return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {}; };
const aa = { ...load('aa-merged.json'), ...load('aa-extra.json'), ...load('aa-db3.json'), ...load('aa-db.json') };
const mdev = load('models-dev.json');
const evdb = load('evdb.json');

const BENCH = ['terminalBench21','terminalBench40','terminalBenchScience','hle','gpqa','lcr','mlcrOverall','critpt','mmmuPro','tauBanking','itBenchSre','gdpval','gdpPdfAllPass','scicode','frontierCode','omniscience','omniscienceAccuracy','omniscienceHallucinationRate','analystAgent','automationBenchPartialScore','harveyLab'];
const norm = (s) => s.toLowerCase().replace(/[._\s]/g, '-').replace(/-+/g, '-');
const bare = (s) => norm(s).replace(/-/g, '');
const aaKeys = Object.keys(aa);
const mdevIdx = [];
for (const [prov, p] of Object.entries(mdev)) for (const id of Object.keys(p.models || {})) mdevIdx.push({ id: prov + '/' + id, n: norm(id) });
const evIdx = [];
for (const [src, obj] of Object.entries(evdb)) for (const k of Object.keys(obj || {})) evIdx.push({ src, k });

const out = [];
for (const slug of slugs) {
  const w = norm(slug), b = bare(slug);
  const aaExact = aaKeys.filter((k) => k === w);
  const aaFuzzy = aaExact.length ? [] : aaKeys.filter((k) => bare(k) === b || (bare(k).length > 5 && (bare(k).startsWith(b) || b.startsWith(bare(k)))));
  const useAa = aaExact.length ? aaExact : aaFuzzy;
  const rows = useAa.map((k) => aa[k]);
  const nBench = rows.reduce((n, r) => n + BENCH.filter((f) => typeof r[f] === 'number').length, 0);
  const nTot = rows.reduce((n, r) => n + Object.keys(r).filter((f) => typeof r[f] === 'number' && !f.startsWith('_')).length, 0);
  const md = mdevIdx.filter((m) => m.n === w || bare(m.n) === b);
  const mdFuzzy = md.length ? [] : mdevIdx.filter((m) => m.n.length > 6 && (m.n.includes(w) || w.includes(m.n)));
  const ev = evIdx.filter((e) => { const nk = norm(e.k); return nk.includes(w) || w.includes(nk); });
  out.push({ slug, aa: useAa.join(','), aaExact: !!aaExact.length, nBench, nTot, md: md.map((m) => m.id).join(','), mdFuzzy: mdFuzzy.slice(0, 4).map((m) => m.id).join(','), ev: [...new Set(ev.map((e) => e.src))].join(','), evKeys: ev.slice(0, 3).map((e) => e.k).join(' ; ') });
}
for (const r of out) {
  console.log('### ' + r.slug);
  console.log('   AA: ' + (r.aa || 'NONE') + (r.aaExact ? ' [EXACT]' : r.aa ? ' [FUZZY]' : '') + ' | bench=' + r.nBench + ' tot=' + r.nTot);
  console.log('   MDEV: ' + (r.md || 'NONE') + (r.md ? '' : ' | FUZZY: ' + (r.mdFuzzy || '-')));
  console.log('   EVDB: ' + (r.ev || 'NONE') + (r.evKeys ? ' | ' + r.evKeys : ''));
}
fs.writeFileSync(path.join(T, 'audit-rem.json'), JSON.stringify(out, null, 1));
console.log('\nSUMMARY: total=' + out.length +
  ' | AA-exact=' + out.filter((r) => r.aaExact && r.nBench >= 3).length +
  ' | AA-any=' + out.filter((r) => r.aa).length +
  ' | MDEV=' + out.filter((r) => r.md).length +
  ' | EVDB=' + out.filter((r) => r.ev).length);
