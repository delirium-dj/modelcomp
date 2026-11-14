# Qwen 3.7 Plus — findings by Hy3

**Source:** Web research (Alibaba Cloud dev community, Baidu Baijiahao, Zhihu, Alibaba Help Center) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Qwen 3.7 Plus is a multimodal agent model released by Alibaba's Tongyi Qianwen team on 2026-06-02, framed as unifying vision and language into a single agent base ("see, think, write code, act"). It shares the Qwen 3.7 family's million-token context and long-horizon autonomous-execution capability, positioned as a cost-effective multimodal general base.

## Model card
- **Vendor:** Alibaba (通义千问 / Qwen)
- **Release:** 2026-06-02
- **Context window:** 1,000,000 tokens
- **Max output:** 65,536 tokens
- **Modalities:** Multimodal (text + vision / screen understanding), agentic
- **Positioning:** High cost-performance multimodal all-round base

## Raw benchmarks

### Agent
- Designed as a multimodal agent base; official demos build complete apps (e.g. replicating a stock app) and an 11-hour independent app-development showcase.
- Screen-understanding reportedly beats GPT-5.4 in vendor testing.

### Reasoning
- Shared reasoning stack with the Qwen 3.7 family; long-horizon autonomous execution emphasized.

### Coding
- Agentic coding showcased via app-generation demos; 11-hour independent end-to-end app build cited by Alibaba.

### Long context
- **Context window:** 1,000,000 tokens (Alibaba Model Studio Help Center lists qwen3.7-plus among the 1M-token models); max output 65,536 tokens.

## Normalized scores
- **Tool use: 82/100.** Strong multimodal-agent framing (screen understanding, app builds); fewer independent tool/agent-bench numbers.
- **Reasoning: 84/100.** Solid family-level reasoning; trails the top reasoning specialists.
- **Context window: 98/100.** 1M-token window matching the current public maximum.
- **Multimodal: 88/100.** Explicit multimodal-agent base with screen understanding beating GPT-5.4 per vendor.
- **Coding: 82/100.** Impressive agentic demos, but SWE-bench-class public numbers not confirmed.
- **Cost efficiency: 84/100.** Explicitly positioned as high cost-performance base within the Qwen 3.7 family.
- **Overall Score: 86.8/100.** Mean of the five quality dims (82+84+98+88+82 = 434 / 5 = 86.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://developer.aliyun.com/article/1744251
  - https://developer.aliyun.com/article/1756310
  - https://zhuanlan.zhihu.com/p/2046280370006636536
  - https://baijiahao.baidu.com/s?id=1866858315594476032&wfr=spider&for=pc
  - https://help.aliyun.com/zh/model-studio/user-guide/core-concepts/
