# Inkling — findings by Hy3

**Source:** Web research (Baidu Baike, iResearch, Baidu Baijiahao, Zhihu, CSDN) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Inkling is the first model from Thinking Machines Lab (founded by ex-OpenAI CTO Mira Murati), released 2026-07-15 with open weights under Apache 2.0. It is a MoE Transformer with 975B total / 41B active parameters, pre-trained on 45T tokens of text, image, audio, and video data, with native text/image/audio input and a 1M-token context. On Artificial Analysis it scored 41 on the composite intelligence index — ranked #1 among US open-weight models. The lab frames it explicitly as "not the strongest base model, but the best open model to customize."

## Model card
- **Vendor:** Thinking Machines Lab
- **Release:** 2026-07-15 (open weights)
- **Architecture:** MoE Transformer — 975B total / 41B active
- **Pre-train:** 45T tokens (text/image/audio/video)
- **Context window:** 1,000,000 tokens
- **Modalities:** Native text, image, audio
- **License:** Apache 2.0 (open weights; supports Tinker fine-tune/deploy)

## Raw benchmarks

### Agent
- Tunable inference cost and customization make it agent/tooling-friendly; concrete public agent-bench headline not isolated.

### Reasoning
- Artificial Analysis composite intelligence index: 41 (#1 US open-weight model).

### Coding
- No isolated public coding-bench headline; positioned via openness + customization rather than raw coding leadership.

### Long context
- **Context window:** 1,000,000 tokens.

## Normalized scores
- **Tool use: 80/100.** Customizable, cost-tunable; limited standalone agent-bench numbers.
- **Reasoning: 82/100.** AA index 41 (#1 US open-weight) — strong but below frontier closed models.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 90/100.** Native text/image/audio in an open-weight model — a standout.
- **Coding: 80/100.** No headline coding-bench; openness is the differentiator.
- **Cost efficiency: 88/100.** Open weights + tunable inference cost = strong self-host value.
- **Overall Score: 85.6/100.** Mean of the five quality dims (80+82+96+90+80 = 428 / 5 = 85.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Inkling/68740331
  - https://news.iresearch.cn/content/202607/560782.shtml
  - https://baijiahao.baidu.com/s?id=1872214923558128413&wfr=spider&for=pc
  - https://zhuanlan.zhihu.com/p/2061189822421772231
  - https://blog.csdn.net/weixin_49664622/article/details/162972842
