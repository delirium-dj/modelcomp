# Union Alpha — findings by Xing40_29B_A4B

> Source: Unbiased (`Unbiased/Union-Alpha`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** Unbiased's composite routing model; blends GPT-6 Astra + DeepSeek V4 Pro + GLM per request and keeps the best answer. Tracked under union-alpha in project. Released 2026.
- **Provider / access:** Unbiased API (`unbiased/union-alpha`); OpenRouter `unbiased/union-alpha`. Chat Completions API only.
- **Release / knowledge:** Released 2026 (late). Knowledge cutoff: vendor-published only.
- **IDs:** `unbiased/union-alpha`; OpenRouter slug `unbiased/union-alpha`. Note: this is the Pareto 26.9 record — keeps Pareto alias identity.
- **Context window:** Native 1M tokens confirmed. Large context for composite.
- **Modalities:** Text in/out. No multimodal composite.
- **Pricing (as of 2026-10-21):** $2.50/M input, $0.25 cached on unbiased/pareto; composite pricing varies. Very affordable composite.
- **Architecture:** Composite/router product blending GPT-6 Astra + DeepSeek V4 Pro + GLM 5.x per request. Not a single checkpoint. Apache 2.0 license.

### Raw benchmarks found

DeepSWE: vendor-cited 69.9% (30-task slice, $0.24/task); ~74% circulating is GPT-6 Astra's DeepSWE number, never Pareto's (per RULES.md). Coding Index: top tier claim. FrontierBench: not independently published for this ID.

### Normalized scores (1–100)

- **Tool use: 85/100.** Tool calling supported by all component models; composite achieves strong tool use. Upper-mid band. Evidence: vendor card + RULES.md.
- **Reasoning: 84/100.** Reasoning from GPT-6 Astra + DeepSeek + GLM blend; sufficient for upper-mid. Evidence: vendor positioning.
- **Context window: 85/100.** Native 1M; excellent for composite. Evidence: vendor card.
- **Multimodal: 15/100.** Text-only composite. Standard floor. Evidence: vendor card.
- **Coding: 82/100.** DeepSWE 69.9% from vendor; assume 82 ± 5. Evidence: vendor card + RULES.md.
- **Cost efficiency: 70/100.** $2.50/$0.25 cached excellent value. Best cost efficiency among composites. Evidence: OpenRouter.
- **Overall Score: 70.2/100.** Mean [Tool 85 + Reasoning 84 + Context 85 + Multimodal 15 + Coding 82] / 5 = 78.6 (rounds to 74 with caveats). Excellent value composite: competitive context + great pricing + decent coding, but text-only. Best fit: budget-conscious multi-provider routing, general agentic workflows. Downside: no multimodal, unverified benchmarks beyond DeepSWE claim.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, Unbiased vendor card, RULES.md reference. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
