# Gemini 3.5 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.5 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's fast multimodal reasoning model optimized for coding and agents.
- **Provider / access:** Google DeepMind. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `google/gemini-3.5-flash` (Free and Paid tiers available)
- **Context window:** 1M tokens total; 65K tokens max output.
- **Modalities:** Text, image, audio, PDF in; text out.
- **Pricing (as of 2026-11-13):** $1.50/$9 per 1M. Free tier available.
- **Architecture:** Proprietary (Flash-lane architecture).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **92.2%** (Google meta.json)

Coding:
- SWE-bench: **78.8%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Reliable fast-turnaround tool use.
- **Reasoning: 90/100.** Strong performance in coding-related reasoning.
- **Context window: 90/100.** 1M context supports large tasks.
- **Multimodal: 85/100.** Supports Text, image, audio, PDF.
- **Coding: 88/100.** Solid coding performance (78.8% SWE-bench).
- **Cost efficiency: 85/100.** Competitive performance-per-dollar.
- **Overall Score: 89/100.** Reliable, efficient model for everyday coding and multimodal reasoning.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind Gemini](https://deepmind.google/technologies/gemini/)
