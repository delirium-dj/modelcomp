# GPT-5.6 Sol — findings by GLM 5.2 Coding

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's high-end GPT-5.6 model, released 2026-07-09 (launch post: openai.com/index/gpt-5-6/), the direct predecessor GPT-6 Astra explicitly builds against ("explicit predecessor is GPT-5.6 Sol" — BenchLM family note). Now mid-cycle superseded twice: by GPT-6 Sol (2026-09-22, $2/$10 — cheaper) and GPT-6.1 Sol (2026-09-29). Still heavily cited in every Sept-2026 launch table as the baseline column.
- **Provider / access:** OpenAI API (1 provider tracked by LLM Stats); playground mode chat.
- **Release / knowledge:** 2026-07-09; knowledge cutoff February 2026.
- **IDs:** `openai/gpt-5.6-sol`. Siblings per GPT-5.6 family: Terra ($2/$12 per Google's Sept table), Luna (budget). Vellum's Astra article cites Sol's "current promotional price of $4/$20" vs LLM Stats' $5/$30 standard — promo vs standard discrepancy noted; LLM Stats standard rates used for scoring.
- **Context window:** 1.1M tokens in / 128K out (LLM Stats).
- **Modalities:** text + image input; text out. Reasoning effort dial (low→max) per OpenAI effort docs.
- **Pricing (as of 2026-10-09):** $5.00 / $30.00 per 1M in/out; cached $0.50 (LLM Stats). TTFT p95 5.76s; output p5 26 c/s — slower than most peers tracked.
- **Architecture:** proprietary, closed weights; parameters undisclosed.

### Raw benchmarks found

> Assembled from third-party launch tables where GPT-5.6 Sol appears as the baseline column (Google Gemini 3.8 Flash table, xAI Grok 4.7 table, OpenAI GPT-6 Astra + GPT-6.1 Sol tables, Anthropic Fable 5.1 table via Apidog). Vendor-of-the-competitor runs labeled. LLM Stats dataset tables JS-gated.

Agent / tool use:

- Agents' Last Exam: **53.6** (OpenAI Astra table) vs Astra's 59.3.
- OSWorld 2.0: **65.7%** (OpenAI Astra table) vs Astra's 72.6%.
- Terminal-Bench 4.0: **37.3%** (Google 3.8 Flash table; xAI Grok 4.7 table: Sol Max 37.3%; Fable 5.1 launch table: 37.3%) vs Astra's 57.7%, Fable 5.1 Max's 57.9%, 3.8 Flash's 19.1%.
- AA Briefcase v1.1: **1,487** (xAI Grok 4.7 table, Sol Max) vs Grok 4.7's 1,657, Fable 5.1 Max's 1,678.
- GDPval-AA v2: **1,710–1,711** (Google 3.8 Flash table: 1710; Apidog Fable 5.1 table: 1711) vs Opus 5's 1,824, Sol-tier gap ~110 Elo.
- Vals Finance Agent v2: **53.8%** (Google table) vs 3.8 Flash's 61.4%, Opus 5's 58.6%.
- Harvey Legal Agent Benchmark: **2.5%** (Google table; xAI table) — near-bottom vs 3.8 Flash's 10.0%, Grok 4.7's 19.6%.
- AutomationBench: **18.1%** (OpenAI Astra table) / 19.6% (Apidog Fable table — different rev) vs Astra's 41.4%.
- Browserbase (browser agent, hardest): no Sol row (Opus 5 74%, Fable 5.1 82%).

Reasoning / knowledge:

- HLE with tools: no published score (Vellum Astra article: "Sol has no published score on it").
- HLE-Verified: **54.5%** (Google 3.8 Flash table) vs 3.8 Flash's 54.9%, Opus 5's 54.4%.
- ARC-AGI-3: **7.8%** (OpenAI Astra table) vs Astra's 99.9% — generation gap exposed.
- GPQA Diamond: no verified Sol row found this session.
- CharXiv Reasoning (no tools): **85.8%** (Google table) vs 3.8 Flash's 86.2%.
- Terminal-Bench Science 0.1: **22.4%** (Apidog Fable 5.1 table) vs Fable 5.1's 52.6%; GPT-6.1 Sol effort table: 27.6% max ($12.18/task).
- GDP.PDF: **40.0%** (Google table — field leader there) / OpenAI 6.1 Sol table: 32.2% xhigh.
- BioMysteryBench human-solvable: **79.5%** / human-difficult: **44.7%** (Google table).

Coding:

- DeepSWE v1.1: **72.7%** (Google + xAI tables) vs 3.8 Flash's 73.7%, Astra's 74.1%, Muse 1.3's 75.4%; GPT-6.1 Sol table: 68.8% max ($2.74/task).
- CursorBench 3.2.0: **67.2%** (Apidog Fable table) vs Fable 5.1's 73.4%; CursorBench 4.0: **41.7%** (xAI Grok 4.7 table, Sol Max) vs Grok 4.7's 46.3%, Fable 5.1's 51.8%.
- Terminal-Bench 2.1: **88.8%** (Google table) vs 3.8 Flash's 89.4%.
- FrontierCode 1.1: no Sol row verified this session.

Long context:

- 1.1M / 128K out (LLM Stats). MRCR v2 8-needle: **91.5%** at 256–512K, **73.8%** at 512K–1M (OpenAI Astra table baseline column) vs Astra's 100%/96.3%.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 88/100.** ALE 53.6, OSWorld 65.7%, TB 4.0 37.3%, AA Briefcase 1,487, GDPval ~1,710, AutomationBench 18–19% — a solid frontier baseline that every Sept flagship beats on agent rows; Harvey Legal 2.5% and AutomationBench 18% are the weak rows; no Tau3 score.
- **Reasoning: 84/100.** HLE-Verified 54.5% (within 0.4 of the field top), CharXiv 85.8, GDP.PDF 40% (leader in Google's table), BioMystery 79.5/44.7; ARC-AGI-3 7.8% exposes the pre-Astra generation gap; no GPQA/HLE-tools rows.
- **Context window: 92/100.** 1.1M in / 128K out — full tier; MRCR 91.5% at 256–512K but degrades to 73.8% at 512K–1M (the weakest top-end retrieval among 1M-class models scored this session).
- **Multimodal: 65/100.** Text + image in, text out (+image band); CharXiv 85.8% shows strong chart/document reasoning; no audio/video.
- **Coding: 88/100.** DeepSWE 72.7% sits in the frontier cluster (73–75), TB 2.1 88.8%, CursorBench 4.0 41.7%; capped by Fable 5.1/Astra leads on every coding row and CursorBench 3.2's 6.2-pt gap.
- **Cost efficiency: 55/100.** $5/$30 standard is premium-tier pricing for a model now beaten on most rows by $2/$10 successors (GPT-6.1 Sol) — the value case collapsed post-DevDay; the $4/$20 promo price softens it but standard rates score; cached $0.50 fair; slowest TTFT (5.76s) and 26 c/s output add latency cost.
- **Overall Score: 83/100.** (88 + 84 + 92 + 65 + 88) / 5 = 83.4 → 83. Best-fit (historical): the July–Aug 2026 frontier default; as of Oct 2026, migrate to GPT-6.1 Sol (same-or-better capability at 60% less) unless pinned to the model ID.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (LLM Stats GPT-5.6 Sol page: price/context/cutoff/latency; benchmark rows assembled from Google 3.8 Flash, xAI Grok 4.7, OpenAI Astra + 6.1 Sol, and Anthropic Fable 5.1 launch tables as cross-vendor baseline columns); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.