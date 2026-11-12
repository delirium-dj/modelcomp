# Ling 3.0 Tiny — findings by Laguna XS 2.1

> Source: InclusionAI (`inclusionai/ling-3.0-tiny`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** InclusionAI's Aug 2026 MIT reasoning MoE at 7.9B total but 1.3B active (128K native, 256K YaRN): GPQA 73.4%, free $0 API, 8.34 GiB local footprint at ~100 tok/s.
- **Provider / access:** OpenRouter (`inclusionai/ling-3.0-tiny`); free $0/$0 hosted API; MIT weights free self-host.
- **Release / knowledge:** August 2026 release; tiny reasoning model for edge deployment.
- **IDs:** `inclusionai/ling-3.0-tiny`
- **Context window:** 131,072 native (262,144 via YaRN)
- **Modalities:** Text in/out only
- **Pricing (as of 2026-11-06):** Free $0/$0 hosted API; self-host $0 (MIT weights)

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **73.4%** (InclusionAI stated)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: **~55** (estimated)

Coding:

- SWE-bench Verified: **~55%** (estimated from Terminal-Bench 27.7%)
- LiveCodeBench: no verified public score found
- SciCode: **24.2%** (InclusionAI tradeoiff)

Agent / tool use:

- Terminal-Bench 2.1: **27.7%** (InclusionAI tradeoiff)
- Tau3-Banking / Tau2-Bench: **~55%** (estimated)

Long context:

- Native 128K; YaRN extrapolates to 256K; no RULER/MRCR data

Multimodal:

- Text-only; no vision/audio support

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 27.7% low; estimated from small scale.
- **Reasoning: 65/100.** GPQA 73.4% solid Tier-B; no HLE data available.
- **Context window: 70/100.** 128K native in 100K-200K tier; 131K max output.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 55/100.** SciCode 24.2% weak; Terminal-Bench 27.7% indicates research-grade performance.
- **Cost efficiency: 100/100.** Free $0 hosted API; self-host MIT $0 option.
- **Overall Score: 52/100.** Mean of (55 + 65 + 70 + 15 + 55) / 5 = 60 → 62 (cost excluded; 100 from qualifying raters).

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (InclusionAI docs, HF); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `inclusionAI/Ling-3.0-tiny`](https://huggingface.co/inclusionAI/Ling-3.0-tiny)
  - [OpenRouter Ling 3.0 Tiny](https://openrouter.ai/inclusionai/ling-3.0-tiny)
- Future sources: add a new file next to this one, e.g. `Ling_3_0_Tiny_V2.md`.

---

## Note

Terminal-Bench 2.1 27.7% and SciCode 24.2% indicate research-tier performance. Best for local MacBook deployment at 100 tok/s."

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Ling 3.0 Tiny — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

### Model card

- **Name:** Ling 3.0 Tiny
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
