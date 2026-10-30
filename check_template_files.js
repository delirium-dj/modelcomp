import fs from 'fs';
import path from 'path';

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

// Check each model in queue for template files
const modelDir = 'E:\\qwik\\modelcomp\\model';
const templateFiles = [];

for (const slug of queueSlugs) {
  const glmFile = path.join(modelDir, slug, 'GLM_4.5_Flash.md');
  
  if (fs.existsSync(glmFile)) {
    const content = fs.readFileSync(glmFile, 'utf8');
    
    // Check if it's a template file (contains TEMPLATE notice)
    if (content.includes('TEMPLATE — do not commit as-is') || 
        content.includes('Estimated based on general model capabilities') ||
        content.includes('no verified public score found')) {
      templateFiles.push({
        slug,
        status: 'TEMPLATE'
      });
    }
  }
}

console.log('Models in queue with template GLM_4.5_Flash.md files:');
templateFiles.forEach((file, index) => {
  console.log(`${index + 1}. ${file.slug} - ${file.status}`);
});

console.log(`\nTotal template files found: ${templateFiles.length}`);

// Also check for directories not in queue that might need GLM_4.5_Flash.md
const modelDirs = fs.readdirSync(modelDir);
const directoriesNotInQueue = [];

for (const dir of modelDirs) {
  // Skip documentation files
  if (dir === 'README.md' || dir === 'temp_documentation_complete_20261024_210312.txt' || 
      dir === 'temp_research_completed_20261024_205428.txt') {
    continue;
  }
  
  if (!queueSlugs.has(dir)) {
    directoriesNotInQueue.push(dir);
  }
}

console.log('\nDirectories not in model-queue.md:');
directoriesNotInQueue.sort().forEach((dir, index) => {
  console.log(`${index + 1}. ${dir}`);
});

console.log(`\nTotal directories not in queue: ${directoriesNotInQueue.length}`);

// Check which of these directories don't have GLM_4.5_Flash.md
const missingGlmFiles = [];
for (const dir of directoriesNotInQueue) {
  const glmFile = path.join(modelDir, dir, 'GLM_4.5_Flash.md');
  if (!fs.existsSync(glmFile)) {
    missingGlmFiles.push(dir);
  }
}

console.log('\nDirectories not in queue and missing GLM_4.5_Flash.md:');
missingGlmFiles.sort().forEach((dir, index) => {
  console.log(`${index + 1}. ${dir}`);
});

console.log(`\nTotal missing GLM_4.5_Flash.md files: ${missingGlmFiles.length}`);