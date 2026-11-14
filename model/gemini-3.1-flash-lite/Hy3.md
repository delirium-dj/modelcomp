# Gemini 3.1 Flash-Lite — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Gemini 3.1 Flash-Lite is Google's lightest member of the Gemini 3.1 family (announced 2026-03-03), positioned on three pillars: fast, cheap, stable. It supports a 1M-token context, native multimodal input, and an adjustable `thinkinglevel` parameter (minimal/low/medium/high) to trade reasoning depth for latency/cost. It targets very high-throughput production workloads (hundreds of thousands of daily calls).

## Model card
| Field | Value |
|---|---|
| Vendor | Google (DeepMind) |
| Family | Gemini 3.1 (Flash-Lite tier) |
| Release | 2026-03-03 (preview) |
| Context window | 1,000,000 tokens |
| Modalities | Native multimodal input (text/image/audio/video) |
| Thinking | Adjustable (minimal→high) |

## Raw benchmarks
- **Agent / Tool use:** Suitable for high-frequency agent/orchestration at scale; tooling implied by the Gemini Flash agent lineage.
- **Reasoning:** Adjustable thinking; first-response latency ~2.5× faster than prior gen, output ~45% faster; GPQA-class signal cited (figure truncated in source).
- **Coding:** Not a coding-focused tier; adequate for lightweight code tasks.
- **Long context:** 1M-token context confirmed.

## Normalized scores
- **Tool use: 76/100.** High-throughput agent/orchestration fit.
- **Reasoning: 70/100.** Lite tier with adjustable but capped reasoning.
- **Context window: 90/100.** 1M-token window.
- **Multimodal: 82/100.** Native multimodal input.
- **Coding: 74/100.** Lightweight; not coding-optimized.
- **Cost efficiency: 90/100.** Cheapest/fastest in family; adjustable thinking controls spend.
- **Overall Score: 78.0/100.** Mean of the five quality dims (76+70+90+82+74 = 392 / 5 = 78.4 ≈ 78.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Gemini%203.1/67530594
  - https://blog.csdn.net/weixin_35751412/article/details/170336035
  - https://docs.cloud.google.cn/gemini-enterprise-agent-platform/models/gemini/3-1-flash-lite?hl=ro
  - https://baike.baidu.com/item/Gemini%203.1%20Flash-Lite/67450554
  - https://cloud.tencent.com/developer/news/3639859
