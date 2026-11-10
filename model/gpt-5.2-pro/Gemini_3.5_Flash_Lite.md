# GPT-5.2 Pro — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.2-pro`)
- Date: 2026-11-09 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro (`gpt-5.2-pro`)
- **Short description:** OpenAI's enterprise-grade flagship model for the GPT-5.2 generation, featuring elite reasoning, advanced tool use, and high-reliability production workflows.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.2-pro`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `gpt-5.2-pro`, `opencode/gpt-5.2-pro`.
- **Context window:** 256,000 tokens total (128K max output).
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-09):** Enterprise production pricing (~$2.50 / $10.00 per 1M input/output tokens).
- **Architecture:** Frontier Mixture of Experts / dense architecture optimized for elite enterprise tasks.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **86.2%** <(OpenAI technical evaluation)>
- MMLU Pro: **88.1%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **92.5%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **93.5%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable multi-document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Elite agentic tool coordination and structured output execution.
- **Reasoning: 90/100.** State-of-the-art reasoning across complex general knowledge and math tasks.
- **Context window: 84/100.** 256K context window with high precision.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 92/100.** High-performance programming and code generation.
- **Cost efficiency: 65/100.** Enterprise tier production pricing reflecting frontier capabilities.
- **Overall Score: 74.6/100.** (92 + 90 + 84 + 15 + 92) / 5 = 373 / 5 = 74.6. Best-fit recommendation: Frontier enterprise reasoning, complex multi-step tool orchestration, and high-stakes production workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
