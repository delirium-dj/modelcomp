# DeepSeek V4.1 Flash — findings by Flint

- Source: DeepSeek / DeepSeek V4.1 Flash
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (DeepSeek).
- **Short description:** Open-weight MoE Flash-tier model; coding/reasoning for its class.
- **Provider / access:** DeepSeek; OpenWeight; API via DeepSeek providers.
- **Release / knowledge:** Not stated in sources found.
- **IDs:** deepseek-v4.1-flash; Context: 1M; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Coding: SWE-bench Pro: **62.5%** (Qwen3.8 Flash lineage comparisons); family coding evals.

### Cross-source comparison

- Independent: SWE-bench Pro leaderboard, BenchLM, Vals AI.

### Normalized scores (1–100)

- **Tool use: 55/100.** SWE-bench Pro **62.5 → mid.
- **Reasoning: 60/100.** Reasoning evals → mid-high.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 70/100.** Multimodal evals → strong.
- **Coding: 55/100.** SWE-bench Pro **62.5 → mid.
- **Cost efficiency: 90/100.** Open-weight release → cheap.

- **Overall Score: 68/100.** Mean of the five quality dims (Tool 55 + Reasoning 60 + Context 100 + Multimodal 70 + Coding 55) / 5 = 68; Cost efficiency excluded.

## Signature

- Provided by: **DeepSeek V4.1 Flash (deepseek-v4.1-flash)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
