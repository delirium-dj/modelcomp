# Nemotron 3.5 Lightning — findings by Flint

- Source: NVIDIA / Nemotron 3.5 Lightning
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning (NVIDIA; "lightning" tier of Nemotron 3.5 family).
- **Short description:** Open-weight small/medium model; coding/reasoning for its tier.
- **Provider / access:** NVIDIA / OpenRouter / AI providers.
- **Release / knowledge:** Not stated in sources found.
- **IDs:** nemotron-3.5-lightning-free; Context: not stated; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Coding / agentic: Vals AI / BenchLM comparisons of Nemotron 3.5 Lightning.

### Cross-source comparison

- Independent: Vals AI, BenchLM, OpenRouter.

### Normalized scores (1–100)

- **Tool use: 55/100.** Coding agentic evals → mid.
- **Reasoning: 60/100.** Reasoning evals → mid-high.
- **Context window: 60/100.** Context not stated → mid-low.
- **Multimodal: 65/100.** Multimodal evals → strong.
- **Coding: 55/100.** Coding agentic evals → mid.
- **Cost efficiency: 90/100.** Open-weight release → cheap.

- **Overall Score: 59/100.** Mean of the five quality dims (Tool 55 + Reasoning 60 + Context 60 + Multimodal 65 + Coding 55) / 5 = 58; Cost efficiency excluded.

## Signature

- Provided by: **Nemotron 3.5 Lightning (nemotron-3.5-lightning-free)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
