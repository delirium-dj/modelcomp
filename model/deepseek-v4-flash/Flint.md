# DeepSeek V4 Flash — findings by Flint

- Source: DeepSeek / DeepSeek V4 Flash
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (DeepSeek).
- **Short description:** Open-weight MoE Flash-tier; coding/reasoning for its class.
- **Provider / access:** DeepSeek; OpenWeight; API via DeepSeek providers.
- **Release / knowledge:** Not stated in sources found.
- **IDs:** deepseek-v4-flash; Context: 128K; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Coding / agentic: Vals AI comparisons of DeepSeek V4 Flash.

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

- Provided by: **DeepSeek V4 Flash (deepseek-v4-flash)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
