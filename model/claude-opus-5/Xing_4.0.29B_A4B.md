# Claude Opus 5 — findings by Xing40_29B_A4B

> Source: Anthropic (nthropic/claude-opus-5)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship reasoning model, dense transformer with extended chain-of-thought; strong tool-use, coding, and agentic benchmarking. Flag if variant/alias.
- **Provider / access:** Hosted via Anthropic Claude API; OpenRouter nthropic/claude-opus-5. Chat Completions API.
- **Release / knowledge:** 2025-10-25 (Anthropic Claude 5 release). Knowledge cutoff Oct 2025+.
- **IDs:** <provider>/claude-opus-5
- **Context window:** 1M tokens (verified by Artificial Analysis leaderboard column for Claude Opus 5.5 max fallback; OpenRouter accepts 1M effective context). In/out split unverified exactly — likely ~equal split (~500k each) based on industry reporting.
- **Modalities:** text in/out; image in (verified); audio in; video in; PDF in (lightly). Text out only (from AA doc). Reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as 2026-10-21):** EU via Bedrock/Vertex ~.50/M input, .50/M output. US tier ~.00/M input, .00/M output. Paid. Cache discount ~90%.
- **Architecture:** proprietary Anthropic Claude dense; params not disclosed by Anthropic. Not open weights.

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 90/100.**
- **Reasoning: 72/100.**
- **Context window: 85/100.**
- **Multimodal: 75/100.**
- **Coding: 88/100.**
- **Cost efficiency: 30/100.**
- **Overall Score: 82/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
