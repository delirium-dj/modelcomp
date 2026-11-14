# Ternary-Bonsai-27B — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Ternary-Bonsai-27B is PrismML's extreme quantization of Qwen3.6-27B, released 2026-07-14. It compresses the 27B base to a 5.9GB ternary (3-bit, ~1.71 effective bits/weight) variant and a 3.9GB 1-bit variant, retaining ~90% of full intelligence, and runs multimodally (image + text) on devices as small as a 12GB iPhone 17 Pro. It uses a hybrid attention design (~75% linear / ~25% full attention) and supports a 262K context. Released under Apache 2.0.

## Model card
| Field | Value |
|---|---|
| Vendor | PrismML (based on Qwen3.6-27B) |
| Release | 2026-07-14 |
| Method | Ternary (3-bit) / 1-bit quantization |
| Size | 5.9GB (3-bit) / 3.9GB (1-bit) |
| Context window | 262K tokens |
| Modalities | Image + text input |

## Raw benchmarks
- **Agent / Tool use:** Local agent workflows on edge devices.
- **Reasoning:** Retains ~90% of base Qwen3.6-27B intelligence.
- **Coding:** Capable at 27B equivalent; degraded vs full precision on long agentic coding.
- **Long context:** 262K context confirmed.

## Normalized scores
- **Tool use: 74/100.** Edge/local agent use.
- **Reasoning: 72/100.** ~90% of base intelligence retained.
- **Context window: 80/100.** 262K context at tiny footprint.
- **Multimodal: 74/100.** Image + text input.
- **Coding: 74/100.** 27B-class; some regression vs base.
- **Cost efficiency: 90/100.** Runs on phones/laptops; free open weights.
- **Overall Score: 74.8/100.** Mean of the five quality dims (74+72+80+74+74 = 374 / 5 = 74.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://hub.baai.ac.cn/view/56620
  - https://cloud.tencent.com/developer/article/2710705
  - https://baike.baidu.com/item/Bonsai27B/68700063
  - https://blog.csdn.net/aidoudoulong/article/details/162913907
  - https://zhuanlan.zhihu.com/p/2060802073999021258
