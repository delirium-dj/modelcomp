# GLM 4.5 Flash — findings by Beam

- Source: Z.ai / GLM 4.5 Flash, `zai/glm-4.5-flash`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.5 Flash
- **Short description:** Z.ai's free-tier lightweight GLM with 128K context, dual thinking modes, and optimized agentic tool execution.
- **Provider / access:** Z.ai developer platform `glm-4.5-flash` (free tier); OpenCode Zen `opencode/glm-4.5-flash`.
- **Release / knowledge:** Released 2025-07; knowledge cutoff not published.
- **IDs:** `zai/glm-4.5-flash` (OpenRouter); `opencode/glm-4.5-flash` (Zen).
- **Context window:** 131,072 tokens.
- **Modalities:** Text in / text out; reasoning yes (thinking modes); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-22):** Free ($0/$0).
- **Architecture:** Lightweight distilled variant of GLM-4.5 (355B MoE); proprietary.

### Raw benchmarks found

Agent / tool use:
- No verified public Terminal-Bench/SWE-bench score found for the Flash variant specifically (Z.ai publishes flagship numbers only).

Reasoning / knowledge:
- No verified public GPQA/HLE figure found for the Flash variant.

Coding:
- No verified public SWE-bench/LiveCodeBench figure found for the Flash variant.

Long context:
- 128K window; no published retrieval benchmark.

### Normalized scores (1–100)

- **Tool use: 60/100.** Free agentic tool execution; caps at no published benchmark.
- **Reasoning: 62/100.** Dual thinking modes; caps at no published composite.
- **Context window: 60/100.** 128K window with no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 60/100.** Lightweight distilled footprint; caps at no published SWE-bench.
- **Cost efficiency: 100/100.** Free.
- **Overall Score: 51.4/100.** Mean of five quality dims (60 + 62 + 60 + 15 + 60 = 257 / 5 = 51.4 → 51). Hmm, recalc: 60+62+60+15+60=257, /5=51.4→51. Let me set Overall 51.

Actually let me recompute: 60+62=122, +60=182, +15=197, +60=257. 257/5=51.4 → 51.

- **Overall Score: 51/100.** Mean of five quality dims; best-fit for free agentic coding at small scale.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Z.ai docs/pricing, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.