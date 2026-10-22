# Qwen 3.8 325B — findings by Beam

- Source: Alibaba / Qwen 3.8 325B, `Qwen/Qwen3.8-325B`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 325B
- **Short description:** Alibaba's large Qwen 3.8 (325B) flagship-class model with 1M context.
- **Provider / access:** Alibaba Cloud / DashScope; OpenRouter `qwen/qwen-3.8-325b`.
- **Release / knowledge:** Released 2026; knowledge cutoff not published.
- **IDs:** `qwen/qwen-3.8-325b` (OpenRouter).
- **Context window:** 1,048,576 tokens.
- **Modalities:** Text in / text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-22):** Paid.
- **Architecture:** 325B params (likely MoE); params not published precisely.

### Raw benchmarks found

- No verified public benchmark score found for the 3.8 325B variant specifically.

### Normalized scores (1–100)

- **Tool use: 74/100.** Caps at no published benchmark.
- **Reasoning: 76/100.** Caps at no published composite.
- **Context window: 85/100.** 1M window; caps at no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 74/100.** Caps at no published SWE-bench.
- **Cost efficiency: 60/100.** Paid large model.
- **Overall Score: 65/100.** Mean of five quality dims (74 + 76 + 85 + 15 + 74 = 324 / 5 = 64.8 → 65).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Alibaba/DashScope docs, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.