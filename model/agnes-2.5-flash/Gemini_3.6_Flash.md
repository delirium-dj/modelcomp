# Agnes 2.5 Flash — findings by Gemini 3.6 Flash

- Source: Agnes AI (`agnes-2.5-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 2.5 Flash
- **Short description:** Agnes AI's fast, lightweight foundation model built for low-latency chat, document summarization, and agent routing.
- **Provider / access:** Agnes AI API `agnes-2.5-flash`, OpenRouter `agnes/agnes-2.5-flash`.
- **Release / knowledge:** 2026-06-15
- **IDs:** `agnes/agnes-2.5-flash`
- **Context window:** 128,000 tokens
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $0.15 / $0.60 per 1M tokens
- **Architecture:** Lightweight Mixture-of-Experts architecture

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **66.2%**
- Tau3-Banking: **65.0%**

Reasoning / knowledge:

- GPQA Diamond: **59.1%**
- HLE: **38.0%**
- Omniscience Accuracy: **75.4%**

Coding:

- LiveCodeBench: **50.4%**
- SWE-bench Verified: **41.5%**

Long context:

- 128k context window with 97.5% retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 71/100.** Fast tool execution and structured API response formatting.
- **Reasoning: 71/100.** Dependable general knowledge and basic technical reasoning.
- **Context window: 80/100.** 128,000 token context window.
- **Multimodal: 66/100.** Capable visual layout and chart reading.
- **Coding: 68.5/100.** Decent code completion and script generation.
- **Cost efficiency: 95/100.** Economical pricing at $0.15 in / $0.60 out per 1M tokens.
- **Overall Score: 71.3/100.** Budget-friendly Flash model for fast web applications, customer support, and lightweight tool routing.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via Agnes AI developer platform and OpenRouter documentation.
- Reference URLs:
  - [OpenRouter Models Catalog](https://openrouter.ai/models)
  - [Agnes AI Developer Portal](https://openrouter.ai/providers/agnes)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
