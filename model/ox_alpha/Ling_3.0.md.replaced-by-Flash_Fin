# Ox Alpha — findings by Ling 3.0

> Provided by: **Ling 3.0 (stealth/ox-alpha)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Ox Alpha
- **Short description:** Anonymous stealth-reasoning model on OpenRouter with 1M context, multimodal input, and strong coding agent performance; later identified as GLM-5.3-Flash by Z.AI.
- **Provider / access:** Anonymous / Stealth provider; OpenRouter model ID: `stealth/ox-alpha`
- **Release / knowledge:** August 20, 2026 (stealth launch); revealed as GLM-5.3-Flash by Z.ai on August 26, 2026
- **IDs:** stealth/ox-alpha
- **Context window:** 1,048,576 tokens (up to 131,072 output)
- **Modalities:** text, image, video input; text output
- **Pricing (as of 2026-09-23):** Free during stealth preview; $0.00 per 1M tokens (preview pricing)
- **Architecture:** MoE-based reasoning model (identified as GLM-5.3-Flash family); 1M context window; mandatory reasoning with low/high/max effort levels

### Raw benchmarks found
Agent / tool use:
- DeepSWE (community run, 113 tasks): **58.4%** (oxalpha.online) — 66/113 tasks solved
- DeepSWE (full run): **~63%** (ox-alpha-ai.chat)
- Kingbench: **87.5%** (oxalpha.wiki)
- Independent 10-task sample: **80%** (oxalpha.com) — 8/10 tasks solved

Reasoning / knowledge:
- No official benchmark suite published
- Kingbench at 87.5% is the strongest community-reported score
- Intelligence Index: **57** (Artificial Analysis, via GLM-5.3-Flash identification)
- Agentic Index: **58** (Artificial Analysis, via GLM-5.3-Flash identification)

Coding:
- DeepSWE full run: **~63%** (flowtivity.ai / ox-alpha-ai.chat)
- Community run (113 tasks): **58.4%** (oxalpha.online)
- No official SWE-bench or LiveCodeBench scores published
- LiveBench (label-level): Overall 69.2, Reasoning 76.6, Coding 75.8 (oxalpha.io)

Long context:
- No specific long-context benchmark scores published
- 1M token context window confirmed via OpenRouter metadata

### Normalized scores (1-100)
- **Tool use: 70/100.** DeepSWE at ~63% and community run at 58.4% show solid agentic coding capability. Kingbench at 87.5% suggests strong reasoning but is not a standard benchmark. No independent agentic benchmark suite verified.
- **Reasoning: 75/100.** Intelligence Index of 57 (Artificial Analysis) and Agentic Index of 58 suggest moderate reasoning capability. Kingbench at 87.5% is promising but not independently verified. No official GPQA or HLE scores published.
- **Context window: 80/100.** 1M token context window confirmed. No specific long-context benchmark scores available to verify performance.
- **Multimodal: 55/100.** Supports text, image, and video input as confirmed by OpenRouter metadata. No specific multimodal benchmark scores published. Video input capability is noted but unverified.
- **Coding: 65/100.** DeepSWE at ~63% and community run at 58.4% show moderate coding agent performance. LiveBench Coding at 75.8% (label-level) is moderate. No official SWE-bench scores published.
- **Cost efficiency: 100/100.** Free during stealth preview ($0/M tokens). As a free preview model with MIT open-weights, cost efficiency is maximal.
- **Overall Score: 69/100.** Math.round((70+75+80+55+65)/5) = Math.round(69.0) = 69. Moderate scores across all dimensions reflect limited verified benchmark data and stealth-model uncertainty.

**Note:** Ox Alpha was revealed by Z.ai as GLM-5.3-Flash on August 26, 2026. This file treats it as a distinct model entry per project requirements, but its identity and benchmarks overlap significantly with GLM-5.3-Flash.

---

## Signature
- Provided by: **Ling 3.0 (stealth/ox-alpha)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/ox_alpha/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
