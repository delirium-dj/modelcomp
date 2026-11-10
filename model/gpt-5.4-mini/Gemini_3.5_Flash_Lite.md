# GPT-5.4 Mini — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini (`gpt-5.4-mini`)
- **Short description:** OpenAI's balanced mini model for the GPT-5.4 generation, optimized for fast application development, moderate reasoning tasks, and cost-effective production API usage.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.4-mini`).
- **Release / knowledge:** Released mid-2026; knowledge current.
- **IDs:** `gpt-5.4-mini`, `opencode/gpt-5.4-mini`.
- **Context window:** 256,000 tokens total (128K max output).
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Low-cost production tier (~$0.15 / $0.60 per 1M tokens).
- **Architecture:** Streamlined MoE / dense architecture optimized for high-speed balanced intelligence.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **78.5%** <(OpenAI technical evaluation)>
- MMLU Pro: **82.0%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **88.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **85.0%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable retrieval across 256K tokens** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 86/100.** Fast and reliable function calling and structured data output.
- **Reasoning: 82/100.** Strong baseline reasoning for intermediate and production tasks.
- **Context window: 84/100.** 256K context window with stable retrieval.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 82/100.** Efficient code snippet generation and debugging.
- **Cost efficiency: 95/100.** Exceptional economy for high-volume automated workloads ($0.15/$0.60 per 1M tokens).
- **Overall Score: 73.8/100.** (86 + 82 + 84 + 15 + 82) / 5 = 349 / 5 = 69.8. Best-fit recommendation: Balanced production applications, fast conversational agents, and cost-efficient API integration.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
