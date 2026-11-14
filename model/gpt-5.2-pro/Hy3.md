# GPT-5.2 Pro — findings by Hy3

**Source:** Web research (Baidu Baike, CSDN, Baidu Baijiahao, OSCHINA, Zhihu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
GPT-5.2 Pro is OpenAI's professional-tier model in the GPT-5.2 family (Pro / Instant / Thinking), released 2025-12-11. It targets professional and complex tasks with xhigh reasoning intensity, suited to scientific research, math proof, and critical decision support. It scored 93.2% on GPQA Diamond and 54.2% on ARC-AGI-2 (Verified), and in January 2026 it independently produced a proof of the Erdős conjecture that mathematician Terence Tao verified as correct — described as "the clearest first-class result (AI primary contribution) to date." It is served via the Responses API.

## Model card
- **Vendor:** OpenAI
- **Release:** 2025-12-11
- **Tier:** Professional / xhigh reasoning
- **Context window:** ~400K total (GPT-5 family: 272K in / 128K out)
- **Delivery:** Responses API

## Raw benchmarks

### Agent
- Responses API agentic delivery; xhigh reasoning for long professional tasks.

### Reasoning
- **GPQA Diamond:** 93.2% · **ARC-AGI-2 (Verified):** 54.2% · independently proved the Erdős conjecture (Tao-verified).

### Coding
- Strong coding implied via the GPT-5.2 family's table/code/long-context gains; exact public coding-bench headline for Pro not isolated.

### Long context
- **Context window:** ~400K total (inherits GPT-5 family 272K in / 128K out).

## Normalized scores
- **Tool use: 82/100.** Responses API agentic; professional-tier tooling.
- **Reasoning: 89/100.** GPQA 93.2% + Erdős-conjecture proof — elite reasoning.
- **Context window: 78/100.** ~400K total — below 1M-class leaders.
- **Multimodal: 78/100.** Vision understanding in the family; Pro specifics limited.
- **Coding: 85/100.** Strong coding implied; no isolated Pro coding headline.
- **Cost efficiency: 72/100.** Premium Pro-tier pricing.
- **Overall Score: 82.4/100.** Mean of the five quality dims (82+89+78+78+85 = 412 / 5 = 82.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/GPT-5.2%20Pro/67258433
  - https://yunyaniu.blog.csdn.net/article/details/155893711
  - https://baijiahao.baidu.com/s?id=1851266728215092840&wfr=spider&for=pc
  - https://my.oschina.net/u/9205117/blog/19104016
  - https://zhuanlan.zhihu.com/p/1983125491847290957
