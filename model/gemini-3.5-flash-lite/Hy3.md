# Gemini 3.5 Flash-Lite — findings by Hy3

**Source:** Web research (Google DeepMind, Baidu Baike, CSDN, Tencent Cloud dev community) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Gemini 3.5 Flash-Lite is Google DeepMind's speed- and cost-efficiency-oriented member of the Gemini 3.5 family, released 2026-07-21 for high-throughput, low-latency scenarios. It outputs at ~350 tokens/s and improves markedly over Gemini 3.1 Flash-Lite on Terminal-Bench 2.1 (31% → 54%), GDM-MRCR v2 (60.1% → 72.2%), and GDPval-AA v2 (642 → 1140). It supports text/image/audio/video input with a 1M-token context (64K max output) and built-in Computer Use, with an adjustable "thinking level" to balance latency, cost, and quality.

## Model card
- **Vendor:** Google DeepMind
- **Release:** 2026-07-21
- **Context window:** 1,000,000 tokens (max output 64K)
- **Speed:** ~350 tokens/s
- **Modalities:** Text, image, audio, video
- **Tools:** Computer Use; adjustable thinking level

## Raw benchmarks

### Agent
- Built-in Computer Use; agentic search, document processing, large-scale extraction, translation, summarization at batch scale.

### Reasoning
- GDM-MRCR v2 72.2% (up from 60.1%); thinking level tunes reasoning depth.

### Coding
- **Terminal-Bench 2.1:** 54% (up from 31%).

### Long context
- **Context window:** 1,000,000 tokens; GDPval-AA v2 1140 (up from 642).

## Normalized scores
- **Tool use: 80/100.** Computer Use + batch agentic tasks; lighter than flagship agents.
- **Reasoning: 79/100.** MRCR v2 72.2%; efficient-tier reasoning.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 86/100.** Native text/image/audio/video.
- **Coding: 78/100.** Terminal-Bench 2.1 54% — solid for the lite tier.
- **Cost efficiency: 92/100.** Speed/cost-optimized tier with 350 tok/s.
- **Overall Score: 83.8/100.** Mean of the five quality dims (80+79+96+86+78 = 419 / 5 = 83.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://deepmind.google/models/gemini/flash-lite/
  - https://baike.baidu.com/item/Gemini3.5Flash-Lite/68332921
  - https://blog.csdn.net/weixin_50937681/article/details/161547442
  - https://cloud.tencent.com/developer/article/2672155
