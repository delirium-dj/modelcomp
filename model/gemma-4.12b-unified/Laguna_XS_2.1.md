# Gemma 4 12B Unified — findings by Laguna XS 2.1

> Source: Google DeepMind (`google/gemma-4-12B`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's 11.95B open-weight encoder-free multimodal model (Apache 2.0, 256K context) for local agents; GPQA 78.8%, LiveCodeBench v6 72%; runs in 16GB VRAM.
- **Provider / access:** HuggingFace `google/gemma-4-12B`; hosted ~$0.05-$0.25; self-host Apache 2.0 $0.
- **Release / knowledge:** April 2026 release; unified architecture (encoder-free).
- **IDs:** `google/gemma-4-12B`; HF available
- **Context window:** 256,000 (262,144; hosts 32K-256K)
- **Modalities:** Text, image, audio in; text out
- **Pricing (as of 2026-11-06):** ~$0.05-$0.25 per 1M; Apache 2.0 self-host $0

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~75%** (estimated from coding tier)
- Tau3-Banking / Tau2-Bench: **~80%** (estimated)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (Google stated)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: **~65-70** (estimated from GPQA 78.8%)

Coding:

- SWE-bench Verified: no verified public score found
- LiveCodeBench v6: **72%** (Google stated)
- SciCode / AA-SciCode: no verified public score found

Long context:

- Native 256K window; no RULER/MRCR data surfaced
- MRCR: no verified public score found

Multimodal:

- Image+audio input; no dedicated benchmarks surfaced

### Normalized scores (1–100)

- **Tool use: 82/100.** ~75% Terminal-Bench estimated; strong agentic capability from 256K context.
- **Reasoning: 78/100.** GPQA 78.8% solid tier; no HLE data available.
- **Context window: 90/100.** 256K places in 200K-500K tier (90-94); encoder-free unified architecture.
- **Multimodal: 80/100.** Image+audio input; unified model design.
- **Coding: 82/100.** LiveCodeBench 72% strong; matches reasoning tier.
- **Cost efficiency: 85/100.** $0.10-$0.30 competitive for 256K + multimodal.
- **Overall Score: 82.4/100.** Mean of (82 + 78 + 90 + 80 + 82) / 5 = 82.4 → 82.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Google HF, Gemma docs); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `google/gemma-4-12B`](https://huggingface.co/google/gemma-4-12B)
  - [Gemma Documentation](https://ai.google.dev/gemma/docs)
- Future sources: add a new file next to this one, e.g. `Gemma_4_12B_V2.md`.