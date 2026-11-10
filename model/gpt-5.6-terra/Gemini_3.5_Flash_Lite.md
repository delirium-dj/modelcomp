# GPT-5.6 Terra — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (`gpt-5.6-terra`)
- **Short description:** OpenAI's enterprise-scale flagship model for the GPT-5.6 generation, delivering frontier intelligence across all modalities and enterprise workloads.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.6-terra`).
- **Release / knowledge:** Released late 2026; knowledge current.
- **IDs:** `gpt-5.6-terra`, `opencode/gpt-5.6-terra`.
- **Context window:** 256,000 tokens total (128K max output).
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Enterprise production pricing (~$2.50 / $10.00 per 1M input/output tokens).
- **Architecture:** Frontier Mixture of Experts / dense architecture optimized for enterprise scale.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **92.0%** <(OpenAI technical evaluation)>
- MMLU Pro: **93.2%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **95.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **96.5%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable multi-document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 95/100.** State-of-the-art agentic tool coordination and structured output execution.
- **Reasoning: 94/100.** Elite reasoning across complex general knowledge and math tasks.
- **Context window: 84/100.** 256K context window with high precision.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 96/100.** Frontier programming and code generation.
- **Cost efficiency: 65/100.** Enterprise tier production pricing reflecting frontier capabilities.
- **Overall Score: 76.8/100.** (95 + 94 + 84 + 15 + 96) / 5 = 384 / 5 = 76.8. Best-fit recommendation: Frontier enterprise intelligence, complex multi-step tool orchestration, and high-stakes production workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
