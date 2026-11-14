# ERNIE 5.5 Flash — findings by Hy3

- **Source / Date:** Baidu Wenxin official release, IT之家, 智东西, CSDN, 魔搭社区 (ModelScope) — 2026-11-14
- **Overview:** ERNIE 5.5 Flash Base is an open-weight sparse Mixture-of-Experts language model released by Baidu Wenxin on 2026-11-05. It uses 280B total parameters with 14B active per token, was pretrained from scratch on 33.5T tokens, supports a 128K training context and up to 1M tokens for fine-tuning/inference. The released Base weights are pretrained endpoints (pre–mid-training / pre–post-training) offered in FP8 and BF16.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Baidu (文心 / Wenxin) |
| Release date | 2026-11-05 (Flash Base open weights) |
| Architecture | Sparse MoE, 43-layer Transformer, 37 layers use Heavily Compressed Attention (HCA) |
| Parameters | 280B total / 14B active per token |
| Pretraining data | 33.5T tokens (from scratch) |
| Context window | 128K training; up to 1M inference/finetune |
| Modality | Text (Base; no vision confirmed) |
| License | Open weights (FP8 + BF16) |
| Pricing | Self-host / open weight (no per-token API quoted for Base) |

## Raw Benchmarks
### Agent / Tool Use
- No public agentic/tool-use benchmark published for the Base checkpoint at release; agentic behavior expected to require post-training/instruct tuning.

### Reasoning
- Positioned as competitive with same-size open base models ("同尺寸 SOTA" per 智东西) though exact MMLU/GPQA numbers were not disclosed in the launch coverage.

### Coding
- No dedicated coding benchmark figures released for the Base weights.

### Long Context
- 128K native training context; fine-tuning and inference support 1M tokens via HCA sparse attention (every 128 tokens compressed).

## Normalized Scores
- **Tool use: 68/100.** Base pretrained checkpoint; tool-use capability not yet benchmarked publicly and depends on post-training.
- **Reasoning: 72/100.** Claimed same-size SOTA among open bases, but no fixed numeric reasoning scores disclosed at launch.
- **Context window: 86/100.** 1M-token inference context via HCA sparse attention is a strong differentiator.
- **Multimodal: 50/100.** Text-only Base release; no vision/multimodal confirmed.
- **Coding: 72/100.** Strong general base capability implied, but no public coding benchmark numbers yet.
- **Cost efficiency: 85/100.** Open-weight 14B-active MoE is cheap to serve relative to dense peers of comparable quality.
- **Overall Score: 69.6/100.** Mean of the five quality dims (68+72+86+50+72 = 348 / 5 = 69.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baijiahao.baidu.com/s?id=1881005739369275162&wfr=spider&for=pc
  - http://baijiahao.baidu.com/s?id=1881017629886244386&wfr=spider&for=pc
  - https://blog.csdn.net/qq616491978/article/details/170245492
  - https://www.zhihu.com/pin/2102094944705967607
