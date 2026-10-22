# DeepSeek V4 Pro — findings by Flint

- Source: DeepSeek / V4 Pro
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (and V4-Pro-Max lineage).
- **Short description:** Open-weight MoE (1.6T params); frontier-tier reasoning/coding for its class; OpenWeight release.
- **Provider / access:** DeepSeek; OpenWeight; API via DeepSeek providers.
- **Release / knowledge:** Not stated in sources found.
- **IDs:** deepseek-v4-pro; Context: 1M; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- SWE-bench Pro: **55.4%** (DeepSeek-V4-Pro-Max); SWE-bench Verified: **~80%** (family).
- Reasoning: DeepSeek-V4-Pro-Max; Vals Science Index.

### Cross-source comparison

- Independent: SWE-bench Pro leaderboard, BenchLM, Vals AI comparisons.

### Normalized scores (1–100)

- **Tool use: 55/100.** SWE-bench Pro **55.4 → mid.
- **Reasoning: 65/100.** DeepSeek-V4-Pro-Max reasoning evals → mid-high.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 70/100.** Multimodal evals → strong.
- **Coding: 55/100.** SWE-bench Pro **55.4 → mid.
- **Cost efficiency: 90/100.** Open-weight release → cheap.

- **Overall Score: 69/100.** Mean of the five quality dims (Tool 55 + Reasoning 65 + Context 100 + Multimodal 70 + Coding 55) / 5 = 68; Cost efficiency excluded.

## Signature

- Provided by: **DeepSeek V4 Pro (deepseek-v4-pro)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
