# Ling 3.0 Flash VL — findings by Laguna XS 2.1

> Source: inclusionAI (`inclusionai/ling-3.0-flash-vl`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** inclusionAI's Sep 2026 MIT open-weight VL MoE (124B total/5.5B active) for GUI agents; WebVoyager 90.8, MMSearch 79.0, MMMU-Pro 79.0 at $0.06/$0.18; not on OpenCode Zen.
- **Provider / access:** OpenRouter (`inclusionai/ling-3.0-flash-vl`); DeepInfra; Hugging Face `inclusionAI/Ling-3.0-flash-VL`; self-host MIT weights $0.
- **Release / knowledge:** September 2026 release; knowledge cutoff July 2025.
- **IDs:** `inclusionai/ling-3.0-flash-vl`; HF `inclusionAI/Ling-3.0-flash-VL`
- **Context window:** 131,072 native (262,144 via YaRN extrapolation); 32,768 max output
- **Modalities:** Text, image, video in; text out; optimized for GUI/visual agent tasks.
- **Pricing (as of 2026-11-06):** $0.06 input / $0.18 output per 1M tokens.

### Raw benchmarks found

Agent / tool use:

- WebVoyager: **90.8%**
- MMSearch: **79.0%**
- Terminal-Bench 2.1: **~65%** (estimated from text-only Flash performance)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- MMMU-Pro: **79.0%**
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **~70%** (estimated)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- Native 131K window; YaRN extrapolates to 262K; no RULER/MRCR data surfaced

Multimodal:

- Image+video input; text output; WebVoyager 90.8%, MMMU-Pro 79.0% confirm strong VL capability

### Normalized scores (1–100)

- **Tool use: 71/100.** WebVoyager 90.8% and MMSearch 79.0% anchor strong GUI tool use; Terminal-Bench ~65% estimated; lacks broader agent benchmarks.
- **Reasoning: 76/100.** MMMU-Pro 79% indicates solid reasoning; no GPQA/HLE data available caps higher placement.
- **Context window: 79/100.** Native 131K (262K YaRN) places in 50K-100K tier; 32K max output structural limit.
- **Multimodal: 83/100.** Image+video input; WebVoyager 90.8% and MMMU-Pro 79.0% confirm strong VL capability.
- **Coding: 72/100.** SWE-bench ~70% estimated from Flash line; LiveCodeBench/DeepSWE unavailable.
- **Cost efficiency: 94/100.** $0.06/$0.18 places at ~94 per cost methodology; MIT self-host $0 option enhances value.
- **Overall Score: 76/100.** Mean of (71 + 76 + 79 + 83 + 72) / 5 = 76.2 → 76.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (HF model card, OpenRouter); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `inclusionAI/Ling-3.0-flash-VL`](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)
  - [OpenRouter `inclusionai/ling-3.0-flash-vl`](https://openrouter.ai/inclusionai/ling-3.0-flash-vl)
- Future sources: add a new file next to this one, e.g. `Ling_3_0_Flash_VL_V2.md`.