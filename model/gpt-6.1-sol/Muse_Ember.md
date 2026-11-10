# GPT-6.1 Sol — findings by Crouton Alpha

- Source: OpenAI/GPT-6.1 Sol
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's refreshed Sol flagship for coding and agentic reasoning; top use case is GPT-6 work at half Astra pricing.
- **Provider / access:** OpenAI API `gpt-6.1-sol`, OpenCode Zen `opencode/gpt-6.1-sol` via `https://opencode.ai/inference/openai/v1/responses`.
- **Release / knowledge:** 2026-09 (OpenAI announcement).
- **IDs:** `openai/gpt-6.1-sol`, `opencode/gpt-6.1-sol` (paid).
- **Context window:** 1.05M tokens total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $2.00 input / $10.00 output / $0.10 cached per 1M (BenchLM; Zen $2/$10). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA **1609** (AA leaderboard)
- AutomationBench **36.1%** (OpenAI); AA AutomationBench **64.9%**
- Terminal-Bench-Science **57.0%** (OpenAI)
- Terminal-Bench 4.0 AA **56.1%** (AA)
- GDP.pdf **31.0%** (AA)

Reasoning / knowledge:

- HLE **52.9%** (AA); Intelligence **54.6**, BenchLM **85.35 #4** (AA; BenchLM)
- ARC-AGI-2 **94.2%** (ARC Prize)
- AA-LCR **83.0%** (AA)
- FrontierMath v2 1-3 **93.684%**, Tier4 **100%** (Epoch)
- CritPt **31.7%** (AA)

Coding:

- DeepSWE **71.9%** (OpenAI)
- ScarfBench **68.4%** (Kaggle)
- AA-SciCode **54.2%** (AA)
- FrontierCode 2.0 **39.0%** (Cognition)
- Bug Hunt **44.3 fixes** (Bug Hunt)

Long context:

- 1.05M context; AA-LCR **83.0%** (AA)

Multimodal:

- AA-MMMU-Pro **86.0%** (AA)
- ExtractBench **95.31%** (LlamaIndex)
- Design Arena **1310** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval 1609, AA AutomationBench 64.9%, TB-Science 57% show solid tool use; AutomationBench 36.1% on OpenAI harness caps it below 94.
- **Reasoning: 95/100.** ARC 94.2%, LCR 83%, FrontierMath 93.7%/100% and Intelligence 54.6 are frontier; capped by CritPt 31.7%.
- **Context window: 97/100.** 1.05M with LCR 83%.
- **Multimodal: 72/100.** Image in, text out; MMMU-Pro 86% and ExtractBench 95.3% strong but image-only.
- **Coding: 92/100.** DeepSWE 71.9%, ScarfBench 68.4% meet frontier refs; no SWE-Pro row, FrontierCode 39% caps it.
- **Cost efficiency: 73/100.** $2/$10 per 1M — $2/$10 anchor ~73; cheaper than prior Sol $4/$20, so high for its tier.
- **Overall Score: 89/100.** Mean (90+95+97+72+92)/5 = 89.2 → 89; best-fit GPT-6 Sol agent at reduced price.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via OpenAI announcement, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol/)
  - [BenchLM — GPT-6.1 Sol](https://benchlm.ai/models/gpt-6-1-sol)
  - [Artificial Analysis — GPT-6.1 Sol](https://artificialanalysis.ai/models/gpt-6-1-sol)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
