# Claude Opus 4.6 — findings by Xing40_29B_A4B

> Source: Anthropic (`Anthropic/Claude-Opus-4.6`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Predecessor to Opus 4.8/Opus 5; strong coding, agentic workflows, and reasoning. Still top tier Claude model. Released 2026.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-4.6`); OpenRouter `anthropic/claude-opus-4.6`. EU routing via Amazon Bedrock ($4.40/$22) or Google Vertex ($4.40/$22). Base pricing.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `anthropic/claude-opus-4.6`; API key format: `sk_...`.
- **Context window:** ~200K native (same as Opus family).
- **Modalities:** Text in/out. Tool calling. Image via multimodal endpoint. Reasoning by default.
- **Pricing (as of 2026-10-21):** $5.50/M input, $27.50/M output on OpenRouter US; EU: $4.40/$22.
- **Architecture:** Proprietary Anthropic. Same family as Opus 5. Not open weights.

### Raw benchmarks found

FrontierBench competitive with Opus 5 but below; CursorBench near top tier; HLE strong; SWE-bench Verified competitive.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool use; FrontierBench competitive with Opus 5 peak. Upper-mid band. Evidence: Anthropic announcement.
- **Reasoning: 87/100.** HLE strong; ARC-AGI 3 within 3× of next best. High band. Evidence: Anthropic announcement.
- **Context window: 68/100.** ~200K native. Same as Opus family. No improvement. Evidence: Anthropic docs.
- **Multimodal: 45/100.** Same as Opus family. Partial credit. Evidence: OpenRouter API schema.
- **Coding: 84/100.** SWE-bench competitive; CursorBench near top tier. Top coding score. Evidence: vendor announcements.
- **Cost efficiency: 35/100.** $5.50/$27.50 expensive. Higher cost than Fable 5 at half price. Evidence: OpenRouter.
- **Overall Score: 73.6/100.** Mean [Tool 84 + Reasoning 87 + Context 68 + Multimodal 45 + Coding 84] / 5 = 74.0. Similar to Opus 4.8 but slightly lower reasoning. Good Claude model: solid coding + reasoning, limited context, premium pricing. Downside: small context, expensive.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, Anthropic announcements, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
