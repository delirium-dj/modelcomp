# Nemotron 3.5 Super VL — findings by Flint

- Source: NVIDIA / Nemotron 3.5 Super VL 120B A12B
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B (NVIDIA; Nemotron family).
- **Short description:** NVIDIA open-weight (OpenMDW-1.1) 120B/12B-active MoE with Mamba-2 hybrid + C-RADIO vision-language tuning, aimed at multimodal / video-length agentic workloads.
- **Provider / access:** Open weights (OpenMDW-1.1) on Hugging Face + NVIDIA NVFP4 builds; hosted inference via PrimaLabs, Baseten, CoreWeave, Together AI, Nebius; NanoGPT hosted tier $0.15/$0.50 per Mtok. No OpenCode Zen Free ID (free tier = self-host on OpenMDW-1.1).
- **Release / knowledge:** Released 2026-10-15 per NVIDIA sources; knowledge cutoff not stated in verified sources.
- **IDs:** nvidia/nemotron-3.5-super-vl-120b-a12b (HF NVFP4); OpenMDW-1.1 license.
- **Context window:** 1,000,000 native (host-served 262,144).
- **Modalities:** Text, image, video in; text out; reasoning; tool use.
- **Pricing (as of 2026-10-27):** Open weights self-host free (OpenMDW-1.1); hosted $0.15 in / $0.50 out per Mtok (NanoGPT).
- **Architecture:** MoE 120B total / 12B active + Mamba-2 + C-RADIO VLM hybrid, open weights (OpenMDW-1.1).

### Raw benchmarks found

- Reasoning / knowledge:
  - GPQA-Diamond: **89.52** / **89.90** (build.nvidia.com NVFP4).
  - HLE: **31.79** / **31.44**.
  - MMLU-ProX: **76.91** / **73.76**.
  - Artificial Analysis Super VL Intelligence Index: **26** (#1 in class, open weights, Oct 2026).
- Coding / agent use:
  - SWE-bench Verified: **71.1%**.
  - BenchLM Super VL 120B A12B: overall **49.23** (#104/992); Terminal-Bench 2.1: **66.7%**; LiveCodeBench v6: **88.22%**; SWE-bench Pro: **51.78%**; Multilingual: **67.72%**.
- Agentic / reasoning:
  - ARC-AGI: **22.7%** (v1 high) / **1.9%** (v2 medium).

### Cross-source comparison

- Artificial Analysis Super VL Intelligence Index **26** (#1 open-weight class, Oct 2026) vs BenchLM Super VL 120B A12B overall **49.23** (#104/992) — independent-vs-leaderboard composite disagreement.
- GPQA-Diamond **89.52 / 89.90** (NVIDIA NVFP4) — very high; HLE ~**31** mid band.

### Normalized scores (1–100)

- **Tool use: 65/100.** SWE-bench Verified **71.1%**, Terminal-Bench 2.1 **66.7%**, LiveCodeBench v6 **88.22%** → mid-high agentic-coding tier → ~65.
- **Reasoning: 75/100.** GPQA-Diamond ~**89.9%** (top-tier), HLE ~**31**, MMLU-ProX ~**75** → strong reasoning, mid knowledge-recall → ~75.
- **Context window: 95/100.** Native **1M** (host-served 262,144) → top tier.
- **Multimodal: 85/100.** VLM (image + video in, text out) → strong multimodal band → ~85.
- **Coding: 72/100.** SWE-bench Verified **71.1%**, SWE-bench Pro **51.78%**, LiveCodeBench v6 **88.22%** → mid → ~72.
- **Cost efficiency: 100/100.** Open weights (OpenMDW-1.1) self-host free; hosted $0.15/$0.50 per Mtok → high value.

- **Overall Score: 78/100.** Mean of the five quality dims (Tool 65 + Reasoning 75 + Context 95 + Multimodal 85 + Coding 72) / 5 = 78; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-27
- Method: public web research prioritizing official NVIDIA model card/docs plus independent benchmarks/reviews — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
