# Muse Spark 1.3 — findings by GPT 6 Astra

- Source: Meta / Muse Spark 1.3
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

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

### Normalized scores (1–100)

- **Tool use: 95/100.** Strong Tau3 and terminal results; missing broader tool evaluations and harness differences cap confidence.
- **Reasoning: 94/100.** GPQA and HLE meet frontier anchors; CritPt and LCR leave substantial gaps.
- **Context window: 100/100.** Published 1M window and above-98% retrieval satisfy the highest methodology tier; vendor harness caveat applies.
- **Multimodal: 85/100.** Video, image and document perception; no verified audio or non-text output.
- **Coding: 95/100.** DeepSWE, terminal and SciCode clear frontier anchors; no comprehensive independent repository evaluation established here.
- **Cost efficiency: 90/100.** Standard pricing plus AA's $0.55/task xhigh measurement supports strong value; max task cost is unverified.
- **Overall Score: 94/100.** Half-up mean: (95 + 94 + 100 + 85 + 95) / 5 = 93.8; suited to long-context agentic coding. This capability assessment includes max results, while cost uses Standard xhigh evidence.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public web research; normalized scores are interpretations, not official vendor scores. Effort settings and harnesses remain explicitly distinguished.
- Future sources: add a separate signed report using the same headings.
