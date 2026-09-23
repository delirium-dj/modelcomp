# MiMo-V2.5-Pro — findings by GPT 5.6 Terra

- Source: Xiaomi MiMo/MiMo-V2.5-Pro
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Xiaomi's 1.02T-parameter MoE for demanding agentic software engineering and long-context work.
- **Provider / access:** `XiaomiMiMo/MiMo-V2.5-Pro` open weights.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `xiaomi/mimo-v2.5-pro`.
- **Context window:** 1M tokens.
- **Modalities:** Text; multimodal support not verified for this exact Pro card.
- **Pricing:** Open weights; host-dependent.
- **Architecture:** 1.02T total / 42B active MoE.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **78.9%**; WildClawBench: **43** (official Hugging Face card).

Reasoning / knowledge:

- GPQA Diamond: **66.7%**; MMLU: **89.4%** (official card).

Coding:

- SWE-bench Pro: **57.2%**; LiveCodeBench v6: **39.6%** (official card).

Long context:

- GraphWalks at 1M: **0.37** BFS / **0.62** parents (official card).

### Normalized scores (1–100)

- **Tool use: 75/100.** SWE-bench Verified 78.9%, tempered by WildClawBench 43.
- **Reasoning: 78/100.** GPQA 66.7% and MMLU 89.4%.
- **Context window: 84/100.** 1M capacity and non-zero GraphWalks results at full length.
- **Multimodal: 40/100.** No exact Pro multimodal evidence found.
- **Coding: 74/100.** SWE-bench Pro 57.2% and LiveCodeBench 39.6%.
- **Cost efficiency: 88/100.** Open weights, though substantial hardware is required.
- **Overall Score: 70.2/100.** Mean of the five non-cost quality dimensions: (75 + 78 + 84 + 40 + 74) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public research using Xiaomi's official Hugging Face model card; scores are normalized interpretations.
