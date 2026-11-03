# Muse Spark 1.3 — findings by Mercury 3

- Source: Meta/Muse Spark 1.3
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (one model across Contributor/Free/Standard/Max tiers — same weights; only price and Meta's training-data use differ; `reasoning_effort: "max"` is a paid Standard option, never a separate model)
- **Short description:** Meta's flagship proprietary reasoning model (2026-09-02), purpose-built for long-horizon agentic and coding work with 1M context, text/image/video input, and frontier-level retrieval. Top use case: long-running coding/agentic tasks at strong value.
- **Provider / access:** Meta Model API (`dev.meta.ai`) and OpenCode Zen (`opencode/muse-spark-1.3` route family), Muse Code CLI, plus gateway providers (Vercel AI Gateway, OpenRouter `meta/muse-spark-1.3`); 5 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoffs not published.
- **IDs:** `meta/muse-spark-1.3` (Muse Spark 1.3 xhigh reasoning tier; Contributor/Free/Max are access/effort tiers of the same weights).
- **Context window:** 1,048,576 tokens (1M) total; max output not disclosed.
- **Modalities:** text + image + video input, text output; reasoning (extended thinking); tool calls; ~20% fewer tool calls and ~25% fewer tokens than 1.2 (Meta).
- **Pricing (as of 2026-11-03):** Standard paid tier $1.25 input / $4.25 output per 1M tokens, 88% cache discount (blended $0.78/1M); Contributor/Free tier $0 with training-data consent (time-limited promo, data-usage caveat); Max = Standard at `reasoning_effort: "max"`; Fast/Flash variants not separate models.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights (Meta has announced an "open weights release" roadmap for Muse Spark, not yet shipped for 1.3).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta official) vs **72.3%** (Vals AI — conflicting, harness-dependent)
- GDPval-AA v2.1: **1754 Elo** (Meta official) vs **59.0%** (Artificial Analysis normalized — conflicting scales)
- AutomationBench: **49.4%**; JobBench: **64.9%**; OSWorld 2.0: **66.9%**; DeepSearchQA: **89.4%** (Meta official)
- AA Tau3-Banking: **50.5%**; AA Agentic Index: **55.7%**; AA-AnalystAgent N/A — no verified value found
- SWE-Atlas Codebase QnA: **59.4%** (Meta); CWE-bench v1: **55.0%** (Collinear); ApprenticeBench GUI: **19%** (NeoCognition); MazeBench ASCII: 0% (tools off run)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Artificial Analysis)
- HLE: **48.7%** (Artificial Analysis)
- MRCR v2: **98.5%** at 256K–512K, **98.1%** at 512K–1M (Meta official)
- AA-LCR: **83.0%**; CritPt: **24.9%** (AA)
- Artificial Analysis Intelligence Index: **48.1** (current leaderboard via BenchLM; the AA launch article reported higher launch aggregates — later leaderboard runs are lower)
- AA-Omniscience: accuracy **43.6%**, hallucination rate **32.9%**
- FrontierMath v2: Tiers 1–3 **74.0%**, Tier 4 **46.3%** (Epoch AI)
- Gray Swan IPI (15 attempts): **15.9%**

Coding:

- DeepSWE: **75.4%** (Meta official)
- AA Coding Index: **75.8%**; AA-SciCode: **58.8%** (AA)
- CursorBench 4.0: **41.6%** (Cursor evals); FrontierSWE v2: **25.8%** (Proximal)
- Terminal-Bench 2.1 88.8% (above); SWE-Atlas Codebase QnA 59.4%

Long context:

- 1M window; MRCR v2 98.5%/98.1% across 256K–1M (near-perfect retrieval); AA-LCR 83%.

Multimodal:

- text/image/video input, text output; video-in supported — no verified video-reasoning benchmark published (no token for video eval found in sources reviewed).

### Normalized scores (1–100)

- **Tool use: 93/100.** Frontier agentic numbers (TB2.1 88.8%, GDPval 1754, Tau3 50.5%, Agentic Index 55.7%); capped below the Opus 5.5/Opus-level peak by weaker CursorBench 41.6% and GUI agent (ApprenticeBench 19%) results, plus TB2.1 harness variance (Vals 72.3%).
- **Reasoning: 92/100.** GPQA 93.5%, HLE 48.7%, MRCR 98.5/98.1% — elite; capped by CritPt 24.9% and the 48.1 Intelligence Index (below Opus 5.5's 58).
- **Context window: 98/100.** 1M with ≥98% MRCR retrieval at 256K–1M; tiny deduction for LCR 83% vs the strongest long-context reasoning.
- **Multimodal: 87/100.** text/image/video in + text out — video input lifts it above image-only flagships; no audio in / non-text out keeps it below the top omni tier.
- **Coding: 93/100.** DeepSWE 75.4%, coding index 75.8%, TB2.1 88.8% — frontier; capped by CursorBench 41.6% and FrontierSWE v2 25.8%.
- **Cost efficiency: 88/100.** Paid Standard $1.25/$4.25 with 88% cache discount (very competitive for its class); $0 Contributor tier would be 100 while available, but it is a data-consent promo, so scored on paid pricing.
- **Overall Score: 93/100.** Mean of (93+92+98+87+93)/5 = 92.6 → 93. Best-in-class value for long-horizon agentic coding with 1M context; pick when budget-aware frontier work is the goal.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Meta Research announcement + evaluation report, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, Cursor evals, Collinear, Epoch AI, NeoCognition); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1, GDPval scales, AA Index) listed side by side.
- Reference URLs:
  - [Introducing Muse Spark 1.3 (Meta Research, 2026-09-02)](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [Muse Spark 1.3 Evaluation Report (Meta)](https://research.meta.ai/static/muse-spark-1-3-evaluation-report)
  - [Muse Spark model page (Meta Model API)](https://developer.meta.com/ai/models/muse-spark/)
  - [Muse Spark 1.3 — Artificial Analysis model page ($1.25/$4.25, 1M, text/image/video in, 351 t/s)](https://artificialanalysis.ai/models/muse-spark-1-3-xhigh)
  - [Artificial Analysis — Muse Spark 1.3 benchmarks](https://artificialanalysis.ai/models/muse-spark-1-3)
  - [Muse Spark 1.3 — BenchLM benchmark aggregation](https://benchlm.ai/models/muse-spark-1-3)
  - [Terminal-Bench 2.1 — Vals AI leaderboard (72.3%)](https://www.vals.ai/models/meta_muse_spark_1_3)
  - [CursorBench 4.0 (Cursor evals)](https://cursor.com/cursorbench)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [ApprenticeBench GUI results (NeoCognition)](https://neocognition.io/blog/apprentice-bench/)
