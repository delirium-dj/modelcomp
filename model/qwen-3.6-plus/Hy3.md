# Qwen 3.6 Plus — findings by Hy3

**Source:** Web research (Baidu Baike, Baidu Wenku, CSDN, Zhihu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Qwen 3.6 Plus is Alibaba's proprietary (API-only) flagship of the Qwen 3.6 generation, released 2026-04-02. It ships with a default 1M-token context and a notably strong agentic-coding story: it reached #2 globally on the blind-coded Code Arena leaderboard (the highest-ranked Chinese model) and surpassed larger models such as GLM-5 and Kimi-K2.5 on SWE-bench, Terminal-Bench 2, and Claw-Eval. Multimodal was upgraded for complex-document understanding, physical-world vision, video reasoning, and visual coding. It is compatible with OpenClaw and Qwen Code agent frameworks.

## Model card
- **Vendor:** Alibaba (通义千问 / Qwen)
- **Release:** 2026-04-02
- **Availability:** Proprietary — API / cloud (Bailian) only, not open-weight
- **Context window:** 1,000,000 tokens (default)
- **Modalities:** Multimodal (complex docs, physical-world vision, video reasoning, visual coding)
- **Agent frameworks:** OpenClaw, Qwen Code

## Raw benchmarks

### Agent
- Agentic coding near Claude-series level; supports independent subtask execution, task decomposition, path planning, test-and-fix loops to completion.
- Compatible with OpenClaw and Qwen Code.

### Reasoning
- Overall gains over Qwen 3.5; agentic programming reasoning close to Claude series.

### Coding
- **Code Arena (blind coding):** global #2, top Chinese model.
- Surpasses GLM-5 and Kimi-K2.5 on SWE-bench, Terminal-Bench 2, Claw-Eval.

### Long context
- **Context window:** 1,000,000 tokens (default).

## Normalized scores
- **Tool use: 86/100.** Strong agentic coding + OpenClaw/Qwen Code compatibility.
- **Reasoning: 83/100.** Solid gains; near Claude-class agentic reasoning, not top absolute.
- **Context window: 96/100.** 1M-token default window.
- **Multimodal: 86/100.** Upgraded docs/vision/video/visual-coding; not a native-vision flagship tier.
- **Coding: 87/100.** Code Arena #2, beats larger models on SWE/terminal benchmarks.
- **Cost efficiency: 80/100.** Proprietary API pricing; strong capability, but not open/self-hostable.
- **Overall Score: 87.6/100.** Mean of the five quality dims (86+83+96+86+87 = 438 / 5 = 87.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Qwen3.6-Plus/67570073
  - http://wenku.baidu.com/search?fr=aladdin266&ind=0&word=qwen%2D3.6%2Dplus
  - https://blog.csdn.net/demm868/article/details/159807731
  - https://zhuanlan.zhihu.com/p/2023036990971462957
  - https://blog.csdn.net/qq_41797451/article/details/159785008
