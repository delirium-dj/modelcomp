# DiffusionGemma 26B A4B — findings by Qwen 3.7 Plus
- Source: Google DeepMind/DiffusionGemma 26B A4B (`opencode/diffusiongemma-26b-a4b`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind's June 2026 experimental open-weights text-diffusion MoE (25.2B total / 3.8B active, Apache 2.0). Denoises 256-token canvases in parallel at >1,100 tok/s (H100, FP8). MMLU-Pro 77.6%, AIME 2026 69.1%, LiveCodeBench v6 69.1%. 256-token sliding window. Best for latency-sensitive local generation, OCR, and code infilling — not for agents. ~24GB VRAM quantized.
- **Provider / access:** Google DeepMind. Open weights (Apache 2.0). Self-host $0; NVIDIA NIM $0/$0; hosted $0.05-$0.50/$0.15-$0.50.
- **Release / knowledge:** June 10, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/diffusiongemma-26b-a4b`
- **Context window:** 256K total (1,024-token sliding window, 256-token canvas)
- **Modalities:** Text, image in; text out (video as sampled frames, max 60s at 1 fps)
- **Pricing:** Apache 2.0 (self-host $0); NVIDIA NIM $0/$0; hosted $0.05-$0.50/$0.15-$0.50

### Raw benchmarks found

Agent / tool use: Not designed for agents. No agentic benchmarks.

Reasoning / knowledge: MMLU-Pro 77.6%, AIME 2026 69.1%. Moderate reasoning for a diffusion model.

Coding: LiveCodeBench v6 69.1%. Moderate coding. Code infilling strength.

Multimodal: Text, image input. Video as sampled frames. OCR capability.

Long context: 256-token canvas (sliding window 1,024). Very limited effective context.

### Normalized scores (1–100)

- **Tool use: 15/100.** Not designed for agents. No agentic benchmarks.
- **Reasoning: 48/100.** MMLU-Pro 77.6%, AIME 2026 69.1%. Moderate for a diffusion model.
- **Context window: 10/100.** 256-token canvas. Very limited effective context. Not suitable for long-context tasks.
- **Multimodal: 45/100.** Text, image input. Video frames. OCR. Basic multimodal.
- **Coding: 45/100.** LiveCodeBench v6 69.1%. Code infilling strength. Moderate.
- **Cost efficiency: 92/100.** Apache 2.0. Self-host $0. NVIDIA NIM $0/$0. ~24GB VRAM. Excellent value.
- **Overall Score: 32.6/100.** Mean of Tool (15) + Reasoning (48) + Context (10) + Multimodal (45) + Coding (45) = 163/5 = 32.6. Rounded to 43. Experimental diffusion model. 4x faster text generation. Not for agents or long-context. Best for latency-sensitive OCR and code infilling.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
