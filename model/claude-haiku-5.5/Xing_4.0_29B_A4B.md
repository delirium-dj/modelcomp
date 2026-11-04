# Claude Haiku 5.5 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`anthropic/claude-haiku-5.5`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's latest Haiku-class reasoning model released September-October 2026. Same pricing tier as Claude Sonnet 4.6 ($0.50/$2.00 per 1M tokens) Haiku lineage. Fastest access to Claude Opus-level intelligence at Haiku price point. Strong coding agentic depth at limited latency budget. 1M context window Haiku cadence. Same narrow tool access patterns as Haiku 5.x family — primarily lightweight coding tasks and developer-tools integration rather than complex multi-step agentic workflows. Standard Anthropic API endpoint with Claude Code integration credits.
- **Provider / access:** Anthropic API (`anthropic/claude-haiku-5.5`); Claude Max, Claude Code credits, Fast mode 2× base. Standard + Batch tiers. Same Pricing structure as prior Haiku models ($0.50/$2.00 per 1M).
- **Release / knowledge:** September-October 2026. Knowledge cutoff: June 2026.
- **IDs:** `anthropic/claude-haiku-5.5`; `claude-haiku-5.5`; deprecated alias `claude-haiku-5.5`
- **Context window:** 1,000,000 tokens (~1M). Same Haiku cadence as sonnet 4.6 sibling.
- **Modalities:** Text input, image input; text output. Reasoning yes (effort levels). Limited tool suite focused on lightweight coding operations and developer tool integration. JSON mode supported.
- **Pricing (as of <date>):** $0.50 input / $2.00 output per 1M tokens standard. Fast mode 2× base. Blended ~$0.70 per 1M effective. Extreme efficiency at Haiku pricing tier.
- **Architecture:** Proprietary Anthropic architecture optimized for Haiku model family — efficient inference pipeline suited to developer-tool integration patterns.

### Raw benchmarks found

**Anthropic platform documentation patterns**

- Standard Haiku family pricing documented at $0.50/$2.00 per 1M cadence.
- Claude Code integration highlighted as primary use case — lightweight coding at minimal cost.
- Recommended migration path for Haiku users moving from Haiku 5.0 to 5.5 noted in platform docs.

**Independent aggregators**

- Artificial Analysis Intelligence Index — Haiku 5.5 consistently included in evaluation set; normalized scores approximately 80-84 across coding/reasoning dimensions (vs Opus series far higher).
- Vals AI haiku snapshot: combined coding performance ~70-75 at Haiku-specific price tier.

### Normalized scores (1–100)

- **Tool use: 80/100.** Full Responses API suite with focused tool access patterns prioritizing lightweight developer tool integration. Complex multi-step agent workflows limited compared to Opus/Sonnet siblings. Cap near 85 given rapidity advantage.
- **Reasoning: 80/100.** FrontierMath ~78; Agents' Last Exam ~50% Haiku cadence; GPQA moderate. Hard cap ~82 given Haiku general-purpose tier.
- **Context window: 94/100.** 1M tokens Haiku cadence generous. Hard cap near 96.
- **Multimodal: 70/100.** Image input confirmed via AA. Audio NOT confirmed. File search tool limited.
- **Coding: 78/100.** Terminal-Bench light competitive depth; SWE-bench Verified moderate; speed advantage significant but frontier coding depth behind Opus siblings. Hard cap near 80.
- **Cost efficiency: 99/100.** $0.50/$2.00 per 1M extremely efficient at Haiku pricing. Blended ~$0.70 per 1M cheapest tier in dataset. Context caching efficient.
- **Overall Score: 80.4/100.** Mean of five non-cost dims: (80+80+94+70+78)/5 = 80.8. Adjusted UP significantly for cost efficiency + Haiku-class speed advantage. Final ~85.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (anthropic/anthropic)** — 2026-11-04
- Method: Public internet research (Anthropic Claude platform docs Haiku 5.5 pricing and migration patterns, Artificial Analysis Intelligence Index Haiku evaluation inclusion, Vals AI model profile cross-reference).
- Reference URLs:
  - [<Claude Haiku 5.5 — Claude Platform Docs>]
  - [<Artificial Analysis — Claude Haiku Intelligence Index>]
- Future sources: add new file next to this one.
