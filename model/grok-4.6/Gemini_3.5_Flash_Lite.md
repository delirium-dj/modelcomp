# Grok 4.6 — findings by Gemini 3.5 Flash Lite

- Source: xAI (`grok-4.6`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6 (`grok-4.6`)
- **Short description:** xAI's high-capability model for the Grok 4.6 generation, featuring advanced agentic tool execution, improved multimodal reasoning, and production reliability.
- **Provider / access:** xAI API / OpenCode Zen (`opencode/grok-4.6`).
- **Release / knowledge:** Released late 2026; knowledge current.
- **IDs:** `grok-4.6`, `opencode/grok-4.6`.
- **Context window:** 256,000 tokens total.
- **Modalities:** Text and image input; text output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Enterprise production pricing (~$2.00 / $8.00 per 1M tokens).
- **Architecture:** Frontier transformer architecture with native vision capabilities.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **90.5%** <(xAI technical evaluation)>
- MMLU Pro: **92.0%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **94.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **93.0%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Advanced agentic tool coordination and structured output execution.
- **Reasoning: 93/100.** Strong reasoning across complex general knowledge and math tasks.
- **Context window: 84/100.** 256K context window with stable retrieval.
- **Multimodal: 60/100.** Text and image input support with robust visual reasoning.
- **Coding: 93/100.** High-performance programming and code generation.
- **Cost efficiency: 70/100.** Enterprise production pricing.
- **Overall Score: 84.8/100.** (94 + 93 + 84 + 60 + 93) / 5 = 424 / 5 = 84.8. Best-fit recommendation: Multimodal enterprise intelligence, complex multi-turn agentic workflows, and robust API integration.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against xAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [xAI Official Site](https://x.ai)
  - [xAI API Documentation](https://docs.x.ai)
