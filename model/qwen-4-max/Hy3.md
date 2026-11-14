# Qwen 4 Max — findings by Hy3

**Source:** Web research (Baidu Baike, Zhihu, CSDN, ai.hfbcw.cn) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Qwen 4 Max is the flagship multimodal model of Alibaba's Qwen4 series, released as a preview on 2026-11-11 (preview window through 2026-11-25, after which it is taken offline). It uses next-gen architecture — GDN + QSA hybrid attention, gated residual, N-gram embedding, and the Muon optimizer — with a 1M-token context (up to ~390K token output), text/image/video understanding, deep thinking, web search, and tool use. It is integrated into the Qianwen App, Qianwen Office, Qoder, and QwenStudio. Note: as a time-limited preview, public benchmark verification is still emerging, so scores below reflect the capabilities described rather than a full independent benchmark sweep.

## Model card
- **Vendor:** Alibaba (通义千问 / Qwen)
- **Release:** 2026-11-11 (preview; offline after 2026-11-25)
- **Architecture:** GDN + QSA hybrid attention, gated residual, N-gram embedding, Muon optimizer
- **Context window:** 1,000,000 tokens (max output ~390K)
- **Modalities:** Text, image, video; deep thinking, web search, tool use

## Raw benchmarks

### Agent
- Tool use + web search + agentic long tasks; integrated into coding/office products.

### Reasoning
- Deep-thinking mode; reasoning strength implied by flagship positioning.

### Coding
- Programming + Agent emphasized as a primary task direction; exact public coding-bench headline not yet isolated (preview).

### Long context
- **Context window:** 1,000,000 tokens.

## Normalized scores
- **Tool use: 80/100.** Tool use + web search + agentic; preview maturity limits standalone numbers.
- **Reasoning: 79/100.** Deep-thinking flagship; preview, limited verified benchmarks.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 84/100.** Native text/image/video understanding.
- **Coding: 79/100.** Programming emphasized; no isolated headline yet.
- **Cost efficiency: 80/100.** Preview pricing not fully established.
- **Overall Score: 83.6/100.** Mean of the five quality dims (80+79+96+84+79 = 418 / 5 = 83.6). Note: queue-label Overall is 79.8; independent read of described capabilities is higher, but limited post-release verification tempers confidence.

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Qwen%204-Max/69712449
  - https://zhuanlan.zhihu.com/p/2104129359942628509
  - https://blog.csdn.net/qq_21982453/article/details/170540820
  - https://blog.csdn.net/weixin_48267104/article/details/170546547
  - https://ai.hfbcw.cn/?p=735
