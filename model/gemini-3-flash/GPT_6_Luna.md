# Gemini 3 Flash — findings by GPT-6 Luna

- Source: Google DeepMind (`gemini-3-flash-preview`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (API preview)
- **Short description:** Google's proprietary, fast multimodal model for general assistant, coding, and agent use. The current exact API model string is `gemini-3-flash-preview`; this report does not substitute later Gemini 3.6/3.8 Flash releases.
- **Provider / access:** Google Gemini API and Google AI Studio; the model also supports Google Search grounding, function calling, code execution, computer use, structured outputs, and URL context. [Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview)
- **Release / knowledge:** Released December 17, 2025; latest update shown in Google's model docs is December 2025. Knowledge cutoff is January 1, 2025 per Artificial Analysis. [Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview) · [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-flash)
- **IDs:** Google Gemini API `gemini-3-flash-preview`. The API page currently labels it Preview; the bare `Gemini 3 Flash` name is the tracked product identity. [Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview)
- **Context window:** 1,048,576 input tokens; 65,536 output tokens. [Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview)
- **Modalities:** Text, image, video, audio, and PDF input; text output. Thinking, function calling, computer use, and structured outputs are supported. Audio generation is not supported. [Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview)
- **Pricing (as of 2026-10-28):** Gemini API Free tier offers free input/output for eligible access, with limited model availability and prompts used to improve Google's products. Paid Standard pricing: $0.50/MTok text, image, or video input; $1.00/MTok audio input; $3.00/MTok output; cache $0.05/MTok text/image/video or $0.10/MTok audio, plus $1.00 per million cached tokens per hour. Batch pricing is 50% lower. Paid-tier content is not used to improve Google's products. [Google pricing](https://ai.google.dev/gemini-api/docs/pricing)
- **Architecture:** Proprietary; parameter count and model architecture are not disclosed. [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-flash)

### Raw benchmarks found

> Values below are for Gemini 3 Flash / `gemini-3-flash-preview`. Google model-card values are surfaced with an official-source label by evals.report; Vals and Artificial Analysis are independent. Runs differ by benchmark version, reasoning settings, and harness. The API supports thinking, but Artificial Analysis' page describes its evaluated profile as non-reasoning while Vals reports high reasoning effort.

Agent / tool use:

- Terminal-Bench 2.1: **53.93%** on Vals (reasoning effort high); τ²-bench: **43.3%** on Artificial Analysis. [Vals AI](https://www.vals.ai/models/google_gemini-3-flash-preview) · [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-flash)
- GDPval: **1,204 Elo** in the official results tracked by evals.report; JobBench: **11.4%** in BenchLM's result set. [evals.report](https://evals.report/models/google-gemini-3-flash) · [BenchLM](https://benchlm.ai/models/gemini-3-flash)
- Claw-Eval: **49.2%** (BenchLM links the result to the benchmark leaderboard). [BenchLM](https://benchlm.ai/models/gemini-3-flash)

Reasoning / knowledge:

- GPQA Diamond: **83.2%** in the model-card results indexed by evals.report; Vals reports **87.88%** and Artificial Analysis **81.2%**. These are separate source runs, not a matched rerun. [evals.report](https://evals.report/models/google-gemini-3-flash) · [Vals AI](https://www.vals.ai/models/google_gemini-3-flash-preview) · [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-flash)
- Humanity's Last Exam: **36.6%** in the official results tracked by evals.report; AA-HLE is **15.0%** on Artificial Analysis. The sources identify different result definitions/splits; they are not combined. MMLU-Pro: **89.0%** in evals.report and **88.59%** on Vals. [evals.report](https://evals.report/models/google-gemini-3-flash) · [Vals AI](https://www.vals.ai/models/google_gemini-3-flash-preview)
- Artificial Analysis: LCR **55.3%**, CritPt **1.4%**, Intelligence Index **17.9**. [BenchLM](https://benchlm.ai/models/gemini-3-flash)
- Evals.report also tracks official FrontierMath at **35.64%** (Tiers 1–3), ARC-AGI-1 at **84.67%**, and AIME 2026 at **95.83%**. [evals.report](https://evals.report/models/google-gemini-3-flash)
- BenchLM aggregate: **54.43/100**, rank **#81/1,002**, with partial coverage of 25/716 benchmarks. This is BenchLM's composite, not the project's normalized score. [BenchLM](https://benchlm.ai/models/gemini-3-flash)

Coding:

- SWE-bench Verified: **75.4%** in Google's official results tracked by evals.report; Vals' current table shows **75.00%**, and its December 18 update reported **76.2%**. This source/snapshot spread is retained rather than selecting one as definitive. [evals.report](https://evals.report/models/google-gemini-3-flash) · [Vals AI](https://www.vals.ai/models/google_gemini-3-flash-preview)
- SWE-bench Pro: **34.63%** and DeepSWE: **5.16%** in the official results tracked by evals.report. LiveCodeBench: **85.59%** on Vals; ProgramBench: **0%** in Vals' results. [evals.report](https://evals.report/models/google-gemini-3-flash) · [Vals AI](https://www.vals.ai/models/google_gemini-3-flash-preview)
- Vibe Code Bench v1.1: **20.20%**; Terminal-Bench 2.1: **53.93%** on Vals. [Vals AI](https://www.vals.ai/models/google_gemini-3-flash-preview)

Multimodal:

- Google's exact-model documentation verifies text, image, video, audio, and PDF input with text output. Vals reports MMMU-Pro **87.63%**; Artificial Analysis reports **78.6%**. Evals.report lists Video-MMMU at **86.9%** as unverified. The different MMMU-Pro runs are not treated as directly comparable. [Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview) · [Vals AI](https://www.vals.ai/models/google_gemini-3-flash-preview) · [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-flash) · [evals.report](https://evals.report/models/google-gemini-3-flash)

Long context:

- The documented input limit is **1,048,576 tokens**. Evals.report tracks OpenAI-MRCR v2 at **22.1%** (mean SequenceMatcher similarity), but the cited row does not specify a 512K/1M test length; no verified 1M needle-retrieval result was found. [Google model page](https://ai.google.dev/gemini-api/docs/models/gemini-3-flash-preview) · [evals.report](https://evals.report/models/google-gemini-3-flash)

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.1 is 53.93%, τ²-bench 43.3%, and GDPval 1,204 Elo; Claw-Eval is 49.2%, while JobBench at 11.4% caps expectations for long workflows.
- **Reasoning: 71/100.** GPQA Diamond ranges from 81.2% to 87.88% and MMLU-Pro is about 89%, but HLE sources diverge sharply (36.6% official vs 15.0% AA-HLE), and the AA Intelligence Index is 17.9.
- **Context window: 95/100.** The official 1M input limit meets the ≥1M tier; no retrieval result tied to 512K or 1M supports a higher rating.
- **Multimodal: 95/100.** Google documents image, video, audio, and PDF input with text output; audio generation is unsupported.
- **Coding: 76/100.** SWE-bench Verified is 75.0–76.2% and LiveCodeBench 85.59%, but SWE-Pro is 34.63%, DeepSWE 5.16%, Vibe Code Bench 20.2%, and ProgramBench 0%.
- **Cost efficiency: 100/100.** The model has a limited free tier; paid Standard is $0.50/$3.00 per MTok (with higher audio input pricing). Free-tier prompts may be used to improve Google's products, unlike paid-tier prompts.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions: (65 + 71 + 95 + 95 + 76) / 5 = 80.4. A good fit for fast, inexpensive multimodal assistance and everyday coding; use paid access for sensitive data and validate agent performance on the target harness.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent Bing searches followed by checks of Google's exact model/API documentation and pricing, the official results indexed by evals.report, and independent Vals, Artificial Analysis, and BenchLM evaluations. Search and source variations for GPQA, HLE, SWE-bench, and MMMU-Pro are retained with attribution; Gemini 3.6/3.8 Flash results were excluded. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
