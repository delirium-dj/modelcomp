# Ling 3.0 Flash VL — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** ling-3.0-flash-vl

---

## Model Overview

Ling 3.0 Flash VL is inclusionAI's September 2026 MIT-licensed open-weight vision-language MoE model (124B total / 5.5B active parameters). Native 131K context (262K via YaRN, 32K output). Accepts text, image, and video input; text output. Specialized for GUI agents and visual web navigation. Priced at $0.06/$0.18 per 1M (OpenRouter/DeepInfra); $0 self-hosted (MIT license).

---

## Scores

- **Tool use: 83/100.** WebVoyager 90.8 is an exceptional score for visual GUI agent tool use — web navigation with visual grounding. Demonstrates strong multi-step tool chaining in visual agentic tasks.
- **Reasoning: 79/100.** MMMU-Pro 79.0 and MMSearch 79.0 confirm solid multimodal reasoning. 5.5B active parameters limits depth on the hardest text reasoning; visual reasoning is the core strength.
- **Context window: 65/100.** 131K native maps to the 128K tier (65). YaRN to 262K available but with potential degradation; scored on the native window.
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage, particularly strong for visual GUI tasks.
- **Coding: 65/100.** Terminal coding trails the text-only Flash line per meta note. 5.5B active budget limits depth on pure coding benchmarks. Best suited for visual coding interfaces and GUI automation rather than raw code generation.
- **Cost efficiency: 98/100.** $0.06/$0.18 per 1M is ultra-cheap. MIT open weights available for $0 self-hosted. Among the most cost-efficient multimodal options available.
- **Overall Score: 72.8/100.** Mean of Tool use (83) + Reasoning (79) + Context (65) + Multimodal (72) + Coding (65) = 364 / 5 = 72.8. A visual-agent specialist at rock-bottom cost — recommended for GUI automation, web navigation, and visual document pipelines where $0.06/M matters.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
