# Qwen 3.5 Flash — findings by Hy3

**Source:** Web research (Baidu Baike, Zhihu, CSDN, SMZDM) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Qwen3.5-Flash is the production-grade managed API version on Alibaba's Bailian platform (launched 2026-02-25), aligned with the open-source Qwen3.5-35B-A3B. It uses Gated Delta Networks + sparse MoE (35B total / ~3B active), defaults to a 1M-token context, and ships with a native toolchain plus image-input multimodal capability. It outperforms the larger prior-generation Qwen3-235B-A22B on knowledge, instruction-following, and math reasoning, with an accuracy of 70.8% (+6.8pp). Max input is 991,000 tokens; tool calling and image input are supported.

## Model card
- **Vendor:** Alibaba (通义千问 / Qwen)
- **Release:** 2026-02-25 (Bailian API)
- **Architecture:** Gated Delta Networks + sparse MoE — 35B total / ~3B active
- **Context window:** 1,000,000 tokens (max input 991K)
- **Modalities:** Text + image input; native toolchain
- **Type:** Managed production API (aligned to Qwen3.5-35B-A3B)

## Raw benchmarks

### Agent
- Native toolchain + tool calling; production API for agent workflows.

### Reasoning
- Outperforms Qwen3-235B-A22B on math reasoning and instruction following.

### Coding
- Strong coding for the tier; outperforms larger prior gen on knowledge/IF.

### Long context
- **Context window:** 1,000,000 tokens (max input 991K).

## Normalized scores
- **Tool use: 80/100.** Native toolchain; production agent ready.
- **Reasoning: 78/100.** Beats 235B on math/IF; mid-tier reasoning.
- **Context window: 96/100.** 1M-token window (991K max input).
- **Multimodal: 80/100.** Image-input multimodal.
- **Coding: 78/100.** Solid coding for tier; no isolated headline.
- **Cost efficiency: 88/100.** 3B-active MoE managed API — strong value.
- **Overall Score: 82.4/100.** Mean of the five quality dims (80+78+96+80+78 = 412 / 5 = 82.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Qwen3.5-Flash/67419767
  - https://zhuanlan.zhihu.com/p/2010137454414434852
  - https://download.csdn.net/blog/column/13060178/158774276
  - https://blog.csdn.net/easyllm/article/details/158460646
  - https://post.smzdm.com/p/a3rq4wqd/
