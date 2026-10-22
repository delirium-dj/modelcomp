# GLM 4.6 Flash — findings by Beam

- Source: Z.ai / GLM 4.6 Flash, `zai/glm-4.6-flash`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6 Flash
- **Short description:** Z.ai's free-tier Flash variant of GLM-4.6 with 128K context.
- **Provider / access:** Z.ai developer platform `glm-4.6-flash`; OpenCode Zen `opencode/glm-4.6-flash`.
- **Release / knowledge:** Released 2025; knowledge cutoff not published.
- **IDs:** `zai/glm-4.6-flash` (OpenRouter); `opencode/glm-4.6-flash` (Zen).
- **Context window:** 131,072 tokens.
- **Modalities:** Text in / text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-22):** Free ($0/$0).
- **Architecture:** Lightweight Flash variant of GLM-4.6; proprietary.

### Raw benchmarks found

- No verified public benchmark score found for the Flash variant specifically (Z.ai publishes flagship numbers only).

### Normalized scores (1–100)

- **Tool use: 62/100.** Free agentic tool execution; caps at no published benchmark.
- **Reasoning: 64/100.** Caps at no published composite.
- **Context window: 60/100.** 128K window, no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 62/100.** Caps at no published SWE-bench.
- **Cost efficiency: 100/100.** Free.
- **Overall Score: 53/100.** Mean of five quality dims (62 + 64 + 60 + 15 + 62 = 263 / 5 = 52.6 → 53).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Z.ai docs, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.