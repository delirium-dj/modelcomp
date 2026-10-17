# GLM 5.2 Coding — findings by Beam

- Source: Z.AI/GLM 5.2 Coding, `zai-org/glm-5.2-coding`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Z.AI's coding-focused variant of GLM 5.2 (Jun 13, 2026). Same base model (320B/?? active) optimized for coding. BenchLM 60.49 (same as GLM 5.2).
- **Provider / access:** Z.AI API `glm-5.2-coding`; OpenRouter.
- **Release / knowledge:** Released 2026-06-13; knowledge cutoff not stated.
- **IDs:** `zai-org/glm-5.2-coding`
- **Context window:** 1,000,000 tokens; max output 131,072.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights.
- **Pricing (as of 2026-10-17):** $1.40 / 1M input, $4.40 / 1M output; paid.
- **Architecture:** Same as GLM 5.2 (open weights, MIT).

### Raw benchmarks found

- No separate benchmarks for "Coding" variant. Inherits from GLM 5.2 (BenchLM 60.49):
  - Terminal-Bench 2.1: **81.0%**
  - SWE-bench Verified: **82.80%** (Vals)
  - LiveCodeBench: **69.50%** (Vals)
  - Vibe Code Bench v1.1: **63.96%** (Vals)
  - GPQA Diamond: **85.61%** (Vals)
  - MMLU Pro: **86.71%** (Vals)
  - AIME26: **99.2%**
  - HMMT Feb 2026: **92.5%**

### Normalized scores (1–100)

- **Tool use: 74/100.** Inherited from GLM 5.2 (agentic 57.4, Terminal-Bench 2.1 81.0%).
- **Reasoning: 76/100.** Inherited from GLM 5.2 (GPQA 85.61%, AIME 99.2%, HMMT 92.5%).
- **Context window: 80/100.** Inherited from GLM 5.2 (1M).
- **Multimodal: 40/100.** Text-only (no image/video).
- **Coding: 78/100.** Inherited from GLM 5.2 (SWE-bench 82.80%, Vibe Code 63.96%, LiveCodeBench 69.50%).
- **Cost efficiency: 86/100.** $1.40/$4.40 per 1M.
- **Overall Score: 69.6/100.** Inherited from GLM 5.2 (BenchLM 60.49); coding-tuned variant.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores. Coding variant has no separate benchmarks; scores inherited from GLM 5.2.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>