# Gemma 4 E2B — findings by Laguna XS 2.1

> Source: Google (`google/gemma-4-E2B`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google's Apr 2026 Apache-2.0 edge model (2.3B effective, 128K context, image+audio in) with 3.3GB Q4 build for phones/Pis; MMLU-Pro 60.0%, AA Index 7.8.
- **Provider / access:** HuggingFace `google/gemma-4-E2B`; ggml GGUF builds; OpenRouter, hosted ~$0.04/$0.08; self-host Apache 2.0 weights $0.
- **Release / knowledge:** April 2026 release; optimized for edge/mobile deployment.
- **IDs:** `google/gemma-4-E2B`; HF available
- **Context window:** 128,000 total (128K)
- **Modalities:** Text, image, audio in; video as frames; text out
- **Pricing (as of 2026-11-06):** Hosted $0.04/$0.08 per 1M; Apache 2.0 self-host $0

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~55%** (Google stated)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- MMLU-Pro: **60.0%** (Google stated)
- Artificial Analysis Intelligence Index: **7.8** (Google stated)

Coding:

- SWE-bench Verified: **~40%** (estimated from low reasoning tier)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- MRCR: **19.1% at 128K** (Google stated - weak for context)

Multimodal:

- Image and audio input; video via frames; MMMU-style estimated ~50-55%

### Normalized scores (1–100)

- **Tool use: 50/100.** Terminal-Bench ~55% puts it in lower-mid tier; lacks broader agent benchmarks.
- **Reasoning: 50/100.** MMLU-Pro 60% and AA Index 7.8 place in lower-mid tier; HLE/GPQA unavailable.
- **Context window: 70/100.** 128K places in 100K-200K tier (70-84); MRCR 19.1% is weak.
- **Multimodal: 55/100.** Audio+image+video support; edge-optimized but lower quality.
- **Coding: 45/100.** Estimated from Terminal-Bench 55% + weak reasoning; not a coding specialist.
- **Cost efficiency: 90/100.** $0.04/$0.08 highly competitive; 3.3GB Q4 build ideal for edge.
- **Overall Score: 54/100.** Mean of (50 + 50 + 70 + 55 + 45) / 5 = 54.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Google HF, Gemma docs); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `google/gemma-4-E2B`](https://huggingface.co/google/gemma-4-E2B)
  - [Gemma Documentation](https://ai.google.dev/gemma/docs)
- Future sources: add a new file next to this one, e.g. `Gemma_4_E2B_V2.md`.

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Gemma 4 E2B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

### Model card

- **Name:** Gemma 4 E2B
- **Short description:** AI model research findings by Laguna XS 2.1.
- **Provider / access:** Research-based evaluation from public sources.
- **Release / knowledge:** Evaluated October 2026.
- **IDs:** Model identification from available documentation.
- **Context window:** Evaluated from available specifications.
- **Modalities:** As per model capabilities.
- **Pricing:** Evaluated from pricing documentation.

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
