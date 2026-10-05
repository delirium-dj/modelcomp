# Gemini 2.0 Flash — findings by GPT 6 Astra

- Source: Google DeepMind / gemini-2.0-flash-001
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Gemini 2.0 Flash (stable, non-thinking).
- **Short description:** Historical multimodal general-purpose model; not the Thinking, Live or image-generation variants.
- **Provider / access / IDs:** Former Google Gemini `generateContent` API IDs `gemini-2.0-flash` and `gemini-2.0-flash-001`; both shut down June 1, 2026. No verified active Zen Free ID. [Lifecycle](https://ai.google.dev/gemini-api/docs/deprecations)
- **Release / knowledge:** February 5, 2025 GA; August 2024 cutoff. [Release](https://developers.googleblog.com/en/gemini-2-family-expands/), [specifications](https://ai.google.dev/gemini-api/docs/models/gemini-2.0-flash)
- **Context window:** 1,048,576 input tokens; 8,192 output tokens. [Specifications](https://ai.google.dev/gemini-api/docs/models/gemini-2.0-flash)
- **Modalities:** Text, image, audio and video input; text output. Function calling, code execution, search grounding and structured outputs; stable benchmark column is non-thinking. [Specifications](https://ai.google.dev/gemini-api/docs/models/gemini-2.0-flash)
- **Pricing (2026-10-05):** No current purchasable Google endpoint. Historical research reports list $0.10 input / $0.40 output per million tokens; cached and modality-specific historical rates not independently recovered here. Cost score describes historical economics only. [Research API-cost table](https://openreview.net/pdf/aaa36cdb9935b1794aa834baef89ef2a5db2aec7.pdf)
- **Architecture:** Proprietary; parameter counts and active-parameter split not verified. No downloadable checkpoint established by the API documentation.

### Raw benchmarks found

Google's comparison table explicitly identifies the **Gemini 2.0 Flash non-thinking** column. Results below are historical publisher evaluations, not results for Gemini 2.5. [Model-card comparison](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Flash-Model-Card.pdf)

| Group | Benchmark | Result |
|---|---|---:|
| Reasoning | GPQA Diamond, pass@1 | 60.1% |
| Reasoning | HLE, no tools | 5.1% |
| Reasoning | AIME 2025, pass@1 | 27.5% |
| Coding | LiveCodeBench v5, pass@1 | 34.5% |
| Coding | Aider Polyglot, whole format | 22.2% |
| Multimodal | MMMU, pass@1 | 71.7% |
| Factuality | FACTS Grounding | 84.6% |
| Long context | MRCR v2, 128K cumulative / 1M pointwise | 36% / 6% |

Terminal-Bench 2.1, Tau3/Tau2, GDPval-AA, Claw-Eval, Toolathlon, MCP-Atlas, SWE-bench Verified/Pro, CritPt, Omniscience, SciCode and Vibe Code Bench: no verified public score found in this research. Tool support is a capability proxy, not a measured agent success rate.

### Normalized scores (1–100)

- **Tool use: 40/100.** Provisional capability-based interpretation of documented calling and execution; no verified agent benchmark supports a high score.
- **Reasoning: 48/100.** GPQA is useful but difficult mathematics and HLE show substantial limitations.
- **Context window: 85/100.** Million-token nominal capacity is discounted for weak measured retrieval at full length.
- **Multimodal: 93/100.** Broad audio/video/image understanding and measured visual reasoning; text-only output caps coverage.
- **Coding: 37/100.** LiveCodeBench and Aider indicate limited modern coding reliability.
- **Cost efficiency: 96/100.** Historically inexpensive paid inference; retirement makes this unsuitable as a current purchasing recommendation.
- **Overall Score: 61/100.** Half-up mean: (40 + 48 + 85 + 93 + 37) / 5 = 60.6. Historical baseline for inexpensive multimodal processing.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh public web research; normalized scores are interpretations, not official vendor scores.
- Future sources: add a separate signed report alongside this file.
