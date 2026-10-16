# Muse Spark 1.2 — findings by DeepSeek 4.1 Flash

- Source: Meta / Muse Spark 1.2 (`meta/muse-spark-1.2`; Contributor is the same weights under different data terms)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Re-sourced this pass. Independent Vals AI (Opus 4.7 comparison page + SkillsBench + Vals Index): **SWE-bench 86.60% (#14/88)**, Finance Agent v2 **60.60% (#3/76)**, **Harvey Legal Agent Bench 25.42% (#1/76)**, Vibe Code Bench v1.1 79.10%, MMMU-Pro **86.13%**, MMLU-Pro **88.28%**, Legal Research Bench 43.75%, MortgageTax 65.42%, Tax Agent Bench 56.86%, TaxEval v2 **80.38%**, SAGE 47.66%, Code Migration 29.95%, **Terminal-Bench 4.0 6.06%**, SkillsBench 53.04% (#17, $0.65/task), **Vals Index 49.29% (#31/45)**. Artificial Analysis: **Intelligence Index 40 (#58/227)**, Coding 72.2 (90th pct), GPQA 90.4 (94th pct), 325.2 t/s (#1), $0.97/index task. BenchLM: overall **65.81** (BenchAlign v5.8), Terminal-Bench 2.1 **82.9%** (Meta) / **69.7%** (Vals), DeepSWE 59.3%, VulcanBench v3 87.0%, FrontierSWE v2 12.0%. opencode.ai data + dev.meta.ai confirm **1M ctx, 131K out, release 2026-08-05, text+image+video+pdf+audio in, contributor $0.10/$0.20 ($0.002 cached), standard $1.25/$4.25**.
> **Conflicts surfaced:** (1) **Coding is bimodal** — Vals SWE-bench 86.6% vs **Terminal-Bench 4.0 6.06%** and ProgramBench 0.5% (harness sensitivity). (2) **Terminal-Bench 2.1** reads **82.9% (Meta, vendor)** vs **69.7% (Vals, same-model)** — the vendor number is not on the verified leaderboard. (3) **Vals Index drifted** from #5 / 71.88% (2026-08-12) to **#31 / 49.29%** as the field deepened. (4) **Modality** — AA adds speech input while LLM-Stats lists text+image+video; opencode.ai data now adds PDF/audio. (5) **Output cap** — ModelCap reads a declared 944K output cap (OpenRouter metadata) vs 131K in opencode.ai/Vals/dev.meta.ai. (6) **Pricing spreads** $1.25/$4.25 (Meta) to $1.72/$5.85 (resellers). (7) Superseded by Muse Spark 1.3 (same price, 1M ctx).
> Sources: https://developer.meta.com/ai/models/muse-spark · https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2 · https://www.vals.ai/models/meta_muse_spark_1_2 · https://www.vals.ai/comparisons/anthropic_claude-opus-4-7-vs-meta_muse_spark_1_2 · https://artificialanalysis.ai/models/muse-spark-1-2 · https://benchlm.ai/compare/muse-spark-1-2-vs-nemotron-3-ultra · https://llm-stats.com/models/muse-spark-1.2 · https://opencode.ai/data/meta/muse-spark-1-2-contributor

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's August 2026 reasoning model for complex agentic tasks, the default model in Meta's Model API, predecessor of Muse Spark 1.3. Contributor/Standard/Max are the same weights — only billing, rate-limit and data-use terms differ.
- **Provider / access:** Meta Model API (`muse-spark-1.2`); OpenRouter; OpenCode Zen contributor tier. Proprietary, no open weights.
- **Release / knowledge:** 2026-08-05; knowledge cutoff not published.
- **IDs:** `meta/muse-spark-1.2`; contributor tier `meta/muse-spark-1.2-contributor`. Contributor rate $0.10/$0.20; standard $1.25/$4.25.
- **Context window:** 1,048,576 (1M) tokens; max output 131K (opencode.ai data / Vals / dev.meta.ai). A declared 944K output cap appears in some catalogues (ModelCap/OpenRouter) — unverified.
- **Modalities:** text, image, video, PDF/file and audio input (opencode.ai data); text out; reasoning; tool calls (parallel + function calling); web search.
- **Pricing (as of 2026-10-16):** standard **$1.25 / $0.15 cached / $4.25** per 1M; contributor **$0.10 / $0.002 cached / $0.20** (token-rate-limited; prompts may train Meta products). Some resellers list $1.72/$5.85.
- **Architecture:** proprietary API-only; no open weights, no published parameter count.

### Raw benchmarks found

Agent / tool use:

- Finance Agent v2 **60.60% (#3/76)** (Vals); Harvey's Legal Agent Benchmark **25.42% (#1/76)** (Vals); Legal Research Bench 43.75%
- Terminal-Bench 2.1 **82.9%** (Meta, vendor) / **69.7%** (Vals); **Terminal-Bench 4.0 6.06%** (Vals); Terminal-Bench 2.0 59% (earlier Meta)
- GDPval-AA 1631 (Meta) / 48.9% normalized (AA); AA Agentic Index 44.0%; SkillsBench 53.04% (#17, $0.65/task)
- Vals Index **49.29% (#31/45)** — down from #5 / 71.88% at its 2026-08-12 peak

Reasoning / knowledge:

- GPQA Diamond 90.4% (AA, 94th pct); HLE 45.5% (AA); MMLU-Pro 88.28% (Vals, #35/181 lane)
- AA-LCR 79.0%; SimpleBench 74.5%; SimpleQA Verified 60.3%; AA-Omniscience Accuracy 45.4% / Hallucination 33.3%; CritPt 17.7%
- Artificial Analysis Intelligence Index **40 (#58/227)** — independent; pricepertoken reads 39.6 (94th percentile)

Coding:

- SWE-bench **86.60% (#14/88, Vals)**; DeepSWE 59.3% (Meta); Vibe Code Bench 79.10% (Vals); VulcanBench v3 87.0%
- SciCode 57.4% (AA); AA Coding Index 72.2% (90th pct); FrontierSWE v2 12.0%; Code Migration 29.95% (Vals)
- ProgramBench 0.5% (Vals) — a weak spot alongside Terminal-Bench 4.0 6.06%

Long context:

- 1M window; AA-LCR 79.0% is the only published long-context reasoning value; no MRCR/RULER.

### Normalized scores (1–100)

- **Tool use: 83/100.** Finance Agent #3 and Harvey #1 (Vals) plus a vendor/independent TB2.1 split of 82.9%/69.7% are strong; capped by TB4.0 6.06% and a GDPval-AA below the ~1750 reference.
- **Reasoning: 83/100.** GPQA 90.4%, HLE 45.5% and MMLU-Pro 88.28% are strong; the independent AA Index of 40 (v4.3.2) and CritPt 17.7% hold it below the frontier.
- **Context window: 95/100.** 1,000,000 tokens (≥1M band); max output 131K; no recall-at-depth evidence and a conflicting declared 944K output cap.
- **Multimodal: 86/100.** Text, image, video, PDF and audio in, text out (video band); no media generation and no first-party vision benchmark.
- **Coding: 82/100.** Vals SWE-bench 86.6%, SciCode 57.4% and Vibe 79.1% are good; FrontierSWE v2 12.0% and TB4.0 6.06% are the weak spots.
- **Cost efficiency: 100/100.** $0.10/$0.20 on the contributor tier (the $0 Zen free tier where available); the real cost is training-data terms.
- **Overall Score: 86/100.** (83 + 83 + 95 + 86 + 82) / 5 = 85.8 → 86. Best fit: agentic/reasoning workloads that tolerate contributor data terms and need a 1M multimodal window; prefer 1.3 if available.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-16
- Method: rewrite-pass public internet research (Meta developer/research blogs, Vals AI model + comparison + SkillsBench pages, Artificial Analysis model page, BenchLM comparison page, LLM Stats, opencode.ai data, codersera). Independent Vals/AA rows were separated from Meta's vendor charts; the bimodal coding split, Terminal-Bench 2.1 vendor/independent gap, Vals-index drift, modality spread, output-cap and pricing conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
