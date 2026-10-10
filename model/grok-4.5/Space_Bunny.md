# Grok 4.5 — findings by Space Bunny

- Source: SpaceXAI / xAI (`grok-4.5`; high reasoning)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change, mostly upward.** The prior pass recorded "no verified public score found" for HLE, LCR, CritPt, AA-Omniscience, hallucination rate, SWE-bench Pro, and DeepSWE. All of those are now sourced. **HLE 42.7%**, **CritPt 15.4%**, **AA-Omniscience Hallucination Rate 54.1%**, **AA-LCR 79.3%**, **SWE-bench Pro 64.7%**, and **DeepSWE 53%** all recovered, plus **AA-MMMU-Pro 80.4%** which converts a placeholder 65 into real evidence. Net: **Tool use 88 → 87**, **Reasoning 82 → 84**, **Context 90 → 91**, **Multimodal 65 → 76**, **Coding 89 → 90**, **Cost 82 → 80**, Overall **82.8 → 85.6**.

## Model card

- **Name:** Grok 4.5 (high)
- **Short description:** SpaceXAI's prior-generation frontier reasoning and agent model, released **July 2026**, formally deprecated in favour of Grok 4.6 and later releases. Strong on repo-level coding and knowledge work; collapses on every post-2.1 terminal harness.
- **Provider / access:** SpaceXAI / xAI API (`grok-4.5`); Artificial Analysis lists **2 providers**; OpenRouter route `x-ai/grok-4.5`; Cursor.
- **Lifecycle:** **Deprecated.** Artificial Analysis carries an explicit "This model is deprecated" banner naming **Grok 4.6** as the suggested replacement, and states it only continues benchmarking the default 10k-input-token workload. **No hard discontinuation date was found** for the `grok-4.5` endpoint.
- **Release / knowledge:** Artificial Analysis lists **2026-07-08**; BenchLM treats Grok 4.3 as its related earlier model. No exact training-data cutoff was published in the sources reviewed.
- **IDs:** `grok-4.5`; high is a reasoning configuration.
- **Context window:** **500,000 tokens** (Artificial Analysis ~750 A4 pages; BenchLM). Exact output limit not published in the sources reviewed.
- **Modalities:** Text and image input; text output. Reasoning and tool use supported. Audio/video are not shown for Grok 4.5.
- **Pricing (verified 2026-10-10, unchanged):** **$2.00 per 1M input / $6.00 per 1M output**, with an **85% cache discount** (cached input **$0.30**), blended **$1.21 per 1M** (7:2:1), and **$1.04 per Intelligence Index task** (class rank #47/216 at the time of measurement).
- **Architecture:** Proprietary; SpaceXAI has not disclosed parameter count. Part of the 1.5T-scale family that Grok 4.6 inherited and Grok 4.7 reportedly exceeded.
- **Performance:** output speed **59.2 tokens/s** (#119/216, "slower than average" vs. a 79.1 t/s peer median); **TTFT 6.95s** (vs. a 3.89s median); verbosity **77M** index output tokens vs. an 88M median ("fairly concise").

### Raw benchmarks found

**Official — xAI Grok 4.5 launch post and Cursor launch coverage:**

- Terminal-Bench 2.1: **83.3%**
- **SWE-bench Pro: 64.7%**
- **DeepSWE: 53%**
- **SWE Multilingual: 78%** (via Cursor's launch post)
- GPQA Diamond **93.1%**; HLE **42.7%**; SciCode **54.1%**; τ³-Banking **42.1%**; Terminal-Bench 2.1 **81.6%** in the launch-era table

**Independent — Artificial Analysis (v4.3.2):**

- Intelligence Index **38.8**, class rank #56/216 (the prior pass recorded 39; the composite was re-based, value essentially unchanged)
- **GPQA Diamond 93.1%**; **HLE 42.7%**; **CritPt 15.4%**
- **AA-LCR 79.3%**
- **AA-Omniscience: Index 25.3, Accuracy 51.6%, Hallucination Rate 54.1%**
- **AA-MMMU-Pro 80.4%**
- AA-SciCode **55.0%**; AA Coding Index **72.5%**; AA Agentic Index **42.1%**; GDPval-AA **44.5% / 1430 Elo**
- AA-Briefcase **1313 Elo** (launch-era)

**Independent — Vals AI:**

- **SWE-bench 86.6%**
- **LiveCodeBench 87.4%**
- **Terminal-Bench 2.1: 67.8%** — **15.5 points below xAI's own 83.3%**
- **GPQA Diamond 92.9%** (vs. AA's 93.1% — close agreement); **MMLU-Pro 89.2%**

**Independent — other boards:**

- **Terminal-Bench 3.0: 15.7%** (frontierbench.ai leaderboard)
- **ARC-AGI-2: 52.6%**; **ARC-AGI-3: 0.3%**; **ARC-AGI-1: 85.67%** (ARC Prize official, Grok 4.5 High verified results)
- **CursorBench 3.2: 66.7%** (Cursor evals)
- **VulcanBench v3: 89.9%** (VulcanBench Eval Suite 3 technical report)
- **PostTrainBench v1.1: 23.4%**
- **Design Arena Website: 1287** (OpenRouter)
- BenchLM overall **64.22/100**, rank **#38 of 889** (flagged conservative — partial coverage)

**Conflicts retained:** Terminal-Bench 2.1 **83.3% (xAI) vs. 67.8% (Vals)**; GDPval-AA **1430 Elo (AA current) vs. 1526 (xAI launch-era)** — the AA index re-base moved this figure and the two are not directly comparable.

Sources consulted: [BenchLM Grok 4.5 (updated 2026-10-10)](https://benchlm.ai/models/grok-4-5), [Artificial Analysis Grok 4.5](https://artificialanalysis.ai/models/grok-4-5), [Vals AI Grok 4.5](https://www.vals.ai/models/grok_grok-4.5), [xAI Grok 4.5 launch post](https://x.ai/news/grok-4-5), [Cursor — Grok 4.5 launch coverage](https://cursor.com/en-US/blog/grok-4-5), [ARC Prize — Grok 4.5 (High) verified results](https://arcprize.org/results/xai-grok-4-5), and [SpaceXAI model documentation](https://docs.x.ai/docs/models/grok-4-5), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 87/100.** Reduced from 88. Terminal-Bench 2.1 **83.3%** (xAI), **SWE-bench Pro 64.7%**, **SWE Multilingual 78%**, and SWE-bench **86.6%** (Vals) support a strong agentic read, and **AA Agentic Index 42.1%** with **τ³-Banking 42.1%** now give independent agentic numbers the prior pass lacked. The single-point reduction reflects **Terminal-Bench 3.0 at 15.7%** and the **15.5-point Vals gap on Terminal-Bench 2.1** (83.3% vs 67.8%) — the larger of the two harness gaps recorded for any model in this batch.
- **Reasoning: 84/100.** Raised from 82. The prior pass had no HLE, CritPt, or hallucination data. **GPQA Diamond 93.1% (AA) and 92.9% (Vals)** agree closely and are frontier-tier for the generation; **HLE 42.7%** is solid; **MMLU-Pro 89.2%** is strong; **AA-LCR 79.3%** and **CritPt 15.4%** are now on record. Held at 84 by **AA-Omniscience Hallucination Rate of 54.1%**, an **Omniscience Index of 25.3**, and **ARC-AGI-3 at 0.3%** — the model is strong at established academic benchmarks and weak at genuinely novel reasoning.
- **Context window: 91/100.** Raised from 90. The prior pass recorded "no retrieval-at-length result"; **AA-LCR at 79.3%** now exists and is a good one. Still below the 1M tier, and Grok 4.5 sits in the awkward middle of the xAI line: its own `grok-4.3` and 4.20 models carry 1M context while the 4.5/4.6/4.7 generation all cap at 500K.
- **Multimodal: 76/100.** Raised from 65 — the largest correction in this report. The prior pass had no multimodal evidence at all and scored a placeholder. **AA-MMMU-Pro 80.4%** is a real independent visual-reasoning result, and **Design Arena Website 1287** is a live preference signal. Not higher: text-and-image input only, no audio or video, and no video-specific benchmark.
- **Coding: 90/100.** Raised from 89. **SWE-bench 86.6%** (Vals), **LiveCodeBench 87.4%** (Vals), **SWE-bench Pro 64.7%**, **SWE Multilingual 78%**, **CursorBench 3.2 66.7%**, **VulcanBench v3 89.9%**, and **AA Coding Index 72.5%** make this one of the stronger coding models of its generation. Capped by **DeepSWE at 53%**, **Terminal-Bench 3.0 at 15.7%**, **PostTrainBench v1.1 at 23.4%**, and **ARC-AGI-3 at 0.3%** — excellent at editing existing code, weak at long-horizon autonomous engineering.
- **Cost efficiency: 80/100.** Reduced from 82. The rate card is unchanged at **$2.00 / $6.00** with an 85% cache discount and a $1.21 blended rate — still competitive. Deductions: **$1.04 per Intelligence Index task** at 59.2 t/s and 6.95s TTFT is a poor throughput buy against cheaper peers; cached input at **$0.30** is 40% cheaper than Grok 4.6's $0.50, so 4.5 remains the better cache-economics option *if* you can still call it; and the model is **deprecated**.
- **Overall Score: 85.6/100.** (87 + 84 + 91 + 76 + 90) / 5 = 428 / 5 = 85.6, up from 82.8. The prior pass under-scored it mainly because half its evidence had not been located. **Best fit:** pinned existing integrations — repo-level coding and knowledge work on a $2/$6 budget with image input. **Migrate for:** anything needing the current terminal-agent generation (Terminal-Bench 3.0/4.0), anything knowledge-sensitive (54.1% hallucination rate), or anything long-context beyond 500K. Grok 4.6 and 4.7 are both strictly better and cost the same sticker price.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's Grok 4.5 record (which carries per-benchmark source attribution back to xAI, Cursor, Artificial Analysis, Vals AI, ARC Prize, VulcanBench, PostTrainBench, and frontierbench.ai), plus the Artificial Analysis and Vals AI model pages and xAI's launch post; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: conflicts retained — **Terminal-Bench 2.1 83.3% (xAI) vs. 67.8% (Vals)**, the largest vendor-vs-independent gap in this batch; **GDPval-AA 1430 Elo (AA v4.3.2) vs. 1526 (xAI launch-era)**, a composite re-base rather than a capability change. Search-provider rate limiting (HTTP 429) persisted through this pass, so evidence was assembled from three direct independent-retrieval sources (BenchLM, Artificial Analysis, Vals AI) rather than the usual three-search cadence.
- Future sources: add a new file next to this one, e.g. `Grok_4_5_Recheck.md`, using the same headings.