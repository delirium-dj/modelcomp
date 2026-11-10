# GPT-5.6 Sol — findings by Crouton Alpha

- Source: OpenAI/GPT-5.6 Sol
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's mid-tier Sol reasoning model for coding and terminal agents; top use case is balanced GPT-5.6 agentic work below Astra pricing.
- **Provider / access:** OpenAI API `gpt-5.6-sol`, OpenCode Zen `opencode/gpt-5.6-sol` via `https://opencode.ai/inference/openai/v1/responses`.
- **Release / knowledge:** 2026-07 (OpenAI GPT-5.6 announcement).
- **IDs:** `openai/gpt-5.6-sol`, `opencode/gpt-5.6-sol` (paid).
- **Context window:** 1.05M tokens total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $4.00 input / $20.00 output per 1M (Zen; 2x over 272K). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (OpenAI); Vals **85.8%**
- BrowseComp **92.2%** (OpenAI)
- GDPval-AA **1735** (OpenAI)
- Terminal-Bench Hard **65.9%** (AA)
- Tau2 **85.1%** (AA)
- CyberGym **84.5%** (OpenAI)

Reasoning / knowledge:

- GPQA **94.6%**, Vals **95.2%** (OpenAI; Vals)
- Intelligence Index **58.9** (OpenAI); BenchLM **74.81 #13** (BenchLM)
- ARC-AGI-2 **92.5%** (ARC Prize)
- AA-LCR **84.0%** (AA)
- FrontierMath v2 1-3 **89.0%**, Tier4 **83.0%** (OpenAI)
- CritPt **32.3%** (AA)

Coding:

- SWE-bench (Vals) **96.2%** (Vals); SWE-Pro **64.6%** (OpenAI)
- DeepSWE **72.7%** (OpenAI)
- LiveCodeBench (Vals) **82.6%** (Vals)
- AA Coding Index **77.4** (AA)
- FrontierSWE **32.2%** (Proximal)

Long context:

- 1.05M context; AA-LCR **84.0%** (AA)

Multimodal:

- MMMU-Pro **83% / 84.6% with Python** (OpenAI); AA-MMMU-Pro **83.4%**
- ExtractBench **93.77%** (LlamaIndex)

### Normalized scores (1–100)

- **Tool use: 94/100.** TB2.1 91.9%, BrowseComp 92.2%, GDPval 1735, Terminal-Bench Hard 65.9% are frontier; capped by Terminal-Bench 3.0 34.6% hardest suite.
- **Reasoning: 95/100.** GPQA 94–95%, ARC 92.5%, LCR 84%, FrontierMath 89%/83% and Index 58.9 are frontier; capped by CritPt 32.3%.
- **Context window: 97/100.** 1.05M with LCR 84% leads its class.
- **Multimodal: 72/100.** Image in, text out; MMMU-Pro 83–85% and ExtractBench 93.8% strong, but image-only caps it.
- **Coding: 92/100.** SWE Vals 96.2%, DeepSWE 72.7%, LiveCode 82.6% meet frontier refs; capped by SWE-Pro 64.6% and FrontierCode 27.6%.
- **Cost efficiency: 55/100.** $4/$20 per 1M (Zen) — expensive anchor ~55.
- **Overall Score: 90/100.** Mean (94+95+97+72+92)/5 = 90.0 → 90; best-fit Sol-tier coding agent.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via OpenAI GPT-5.6 announcement, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: GPT-5.6](https://openai.com/index/gpt-5-6/)
  - [BenchLM — GPT-5.6 Sol](https://benchlm.ai/models/gpt-5-6-sol)
  - [Artificial Analysis — GPT-5.6 Sol](https://artificialanalysis.ai/models/gpt-5-6-sol)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
