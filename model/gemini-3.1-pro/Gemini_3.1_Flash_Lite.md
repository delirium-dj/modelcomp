# Gemini 3.1 Pro — findings by Gemini 3.1 Flash Lite

- Source: Google/Gemini 3.1 Pro
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's 2M-context Pro flagship, optimized for research and multimodal agentic tasks.
- **Provider / access:** Google DeepMind. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 2M tokens total; 64K tokens max output.
- **Modalities:** Text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-11-13):** Paid-tier pricing.
- **Architecture:** Proprietary (Pro-line architecture).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **94.3%** (Google meta.json)
- ARC-AGI-2: **77.1%** (Google meta.json)

### Normalized scores (1–100)

- **Tool use: 93/100.** Strong performance in multimodal agentic research.
- **Reasoning: 96/100.** Elite-tier abstract reasoning (94.3% GPQA).
- **Context window: 100/100.** Industry-leading 2M-token input window.
- **Multimodal: 95/100.** Versatile input (Text, image, audio, video, PDF).
- **Coding: 92/100.** Reliable coding specialist.
- **Cost efficiency: 40/100.** Pro-tier flagship pricing.
- **Overall Score: 95.2/100.** Elite research model for long-memory, multimodal agentic tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind Gemini](https://deepmind.google/technologies/gemini/)
