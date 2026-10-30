import fs from 'fs';
import path from 'path';

// Read model-queue.md
const modelQueuePath = 'E:\\qwik\\modelcomp\\model-queue.md';
const modelQueueContent = fs.readFileSync(modelQueuePath, 'utf8');

// Extract top models from model-queue
const lines = modelQueueContent.split('\n');
const topModels = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line && !line.startsWith('#')) {
    const parts = line.split(' ');
    if (parts.length >= 2) {
      const score = parts[0];
      const slug = parts[1];
      topModels.push({ score, slug });
    }
  }
}

// Filter for models that have template files (based on our previous check)
const templateModels = [
  'muse-spark-1.3', 'claude-opus-5.5', 'gemini-4-argon', 'gpt-6-astra', 
  'gemini-3.8-flash', 'claude-fable-5.1', 'claude-opus-5', 'claude-sonnet-5.5',
  'claude-fable-5', 'claude-mythos-5.1', 'gemini-3-pro', 'gpt-5.6-sol',
  'gpt-5.5-pro', 'gpt-6.1-sol', 'kimi-k3', 'mimo-v2.6-pro', 'claude-opus-4.8',
  'gpt-5.5', 'muse-spark-1.2', 'qwen-3.8-max', 'glm-5.3-flash', 'gpt-5.4-pro',
  'muse-wonder-full', 'gemini-3.5-flash', 'claude-opus-4.6', 'gemini-3.6-flash',
  'gpt-5.6-terra', 'claude-sonnet-5', 'kimi-k3.1-pro', 'mimo-v2.6-flash',
  'muse-spark-1.1', 'gpt-6-sol', 'gemini-3-flash', 'gemini-3.8-flash-cyber',
  'glm-5.3-flashx', 'qwen-3.8-flash', 'qwen3.8-max', 'minimax-m3', 'claude-sonnet-4.6',
  'gpt-5.4', 'grok-4.6', 'claude-sonnet-5.4', 'ember-1', 'mimo-v2.6-free',
  'step-5-preview', 'gemini-2.5-pro', 'gpt-5.2', 'qwen-3.7-plus', 'inkling-small',
  'qwen-3.8-27b', 'qwen-3.6-plus', 'grok-4.7', 'kimi-k2.6', 'Inkling',
  'deepseek-v4-vision-exp', 'grok-4.5', 'muse-wonder', 'qwen3.8', 'gpt-5.3-codex',
  'qwen-3.8-flash-next', 'qwen-3.5-plus', 'seed-2.0-pro', 'gpt-5.6-luna',
  'deepseek-v4-pro', 'deepseek-v4.1-flash-1017', 'mistral-large-4', 'grok-4.3',
  'gpt-5.1', 'pareto-26.10-preview', 'gpt-5', 'qwen-3.5-397b', 'gpt-6-luna',
  'gpt-6.1-terra', 'claude-haiku-5.5', 'qwen-3.7-max', 'kimi-k2.5', 'claude-opus-4.5',
  'nemotron-3.5-super-vl', 'gemini-3.5-flash-lite', 'kimi-k2.7-code', 'glm-5.3-flash-x',
  'qwen-3.7', 'mimo-v2.5-free', 'grok-4.1-fast', 'claude-sonnet-4.5', 'gemma-4-31b',
  'grok-4', 'gpt-5.2-codex', 'grok-4-fast', 'grok-4.20', 'gpt-5.2-pro',
  'qwen-3.5-122b-a10b', 'gpt-5.4-mini', 'kimi-k2.8-preview', 'qoder-sonus',
  'glm-5.3', 'grok-4.1', 'qwen-3.5-27b', 'union-alpha', 'gemini-2.5-flash',
  'claude-sonnet-4', 'minimax-m3.1-flash-preview', 'muse-glimmer-30b',
  'gemini-3.1-flash-lite', 'qwen-3.5-flash-lite', 'claude-sonnet-3.7', 'gpt-5.1-codex',
  'qwen-3.5-35b-a3b', 'gemini-1.5-pro', 'glm-5.2-coding', 'gemma-4.26b-a4b',
  'gemma-4.12b-unified', 'qwen-3.5-flash', 'ling-3.0-flash-vl', 'gemini-2.0-flash',
  'mistral-medium-3.5', 'gpt-5.1-codex-max', 'deepseek-v4-flash', 'gpt-5.4-nano',
  'mimo-v2.5-pro', 'claude-haiku-4.5', 'glm-5.2', 'nemotron-3.5-bolt-74b-a9b',
  'gemini-2.5-flash-lite', 'mai-code-1.1-flash', 'hy4', 'nemotron-3-nano-omni',
  'claude-sonnet-3.5', 'beam', 'gpt-5-codex', 'qwen-3.5-9b', 'fledge-alpha',
  'gemma-4-26b-a4b', 'longcat-2.5-preview', 'gemma-4-12b-unified', 'grok-build-0.1',
  'nemotron-3-ultra-free', 'qwen3-max', 'hy3', 'longcat-2.0', 'glm-5.1',
  'hy3-preview', 'diffusiongemma-26b-a4b', 'solar-open-2', 'ling-3.1-flash',
  'solar-pro-4', 'grok-5', 'ring-2.6.1t', 'mai-thinking-1', 'minimax-m2.5',
  'pixel_canary', 'minimax-m2.7', 'gpt-5-nano', 'claude-haiku-3.5', 'laguna-s-2.1',
  'deepseek-v3.2', 'qwen-3.5-4b', 'omen-alpha', 'glm-5', 'gpt-5.3-codex-spark',
  'leanstral-1.5', 'qwen-3.7-flash', 'ling-3.0-flash', 'gpt-5.1-codex-mini',
  'ling-2.6.1t', 'owl-alpha', 'glm-4.6-flash', 'glm-4.6v-flash', 'xing_4.0_29b_a4b',
  'gemma-4-e4b', 'mai-code-1-flash', 'mimo-v2.6-distill-qwen-9b', 'gpt-oss-120b',
  'laguna-xs-2.1', 'llama_3.2_vision_instruct', 'ling-3.0-flash-sante', 'flint',
  'glm-4.7-flash', 'solar-mini-4', 'north_mini_code', 'big-pickle', 'gpt-oss-120b-lite',
  'nemotron-3.5-lightning-free', 'exo-free', 'ling-2.6-flash', 'glm-4.5-flash',
  'gemma-4-e2b', 'mercury-2.5', 'qwen-3.5-2b', 'ling-3.0-tiny', 'neomorph',
  'omi-alpha', 'mai-experimental-test', 'owo-2.5', 'nemotron-3.5-bolt-e4b',
  'jev-1.13', 'qwen-3.5-0.8b'
];

// Find the top 10 models that are in both the queue and have template files
const top10ForResearch = [];
for (const model of topModels) {
  if (templateModels.includes(model.slug)) {
    top10ForResearch.push(model);
    if (top10ForResearch.length >= 10) {
      break;
    }
  }
}

console.log('Top 10 highest-ranked models with template GLM_4.5_Flash.md files:');
top10ForResearch.forEach((model, index) => {
  console.log(`${index + 1}. ${model.score} - ${model.slug}`);
});

// Write the list to a file for reference
const output = top10ForResearch.map((model, index) => 
  `${index + 1}. ${model.score} - ${model.slug}`
).join('\n');

fs.writeFileSync('top10_for_research.txt', output, 'utf8');
console.log('\nList saved to top10_for_research.txt');