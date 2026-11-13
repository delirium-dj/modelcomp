# GPT-5.4 — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-5.4
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's professional computer-use model.
- **Provider / access:** OpenAI (https://openai.com). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `openai/gpt-5.4` (Paid only)
- **Context window:** ~1M tokens total; 128K tokens max output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid-tier pricing ($1.25-$2.50/$7.50-$15.00).
- **Architecture:** Proprietary (GPT-5 lane).

### Raw benchmarks found

- GPQA: **93.3%** (OpenAI meta.json)
- Terminal-Bench: **81.8%** (OpenAI meta.json)
- SWE-Pro: **59.1%** (OpenAI meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Native computer-use capabilities.
- **Reasoning: 92/100.** Strong reasoning (93.3% GPQA).
- **Context window: 90/100.** 1M context.
- **Multimodal: 70/100.** Text and image support.
- **Coding: 89/100.** Solid coding assistant.
- **Cost efficiency: 50/100.** Superseded by newer generations.
- **Overall Score: 86.2/100.** Proven computer-use workhorse, superseded by later 5.5/5.6 releases.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI](https://openai.com)
