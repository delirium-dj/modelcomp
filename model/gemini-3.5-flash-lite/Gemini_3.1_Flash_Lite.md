# Gemini 3.5 Flash Lite — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.5 Flash Lite
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's lightest 1M-context model, optimized for ultra-low-latency volume work.
- **Provider / access:** Google DeepMind (https://deepmind.google/technologies/gemini/). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `google/gemini-3.5-flash-lite` (Free and Paid tiers available)

- **Modalities:** Text, image, audio, PDF in; text out.
- **Pricing (as of 2026-11-13):** Paid-tier pricing. Free tier available on Google AI Studio.
- **Architecture:** Proprietary (Flash-lite architecture).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **83.8%** (Google meta.json)

Coding:
- SWE-bench: **75%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Fast, reliable tool use.
- **Reasoning: 80/100.** Solid reasoning for high-volume tasks.
- **Context window: 90/100.** 1M capacity.
- **Multimodal: 80/100.** Text, image, audio, PDF support.
- **Coding: 85/100.** Capable coding assistant.
- **Cost efficiency: 100/100.** Industry-leading latency/cost floor.
- **Overall Score: 84/100.** Premier high-volume workhorse optimized for latency and cost.

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

