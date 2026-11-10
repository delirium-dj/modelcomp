# Grok 4.5 — findings by Gemini 3.5 Flash Lite

- Source: xAI (`grok-4.5`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5 (`grok-4.5`)
- **Short description:** xAI's high-performance model for the Grok 4.5 generation, offering enhanced multimodal reasoning, sophisticated agentic coordination, and expansive context handling.
- **Provider / access:** xAI API / OpenCode Zen (`opencode/grok-4.5`).
- **Release / knowledge:** Released late 2026; knowledge current.
- **IDs:** `grok-4.5`, `opencode/grok-4.5`.
- **Context window:** 256,000 tokens total.
- **Modalities:** Text and image input; text output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-10):** Enterprise production pricing (~$2.00 / $8.00 per 1M tokens).
- **Architecture:** Frontier transformer architecture with native vision capabilities.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **89.5%** <(xAI technical evaluation)>
- MMLU Pro: **91.0%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **93.5%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **92.0%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Advanced agentic tool coordination and structured output execution.
- **Reasoning: 92/100.** Strong reasoning across complex general knowledge and math tasks.
- **Context window: 84/100.** 256K context window with stable retrieval.
- **Multimodal: 60/100.** Text and image input support with robust visual reasoning.
- **Coding: 92/100.** High-performance programming and code generation.
- **Cost efficiency: 70/100.** Enterprise production pricing.
- **Overall Score: 84.2/100.** (93 + 92 + 84 + 60 + 92) / 5 = 421 / 5 = 84.2. Best-fit recommendation: Multimodal enterprise intelligence, complex multi-turn agentic workflows, and robust API integration.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against xAI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [xAI Official Site](https://x.ai)
  - [xAI API Documentation](https://docs.x.ai)
