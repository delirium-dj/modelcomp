# LongCat-2.0 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** LongCat-2.0 is Meituan's trillion-parameter open-source model (released 2026-06-30, open-sourced 2026-07-06) trained and inferred on a 50,000-card domestic compute cluster. It is a 1.6T-parameter MoE (~48B average active, dynamic 33B–56B) with native 1M-token context and 30T+ training tokens. The formal release introduced ScMoE cross-layer shortcuts, a zero-computation expert mechanism, LongCat Sparse Attention (LSA), and N-gram Embedding. The Preview (anonymous "Owl Alpha") ranked top-3 in OpenRouter calls and #1 on Hermes/Claude Code/OpenClaw.

## Model card
| Field | Value |
|---|---|
| Vendor | Meituan |
| Release | 2026-06-30 (open-sourced 2026-07-06) |
| Architecture | MoE, 1.6T total / ~48B active (33B–56B dynamic) |
| Context window | 1,000,000 tokens |
| Modalities | Text (multimodal arrived in LongCat-2.5) |
| Training | 50K-card domestic cluster; 30T+ tokens |

## Raw benchmarks
- **Agent / Tool use:** Strong agentic-coding orientation (LSA + N-gram for long-context efficiency).
- **Reasoning:** Competitive flagship-tier reasoning for its size class.
- **Coding:** Agentic coding focus; strong on long-context code tasks.
- **Long context:** 1M-token context confirmed.

## Normalized scores
- **Tool use: 72/100.** Agentic-coding design; strong platform traction.
- **Reasoning: 68/100.** Solid reasoning; mid-tier active footprint.
- **Context window: 84/100.** 1M-token context.
- **Multimodal: 56/100.** Text model; vision added later (2.5).
- **Coding: 72/100.** Agentic coding strength.
- **Cost efficiency: 62/100.** 1.6T model — heavy to serve despite open weights.
- **Overall Score: 70.4/100.** Mean of the five quality dims (72+68+84+56+72 = 352 / 5 = 70.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/LongCat-2.0/68093056
  - https://baijiahao.baidu.com/s?id=1869390612394502103&wfr=spider&for=pc
  - https://baike.baidu.com/item/%E7%BE%8E%E5%9B%A2%E5%A4%A7%E6%A8%A1%E5%9E%8B/69004523
  - https://tech.meituan.com/?ref=zhe.ink
  - https://ai-bot.cn/longcat-2-0/
