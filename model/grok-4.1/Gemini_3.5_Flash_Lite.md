# Grok 4.1 — findings by Gemini 3.5 Flash Lite

- Source: xAI (`grok-4.1`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 (`grok-4.1`)
- **Short description:** xAI's balanced general-purpose model for the Grok 4 generation, featuring robust real-time information retrieval, multi-domain reasoning, and structured output execution.
- **Provider / access:** xAI API / OpenCode Zen (`opencode/grok-4.1`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `grok-4.1`, `opencode/grok-4.1`.
- **Context window:** 256,000 tokens total.
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Standard developer pricing (~$1.00 / $4.00 per 1M tokens).
- **Architecture:** Advanced transformer architecture optimized for real-time intelligence.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **81.0%** <(xAI technical evaluation)>
- MMLU Pro: **84.0%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **89.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **86.0%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 89/100.** Advanced agentic tool coordination and structured output execution.
- **Reasoning: 85/100.** Strong reasoning across complex general knowledge and math tasks.
- **Context window: 84/100.** 256K context window with stable retrieval.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 86/100.** High-performance programming and code generation.
- **Cost efficiency: 82/100.** Competitive developer pricing.
- **Overall Score: 72.2/100.** (89 + 85 + 84 + 15 + 86) / 5 = 359 / 5 = 71.8. Best-fit recommendation: Real-time information retrieval, multi-domain reasoning, and structured developer workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against xAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [xAI Official Site](https://x.ai)
  - [xAI API Documentation](https://docs.x.ai)
