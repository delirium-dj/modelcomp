# Grok 4.20 — findings by GPT-6 Luna

- Source: xAI/Grok 4.20 0309 Reasoning
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's proprietary reasoning model with image input, long context, and function calling. This report covers the reasoning endpoint resolved by the base alias `grok-4.20`; the separately addressable non-reasoning and multi-agent endpoints are not scored as though they were the same serving profile.
- **Provider / access:** xAI API, with function calling, structured outputs, reasoning, and batch support. OpenRouter also lists `x-ai/grok-4.20`; provider wrappers may expose their own controls and context limits.
- **Release / knowledge:** Vals AI and Models.dev date the `0309` checkpoint **2026-03-09**; OpenRouter lists its route as released **2026-03-31**. Artificial Analysis calls its separately named `Grok 4.20 0309 v2 (Reasoning)` entry released **2026-04-07**. No xAI announcement resolving these listing dates was found. OpenRouter gives a **2025-09** knowledge cutoff, not independently confirmed in xAI's model docs.
- **IDs:** xAI's canonical model name is `grok-4.20-0309-reasoning`; aliases include `grok-4.20` and `grok-4.20-reasoning-latest`. The separate non-reasoning model is `grok-4.20-0309-non-reasoning`, and the multi-agent model is `grok-4.20-multi-agent-0309`. The multi-agent endpoint is a distinct deployment profile; xAI's documentation describes parallel agents but the exact “leader + 4 or 16” claim in some secondary listings was not verified in xAI docs.
- **Context window:** xAI's current model-specific docs specify **1,000,000 tokens** for the reasoning, non-reasoning, and multi-agent IDs. Artificial Analysis, OpenRouter, and Vals AI list **2M** for their Grok 4.20 entries; no exact crosswalk showing that their 2M-tested route is the same configuration as xAI's current 1M specification was found. The vendor's current spec is used for scoring. No numeric retrieval score at 512K+ was verified.
- **Modalities:** Text and image input, text output; function calling and structured output are supported. No audio or video input for this API model was verified.
- **Pricing (as of 2026-10-30):** xAI: below 200K prompt tokens, **$1.25 input / $0.20 cached input / $2.50 output per MTok**; at or above 200K, **$2.50 / $0.40 / $5.00**. The higher tier applies to all tokens once the prompt reaches the threshold. Batch requests receive a **20% discount**. Agent tool calls, where used, may have additional invocation fees.
- **Architecture:** Proprietary; xAI has not disclosed parameter count or detailed architecture.
- **Lifecycle:** Artificial Analysis marks its v2 entry deprecated and recommends Grok 4.3; xAI's current docs still list the 0309 endpoints and pricing. No xAI retirement date was found.

### Raw benchmarks found

Vals AI reports independent evaluations run through the xAI API, generally at temperature 0.7 and top-p 0.95. Its current model table and dated update do not always use identical labels/results, so those variants are retained separately. No official xAI benchmark card for this checkpoint was found.

Agent / tool use:

- Terminal-Bench 2.1: **44.20% ± 0.99** (Vals AI; xAI API). This is below the project's stated 45–60% mid band.
- Vals Index: **57.70% accuracy** in the dated Vals update; this is Vals' composite index, not the project's tool-use dimension.
- Domain-specific Vals results include Finance Agent (v2) **28.49% ± 0.32**, Legal Research Bench **13.94% ± 2.41**, and Tax Agent Bench **6.95% ± 1.75**. These tasks are not interchangeable with general tool-use evaluations.
- No verified same-harness Tau3-Banking, GDPval-AA, OSWorld/AutomationBench, or Claw-Eval score found.

Reasoning / knowledge:

- GPQA Diamond: **88.64% ± 1.59**; MMLU-Pro: **86.25% ± 0.34**; AIME: **96.46%** (Vals AI; AIME figure is in its dated update).
- Vals AI's dated update reports **57.70%** Vals Index accuracy; this is not Artificial Analysis' Intelligence Index and should not be conflated with it.
- No verified HLE, CritPt, or long-context retrieval score for this exact endpoint was located. Artificial Analysis' current model page lists no Intelligence Index result. Older aggregate numbers and BenchLM's Meta-linked rows were excluded where the linked source did not allow the model-specific attribution to be corroborated.

Coding:

- LiveCodeBench: **84.27% ± 1.03**; Vibe Code Bench v1.1: **4.06% ± 2.06**; Terminal-Bench 2.1: **44.20% ± 0.99** (Vals AI).
- Vals AI's current table lists **SWE-bench 72.20% ± 2.01** without a more specific benchmark suffix; a dated update separately reports **SWE-bench Verified 74.20%**. These are kept as distinct source entries rather than silently merged. Vals says the evaluation used the xAI API; no matching official xAI result was found.
- No verified SciCode or DeepSWE result found.

Multimodal / long context:

- MMMU-Pro: **83.47% ± 0.89** (Vals AI; visual reasoning).
- The xAI specification is text/image input. Artificial Analysis also lists text/image input and its 2M context listing, but gives no retrievable long-context result in the current page text. No MRCR, RULER, or other verified full-window retrieval score found.

### Normalized scores (1–100)

- **Tool use: 56/100.** Terminal-Bench 2.1 is 44.20%, just below the project's mid reference band; Vals' composite and business-domain results are useful context but not substitutes for Tau3/GDPval/OSWorld. Missing Claw-Eval is noted.
- **Reasoning: 86/100.** GPQA Diamond is 88.64%, MMLU-Pro is 86.25%, and AIME is 96.46%; no verified HLE/CritPt/AA Intelligence Index result is available to establish frontier breadth.
- **Context window: 95/100.** The vendor-specified 1M window meets the project's ≥1M tier. Independent pages list 2M, but no source-to-endpoint mapping or retrieval score justifies increasing the score.
- **Multimodal: 65/100.** Text and image input place it in the image-input band; output is text only and no audio/video input is verified.
- **Coding: 78/100.** LiveCodeBench is 84.27% and the dated SWE-bench Verified result is 74.20%, but Terminal-Bench 2.1 is 44.20% and Vibe Code Bench v1.1 is 4.06%; results are mixed across tasks.
- **Cost efficiency: 90/100.** Base pricing of $1.25/$2.50 per MTok is competitive; prompts at or above 200K double all token rates, and separate server-tool invocation charges can apply.
- **Overall Score: 76/100.** Arithmetic mean of the five quality dimensions: `(56 + 86 + 95 + 65 + 78) / 5 = 76`. A strong reasoning/coding endpoint with a large vendor-stated context and image input; the lower Terminal-Bench/Vibe Code results and the unresolved context-window discrepancy are important caveats.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Multiple independent public searches across xAI model docs/pricing, Vals AI's exact-route evaluation page, Artificial Analysis model/release pages, and OpenRouter's model listing. Vals reports exact-route results and its evaluation settings. xAI's 1M context spec is retained alongside independent 2M listings; March 9, March 31, and April 7 dates are labeled by source rather than collapsed. BenchLM's Grok 4.20 page cites Meta's Muse Spark post for many rows; those rows were not used when the linked source did not establish the Grok-specific attribution. Scores are normalized interpretations, not official ratings.
- Sources: [xAI reasoning model docs](https://docs.x.ai/developers/models/grok-4.20); [xAI non-reasoning model docs](https://docs.x.ai/developers/models/grok-4.20-non-reasoning); [xAI multi-agent model docs](https://docs.x.ai/developers/models/grok-4.20-multi-agent-beta-0309); [xAI pricing](https://docs.x.ai/developers/pricing); [Vals AI exact-route benchmarks](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning); [Artificial Analysis reasoning listing](https://artificialanalysis.ai/models/grok-4-20); [Artificial Analysis 0309 release page](https://artificialanalysis.ai/models/releases/grok-4-20-0309); [OpenRouter model listing](https://openrouter.ai/x-ai/grok-4.20); [BenchLM rows and source links](https://benchlm.ai/models/grok-4-20-beta); [Meta post linked by those rows](https://ai.meta.com/blog/introducing-muse-spark-msl/).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
