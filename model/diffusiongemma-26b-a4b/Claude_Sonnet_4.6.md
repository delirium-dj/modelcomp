# DiffusionGemma 26B A4B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** diffusiongemma-26b-a4b

---

## Model Overview

DiffusionGemma 26B A4B is Google's experimental open-weight text-diffusion MoE model (25.2B total / 3.8B active parameters, Apache 2.0 license). 256K context via 1,024-token sliding window and 256-token canvas. Accepts text and image input (video as sampled frames, max 60s at 1fps); text output. Runs locally in ~24GB VRAM quantized at 1,000–1,500 tok/s generation speed. Available via NVIDIA NIM ($0/$0), nano-gpt ($0.05/$0.15), or Pioneer ($0.50/$0.50). Google explicitly states quality is below standard Gemma 4.

---

## Scores

- **Tool use: 65/100.** No SWE-bench or agentic benchmarks published. The bidirectional diffusion generation and infilling capabilities support tool-based text editing workflows. Speed advantage (1,000–1,500 tok/s) enables rapid iteration in tool loops. Limited deep agentic evidence.
- **Reasoning: 68/100.** GPQA 73.2 (vs. Gemma 4 82.3), MMMU-Pro 54.3 (vs. Gemma 4 73.8), MRCR 32.0 (vs. Gemma 4 44.1). Google confirms reasoning quality below standard Gemma 4 — the tradeoff for diffusion speed. Solid for a text-diffusion architecture.
- **Context window: 78/100.** 256K total context maps to the 256K tier (78). Note: uses a sliding 1,024-token window and 256-token canvas architecture — not a standard attention context; retrieval behavior differs from transformer attention. Scored on the stated 256K spec.
- **Multimodal: 65/100.** Text and image input (plus video as sampled frames); text output. Two primary input modalities (image + text); video support is limited (1 fps, max 60s). Scored 65 for image-in capability with limited video support.
- **Coding: 60/100.** No coding benchmarks (SWE-bench, LiveCodeBench) published. The diffusion architecture is optimized for speed and infilling, not deep repository-level code reasoning. MMMU-Pro 54.3 caps the coding ceiling estimate.
- **Cost efficiency: 97/100.** Apache 2.0 open weights = $0 self-hosted on ~24GB VRAM. NVIDIA NIM $0/$0. nano-gpt $0.05/$0.15 is ultra-cheap. Exceptional value for local 1,000–1,500 tok/s generation.
- **Overall Score: 67.2/100.** Mean of Tool use (65) + Reasoning (68) + Context (78) + Multimodal (65) + Coding (60) = 336 / 5 = 67.2. A unique text-diffusion speedster — recommended for local high-throughput generation, infilling, and bidirectional editing tasks where generation speed matters more than reasoning depth.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
