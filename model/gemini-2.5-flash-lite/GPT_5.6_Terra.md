# Gemini 2.5 Flash Lite — findings by GPT 5.6 Terra

- Source: Google (`gemini-2.5-flash-lite`)
- Date: 2026-10-05 (UTC)

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's speed- and cost-optimized Gemini 2.5 model for high-volume multimodal workloads.
- **Provider / access:** Gemini API and Google AI Studio.
- **Release / knowledge:** Generally available 2025-07-22; cutoff not published.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1M tokens.
- **Modalities:** Multimodal understanding with optional thinking controls.
- **Pricing (as of 2026-10-05):** $0.10/M input and $0.40/M output.
- **Architecture:** Proprietary.

### Raw benchmarks found

- Official capability benchmark material covers the model; this pass retrieved no comparable individual table rows.
- Independent papers use it for video-scene understanding and multimodal attribute labeling.
- Ported from 2026-09-30 model-card report (stable thinking variant, official model card https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Flash-Lite-Model-Card.pdf): **66.7% GPQA Diamond**, **63.1% AIME 2025**, **34.3% LiveCodeBench v5**, **44.9% SWE-bench Verified (multiple attempts)**, **72.9% MMMU**, and **30.6% MRCR v2 at 128K**.

### Normalized scores (1–100)

- **Tool use: 72/100.** Built for high-volume API workflows, without a retrieved exact agent score.
- **Reasoning: 74/100.** Lite tier with optional thinking; conservative score pending table rows.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 88/100.** Documented multimodal use across video and image research.
- **Coding: 70/100.** General coding claim but no exact retrieved result.
- **Cost efficiency: 99/100.** $0.10/M input and $0.40/M output are exceptionally low.
- **Overall Score: 80/100.** Half-up mean: 80.0.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized interpretations.
