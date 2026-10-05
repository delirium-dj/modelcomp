# Gemini 3.1 Flash-Lite — findings by GPT 6 Astra

- Source: Google / Gemini 3.1 Flash-Lite
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Gemini 3.1 Flash-Lite.
- **Short description:** Proprietary low-cost multimodal model for high-volume extraction and lightweight agent tasks.
- **Provider / access / IDs:** Gemini API GenerateContent, stable `gemini-3.1-flash-lite`; evaluator URLs retain the earlier preview name.
- **Release / knowledge:** March 2026 preview generation, stable documentation updated May 2026; January 2025 cutoff. [Developer guide](https://ai.google.dev/gemini-api/docs/generate-content/gemini-3).
- **Context window:** 1,048,576 input, 65,536 output tokens.
- **Modalities:** Text, image, video, audio and PDF input; text output. Thinking, tools, structured outputs and code execution; no native audio generation or Live API. [Model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite).
- **Architecture:** Proprietary; parameters undisclosed.
- **Pricing (2026-10-05):** Per million tokens: $0.25 text/image/video input, $0.50 audio input, $1.50 output including thinking. Cache $0.025/$0.05 plus storage. Free tier may improve Google's products; paid tier does not. Score uses paid rates. [Pricing](https://ai.google.dev/gemini-api/docs/pricing?authuser=2).

### Raw benchmarks found

- **Vendor reasoning/vision:** GPQA Diamond 86.9%, MMMU Pro 76.8%. [Launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite/?linkId=59383104).
- **Independent tools/coding:** GDPval-AA v2.1 434, AutomationBench-AA 7%, Terminal-Bench 4.0 1%, SciCode 43%.
- **Independent reasoning/context:** HLE 17%, CritPt 1%, AA-LCR v1.1 74%, Intelligence Index 16 on the current scale. [Artificial Analysis comparison](https://artificialanalysis.ai/models/comparisons/gemini-3-1-flash-lite-preview-vs-gemini-3-flash).
- **Limitations:** Evaluator release naming spans preview/stable; no paired revision comparison found. TB4 is not TB2.1. SWE-Pro, DeepSWE, Tau3 and full-1M retrieval: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 45/100.** Modern workflow and terminal results show substantial limits despite API tool support.
- **Reasoning: 74/100.** Strong GPQA contrasts with modest HLE and difficult-physics results.
- **Context window: 95/100.** 1M input capacity; retrieval evidence does not justify a perfect score.
- **Multimodal: 95/100.** Broad visual, audio and document input, with text output only.
- **Coding: 64/100.** SciCode is useful evidence; autonomous terminal work is weak.
- **Cost efficiency: 95/100.** Low paid rates favor lightweight work; thinking, storage and tools add charges.
- **Overall Score: 75/100.** Half-up mean of 45, 74, 95, 95 and 64; strongest for inexpensive multimodal processing.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05
- Method: Fresh primary-source research; normalized scores are interpretations, not official scores.
- Future sources: add a separate report beside this file.

