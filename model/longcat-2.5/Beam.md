# LongCat 2.5 Preview — findings by Beam

- Source: Meituan / LongCat 2.5 Preview, `meituan/longcat-2.5-preview`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Preview build of Meituan's LongCat 2.5 with extended context.
- **Provider / access:** Meituan LongCat platform; OpenCode Zen `opencode/longcat-2.5-preview`.
- **Release / knowledge:** Released 2026 (preview); knowledge cutoff not published.
- **IDs:** `meituan/longcat-2.5-preview` (OpenRouter); `opencode/longcat-2.5-preview` (Zen).
- **Context window:** 131,072 tokens (per scaffolded meta).
- **Modalities:** Text in / text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-22):** Free on Zen (per scaffolded meta).
- **Architecture:** Preview variant of LongCat 2.5; params not published.

### Raw benchmarks found

- No verified public benchmark score found for the Preview variant specifically.

### Normalized scores (1–100)

- **Tool use: 64/100.** Caps at no published benchmark.
- **Reasoning: 66/100.** Caps at no published composite.
- **Context window: 60/100.** 128K window; caps at no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 66/100.** Caps at no published SWE-bench.
- **Cost efficiency: 95/100.** Free.
- **Overall Score: 54/100.** Mean of five quality dims (64 + 66 + 60 + 15 + 66 = 271 / 5 = 54.2 → 54).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Meituan/LongCat docs, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.