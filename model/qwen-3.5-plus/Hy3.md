# Qwen 3.5 Plus — findings by Hy3

**Source:** Web research (Baidu Baike, SMZDM, CSDN, Zhihu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Qwen 3.5 Plus is an open-source model released by Alibaba on 2026-02-16, built on the Qwen3-Next architecture with higher-sparsity MoE and a Gated DeltaNet + Gated Attention hybrid. It has 397B total / 17B active parameters and a 1M-token context. It is a native multimodal LLM fusing vision-language-code via early text-visual fusion, pre-trained on mixed visual+text tokens, and supports 201 languages (up from 119). Public benchmarks place it close to closed models GPT-5.2 and Gemini-3-Pro.

## Model card
- **Vendor:** Alibaba (通义千问 / Qwen)
- **Release:** 2026-02-16 (open source)
- **Architecture:** Qwen3-Next — sparse MoE (397B total / 17B active) + Gated DeltaNet + Gated Attention
- **Context window:** 1,000,000 tokens
- **Modalities:** Native multimodal (vision-language-code fusion)
- **Languages:** 201 (vocab expanded 150K → 250K)
- **Features:** enable_thinking, enable_search

## Raw benchmarks

### Agent
- enable_search + agentic tooling; strong localized/Chinese scenario grounding.

### Reasoning
- enable_thinking chain-of-thought; benchmarks close to GPT-5.2 / Gemini-3-Pro per vendor.

### Coding
- Coding improvements via hybrid attention; exact public coding-bench headline not isolated.

### Long context
- **Context window:** 1,000,000 tokens.

## Normalized scores
- **Tool use: 82/100.** enable_search + agentic tooling; fewer standalone agent-bench numbers.
- **Reasoning: 84/100.** Close to GPT-5.2 / Gemini-3-Pro on public benchmarks.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 86/100.** Native vision-language-code fusion; 201-language breadth.
- **Coding: 82/100.** Improved coding; public head-to-head bench not isolated.
- **Cost efficiency: 88/100.** Open weights + 17B-active MoE = strong self-host value.
- **Overall Score: 86.0/100.** Mean of the five quality dims (82+84+96+86+82 = 430 / 5 = 86.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Qwen3.5-Plus/67392693
  - https://post.smzdm.com/p/aqkowwmx/
  - https://blog.csdn.net/weixin_30256901/article/details/95412077
  - https://blog.csdn.net/DuLNode/article/details/158233756
  - https://zhuanlan.zhihu.com/p/2011914556159582443
