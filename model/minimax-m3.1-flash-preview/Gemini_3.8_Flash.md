# MiniMax M3.1 Flash Preview — findings by Gemini 3.8 Flash

- Source: MiniMax (`minimax-m3.1-flash-preview`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** High-throughput multimodal reasoning model from MiniMax featuring 1M context powered by MiniMax Sparse Attention (MSA), 73.7% DeepSWE v1.1, and multi-tier internal reasoning traces (tested stealthily as Space Bunny).
- **Provider / access:** MiniMax Code platform & API, [OpenRouter](https://openrouter.ai/models/minimax/minimax-m3.1-flash) (`minimax/minimax-m3.1-flash-preview` / `minimax/minimax-m3.1-flash`).
- **Release / knowledge:** September 2026 release; late-2026 knowledge cutoff.
- **IDs:** `minimax/minimax-m3.1-flash-preview`, `minimax/minimax-m3.1-flash`, `minimax-ai/minimax-m3.1-flash`
- **Context window:** 1,000,000 tokens context window; up to 524,288 token output headroom.
- **Modalities:** Native multimodal: text, image, and video input; text and code output. Always-on multi-tier internal thinking process (up to 5 effort levels).
- **Pricing (as of 2026-10-21):** OpenRouter hosts at ~$0.15 / 1M input tokens, ~$0.60 / 1M output tokens ($0.015 / 1M cached input); also available through MiniMax Code token plans.
- **Architecture:** ~428B Mixture-of-Experts (MoE) with ~23B active parameters per token, optimized with MiniMax Sparse Attention (MSA) generating ~120 tokens/sec.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **38.1%**
- Automation-Bench v1.0.6: **62.2%–62.8%**
- Agents' Last Exam (ALE): **30.0%**
- Structured Tool Execution: Fast tool call emission in MiniMax Code and terminal agents.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **42–43**
- Plotly Data Analytics Benchmark: **95% (41/43)** pattern-recognition & hidden-trap avoidance
- Multi-tier reasoning: Always-on internal reasoning trace providing strong analytical decomposition.
- Hallucination profile: Elevated hallucination rates when pushed far outside deterministic distributions.

Coding:

- DeepSWE v1.1: **73.7%**
- KingBench 3: **66.25% (53/80)** (AICodeKing coding & simulation suite; major gain over M3's 31.25%)
- SWE-bench Verified (community evaluation proxy): **~59.0%–63.0%**
- Code Output Throughput: ~120 tokens/sec for rapid interactive coding loops.

Long context & Vision:

- 1,000,000 tokens context window powered by MSA KV-block selection.
- BabyVision: **91.0%**

### Normalized scores (1–100)

- **Tool use: 68/100.** Fast tool formatting and 62.5% Automation-Bench, balanced against 38.1% Terminal-Bench 4.0 and occasional tool state drift in unattended multi-turn loops.
- **Reasoning: 74/100.** High-speed multi-tier internal thinking with 95% on Plotly Data Analytics and 43 on AA Intelligence Index, tempered by higher edge-case hallucination tendencies.
- **Context window: 95/100.** Native 1,000,000 token context window with MSA sparse attention and up to 524K output capability.
- **Multimodal: 80/100.** Native multimodal support with 91.0% on BabyVision and robust image/video input handling.
- **Coding: 76/100.** Validated 73.7% on DeepSWE v1.1 and 66.25% on KingBench 3 demonstrate high coding velocity and strong bug-resolution skills.
- **Cost efficiency: 94/100.** Ultra-competitive at $0.15 / $0.60 per 1M tokens ($0.015 cached) on OpenRouter with ~120 tok/s throughput.
- **Overall Score: 79/100.** Arithmetic mean of non-cost metrics: (68 + 74 + 95 + 80 + 76) / 5 = 78.6 → 79. High-throughput, cost-effective multimodal reasoning flash model with fast agentic code generation.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Multi-source web research across official MiniMax disclosures, OpenRouter pricing, KingBench 3, DeepSWE benchmarks, and community evaluations.
