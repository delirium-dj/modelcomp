# Gemini 3.8 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.8 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's intelligent, cost-effective Flash model optimized for agentic coding and enterprise tasks.
- **Provider / access:** Google DeepMind (https://deepmind.google/technologies/gemini/). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `google/gemini-3.8-flash` (Free and Paid tiers available)

- **Modalities:** Text, image, audio, PDF in; text out.
- **Pricing (as of 2026-11-13):** Intro $0.75/$3.75 per 1M. Free tier available on Google AI Studio.
- **Architecture:** Proprietary (Flash-lane architecture).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **95.3%** (Google meta.json)

Coding:
- Terminal-Bench: **90.8%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 92/100.** Highly capable agentic performance.
- **Reasoning: 94/100.** Elite reasoning abilities (95.3% GPQA).
- **Context window: 95/100.** 1M context supports large-scale tasks efficiently.
- **Multimodal: 85/100.** Supports text, image, audio, and PDF input.
- **Coding: 93/100.** Excellent coding performance (90.8% Terminal-Bench).
- **Cost efficiency: 95/100.** High performance at a very competitive price point.
- **Overall Score: 91.8/100.** The reasoning-per-dollar champion in Google's Flash family.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind Gemini](https://deepmind.google/technologies/gemini/)

## Scores
- **Tool use: 92/100.** Highly capable agentic performance.
- **Reasoning: 94/100.** Elite reasoning abilities (95.3% GPQA).
- **Context window: 95/100.** 1M context supports large-scale tasks efficiently.
- **Multimodal: 85/100.** Supports text, image, audio, and PDF input.
- **Coding: 93/100.** Excellent coding performance (90.8% Terminal-Bench).
- **Cost efficiency: 95/100.** High performance at a very competitive price point.
- **Overall Score: 91.8/100.** The reasoning-per-dollar champion in Google's Flash family.

