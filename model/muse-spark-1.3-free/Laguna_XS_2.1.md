# Muse Spark 1.3 Contributor — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor
- **Short description:** Meta's multimodal reasoning model for long-horizon agentic and coding workflows, offered as free Contributor tier on OpenCode Zen with training-data consent.
- **Provider / access:** Meta via Meta Model API (`muse-spark-1.3`), OpenCode Zen `opencode/muse-spark-1.3-contributor-free` (Chat Completions + Responses-style tool calling, MCP supported).
- **Release / knowledge:** 2026-09-02; knowledge cutoff undisclosed.
- **IDs:** `opencode/muse-spark-1.3-contributor-free`; Meta `muse-spark-1.3-contributor`.
- **Context window:** 1,048,576 (1M) tokens verified via AI Index and Vercel benchmarks.
- **Modalities:** Text, image, video, PDF in; text out; reasoning supported; native tool calling; JSON mode.
- **Pricing (as of 2026-10-01):** Free Contributor tier at $0 (training-data consent); paid fallback $0.10 in / $0.20 out per 1M.
- **Architecture:** Proprietary, parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** mean pass@1 (BenchmarkList rank 4/182, 98th pct; Meta official)
- Tau3-Banking: **50.5%** (LLMLearner, max with tools, rank 3/103)
- GDPval-AA v2: **1754 Elo** (BenchmarkList, 98th pctile)
- JobBench: **64.9%** (BenchmarkList rank 2/36, 97th pct)
- AutomationBench: **49.4%** (BenchmarkList rank 6/42, 88th pct)
- SWE-Bench Pro: **46.3%** (BenchmarkList rank 5/28, 85th pct)
- SWE Atlas Codebase QnA: **59.4%** (BenchmarkList rank 5/28, 85th pct)
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (LLMLearner, 98th pctile)
- HLE: **48.7%** (LLMLearner, rank 38/218)
- Artificial Analysis Intelligence Index: **61** (AA Index #61/199)
- BenchLM ECI: **153.53** (#6/398)
- AA-LCR: **83.0%** (LLMLearner, rank 12/91)
- CritPt: **26.0** (LLMLearner, rank 10/118)
- Omniscience Accuracy: **no verified public score found**

Coding:

- LiveCodeBench: **no verified public score found**
- SciCode: **58.8%** (LLMLearner rank 5/83)
- DeepSWE: **75.4%** v1.1 (BenchmarkList rank 1/33, 100th pct)
- CursorBench v4.0: **41.6%** (LLMLearner rank 4/10)
- SWE-bench Verified: **no verified public score found for exact model**

Long context:

- MRCR v2 8-needle 512K-1M: **98.1%** (self-reported via Meta blog)
- RULER-type retrieval at 1M: saturated per Meta table

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 94/100.** Strong GDPval-AA 1754 Elo (98th pct), JobBench #2/36, Tau3 50.5%, and SWE-Pro 46.3% show frontier agentic capability; capped by missing Claw-Eval numbers.
- **Reasoning: 92/100.** GPQA 94.1% plus HLE 48.7% and AA Index 61 place at frontier; capped by CritPt 26.0 mid-rank and missing Omniscience numbers.
- **Context window: 100/100.** Full 1M verified with MRCR 98%+ at 512K-1M (rank #1); retrieval benchmarks saturated at scale.
- **Multimodal: 85/100.** Native text/image/video/PDF input → text output with visual reasoning; capped by text-only output (no audio synthesis).
- **Coding: 95/100.** DeepSWE 75.4% #1, SWE-Pro 46.3%, SciCode 58.8% excellent for size class; capped by no public LiveCodeBench numbers.
- **Cost efficiency: 100/100.** Free Contributor tier at $0/$0 (training-data consent); paid fallback $0.10/$0.20 is excellent.
- **Overall Score: 93/100.** Mean of Tool use, Reasoning, Context, Multimodal, Coding: (94 + 92 + 100 + 85 + 95) / 5 = 93.2 → 93. Best-fit for long-horizon coding and agentic work when free tier is available.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (AI Index, BenchmarkList, LLMLearner, Artificial Analysis, Meta blog); scores normalized 1-100 interpretations, not official vendor scores. Observed strong frontier performance particularly on coding and agent tasks.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.