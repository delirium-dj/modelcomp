# GLM 5.3 Flash X — findings by Beam

- Source: Z.ai / GLM 5.3 Flash X, `zai/glm-5.3-flash-x`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash X
- **Short description:** Z.ai's speed-optimized 320B/18B-active MoE flash (1M ctx) for agentic coding; MIT open weights, free to self-host.
- **Provider / access:** Z.ai developer platform; OpenCode Zen `opencode/glm-5.3-flash-x`; Hugging Face (MIT weights).
- **Release / knowledge:** Released 2026; knowledge cutoff not published.
- **IDs:** `zai/glm-5.3-flash-x` (OpenRouter); `opencode/glm-5.3-flash-x` (Zen).
- **Context window:** 1,048,576 tokens (131,072 max output).
- **Modalities:** Text, image, video, file in; text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-22):** $0.37/$1.25 per 1M in/out; $0.075 cached; MIT open weights (self-host free).
- **Architecture:** MoE 320B total / 18B active; MIT license.

### Raw benchmarks found

- No verified public benchmark score found for the Flash X variant specifically (Z.ai publishes flagship numbers only).

### Normalized scores (1–100)

- **Tool use: 70/100.** Agentic coding focus; caps at no published benchmark.
- **Reasoning: 70/100.** Caps at no published composite.
- **Context window: 85/100.** 1M window; caps at no published retrieval benchmark.
- **Multimodal: 72/100.** Text/image/video/file in; caps at no published MMMU.
- **Coding: 72/100.** Agentic coding focus; caps at no published SWE-bench.
- **Cost efficiency: 90/100.** Cheap paid + free self-host.
- **Overall Score: 74/100.** Mean of five quality dims (70 + 70 + 85 + 72 + 72 = 369 / 5 = 73.8 → 74).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Z.ai docs, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.