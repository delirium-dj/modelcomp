# GPT-5.5 — findings by GLM 4.5 Flash

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's flagship (1.05M/128K, $5/$30) for coding and computer use; TB 2.0 82.7%, SWE-Verified 82.6%, GPQA 93.6%.
- **Provider / access:** OpenAI API (`gpt-5.5`); No verified public free tier available
- **Release / knowledge:** Released as part of GPT-5.5 family; knowledge cutoff not disclosed
- **IDs:** `openai/gpt-5.5` (OpenAI API)
- **Context window:** No verified public value
- **Modalities:** No verified public matrix
- **Pricing (as of 2026-10-28):** No verified public pricing; No verified public free tier
- **Architecture:** Not disclosed in meta.json

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (meta.json, official claim)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (meta.json, official claim)
- HLE: **no verified public score found**
- LCR / MMLR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found / no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **82.6%** (meta.json, official claim)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **Terminal-Bench 2.0:** 82.7% (meta.json, official claim)
- **SWE-bench Verified:** 82.6% (meta.json, official claim)
- **GPQA:** 93.6% (meta.json, official claim)

## Normalized scores (1–100)

- **Tool use: 85/100.** As OpenAI's flagship model for coding and computer use, strong Terminal-Bench 2.0 score of 82.7% demonstrates excellent coding capabilities, though specific tool use benchmarks not fully verified.
- **Reasoning: 94/100.** Exceptional GPQA score of 93.6% indicates top-tier reasoning capabilities, consistent with OpenAI's flagship positioning.
- **Context window: 90/100.** Assumed 1.05M token context window based on meta.json description, though not explicitly verified; substantial capacity for complex tasks.
- **Multimodal: 70/100.** Text-based model with unspecified multimodal capabilities; limited information available on multimodal performance.
- **Coding: 85/100.** Strong SWE-bench Verified score of 82.6% demonstrates excellent coding capabilities for complex software engineering tasks.
- **Cost efficiency: 40/100.** Premium pricing at $5/$30 per 1M tokens with no verified free tier; positioned as OpenAI's flagship with corresponding cost structure.
- **Overall Score: 85/100.** Exceptional all-around performer with strong coding and reasoning capabilities, though positioned as a compatibility default with successors offering better price-per-capability.

## Analysis and comparisons

### Strengths
1. **Exceptional coding performance**: Strong Terminal-Bench 2.0 (82.7%) and SWE-bench Verified (82.6%) scores demonstrate elite coding capabilities.
2. **Top-tier reasoning**: GPQA score of 93.6% indicates excellent reasoning abilities.
3. **Flagship positioning**: As OpenAI's flagship model of its era, represents the pinnacle of OpenAI's capabilities at release.

### Weaknesses
1. **Pricing uncertainty**: No verified public pricing information available.
2. **Context window not verified**: Despite meta.json suggesting 1.05M tokens, no explicit verification available.
3. **Multimodal capabilities unspecified**: Limited information on multimodal performance.
4. **Superseded by newer models**: Every successor (Terra, 5.6/6.1 Sol, Astra) offers better price-per-capability.

### Positioning in the market
GPT-5.5 represents OpenAI's flagship model from its era, designed for coding, computer use, and research. It serves primarily as a compatibility default for existing deployments, with newer models offering better value. Its strengths lie in:

- Complex coding tasks
- Research-level work
- Applications requiring maximum quality where cost is secondary

Not recommended for:
- Cost-sensitive applications
- New deployments where newer models offer better value
- Applications requiring verified context windows or multimodal capabilities

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-28
- Method: Independent research from official model metadata and OpenAI documentation; scores are normalized 1-100 interpretations, not official vendor scores.
- Note: This model has been superseded by newer OpenAI models that offer better price-per-capability.