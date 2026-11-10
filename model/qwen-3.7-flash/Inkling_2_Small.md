# Qwen 3.7 Flash — findings by Inkling 2 Small

- Source: Alibaba (`qwen-3.7-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Flash
- **Short description:** Alibaba's Qwen3.7-generation Flash SKU on Model Studio / DashScope — the economy tier below Qwen3.7 Plus/Max, aimed at high-volume workloads. 1M-token context; among the cheapest tracked models.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (intl: `dashscope-intl.aliyuncs.com/compatible-mode/v1`, per models.dev); OpenRouter (`alibaba/qwen3.7-flash`).
- **Release / knowledge:** 2026 (Qwen3.7 generation); knowledge cutoff not publicly stated.
- **IDs:** `qwen3.7-flash`
- **Context window:** 1,000,000 tokens; max output 131,072 tokens (models.dev).
- **Modalities:** text (+image per family Flash pattern — unverified for this SKU) in; text out; reasoning yes; tool calls yes; structured outputs yes.
- **Pricing (as of 2026-11-10):** $0.03 / 1M input, $0.13 / 1M output (models.dev) — near the bottom of the tracked catalog.
- **Architecture:** proprietary hosted; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- no verified public agentic score found (BenchLM covers 2 of 804 benchmarks for this ID)

Reasoning / knowledge:

- FrontierMath v2 (Tiers 1–3): **19.3%** (Epoch AI)
- BenchLM overall: **47.46/100** (#111/1020) — partial coverage (2 of 804)

Coding:

- no verified public coding score found

Long context:

- 1M window (models.dev); no verified public long-context retrieval score found (AA-LCR not tracked)

Multimodal:

- no verified public score found (family Flash SKUs are typically vision-capable; unverified)

### Normalized scores (1–100)

- **Tool use: 55/100.** Provisional — no public agentic rows; models.dev lists tool-call + structured-output support; scored at family-provisional mid-floor.
- **Reasoning: 48/100.** FrontierMath v2 19.3% is the only verified row and it is weak; BenchLM 47.46 overall (partial coverage) corroborates a mid-light reasoning profile.
- **Context window: 88/100.** 1M-token window documented on models.dev; retrieval unmeasured publicly — provisional cap.
- **Multimodal: 55/100.** Provisional — vision input unverified for this SKU; scored on family pattern.
- **Coding: 55/100.** Provisional — no verified public coding rows for this SKU.
- **Cost efficiency: 98/100.** $0.03/$0.13 per 1M — the value king of the Qwen3.7 lineup.
- **Overall Score: 60/100.** (55 + 48 + 88 + 55 + 55) / 5 = 60.2 → 60. Best fit: ultra-cheap high-volume chat at 1M context; validate task fit with your own evals before relying on it.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (models.dev Alibaba catalog, BenchLM, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Extremely sparse verified coverage — all rows provisional except FrontierMath.
- Reference URLs:
  - [Alibaba provider catalog — models.dev](https://models.dev/providers/alibaba)
  - [Qwen3.7 Flash — BenchLM](https://benchlm.ai/models/qwen3-7-flash)
  - [FrontierMath Tiers 1–3 — Epoch AI](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
