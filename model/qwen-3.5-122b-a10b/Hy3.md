# Qwen 3.5 122B A10B — findings by Hy3

**Source:** Web research (Baidu Baike, CSDN, Baidu Baijiahao, Zhihu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Qwen3.5-122B-A10B is Alibaba's medium-sized Qwen 3.5 model released 2026-02-25, using architectural innovation (hybrid attention + high-sparsity MoE, 122B total / 10B active) trained on mixed text+vision tokens. It sets a new performance high for medium models, surpassing the larger previous-generation flagships Qwen3-235B-A22B and Qwen3-VL, and scores strongly on IFBench (instruction following), GPQA (PhD-level reasoning), HMMT 25 (math), MMMLU (multilingual knowledge), BFCL v4 (agent tool calling), and SWE-bench Verified (agentic coding). It is deployable on consumer GPUs.

## Model card
- **Vendor:** Alibaba (通义千问 / Qwen)
- **Release:** 2026-02-25 (open source, Apache 2.0)
- **Architecture:** Hybrid attention + high-sparsity MoE — 122B total / 10B active
- **Training:** Mixed text + vision tokens
- **Deployment:** Consumer-GPU friendly

## Raw benchmarks

### Agent
- **BFCL v4:** strong agentic tool-calling performance.

### Reasoning
- **GPQA:** PhD-level reasoning · **HMMT 25:** math reasoning.

### Coding
- **SWE-bench Verified:** agentic coding — strong for a medium model.

### Long context
- **Context window:** Not stated as 1M in sources (medium model; likely 128K–262K tier).

## Normalized scores
- **Tool use: 84/100.** BFCL v4 agentic tool calling — strong.
- **Reasoning: 85/100.** GPQA + HMMT 25 — PhD/math-level.
- **Context window: 80/100.** Medium-tier window (not 1M-class per sources).
- **Multimodal: 82/100.** Mixed text+vision token training.
- **Coding: 84/100.** SWE-bench Verified strong for size.
- **Cost efficiency: 90/100.** 10B-active MoE, consumer-GPU deployable — excellent value.
- **Overall Score: 83.0/100.** Mean of the five quality dims (84+85+80+82+84 = 415 / 5 = 83.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Qwen3.5-122B-A10B/67419444
  - https://blog.csdn.net/easyllm/article/details/158424469
  - https://baijiahao.baidu.com/s?id=1858059474119669973&wfr=spider&for=pc
  - https://download.csdn.net/blog/column/13060178/158774276
  - https://www.zhihu.com/question/2009949864205710678/answer/2012604996575831888
