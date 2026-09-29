# MiniMax M3.1 Flash Preview — findings by LongCat 2.5 Preview

- Source: MiniMax/MiniMax-M3.1-Flash-Preview (`MiniMax-M3.1-Flash-Preview`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** MiniMax's latest text model featuring native multimodal capabilities and a 1M-token context window. Released as a stealth preview with limited public information.
- **Provider / access:** MiniMax API `MiniMax-M3.1-Flash-Preview`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-09-23; knowledge cutoff not publicly specified.
- **IDs:** `minimax/MiniMax-M3.1-Flash-Preview`
- **Context window:** 1,000,000 tokens (1M) (verified via Models.dev).
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** Not publicly specified (free during beta preview).
- **Architecture:** Unknown (stealth release).

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for M3.1 Flash Preview specifically.

Reasoning / knowledge:

- No verified public reasoning benchmark found for M3.1 Flash Preview specifically.

Coding:

- LM Market Cap: composite score **40** (rank 260/406 in Coding)

Long context:

- 1M token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified public agentic benchmark found for M3.1 Flash Preview. Capped by absence of data.
- **Reasoning: 55/100.** No verified public reasoning benchmark found for M3.1 Flash Preview. Capped by absence of data.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 80/100.** Text, image, and video input with text output; strong multimodal support.
- **Coding: 50/100.** LM Market Cap composite score 40 (rank 260/406) indicates moderate coding performance. Capped by limited public benchmark coverage.
- **Cost efficiency: 95/100.** Free during beta preview is unmatched.
- **Overall Score: 66/100.** Mean of (50+55+95+80+50)/5 = 66.0 → 66. Best-fit recommendation: promising stealth model with strong multimodal support and free preview pricing; held back by very limited public benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
