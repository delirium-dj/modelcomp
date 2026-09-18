
const fs = require('fs');
const path = require('path');

const modelDir = path.join(__dirname, '../model');

const folders = fs.readdirSync(modelDir).filter(f => fs.statSync(path.join(modelDir, f)).isDirectory());

const allSources = new Set();
const modelEntries = [];
const imports = [];

for (const folder of folders) {
  const folderPath = path.join(modelDir, folder);
  const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.md'));
  
  const modelId = `opencode/${folder}`; // Assuming opencode provider for now, adjust as needed

  const sourceFiles = files.filter(f => f !== 'average.md' && f !== 'README.md');
  sourceFiles.forEach(f => allSources.add(f));

  // Imports
  imports.push(`import avg${folder.replace(/-/g, '')} from "../../model/${folder}/average.md?raw";`);
  sourceFiles.forEach(f => {
    const sourceKey = f.replace('.md', '').replace(/_/g, '');
    imports.push(`import ${sourceKey.toLowerCase()}${folder.replace(/-/g, '')} from "../../model/${folder}/${f}?raw";`);
  });

  // Model entry
  // ... this will be complex, let's just do a basic structure and refine it
}
// ...
