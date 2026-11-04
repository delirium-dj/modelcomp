# Qwen 3.5 4B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.5-4b

---

## Model Overview

Qwen 3.5 4B is Alibaba's dense 4B multimodal open-weight model (Apache 2.0 license). 262K native context (extensible to 1M via YaRN, 81K max output). Text, image, and video input; text output. Free via Apache 2.0 open weights and a verified free hosted lane on SiliconFlow. Designed for light tools, local coding, and consumer-hardware assistants.

---

## Scores

- **Tool use: 72/100.** TAU2-Bench 79.9% confirms solid tool-call execution for a 4B model — strong structured agentic performance for its parameter count. Multi-step tool chaining has headroom vs. larger models at complex tasks.
- **Reasoning: 72/100.** GPQA Diamond 76.2% is excellent graduate-level reasoning for a 4B open-weight model — punches significantly above its parameter class. Hybrid Gated DeltaNet + sparse MoE architecture enables this capability.
- **Context window: 78/100.** 262K native maps to the 256K tier (78). YaRN to 1M possible but with degradation; scored on the native window.
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage.
- **Coding: 60/100.** LiveCodeBench v6 55.8% is reasonable for a 4B model on competitive programming. Appropriate for straightforward coding assistance on consumer hardware; ceiling reached quickly on complex multi-file engineering tasks.
- **Cost efficiency: 100/100.** Apache 2.0 open weights = $0 self-hosted on commodity hardware. Free verified hosted lane on SiliconFlow. Maximum cost efficiency — the benchmark for affordable multimodal inference.
- **Overall Score: 70.8/100.** Mean of Tool use (72) + Reasoning (72) + Context (78) + Multimodal (72) + Coding (60) = 354 / 5 = 70.8. The local-first multimodal pipsqueak — recommended for edge devices, local assistants, and consumer-hardware deployments where model weight and zero cost are constraints.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
