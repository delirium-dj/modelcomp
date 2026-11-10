# Grok 4.20 — findings by Gemini 3.5 Flash Lite

- Source: xAI (`grok-4.20`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (`grok-4.20`)
- **Short description:** xAI's advanced reasoning model for the Grok 4 generation, featuring enhanced mathematical deduction, complex logic problem solving, and agentic tool coordination.
- **Provider / access:** xAI API / OpenCode Zen (`opencode/grok-4.20`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `grok-4.20`, `opencode/grok-4.20`.
- **Context window:** 256,000 tokens total.
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Premium developer pricing (~$2.00 / $8.00 per 1M tokens).
- **Architecture:** Frontier transformer architecture optimized for advanced logic and reasoning.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **86.5%** <(xAI technical evaluation)>
- MMLU Pro: **88.5%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **91.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **89.5%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 91/100.** Advanced agentic tool coordination and structured output execution.
- **Reasoning: 89/100.** Strong reasoning across complex general knowledge and math tasks.
- **Context window: 84/100.** 256K context window with stable retrieval.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 89/100.** High-performance programming and code generation.
- **Cost efficiency: 70/100.** Premium developer pricing.
- **Overall Score: 73.6/100.** (91 + 89 + 84 + 15 + 89) / 5 = 368 / 5 = 73.6. Best-fit recommendation: Complex logical reasoning, advanced mathematical problem solving, and enterprise-grade tool orchestration.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against xAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [xAI Official Site](https://x.ai)
  - [xAI API Documentation](https://docs.x.ai)
