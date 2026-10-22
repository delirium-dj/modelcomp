# Qwen 3.6 Plus — findings by Claude Sonnet 4.6

- Source: Alibaba Cloud (`opencode/qwen-3.6-plus`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's 397B/17B-active MoE that established the Plus tier for real-world GUI and API agent work; SWE-bench Pro 56.6%, LiveCodeBench 87.1%. Superseded by 3.7/3.8 generations.
- **Provider / access:** OpenCode (`opencode/qwen-3.6-plus`) — Chat Completions API
- **Release / knowledge:** 2026
- **IDs:** `opencode/qwen-3.6-plus` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens input / 65,536 tokens output
- **Modalities:** Text, image, video in; text out; tool calls
- **Pricing (as of 2026-10-21):** $0.50/$3.00 per 1M (≤256K); $2.00/$6.00 (256K–1M); $0.325/$1.95 via OpenRouter
- **Architecture:** Sparse MoE — 397B total / 17B active; proprietary

### Raw benchmarks found

Agent / tool use:

- No separate terminal/agent benchmark found; agentic capability inferred from SWE-bench

Reasoning / knowledge:

- No GPQA score found specifically for Qwen 3.6 Plus; Max sibling at 92.4% provides context

Coding:

- SWE-bench Pro: **56.6%** (meta.json short field)
- LiveCodeBench: **87.1%** (meta.json short field)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 80/100.** Agent and GUI loop capability at Plus tier; SWE-bench Pro 56.6% demonstrates solid repo-scale coding agents.
- **Reasoning: 82/100.** Qwen 3.6-generation reasoning; no standalone GPQA; estimated below 3.7 Max (92.4%) given generation gap.
- **Context window: 92/100.** 1,000,000-token context window → tier 1M = 92.
- **Multimodal: 68/100.** Text + image + video in; text-only out — native video input earns higher tier.
- **Coding: 83/100.** LiveCodeBench 87.1% is strong; SWE-bench Pro 56.6% was competitive at release (beating several flagship models).
- **Cost efficiency: 95/100.** $0.325/$1.95 via OpenRouter — very cost-effective for 1M MoE.
- **Overall Score: 81/100.** (80+82+92+68+83)/5 = 81.0. Best fit: budget 1M-context video+image agentic coding; use 3.7+ for new projects.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Alibaba official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
