# GPT-5.2 — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-5.2
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's science and knowledge work flagship, featuring an Instant/Thinking/Pro family.
- **Provider / access:** OpenAI (https://openai.com). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `openai/gpt-5.2` (Paid only)
- **Context window:** 400K total; 128K tokens max output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $1.75/$14.00 per 1M (Thinking); Pro-tier pricing significantly higher.
- **Architecture:** Proprietary (GPT-5 lane).

### Raw benchmarks found

- Artificial Analysis Index: **42** (OpenAI meta.json)
- MCP Atlas: **67.6%** (OpenAI meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Reliable tool use across science and knowledge work.
- **Reasoning: 88/100.** Strong performance in knowledge-heavy tasks (AA Index 42).
- **Context window: 75/100.** 400K capacity.
- **Multimodal: 70/100.** Text and image support.
- **Coding: 85/100.** Solid coding assistant.
- **Cost efficiency: 60/100.** Superseded by newer generations.
- **Overall Score: 80.6/100.** A solid historical flagship model, now serving as a stepping stone in the OpenAI lineage.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI](https://openai.com)
