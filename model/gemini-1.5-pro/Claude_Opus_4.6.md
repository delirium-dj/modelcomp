# Gemini 1.5 Pro — findings by Claude Opus 4.6

- Source: Google / Gemini 1.5 Pro
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's pioneering long-context multimodal model (2024). First commercial model with 2M token context window. Processed 1hr video, 11hr audio, or 700K+ words in a single prompt. Discontinued Sep 2025.
- **Provider / access:** Google AI Studio, Vertex AI. Discontinued 2025-09-24. Legacy model.
- **Release / knowledge:** 2024-05-23 release; 002 update Sep 2024. Discontinued 2025-09-24.
- **IDs:** `google/gemini-1.5-pro-002` (discontinued)
- **Context window:** 2,000,000 tokens (2M).
- **Modalities:** Text, image, audio, video, code in; text out; function calling; JSON mode.
- **Pricing (as of 2026-10-12):** Discontinued. Historical: ~$1.25 / $5.00 per 1M tokens.
- **Architecture:** Proprietary; Google's MoE-based long-context architecture. Pioneered 2M context commercially.

### Raw benchmarks found

- MMLU-Pro, math, vision improvements in 002 update (source: artificialanalysis.ai)
- Among top-tier models of its time per independent evaluations
- No specific SWE-bench/GPQA scores widely published for this generation

### Normalized scores (1–100)

- **Tool use: 65/100.** Function calling supported. Pre-agentic era model. Not optimized for complex agent workflows. Now discontinued.
- **Reasoning: 72/100.** Strong for 2024 era but now significantly behind frontier (90%+ GPQA models). Missing standalone verification.
- **Context window: 97/100.** 2M tokens — one of the largest ever commercially offered (ref: 2M = 97). Pioneering achievement.
- **Multimodal: 80/100.** Text + image + audio + video + code in; text out. Full multimodal input including video and audio. Among the most comprehensive multimodal input ever.
- **Coding: 62/100.** 2024-era coding capabilities. No SWE-bench Verified score published. Now far below frontier coding models.
- **Cost efficiency: 72/100.** Historical ~$1.25/$5 was competitive at the time. Now discontinued with much better successors.
- **Overall Score: 75/100.** Mean of (65 + 72 + 97 + 80 + 62) / 5 = 75.2, rounded to 75. Historically significant for pioneering 2M context and full multimodal; now a discontinued legacy model.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-12
- Method: Public internet research (Google docs, artificialanalysis.ai, gate.ai, fast.io, llm-stats.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
