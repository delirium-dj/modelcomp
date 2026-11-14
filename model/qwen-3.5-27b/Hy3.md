# Qwen 3.5 27B — findings by Hy3

**Source:** Web research (Baidu Baike, Zhihu, SMZDM, CSDN) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Qwen3.5-27B (Dense) is Alibaba's small, high-efficiency open-source model in the Qwen 3.5 family, released 2026-02-25. It is a 27B fully-activated dense model — the first dense model in the 3.5 family — with stronger Agent capability and native multimodal support, designed to run on a single GPU for local deployment. In Chinese comprehensive evaluations it reaches ~72.4% accuracy, narrowing the gap between mid-size and frontier models.

## Model card
- **Vendor:** Alibaba (通义千问 / Qwen)
- **Release:** 2026-02-25 (open source)
- **Architecture:** Dense — 27B parameters
- **Deployment:** Single-GPU / local friendly
- **Capabilities:** Stronger Agent + native multimodal

## Raw benchmarks

### Agent
- Notable Agent-capability improvement vs prior mid-size models; local-deploy friendly for agent workflows.

### Reasoning
- Solid reasoning for a 27B dense; Chinese comprehensive eval ~72.4% accuracy.

### Coding
- Good code-generation for size; exact public coding-bench headline not isolated.

### Long context
- **Context window:** Not stated as 1M in sources; a 64K-Tools derivative exists (64K context), implying a mid-tier window.

## Normalized scores
- **Tool use: 82/100.** Improved Agent capability; local/agent friendly.
- **Reasoning: 80/100.** Strong for 27B dense; Chinese eval 72.4%.
- **Context window: 78/100.** Mid-tier window (64K-Tools variant); below 1M class.
- **Multimodal: 82/100.** Native multimodal support.
- **Coding: 80/100.** Good generation for size; no isolated headline.
- **Cost efficiency: 92/100.** 27B dense, single-GPU deployable — excellent value.
- **Overall Score: 80.4/100.** Mean of the five quality dims (82+80+78+82+80 = 402 / 5 = 80.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Qwen3.5-27B(Dense)/67419791
  - https://zhuanlan.zhihu.com/p/2010679440431145266
  - https://post.smzdm.com/p/a4qe3ppl/
  - https://blog.csdn.net/weixin_43325228/article/details/160347858
  - https://post.smzdm.com/p/arzo5o8g/
