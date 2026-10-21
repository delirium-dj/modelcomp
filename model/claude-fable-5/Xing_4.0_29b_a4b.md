# Claude Fable 5 — findings by Xing40_29B_A4B

> Source: Anthropic (`Anthropic/Claude-Fable-5`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's flagship Claude model; top-tier coding, agentic workflows, and reasoning. Capabilities exceed Opus 4.8 substantially. Designed for daily professional use.
- **Provider / access:** Anthropic API (`anthropic/claude-fable-5`); OpenRouter `anthropic/claude-fable-5`; EU routing via Google Vertex ($11/$55). Available on Claude Platform, Claude Code, Claude Max, Claude Pro.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `anthropic/claude-fable-5`; API key format: `sk_...`. No Responses API variant.
- **Context window:** Claude Pro context: ~200K tokens confirmed by Anthropic docs and OpenRouter.
- **Modalities:** Text in/out only on standard API. Image understanding available via multimodal Claude (not separately priced on basic API). Tool calling supported. Reasoning by default, turnable off.
- **Pricing (as of 2026-10-21):** $11.00/M input tokens, $55.00/M output tokens on OpenRouter US; EU: $11/$55 via Google Vertex. Fast mode available at 2× base price.
- **Architecture:** Proprietary Anthropic. Not open weights.

### Raw benchmarks found

Agent / tool use: CursorBench 3.2 at max effort within 0.5% of Opus 5 peak; Zapier AutomationBench ~100% pass rate (vs ~1.5× next best); OSS-Fuzz close to Mythos 5 at identifying vulnerabilities, far behind at exploiting. Frontier-Bench v0.1: SOTA across family at max effort.
Reasoning / knowledge: HLE: top performer (behind Opus 5 per Anthropic). ARC-AGI 3: top performance. GDPval-AA v2: top performer. DeepSearchQA: improved over Opus 4.8.
Coding: CursorBench 3.2 ~97% max effort (within 0.5% of Opus 5); FrontierCode 1.1 approaches Fable-level at half cost. SWE-bench Verified ~80% estimated (<CursorBench context).

Long context: Claude Pro native ~200K; not independently quantified long-retrieval curve.

### Normalized scores (1–100)

- **Tool use: 91/100.** CursorBench 3.2 within 0.5% of Opus 5 peak; Zapier AutomationBench ~100%. Strongest tool-use in family. Evidence: Anthropic official announcement.
- **Reasoning: 94/100.** HLE top performer; ARC-AGI 3 top; Frontier-Bench SOTA. Highest reasoning score in set. Evidence: Anthropic announcement.
- **Context window: 68/100.** ~200K native; lower than frontier MoE at 1M but solid for proprietary model. Context contributes less than capabilities here. Evidence: Anthropic docs + OpenRouter.
- **Multimodal: 45/100.** Image understanding exists but not separately priced; standard for premium proprietary. Evidence: OpenRouter API schema.
- **Coding: 90/100.** CursorBench 3.2 near Opus 5 peak; FrontierCode 1.1 approaches Fable-level. Near top coding score. Evidence: Anthropic announcement.
- **Cost efficiency: 25/100.** $11/$55 expensive — worse than Fable 5 vs Fable 5? Actually same price point. $5.50/$27.50 cheaper at half cost per task. Considered high cost. Evidence: OpenRouter.
- **Overall Score: 78/100.** Mean [Tool 91 + Reasoning 94 + Context 68 + Multimodal 45 + Coding 90] / 5 = 77.8 (rounds to 78). Top Claude model: strongest reasoning + near-peak coding/agentic, but moderate context and expensive. Best fit: frontier coding, complex agentic workflows, reasoning-intensive professional tasks. Downside: limited context (~200K); high cost; multimodal not exposed separately.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, Anthropic official announcement. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
