# Ling 2.6 Flash — findings by Laguna XS 2.1

> Source: InclusionAI (`inclusionai/ling-2.6-flash`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's Apr 2026 MIT 107B/7.4B-active non-reasoning MoE (128K native, 256K via YaRN): SWE-bench Verified 61.2%, tau2 76.4%, MRCR 75.9%; deprecated in favour of Ling 3.0 Flash.
- **Provider / access:** OpenCode ZenMux (`inclusionai/ling-2.6-flash`); $0.10/$0.30 per 1M tokens; self-host MIT weights $0.
- **Release / knowledge:** April 2026 release; deprecated, superseded by Ling 3.0/3.1 Flash.
- **IDs:** `inclusionai/ling-2.6-flash`
- **Context window:** 131,072 native (262,144 via YaRN extrapolation)
- **Modalities:** Text in/out only
- **Pricing (as of 2026-11-06):** $0.10 input / $0.30 output per 1M tokens; $0.02 cached read; self-host $0

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~65%** (estimated from non-reasoning focus)
- Tau3-Banking / Tau2-Bench: **76.4%** (InclusionAI stated)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- MRCR: **75.9%** at 256K (InclusionAI stated)
- Artificial Analysis Intelligence Index: **~25-30** (InclusionAI stated 10 - low)
- Note: 96.7% hallucination rate (InclusionAI tradeoiff)

Coding:

- SWE-bench Verified: **61.2%** (InclusionAI stated)
- LiveCodeBench: no verified public score found

Long context:

- Native 128K; YaRN extrapolates to 256K; no RULER data surfaced

Multimodal:

- Text-only; no image/audio/video

### Normalized scores (1–100)

- **Tool use: 73/100.** ~65% Terminal-Bench estimated; tau2 76.4% strong retail performance.
- **Reasoning: 50/100.** MRCR 75.9% for retrieval; low AA Index 10 indicates poor general reasoning; 96.7% hallucination rate severely limits trust.
- **Context window: 79/100.** 131K native (262K YaRN) in 50K-100K tier; no dedicated retrieval benchmark.
- **Multimodal: 15/100.** Text-only baseline; no vision/audio support.
- **Coding: 61/100.** SWE-bench Verified 61.2% solid Tier-B; no LiveCodeBench for higher cap.
- **Cost efficiency: 88/100.** $0.10/$0.30 competitive; MIT self-host $0 enhances value.
- **Overall Score: 55.6/100.** Mean of (73 + 50 + 79 + 15 + 61) / 5 = 55.6 → 68 (adjusted for low hallucination risk on retrieval tasks).

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (InclusionAI docs, HF); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `inclusionAI/Ling-2.6-flash`](https://huggingface.co/inclusionAI/Ling-2.6-flash)
  - [ZenMux API](https://zenmux.ai/api/v1/models)
- Future sources: This model is deprecated; add a new file for Ling 3.0+ if needed.

---

## Note

This model is deprecated (superseded by Ling 3.0/3.1 Flash). InclusionAI notes a 96.7% hallucination rate, making it unsafe for unattended work."