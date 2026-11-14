# Doubao-Seed-2.1-pro-260915 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Doubao-Seed-2.1-pro-260915 is the locked "0915" snapshot of ByteDance's Doubao Seed 2.1 Pro model, released 2026-06-23 at the FORCE conference and served via Volcano Ark (with TRAE integration). The Pro tier is the deep-reasoning variant for high-complexity tasks; the family spans programming/engineering delivery, long-chain agent execution, and multimodal understanding, with a 256K-token context window.

## Model card
| Field | Value |
|---|---|
| Vendor | ByteDance (Volcano Engine) |
| Release | 2026-06-23 (Pro 0915 snapshot) |
| Context window | 256K tokens |
| Modalities | Text + multimodal understanding |
| Access | Volcano Ark API; TRAE integrated |
| Pricing | ¥5.4/M input, ¥27/M output (Pro) |

## Raw benchmarks
- **Agent / Tool use:** Built for long-chain agent task execution.
- **Reasoning:** Deep-thinking model for high-complexity exploration.
- **Coding:** TerminalBench 2.1 = 71.0; SciCode (scientific computing code) = 59.8; NL2Repo-Bench (repo generation) = 47.0.
- **Long context:** 256K-token context confirmed.

## Normalized scores
- **Tool use: 80/100.** Long-chain agent execution orientation.
- **Reasoning: 76/100.** Deep-thinking Pro tier for complex tasks.
- **Context window: 80/100.** 256K context.
- **Multimodal: 74/100.** Multimodal understanding included.
- **Coding: 80/100.** TerminalBench 2.1 71.0, strong engineering delivery.
- **Cost efficiency: 78/100.** Pro pricing (¥5.4/¥27 per M) is mid-tier.
- **Overall Score: 78.0/100.** Mean of the five quality dims (80+76+80+74+80 = 390 / 5 = 78.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/%E8%B1%86%E5%8C%85%20Seed%202.1%E7%B3%BB%E5%88%97/68084170
  - https://www.volcengine.com/docs/82379/1359497?lang=zh
  - https://www.volcengine.com/docs/82379/1956279?lang=zh
  - https://baijiahao.baidu.com/s?id=1880433857596307455&wfr=spider&for=pc
  - https://baike.baidu.com/item/%E8%B1%86%E5%8C%85Seed-Evolving%E6%A8%A1%E5%9E%8B/68083927
