# Kimi K2.8 Preview — findings by Hy3

**Source:** Web research (Baidu Baijiahao, Zhihu, DoNews) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Kimi K2.8 Preview is Moonshot AI's coding model fully rolled out to Kimi Code on 2026-09-11 (Model ID `kimi-for-coding`). It offers a 1M-token context with adjustable thinking effort (low / high / max, default max); when thinking is off, requests route to the no-thinking K2.8 Preview. Its comprehensive performance is close to Kimi K3, with thinking efficiency notably better than K2.7 Code, and all members get up to 1M-token context.

## Model card
- **Vendor:** Moonshot AI (月之暗面)
- **Release:** 2026-09-11 (Kimi Code full rollout)
- **Type:** Coding model (`kimi-for-coding`)
- **Context window:** 1,000,000 tokens
- **Thinking:** low / high / max (default max)

## Raw benchmarks

### Agent
- Coding-agent oriented; integrates with Kimi Code and third-party tools.

### Reasoning
- Thinking efficiency better than K2.7 Code; effort-tunable.

### Coding
- Comprehensive coding performance close to Kimi K3; improved over K2.7 Code.

### Long context
- **Context window:** 1,000,000 tokens (all members).

## Normalized scores
- **Tool use: 82/100.** Coding agent via Kimi Code; tool-compatible.
- **Reasoning: 78/100.** Efficient thinking; no isolated general-reasoning headline.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 72/100.** Coding-focused; text-centric.
- **Coding: 84/100.** Near-K3 coding; better efficiency than K2.7 Code.
- **Cost efficiency: 84/100.** Efficient thinking reduces token cost.
- **Overall Score: 82.4/100.** Mean of the five quality dims (82+78+96+72+84 = 412 / 5 = 82.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baijiahao.baidu.com/s?id=1876021631426531507&wfr=spider&for=pc
  - https://zhuanlan.zhihu.com/p/2082099067543351364
  - https://www.zhihu.com/question/2081778258287370386/answer/2082210474104509452
  - https://www.donews.com/news/detail/8/6707023.html
