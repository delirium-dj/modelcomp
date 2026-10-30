import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read model-queue.md
const queueContent = fs.readFileSync('E:\\\\qwik\\\\modelcomp\\\\model-queue.md', 'utf8');
const lines = queueContent.split('\n').filter(line => line.trim() && !line.startsWith('#'));

// Extract models from position 21-30 from queue
const models21to30 = lines.slice(20, 30).map(line => {
  const parts = line.split(' ');
  const score = parts[0];
  const slug = parts.slice(1).join(' ');
  return { score, slug };
});

console.log('Models 21-30 from queue:');
models21to30.forEach((model, index) => {
  console.log(`${index + 21}. ${model.score} ${model.slug}`);
});

// Check which of these have template GLM_4.5_Flash.md files
const templateModels = [];
const completeModels = [];

models21to30.forEach(model => {
  const filePath = `E:\\\\qwik\\\\modelcomp\\\\model\\\\${model.slug}\\\\GLM_4.5_Flash.md`;
  
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

console.log('\nModels with template GLM_4.5_Flash.md files (21-30):');
templateModels.forEach((model, index) => {
  console.log(`${index + 21}. ${model.score} ${model.slug}`);
});

console.log('\nModels with complete GLM_4.5_Flash.md files (21-30):');
completeModels.forEach((model, index) => {
  console.log(`${index + 21}. ${model.score} ${model.slug}`);
});

// Save the list of template models for research
if (templateModels.length > 0) {
  fs.writeFileSync('models21to30_template.txt', templateModels.map(m => `${m.score} ${m.slug}`).join('\n'));
  console.log('\nTemplate models 21-30 saved to models21to30_template.txt');
}