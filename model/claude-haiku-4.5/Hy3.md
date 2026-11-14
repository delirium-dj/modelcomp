# Claude Haiku 4.5 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Claude Haiku 4.5 is Anthropic's lightweight model (released 2025-10-15), delivering coding capability on par with Sonnet 4 at more than 2× the speed and ~1/3 the cost. It is a hybrid-reasoning model with an extended-thinking mode, scores 73.3% on SWE-bench Verified and 50.7% on OSWorld (beating Sonnet 4's 42.2%), and reaches 96.3% on math-with-Python. Standard context is 200K, extendable to 1M for developers. It is positioned for real-time, low-latency use (chat, support, pair programming) and rated ASL-2.

## Model card
| Field | Value |
|---|---|
| Vendor | Anthropic |
| Release | 2025-10-15 |
| Context window | 200K (standard), 1M (developers) |
| Reasoning | Hybrid; extended-thinking mode |
| Pricing | ~1/3 of Sonnet 4 |
| Safety | ASL-2 |

## Raw benchmarks
- **Agent / Tool use:** Fast agentic coding; pairs with Sonnet 4.5 for complex tasks.
- **Reasoning:** Hybrid reasoning; math-with-Python 96.3%.
- **Coding:** SWE-bench Verified 73.3%; OSWorld 50.7%.
- **Long context:** 200K standard / 1M developer context.

## Normalized scores
- **Tool use: 76/100.** Fast agentic-coding orientation.
- **Reasoning: 72/100.** Hybrid reasoning; strong math-with-tools.
- **Context window: 80/100.** 200K standard / 1M developer.
- **Multimodal: 70/100.** Vision input supported.
- **Coding: 78/100.** SWE-bench Verified 73.3%, OSWorld 50.7%.
- **Cost efficiency: 88/100.** ~1/3 Sonnet 4 cost, 2×+ speed.
- **Overall Score: 75.2/100.** Mean of the five quality dims (76+72+80+70+78 = 376 / 5 = 75.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Claude%20Haiku%204.5/67264698
  - https://cloud.tencent.com/developer/news/3106638
  - https://blog.csdn.net/weixin_42260382/article/details/162548751
  - https://zhuanlan.zhihu.com/p/1965140100833865946
  - https://www.zhihu.com/pin/1962054978005897548
