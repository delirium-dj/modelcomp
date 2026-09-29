# GPT-5 — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-5 (`gpt-5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's GPT-5 model, a reasoning model with tool use and vision capabilities, positioned as a mid-tier option in the GPT-5 family.
- **Provider / access:** OpenAI API `gpt-5`. Responses API / Chat Completions API.
- **Release / knowledge:** 2025 (exact date not publicly specified); knowledge cutoff not publicly specified.
- **IDs:** `openai/gpt-5`
- **Context window:** 400K tokens (verified via BenchLM).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $0.625/$5.00 per 1M in/out.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **~59.1%** (GPT-5.1 lineage, BenchLM)
- OSWorld-Verified: **~61.4%** (GPT-5.1 lineage, BenchLM)

Reasoning / knowledge:

- No verified public score found for GPT-5 specifically.

Coding:

- SWE-bench Lite: **54.3%** (PricePerToken)
- Vibe Code Bench: **~24.61%** (GPT-5.1 lineage, BenchLM)

Long context:

- 400K token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.0 at ~59.1% and OSWorld-Verified at ~61.4% are moderate. Capped by limited agentic benchmark coverage.
- **Reasoning: 55/100.** No verified public reasoning benchmark found for GPT-5 specifically. Capped by absence of data.
- **Context window: 75/100.** 400K token context window is decent but below the 1M+ frontier standard.
- **Multimodal: 70/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 55/100.** SWE-bench Lite at 54.3% is moderate; Vibe Code Bench at ~24.61% is weak. Capped by limited coding benchmark coverage.
- **Cost efficiency: 90/100.** $0.625/$5.00 per 1M is very cheap for a frontier model; excellent value.
- **Overall Score: 64/100.** Mean of (65+55+75+70+55)/5 = 64.0 → 64. Best-fit recommendation: budget-friendly GPT-5 family model with solid tool use and cost efficiency; held back by limited public benchmark coverage and smaller context window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
