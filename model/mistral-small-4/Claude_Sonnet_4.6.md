# Mistral Small 4 — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** mistral-small-4

---

## Model Overview

Mistral Small 4 is Mistral AI's March 2026 MoE model (119B total / ~6.5B active parameters) with native multimodality (text + image input), 256K context, and configurable reasoning effort (standard vs. heavy reasoning modes). Text and image input; text output. Part of the Devstral-lineage agentic coding family. Available via La Plateforme and hosted providers; pricing details vary by provider.

---

## Scores

- **Tool use: 70/100.** Agentic coding capability from the Devstral lineage confirmed. No Terminal-Bench or SWE-bench Verified figure was widely published for the standard mode; reasoning-mode evaluation on coding tasks shows competitive performance outperforming GPT-OSS 120B while generating ~20% fewer tokens.
- **Reasoning: 72/100.** GPQA Diamond ~57.1% (standard mode) to 71.2–76.9% (reasoning-optimized mode, AA data). The wide range reflects the two-mode design. Using the mid-point of the reasoning-enabled range as the representative score.
- **Context window: 78/100.** 256K token context maps to the 256K tier (78). Long-form document parsing and large codebase exploration confirmed.
- **Multimodal: 60/100.** Text and image input; text output. Standard vision-language coverage, no audio or video. Maps to the image tier (60).
- **Coding: 69/100.** LiveCodeBench ~64+ (baseline range) confirms competent code generation for the size class. Devstral lineage validates agentic coding capability. Specialized models outperform on hard competitive iterations; this is a generalist-first model with configurable reasoning for coding.
- **Cost efficiency: 80/100.** Mistral Small 4 is priced competitively as a mid-tier model with open-weight availability (Apache 2.0 ancestry). Self-host pricing advantages apply. Good value for the dual-mode reasoning+multimodal capability.
- **Overall Score: 69.8/100.** Mean of Tool use (70) + Reasoning (72) + Context (78) + Multimodal (60) + Coding (69) = 349 / 5 = 69.8. A capable reasoning-configurable multimodal MoE — recommended for teams needing a balance of vision, reasoning, and coding at mid-tier cost with the option to toggle reasoning depth.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
