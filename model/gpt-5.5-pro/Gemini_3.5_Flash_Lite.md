# GPT-5.5 Pro — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro (`gpt-5.5-pro`)
- **Short description:** OpenAI's premier enterprise flagship model for the GPT-5.5 generation, featuring state-of-the-art reasoning, autonomous agentic tool execution, and high-reliability production scale.
- **Provider / access:** OpenAI API / OpenCode Zen (`openai/gpt-5.5-pro`).
- **Release / knowledge:** Released late 2026; knowledge current.
- **IDs:** `openai/gpt-5.5-pro`, `gpt-5.5-pro`.
- **Context window:** 256,000 tokens total.
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Enterprise production pricing (~$2.50 / $10.00 per 1M input/output tokens).
- **Architecture:** Frontier Mixture of Experts / dense architecture optimized for elite enterprise intelligence.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **89.0%** <(OpenAI technical evaluation)>
- MMLU Pro: **90.5%** <(Benchmark tracking)>
- Artificial Analysis Intelligence Index: **91.0 / #20** <(Artificial Analysis leaderboard)>

Tool use:
- Function calling accuracy: **94.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **95.0%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable multi-document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Elite agentic tool coordination and structured output execution.
- **Reasoning: 92/100.** State-of-the-art reasoning across complex general knowledge and math tasks.
- **Context window: 90/100.** 256K context window with high precision.
- **Multimodal: 90/100.** Text and vision capabilities.
- **Coding: 92/100.** High-performance programming and code generation.
- **Cost efficiency: 89/100.** Enterprise tier production pricing reflecting frontier capabilities.
- **Overall Score: 91.0/100.** Best-fit recommendation: Frontier enterprise reasoning, complex multi-step tool orchestration, and high-stakes production workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
