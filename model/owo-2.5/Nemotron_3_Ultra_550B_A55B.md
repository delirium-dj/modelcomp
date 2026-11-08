# Owo 2.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Owo (`opencode/owo-2.5`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owo 2.5
- **Short description:** Owo's September 2026 proprietary LLM with 1M context, multimodal input, and tool use; hosted via Owo API and OpenCode Zen.
- **Provider / access:** Owo API (`owo-2.5`), OpenCode Zen (`opencode/owo-2.5`).
- **Release / knowledge:** 2026-09 release; proprietary commercial license; knowledge cutoff 2026.
- **IDs:** `opencode/owo-2.5`, `owo-2.5` (Owo API).
- **Context window:** 1,048,576 tokens total; 256,000 max output.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-11-08):** $0.40 per 1M input tokens, $3.20 per 1M output tokens (official Owo API docs).
- **Architecture:** Proprietary transformer with 1M context and multimodal input support; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- No verified public agent/tool-use benchmarks found for Owo 2.5 at this time.

Reasoning / knowledge:

- No verified public reasoning/knowledge benchmarks found for Owo 2.5 at this time.

Coding:

- No verified public coding benchmarks found for Owo 2.5 at this time.

Long context / vision:

- 1,048,576 token context window claimed; no public long-context retrieval benchmarks verified.
- Image input support for visual tasks.

### Normalized scores (1–100)

- **Tool use: 53/100.** No verified agent benchmarks; 1M context and tool use support suggest moderate potential.
- **Reasoning: 55/100.** No verified reasoning benchmarks; proprietary model with undisclosed architecture limits assessment.
- **Context window: 76/100.** 1M token context with 256K max output; no verified retrieval scores at scale.
- **Multimodal: 41/100.** Text and image input only; no audio/video support; no benchmarks to verify multimodal quality.
- **Coding: 54/100.** No verified coding benchmarks; tool use support suggests basic coding capability.
- **Cost efficiency: 83/100.** Reasonable $0.40/$3.20 pricing for 1M context model; output cost higher than input.
- **Overall Score: 56/100.** Arithmetic mean of five quality dimensions: (53 + 55 + 76 + 41 + 54) / 5 = 279 / 5 = 55.8 → 56. Owo's 1M context proprietary model with multimodal input; lack of verified public benchmarks across all core capabilities limits confidence.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Public internet research across Owo API documentation and developer guides; scores are normalized 1–100 interpretations, not official vendor scores. Note: zero verified public benchmarks found for this model at time of research.
- Reference URLs:
  - [Owo API Documentation](https://owo.ai/docs)
  - [OpenCode Zen — Owo 2.5](https://opencode.net/models/owo-2.5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---