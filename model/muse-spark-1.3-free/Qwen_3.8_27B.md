Provided by: **Qwen 3.8 27B (cerebras/qwen-3.8-27b)** — 2026-09-24 UTC

# Muse Spark 1.3 (free) — findings by Qwen 3.8 27B

> Date: 2026-09-24 UTC · Sources: [artificialanalysis.ai](https://artificialanalysis.ai/models/muse-spark-1-3) · [benchlm.ai](https://benchlm.ai/models/muse-spark-1-3) · [llm-stats.com](https://llm-stats.com/models/muse-spark-1.3)
>
> **Verified public raw benchmark data: ✅** 31 third-party benchmark rows via BenchLM (last updated 2026-09-23) plus API/cost metrics via Artificial Analysis — all numbers below are sourced from fetched pages, none assumed.
>
> **Evaluation scope:** the Free tier `opencode/muse-spark-1.3-contributor-free` served through OpenCode Zen. API-level metrics (sustained throughput, TTFT, paid pricing) are measured on the paid Meta Model API unless labeled otherwise, because the free tier exposes no separate latency dataset.
>
> **Cost-efficiency basis:** Free-tier pricing ($0 during the limited availability window).

## 1. Model card

| Field | Value |
|---|---|
| Model name | Muse Spark 1.3 |
| Developer | Meta |
| Reasoning | Yes |
| Parameters (check) | Undisclosed — not published on the AA model page, Meta model page, or trackers [^1][^2] |
| Context window | 1,048,576 tokens (~1M) [^1][^4] |
| Max output | 131,072 tokens [^4] |
| Modalities | in: text, image, video (audio listed by one tracker — see §4) · out: text [^1][^3] |
| Pricing | Free tier $0 (limited) · contributor $0.10 / $0.002 / $0.20 per 1M (in/cache/out) · paid Meta API $1.25 / $0.15 cache / $4.25, ~$1.39 blended @ 20:1 (in:out) [^3][^4] |
| Provider tier | OpenCode Zen consumer free tier, ID `opencode/muse-spark-1.3-contributor-free` · API `openai-responses` @ `https://opencode.ai/zen/v1` [^4] |
| Data policy (prompts/completions) | Free-tier data is used for data collection and model training; prompts and completions may be used to improve Meta products [^4] |
| Release | 2026-09-02 [^1] |

## 2. Raw benchmark scores

### 2.1 Tool use (agentic) [^2]

| Benchmark | Score | Notes |
|---|---|---|
| Terminal-Bench 2.1 | 88.8% | |
| Terminal-Bench 2.1 (Vals) | 72.3% | Vals re-run split |
| AA Tau3 Banking | 50.5% | |
| GDPval-AA | 1754 | normalized 58.7% |
| GDP.pdf | 26.6% | |
| JobBench | 64.9% | |
| OSWorld 2.0 | 66.9% | |
| DeepSearchQA | 89.4% | |
| AA Agentic Index | 55.7 | |
| AA Briefcase (Elo) | 1597 | |
| AA AutomationBench | 57.9% | |
| AutomationBench | 49.4% | |
| ApprenticeBench | 19.0% | weak spot |

### 2.2 Reasoning & knowledge [^2]

| Benchmark | Score | Notes |
|---|---|---|
| AA Intelligence Index (v4.3.2) | 48.1 | #17 of 210 in-class; median 25 [^1] |
| AA-GPQA Diamond | 93.5% | |
| AA-HLE | 48.7% | |
| MRCR v2 256K–512K | 98.5% | |
| MRCR v2 512K–1M | 98.1% | |
| AA LCR | 83.0% | |
| MLCR-AA | 43.3% | diverges from MRCR — see §4 |
| CritPt | 24.9% | |
| AA Omniscience Index | 25.0 | accuracy 43.6%, hallucination rate 32.9% |

### 2.3 Coding [^2]

| Benchmark | Score | Notes |
|---|---|---|
| DeepSWE | 75.4% | |
| AA SciCode | 58.8% | |
| AA Coding Index | 75.8 | |
| SWE-Atlas Codebase QnA | 59.4% | |

### 2.4 Multimodal & grounding [^2]

| Benchmark | Score | Notes |
|---|---|---|
| Design Arena Website (Elo) | 1365 | only fetched multimodal-specific row |

## 3. API economics (raw)

### 3.1 API & latency (raw)

| Metric | Value | Source |
|---|---|---|
| Output tok/s (sustained) | 206.6 | [^1] |
| Time-to-first-token | 23.09 s | [^1] |
| p95 latency | 9.00 s | [^3] |
| Throughput p95 | 5.2 char/s | [^3] |
| Output tokens per Intelligence Index task | 170M vs 88M median (extremely verbose) | [^1] |
| Blended paid cost | $0.78 / 1M @ 7:2:1 (cache:in:out) | [^1] |

### 3.2 Cost per task

| Metric | Value | Source |
|---|---|---|
| Cost per AA Intelligence Index task | $1.60 | [^1] |

## 4. Notes (context / caveats)

- **Modality discrepancy:** AA lists text/image/video input; llm-stats additionally lists audio input [^1][^3]. Video + image treated as verified; audio unverified.
- **Variant caveat:** the AA model page defaults to the "Muse Spark 1.3 (max)" variant; BenchLM's rows are consistent with it (Index 48 vs 48.1). Other effort/variant pages may report different composites [^1][^2].
- **Verbosity:** 170M output tokens per AA task ≈ 2× the 88M median — nominal $/token understates real task cost [^1].
- **Hallucination:** Omniscience hallucination rate 32.9% — elevated false-premise acceptance [^2].
- **Long-context split:** MRCR 98.1–98.5% vs MLCR-AA 43.3% — retrieval results are benchmark-construction-dependent; rubric MRCR clause applied, MLCR flagged [^2].
- **Free-tier data caveat:** prompts/completions may be used by Meta for product improvement — unsuitable for sensitive workloads [^4].
- **No self-reported table:** Meta's research-methodology page is a PDF not parsed here; all scores above are third-party [^2][^3].

## 5. Cost efficiency (raw data)

- Measured pricing (paid Meta API): $1.25 / 1M in, $0.15 / 1M cache, $4.25 / 1M out; blended $0.78 @ 7:2:1 [^1].
- Contributor tier: $0.10 / $0.002 / $0.20 per 1M (in/cache/out) [^4].
- **Evaluated tier (OpenCode Zen Free): $0 in / $0 out during the limited availability window** [^4].
- Cost per AA Intelligence Index task on paid API: $1.60 [^1].

## 6. Normalized dimensions / Overall

| Dimension | Score | Reason |
|---|---|---|
| Tool use | 95 | All three frontier refs clear, marginally: TB2.1 88.8 (≥88), Tau3 50.5 (≥50), GDPval 1754 (≥1750); JobBench 64.9 / OSWorld 66.9 / Agentic Index 55.7 strong; ApprenticeBench 19 weak [^2] |
| Reasoning | 82 | individually frontier — GPQA 93.5 (≥90), HLE 48.7 (≥40), MRCR 98.5–98.1 (≥95) — but composite Index 48 (below the 60 frontier bar) and Omniscience 25.0 / hallucination 32.9% keep it under 85 [^1][^2] |
| Context | 100 | 1M window with MRCR ≥98% at 512K+ (98.5 / 98.1) → rubric 100 clause [^2] |
| Multimodal | 80 | text + image + video in, text out → 75–90 band; no confirmed non-text output; audio unverified (§4) [^1][^3] |
| Coding | 94 | all four frontier refs clear, modestly: DeepSWE 75.4 (≥74), TB2.1 88.8 (≥85), SciCode 58.8 (≥55), Coding Index 75.8 (≥70) [^2] |
| **Cost efficiency** | **100** | evaluated tier is Free — $0/$0 during limited window ($0 → 100); paid fallback $1.25/$4.25 ≈ 88 [^1][^4] |
| **Overall (Tool+Reasoning+Context+Multimodal+Coding) / 5** | **90.2** | (95+82+100+80+94)/5 |

*Compiled by Qwen 3.8 27B · 2026-09-24 UTC · Methodology: [model-comparison.md](../../model-comparison.md)*

[^1]: Artificial Analysis — "Meta Muse Spark 1.3 (max)" model page, https://artificialanalysis.ai/models/muse-spark-1-3 (fetched 2026-09-24)
[^2]: BenchLM — "Muse Spark 1.3 Benchmark Scores & Performance", https://benchlm.ai/models/muse-spark-1-3 (last updated 2026-09-23, fetched 2026-09-24)
[^3]: LLM Stats — "Muse Spark 1.3", https://llm-stats.com/models/muse-spark-1.3 (fetched 2026-09-24)
[^4]: pi.dev / OpenCode Zen model listing for `opencode/muse-spark-1.3-contributor-free`, via LLM Stats (fetched 2026-09-24)

### Normalized scores (1–100)

- **Tool use: 95/100.** TB 2.1 88.8%, Tau3 50.5%, GDPval 1754 clear frontier refs; ApprenticeBench 19.0% caps.
- **Reasoning: 82/100.** GPQA 93.5%, HLE 48.7%, MRCR 98%+; composite Index 48 and Omniscience 25.0 cap below 85.
- **Context window: 100/100.** 1M window with MRCR ≥98% at 512K+ (98.5/98.1).
- **Multimodal: 80/100.** Text+image+video in, text out; audio unverified.
- **Coding: 94/100.** DeepSWE 75.4%, TB 2.1 88.8%, SciCode 58.8%, Coding Index 75.8 all clear frontier refs.
- **Cost efficiency: 100/100.** Evaluated tier Free $0/$0; paid fallback ~88.
- **Overall Score: 90.2/100.** Mean of the five quality dims (95+82+100+80+94)/5 = 90.2.