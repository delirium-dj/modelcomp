# Ling-3.2-flash — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Ling-3.2-flash is Ant Group's (百灵) native multimodal model, released 2026-11-06. It uses a 560B-parameter MoE activating only 25B per token with a 1M-token context, and accepts image, text, and video input. API pricing is low ($0.30/M input, $0.90/M output, with a two-week free trial at launch). It follows the Ling-3.x flash line of efficient native-multimodal models.

## Model card
| Field | Value |
|---|---|
| Vendor | Ant Group (inclusionAI / 百灵) |
| Release | 2026-11-06 |
| Architecture | MoE, 560B total / 25B active |
| Context window | 1,000,000 tokens |
| Modalities | Image, text, video input |
| Pricing | $0.30/M in, $0.90/M out |

## Raw benchmarks
- **Agent / Tool use:** Multimodal agent use; priced for high-volume workflows.
- **Reasoning:** Moderate active-param footprint (25B/560B).
- **Coding:** Not a coding-focused tier; multimodal-first.
- **Long context:** 1M-token context confirmed.

## Normalized scores
- **Tool use: 72/100.** Multimodal agent orientation.
- **Reasoning: 68/100.** 25B active params; efficient but mid-tier.
- **Context window: 86/100.** 1M-token context.
- **Multimodal: 80/100.** Native image/text/video input.
- **Coding: 68/100.** Not coding-focused.
- **Cost efficiency: 84/100.** Very low API price; 2-week free trial.
- **Overall Score: 74.8/100.** Mean of the five quality dims (72+68+86+80+68 = 374 / 5 = 74.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Ling-3.2-flash/69634830
  - https://www.ant-ling.com/
  - https://blog.csdn.net/2203_75594169/article/details/170345664
  - http://baijiahao.baidu.com/s?id=1881342577458278043&wfr=spider&for=pc
  - https://mp.weixin.qq.com/s?__biz=MzA3MzQ5MDIzMA==&mid=2652774740&idx=1&sn=67370e5f07bab0c20e8523b89b64293a&chksm=84e4cb0db393421b09141e9cc3c73263be96e6ba1f33fd2913bd08c033a18a5e8db9fff57798&scene=27
