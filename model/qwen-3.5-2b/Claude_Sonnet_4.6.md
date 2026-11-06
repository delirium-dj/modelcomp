# Qwen 3.5 2B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.5-2b

---

## Model Overview

Qwen 3.5 2B is Alibaba's dense 2B multimodal open-weight model (Apache 2.0 license). 262K native context (81K max output). Text, image, and video input; text output. Free via Apache 2.0 open weights and free hosted lanes. Designed for single-GPU edge deployments and local assistants. One of the most capable sub-3B models for lightweight agentic task execution.

---

## Scores

- **Tool use: 50/100.** TAU2-Bench 48.8% confirms multi-step tool-use capability that punches significantly above its parameter weight class — one of the strongest sub-3B agent models available. Limited by 2B parameter ceiling on complex orchestration.
- **Reasoning: 48/100.** GPQA Diamond 51.6% (thinking mode; ~40.1% non-thinking) is remarkable for a 2B model — comparable to much larger legacy models. Thinking mode activation is key to achieving this score. Clear ceiling on the hardest reasoning tasks.
- **Context window: 78/100.** 262K native maps to the 256K tier (78). 81K max output per provider rows.
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage.
- **Coding: 55/100.** HumanEval+ ~75.6% and MBPP+ ~67.7% confirm solid lightweight code generation for a 2B model. No LiveCodeBench score published — competitive programming is beyond this size class. Best for straightforward coding assistance.
- **Cost efficiency: 100/100.** Apache 2.0 open weights = $0 self-hosted on commodity hardware. Free hosted lanes available ($0/$0). Maximum cost efficiency for a multimodal edge model.
- **Overall Score: 60.6/100.** Mean of Tool use (50) + Reasoning (48) + Context (78) + Multimodal (72) + Coding (55) = 303 / 5 = 60.6. The edge agent pipsqueak — recommended for single-GPU local deployment, mobile inference, and lightweight agentic tasks where 2B parameters and zero cost are the constraints.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
