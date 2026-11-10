# Gemini 3 Pro — findings by Solar_Mini_4

- Source: Google DeepMind (`gemini-3-pro`), official model card `https://deepmind.google/models/model-cards/gemini-3-pro/`, API docs `https://ai.google.dev/gemini-api/docs/models/gemini-3-pro`; benchmarks BenchGap 2026-11-07 (`https://benchgap.net/model/gemini-3-pro`) + Artificial Analysis (`https://artificialanalysis.ai/models/gemini-3-pro`).
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (Google DeepMind)


### Raw benchmarks found

> Sources: BenchGap benchmark table as of 2026-11-07 (`https://benchgap.net/model/gemini-3-pro`) — measured vs estimated noted; Artificial Analysis Gemini 3 Pro Preview (High) model page (November 18, 2025 release; now superseded by Gemini 3.1 Pro Preview / 3.8 Flash).

> **Tool use / agentic:**
> - τ²-bench results: **87.1%** measured (BenchGap).
> - SWE-bench Verified: **74.4%** estimated (BenchGap).
> - AA Coding Index: **46.4%** estimated (BenchGap) — weakest agentic coding measure for the family.
> - MCP Atlas: **35.2%** estimated (BenchGap).
> - DeepSWE: **65.3%** measured (BenchGap).
> - AA Agentic Index: **26.2%** estimated (BenchGap).

> **Reasoning / knowledge:**
> - AA-GPQA Diamond: **90.8%** measured (BenchGap).
> - MMLU-Redux: **97.9%** estimated (BenchGap).
> - SuperGPQA: **100%** estimated (BenchGap); C-Eval: **93.9%** estimated.
> - MMLU: **88.2%** estimated; MMLU-Pro: **85.6%** estimated.


### Normalized scores (1–100)

- **Tool use: 88/100.** τ²-bench 87.1% measured is a solid agentic score, with SWE-bench Verified 74.4% estimated and DeepSWE 65.3% measured behind software-engineering tool use. Cap: AA Coding Index 46.4% estimated and AA Agentic Index 26.2% estimated (AgenticBench-style tool orchestration) are weak.
- **Reasoning: 90/100.** Elite knowledge ceiling — GPQA Diamond 90.8% measured, MMLU-Redux 97.9% and SuperGPQA ~100% estimated, C-Eval 93.9% estimated. Cap: AA-HLE 39.7% measured, CritPt 9.1% measured and STEMBench 2.4% estimated show hard multi-step reasoning and STEM tasks still trip the model.
- **Context window: 95/100.** 1M input / 65,536 output with AA-LCR 76.0% measured and MMLongBench-Doc 60.5% measured confirm long-context retrieval, at the top of the field.
- **Multimodal: 92/100.** Text, image, speech and video input with text output — Video-MME 88.4%/87.7% measured and VideoMMMU 87.6% measured are family-leading numbers for video understanding.
- **Coding: 88/100.** LiveCodeBench 91.7% estimated and SWE-bench Verified 74.4% estimated place it at the top of the Gemini 3 line; SciCode 47.6% estimated and FrontierCode 1.1 Main (not reported in this snapshot) temper the coding score.
- **Cost efficiency: 73/100.** $2.00/$12.00 per 1M is moderately priced on input but somewhat expensive on output, with a 90% cache-read discount on input.
- **Overall Score: 91/100.** (88 + 90 + 95 + 92 + 88) / 5 = 90.6 → 91 (half-up). Best-fit: the flagship reasoning SKU of the Gemini 3 family — top-tier knowledge and multimodal, at a mid-tier cost, now superseded by 3.1 Pro Preview and 3.8 Flash.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (official Google DeepMind Gemini 3 Pro model card; Google AI Studio API docs; Artificial Analysis Gemini 3 Pro Preview model page Nov 18, 2025; BenchGap benchmark table 2026-11-07); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind — Gemini 3 Pro Model Card](https://deepmind.google/models/model-cards/gemini-3-pro/)
  - [Gemini API — Gemini 3 Pro documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3-pro)
  - [Artificial Analysis — Gemini 3 Pro Preview (High) model page](https://artificialanalysis.ai/models/gemini-3-pro)
  - [BenchGap — Gemini 3 Pro benchmark scores](https://benchgap.net/model/gemini-3-pro)
  - [Artificial Analysis — Gemini 3.1 Pro Preview (replacement)](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)

> - AA-HLE: **39.7%** measured; HLE: **43.9%** estimated (BenchGap).
> - CritPt: **9.1%** measured (BenchGap) — very weak reasoning sample.
> - GPQA: **88.0%** estimated; Vals GPQA Diamond: **85.9%** estimated.
> - STEMBench: **2.4%** estimated (BenchGap).

> **Coding:**
> - AA LiveCodeBench: **91.7%** estimated (BenchGap).
> - SciCode: **47.6%** estimated (BenchGap).
> - SWE-bench Verified: **74.4%** estimated (BenchGap).
> - FrontierCode 1.1 Main: not reported in the 2026-11-07 snapshot.
> - Terminal-Bench (family, 3.7 Flash sibling): 85.8% measured — reference only.

> **Long context / multimodal:**
> - AA-LCR: **76.0%** measured (BenchGap).
> - MMLongBench-Doc: **60.5%** measured (BenchGap).
> - Video-MME (with subtitle): **88.4%** measured; Video-MME (w/o subtitle): **87.7%** measured.
> - VideoMMMU: **87.6%** measured (BenchGap); MLVU (M-Avg): **83.0%** estimated.
> - MMMLU: **89.3%** estimated; MMMU: **87.2%** measured; MMMU-Pro: **81.0%** measured.
> - Multi-input: text, image, speech and video → text output (official API page).

- **Short description:** Google's flagship reasoning model in the Gemini 3 series, released November 2025 (preview). Native multimodal reasoning with extended thinking; the "Pro" flagship with strongest overall capability in the Gemini 3 family before the 3.8 Flash update. Deprecated at time of writing (superseded by Gemini 3.1 Pro Preview / 3.8 Flash).
- **Provider / access:** Google — Gemini API / Vertex AI (`gemini-3-pro-preview`). Availability: Preview (self-host? no) — the current SKU is the deprecated preview; see notes.
- **Release / knowledge:** Released November 18, 2025 (Artificial Analysis); knowledge cutoff January 2025 (official API page).
- **IDs:** `gemini-3-pro-preview` (Gemini API / Vertex AI).
- **Context window:** 1,048,576 input tokens (1M), max output 65,536 (official API page).
- **Modalities:** Text, image, speech and video input; text output. Extended thinking (chain-of-thought) at low/medium/high (or minimal, per variant).
- **Pricing (as of 2026-11-08):** $2.00/MTok input (moderately priced, median $2.00) and $12.00/MTok output (somewhat expensive, median $10.00); 90% cache read discount (Artificial Analysis model page). Cache write/storage billed separately by provider.
- **Architecture:** Proprietary, closed weights (Google DeepMind). Parameter count not disclosed.
