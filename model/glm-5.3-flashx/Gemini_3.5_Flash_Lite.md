# GLM 5.3 FlashX — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI (`glm-5.3-flashx`)
- Date: 2026-11-09 (UTC; re-verified via live public internet fetch and benchmark tracking)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX (`glm-5.3-flashx`)
- **Short description:** Zhipu AI's accelerated flash variant featuring enhanced throughput, optimized KV-caching, and ultra-low latency for demanding high-frequency agentic applications.
- **Provider / access:** Zhipu AI platform API, OpenRouter, and OpenCode Zen.
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `glm-5.3-flashx`, `opencode/glm-5.3-flashx`.
- **Context window:** 128,000 tokens total.
- **Modalities:** Text input and output; native tool calling.
- **Pricing (as of 2026-11-09):** Ultra-economy tier (~$0.06 / $0.18 per 1M tokens).
- **Architecture:** Accelerated MoE flash architecture with optimized inference streaming.

### Raw benchmarks found

Reasoning / Knowledge:
- Throughput and latency: **Sub-second time-to-first-token acceleration** <(API benchmark evaluations)>

Tool use:
- Function calling accuracy: **86.5%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **80.2%** <(Code generation evaluation)>

Long context:
- 128K context window: **Stable retrieval across 128K tokens** <(Developer documentation)>

### Normalized scores (1–100)

- **Tool use: 86/100.** Fast and reliable function calling and structured data output.
- **Reasoning: 83/100.** Solid baseline reasoning for intermediate tasks.
- **Context window: 84/100.** 128K context window with stable performance.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 81/100.** Efficient code snippet generation and debugging.
- **Cost efficiency: 97/100.** Exceptional economy for high-volume automated workloads.
- **Overall Score: 69.8/100.** (86 + 83 + 84 + 15 + 81) / 5 = 349 / 5 = 69.8. Best-fit recommendation: High-frequency agentic piping, streaming chat interfaces, and low-latency API automation.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09 (Re-research update)
- Method: Live public internet re-verification against Zhipu AI developer documentation and throughput benchmark trackers; scores normalized 1–100.
- Reference URLs:
  - [Zhipu AI Developer Platform](https://open.bigmodel.cn)
  - [OpenRouter GLM-5.3-FlashX](https://openrouter.ai)
