# GPT-5.2-Codex — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.2-codex`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2-Codex
- **Short description:** Distinct coding-optimized GPT-5.2 variant for long-running repository editing, refactors, tool use and defensive security ([OpenAI launch](https://openai.com/index/introducing-gpt-5-2-codex/)). Not merely a high-effort setting of the general `gpt-5.2` API model.
- **Provider / access:** Official ID `gpt-5.2-codex`, historically supported on OpenAI **Responses**, not Chat Completions or Batch. The [official model reference](https://developers.openai.com/api/docs/models/gpt-5.2-codex) now marks the model **Shut down**; a third-party gateway listing does not establish continuing first-party availability. No verified Zen Free route.
- **Release / knowledge:** Announced **December 18, 2025** ([OpenAI](https://openai.com/index/introducing-gpt-5-2-codex/)); knowledge cutoff **August 31, 2025** ([API reference](https://developers.openai.com/api/docs/models/gpt-5.2-codex)). Some aggregators misdate the Codex release to GPT-5.2's December 11 launch; do not conflate them.
- **Context window:** **400K combined; maximum 272K input and 128K output tokens** ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.2-codex)). Context compaction can extend a *workflow* by compressing prior state; it does not expand a single prompt above its input cap.
- **Modalities:** Text/image input, text output; `low`/`medium`/`high`/`xhigh` reasoning, functions, hosted shell, web search and structured outputs through Responses. No native audio/video ([OpenAI reference](https://developers.openai.com/api/docs/models/gpt-5.2-codex)).
- **Pricing (historical):** **$1.75 input / $0.175 cached input / $14 output per million tokens** on the [shut-down first-party route's published price card](https://developers.openai.com/api/docs/models/gpt-5.2-codex); tools may add charges. These numbers do **not** guarantee a currently purchasable first-party SKU.
- **Architecture:** Proprietary, weights and parameter count undisclosed ([OpenAI system-card addendum](https://openai.com/index/gpt-5-2-codex-system-card/)).

### Raw benchmarks found

- **Agents and tool use:** [OpenAI](https://openai.com/index/introducing-gpt-5-2-codex/) claims stronger SWE-bench Pro and Terminal-Bench 2.0 than GPT-5.2, but its public article displays charts rather than accessible numeric tables. [Vals](https://www.vals.ai/models/openai_gpt-5.2-codex) currently publishes only three coding evaluations on this exact ID, **not** a reproducible Terminal-Bench score. [Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-2-codex) has deprecated its profile; its current v5 Index is **N/A**, not a zero score. No independent current exact-ID generic tool-use result was verified; performance estimates based on vendor claims are discounted.
- **Reasoning/knowledge:** No independently rerun current-v5 cross-domain score is available on the [AA deprecated page](https://artificialanalysis.ai/models/gpt-5-2-codex). Earlier benchmark aggregations sometimes attach GPT-5.2 general-purpose GPQA/HLE results to Codex, but these are different IDs and are not credited here. Coding-task evidence below is the primary basis for this specialization.
- **Coding:** [Vals' independent run](https://www.vals.ai/models/openai_gpt-5.2-codex) measured **LiveCodeBench 87.99% ±0.94**, **SWE-bench 72.40% ±2.00** and **Vibe Code Bench v1.1 37.91% ±4.58**. Competitive programming is substantially stronger than end-to-end web-application delivery on these protocols. [SWE-bench's mini-SWE-agent evaluation, as source-linked by Writingmate](https://writingmate.ai/models/openai/gpt-5.2-codex), reports **72.8%** on its 500-task Verified split with one attempt; the different harness and split mean this does not replicate Vals' 72.40% exactly.
- **Long context and multimodal:** Official text/image and 272K prompt ceiling are verified; [OpenAI's launch](https://openai.com/index/introducing-gpt-5-2-codex/) demonstrates screenshot-to-prototype use, not a numeric vision benchmark or a full-272K retrieval test. No independent exact-ID near-limit recall or image-understanding result was verified in the reviewed primary leaderboards.

### Normalized scores (1–100)

- **Tool use: 72/100.** Native Responses tools and vendor agent claims, but no independent exact-ID Terminal-Bench score established from the reviewed primary leaderboards.
- **Reasoning: 72/100.** Good coding-problem reasoning; avoid importing broad GPQA/HLE figures from general GPT-5.2.
- **Context window: 80/100.** 400K combined/272K input and compaction, with no verified near-limit retrieval and a shut-down official route.
- **Multimodal: 67/100.** Image/text input and screenshot-driven coding; no independent exact-ID visual benchmark or non-text output.
- **Coding: 82/100.** Vals LiveCodeBench 87.99/SWE-bench 72.40 versus lower Vibe Code 37.91; strong historically, not an API default today.
- **Cost efficiency: 59/100.** Historical $1.75/$14 with expensive output and no first-party availability; provider-specific offers require separate checks.
- **Overall Score: 75/100.** Half-up mean (72 + 72 + 80 + 67 + 82) / 5 = 74.6. Historical specialized coding performance; prefer a supported successor for new deployments.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Three independent web searches followed by OpenAI's exact model page and launch, independent Vals measurements and Artificial Analysis lifecycle check. Excluded unverified numbers and general-GPT-5.2 attribution; normalized scores reflect missing hard-task evidence.
- Reference URLs:
  - [OpenAI GPT-5.2-Codex official model limits, pricing and shut-down status](https://developers.openai.com/api/docs/models/gpt-5.2-codex)
  - [OpenAI December 18 coding-model announcement](https://openai.com/index/introducing-gpt-5-2-codex/)
  - [Vals AI independent coding results](https://www.vals.ai/models/openai_gpt-5.2-codex)
  - [Artificial Analysis deprecated exact-model profile](https://artificialanalysis.ai/models/gpt-5-2-codex)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
