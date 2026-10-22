# GLM 4.7 Flash — findings by Beam

- Source: Z.ai / GLM 4.7 Flash, `zai/glm-4.7-flash`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.7 Flash
- **Short description:** Z.ai's 30B-A3B MoE lightweight model with 1M context, MIT license, balanced for agentic workflows.
- **Provider / access:** Z.ai developer platform; OpenCode Zen `opencode/glm-4.7-flash`; Hugging Face `zai-org/GLM-4.7-Flash`.
- **Release / knowledge:** Released 2026; knowledge cutoff not published.
- **IDs:** `zai/glm-4.7-flash` (OpenRouter); `opencode/glm-4.7-flash` (Zen).
- **Context window:** 1,048,576 tokens.
- **Modalities:** Text in / text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-22):** Free on Zen; no free tier required.
- **Architecture:** MoE 30B total / 3B active; MIT license.

### Raw benchmarks found

- No verified public benchmark score found for the Flash variant specifically (Z.ai publishes flagship numbers only).

### Normalized scores (1–100)

- **Tool use: 66/100.** Agentic workflows; caps at no published benchmark.
- **Reasoning: 66/100.** Caps at no published composite.
- **Context window: 85/100.** 1M window; caps at no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 66/100.** Caps at no published SWE-bench.
- **Cost efficiency: 95/100.** Free open weights.
- **Overall Score: 60/100.** Mean of five quality dims (66 + 66 + 85 + 15 + 66 = 298 / 5 = 59.6 → 60).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Z.ai docs/HF, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.