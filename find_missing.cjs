// Find missing Laguna_S_2.1.md files in queue order
const fs = require('fs');
const path = require('path');

const queueContent = fs.readFileSync('model-queue.md', 'utf8');
const queueLines = queueContent.split('\n').filter(l => /^\d+\.\d+/.test(l.trim()));
const slugs = queueLines.map(l => l.trim().split(/\s+/)[1]);

const modelDir = path.join('model');
const existing = [];
const missing = [];

for (const slug of slugs) {
    const filePath = path.join(modelDir, slug, 'Laguna_S_2.1.md');
    if (fs.existsSync(filePath)) {
        existing.push(slug);
    } else {
        missing.push(slug);
    }
}

console.log('=== First 25 missing models from queue: ===');
missing.slice(0, 25).forEach((s, i) => console.log(`${i+1}. ${s}`));
console.log(`\nTotal missing: ${missing.length}`);
console.log(`Total existing: ${existing.length}`);
