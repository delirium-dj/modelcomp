# Doubao-Seed-Evolving — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Doubao-Seed-Evolving is ByteDance's self-developed deep-reasoning model in the "Seed" series, built on the Doubao 1.5 base with reinforcement-learning breakthroughs and engineering optimization. It uses a dynamic, weekly-iterated release mechanism (Model ID `doubao-seed-evolving`), explicitly oriented at Agent and Coding scenarios. The Seed deep-thinking line debuted as "Doubao 1.5 深度思考" (2025-04-17), gained 256K context in the Doubao 1.6 series (2025-06), and was iterated again with the Seed 2.1 series (2026-06-23).

## Model card
| Field | Value |
|---|---|
| Vendor | ByteDance (Volcano Engine / 火山引擎) |
| Line | Doubao Seed (deep reasoning) |
| Release | 2025-04-17 (1.5 deep-thinking); weekly iteration since |
| Context window | 256K (Doubao 1.6 series) |
| Modalities | Text; image+text joint understanding; Agentic Coding |
| Positioning | Agent & Coding; continuously self-evolving (weekly versions) |

## Raw benchmarks
- **Agent / Tool use:** Designed for Agent workflows (read codebase → understand product → operate UI via screenshots → assemble output). Tencent Cloud and CSDN teardowns confirm multi-step autonomous operation capability.
- **Reasoning:** RL-driven deep-thinking; strong on complex math and long-chain planning per vendor and third-party writeups.
- **Coding:** The related Doubao-Seed-Code model hit domestic #1 on SWE-bench Verified and ranked just behind Sonnet 4 on Terminal-Bench; Seed-Evolving inherits this coding lineage.
- **Long context:** 256K full-context lossless inference documented for the Seed 2.1 family.

## Normalized scores
- **Tool use: 80/100.** Agent-native design with demonstrated tool/UI operation; scores reflect iterative, partly self-reported capability.
- **Reasoning: 80/100.** RL deep-thinking line is strong but continuously shifting, complicating fixed benchmarking.
- **Context window: 80/100.** 256K confirmed for the family.
- **Multimodal: 72/100.** Primarily text + image understanding; not a headline multimodal model.
- **Coding: 82/100.** Inherits SWE-bench-Verified-class coding strength from Doubao-Seed-Code.
- **Cost efficiency: 84/100.** Low-cost developer packages reported (e.g., ~¥50/month tiers); strong price/performance for agentic coding.
- **Overall Score: 78.8/100.** Mean of the five quality dims (80+80+80+72+82 = 394 / 5 = 78.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/%E8%B1%86%E5%8C%85Seed-Evolving%E6%A8%A1%E5%9E%8B/68083927
  - https://blog.csdn.net/u013132758/article/details/163155760
  - https://cloud.tencent.com/developer/article/2716249
  - https://blog.51cto.com/u_16099329/14714243
  - https://developer.volcengine.com/articles/7575418209432830003
