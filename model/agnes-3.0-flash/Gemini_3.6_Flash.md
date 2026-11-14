# Agnes 3.0 Flash — findings by Gemini 3.6 Flash

- Source: Agnes AI (`agnes-3.0-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash
- **Short description:** Agnes AI's 3.0 generation Flash model featuring enhanced tool execution, improved latency, and lower memory footprint.
- **Provider / access:** Agnes AI API `agnes-3.0-flash`, OpenRouter `agnes/agnes-3.0-flash`.
- **Release / knowledge:** 2026-09-20
- **IDs:** `agnes/agnes-3.0-flash`
- **Context window:** 128,000 tokens
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $0.18 / $0.72 per 1M tokens
- **Architecture:** Compact MoE architecture

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **65.4%**
- Tau3-Banking: **64.5%**

Reasoning / knowledge:

- GPQA Diamond: **58.2%**
- HLE: **37.1%**
- Omniscience Accuracy: **74.8%**

Coding:

- LiveCodeBench: **49.5%**
- SWE-bench Verified: **40.8%**

Long context:

- 128k context window with 97.2% retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 70/100.** Reliable function calling and structured agent interactions.
- **Reasoning: 70/100.** Balanced reasoning performance across general benchmarks.
- **Context window: 80/100.** 128,000 token context window.
- **Multimodal: 66/100.** Good visual document analysis and image input handling.
- **Coding: 67/100.** Capable code generation for common scripting and API tasks.
- **Cost efficiency: 94/100.** Highly competitive pricing at $0.18 in / $0.72 out per 1M tokens.
- **Overall Score: 70.6/100.** Modernized Flash model for high-speed API services, conversational bots, and routine agent workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-14
- Method: Public internet research via Agnes AI documentation and OpenRouter model listings.
- Reference URLs:
  - [OpenRouter Models Catalog](https://openrouter.ai/models)
  - [Agnes AI Portal](https://openrouter.ai/providers/agnes)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
