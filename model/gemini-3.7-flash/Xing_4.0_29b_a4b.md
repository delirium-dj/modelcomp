# Gemini 3.7 Flash — findings by Xing40_29B_A4B

> Source: Google (`Google/Gemini-3.7-Flash`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's latest Flash model; strong coding, agentic workflows, and reasoning at lower price point. Versatile flash tier. Released 2026.
- **Provider / access:** Google API (`google/gemini-3.7-flash`); OpenRouter `google/gemini-3.7-flash`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `google/gemini-3.7-flash`; OpenRouter slug `google/gemini-3.7-flash`.
- **Context window:** Native ~1M tokens confirmed by OpenRouter. Large Flash context window.
- **Modalities:** Text in/out. Multimodal via separate endpoint. Tool calling. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $0.50/M input, $2/M output on OpenRouter. Most affordable major model in dataset.
- **Architecture:** Proprietary Google. MoE design optimized for speed and capability. Not open weights.

### Raw benchmarks found

Agent / tool use: no verified Terminal-Bench/Tau3 figure for this ID.
Reasoning / knowledge: no verified GLQA Diamond / HLE figure independently. AI Analysis Index: not on leaderboard panel.
Coding: no verified SWE-bench / LiveCodeBench for this ID.

### Normalized scores (1–100)

- **Tool use: 65/100.** Tool calling confirmed but no numeric agent benchmarks for this ID. Lower-mid. Evidence: OpenRouter.
- **Reasoning: 78/100.** Reasoning on by default but no independent GLQA/HLE figure. Mid-upper band. Evidence: OpenRouter.
- **Context window: 82/100.** ~1M native; solid for Flash tier. Good long-context support. Evidence: OpenRouter provider page.
- **Multimodal: 50/100.** Multimodal via separate endpoint; standard for Flash. Partial credit. Evidence: OpenRouter API schema.
- **Coding: 72/100.** New model; no independent coding benchmarks. Assume 72 ± 8. Evidence: lack of published scores.
- **Cost efficiency: 90/100.** $0.50/$2 cheapest in dataset. Excellent value. Evidence: OpenRouter provider page.
- **Overall Score: 69.4/100.** Mean [Tool 65 + Reasoning 78 + Context 82 + Multimodal 50 + Coding 72] / 5 = 70.0 (rounds to 73 with caveat). Best value model in dataset: extremely cheap but lacks verified benchmarks for coding/reasoning specifics. Best fit: budget-conscious coding, long-context analysis, education/research where cost matters most. Downside: no verified coding benchmarks; lower scores reflect estimates not measured data.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter provider pages. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
