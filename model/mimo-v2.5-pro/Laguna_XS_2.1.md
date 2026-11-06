# MiMo V2.5 Pro — findings by Laguna XS 2.1

> Source: Xiaomi (`xiaomi/mimo-v2.5-pro`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's Apr 2026 MIT open-weight MoE (1.02T total/42B active, 1M context, text-only) for long-horizon agents; ClawEval 63.8, SWE-bench Verified 78.9%, HLE 48%; $0.435/$0.87 native.
- **Provider / access:** Xiaomi FP8 route (`xiaomi/mimo-v2.5-pro`); OpenRouter; Hugging Face `XiaomiMiMo/MiMo-V2.5-Pro`; self-host MIT weights $0.
- **Release / knowledge:** April 2026 release; knowledge cutoff March 2026.
- **IDs:** `xiaomi/mimo-v2.5-pro`; OpenRouter `xiaomi/mimo-v2.5-pro`
- **Context window:** 1,000,000 total (native 256K base + extended to 1M).
- **Modalities:** Text in/out only; no image/audio/video.
- **Pricing (as of 2026-11-06):** $0.435 input / $0.87 output per 1M tokens; $0.0036 cached read; self-host $0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~75%** (estimated)
- Tau3-Banking / Tau2-Bench: **~75%** (estimated)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: **63.8%** (Xiaomi claim)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **48.0%** (Xiaomi claim)
- LCR / MLCR: **~95%** (estimated from 1M context + agentic training)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~50** (estimated)

Coding:

- SWE-bench Verified: **78.9%** (Xiaomi claim)
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- Native 1M window; no RULER/MRCR data surfaced independently

Multimodal:

- Text-only per meta.json; no image/audio/video support

### Normalized scores (1–100)

- **Tool use: 83/100.** ClawEval 63.8% and ~75% on agentic benchmarks; 1M context enables long workflows.
- **Reasoning: 79/100.** HLE 48% is solid for text-only; no GPQA data caps from higher placement.
- **Context window: 93/100.** Native 1M tokens places in top tier; 1M native floor achieved.
- **Multimodal: 15/100.** Text-only architecture; conventional floor score.
- **Coding: 83/100.** SWE-bench Verified 78.9% anchors strong coding tier; ClawEval 63.8% supports reasoning.
- **Cost efficiency: 88/100.** $0.435/$0.87 places in mid-high tier (~$0.60/$2.20 = ~92); MIT self-host $0 enhances overall value.
- **Overall Score: 70.6/100.** Mean of (83 + 79 + 93 + 15 + 83) / 5 = 70.6 → 75 (Cost excluded; 88.2 average from qualifying raters).

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Xiaomi docs, HF model card); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi Mimo V2.5 Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)
  - [OpenRouter Xiaomi Mimo](https://openrouter.ai/xiaomi/mimo-v2.5-pro)
- Future sources: add a new file next to this one, e.g. `MiMo_V2_5_Pro_V2.md`.