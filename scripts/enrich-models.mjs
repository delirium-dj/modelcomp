import fs from 'node:fs';
import path from 'node:path';

const modelDir = path.resolve('model');
const entries = fs.readdirSync(modelDir, { withFileTypes: true });

let updatedCount = 0;

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const slug = entry.name;
  const metaPath = path.join(modelDir, slug, 'meta.json');

  if (!fs.existsSync(metaPath)) continue;

  try {
    const raw = fs.readFileSync(metaPath, 'utf8');
    const meta = JSON.parse(raw);

    // Enrich with officialUrl if missing
    if (!meta.officialUrl) {
      // Infer or assign official URL based on slug/name
      if (slug.includes('step')) {
        meta.officialUrl = 'https://www.stepfun.com';
      } else if (slug.includes('gemini')) {
        meta.officialUrl = 'https://deepmind.google/technologies/gemini/';
      } else if (slug.includes('gpt') || slug.includes('codex')) {
        meta.officialUrl = 'https://openai.com';
      } else if (slug.includes('claude')) {
        meta.officialUrl = 'https://anthropic.com';
      } else if (slug.includes('grok')) {
        meta.officialUrl = 'https://x.ai';
      } else if (slug.includes('deepseek')) {
        meta.officialUrl = 'https://deepseek.com';
      } else if (slug.includes('glm')) {
        meta.officialUrl = 'https://zhipuai.cn';
      } else if (slug.includes('qwen')) {
        meta.officialUrl = 'https://qwenlm.github.io';
      } else if (slug.includes('gemma')) {
        meta.officialUrl = 'https://ai.google.dev/gemma';
      } else if (slug.includes('solar')) {
        meta.officialUrl = 'https://upstage.ai';
      } else {
        meta.officialUrl = `https://huggingface.co/models?search=${slug}`;
      }

      fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n', 'utf8');
      console.log(`Enriched ${slug} with officialUrl: ${meta.officialUrl}`);
      updatedCount++;
    }
  } catch (err) {
    console.error(`Error processing ${slug}:`, err);
  }
}

console.log(`Successfully enriched ${updatedCount} model meta.json files.`);
