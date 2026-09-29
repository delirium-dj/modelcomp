# Grok Build 0.1 — findings by LongCat 2.5 Preview

- Source: xAI/Grok Build 0.1 (`grok-build-0.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's fast coding model trained specifically for agentic software engineering workflows. Powers the Grok Build CLI and is designed for refactoring large codebases, multi-step development, and autonomous tool invocation.
- **Provider / access:** xAI API `grok-build-0.1`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-05-20; knowledge cutoff not publicly specified.
- **IDs:** `xai/grok-build-0.1`
- **Context window:** 256K tokens (verified via Requesty).
- **Modalities:** Text, image in; text out; reasoning yes (always-on); tool calls yes; structured output yes; PDF input yes.
- **Pricing (as of 2026-09-29):** $1.25/$2.50 per 1M in/out.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for Grok Build 0.1 specifically.

Reasoning / knowledge:

- No verified public reasoning benchmark found for Grok Build 0.1 specifically.

Coding:

- LM Market Cap: composite score **40** (rank 243/410 in Coding)
- Quality score: **56** (CostGoat)

Long context:

- 256K token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified public agentic benchmark found for Grok Build 0.1. Capped by absence of data.
- **Reasoning: 50/100.** No verified public reasoning benchmark found for Grok Build 0.1. Capped by absence of data.
- **Context window: 65/100.** 256K token context window is below the 1M+ frontier standard.
- **Multimodal: 70/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 45/100.** LM Market Cap rank 243/410 and composite score 40 indicate moderate coding performance. Capped by limited public benchmark coverage.
- **Cost efficiency: 70/100.** $1.25/$2.50 per 1M is moderate for a coding-focused model.
- **Overall Score: 56/100.** Mean of (50+50+65+70+45)/5 = 56.0 → 56. Best-fit recommendation: limited public benchmark data available for Grok Build 0.1; scores are provisional and should be updated as more benchmarks are released.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
