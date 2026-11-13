# GPT-5 — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-5
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's router flagship for general-purpose work (400K).
- **Provider / access:** OpenAI (https://openai.com). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/gpt-5` (Deprecated, scheduled for removal)
- **Context window:** 400K tokens total; 128K tokens max output.
- **Modalities:** Text, image, file in; text out.
- **Pricing (as of 2026-11-13):** Paid ~$1.25/$10.00 per 1M.
- **Architecture:** Proprietary (Router architecture).

### Raw benchmarks found

Reasoning / knowledge:
- AIME: **94.6%** (OpenAI meta.json)

Coding:
- SWE-Verified: **74.9%** (OpenAI meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Reliable router capability.
- **Reasoning: 90/100.** Strong reasoning performance (94.6% AIME).
- **Context window: 75/100.** 400K capacity.
- **Multimodal: 70/100.** Text/image support.
- **Coding: 85/100.** Solid coding assistant.
- **Cost efficiency: 50/100.** Deprecated model.
- **Overall Score: 81/100.** Reliable legacy flagship, scheduled for removal; migrate to newer lanes.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI](https://openai.com)
