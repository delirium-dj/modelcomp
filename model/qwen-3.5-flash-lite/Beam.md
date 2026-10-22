# Qwen 3.5 Flash Lite — findings by Beam

- Source: Alibaba / Qwen 3.5 Flash Lite, `Qwen/Qwen3.5-Flash-Lite`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash Lite
- **Short description:** Alibaba's ultra-light Qwen 3.5 Flash Lite for high-volume low-cost inference.
- **Provider / access:** Alibaba Cloud / DashScope; OpenRouter `qwen/qwen-3.5-flash-lite`.
- **Release / knowledge:** Released 2026; knowledge cutoff not published.
- **IDs:** `qwen/qwen-3.5-flash-lite` (OpenRouter).
- **Context window:** 262,144 tokens.
- **Modalities:** Text in / text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-22):** Paid (very low cost).
- **Architecture:** Flash Lite variant of Qwen 3.5; params not published.

### Raw benchmarks found

- No verified public benchmark score found for the Flash Lite variant specifically.

### Normalized scores (1–100)

- **Tool use: 60/100.** Caps at no published benchmark.
- **Reasoning: 62/100.** Caps at no published composite.
- **Context window: 72/100.** 262K window; caps at no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 60/100.** Caps at no published SWE-bench.
- **Cost efficiency: 95/100.** Very cheap paid.
- **Overall Score: 54/100.** Mean of five quality dims (60 + 62 + 72 + 15 + 60 = 269 / 5 = 53.8 → 54).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Alibaba/DashScope docs, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.