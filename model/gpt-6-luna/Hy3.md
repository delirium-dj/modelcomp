# GPT-6 Luna — findings by Hy3

**Source:** Web research (Baidu Baike, Bilibili, ppv9 leaderboard, Baidu Baijiahao) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
GPT-6 Luna is OpenAI's cheapest GPT-6 tier, launched 2026-09-22 alongside GPT-6 Sol. It is priced at $0.10 input / $0.50 output per M tokens and offers a 1.05M-token context window, targeting professional work, coding, automation, and computer use as the low-cost member of the GPT-6 family (below Astra). Third-party indexes (ppv9) put its LiveBench design score at 82.5 (above Astra) with an Intelligence Index v5 of 28.0 (rank #23); its overall intelligence is roughly on par with the GPT-5.6 series at roughly half the cost.

## Model card
- **Vendor:** OpenAI
- **Release:** 2026-09-22
- **Context window:** 1,050,000 tokens
- **Modalities:** Text (multimodal-capable tier)
- **Pricing:** $0.10 in / $0.50 out per M tokens
- **Positioning:** Cheap / high-volume GPT-6 tier

## Raw benchmarks

### Agent
- Targets automation and computer-use scenarios; agentic capability at budget pricing.

### Reasoning
- **LiveBench design score:** 82.5 (reportedly exceeds Astra on this axis).

### Coding
- Overall intelligence ~ GPT-5.6 level; coding on par with that series per third-party indexes.

### Long context
- **Context window:** 1,050,000 tokens.

## Normalized scores
- **Tool use: 82/100.** Automation/computer-use framing; budget-tier agentic.
- **Reasoning: 82/100.** LiveBench design 82.5; ~GPT-5.6-level overall.
- **Context window: 96/100.** 1.05M-token window.
- **Multimodal: 80/100.** Multimodal-capable; not a vision flagship.
- **Coding: 82/100.** ~GPT-5.6-series coding level.
- **Cost efficiency: 96/100.** $0.10/$0.50 — top-tier value in the GPT-6 family.
- **Overall Score: 84.4/100.** Mean of the five quality dims (82+82+96+80+82 = 422 / 5 = 84.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/GPT-6%20Luna/69132871
  - https://www.bilibili.com/opus/1267479891707691043
  - https://www.ppv9.com/model/gpt-6-luna/
  - https://baijiahao.baidu.com/s?id=1877103274950398615&wfr=spider&for=pc
  - https://post.smzdm.com/p/a956zrop/
