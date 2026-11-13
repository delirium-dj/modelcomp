# Gemini 3 Pro — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3 Pro
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's frontier Pro model with Deep Think, optimized for research and agentic deliberation.
- **Provider / access:** Google DeepMind (https://deepmind.google/technologies/gemini/). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `google/gemini-3-pro` (Paid only)
- **Context window:** 1M tokens total; 65K tokens max output.
- **Modalities:** Text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-11-13):** Paid-tier pricing ($2/$12 per 1M).
- **Architecture:** Proprietary (Pro-line architecture).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **91.9%** (Google meta.json)
- HLE: **37.5%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 88/100.** Reliable deliberative agent performance.
- **Reasoning: 92/100.** Strong reasoning (91.9% GPQA).
- **Context window: 90/100.** 1M context.
- **Multimodal: 90/100.** Versatile text/audio/video input.
- **Coding: 88/100.** Reliable coding assistant.
- **Cost efficiency: 60/100.** Balanced performance-per-dollar.
- **Overall Score: 90/100.** Dependable research-focused Pro model for budget-conscious tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind Gemini](https://deepmind.google/technologies/gemini/)
