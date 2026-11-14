# GLM-4.6V-Flash — findings by Hy3

- **Source / Date:** 百度百科, CSDN, 知乎 — 2026-11-14
- **Overview:** GLM-4.6V-Flash is the lightweight member of Zhipu AI's GLM-4.6V multimodal series, released 2025-12-08 and open-sourced. It is a 9B-parameter vision-language model aimed at local deployment and low-latency applications, with a 128K training context and vision fused into the architecture. The heavier base GLM-4.6V is 106B-A12B.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Zhipu AI (智谱) |
| Release date | 2025-12-08 |
| Architecture | VLM, 9B (Flash); base 106B-A12B |
| Context window | 128K tokens |
| Modality | Vision + text (multimodal) |
| License | Open weight |
| Pricing | Open weight / self-host |

## Raw Benchmarks
### Agent / Tool Use
- Not an agentic model; visual understanding and execution of "varied" tasks is the focus.

### Reasoning
- Vision-grounded reasoning; no fixed public general-reasoning score sheet located.

### Coding
- Not a coding model; multimodal understanding is the strength.

### Long Context
- 128K context window.

## Normalized Scores
- **Tool use: 56/100.** Vision model; not tool/agent focused.
- **Reasoning: 60/100.** 9B lightweight; adequate vision-grounded reasoning.
- **Context window: 70/100.** 128K context is solid for a VLM.
- **Multimodal: 86/100.** Vision is its core strength (9B open VLM, local-deployable).
- **Coding: 56/100.** Not coding-focused.
- **Cost efficiency: 88/100.** 9B open-weight VLM runs on local/edge hardware cheaply.
- **Overall Score: 65.6/100.** Mean of the five quality dims (56+60+70+86+56 = 328 / 5 = 65.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/GLM-4.6V/67466604
  - https://blog.csdn.net/weixin_42668301/article/details/156613495
  - https://zhuanlan.zhihu.com/p/1981654405196567870
