# Grok 4 Fast — findings by Hy3

**Source:** Web research (Baidu Baike, 51CTO, Zhihu, Baidu Baijiahao) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Grok 4 Fast is xAI's fast, cheap inference model released 2025-09-20, using an end-to-end tool-use reinforcement-learning framework with a 2M-token context window and real-time search, code execution, and X-platform data integration. It delivers near-flagship reasoning at a fraction of the cost — AIME 2025 (no tools) 92.0% (close to Grok 4) while using far fewer tokens, with input pricing ~15× cheaper than Grok 4 ($0.2/M vs $3/M) and output ~30× cheaper. It is a multimodal reasoning model tightly integrated with X.

## Model card
- **Vendor:** xAI (SpaceXAI)
- **Release:** 2025-09-20
- **Context window:** 2,000,000 tokens
- **Training:** End-to-end tool-use RL
- **Tools:** Real-time search, code execution, X integration
- **Pricing:** ~$0.2/M input (vs $3/M for Grok 4)

## Raw benchmarks

### Agent
- End-to-end tool-use RL; real-time search + code execution + X integration.

### Reasoning
- **AIME 2025 (no tools):** 92.0% — near Grok 4, with far fewer tokens.

### Coding
- Code execution tooling; strong reasoning supports coding.

### Long context
- **Context window:** 2,000,000 tokens.

## Normalized scores
- **Tool use: 82/100.** Tool-use RL + search + code execution + X integration.
- **Reasoning: 81/100.** AIME 2025 92% is strong; balanced tier.
- **Context window: 94/100.** 2M-token window.
- **Multimodal: 78/100.** Multimodal reasoning; not a vision flagship.
- **Coding: 79/100.** Code execution tooling; no isolated coding headline.
- **Cost efficiency: 94/100.** ~15–30× cheaper than Grok 4 — exceptional value.
- **Overall Score: 82.8/100.** Mean of the five quality dims (82+81+94+78+79 = 414 / 5 = 82.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Grok%204%20Fast/66778812
  - https://www.51cto.com/aigc/7872.html
  - https://zhuanlan.zhihu.com/p/1952733958044362148
  - https://baijiahao.baidu.com/s?id=1843849706168626895&wfr=spider&for=pc
