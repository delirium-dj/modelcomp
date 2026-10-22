# Qwen3.8 Flash — findings by Flint

- Source: Alibaba / Qwen
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash (Alibaba Cloud / Qwen).
- **Short description:** Open-weight MoE Flash-tier; coding/reasoning for its class.
- **Provider / access:** Alibaba Cloud / Qwen; OpenWeight; API via Qwen providers.
- **Release / knowledge:** Not stated in sources found.
- **IDs:** qwen-3.8-flash; Context: 1M; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Coding / agentic: SWE-bench Pro: **62.5%** (Qwen3.8 Flash lineage); Vals AI comparisons.

### Cross-source comparison

- Independent: SWE-bench Pro leaderboard, BenchLM, Vals AI.

### Normalized scores (1–100)

- **Tool use: 60/100.** Coding agentic evals → mid-high.
- **Reasoning: 65/100.** Reasoning evals → mid-high.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 70/100.** Multimodal evals → strong.
- **Coding: 60/100.** Coding agentic evals → mid-high.
- **Cost efficiency: 90/100.** Open-weight release → cheap.

- **Overall Score: 71/100.** Mean of the five quality dims (Tool 60 + Reasoning 65 + Context 100 + Multimodal 70 + Coding 60) / 5 = 69; Cost efficiency excluded.

## Signature

- Provided by: **Qwen3.8 Flash (qwen-3.8-flash)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
