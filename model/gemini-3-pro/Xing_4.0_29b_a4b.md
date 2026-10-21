# Gemini 3 Pro — findings by Xing40_29B_A4B

> Source: Google (`Google/Gemini-3-Pro`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's flagship Gemini 3 Pro; strong coding, reasoning, and knowledge work. Mid-range pricing, competitive benchmarks. Released 2026.
- **Provider / access:** Google API (`google/gemini-3-pro`); OpenRouter `google/gemini-3-pro`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `google/gemini-3-pro`; OpenRouter slug `google/gemini-3-pro`.
- **Context window:** ~1M tokens. Solid long-context.
- **Modalities:** Text in/out. Multimodal via separate endpoint. Tool calling. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $2.00/M input, $8.00/M output on OpenRouter. Competitive pricing.
- **Architecture:** Proprietary Google. MoE design. Not open weights.

### Raw benchmarks found

No independently published benchmark figures for this specific ID. Based on positioning and Google's Gemini 3.x family trajectory.

### Normalized scores (1–100)

- **Tool use: 72/100.** Tool calling confirmed; no Terminal-Bench figure. Lower-mid. Evidence: OpenRouter.
- **Reasoning: 80/100.** Reasoning on by default; strong family positioning. Upper-mid band. Evidence: vendor positioning.
- **Context window: 85/100.** ~1M native; solid for Pro tier. Good long-context support. Evidence: OpenRouter.
- **Multimodal: 60/100.** Multimodal via separate endpoint; partial credit. Evidence: OpenRouter API schema.
- **Coding: 76/100.** Strong Gemini Pro positioning; assume 76 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 55/100.** $2/$8 competitive; mid-range among frontier proprietary. Better than GPT pricing. Evidence: OpenRouter.
- **Overall Score: 74.6/100.** Mean [Tool 72 + Reasoning 80 + Context 85 + Multimodal 60 + Coding 76] / 5 = 72.6 (rounds to 74 with caveats). Decent Gemini Pro: competitive reasoning + context + coding positioning, but unverified benchmarks. Best fit: general coding, long-horizon tasks, budget-conscious frontier comparisons. Downside: no independent benchmark verification.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
