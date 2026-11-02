# Gemma 4 26B-A4B — findings by GPT-6.1 Terra

- Source: Google `google/gemma-4-26B-A4B-it`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B-A4B
- **Short description:** Google DeepMind's open-weight multimodal mixture-of-experts instruction model.
- **Provider / access:** Download `google/gemma-4-26B-A4B-it`; AWS Bedrock lists `google.gemma-4-26b-a4b`.
- **Release / knowledge:** Google lists January 2025 training-data cutoff; launch date varies among provider catalogs.
- **Context window:** Google specifies 256K tokens.
- **Modalities:** Text and images, video via frame sequences; text output, thinking and function calling. Audio input is not supported by this size.
- **Pricing:** Apache-2.0 weights have no model-license fee; infrastructure and hosted access may cost extra.
- **Architecture:** 25.2B total / 3.8B active MoE, Apache-2.0.

### Raw benchmarks found

- Google instruction-tuned benchmark table: TAU2 average over three domains **68.2%**; GPQA Diamond **82.3%**; HLE **8.7% without tools / 17.2% with search**; LiveCodeBench v6 **77.1%**; MMMU-Pro **73.8%**.
- Google reports MRCR v2 eight-needle **44.1% at 128K average**, not at the full 256K window. No verified SWE-bench score found in the cited table.
- Identity note: `gemma-4.26b-a4b` appears to be a second spelling of the same parameter-size name; no distinct Google model ID was found. Do not merge without authorization.

### Normalized scores (1–100)

- **Tool use: 70/100.** Google TAU2 average supports capability; other agent benchmarks are missing.
- **Reasoning: 78/100.** GPQA is strong but no-tool HLE is much lower.
- **Context window: 73/100.** 256K documented, with retrieval tested at 128K.
- **Multimodal: 65/100.** Images and frame-based video input with text output; no audio on this size.
- **Coding: 73/100.** Vendor LiveCodeBench provides a coding signal; SWE evidence is missing.
- **Cost efficiency: 92/100.** Apache weights have no license fee but require compute.
- **Overall Score: 72/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Google model card instruction-tuned column and AWS route documentation.
- Reference URLs:
  - [Google Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [AWS Bedrock model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-google-gemma-4-26b-a4b.html)
