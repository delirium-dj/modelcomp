# GPT-5.2 — findings by Hy3

**Source:** Web research (Tencent Cloud dev community, Zhihu, Baidu Baijiahao, CSDN) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
GPT-5.2 was released by OpenAI on 2025-12-12, positioned as "built for knowledge work." OpenAI emphasized gains in table creation, slide/presentation generation, code writing, image understanding, ultra-long-context handling, and multi-step tool-chain execution. A later `/compact` endpoint extended its long-context reasoning capability.

## Model card
- **Vendor:** OpenAI
- **Release:** 2025-12-12
- **Strengths:** Tables/PPT, ultra-long context, multi-step tool chains, vision, coding/math/science
- **Notable API:** `/compact` endpoint for long-context reasoning (added 2026-06)
- **Positioning:** Default substrate for AI-app development / enterprise agent workflows

## Raw benchmarks

### Agent
- Strong multi-step tool-chain execution; `/compact` endpoint supports very long agent runs.

### Reasoning
- Improved across math, science, long-text reasoning; specific public reasoning-bench headline not isolated.

### Coding
- **SWE-bench:** ~80% (per third-party coverage of GPT-5.2 Thinking).
- **SWE-bench Pro:** 55.6% — first clear lead over Claude on that metric.

### Long context
- Ultra-long-context handling emphasized; `/compact` endpoint added 2026-06 for long-context reasoning.

## Normalized scores
- **Tool use: 87/100.** Multi-step tool chains + `/compact` for long agent runs.
- **Reasoning: 84/100.** Broad gains in math/science/long-text; no single headline number.
- **Context window: 88/100.** Ultra-long context via `/compact` rather than a stated 1M base.
- **Multimodal: 83/100.** Solid image understanding; not a native multimodal flagship.
- **Coding: 87/100.** SWE-bench ~80%, SWE-bench Pro 55.6% (first clear lead over Claude).
- **Cost efficiency: 82/100.** Strong capability per dollar for enterprise dev workflows.
- **Overall Score: 85.8/100.** Mean of the five quality dims (87+84+88+83+87 = 429 / 5 = 85.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://cloud.tencent.com/developer/news/3342576
  - https://zhuanlan.zhihu.com/p/1982813692799252216
  - https://blog.csdn.net/yaoxiaoganggang/article/details/162206541
  - https://www.zhihu.com/question/1982914635960169675
  - https://baijiahao.baidu.com/s?id=1851267017396919560&wfr=spider&for=pc
