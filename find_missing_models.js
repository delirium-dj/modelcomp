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

// Read existing GLM_4.5_Flash.md files
const existingGlob = fs.readdirSync('E:\\qwik\\modelcomp\\model', { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(modelName => {
    const filePath = `E:\\qwik\\modelcomp\\model\\${modelName}\\GLM_4.5_Flash.md`;
    return fs.existsSync(filePath);
  });

console.log('Models with GLM_4.5_Flash.md files:', existingGlob.length);
console.log('Total models:', models.length);

// Find models missing GLM_4.5_Flash.md files
const missingModels = models.filter(model => !existingGlob.includes(model));

console.log('\nModels missing GLM_4.5_Flash.md files:', missingModels.length);
if (missingModels.length > 0) {
  console.log('\nMissing models:');
  missingModels.forEach(model => console.log(model));
}

// Save the list of missing models
fs.writeFileSync('missing_models.txt', missingModels.join('\n'));
console.log('\nList saved to missing_models.txt');