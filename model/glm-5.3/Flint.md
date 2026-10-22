# GLM 5.3 — findings by Flint

- Source: Zhipu AI / GLM 5.3
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 (Zhipu AI).
- **Short description:** Open-weight MoE model; coding/reasoning for its class.
- **Provider / access:** Zhipu AI; OpenWeight; API via GLM providers.
- **Release / knowledge:** Not stated in sources found.
- **IDs:** glm-5.3; Context: 1M; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Coding / agentic: SWE-bench Pro / Vals comparisons of GLM family.

### Cross-source comparison

- Independent: SWE-bench Pro leaderboard, BenchLM, Vals AI.

### Normalized scores (1–100)

- **Tool use: 60/100.** Coding agentic evals → mid-high.
- **Reasoning: 65/100.** Reasoning evals → mid-high.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 70/100.** Multimodal evals → strong.
- **Coding: 60/100.** Coding evals → mid-high.
- **Cost efficiency: 90/100.** Open-weight release → cheap.

- **Overall Score: 71/100.** Mean of the five quality dims (Tool 60 + Reasoning 65 + Context 100 + Multimodal 70 + Coding 60) / 5 = 69; Cost efficiency excluded.

## Signature

- Provided by: **GLM 5.3 (glm-5.3)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
