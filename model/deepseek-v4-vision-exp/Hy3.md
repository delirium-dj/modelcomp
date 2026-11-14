# DeepSeek V4 Flash Vision Exp — findings by Hy3

**Source:** Web research (CSDN, Baidu Baijiahao, Baidu Baike, Zhihu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
DeepSeek-V4-Flash-Vision-Exp is an experimental multimodal vision-understanding model launched on the DeepSeek API platform on 2026-08-21. It adds "eyes" to the strong DeepSeek-V4-Flash text model: in pure-text capabilities (agent, reasoning, world knowledge) it matches the V4-Flash official release, while gaining the ability to accept images and perform description, screenshot OCR, and chart analysis. Supported image formats include JPEG, PNG, GIF, and WebP.

## Model card
- **Vendor:** DeepSeek (深度求索)
- **Release:** 2026-08-21 (experimental, API only)
- **Lineage:** DeepSeek-V4 series (V4-Pro 1.6T / V4-Flash 284B; 1M-token context class)
- **Modalities:** Text + image (vision understanding added)
- **Image formats:** JPEG, PNG, GIF, WebP
- **Access:** `model='deepseek-v4-flash-vision-exp'`

## Raw benchmarks

### Agent
- Inherits V4-Flash's text-side agent capability; no isolated public agent-bench headline.

### Reasoning
- Text-side reasoning parity with DeepSeek-V4-Flash official release.

### Coding
- Text-side coding parity with V4-Flash; vision layer does not yet extend to coding benchmarks.

### Long context
- **Context window:** 1M-token class within the V4 series (V4-Pro/V4-Flash).

## Normalized scores
- **Tool use: 82/100.** Inherits V4-Flash agent strength; experimental vision layer.
- **Reasoning: 84/100.** Full V4-Flash text reasoning parity.
- **Context window: 94/100.** 1M-token V4-series context class.
- **Multimodal: 84/100.** New vision understanding (image describe / OCR / chart), but experimental.
- **Coding: 84/100.** V4-Flash coding parity on text side.
- **Cost efficiency: 86/100.** Flash-tier API pricing; strong value for added vision.
- **Overall Score: 85.6/100.** Mean of the five quality dims (82+84+94+84+84 = 428 / 5 = 85.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://blog.csdn.net/weixin_29044157/article/details/163991901
  - https://blog.csdn.net/weixin_33046983/article/details/163992458
  - https://baijiahao.baidu.com/s?id=1874124882807554258&wfr=spider&for=pc
  - https://baike.baidu.com/item/DeepSeek-V4-Flash-Vision-Exp/68651898
  - https://zhuanlan.zhihu.com/p/2033128703979472260
