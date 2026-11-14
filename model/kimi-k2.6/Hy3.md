# Kimi K2.6 — findings by Hy3

**Source:** Web research (Tencent Cloud dev community, SMZDM, CSDN, Baidu Baijiahao, Zhihu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Kimi K2.6 is an open-source flagship large model released by Moonshot AI (月之暗面) in 2026-04, built on a 1-trillion-parameter MoE architecture. It surpasses GPT-5.4 and Claude Opus 4.6 on programming benchmarks such as SWE-Bench Pro and Terminal-Bench, and is notable for long-horizon coding and agent-swarm orchestration (coordinating 100 sub-agents across 1,500 steps). It inherits Moonshot's traditional long-context strength.

## Model card
- **Vendor:** Moonshot AI (月之暗面)
- **Release:** 2026-04 (open source)
- **Architecture:** ~1T-param MoE
- **Context window:** long-context strength (256K RULER tested)
- **Agent:** Agent Swarm (100 sub-agents / 1,500 steps)
- **Design eval:** Kimi Design Bench (vision input, landing-page, full-stack, creative coding)

## Raw benchmarks

### Agent
- Agent Swarm coordinates 100 sub-agents across 1,500 steps — a headline agent-orchestration result.

### Reasoning
- Strong general reasoning; specific public reasoning-bench headline not isolated beyond coding/agent dominance.

### Coding
- **SWE-Bench Pro / Terminal-Bench:** surpasses GPT-5.4 and Claude Opus 4.6.
- Kimi Design Bench performance comparable to Google AI Studio on visual/full-stack tasks.

### Long context
- **RULER (256K):** 96.3% — vs GPT-4o 82.1% / Claude 3.7 89.7%; a traditional Moonshot strength.

## Normalized scores
- **Tool use: 88/100.** Agent Swarm (100 sub-agents / 1,500 steps) is best-in-class orchestration.
- **Reasoning: 85/100.** Strong; trailed only by dedicated reasoning leaders.
- **Context window: 92/100.** 256K RULER 96.3% — elite long-context, though base window < 1M.
- **Multimodal: 80/100.** Vision via Kimi Design Bench, but primarily text/coding focused.
- **Coding: 88/100.** Surpasses GPT-5.4 / Claude Opus 4.6 on SWE-Bench Pro & Terminal-Bench.
- **Cost efficiency: 84/100.** Open-source 1T MoE — strong value for self-hosting.
- **Overall Score: 86.6/100.** Mean of the five quality dims (88+85+92+80+88 = 433 / 5 = 86.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://cloud.tencent.com/developer/article/2658118
  - https://post.smzdm.com/p/aggr3o76/
  - https://blog.csdn.net/yonggeit/article/details/160727363
  - https://baijiahao.baidu.com/s?id=1863041235569628869&wfr=spider&for=pc
  - https://zhuanlan.zhihu.com/p/2030319252964689366
