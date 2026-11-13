# Gemini 3.7 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.7 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's reliable Flash workhorse for coding and agentic tasks.
- **Provider / access:** Google DeepMind (https://deepmind.google/technologies/gemini/). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `google/gemini-3.7-flash` (Free and Paid tiers available)
- **Context window:** 1M tokens total; 64K tokens max output.
- **Modalities:** Text, image, audio, PDF in; text out.
- **Pricing (as of 2026-11-13):** Intro $0.75/$3.75 per 1M. Free tier available on Google AI Studio.
- **Architecture:** Proprietary (Flash-lane architecture).

### Raw benchmarks found

Reasoning / knowledge:
- HLE-Verified: **53.6%** (Google meta.json)

Coding:
- Terminal-Bench: **85.8%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Reliable agentic task automation.
- **Reasoning: 88/100.** Good reasoning performance for knowledge work.
- **Context window: 90/100.** 1M context supports large tasks.
- **Multimodal: 85/100.** Supports Text, image, audio, PDF.
- **Coding: 91/100.** Strong coding abilities (85.8% Terminal-Bench).
- **Cost efficiency: 90/100.** Excellent performance at a competitive price point.
- **Overall Score: 88.8/100.** Dependable and cost-effective Flash workhorse.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind Gemini](https://deepmind.google/technologies/gemini/)
