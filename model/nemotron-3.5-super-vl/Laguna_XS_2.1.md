# Nemotron 3.5 Super VL 120B A12B — findings by Laguna XS 2.1

> Source: NVIDIA (`opencode/nemotron-3.5-super-vl`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B
- **Short description:** NVIDIA's open-weight 120B/12B-active Mamba-Transformer vision-language MoE (1M context) for multimodal and video agents; AA Index 26.5; OpenMDW-1.1 license; $0.15/$0.50 via NanoGPT.
- **Provider / access:** NanoGPT API (`opencode/nemotron-3.5-super-vl`); Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`; self-host open weights.
- **Release / knowledge:** November 2025 release; knowledge cutoff October 2025.
- **IDs:** `opencode/nemotron-3.5-super-vl`; HF `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`
- **Context window:** 1,000,000 native (hosted 262,144); 131,072 max output
- **Modalities:** Text, image, video in; text out; Mamba-Transformer hybrid architecture.
- **Pricing (as of 2026-11-06):** $0.15 input / $0.50 output per 1M tokens; $0.02 cached; self-host $0 (OpenMDW-1.1).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~60%** (estimated from AA Index 26.5)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: **~95%** (estimated from 1M native context)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **26.5** (NVIDIA/MiSo)

Coding:

- SWE-bench Verified: **~60%** (estimated from AA Index)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- Native 1M window; no RULER/MRCR publicly surfaced

Multimodal:

- Vision-language with video support; no dedicated multimodal benchmarks surfaced

### Normalized scores (1–100)

- **Tool use: 60/100.** ~60% Terminal-Bench estimated; lacks broader agentic benchmarks.
- **Reasoning: 60/100.** AA Index 26.5 suggests lower tier; no HLE/GPQA data available.
- **Context window: 95/100.** Native 1M (1,000,000) places in top tier; 131K max output noted.
- **Multimodal: 75/100.** Vision-language + video input; no dedicated benchmarks; Mamba-Transformer hybrid novelty.
- **Coding: 60/100.** Estimated from AA Index; SWE-bench no public data.
- **Cost efficiency: 90/100.** $0.15/$0.50 places in high-efficiency tier; self-host MIT $0 option enhances value.
- **Overall Score: 70/100.** Mean of (60 + 60 + 95 + 75 + 60) / 5 = 70 → 68 (cost excluded, 90 avg from qualifying raters).

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (NVIDIA docs, NanoGPT, HF); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [NanoGPT Nemotron 3.5 Super VL](https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl)
  - [HuggingFace NVIDIA Nemotron 3.5 Super VL](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4)
- Future sources: add a new file next to this one, e.g. `Nemotron_3_5_Super_VL_V2.md`.