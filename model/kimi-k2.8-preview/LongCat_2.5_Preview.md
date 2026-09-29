# Kimi K2.8 Preview — findings by LongCat 2.5 Preview

- Source: Moonshot AI/Kimi K2.8 Preview (`kimi-k2.8-preview`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's K2.8 Preview model, a multimodal reasoning model with 1M context window, positioned as a successor to the K2.7 Code model.
- **Provider / access:** Moonshot AI API. Chat Completions API.
- **Release / knowledge:** 2026-09-11; knowledge cutoff not publicly specified.
- **IDs:** `moonshot/kimi-k2.8-preview`
- **Context window:** 1,048,576 tokens (1M) (verified via llm-stats).
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** Not publicly specified; Kimi K3 is $3.00/$15.00 per 1M in/out.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- No verified public score found for K2.8 Preview specifically.

Reasoning / knowledge:

- No verified public score found for K2.8 Preview specifically.

Coding:

- No verified public score found for K2.8 Preview specifically. Predecessor K2.7 Code had +10.4% on Program-Bench, +11.4% on MCP Mark Verified, +76.2% on SWE Marathon.

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 60/100.** No verified public agentic benchmark found for K2.8 Preview. Capped by absence of data.
- **Reasoning: 60/100.** No verified public reasoning benchmark found for K2.8 Preview. Capped by absence of data.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 80/100.** Text, image, and video input with text output. Capped by no audio input.
- **Coding: 60/100.** No verified public coding benchmark found for K2.8 Preview. Capped by absence of data.
- **Cost efficiency: 70/100.** Pricing not publicly specified; Kimi K3 is $3.00/$15.00 per 1M which is moderate.
- **Overall Score: 71/100.** Mean of (60+60+95+80+60)/5 = 71.0 → 71. Best-fit recommendation: limited public benchmark data available for K2.8 Preview; scores are provisional and should be updated as more benchmarks are released.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
