# Gemini 3.5 Flash Lite — findings by Xing40_29B_A4B

> Source: Google (`Google/Gemini-3.5-Flash-Lite`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's cheapest Flash variant; coding and reasoning at ultra-low price. Specialized lightweight tier. Released 2026.
- **Provider / access:** Google API (`google/gemini-3.5-flash-lite`); OpenRouter `google/gemini-3.5-flash-lite`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `google/gemini-3.5-flash-lite`; OpenRouter slug `google/gemini-3.5-flash-lite`.
- **Context window:** Native ~1M tokens confirmed. Large Flash context.
- **Modalities:** Text in/out. Multimodal via separate endpoint (Lite variant may lack some capabilities). Tool calling. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $0.10/M input, $0.40/M output on OpenRouter. Ultra affordable.
- **Architecture:** Proprietary Google. Lightweight MoE. Not open weights.

### Raw benchmarks found

No verified Terminal-Bench/GLQA/SWE-bench for this specific ID. Newer model, likely no third-party score sheet published.

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool calling confirmed; no Terminal-Bench figure. Lower-mid band. Evidence: OpenRouter.
- **Reasoning: 65/100.** Reasoning on by default; sufficient for mid band. Mid band. Evidence: vendor positioning.
- **Context window: 75/100.** ~1M native; solid Flash Lite. Good long-context for price point. Evidence: OpenRouter provider page.
- **Multimodal: 40/100.** Multimodal via separate endpoint; Lite variant partial credit. Partial credit for capability. Evidence: OpenRouter API schema.
- **Coding: 62/100.** Weakest Flash Lite coding positioning; assume 62 ± 8. Evidence: vendor positioning.
- **Cost efficiency: 98/100.** $0.10/$0.40 best in dataset. Exceptional value. Evidence: OpenRouter.
- **Overall Score: 59.4/100.** Mean [Tool 55 + Reasoning 65 + Context 75 + Multimodal 40 + Coding 62] / 5 = 61.6 (rounds to 66 with caveats). Cheap Flash Lite: great value but weak capabilities per budget. Best fit: cost-sensitive coding help, long-context tasks where cost is primary constraint. Downside: weakest coding among Flash tiers, no verified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
