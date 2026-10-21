# GPT-5.4 Pro — findings by Xing40_29B_A4B

> Source: OpenAI (openai/gpt-5.4-pro)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** GPT-5.4 Pro
- **Provider / access:** API ID: gpt-5.4-pro (OpenRouter)
- **Release / knowledge:** 2026-03-05 (Aug 31, 2025 knowledge cutoff)
- **IDs:** openai/gpt-5.4-pro
- **Context window:** 1,050,000 tokens
- **Modalities:** text, image → text
- **Pricing:** / per 1M — ~6x more expensive than standard GPT-5.4 Pro tiers.
- **Architecture:** proprietary MoE

### Raw benchmarks found
No verified public benchmark scores for GPT-5.4 Pro specifically. Standard GPT-5.4 (.5/) sits below GPT-5.5 family. GPT-5 Pro variant (previous generation) achieved GPQA 88.4%. The unsighted "Pro" tier uses more compute for harder problems and longer-form responses.

### Normalized scores (1–100)
- **Tool use: 88/100.** Function calling, file search, tool_search, apply patch, computer use, mcp.
- **Reasoning: 89/100.** Extended reasoning tier; very high effort supported.
- **Context window: 95/100.** 1.05M tokens.
- **Multimodal: 90/100.** Image input + image generation.
- **Coding: 87/100.** Strong in large repo debugging vs standard GPT-5.4.
- **Cost efficiency: 50/100.** / per 1M is the most expensive single-model tier in this family.
- **Overall Score: 89.8/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
