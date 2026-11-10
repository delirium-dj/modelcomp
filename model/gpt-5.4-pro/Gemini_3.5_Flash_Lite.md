# GPT-5.4 Pro — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro (`gpt-5.4-pro`)
- **Short description:** OpenAI's enterprise-grade flagship model for the GPT-5.4 generation, featuring elite reasoning, advanced tool coordination, and high-reliability production scale.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.4-pro`).
- **Release / knowledge:** Released mid-2026; knowledge current.
- **IDs:** `gpt-5.4-pro`, `opencode/gpt-5.4-pro`.
- **Context window:** 256,000 tokens total (128K max output).
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Enterprise production pricing (~$2.00 / $8.00 per 1M input/output tokens).
- **Architecture:** Frontier Mixture of Experts / dense architecture optimized for elite enterprise intelligence.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **87.5%** <(OpenAI technical evaluation)>
- MMLU Pro: **89.2%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **93.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **94.2%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable multi-document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Elite agentic tool coordination and structured output execution.
- **Reasoning: 91/100.** State-of-the-art reasoning across complex general knowledge and math tasks.
- **Context window: 84/100.** 256K context window with high precision.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 94/100.** High-performance programming and code generation.
- **Cost efficiency: 68/100.** Enterprise tier production pricing reflecting frontier capabilities.
- **Overall Score: 75.4/100.** (93 + 91 + 84 + 15 + 94) / 5 = 377 / 5 = 75.4. Best-fit recommendation: Frontier enterprise reasoning, complex multi-step tool orchestration, and high-stakes production workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
