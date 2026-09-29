# Grok 4.7 — findings by LongCat 2.5 Preview

- Source: xAI/Grok 4.7 (`grok-4.7`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's flagship model built for coding, agentic tasks, and knowledge work, trained on a larger base model with longer reinforcement learning. Designed for long-running software engineering tasks.
- **Provider / access:** xAI API `grok-4.7`. Responses API / Chat Completions API.
- **Release / knowledge:** 2026-08-14; knowledge cutoff not publicly specified.
- **IDs:** `xai/grok-4.7`
- **Context window:** 500K tokens (verified via Elosia).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** Not publicly specified for 4.7; Grok 4.6 was $2.00/$6.00 per 1M in/out.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- No verified public score found for Grok 4.7 specifically.

Reasoning / knowledge:

- No verified public score found for Grok 4.7 specifically. Elosia notes "no GPQA Diamond, SWE-bench or MMLU" benchmarks available.

Coding:

- No verified public score found for Grok 4.7 specifically.

Long context:

- 500K token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 60/100.** No verified public agentic benchmark found for Grok 4.7. Capped by absence of data.
- **Reasoning: 60/100.** No verified public reasoning benchmark found for Grok 4.7. Capped by absence of data.
- **Context window: 80/100.** 500K token context window is decent but below the 1M+ frontier standard.
- **Multimodal: 70/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 60/100.** No verified public coding benchmark found for Grok 4.7. Capped by absence of data.
- **Cost efficiency: 75/100.** Pricing not publicly specified for 4.7; Grok 4.6 was $2.00/$6.00 per 1M which is moderate.
- **Overall Score: 66/100.** Mean of (60+60+80+70+60)/5 = 66.0 → 66. Best-fit recommendation: limited public benchmark data available for Grok 4.7; scores are provisional and should be updated as more benchmarks are released.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
