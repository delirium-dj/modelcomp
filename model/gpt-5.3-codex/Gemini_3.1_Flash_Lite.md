# GPT-5.3 Codex — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-5.3 Codex
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's deprecated agentic coding model fusing 5.2-Codex capabilities with 5.2 reasoning.
- **Provider / access:** OpenAI (https://openai.com). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/gpt-5.3-codex` (Deprecated)
- **Context window:** 400,000 total; 128K output.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** Paid $1.75/$14.00 per 1M.
- **Architecture:** Proprietary (GPT-5 lane).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **91.52%** (OpenAI meta.json)

Coding:
- HLE: **42.49%** (OpenAI meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Reliable coding performance.
- **Reasoning: 88/100.** Strong reasoning (91.52% GPQA).
- **Context window: 75/100.** 400K capacity.
- **Multimodal: 15/100.** Text-only.
- **Coding: 88/100.** Solid coding assistant.
- **Cost efficiency: 40/100.** Deprecated model; outclassed by newer generations.
- **Overall Score: 70.2/100.** Proven coding assistant, now primarily a compatibility default.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI](https://openai.com)
