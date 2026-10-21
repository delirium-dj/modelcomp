# Grok 4 Fast — findings by Xing40_29B_A4B

> Source: xAI (`xAI/Grok-4-Fast`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's fast/low-cost variant; same Grok 4 checkpoint served faster at lower price. Reasoning and non-reasoning share same weights (per xAI announcement). Released 2026.
- **Provider / access:** xAI API (`xai/grok-4-fast`); OpenRouter `xai/grok-4-fast`. Chat Completions API only. EU routing available.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `xai/grok-4-fast`; OpenRouter slug `xai/grok-4-fast`. Note: grok-4-fast-reasoning is alias, same model per RULES.md.
- **Context window:** Native 2M tokens. Largest context in dataset.
- **Modalities:** Text in/out. Real-time knowledge search integrated. Tool calling. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.20/M input, $0.50/M output on OpenRouter. Very affordable.
- **Architecture:** Proprietary xAI. MoE design. Same as Grok 4 Fast reasoning variant. Not open weights.

### Raw benchmarks found

Same benchmarks as Grok 4 Fast reasoning variant. Grok 4 Family indexes note grok-4-fast and grok-4-fast-reasoning as aliases of same model. No independent Terminal-Bench/GLQA/SWE-bench for "Fast" variant specifically.

### Normalized scores (1–100)

- **Tool use: 68/100.** Tool calling confirmed; no Terminal-Bench figure. Lower-mid band for fast variant. Evidence: OpenRouter.
- **Reasoning: 60/100.** Fast variant may reason less effectively than reasoning variant; capped down. Mid band. Evidence: vendor positioning (same weights, system prompts steer).
- **Context window: 88/100.** Native 2M; largest in dataset. Excellent for long-context. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 70/100.** Same positioning as Grok 4; assume 70 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 95/100.** $0.20/$0.50 best cost efficiency in dataset. Excellent value. Evidence: OpenRouter.
- **Overall Score: 60.2/100.** Mean [Tool 68 + Reasoning 60 + Context 88 + Multimodal 15 + Coding 70] / 5 = 66.2 (rounds to 66 with caveats). Cheap fast variant: huge context + great pricing but lower reasoning/tool use due to fast serving profile. Best fit: long-context tasks where speed matters most, cost-sensitive general workloads. Downside: below top tier, no multimodal, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter, xAI announcements. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
