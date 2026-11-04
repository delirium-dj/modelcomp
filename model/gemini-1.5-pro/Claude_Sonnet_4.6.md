# Gemini 1.5 Pro — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** gemini-1.5-pro

---

## Model Overview

Gemini 1.5 Pro was Google's February 2024 long-context landmark model — the first to achieve 2M token context with 99% needle-in-a-haystack recall at 1M tokens. MMLU 85.9%. Accepts text, image, audio, and video input; text output. Retired from the Gemini API in 2025. Last published pricing was $1.25/$5.00 per 1M (up to 128K) and $2.50/$10.00 above. Kept as a historical reference point.

---

## Scores

- **Tool use: 72/100.** Native tool use capability confirmed with strong long-context retrieval. 2026-era agentic benchmarks were not published for this model; scored based on 2024 release characteristics and known toolcalling competency at release. Retired so no further community validation.
- **Reasoning: 79/100.** MMLU 85.9% confirms strong general reasoning. As a 2024-era model, graduate-level scientific reasoning (GPQA) benchmarks were not fully established at release. Respectable for its generation; clearly superseded by Gemini 2.x and 3.x family.
- **Context window: 97/100.** 2M token context maps to the 2M+ tier (97). The first production model to achieve 2M tokens; 99% recall at 1M was a landmark capability at release.
- **Multimodal: 82/100.** Text, image, audio, and video input; text output — full four-modality input coverage. Maps to the full omni input tier (82–90); scored 82 as a 2024-era model without full omni output.
- **Coding: 73/100.** Solid 2024-era coding capability. SWE-bench was not standard at release; MMLU coding segments and HumanEval-class benchmarks showed strong performance for 2024. Significantly superseded by later Gemini and other frontier models.
- **Cost efficiency: 30/100.** Retired — no longer purchasable. Historical pricing $1.25/$5.00 per 1M was reasonable at 2024 launch but expensive by 2026 standards. Kept as reference only.
- **Overall Score: 80.6/100.** Mean of Tool use (72) + Reasoning (79) + Context (97) + Multimodal (82) + Coding (73) = 403 / 5 = 80.6. A historical landmark — the model that made 2M-context document analysis routine. Retained as reference; use Gemini 2.0 or 3.x successors for new work.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
