import fs from 'fs';
import path from 'path';

function checkDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      checkDir(full);
    } else if (full.endsWith('.md') && !full.endsWith('.excluded') && !full.endsWith('average.md') && !full.endsWith('README.md')) {
      const content = fs.readFileSync(full, 'utf8');
      if (!content.includes('**Tool use:')) {
        console.log('FAIL:', full);
      }
    }
  }
}

checkDir('model');
