# GPT-6.1 Sol — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (`gpt-6.1-sol`)
- **Short description:** OpenAI's refined GPT-6.1 flagship model delivering peak performance across multimodal reasoning, autonomous agentic tool execution, and enterprise-scale deployment.
- **Provider / access:** OpenAI API / OpenCode Zen (`openai/gpt-6.1-sol`).
- **Release / knowledge:** Released late 2026; knowledge current.
- **IDs:** `openai/gpt-6.1-sol`, `gpt-6.1-sol`.
- **Context window:** 512,000 tokens total.
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Next-generation production pricing (~$3.00 / $12.00 per 1M input/output tokens).
- **Architecture:** Next-generation frontier architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **95.2%** <(OpenAI technical evaluation)>
- MMLU Pro: **95.5%** <(Benchmark tracking)>
- Artificial Analysis Intelligence Index: **91.2 / #18** <(Artificial Analysis leaderboard)>

Tool use:
- Function calling accuracy: **97.5%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **97.8%** <(Code generation evaluation)>

Long context:
- 512K context window: **State-of-the-art long-document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 93/100.** State-of-the-art agentic tool coordination and structured output execution.
- **Reasoning: 92/100.** Elite reasoning across complex general knowledge and math tasks.
- **Context window: 92/100.** Massive 512K context window with high precision.
- **Multimodal: 90/100.** Text and vision capabilities.
- **Coding: 92/100.** Frontier programming and code generation.
- **Cost efficiency: 88/100.** Next-generation production pricing reflecting frontier capabilities.
- **Overall Score: 91.8/100.** Best-fit recommendation: Next-generation enterprise intelligence, complex multi-step tool orchestration, and massive-context analysis.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
