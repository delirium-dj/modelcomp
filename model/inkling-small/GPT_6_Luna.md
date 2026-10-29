# Inkling-Small — findings by GPT-6 Luna

- Source: Thinking Machines Lab/Inkling-Small
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small
- **Short description:** Thinking Machines Lab's open-weight multimodal MoE model, released as a distinct smaller checkpoint from Inkling (276B total / 12B active versus Inkling's 975B / 41B). The official model card and release post identify it as Inkling-Small.
- **Provider / access:** Weights are downloadable from [Hugging Face](https://huggingface.co/thinkingmachines/Inkling-Small); Thinking Machines Lab also offers Tinker API and Playground access, and third-party inference routes. The official card does not publish one canonical Tinker API model ID. OpenRouter currently lists `thinkingmachines/inkling-small` and a zero-price `thinkingmachines/inkling-small:free` route.
- **Release / knowledge:** Released 2026-07-30. No training-data or knowledge cutoff is published in the [official model card](https://thinkingmachines.ai/model-card/inkling-small/).
- **IDs:** Hugging Face repository `thinkingmachines/Inkling-Small`; OpenRouter `thinkingmachines/inkling-small` and `thinkingmachines/inkling-small:free`. Tinker is an official access route, but its documentation reviewed here did not expose a stable model ID.
- **Context window:** Up to 1M tokens in the [official model card](https://thinkingmachines.ai/model-card/inkling-small/). OpenRouter's live catalog on 2026-10-29 lists 524,288 tokens for its paid route and 1,048,576 for `:free`; route limits can be lower than the native model maximum. No verified MRCR/RULER retrieval result found.
- **Modalities:** Text, image, and 16 kHz WAV audio input; UTF-8 text output. The model card recommends image dimensions of 40–4096 px and audio clips under two minutes. Video appears in the training-data description, not the supported inference-input list.
- **Pricing (as of 2026-10-29):** Route-dependent. The official [release post](https://thinkingmachines.ai/news/inkling-small/) uses $1.20 per 1M output tokens for its performance-cost comparison. OpenRouter's live catalog lists the paid route at $0.45 input / $1.20 output per 1M tokens (cached input $0.10) and a $0 `:free` route. BenchLM's page dated 2026-10-28 gives a headline $0.58/$1.44 and $0.116 cached input, but its own provider table lists DeepInfra and OpenRouter at $0.45/$1.20/$0.10; I treat the headline as an unresolved source inconsistency, not a single universal price. Free-route availability, limits, and data handling are provider-controlled; no privacy guarantee was verified.
- **Architecture:** Open weights under Apache 2.0. Official card: 42-layer decoder-only MoE, 276B total / 12B active, 256 routed experts (6 selected per token) plus 2 shared experts, with hybrid local/global attention; BF16, MXFP8, and NVFP4 formats are listed.

### Raw benchmarks found

Three independent public searches were followed by checks against Thinking Machines Lab's model card and release post, the Hugging Face card, OpenRouter's live catalog, and an October 2026 independent benchmark/pricing profile. The official release says its evaluations use effort 0.99 and temperature 1.0; coding evaluations use a 256K-token trajectory limit. It also distinguishes internal harness results from externally reported comparisons.

Agent / tool use:

- Terminal-Bench 2.1: **64.7%** (best harness; official model card/release post). Inkling-Small's score used Thinking Machines Lab's internal coding harness; the release notes that a small number of web-search-contaminated solutions were assigned zero.
- Tau 3 Banking: **15.5%**; GDPval-AA v2: **1269 Elo**; MCP Atlas: **79.6% public / 79.2% all**; BrowseComp with context management: **77.4%**; Toolathlon Verified: **54.4%**; AA-Briefcase: **917** (official [model-card evaluation table](https://thinkingmachines.ai/model-card/inkling-small/)).
- Harness/source variation: BenchLM's 2026-10-28 page separately reports Vals AI runs of **55.1%** on Terminal-Bench 2.1 and **82.2%** on SWE-bench Verified, versus the official model-card figures below. These are separate runs, not interchangeable same-harness corrections; neither pair is averaged.

Reasoning / knowledge:

- GPQA Diamond: **89.5%**; HLE: **31.6% text-only / 47.8% with tools**; AIME 2026: **95.5%**; HMMT February 2026: **90.2%**; CritPt: **8.3%** (official [model-card evaluation table](https://thinkingmachines.ai/model-card/inkling-small/)).
- ARC-AGI-1: **84.0%**; ARC-AGI-2: **40.1%**; SimpleQA Verified: **20.6%**; AA Omniscience index: **−9.0**; IFBench: **82.2%**; Global-MMLU-Lite: **86.7%** (same source).
- The card's HLE-with-tools footnote says several comparison models were evaluated in Thinking Machines Lab's internal harness; it does not identify Inkling-Small among those reruns. The table's Inkling-Small value is retained as published, with that methodology caveat.

Coding:

- SWE-bench Verified: **80.2%** using a bash-only harness; SWE-bench Pro (public): **55.9%**; SciCode: **48.7%** (official [model card](https://thinkingmachines.ai/model-card/inkling-small/)).
- The official release/model card reports the Terminal-Bench 2.1 score above using its internal coding harness and states that some web-search-contaminated solutions were scored zero. Independent Vals AI runs differ (see Agent / tool use).

Vision and audio:

- MMMU Pro (Standard 10): **74.0%**; CharXiv RQ: **77.4% original / 81.3% with Python**; Audio MC: **54.9%**; MMAU: **77.0%**; VoiceBench: **90.1%** (official [model-card evaluation table](https://thinkingmachines.ai/model-card/inkling-small/)). The release notes that VoiceBench uses rule-based string matching and that its team added an answer-format instruction; Audio MC comparisons may use internal evaluations.

Long context:

- Officially supports up to 1M tokens, but no verified exact-model MRCR, RULER, or other long-context retrieval score found. OpenRouter's paid route currently exposes 524,288 tokens; its free route exposes 1,048,576.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 at 64.7%, Tau 3 Banking at 15.5%, and Toolathlon/MCP Atlas results show useful agentic ability, but remain below the methodology's frontier reference levels; the Terminal-Bench result is harness-sensitive.
- **Reasoning: 88/100.** GPQA Diamond 89.5%, AIME 95.5%, and HMMT 90.2% are strong; HLE is 31.6% text-only (47.8% with tools), and the evidence does not support a higher general-reasoning score.
- **Context window: 95/100.** The official native window reaches 1M, matching the methodology's 95–100 band; no retrieval result supports the top score, and some API routes expose only 512K.
- **Multimodal: 95/100.** Verified image and audio input place it in the methodology's audio-input band; output is text-only and video input was not verified.
- **Coding: 82/100.** SWE-bench Verified 80.2%, SWE-bench Pro 55.9%, Terminal-Bench 2.1 64.7%, and SciCode 48.7% support a strong score, capped for harness variation and the gap to the methodology's highest coding references.
- **Cost efficiency: 100/100.** OpenRouter currently exposes a zero-price route, although its availability and data-handling terms are provider-dependent; the paid route is $0.45/$1.20 per 1M input/output tokens.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions (80, 88, 95, 95, 82), excluding cost; best fit is an open-weight, multimodal generalist for agentic coding and reasoning when audio/image input or self-hosting flexibility matters.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public searches followed by primary-source verification and a route-specific check of current API catalog/pricing data. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
