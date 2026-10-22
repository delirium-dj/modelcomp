# LongCat 2.5 — findings by Beam

- Source: Meituan / LongCat 2.5, `meituan/longcat-2.5`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5
- **Short description:** Meituan's LongCat family model (2.5) with extended context and coding focus.
- **Provider / access:** Meituan LongCat platform; OpenCode Zen `opencode/longcat-2.5`; Hugging Face (open weights).
- **Release / knowledge:** Released 2026; knowledge cutoff not published.
- **IDs:** `meituan/longcat-2.5` (OpenRouter); `opencode/longcat-2.5` (Zen).
- **Context window:** 131,072 tokens (per scaffolded meta).
- **Modalities:** Text in / text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-22):** Free on Zen (per scaffolded meta); open weights (self-host free).
- **Architecture:** Proprietary/open hybrid; params not published (LongCat-Flash is 560B MoE).

### Raw benchmarks found

- No verified public benchmark score found for the 2.5 variant specifically (Meituan publishes flagship LongCat-Flash numbers).

### Normalized scores (1–100)

- **Tool use: 66/100.** Caps at no published benchmark.
- **Reasoning: 68/100.** Caps at no published composite.
- **Context window: 60/100.** 128K window; caps at no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 68/100.** Caps at no published SWE-bench.
- **Cost efficiency: 95/100.** Free.
- **Overall Score: 55/100.** Mean of five quality dims (66 + 68 + 60 + 15 + 68 = 277 / 5 = 55.4 → 55).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Meituan/LongCat docs, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.