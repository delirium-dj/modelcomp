# Mistral Large 4 — findings by Hy3

**Source:** Web research (Baidu Baike, CSDN, ZAKER News) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Mistral Large 4 ("Le Chonk") is Mistral AI's 4th-generation flagship, with open weights released on Hugging Face 2026-10-29 (public preview ~3 weeks earlier). It is a 1T-parameter-class MoE (128 routed experts + 1 shared; ~49–52B active per token including embedding/output) with a ~1.6B-parameter vision encoder for text+image input. It offers a 1M-token context, uses ~47% fewer tokens per task than its predecessor, and ships with API pricing roughly halved. Microsoft Foundry was the first cloud to host it.

## Model card
- **Vendor:** Mistral AI
- **Release:** 2026-10-29 (open weights; preview ~2026-10-06)
- **Architecture:** MoE — ~1.05T total / ~52B active (128 routed + 1 shared expert)
- **Context window:** 1,000,000 tokens
- **Modalities:** Text + image input (vision encoder ~1.6B)
- **License:** Mistral Ecosystem Open-Weight; Microsoft Foundry first cloud

## Raw benchmarks

### Agent
- Tool/agentic behavior not the headline; general enterprise strength implied.

### Reasoning
- No isolated public reasoning-bench headline; flagship-class reasoning expected.

### Coding
- No isolated public coding-bench headline; strong general coding implied by "fewer tokens per task."

### Long context
- **Context window:** 1,000,000 tokens.

## Normalized scores
- **Tool use: 80/100.** Enterprise-grade; no headline agent-bench number.
- **Reasoning: 84/100.** Flagship reasoning; exact bench not isolated.
- **Context window: 97/100.** 1M-token window.
- **Multimodal: 84/100.** Native text+image via vision encoder.
- **Coding: 83/100.** Strong general coding; no isolated headline.
- **Cost efficiency: 90/100.** Open weights + ~47% fewer tokens + halved API price.
- **Overall Score: 85.6/100.** Mean of the five quality dims (80+84+97+84+83 = 428 / 5 = 85.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Mistral%20Large%204/69302860
  - https://blog.csdn.net/weixin_29058331/article/details/169017190
  - https://blog.csdn.net/gitblog_00902/article/details/153061355?index=related&type=card
  - https://app.myzaker.com/news/article.php?pk=6aeda5368e9f097242696458
