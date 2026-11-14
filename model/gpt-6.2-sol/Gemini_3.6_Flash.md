# GPT-6.2 Sol — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-6.2-sol`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.2 Sol
- **Short description:** OpenAI's fast, high-throughput Sol tier in the GPT-6 line designed for enterprise agents, interactive chat, and high-volume reasoning.
- **Provider / access:** OpenAI API `gpt-6.2-sol`, OpenRouter `openai/gpt-6.2-sol`.
- **Release / knowledge:** 2026-10-15
- **IDs:** `openai/gpt-6.2-sol`
- **Context window:** 256,000 tokens
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $1.00 / $4.00 per 1M tokens
- **Architecture:** Proprietary frontier model

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **71.5%**
- Tau3-Banking: **70.2%**

Reasoning / knowledge:

- GPQA Diamond: **64.2%**
- HLE: **45.8%**
- Omniscience Accuracy: **81.0%**

Coding:

- LiveCodeBench: **55.8%**
- SWE-bench Verified: **48.0%**

Long context:

- 256k context window with 98.4% retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 77/100.** Fast tool execution and structured agent workflow management.
- **Reasoning: 78/100.** Reliable general reasoning and problem-solving capabilities.
- **Context window: 84/100.** 256,000 token context window.
- **Multimodal: 68/100.** Solid visual document and chart perception.
- **Coding: 72.5/100.** Good coding completion scores across LiveCodeBench and SWE-bench.
- **Cost efficiency: 88/100.** Economical pricing at $1.00 in / $4.00 out per 1M tokens.
- **Overall Score: 75.9/100.** High-efficiency enterprise workhorse for production API workloads and agent orchestration.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via OpenAI developer documentation.
- Reference URLs:
  - [OpenAI Platform Models](https://platform.openai.com/docs/models)
  - [OpenRouter Models Catalog](https://openrouter.ai/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
