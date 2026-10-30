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

// Check for potential mismatches between queue and directories
console.log('Checking for potential directory name mismatches...\n');

// Check if any queue slug has a different directory name
const potentialMismatches = [];
for (const queueSlug of queueSlugs) {
  const foundDir = modelDirs.find(dir => 
    dir.toLowerCase() === queueSlug.toLowerCase() || 
    dir.replace(/[-_]/g, '') === queueSlug.replace(/[-_]/g, '')
  );
  
  if (!foundDir) {
    potentialMismatches.push({
      queueSlug,
      status: 'NOT_FOUND_IN_DIRECTORIES'
    });
  } else if (foundDir !== queueSlug) {
    potentialMismatches.push({
      queueSlug,
      directory: foundDir,
      status: 'NAME_MISMATCH'
    });
  }
}

// Check if any directory doesn't match a queue slug
const directoriesNotInQueue = [];
for (const dir of modelDirs) {
  if (dir !== 'README.md' && dir !== 'temp_documentation_complete_20261024_210312.txt' && 
      dir !== 'temp_research_completed_20261024_205428.txt' && !queueSlugs.has(dir)) {
    directoriesNotInQueue.push(dir);
  }
}

console.log('Potential mismatches:');
potentialMismatches.forEach((mismatch, index) => {
  console.log(`${index + 1}. ${mismatch.queueSlug} - ${mismatch.status}`);
  if (mismatch.directory) {
    console.log(`   Directory found: ${mismatch.directory}`);
  }
});

console.log(`\nDirectories not in queue (excluding docs):`);
directoriesNotInQueue.sort().forEach((dir, index) => {
  console.log(`${index + 1}. ${dir}`);
});

console.log(`\nSummary:`);
console.log(`- Models in queue: ${queueSlugs.size}`);
console.log(`- Model directories: ${modelDirs.length - 3} (excluding docs)`);
console.log(`- Potential mismatches: ${potentialMismatches.length}`);
console.log(`- Directories not in queue: ${directoriesNotInQueue.length}`);