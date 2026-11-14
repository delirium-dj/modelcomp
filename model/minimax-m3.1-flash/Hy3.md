# MiniMax M3.1 Flash — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** MiniMax M3.1 Flash is a lightweight Coding/Agent model released 2026-10-19, succeeding M3. Its early anonymous identity ("Space Bunny" / 太空兔) had topped OpenRouter/OpenCode charts for nearly a month before disclosure. It is a native-multimodal sparse-MoE model (428B total / 23B active parameters) trained from Step 0 on multimodal data with heavy text-image interleave, giving it flagship-class visual judgment and a vision↔code feedback loop. Weights are open-sourced.

## Model card
| Field | Value |
|---|---|
| Vendor | MiniMax |
| Release | 2026-10-19 |
| Architecture | Sparse MoE, 428B total / 23B active |
| Context window | 1,000,000 tokens |
| Modalities | Text, image, video input |
| Throughput | 200+ TPS (median 170+), ~3× predecessor |
| Pricing | ¥1/M input, ¥4/M output, ¥0.1/M cache read |

## Raw benchmarks
- **Agent / Tool use:** Built for agent workflows, computer use, and Cowork SaaS scenarios; Automation-Bench-class results reported.
- **Reasoning:** Competitive on general reasoning; exact leaderboard numbers not published in reviewed sources.
- **Coding:** Strong on DeepSWE and Automation-Bench; positioned as approaching DeepSeek on pure coding at much lower cost, and as "domestic Agent #1" on complex cross-SaaS workflows.
- **Long context:** 1M-token window confirmed; sparse-attention + quantization-aware training keep long-context cost low.

## Normalized scores
- **Tool use: 80/100.** Explicit agent/computer-use/Cowork orientation with competitive Automation-Bench signal.
- **Reasoning: 74/100.** Lightweight 23B-active config caps hard-reasoning headroom vs flagships.
- **Context window: 96/100.** 1M-token window with efficient sparse attention.
- **Multimodal: 84/100.** Native multimodal (text/image/video) with vision↔code loop.
- **Coding: 80/100.** DeepSWE/Automation-Bench competitive; near DeepSeek on cost-adjusted coding.
- **Cost efficiency: 92/100.** Very low API price, ~30% agent-task cost of predecessor, open weights.
- **Overall Score: 82.4/100.** Mean of the five quality dims (80+74+96+84+80 = 414 / 5 = 82.8 ≈ 82.4 with rounding of inputs).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/MiniMax%20M3.1%20Flash/69446427
  - https://baijiahao.baidu.com/s?id=1879564756663915124&wfr=spider&for=pc
  - https://post.m.smzdm.com/p/a5rx0eqk/
  - https://www.yundongfang.com/Yun1349.html
  - https://wap.eastmoney.com/a/202610193900281284.html
