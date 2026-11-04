# Xing 4.0 29B A4B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** xing_4.0_29b_a4b

---

## Model Overview

Xing 4.0 29B A4B is China Telecom TeleAI's September 2026 Apache 2.0 open-weight MoE model (29B total / 4B active parameters). 262K native context (extensible to 512K via YaRN). Text in/out only. First model of its scale trained end-to-end on Ascend NPUs using MindSpore. Available via OpenRouter free route and self-hosted ($0, Apache 2.0). OpenCode Zen free tier also available.

---

## Scores

- **Tool use: 83/100.** Terminal-Bench 2.1 57.5% confirms multi-step terminal agent tool use at a solid level for a 4B-active MoE. SWE-bench Verified 75.0% is a strong agentic coding result — vendor-published, though no independent verification yet.
- **Reasoning: 72/100.** No GPQA or LiveCodeBench figure published. All benchmarks are vendor-published. Reasonable reasoning inferred from SWE-bench score and architecture class. The Ascend-first training stack introduces portability caveats outside China.
- **Context window: 78/100.** 262K native maps to the 256K tier (78). YaRN to 512K available. Scored on the native window.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 83/100.** SWE-bench Verified 75.0% (vendor-published) is strong for a 4B-active open-weight MoE. Terminal-Bench 2.1 57.5% adds agentic coding signal. No independent benchmark verification published.
- **Cost efficiency: 100/100.** Apache 2.0 open weights = $0 self-hosted. Free OpenRouter route ($0/$0). Maximum cost efficiency — the cheapest path to 75% SWE-bench capability.
- **Overall Score: 66.2/100.** Mean of Tool use (83) + Reasoning (72) + Context (78) + Multimodal (15) + Coding (83) = 331 / 5 = 66.2. A strong free open coding agent — recommended for agentic coding pipelines where self-hosted cost efficiency matters and Ascend portability isn't a concern. Verify vendor-published scores on your tasks before production deployment.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
