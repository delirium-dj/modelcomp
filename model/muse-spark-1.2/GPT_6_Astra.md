# Muse Spark 1.2 — findings by GPT 6 Astra

- Source: Meta / Muse Spark 1.2
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Research refresh — 2026-10-09

Compared with the 2026-10-03 report. Sources accessed on 2026-10-09; access dates are not benchmark execution dates. This section supersedes conflicting or missing-data statements in the preserved snapshot below. No local model evaluation was performed.

The [official 1.2 page](https://dev.meta.ai/models/muse-spark-1-2) still lists 1M context and unchanged Standard/Contributor prices and data-use distinctions. Contributor remains a tier of the same model, not a new project model.

Meta's [1.3 comparison, explicitly the 1.2 xhigh column](https://dev.meta.ai/models/muse-spark), fills older gaps: DeepSWE v1.1 **55.0%**, SWEAtlas CodeBase QnA **46.2%**, Terminal-Bench 2.1 **82.9%**, MRCR **66.3% at 256K–512K / 55.5% at 512K–1M**. These are Meta's runs; retrieval does not qualify for a 100 context score.

The [AA 1.2 launch article](https://artificialanalysis.ai/articles/muse-spark-1-2) retains Tau3-Banking **27%** and GDPval-AA v2 **1631**, whereas its [later 1.3 comparison](https://artificialanalysis.ai/articles/muse-spark-1-3) gives the 1.2 baseline as **35% / 1615**. Both describe historical evaluation snapshots; the discrepancy is recorded, not silently merged or claimed as weight improvement.

Vibe Code Bench v1.1 / OpenHands: **79.10%**, **$1.53/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

Coding 89→90 gains app-building and codebase evidence. Other dimensions stay unchanged; no context bonus is justified. Remaining gaps: output cap, cutoff, immutable benchmark run IDs, exact-model SWE-bench Verified/Pro and independent full-window retrieval. Muse Spark 1.1 or unversioned Muse Spark leaderboard rows are not used as 1.2 evidence.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **85, 88, 95, 85, 89, 89**; revised: **85, 88, 95, 85, 90, 89**. Overall: **88 → 89**. Scores are normalized judgments, not raw benchmark percentages.

## Prior research snapshot — 2026-10-03

The following model card and raw findings preserve the earlier evidence and its gaps for comparison; read the refresh above for current corrections.

### Model card

- **Name:** Muse Spark 1.2; Contributor is a pricing/data-use tier of this model.
- **Short description:** Proprietary reasoning model focused on coding and sustained tool workflows.
- **Provider / access:** Meta Model API at `https://api.meta.ai/v1`, supporting Chat Completions, Responses and Messages-compatible protocols; also OpenRouter.
- **Release / knowledge:** August 5, 2026 release; cutoff unverified.
- **IDs:** `muse-spark-1.2`, `muse-spark-1.2-contributor`; no verified Free Zen ID.
- **Context window:** 1,048,576 tokens; maximum output unverified.
- **Modalities:** Text, images and video understanding; text output, reasoning, parallel tool calls and structured JSON. Separate Muse Image/Voice products are not native Spark output. [API documentation](https://dev.meta.ai/docs/overview).
- **Pricing (as of 2026-10-03):** Standard $1.25 input / $4.25 output / $0.15 cached per million; Contributor $0.10 / $0.20 / $0.002. Contributor data is used to improve Meta products; standard is not. [Official model card](https://dev.meta.ai/models/muse-spark-1-2).
- **Architecture:** Proprietary; parameter counts and architecture undisclosed.

### Raw benchmarks found

Agent / tool use:

- AA launch evaluation, xhigh: Terminal-Bench 2.1 **80%**, Tau3-Banking **27%**, GDPval-AA v2 **1631 Elo**, then **#5**. Historical August harness/rank, not current v2.1 Elo. [AA research](https://artificialanalysis.ai/articles/muse-spark-1-2).
- Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public score found in reviewed text.

Reasoning / knowledge:

- HLE **44%**, CritPt **18%**, AA Intelligence Index **54** at launch; Omniscience **38% accuracy / 28% hallucination rate**, index **22**. Same [AA evaluation](https://artificialanalysis.ai/articles/muse-spark-1-2). Index version differs from today's v4.3.2; historical values are not directly comparable.
- GPQA, LCR/MLCR and BenchLM: no verified public score found.

Coding:

- SciCode **56%**, same AA source; Terminal-Bench provides additional agentic coding evidence.
- SWE-bench Verified/Pro, LiveCodeBench, Vibe Code Bench and DeepSWE: no verified public numeric score found in reviewed accessible sources.

Long context:

- No verified full-window retrieval measurement found; advertised size alone does not establish retrieval reliability.

## Current normalized scores (1–100)

- **Tool use: 85/100.** Terminal and knowledge-work evidence is strong; differing historical Tau3 snapshots and incomplete broader tool coverage limit confidence.
- **Reasoning: 88/100.** HLE and CritPt support strong reasoning; Omniscience accuracy limits confidence in factual breadth.
- **Context window: 95/100.** Verified million-token capacity meets the top size tier, without evidence for perfect retrieval.
- **Multimodal: 85/100.** Image/video/document workflows exceed image-only scope; native audio and nontext output are unverified.
- **Coding: 90/100.** Revised from 89; evidence and rationale are recorded in the dated refresh above.
- **Cost efficiency: 89/100.** Standard $1.25/$4.25 offers strong value; Contributor is cheaper but has materially different data-use terms.
- **Overall Score: 89/100.** Half-up mean (85 + 88 + 95 + 85 + 90) / 5 = 88.6; cost excluded. See the refresh for the comparison with 88.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09
- Method: Independent public web research; normalized scores are interpretations, not vendor scores. Historical benchmark version and tier distinctions retained.
- Future sources: Add a separate signed findings file alongside this report.
