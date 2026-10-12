# Muse Spark 1.3 — findings by GPT 6 Sol

- Source: Meta (`muse-spark-1.3`; Contributor is a pricing/data-use tier)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary long-horizon agent and coding model. Contributor and Standard share weights and context; the extra `max` reasoning setting is available on Standard, so max-effort benchmark results should not be promised for Contributor requests.
- **Provider / access:** Meta Model API (`https://api.meta.ai/v1`, Responses or Chat Completions); OpenCode Zen (`https://opencode.ai/zen/v1`, Responses, per [Pi's provider listing](https://pi.dev/models/opencode/muse-spark-1-3)); [Vercel AI Gateway](https://vercel.com/changelog/muse-spark-1-3-now-available-on-ai-gateway) offers Chat Completions with `meta/muse-spark-1.3`.
- **Release / knowledge:** September 2, 2026 ([Meta launch](https://research.meta.ai/blog/introducing-muse-spark-1-3)); knowledge cutoff not disclosed.
- **IDs:** Meta `muse-spark-1.3` (Standard), `muse-spark-1.3-contributor` (same weights, different data-use and reasoning-effort access); Zen `opencode/muse-spark-1.3`. No separately verified current free Zen route in the provider listing: the documented Zen route is paid.
- **Context window:** 1,048,576 total; Zen advertises 131,072 max output ([Meta model documentation](https://dev.meta.ai/docs/models), [Pi Zen listing](https://pi.dev/models/opencode/muse-spark-1-3)). Native and gateway capabilities can differ.
- **Modalities:** Text/image/video/PDF in, text out; tool calls, reasoning and structured output via Meta API ([Meta docs](https://dev.meta.ai/docs/models)); Meta cautions that audio understanding on 1.3 is not fully supported. Zen's listed input is text/image only; do not assume video/PDF/audio on Zen.
- **Pricing (as of 2026-10-12):** Meta Standard and Zen listed at $1.25 input / $4.25 output / $0.15 cached input per 1M; Meta Contributor $0.10 / $0.20 / $0.002, with content used to improve models ([Meta model page](https://developer.meta.com/ai/models/muse-spark/), [Vercel](https://vercel.com/changelog/muse-spark-1-3-now-available-on-ai-gateway), [Pi Zen listing](https://pi.dev/models/opencode/muse-spark-1-3)). Older $0 Zen promotion is not verified by the current listing; cost scored on documented Standard pricing.
- **Architecture:** Proprietary; parameter count and weights not published ([Artificial Analysis model page](https://artificialanalysis.ai/models/muse-spark-1-3-xhigh)).

### Raw benchmarks found

Results are configuration/harness-specific: Meta's **max** scorecard is not the same as independent **xhigh** runs. [Meta's official model scorecard](https://developer.meta.com/ai/models/muse-spark/) supplies the first group; [Artificial Analysis's launch comparison](https://artificialanalysis.ai/articles/muse-spark-1-3) supplies the independent group. [BenchLM's model evidence table](https://benchlm.ai/models/muse-spark-1-3) independently indexes the citations, but is not a third independent experiment.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta max, official scorecard); **85%** (AA xhigh) and **86%** (AA max, AA's own harness); these are not interchangeable runs.
- Tau3-Bench Banking: **47%** (AA xhigh), **52%** (AA max; launch-period top score).
- GDPval-AA v2: **1,709 Elo** (AA xhigh) and **1,754 Elo** (AA max); Meta max scorecard also reports **1,754**.
- JobBench **64.9%**, OSWorld 2.0 **66.9% partial / 32.0% binary**, DeepSearchQA **90.3%**, AutomationBench **49.6%** (Meta max scorecard; score definitions vary by benchmark).
- Claw-Eval / ClawProBench: no verified public score found for this exact configuration.

Reasoning / knowledge:

- GPQA Diamond **~94%**, HLE **~47%** (AA xhigh); CritPt **26%** (AA xhigh); AA-LCR **79%** (AA xhigh/max), down from the previous model's 83% ([AA launch analysis](https://artificialanalysis.ai/articles/muse-spark-1-3)).
- Artificial Analysis Intelligence Index at launch: **61** (xhigh) / **62** (limited-preview max). The [current AA xhigh model page](https://artificialanalysis.ai/models/muse-spark-1-3-xhigh) displays **45 on Index v4.3.2**; do not compare 45 and 61 as though the test had remained fixed.

Coding:

- DeepSWE v1.1 **75.4%**, SWE-Atlas Codebase QnA **59.4%**, Terminal-Bench 2.1 **88.8%** (Meta max scorecard).
- AA-SciCode **~59%** (AA xhigh; [AA launch analysis](https://artificialanalysis.ai/articles/muse-spark-1-3)); independent [BenchLM evidence table](https://benchlm.ai/models/muse-spark-1-3) records **58.8%** with an AA leaderboard citation.
- SWE-bench Verified / LiveCodeBench for this exact release: no verified public score found; do not substitute a predecessor score.

Long context:

- MRCR v2 **98.5% at 256K–512K** and **98.1% at 512K–1M** (Meta max official scorecard); independently measured AA-LCR **79%** at launch, a reminder that retrieval and reasoning are different tasks ([AA launch analysis](https://artificialanalysis.ai/articles/muse-spark-1-3)).

### Normalized scores (1–100)

- **Tool use: 96/100.** Independent TB2.1 85–86%, Tau3 47–52%, and GDPval 1709–1754 show frontier agency; different harnesses and max-effort availability constrain generalization.
- **Reasoning: 94/100.** GPQA ~94% and HLE ~47% are very strong, but CritPt 26%, AA-LCR 79%, and the changed AA Index methodology prevent a ceiling score.
- **Context window: 100/100.** Verified 1M capacity and Meta's 98.1% MRCR at 512K–1M meet the highest tier; Zen's advertised output remains capped at 131,072.
- **Multimodal: 85/100.** Meta supports image, video and PDF input; Zen advertises only text/image, audio quality is explicitly caveated and output is text-only.
- **Coding: 96/100.** Meta DeepSWE 75.4% and TB2.1 88.8% plus AA SciCode ~59% support frontier coding; missing exact-version SWE-bench Verified keeps this below 100.
- **Cost efficiency: 88/100.** Standard $1.25/$4.25 and $0.15 cached input are good for this capability (AA launch cites $0.55 per xhigh evaluation task); the cheaper $0.10/$0.20 Contributor trades training consent and lacks max effort, while a current $0 Zen tier is unverified.
- **Overall Score: 94/100.** (96 + 94 + 100 + 85 + 96) / 5 = 94.2, half-up 94; excellent for long-context agentic coding when the evaluated reasoning tier is available.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh cross-check of Meta's launch/model/docs, Artificial Analysis's independent launch and revised-index page, Vercel's tier listing, Pi's Zen listing, and BenchLM's linked evidence; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
