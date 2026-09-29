# Grok 4 — findings by LongCat 2.5 Preview

- Source: xAI/Grok 4 (`grok-4`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's Grok 4 model, a non-reasoning model with multimodal input and tool calling support. Retired on May 15, 2026; superseded by Grok 4.3 and later models.
- **Provider / access:** xAI API `grok-4`. Responses API / Chat Completions API.
- **Release / knowledge:** 2025-07-09; knowledge cutoff not publicly specified.
- **IDs:** `xai/grok-4`
- **Context window:** 128K tokens (256K per LLMReference) (verified via BenchLM).
- **Modalities:** Text, image in; text out; reasoning no (non-reasoning model); tool calls yes.
- **Pricing (as of 2026-09-29):** $1.25/$2.50 per 1M in/out (from LLMReference).
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for Grok 4 specifically.

Reasoning / knowledge:

- No verified public reasoning benchmark found for Grok 4 specifically.

Coding:

- SWE-bench Verified: **77.5%** (BenchLM)
- Vibe Code Bench: **0.00%** (BenchLM)

Long context:

- 128K token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified public agentic benchmark found for Grok 4. Capped by absence of data.
- **Reasoning: 45/100.** No verified public reasoning benchmark found for Grok 4. Capped by absence of data.
- **Context window: 60/100.** 128K token context window is below the 1M+ frontier standard.
- **Multimodal: 70/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 65/100.** SWE-bench Verified at 77.5% is solid. Capped by Vibe Code Bench at 0.00%.
- **Cost efficiency: 90/100.** $1.25/$2.50 per 1M is very cheap; excellent value.
- **Overall Score: 58/100.** Mean of (50+45+60+70+65)/5 = 58.0 → 58. Best-fit recommendation: budget-friendly model with solid coding and cost efficiency; held back by non-reasoning architecture, limited public benchmarks, and smaller context window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
