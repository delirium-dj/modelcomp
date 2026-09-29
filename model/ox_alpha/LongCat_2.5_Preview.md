# Ox Alpha — findings by LongCat 2.5 Preview

- Source: Stealth/Ox Alpha (`stealth/ox-alpha`; identified as GLM-5.3-Flash from Zhipu AI)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** A stealth reasoning model for coding and agentic work, launched anonymously on OpenRouter. Independent fingerprinting identified it as GLM-5.3-Flash from Zhipu AI. Offers 1M context and multimodal input at no cost during preview.
- **Provider / access:** OpenRouter `stealth/ox-alpha`; OpenCode, Cline, Nous Research portal+. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-08-20; knowledge cutoff August 2026.
- **IDs:** `stealth/ox-alpha` (OpenRouter), `glm-5.3-flash` (Zhipu AI)
- **Context window:** 1,048,576 tokens (1M); max output 131,072 tokens (verified via Ox Alpha).
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0/$0 per 1M (free during preview); GLM-5.3-Flash is $0.15/$0.25 per 1M.
- **Architecture:** MoE, 320B total params, 18B active (GLM-5.3-Flash); open-weight.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for Ox Alpha specifically.

Reasoning / knowledge:

- AA Intelligence Index: **57** (GLM-5.3-Flash, Artificial Analysis via GIGAZINE)

Coding:

- DeepSWE subset: **80%** (10-task sample, unofficial) / **63%** (full 113-task run) (Ben Davis, Gate News)
- Coding benchmark: **80%** mean pass rate on 10 tasks (vs Fable 5's 65%) (Ox Alpha)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 65/100.** No verified public agentic benchmark found for Ox Alpha. Capped by absence of data.
- **Reasoning: 70/100.** AA Intelligence Index at 57 (GLM-5.3-Flash) is solid. Capped by limited reasoning benchmark coverage.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 80/100.** Text, image, and video input with text output. Capped by no audio input.
- **Coding: 72/100.** DeepSWE at 63% (full run) and 80% (10-task sample) are solid. Capped by limited coding benchmark coverage.
- **Cost efficiency: 100/100.** $0/$0 per 1M during preview is unmatched; GLM-5.3-Flash at $0.15/$0.25 is also exceptional value.
- **Overall Score: 76/100.** Mean of (65+70+95+80+72)/5 = 76.4 → 76. Best-fit recommendation: excellent value stealth model with strong coding and free preview pricing; identified as GLM-5.3-Flash with solid all-around performance.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
