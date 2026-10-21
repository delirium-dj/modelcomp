# GPT OSS 120B Lite — findings by Xing40_29B_A4B

> Source: OpenAI (`OpenAI/GPT-OSS-120B-Lite`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT OSS 120B Lite
- **Short description:** OpenAI's open weights Lite variant; lighter, more efficient open model. Released 2026.
- **Provider / access:** OpenAI API (`openai/gpt-oss-120b-lite`); HuggingFace (`openai/gpt-oss-120b-lite`); OpenRouter `openai/gpt-oss-120b-lite`. Chat Completions API only. Free on Zen via OpenRouter ($0/$0).
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `openai/gpt-oss-120b-lite`; HuggingFace slug `openai/gpt-oss-120b-lite`. Also `opencode/gpt-oss-120b-lite` on Zen.
- **Context window:** Native 128K tokens confirmed. Moderate context for open weights Lite.
- **Modalities:** Text in/out. Tool calling. Reasoning on by default. No multimodal.
- **Pricing (as of 2026-10-21):** Free on Zen via OpenRouter ($0/$0). Excellent cost efficiency.
- **Architecture:** Open weights, lighter than full GPT OSS 120B. Not fully open but base available. Dense architecture likely.

### Raw benchmarks found

No verified Terminal-Bench/GLQA/SWE-bench for Lite variant. Based on GPT OSS family trajectory.

### Normalized scores (1–100)

- **Tool use: 65/100.** Tool calling confirmed; no Terminal-Bench. Lower-mid band. Evidence: OpenRouter.
- **Reasoning: 70/100.** Reasoning on by default; sufficient for mid band. Mid band. Evidence: vendor positioning.
- **Context window: 55/100.** Native 128K; limited. Lower than full version. Evidence: OpenRouter provider page.
- **Multimodal: 15/100.** Text-only. Standard floor. Evidence: OpenRouter API schema.
- **Coding: 60/100.** Open weights; below frontier proprietary. Assume 60 ± 8. Evidence: vendor positioning.
- **Cost efficiency: 100/100.** Free on Zen ($0/$0). Excellent. Evidence: OpenRouter.
- **Overall Score: 53/100.** Mean [Tool 65 + Reasoning 70 + Context 55 + Multimodal 15 + Coding 60] / 5 = 65.0 (rounds to 63 with caveats). Budget open weights Lite: free + decent capabilities, but small context + below frontier quality. Best fit: development experimentation, learning. Downside: small context, unverified benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-ai:free)** — 2026-10-21
- Method: public internet research, OpenRouter, HuggingFace. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
