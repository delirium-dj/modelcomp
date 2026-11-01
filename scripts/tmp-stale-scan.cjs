// scan: findings reports dated older than one week (> cutoff), ranked by queue position
const fs = require('fs');
const CUTOFF = '2026-10-25'; // reports dated BEFORE this are "older than one week" (today = 2026-11-01)

const q = fs.readFileSync('model-queue.md', 'utf8');
const rank = {};
let i = 0;
for (const line of q.split(/\r?\n/)) {
  const m = line.match(/^\s*(\d+(?:\.\d+)?)\s+([a-z0-9._-]+)\s*$/);
  if (m) { i++; rank[m[2]] = { pos: i, overall: Number(m[1]) }; }
}

const stale = [];
let dated = 0, undated = 0;
for (const slug of Object.keys(rank)) {
  const dir = 'model/' + slug;
  let files = [];
  try { files = fs.readdirSync(dir); } catch (e) { continue; }
  for (const f of files) {
    if (f !== 'Qwen_3.8_Max.md' && f !== 'Qwen_3.8_Max.md.excluded') continue; // zero-influence: only my own STEM files
    const t = fs.readFileSync(dir + '/' + f, 'utf8');
    const d = t.match(/- Date:\s*(\d{4}-\d{2}-\d{2})/);
    if (d) {
      dated++;
      if (d[1] < CUTOFF) stale.push({ slug, file: f, date: d[1], pos: rank[slug].pos, overall: rank[slug].overall });
    } else { undated++; }
  }
}
stale.sort((a, b) => a.pos - b.pos);
console.log('queue models:', Object.keys(rank).length, '| dated reports:', dated, '| undated:', undated, '| stale (< ' + CUTOFF + '):', stale.length);
console.log('--- TOP 20 STALE BY QUEUE RANK ---');
for (const s of stale.slice(0, 20)) console.log('#' + s.pos, 'overall=' + s.overall, s.slug, '[' + s.file + ']', 'dated', s.date);
