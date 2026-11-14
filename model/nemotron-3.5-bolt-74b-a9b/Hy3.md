# Nemotron 3.5 Bolt 74B A9B — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Nemotron 3.5 Bolt 74B-A9B is NVIDIA's locally-deployable agent model, released 2026-10-15. It is a 74B-parameter MoE activating ~9B per token, compressed via 2-bit quantization-aware training to run in 24GB VRAM (e.g., RTX Spark / DGX Spark). A Mamba-2 hybrid LatentMoE architecture plus speculative decoding (LiLiCorr) gives it strong speed for its size. It is a vision-language model accepting text, image, and video, with a 256K context, and ranked #1 among same-class open models on PinchBench. Weights, training data, and recipe are open.

## Model card
| Field | Value |
|---|---|
| Vendor | NVIDIA |
| Release | 2026-10-15 |
| Architecture | Mamba-2 hybrid LatentMoE, 74B total / 9B active |
| Footprint | 24GB VRAM (2-bit quant) |
| Context window | 256K tokens |
| Modalities | Text, image, video input |

## Raw benchmarks
- **Agent / Tool use:** Local-agent optimized; PinchBench #1 in class.
- **Reasoning:** Mamba-MoE hybrid; efficient reasoning at low activation.
- **Coding:** Capable for local agent coding.
- **Long context:** 256K context confirmed.

## Normalized scores
- **Tool use: 74/100.** Local-agent design; PinchBench class leader.
- **Reasoning: 70/100.** Efficient hybrid reasoning; mid absolute tier.
- **Context window: 80/100.** 256K context.
- **Multimodal: 76/100.** Text/image/video VLM.
- **Coding: 70/100.** Local agent coding; not coding-specialized.
- **Cost efficiency: 88/100.** 24GB local; free open weights.
- **Overall Score: 74.0/100.** Mean of the five quality dims (74+70+80+76+70 = 370 / 5 = 74.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://blog.csdn.net/gitblog_00963/article/details/162195391
  - https://baike.baidu.com/item/Nemotron%203.5%20Bolt/69447821
  - https://blog.csdn.net/gitblog_00983/article/details/168448612
  - https://baijiahao.baidu.com/s?id=1879157862911741865&wfr=spider&for=pc
  - https://www.bilibili.com/tr/video/BV1wXWN61EAh/
