// Dump all cached evidence for the remaining slugs (one call, one file).
const fs = require('fs');
const path = require('path');
const T = process.env.TEMP;
const slugs = fs.readFileSync(path.join(T, 'remaining.txt'), 'utf8').split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
const load = (f) => { const p = path.join(T, f); return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {}; };
const aa = { ...load('aa-merged.json'), ...load('aa-extra.json') };
const mdev = load('models-dev.json');
const evdb = load('evdb.json');
const norm = (s) => s.toLowerCase().replace(/[._\s]/g, '-').replace(/-+/g, '-');
const bare = (s) => norm(s).replace(/-/g, '');

const AAKEYS = Object.keys(aa);
const out = [];
for (const slug of slugs) {
  const w = norm(slug), b = bare(slug);
  const rec = { slug, aa: {}, mdev: [], evdb: {} };
  for (const k of AAKEYS) {
    const kb = bare(k);
    if (kb === b) { rec.aa[k] = aa[k]; continue; }
    if (kb.length > 5 && (kb.startsWith(b) || b.startsWith(kb))) { rec.aa['~' + k] = aa[k]; }
  }
  for (const [prov, p] of Object.entries(mdev)) {
    for (const [id, m] of Object.entries(p.models || {})) {
      const n = norm(id);
      if (n === w || bare(n) === b) rec.mdev.push({ id: prov + '/' + id, m });
      else if (n.length > 6 && (n.includes(w) || w.includes(n))) rec.mdev.push({ id: prov + '/' + id, fuzzy: true, m });
    }
  }
  for (const [src, obj] of Object.entries(evdb)) {
    for (const [k, v] of Object.entries(obj || {})) {
      const nk = norm(k);
      if (nk.includes(w) || w.includes(nk)) rec.evdb[src + '::' + k] = v;
    }
  }
  out.push(rec);
}
fs.writeFileSync(path.join(T, 'ev-dump.json'), JSON.stringify(out, null, 1));
console.log('slugs:', out.length, '-> ev-dump.json');
for (const r of out) {
  console.log('\n===== ' + r.slug + ' =====');
  console.log('AA keys: ' + (Object.keys(r.aa).join(', ') || 'NONE'));
  for (const [k, v] of Object.entries(r.aa)) {
    const keep = Object.entries(v).filter(([f, x]) => typeof x === 'number' || typeof x === 'string');
    console.log('  ' + k + ': ' + JSON.stringify(Object.fromEntries(keep)));
  }
  console.log('MDEV: ' + r.mdev.map((x) => x.id + (x.fuzzy ? '(F)' : '')).join(', ') || 'NONE');
  for (const x of r.mdev) console.log('  ' + x.id + ': ' + JSON.stringify({ limit: x.m.limit, cost: x.m.cost, modalities: x.m.modalities, tool_call: x.m.tool_call, reasoning: x.m.reasoning, attachment: x.m.attachment, release_date: x.m.release_date, open_weights: x.m.open_weights, name: x.m.name }));
  console.log('EVDB: ' + (Object.keys(r.evdb).join(' | ') || 'NONE'));
  for (const [k, v] of Object.entries(r.evdb)) console.log('  ' + k + ': ' + JSON.stringify(v).slice(0, 400));
}
