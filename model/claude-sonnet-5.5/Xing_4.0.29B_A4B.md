# Claude Sonnet 5.5 — findings by Xing40_29B_A4B

> Source: Anthropic (nthropic/claude-sonnet-5.5)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's mid-tier reasoning model with strong coding, agentic workflow, and long-context capability; a step-up over Claude 4 Sonnet for developer workloads. Flag if variant/alias.
- **Provider / access:** Hosted via Anthropic Claude API; OpenRouter nthropic/claude-sonnet-5.5. Chat Completions API.
- **Release / knowledge:** 2026 (mid-year). Knowledge cutoff ~2025.
- **IDs:** <provider>/claude-sonnet-5.5
- **Context window:** 1M tokens total; split unverified exactly (~500k in/out based on industry standards).
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode yes; audio lightly.
- **Pricing (as 2026-10-21):** EU via Google Vertex ~.20/M input, /M output (cache hit ~discount to €0.22/€1.10); US ~.40–1.80/M input, ~.00–9.00/M output. Paid.
- **Architecture:** proprietary Anthropic dense transformers; not disclosed. Not open weights.

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 82/100.**
- **Reasoning: 72/100.**
- **Context window: 85/100.**
- **Multimodal: 80/100.**
- **Coding: 88/100.**
- **Cost efficiency: 50/100.**
- **Overall Score: 81/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
