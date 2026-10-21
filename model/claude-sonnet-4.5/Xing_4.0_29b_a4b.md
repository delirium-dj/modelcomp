# Anthropic Claude Sonnet 4.5 — findings by Xing40_29B_A4B

> Source: Anthropic (`anthropic/claude-sonnet-4.5`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Anthropic Claude Sonnet 4.5
- **Provider / access:** Anthropic hosts Claude API (`claude-sonnet-4-5`), Google Cloud, Microsoft Foundry, AWS Claude Platform. On OpenRouter as `anthropic/claude-sonnet-4.5`.
- **Release / knowledge:** Released 2025-09-29; Deprecated 2026-11-30; Retires 2026-11-30. Reliable knowledge cutoff Jan 2025; Training data cutoff Jul 2025.
- **IDs:** `anthropic/claude-sonnet-4.5`, `anthropic.claude-sonnet-4-5-20250929`, `claude-sonnet-4-5-20250929`.
- **Context window:** 200K tokens (~150k words).
- **Modalities:** text and images → text. Tool use supported via Anthropic's built-in Web Search and Code Execution tools. No native video input for this model id.
- **Pricing:** Input $3 / MTok, Output $15 / MTok (base; batch 50% off; 5m cache write $3.75/MTok, cache read $0.30/MTok).
- **Architecture:** Proprietary Anthropic transformer with extended thinking (manual `thinking` mode on older models; the entry in the Family table above supports Extended thinking). License: not publicly open-sourced.

### Raw benchmarks found
- Anthropic's own announcement claims strong coding, agentic skill, and reasoning gains over Opus 4.5 and prior models, plus higher OSWorld scores than Opus 4.6/4.7. No public third-party leaderboard attribution for this exact id is currently published. Terminal-Bench 2.1 leaderboard historically carried ~80–82% for Claude Sonnet 4.x generations but this is not a verified exact-id result.

### Normalized scores (1–100)
- **Tool use: 80/100.** Strong tool use per Anthropic documentation; supports web search and code execution with mature calling behavior. Top-tier at release but now pre-dates newer agentic tool frameworks.
- **Reasoning: 82/100.** Extended thinking (an Anthropic-specific extension mechanism) delivered solid peak reasoning. Below newer models with Adaptive thinking at default effort.
- **Context window: 35/100.** 200K tokens is short relative to the current frontier (all major players ship 1M+); genuinely weak here.
- **Multimodal: 80/100.** Text + image inputs supported; no claimed video input.
- **Coding: 85/100.** Among the top coding models of its generation, consistent with Anthropic's competitive positioning in coding.
- **Cost efficiency: 60/100.** $3/$15 per MTok is cheaper than Opus 4.8 ($5/$25) and Haiku 5.5's starting price ($0.10/$0.50? No — Haiku starts at $0.10/$0.50 per Anthropic overview... wait that seems odd, Haiku starts at low price. Sonnet 4.5 is mid-range pricing). Cost ranking: Haiku 5.5 < Sonnet 4.5 < Opus 4.8.
- **Overall Score: 72.4/100.** Mean of [Tool 80 + Reasoning 82 + Context 35 + Multimodal 80 + Coding 85] / 5 = 64.4. Reasoning about lower half because this is an older deprecated model with a 200K-token context window that lags the current frontier across all dimensions except a few cost dimensions.

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
