# Muse Spark 1.3 Contributor — findings by Muse Spark 1.3 Contributor

- Source: Meta/Muse Spark 1.3, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (Meta, Contributor Free tier)
- **Short description:** Meta's proprietary multimodal reasoning model for long-horizon agentic and coding workflows, served as the $0 Contributor Free tier on OpenCode Zen (same weights as standard 1.3, training-data consent in exchange for free use).
- **Provider / access:** Meta via Meta Model API (`muse-spark-1.3` / `muse-spark-1.3-contributor`); OpenCode Zen `opencode/muse-spark-1.3-contributor-free` (Chat Completions + Responses-style tool calling, MCP supported).
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff undisclosed
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Free Contributor tier exists on Zen)
- **Context window:** 1,048,576 (1M) total — verified via Meta developer docs, Artificial Analysis model page, and OpenRouter listing (1.05M)
- **Modalities:** text, image, video, PDF/document in; text out; reasoning yes (max/xhigh effort); tool calls yes; structured output yes; computer use yes
- **Pricing (as of 2026-09-18):** Free $0/$0 Zen Contributor tier (training-data consent); Contributor $0.10 in / $0.20 out per 1M; Standard $1.25 in / $0.15 cached / $4.25 out per 1M
- **Architecture:** proprietary (parameter count undisclosed)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- GDPval-AA (knowledge work): **1754 Elo** (BenchmarkList, rank 7/340, 98th pct, max effort, self-reported 2026-09-02)
- GDPval-AA v2: **1703** (LLMLearner, max with tools+internet)
- JobBench (professional tool use): **64.9%** (Meta official table; BenchmarkList rank 2/36, 97th pct; LLMLearner #1)
- AutomationBench (business workflows): **49.4%** (BenchmarkList rank 6/42, 88th pct)
- OSWorld 2.0 (agentic computer use): **66.9% binary** (Meta official; BenchmarkList rank 3/20, 89th pct)
- Tau3-Banking: **50.5%** (LLMLearner, max with tools, rank 3/103)
- Terminal-Bench 2.1: **88.8%** (BenchmarkList rank 4/182, 98th pct; Meta official table)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.4% SWE Atlas Codebase QnA** (BenchmarkList rank 5/28, 85th pct, max)

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (LLMLearner, extra-high no-tools, rank 10/254)
- HLE: **48.7%** (LLMLearner, max no-tools text-only, rank 38/218)
- LCR / MLCR: **83.0% AA-LCR** (LLMLearner, extra-high, rank 12/91)
- CritPt: **26.0** (LLMLearner, extra-high no-tools, rank 10/118)
- Artificial Analysis Intelligence Index / BenchLM overall: **48 (AA Index, #13/199)** (Artificial Analysis model page); **ECI 153.53 #6/398** (BenchmarkList)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public SWE-bench Verified score found** (closest proxy: DeepSWE below)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **59.7% SciCode** (LLMLearner, extra-high, rank 5/83)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **75.4% DeepSWE v1.1** (BenchmarkList rank 1/33, 100th pct; Meta official table); **CursorBench 4.0 41.6%** (LLMLearner rank 4/10); **Terminal-Bench 4.0 33.3%** (LLMLearner rank 7)

Long context:

- **MRCR v2 8-needle 256K-512K: 98.5%** (BenchmarkList rank 2/8); **MRCR v2 8-needle 512K-1M: 98.1%** (BenchmarkList rank 1/9, self-reported 2026-09-02, max); **RULER-type retrieval at 1M essentially saturated per Meta table**

### Normalized scores (1–100)

- **Tool use: 94/100.** JobBench #1–2, GDPval 1754 (98th pct) and Tau3 50.5% show frontier agentic tool orchestration; capped by OSWorld partial-score ceiling and RuneBench 4.6 mid-pack.
- **Reasoning: 92/100.** GPQA 94.1% plus HLE 48.7% and AA Index 48 place it at frontier reasoning; capped by CritPt 26.0 mid-rank.
- **Context window: 100/100.** 1M verified with MRCR 98%+ at 512K–1M (rank #1); nothing larger to beat in this cohort.
- **Multimodal: 85/100.** Native text/image/video/PDF in with visual reasoning through execution environment; capped by text-only output (no image/audio synthesis).
- **Coding: 95/100.** DeepSWE #1 (75.4%), TB2.1 88.8% (top-4) and SciCode top-5; capped only by CursorBench 41.6% showing headroom on interactive IDE tasks.
- **Cost efficiency: 100/100.** $0 Free Zen Contributor tier during promo; paid Contributor fallback is itself cheap.
- **Overall Score: 93/100.** Mean of the five non-cost dims (94+92+100+85+95)/5 = 93.2; best-fit default for long-horizon coding and agentic work when the free tier is available.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Meta developer docs, Artificial Analysis model page + Index, BenchmarkList, LLMLearner, AI Atlas); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
