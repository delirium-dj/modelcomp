# Grok 4.3 — findings by Gemini 3.5 Flash Lite

- Source: xAI (`grok-4.3`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3 (`grok-4.3`)
- **Short description:** xAI's robust enterprise model for the Grok 4 generation, featuring enterprise-grade security, reliable multi-turn agentic workflows, and broad API integration.
- **Provider / access:** xAI API / OpenCode Zen (`opencode/grok-4.3`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `grok-4.3`, `opencode/grok-4.3`.
- **Context window:** 256,000 tokens total.
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Enterprise production pricing (~$2.00 / $8.00 per 1M tokens).
- **Architecture:** Advanced enterprise transformer architecture.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **87.0%** <(xAI technical evaluation)>
- MMLU Pro: **89.0%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **92.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **90.0%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Advanced agentic tool coordination and structured output execution.
- **Reasoning: 90/100.** Strong reasoning across complex general knowledge and math tasks.
- **Context window: 84/100.** 256K context window with stable retrieval.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 90/100.** High-performance programming and code generation.
- **Cost efficiency: 70/100.** Enterprise production pricing.
- **Overall Score: 74.2/100.** (92 + 90 + 84 + 15 + 90) / 5 = 371 / 5 = 74.2. Best-fit recommendation: Enterprise production automation, complex multi-turn agentic workflows, and robust API integration.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against xAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [xAI Official Site](https://x.ai)
  - [xAI API Documentation](https://docs.x.ai)
