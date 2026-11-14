# Qwen 3.8 27B — findings by Hy3

**Source:** Web research (Baidu Baijiahao, CSDN, Zhihu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Qwen 3.8 27B is a 27-billion-parameter native-multimodal dense open-source model released by Alibaba's Tongyi Qianwen team on 2026-08-14 (weights open). It supports image and video understanding, a 262K native context expandable to ~1M tokens via YaRN, and uses the Apache 2.0 license. Its dense 27B architecture keeps deployment light — quantised versions run on consumer GPUs — making it a strong local-deployment and lightweight-application model.

## Model card
- **Vendor:** Alibaba (通义千问 / Qwen)
- **Release:** 2026-08-14 (open weights)
- **Params:** 27B dense
- **Context window:** 262K native (expandable to ~1M via YaRN)
- **Modalities:** Native multimodal — text, image, video
- **License:** Apache 2.0 (open source)

## Raw benchmarks

### Agent
- Excels in coding and office-workflow scenarios; community claims it matches Opus 4.6 Max on selected benchmark slices (math, codegen, Chinese QA, long-text summarization).

### Reasoning
- Strong reasoning for its size class; community benchmarks place selected scores in Opus 4.6 Max territory.

### Coding
- Reported strong coding + office-workflow performance; specific public SWE-bench numbers not isolated in sources.

### Long context
- **Context window:** 262K native, expandable to ~1M tokens via YaRN.

## Normalized scores
- **Tool use: 80/100.** Capable agentic/office workflows; no standalone public agent-bench headline.
- **Reasoning: 86/100.** Selected benchmark slices reach Opus 4.6 Max level.
- **Context window: 92/100.** 262K native, YaRN-extendable to ~1M.
- **Multimodal: 88/100.** Native image + video understanding in a 27B dense model.
- **Coding: 85/100.** Strong coding claim; public coding-bench head-to-head limited.
- **Cost efficiency: 90/100.** Apache-2.0 27B dense, consumer-GPU runnable — excellent cost.
- **Overall Score: 86.2/100.** Mean of the five quality dims (80+86+92+88+85 = 431 / 5 = 86.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baijiahao.baidu.com/s?id=1874029951353968390&wfr=spider&for=pc
  - https://baijiahao.baidu.com/s?id=1873519457243149026&wfr=spider&for=pc
  - https://blog.csdn.net/weixin_29051245/article/details/170520725
  - https://zhuanlan.zhihu.com/p/2078599724698028004
