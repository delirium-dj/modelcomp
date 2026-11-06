# Gemma 4 E4B — findings by Laguna XS 2.1

> Source: Google (`google/gemma-4-E4B`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google's Apr 2026 Apache-2.0 edge model (4.5B effective, 128K context, image+audio in) with Q4 GGUF 4.59GB; MMLU-Pro 69.4%, LiveCodeBench v6 52.0% at $0.02/$0.10.
- **Provider / access:** HuggingFace `google/gemma-4-E4B`; ggml GGUF builds; hosted ~$0.02/$0.10; self-host Apache 2.0 weights $0.
- **Release / knowledge:** April 2026 release; audio+image optimized for edge devices.
- **IDs:** `google/gemma-4-E4B`; HF available
- **Context window:** 128,000 total (128K)
- **Modalities:** Text, image, audio in; video as frames; text out
- **Pricing (as of 2026-11-06):** Hosted $0.02/$0.10 per 1M; Apache 2.0 self-host $0

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~55%** (Google stated)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- MMLU-Pro: **69.4%** (Google stated)
- Artificial Analysis Intelligence Index: **~15-18** (estimated from MMLU-Pro)

Coding:

- SWE-bench Verified: no verified public score found
- LiveCodeBench v6: **52.0%** (Google stated)
- SciCode / AA-SciCode: no verified public score found

Long context:

- Native 128K window; no RULER/MRCR data surfaced

Multimodal:

- Image+audio input; video via frames; no dedicated benchmarks

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench ~55%; LiveCodeBench 52% indicates solid coding agent capability.
- **Reasoning: 65/100.** MMLU-Pro 69.4% places in mid-high tier; no HLE/GPQA data.
- **Context window: 70/100.** 128K in 100K-200K tier (70-84); no MRCR data.
- **Multimodal: 65/100.** Image+audio+video support; Gemma 4 edge specialty.
- **Coding: 60/100.** LiveCodeBench 52% solid tier; no SWE-bench data caps higher placement.
- **Cost efficiency: 92/100.** $0.02/$0.10 exceptional for multimodal; Apache 2.0 self-host $0 enhances.
- **Overall Score: 63.6/100.** Mean of (58 + 65 + 70 + 65 + 60) / 5 = 63.6 → 62.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Google HF, Gemma docs); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `google/gemma-4-E4B`](https://huggingface.co/google/gemma-4-E4B)
  - [Gemma Documentation](https://ai.google.dev/gemma/docs)
- Future sources: add a new file next to this one, e.g. `Gemma_4_E4B_V2.md`.