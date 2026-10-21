// One-shot: report Zen catalog + AA/modeldev coverage for my target slugs.
const fs = require('fs');
const path = require('path');
const T = process.env.TEMP;
const ROOT = path.resolve(__dirname);
const load = (f) => { const p = path.join(T, f); return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {}; };

const z = load('zen-models.json');
const zenIds = (z.data || []).map((m) => m.id);
console.log('ZEN ids (' + zenIds.length + '):');
console.log(zenIds.join('\n'));

const aa = { ...load('aa-merged.json'), ...load('aa-extra.json') };
const md = load('models-dev.json');
const norm = (s) => String(s).toLowerCase().replace(/[._\s]/g, '-').replace(/-+/g, '-');
const bare = (s) => norm(s).replace(/-/g, '');

const TARGETS = process.argv.slice(2);
console.log('\n\n===== TARGET COVERAGE =====');
for (const t of TARGETS) {
  const w = norm(t), b = bare(t);
  const zen = zenIds.filter((z2) => norm(z2) === w || norm(z2).startsWith(w + '-') || bare(z2) === b);
  const aak = Object.keys(aa).filter((k) => { const n = norm(k); return n === w || bare(n) === b || n.replace(/-/g, '') === b; });
  const aafuzzy = Object.keys(aa).filter((k) => { const n = norm(k); return n.includes(w) && w.length > 5; });
  const mdev = [];
  for (const [prov, p] of Object.entries(md)) {
    for (const [id, m] of Object.entries((p && p.models) || {})) {
      if (norm(id) === w || bare(id) === b) mdev.push(prov + '/' + id);
    }
  }
  console.log('\n### ' + t);
  console.log('  ZEN: ' + (zen.join(' | ') || 'NONE'));
  console.log('  AA-exact: ' + (aak.join(' | ') || 'NONE'));
  console.log('  AA-fuzzy: ' + (aafuzzy.join(' | ') || 'NONE'));
  console.log('  MDEV: ' + (mdev.join(' | ') || 'NONE'));
}
