// Build the definitive research queue for STEM MiniMax_M3.1_Flash.
// Usage: node .tmp-queue.cjs
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const STEM = 'MiniMax_M3.1_Flash';
const RETIRED = new Set(['glm-5.3-free', 'gemini-2.5', 'qwen-3.5']);
const MERGED = new Map([
  ['google-gemini-2.5-flash-lite', 'gemini-2.5-flash-lite'],
  ['glm-5.1-coding', 'glm-5.1'],
  ['embe-1', 'ember-1'],
]);

// 1. queue file order
const qLines = fs
  .readFileSync(path.join(ROOT, 'model-queue.md'), 'utf8')
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith('#'));
const qSlugs = [];
const qScores = new Map();
for (const l of qLines) {
  const m = l.match(/^(\d+(?:\.\d+)?)\s+(\S+)$/);
  if (!m) continue;
  qScores.set(m[2], m[1]);
  if (!qSlugs.includes(m[2])) qSlugs.push(m[2]);
}

// 2. disk folders
const modelDir = path.join(ROOT, 'model');
const disk = fs.readdirSync(modelDir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);

// 3. folders holding my file (incl. .excluded twin)
const mine = new Set();
for (const slug of disk) {
  const p = path.join(modelDir, slug, STEM + '.md');
  if (fs.existsSync(p)) mine.add(slug);
}

const unlisted = disk.filter((s) => !qSlugs.includes(s)).sort();
const missing = [];
for (const s of qSlugs) if (!mine.has(s)) missing.push(s);
for (const s of unlisted) if (!mine.has(s)) missing.push(s);

const parked = missing.filter((s) => RETIRED.has(s));
const merged = missing.filter((s) => MERGED.has(s));
const todo = missing.filter((s) => !RETIRED.has(s) && !MERGED.has(s));

console.log('queue-file slugs:', qSlugs.length, '| disk folders:', disk.length, '| already have my file:', mine.size);
console.log('missing total:', missing.length, '| parked:', parked.join(', '), '| merged:', merged.join(', '));
console.log('TODO count:', todo.length);
console.log('--- TODO (in order) ---');
todo.forEach((s, i) => {
  const sc = qScores.get(s);
  const twins = ['md.excluded'].filter((e) => fs.existsSync(path.join(modelDir, s, STEM + '.' + e)));
  console.log(
    String(i + 1).padStart(3) + '. ' + s.padEnd(38) + ' overall=' + (sc || 'UNLISTED').padEnd(7) + ' twins=' + (twins.join('|') || '-')
  );
});
console.log('--- UNLISTED (no average.md) ---');
console.log(unlisted.join(', '));
