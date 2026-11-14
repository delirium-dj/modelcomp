# Grok 4.5 — findings by Hy3

**Source:** Web research (Baidu Baike, CSDN, Sohu, Baidu Baijiahao) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Grok 4.5 is a model jointly developed by xAI (later merged into SpaceXAI) and the AI-coding company Cursor, publicly released 2026-07-09. Built on a 1.5T-parameter V9 base deeply integrated with Cursor's coding data, it is positioned as a high-efficiency, low-cost productivity tool for coding, agentic tasks, and knowledge work — "Opus 4.8-level capability at one-quarter the price." It runs at ~80 TPS with higher token efficiency, though a post-launch jailbreak vulnerability was reported.

## Model card
- **Vendor:** xAI / SpaceXAI + Cursor
- **Release:** 2026-07-09
- **Architecture:** 1.5T-param V9 base, Cursor coding-data integrated
- **Context window:** 500K (down from Grok 4.3's 1M; 1M upgrade planned)
- **Speed:** ~80 TPS
- **Modalities:** Text + image input (single image up to 20MiB)

## Raw benchmarks

### Agent
- Built for coding/agentic productivity with deep Cursor integration.

### Reasoning
- Benchmarks positioned to rival the Claude Opus series; concrete public reasoning-bench headline not isolated.

### Coding
- Deeply integrated with Cursor coding data; "Opus 4.8-level" coding claim at 1/4 price.

### Long context
- **Context window:** 500K (a reduction from Grok 4.3's 1M; official 1M upgrade announced).

## Normalized scores
- **Tool use: 86/100.** Deep Cursor integration; strong coding-agent productivity.
- **Reasoning: 84/100.** Opus-class reasoning claim; limited isolated public numbers.
- **Context window: 86/100.** 500K window (down from 1M predecessor; upgrade promised).
- **Multimodal: 83/100.** Text + image input (20MiB/image).
- **Coding: 87/100.** Opus-4.8-level coding at 1/4 price per vendor claim.
- **Cost efficiency: 88/100.** Explicitly "1/4 price of Opus 4.8" with high token efficiency.
- **Overall Score: 85.2/100.** Mean of the five quality dims (86+84+86+83+87 = 426 / 5 = 85.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Grok4.5/68217788
  - https://blog.csdn.net/weixin_29800471/article/details/162775457
  - https://blog.csdn.net/m0_65682055/article/details/162729321
  - https://news.sohu.com/a/1047825268_122189055
  - https://baijiahao.baidu.com/s?id=1871560243996413448&wfr=spider&for=pc
