# Nemotron 3.5 Lightning (free) — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Nemotron 3.5 Lightning
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE:** This folder tracks the **free tier** of NVIDIA's open Nemotron 3.5 Lightning — `nvidia/nemotron-3.5-lightning:free` on OpenRouter (NVIDIA provider; rate-limited; 91.15% uptime). It is the same model as the paid/first-party deployment; scores below are the model's, not the tier's. The free endpoint serves the full 1M context with a 65,536-token completion cap.

## Model card

- **Name:** Nemotron 3.5 Lightning (30B-A3B)
- **Short description:** NVIDIA's open, compact execution layer for long-running AI agents — a hybrid LatentMoE (interleaved Mamba-2 + MoE + select attention) with 3B active of 30B total parameters, native Multi-Token Prediction for speculative decoding, positioned on the accuracy-speed Pareto frontier for small open models.
- **Provider / access:** NVIDIA — OpenRouter free endpoint (`nvidia/nemotron-3.5-lightning:free`; 0.82s latency, 28 tok/s, 91.15% uptime), build.nvidia.com, NVIDIA NIM containers (OpenAI- and Anthropic-compatible APIs), Hugging Face weights, ModelScope; SurfMind reports 300 tok/s / 0.56s TTFT on the free endpoint. Fully open: weights, data, and recipes.
- **Release / knowledge:** 2026-08-11 (NVIDIA Technical Blog). Knowledge cutoff not captured.
- **IDs:** `nvidia/nemotron-3.5-lightning:free`; folder `nemotron-3.5-lightning-free`.
- **Context window:** 1,000,000 tokens (free endpoint); max output 65,536.
- **Modalities:** Text in, text out.
- **Pricing (as of 2026-10):** Free on the NVIDIA free endpoint (rate-limited); NIM containers require a free NVIDIA Developer Program membership or an AI Enterprise license.
- **Architecture:** Hybrid LatentMoE — interleaved Mamba-2 and MoE layers with select attention layers; 3B active / 30B total; Multi-Token Prediction layers (native speculative decoding); checkpoints in BF16 and NVFP4.

### Raw benchmarks found

**Vendor-reported (NVIDIA NGC model card, BF16 checkpoint; NVFP4 checkpoint in parentheses; evaluation recipes published in NeMo Gym — most benchmarks NeMo Gym-native harnesses, SWE-Bench and Terminal-Bench via NeMo Evaluator; comparators: Qwen 3.6 35B A3B / Gemma 4 26B A4B / Nemotron 3 Nano / Nemotron 3 Super / GPT-OSS 20B):**
- MMLU Pro **81.94** (81.62) — vs Qwen 85.63, Gemma 85.20, Nano 78.46, Super 83.89, GPT-OSS 20B 76.40.
- AA-Omniscience **17.50** (16.63) — vs Qwen 19.47, Gemma 22.17, Nano 20.15, Super 26.68, GPT-OSS 16.62.
- GPQA Diamond (no tools) **76.89** (75.57) — vs Qwen 83.40, Gemma 79.61, Nano 74.05, Super 78.60, GPT-OSS 71.46.
- HLE (text-only, no tools) **11.72** (10.47) — vs Qwen 19.56, Gemma 17.42, Nano 10.89, Super 20.30, GPT-OSS 13.76.
- SciCode **32.60** (31.38) — vs Qwen 35.33, Gemma 40.28, Nano 30.08, Super 35.11, GPT-OSS 38.63.
- SWE-bench Verified **51.56** (52.80) — vs Qwen 70.12, Gemma 57.40, Nano 34.08, Super 63.08, GPT-OSS 52.44.
- SWE-bench Multilingual **39.33** (36.47) — vs Qwen 63.40, Gemma 43.40, Nano 14.07, Super 49.80, GPT-OSS 41.93.
- Terminal-Bench 2.1 **24.58** (23.46) — vs Qwen 44.38, Gemma 37.22, Nano 8.29, Super 39.61, GPT-OSS 15.17.
- PinchBench **85.37** (83.43) — vs Qwen 88.07, Gemma 74.70, Nano 66.11, Super 80.36, GPT-OSS 57.20.
- BrowseComp **36.97** (36.81) — vs Qwen 48.74, Gemma 26.30, Nano 13.74, Super 22.77.
- τ³-bench (Banking) **9.28** (9.48) — vs Qwen 10.52, Gemma 14.02, Nano 7.01, Super 12.37.
- GDPval-AA-V2 **832** (865) — vs Qwen 1015, Gemma 807, Nano 473, Super 746.
- IFBench (loose) **71.88** (72.88) — vs Qwen 63.71, Gemma 77.25, Nano 72.17, Super 71.92, GPT-OSS 68.50.
- AA-LCR **52.00** (49.19) — vs Qwen 61.06, Gemma 57.56, Nano 32.75, Super 58.44, GPT-OSS 32.88.

**Vendor claims (NVIDIA blog):** defines the accuracy-speed Pareto frontier for small open models on the AA Intelligence Index; on PinchBench it reaches ~86% accuracy while completing 10,000 tasks **30% faster than Qwen3.6 35B** at comparable accuracy.

**Artificial Analysis (independent, free endpoint):** Intelligence Index **12.9**; Coding Index **26.8**; Agentic Index **3.5**; GPQA Diamond **74.3%**; HLE **10.6%**; AA-LCR **60.3%**; GDPval-AA **6.2%**; CritPt **0.0%**; SciCode **32.1%**; AA-Omniscience accuracy 14.4% / non-hallucination rate **62.4%**.

## Scores

- **Tool use: 59/100.** PinchBench 85.37% (with the 30%-faster-than-Qwen3.6 claim), BrowseComp 36.97%, τ³-bench Banking 9.28%, Agentic Index 3.5 — strong agentic tooling for the size class, weak on banking-domain agentics.
- **Reasoning: 63/100.** GPQA Diamond 76.89% (vendor) / 74.3% (AA) and MMLU Pro 81.94 are solid for 3B active; HLE 11.72% / 10.6% and CritPt 0.0% are weak; AA-Omniscience non-hallucination 62.4% is a relative strength.
- **Context window: 91/100.** Native 1M on the free endpoint with AA-LCR 60.3% (AA) / 52.0% (vendor) measured long-context retrieval.
- **Multimodal: 15/100.** Text-only per captured sources.
- **Coding: 59/100.** SWE-bench Verified 51.56% / 52.80% (NVFP4), SWE-bench Multilingual 39.33%, Terminal-Bench 2.1 24.58% / 23.46%, SciCode 32.6%, Coding Index 26.8 — mid-tier in absolute terms, competitive for the size class (ahead of GPT-OSS 20B on SWE-bench Verified and TB 2.1; behind Qwen 3.6 35B and Nemotron 3 Super).
- **Cost efficiency: 100/100.** Free on NVIDIA's endpoint (rate-limited, 91.15% uptime); fully open weights, data, and recipes.
- **Overall Score: 57.4/100.** Mean of Tool use 59, Reasoning 63, Context window 91, Multimodal 15, Coding 59 = 57.4.

> **Gap vs folder average (55.1): +2.3.** Slightly above the peer set, driven by the 1M free context with a measured AA-LCR row and the strong-for-size agentic rows (PinchBench 85.37%, GPQA ~75-77%). The weak absolute rows (TB 2.1 24.58%, SWE-bench Multilingual 39.33%, HLE ~11%, CritPt 0.0%) and the text-only profile are the drags; the score is consistent with the peer set within the margin of interpretation.

## Notes

- Verification trail: NVIDIA Technical Blog (2026-08-11; positioning; PinchBench 10,000-task claim; availability), NVIDIA NGC model card `NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16` (full benchmark table with comparators; NeMo Gym methodology note), build.nvidia.com NVFP4 model card (BF16 vs NVFP4 pairs), NVIDIA NIM docs (hybrid LatentMoE architecture; MTP layers; API compatibility; licensing), OpenRouter page (free pricing; provider stats; full AA benchmark table; 1M/65,536 limits), SurfMind (300 tok/s; 0.56s TTFT).
- Known conflicts: vendor GPQA 76.89% (BF16) vs AA 74.3%; vendor AA-LCR 52.0% vs AA 60.3% — different harnesses/effort settings, reported as-is.
- Open questions: knowledge cutoff; the paid tier's pricing (the free tier is what this folder tracks); independent agentic replications.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: independent replications, paid-tier pricing, knowledge-cutoff disclosure.
