# Claude Sonnet 4.5 — findings by Hy3

**Source:** Web research (Baidu Baike, Tencent Cloud dev community, Zhihu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Claude Sonnet 4.5 is an Anthropic model released 2025-09-30, delivered via the Claude API and built on the ASL-3 safety framework with CBRN content classifiers. Its headline trait is continuous autonomous coding for 30+ hours — in customer tests it generated ~11K lines of code and built a database. It scores 77.2% on SWE-bench Verified, 61.4% on OSWorld, and 50% on Terminal-Bench. Developers access checkpoint save / task rollback via the native VS Code extension and Claude Agent SDK. Safety training reduced false-refusal rates tenfold and strengthened prompt-injection defense.

## Model card
- **Vendor:** Anthropic
- **Release:** 2025-09-30
- **Safety:** ASL-3 framework; CBRN classifiers
- **Context window:** ~200K tokens (Sonnet 4.5 era)
- **Delivery:** Claude API, VS Code extension, Agent SDK

## Raw benchmarks

### Agent
- Continuous autonomous coding 30h+; checkpoint save / task rollback via Agent SDK.

### Reasoning
- Strong reasoning; specific public reasoning-bench headline not isolated.

### Coding
- **SWE-bench Verified:** 77.2% · **OSWorld:** 61.4% · **Terminal-Bench:** 50% · 30h autonomous (~11K lines).

### Long context
- **Context window:** ~200K tokens (Sonnet 4.5 era; below 1M class).

## Normalized scores
- **Tool use: 85/100.** 30h autonomous coding + Agent SDK tooling.
- **Reasoning: 82/100.** Strong; no isolated headline number.
- **Context window: 78/100.** ~200K window — below 1M class.
- **Multimodal: 78/100.** Vision-capable; not a vision flagship.
- **Coding: 86/100.** SWE-bench 77.2% + 30h autonomous coding.
- **Cost efficiency: 80/100.** Mid-tier Sonnet pricing.
- **Overall Score: 81.8/100.** Mean of the five quality dims (85+82+78+78+86 = 409 / 5 = 81.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Claude%20Sonnet%204.5/66804838
  - https://cloud.tencent.com/developer/article/2695582
  - https://cloud.tencent.com/developer/article/2573059
  - https://baijiahao.baidu.com/s?id=1844954814943011663&wfr=spider&for=pc
  - https://zhuanlan.zhihu.com/p/1956394598797641178
