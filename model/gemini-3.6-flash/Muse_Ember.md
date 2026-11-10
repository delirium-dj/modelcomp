# Gemini 3.6 Flash — findings by Crouton Alpha

- Source: Google/Gemini 3.6 Flash
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's fast 3.6 Flash for 1M-context multimodal work; top use case is cheap OSWorld + coding at Flash pricing.
- **Provider / access:** Google Gemini API `gemini-3.6-flash`, OpenCode Zen `opencode/gemini-3.6-flash` via `https://opencode.ai/inference/google/v1beta/models/gemini-3.6-flash`.
- **Release / knowledge:** 2026 (Google blog).
- **IDs:** `google/gemini-3.6-flash`, `opencode/gemini-3.6-flash` (paid).
- **Context window:** 1M tokens total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $1.50 input / $7.50 output per 1M (Zen). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified **83%** (Google blog)
- GDPval-AA **1423** (Google blog)
- Terminal-Bench 2.1 (Vals) **73.8%** (Vals)
- GDPval-AA normalized **39.2%** (AA)

Reasoning / knowledge:

- GPQA Diamond **92.8%** (AA); Vals **93.4%**
- HLE **40.8%** (AA)
- AA-LCR **80.0%** (AA)
- Intelligence **34.0**; BenchLM **62.64 #42** (AA; BenchLM)
- CritPt **10.6%** (AA)
- FrontierMath v2 1-3 **58.947%** (Epoch)

Coding:

- DeepSWE **49.0%** (Google blog) — weak for Flash.
- LiveCodeBench (Vals) **88.1%**, SWE (Vals) **79.6%**
- CursorBench 3.2 **53.5%** (Cursor)
- AA Coding Index **69.2** (AA)

Long context:

- 1M; AA-LCR **80.0%** (AA)

Multimodal:

- AA-MMMU-Pro **83.2%** (AA)
- ParseBench **69.12%** (LlamaIndex)
- Design Arena **1296** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld 83% and TB2.1 Vals 73.8% are strong for Flash; GDPval 1423 caps it below 90.
- **Reasoning: 91/100.** GPQA ~93%, HLE 40.8%, LCR 80% and FrontierMath 58.9% are strong; capped by CritPt 10.6%.
- **Context window: 96/100.** 1M with LCR 80%.
- **Multimodal: 76/100.** Image in, text out; MMMU-Pro 83.2% excellent but image-only.
- **Coding: 88/100.** LiveCode 88.1% and SWE Vals 79.6% strong; DeepSWE 49% and CursorBench 53.5% cap it just below 90.
- **Cost efficiency: 66/100.** $1.50/$7.50 per 1M (Zen) — $1.50/$7.50 anchor.
- **Overall Score: 88/100.** Mean (88+91+96+76+88)/5 = 87.8 → 88; best-fit fast OSWorld/coding Flash.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Google blog, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google: Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
  - [BenchLM — Gemini 3.6 Flash](https://benchlm.ai/models/gemini-3-6-flash)
  - [Artificial Analysis — Gemini 3.6 Flash](https://artificialanalysis.ai/models/gemini-3-6-flash)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
