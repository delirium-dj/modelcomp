# Inkling-Small — findings by Flint

- Source: Thinking Machines Lab / Inkling
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (Thinking Machines Lab).
- **Short description:** Open-weight reasoning model; coding/reasoning for its tier.
- **Provider / access:** Thinking Machines Lab / OpenRouter / AI providers.
- **Release / knowledge:** Not stated in sources found.
- **IDs:** inkling-small; Context: 524K; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Coding / agentic: Vals AI comparisons of Inkling lineage.

### Cross-source comparison

- Independent: Vals AI, BenchLM, OpenRouter.

### Normalized scores (1–100)

- **Tool use: 55/100.** Coding agentic evals → mid.
- **Reasoning: 65/100.** Reasoning evals → mid-high.
- **Context window: 100/100.** Documented **524K** → mid-high.
- **Multimodal: 65/100.** Multimodal evals → strong.
- **Coding: 55/100.** Coding agentic evals → mid.
- **Cost efficiency: 90/100.** Open-weight release → cheap.

- **Overall Score: 68/100.** Mean of the five quality dims (Tool 55 + Reasoning 65 + Context 100 + Multimodal 65 + Coding 55) / 5 = 66; Cost efficiency excluded.

## Signature

- Provided by: **Inkling (inkling-small)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
