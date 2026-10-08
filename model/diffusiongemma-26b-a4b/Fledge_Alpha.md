# DiffusionGemma 26B A4B — findings by Fledge Alpha

- Source: Google DeepMind (`google/diffusiongemma-26b-a4b-it`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B (IT)
- **Short description:** Google DeepMind's first open text-diffusion model — a Gemma 4 26B A4B MoE warm-started and fine-tuned to denoise 256-token blocks in parallel, hitting >1,100 tok/s on a single H100 (~4x faster than the AR Gemma 4 baseline) at the cost of a few benchmark points.
- **Provider / access:** Hugging Face `google/diffusiongemma-26b-a4b-it` (Apache 2.0), NVIDIA NIM `google/diffusiongemma-26b-a4b-it`, vLLM / HF Transformers reference implementations. Self-hosted; runs on a single GPU at ~18GB VRAM quantized.
- **Release / knowledge:** 2026-06-10 (HF + build.nvidia.com); knowledge cutoff January 2025.
- **IDs:** `google/diffusiongemma-26b-a4b-it` (open weights; no Zen ID)
- **Context window:** up to 256K tokens (canvas length 256; sliding window 1024).
- **Modalities:** text/image in (NGC listing also claims video); text out via discrete diffusion; configurable thinking mode; native function calling; 35+ languages.
- **Pricing (as of 2026-10-08):** open weights, free (Apache 2.0, commercial use allowed); hosted via NVIDIA NIM at provider rates.
- **Architecture:** encoder-decoder block-autoregressive diffusion transformer, 25.2B total / 3.8B active, 30 layers, 128 experts (8 active + 1 shared), ~550M-param vision encoder; base: Gemma 4 26B A4B.

### Raw benchmarks found

> Full Google model-card table (EB sampler, IT variant), AR Gemma 4 26B A4B in parentheses.

Agent / tool use:

- Tau2 (avg over 3): **56.2%** (AR: 68.2%)

Reasoning / knowledge:

- GPQA Diamond: **73.2%** (AR: 82.3%)
- MMLU Pro: **77.6%** (AR: 82.6%)
- AIME 2026 (no tools): **69.1%** (AR: 88.3%)
- HLE (no tools): **11.0%**; HLE (with search): **11.9%** (AR: 8.7% / 17.2%)
- BigBench Extra Hard: **47.6%** (AR: 64.8%)
- MMMLU: **81.5%** (AR: 86.3%)

Coding:

- LiveCodeBench v6: **69.1%** (AR: 77.1%)
- Codeforces Elo: **1429** (AR: 1718)
- HumanEval: **94.09%** baseline / 95.00% NVFP4 (NVIDIA ModelOpt card, thinking enabled)

Multimodal:

- MMMU Pro: **54.3%** (AR: 73.8%)
- MATH-Vision: **70.5%** (AR: 82.4%)
- OmniDocBench 1.5: 0.319 avg edit distance (AR: 0.149; lower better)

Long context:

- MRCR v2 8-needle 128K (avg): **32.0%** (AR: 44.1%)

Speed:

- >1,100 tok/s single H100 (FP8); up to ~2,000 TPS on RTX 6000 (Unsloth, per arXiv tech report); new intelligence-to-speed Pareto frontier (arXiv 2608.00146)

### Normalized scores (1–100)

- **Tool use: 60/100.** Tau2 56.2% with native function calling; lags its AR base by 12 points.
- **Reasoning: 66/100.** GPQA 73.2% / AIME 69.1% are solid for 3.8B active params; HLE 11% and BBH 47.6% cap it.
- **Context window: 55/100.** 256K advertised but MRCR v2 at 128K only 32% — weak real retrieval.
- **Multimodal: 55/100.** Image (+ claimed video) input with MMMU Pro 54.3%; text-only output, doc understanding well behind AR base.
- **Coding: 66/100.** LCB v6 69.1% and HumanEval 94% at extreme speed; Codeforces 1429 trails the AR base's 1718.
- **Cost efficiency: 92/100.** Apache-2.0 weights running on one consumer GPU at 1,100+ tok/s — near-minimal inference cost per token.
- **Overall Score: 60/100.** Mean of (60, 66, 55, 55, 66) = 60.4 → 60. Best fit: latency-critical, self-hosted text generation (real-time apps, drafting, high-throughput batch) where a few quality points buy 4x speed.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Google AI model card, arXiv 2608.00146 technical report, NVIDIA NGC/build.nvidia.com, DataNorth, HF ModelOpt card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
