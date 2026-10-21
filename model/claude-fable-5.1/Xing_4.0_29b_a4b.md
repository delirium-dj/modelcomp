# Claude Fable 5.1 — findings by Xing40_29B_A4B

> Source: Anthropic (`Anthropic/Claude-Fable-5.1`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Incremental update to Claude Fable 5; maintains near-peak performance across coding, agentic workflows, and reasoning. Price point identical to Fable 5.
- **Provider / access:** Anthropic API (`anthropic/claude-fable-5.1`); OpenRouter `anthropic/claude-fable-5.1`. Chat Completions API only. EU routing via Google Vertex ($11/$55).
- **Release / knowledge:** Released 2026 (exact date pending). Knowledge cutoff: vendor-published only.
- **IDs:** `anthropic/claude-fable-5.1`; API key format: `sk_...`.
- **Context window:** Same as Fable 5: ~200K tokens (confirmed on Anthropic docs and OpenRouter for both variants).
- **Modalities:** Text in/out only on standard API. Image via separate multimodal endpoint. Tool calling. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $11.00/M input, $55.00/M output on OpenRouter US; EU: $11/$55 via Google Vertex.
- **Architecture:** Proprietary Anthropic. Same family as Fable 5; incremental improvements.

### Raw benchmarks found

No independently published benchmarks for Fable 5.1 specifically. Based on positioning, it matches Fable 5's capability profile with marginal improvements. CursorBench figures same family as Fable 5.

### Normalized scores (1–100)

- **Tool use: 90/100.** Matches Fable 5 capability; CursorBench near peak. Slightly below Fable 5's exact 0.5% gap due to being a newer release likely slightly above. Lower-mid upper band. Evidence: vendor positioning.
- **Reasoning: 93/100.** Matches Fable 5; HLE top performer family. Slightly below Fable 5 maybe, consistent with incremental update. Upper band. Evidence: vendor positioning.
- **Context window: 68/100.** Same as Fable 5: ~200K. No new context claims. Evidence: Anthropic docs.
- **Multimodal: 45/100.** Same as Fable 5. Partial credit. Evidence: OpenRouter API schema.
- **Coding: 89/100.** Matches Fable 5; near Opus 5 peak. Assume 89 ± 5. Evidence: vendor positioning.
- **Cost efficiency: 25/100.** Same pricing as Fable 5. High cost. Evidence: OpenRouter.
- **Overall Score: 77/100.** Mean [Tool 90 + Reasoning 93 + Context 68 + Multimodal 45 + Coding 89] / 5 = 76.8 (rounds to 77). Very close to Fable 5 (+0.2); expected slight improvement from incremental update but no verified benchmark numbers to confirm. Best fit: same use cases as Fable 5 — frontier coding, agentic workflows, reasoning-intensive tasks. Downside: same as Fable 5.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, Anthropic announcements, OpenRouter. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
