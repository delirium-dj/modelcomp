# Gemini 2.5 Flash-Lite — findings by GPT-5.6 Terra

- Source: Google DeepMind Gemini 2.5 Flash-Lite model card
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's low-cost, high-volume multimodal hybrid-reasoning API model.
- **Provider / access:** [Google DeepMind model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Flash-Lite-Model-Card.pdf).
- **Release / knowledge:** September 2025 model-card update; January 2025 knowledge cutoff.
- **IDs:** `gemini-2.5-flash-lite`; preview variants are separately identified in the model card.
- **Context window:** 1M tokens input; 64K-token output.
- **Modalities:** text, image, audio, and video input; text output.
- **Pricing (as of 2026-09-30):** $0.10 input / $0.40 output per million tokens, per the official API pricing documented for the stable model.
- **Architecture:** proprietary sparse MoE with native multimodal inputs and optional thinking.

### Raw benchmarks found

Google's model card reports stable June-2025 variants and separately labeled September previews. The stable thinking variant records **66.7% GPQA Diamond**, **63.1% AIME 2025**, **34.3% LiveCodeBench v5**, **44.9% SWE-bench Verified (multiple attempts)**, **72.9% MMMU**, and **30.6% MRCR v2 at 128K**. The model card documents pass@1 methodology, with stated exceptions for multi-attempt SWE-bench and averaged Aider trials. [Official model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Flash-Lite-Model-Card.pdf)

### Normalized scores (1–100)

- **Tool use: 62/100.** Function calling, code execution, search grounding, and the agentic SWE-bench result establish usable tool-oriented capability.
- **Reasoning: 68/100.** 66.7% GPQA Diamond and 63.1% AIME 2025 in the stable thinking configuration are solid small-model results.
- **Context window: 94/100.** The documented 1M-token input limit is excellent, although the card's challenging 1M MRCR point score is modest.
- **Multimodal: 78/100.** Native image, audio, and video inputs plus 72.9% MMMU substantiate strong multimodal support.
- **Coding: 60/100.** 34.3% LiveCodeBench v5 and 44.9% multi-attempt SWE-bench Verified show useful but not frontier coding.
- **Cost efficiency: 98/100.** Official $0.10/$0.40 per-million-token pricing is exceptionally inexpensive for this capability and context range.
- **Overall Score: 72/100.** Half-up mean of Tool use, Reasoning, Context window, Multimodal, and Coding.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-30
- Method: fresh first-party model-card research. Scores are normalized interpretations, not vendor benchmark scores.
