# Qwen 3.7 Max — findings by Hy3

**Source:** Web research (Alibaba Cloud dev community, Zhihu, CSDN) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Qwen 3.7 Max is Alibaba's pure-text flagship of the Qwen 3.7 family (released ~2026-05-29), using a MoE architecture above 1T parameters. It shares the family's 1M-token context and long autonomous-agent runtime (up to 35 hours) with Qwen 3.7 Plus, but Max is the text-only flagship while Plus carries the native multimodal (image/video) capability. Coverage highlights one-shot 3D racing-game generation and pricing 6–10× cheaper than Claude Opus 4.7.

## Model card
- **Vendor:** Alibaba (通义千问 / Qwen)
- **Release:** ~2026-05-29
- **Architecture:** MoE, >1T parameters
- **Context window:** 1,000,000 tokens
- **Modalities:** Text (Max is the text-only flagship; Plus is multimodal)
- **Agent:** Up to 35h autonomous-agent runtime

## Raw benchmarks

### Agent
- Long autonomous-agent runtime (up to 35h); strong agentic execution for the family.

### Reasoning
- Flagship-tier reasoning; specific public reasoning-bench headline not isolated.

### Coding
- One-shot 3D racing-game generation cited; strong coding for the family.

### Long context
- **Context window:** 1,000,000 tokens.

## Normalized scores
- **Tool use: 82/100.** 35h autonomous-agent runtime; strong but less agent-bench detail than coding siblings.
- **Reasoning: 83/100.** Flagship reasoning; no isolated headline number.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 72/100.** Max is text-only; multimodal lives in Plus.
- **Coding: 83/100.** One-shot game generation; no isolated coding-bench headline.
- **Cost efficiency: 88/100.** 6–10× cheaper than Claude Opus 4.7.
- **Overall Score: 83.2/100.** Mean of the five quality dims (82+83+96+72+83 = 416 / 5 = 83.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://developer.aliyun.com/article/1756310
  - https://zhuanlan.zhihu.com/p/2057360530726203992
  - https://developer.aliyun.com/article/1744251
  - https://blog.csdn.net/yht874690625/article/details/161318603
  - https://www.zhihu.com/pin/2043635574402199973
