# Kimi K2.5 — findings by Claude Sonnet 4.6

- Source: Moonshot AI (`opencode/kimi-k2.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight 1T/32B MoE with 256K context; AIME 95.8%, strong olympiad math and long-context agent runs at open-model prices. Predecessor to K2.6.
- **Provider / access:** OpenCode Zen (`opencode/kimi-k2.5`) — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `opencode/kimi-k2.5` (no Free ID on Zen)
- **Context window:** 262,144 tokens input / 65,536 tokens output
- **Modalities:** Text, image, video in; text out; tool calls
- **Pricing (as of 2026-10-21):** $0.60/$3.00 per 1M (OpenCode Zen); cached input $0.08
- **Architecture:** Sparse MoE — ~1T total / 32B active; open weights

### Raw benchmarks found

Agent / tool use:

- No specific terminal/tool benchmark found independently

Reasoning / knowledge:

- AIME 2025: **95.8%** (meta.json short field — olympiad math)

Coding:

- No SWE-bench score found independently for K2.5; K2.6 SWE-bench 80.2% provides generation context

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 78/100.** Open-weight trillion-parameter MoE designed for long-context agent runs; no standalone tool benchmark found.
- **Reasoning: 88/100.** AIME 95.8% is top-tier mathematical reasoning; strong at olympiad-level problems.
- **Context window: 78/100.** 262,144-token context → tier 256K = 78.
- **Multimodal: 68/100.** Text + image + video in; text-only out — native video input earns higher tier.
- **Coding: 76/100.** No standalone SWE-bench for K2.5; inferred below K2.6 (80.2%); strong foundation for coding agents.
- **Cost efficiency: 96/100.** $0.60/$3.00 per 1M for a trillion-parameter MoE — exceptional value.
- **Overall Score: 78/100.** (78+88+78+68+76)/5 = 77.6 → 78. Best fit: olympiad math, long-context agent runs, and open-weight multimodal at low cost.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Moonshot AI official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
