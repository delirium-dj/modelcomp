import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const scratchDir = path.join(rootDir, 'tasks', 'gemma-scratch');

async function fetchJson(url, options = {}) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    return null;
  }
}

function normalizeSlug(slug) {
  return slug.toLowerCase().trim();
}

function slugToQuery(slug) {
  return slug.replace(/[-_]/g, ' ');
}

async function fetchModelData(slug) {
  const normSlug = normalizeSlug(slug);
  const query = slugToQuery(normSlug);
  const results = {
    slug: normSlug,
    query,
    timestamp: new Date().toISOString().split('T')[0],
    openRouter: null,
    huggingFace: null,
    existingAverage: null,
  };

  // 1. Check local model/<slug>/average.md if it exists for pre-parsed baseline scores
  const avgPath = path.join(rootDir, 'model', normSlug, 'average.md');
  if (fs.existsSync(avgPath)) {
    try {
      results.existingAverage = fs.readFileSync(avgPath, 'utf8');
    } catch (_) {}
  }

  // 2. Fetch from OpenRouter models endpoint
  const openRouterRes = await fetchJson('https://openrouter.ai/api/v1/models');
  if (openRouterRes && Array.isArray(openRouterRes.data)) {
    const match = openRouterRes.data.find(
      (m) =>
        m.id.toLowerCase().includes(normSlug) ||
        normSlug.split('-').every((part) => m.id.toLowerCase().includes(part)) ||
        m.name.toLowerCase().includes(query)
    );
    if (match) {
      results.openRouter = {
        id: match.id,
        name: match.name,
        description: match.description,
        context_length: match.context_length,
        pricing: match.pricing,
        architecture: match.architecture,
      };
    }
  }

  // 3. Fetch from Hugging Face models API
  const hfRes = await fetchJson(`https://huggingface.co/api/models?search=${encodeURIComponent(query)}&limit=3`);
  if (hfRes && Array.isArray(hfRes)) {
    const bestHf = hfRes[0];
    if (bestHf) {
      results.huggingFace = {
        id: bestHf.id,
        downloads: bestHf.downloads,
        likes: bestHf.likes,
        tags: bestHf.tags,
      };
    }
  }

  return results;
}

function formatScratchFile(data) {
  const lines = [];
  lines.push(`slug: ${data.slug}`);
  lines.push(`date: ${data.timestamp}`);
  lines.push(`search_query: ${data.query}`);
  lines.push('');
  lines.push('--- MODEL SPECS & API DATA ---');

  if (data.openRouter) {
    const or = data.openRouter;
    lines.push(`OpenRouter ID: ${or.id}`);
    lines.push(`Name: ${or.name}`);
    lines.push(`Context Window: ${or.context_length ? or.context_length + ' tokens' : 'Unknown'}`);
    if (or.pricing) {
      const pIn = or.pricing.prompt ? (parseFloat(or.pricing.prompt) * 1e6).toFixed(2) : '0.00';
      const pOut = or.pricing.completion ? (parseFloat(or.pricing.completion) * 1e6).toFixed(2) : '0.00';
      lines.push(`Pricing: $${pIn} / 1M input, $${pOut} / 1M output`);
    }
    if (or.architecture) {
      lines.push(`Modality: ${or.architecture.modality || 'text->text'}`);
      lines.push(`Tokenizer: ${or.architecture.tokenizer || 'standard'}`);
    }
    if (or.description) {
      lines.push(`Description: ${or.description.slice(0, 200)}...`);
    }
  } else {
    lines.push('OpenRouter Specs: No exact match found via API search');
  }

  if (data.huggingFace) {
    lines.push(`HuggingFace Model: ${data.huggingFace.id}`);
  }

  lines.push('');
  lines.push('--- BENCHMARK SNIPPETS ---');

  if (data.existingAverage) {
    lines.push('Existing model average summary:');
    const scoreLines = data.existingAverage
      .split('\n')
      .filter((l) => l.startsWith('- **') || l.includes('Overall Score:'));
    for (const s of scoreLines) {
      lines.push(`  ${s.trim()}`);
    }
  } else {
    lines.push('Note: Model folder is new or missing average.md baseline');
  }

  return lines.join('\n');
}

async function main() {
  const slugArg = process.argv[2];
  if (!slugArg) {
    console.error('Usage: node scripts/gemma-fetch.mjs <slug>');
    process.exit(1);
  }

  const slug = normalizeSlug(slugArg);
  console.log(`[gemma-fetch] Fetching data for slug: ${slug}...`);

  if (!fs.existsSync(scratchDir)) {
    fs.mkdirSync(scratchDir, { recursive: true });
  }

  const data = await fetchModelData(slug);
  const content = formatScratchFile(data);

  const outFile = path.join(scratchDir, `${slug}.txt`);
  fs.writeFileSync(outFile, content, 'utf8');

  const wordCount = content.split(/\s+/).length;
  console.log(`[gemma-fetch] Saved scratch snippet to tasks/gemma-scratch/${slug}.txt (~${wordCount} words)`);
}

main();
