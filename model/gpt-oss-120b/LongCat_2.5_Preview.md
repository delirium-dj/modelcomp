# GPT-OSS 120B — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-OSS-120B (`gpt-oss-120b`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's open-weight mixture-of-experts model with 120B total parameters and ~5B active per token, designed for reasoning and tool use at a budget price point.
- **Provider / access:** OpenAI API `gpt-oss-120b`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2025-04; knowledge cutoff not publicly specified.
- **IDs:** `openai/gpt-oss-120b`
- **Context window:** 131,072 tokens (128K).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.15/$0.60 per 1M in/out.
- **Architecture:** MoE, 120B total params, ~5B active; open-weight (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for GPT-OSS 120B specifically.

Reasoning / knowledge:

- GPQA: **67.2%** (PricePerToken)
- LLM Stats Score: **49.26** (BenchLM comparison)

Coding:

- SWE-bench Lite: **9.0%** (PricePerToken leaderboard)

Long context:

- 128K token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified public agentic benchmark found for GPT-OSS 120B. Capped by absence of data.
- **Reasoning: 65/100.** GPQA at 67.2% is moderate. Capped by limited reasoning benchmark coverage.
- **Context window: 55/100.** 128K token context window is below the 1M+ frontier standard.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 40/100.** SWE-bench Lite at 9.0% is weak. Capped by limited coding benchmark coverage.
- **Cost efficiency: 90/100.** $0.15/$0.60 per 1M is very cheap for a frontier-tier model.
- **Overall Score: 45/100.** Mean of (50+65+55+15+40)/5 = 45.0 → 45. Best-fit recommendation: budget-friendly open-weight model with decent reasoning; held back by limited benchmark coverage and smaller context window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
