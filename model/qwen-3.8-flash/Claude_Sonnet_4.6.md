# Qwen 3.8 Flash — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen-3.8-flash

---

## Model Overview

Qwen 3.8 Flash (Qwen3.8-Flash-Next) is Alibaba's sparse MoE model — ~125B total parameters with ~6B active per token — designed for high-volume, cost-efficient coding and agent pipelines. API context 1M (262K native, 131K output); text, image, and video input; text output. Priced at ~$0.15/$0.47 per 1M (open weights also available for self-hosted $0); free via Alibaba Qoder app/IDE.

---

## Scores

- **Tool use: 87/100.** SWE-bench Pro 62.5% and SWE-bench Multilingual 81.0% confirm solid agentic software-engineering capability for a Flash-class MoE. DeepSWE 1.1 58.7% validates multi-step tool chaining.
- **Reasoning: 92/100.** GPQA Diamond 91.7% is near-frontier for scientific reasoning — exceptional for a 6B-active-parameter MoE. Demonstrates that sparse tuning can retain deep reasoning at competitive levels.
- **Context window: 92/100.** 1M API context (262K native). The hosted 1M is the practical number for API users; maps to the 1M tier (92).
- **Multimodal: 72/100.** Text, image, and video input; text output. Three input modalities (no audio in; no non-text out). Scored 72 for image+video coverage.
- **Coding: 92/100.** LiveCodeBench v6 91.9% is top-tier competitive programming performance. SWE-bench Pro 62.5% and Multilingual 81.0% confirm broad real-world coding strength. Impressive for a Flash-tier MoE model.
- **Cost efficiency: 97/100.** ~$0.15/$0.47 per 1M is exceptionally cheap for the benchmark level achieved. Open weights for $0 self-hosted; also free via Qoder app. Among the best cost-per-capability ratios in the market.
- **Overall Score: 87/100.** Mean of Tool use (87) + Reasoning (92) + Context (92) + Multimodal (72) + Coding (92) = 435 / 5 = 87.0. A highly efficient MoE Flash model with frontier-class reasoning — recommended for high-volume coding pipelines and batch agent workflows where cost matters.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
