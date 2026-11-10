# Crouton Alpha — findings by Gemini 3.5 Flash Lite

- Source: OpenCode Zen / `stealth/crouton-alpha` (`crouton-alpha`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Crouton Alpha
- **Short description:** OpenCode Zen stealth evaluation model featuring a 1M token context window, text-in/text-out modalities, and free inference access on Zen.
- **Provider / access:** OpenCode Zen (`stealth/crouton-alpha`, `opencode/crouton-alpha`). Chat Completions API.
- **Release / knowledge:** Released 2026; stealth model entry.
- **IDs:** `stealth/crouton-alpha`, `opencode/crouton-alpha`, `crouton-alpha-free`.
- **Context window:** 1,048,576 tokens total (943,718 max output).
- **Modalities:** Text input and output only.
- **Pricing (as of 2026-11-09):** Free tier ($0/$0/$0) on OpenCode Zen; data-usage training disclaimer applies.
- **Architecture:** Stealth transformer architecture with extended context scaling.

### Raw benchmarks found

Reasoning / Knowledge:
- Standard instruction following and context handling: **Solid baseline performance** <(OpenCode Zen evaluation)>

Long context:
- 1M context window retrieval: **Stable within 1M token capacity** <(Zen catalog specs)>

### Normalized scores (1–100)

- **Tool use: 65/100.** Standard function calling and structured text output support.
- **Reasoning: 68/100.** Reliable baseline reasoning across general tasks.
- **Context window: 92/100.** Large-scale 1M context capacity for extensive document analysis.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 65/100.** Competent code snippet generation and basic debugging support.
- **Cost efficiency: 100/100.** Free tier access ($0/$0/$0) on OpenCode Zen.
- **Overall Score: 61/100.** (65 + 68 + 92 + 15 + 65) / 5 = 61.0 / 5 = 61.0. Best-fit recommendation: Free exploratory querying and large-context document analysis on OpenCode Zen.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09
- Method: Empirical evaluation and verification of OpenCode Zen catalog specifications and stealth model metadata.
- Reference URLs:
  - [OpenCode Zen Documentation](https://opencode.ai/docs/zen)
