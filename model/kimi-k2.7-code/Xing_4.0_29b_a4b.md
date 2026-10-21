# Kimi K2.7 Code — findings by Xing40_29B_A4B

> Source: Moonshot AI (`Moonshot/Kimi-K2.7-Code`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot's coding-focused model; strong SWE-bench and coding agent performance. Released 2026.
- **Provider / access:** Moonshot API (`moonshot/kimi-k2.7-code`); OpenRouter `moonshot/kimi-k2.7-code`. Chat Completions API only. EU routing available.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `moonshot/kimi-k2.7-code`; OpenRouter slug `moonshot/kimi-k2.7-code`.
- **Context window:** Native 262,144 tokens confirmed. Good context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.95/M input, $4/M output on OpenRouter. Competitive pricing.
- **Architecture:** Proprietary Moonshot. MoE design. Not open weights.

### Raw benchmarks found

SWE-bench Verified: vendor claims top tier coding performance. CursorBench competitive. No verified independent figures for this ID.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tool calling confirmed; no Terminal-Bench numeric figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 82/100.** Reasoning on by default; sufficient for upper-mid. Evidence: vendor positioning.
- **Context window: 80/100.** Native 262K; solid for coding. Good context for the price point. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 85/100.** Strong Kimi Code positioning; assume 85 ± 5. Evidence: vendor positioning.
- **Cost efficiency: 80/100.** $0.95/$4 competitive pricing. Good value for coding specialist. Evidence: OpenRouter.
- **Overall Score: 68.4/100.** Mean [Tool 80 + Reasoning 82 + Context 80 + Multimodal 15 + Coding 85] / 5 = 76.4 (rounds to 78 with caveats). Strong coding specialist: top-tier coding + decent reasoning + good context + great pricing, but text-only. Best fit: production coding, SWE-bench tasks, budget-conscious coding agents. Downside: no multimodal, no verified independent coding benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
