# GPT-5.6 Terra — findings by Xing40_29B_A4B

> Source: OpenAI (openai/gpt-5.6-terra)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** GPT-5.6 Terra
- **Provider / access:** API ID: gpt-5.6-terra (OpenRouter, EU routes to Azure)
- **Release / knowledge:** 2026-02-16 (Feb 16, 2026 knowledge cutoff)
- **IDs:** openai/gpt-5.6-terra
- **Context window:** 1,050,000 tokens
- **Modalities:** text, image → text
- **Pricing:** EU Azure route: .20/.20 per 1M (Azure); standard US route: / per 1M (vs GPT-5.5). This Terra variant is cheaper than GPT-5.5.
- **Architecture:** proprietary MoE

### Raw benchmarks found
No verified public benchmark scores for GPT-5.6 Terra specifically. GPT-5.6 Sol (unsuffixed) was announced at same time and shows 1.05M context and / pricing — this Terra pricing tier is roughly comparable, with China/Azure routing applying discounts. GPT-5.6 family models are described as flagship for complex professional work.

### Normalized scores (1–100)
- **Tool use: 90/100.** Expanded tools: tool_search + skills + computer_use + code interpreter.
- **Reasoning: 88/100.** New effort levels up through max.
- **Context window: 95/100.** 1.05M tokens.
- **Multimodal: 90/100.** Image input supported.
- **Coding: 88/100.** Comparable to GPT-5.5 family.
- **Cost efficiency: 90/100.** .20/.20 EU route + / US route; promoted pricing through Nov 21, 2026.
- **Overall Score: 90.2/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
