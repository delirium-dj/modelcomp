# Laguna S 2.1 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Laguna S 2.1
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's compact agentic-coding MoE — 118B total / 8B active, designed for long-horizon work that "holds its own against models many times its size"; uniquely suitable for complex work on local machines.
- **Provider / access:** Poolside — Hugging Face (day one, OpenMDW-1.1; BF16, FP8, INT4, NVFP4 weights; official GGUF and MLX conversions; official DFlash), OpenRouter (free endpoint with 256K context; dedicated paid endpoint with full 1M), Vercel AI Gateway (`poolside/laguna-s-2.1`; mirrors provider pricing, no markup, no platform fee, incl. BYOK), Baseten Model Library and Frontier Gateway.
- **Release / knowledge:** 2026-07-21 (AI Gateway availability 2026-07-20). Start-to-launch in under nine weeks. Knowledge cutoff not captured.
- **IDs:** `poolside/Laguna-S-2.1`; folder `laguna-s-2.1`. Sits between Laguna XS 2.1 (33B-A3B) and Laguna M.1 (225B-A23B).
- **Context window:** 1,000,000 tokens (thinking and no-thinking modes); max output 131,072. OpenRouter free endpoint caps at 256K.
- **Modalities:** Text in, text out (no vision documented).
- **Pricing (as of 2026-10):** $0.09 / $0.18 per 1M input/output, cache read $0.009-$0.01 (OpenRouter/Poolside); $0.10 / $0.20 (Vercel AI Gateway).
- **License:** OpenMDW-1.1 (open weights, use-restricted).
- **Architecture:** Sparse MoE, 118B total / 8B active; token-choice router with softplus gating over 256 routed experts + 1 shared expert; grouped-query attention; interleaved full/sliding-window attention.

### Raw benchmarks found

**Vendor-reported (Poolside blog, 2026-07-21; pass@1 averaged over 4 attempts per task, except DeepSWE / SWE Atlas Codebase QnA / Toolathlon Verified at 3 attempts; max of vendor self-reported / benchmark-author leaderboard / AA third-party, except SWE Atlas Codebase QnA excludes third-party figures; full trajectories for every trial at trajectories.poolside.ai):**
- Terminal-Bench 2.1 **70.2%** (thinking enabled, Poolside's "pool" agent harness) — **#11 on the TB 2.1 board** as of 2026-07-21 (GPT-5.6 Sol 88.8, Kimi K3 88.3, Claude Fable 5 88.0, GPT-5.6 Terra 87.4, GPT-5.6 Luna 84.7, Opus 4.8 84.6, Sonnet 5 80.4, Muse Spark 1.1 80.0, Qwen 3.7 Max 74.5, Hy3 71.7, **Laguna S 2.1 70.2**, MiniMax M3 66.0, DeepSeek-V4-Pro-Max 64.0, Inkling 63.8, DeepSeek-V4-Flash-Max 61.8, Nemotron 3 Ultra 56.4, ... Laguna XS 2.1 33.4, Mistral Small 4 21.4).
- SWE-Bench Multilingual **78.5%** (Hy3 75.8; DeepSeek-V4-Pro-Max 76.2; Qwen 3.7 Max 78.3; Nemotron 3 Ultra 67.7).
- SWE-Bench Pro (Public Dataset) **59.4%** (Hy3 57.9; Inkling 54.3; DeepSeek-V4-Pro-Max 55.4; Qwen 3.7 Max 60.6; Muse Spark 1.1 61.5; Claude Fable 5 80.3).
- DeepSWE v1.1 **40.4%** (thinking mode, pool harness — not mini-swe-agent, which the DeepSWE leaderboard uses; Poolside notes this does not advantage them, as many models score the same or better in mini-swe-agent; DeepSeek-V4-Pro-Max 9.0; Kimi K3 69.0; Muse Spark 1.1 53.3; Claude Fable 5 70.0).
- SWE Atlas (Codebase QnA) **46.2%** (DeepSeek-V4-Pro-Max 27.2; Muse Spark 1.1 42.2).
- Toolathlon Verified **49.7%** (Inkling 45.5; Nemotron 3 Ultra 34.3; DeepSeek-V4-Pro-Max 55.9; Muse Spark 1.1 75.6).
- **Thinking matters:** max thinking lifts TB 2.1 from 60.4% to 70.2% and DeepSWE from 16.5% to 40.4%; released without user-configurable effort control (thinking enabled by default; the model sets its own budget per problem).

**Other trackers:**
- ModelCap Index **68.2** (#42 of 280; modeled from launch results; range 54.3-82.2).
- ModelsAtlas lists "MMLU Signal 95" (attribution uncertain — jumbled capture, flagged, not relied on).

## Scores

- **Tool use: 59/100.** Toolathlon Verified 49.7%, SWE Atlas Codebase QnA 46.2%, DeepSWE 40.4% (pool harness) — solid agentics, behind Muse Spark 1.1 (75.6 Toolathlon) and DeepSeek-V4-Pro-Max (55.9).
- **Reasoning: 55/100.** No GPQA/HLE captured; ModelCap Index 68.2 (modeled, not measured); thinking-mode lifts (TB 60.4→70.2, DeepSWE 16.5→40.4) show reasoning depth is real but unmeasured on standard reasoning suites.
- **Context window: 91/100.** Native 1M in thinking and no-thinking modes (free endpoint 256K); no MRCR-style retrieval benchmark captured.
- **Multimodal: 15/100.** Text-only per captured sources.
- **Coding: 73/100.** TB 2.1 70.2% (#11), SWE-bench Multilingual 78.5%, SWE-Bench Pro 59.4%, DeepSWE 40.4%, SWE Atlas 46.2% — strong for 8B active parameters; DeepSWE trails Kimi K3 (69.0) and Claude Fable 5 (70.0).
- **Cost efficiency: 93/100.** $0.09/$0.18 per 1M with $0.009 cache reads; open weights (OpenMDW-1.1); free 256K endpoint.
- **Overall Score: 58.6/100.** Mean of Tool use 59, Reasoning 55, Context window 91, Multimodal 15, Coding 73 = 58.6.

> **Gap vs folder average (63.6): −5.0.** The 1M context and strong coding rows (TB 2.1 70.2% #11, SWE-bench Multilingual 78.5%) are fully credited; the gap comes from the text-only Multimodal penalty (15) and the absence of standard reasoning rows (GPQA/HLE) — the ModelCap Index 68.2 is modeled, not measured, so it was not used as a reasoning score.

## Notes

- Verification trail: Poolside blog "Introducing Laguna S 2.1" (2026-07-21; full benchmark table with comparators; thinking-mode lifts; TB 2.1 ranking; methodology and trajectory release), HF `poolside/Laguna-S-2.1` README (architecture detail; license; benchmark table), Vercel AI Gateway page (specs; pricing; free vs paid endpoints; thinking default), OpenRouter/ModelsAtlas/ModelCap (pricing $0.09/$0.18/$0.009; 1M/1.05M context; Index 68.2), ModelsAtlas (MMLU Signal 95 — uncertain attribution).
- Known conflicts: context 1M (Poolside/Vercel) vs 1.05M (ModelCompare) vs 256K (OpenRouter free endpoint — by design); DeepSWE measured in Poolside's harness, not the leaderboard's mini-swe-agent (disclosed).
- Open questions: GPQA/HLE and MRCR rows; the jumbled "MMLU Signal 95" row; parameter/active-parameter confirmation across trackers.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: standard reasoning benchmarks, long-context retrieval rows, independent replications.
