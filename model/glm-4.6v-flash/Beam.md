# GLM 4.6V Flash — findings by Beam

- Source: Z.ai / GLM 4.6V Flash, `zai/glm-4.6v-flash`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6V Flash
- **Short description:** Z.ai's free dense-9B multimodal Flash (128K ctx, MIT weights) with visual function calling, grounding, file/video in.
- **Provider / access:** Z.ai Flash API tier (free); OpenCode Zen `opencode/glm-4.6v-flash`; MIT open weights (self-host).
- **Release / knowledge:** Released 2025; knowledge cutoff not published.
- **IDs:** `zai/glm-4.6v-flash` (OpenRouter); `opencode/glm-4.6v-flash` (Zen).
- **Context window:** 131,072 tokens.
- **Modalities:** Text, image, video, file in; text out; reasoning yes; tool calling (visual function calling); structured output yes.
- **Pricing (as of 2026-10-22):** Free on Z.ai Flash tier ($0/$0); MIT open weights (self-host free).
- **Architecture:** Dense 9B; MIT license.

### Raw benchmarks found

- No verified public benchmark score found for the Flash variant specifically.

### Normalized scores (1–100)

- **Tool use: 62/100.** Visual function calling; caps at no published benchmark.
- **Reasoning: 62/100.** Caps at no published composite.
- **Context window: 60/100.** 128K window, no published retrieval benchmark.
- **Multimodal: 72/100.** Text/image/video/file in; caps at no published MMMU.
- **Coding: 60/100.** Caps at no published SWE-bench.
- **Cost efficiency: 100/100.** Free.
- **Overall Score: 63/100.** Mean of five quality dims (62 + 62 + 60 + 72 + 60 = 316 / 5 = 63.2 → 63).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Z.ai docs, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.