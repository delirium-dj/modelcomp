# Gemini 2.5 Pro — findings by GPT 6 Astra

- Source: Google DeepMind / `gemini-2.5-pro`
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Research refresh — 2026-10-10

Compared with 2026-10-04. Sources accessed today; access dates are not evaluation execution dates. This section supersedes conflicting statements or missing-data claims in the preserved snapshot. No local model benchmark was run.

[Google's model reference](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro) still restricts access to previous active users and explicitly says not deprecated. It reconfirms 1,048,576 input / 65,536 output, January 2025 cutoff and broad multimodal inputs. File search, URL context and batch/flex/priority consumption options are documented; tool availability is not a measured success rate.

[Current pricing](https://ai.google.dev/gemini-api/docs/pricing) retains standard $1.25/$10 through 200K input, $2.50/$15 above. Newly recorded batch/flex input/output: **$0.625/$5** and **$1.25/$7.50** respectively; standard cache storage remains $4.50/M tokens/hour. The cost score continues to use standard paid service, not quotas or discounted service classes.

[AA comparison](https://artificialanalysis.ai/models/comparisons/minimax-m3-vs-gemini-2-5-pro) now lists Briefcase **298** versus 302 and GDPval v2.1 **459** versus 444. Index 16, Automation 2%, Terminal 4.0 0%, SciCode 46%, HLE 23%, CritPt 3%, Omniscience −16 and LCR 69% agree. GDP.pdf **10%** and **$0.33/task** add workload evidence. Elo changes do not establish weight changes.

Vibe Code Bench v1.1 / OpenHands: **0.40%, $1.22/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

Coding 71→68 incorporates weak end-to-end application building without discarding narrower coding strengths. Other scores unchanged. Remaining gaps: exact model MCP Atlas, newer repository suites and independently reproduced full-window retrieval. Preview and stable checkpoint results stay explicitly separated in the historical snapshot.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **42, 76, 95, 95, 71, 77**; current: **42, 76, 95, 95, 68, 77**. Overall: **76 → 75**. Changes reflect revised evidence, not necessarily changed model weights.

## Prior research snapshot — 2026-10-04

Preserved for comparison; current corrections are above.

### Model card

- **Name:** Gemini 2.5 Pro, stable June 2025 model.
- **Short description:** Multimodal reasoning model for code, documents and mixed-media analysis.
- **Provider / access / IDs:** Gemini API `gemini-2.5-pro`, native generateContent API; no verified Zen Free ID. Current access is limited to previous active users; Google says it is not deprecated.
- **Release / knowledge:** June 2025 stable update; January 2025 cutoff.
- **Context window:** 1,048,576 input, 65,536 output.
- **Modalities:** Text, images, audio, video and PDF input; text output. Thinking, functions, structured output, code execution and grounding supported; no native audio/image generation or Live API. [Current API documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro).
- **Pricing (2026-10-04):** Evaluated paid standard tier: USD 1.25 input / 10 output / 0.125 cache hit per million tokens through 200K input; above that, 2.50 / 15 / 0.25. Cache storage USD 4.50 per million tokens/hour. Listed free tier has quotas and product-improvement data use; paid tier does not. Access restriction still applies. [Pricing](https://ai.google.dev/gemini-api/docs/pricing?authuser=2).
- **Architecture:** Proprietary sparse MoE transformer; parameter counts undisclosed. [Model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Pro-Model-Card.pdf).

### Raw benchmarks found

Agent / tool use:

- Independent AA: GDPval-AA v2.1 **444 Elo**, AA-Briefcase v1.1 **302**, AutomationBench-AA **2%**, Terminal-Bench 4.0 **0%**. [AA comparison, Gemini column](https://artificialanalysis.ai/models/comparisons/minimax-m3-vs-gemini-2-5-pro).
- Terminal-Bench 2.1, Tau3/Tau2, Claw-Eval and MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Vendor GA table: GPQA Diamond **86.4%**, HLE **21.6%**, AIME 2025 **88.0%**. [June card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Pro-Model-Card.pdf).
- AA: Intelligence Index **16**, HLE **23%**, CritPt **3%**, Omniscience **−16** (index, not accuracy). Current index versions differ from older normalization references. [AA](https://artificialanalysis.ai/models/comparisons/minimax-m3-vs-gemini-2-5-pro).

Coding:

- Vendor GA SWE-bench Verified **59.6% single attempt / 67.2% multiple attempts**, Aider Polyglot **82.2%**, LiveCodeBench January–May 2025 **69.0%**. GA evaluations used the June 5 preview endpoint; March/May columns are different versions. [Card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Pro-Model-Card.pdf).
- Independent SciCode **46%**. [AA](https://artificialanalysis.ai/models/comparisons/minimax-m3-vs-gemini-2-5-pro).
- SWE-Pro, Vibe Code Bench and DeepSWE: no verified public score found.

Long context:

- MRCR v2 eight-needle: **58.0% cumulative 128K / 16.4% pointwise 1M**; MMMU **82.0%**, VideoMME with audio/subtitles **86.9%**. [Card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Pro-Model-Card.pdf).
- AA-LCR v1.1 **69%**. [AA](https://artificialanalysis.ai/models/comparisons/minimax-m3-vs-gemini-2-5-pro).

## Current normalized scores (1–100)

- **Tool use: 42/100.** Modern automation/terminal results remain weak despite supported functions.
- **Reasoning: 76/100.** Strong historical GPQA, moderated by HLE and factual reliability.
- **Context window: 95/100.** 1M capacity; old full-window retrieval evidence does not justify 100.
- **Multimodal: 95/100.** Audio/video/image/PDF input, text output.
- **Coding: 68/100.** Useful supervised coding but new app-building evidence limits autonomous engineering.
- **Cost efficiency: 77/100.** Paid standard rates unchanged; batch/flex reduce price with different service conditions.
- **Overall Score: 75/100.** Half-up mean (42 + 76 + 95 + 95 + 68) / 5; cost excluded. Previous overall 76.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-10
- Method: Fresh official documentation, vendor card and independent evaluator research; scores are normalized interpretations.

