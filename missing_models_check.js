import fs from 'fs';
import path from 'path';

// Get all model directories
const modelDir = 'E:\\qwik\\modelcomp\\model';
const models = fs.readdirSync(modelDir);

// Models that already have GLM_4.5_Flash.md files (from the previous glob command)
const existingModels = [
  'step-5-preview',
  'claude-opus-4.8',
  'claude-opus-4.7',
  'claude-opus-4.6',
  'claude-fable-5.1',
  'claude-fable-5',
  'qwen3.8',
  'claude-haiku-5.5',
  'claude-mythos-5.1',
  'claude-opus-5.5',
  'deepseek-v4.1-flash',
  'claude-opus-5',
  'claude-sonnet-5.4',
  'qwen-3.8-max',
  'claude-sonnet-5.5',
  'gpt-6-astra',
  'qwen-3.8-flash-next',
  'gemini-3.1-pro',
  'gpt-5.6-terra',
  'gemini-3.7-flash',
  'qwen-3.8-flash',
  'gemini-4-argon',
  'gpt-5.6-sol',
  'gemini-3.6-flash',
  'gpt-5.6-luna',
  'glm-5.3-flash',
  'gemini-3-pro',
  'gpt-5.5-pro',
  'gemini-3.5-flash',
  'qwen-3.8',
  'glm-5.3-flashx',
  'gpt-5.5',
  'qwen-3.7-plus',
  'gpt-5.4-pro',
  'qwen-3.7-max',
  'gpt-5.2-pro',
  'ember-1',
  'muse-spark-1.2',
  'grok-4-fast',
  'gpt-6.1-sol',
  'grok-4.1',
  'kimi-k3',
  'qwen-3.5-plus',
  'gpt-6-sol',
  'grok-4.5',
  'mistral-large-4',
  'deepseek-v4-vision-exp',
  'minimax-m3',
  'mimo-v2.6-free',
  'mimo-v2.6-pro',
  'muse-wonder-1.0',
  'muse-wonder',
  'muse-spark-1.3'
];

// Find models missing GLM_4.5_Flash.md files
const missingModels = models.filter(model => {
  const modelPath = path.join(modelDir, model);
  const stats = fs.statSync(modelPath);
  if (stats.isDirectory() && !existingModels.includes(model)) {
    const glmFile = path.join(modelPath, 'GLM_4.5_Flash.md');
    return !fs.existsSync(glmFile);
  }
  return false;
});

console.log('Models missing GLM_4.5_Flash.md files:');
missingModels.forEach(model => {
  console.log(model);
});

console.log(`\nTotal missing: ${missingModels.length}`);