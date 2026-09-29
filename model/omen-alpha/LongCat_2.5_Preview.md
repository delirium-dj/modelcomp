# Omen Alpha — findings by LongCat 2.5 Preview

- Source: Stealth/Omen Alpha (`omen-alpha`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** An anonymous stealth coding model available through OpenCode Go and Tokenra, widely reported as the 2.0 successor to Ox Alpha. Features 500K context, reasoning, and tool calling at a budget price point.
- **Provider / access:** OpenCode Go `omen-alpha`; Tokenra API. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-09-04; knowledge cutoff not publicly specified.
- **IDs:** `omen-alpha` (OpenCode Go)
- **Context window:** ~500,000 tokens (community-reported).
- **Modalities:** Text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-09-29):** $0.20/$0.66 per 1M in/out (cached $0.04).
- **Architecture:** Unknown (stealth release).

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for Omen Alpha specifically.

Reasoning / knowledge:

- No verified public reasoning benchmark found for Omen Alpha specifically.

Coding:

- LM Market Cap: composite score **40** (rank 260/406 in Coding)
- ModelCompare.dev: Coding fit **85/100**, Production-readiness **65/100**

Long context:

- ~500K token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool calling supported but no verified public agentic benchmark found. Capped by absence of data.
- **Reasoning: 55/100.** No verified public reasoning benchmark found for Omen Alpha. Capped by absence of data.
- **Context window: 80/100.** ~500K token context window is decent but below the 1M+ frontier standard.
- **Multimodal: 75/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 50/100.** LM Market Cap composite score 40 (rank 260/406) indicates moderate coding performance. Capped by limited public benchmark coverage.
- **Cost efficiency: 90/100.** $0.20/$0.66 per 1M is very cheap for a frontier-tier model.
- **Overall Score: 63/100.** Mean of (55+55+80+75+50)/5 = 63.0 → 63. Best-fit recommendation: promising budget-friendly stealth model with strong cost efficiency; held back by very limited public benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
