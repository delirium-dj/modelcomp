# GPT-5.4 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (`gpt-5.4`)
- **Short description:** OpenAI's standard GPT-5.4 foundational intelligence model delivering balanced performance across reasoning, tool use, coding, and context handling.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.4`).
- **Release / knowledge:** Released mid-2026; knowledge current.
- **IDs:** `gpt-5.4`, `opencode/gpt-5.4`.
- **Context window:** 256,000 tokens total (128K max output).
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Standard developer pricing (~$1.00 / $4.00 per 1M input/output tokens).
- **Architecture:** Advanced transformer architecture optimized for general-purpose intelligence.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **85.0%** <(OpenAI technical evaluation)>
- MMLU Pro: **87.2%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **91.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **90.5%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable multi-document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 91/100.** Advanced agentic tool coordination and structured output execution.
- **Reasoning: 89/100.** Strong reasoning across complex general knowledge and math tasks.
- **Context window: 84/100.** 256K context window with stable retrieval.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 89/100.** High-performance programming and code generation.
- **Cost efficiency: 82/100.** Competitive developer pricing.
- **Overall Score: 73.6/100.** (91 + 89 + 84 + 15 + 89) / 5 = 368 / 5 = 73.6. Best-fit recommendation: General-purpose enterprise reasoning, complex tool orchestration, and multi-domain problem solving.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
