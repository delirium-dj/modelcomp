# GPT-5.1-Codex — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.1-codex`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex
- **Identity / access:** Specialized coding model, not GPT-5.1 general, GPT-5.1-Codex-Max, or a `high` effort tier. November 2025 release, **API status Shut down** as of review; original `gpt-5.1-codex` was a Responses-API-only rolling snapshot, so historical independent measurements can differ by date ([OpenAI model page](https://platform.openai.com/docs/models/gpt-5.1-codex), [Vals date](https://www.vals.ai/models/openai_gpt-5.1-codex)). Do not present its listed tariff as a working current API.
- **Specs:** Proprietary, **400,000 context / 128,000 maximum output**, Sep 30, 2024 knowledge cutoff. Text/image in, text out. Function calling and web search through Responses; no native speech/video output or supported Realtime endpoint ([OpenAI](https://platform.openai.com/docs/models/gpt-5.1-codex)).
- **Historical pricing:** **$1.25 input / $0.125 cached input / $10 output per million**; tools add fees. Model shut down and rate table documents the retired SKU, not current availability ([OpenAI](https://platform.openai.com/docs/models/gpt-5.1-codex)).

### Raw benchmarks found

- **Tools / agentic tasks:** [Artificial Analysis archived τ²-Bench **83%** for this ID](https://benchlm.ai/models/gpt-5-1-codex) is an externally sourced result, but its current [model page](https://artificialanalysis.ai/models/gpt-5-1-codex) no longer exposes the old benchmark table. Independently indexed [JobBench **26.2%**](https://benchlm.ai/models/gpt-5-1-codex) is a different multi-step job benchmark; do not conflate it with τ². Built-in function/search availability is a product feature rather than an autonomous task score.
- **Reasoning:** Historical [AA GPQA Diamond **86.0%**, HLE **25.7%**, Omniscience Accuracy **39.9%**, hallucination **77.2%**](https://benchlm.ai/models/gpt-5-1-codex) (AA-credited archival rows). AA's live page now says Intelligence Index **N/A** for this retired deployment; N/A is not zero. GPQA is a narrower exam than HLE; high hallucination rate on Omniscience limits reliability claims.
- **Coding:** Independent [Vals LiveCodeBench **85.55% ±1.00** versus Vibe Code Bench v1.1 **13.12% ±3.16**](https://www.vals.ai/models/openai_gpt-5.1-codex). A strong algorithm-question score does **not** establish complex project-building success; no independently reproduced pinned-snapshot SWE-bench resolution percentage found in the reviewed exact-model sources. The base Codex snapshot could have drifted after Vals's measurement.
- **Context / multimodal:** AA-credited historical [AA-LCR **69.3%**, AA-MMMU-Pro **72.5%**](https://benchlm.ai/models/gpt-5-1-codex) support substantial long-input and image understanding, but neither validates near-400K recall. Do not score web-search image retrieval or Codex IDE affordances as native image/video generation.

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong historic τ² result but job-horizon score much weaker and no current reproducible pinned endpoint.
- **Reasoning: 79/100.** Archived GPQA 86/HLE 25.7; factual hallucination caution and snapshot drift.
- **Context window: 76/100.** 400K supported, AA-LCR 69.3 without a near-cap test.
- **Multimodal: 70/100.** Text/image input and AA-MMMU-Pro 72.5, text output only.
- **Coding: 76/100.** Vals LCB 85.55 but Vibe Code 13.12 and no pinned repository-repair evaluation.
- **Cost efficiency: 62/100.** Good historical input caching, expensive thinking-heavy output; shut-down API.
- **Overall Score: 75/100.** Half-up mean (76 + 79 + 76 + 70 + 76) / 5 = 75.4; cost excluded.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Separate model/leaderboard/catalog searches, direct OpenAI retired-model specification, independent Vals testing and source-linked AA historical results. Disclosed rolling-snapshot and archived-index limitations.
- Reference URLs:
  - [OpenAI GPT-5.1-Codex API model card and shutdown status](https://platform.openai.com/docs/models/gpt-5.1-codex)
  - [Vals independent exact-ID coding results](https://www.vals.ai/models/openai_gpt-5.1-codex)
  - [Artificial Analysis historical high-effort deployment](https://artificialanalysis.ai/models/gpt-5-1-codex)
  - [BenchLM source-linked historical benchmark rows](https://benchlm.ai/models/gpt-5-1-codex)
- Future sources: add a new file next to this one using the same headings.
