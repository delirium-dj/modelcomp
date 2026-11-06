# Muse Spark 1.3 — findings by Step 5 Preview

- Source: Meta / Meta Superintelligence Labs (`muse-spark-1.3`, `muse-spark-1.3-contributor`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (Meta Superintelligence Labs; Meta AI / FAIR). Not a separate `Max` or `Free` SKU — `muse-spark-1.3-contributor` is a pricing/data-use tier of the same weights, and `reasoning_effort: "max"` is a Standard-tier effort setting, not a distinct model.
- **Short description:** Meta's closed-weights frontier reasoning model, trained for long-horizon agentic workflows and competitive coding. Claims higher first-attempt accuracy, reliable built-in tool calling (MCP supported), and ~20% fewer tool calls / ~25% fewer tokens than Muse Spark 1.2 on identical repository workflows (Meta, 2026-09-02). Fourth Muse Spark release in five months.
- **Provider / access:** Meta Model API (first-party, OpenAI-SDK-compatible), Muse Code CLI, OpenRouter, Google Cloud Gemini Enterprise Agent Platform (partner Preview), Vercel AI Gateway. OpenAI Responses-API-compatible through the Zen gateway (`https://opencode.ai/inference/openai/v1/responses`).
- **Release / knowledge:** released 2026-09-02; Google Cloud partner Preview lists 2026-09-24. Knowledge cutoff **undisclosed** by Meta (LLMLearner, BridgeBench both list `—`).
- **IDs:** `meta/muse-spark-1.3` (Meta Model API, Vercel AI Gateway, Google Cloud); `opencode/muse-spark-1.3` (OpenCode Zen, paid $1.25/$4.25); `muse-spark-1.3-contributor` (Meta Model API discount tier, Meta trains on prompts/completions). No Free route on Zen as of 2026-11-04 — the 2026-09-03 `muse-spark-1.3-contributor-free` launch promotion is gone from the current free list.
- **Context window:** 1M tokens (1,048,576 total) — confirmed by Meta, Artificial Analysis, LLMLearner, Vercel and Google Cloud. Max output **not published by Meta** (LLMLearner and BridgeBench both list `—`); Vercel lists 1,048,576 and llm-stats lists 944K, so treat as ~1M/unverified.
- **Modalities:** text + image + video in (PDF documented by Vercel/BridgeBench); text out. Reasoning model with tool calling, function calling, structured output and MCP support (Google Cloud capability table). Caveat: **audio input is not fully supported in 1.3** — Meta points audio work at Muse Spark 1.2 (BridgeBench), which conflicts with llm-stats listing audio as an input modality. No verified Claw-Eval / ClawProBench score found.
- **Pricing (as of 2026-11-04):** Standard `muse-spark-1.3` **$1.25 in / $0.15 cached in / $4.25 out per 1M** (Meta, Zen, llm-stats, BridgeBench all agree; Zen re-sells at cost). Contributor `muse-spark-1.3-contributor` **$0.10 / $0.002 / $0.20 per 1M** but Meta may train on prompts and completions — not for confidential code. Search grounding $2.50/1,000 queries. Layer3Labs (updated 2026-10-27) still claims "no finalized rate card published"; that is outdated and contradicted by the live Meta pricing table.
- **Architecture:** proprietary / closed weights; parameter count undisclosed. Open-weights release announced on Meta's roadmap; Muse Spark Open (2026-10-15) reportedly shares the same base model (PyTorch post, via Layer3Labs).

### Raw benchmarks found

Meta's own table is the `Muse Spark 1.3 (max)` column with tools; Artificial Analysis independently measured the `xhigh` column. Both are listed where they differ.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta official table, max, with tools) / **85.4%** (Artificial Analysis, xhigh, with tools; AA article rounds to 85% xhigh, 86% max)
- τ³-Banking: **47%** (xhigh) / **52%** (max) (Artificial Analysis — #1 among all models) / **50.5%** #3/119 (LLMLearner, effort unspecified)
- GDPval-AA v2: **1,754 Elo** (Meta table, max) / **1,709 Elo** (AA, xhigh) / **1,681 Elo** #11/19 (LLMLearner)
- JobBench (professional tool use): **64.9%** #1/8 (Meta / LLMLearner)
- OSWorld 2.0: **66.9% partial / 32.0% binary** (Meta, max); OSWorld 2.1: **69.6%**
- DeepSearchQA (agentic browsing): **90.3%** (Meta) / **89.4%** #2/4 (LLMLearner)
- Harvey Lab-AA (legal agentic): **95.5%** #1/39 (LLMLearner)
- AutomationBench: **49.6%** (Meta) / **49.4%** #11/58 (LLMLearner)
- AA-Briefcase: **1,581 Elo** #10/14; APEX-Agents: **58.6%** #16/56; Agentic IF Index: **57.8%**; Agents' Last Exam: **32.2%**
- Efficiency: **$0.55 per Intelligence Index task (xhigh)** — lowest of any model scoring 59+ on the index, vs $0.93–$0.95 for peers GPT-5.6 Sol (max) and Grok 4.6 (high) (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **94.1%** #15/198 (Artificial Analysis, xhigh, no tools)
- HLE: **47%** (xhigh, AA article; BenchLM reports 48.7%)
- AA-LCR: **79%** (xhigh) / **83%** (max) — the only notable regression vs Muse Spark 1.2 (was 83%)
- CritPt: **26.0%** #19/134 — standout gain vs 1.2 (18%), still low in absolute terms
- SciCode: **59.7%** #12/98; FrontierMath v2: **74.4%**; **FrontierMath Tier 4 v2: 46.3%** vs GPT-6 Sol 90%
- AA-Omniscience Accuracy: **42%** (xhigh) / **44%** (max) — fell 3/1 pts vs 1.2, but via *higher abstention*, which also lowered the hallucination rate
- Artificial Analysis Intelligence Index: **61 (xhigh) / 62 (max)** on the v4 index used at launch — behind only Claude Fable 5.1 (66), Claude Opus 5 (max, 63) and Claude Fable 5 (max, 62); **48.09** on v4.3 (Oct 2026); **36.4** #12/37 on the v5.0 index (Nov 2026). The three index numbers are **not comparable** — AA redesigned the index (v5 adds private datasets and 2 new benchmarks), so a falling number does not mean a falling model.
- Vals Index v2.1: **53.16** #18/38; LiveBench: **81.6%** #6/106 (xhigh, no tools); LiveBench 2.0: **74.8%**; SimpleBench: **81.8%**; MysteryMechanism: **36.0%**

Coding:

- DeepSWE v1.1: **75.4%** #6/591 (Meta, max, with tools)
- SWEAtlas CodeBase QnA: **59.4%** #4/17 (Meta)
- Terminal-Bench 4.0: **33.3%** #27/69 (LLMLearner) — much weaker than its TB2.1 result
- CursorBench 4.0: **41.6%** #12/19; FrontierSWE v2: **25.8%** #14/23; Apex-SWE: **39.1%** #33/61; Code Migration: **47.4%** #15/78
- IOI (Vals v2): **56.6%** #21/45; AA Cyber Index: **44.3%**; CWE-bench v1: **55.0%** #8/12; WeirdML v3: **18**
- Vibe Code Bench 1-100: **20.5%** #9/25; **Vibe Code Bench v1.1: 85.9%** #15/114 (two different harnesses, both listed)
- SWE-bench Verified: **no verified public score found** for this model ID in any source checked.

Long context:

- MRCR 256K–512K: **98.5%**; MRCR 512K–1M: **98.1%** (Meta official table, max) — ≥98% retention across the full 1M window
- AA-LCR 83% (max) / 79% (xhigh) as above

Multimodal:

- MMMU-Pro: **82.0%** #21/131; GeoBench ACW: **86.0%** #3/32; GDP.pdf: **26.6%** #11/90; Creative Writing: **1907** #14/116

### Normalized scores (1–100)

- **Tool use: 93/100.** #1 on τ³-Banking (52% max), JobBench (64.9%), Harvey Lab-AA (95.5%) and rank 2 on DeepSearchQA, plus GDPval 1,754 Elo and TB2.1 88.8% (Meta) / 85.4% (AA) — all at or above the frontier reference band. The generally-available `xhigh` variant sits a hair under that band on TB2.1/τ³, and the max-effort numbers come from a partner-gated preview, which caps the score; best-in-class cost per task ($0.55) adds confidence rather than capability.
- **Reasoning: 90/100.** GPQA Diamond 94.1%, HLE 47%, MRCR 98.5/98.1% to 1M and Intelligence Index 61–62 (v4) all meet the frontier reference, but AA-LCR (79–83%), CritPt (26.0%) and FrontierMath Tier 4 (46.3%, vs 90% for GPT-6 Sol) are mid-tier and cap it. The AA-Omniscience drop is an abstention artefact, not a knowledge loss.
- **Context window: 100/100.** ≥1M tier with ≥98% MRCR retention measured at both 256K–512K and 512K–1M — the top of the tiered mapping. Caveat: Meta publishes no max-output cap, so long-output work is unverified.
- **Multimodal: 85/100.** Image + video + PDF in (MMMU-Pro 82.0%, GeoBench ACW 86.0% #3) but text-only output and audio explicitly deferred to Muse Spark 1.2 — lands in the "+video/PDF in" band, below the "any non-text out / audio in" tier.
- **Coding: 90/100.** DeepSWE 75.4% (#6), TB2.1 88.8%/85.4% and SciCode 59.7% all clear the frontier reference. Capped by SWE-bench Verified being unverified, and by much weaker numbers on the newer agentic-coding harnesses (TB4.0 33.3%, CursorBench 41.6%, FrontierSWE 25.8%).
- **Cost efficiency: 89/100.** Scored on the paid Standard tier at $1.25/$4.25 ($0.15 cached) — the methodology's ~88 baseline, nudged up for the independently verified $0.55/task Pareto lead at its intelligence level. The Contributor route is far cheaper ($0.10/$0.20) but Meta trains on prompts and completions, so it is not a free lunch; no Free Zen route exists today.
- **Overall Score: 92/100.** (93 + 90 + 100 + 85 + 90) / 5 = 91.6 → **92** → 92. Recommendation: the default pick for long-horizon agentic coding and tool-use when budget allows — top-quartile tool use and near-perfect long-context retention at roughly half the per-task cost of its direct index peers; use a maths/science specialist for FrontierMath/CritPt-grade work and do not put confidential code on the Contributor tier.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-04
- Method: public internet research across the official Meta model card and launch blog, the Artificial Analysis launch analysis and model page, LLMLearner's benchmark catalog, BridgeBench, llm-stats, Vercel AI Gateway, Google Cloud partner docs and OpenCode Zen pricing; scores are normalized 1–100 interpretations, not official vendor scores. Conflicting figures are listed side by side in the raw-benchmark block with their source and harness rather than averaged away.
- Reference URLs:
  - [Meta — Muse Spark 1.3 model card + official benchmark table + pricing](https://dev.meta.ai/models/muse-spark)
  - [Meta AI Research — Introducing Muse Spark 1.3 (2026-09-02)](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [Meta — Muse Spark 1.3 multimodal evaluation methodology (PDF)](https://research.meta.ai/static/muse-spark-1-3-multimodal-evaluation-methodology)
  - [Artificial Analysis — Muse Spark 1.3: Meta reaches the frontier](https://artificialanalysis.ai/articles/muse-spark-1-3)
  - [Artificial Analysis — Muse Spark 1.3 (Max) model page](https://artificialanalysis.ai/models/muse-spark-1-3)
  - [LLMLearner — Muse Spark 1.3 (52 curated benchmark results)](https://llmlearner.com/models/muse-spark-1-3)
  - [BridgeBench — Muse Spark 1.3 ratings, pricing and specs](https://www.bridgebench.ai/leaderboard/muse-spark-1-3)
  - [llm-stats — Muse Spark 1.3 benchmarks, pricing & context window](https://llm-stats.com/models/muse-spark-1.3)
  - [Vercel AI Gateway — Muse Spark 1.3](https://vercel.com/ai-gateway/models/muse-spark-1.3)
  - [Google Cloud — Muse Spark 1.3 partner model (capability table)](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/meta/muse-spark-1-3)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - [Layer3Labs — Muse Spark 1.3 explained (independent review; pricing claim outdated)](https://www.layer3labs.io/guides/muse-spark-1-3-explained)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
