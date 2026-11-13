# Gemini 3.5 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.5 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's high-speed multimodal reasoning model for coding and agents.
- **Provider / access:** Google DeepMind (https://deepmind.google/technologies/gemini/). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `google/gemini-3.5-flash` (Free and Paid tiers available)

- **Modalities:** Text, image, audio, PDF in; text out.
- **Pricing (as of 2026-11-13):** $1.50/$9 per 1M. Free tier available.
- **Architecture:** Proprietary (Flash-lane architecture).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **92.2%** (Google meta.json)

Coding:
- SWE-bench: **78.8%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Reliable fast-turnaround coding performance.
- **Reasoning: 90/100.** Strong reasoning performance (92.2% GPQA).
- **Context window: 90/100.** 1M capacity.
- **Multimodal: 85/100.** Supports Text, image, audio, PDF input.
- **Coding: 91/100.** Strong agentic coding (78.8% SWE-bench).
- **Cost efficiency: 90/100.** Very competitive price-per-token.
- **Overall Score: 89.2/100.** Fast, efficient, and reliable multimodal model for everyday coding and agent tasks.

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

