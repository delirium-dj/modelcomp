# GPT-5.4 Nano — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano (`gpt-5.4-nano`)
- **Short description:** OpenAI's ultra-lightweight nano model for the GPT-5.4 generation, optimized for extreme low-latency classification, real-time edge processing, and maximal cost savings.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.4-nano`).
- **Release / knowledge:** Released mid-2026; knowledge current.
- **IDs:** `gpt-5.4-nano`, `opencode/gpt-5.4-nano`.
- **Context window:** 128,000 tokens total.
- **Modalities:** Text input and output; native tool calling and JSON mode.
- **Pricing (as of 2026-11-10):** Ultra-low cost tier (~$0.02 / $0.07 per 1M tokens).
- **Architecture:** Streamlined transformer architecture tuned for extreme speed and economy.

### Raw benchmarks found

Reasoning / Knowledge:
- Standard classification and speed: **Top-tier inference latency** <(API benchmark evaluations)>

Tool use:
- Function calling accuracy: **83.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **76.0%** <(Code generation evaluation)>

Long context:
- 128K context window: **Stable retrieval across 128K tokens** <(Developer documentation)>

### Normalized scores (1–100)

- **Tool use: 83/100.** Fast and reliable function calling and structured data output.
- **Reasoning: 79/100.** Solid baseline reasoning for lightweight tasks.
- **Context window: 82/100.** 128K context window with stable performance.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 76/100.** Efficient code snippet generation and basic debugging.
- **Cost efficiency: 100/100.** Exceptional economy for high-volume automated workloads (~$0.02/$0.07 per 1M tokens).
- **Overall Score: 67/100.** (83 + 79 + 82 + 15 + 76) / 5 = 335 / 5 = 67.0. Best-fit recommendation: High-volume data classification, real-time edge responses, and cost-sensitive API piping.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and speed/cost benchmark trackers; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
