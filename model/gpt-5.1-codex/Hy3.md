# GPT-5.1 Codex — findings by Hy3

**Source:** Web research (Zhihu, OpenAI Help Center, Baidu Baijiahao, CSDN) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
GPT-5.1-Codex is OpenAI's agentic programming model line, with the GPT-5.1-Codex-Max variant released 2025-11-20 replacing the base Codex as the default in the Codex interface. Max introduces a "compaction" context-compression mechanism enabling multi-million-token, 24h+ continuous coding work with reduced information loss, and lifts SWE-bench accuracy to 77.9%. It is designed for long, high-intensity development tasks with consistent generation across hundreds of thousands of lines of code.

## Model card
- **Vendor:** OpenAI
- **Release:** 2025-11-20 (Codex-Max variant)
- **Type:** Agentic coding model
- **Variant:** Codex-Max (compaction, multi-million-token sessions)
- **Delivery:** Codex platform / CLI / IDE

## Raw benchmarks

### Agent
- Multi-million-token, 24h+ continuous agentic coding via compaction; became Codex default.

### Reasoning
- Reasoning tuned for software engineering; strong on coding benchmarks.

### Coding
- **SWE-bench (Codex-Max):** 77.9% via compaction context mechanism.

### Long context
- **Context window:** Multi-million tokens (with compaction); base Codex below 1M-class default.

## Normalized scores
- **Tool use: 84/100.** 24h+ continuous agentic coding with compaction.
- **Reasoning: 81/100.** Engineering-tuned reasoning; no isolated general headline.
- **Context window: 84/100.** Multi-million via compaction (Max); base below 1M.
- **Multimodal: 73/100.** Coding-focused; some screenshot/diagram vision.
- **Coding: 85/100.** SWE-bench 77.9% on Max variant.
- **Cost efficiency: 78/100.** Paid ChatGPT / API tier.
- **Overall Score: 81.4/100.** Mean of the five quality dims (84+81+84+73+85 = 407 / 5 = 81.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://zhuanlan.zhihu.com/p/1974868482844824862
  - https://help.openai.com/zh-hans-cn/articles/9624314-model-release-notes
  - https://baijiahao.baidu.com/s?id=1849299107966779465&wfr=spider&for=pc
  - https://blog.csdn.net/weixin_42263486/article/details/155102449
  - https://baijiahao.baidu.com/s?id=1849305026215150101&wfr=spider&for=pc
