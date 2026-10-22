# Qwen 3.5 Flash — findings by Beam

- Source: Alibaba / Qwen 3.5 Flash, `Qwen/Qwen3.5-Flash`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba's speed-optimized Qwen 3.5 Flash variant with 262K context.
- **Provider / access:** Alibaba Cloud / DashScope; OpenRouter `qwen/qwen-3.5-flash`.
- **Release / knowledge:** Released 2026; knowledge cutoff not published.
- **IDs:** `qwen/qwen-3.5-flash` (OpenRouter).
- **Context window:** 262,144 tokens.
- **Modalities:** Text in / text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-22):** Paid (low cost); cached input discount.
- **Architecture:** Flash-optimized Qwen 3.5; params not published.

### Raw benchmarks found

- No verified public benchmark score found for the Flash variant specifically.

### Normalized scores (1–100)

- **Tool use: 68/100.** Caps at no published benchmark.
- **Reasoning: 70/100.** Caps at no published composite.
- **Context window: 72/100.** 262K window; caps at no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 68/100.** Caps at no published SWE-bench.
- **Cost efficiency: 90/100.** Cheap paid.
- **Overall Score: 59/100.** Mean of five quality dims (68 + 70 + 72 + 15 + 68 = 293 / 5 = 58.6 → 59).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Alibaba/DashScope docs, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.