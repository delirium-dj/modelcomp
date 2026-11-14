# Qwen3.5-9B — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Qwen3.5-9B is Alibaba's open-source multimodal small model, part of the Qwen3.5 small-size series (0.8B/2B/4B/9B) released 2026-03-02. It uses native multimodal training and a compact footprint suited to server-side or on-device deployment (local deployments report 32K–128K context windows). Its long-context capability is notable for its size: AA-LCR 63.0 and LongBench v2 55.2, leading comparable small models.

## Model card
| Field | Value |
|---|---|
| Vendor | Alibaba Tongyi Lab |
| Release | 2026-03-02 |
| Series | Qwen3.5 small (0.8B–9B) |
| Modalities | Native multimodal (text + image) |
| Context window | 32K–128K (deployment-dependent) |
| Deployment | Server / edge / on-device |

## Raw benchmarks
- **Agent / Tool use:** Suitable for lightweight agent/automation via OpenClaw-style stacks.
- **Reasoning:** Long-context reasoning strong for its size (AA-LCR 63.0).
- **Coding:** Capable small-model coding; not flagship.
- **Long context:** LongBench v2 55.2; 128K context in local deployments.

## Normalized scores
- **Tool use: 72/100.** Lightweight agent/automation fit.
- **Reasoning: 72/100.** Strong long-context reasoning for size.
- **Context window: 78/100.** Up to 128K in local deployment.
- **Multimodal: 76/100.** Native multimodal training.
- **Coding: 72/100.** Capable small-model coding.
- **Cost efficiency: 88/100.** Small, open weights; runs on modest hardware.
- **Overall Score: 74.0/100.** Mean of the five quality dims (72+72+78+76+72 = 370 / 5 = 74.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Qwen3.5-9B/67439614
  - https://blog.csdn.net/weixin_33660045/article/details/159807730
  - https://blog.csdn.net/weixin_31419153/article/details/159899672
  - https://zhuanlan.zhihu.com/p/2011947365544781498
  - https://devpress.csdn.net/xclaw/69c62a220a2f6a37c59afb49.html
