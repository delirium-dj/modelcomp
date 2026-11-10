# Nemotron 3.5 Super VL — findings by Inkling 2 Small

- Source: NVIDIA (`nemotron-3.5-super-vl`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's open, customizable multimodal MoE for specialized agentic workflows (document understanding, visual reasoning, coding, tool use) — a 120B-total / 12B-active hybrid Mamba-Transformer vision-language model with a C-RADIO v4-H vision encoder. Released 2026-10-15.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` and NVFP4 quantized variant); NVIDIA NIM (`nvidia/nemotron-3.5-super-vl-120b-a12b`); build.nvidia.com free endpoint; OpenRouter (`nvidia/nemotron-3.5-super-vl`); vLLM recipes.
- **Release / knowledge:** 2026-10-15; knowledge cutoff not publicly stated.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` (HF); `nvidia/nemotron-3.5-super-vl-120b-a12b` (NIM)
- **Context window:** 1M tokens supported (BenchLM + NVIDIA NeMo cookbook); llm-stats tracks 262K — sources disagree; max output undisclosed.
- **Modalities:** text, image, and video in; text out; reasoning (thinking) yes; tool calls yes; IFBench 70.9% verified instruction following.
- **Pricing (as of 2026-11-10):** ~$0.20 / 1M input, ~$1.00 / 1M output, ~$0.10 cached input (as tracked by llm-stats; NVIDIA NIM free endpoint and self-host available).
- **Architecture:** hybrid Mamba-Transformer MoE, 120B total (124B incl. vision) / 12B active, C-RADIO v4-H vision encoder; BF16 and NVFP4 checkpoints.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.7%** (NVIDIA BF16 model card)
- τ²-bench Airline: **76.5%** (BF16 card); τ³-bench: **18.9%**
- BrowseComp: **78%** (BF16 card)
- GDPval-AA: **1211** (vendor); normalized **33.1%** (Artificial Analysis)
- IFBench: **70.9%** (BF16 card)

Reasoning / knowledge:

- GPQA-D: **89.5%** (BF16 card)
- HLE: **29.2%** (31.8% w/o tools; AA-HLE **30.7%**)
- AA Intelligence Index: **13.6%** (Artificial Analysis); BenchLM **49.16/100** (#102/1020)
- CritPt: **10.9%** (BF16 card)
- Apex Shortlist: **88.4%** (BF16 card)
- AA-LCR: **68.6%** (BF16 card / Artificial Analysis)
- AA-Omniscience: Index **4.0**, Accuracy **26.2%**, Hallucination **30.0%**

Coding:

- LiveCodeBench v6: **88.2%** (BF16 card)
- SWE-bench Verified: **71.1%** (BF16 card)
- SWE Multilingual: **67.7%**; SWE-bench Pro: **51.8%** (BF16 card)
- AA-SciCode: **47.8%** (Artificial Analysis)

Long context:

- AA-LCR: **68.6%** at up to 1M tokens (source lists 1M; llm-stats context read 262K — see Model card).

Multimodal:

- V* (visual search): **85.6%**; CharXiv: **80.8%**; MathVision: **78.2%**
- MMLongBench-Doc: **62.8%** (document understanding); BabyVision: **29.6%**

### Normalized scores (1–100)

- **Tool use: 69/100.** τ²-Airline 76.5%, BrowseComp 78%, Terminal-Bench 2.1 66.7% — solid; capped by τ³-bench 18.9% and GDPval-AA 33.1% (AA-normalized).
- **Reasoning: 48/100.** GPQA-D 89.5% and Apex 88.4% coexist with HLE 29.2%, CritPt 10.9%, AA Index 13.6% — strong domain recall, weak frontier reasoning.
- **Context window: 82/100.** Up to 1M tokens (source discrepancy noted); AA-LCR 68.6%.
- **Multimodal: 76/100.** Text/image/video in; V* 85.6%, CharXiv 80.8%, MathVision 78.2%; BabyVision 29.6% and no audio/video output cap it.
- **Coding: 74/100.** LCB v6 88.2%, SWE-bench Verified 71.1%, SWE Multilingual 67.7%; capped by SWE-Pro 51.8% and AA-SciCode 47.8%.
- **Cost efficiency: 90/100.** ~$0.20/$1.00 per 1M and open weights — among the cheapest credible VLMs; free NIM endpoint.
- **Overall Score: 70/100.** (69 + 48 + 82 + 76 + 74) / 5 = 69.8 → 70. Best fit: open, cheap multimodal agentic deployments (docs/vision/coding); weak for hardest frontier reasoning.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (NVIDIA developer blog, HF BF16 model card, BenchLM, Artificial Analysis, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA Nemotron 3.5 Super VL Powers Specialized Agents — NVIDIA Developer](https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/)
  - [NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16 — Hugging Face](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)
  - [Nemotron 3.5 Super VL 120B A12B — BenchLM](https://benchlm.ai/models/nemotron-3-5-super-vl-120b-a12b)
  - [Nemotron 3.5 Super VL — llm-stats](https://llm-stats.com/models/nemotron-3.5-super-vl-120b-a12b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
