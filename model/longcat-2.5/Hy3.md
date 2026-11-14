# LongCat-2.5 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** LongCat-2.5 is Meituan's 1.6-trillion-parameter native multimodal model for long-horizon agentic tasks, released 2026-11-02 and open-sourced 2026-11-10. It activates ~48B parameters per token, supports a 1M-token context and visual coding, and was trained entirely on domestic compute. Official self-tests place it between Claude Opus 4.8 and Opus 5, exceeding Opus 5 on several benchmarks (AutomationBench 51.8 vs 50.3; BrowseComp 91.9 vs 90.8; 3DCodeBench 55.4 vs 54.3; MCP Atlas 83.1; MathVision 96.5).

## Model card
| Field | Value |
|---|---|
| Vendor | Meituan |
| Release | 2026-11-02 (open-sourced 2026-11-10) |
| Parameters | 1.6T total / ~48B active |
| Context window | 1,000,000 tokens |
| Modalities | Native multimodal (text/image/video) + visual coding |
| Positioning | Long-horizon agentic tasks |

## Raw benchmarks
- **Agent / Tool use:** MCP Atlas 83.1 — strong tool/ecosystem compatibility.
- **Reasoning:** Positioned between Opus 4.8 and 5; MathVision 96.5 (near-ceiling).
- **Coding:** 3DCodeBench 55.4 (beats Opus 5's 54.3); Terminal-Bench v4.0-class agentic coding.
- **Long context:** 1M-token window confirmed.

## Normalized scores
- **Tool use: 78/100.** MCP-ecosystem compatible; agentic design.
- **Reasoning: 74/100.** Strong but the repo's normalized ranking places it mid-tier.
- **Context window: 80/100.** 1M-token context.
- **Multimodal: 76/100.** Native multimodal with visual coding.
- **Coding: 76/100.** 3DCodeBench beats Opus 5; agentic coding solid.
- **Cost efficiency: 62/100.** 1.6T model — heavy to serve despite open weights.
- **Overall Score: 76.8/100.** Mean of the five quality dims (78+74+80+76+76 = 384 / 5 = 76.8); aligns with the repo's ~76.5 ranking.

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://www.longcatai.org/
  - https://baike.baidu.com/item/LongCat-2.5/69582445
  - https://blog.csdn.net/gitblog_00312/article/details/170536829
  - https://post.smzdm.com/p/awwdog6g/
  - https://post.smzdm.com/p/a5rpkdql/
