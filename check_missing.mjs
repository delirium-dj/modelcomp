import fs from 'fs';
import path from 'path';

const queueContent = fs.readFileSync('model-queue.md', 'utf8');
const lines = queueContent.split('\n');
const slugs = [];
for (const line of lines) {
  const match = line.match(/^(\d+(\.\d+)?)\s+([a-z0-9\-\.]+)/);
  if (match) {
    slugs.push(match[3]);
  }
}

const stem = 'Gemini_3.5_Flash_Lite';
const missing = [];
for (const slug of slugs) {
  const filePath = path.join('model', slug, `${stem}.md`);
  const excludedPath = filePath + '.excluded';
  if (!fs.existsSync(filePath) && !fs.existsSync(excludedPath)) {
    missing.push(slug);
  }
}

console.log('Exact missing slugs:', missing);
