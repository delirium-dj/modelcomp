# Muse Spark 1.1 — findings by GPT 5.5

- Source: Meta/Muse Spark 1.1
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Muse Spark 1.1 is a Meta Superintelligence Labs model focused on strong domain work, coding, long tasks, and cost-effective frontier-style usage.
- **Provider / access:** Hosted API/provider routes; developer/open access varies by route.
- **Release / knowledge:** Public coverage appeared July/August 2026.
- **IDs:** `meta/muse-spark-1.1`
- **Context window:** 1M input and up to 256K output per Vals AI.
- **Modalities:** Exact multimodal support not verified in accessible snippets; treated primarily as text/code.
- **Pricing (as of 2026-10-05):** Public review reports $1.25/M input and $4.25/M output.
- **Architecture:** Meta model; exact parameterization not verified.

### Raw benchmarks found

Agent / tool use:

- Vals AI: Muse Spark 1.1 is #1 on Harvey's Legal Agent Benchmark at **20.00%**, with 1M context and up to 256K output (`https://www.vals.ai/models/meta_muse-spark-1.1`).
- Axios: Muse Spark 1.1 promises improvements in coding and longer tasks (`https://www.axios.com/2026/07/09/meta-ai-spark-model-update-developer`).
- Harvey's Legal Agent Benchmark: **20.00%**
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- Vals AI: #1 on MedScribe **88.89%** and #1 on TaxEval v2 **79.72%**.
- MedScribe: **88.89%**
- TaxEval v2: **79.72%**
- GPQA Diamond: **no verified public score found**

Coding:

- Public review says Muse Spark 1.1 was run through MCP agent stack, cross-application computer use, a real coding job, long-context stress test, and high-volume batch run; exact SWE rows not exposed.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Vals AI reports 1M context and 256K output; no independent MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Legal-agent benchmark leadership and MCP/cross-app testing support strong tool use.
- **Reasoning: 85/100.** Domain-specific highs in medical/tax/legal tasks support strong reasoning.
- **Context window: 95/100.** 1M context and 256K output are excellent.
- **Multimodal: 45/100.** Multimodal support not verified.
- **Coding: 82/100.** Coding/long-task improvements are reported, but exact coding rows are missing.
- **Cost efficiency: 90/100.** $1.25/$4.25 is very competitive.
- **Overall Score: 78/100.** Mean of the five quality dimensions; best fit is domain-heavy long-context work at a strong price.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
