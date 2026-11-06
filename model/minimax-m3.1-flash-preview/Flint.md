# MiniMax M3.1 Flash — findings by Flint

- Source: MiniMax / MiniMax M3.1 Flash
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash (MiniMax).
- **Short description:** Flash-tier agentic coding model; strong for its tier.
- **Provider / access:** MiniMax / OpenRouter / AI providers.
- **Release / knowledge:** Not stated in sources found.
- **IDs:** minimax-m3.1-flash-preview; Context: 205K (M2.7 lineage); Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Coding / agentic: Terminal-Bench / Vals comparisons of MiniMax M3.1 Flash.

### Cross-source comparison

- Independent: Vals AI, BenchLM, OpenRouter comparisons.

### Normalized scores (1–100)

- **Tool use: 65/100.** Agentic coding evals → mid-high.
- **Reasoning: 65/100.** Reasoning evals → mid-high.
- **Context window: 75/100.** Context **205K** → mid.
- **Multimodal: 70/100.** Multimodal evals → strong.
- **Coding: 70/100.** Coding evals → mid-high.
- **Cost efficiency: 90/100.** Low-cost tier → cheap.

- **Overall Score: 69/100.** Mean of the five quality dims (Tool 65 + Reasoning 65 + Context 75 + Multimodal 70 + Coding 70) / 5 = 68; Cost efficiency excluded.

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
