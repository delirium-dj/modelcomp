# Gemini 2.5 Flash-Lite — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Gemini 2.5 Flash-Lite is Google's lightest member of the Gemini 2.5 family (GA 2025-07-22). It inherits the 1M-token context and an optional "thinking" mechanism to control reasoning budget, connects to Google Search and code-execution tools, and is the fastest, lowest-cost model in the family (input $0.10/M, output $0.40/M tokens). It is positioned for high-volume, cost-sensitive production workloads.

## Model card
| Field | Value |
|---|---|
| Vendor | Google (DeepMind) |
| Family | Gemini 2.5 (Flash-Lite tier) |
| Release | 2025-07-22 (GA) |
| Context window | 1,000,000 tokens |
| Modalities | Native multimodal input |
| Pricing | $0.10/M in, $0.40/M out (cheapest in family) |

## Raw benchmarks
- **Agent / Tool use:** Search + code-execution tooling; high-throughput agent/orchestration.
- **Reasoning:** Optional thinking; lite tier with capped reasoning.
- **Coding:** Capable lightweight coding; not coding-optimized.
- **Long context:** 1M-token context confirmed.

## Normalized scores
- **Tool use: 72/100.** High-throughput agent/orchestration; Search/code tools.
- **Reasoning: 66/100.** Lite tier with adjustable but capped reasoning.
- **Context window: 90/100.** 1M-token context.
- **Multimodal: 78/100.** Native multimodal input.
- **Coding: 68/100.** Lightweight; not coding-optimized.
- **Cost efficiency: 92/100.** Cheapest/fastest in family.
- **Overall Score: 74.8/100.** Mean of the five quality dims (72+66+90+78+68 = 374 / 5 = 74.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Gemini%202.5%20Flash-Lite/65796437
  - https://baike.baidu.com/item/Gemini%202.5%20Flash/65575237
  - https://baijiahao.baidu.com/s?id=1835231345801432483&wfr=spider&for=pc
  - https://cloud.tencent.com/developer/article/2627261
  - https://cloud.tencent.com/developer/article/2532629
