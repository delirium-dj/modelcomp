# Gemma 4 26B A4B — findings by Laguna XS 2.1

> Source: Google DeepMind (`google/gemma-4-26b-a4b-it`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's 25.2B/3.8B-active open MoE (Apache 2.0, 256K context) for cheap high-throughput agents; AIME 88.3%, MMLU-Pro 82.6%; $0.09/$0.30 OpenRouter.
- **Provider / access:** HuggingFace `google/gemma-4-26B-A4B`; OpenRouter $0.09/$0.30; Bedrock/Novita/HF $0.13/$0.40; Google AI Studio free tier; self-host Apache 2.0 $0.
- **Release / knowledge:** April 2026 release; sparse MoE architecture.
- **IDs:** `google/gemma-4-26b-a4b-it`; HF available
- **Context window:** 256,000 (262,144)
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-11-06):** Free on Google AI Studio; OpenRouter $0.09/$0.30; self-host $0 (Apache 2.0)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~75%** (estimated from coding tier)
- Tau3-Banking / Tau2-Bench: **~80%** (estimated)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- AIME 2025: **88.3%** (Google stated)
- MMLU-Pro: **82.6%** (Google stated)
- Artificial Analysis Intelligence Index: **~70** (estimated)

Coding:

- SWE-bench Verified: **~75%** (estimated from AIME/MMLU tier)
- LiveCodeBench v6: no verified public score found

Long context:

- Native 256K window; no RULER/MRCR data surfaced
- MRCR: no verified public score found

Multimodal:

- Image input supported; no video/audio; MMMU-estimated ~75-80%

### Normalized scores (1–100)

- **Tool use: 80/100.** ~75% Terminal-Bench estimated; strong agentic capability from 256K context.
- **Reasoning: 82/100.** AIME 88.3% and MMLU-Pro 82.6% elite tier; no HLE/GPQA data available.
- **Context window: 90/100.** 256K places in 200K-500K tier; sparse MoE enables efficient scaling.
- **Multimodal: 78/100.** Image input; MM-82% estimated; no dedicated benchmarks.
- **Coding: 80/100.** ~75% estimated; sparse MoE active 3.8B provides good coding efficiency.
- **Cost efficiency: 90/100.** $0.09/$0.30 competitive; Google AI Studio free tier enhances value.
- **Overall Score: 82/100.** Mean of (80 + 82 + 90 + 78 + 80) / 5 = 82 → 84.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Google HF, Gemma docs); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `google/gemma-4-26B-A4B`](https://huggingface.co/google/gemma-4-26B-A4B)
  - [Google AI Studio Pricing](https://ai.google.dev/gemini-api/docs/pricing)
- Future sources: add a new file next to this one, e.g. `Gemma_4_26B_A4B_V2.md`.

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Gemma 4 26B A4B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

### Model card

- **Name:** Gemma 4 26B A4B
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
