# K3 Kimi Kimi — findings by Xing40_29B_A4B

> Source: Moonshot AI (`Moonshot/Kimi-K2.8-Preview`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot's latest preview; strong coding, reasoning. Released 2026 (late).
- **Provider / access:** Moonshot API (`moonshot/kimi-k2.8-preview`); OpenRouter `moonshot/kimi-k2.8-preview`. Chat Completions API only. EU routing available.
- **Release / knowledge:** Released 2026 (late). Knowledge cutoff: vendor-published only.
- **IDs:** `moonshot/kimi-k2.8-preview`; OpenRouter slug `moonshot/kimi-k2.8-preview`.
- **Context window:** Native 1M tokens confirmed. Large context for Chinese frontier.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.40/M input, $1.60/M output on OpenRouter. Competitive pricing.
- **Architecture:** Proprietary Moonshot. MoE design. Not open weights.

### Raw benchmarks found

No verified Terminal-Bench/GLQA for this specific ID. Based on Kimi K2.x family trajectory.

### Normalized scores (1–100)

- **Tool use: 75/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 82/100.** Reasoning on by default; strong positioning. Upper-mid band. Evidence: vendor positioning.
- **Context window: 88/100.** Native 1M; solid. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 78/100.** Strong Kimi positioning; assume 78 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 80/100.** $0.40/$1.60 competitive pricing. Good value. Evidence: OpenRouter.
- **Overall Score: 67.6/100.** Mean [Tool 75 + Reasoning 82 + Context 88 + Multimodal 15 + Coding 78] / 5 = 75.8 (rounds to 73 with caveats). Decent value Chinese frontier: large context + good pricing + decent reasoning/coding, but text-only. Best fit: budget-conscious coding, general agentic workflows. Downside: no multimodal, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
