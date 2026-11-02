# Gemma 4 12B Unified — findings by GPT-6.1 Terra

- Source: Google `google/gemma-4-12B-it`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind open-weight dense model using an encoder-free unified architecture for text, image and audio.
- **Provider / access:** Download instruction-tuned `google/gemma-4-12B-it`; hosted APIs vary by provider.
- **Release / knowledge:** Google states January 2025 training-data cutoff; exact release date not verified here.
- **Context window:** 256K per Google's model card.
- **Modalities:** Text, image and audio input; video via frames; text output. Function calls depend on serving software.
- **Pricing:** Apache-2.0 weights carry no license fee; compute and hosted inference cost extra.
- **Architecture:** 11.95B dense parameters, unified image/audio projections, Apache-2.0.

### Raw benchmarks found

- Google's instruction-tuned table reports TAU2 average across three domains **69.0%**, GPQA Diamond **78.8%**, HLE without tools **5.2%**, LiveCodeBench v6 **72.0%**, and MMMU Pro **69.1%**.
- Google reports MRCR v2 eight-needle **43.4% at 128K average**, not the full 256K context. No exact-model SWE-bench score found in that table.
- Identity note: `gemma-4.12b-unified` appears to be a duplicate parameter-size spelling; a separate vendor ID was not verified. No merge performed.

### Normalized scores (1–100)

- **Tool use: 70/100.** TAU2 average supports capability; additional agent benchmarks were not verified.
- **Reasoning: 74/100.** GPQA is tempered by no-tool HLE.
- **Context window: 73/100.** 256K supported; retrieval result covers 128K.
- **Multimodal: 80/100.** Text, image and audio plus video frames as input; text output.
- **Coding: 70/100.** LiveCodeBench supports coding ability, without verified SWE evidence.
- **Cost efficiency: 94/100.** Open weights without license fee; inference compute is not free.
- **Overall Score: 73/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Google model card instruction-tuned column; normalized scores are interpretations.
- Reference URLs:
  - [Google Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Google instruction-tuned weights](https://huggingface.co/google/gemma-4-12B-it)
