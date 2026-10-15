# GPT-5 — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5`)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship reasoning model for coding and professional Q&A. ChatGPT's launch described a *router* combining quick and Thinking modes, but the API `gpt-5` is its own model ID; do not conflate API tests with `gpt-5-pro` or ChatGPT's changing router ([OpenAI introduction](https://openai.com/index/introducing-gpt-5/)).
- **Provider / access:** OpenAI `gpt-5` snapshot `gpt-5-2025-08-07` via **Responses and Chat Completions** ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5)); [OpenCode Console](https://opencode.ai/docs/zen/) lists paid `gpt-5` Responses route. Free consumer ChatGPT access is not a free API SKU.
- **Release / knowledge:** August 7, 2025; September 30, 2024 knowledge cutoff ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5)).
- **IDs:** `gpt-5` (API), stable snapshot `gpt-5-2025-08-07`; neither `gpt-5-pro` nor `gpt-5-chat-latest`.
- **Context window:** [OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5) **400,000 total / 272,000 maximum input / 128,000 max output**; [AA medium](https://artificialanalysis.ai/models/gpt-5-medium) lists 128K on one measured route, a provider/configuration difference.
- **Modalities:** Text/image in → text output; reasoning minimal/low/medium/high, functions/structured output and selected Responses tools ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5)). The ChatGPT product may accept video through separate platform tooling, not native video input of this API model.
- **Pricing (as of 2026-10-15):** First-party [OpenAI](https://developers.openai.com/api/docs/models/gpt-5) **$1.25 input / $0.125 cached input / $10 output per 1M**; [OpenCode Console](https://opencode.ai/docs/zen/) lists its paid route **$1.07/$0.107/$8.50**, not zero-cost.
- **Architecture:** Proprietary; API parameter count and weights undisclosed ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5)).

### Raw benchmarks found

OpenAI's [August announcement](https://openai.com/index/introducing-gpt-5/) describes **high effort** for vendor headline scores; [Vals](https://www.vals.ai/models/openai_gpt-5-2025-08-07) evaluates high and [AA/BenchLM](https://benchlm.ai/models/gpt-5-medium) explicitly label their **medium**-effort profile. Medium AA and high Vals should not be treated as repeat trials; ChatGPT router scores may reflect different mode selection.

Agent / tool use:

- [Vals Terminal-Bench 2.0 **37.08% ±5.15**, SAGE **43.68% ±3.35**, MortgageTax **65.45% ±0.88**](https://www.vals.ai/models/openai_gpt-5-2025-08-07). [AA medium τ² **86.5%**](https://benchlm.ai/models/gpt-5-medium) under a distinct tool benchmark. MCP Atlas, OSWorld-Verified or TB4 for this exact historical API snapshot: **no verified public score found** in reviewed sources.

Reasoning / knowledge:

- [OpenAI high AIME 2025 **94.6%** without tools](https://openai.com/index/introducing-gpt-5/); GPT-5 **Pro GPQA 88.4%** on the same page is **Pro-specific, not a base GPT-5 result**. [Vals high GPQA **85.61% ±1.76**, MMLU Pro **86.54% ±0.34**](https://www.vals.ai/models/openai_gpt-5-2025-08-07).
- [AA medium GPQA **84.2%**, HLE **25.4%**, CritPt **0.0%**, Intelligence Index **22.9**](https://benchlm.ai/models/gpt-5-medium), using its own index vintage/effort. These cannot be used to claim a high-effort 400K model has the same scores.

Coding:

- [OpenAI high SWE-bench Verified **74.9%** on its validated 477-task subset and Aider Polyglot **88%**](https://openai.com/index/introducing-gpt-5/); independent [Vals SWE-bench **69.00% ±2.07**, LiveCodeBench **85.91% ±0.97**, Vibe Code Bench v1.1 **20.09% ±3.41**](https://www.vals.ai/models/openai_gpt-5-2025-08-07). No same-snapshot SWE-bench Pro or DeepSWE figure verified.

Long context / multimodal:

- [OpenAI 400K total / 272K input](https://developers.openai.com/api/docs/models/gpt-5); [AA medium LCR **76.0%**](https://benchlm.ai/models/gpt-5-medium) measures another route. A 400K-window MRCR/GraphWalks figure **no verified public score found** in reviewed accessible sources.
- [OpenAI launch MMMU **84.2%**](https://openai.com/index/introducing-gpt-5/) (not MMMU-Pro), [Vals MMMU-Pro **81.50% ±0.93**](https://www.vals.ai/models/openai_gpt-5-2025-08-07), [AA medium MMMU-Pro **74.3%**](https://benchlm.ai/models/gpt-5-medium) under different conditions.

### Normalized scores (1–100)

- **Tool use: 68/100.** Vals TB2.0 37.1% and AA τ² medium 86.5% show task-dependent ability; OSWorld and hard terminal scores absent.
- **Reasoning: 76/100.** Vals high GPQA ~86%, OpenAI high AIME 94.6%, AA medium HLE 25.4% and CritPt 0%; Pro numbers excluded.
- **Context window: 84/100.** 400K total but 272K max input, no full-window retrieval result and AA's evaluated medium route lists 128K.
- **Multimodal: 65/100.** Text/image input and vision results, no native audio/video I/O or output.
- **Coding: 74/100.** SWE Verified ~69–75% and LiveCodeBench 85.9%, but Vibe Code 20.1% and limited modern hard-agent evidence.
- **Cost efficiency: 72/100.** OpenAI $1.25/$10 or Console $1.07/$8.50 with caching, moderate for an older release.
- **Overall Score: 73/100.** (68 + 76 + 84 + 65 + 74) / 5 = 73.4, half-up 73; historical baseline for bounded text/image coding, with effort, route and task difficulty stated.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh OpenAI API documentation and original base-model announcement compared with Vals high and AA medium results; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
