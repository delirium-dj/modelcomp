# Llama 3.2 Vision Instruct — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** llama_3.2_vision_instruct

---

## Model Overview

Llama 3.2 Vision Instruct is Meta's September 2024 open-weight vision model available in 11B and 90B sizes (Llama 3.2 Community License). 128K context, 4,096 max output. Text and image input; text output. Hosted from $0.0485/M in (Cloudflare Workers AI) to $0.35/M in; $0 self-hosted. Now largely delisted by most major providers (Together, Groq, Cerebras, OpenRouter). Legacy vision workhorse kept as a historical reference.

---

## Scores

- **Tool use: 55/100.** No Terminal-Bench or SWE-bench published for 3.2 Vision. Standard instruction-following and function calling for a 2024-era model. Broadly delisted by major hosts limits practical agentic deployment options.
- **Reasoning: 60/100.** MMMU 50.7 on the multimodal reasoning benchmark. AI2D 91.1 on diagram understanding. Standard 2024 Llama 3.2 reasoning capability — solid for its time, now superseded by Llama 3.3+ and other 2025–2026 models.
- **Context window: 65/100.** 128K total context maps to the 128K tier (65). 4,096 max output cap is a significant limitation for long generation tasks.
- **Multimodal: 60/100.** Text and image input; text output. Standard vision-language coverage, no audio or video. Maps to the image tier (60). EU multimodal clause in the license restricts some deployment scenarios.
- **Coding: 55/100.** No SWE-bench or coding-specific benchmarks published. Standard 2024-era Llama 3 coding capability — appropriate for simple assistance; superseded by later models for complex engineering tasks.
- **Cost efficiency: 80/100.** Open weights (Llama 3.2 Community License) = $0 self-hosted. Cloudflare Workers AI from $0.0485/M is very affordable. EU multimodal clause and license requirements add compliance overhead. Mostly delisted, reducing practical hosted cost options.
- **Overall Score: 59/100.** Mean of Tool use (55) + Reasoning (60) + Context (65) + Multimodal (60) + Coding (55) = 295 / 5 = 59.0. A 2024-era legacy vision workhorse — useful as a low-cost reference implementation for document/chart/diagram reading from open weights. Use Llama 3.3+ or Gemma 4 for new multimodal deployments.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
