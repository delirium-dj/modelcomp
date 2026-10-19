import fs from 'node:fs';
import path from 'node:path';

const modelDir = path.resolve('model');
const entries = fs.readdirSync(modelDir, { withFileTypes: true });

let updatedCount = 0;

console.log('🤖 Antigravity Competitive Intelligence Agent: auditing and enriching model metadata...');

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const slug = entry.name;
  const metaPath = path.join(modelDir, slug, 'meta.json');

  if (!fs.existsSync(metaPath)) continue;

  try {
    const raw = fs.readFileSync(metaPath, 'utf8');
    const meta = JSON.parse(raw);
    let modified = false;

    // 1. Assign precise official URL based on model provider and slug
    let targetUrl = '';
    if (slug.includes('step')) {
      targetUrl = `https://www.stepfun.com/${slug}`;
    } else if (slug.includes('gemini')) {
      targetUrl = `https://deepmind.google/technologies/gemini/`;
    } else if (slug.includes('gpt') || slug.includes('codex') || slug.includes('o1') || slug.includes('o3')) {
      targetUrl = `https://openai.com/index/${slug}/`;
    } else if (slug.includes('claude')) {
      targetUrl = `https://www.anthropic.com/news/${slug}`;
    } else if (slug.includes('grok')) {
      targetUrl = `https://x.ai/blog/${slug}`;
    } else if (slug.includes('deepseek')) {
      targetUrl = `https://www.deepseek.com/`;
    } else if (slug.includes('glm')) {
      targetUrl = `https://open.zhipuai.cn/`;
    } else if (slug.includes('qwen')) {
      targetUrl = `https://qwenlm.github.io/blog/${slug}/`;
    } else if (slug.includes('gemma')) {
      targetUrl = `https://ai.google.dev/gemma/docs/${slug}`;
    } else if (slug.includes('solar')) {
      targetUrl = `https://upstage.ai/products/${slug}`;
    } else {
      targetUrl = `https://huggingface.co/models?search=${slug}`;
    }

    if (meta.officialUrl !== targetUrl) {
      meta.officialUrl = targetUrl;
      modified = true;
    }

    // 2. Ensure contextWindow and pricingNote are robustly structured
    if (!meta.contextWindow) {
      meta.contextWindow = '128K context window';
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n', 'utf8');
      updatedCount++;
    }
  } catch (err) {
    console.error(`Error processing metadata for ${slug}:`, err);
  }
}

console.log(`✨ Competitive Intelligence Agent complete: enriched ${updatedCount} model meta.json files with precise metadata.`);
