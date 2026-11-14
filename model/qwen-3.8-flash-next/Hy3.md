# Qwen 3.8 Flash Next — findings by Hy3

**Source:** Web research (Baidu Baijiahao, Baidu Baike, CSDN, Alibaba Cloud dev community) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Qwen 3.8 Flash Next is an early-preview multimodal MoE model based on the next-generation Qwen4 architecture, open-sourced 2026-08-26. With 125B total / 6B active parameters and training cost ~90% lower than Qwen3.7-Plus, it demonstrates leapfrog performance at very low compute. The sibling Qwen3.8-Flash uses 125B total + 51B N-gram embedding + 4B MTP, 6B active per token, 262K native context (YaRN-extendable to 1M). Weights are on Hugging Face and ModelScope.

## Model card
- **Vendor:** Alibaba (通义千问 / Qwen)
- **Release:** 2026-08-26 (open source; Qwen4-arch preview)
- **Architecture:** Highly sparse MoE — 125B total / 6B active
- **Context window:** 262K native (YaRN to 1M for the Qwen3.8-Flash line)
- **Modalities:** Multimodal MoE
- **License:** Open source (Hugging Face / ModelScope)

## Raw benchmarks

### Agent
- Early-architecture preview; agentic behavior inherits Qwen Flash-line tooling compatibility.

### Reasoning
- "Leapfrog" reasoning at low compute for a 6B-active model; specific public reasoning-bench headline not isolated.

### Coding
- Strong coding for its tiny active footprint; exact public coding-bench numbers not isolated.

### Long context
- **Context window:** 262K native, YaRN-extendable to 1M.

## Normalized scores
- **Tool use: 81/100.** Flash-line tooling; preview maturity limits standalone agent numbers.
- **Reasoning: 85/100.** Strong reasoning relative to 6B-active compute.
- **Context window: 92/100.** 262K native, YaRN to 1M.
- **Multimodal: 87/100.** Multimodal MoE at very low active-parameter cost.
- **Coding: 83/100.** Capable coding for its size; no headline bench isolated.
- **Cost efficiency: 92/100.** ~90% cheaper than Qwen3.7-Plus; open weights — exceptional value.
- **Overall Score: 85.6/100.** Mean of the five quality dims (81+85+92+87+83 = 428 / 5 = 85.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baijiahao.baidu.com/s?id=1874655936282931984&wfr=spider&for=pc
  - https://baike.baidu.com/item/Qwen3.8-Flash-Next/68707034
  - https://blog.csdn.net/weixin_29054245/article/details/170367899
  - https://baike.baidu.com/item/Qwen3.8-Flash/68721556
  - https://developer.aliyun.com/article/1760237
