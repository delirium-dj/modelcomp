// Staleness audit: model-queue.md roster vs Date line in each model/<slug>/Qwen_3.8_Flash.md
const fs = require('fs');
const path = require('path');
const CUTOFF = Date.UTC(2026, 9, 27); // 2026-10-27
const ROOT = process.cwd();
const queue = fs.readFileSync(path.join(ROOT, 'model-queue.md'), 'utf8').split(/\r?\n/);
const slugs = [];
for (const line of queue) {
  const m = line.match(/^\S+\s+([a-z0-9][a-z0-9.\-]*)$/);
  if (m) slugs.push(m[1]);
}
let fresh = 0, stale = 0, missing = 0;
const staleList = [];
for (const slug of slugs) {
  const f = path.join(ROOT, 'model', slug, 'Qwen_3.8_Flash.md');
  if (!fs.existsSync(f)) { missing++; staleList.push(slug + '|MISSING'); continue; }
  const txt = fs.readFileSync(f, 'utf8');
  const dateLine = txt.split(/\r?\n/).find(l => l.includes('Date:')) || '';
  let max = 0;
  for (const dm of dateLine.matchAll(/([0-9]{4})\D+([0-9]{2})\D+([0-9]{2})/g)) {
    const t = Date.UTC(+dm[1], +dm[2] - 1, +dm[3]);
    if (t > max) max = t;
  }
  if (max >= CUTOFF) fresh++;
  else { stale++; staleList.push(slug + '|' + new Date(max).toISOString().slice(0, 10)); }
}
fs.writeFileSync(path.join(ROOT, '.temp', 'stale-list.txt'), staleList.join('\n') + '\n');
const next10 = slugs
  .filter(s => staleList.some(e => e.startsWith(s + '|')))
  .slice(0, 10);
console.log(`total=${slugs.length} fresh=${fresh} stale=${stale} missing=${missing} pending=${stale + missing}`);
console.log('NEXT10: ' + next10.join(', '));
