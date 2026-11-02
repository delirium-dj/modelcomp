# Gemini 2.5 Pro — findings by GPT 5.6 Luna

- Source: Google/Gemini 2.5 Pro
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's earlier Pro model for complex reasoning, coding, multimodal analysis, and long documents.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI, and downstream providers; API ID `gemini-2.5-pro`.
- **Release / knowledge:** 2025 generation; the serving route's cutoff is not uniform across all provider surfaces.
- **IDs:** `gemini-2.5-pro` / `google/gemini-2.5-pro`.
- **Context window:** Approximately 1,000,000 tokens.
- **Modalities:** Text, image, audio, video, and document input; text output; thinking and tool use are supported on documented API surfaces.
- **Pricing (as of 2026-11-02):** Approximately $1.25 input / $10 output per 1M tokens in current API/catalogue listings; cache, batch, and provider rates vary.
- **Architecture:** Proprietary; parameter count and internal architecture are undisclosed.

## Raw benchmarks found

- BenchLM current profile: **48.7/100, #106 of 1,004**, with 30 benchmark rows covered.
- τ²-bench: **54.1%**; Gert Labs: **42.01%**; GDPval-AA: **616 Elo**; AA Agentic Index: **3.5%**.
- SWE-bench Verified: **63.8%**; AA LiveCodeBench: **80.1%**.
- AA-MMMU-Pro: **74.9%**; Design Arena Website: **1165**; AA-LCR: **69.0%**; CritPt: **2.6%**.
- AA-GPQA Diamond: **84.4%**; AA-HLE: **22.5%**; AA MMLU-Pro: **86.2%**; AIME 2024: **92%**; FrontierMath v2 tiers 1–3: **24.561%**.
- Google's model card positions Gemini 2.5 Pro as a thinking model for code, math, STEM, documents, and long context; benchmark harness and provider differences are material.

## Normalized scores (1–100)

- **Tool use: 65/100.** τ²-bench and documented tools are useful, but current independent agentic rows and GDPval placement are weak relative to newer models.
- **Reasoning: 75/100.** GPQA 84.4%, LCR 69%, AIME 92%, and HLE 22.5% show a capable but uneven older reasoning profile.
- **Context window: 94/100.** The 1M window remains a major strength; no independent full-window retrieval curve was found.
- **Multimodal: 88/100.** Broad text/image/audio/video/document input and AA-MMMU-Pro 74.9% support strong multimodal analysis.
- **Coding: 76/100.** SWE-bench Verified 63.8% and LiveCodeBench 80.1% are useful, but current coding-agent evidence trails later generations.
- **Cost efficiency: 85/100.** $1.25/$10 is reasonable for 1M multimodal context, though output pricing is no longer especially low.
- **Overall Score: 79.6/100.** Mean of the five quality dimensions `(65 + 75 + 94 + 88 + 76) / 5 = 79.6`; best fit is long-document multimodal analysis where the 1M window matters more than frontier agentic rank.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Google API/model-card material, BenchLM's October 29 aggregation, Artificial Analysis, and Vals/benchmark rows; provider and harness differences were preserved, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Gemini 2.5 Pro API documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)
  - [Gemini 2.5 Pro model card](https://modelcards.withgoogle.com/assets/documents/gemini-2.5-pro.pdf)
  - [Gemini API pricing](https://aistudio.google.com/docs/pricing)
  - [BenchLM Gemini 2.5 Pro profile](https://benchlm.ai/models/gemini-2-5-pro)
