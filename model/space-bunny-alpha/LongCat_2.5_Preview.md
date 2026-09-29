# Space Bunny Alpha — findings by LongCat 2.5 Preview

- Source: Stealth/Space Bunny Alpha (`stealth/space-bunny-alpha`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha
- **Short description:** An anonymous stealth reasoning model with blazing-fast inference, strong coding capabilities, and native multimodal input support. Always reasons with adjustable effort across a 1M-token context window.
- **Provider / access:** OpenRouter `stealth/space-bunny-alpha`; OpenCode. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-09-23; knowledge cutoff not publicly specified.
- **IDs:** `stealth/space-bunny-alpha` (OpenRouter)
- **Context window:** 1,000,000 tokens (1M); max output 524,288 tokens (verified via OpenRouter).
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $0/$0 per 1M (free during stealth preview).
- **Architecture:** Unknown (stealth).

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for Space Bunny Alpha specifically.

Reasoning / knowledge:

- GPQA Diamond subset: **82.0%** (60-question subset, community evaluation)
- MMLU-Pro: **75%** (community evaluation)
- HLE subset: **46.1%** (300-question subset, 95% CI: 40.4-51.8%) (community evaluation)
- AI BENCHY: **7.0/10** (high reasoning)

Coding:

- No verified public coding benchmark found for Space Bunny Alpha specifically.

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified public agentic benchmark found for Space Bunny Alpha. Capped by absence of data.
- **Reasoning: 72/100.** GPQA Diamond subset at 82.0% and MMLU-Pro at 75% are solid. Capped by HLE subset at 46.1%.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 80/100.** Text, image, and video input with text output; strong multimodal support.
- **Coding: 50/100.** No verified public coding benchmark found for Space Bunny Alpha. Capped by absence of data.
- **Cost efficiency: 100/100.** $0/$0 per 1M during stealth preview is unmatched.
- **Overall Score: 69/100.** Mean of (50+72+95+80+50)/5 = 69.4 → 69. Best-fit recommendation: promising stealth model with strong reasoning, multimodal support, and free preview pricing; held back by limited public benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
