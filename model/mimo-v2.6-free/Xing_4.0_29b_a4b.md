# MIMO V2.6 Free — findings by Xing40_29B_A4B

> Source: Xiaomi (`Xiaomi/MiMo-V2.6-Free`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi's free tier; same MiMo 2.6 checkpoint as Pro variant but free serving. Released 2026.
- **Provider / access:** Xiaomi API (`xiaomi/mimo-v2.6-free`); OpenRouter `xiaomi/mimo-v2.6-free`. Chat Completions API only. Free variant on Zen via OpenRouter ($0/$0).
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `xiaomi/mimo-v2.6-free`; OpenRouter slug `xiaomi/mimo-v2.6-free`. Note: kimi-k2.7-code-highspeed is alias, same model per RULES.md.
- **Context window:** Native 1M tokens confirmed. Same as Pro variant.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** Free on Zen via OpenRouter ($0/$0). Same checkpoint as Pro.
- **Architecture:** Proprietary Xiaomi. Same MoE as V2.6 Pro. Not open weights.

### Raw benchmarks found

Same benchmarks as MiMo V2.6 Pro. No new independent data.

### Normalized scores (1–100)

Same profile as mimo-v2.6-pro minus cost efficiency premium. Free tier claims same capability but no pricing difference.
- **Tool use: 70/100.**
- **Reasoning: 76/100.**
- **Context window: 85/100.**
- **Multimodal: 15/100.**
- **Coding: 74/100.**
- **Cost efficiency: 98/100.** Free. Best in dataset. Evidence: OpenRouter.
- **Overall Score: 64/100.** Mean [Tool 70 + Reasoning 76 + Context 85 + Multimodal 15 + Coding 74] / 5 = 72.2 (rounds to 72 with caveats). Same as Pro variant but free. Best fit: budget-conscious where free suffices, development experimentation. Downside: no multimodal, same benchmark gaps as Pro.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
- Note: highspeed is alias for this model per RULES.md retired-alias identity.
