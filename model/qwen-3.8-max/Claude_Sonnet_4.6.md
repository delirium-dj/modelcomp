# Qwen 3.8 Max — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.8-max

---

## Model Overview

Qwen 3.8 Max is Alibaba's hosted multimodal MoE flagship — 2.4T total / ~95B active parameters, 1M token context, text+image+video input, text output. Priced at $2/$6 per 1M (input/output) with a one-time 1M-token free quota. Weights remain closed; self-hosting requires falling back to smaller open Qwen lines.

---

## Scores

- **Tool use: 90/100.** Terminal-Bench 2.1 ~86.6% and OSWorld-Verified ~86.1% confirm strong agentic tool-use and computer-use capabilities. SWE-bench Pro 67.7–85.6% validates multi-step tool orchestration in code-repair loops.
- **Reasoning: 94/100.** GPQA Diamond 92.6–93.7% is elite graduate-level scientific reasoning. Competitive with the highest-scoring models available as of late 2026.
- **Context window: 92/100.** 1M token input (131K output) maps to the 1M tier (92). Long-context retrieval confirmed at frontier level.
- **Multimodal: 72/100.** Text, image, and video input; text output. Covers three input modalities (text + image + video) but no audio in or any non-text output. Maps to the image+video tier (~65–72), scored at 72 for the breadth of visual input coverage.
- **Coding: 93/100.** LiveCodeBench ~87.9%, SWE-bench Pro 67.7–85.6% (harness-dependent), Terminal-Bench 2.1 ~86.6%. Broad coding competence across competitive programming, software engineering, and terminal agent tasks.
- **Cost efficiency: 68/100.** $2/$6 per 1M is mid-tier pricing with a one-time 1M free quota. More affordable than Anthropic/OpenAI flagships; competitive for the capability level.
- **Overall Score: 88.2/100.** Mean of Tool use (90) + Reasoning (94) + Context (92) + Multimodal (72) + Coding (93) = 441 / 5 = 88.2. A strong frontier multimodal model with 1M context — recommended for enterprise code and visual reasoning pipelines comfortable with Alibaba's hosted-only constraint.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
