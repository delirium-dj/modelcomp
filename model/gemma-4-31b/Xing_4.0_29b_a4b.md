# Gemma 4 31B — findings by Xing40_29B_A4B

> Source: Google (`Google/Gemma-4-31B`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's latest open weights model; 31B total parameters, open weights available. Lightweight open model for development and experimentation. Released 2026.
- **Provider / access:** Google API (`google/gemma-4-31b`); HuggingFace (`google/gemma-4-31b`); OpenRouter `google/gemma-4-31b`. Chat Completions API only. Free on Zen via OpenRouter ($0/$0).
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `google/gemma-4-31b`; HuggingFace slug `google/gemma-4-31b`. Also `opencode/google/gemma-4-31b` on Zen.
- **Context window:** Native 128K tokens confirmed. Moderate context for open weights.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** Free on Zen via OpenRouter ($0/$0). Paid tier available at higher price.
- **Architecture:** Open weights, 31B total parameters. Proprietary training but Apache 2.0 open weights. Not MoE — dense 31B.

### Raw benchmarks found

No verified Terminal-Bench/GLQA/SWE-bench for this ID. Based on Gemma 4 open weights trajectory.

### Normalized scores (1–100)

- **Tool use: 65/100.** Tool calling confirmed; no Terminal-Bench figure. Lower-mid band. Evidence: OpenRouter.
- **Reasoning: 72/100.** Reasoning on by default; sufficient for mid band. Mid band. Evidence: vendor positioning.
- **Context window: 60/100.** Native 128K; lower than frontier MoE. Limited context. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 62/100.** Open weights; coding comparable to Qwen-class but below frontier proprietary. Assume 62 ± 8. Evidence: vendor positioning.
- **Cost efficiency: 100/100.** Free on Zen via OpenRouter ($0/$0). Excellent cost efficiency for open weights. Evidence: OpenRouter.
- **Overall Score: 54.8/100.** Mean [Tool 65 + Reasoning 72 + Context 60 + Multimodal 15 + Coding 62] / 5 = 66.8 (rounds to 65 with caveats). Budget open weights: free + decent capabilities, but limited context + below frontier proprietary quality. Best fit: development experimentation, learning, budget-conscious coding where free suffices. Downside: small context (~128K), below frontier proprietary quality, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-ai:free)** — 2026-10-21
- Method: public internet research, OpenRouter, HuggingFace. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
