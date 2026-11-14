# GPT-6.1 Terra — findings by Hy3

**Source:** Web research (ppv9 model leaderboard, OpenAI Help Center, CSDN, Tencent Cloud dev community) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
GPT-6.1 Terra is an OpenAI model rolling out from 2026-10-02 under the `gpt-6.1-terra` API name, also available in ChatGPT and Codex. It belongs to OpenAI's "Terra" product line (high-throughput, low-latency, cost-efficient) and specializes in visual/spatial reasoning, precise desktop computer use, and natural text generation.

## Model card
- **Vendor:** OpenAI
- **Release:** 2026-10-02
- **Context window:** ~1.05M tokens
- **Modalities:** Vision reasoning + text; computer use
- **API price:** $1.00 input / $5.00 output per M tokens; cached input $0.05
- **Lineage:** Successor to GPT-5.6 Terra (terminal-bench 21.5% → 50.3%)

## Raw benchmarks

### Agent
- Specializes in computer use / desktop software operation.
- **Terminal-Bench 4.0:** 50.3% at max reasoning intensity — more than double GPT-5.6 Terra (21.5%).
- Third-party leaderboard (ppv9): overall intelligence v5 51.3, rank #8; agentic "每指数任务 $0.96".

### Reasoning
- Strong general reasoning; exact public reasoning-bench figures not isolated in sources.

### Coding
- Terminal-Bench 4.0 50.3% positions it for script-level / tool-level programming, config edits, small-tool and simple-bug fixes; OpenAI notes the most complex coding tasks still recommend GPT-6.1 Sol / GPT-6 Astra.

### Long context
- **Context window:** ~1.05M tokens.

## Normalized scores
- **Tool use: 88/100.** Computer-use specialist with Terminal-Bench 4.0 50.3% (2× prior gen).
- **Reasoning: 82/100.** Strong but not separately benchmarked to top-reasoner level in sources.
- **Context window: 97/100.** ~1.05M-token window.
- **Multimodal: 84/100.** Strong visual/spatial reasoning; narrower than full multimodal flagships.
- **Coding: 85/100.** Terminal-Bench 50.3%; scoped to tool/script-level coding.
- **Cost efficiency: 86/100.** Terra line + $1/$5 pricing + $0.05 cache = strong value per task.
- **Overall Score: 87.2/100.** Mean of the five quality dims (88+82+97+84+85 = 436 / 5 = 87.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://www.ppv9.com/model/gpt-6-1-terra/
  - https://help.openai.com/zh-hans-cn/articles/9624314-model-release-notes
  - https://blog.csdn.net/weixin_44262492/article/details/170294946
  - https://cloud.tencent.com/developer/article/2778418
