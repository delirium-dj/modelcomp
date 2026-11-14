# Step 5 Preview — findings by Hy3

**Source:** Web research (Baidu Baike, Baidu Baijiahao, Sohu, SMZDM, CSDN) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Step 5 Preview is the flagship base model from StepFun (阶跃星辰), released 2026-09-20 and open-sourced 2026-10-15. It is a sparse MoE with 600B total / 27B active parameters and a 1M-token context, natively supporting text and vision. It is positioned as a mainline work model for real-world agentic tasks — AI coding, software engineering, knowledge work, and finance. On the Artificial Analysis composite intelligence index it scores 44 (global open-source top 2–3), at 1/8 the per-task cost of Claude Opus 5.

## Model card
- **Vendor:** StepFun (上海阶跃星辰)
- **Release:** 2026-09-20 (open-sourced 2026-10-15)
- **Architecture:** Sparse MoE — 600B total / 27B active; 92-layer "narrow & deep" Transformer, Sparse GQA, Block-wise Token Merging
- **Context window:** 1,000,000 tokens
- **Modalities:** Native text + vision
- **Methods:** Long-horizon RL, Context Compaction for long-cycle agent tasks

## Raw benchmarks

### Agent
- Terminal-Bench 4.0: 33.3%.
- Designed for long-cycle agentic tasks via Long-horizon RL + Context Compaction.

### Reasoning
- Artificial Analysis composite intelligence index: 44 (global open-source top 2–3).
- Single-task cost = 1/8 of Claude Opus 5.

### Coding
- DeepSWE v1.1 (software-engineering test): 67.7%.
- Generation speed ~100 tok/s (above the ~65 average).

### Long context
- **Context window:** 1,000,000 tokens.

## Normalized scores
- **Tool use: 84/100.** Agentic focus with Terminal-Bench 4.0 33.3% and long-horizon RL.
- **Reasoning: 84/100.** AA index 44 — strong open-source reasoning tier.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 82/100.** Native text + vision; lighter multimodal breadth than flagships.
- **Coding: 84/100.** DeepSWE v1.1 67.7% at 100 tok/s.
- **Cost efficiency: 92/100.** 1/8 Opus-5 per-task cost, open weights — excellent value.
- **Overall Score: 86.0/100.** Mean of the five quality dims (84+84+96+82+84 = 430 / 5 = 86.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Step%205%20Preview/69102697
  - https://baijiahao.baidu.com/s?id=1876911610540907940&wfr=spider&for=pc
  - https://baijiahao.baidu.com/s?id=1879295836114211591&wfr=spider&for=pc
  - https://post.smzdm.com/p/apqm6329
  - https://blog.csdn.net/weixin_34226706/article/details/92485040
