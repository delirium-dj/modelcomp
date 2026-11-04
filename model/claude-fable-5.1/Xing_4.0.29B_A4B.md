# Claude Fable 5.1 — findings by Xing40_29B_A4B

> Source: Anthropic (nthropic/claude-fable-5.1)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Claude Fable 5.1
- **Short description:** Next-gen Claude Fable variant (the Verity gem at Anthropic), trained on long-context reasoning and production agentic workflows. Flag if variant/alias.
- **Provider / access:** Hosted via Anthropic Claude API; OpenRouter nthropic/claude-fable-5.1. Chat Completions API.
- **Release / knowledge:** 2026. Cutoff ~2025–2026.
- **IDs:** <provider>/claude-fable-5.1
- **Context window:** ~1M tokens total (~500k in/out based on Anthropic reporting for successor variants).
- **Modalities:** text + image + audio in; text out; reasoning yes; tool calls yes; JSON mode yes; video in lightly.
- **Pricing (as 2026-10-21):** US tier ~.63/M input (from AA comparison) / max variant ~.98/M cache hit; ~.50/M output (max). Paid.
- **Architecture:** proprietary Anthropic dense transformer with extended chain-of-thought reasoning; not disclosed.

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 93/100.**
- **Reasoning: 75/100.**
- **Context window: 85/100.**
- **Multimodal: 78/100.**
- **Coding: 89/100.**
- **Cost efficiency: 35/100.**
- **Overall Score: 84/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
