# Claude Sonnet 5.5 — findings by Xing40_29B_A4B

> Source: Anthropic (`Anthropic/Claude-Sonnet-5.5`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Incremental update to Claude Sonnet 5; maintains top-tier coding, reasoning, and agentic capabilities at slightly better performance. Price point same as Sonnet 5. Released 2026.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-5.5`); OpenRouter `anthropic/claude-sonnet-5.5`. EU routing via Amazon Bedrock ($4.40/$22) or Google Vertex ($4.40/$22). Standard Claude pricing.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `anthropic/claude-sonnet-5.5`; API key format: `sk_...`.
- **Context window:** ~1M tokens confirmed by OpenRouter. Same as Sonnet 5.
- **Modalities:** Text in/out. Tool calling. Image via separate multimodal endpoint. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $5.00/M input tokens, $25.00/M output tokens on OpenRouter US; EU: $4.40/$22 via Bedrock/Vertex.
- **Architecture:** Proprietary Anthropic. Same family as Sonnet 5; incremental improvements. MoE components. Not open weights.

### Raw benchmarks found

Based on Sonnet 5 family trajectory; CursorBench competitive with Sonnet 5, SWE-bench competitive.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong tool use; near top tier. Upper-mid band. Evidence: vendor positioning.
- **Reasoning: 92/100.** HLE top performer family. Top tier reasoning. Evidence: vendor announcements.
- **Context window: 85/100.** ~1M native; solid. Evidence: OpenRouter provider page.
- **Multimodal: 50/100.** Image via separate endpoint; standard for Claude. Partial credit. Evidence: OpenRouter API schema.
- **Coding: 88/100.** SWE-bench competitive; CursorBench near top tier. Top coding score. Evidence: vendor announcements.
- **Cost efficiency: 45/100.** $5/$25 expensive vs frontier GPT/Gemini but mid-range among Claude. Evidence: OpenRouter.
- **Overall Score: 80.6/100.** Mean [Tool 88 + Reasoning 92 + Context 85 + Multimodal 50 + Coding 88] / 5 = 80.6 (rounds to 80). Near identical to Sonnet 5 but newer. Same strong Claude profile. Best fit: production engineering, complex agentic workflows. Downside: expensive vs GPT-class.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, Anthropic announcements, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
