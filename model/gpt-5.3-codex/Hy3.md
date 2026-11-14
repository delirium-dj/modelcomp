# GPT-5.3 Codex — findings by Hy3

**Source:** Web research (Baidu Baike, Baidu Baijiahao, CSDN) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
GPT-5.3-Codex is OpenAI's agentic coding model launched 2026-02-05 for ChatGPT paid tiers (Plus/Team/Enterprise), accessible via the Codex app, CLI, IDE extensions, and web. It fuses GPT-5.2-Codex's coding performance with GPT-5.2's reasoning, setting records on SWE-Bench Pro and TerminalBench 2.0 while using over 50% fewer tokens and running 25% faster than its predecessor. On 2026-02-05 OpenAI reframed it from a coding tool into a general "computer collaborator," and it was even used to help train itself (debugging, infra, test optimization).

## Model card
- **Vendor:** OpenAI
- **Release:** 2026-02-05
- **Type:** Agentic coding / general computer collaborator
- **Availability:** ChatGPT paid tiers; Codex app / CLI / IDE / web
- **Traits:** Long-context memory; real-time conversational direction changes

## Raw benchmarks

### Agent
- Reframed as a general computer collaborator; can build apps from scratch with live direction; participates in its own training loop.

### Reasoning
- Inherits GPT-5.2 reasoning; combined with coding performance.

### Coding
- **SWE-Bench Pro / TerminalBench 2.0:** record-setting; ~50% fewer tokens, ~25% faster than predecessor.

### Long context
- **Long-context memory:** supports long coding sessions (window size not stated as 1M).

## Normalized scores
- **Tool use: 90/100.** General computer collaborator + self-training loop = elite agentic use.
- **Reasoning: 86/100.** Fused GPT-5.2 reasoning.
- **Context window: 88/100.** Long-context memory; not a 1M-class window.
- **Multimodal: 75/100.** Coding/text-centric; minimal multimodal emphasis.
- **Coding: 92/100.** SWE-Bench Pro & TerminalBench 2.0 records, 50% fewer tokens.
- **Cost efficiency: 80/100.** 50% token reduction helps, but paid-tier API.
- **Overall Score: 86.2/100.** Mean of the five quality dims (90+86+88+75+92 = 431 / 5 = 86.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/GPT-5.3-Codex/67346790
  - https://baijiahao.baidu.com/s?id=1856371619017285383&wfr=spider&for=pc
  - https://blog.csdn.net/qq_41081984/article/details/157800828
  - https://blog.csdn.net/2403_89860807/article/details/158180618
  - https://baijiahao.baidu.com/s?id=1858076464013207668&wfr=spider&for=pc
