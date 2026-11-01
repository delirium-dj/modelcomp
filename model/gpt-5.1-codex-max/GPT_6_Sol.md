# GPT-5.1-Codex-Max — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.1-codex-max`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name / identity:** GPT-5.1-Codex-Max is an OpenAI **distinct model ID**, not the `xhigh` reasoning setting of GPT-5.1-Codex: the launch says it uses an updated underlying reasoning model and compares both checkpoints ([OpenAI launch](https://openai.com/index/gpt-5-1-codex-max/), [exact-ID model page](https://developers.openai.com/api/docs/models/gpt-5.1-codex-max)). Released November 19, 2025; proprietary and now **shut down** at the API.
- **Access / specifications:** Formerly available in Codex and OpenAI **Responses API only** (`v1/responses`, not Chat Completions). **400,000-token context, 128,000 max output**, September 30, 2024 knowledge cutoff; text/image input, text output; function calling, structured outputs, search and reasoning tokens ([OpenAI model page](https://developers.openai.com/api/docs/models/gpt-5.1-codex-max)).
- **Long-horizon caveat:** Codex application **compaction** enables millions of cumulative task tokens across successive windows; it does *not* expand the model's single-request 400K window ([OpenAI launch](https://openai.com/index/gpt-5-1-codex-max/)).
- **Historical pricing:** [OpenAI model page](https://developers.openai.com/api/docs/models/gpt-5.1-codex-max) retains **$1.25 input / $0.125 cached input / $10 output per million tokens**; this is archival pricing, not a currently purchasable endpoint.

### Raw benchmarks found

- **Agent / coding:** OpenAI reports at `xhigh` effort with compaction [SWE-bench Verified **77.9%** (n=500), SWE-Lancer IC SWE **79.9%**, Terminal-Bench 2.0 **58.1%**](https://openai.com/index/gpt-5-1-codex-max/). Its Codex comparison at high effort is **73.7%**, **66.3%**, **52.8%**, respectively; those are *not* Max results. Terminal-Bench **2.0** must not be relabelled as 2.1 or 4.0.
- **Independent coding / end-to-end:** [Vals AI exact Max model page](https://www.vals.ai/models/openai_gpt-5.1-codex-max) reports LiveCodeBench **83.56% ±1.05** at `high` reasoning; independent [Vibe Code Bench v1.1 **22.17% ±3.84** (OpenHands harness, rank 87/123)](https://www.vals.ai/benchmarks/vibe-code) measures full web-app building, not algorithmic code and not SWE. Older Vals write-up mentions a +1% SWE comparison without a numerical Max SWE score on the current model page; do not fabricate it.
- **Reasoning / knowledge:** No verified **exact-Max** GPQA/HLE result found. [BenchLM's Max page](https://benchlm.ai/models/gpt-5-1-codex-max) lists τ², GPQA, MMMU and LCR rows whose linked source is explicitly the *different* `gpt-5-1-codex` Artificial Analysis page; **exclude these inherited rows** rather than laundering them as Max results.
- **Context / multimodal:** 400K single window and image understanding documented by OpenAI; no independent exact-Max MRCR/RULER or MMMU figure verified in reviewed sources. No audio/video output.

### Normalized scores (1–100)

- **Tool use: 72/100.** Vendor terminal 58.1 and tool APIs, tempered by independent end-to-end app score 22.17 and latency.
- **Reasoning: 72/100.** Specialized long-horizon reasoning evidenced indirectly by coding-agent evaluations, not an exact-ID GPQA/HLE run.
- **Context window: 78/100.** 400K native context and compaction for long tasks, without proof of near-cap retrieval.
- **Multimodal: 66/100.** Text/image in and text out; no verified exact-Max vision score or audio/video.
- **Coding: 80/100.** Vendor SWE 77.9 plus independent LiveCodeBench 83.56; Vibe Code 22.17 caps practical app-building.
- **Cost efficiency: 50/100.** No current endpoint; historical $1.25/$10 price is not actionable.
- **Overall Score: 74/100.** Half-up mean (72 + 72 + 78 + 66 + 80) / 5 = 73.6; historically capable Codex coding agent, not an available API recommendation.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Independent model, full-text and dataset searches; exact OpenAI API/launch checks plus Vals exact-ID evaluations; rejected another archive's inherited GPT-5.1-Codex benchmark rows. Scores are normalized judgments, not official percentages.
- Reference URLs:
  - [OpenAI GPT-5.1-Codex-Max official announcement and score table](https://openai.com/index/gpt-5-1-codex-max/)
  - [OpenAI exact-ID model specification and shutdown status](https://developers.openai.com/api/docs/models/gpt-5.1-codex-max)
  - [Vals AI Max model-specific coding results](https://www.vals.ai/models/openai_gpt-5.1-codex-max)
  - [Vals AI Vibe Code Bench v1.1 leaderboard and methodology](https://www.vals.ai/benchmarks/vibe-code)
  - [BenchLM source-linked archive, identity mismatch noted](https://benchlm.ai/models/gpt-5-1-codex-max)
- Future sources: add a new file next to this one using the same headings.
