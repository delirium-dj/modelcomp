import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read all model directories
const modelDir = 'E:\\qwik\\modelcomp\\model';
const models = fs.readdirSync(modelDir).filter(item => 
  fs.statSync(path.join(modelDir, item)).isDirectory()
);

// Find models with template GLM_4.5_Flash.md files
const templateModels = [];
const completeModels = [];

models.forEach(model => {
  const filePath = `E:\\qwik\\modelcomp\\model\\${model}\\GLM_4.5_Flash.md`;
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('> TEMPLATE — do not commit as-is')) {
      templateModels.push(model);
    } else {
      completeModels.push(model);
    }
  }
});

console.log('Models with template GLM_4.5_Flash.md files:', templateModels.length);
console.log('Models with complete GLM_4.5_Flash.md files:', completeModels.length);
console.log('Total models:', models.length);

console.log('\nTemplate models:');
templateModels.forEach(model => console.log(model));

console.log('\nComplete models (first 20):');
completeModels.slice(0, 20).forEach(model => console.log(model));

// Save the lists
fs.writeFileSync('template_models.txt', templateModels.join('\n'));
fs.writeFileSync('complete_models.txt', completeModels.join('\n'));
console.log('\nLists saved to template_models.txt and complete_models.txt');