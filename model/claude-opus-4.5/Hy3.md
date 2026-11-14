# Claude Opus 4.5 — findings by Hy3

**Source:** Web research (Baidu Baike, The Paper, Tencent Cloud dev community) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Claude Opus 4.5 is an Anthropic model released 2025-11-24, available via the Anthropic app, API, and AWS / Google Cloud / Azure, and integrated into Microsoft Foundry, GitHub Copilot paid plans, and Copilot Studio. It extends the context window to 200K tokens with cross-modal text/image/code handling, adds a thinking-intensity (`effort`) control, and improves persistent complex-task handling. In January 2026 it ranked #1 on the upgraded LiveBench. METR reported a 50%-task-completion time horizon of 4h49m (then the longest published), and it resisted prompt-injection better than GPT-5.1 and Gemini 3 Pro in internal evaluations.

## Model card
- **Vendor:** Anthropic
- **Release:** 2025-11-24
- **Context window:** 200,000 tokens
- **Modalities:** Text, image, code (cross-modal)
- **Features:** `effort` thinking-intensity control; agentic task persistence

## Raw benchmarks

### Agent
- METR 50%-task-completion horizon 4h49m; agent iteration to peak in ~4 steps (Rakuten test); strong prompt-injection resistance.

### Reasoning
- Ranked #1 on LiveBench (Jan 2026 upgrade); cross-modal reasoning.

### Coding
- **SWE-bench Verified:** >80% · **SWE-bench Multilingual:** top in 7 of 8 languages · single generation reproduced a 3,500-line Minecraft implementation; native MoonBit support.

### Long context
- **Context window:** 200,000 tokens.

## Normalized scores
- **Tool use: 86/100.** Strong agentic persistence (METR 4h49m) + effort control.
- **Reasoning: 85/100.** LiveBench #1; robust cross-modal reasoning.
- **Context window: 78/100.** 200K window — below the 1M-class leaders.
- **Multimodal: 82/100.** Text/image/code cross-modal; not a native-vision flagship.
- **Coding: 88/100.** SWE-bench >80%, multilingual leadership.
- **Cost efficiency: 78/100.** Premium Opus-tier pricing.
- **Overall Score: 83.8/100.** Mean of the five quality dims (86+85+78+82+88 = 419 / 5 = 83.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Claude%20Opus%204.5/67024159
  - https://www.thepaper.cn/newsDetail_forward_32038066
  - https://cloud.tencent.com/developer/article/2595764
  - https://cloud.tencent.com/developer/article/2596147
