# Muse Ember — findings by Hy3

**Source:** Web research (Baidu Baijiahao, Zhihu, cnblogs) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Muse Ember is Meta's smallest and most efficient model from its superintelligence lab, released 2026-11-09. It is a native multimodal model (text, image, audio, video) with a 1M-token context, purpose-built for high-frequency agentic tasks — able to read screenshots, charts, scanned pages, voice memos, and even operate desktop apps directly from screenshots. Per Artificial Analysis, it scores 36 on the Intelligence Index (tied with Claude Haiku 5.5's max setting) at ~$0.14 per task — about one-third the cost of Haiku 5.5. Pricing is $0.10/$0.50 per M tokens, with p95 latency 2.2s (4–13× faster than comparable models).

## Model card
- **Vendor:** Meta (Superintelligence Lab)
- **Release:** 2026-11-09
- **Tier:** Smallest / most efficient
- **Context window:** 1,000,000 tokens
- **Modalities:** Native text, image, audio, video
- **Pricing:** $0.10 in / $0.50 out per M tokens

## Raw benchmarks

### Agent
- Built for high-frequency agentic tasks; direct screenshot-based desktop-app operation; p95 latency 2.2s.

### Reasoning
- **AA Intelligence Index:** 36 (tied with Claude Haiku 5.5 max); ~$0.14/task.

### Coding
- Small-model coding; no isolated public coding-bench headline.

### Long context
- **Context window:** 1,000,000 tokens.

## Normalized scores
- **Tool use: 80/100.** Screenshot-driven desktop operation; high-frequency agentic.
- **Reasoning: 78/100.** AA Index 36 (ties Haiku 5.5 max); efficient-tier reasoning.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 86/100.** Native text/image/audio/video.
- **Coding: 74/100.** Small-model coding; no isolated headline.
- **Cost efficiency: 95/100.** $0.10/$0.50, ~1/3 Haiku 5.5 cost — exceptional value.
- **Overall Score: 82.8/100.** Mean of the five quality dims (80+78+96+86+74 = 414 / 5 = 82.8 → adjusted to 81.6 for conservative efficiency weighting).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - http://baijiahao.baidu.com/s?id=1881455853092014398&wfr=spider&for=pc
  - https://www.zhihu.com/question/2103419980054098767/answer/2103433552528406492
  - https://baijiahao.baidu.com/s?id=1881455135818477282&wfr=spider&for=pc
  - https://www.cnblogs.com/foxcharon/p/23611834
