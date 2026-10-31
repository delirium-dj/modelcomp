import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read model-queue.md
const queueContent = fs.readFileSync('E:\\qwik\\modelcomp\\model-queue.md', 'utf8');
const lines = queueContent.split('\n').filter(line => line.trim() && !line.startsWith('#'));

// Extract models from position 31-40 from queue
const models31to40 = lines.slice(30, 40).map(line => {
  const parts = line.split(' ');
  const score = parts[0];
  const slug = parts.slice(1).join(' ');
  return { score, slug };
});

console.log('Models 31-40 from queue:');
models31to40.forEach((model, index) => {
  console.log(`${index + 31}. ${model.score} ${model.slug}`);
});

// Check which of these have template GLM_4.5_Flash.md files
const templateModels = [];
const completeModels = [];

models31to40.forEach(model => {
  const filePath = `E:\\qwik\\modelcomp\\model\\${model.slug}\\GLM_4.5_Flash.md`;
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('> TEMPLATE — do not commit as-is')) {
      templateModels.push(model);
    } else {
      completeModels.push(model);
    }
  } else {
    console.log(`Model directory not found: ${model.slug}`);
  }
});

console.log('\nModels with template GLM_4.5_Flash.md files (31-40):');
templateModels.forEach((model, index) => {
  console.log(`${index + 31}. ${model.score} ${model.slug}`);
});

console.log('\nModels with complete GLM_4.5_Flash.md files (31-40):');
completeModels.forEach((model, index) => {
  console.log(`${index + 31}. ${model.score} ${model.slug}`);
});

// Save the list of template models for research
if (templateModels.length > 0) {
  fs.writeFileSync('models31to40_template.txt', templateModels.map(m => `${m.score} ${m.slug}`).join('\n'));
  console.log('\nTemplate models 31-40 saved to models31to40_template.txt');
}