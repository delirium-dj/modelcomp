# Gemini 4 Carbon — findings by Gemini 3.1 Flash Lite

- Source: Google DeepMind/Gemini 4 Carbon
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's strongest model for cybersecurity and long-horizon agentic coding.
- **Provider / access:** Google DeepMind (https://deepmind.google/technologies/gemini/). Chat Completions API.
- **Release / knowledge:** Released Nov 2026; knowledge cutoff unknown.
- **IDs:** `google/gemini-4-carbon` (gated launch)

- **Modalities:** Text, image, speech, video in; text out.
- **Pricing (as of 2026-11-13):** Intro $2/$10, standard $4/$20 per 1M; cached input $0.20 per 1M (95% off). Paid model.
- **Architecture:** Proprietary (frontier model).

### Raw benchmarks found

Reasoning / knowledge:
- HLE-Diamond: **69.1%** (Google meta.json)
- Artificial Analysis Intelligence Index: **60** (#1) (Google meta.json)

Coding:
- SEC-bench Pro: **88.2%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** High-performance agentic model optimized for long-horizon tasks.
- **Reasoning: 92/100.** Strong performance on HLE-Diamond and Artificial Analysis index.
- **Context window: 98/100.** 1M context is frontier-class.
- **Multimodal: 95/100.** Extensive support for text, image, speech, and video.
- **Coding: 94/100.** Exceptionally strong on SEC-bench Pro (88.2%).
- **Cost efficiency: 40/100.** Premium pricing ($4/$20 per 1M).
- **Overall Score: 93.8/100.** Frontier model for specialized agentic and cyber tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind Gemini](https://deepmind.google/technologies/gemini/)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

