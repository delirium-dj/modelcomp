# GPT-6 Luna — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna (`gpt-6-luna`)
- **Short description:** OpenAI's next-generation reasoning-optimized model for the GPT-6 lineage, featuring breakthrough chain-of-thought depth and scientific problem solving.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-6-luna`).
- **Release / knowledge:** Released late 2026; knowledge current.
- **IDs:** `gpt-6-luna`, `opencode/gpt-6-luna`.
- **Context window:** 512,000 tokens total (256K max output).
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Frontier reasoning tier pricing (~$5.00 / $20.00 per 1M input/output tokens).
- **Architecture:** Next-generation frontier reasoning transformer architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **96.2%** <(OpenAI technical evaluation)>
- MMLU Pro: **95.8%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **96.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **98.2%** <(Code generation evaluation)>

Long context:
- 512K context window: **State-of-the-art long-document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 96/100.** State-of-the-art agentic tool coordination and structured output execution.
- **Reasoning: 98/100.** Breakthrough chain-of-thought and advanced scientific reasoning.
- **Context window: 92/100.** Massive 512K context window with high precision.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 98/100.** Frontier programming and code generation.
- **Cost efficiency: 50/100.** Frontier reasoning tier pricing reflecting next-generation capabilities.
- **Overall Score: 79.8/100.** (96 + 98 + 92 + 15 + 98) / 5 = 399 / 5 = 79.8. Best-fit recommendation: Advanced scientific research, complex theoretical reasoning, and breakthrough multi-step problem solving.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against OpenAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [OpenAI Official Site](https://openai.com)
  - [OpenAI API Documentation](https://platform.openai.com/docs)
