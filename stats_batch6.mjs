import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (let file of list) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (path.basename(file) === 'Gemini_3.5_Flash_Lite.md') {
      results.push({ path: file, mtime: stat.mtime });
    }
  }
  return results;
}

const files = walk('model');
files.sort((a, b) => a.mtime - b.mtime);

const updatedSlugs = [
  'Inkling', 'beam', 'big-pickle', 'claude-fable-5.1', 'claude-fable-5',
  'claude-haiku-3.5', 'claude-haiku-4.5', 'claude-haiku-5.5', 'claude-mythos-5.1',
  'claude-opus-4.5', 'claude-opus-4.6', 'claude-opus-4.7', 'claude-opus-4.8',
  'claude-opus-5.5', 'claude-opus-5',
  'claude-sonnet-3.5', 'claude-sonnet-3.7', 'claude-sonnet-4.5', 'claude-sonnet-4.6',
  'claude-sonnet-4', 'claude-sonnet-5.4', 'claude-sonnet-5.5', 'claude-sonnet-5',
  'deepseek-v3.2', 'deepseek-v4-flash', 'deepseek-v4-pro', 'deepseek-v4-vision-exp',
  'deepseek-v4.1-flash-1017', 'deepseek-v4.1-flash', 'diffusiongemma-26b-a4b', 'ember-1',
  'exo-free', 'fledge-alpha', 'flint', 'gemini-1.5-pro', 'gemini-2.0-flash',
  'gemini-2.5-flash-lite', 'gemini-2.5-flash', 'gemini-2.5-pro', 'gemini-3-flash', 'gemini-3-pro',
  'gemini-3.1-flash-lite', 'gemini-3.1-pro', 'gemini-3.5-flash-lite', 'gemini-3.5-flash', 'gemini-3.6-flash'
];

const parkedSlugs = ['claude-opus-4.4', 'claude-opus-3.7', 'qwen-3.8-325b', 'glm-5.3-free', 'gemini-2.5', 'qwen-3.5', 'kimi-k2.7-code-highspeed', 'gemini-3.1-flash', 'longcat-2.5'];

const remaining = files.filter(f => {
  const slug = path.basename(path.dirname(f.path));
  if (updatedSlugs.includes(slug)) return false;
  if (parkedSlugs.includes(slug)) return false;
  return true;
});

console.log('Total re-researched count:', updatedSlugs.length);
console.log('Remaining valid models to re-research:', remaining.length);
