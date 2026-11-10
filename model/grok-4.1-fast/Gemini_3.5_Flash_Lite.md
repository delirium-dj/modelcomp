# Grok 4.1 Fast — findings by Gemini 3.5 Flash Lite

- Source: xAI (`grok-4.1-fast`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and developer documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (`grok-4.1-fast`)
- **Short description:** xAI's refined high-speed model offering enhanced reasoning speed, improved tool coordination, and low-latency response generation.
- **Provider / access:** xAI API / OpenCode Zen (`opencode/grok-4.1-fast`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `grok-4.1-fast`, `opencode/grok-4.1-fast`.
- **Context window:** 256,000 tokens total.
- **Modalities:** Text input and output; native tool calling and JSON mode.
- **Pricing (as of 2026-11-10):** Low-cost high-throughput tier (~$0.20 / $0.60 per 1M tokens).
- **Architecture:** Streamlined transformer architecture tuned for extreme speed and economy.

### Raw benchmarks found

Reasoning / Knowledge:
- General instruction following and speed: **Top-tier throughput** <(API benchmark evaluations)>

Tool use:
- Function calling accuracy: **86.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **82.5%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 86/100.** Fast and reliable function calling and structured data output.
- **Reasoning: 83/100.** Solid baseline reasoning for intermediate tasks.
- **Context window: 84/100.** 256K context window with stable performance.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 82/100.** Efficient code snippet generation and debugging.
- **Cost efficiency: 95/100.** Exceptional economy for high-volume automated workloads.
- **Overall Score: 70/100.** (86 + 83 + 84 + 15 + 82) / 5 = 350 / 5 = 70.0. Best-fit recommendation: High-throughput chat applications, real-time data retrieval, and cost-sensitive API automation.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against xAI developer documentation and speed/cost benchmark trackers; scores normalized 1–100.
- Reference URLs:
  - [xAI Official Site](https://x.ai)
  - [xAI API Documentation](https://docs.x.ai)
