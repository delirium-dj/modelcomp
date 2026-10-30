import fs from 'fs';
import path from 'path';

// Read model-queue.md
const modelQueuePath = 'E:\\qwik\\modelcomp\\model-queue.md';
const modelQueueContent = fs.readFileSync(modelQueuePath, 'utf8');

// Extract all models from model-queue
const lines = modelQueueContent.split('\n');
const topModels = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line && !line.startsWith('#')) {
    const parts = line.split(' ');
    if (parts.length >= 2) {
      const score = parts[0];
      const slug = parts[1];
      topModels.push({ score, slug });
    }
  }
}

// Check which models already have GLM_4.5_Flash.md
const existingModels = new Set();
const modelDir = 'E:\\qwik\\modelcomp\\model';

try {
  const modelDirs = fs.readdirSync(modelDir);
  modelDirs.forEach(dir => {
    const glmFile = path.join(modelDir, dir, 'GLM_4.5_Flash.md');
    if (fs.existsSync(glmFile)) {
      existingModels.add(dir);
    }
  });
} catch (error) {
  console.error('Error reading model directory:', error);
}

// Find missing models among top 20
const missingModels = topModels.filter(model => !existingModels.has(model.slug));

console.log('All models from model-queue.md:');
topModels.forEach((model, index) => {
  console.log(`${index + 1}. ${model.score} - ${model.slug} ${existingModels.has(model.slug) ? '(✓ has GLM_4.5_Flash.md)' : '(✗ missing GLM_4.5_Flash.md)'}`);
});

console.log('\nMissing GLM_4.5_Flash.md files:');
missingModels.forEach((model, index) => {
  console.log(`${index + 1}. ${model.score} - ${model.slug}`);
});

console.log(`\nFirst 10 missing models for research:`);
if (missingModels.length > 0) {
  missingModels.slice(0, 10).forEach((model, index) => {
    console.log(`${index + 1}. ${model.score} - ${model.slug}`);
  });
} else {
  console.log('No missing models found');
}