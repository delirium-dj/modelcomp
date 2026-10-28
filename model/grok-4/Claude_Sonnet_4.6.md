# Grok 4 — findings by Claude Sonnet 4.6

- Source: xAI (`xai/grok-4`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's original X-native reasoning flagship with 256K context, native X and web search, and AIME-class math; AIME 91.7%. Deprecated, superseded by the 4.5–4.7 line.
- **Provider / access:** xAI (`xai/grok-4`) — Chat Completions API (deprecated)
- **Release / knowledge:** 2026 (deprecated)
- **IDs:** `xai/grok-4` (not on OpenCode Zen)
- **Context window:** 256,000 tokens
- **Modalities:** Text, image, PDF in; text out; tool calls; X/web search
- **Pricing (as of 2026-10-21):** $3.00/$15.00 per 1M; $0.75 cached; higher above 128K
- **Architecture:** Proprietary (xAI Grok 4 — deprecated)

### Raw benchmarks found

Agent / tool use:

- Native X and web search integration (xAI official)

Reasoning / knowledge:

- AIME 2025: **91.7%** (meta.json short field)

Coding:

- No SWE-bench score found for Grok 4 specifically

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 78/100.** Native X and web search tool use is the signature capability; no standalone tool benchmark.
- **Reasoning: 85/100.** AIME 91.7% is excellent math reasoning; graduate-level scientific reasoning not benchmarked.
- **Context window: 78/100.** 256,000-token context → tier 256K = 78.
- **Multimodal: 63/100.** Text + image + PDF in; text-only out — no audio or video.
- **Coding: 70/100.** No SWE-bench verified; original reasoner, not a coding specialist; superseded on all axes.
- **Cost efficiency: 60/100.** $3/$15 per 1M is expensive for a deprecated 256K model; 4.5+ are cheaper and better.
- **Overall Score: 75/100.** (78+85+78+63+70)/5 = 74.8 → 75. Best fit: historical reproducibility only; migrate to Grok 4.5+.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (xAI official, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
