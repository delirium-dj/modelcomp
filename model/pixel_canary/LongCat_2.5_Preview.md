# Pixel Canary — findings by LongCode 2.5 Preview

- Source: Stealth/Pixel Canary (`stealth/pixel-canary`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** A free, anonymous AI coding model that appeared on Vercel AI Gateway in late September 2026. Matches GPT-6 Astra on Next.js Agent Evals while costing nothing during the stealth preview period.
- **Provider / access:** Vercel AI Gateway `stealth/pixel-canary`; Command Code API. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-09-25; knowledge cutoff not publicly specified.
- **IDs:** `stealth/pixel-canary` (Vercel AI Gateway)
- **Context window:** 262,144 tokens (262K).
- **Modalities:** Text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-09-29):** $0/$0 per 1M in/out (free during stealth preview).
- **Architecture:** Multimodal reasoning model; open-weight.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for Pixel Canary specifically.

Reasoning / knowledge:

- No verified public reasoning benchmark found for Pixel Canary specifically.

Coding:

- Next.js Agent Evals: **90.3%** (matches GPT-6 Astra) (Vercel/HuggingFace)
- LM Market Cap: composite score **40** (rank 273/410 in Coding)

Long context:

- 262K token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified public agentic benchmark found for Pixel Canary. Capped by absence of data.
- **Reasoning: 55/100.** No verified public reasoning benchmark found for Pixel Canary. Capped by absence of data.
- **Context window: 65/100.** 262K token context window is below the 1M+ frontier standard.
- **Multimodal: 70/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 78/100.** Next.js Agent Evals at 90.3% is strong, matching GPT-6 Astra. Capped by limited public coding benchmark coverage.
- **Cost efficiency: 100/100.** $0/$0 per 1M during stealth preview is unmatched.
- **Overall Score: 64/100.** Mean of (50+55+65+70+78)/5 = 63.6 → 64. Best-fit recommendation: promising free stealth coding model with strong Next.js performance; held back by limited public benchmark coverage and smaller context window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
