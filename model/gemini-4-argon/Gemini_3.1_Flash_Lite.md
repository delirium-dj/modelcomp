# Gemini 4 Argon — findings by Gemini 3.1 Flash Lite

- Source: Google DeepMind/Gemini 4 Argon
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's frontier model for long-horizon coding and enterprise research, optimized for large-output tasks.
- **Provider / access:** Google DeepMind (https://deepmind.google/technologies/gemini/). Chat Completions API.
- **Release / knowledge:** Released 2026; knowledge cutoff unknown.
- **IDs:** `google/gemini-4-argon` (gated launch)

- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Intro $2/$10; standard $4/$20 per 1M. Paid model.
- **Architecture:** Proprietary (frontier model).

### Raw benchmarks found

Reasoning / knowledge:
- Vals Index: **68.9%** (Google meta.json)

Coding:
- DeepSWE: **77.9%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 95/100.** Industry-leading agentic coding performance.
- **Reasoning: 93/100.** Excellent performance on enterprise research tasks (68.9% Vals Index).
- **Context window: 98/100.** Massive-output window (262K initial) and 1M total context.
- **Multimodal: 90/100.** Strong support for text, image, and video input.
- **Coding: 96/100.** Top-tier coding capabilities (77.9% DeepSWE).
- **Cost efficiency: 40/100.** Premium pricing ($4/$20 per 1M).
- **Overall Score: 94/100.** Frontier model currently setting the standard for long-horizon coding and research.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind Gemini](https://deepmind.google/technologies/gemini/)

## Scores
- **Tool use: 95/100.** Industry-leading agentic coding performance.
- **Reasoning: 93/100.** Excellent performance on enterprise research tasks (68.9% Vals Index).
- **Context window: 98/100.** Massive-output window (262K initial) and 1M total context.
- **Multimodal: 90/100.** Strong support for text, image, and video input.
- **Coding: 96/100.** Top-tier coding capabilities (77.9% DeepSWE).
- **Cost efficiency: 40/100.** Premium pricing ($4/$20 per 1M).
- **Overall Score: 94/100.** Frontier model currently setting the standard for long-horizon coding and research.

