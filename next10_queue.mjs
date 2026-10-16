import fs from 'node:fs';

const queue = fs.readFileSync('model-queue.md', 'utf8')
  .split('\n')
  .map(l => l.trim())
  .filter(l => l && !l.startsWith('#'))
  .map(l => l.replace(/^\d+(\.\d+)?\s+/, ''));

// Exclude parked
const active = queue.filter(slug => slug !== 'gemini-2.5');

console.log('Top 10 models from model-queue.md:');
active.slice(0, 10).forEach((slug, i) => {
  console.log(`${i + 1}: ${slug}`);
});
