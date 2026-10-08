# Gemini 2.5 Flash-Lite — findings by GPT 6 Astra

- Source: Google DeepMind / Gemini 2.5 Flash-Lite
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Lightweight multimodal model for classification and extraction; this report concerns the stable version, not the retired September preview.
- **Provider / access:** Gemini API / AI Studio and Vertex AI. Native generateContent API; OpenRouter also offers Chat Completions.
- **Release / knowledge:** Stable update July 2025; knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-flash-lite`; OpenRouter `google/gemini-2.5-flash-lite`. No separately verified Zen Free ID.
- **Context window:** 1,048,576 input / 65,536 maximum output.
- **Modalities:** Text, image, video, audio and PDF input; text output. Thinking, code execution, function calls and structured outputs supported; no Live API or audio/image generation.
- **Availability:** Google currently restricts 2.5 access to previous active users; it has not declared this stable model deprecated. [Current specifications and access notice](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite?hl=en)
- **Pricing (as of 2026-10-08):** Free API tier exists with product-improvement data use. Paid per million: $0.10 text/image/video input, $0.30 audio input, $0.40 output, $0.01/$0.03 cached input respectively; storage $1 per million tokens/hour. Paid data is not used to improve products according to this pricing table. [Official pricing](https://ai.google.dev/gemini-api/docs/pricing)
- **Architecture:** Proprietary; parameter count unverified.

### Raw benchmarks found

Google's March 2026 comparison explicitly labels the **Gemini 2.5 Flash-Lite Dynamic** column. [Publisher evaluation table](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/):

- Reasoning: GPQA Diamond **66.7%**, full text+multimodal HLE **6.9%**, both without tools.
- Coding: LiveCodeBench **34.3%**, questions January–May 2025.
- Vision: MMMU-Pro **51.0%**, Video-MMMU **60.7%**.
- Long context: MRCR v2 eight-needle **30.6%** at 128K average and **5.4%** at 1M pointwise. Advertised capacity is not dependable retrieval.
- Agent/tool use: BFCL v4 function-calling configuration **36.87% overall**, listed rank **52** in the retrieved table. This is a separate evaluator/harness, not Google's Dynamic configuration. [Berkeley leaderboard](https://gorilla.cs.berkeley.edu/leaderboard)
- Terminal-Bench 2.1, Tau3/Tau2, GDPval-AA, Claw, Toolathon, MCP-Atlas, SWE Atlas, LCR/MLCR, CritPt, Intelligence Index, Omniscience, SWE-bench/Pro, SciCode, Vibe Code Bench and DeepSWE: no verified public score found in this pass.

### Normalized scores (1–100)

- **Tool use: 45/100.** Measured function calling supports basic automation; low BFCL performance limits complex-agent confidence.
- **Reasoning: 57/100.** Modest science and HLE results fit the lower middle tier.
- **Context window: 95/100.** Capacity meets the million-token tier floor; poor measured retrieval prevents any uplift and materially limits practical use.
- **Multimodal: 90/100.** Broad audio/video/PDF input coverage; weaker visual reasoning and text-only output cap the score.
- **Coding: 45/100.** Low measured code-generation performance; repository engineering is unverified.
- **Cost efficiency: 100/100.** Applies to the documented free tier, subject to access limits and data-use terms; paid pricing is also low.
- **Overall Score: 66/100.** Half-up mean: 332 / 5 = 66.4. Best for inexpensive lightweight multimodal processing, with retrieval verification.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh primary-source research; normalized scores are interpretations, not vendor scores.
- Future sources: add separate signed files using the same headings.

