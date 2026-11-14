# Gemma 4 31B — findings by Hy3

**Source:** Web research (Zhihu, cnblogs/OpenCSG, Baidu Baike, CSDN) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Gemma 4 31B is Google DeepMind's open-source dense model released 2026-04-02 as part of the Gemma 4 family (also E2B, E4B, 26B MoE). It is a 31B-parameter dense model (60 layers, 256K context) aimed at IDE, coding-assistant, and agent workflows, ranking #3 among open-source models on the Arena AI text leaderboard. Its bfloat16 weights fit a single 80GB H100, and quantized versions run on consumer GPUs. Google highlights high "intelligence per parameter," with MMLU-Pro 85.2% and strong AIME 2026 results.

## Model card
- **Vendor:** Google DeepMind
- **Release:** 2026-04-02 (open source)
- **Architecture:** Dense — 31B parameters, 60 layers
- **Context window:** 256,000 tokens
- **Deployment:** Single 80GB H100 (bf16); consumer GPU (quantized)
- **Ranking:** Arena AI open-source text #3

## Raw benchmarks

### Agent
- Positioned for IDE / coding-assistant / agent workflows; concrete agent-bench headline not isolated.

### Reasoning
- **MMLU-Pro:** 85.2% · strong on AIME 2026 (math).

### Coding
- Coding-benchmark performance ~85% of models 20× its size per vendor; exact public coding-bench headline not isolated.

### Long context
- **Context window:** 256,000 tokens (sliding window 1024).

## Normalized scores
- **Tool use: 80/100.** Agent/IDE positioning; no isolated agent-bench headline.
- **Reasoning: 84/100.** MMLU-Pro 85.2% + AIME 2026 strength.
- **Context window: 82/100.** 256K window.
- **Multimodal: 78/100.** Text-dense model; family has multimodal variants.
- **Coding: 82/100.** ~85% of 20×-larger models; strong for size.
- **Cost efficiency: 90/100.** Open weights + single-GPU / consumer-GPU deploy — excellent value.
- **Overall Score: 81.2/100.** Mean of the five quality dims (80+84+82+78+82 = 406 / 5 = 81.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://zhuanlan.zhihu.com/p/2023684432012288121
  - https://www.cnblogs.com/OpenCSG/p/19952941
  - https://baike.baidu.com/item/310%E4%BA%BF%E7%A8%A0%E5%AF%86%E6%A8%A1%E5%9E%8B(31B)/67588938
  - https://baike.baidu.com/item/Gemma%204%2031B%20Dense/67592357
  - https://blog.csdn.net/evendy_te/article/details/159885756
