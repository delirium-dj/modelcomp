# GPT-5.6 Terra — findings by Crouton Alpha

- Source: OpenAI/GPT-5.6 Terra
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's Terra tier of GPT-5.6 for coding and terminal agents; top use case is balanced Terra work at $2/$12.
- **Provider / access:** OpenAI API `gpt-5.6-terra`, OpenCode Zen `opencode/gpt-5.6-terra` via `https://opencode.ai/inference/openai/v1/responses`.
- **Release / knowledge:** 2026-07 (OpenAI announcement).
- **IDs:** `openai/gpt-5.6-terra`, `opencode/gpt-5.6-terra` (paid).
- **Context window:** 1.05M total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $2.00 input / $12.00 output per 1M (Zen; 2x over 272K). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **87.4%** (OpenAI); Vals **77.5%**; AA **88%**
- BrowseComp **87.5%** (OpenAI)
- GDPval-AA **1583** (OpenAI)
- τ²-bench **86.3%** (AA)
- OSWorld 2.0 **50.2%** (OpenAI) — harness variance caveat.

Reasoning / knowledge:

- GPQA **92.9%** (OpenAI)
- HLE-Verified **51.1%** (DeepMind card table)
- AA-LCR **83.0%** (AA)
- ARC-AGI-2 **83.9%** (ARC Prize)
- Intelligence **55.0**; BenchLM **69.81 #15** (AA; BenchLM)
- FrontierMath **84.9%** (OpenAI)
- CritPt **30.0%** (AA)

Coding:

- SWE Pro **63.4%** (OpenAI)
- DeepSWE **69.6%** (OpenAI)
- SWE (Vals) **95.4%**, LiveCode (Vals) **85.9%**
- AA Coding Index **76.7** (AA)

Long context:

- 1.05M; AA-LCR **83.0%**, MRCR (see Sol sibling): no separate Terra row — scored on LCR.

Multimodal:

- MMMU-Pro **80.7%** (OpenAI)
- ExtractBench **92.26%** (LlamaIndex)

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 87–88%, BrowseComp 87.5%, GDPval 1583 and τ²-bench 86.3% are frontier; OSWorld 50.2% variance caps it.
- **Reasoning: 93/100.** GPQA 92.9%, HLE 51.1%, LCR 83%, ARC 83.9% and FrontierMath 84.9% are frontier; capped by CritPt 30%.
- **Context window: 97/100.** 1.05M with LCR 83%.
- **Multimodal: 72/100.** Image in, text out; MMMU-Pro 80.7% and ExtractBench 92.3% strong but image-only.
- **Coding: 92/100.** SWE Vals 95.4%, LiveCode 85.9%, DeepSWE 69.6% meet frontier refs; capped by SWE-Pro 63.4%.
- **Cost efficiency: 68/100.** $2/$12 per 1M (Zen) — between $2/$10 (~73) and $2.50/$15 (~60), so ~68.
- **Overall Score: 89/100.** Mean (92+93+97+72+92)/5 = 89.2 → 89; best-fit Terra coding agent.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via OpenAI announcement, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: GPT-5.6](https://openai.com/index/gpt-5-6/)
  - [BenchLM — GPT-5.6 Terra](https://benchlm.ai/models/gpt-5-6-terra)
  - [Artificial Analysis — GPT-5.6 Terra](https://artificialanalysis.ai/models/gpt-5-6-terra)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
