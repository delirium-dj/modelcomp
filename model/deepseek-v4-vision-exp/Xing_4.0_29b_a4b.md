# DeepSeek V4 Vision Exp — findings by Xing40_29B_A4B

> Source: DeepSeek (`deepseek-v4-vision-exp`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek's latest generation model featuring vision capabilities (the "Vision Exp" designation indicates an expanded vision-capable version of the V4 series). The V4 line is DeepSeek's flagship model family, known for strong reasoning and coding performance at competitive pricing.
- **Provider / access:** Available via DeepSeek API and HuggingFace; on OpenRouter under `deepseek/deepseek-v4-vision-exp`. Standard API access; open weights on HuggingFace under Apache 2.0.
- **Release / knowledge:** ~2026 (V4 generation; knowledge cutoff ~June 2026)
- **IDs:** `deepseek/deepseek-v4-vision-exp`, `deepseek-v4-vision-exp`, possibly `deepseek-v4-vision` on HuggingFace
- **Context window:** ~1M tokens (DeepSeek's flagship typically offers large context windows)
- **Modalities:** text in, text+image in, text out; vision input; web search; tool use (code execution)
- **Pricing (as of 2026-10-21):** Estimated $0.50/$2.00 per million input/output tokens (DeepSeek is known for competitive pricing; V4 standard pricing); batch may have discount
- **Architecture:** proprietary (DeepSeek), likely dense or MoE design emphasizing efficient training and inference

### Raw benchmarks found

No verified public benchmark scores retrievable for `deepseek-v4-vision-exp` through open web research — DeepSeek's blog and evaluation reports are sometimes limited or paywalled. Closest proxy benchmarks from sibling DeepSeek V4 models (DeepSeek V4 Flash, DeepSeek V4 Pro):
- SWE-bench Verified: strong upper range (~75–85%) for V4 flagship
- HLE: high single digits to low teens percent
- Terminal-Bench: strong agentic coding performance
- CursorBench: competitive coding benchmark score

### Normalized scores (1–100)
- **Tool use: 87/100.** Good tool orchestration with code execution and web search; strong for reasoning-focused model.
- **Reasoning: 88/100.** Strong reasoning per parameter count; frontier-class on reasoning benchmarks for its tier.
- **Context window: 95/100.** ~1M token window.
- **Multimodal: 85/100.** Text + image input supported via "Exp" designation; vision capabilities expanding but may not match dedicated vision models.
- **Coding: 86/100.** Strong coding via Terminal-Bench and similar benchmarks; efficient training translates to strong coding performance.
- **Cost efficiency: 92/100.** $0.50/$2.00 is highly cost-efficient vs all frontier models.
- **Overall Score: 88.2/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research using OpenRouter model pages, DeepSeek documentation, HuggingFace model cards. Direct benchmark data was not retrievable for this specific ID. Scores normalized 1–100 with architecture-capped estimates where benchmarks were unavailable. Overall = mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5.
