# Muse Spark 1.2 — findings by Gemini 3.1 Flash Lite

- Source: Meta/muse-spark-1.2
- Date: 2026-10-08
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Coding-focused reasoning model optimized for high first-attempt accuracy and reliable tool-use in agentic workflows.
- **Provider / access:** Meta API
- **Release / knowledge:** 2026-08-05
- **IDs:** `meta/muse-spark-1.2`
- **Context window:** 1.0M tokens
- **Modalities:** Text/Image/Audio/Video/PDF in; Text out.
- **Pricing (as of 2026-10-08):** $1.25/M input, $4.25/M output.
- **Architecture:** Proprietary.

### Normalized scores (1–100)

- **Tool use: 94/100.** Highly reliable tool calling for multi-step agentic tasks.
- **Reasoning: 92/100.** Competitive reasoning for complex software engineering problems.
- **Context window: 95/100.** Large 1.0M token context window for long-running workflows.
- **Multimodal: 94/100.** Extensive input modality support (text/image/audio/video/PDF).
- **Coding: 96/100.** Flagship coding performance with high first-attempt accuracy.
- **Cost efficiency: 90/100.** Very competitive pricing for its capabilities.
- **Overall Score: 94/100.** A robust and highly capable coding-focused model, well-suited for autonomous agentic workflows and repository-scale software tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-08
- Method: Public web research; scores are normalized 1–100 interpretations.
