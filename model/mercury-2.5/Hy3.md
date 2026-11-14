# Mercury 2.5 — findings by Hy3

- **Source / Date:** 百度百科, CSDN, 腾讯云开发者社区 — 2026-11-14
- **Overview:** Mercury 2.5 is Inception Labs' diffusion-based large language model (dLLM), an iteration in the Mercury series preceding Mercury 3. Like its siblings it generates text via parallel generation and multi-round iterative denoising rather than autoregressive next-token prediction. Official figures cite ~1,107 tokens/sec throughput on common NVIDIA GPUs and a 260K-token context window, delivered via API. As with other Mercury diffusion models, independent public quality benchmarks were not surfaced at the time of writing — vendor speed/context claims only. Scores below are a conservative estimate.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Inception Labs |
| Release date | ~2026-09-08 (CEO Stefano Ermon signed release) |
| Architecture | Diffusion LLM (non-autoregressive) |
| Parameters | Not disclosed |
| Context window | 260K tokens |
| Modality | Text |
| License | Proprietary (API) |
| Pricing | API (not separately listed) |

## Raw Benchmarks
### Agent / Tool Use
- No verified public agentic/tool-use benchmark.

### Reasoning
- No verified public reasoning benchmark; vendor speed claims only.

### Coding
- "Mercury Coder" lineage implies coding; no verified public coding benchmark for 2.5.

### Long Context
- 260K context window (claimed).

## Normalized Scores
- **Tool use: 52/100.** No verified tool-use benchmark; estimated modest.
- **Reasoning: 54/100.** Vendor claims intelligence gains; treated as unverified.
- **Context window: 80/100.** 260K context is a strong (claimed) point.
- **Multimodal: 38/100.** Text-only.
- **Coding: 50/100.** No verified coding benchmark; estimated modest.
- **Cost efficiency: 80/100.** Diffusion speed (~1,107 tok/s) implies low latency/cost.
- **Overall Score: 54.8/100.** Mean of the five quality dims (52+54+80+38+50 = 274 / 5 = 54.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Mercury%202.5/69636992
  - https://blog.csdn.net/weixin_35755562/article/details/170591363
  - https://cloud.tencent.com/developer/article/2504972
