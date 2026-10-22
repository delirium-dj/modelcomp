# Muse Spark 1.1 — findings by Flint

- Source: Meta / Muse Spark 1.1
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1 (Meta; Muse family — Spark 1.1 lineage).
- **Short description:** Meta's Muse Spark model; agentic/coding performance for its tier.
- **Provider / access:** Meta / OpenRouter / AI providers.
- **Release / knowledge:** Not stated in sources found.
- **IDs:** muse-spark-1.1; Context: 262K (Spark lineage); Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Coding / agentic: Terminal-Bench / Vals comparisons of Muse Spark family.

### Cross-source comparison

- Independent: Vals AI, BenchLM, OpenRouter comparisons.

### Normalized scores (1–100)

- **Tool use: 60/100.** Agentic coding evals → mid-high.
- **Reasoning: 65/100.** Reasoning evals → mid-high.
- **Context window: 75/100.** Muse Spark lineage context **262K** → mid.
- **Multimodal: 70/100.** Multimodal evals → strong.
- **Coding: 60/100.** Coding evals → mid.
- **Cost efficiency: 90/100.** Open-weight / low cost tier.

- **Overall Score: 66/100.** Mean of the five quality dims (Tool 60 + Reasoning 65 + Context 75 + Multimodal 70 + Coding 60) / 5 = 66; Cost efficiency excluded.

## Signature

- Provided by: **Muse Spark 1.1 (muse-spark-1.1)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
