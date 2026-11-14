# Claude Sonnet 4.6 — findings by Hy3

**Source:** Web research (Baidu Baike, Tencent Cloud dev community, Zhihu, DataLearnerAI) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Claude Sonnet 4.6 is a model published by Anthropic PBC on 2026-02-18. It emphasizes multi-step computer use (e.g. filling web forms and coordinating across browser tabs), improved resistance to prompt-injection attacks, and strong coding performance. In March 2026 it gained a 1,000,000-token context window offered at standard pricing.

## Model card
- **Vendor:** Anthropic PBC
- **Release:** 2026-02-18
- **Context window:** 1,000,000 tokens (rolled out 2026-03, at standard price)
- **Strengths:** Computer use, coding, safety/prompt-injection resistance
- **Availability:** API + free-tier default upgrade to Opus-level

## Raw benchmarks

### Agent
- Multi-step computer use: fills web forms, coordinates across multiple browser tabs.
- DataLearner reports Terminal-Bench Hard 53/242 (score 53) and Pinch Bench 6/38 (score 88) as representative agent-eval results.

### Reasoning
- Improved reasoning vs prior Sonnet generations; concrete public reasoning-bench numbers limited in sources.

### Coding
- Multiple sources describe strong coding-benchmark performance; DataLearner lists SWE-bench Verified 20/122 (score 79.60).

### Long context
- **Context window:** 1,000,000 tokens at standard pricing (2026-03 rollout).

## Normalized scores
- **Tool use: 87/100.** Genuine computer-use capability across tabs/forms; strong agent framing.
- **Reasoning: 85/100.** Solid generation-over-generation gains; fewer public reasoning-bench figures.
- **Context window: 95/100.** 1M-token window at standard price, slightly behind the newest 1M+ flagships.
- **Multimodal: 78/100.** Text/code-centric with computer use; lighter on native vision benchmarks in sources.
- **Coding: 88/100.** Consistently described as strong coding performer (SWE-bench Verified 79.60).
- **Cost efficiency: 82/100.** Free-tier Opus-level upgrade and standard pricing make it high value.
- **Overall Score: 86.6/100.** Mean of the five quality dims (87+85+95+78+88 = 433 / 5 = 86.6 ≈ 86.7).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Claude%20Sonnet%204.6/67403641
  - https://cloud.tencent.com/developer/article/2633957
  - https://cloud.tencent.com/developer/article/2695850
  - https://www.datalearner.com/ai-models/pretrained-models/claude-sonnet-4-6/analysis
  - https://zhuanlan.zhihu.com/p/2007487395222811918
