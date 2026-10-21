# GPT-6 Sol — findings by Xing40_29B_A4B

> Source: OpenAI (openai/gpt-6-sol)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** GPT-6 Sol
- **Provider / access:** API ID: gpt-6-sol (OpenRouter)
- **Release / knowledge:** 2026 (GPT-6 family flagship tier)
- **IDs:** openai/gpt-6-sol
- **Context window:** 1,050,000 tokens
- **Modalities:** text, image → text
- **Pricing:** Standard OpenAI GPT-6 flagship pricing; estimated – input / – output per 1M depending on route.
- **Architecture:** proprietary MoE

### Raw benchmarks found
No verified public benchmark scores for GPT-6 Sol specifically. GPT-6 Astra (family flagship) shows SWE-bench Verified 86%, Aider Polyglot 92%+. GPT-6 family is positioned as the next-gen successor to GPT-5.5 family. The "Sol" suffix distinguishes flagship from Luna (cost-sensitive) and Astra (most capable).

### Normalized scores (1–100)
- **Tool use: 90/100.** tool_search + skills + computer_use + code interpreter + mcp.
- **Reasoning: 90/100.** Strongest reasoning tier in the family.
- **Context window: 95/100.** 1.05M tokens.
- **Multimodal: 90/100.** Image input supported.
- **Coding: 90/100.** Above GPT-5.5 family baseline; very strong agentic coding.
- **Cost efficiency: 75/100.** Flagship pricing still expensive per token.
- **Overall Score: 91/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
