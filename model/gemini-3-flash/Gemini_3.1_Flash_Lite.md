# Gemini 3 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's Flash preview model for interactive coding and analysis.
- **Provider / access:** Google DeepMind. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `google/gemini-3-flash`

- **Modalities:** Text, image, audio in; text out.
- **Pricing (as of 2026-11-13):** Paid $0.50/$3.00 per 1M.
- **Architecture:** Proprietary (Flash architecture).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **90.4%** (Google meta.json)

Coding:
- SWE-bench: **78%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 87/100.** Good for interactive coding and analysis.
- **Reasoning: 89/100.** Strong reasoning (90.4% GPQA).
- **Context window: 90/100.** 1M context.
- **Multimodal: 80/100.** Text, image, audio support.
- **Coding: 88/100.** Reliable coding assistant.
- **Cost efficiency: 90/100.** Competitive pricing.
- **Overall Score: 86.8/100.** Dependable interactive coding model, superseded by later Flash variants.

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

