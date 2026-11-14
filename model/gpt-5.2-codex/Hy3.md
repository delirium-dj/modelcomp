# GPT-5.2 Codex — findings by Hy3

**Source:** Web research (Baidu Baike, Bilibili, Baidu Baijiahao, Sohu, CSDN) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
GPT-5.2-Codex is OpenAI's agentic programming model released 2025-12-18, built on the GPT-5.2 architecture and optimized for complex real-world software engineering and defensive cybersecurity. It adds native long-context compression, large-scale code-refactoring, and improved Windows-environment performance. On SWE-Bench Pro it reaches 56.4% and Terminal-Bench 2.0 64% (SOTA at release), with SWE-bench Verified around 80% (comparable to Claude Opus 4.5). A notable capability is autonomous security-vulnerability discovery (e.g. CVE-2025-55182 in React). It is delivered via Codex CLI, IDE extensions, cloud, and macOS app, with a trusted-access program for security professionals.

> Note: this slug (`gpt-5.2-codex`) appears twice in model-queue.md (lines 96 and 100) with two different Overall scores; per the "skip existing" rule only one `Hy3.md` is written here.

## Model card
- **Vendor:** OpenAI
- **Release:** 2025-12-18
- **Type:** Agentic coding / cybersecurity model
- **Features:** Long-context compression, large-scale refactoring, Windows perf
- **Delivery:** Codex CLI / IDE / cloud / macOS; trusted-access program

## Raw benchmarks

### Agent
- Agentic coding with long-context compression; autonomous CVE discovery (defensive security).

### Reasoning
- Reasoning tuned for software engineering; strong on coding benchmarks.

### Coding
- **SWE-Bench Pro:** 56.4% · **Terminal-Bench 2.0:** 64% · **SWE-bench Verified:** ~80%.

### Long context
- **Context window:** Long-context compression enables long projects (base window not stated as 1M).

## Normalized scores
- **Tool use: 87/100.** Agentic coding + autonomous CVE discovery + long-context compression.
- **Reasoning: 83/100.** Engineering-tuned reasoning; no isolated general-reasoning headline.
- **Context window: 80/100.** Compression helps long projects; base window below 1M class.
- **Multimodal: 74/100.** Coding-focused; some screenshot/diagram vision.
- **Coding: 89/100.** SWE-Bench Pro 56.4% / Terminal-Bench 2.0 64% / Verified ~80%.
- **Cost efficiency: 78/100.** Paid ChatGPT / API tier.
- **Overall Score: 82.6/100.** Mean of the five quality dims (87+83+80+74+89 = 413 / 5 = 82.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/GPT-5.2-Codex/67101515
  - https://www.bilibili.com/opus/1149604363952455683
  - https://baijiahao.baidu.com/s?id=1851901103719683450&wfr=spider&for=pc
  - https://it.sohu.com/a/967060306_122055437
  - https://blog.csdn.net/2301_78677192/article/details/159735239
