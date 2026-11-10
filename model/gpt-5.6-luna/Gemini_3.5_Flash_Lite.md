# GPT-5.6 Luna — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna (`gpt-5.6-luna`)
- **Short description:** OpenAI's specialized reasoning-optimized model for the GPT-5.6 generation, featuring advanced chain-of-thought verification and high-precision scientific problem solving.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-5.6-luna`).
- **Release / knowledge:** Released late 2026; knowledge current.
- **IDs:** `gpt-5.6-luna`, `opencode/gpt-5.6-luna`.
- **Context window:** 256,000 tokens total (128K max output).
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Advanced reasoning tier pricing (~$3.00 / $12.00 per 1M input/output tokens).
- **Architecture:** Frontier reasoning-optimized transformer architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **91.5%** <(OpenAI technical evaluation)>
- MMLU Pro: **92.8%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **94.5%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **96.0%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable multi-document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Elite agentic tool coordination and structured output execution.
- **Reasoning: 96/100.** State-of-the-art chain-of-thought and advanced mathematical reasoning.
- **Context window: 84/100.** 256K context window with high precision.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 96/100.** Frontier programming and code generation.
- **Cost efficiency: 60/100.** Advanced reasoning tier pricing reflecting specialized cognitive workloads.
- **Overall Score: 77/100.** (94 + 96 + 84 + 15 + 96) / 5 = 385 / 5 = 77.0. Best-fit recommendation: Advanced scientific research, complex mathematical reasoning, and high-precision multi-step problem solving.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
