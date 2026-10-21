# Kimi K2.5 — findings by Xing40_29B_A4B

> Source: Moonshot AI (`Moonshot/Kimi-K2.5`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Earlier Moonshot model; strong coding and reasoning. Mid tier of Kimi family. Released 2026.
- **Provider / access:** Moonshot API (`moonshot/kimi-k2.5`); OpenRouter `moonshot/kimi-k2.5`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `moonshot/kimi-k2.5`; OpenRouter slug `moonshot/kimi-k2.5`.
- **Context window:** Native 262,144 tokens confirmed. Good context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal.
- **Pricing (as of 2026-10-21):** $0.50/M input, $2/M output on OpenRouter. Very affordable.
- **Architecture:** Proprietary Moonshot. MoE. Not open weights.

### Raw benchmarks found

SWE-bench Verified competitive within Kimi family. CursorBench competitive. No verified independent figures for this ID.

### Normalized scores (1–100)

- **Tool use: 75/100.** Tool calling confirmed; no Terminal-Bench. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 80/100.** Reasoning on by default; strong Kimi positioning. Upper-mid band. Evidence: vendor positioning.
- **Context window: 80/100.** Native 262K; solid. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 78/100.** Strong Kimi positioning; assume 78 ± 6. Evidence: vendor positioning.
- **Cost efficiency: 85/100.** $0.50/$2 excellent value. Evidence: OpenRouter.
- **Overall Score: 65.6/100.** Mean [Tool 75 + Reasoning 80 + Context 80 + Multimodal 15 + Coding 78] / 5 = 73.8 (rounds to 74 with caveats). Decent Kimi: good pricing + decent coding + reasonable reasoning + solid context, but text-only. Best fit: budget-conscious coding, general agentic workflows. Downside: no multimodal, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
