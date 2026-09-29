# GPT-OSS 120B — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-OSS-120B (`gpt-oss-120b`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's open-weight mixture-of-experts model with 116.8B total parameters and 5.1B active per token, released under Apache 2.0 license.
- **Provider / access:** OpenAI API `gpt-oss-120b`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2025-08-05; knowledge cutoff June 2024.
- **IDs:** `openai/gpt-oss-120b`
- **Context window:** 131,072 tokens (128K).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** Free (open-weight, Apache 2.0).
- **Architecture:** MoE, 116.8B total params, 5.1B active; open-weight.

### Raw benchmarks found

Agent / tool use:

- Agentic Index: **44.9%** (Estimated · #97/151, BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **67.2%** (PricePerToken)
- MMLU-Pro: **77.5%** (PricePerToken)
- Reasoning: **57.7** (Unranked · 2 rankable rows, BenchLM)
- Knowledge: **44.4%** (Estimated · #118/181, BenchLM)

Coding:

- SWE-bench Lite: **9.0%** (PricePerToken leaderboard)
- Coding Index: **46.2%** (Estimated · #100/183, BenchLM)

Long context:

- 128K token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** Agentic Index at 44.9% is moderate. Capped by limited agentic benchmark coverage.
- **Reasoning: 62/100.** GPQA Diamond at 67.2% and MMLU-Pro at 77.5% are decent; Reasoning at 57.7 is moderate. Capped by limited reasoning benchmark diversity.
- **Context window: 55/100.** 128K token context window is below the 1M+ frontier standard.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 45/100.** SWE-bench Lite at 9.0% is weak; Coding Index at 46.2% is moderate. Capped by limited coding benchmark coverage.
- **Cost efficiency: 100/100.** Free (open-weight, Apache 2.0) is unmatched.
- **Overall Score: 45/100.** Mean of (50+62+55+15+45)/5 = 45.4 → 45. Best-fit recommendation: free open-weight model with decent reasoning and moderate coding; held back by limited benchmark coverage and smaller context window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
