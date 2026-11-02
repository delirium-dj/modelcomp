# GPT-5 nano — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5-nano-2025-08-07`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano.
- **Short description:** Smallest/least expensive GPT-5 API reasoning variant, aimed at high-volume extraction, classification and short-form assistance; distinct from GPT-5 mini and GPT-5.4 nano. **Deprecated**, not yet a reason to import newer nano benchmark scores ([official model sheet](https://developers.openai.com/api/docs/models/gpt-5-nano), [launch](https://openai.com/index/introducing-gpt-5-for-developers)).
- **Provider / access:** OpenAI `gpt-5-nano` alias or pinned `gpt-5-nano-2025-08-07` through Responses (`/v1/responses`, supports built-in tools) or Chat Completions (`/v1/chat/completions`, function calls); Microsoft Azure also catalogs it. No public weights, and a ChatGPT free account does not imply a free nano API ([OpenAI sheet](https://developers.openai.com/api/docs/models/gpt-5-nano), [AA provider inventory](https://artificialanalysis.ai/models/releases/gpt-5-nano)).
- **Release / knowledge:** **2025-08-07** snapshot; **2024-05-31** knowledge cutoff as documented by OpenAI. Current status **deprecated**; check retirement timetable before building new applications ([official sheet](https://developers.openai.com/api/docs/models/gpt-5-nano)).
- **IDs:** `gpt-5-nano-2025-08-07` fixed snapshot, `gpt-5-nano` default alias; do not merge into `gpt-5.4-nano` or hosted GPT-5 ChatGPT router.
- **Context window:** **400,000 total**; **272,000 maximum input**, **128,000 maximum output**, subject to the shared total. They do not sum to 800K ([OpenAI sheet](https://developers.openai.com/api/docs/models/gpt-5-nano)).
- **Modalities:** Text and image input, text output. No native audio/video; file upload and Responses file-search are platform tooling, not additional native modalities ([OpenAI specifications](https://developers.openai.com/api/docs/models/gpt-5-nano)).
- **Pricing (as of 2026-11-02):** OpenAI API **$0.05 input / $0.005 cached input / $0.40 output per million text tokens**; image token use and optional hosted tools can add charges. No perpetual free API tier ([official pricing on model sheet](https://developers.openai.com/api/docs/models/gpt-5-nano)).
- **Architecture:** Proprietary, parameter count undisclosed; reasoning effort configurable. Do not infer parameter size from the nano suffix ([OpenAI developer launch](https://openai.com/index/introducing-gpt-5-for-developers)).

### Raw benchmarks found

- **Agent / tool use:** OpenAI's [τ² Airline **41.0%**, Retail **62.3%**](https://openai.com/index/introducing-gpt-5-for-developers) for nano high effort; these are **not** the flagship GPT-5 τ² Telecom 96.7%. The model supports Responses web search, MCP and function tools ([model sheet](https://developers.openai.com/api/docs/models/gpt-5-nano)); tool availability is not a measured task-success score.
- **Reasoning / knowledge:** Vendor [GPQA Diamond **71.2%**, HLE without tools **8.7%**, AIME 2025 **85.2%**, FrontierMath with Python **9.6%**](https://openai.com/index/introducing-gpt-5-for-developers) at high effort. Independent [Vals GPQA **63.38% ±2.46** and MMLU-Pro **76.07% ±0.41**](https://www.vals.ai/models/openai_gpt-5-nano-2025-08-07) use a different evaluator/settings; do not average GPQA figures across protocols.
- **Coding:** Vendor [SWE-bench Verified **54.7%** (477/500 tasks after 23 exclusions), Aider Polyglot **48.4%**](https://openai.com/index/introducing-gpt-5-for-developers). Independent [Vals LiveCodeBench **70.22% ±0.93**](https://www.vals.ai/models/openai_gpt-5-nano-2025-08-07). SWE-bench's excluded-task denominator matters.
- **Visual / long context:** Independent [Vals MMMU-Pro **70.94% ±1.09**](https://www.vals.ai/models/openai_gpt-5-nano-2025-08-07) supports actual image understanding; older AA v4 comparison reports [AA-LCR v1.1 **45%**](https://artificialanalysis.ai/models/comparisons/gpt-5-nano-vs-gpt-4-1-nano). The current AA v5 model page reports N/A index, so an older estimated 13 is not a current comparable index ([AA](https://artificialanalysis.ai/models/gpt-5-nano)).

### Normalized scores (1–100)

- **Tool use: 55/100.** Useful API tools, but Airline/Retail pass rates lag larger GPT-5 sizes.
- **Reasoning: 64/100.** Strong budget AIME and Vals MMLU/GPQA, low HLE and evaluator spread.
- **Context window: 70/100.** 400K maximum, only 272K input and ~45% older AA-LCR.
- **Multimodal: 62/100.** Image input and independent MMMU-Pro evidence, no audio/video.
- **Coding: 59/100.** Vendor 54.7 SWE and independent 70.2 LiveCodeBench; suitable for modest coding rather than long autonomous repair.
- **Cost efficiency: 83/100.** Very low token tariff, moderated by deprecated status, reasoning overhead and optional tool fees.
- **Overall Score: 62/100.** Half-up mean (55 + 64 + 70 + 62 + 59) / 5 = 62; cheap multimodal extraction and constrained coding with migration planning.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-02 UTC
- Method: Three successful official launch/model-spec, independent Vals, and AA/benchmark-version searches; pinned snapshot and high-effort settings kept separate from flagship. Scores are normalized interpretations.
- Reference URLs:
  - [OpenAI GPT-5 nano model specification and pricing](https://developers.openai.com/api/docs/models/gpt-5-nano)
  - [OpenAI original GPT-5 developer benchmark tables](https://openai.com/index/introducing-gpt-5-for-developers)
  - [Vals independent pinned-nano evaluations](https://www.vals.ai/models/openai_gpt-5-nano-2025-08-07)
  - [Artificial Analysis older LCR/index version comparison](https://artificialanalysis.ai/models/comparisons/gpt-5-nano-vs-gpt-4-1-nano)
- Future sources: add a new file next to this one using the same headings.
