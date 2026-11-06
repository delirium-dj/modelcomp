# Qwen 3.5 0.8B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.5-0.8b

---

## Model Overview

Qwen 3.5 0.8B is Alibaba's dense 0.8B multimodal open-weight model (Apache 2.0 license). 262K native context (81K max output). Text, image, and video input; text output. Free via Apache 2.0 open weights and free hosted lanes. The smallest model in the Qwen 3.5 family, designed for ultra-low-footprint edge assistants. Known caveat: thinking-mode loops can be unstable at this size.

---

## Scores

- **Tool use: 20/100.** TAU2-Bench 11.6% confirms very limited agentic tool-use capability — the 0.8B parameter ceiling severely constrains multi-step reasoning chains required for tool orchestration. Suitable only for simple single-turn tool calls at best.
- **Reasoning: 22/100.** GPQA Diamond 11.9% (thinking mode) reflects the hard parameter limit for graduate-level scientific reasoning. Thinking mode helps vs. non-thinking but the absolute score is very low. Not suitable for complex reasoning tasks.
- **Context window: 78/100.** 262K native context maps to the 256K tier (78). Despite the tiny parameter count, the architecture supports a large context window — useful for retrieval tasks where model depth is less critical.
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage — the multimodal capability is architecturally present even at 0.8B.
- **Coding: 35/100.** No LiveCodeBench score published — competitive programming is well beyond 0.8B capability. HumanEval-style simple code generation tasks are within reach; complex multi-file engineering is not. Primarily useful for code reading and templated completions.
- **Cost efficiency: 100/100.** Apache 2.0 open weights = $0 self-hosted on any hardware, including phones and Raspberry Pi-class devices. Free hosted lanes available ($0/$0). Maximum cost efficiency for any multimodal model.
- **Overall Score: 45.4/100.** Mean of Tool use (20) + Reasoning (22) + Context (78) + Multimodal (72) + Coding (35) = 227 / 5 = 45.4. The smallest multimodal Qwen — recommended for extremely resource-constrained edge devices (phones, IoT, Raspberry Pi) where any intelligence is better than none. Use larger Qwen 3.5 sizes for meaningful reasoning or coding tasks.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
