# Gemma 4 12B Unified — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Gemma 4 12B Unified is Google DeepMind's open-weight (Apache 2.0) multimodal model released 2026-06, optimized for consumer hardware. It is the first Gemma 4 size to support native audio input and uses an encoder-free unified architecture where text, image, audio, and video raw data feed the same Transformer backbone — lowering latency and memory. It runs on a laptop with as little as 16GB VRAM, delivers ~26B-class performance at under half the memory, and supports a 256K-token context and 140+ languages. Deployable via Ollama and LM Studio.

## Model card
| Field | Value |
|---|---|
| Vendor | Google DeepMind |
| Release | 2026-06 |
| License | Apache 2.0 (open weights) |
| Parameters | 12B (unified multimodal) |
| Context window | 256K tokens |
| Modalities | Text, image, audio, video (native audio input) |
| Deployment | Local; ≥16GB VRAM; Ollama/LM Studio |

## Raw benchmarks
- **Agent / Tool use:** Local/edge-oriented; not agent-tuned, but runs autonomous local workflows.
- **Reasoning:** ~26B-class quality at 12B; mid-tier reasoning.
- **Coding:** Capable for its size but not coding-optimized.
- **Long context:** 256K-token context confirmed; multi-token-prediction draft lowers latency.

## Normalized scores
- **Tool use: 76/100.** Local/edge focus; usable for agentic local tasks but not specialized.
- **Reasoning: 74/100.** 12B mid-tier; strong for size class.
- **Context window: 84/100.** 256K context.
- **Multimodal: 88/100.** Unified text/image/audio/video with native audio input.
- **Coding: 74/100.** Competent at 12B; not coding-focused.
- **Cost efficiency: 90/100.** Free open weights; runs locally on consumer GPUs.
- **Overall Score: 79.2/100.** Mean of the five quality dims (76+74+84+88+74 = 396 / 5 = 79.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Gemma412B/67927335
  - https://cloud.tencent.com/developer/article/2687115
  - https://zhuanlan.zhihu.com/p/2046170399780746378
  - https://my.oschina.net/u/9205117/blog/19699144
  - https://www.bilibili.com/video/BV1rj7f67Euc/
