# Claude Sonnet 3.7 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Claude Sonnet 3.7 is Anthropic's first hybrid-reasoning model (released 2025-02). It blends a fast responding mode with an extended step-by-step thinking mode, with API control over thinking budget (up to 128K tokens). It pairs with the Claude Code agentic coding tool (research preview) that can read code, edit files, run tests, and commit to Git — completing 45+ minute development tasks in testing. 200K context window.

## Model card
| Field | Value |
|---|---|
| Vendor | Anthropic |
| Release | 2025-02 |
| Context window | 200K tokens |
| Reasoning | Hybrid: fast ↔ extended thinking (thinking_budget API) |
| Tools | Claude Code agentic coding tool |
| Notable | First hybrid-reasoning model |

## Raw benchmarks
- **Agent / Tool use:** Claude Code tooling; agentic terminal operations; thinking-budget control.
- **Reasoning:** GPQA (extended thinking) 84.8%; first hybrid-reasoning design.
- **Coding:** SWE-Bench Verified 62.3% (70.3% on a framework-adjusted subset); HumanEval Pass@1 86%.
- **Long context:** 200K-token window.

## Normalized scores
- **Tool use: 80/100.** Claude Code agentic tooling; thinking-budget control.
- **Reasoning: 74/100.** Hybrid reasoning; GPQA 84.8%.
- **Context window: 80/100.** 200K context.
- **Multimodal: 72/100.** Vision input supported.
- **Coding: 78/100.** SWE-Bench 62.3%, HumanEval 86%.
- **Cost efficiency: 75/100.** Sonnet-tier pricing (mid-premium).
- **Overall Score: 76.8/100.** Mean of the five quality dims (80+74+80+72+78 = 384 / 5 = 76.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Claude%203.7%20Sonnet/65433422
  - https://blog.csdn.net/weixin_42601134/article/details/170593326
  - https://xueqiu.com/5983518614/324799858
  - https://blog.csdn.net/culi3182/article/details/108384871
  - https://post.smzdm.com/p/az7n4ev0
