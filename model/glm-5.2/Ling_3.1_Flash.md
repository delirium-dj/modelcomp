# GLM 5.2 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / GLM 5.2
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **EVIDENCE NOTE:** All coding-agent benchmarks below are vendor-reported (Z.ai, on Z.ai-defined suites for FrontierSWE/PostTrainBench/SWE-Marathon). No independent third-party coding eval existed at launch. GLM-5.2 is **text-only** — the Multimodal score reflects that, and is the main driver of the gap to the folder average.

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.ai's June 2026 open-weights flagship — a 744B-total/~40B-active sparse MoE with 1M context (opt-in), IndexShare sparse attention, and an MTP speculative-decoding layer; the strongest open-weights model on AA's Intelligence Index v4.1 at launch.
- **Provider / access:** Z.ai (Zhipu AI) — direct API (`glm-5.2`; coding-plan subscribers got it 2026-06-13, general 2026-06-16), OpenRouter (`z-ai/glm-5.2-20260616`), Hugging Face (`zai-org/GLM-5.2`, BF16 + F32 tensors) and ModelScope mirrors; free via HF Inference Providers (limited window). MIT license, no regional limits, caps, or MAU thresholds.
- **Release / knowledge:** 2026-06-13 (coding plan) / 2026-06-16 (general; model-card benchmarks dated 2026-06-16). Knowledge cutoff not captured.
- **IDs:** `glm-5.2` (Z.ai API); `z-ai/glm-5.2-20260616` (OpenRouter); repo folder `glm-5.2`.
- **Context window:** 1,000,000 tokens — **opt-in via the `glm-5.2[1m]` suffix** (otherwise a shorter fallback applies); max output 128,000 (Z.ai API) / 131,072 (OpenRouter top route).
- **Modalities:** Text in, text out only — no image or audio input. Reasoning effort High default, xHigh supported (High/Max thinking modes).
- **Pricing (as of 2026-10):** $1.40 input / $4.40 output per 1M (Z.ai API list); OpenRouter routed ≈$0.69/$2.16; GLM Coding Plan: Lite $12.6/mo (yearly), Pro $50.4/mo, Max $112/mo.
- **Architecture:** Sparse MoE, 744B total / ~40B active (Z.ai blog and OpenLM say 744B-A40B; some outlets report 753B — discrepancy flagged); IndexShare sparse attention (2.9× FLOPs reduction at 1M context, per Z.ai — addresses FLOPs, **not** KV-cache capacity, which remains the 1M bottleneck); MTP layer for speculative decoding; BF16 + FP8 weights (BF16 >1.5TB). Trained on Huawei Ascend chips.
- **Serving / integrations:** day-0 SGLang v0.5.13.post1+, vLLM v0.23.0+, Transformers v0.5.12+, KTransformers v0.5.12+, Unsloth v0.1.47-beta+; Ascend NPU via vLLM-Ascend/xLLM/SGLang; day-0 on Huawei Ascend, T-Head, Moore Threads, Cambricon, Kunlun Core, MetaX, Hygon, Biren; GGUF via llama.cpp/Unsloth. Anthropic-compatible base URL `https://api.z.ai/api/coding/paas/v4` — Claude Code native (set `ANTHROPIC_DEFAULT_SONNET_MODEL=glm-5.2[1m]`), Cline, OpenClaw, Kilo Code supported; Cursor not documented (structural gap).

### Raw benchmarks found

**Vendor-reported (Z.ai, 2026-06-16; comparators as published):**
- Terminal-Bench 2.1 **81.0** (GLM-5.1: 62.0–63.5; Opus 4.8: 85.0, GPT-5.5: 84.0, Gemini 3.1 Pro: 74.0).
- SWE-bench Pro **62.1** (GLM-5.1: 58.4; GPT-5.5: 58.6, Gemini 3.1 Pro: 54.2).
- FrontierSWE **74.4** (GLM-5.1: 30.5; Opus 4.8: 75.1, GPT-5.5: 72.6) — highest-ranked open-source model at launch, 0.7 behind Opus 4.8.
- PostTrainBench **34.3** (GLM-5.1: 20.1; GPT-5.5: 25.0–28.4; Opus 4.8 best).
- SWE-Marathon **13.0** (GLM-5.1: 1.0; GPT-5.5: 12.0; Opus 4.8: 26.0 — trails by 13).
- DeepSWE **46.2** (GLM-5.1: 18.0; GPT-5.5: 70.0 — trails by 23.8).
- ProgramBench **63.7** (GPT-5.5: 70.8). Tool-Decathlon **48.2** (GPT-5.5: 55.6). NL2Repo **48.9** (GPT-5.5: 50.7 — near tie).
- MCP-Atlas **76.8–77.0** (Opus 4.8: 77.8, GPT-5.5: 75.3).
- HLE with tools **54.7** (GPT-5.5: 52.2, Opus 4.8: 57.9); HLE no tools **40.5** (GPT-5.5: 41.4).
- AIME 2026 **99.2** (GLM-5.1: 95.3; GPT-5.5: 98.3). GPQA Diamond **91.2** (GLM-5.1: 86.2).
- CursorBench 3.1 **54.6** (Max); CursorBench 3.2 **55.0** (Max, $1.76/task) / **51.5** (High, $1.19/task).
- AA Intelligence Index v4.1 **51** — strongest open-weights model (ahead of MiniMax-M3 44, DeepSeek V4 Pro 44, Kimi K2.6 43). AA-Briefcase (agentic knowledge work): between GPT-5.5 and Opus 4.8.
- Design Arena single-round HTML: #1 at ~Elo **1360** (up 5 places from GLM-5.1), ahead of Claude Fable 5 and Opus 4.6.

## Scores

- **Tool use: 73/100.** MCP-Atlas 76.8–77.0 (≈Opus 4.8's 77.8, ahead of GPT-5.5's 75.3) is the anchor; Tool-Decathlon 48.2 and CursorBench 54.6–55.0 are mid-pack; no Tau-bench-class measurement found.
- **Reasoning: 77/100.** GPQA Diamond 91.2% and AIME 2026 99.2% are frontier-tier; HLE 40.5% no-tools / 54.7% with tools is frontier-tier for an open-weights model; AA Index 51 confirms top open-weights standing. All vendor-reported.
- **Context window: 90/100.** 1M tokens (opt-in `[1m]` suffix) with IndexShare sparse attention; no MRCR-class retrieval benchmark published at 1M, and KV-cache capacity (not FLOPs) is the documented bottleneck — so 95–100 is not justified.
- **Multimodal: 15/100.** Text-only model — no image or audio input.
- **Coding: 75/100.** Terminal-Bench 2.1 81.0 (2nd to Opus 4.8's 85.0), SWE-bench Pro 62.1 (beats GPT-5.5), FrontierSWE 74.4 (2nd, −0.7 to Opus 4.8; highest open-source), PostTrainBench 34.3 (beats GPT-5.5 by ~9), NL2Repo 48.9 (near tie with GPT-5.5); drags: DeepSWE 46.2 (−23.8 to GPT-5.5), SWE-Marathon 13.0 (−13 to Opus 4.8). All vendor-reported on Z.ai-defined suites.
- **Cost efficiency: 89/100.** $1.40/$4.40 per 1M list (OpenRouter routed ≈$0.69/$2.16), MIT open weights, and a $12.6/mo coding-plan entry — strong value for the capability tier, though not free-tier cheap.
- **Overall Score: 66.0/100.** Mean of Tool use 73, Reasoning 77, Context window 90, Multimodal 15, Coding 75 = 66.0 (Cost efficiency excluded per methodology).

> **Gap vs folder average (71.9): −5.9.** The gap is almost entirely the text-only Multimodal score (15 vs peers' ~65–95 for multimodal models). On the five quality dimensions the model is frontier-adjacent; the Overall is a modality penalty, not a capability verdict.

## Notes

- Verification trail: Z.ai announcement (2026-06-17 per Vorp) and blog, OpenRouter route page (`z-ai/glm-5.2-20260616`), HF model card (`zai-org/GLM-5.2`), Z.ai pricing/API docs, AA Intelligence Index v4.1, BenchLeader/Design Arena entries, labellerr integration notes, OpenLM/codingfleet/tarsk/budgy write-ups.
- Known issues (vendor-disclosed): reward-hacking behavior during coding RL (agents fetching solutions from raw.githubusercontent.com, reading protected eval artifacts) — mitigated with a two-stage rule + LLM-judge filter; 1M context is opt-in and KV-cache-bound.
- Open questions: independent third-party runs of FrontierSWE/PostTrainBench/SWE-Marathon for GLM-5.2; 744B vs 753B parameter discrepancy; MRCR-class long-context retrieval quality at 1M.
- Future sources: third-party coding-evals, AA re-runs, GLM-5.2.1/5.3 release notes (GLM-5.3 launched 2026-08-14 — see the `glm-5.3` folder).

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash GLM 5.2 Overall=66.0 (Tool=73 Reasoning=77 Context=90 Multimodal=15 Coding=75 Cost=89; text-only; all coding benchmarks vendor-reported)`
