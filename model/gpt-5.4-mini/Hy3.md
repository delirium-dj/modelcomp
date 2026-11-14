# GPT-5.4 Mini — findings by Hy3

**Source:** Web research (SMZDM, Baidu Baijiahao, Zhihu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
GPT-5.4 Mini is OpenAI's speed- and cost-optimized member of the GPT-5.4 family, released ~2026-03-18. Its capability curve approaches the flagship on multiple core dimensions — logical reasoning and multimodal understanding — while converging on engineering-delivery quality. It runs ~2× faster than its predecessor, scores close to GPT-5.4 on SWE-Bench Pro, and performs well on OSWorld-Verified (multimodal operation). Pricing is $0.75 in / $4.50 out per M tokens (mini); the smaller Nano is far cheaper.

## Model card
- **Vendor:** OpenAI
- **Release:** ~2026-03-18
- **Tier:** Mini (speed/cost optimized)
- **Pricing:** $0.75 in / $4.50 out per M tokens (mini)
- **Speed:** ~2× faster than predecessor; ~65s avg response (mini-high)

## Raw benchmarks

### Agent
- Strong agentic behavior; OSWorld-Verified (multimodal operation) performs well.

### Reasoning
- Logical reasoning approaches the flagship GPT-5.4 (mini within ~3.3% on a cited benchmark).

### Coding
- **SWE-Bench Pro:** close to GPT-5.4 flagship.

### Long context
- **Context window:** GPT-5.4 family tier (not stated as 1M in sources).

## Normalized scores
- **Tool use: 80/100.** Agentic + OSWorld-Verified; mini-tier tooling.
- **Reasoning: 80/100.** Approaches flagship on logic/multimodal.
- **Context window: 80/100.** GPT-5.4 family tier; below 1M class.
- **Multimodal: 80/100.** Multimodal understanding approaches flagship.
- **Coding: 81/100.** SWE-Bench Pro near flagship.
- **Cost efficiency: 86/100.** $0.75/$4.50 mini pricing — good value.
- **Overall Score: 80.2/100.** Mean of the five quality dims (80+80+80+80+81 = 401 / 5 = 80.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://post.smzdm.com/p/aggx79nw/
  - https://baijiahao.baidu.com/s?id=1860446754329639092&wfr=spider&for=pc
  - https://www.zhihu.com/question/2017426077002253714/answer/2017540791619302442
  - https://zhuanlan.zhihu.com/p/2017961824398614756
  - https://baijiahao.baidu.com/s?id=1859983641098703115&wfr=spider&for=pc
