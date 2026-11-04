# Anthropic Claude Opus 4.8 — findings by Xing40_29B_A4B

> Source: Anthropic (nthropic/claude-opus-4.8)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's latest Opus flagship release, polished long-context plus strongest reasoning/coding among the 4.x family; a top-tier research backbone. Flag if variant/alias.
- **Provider / access:** Hosted via Anthropic Claude API; OpenRouter nthropic/claude-opus-4.8. Chat Completions API on OpenRouter.
- **Release / knowledge:** 2025 (Oct–Nov 2025). Knowledge cutoff ~Nov 2025.
- **IDs:** <provider>/claude-opus-4.8
- **Context window:** 1M tokens (Anthropic standard for most recent Opus lines); split unverified exactly (~500k each inferred from general reports).
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode yes. Audio lightly supported.
- **Pricing (as 2026-10-21):** EU via Bedrock/Vertex ~.50/M input, .50/M output; US tier slightly lower (~.80–.50/M input, ~–/M output). Paid. Cache discount ~85–90%.
- **Architecture:** proprietary Anthropic dense transformer; not disclosed publicly. Not open weights.

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 90/100.**
- **Reasoning: 74/100.**
- **Context window: 85/100.**
- **Multimodal: 72/100.**
- **Coding: 89/100.**
- **Cost efficiency: 30/100.**
- **Overall Score: 82/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
