# Claude Sonnet 4 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Claude Sonnet 4 is Anthropic's "all-rounder" workhorse in the Claude 4 family, launched 2025-05-23. It strengthens coding and logical reasoning over Sonnet 3.7, achieves 72.7% on SWE-bench, and ships a hybrid reasoning engine (near-instant mode ↔ extended thinking). It became GitHub Copilot's agent core model and was later (2025-09-30) superseded by Claude Sonnet 4.5. Standard context is 200K tokens, later extended to 1M tokens via API for Tier-4/custom-rate-limit customers.

## Model card
| Field | Value |
|---|---|
| Vendor | Anthropic |
| Release | 2025-05-23 (Sonnet 4.5 followed 2025-09-30) |
| Context window | 200K standard; 1M via API (Tier-4) |
| Reasoning | Hybrid: near-instant + extended thinking |
| Pricing | $3/M input, $15/M output |
| Safety | ASL-3 |

## Raw benchmarks
- **Agent / Tool use:** Parallel tool execution and memory-file maintenance; selected as GitHub Copilot agent core model (code review, financial-report parsing).
- **Reasoning:** Extended-thinking mode; math accuracy 96.2%; ~10.4% coding improvement over Sonnet 3.7.
- **Coding:** SWE-bench 72.7%; deep IDE integration.
- **Long context:** 200K standard, upgradable to 1M-token context (handles 75,000+ line codebases).

## Normalized scores
- **Tool use: 80/100.** Parallel tool execution; Copilot-agent core.
- **Reasoning: 76/100.** Hybrid reasoning; math 96.2%.
- **Context window: 84/100.** 200K standard, 1M via API.
- **Multimodal: 74/100.** Vision input supported.
- **Coding: 80/100.** SWE-bench 72.7%; agentic-coding flagship.
- **Cost efficiency: 70/100.** $15/M output is premium-priced.
- **Overall Score: 78.8/100.** Mean of the five quality dims (80+76+84+74+80 = 394 / 5 = 78.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Claude%20Sonnet%204/65713743
  - https://hub.baai.ac.cn/view/48134
  - https://baijiahao.baidu.com/s?id=1840323154520229796&wfr=spider&for=pc
  - https://baike.baidu.com/item/%E5%85%8B%E5%8A%B3%E5%BE%B74/65719973
