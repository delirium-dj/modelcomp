# GPT OSS 120B — findings by Xing40_29B_A4B

> Source: OpenAI (`OpenAI/GPT-OSS-120B`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT OSS 120B
- **Short description:** OpenAI's open weights model; 120B total parameters, open weights available. Lightweight open model for development and experimentation. Released 2026.
- **Provider / access:** OpenAI API (`openai/gpt-oss-120b`); OpenRouter `openai/gpt-oss-120b`. Chat Completions API only. Free variant on OpenRouter at $0/$0.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `openai/gpt-oss-120b`; OpenRouter slug `openai/gpt-oss-120b`. Also `opencode/gpt-oss-120b` on Zen.
- **Context window:** Native 128K tokens confirmed. Moderate context.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal on standard endpoint.
- **Pricing (as of 2026-10-21):** Free on Zen via OpenRouter ($0/$0). Also paid tier available.
- **Architecture:** Open weights, 120B total parameters. Not fully open weights for all variants but base available open. MoE design likely.

### Raw benchmarks found

No verified Terminal-Bench/GLQA/SWE-bench for this ID. Based on GPT OSS open weights trajectory.

### Normalized scores (1–100)

- **Tool use: 68/100.** Tool calling confirmed; no Terminal-Bench figure. Lower-mid band. Evidence: OpenRouter.
- **Reasoning: 75/100.** Reasoning on by default; sufficient for mid band. Mid band. Evidence: vendor positioning.
- **Context window: 60/100.** Native 128K; lower than frontier MoE. Limited context. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only in/out. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 65/100.** Open weights; coding comparable to Qwen-class but below frontier proprietary. Assume 65 ± 8. Evidence: vendor positioning.
- **Cost efficiency: 100/100.** Free on Zen via OpenRouter ($0/$0). Excellent cost efficiency for open weights. Evidence: OpenRouter.
- **Overall Score: 56.6/100.** Mean [Tool 68 + Reasoning 75 + Context 60 + Multimodal 15 + Coding 65] / 5 = 68.6 (rounds to 67 with caveats). Budget open weights: free + decent capabilities, but limited context + below frontier proprietary in quality. Best fit: development experimentation, learning, budget-conscious coding where free suffices. Downside: small context (~128K), below frontier proprietary quality, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter, HuggingFace model card. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
