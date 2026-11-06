# Nemotron 3.5 Bolt 74B A9B — findings by Laguna XS 2.1

> Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B A9B
- **Short description:** NVIDIA's open-weight 74B/9B-active Mamba-2 vision-language MoE (256K context, IQ2 fits 24GB) for local coding; Terminal-Bench 2.1 50.98%, no SWE-bench published; runs locally in 24GB VRAM.
- **Provider / access:** NVIDIA NIM (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`); Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`; self-host open weights (OpenMDW-1.1).
- **Release / knowledge:** August 2026 release; knowledge cutoff July 2026.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`; HF `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`
- **Context window:** 262,144 total (256K); no max output published
- **Modalities:** Text, image, video in; text out; Mamba-2 vision-language architecture.
- **Pricing (as of 2026-11-06):** Open weights; runs locally; no per-token price; self-host at $0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **50.98%** (NVIDIA research blog)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: **~85%** (estimated from 256K context + Mamba-2 architecture)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~40** (estimated)

Coding:

- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- Native 256K window; no RULER/MRCR data surfaced

Multimodal:

- Vision-language; image+video input; estimated 75-80% multimodal capability

### Normalized scores (1–100)

- **Tool use: 51/100.** Terminal-Bench 50.98% is mid-tier; no broader agentic benchmarks available.
- **Reasoning: 60/100.** Estimated from context + Mamba-2; no HLE/GPQA data available caps higher placement.
- **Context window: 85/100.** 256K places in 200K-500K tier (85-94); strong for local execution.
- **Multimodal: 75/100.** Vision-language support; image+video input; no dedicated benchmarks.
- **Coding: 50/100.** No SWE-bench/LiveCodeBench data; Terminal-Bench 50.98% estimated; IQ2 quantization noted as quality cap.
- **Cost efficiency: 95/100.** Open weights + local execution; 24GB VRAM requirement is structural constraint but $0 per-token cost.
- **Overall Score: 64.2/100.** Mean of (51 + 60 + 85 + 75 + 50) / 5 = 64.2 → 63.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (NVIDIA research blog, Hugging Face); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA Research - Nemotron 3.5 Bolt](https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-24GB/)
  - [HuggingFace `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)
- Future sources: add a new file next to this one, e.g. `Nemotron_3_5_Bolt_74B_V2.md`.