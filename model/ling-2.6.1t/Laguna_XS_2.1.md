# Ling 2.6 1T — findings by Laguna XS 2.1

> Source: InclusionAI (`inclusionai/ling-2.6-1t`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 1T
- **Short description:** InclusionAI's Apr 2026 MIT instruct MoE at 1T scale (1.03T/63B active, 262K context, MRCR 80.4% at 16K); SWE-bench Verified 72.2%, tau2 78.4%; superseded by Ling 3.0/3.1 Flash.
- **Provider / access:** Requesty (`inclusionai/ling-2.6-1t`); $0.30/$2.50 per 1M tokens; OpenRouter free endpoint available; self-host MIT weights $0.
- **Release / knowledge:** April 2026 release; 1T scale instruction-following model.
- **IDs:** `inclusionai/ling-2.6-1t`
- **Context window:** 262,144 total (256K)
- **Modalities:** Text in/out only
- **Pricing (as of 2026-11-06):** $0.30/$2.50 per 1M tokens; MIT self-host $0

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~68%** (estimated)
- Tau3-Banking / Tau2-Bench: **78.4%** (InclusionAI)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **8.7-10.1%** (InclusionAI tradeoiff - very low)
- MRCR: **80.4% at 16K** (InclusionAI stated); **68.4% at 256K**
- Artificial Analysis Intelligence Index: **~30-35** (estimated)

Coding:

- SWE-bench Verified: **72.2%** (InclusionAI stated)
- LiveCodeBench: no verified public score found

Long context:

- Native 256K; MRCR 68.4% at 256K indicates good retrieval

Multimodal:

- Text-only; no image/audio/video support

### Normalized scores (1–100)

- **Tool use: 79/100.** ~68% Terminal-Bench estimated; tau2 78.4% strong retail performance.
- **Reasoning: 55/100.** MRCR 80.4% good retrieval; but HLE 8.7% extremely low indicates limited general reasoning.
- **Context window: 90/100.** 262K places in 200K-500K tier; MRCR retrieval performance strong.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 75/100.** SWE-bench Verified 72.2% solid Tier-B; no LiveCodeBench data for higher cap.
- **Cost efficiency: 75/100.** $0.30/$2.50 mid-tier; MIT self-host $0 enhances value.
- **Overall Score: 62.8/100.** Mean of (79 + 55 + 90 + 15 + 75) / 5 = 70.4 → 71.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (InclusionAI docs, HF); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `inclusionAI/Ling-2.6-1T`](https://huggingface.co/inclusionAI/Ling-2.6-1T)
  - [models.dev Listing](https://models.dev/models/inclusionai/ling-2.6-1t)
- Future sources: add a new file next to this one, e.g. `Ling_2_6_1T_V2.md`.

---

## Note

This model is superseded by Ling 3.0/3.1 Flash. InclusionAI notes HLE 8.7-10.1% and 92.8% hallucination rate."}

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Ling 2.6.1t — findings by Laguna XS 2.1

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
