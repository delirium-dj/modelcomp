# Muse Spark 1.3 Contributor — findings by GPT-5.6 Terra

- Source: Meta / Muse Spark 1.3 Contributor
- Date: 2026-10-01 (UTC; refreshed against current public evidence)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor
- **Short description:** Free OpenCode Zen access tier for Meta's Muse Spark 1.3, an agentic coding and knowledge-work model.
- **Provider / access:** OpenCode Zen free tier; upstream model is available through Muse Code and Meta Model API. The exact free-tier API identifier was not verified in first-party documentation.
- **Release / knowledge:** September 2026 release for Muse Spark 1.3; cutoff not publicly verified.
- **IDs:** Free OpenCode Zen identifier not verified; upstream model ID reported as `muse-spark-1.3`.
- **Context window:** 1M tokens in Max mode; provider documentation describes 300K regular context and 1M Max mode.
- **Modalities:** Text, image, video, and document perception are described by Meta; text output.
- **Pricing (as of 2026-09-18):** Free Zen tier; upstream listed price $1.25 input / $4.25 output per 1M tokens.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta scorecard as reported in contemporary coverage; max reasoning).
- SWE-Atlas Codebase QnA: **59.4%** (Meta scorecard; max reasoning).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **48** (Artificial Analysis listing for max reasoning); other independently verified reasoning benchmarks were not found.
- Parallel Search Intelligence: **66.1** with search (**30.3** without); its component results are DSQA **85.2%**, HLE **46.0%**, and WISER **67.0%** (independent leaderboard, updated 2026-09-30).

Coding:

- DeepSWE v1.1: **75.4%** (Meta scorecard as reported in contemporary coverage; max reasoning).
- Terminal-Bench 2.1: **88.8%** (Meta scorecard; max reasoning).
- SWE-bench Verified / LiveCodeBench: as of 2026-09-03, the tracked Vals AI rows reached Muse Spark 1.2 rather than 1.3; The Model Gap documents this coverage limitation. Do not substitute the 1.2 score for Muse Spark 1.3.

Long context:

- MRCR v2: **98.5%** at 256K–512K and **98.1%** at 512K–1M (Meta scorecard as reported in contemporary coverage; max reasoning).

### Normalized scores (1–100)

- **Tool use: 90/100.** The 88.8% Terminal-Bench 2.1 result and 59.4% codebase-QnA result are strong, with vendor-only disclosure capping confidence.
- **Reasoning: 88/100.** The 48 Intelligence Index plus the new independently reported search-enabled 66.1 result and HLE 46.0% indicate high capability; coverage remains incomplete.
- **Context window: 99/100.** 1M context with 98.1% measured MRCR retrieval in the 512K–1M range is exceptional.
- **Multimodal: 90/100.** Meta documents image, video, and document perception; audio input/output and independent multimodal evaluations were not verified.
- **Coding: 93/100.** DeepSWE 75.4% and Terminal-Bench 2.1 88.8% indicate frontier-level agentic coding, subject to vendor-score caveats.
- **Cost efficiency: 100/100.** The designated OpenCode Zen tier is free, subject to host quotas and availability.
- **Overall Score: 92/100.** Mean of Tool, Reasoning, Context, Multimodal, and Coding = 92.0; especially compelling for free long-context, agentic coding while the Zen tier remains available.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-01
- Method: refreshed public-web research using [Meta’s release](https://research.meta.ai/blog/introducing-muse-spark-1-3), [Meta Model API documentation](https://dev.meta.ai/models/muse-spark), and [Parallel’s independent search leaderboard](https://parallel.ai/leaderboard/muse-spark-1-3); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
