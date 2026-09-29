# DeepSeek V4 Vision Exp — findings by LongCat 2.5 Preview

- Source: DeepSeek/DeepSeek-V4-Flash-Vision-Exp (`deepseek-v4-flash-vision-exp`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek's experimental multimodal V4 Flash model with vision, extended context, and reasoning. Released as a beta preview with 1M context and tool calling support.
- **Provider / access:** DeepSeek API `deepseek-v4-flash-vision-exp`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-08-21; knowledge cutoff not publicly specified.
- **IDs:** `deepseek/deepseek-v4-flash-vision-exp`
- **Context window:** 1,048,576 tokens (1M); max output 393,216 tokens (verified via llm-stats).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.22/$0.66 per 1M in/out.
- **Architecture:** MoE, 284B total params, 13B active (V4 Flash lineage); open-weight.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for V4 Flash Vision Exp specifically.

Reasoning / knowledge:

- LLM Stats Reasoning Index: **43.5** (rank 38) (llm-stats)

Coding:

- LLM Stats Coding Index: **35.2** (rank 28) (llm-stats)
- SWE-bench Verified: **79.0%** (V4 Flash lineage, zenmux.ai)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 55/100.** No verified public agentic benchmark found for V4 Flash Vision Exp. Capped by absence of data.
- **Reasoning: 55/100.** LLM Stats Reasoning Index at 43.5 is moderate. Capped by limited reasoning benchmark coverage.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 70/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 60/100.** LLM Stats Coding Index at 35.2 is moderate; SWE-bench Verified at 79.0% (V4 Flash lineage) is solid. Capped by limited coding benchmark coverage.
- **Cost efficiency: 92/100.** $0.22/$0.66 per 1M is very cheap; excellent value for capability.
- **Overall Score: 67/100.** Mean of (55+55+95+70+60)/5 = 67.0 → 67. Best-fit recommendation: budget-friendly experimental multimodal model with solid cost efficiency; held back by limited public benchmark coverage for the Vision Exp variant.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
