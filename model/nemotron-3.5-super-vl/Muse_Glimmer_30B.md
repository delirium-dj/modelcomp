# Nemotron 3.5 Super VL — findings by Muse_Glimmer_30B

- Source: NVIDIA (`opencode/nemotron-3.5-super-vl`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B
- **Short description:** NVIDIA's open-weight 120B-total / 12B-active Mamba-Transformer hybrid MoE vision-language model with 1M native context, video/document understanding, and tool use. OpenMDW-1.1 licensed.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-super-vl`; OpenRouter `nvidia/nemotron-3.5-super-vl`; NanoGPT; DeepInfra; NVIDIA NIM `build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b`; Hugging Face weights. Chat Completions compatible.
- **Release / knowledge:** released 2026-10-15 (NVIDIA newsroom + technical report 2026-10-14); knowledge cutoff not disclosed.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B` BF16, `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4` quantized; served name `nemotron-3.5-super-vl`. `meta.json` `noFreeId: true`.
- **Context window:** up to 1,000,000 tokens native (Hugging Face model card); hosts serve 262,144 (NanoGPT / NIM NVFP4). Max output varies by host.
- **Modalities:** Text, image, document, video in; text out; tool calling; reasoning toggle; Multi-Token Prediction. No audio input.
- **Pricing (as of 2026-10-20):** NanoGPT $0.15 in / $0.50 out per 1M, cache $0.02; OpenRouter $0.10/$0.40 plus free route; self-host free under OpenMDW-1.1. `meta.json` pricing tiers reflect NanoGPT + self-host.
- **Architecture:** 120B total / 12B active MoE, Mamba-2–Transformer hybrid with 8 attention layers + 512 experts, C-RADIO vision encoder, MTP head, OpenMDW-1.1.

### Raw benchmarks found

> Verified public scores from Hugging Face model card `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4` benchmarks table and NVIDIA technical report. BF16 column quoted unless noted. Zero invented values.

Agent / tool use:

- Terminal-Bench 2.1: **60.67%** BF16 / 62.78% NVFP4
- τ²-bench retail: **69.24%** / 69.30%; airline **76.50%** / 75.75%; telecom **73.19%** / 73.19%
- τ³-bench Banking: **18.88%** / 17.78%
- GDPval-AA v2: **1211 Elo** / 1206
- BrowseComp: **78%** / 77.5%
- AutomationBench-AA offline: **32.44%** / 32.3%
- AA-Briefcase-Lite offline: **1137 Elo** / 1252

Reasoning / knowledge:

- GPQA Diamond: **89.52%** / 89.90%
- HLE text-only: **31.79%** / 31.44%; HLE full set **29.20%** / 29.00%
- MMLU-ProX: **76.91%** / 73.76%
- AA-Omniscience accuracy **26.20%** / 25.86%; hallucination rate **30.0%** / 27.7%; index **4.03** / 5.3
- AA Intelligence Index: **26.5** per `meta.json` short
- AA-LCR v1.1: **68.62%** / 67.69%
- GraphWalks: **89.71%** / 90.34%
- IFBench: **70.86%** / 71.50%

Coding:

- SWE-bench Verified: **71.10%** / 71.07%
- SWE-bench Pro: **51.78%** / 51.30%
- SWE-bench Multilingual: **67.72%** / 67.00%
- LiveCodeBench v6: **88.22%** / 87.41%
- SciCode subtask: **47.13%** / 46.61%
- DeepSWE offline: **24.65%** / 18.2%

Multimodal:

- CharXiv reasoning: **80.82%** / 79.88%
- V*: **85.60%** / 85.95%
- MMLongBench-Doc: **62.82%**
- BabyVision: **29.60%** / 29.51%
- OCRBench v2 EN: **68.12%** / 68.34%
- Video-MME v2: **32.85%** / 32.54%
- OSWorld-Verified: **51.14%** / 52.3%

Long context:

- Native 1M context per model card; AA-LCR v1.1 68.62% is the quantified retrieval signal. No RULER ≥256K published for this checkpoint.

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-bench 69–76% and BrowseComp 78% + GDPval-AA 1211 Elo show solid mid-tier agentic tool use; Terminal-Bench 2.1 60.7%, τ³-bench Banking 18.9%, AutomationBench 32.4% cap it.
- **Reasoning: 75/100.** GPQA Diamond 89.5% and AA-LCR 68.6% are strong; HLE 31.8%, AA Omniscience accuracy 26.2% / hallucination 30%, Intelligence Index 26.5 keep it mid-frontier.
- **Context window: 90/100.** Native 1M per Hugging Face card lands in ≥1M tier; hosted caps at 262K and no ≥512K retrieval curve published.
- **Multimodal: 85/100.** Text + image + document + video in, text out; CharXiv 80.8%, V* 85.6%, OCRBench v2 68% support upper-mid band; BabyVision 29.6%, Video-MME v2 32.9% and text-only output prevent ≥90.
- **Coding: 78/100.** LiveCodeBench v6 88.2% is frontier-class; SWE-bench Verified 71.1%, Pro 51.8%, SciCode 47.1% are mid-pack; DeepSWE 24.7% drags the band down.
- **Cost efficiency: 95/100.** $0.15/$0.50 NanoGPT, OpenRouter $0.10/$0.40, free self-host under OpenMDW-1.1. No Zen free ID costs 5 pts.
- **Overall Score: 79.6/100.** Half-up mean of five quality dims (70 + 75 + 90 + 85 + 78) / 5 = 79.6. Best fit: cheap, 1M-native open-weight multimodal/video agent with strong coding speed but mid-tier reasoning and agentic depth.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research using `model/nemotron-3.5-super-vl/meta.json` and webfetch of https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
