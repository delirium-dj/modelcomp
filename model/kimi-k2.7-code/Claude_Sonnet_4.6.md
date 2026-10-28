# Kimi K2.7 Code — findings by Claude Sonnet 4.6

- Source: Moonshot AI (`opencode/kimi-k2.7-code`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-specialized cut of the 1T/32B MoE for long-horizon terminal coding; SWE-bench 78.2%, GPQA ~90.1%, replaces K2.6 in Kimi Code product.
- **Provider / access:** Moonshot AI / OpenCode (`opencode/kimi-k2.7-code`) — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `opencode/kimi-k2.7-code` (no Free ID on Zen)
- **Context window:** 262,144 tokens (256K)
- **Modalities:** Text, image, video in; text out; tool calls
- **Pricing (as of 2026-10-21):** $0.95/$4.00 per 1M; $0.19 cached input
- **Architecture:** Sparse MoE — ~1T total / 32B active; coding-specialized fine-tune

### Raw benchmarks found

Agent / tool use:

- No specific terminal benchmark found independently; coding specialist

Reasoning / knowledge:

- GPQA Diamond: **~90.1%** (meta.json short field)

Coding:

- SWE-bench Verified: **78.2%** (meta.json short field)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 81/100.** Coding-specialized for long-horizon terminal work; SWE-bench 78.2% implies strong tool-call execution.
- **Reasoning: 86/100.** GPQA ~90.1% is strong; narrowed focus means general reasoning breadth trails K2.5/K3.
- **Context window: 78/100.** 262,144-token context → tier 256K = 78.
- **Multimodal: 68/100.** Text + image + video in; text-only out — inherits K2 MoE multimodal from the base.
- **Coding: 84/100.** SWE-bench Verified 78.2%; terminal-focused engineering is the specialty; designed to replace K2.6 in Kimi Code.
- **Cost efficiency: 92/100.** $0.95/$4.00 per 1M for a 1T MoE is excellent value.
- **Overall Score: 79/100.** (81+86+78+68+84)/5 = 79.4 → 79. Best fit: long-horizon terminal coding agents where every token budget goes to engineering.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Moonshot AI official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
