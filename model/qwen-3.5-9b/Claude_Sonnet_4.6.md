# Qwen 3.5 9B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.5-9b

---

## Model Overview

Qwen 3.5 9B is Alibaba's February-March 2026 dense 9.65B open-weight multimodal model (Apache 2.0 license). 262K native context (extensible to 1M via YaRN), 32K output. Accepts text, image, and video input; text output. Priced at ~$0.10/$0.15 per 1M (OpenRouter); $0 self-hosted. Designed as the compact thinking-by-default pipsqueak covering math, OCR, and telecom tool calls on accessible hardware.

---

## Scores

- **Tool use: 70/100.** tau2 86.8% confirms reliable tool-call execution for structured agentic tasks. At 9B parameters, complex multi-hop tool chaining has headroom vs. larger models. Specialized in telecom and structured tool use patterns.
- **Reasoning: 72/100.** MMMU-Pro 70.1% and tau2 86.8% show solid multimodal reasoning for a 9.65B model. Thinking-by-default configuration helps with complex reasoning chains. The small parameter count limits depth on the hardest tasks.
- **Context window: 78/100.** 262K native maps to the 256K tier (78). YaRN to 1M possible but with degradation risk; scored on the native window.
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage.
- **Coding: 69/100.** LiveCodeBench v6 65.6% is reasonable for a 9B model. Good for straightforward coding and code assistance tasks; ceiling reached quickly on complex multi-file engineering.
- **Cost efficiency: 98/100.** Apache 2.0 open weights = $0 self-hosted on commodity hardware. API pricing $0.10/$0.15 per 1M is ultra-cheap. Excellent pocket-hardware option for multimodal tasks.
- **Overall Score: 72.2/100.** Mean of Tool use (70) + Reasoning (72) + Context (78) + Multimodal (72) + Coding (69) = 361 / 5 = 72.2. The small-footprint multimodal reasoner — recommended for edge deployment, structured tool calls, and OCR/math tasks on hardware where larger models don't fit.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
