import fs from 'fs';
import path from 'path';

// Get all model directories
const modelDir = 'E:\\qwik\\modelcomp\\model';
const modelDirs = fs.readdirSync(modelDir);

// Read model-queue.md
const modelQueuePath = 'E:\\qwik\\modelcomp\\model-queue.md';
const modelQueueContent = fs.readFileSync(modelQueuePath, 'utf8');

// Extract slugs from model-queue.md
const queueSlugs = new Set();
const lines = modelQueueContent.split('\n');
for (const line of lines) {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const parts = trimmed.split(' ');
    if (parts.length >= 2) {
      queueSlugs.add(parts[1]);
    }
  }
}

// Find directories not in model-queue.md
const missingFromQueue = [];
for (const dir of modelDirs) {
  if (!queueSlugs.has(dir)) {
    missingFromQueue.push(dir);
  }
}

console.log('Model directories not in model-queue.md:');
missingFromQueue.sort().forEach((dir, index) => {
  console.log(`${index + 1}. ${dir}`);
});

console.log(`\nTotal models not in queue: ${missingFromQueue.length}`);

// Check which of these missing models don't have GLM_4.5_Flash.md
const missingGlmFiles = [];
for (const dir of missingFromQueue) {
  const glmFile = path.join(modelDir, dir, 'GLM_4.5_Flash.md');
  if (!fs.existsSync(glmFile)) {
    missingGlmFiles.push(dir);
  }
}

console.log('\nModel directories not in queue and missing GLM_4.5_Flash.md:');
missingGlmFiles.sort().forEach((dir, index) => {
  console.log(`${index + 1}. ${dir}`);
});

console.log(`\nTotal models missing GLM_4.5_Flash.md: ${missingGlmFiles.length}`);