# DeepSeek V4.1 Flash 1017 — findings by Hy3

**Source:** Web research (Baidu Baike, Bilibili, Zhihu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
DeepSeek-V4.1-Flash-1017 is a lightweight model iteration released 2026-10-17 (succeeding V4.1 Flash from 2026-09-10), with web/APP/API switched over simultaneously. DeepSeek's technical report calls it "a small update": gains on code and agent tasks, with shorter runtimes and outputs. A self-feedback reinforcement-learning technique improves from-scratch project building (game dev, 3D modeling) from natural-language descriptions, and the model ships with self-developed Search and Fetch APIs. Weights are open (MIT license) on Hugging Face and ModelScope.

## Model card
- **Vendor:** DeepSeek (深度求索)
- **Release:** 2026-10-17 (iterates V4.1 Flash, 2026-09-10)
- **Tier:** Lightweight / Flash
- **Modalities:** Native multimodal vision understanding; cached for build pipelines
- **Tools:** Self-developed Search + Fetch APIs
- **License:** MIT (open weights on Hugging Face / ModelScope)

## Raw benchmarks

### Agent
- Stronger agent tasks vs prior; self-feedback RL enables from-scratch project generation; Search + Fetch APIs included.

### Reasoning
- Improved overall; self-feedback RL strengthens multi-step build reasoning.

### Coding
- **Artificial Analysis Intelligence Index v5:** FrontierCode 2.0 = 28%; composite score 32 (tied with GLM-5.3).
- "Wish-style" coding (full project from description) emphasized.

### Long context
- **Context window:** Flash-tier long context (V4-series 1M class; exact tier not isolated).

## Normalized scores
- **Tool use: 85/100.** Agent gains + Search/Fetch APIs; strong for the tier.
- **Reasoning: 83/100.** Self-feedback RL improves build reasoning; AA composite 32.
- **Context window: 92/100.** Flash-tier long context within V4 1M class.
- **Multimodal: 82/100.** Native vision understanding; not a vision flagship.
- **Coding: 86/100.** FrontierCode 2.0 28%, full-project generation strength.
- **Cost efficiency: 90/100.** MIT open weights + Flash pricing = excellent value.
- **Overall Score: 85.6/100.** Mean of the five quality dims (85+83+92+82+86 = 428 / 5 = 85.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/DeepSeek-V4.1-Flash-1017/69439738
  - https://www.bilibili.com/opus/1268988073774940178
  - https://baike.baidu.com/item/DeepSeek-V4.1%20Flash/68957496
  - https://www.zhihu.com/question/2094825372521178603/answer/2098804235861284776
  - https://zhuanlan.zhihu.com/p/2102899948656370103
