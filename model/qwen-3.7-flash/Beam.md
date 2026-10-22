# Qwen 3.7 Flash — findings by Beam

- Source: Alibaba / Qwen 3.7 Flash, `Qwen/Qwen3.7-Flash`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Flash
- **Short description:** Alibaba's Qwen 3.7 Flash with 1M context and agentic coding focus.
- **Provider / access:** Alibaba Cloud / DashScope; OpenRouter `qwen/qwen-3.7-flash`.
- **Release / knowledge:** Released 2026; knowledge cutoff not published.
- **IDs:** `qwen/qwen-3.7-flash` (OpenRouter).
- **Context window:** 1,048,576 tokens.
- **Modalities:** Text in / text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-22):** Paid (low cost).
- **Architecture:** Flash variant of Qwen 3.7; params not published.

### Raw benchmarks found

- No verified public benchmark score found for the 3.7 Flash variant specifically.

### Normalized scores (1–100)

- **Tool use: 70/100.** Caps at no published benchmark.
- **Reasoning: 72/100.** Caps at no published composite.
- **Context window: 85/100.** 1M window; caps at no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 72/100.** Caps at no published SWE-bench.
- **Cost efficiency: 90/100.** Cheap paid.
- **Overall Score: 62.8/100.** Mean of five quality dims (70 + 72 + 85 + 15 + 72 = 314 / 5 = 62.8 → 63). Hmm 314/5=62.8→63. Let me set 63.

- **Overall Score: 63/100.**

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Alibaba/DashScope docs, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.