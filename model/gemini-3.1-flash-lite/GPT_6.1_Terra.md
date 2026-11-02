# Gemini 3.1 Flash-Lite — findings by GPT-6.1 Terra

- Source: Google `gemini-3.1-flash-lite-preview`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's low-latency multimodal model for high-volume workloads, with configurable thinking.
- **Provider / access:** Gemini API `gemini-3.1-flash-lite-preview` for the evaluated preview; current availability may vary.
- **Release / knowledge:** Announced 2026-03-03; knowledge cutoff not verified here.
- **Context window:** Vals lists 1M context and 65,536 maximum output.
- **Modalities:** Text, image, video and audio input; text output.
- **Pricing (2026-11-02):** Google launch lists $0.25 input / $1.50 output per million, excluding additional services.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.1 **34.08% ± 0.99**, high reasoning; no verified TAU2 result found.

Reasoning / knowledge:

- Google reports GPQA Diamond **86.9%** and HLE **16.0%** without tools at high reasoning; Vals GPQA **81.06% ± 1.97** is an independent run.

Coding:

- Google LiveCodeBench **72.0%**, specified 2025-01-01 to 2025-05-01 question interval. Vals LiveCodeBench **80.12% ± 1.08**, SWE-bench **62.80% ± 2.16** (variant unspecified in current table), Vibe Code v1.1 **0.00%**.

Long context and vision:

- Google MRCR v2 eight-needle **60.1% at 128K average / 12.3% at 1M pointwise**; MMMU-Pro **76.8%**, Video-MMMU **84.8%**.

### Normalized scores (1–100)

- **Tool use: 64/100.** Vals terminal score is modest; other tool benchmarks were not verified.
- **Reasoning: 82/100.** Google and Vals GPQA and Google no-tool HLE support good reasoning.
- **Context window: 85/100.** 1M advertised, tempered by measured 1M-point retrieval.
- **Multimodal: 80/100.** Audio, image and video input with text output; vendor visual benchmarks reported.
- **Coding: 67/100.** LiveCodeBench and SWE are tempered by Vals terminal and Vibe Code results.
- **Cost efficiency: 96/100.** Google lists $0.25/$1.50 per million.
- **Overall Score: 76/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Google model card and Vals preview evaluation; settings and benchmark versions remain distinct.
- Reference URLs:
  - [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite)
  - [Google launch](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite/)
  - [Vals preview evaluation](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview)
