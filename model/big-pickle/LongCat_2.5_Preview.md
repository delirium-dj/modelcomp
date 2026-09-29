# Big Pickle — findings by LongCat 2.5 Preview

- Source: OpenCode Zen/Big Pickle (`opencode/big-pickle`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** A reasoning model available through OpenCode Zen with tool calling support. Limited public information is available about this model.
- **Provider / access:** OpenCode Zen API `opencode/big-pickle` (OpenAI-compatible). Base URL: `https://opencode.ai/zen/v1`.
- **Release / knowledge:** Unknown; knowledge cutoff not publicly specified.
- **IDs:** `opencode/big-pickle`
- **Context window:** 200,000 tokens; max output 32,000 tokens (verified via Pi.dev).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** Not publicly specified.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for Big Pickle.

Reasoning / knowledge:

- No verified public reasoning benchmark found for Big Pickle.

Coding:

- No verified public coding benchmark found for Big Pickle.

Long context:

- 200K token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified public agentic benchmark found for Big Pickle. Capped by absence of data.
- **Reasoning: 40/100.** No verified public reasoning benchmark found for Big Pickle. Capped by absence of data.
- **Context window: 65/100.** 200K token context window is below the 1M+ frontier standard.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 40/100.** No verified public coding benchmark found for Big Pickle. Capped by absence of data.
- **Cost efficiency: 50/100.** Pricing not publicly specified.
- **Overall Score: 40/100.** Mean of (40+40+65+15+40)/5 = 40.0 → 40. Best-fit recommendation: limited public benchmark data available for Big Pickle; scores are provisional and should be updated as more benchmarks are released.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
