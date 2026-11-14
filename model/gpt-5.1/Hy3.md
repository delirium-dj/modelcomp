# GPT-5.1 — findings by Hy3

**Source:** Web research (Baidu Baike, Baidu Baijiahao, CSDN, Zhihu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
GPT-5.1 is an OpenAI generative model series launched 2025-11-13, comprising GPT-5.1 Instant and GPT-5.1 Thinking with an intelligent-routing "Auto" tier that allocates queries to the best-fit model. Instant introduced adaptive reasoning (assessing question complexity to adjust strategy), and the series added video/audio multimodal input (uploaded separately). The GPT-5.1-Codex-Max variant (2025-11-20) introduced a context-compaction mechanism enabling multi-million-token, 24h+ continuous coding work and lifting SWE-bench accuracy to 77.9%. The base series was retired from ChatGPT on 2026-03-11.

## Model card
- **Vendor:** OpenAI
- **Release:** 2025-11-13 (retired from ChatGPT 2026-03-11)
- **Architecture:** Dual model — Instant (adaptive reasoning) + Thinking; Auto routing
- **Modalities:** Text, plus video/audio input (separate upload)
- **Variant:** GPT-5.1-Codex-Max (compaction, long coding sessions)

## Raw benchmarks

### Agent
- Codex-Max supports multi-million-token, 24h+ continuous agentic coding via compaction; CL-bench (High) task-solve rate 23.7%.

### Reasoning
- Adaptive reasoning in Instant; Thinking ~2× faster than prior gen on simple tasks, more思考 on complex ones.

### Coding
- **SWE-bench (Codex-Max):** 77.9% via compaction mechanism.

### Long context
- **Context window:** Codex-Max reaches millions of tokens (with compaction); base window not a 1M-class default.

## Normalized scores
- **Tool use: 84/100.** Codex-Max long agentic coding; Auto routing aids tool dispatch.
- **Reasoning: 85/100.** Adaptive + Thinking reasoning improvements.
- **Context window: 88/100.** Multi-million via compaction (Codex-Max); base below 1M default.
- **Multimodal: 84/100.** Video/audio input support.
- **Coding: 84/100.** SWE-bench 77.9% on Codex-Max.
- **Cost efficiency: 82/100.** Competitive at launch; superseded by cheaper later tiers.
- **Overall Score: 85.0/100.** Mean of the five quality dims (84+85+88+84+84 = 425 / 5 = 85.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/GPT-5.1/66989015
  - https://baijiahao.baidu.com/s?id=1849295509761640852&wfr=spider&for=pc
  - https://blog.csdn.net/jiangjunshow/article/details/159322202
  - https://baijiahao.baidu.com/s?id=1849299107966779465&wfr=spider&for=pc
  - https://www.zhihu.com/pin/1974799511063905588
