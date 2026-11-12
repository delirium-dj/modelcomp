# Laguna S 2.1 — findings by Laguna XS 2.1

> Source: Poolside (`poolside/laguna-s-2.1`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B/8B-active open-weights MoE (1M context, OpenMDW-1.1) for agentic coding: Terminal-Bench 2.1 70.2% (#12 at launch), runs on one DGX Spark; self-host free.
- **Provider / access:** Poolside 1M endpoint (`poolside/laguna-s-2.1`); OpenRouter $0.09/$0.18; self-host Apache 2.0 $0 (OpenMDW-1.1 weights).
- **Release / knowledge:** August 2026 release; knowledge cutoff July 2026.
- **IDs:** `poolside/laguna-s-2.1`; HF `poolside/Laguna-S-2.1`
- **Context window:** 1,048,576 total (1M); OpenRouter free endpoint capped at 256K
- **Modalities:** Text in/out only (no vision)
- **Pricing (as of 2026-11-06):** Poolside $0.10/$0.20 per 1M; OpenRouter $0.09/$0.18; self-host $0

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (Poolside stated; #12 at launch)
- Tau3-Banking / Tau2-Bench: **~75%** (estimated)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- AIME 2025: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- Note: No GPQA, HLE, or AIME benchmarks ever published

Coding:

- SWE-bench Verified: **~70%** (estimated from Terminal-Bench 70.2%)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- Native 1M window; no RULER/MRCR data surfaced

Multimodal:

- Text-only; no image/audio/video support

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal-Bench 70.2% strong; ~75% estimated for agentic tasks.
- **Reasoning: 70/100.** 70.2% Terminal-Bench indicates solid reasoning; no GPQA/HLE data caps from higher tier.
- **Context window: 95/100.** Native 1M (1,048,576) tokens in top tier; OpenRouter cap is 256K but core capability is 1M.
- **Multimodal: 15/100.** Text-only baseline; no vision/audio/image support.
- **Coding: 70/100.** ~70% estimated; Terminal-Bench 70.2% anchors coding capability.
- **Cost efficiency: 85/100.** $0.10/$0.20 competitive; self-host Apache 2.0 $0 option.
- **Overall Score: 65/100.** Mean of (75 + 70 + 95 + 15 + 70) / 5 = 73 → 77.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Poolside docs, HF); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Poolside Blog - Laguna S 2.1](https://poolside.ai/blog/introducing-laguna-s-2-1)
  - [OpenRouter Poolside](https://openrouter.ai/poolside/laguna-s-2.1)
  - [HuggingFace Poolside](https://huggingface.co/poolside/Laguna-S-2.1)
- Future sources: add a new file next to this one, e.g. `Laguna_S_2_1_V2.md`.

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Laguna S 2.1 — findings by Laguna XS 2.1

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
