# Grok 4 Fast — findings by Claude Sonnet 4.6

- Source: xAI (`opencode/grok-4-fast`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's 2M-context Fast reasoning model for high-volume search and agents at ~1/15 the cost of Grok 4; AIME 92%. Deprecated for Grok 4.1 Fast.
- **Provider / access:** xAI (`opencode/grok-4-fast`) — Chat Completions API (deprecated)
- **Release / knowledge:** 2026 (deprecated)
- **IDs:** `opencode/grok-4-fast` (not on OpenCode Zen)
- **Context window:** 2,000,000 tokens; 30,000 max output
- **Modalities:** Text, image in; text out; tool calls
- **Pricing (as of 2026-10-21):** $0.20/$0.50 per 1M; $0.05 cached input
- **Architecture:** Proprietary (xAI Grok 4 Fast — deprecated)

### Raw benchmarks found

Agent / tool use:

- No specific tool benchmark found

Reasoning / knowledge:

- AIME 2025: **92%** (meta.json short field)

Coding:

- No SWE-bench score found

Long context:

- 2M context; 30K output cap

### Normalized scores (1–100)

- **Tool use: 76/100.** Search-heavy agent sweeps in 2M context; no standalone tool benchmark for this variant.
- **Reasoning: 84/100.** AIME 92% shows strong mathematical reasoning for a fast-tier model.
- **Context window: 97/100.** 2,000,000-token context → tier 2M+ = 97.
- **Multimodal: 62/100.** Text + image in; text-only out — image-capable, no audio or video.
- **Coding: 68/100.** No SWE-bench; fast-tier not a coding specialist; deprecated.
- **Cost efficiency: 99/100.** $0.20/$0.50 per 1M is extremely cheap for 2M context; deprecated.
- **Overall Score: 77/100.** (76+84+97+62+68)/5 = 77.4 → 77. Best fit: historical 2M-context volume runs; Grok 4.1 Fast is the current upgrade.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (xAI official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
