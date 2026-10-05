# DeepSeek V4 Pro — findings by GPT 5.5

- Source: DeepSeek/DeepSeek V4 Pro
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek V4 Pro is DeepSeek's high-capability V4 MoE model, designed for strong reasoning, coding, long-context work, and exceptional price/performance.
- **Provider / access:** DeepSeek API and third-party routes.
- **Release / knowledge:** V4 family launched in 2026, with Pro 0813 GA and pricing changes in August 2026.
- **IDs:** `deepseek/deepseek-v4-pro`
- **Context window:** 1M tokens on DeepSeek/provider routes.
- **Modalities:** Public provider pages often list text input/output for Pro; Vision is a separate Flash Vision route.
- **Pricing (as of 2026-10-05):** Live provider prices vary; public index reports about $0.435/M input and $0.870/M output for one route, while DeepSeek API has time-of-day/peak-off-peak pricing.
- **Architecture:** V4-Pro is reported as 1.6T total / 49B active MoE.

### Raw benchmarks found

Agent / tool use:

- DeepSeek pricing docs: list DeepSeek-V4-Pro-0813 and 1M context, with V4 Flash legacy routes retired to V4.1 Flash (`https://api-docs.deepseek.com/quick_start/pricing/`).
- Morphi DeepSeek V4 overview: reports V4-Pro-Max posts **80.6% SWE-bench Verified** and notes DeepSeek does not list a separate Pro-Max API price (`https://morphi.vercel.app/deepseek-v4`).
- LLM Index: lists DeepSeek V4 Pro at $0.435/M input and $0.870/M output from live provider data (`https://llm-index.com/model/deepseek-deepseek-v4-pro`).
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- DeepSeek V4 technical-report coverage describes V4-Pro as a 1.6T MoE with 1M context and very strong standard reasoning benchmarks.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- SWE-bench Verified: **80.6%** reported for V4-Pro-Max benchmark configuration.
- Private benchmark report: DeepSeek V4 Pro scored **89.1** across strategic reasoning/advisory tests, but the suite is domain-specific and not a coding benchmark.
- LiveCodeBench: **no verified public score found**

Long context:

- 1M context documented; no independent MRCR/RULER row found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong V4 Pro agent/coding positioning and 1M context, capped by missing Terminal-Bench row.
- **Reasoning: 88/100.** Strong benchmark reputation, though exact GPQA/HLE rows not found.
- **Context window: 94/100.** 1M context is excellent.
- **Multimodal: 45/100.** Pro route is primarily text in available evidence; vision is separate.
- **Coding: 91/100.** SWE-bench Verified 80.6% is excellent.
- **Cost efficiency: 96/100.** Very low token pricing for this capability tier.
- **Overall Score: 81/100.** Mean of the five quality dimensions; best fit is low-cost high-end coding and long-context text agents.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
