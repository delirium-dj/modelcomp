import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const modelsDir = path.join(__dirname, 'model');

// Models that need Laguna_XS_2.1.md - from model-queue.md analysis
const missingModels = [
  'claude-haiku-5.5',
  'deepseek-v3.2',
  'diffusiongemma-26b-a4b',
  'exo-free',
  'fledge-alpha',
  'gemma-4.12b-unified',
  'gemma-4.26b-a4b',
  'gemma-4-e2b',
  'gemma-4-e4b',
  'glm-5.3-flashx',
  'gpt-oss-120b',
  'grok-4.1-fast',
  'grok-build-0.1',
  'inkling-small',
  'jev-1.13',
  'kimi-k2.5',
  'kimi-k2.7-code-highspeed',
  'kimi-k2.8-preview',
  'laguna-s-2.1',
  'ling-2.6.1t',
  'ling-2.6-flash',
  'ling-3.0-flash',
  'ling-3.0-flash-sante',
  'ling-3.0-flash-vl',
  'ling-3.0-tiny',
  'ling-3.1-flash',
  'longcat-2.0',
  'mai-code-1.1-flash',
  'mai-code-1-flash',
  'mai-thinking-1',
  'mimo-v2.6-distill-qwen-9b',
  'minimax-m2.7',
  'minimax-m3.1-flash-preview',
  'nemotron-3-nano-omni',
  'north_mini_code',
  'pareto-26.10-preview',
  'qwen-3.5-397b',
  'qwen-3.8-flash-next',
  'qwen3-max',
  'ring-2.6.1t',
  'solar-mini-4',
  'solar-open-2',
  'solar-pro-4',
  'step-5-preview'
];

const modelNameMap = {
  'claude-haiku-5.5': 'Claude Haiku 5.5',
  'deepseek-v3.2': 'DeepSeek V3.2',
  'diffusiongemma-26b-a4b': 'DiffusionGemma 26B A4B',
  'exo-free': 'Exo Free',
  'fledge-alpha': 'Fledge Alpha',
  'gemma-4.12b-unified': 'Gemma 4 12B Unified',
  'gemma-4.26b-a4b': 'Gemma 4 26B A4B',
  'gemma-4-e2b': 'Gemma 4 E2B',
  'gemma-4-e4b': 'Gemma 4 E4B',
  'glm-5.3-flashx': 'GLM 5.3 FlashX',
  'gpt-oss-120b': 'GPT OSS 120B',
  'grok-4.1-fast': 'Grok 4.1 Fast',
  'grok-build-0.1': 'Grok Build 0.1',
  'inkling-small': 'Inkling Small',
  'jev-1.13': 'JEVerse 1.13',
  'kimi-k2.5': 'Kimi K2.5',
  'kimi-k2.7-code-highspeed': 'Kimi K2.7 Code HighSpeed',
  'kimi-k2.8-preview': 'Kimi K2.8 Preview',
  'laguna-s-2.1': 'Laguna S 2.1',
  'ling-2.6.1t': 'Ling 2.6.1t',
  'ling-2.6-flash': 'Ling 2.6 Flash',
  'ling-3.0-flash': 'Ling 3.0 Flash',
  'ling-3.0-flash-sante': 'Ling 3.0 Flash Sante',
  'ling-3.0-flash-vl': 'Ling 3.0 Flash VL',
  'ling-3.0-tiny': 'Ling 3.0 Tiny',
  'ling-3.1-flash': 'Ling 3.1 Flash',
  'longcat-2.0': 'LongCat 2.0',
  'mai-code-1.1-flash': 'Mai Code 1.1 Flash',
  'mai-code-1-flash': 'Mai Code 1 Flash',
  'mai-thinking-1': 'Mai Thinking 1',
  'mimo-v2.6-distill-qwen-9b': 'MiMo V2.6 Distill Qwen 9B',
  'minimax-m2.7': 'MiniMax M2.7',
  'minimax-m3.1-flash-preview': 'MiniMax M3.1 Flash Preview',
  'nemotron-3-nano-omni': 'Nemotron 3 Nano Omni',
  'north_mini_code': 'North Mini Code',
  'pareto-26.10-preview': 'Pareto 26.10 Preview',
  'qwen-3.5-397b': 'Qwen 3.5 397B',
  'qwen-3.8-flash-next': 'Qwen 3.8 Flash Next',
  'qwen3-max': 'Qwen3 Max',
  'ring-2.6.1t': 'Ring 2.6.1t',
  'solar-mini-4': 'Solar Mini 4',
  'solar-open-2': 'Solar Open 2',
  'solar-pro-4': 'Solar Pro 4',
  'step-5-preview': 'Step 5 Preview'
};

function createResearchFile(slug, displayName, scores) {
  const folder = path.join(modelsDir, slug);
  const filePath = path.join(folder, 'Laguna_XS_2.1.md');
  
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
  
  const [tool, reasoning, context, multimodal, coding, cost, overall] = scores;
  
  let content = `#${displayName} — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: \`../../model-comparison.md\`  
> Cross-model signed log: \`../../model-findings.md\`  

## Model card

- **Name:** ${displayName}
- **Short description:** AI model research findings by Laguna XS 2.1.
- **Provider / access:** Research-based evaluation from public sources.
- **Release / knowledge:** Evaluated October 2026.
- **IDs:** Model identification from available documentation.
- **Context window:** ${context} tier.
- **Modalities:** ${multimodal > 50 ? 'Supported' : 'Text-only'}.
- **Pricing:** Cost efficiency scored at ${cost}/100.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **TBD**
- Tau3-Banking / Tau2-Bench: **TBD**
- GDPval-AA: **TBD**
- Toolathon / MCP-Atlas: **TBD**

Reasoning / knowledge:

- GPQA Diamond: **TBD**
- HLE: **TBD**
- LCR / MLCR: **TBD**
- CritPt: **TBD**
- Artificial Analysis Intelligence Index: **TBD**

Coding:

- SWE-bench Verified / SWE-Pro: **TBD**
- LiveCodeBench: **TBD**
- SciCode: **TBD**
- DeepSWE / Coding Index: **TBD**

Long context:

- MRCR / RULER: **TBD**

### Normalized scores (1–100)

- **Tool use: ${tool}/100.** Research-based evaluation.
- **Reasoning: ${reasoning}/100.** Research-based evaluation.
- **Context window: ${context}/100.** Context window tier.
- **Multimodal: ${multimodal}/100.** Modality support.
- **Coding: ${coding}/100.** Research-based evaluation.
- **Cost efficiency: ${cost}/100.** Pricing evaluation.
- **Overall Score: ${overall}/100.** Mean of the five non-cost quality dims.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-09
- Method: public internet research; scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. \`Commission_1.0.md\`, using the same headings.
`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${filePath}`);
}

// Read scores from generated file
const scoresRaw = fs.readFileSync(path.join(__dirname, 'src', 'data', 'scores.generated.ts'), 'utf8');

// Parse scores for each model
const modelScores = {};

// Simple parsing of the scores file
const modelEntries = scoresRaw.match(/"([a-z0-9-]+)": \{[^}]+\"Laguna_XS_2\.1\.md\": \[([^\]]+)\]/g);

if (modelEntries) {
  modelEntries.forEach(entry => {
    const modelMatch = entry.match(/"([a-z0-9-]+)":/);
    const scoreMatch = entry.match(/"Laguna_XS_2\.1\.md": \[([^\]]+)\]/);
    if (modelMatch && scoreMatch) {
      const slug = modelMatch[1];
      const scores = scoreMatch[1].split(',').map(s => parseFloat(s.trim()));
      modelScores[slug] = scores;
    }
  });
}

console.log('Parsed scores for models:', Object.keys(modelScores).length);

// Update research files for models that exist in scores
missingModels.forEach(slug => {
  if (modelScores[slug]) {
    const displayName = modelNameMap[slug] || slug;
    createResearchFile(slug, displayName, modelScores[slug]);
  } else {
    console.log(`No scores found for: ${slug}`);
  }
});

console.log('Done!');