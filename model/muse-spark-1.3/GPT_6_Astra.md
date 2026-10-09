# Muse Spark 1.3 — findings by GPT 6 Astra

- Source: Meta / Muse Spark 1.3
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Research refresh — 2026-10-09

Compared with the 2026-10-03 report. Sources accessed on 2026-10-09; access dates are not benchmark execution dates. This section supersedes conflicting or missing-data statements in the preserved snapshot below. No local model evaluation was performed.

The [Meta API overview](https://dev.meta.ai/docs/overview) resolves previously unverified protocol/JSON support: Chat Completions, Responses and Messages-compatible interfaces, plus schema-constrained structured output. These are API capabilities, not evidence of a benchmark pass rate.

The [official model page](https://dev.meta.ai/models/muse-spark) reconfirms Standard/Contributor prices and the max-effort MRCR values **98.5% at 256K–512K / 98.1% at 512K–1M**. Additional vendor max results: JobBench **64.9%**, OSWorld 2.0 **66.9% partial / 32.0% binary**, DeepSearchQA **90.3%**, AutomationBench **49.6%**. Partial and binary success are distinct metrics; Meta AutomationBench is not automatically AA AutomationBench.

Vibe Code Bench v1.1 / OpenHands: **82.86%, $2.10/test**; Max: **85.86%, $2.54/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

This closes the app-building gap and supplies a max-configuration cost observation. It does not replace AA's different $0.55/task xhigh workload, nor identify the unlabeled Vals row as xhigh. Max remains an effort configuration within this project model. All scores stay unchanged: the new evidence broadens coverage without supporting another increase.

Remaining gaps: output cap, cutoff, independent replication of full-window retrieval, exact-model SWE-bench Verified/Pro and version-specific MCP Atlas. Historical AA launch indices below are not current-index measurements.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **95, 94, 100, 85, 95, 90**; revised: **95, 94, 100, 85, 95, 90**. Overall: **94 → 94**. Scores are normalized judgments, not raw benchmark percentages.

## Prior research snapshot — 2026-10-03

The following model card and raw findings preserve the earlier evidence and its gaps for comparison; read the refresh above for current corrections.

### Model card

- **Name:** Muse Spark 1.3; Contributor and Standard are pricing tiers, max and xhigh are effort settings.
- **Short description:** Proprietary Meta model for coding and agent workflows.
- **Provider / access:** Meta Model API and Muse Code; API protocol not independently verified here.
- **Release / knowledge:** September 2, 2026; cutoff not verified. [AA](https://artificialanalysis.ai/articles/muse-spark-1-3)
- **IDs:** `muse-spark-1.3`, `muse-spark-1.3-contributor`; Zen Free ID not verified.
- **Context window:** 1M tokens; output limit not verified.
- **Modalities:** Text, image, video and document input; text output, tool use. JSON mode not verified.
- **Pricing (as of 2026-10-03):** Standard input/output/cache $1.25/$4.25/$0.15 per million tokens; Contributor $0.10/$0.20/$0.002, with product-improvement data use. Standard tier evaluated for cost.
- **Architecture:** Proprietary; parameter count undisclosed. Specifications and pricing: [Meta](https://dev.meta.ai/models/muse-spark).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: 88.8% (Meta max harness); AA measures 86% at max and 85% at xhigh.
- Tau3-Banking: 52% max, 47% xhigh; GDPval-AA v2: 1,754 max, 1,709 xhigh. [AA](https://artificialanalysis.ai/articles/muse-spark-1-3)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: 94%; HLE: 47%; CritPt: 26%; Intelligence Index: 61; AA-LCR: 79%; Omniscience accuracy: 42% (all xhigh). Max Intelligence Index: 62. Hallucination rate: no verified public score found. [AA](https://artificialanalysis.ai/articles/muse-spark-1-3)

Coding:

- DeepSWE v1.1: 75.4%; SWEAtlas CodeBase QnA: 59.4% (Meta max). [Meta](https://dev.meta.ai/models/muse-spark)
- SciCode: 59% xhigh. SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench: no verified public score found. [AA](https://artificialanalysis.ai/articles/muse-spark-1-3)

Long context:

- MRCR: 98.5% at 256K–512K and 98.1% at 512K–1M, vendor max evaluation. [Meta](https://dev.meta.ai/models/muse-spark)

## Current normalized scores (1–100)

- **Tool use: 95/100.** Strong Tau3 and terminal results; missing broader tool evaluations and harness differences cap confidence.
- **Reasoning: 94/100.** GPQA and HLE meet frontier anchors; CritPt and LCR leave substantial gaps.
- **Context window: 100/100.** Published 1M window and above-98% retrieval satisfy the highest methodology tier; vendor harness caveat applies.
- **Multimodal: 85/100.** Video, image and document perception; no verified audio or non-text output.
- **Coding: 95/100.** DeepSWE, terminal and SciCode clear frontier anchors; no comprehensive independent repository evaluation established here.
- **Cost efficiency: 90/100.** Standard pricing and separate AA xhigh and Vals max cost observations support strong value; workload costs are not interchangeable.
- **Overall Score: 94/100.** Half-up mean (95 + 94 + 100 + 85 + 95) / 5 = 93.8; cost excluded. See the refresh for the comparison with 94.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09
- Method: Independent public web research; normalized scores are interpretations, not official vendor scores. Effort settings and harnesses remain explicitly distinguished.
- Future sources: add a separate signed report using the same headings.
