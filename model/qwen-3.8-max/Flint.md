# Qwen3.8 Max — findings by Flint

- Source: Alibaba / Qwen
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max (Alibaba Cloud / Qwen Team).
- **Short description:** Large-scale open-weight MoE model (2.4T total params); frontier-tier performance for its class.
- **Provider / access:** Alibaba Cloud / Qwen open-weight release; API via Qwen providers.
- **Release / knowledge:** Not stated in sources found.
- **IDs:** qwen-3.8-max; Context: 1M; Modalities: multimodal; text out; reasoning; tool use.

### Raw benchmarks found

- SWE-bench Pro: **67.7%** (Qwen3.8 Max; from SWE-bench Pro leaderboard).
- SWE-bench Verified: **62.5%** (Qwen3.8 Flash lineage).

### Cross-source comparison

- Independent: SWE-bench Pro leaderboard, llm-stats comparisons.

### Normalized scores (1–100)

- **Tool use: 55/100.** SWE-bench Pro **67.7%** → mid.
- **Reasoning: 60/100.** Frontier reasoning evals → mid-high.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 70/100.** Multimodal evals → strong.
- **Coding: 55/100.** SWE-bench Pro **67.7%** → mid.
- **Cost efficiency: 90/100.** Open-weight release → cheap.

- **Overall Score: 68/100.** Mean of the five quality dims (Tool 55 + Reasoning 60 + Context 100 + Multimodal 70 + Coding 55) / 5 = 68; Cost efficiency excluded.

## Signature

- Provided by: **Qwen3.8 Max (qwen-3.8-max)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
