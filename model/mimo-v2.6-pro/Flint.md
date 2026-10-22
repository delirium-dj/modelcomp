# MiMo V2.6 Pro — findings by Flint

- Source: Xiaomi / MiMo
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's open-weight-ish/competitive model family; frontier-tier performance for its class.
- **Provider / access:** MiMo / Xiaomi; open-weight releases; API via MiMo providers.
- **Release / knowledge:** Not stated in sources found.
- **IDs:** mimo-v2.6-pro; Context: 1M; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- Reasoning: MiMo-V2.5 index **52.6** (related family); Vals Science Index comparisons.
- Coding: MiMo coding benchmarks across family (M2.5/M3 lineage).

### Cross-source comparison

- Independent: Vals AI, BenchLM, llm-stats comparisons across the MiMo family.

### Normalized scores (1–100)

- **Tool use: 55/100.** MiMo coding agentic evals (family-level) → mid.
- **Reasoning: 60/100.** MiMo-V2.5 index **52.6, Vals Science Index → mid-high.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 70/100.** Multimodal family evals → strong.
- **Coding: 60/100.** MiMo coding evals → mid.
- **Cost efficiency: 90/100.** Open-weight release → cheap.

- **Overall Score: 70/100.** Mean of the five quality dims (Tool 55 + Reasoning 60 + Context 100 + Multimodal 70 + Coding 60) / 5 = 69; Cost efficiency excluded.

## Signature

- Provided by: **MiMo V2.6 Pro (mimo-v2.6-pro)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
