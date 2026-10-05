# DeepSeek V4 Flash — findings by GPT 5.5

- Source: DeepSeek (`deepseek-v4-flash`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** Efficient DeepSeek V4-family MoE model optimized for very low-cost reasoning, coding agents, and local/hosted long-context use.
- **Provider / access:** DeepSeek API, third-party routers, and local/open-weight deployments discussed by the community.
- **Release / knowledge:** Public pricing and release discussion centered on mid-2026; cutoff not stated.
- **IDs:** `deepseek-v4-flash`, route aliases vary.
- **Context window:** Public reports and benchmark comparisons consistently cite **1M tokens**.
- **Modalities:** Text/code model; no verified native multimodal support for Flash.
- **Pricing (as of 2026-10-05):** Public user/provider reports cite roughly **$0.14/M input** and **$0.28/M output** on some providers, with off-peak/hourly/free-cache variants.
- **Architecture:** Public investment-report summary lists **284B total parameters** and **13B active**, native 1M context.

### Raw benchmarks found

Agent / tool use:

- Public YouTube and community benchmark notes reference DeepSeek agent harnesses and OpenCode harness tests.
- Reddit/LocalLLM comparison table places DeepSeek V4 Flash 0731 alongside Qwen3.8-Flash-Next and GLM-5.3-Flash with **1M** context.

Reasoning / knowledge:

- Public video summary reports **Artificial Analysis Intelligence Index 52**, with the complete AA suite costing about **$72** to run.

Coding:

- Public local coding reports are positive, including OpenCode harness demos; no exact SWE-bench/LiveCodeBench value was recovered.

Long context:

- Public reports cite **1M** context; local experiments mention very high VRAM needs at the full window.

### Normalized scores (1–100)

- **Tool use: 68/100.** Agent-harness and OpenCode reports are positive, but standard public tool rows are limited.
- **Reasoning: 64/100.** AA Intelligence Index 52 supports capable but not frontier reasoning.
- **Context window: 94/100.** 1M context earns near-top context credit.
- **Multimodal: 15/100.** No verified native multimodal support.
- **Coding: 72/100.** Community coding-agent evidence is strong for the price, capped by missing standard rows.
- **Cost efficiency: 98/100.** Extremely low reported pricing makes it one of the best value models when quality is sufficient.
- **Overall Score: 63/100.** Half-up mean of the five quality dimensions; best fit is ultra-cheap coding and long-context agent experimentation.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

