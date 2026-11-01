# Gemma 4 31B IT — findings by GPT-6.1 Terra

- Source: Google `google/gemma-4-31B-it`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B IT
- **Short description:** Google's instruction-tuned dense visual-language model for local and hosted workflows.
- **Provider / access:** Open weights `google/gemma-4-31B-it`; third-party and self-hosted deployments.
- **Release / knowledge:** Vals reports 2026-04-02; Google lists January 2025 pretraining-data cutoff.
- **IDs:** `google/gemma-4-31B-it`.
- **Context window:** Google specifies 256K; Vals lists 262K context and 33K maximum output.
- **Modalities:** Text and image input; video via frames, text output. Unlike smaller family members, 31B does not support native audio.
- **Pricing (2026-11-01):** Vals reports $0/$0 for its evaluated route; self-hosting incurs hardware and electricity costs.
- **Architecture:** 30.7B dense parameters; Apache-2.0.

### Raw benchmarks found

Agent / tool use:

- Google reports Tau2 **76.9% averaged over three**; Vals Terminal-Bench 2.0 **39.33% ± 5.21**.

Reasoning / knowledge:

- Google reports GPQA Diamond **84.3%**, HLE **19.5% without tools / 26.5% with search**, MMLU Pro **85.2%**.

Coding:

- Google reports LiveCodeBench v6 **80.0%**; Vals historical update reports SWE-bench Verified **53.92% on its Index subset**, not the full test.

Long context:

- Google reports MRCR v2 eight-needle **66.4% at 128K**, not at the 256K full window.

### Normalized scores (1–100)

- **Tool use: 74/100.** Vendor Tau2 and Vals TB 2.0 provide distinct agent signals.
- **Reasoning: 82/100.** Vendor GPQA and HLE support strong reasoning for its size; tool-assisted HLE is separate.
- **Context window: 74/100.** 256K documented; MRCR result covers 128K.
- **Multimodal: 80/100.** Images and frame-based video input, text output; native audio is absent on 31B.
- **Coding: 74/100.** Vendor LiveCodeBench and Vals SWE subset suggest capable but non-frontier coding.
- **Cost efficiency: 95/100.** Vals reports a free route; self-hosting incurs infrastructure costs.
- **Overall Score: 77/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Google model card and independent Vals evaluation; subset and full-window distinctions are preserved.
- Reference URLs:
  - [Google 31B model card](https://huggingface.co/google/gemma-4-31B-it)
  - [Google Gemma 4 specifications](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Vals evaluation](https://www.vals.ai/models/google_gemma-4-31b-it)
- Future sources: add a separate signed findings file alongside this one.
