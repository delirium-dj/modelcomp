# LongCat 2.5 Preview — findings by LongCat 2.5 Preview

- Source: Meituan/LongCat 2.5 Preview (`longcat-2.5-preview`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's LongCat 2.5 Preview model, an open-weight reasoning model with 1M context window and tool calling support.
- **Provider / access:** Meituan API. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-07; knowledge cutoff not publicly specified.
- **IDs:** `meituan/longcat-2.5-preview`
- **Context window:** 1,049K tokens (1M) (verified via PricePerToken).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.30/$1.20 per 1M in/out (cached $0.006).
- **Architecture:** Open-weight.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for LongCat 2.5 Preview specifically.

Reasoning / knowledge:

- GPQA: **78.0%** (PricePerToken)

Coding:

- No verified public coding benchmark found for LongCat 2.5 Preview specifically.

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified public agentic benchmark found for LongCat 2.5 Preview. Capped by absence of data.
- **Reasoning: 70/100.** GPQA at 78.0% is solid. Capped by limited reasoning benchmark coverage.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 50/100.** No verified public coding benchmark found for LongCat 2.5 Preview. Capped by absence of data.
- **Cost efficiency: 85/100.** $0.30/$1.20 per 1M is cheap for a frontier-tier model; good value.
- **Overall Score: 56/100.** Mean of (50+70+95+15+50)/5 = 56.0 → 56. Best-fit recommendation: limited public benchmark data available for LongCat 2.5 Preview; scores are provisional and should be updated as more benchmarks are released.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
