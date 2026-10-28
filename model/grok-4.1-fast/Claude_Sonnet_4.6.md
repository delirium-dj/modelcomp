# Grok 4.1 Fast — findings by Claude Sonnet 4.6

- Source: xAI (`xai/grok-4.1-fast-reasoning`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's 2M-context speed tier for high-volume tool calling; $0.20/$0.50 per 1M, tau2-bench 93.3% (reasoning build). Deprecated in favour of Grok 4.3.
- **Provider / access:** xAI native API (`xai/grok-4.1-fast-reasoning`) — Chat Completions API
- **Release / knowledge:** 2026 (deprecated, succeeded by Grok 4.3)
- **IDs:** `xai/grok-4.1-fast-reasoning` (not on OpenCode Zen)
- **Context window:** 2,000,000 tokens; ~30,000 max output
- **Modalities:** Text + image in; text out; tool calls
- **Pricing (as of 2026-10-21):** $0.20/$0.50 per 1M (cached $0.05)
- **Architecture:** Proprietary — xAI Grok 4.1 Fast (reasoning alias)

### Raw benchmarks found

Agent / tool use:

- Tau2-bench (reasoning build): **93.3%** (meta.json — vs. 63.7% plain build; reasoning mode is the recommended use)

Reasoning / knowledge:

- Tau2-bench reasoning: **93.3%** (same metric — agent planning and tool orchestration)

Coding:

- No SWE-bench score found for Grok 4.1 Fast

Long context:

- 2M context window available; 30K output cap is limiting for long outputs

### Normalized scores (1–100)

- **Tool use: 85/100.** Tau2-bench 93.3% on reasoning build is excellent; designed specifically for high-volume tool calling at speed.
- **Reasoning: 78/100.** Reasoning build enables deliberation; plain build (63.7%) shows the gap. Deprecated, no further gains.
- **Context window: 97/100.** 2,000,000-token context → tier 2M+ = 97.
- **Multimodal: 62/100.** Text + image in; text-only out — image-capable, no audio or video.
- **Coding: 72/100.** No SWE-bench; tool-calling speed tier not a coding specialist.
- **Cost efficiency: 99/100.** $0.20/$0.50 per 1M is exceptionally cheap for a 2M-context model.
- **Overall Score: 79/100.** (85+78+97+62+72)/5 = 78.8 → 79. Best fit: high-volume tool-calling with 2M context at minimal cost; Grok 4.3 is the current recommended upgrade.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (xAI official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
