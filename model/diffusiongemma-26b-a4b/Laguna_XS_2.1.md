# DiffusionGemma 26B A4B — findings by Laguna XS 2.1

> Source: Google (`google/diffusiongemma-26B-A4B-it`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google's experimental open-weights text-diffusion MoE (25.2B/3.8B active, 256K context, Apache 2.0) for fast local generation/OCR/infilling; quality below Gemma 4.
- **Provider / access:** Hugging Face `google/diffusiongemma-26B-A4B-it`; NVIDIA NIM $0/$0; nano-gpt $0.05/$0.15; Pioneer $0.50/$0.50; self-host Apache 2.0 weights $0.
- **Release / knowledge:** April 2026 release; experimental diffusion decoder architecture.
- **IDs:** `google/diffusiongemma-26B-A4B-it`; HF repo available
- **Context window:** 256,000 total (256K); 1,024-token sliding window, 256-token canvas
- **Modalities:** Text and image in; text out (video as sampled frames max 60s at 1fps)
- **Pricing (as of 2026-11-06):** Apache 2.0 self-host $0; NVIDIA NIM $0/$0; hosted $0-$0.50 per 1M

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~35%** (estimated from Gemma 4 comparison data)
- Tau3-Banking / Tau2-Bench: **~55%** (estimated, retail-focused)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **73.2%** (Google stated vs Gemma 4's 82.3%)
- HLE: no verified public score found
- LCR / MLCR: **~32%** (Google stated MRCR 32.0 vs Gemma 4's 44.1)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~40** (estimated, below Gemma 4)

Coding:

- SWE-bench Verified: **~30%** (estimated from reasoning tier)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- MRCR: **32% at 256K** (Google stated)
- RULER: no verified public score found

Multimodal:

- Image input supported; video via frames; no dedicated benchmarks

### Normalized scores (1–100)

- **Tool use: 40/100.** ~35% Terminal-Bench estimated; diffusion architecture has coherence limitations; retail task scores moderate.
- **Reasoning: 40/100.** GPQA 73.2% vs Gemma 4's 82.3% places in lower-mid tier; no HLE data.
- **Context window: 65/100.** 256K places in 200K-500K tier (65-84); diffusion quality limits retrieval effectiveness.
- **Multimodal: 70/100.** Image+video input; OCR/infill specialty; no dedicated benchmarks.
- **Coding: 35/100.** ~30% estimated; diffusion decoder struggles with long-form code generation.
- **Cost efficiency: 85/100.** Apache 2.0 self-host $0; NVIDIA NIM free tier; but quality caps practical value.
- **Overall Score: 50/100.** Mean of (40 + 40 + 65 + 70 + 35) / 5 = 50 → 51.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Google HF, NVIDIA NIM docs); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `google/diffusiongemma-26B-A4B-it`](https://huggingface.co/google/diffusiongemma-26B-A4B-it)
  - [NVIDIA Build](https://build.nvidia.com/)
  - [nano-gpt](https://nano-gpt.com/)
- Future sources: add a new file next to this one, e.g. `DiffusionGemma_26B_V2.md`.

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## DiffusionGemma 26B A4B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every archived field value was identical to, or an older or vaguer duplicate of, the active card above.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **TBD**
- Tau3-Banking / Tau2-Bench: **TBD**
- GDPval-AA: **TBD**
- Toolathon / MCP-Atlas: **TBD**

Reasoning / knowledge:

- GPQA Diamond: **TBD**
- HLE: **TBD**
- LCR / MLCR: **TBD**
- CritPt: **TBD**
- Artificial Analysis Intelligence Index: **TBD**

Coding:

- SWE-bench Verified / SWE-Pro: **TBD**
- LiveCodeBench: **TBD**
- SciCode: **TBD**
- DeepSWE / Coding Index: **TBD**

Long context:

- MRCR / RULER: **TBD**

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
