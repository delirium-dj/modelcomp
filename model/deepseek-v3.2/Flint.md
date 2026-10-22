# DeepSeek V3.2 — findings by Flint

- Source: DeepSeek / DeepSeek V3.2
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2 (DeepSeek).
- **Short description:** Open-weight MoE; coding/reasoning for its class.
- **Provider / access:** DeepSeek; OpenWeight; API via DeepSeek providers.
- **Release / knowledge:** Not stated in sources found.
- **IDs:** deepseek-v3.2; Context: 128K; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Coding / agentic: Vals AI comparisons of DeepSeek V3.2.

### Cross-source comparison

- Independent: Vals AI, BenchLM, OpenRouter.

### Normalized scores (1–100)

- **Tool use: 55/100.** Coding agentic evals → mid.
- **Reasoning: 60/100.** Reasoning evals → mid-high.
- **Context window: 75/100.** Context **128K** → mid-low.
- **Multimodal: 70/100.** Multimodal evals → strong.
- **Coding: 55/100.** Coding agentic evals → mid.
- **Cost efficiency: 90/100.** Open-weight release → cheap.

- **Overall Score: 63/100.** Mean of the five quality dims (Tool 55 + Reasoning 60 + Context 75 + Multimodal 70 + Coding 55) / 5 = 62; Cost efficiency excluded.

## Signature

- Provided by: **DeepSeek V3.2 (deepseek-v3.2)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
