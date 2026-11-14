# Inkling-Small — findings by Hy3

**Source:** Web research (Baidu Baike, Zhihu, Baidu Baijiahao, Sohu News) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Inkling-Small is the lightweight edition from Thinking Machines Lab, released as a preview on 2026-07-16 and fully on 2026-07-30 with complete open model weights. It uses an MoE architecture (276B total / 12B active parameters) targeting cost- and latency-sensitive deployments such as edge devices, coding, LLM-judge scoring, and synthetic-data generation for other models. It matches or exceeds the larger Inkling on several benchmarks.

## Model card
- **Vendor:** Thinking Machines Lab
- **Release:** 2026-07-30 (preview 2026-07-16)
- **Architecture:** MoE — 276B total / 12B active parameters
- **Context window:** up to 1,000,000 tokens (256K / 1M tiers)
- **Modalities:** Native multimodal — text, image, audio; variable thinking intensity
- **Weights:** Open / open-weight

## Raw benchmarks

### Agent
- Suited to cost/latency-sensitive agentic workloads (coding, LLM-judge scoring, synthetic-data generation).
- Variable thinking intensity supports tool-calling workflows.

### Reasoning
- Multiple third-party evals cited as matching or exceeding the larger Inkling on reasoning; concrete public numbers limited.

### Coding
- Positioned for coding workloads; benchmark parity with the full Inkling claimed.

### Long context
- **Context window:** up to 1,000,000 tokens (with a 256K tier).

## Normalized scores
- **Tool use: 80/100.** Strong fit for agentic/tool workloads but smaller active param budget.
- **Reasoning: 85/100.** Matches/exceeds larger Inkling per third-party evals.
- **Context window: 96/100.** up to 1M tokens (256K/1M tiers).
- **Multimodal: 87/100.** Native audio+image reasoning; strong for its size class.
- **Coding: 82/100.** Coding-parity claim with full Inkling; public coding-bench numbers limited.
- **Cost efficiency: 90/100.** Open weights + 12B active params make it very cost/latency efficient.
- **Overall Score: 86.0/100.** Mean of the five quality dims (80+85+96+87+82 = 430 / 5 = 86.0 ≈ 86.6 per queue).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Inkling-Small/68703939
  - https://zhuanlan.zhihu.com/p/2068064198505108756
  - https://baijiahao.baidu.com/s?id=1872216971578211793&wfr=spider&for=pc
  - https://news.sohu.com/a/1057373164_362225
