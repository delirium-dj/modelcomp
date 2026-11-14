# GPT-6.2 Astra — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-6.2-astra`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.2 Astra
- **Short description:** OpenAI's Astra variant in the GPT-6 line, targeted at agentic task routing, vision synthesis, and technical reasoning.
- **Provider / access:** OpenAI API `gpt-6.2-astra`, OpenRouter `openai/gpt-6.2-astra`.
- **Release / knowledge:** 2026-10-10
- **IDs:** `openai/gpt-6.2-astra`
- **Context window:** 256,000 tokens
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $1.20 / $4.80 per 1M tokens
- **Architecture:** Proprietary frontier model

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **73.2%**
- Tau3-Banking: **72.0%**

Reasoning / knowledge:

- GPQA Diamond: **66.1%**
- HLE: **48.8%**
- Omniscience Accuracy: **82.4%**

Coding:

- LiveCodeBench: **57.1%**
- SWE-bench Verified: **49.8%**

Long context:

- 256k window with 98.9% retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 79/100.** Reliable function calling and structured agent coordination.
- **Reasoning: 80/100.** Strong GPQA Diamond score (66.1%) and general knowledge depth.
- **Context window: 84/100.** 256,000 token context window with accurate retrieval.
- **Multimodal: 74/100.** Solid visual reasoning and document layout analysis.
- **Coding: 75.5/100.** Dependable coding completion across LiveCodeBench (57.1%) and SWE-bench.
- **Cost efficiency: 86/100.** Balanced price point at $1.20 in / $4.80 out per 1M tokens.
- **Overall Score: 78.5/100.** Capable multi-purpose model for enterprise chat, agent routing, and technical document analysis.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via OpenAI developer platform documentation.
- Reference URLs:
  - [OpenAI Platform Models](https://platform.openai.com/docs/models)
  - [OpenRouter Models Catalog](https://openrouter.ai/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
