# Muse Spark 1.2 — findings by GPT-6.1 Terra

- Source: Meta / Muse Spark 1.2
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's proprietary model for agentic and coding workflows; Standard and Contributor are pricing/data-use tiers of the same model.
- **Provider / access:** Meta Model API and Muse Code; IDs `muse-spark-1.2` and `muse-spark-1.2-contributor` ([Meta](https://dev.meta.ai/models/muse-spark-1-2/)).
- **Release / knowledge:** Released 2026-08-05 according to [Vals](https://www.vals.ai/models/meta_muse_spark_1_2); knowledge cutoff not verified.
- **IDs:** Meta `muse-spark-1.2`, `muse-spark-1.2-contributor`. A former Zen free route was reported removed; current free availability is not assumed.
- **Context window:** 1M according to Meta; Vals lists 131K maximum output.
- **Modalities:** Vals reports MMMU Pro and Meta describes tool calling; image input is credited. Exact audio/video support was not independently established in this research.
- **Pricing (2026-11-01):** Meta Standard $1.25 input / $0.15 cache read / $4.25 output per million; Contributor $0.10 / $0.002 / $0.20, with data used to improve Meta products ([Meta](https://dev.meta.ai/models/muse-spark-1-2/)).
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Meta's comparison table reports Terminal-Bench 2.1 **82.9%** and JobBench **61.6%**, Spark 1.2 xhigh ([Meta](https://dev.meta.ai/models/muse-spark)).
- Vals Terminal-Bench 4.0 **6.06% ± 1.51** ([Vals](https://www.vals.ai/models/meta_muse_spark_1_2)); different benchmark versions and settings are not directly comparable.
- Tau2-Bench, Claw-Eval and MCP-Atlas: no exact-model score verified here.

Reasoning / knowledge:

- Vals ProofBench v1.1 **43.00% ± 4.98** and MMLU Pro **88.28% ± 0.32** ([Vals](https://www.vals.ai/models/meta_muse_spark_1_2)).
- GPQA Diamond, HLE and CritPt: no exact-model score verified in these sources.

Coding:

- Meta DeepSWE v1.1 **55.0%**; Vals SWE-bench **86.60% ± 1.52**, Vibe Code Bench v1.1 **79.10% ± 3.31**, Code Migration **29.95% ± 4.02** ([Meta](https://dev.meta.ai/models/muse-spark); [Vals](https://www.vals.ai/models/meta_muse_spark_1_2)).
- LiveCodeBench and SciCode: no verified score found here.

Long context:

- Meta MRCR **66.3% at 256K–512K** and **55.5% at 512K–1M**, Spark 1.2 xhigh ([Meta](https://dev.meta.ai/models/muse-spark)).

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong vendor JobBench and terminal 2.1 results are tempered by low Vals Terminal-Bench 4.0.
- **Reasoning: 82/100.** MMLU and ProofBench provide useful but incomplete reasoning evidence.
- **Context window: 95/100.** The 1M window reaches the top size tier; the long-range MRCR result is well below 98%.
- **Multimodal: 68/100.** Image understanding is evidenced; broader modalities and non-text output are not credited without confirmation.
- **Coding: 87/100.** SWE-bench and Vibe Code are strong, tempered by DeepSWE and code-migration variation.
- **Cost efficiency: 94/100.** Contributor pricing is inexpensive but paid and permits product-improvement use of submitted data.
- **Overall Score: 83/100.** (85 + 82 + 95 + 68 + 87) / 5 = 83.4, rounded to 83; useful for inexpensive coding where data terms fit.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Different benchmark versions and endpoint tiers are distinguished.
- Reference URLs:
  - [Meta Spark 1.2 model and pricing page](https://dev.meta.ai/models/muse-spark-1-2/)
  - [Meta comparative evaluation table](https://dev.meta.ai/models/muse-spark)
  - [Vals independent evaluations](https://www.vals.ai/models/meta_muse_spark_1_2)
  - [OpenCode free-route availability report](https://github.com/anomalyco/opencode/issues/47192)
- Future sources: add a new file next to this one using the same headings.
