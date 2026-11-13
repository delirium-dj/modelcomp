# GPT-5.6 Sol — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-5.6 Sol
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's specialist for agentic software engineering and research.
- **Provider / access:** OpenAI (https://openai.com). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `openai/gpt-5.6-sol` (Paid only)
- **Context window:** 1M tokens total; 128K tokens max output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $1.25/$10 per 1M.
- **Architecture:** Proprietary (GPT-5.6 lane).

### Raw benchmarks found

Reasoning / knowledge:
- AA Index: **59** (OpenAI meta.json)

Coding:
- AA Coding Index: **80** (SOTA) (OpenAI meta.json)
- SWE-Pro: **64.6%** (OpenAI meta.json)

### Normalized scores (1–100)

- **Tool use: 93/100.** Elite agentic software engineering.
- **Reasoning: 89/100.** Strong reasoning (AA Index 59).
- **Context window: 90/100.** 1M context.
- **Multimodal: 70/100.** Text/image support.
- **Coding: 96/100.** Elite SOTA coding (AA Coding Index 80).
- **Cost efficiency: 80/100.** Competitive pricing tier.
- **Overall Score: 87.6/100.** Elite coding specialist, now legacy-pinned by newer models.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI](https://openai.com)
