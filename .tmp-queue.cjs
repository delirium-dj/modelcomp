// Recompute the authoritative queue for STEM MiniMax_M3.1_Flash.
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname);
const STEM = 'MiniMax_M3.1_Flash.md';

// Authoritative RETIRED_SLUGS (scripts/lib/average.mjs + src/data/models.ts).
// space-bunny + cat-jam were merged into minimax-m3.1-flash-preview / beam
// (revealed-stealth merge rule, 2026-10-24) — merged slugs live in
// scripts/lib/validate.mjs MERGED_MODEL_SLUGS, never here.
const RETIRED = new Set(["glm-5.3-free", "gemini-2.5", "qwen-3.5", "kimi-k2.7-code-highspeed", "gemini-3.1-flash", "longcat-2.5"]);

const mr = path.join(ROOT, 'model');
const dirs = fs.readdirSync(mr, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
const q = fs.readFileSync(path.join(ROOT, 'model-queue.md'), 'utf8')
  .split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith('#'))
  .map((l) => l.slice(l.indexOf(' ') + 1));

const has = (d, f) => fs.existsSync(path.join(mr, d, f));

const queue = q.filter((s) => !RETIRED.has(s));
const missing = queue.filter((s) => dirs.includes(s) && !has(s, STEM));
const unlisted = dirs.filter((d) => !q.includes(d) && !RETIRED.has(d)).sort();

console.log('=== QUEUE ORDER: ' + missing.length + ' ===');
missing.forEach((s, i) => console.log(String(i + 1).padStart(2) + '. ' + s + (has(s, STEM + '.excluded') ? '   [TWIN]' : '')));
console.log('\n=== UNLISTED (last, A-Z): ' + unlisted.length + ' ===');
unlisted.forEach((s, i) => console.log(String(i + 1).padStart(2) + '. ' + s + (has(s, STEM + '.excluded') ? '   [TWIN]' : '')));

console.log('\n=== FOLDER CONTENTS (queue-missing only) ===');
for (const s of [...missing, ...unlisted]) {
  const files = fs.readdirSync(path.join(mr, s));
  const mine = files.filter((f) => f === STEM || f === STEM + '.excluded');
  const others = files.filter((f) => f !== STEM && f !== STEM + '.excluded' && f !== 'average.md' && f !== 'meta.json');
  console.log(s.padEnd(24) + ' mine=' + JSON.stringify(mine) + '  nOthers=' + others.length + '  meta=' + has(s, 'meta.json'));
}
