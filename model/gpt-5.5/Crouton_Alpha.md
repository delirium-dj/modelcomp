# GPT-5.5 — findings by Crouton Alpha

- Source: OpenAI/GPT-5.5
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's base GPT-5.5 for agentic coding and long-context work; top use case is balanced GPT-5.5 at $5/$30.
- **Provider / access:** OpenAI API `gpt-5.5`, OpenCode Zen `opencode/gpt-5.5` via `https://opencode.ai/inference/openai/v1/responses`.
- **Release / knowledge:** 2026 (OpenAI announcement).
- **IDs:** `openai/gpt-5.5`, `opencode/gpt-5.5` (paid).
- **Context window:** 1M tokens total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $5.00 input / $30.00 output per 1M (Zen ≤/ >272K 2x). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **82%** (tbench); TB2.1 Vals **76.4%**; AA TB2.1 **84.3%**
- GDPval-AA **1396** (AA)
- τ²-bench **98%** (OpenAI)
- MCP Atlas **75.3%** (OpenAI)
- OSWorld-Verified **78.7%** (OpenAI); OSWorld 2.0 **13.0%** (paper)
- BrowseComp **84.4%** (OpenAI)

Reasoning / knowledge:

- GPQA **93.6%** (OpenAI)
- HLE **52.2%** (OpenAI)
- ARC-AGI-2 **85%** (OpenAI)
- AA-LCR **84.3%** (AA)
- FrontierMath v2 1-3 **85.263%** (Epoch)
- Intelligence **38.4**; BenchLM **68.75 #19** (AA; BenchLM)
- CritPt **27.1%** (AA)
- MRCR 128–256K **87.5%** (OpenAI)

Coding:

- SWE-Pro **58.6%** (OpenAI)
- Vibe Code **69.85%** (Vals)
- React Native Evals **84.7%** (leaderboard)
- LiveCodeBench (Vals) **85.3%**, SWE (Vals) **82.6%**
- AA Coding Index **74.9** (AA)
- FrontierCode 2.0 **22.6%** (Cognition)

Long context:

- 1M; MRCR 87.5% @128–256K, LCR **84.3%** (OpenAI; AA)

Multimodal:

- MMMU-Pro **81.2%** (OpenAI)
- ExtractBench **93.35%** (LlamaIndex)
- Design Arena **1254** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.0 82%, τ²-bench 98%, MCP Atlas 75.3% and TB Hard 60.6% are strong; GDPval 1396 and OSWorld 13% variance caps it below 94.
- **Reasoning: 92/100.** GPQA 93.6%, HLE 52.2%, LCR 84.3%, ARC 85% and FrontierMath 85.3% are frontier; capped by CritPt 27.1%.
- **Context window: 96/100.** 1M with MRCR 87.5% and LCR 84.3%.
- **Multimodal: 72/100.** Image in, text out; MMMU-Pro 81.2% and ExtractBench 93.4% strong but image-only.
- **Coding: 90/100.** LiveCode 85.3%, Vibe 69.9%, SWE Vals 82.6% and Coding Index 74.9 meet frontier refs; capped by SWE-Pro 58.6% and FrontierCode 22.6%.
- **Cost efficiency: 42/100.** $5/$30 per 1M (Zen) — expensive anchor ~42.
- **Overall Score: 88/100.** Mean (90+92+96+72+90)/5 = 88.0 → 88; best-fit GPT-5.5 base agent.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via OpenAI announcement, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
  - [BenchLM — GPT-5.5](https://benchlm.ai/models/gpt-5-5)
  - [Artificial Analysis — GPT-5.5](https://artificialanalysis.ai/models/gpt-5-5)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
