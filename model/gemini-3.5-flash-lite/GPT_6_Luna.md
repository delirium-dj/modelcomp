# Gemini 3.5 Flash-Lite — findings by GPT-6 Luna

- Source: Google/Gemini 3.5 Flash-Lite
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's proprietary, low-latency multimodal model for high-volume agentic workflows, document parsing, translation, and subagent tasks. Google's [model card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/) says it is based on Gemini 3.1 Flash-Lite; no 3.5 parameter count or weights are public.
- **Provider / access:** Google Gemini API stable model code `gemini-3.5-flash-lite`, available through AI Studio and Google Cloud's Gemini Enterprise Agent Platform ([API model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite); [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)). The Gemini API supports Generate Content and Interactions; function calling and built-in tools are available ([API docs](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)). OpenCode Console separately lists `opencode/gemini-3.5-flash-lite` as a paid model, not as a free Zen model ([OpenCode model and pricing list](https://opencode.ai/docs/zen)).
- **Release / knowledge:** Google marked the stable API release generally available on **2026-07-21** ([Gemini API release notes](https://ai.google.dev/gemini-api/docs/changelog)). Google DeepMind gives a knowledge cutoff of **March 2026**, noting that some domains may still have knowledge only through January 2025 ([model card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)).
- **IDs:** Stable Google API ID `gemini-3.5-flash-lite` ([API model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)); OpenCode Console ID `opencode/gemini-3.5-flash-lite` ([OpenCode model list](https://opencode.ai/docs/zen)). No separate OpenCode free ID was verified; Google AI Studio's separate free tier is available with limited access ([Google pricing](https://ai.google.dev/gemini-api/docs/pricing)).
- **Context window:** Google API limit **1,048,576 input tokens** and **65,536 output tokens** ([API model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)). The published GDM-MRCR v2 result falls to **21.3%** at **1M** (pointwise), despite a **72.2%** average at **128K**; maximum input size should not be mistaken for reliable retrieval at that length ([Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)).
- **Modalities:** Text, image, video, audio, and PDF in; text out. Thinking, function calling, code execution, file search, URL context, search/Maps grounding, and computer use (preview) are supported. Audio generation and image generation are not supported ([API model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)).
- **Pricing (as of 2026-10-29):** Google Gemini API Standard: **$0.30 input / $2.50 output per 1M tokens**; Batch: **$0.15 / $1.25**. Standard cached input is **$0.03 per 1M tokens**, plus cache storage **$1.00 per 1M tokens per hour**. Google AI Studio's limited-access Free tier has free input/output, but Google says free-tier content may be used to improve its products; the Paid tier says it is not ([Google pricing](https://ai.google.dev/gemini-api/docs/pricing)). OpenCode Console lists **$0.30 / $2.50 / $0.03 cached read** per 1M and does not list this model among its free models ([OpenCode pricing and free-model list](https://opencode.ai/docs/zen)).
- **Architecture:** Proprietary and closed-weight. Google says Gemini 3.5 Flash-Lite is based on Gemini 3.1 Flash-Lite; a 3.5-specific parameter count and detailed architecture are not disclosed ([Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)).

### Raw benchmarks found

Google DeepMind's [model card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/) labels its benchmark table **results as of July 2026**. Its results and later independent/API results below are kept separate: harnesses, model settings, and evaluation dates differ.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2 harness): **54.0%**; GDPval-AA v2: **1140 Elo**; OSWorld-Verified: **74.0%** ([Google DeepMind model card, July 2026](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)).
- Independent BenchmarkList/API snapshot (accessed 2026-10-29): Terminal-Bench 2.1 **53.6%**; GDPval-AA **1,136 Elo**; Tau3-Banking **17.5%** ([BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash-lite/)). Google and independent GDPval scores are close but not identical; do not average them.
- CorpBench Work 1.3: **87.3** composite, including **83%** strict workflow pass rate across **100** workflows; BenchmarkList marks this result verified **2026-10-03** ([BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash-lite/)). This is a single agent-workflow evaluation, not a general tool-use score.
- Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **83.8%** and Humanity's Last Exam: **18.8%** (BenchmarkList's current Google API evaluation listing, accessed 2026-10-29; the Google DeepMind card did not publish these two results) ([BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash-lite/)).
- GDM-MRCR v2, 8-needle: **72.2%** average at **128K** and **21.3%** pointwise at **1M** ([Google DeepMind model card, July 2026](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)).
- Artificial Analysis Intelligence Index: **12** on Artificial Analysis's current direct model page; BenchmarkList separately displays **22.2** ([Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-5-flash-lite); [BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash-lite/)). These composite snapshots are not reconciled by either source and should not be averaged.

Coding:

- SWE-bench Pro (public): **54.2%**; Terminal-Bench 2.1: **54.0%** (Terminus-2); MLE-Bench: **39.2%** ([Google DeepMind model card, July 2026](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)).
- SWE-bench Verified: **75.0%**; LiveCodeBench: **79.0%**; SciCode: **41.3%**; Vibe Code Bench v1.1: **37.2%** (BenchmarkList's current Google API listing, accessed 2026-10-29; these are separate from the Google card's SWE-bench Pro result) ([BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash-lite/)).

Multimodal / document and long context:

- CharXiv reasoning: **74.5%** without tools and **76.5%** with tools ([Google DeepMind model card, July 2026](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)).
- Google API documents image, video, audio, and PDF input ([API model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)). The **21.3%** GDM-MRCR v2 1M pointwise score above is a retrieval caveat, not evidence that the model cannot accept a 1M-token request.
- BenchmarkList reports AA-LCR: **76.0%** and Context Arena scores that vary with reasoning mode ([BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash-lite/)); these use different evaluations/settings from GDM-MRCR and are not substituted for the Google card's values.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 is around 54% in both Google and independent listings, GDPval-AA is 1,136–1,140 Elo, and OSWorld-Verified is 74% ([Google model card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/); [BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash-lite/)); the scores show useful agent/computer interaction but remain midrange on the project's tool-use references. The CorpBench result is promising but single-benchmark evidence ([BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash-lite/)).
- **Reasoning: 76/100.** Independent GPQA is 83.8% and HLE 18.8% ([BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash-lite/)); MRCR v2 is 72.2% at 128K but 21.3% pointwise at 1M ([Google model card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)). The direct Artificial Analysis index is 12, with a separate listing at 22.2 ([Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-5-flash-lite); [BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash-lite/)), so composite evidence is modest and snapshot-dependent.
- **Context window: 95/100.** Google documents a 1,048,576-token input limit ([API model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)), which enters the methodology's ≥1M tier. The low 1M MRCR pointwise result and 65,536 output cap ([Google model card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/); [API model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)) prevent a higher score; the headline limit is not equivalent to high retrieval accuracy.
- **Multimodal: 92/100.** Text, image, video, audio, and PDF input qualify for the methodology's audio-input tier; CharXiv results provide additional image-reasoning evidence ([API model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite); [Google model card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)). Output remains text-only, with no audio generation ([API model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)).
- **Coding: 74/100.** SWE-bench Pro is 54.2%, Terminal-Bench 2.1 about 54%, MLE-Bench 39.2%, and independent LiveCodeBench 79.0% / SciCode 41.3% ([Google model card](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/); [BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash-lite/)); the Verified score is promising, but the full suite remains below frontier coding results.
- **Cost efficiency: 100/100.** A limited-access Google AI Studio Free tier makes input/output tokens free, but Google may use Free-tier content to improve its products; avoid confidential data there. Paid Standard is $0.30/$2.50 and Batch is $0.15/$1.25 per 1M tokens, with the OpenCode Console route paid ([Google pricing](https://ai.google.dev/gemini-api/docs/pricing); [OpenCode pricing](https://opencode.ai/docs/zen)).
- **Overall Score: 82/100.** Half-up mean of the five quality dimensions `(72 + 76 + 95 + 92 + 74) / 5 = 81.8`; best for inexpensive high-volume multimodal work and subagents, not dependable million-token recall or top-tier difficult coding/reasoning.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-29
- Method: Three or more independent public searches; Google Gemini API model/pricing documentation, Google DeepMind's model card and release notes, Artificial Analysis, BenchmarkList, and OpenCode Console documentation. July vendor results are separated from later API evaluations; differing benchmark settings and composite snapshots are preserved. Scores are normalized interpretations, not official Google ratings.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
