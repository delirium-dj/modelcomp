# GPT-5.5 — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-5.5
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's foundational flagship model for coding and computer use.
- **Provider / access:** OpenAI. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `openai/gpt-5.5`
- **Context window:** 1.05M total; 128K tokens max output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid-tier pricing.
- **Architecture:** Proprietary.

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **93.6%** (OpenAI meta.json)

Coding:
- Terminal-Bench 2.0: **82.7%** (OpenAI meta.json)
- SWE-Verified: **82.6%** (OpenAI meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Reliable all-round flagship for coding and computer use.
- **Reasoning: 93/100.** Strong reasoning performance (93.6% GPQA).
- **Context window: 95/100.** Massive 1.05M context.
- **Multimodal: 70/100.** Text and image input support.
- **Coding: 92/100.** Elite coding capabilities (82.7% TB 2.0).
- **Cost efficiency: 50/100.** Solid all-rounder; superseded by newer models on cost/capability.
- **Overall Score: 88/100.** A reliable foundational flagship for diverse tasks, now primarily a compatibility default.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI](https://openai.com)
