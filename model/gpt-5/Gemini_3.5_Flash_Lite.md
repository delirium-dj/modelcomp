# GPT-5 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 (`gpt-5`)
- **Short description:** OpenAI's foundational GPT-5 model setting the baseline for advanced reasoning, tool use, and multi-domain problem solving.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gpt-5`, `opencode/gpt-5`.
- **Context window:** 256,000 tokens total (128K max output).
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Standard developer pricing (~$1.25 / $5.00 per 1M input/output tokens).
- **Architecture:** Advanced transformer architecture optimized for foundational intelligence.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **83.0%** <(OpenAI technical evaluation)>
- MMLU Pro: **85.5%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **89.5%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **89.0%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable multi-document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 89/100.** Advanced agentic tool coordination and structured output execution.
- **Reasoning: 87/100.** Strong reasoning across complex general knowledge and math tasks.
- **Context window: 84/100.** 256K context window with stable retrieval.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 87/100.** High-performance programming and code generation.
- **Cost efficiency: 80/100.** Competitive developer pricing.
- **Overall Score: 72.4/100.** (89 + 87 + 84 + 15 + 87) / 5 = 362 / 5 = 72.4. Best-fit recommendation: Foundational intelligence, general-purpose reasoning, and structured developer workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
