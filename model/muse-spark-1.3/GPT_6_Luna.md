# Muse Spark 1.3 — findings by GPT-6 Luna

- Source: Meta/Muse Spark 1.3
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary model for agentic, long-horizon coding and multimodal workflows. The `max`/`xhigh` reasoning modes and Contributor access are modes/tiers of the same tracked model, not distinct weights.
- **Provider / access:** Meta Model API (`https://dev.meta.ai/`); REST API with an OpenAI-SDK-compatible client. Also available through Muse Code.
- **Release / knowledge:** Released 2026-09-02. No public knowledge-cutoff date found.
- **IDs:** Meta API `muse-spark-1.3`; Contributor tier `muse-spark-1.3-contributor`. No OpenCode Zen Free ID verified in this review.
- **Context window:** 1M tokens, according to Meta's model/API page.
- **Modalities:** Text, image, video and document input; text output. Meta describes native visual perception and document/video handling. No audio input/output verified.
- **Pricing (as of 2026-10-28):** Standard `muse-spark-1.3`: $1.25/M input, $0.15/M cached input, $4.25/M output. Contributor: $0.10/M input and $0.20/M output; Meta says this tier's use may improve its products. These are access/pricing tiers, not separate model weights.
- **Architecture:** Hosted proprietary model; parameter count and weights are not public. Meta described open weights as future work, not as currently released.

### Raw benchmarks found

Agent / tool use:

- Meta's benchmark table reports GDPval-AA v2: **1,754 Elo** (max), AutomationBench: **49.6%**, JobBench: **64.9%**, DeepSearchQA: **90.3%**, and OSWorld 2.0: **66.9% partial / 32.0% binary**.
- Terminal-Bench 2.1: **88.8%** (Meta model page, max mode); Artificial Analysis reports **85% xhigh / 86% max**. These are distinct evaluation reports/snapshots, not an arithmetic average.
- Tau3-Banking: **47% xhigh / 52% max** (Artificial Analysis release analysis). BenchmarkList lists **50.5%** for Muse Spark 1.3; mode and snapshot are not aligned.
- Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **94%** and Humanity's Last Exam: **47%** (Artificial Analysis release analysis; reasoning modes are identified there).
- CritPt: **26%**; AA-LCR: **79%** (Artificial Analysis release analysis).
- Current Artificial Analysis model pages report Intelligence Index v5.0 **36** for max; the xhigh page is deprecated and has no current Index score. BenchmarkList currently displays **48.1** for its AA Index field.

Coding:

- DeepSWE v1.1: **75.4%**; SWE Atlas Codebase QnA: **59.4%** (Meta's model/API benchmark table).
- SciCode: **59.7%** (BenchmarkList); Terminal-Bench 2.1: **88.8%** (Meta).
- Meta reports about **20% fewer tool calls** and **25% fewer tokens** than Muse Spark 1.2 in its internal coding comparisons; these are comparative efficiency claims, not an external benchmark score.

Long context:

- OpenAI MRCR v2 8-needle: **98.5% at 256K–512K** and **98.1% at 512K–1M** (BenchmarkList, sourced to its current benchmark record).

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, JobBench and DeepSearchQA show strong agentic performance; partial-vs-binary OSWorld results and the mode-dependent Tau3 figures cap certainty.
- **Reasoning: 84/100.** GPQA 94% and CritPt 26% are strong, but the current AA Intelligence Index v5.0 result (36) is far below the older release-analysis values and BenchmarkList's 48.1; that breadth-of-task evidence prevents a frontier-level reasoning score.
- **Context window: 100/100.** The 1M window is supported by reported MRCR retrieval of 98.1% in the 512K–1M band, meeting the project's high-retrieval criterion.
- **Multimodal: 85/100.** Official documentation supports image, video and document understanding, but no audio input or non-text output was verified.
- **Coding: 91/100.** Terminal-Bench 2.1 at 88.8%, DeepSWE 75.4%, SciCode 59.7% and SWE Atlas 59.4% support a high score; cross-harness repository coding still varies.
- **Cost efficiency: 88/100.** Scored on the standard API route at $1.25/$4.25 per million input/output tokens; the lower Contributor tier is $0.10/$0.20 but has a product-improvement/data-use caveat.
- **Overall Score: 90/100.** (92 + 84 + 100 + 85 + 91) / 5 = 90.4, rounded half-up; a strong fast agent/coding model, with current broad-index evidence more cautious than its best task-specific scores.

---

## Evidence comparison and source notes

- The September Artificial Analysis launch article reports Index 61 (xhigh) / 62 (max), while the current v5.0 model page reports 36 for max; BenchmarkList lists 48.1. The AA page identifies v5.0's newer nine-evaluation composition and marks older workloads historical. These are not the same index snapshot/mode, so they are not averaged; the current v5.0 result is the conservative breadth check.
- Terminal-Bench 2.1 appears as 88.8% in Meta's model table, 85% xhigh / 86% max in the AA release analysis, and 88.8% in BenchmarkList. Tau3-Banking is 47% xhigh / 52% max in AA versus 50.5% in BenchmarkList. Different effort modes, harnesses and snapshots explain why these should be reported separately.
- Meta offers both the standard and Contributor IDs with the same 1M-context model; Contributor pricing is cheaper but Meta's page says that tier's inputs are used to improve its products. The scored model identity is not split by tier.

## Sources

- Meta, [Muse Spark 1.3 model/API page](https://dev.meta.ai/models/muse-spark) — model IDs, context, modality, pricing tiers, use-data caveat, benchmark table and endpoint access.
- Meta, [Introducing Muse Spark 1.3](https://research.meta.ai/blog/introducing-muse-spark-1-3) — release date, agent/coding positioning and evaluation report links.
- Artificial Analysis, [Muse Spark 1.3: Meta reaches the frontier](https://artificialanalysis.ai/articles/muse-spark-1-3) — mode-specific Index and agent/coding/reasoning benchmarks as of release.
- Artificial Analysis, [Muse Spark 1.3 (Max)](https://artificialanalysis.ai/models/muse-spark-1-3) and [Muse Spark 1.3 (Xhigh)](https://artificialanalysis.ai/models/muse-spark-1-3-xhigh) — current Index v5.0 status, modalities, context, pricing and deprecation caveats.
- BenchmarkList, [Muse Spark 1.3 results](https://benchmarklist.com/models/meta-muse-spark-1.3/) — independent benchmark catalogue including MRCR, coding and knowledge results.
- Bing searches performed 2026-10-28: [official model card / benchmark / API](https://www.bing.com/search?q=%22Muse+Spark+1.3%22+official+model+card+benchmarks+release+API), [Artificial Analysis benchmark](https://www.bing.com/search?q=%22Muse+Spark+1.3%22+Artificial+Analysis+benchmark), [independent evaluation / review](https://www.bing.com/search?q=%22Muse+Spark+1.3%22+independent+benchmark+evaluation+review).

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-28
- Method: Three successful Bing searches, then direct review of Meta documentation, Artificial Analysis and BenchmarkList. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
