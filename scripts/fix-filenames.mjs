import fs from 'node:fs';
import path from 'node:path';

const modelDir = path.resolve('model');
const dirs = fs.readdirSync(modelDir, { withFileTypes: true });

let fixedCount = 0;
let removedCount = 0;

for (const dir of dirs) {
  if (!dir.isDirectory()) continue;
  const folderPath = path.join(modelDir, dir.name);
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    if (file.includes(' ') && file.endsWith('.md')) {
      const oldPath = path.join(folderPath, file);
      const fixedName = file.replace(/ /g, '_');
      const newPath = path.join(folderPath, fixedName);

      if (fs.existsSync(newPath)) {
        // Correct filename already exists, remove invalid file
        fs.unlinkSync(oldPath);
        console.log(`Removed duplicate invalid file: ${dir.name}/${file}`);
        removedCount++;
      } else {
        // Rename to valid filename
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${dir.name}/${file} -> ${fixedName}`);
        fixedCount++;
      }
    }
  }
}

console.log(`Finished: ${fixedCount} renamed, ${removedCount} duplicates removed.`);
