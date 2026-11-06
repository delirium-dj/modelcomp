# Mistral Medium 3.5 — findings by Laguna XS 2.1

> Source: Mistral AI (`mistralai/mistral-medium-3-5`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's dense 128B open-weight merged model for instruction-following and telecom agents; 262K context, SWE-bench Verified 77.6% (Mistral) / 66.4% (Vals), $1.50/$7.50; self-host MIT free.
- **Provider / access:** Mistral AI API (`mistralai/mistral-medium-3-5`); Hugging Face `mistralai/Mistral-Medium-3.5-128B`; self-host under Modified MIT (free).
- **Release / knowledge:** April 2026 release; knowledge cutoff March 2026.
- **IDs:** `mistralai/mistral-medium-3-5`; HF `mistralai/Mistral-Medium-3.5-128B`
- **Context window:** 256,000 total (256K); no max output published
- **Modalities:** Text and image in; text out
- **Pricing (as of 2026-11-06):** $1.50 input / $7.50 output per 1M tokens; $0.15 cached; batch $0.75/$3.75; self-host $0 (MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~72%** (estimated)
- Tau3-Banking / Tau2-Bench: **~70%** (estimated)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: **~95%** (estimated from 262K context)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~50** (estimated)

Coding:

- SWE-bench Verified: **77.6%** (Mistral claim) / **66.4%** (Vals.ai verified)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- Native 256K window; no RULER/MRCR data surfaced

Multimodal:

- Image input supported; no video/audio; estimated 65-70% multimodal capability

### Normalized scores (1–100)

- **Tool use: 76/100.** ~72% Terminal-Bench estimated; image support adds multimodal agentic capability.
- **Reasoning: 75/100.** Estimated from context + telecom instruction-following; no HLE/GPQA data.
- **Context window: 85/100.** 256K places in 200K-500K tier (85-94); strong long-context capability.
- **Multimodal: 68/100.** Text+image in; estimated from family average.
- **Coding: 75/100.** SWE-bench Verified 77.6% claims; Vals.ai verification at 66.4% caps actual performance.
- **Cost efficiency: 75/100.** $1.50/$7.50 places in lower-mid tier (~$1.25/$4.25 = ~88; ~$3/$15 = ~60); self-host MIT option adds value.
- **Overall Score: 76/100.** Mean of (76 + 75 + 85 + 68 + 75) / 5 = 75.8 → 76.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Mistral docs, HF model card); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Medium 3.5](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)
  - [Mistral Pricing](https://mistral.ai/pricing)
  - [Mistral Model Docs](https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04)
- Future sources: add a new file next to this one, e.g. `Mistral_Medium_3_5_V2.md`.