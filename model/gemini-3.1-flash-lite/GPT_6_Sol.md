# Gemini 3.1 Flash-Lite — findings by GPT 6 Sol

- Source: Google (`gemini-3.1-flash-lite`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Identity / access:** Separate Google low-latency multimodal model, March 2026 preview followed by a **stable** `gemini-3.1-flash-lite` ID with May 2026 update ([Google API card](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite), [DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/)). Thinking levels and Free/Batch/Flex/Priority serving tiers are not new checkpoints. Independent [Vals evaluation](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview) ran the **March preview**, not the dated stable deployment; its numbers are *historical proxy evidence only*, not an exact stable-ID reproduction.
- **Specs:** Proprietary, based on Gemini 3 Pro (not identical weights). **1,048,576 input / 65,536 output**; text, image, audio, video and PDF in, **text only** out. Function calls, code execution, search grounding and structured outputs supported; native computer use, audio generation and Live API unsupported ([Google API card](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite)). Parameters/knowledge cutoff undisclosed.
- **Pricing (2026-11-01):** [Google's standard tariff](https://ai.google.dev/gemini-api/docs/pricing#gemini-3.1-flash-lite): **$0.25 per million text/image/video input**, **$0.50 audio input**, **$1.50 output including thinking**, **$0.025 cached text/image/video** plus cache storage; eligible Free tier, Batch/Flex at half price; tool/search may be billed separately.

### Raw benchmarks found

- **Tool use:** [Google](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite) documents lightweight function/tool support but **no independently reproduced stable-ID end-to-end agent result**. [Vals March preview, high thinking](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview): Terminal-Bench 2.1 **34.08% ±0.99**, Finance Agent v2 **29.99% ±0.64**, Tax Agent **3.11% ±1.25**. These are distinct tasks and a pre-stable configuration.
- **Reasoning:** Google's [March model card](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/) reports GPQA Diamond **86.9%**, HLE full set no tools **16.0%**, SimpleQA Verified **43.3%** at high reasoning. Independent [Vals preview](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview) GPQA **81.06% ±1.97**, MMLU Pro **86.24% ±0.34**; ~5.8-point GPQA gap reflects different evaluation protocols/possibly builds, not proof of changed weights.
- **Coding:** Google [LiveCodeBench **72.0%**](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/) using its specified January–May 2025 problem period. Vals preview [LiveCodeBench **80.12% ±1.08**, SWE-bench **62.80% ±2.16**, Vibe Code Bench v1.1 **0.00%**, ProgramBench **0.00%**](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview). These coding tests use different sets/scaffolds; the zero Vibe/Program scores caution against treating short-question LCB as broad agent coding.
- **Context / vision:** Google's [MRCR v2 eight-needle **60.1% at 128K average**, **12.3% at 1M pointwise**, MMMU Pro **76.8%**, Video-MMMU **84.8%**, CharXiv **73.2%**](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/). Independent [Vals preview MMMU Pro **82.49% ±0.91**](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview). Its 1M capability is real but the vendor's **12.3%** near-cap retrieval result warrants a substantial context-quality discount. Speech is input analysis/transcription, not native speech output.

### Normalized scores (1–100)

- **Tool use: 65/100.** Built-in tools with uneven historical independent agent performance, particularly tax and TB2.1.
- **Reasoning: 74/100.** Strong GPQA/MMLU preview, modest full-HLE; stable revision not independently pinned.
- **Context window: 70/100.** 1M nominal input but vendor MRCR drops from 60.1 at 128K to 12.3 at 1M.
- **Multimodal: 78/100.** Image/audio/video/PDF comprehension and substantial vendor/independent vision evaluation; text output only.
- **Coding: 67/100.** LCB/SWE respectable but Vals Vibe/Program zeros and preview-to-stable uncertainty.
- **Cost efficiency: 88/100.** Low first-party token and caching rates, Free/Batch options; metered thinking/tool costs.
- **Overall Score: 71/100.** Half-up mean (65 + 74 + 70 + 78 + 67) / 5 = 70.8; cost excluded. Low-confidence historical proxy for the stable checkpoint.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Independent catalog/model searches, primary Google model-card/API/pricing review and external Vals high-thinking preview results; explicitly separated preview evaluation from May-updated stable ID and near-cap retrieval from nominal capacity.
- Reference URLs:
  - [Google stable Gemini 3.1 Flash-Lite API card](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite)
  - [Google DeepMind model card and evaluation table](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/)
  - [Google Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing#gemini-3.1-flash-lite)
  - [Vals independent March preview evaluation](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview)
- Future sources: add a new file next to this one using the same headings.
