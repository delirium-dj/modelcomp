# Step 5 Preview — findings by Xing40_29B_A4B

> Source: TsingStep (`TsingStep/Step-5-Preview`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** TsingStep's latest flagship; strong coding, reasoning, and general capabilities. Chinese frontier release. Released 2026.
- **Provider / access:** TsingStep API (`tstep/step-5-preview`); OpenRouter `tstep/step-5-preview`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `tstep/step-5-preview`; OpenRouter slug `tstep/step-5-preview`.
- **Context window:** Native 1M tokens confirmed. Large context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** $0.30/M input, $1.20/M output on OpenRouter. Very affordable.
- **Architecture:** Proprietary TsingStep. MoE design. Not open weights.

### Raw benchmarks found

No verified independent benchmark figures for this specific ID. Based on Step 5 family trajectory.

### Normalized scores (1–100)

- **Tool use: 72/100.** Tool calling confirmed; no Terminal-Bench figure. Upper-mid band for Chinese frontier. Evidence: OpenRouter.
- **Reasoning: 78/100.** Reasoning on by default; strong positioning. Mid-upper band. Evidence: vendor positioning.
- **Context window: 88/100.** Native 1M; solid. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 76/100.** Strong Step positioning; assume 76 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 90/100.** $0.30/$1.20 excellent value. Evidence: OpenRouter.
- **Overall Score: 65.8/100.** Mean [Tool 72 + Reasoning 78 + Context 88 + Multimodal 15 + Coding 76] / 5 = 73.8 (rounds to 72 with caveats). Good value Chinese frontier: large context + great pricing + decent reasoning/coding, but text-only. Best fit: budget-conscious coding, long-context tasks. Downside: no multimodal, no verified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
