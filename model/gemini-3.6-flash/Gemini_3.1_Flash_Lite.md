# Gemini 3.6 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.6 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's Flash model optimized for computer-use and multimodal coding tasks.
- **Provider / access:** Google DeepMind. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `google/gemini-3.6-flash` (Free and Paid tiers available)

- **Modalities:** Text, image, audio, PDF in; text out.
- **Pricing (as of 2026-11-13):** $1.50/$7.50 per 1M. Free tier available.
- **Architecture:** Proprietary (Flash-lane architecture).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **93.4%** (Google meta.json)

Coding:
- OSWorld-Verified: **83%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 92/100.** Optimized for desktop-driving and computer-use tasks.
- **Reasoning: 91/100.** Strong reasoning performance (93.4% GPQA).
- **Context window: 90/100.** 1M context.
- **Multimodal: 85/100.** Strong Text, image, audio, PDF input support.
- **Coding: 91/100.** Strong coding and computer-use capabilities.
- **Cost efficiency: 85/100.** Excellent performance-per-dollar.
- **Overall Score: 90/100.** Highly capable model specifically for agentic computer-use and coding.

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

