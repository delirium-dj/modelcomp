# Gemma 4 E4B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** gemma-4-e4b

---

## Model Overview

Gemma 4 E4B is Google's April 2026 edge model (4.5B effective parameters, Apache 2.0 license). 128K context, accepting text, image, and audio input (video as sampled frames); text output. Hosted at $0.02/$0.10 per 1M; Q4 GGUF only 4.59 GB for local use. Designed as the cheapest on-device multimodal Gemma for perception tasks.

---

## Scores

- **Tool use: 32/100.** Terminal-Bench 2.1 1.87% and tau2 20.8% confirm very limited agentic tool-use capability. The model is a perception model, not an agent. Primarily designed for sensing and document understanding rather than multi-step tool chaining.
- **Reasoning: 60/100.** MMLU-Pro 69.4% is respectable for a 4.5B edge model — solid general knowledge and instruction following for its size. Not designed for complex multi-step reasoning.
- **Context window: 65/100.** 128K total context maps to the 128K tier (65). Appropriate for document and image analysis on-device.
- **Multimodal: 72/100.** Text, image, and audio input (video as frames); text output. Three input modalities plus limited video coverage. Scored 72 for the breadth of native on-device multimodal perception.
- **Coding: 55/100.** LiveCodeBench v6 52.0% is reasonable for a 4.5B edge model. Not designed for complex coding tasks; best for code reading and simple assistance on-device.
- **Cost efficiency: 100/100.** Apache 2.0 open weights = $0 self-hosted at 4.59 GB (Q4 GGUF). Hosted only $0.02/$0.10 per 1M. Maximum cost efficiency for a multimodal edge model.
- **Overall Score: 56.8/100.** Mean of Tool use (32) + Reasoning (60) + Context (65) + Multimodal (72) + Coding (55) = 284 / 5 = 56.8. The cheapest on-device multimodal option — recommended for image, audio, and document perception tasks on mobile or edge hardware where model size and cost are the primary constraints.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
