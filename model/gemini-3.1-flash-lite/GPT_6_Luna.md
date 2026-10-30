# Gemini 3.1 Flash Lite — findings by GPT-6 Luna

- Source: Google/Gemini 3.1 Flash-Lite
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's stable, cost-efficient multimodal model for high-volume, latency-sensitive tasks and lightweight agents. The stable API model is distinct from `gemini-3.1-flash-lite-preview`, which Google lists separately and has shut down.
- **Provider / access:** Google Gemini API (`generateContent`), Google AI Studio, and Google Cloud/Vertex AI; OpenRouter also lists the stable model as `google/gemini-3.1-flash-lite`. Google documents function calling, code execution, file search, Google Search/Maps grounding, structured output, and URL context. It is not listed in the current OpenCode Console model catalog; the Zen ID and Zen free access are unverified.
- **Release / knowledge:** Stable API model released **2026-05-07**. Google lists an earliest shutdown date of **2027-05-07**, with Gemini 3.5 Flash-Lite as the recommended replacement. The separately listed preview launched 2026-03-03 and shut down 2026-05-25. No model-specific knowledge cutoff verified.
- **IDs:** Stable Google API ID `gemini-3.1-flash-lite`; stable OpenRouter route `google/gemini-3.1-flash-lite`. The distinct preview ID is `gemini-3.1-flash-lite-preview` and is not treated as this model.
- **Context window:** **1,048,576 input tokens; 65,536 output tokens** in Google's stable API reference. Google's later comparison page lists GDM-MRCR v2 (8-needle) at **60.1% average at 128K** and **12.3% pointwise at 1M**; the maximum window should not be read as reliable 1M retrieval.
- **Modalities:** Text, image, video, audio, and PDF input; text output. Audio generation, image generation, and Live API are not supported for this model ID. The model supports configurable thinking.
- **Pricing (as of 2026-10-30):** Google Gemini API standard paid tier: **$0.25/MTok text/image/video input; $0.50/MTok audio input; $1.50/MTok output including thinking tokens**. Cached input is $0.025/MTok text/image/video and $0.05/MTok audio. Batch pricing is half the standard token rate. Google AI Studio offers a free tier, but its inputs/outputs may be used to improve Google products; don't treat it as an equivalent privacy tier to paid API service. Prices from Google's live pricing page.
- **Architecture:** Proprietary. Google describes the model as based on Gemini 3 Pro in its March 2026 model card; that card predates the stable May release and does not document whether the stable checkpoint is identical, so architecture details are not transferred beyond that qualified statement.
- **Evaluation caveat:** Stable-specific public scores are sparse. Google's later Gemini 3.5 Flash-Lite comparison table gives a Gemini 3.1 Flash-Lite reference row for agentic, coding, chart, and long-context tests. Google's March 3 model card and Vals AI page instead cover the preview-era model; Google's lifecycle page explicitly distinguishes that preview ID from the May stable ID. I do not assign preview-only GPQA, HLE, SWE-bench Verified, LiveCodeBench, or Vals scores to the stable model. BenchLM's stable page cites Vals' preview page for its coding/GPQA entries, so those figures are also excluded here.

### Raw benchmarks found

Agent / tool use (Google's later Gemini 3.5 comparison page, stable-model reference row):

- **GDPval-AA v2: 642 Elo**; **OSWorld-Verified: 54.3%**; **Terminal-Bench 2.1 (Terminus-2): 31.0%**. These depend on benchmark harnesses; they are not standalone function-call accuracy.
- Google documents function calling, code execution, file search, URL context, and search/Maps grounding. These are API capabilities, not measured tool-use scores.
- No verified stable-ID Tau3, Claw-Eval, or independent tool-call-efficiency score found.

Reasoning / knowledge:

- No GPQA Diamond, HLE, or other broad reasoning score was verified for the **stable May 2026 API ID**.
- The Google model card published March 3, 2026 reports a pre-stable `Gemini 3.1 Flash-Lite High` row (including HLE 16.0% and GPQA Diamond 86.9%), but it predates the stable release and Google's lifecycle page lists a distinct March preview ID. These values are preserved as preview-era evidence only and are not assigned to the stable ID.

Coding:

- **SWE-bench Pro (Public): 38.3%** and **Terminal-Bench 2.1 (Terminus-2): 31.0%** in Google's later Gemini 3.5 comparison table's Gemini 3.1 Flash-Lite row.
- The March model-card row reports **LiveCodeBench 72.0%** (UI window 2025-01-01–2025-05-01), but that pre-stable result is not attributed to the stable ID. Vals AI reports **SWE-bench 62.8%** and LiveCodeBench 80.1% for the explicitly named **preview** ID; those are not stable-model results.
- No stable-ID SWE-bench Verified, SciCode, DeepSWE, or SWE-Atlas result verified.

Long context:

- Google's later comparison page gives **GDM-MRCR v2 (8-needle): 60.1% average at 128K; 12.3% pointwise at 1M**. The model accepts up to 1,048,576 input tokens, but retrieval performance falls sharply at the 1M test point.

Multimodal:

- Google's later comparison page reports **CharXiv Reasoning 73.2% without tools and 75.6% with tools** for its Gemini 3.1 Flash-Lite reference row. The separate March card reports Video-MMMU 84.8% and MMMU-Pro 76.8% for its pre-stable row; these are not attributed to the stable ID.
- Google's stable API reference confirms image, video, audio, and PDF input with text output, but does not expose native audio or image generation for this ID.

### Normalized scores (1–100)

- **Tool use: 58/100.** Google's stable-reference Terminal-Bench 2.1 is 31.0%, OSWorld-Verified 54.3%, and GDPval-AA v2 642 Elo—mixed, modest agentic results despite broad documented tool APIs. Sources: Google Gemini 3.5 comparison table and stable API reference.
- **Reasoning: 65/100.** No broad reasoning score was verified for the stable ID. Preview-era GPQA/HLE values are not transferred; this conservative score reflects the evidence gap rather than a claim that the model scored poorly on those tests.
- **Context window: 95/100.** The stable API allows 1,048,576 input tokens, the ≥1M tier, but GDM-MRCR v2 falls to 12.3% at the 1M pointwise test; no basis for the rubric's 100-point retrieval tier. Sources: Google stable API reference and later comparison page.
- **Multimodal: 92/100.** Text/image/video/audio/PDF input meets the audio-input band. Stable-row CharXiv is 73.2% without tools and 75.6% with tools; output remains text-only. Sources: Google stable API reference and later comparison page.
- **Coding: 63/100.** Stable-reference SWE-bench Pro is 38.3% and Terminal-Bench 2.1 is 31.0%; the stronger 62.8% SWE-bench and 80.1% LiveCodeBench results belong to Vals' preview entry and are excluded. Sources: Google later comparison page; Vals AI preview page; Google lifecycle table.
- **Cost efficiency: 94/100.** The paid standard price ($0.25/$1.50 per MTok) is below the rubric's ~$0.60/$2.20 reference. Google AI Studio's free tier exists but has different data-use terms, so the score does not assume unrestricted free production access. Source: Google Gemini API pricing.
- **Overall Score: 75/100.** Arithmetic mean of the five quality dimensions, excluding cost: `(58 + 65 + 95 + 92 + 63) / 5 = 74.6`, rounded to **75**. Long context and broad input modalities lift the score; modest stable-row agent/coding results and missing stable-ID reasoning scores constrain it.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Cross-checked Google's stable Gemini API reference, lifecycle/deprecation table, current pricing page, and DeepMind model card/comparison table against OpenRouter's stable route, Vals AI's explicitly preview-labeled entry, BenchLM's source links, and OpenCode Console's catalog. Kept Google's March preview-era results separate from the May stable API ID; no preview benchmark was used as a stable score.
- Sources: [Google Gemini 3.1 Flash-Lite API reference](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite); [Google Gemini deprecations](https://ai.google.dev/gemini-api/docs/deprecations); [Google Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing); [Google DeepMind Gemini 3.1 Flash-Lite model card](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/); [Google DeepMind Gemini Flash-Lite comparison page](https://deepmind.google/models/gemini/flash-lite/); [OpenRouter stable model listing](https://openrouter.ai/api/v1/models?q=gemini-3.1-flash-lite); [Vals AI preview-only evaluation](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview); [BenchLM partial-coverage page](https://benchlm.ai/models/gemini-3-1-flash-lite); [OpenCode Console model catalog](https://opencode.ai/docs/zen).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
