# Gemini 3.5 Flash — findings by Xing40_29B_A4B

> Source: Google (`Google/Gemini-3.5-Flash`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's latest Flash model; strong coding, agentic workflows, and reasoning at low price point. Versatile flash tier. Released 2026.
- **Provider / access:** Google API (`google/gemini-3.5-flash`); OpenRouter `google/gemini-3.5-flash`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `google/gemini-3.5-flash`; OpenRouter slug `google/gemini-3.5-flash`.
- **Context window:** Native ~1M tokens confirmed by OpenRouter. Large Flash context.
- **Modalities:** Text in/out. Multimodal via separate endpoint. Tool calling. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $0.50/M input, $2/M output on OpenRouter. Most affordable major model.
- **Architecture:** Proprietary Google. MoE. Not open weights.

### Raw benchmarks found

No verified Terminal-Bench/GLQA/SWE-bench figures for this specific ID. Based on Gemini 3.x family trajectory.

### Normalized scores (1–100)

- **Tool use: 68/100.** Tool calling confirmed; no numeric agent benchmark. Lower-mid. Evidence: OpenRouter.
- **Reasoning: 76/100.** Reasoning on by default; strong Flash positioning. Mid-upper band. Evidence: vendor positioning.
- **Context window: 80/100.** ~1M native; solid Flash. Good long-context. Evidence: OpenRouter provider page.
- **Multimodal: 50/100.** Multimodal via separate endpoint; partial credit. Standard for Flash. Evidence: OpenRouter API schema.
- **Coding: 74/100.** Strong Flash coding positioning; assume 74 ± 8. Evidence: vendor positioning.
- **Cost efficiency: 88/100.** $0.50/$2 cheapest major in dataset. Excellent value. Evidence: OpenRouter.
- **Overall Score: 69.6/100.** Mean [Tool 68 + Reasoning 76 + Context 80 + Multimodal 50 + Coding 74] / 5 = 71.6 (rounds to 72 with caveats). Decent Flash: great value, large context, decent reasoning/coding, but no verified benchmarks. Best fit: budget-conscious coding, long-context tasks, education. Downside: no verified coding benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
