# Grok 4.7 — findings by Hy3

**Source:** Web research (Baidu Baike, Baidu Baijiahao, ppv9 leaderboard, CSDN) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Grok 4.7 is a model from SpaceXAI (formerly xAI), officially released 2026-09-22 after Elon Musk confirmed the date on 2026-07-24. It is a ground-up larger base model (reported ~2.1T params, ~40% over Grok 4.6; not officially disclosed) with an extended RL phase, strengthened long-task, self-check, and long-context management, and native understanding of the Grok Bot runtime. It pairs with the Grok Build coding agent.

## Model card
- **Vendor:** SpaceXAI (xAI)
- **Release:** 2026-09-22
- **Params:** ~2.1T (reported, not official)
- **Context window:** 500K (via Cursor and third-party tools; Grok 4.6 was 256K)
- **Modalities:** Text + image
- **Pricing:** $2.00 input / $6.00 output per M tokens
- **Companion:** Grok Build coding agent

## Raw benchmarks

### Agent
- Programming-agent index: 56 (rank #4).
- Pairs with Grok Build coding agent; trained to understand the Grok Bot runtime.

### Reasoning
- Composite intelligence index: 46; creativity-oriented, with LiveBench design score above Gemini 4 Argon.

### Coding
- **CursorBench 4.0:** 46.3%.
- Programming-agent index 56 (#4).

### Long context
- **Context window:** 500K (up from 256K in Grok 4.6).

## Normalized scores
- **Tool use: 87/100.** Grok Build agent + programming-agent index 56 (#4).
- **Reasoning: 85/100.** Composite index 46; strong creativity/LiveBench design.
- **Context window: 86/100.** 500K window — below the 1M-class leaders.
- **Multimodal: 80/100.** Text + image; narrower multimodal scope.
- **Coding: 88/100.** CursorBench 4.0 46.3% + programming-agent index #4.
- **Cost efficiency: 78/100.** $2/$6 pricing is mid-to-high; value per dollar moderate.
- **Overall Score: 85.2/100.** Mean of the five quality dims (87+85+86+80+88 = 426 / 5 = 85.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Grok%204.7/68773312
  - https://baijiahao.baidu.com/s?id=1877137506226650679&wfr=spider&for=pc
  - https://baijiahao.baidu.com/s?id=1876989256226573915&wfr=spider&for=pc
  - https://www.ppv9.com/model/grok-4-7/
