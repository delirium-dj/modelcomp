# Ternary-Bonsai-2-27B — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Ternary-Bonsai-2-27B is PrismML's ternary (-1/0/+1) quantization of Qwen3.8-27B, released 2026-09-17/18. It compresses the base model to ~5.9GB (≈1.75 bits/weight, ~9× smaller) while reportedly retaining 98.2% of full-precision intelligence on six aggregated benchmarks. It runs locally on consumer GPUs (e.g., 12GB "sweet-spot" cards) with a 262K context. Independent teardowns note SWE-bench-style long agentic coding drops ~25% versus the full-precision original, and that some tasks need the official harness.

## Model card
| Field | Value |
|---|---|
| Vendor | PrismML (based on Qwen3.8-27B) |
| Release | 2026-09-17/18 |
| Method | Ternary quantization (~1.75 bit/weight) |
| Size | ~5.9GB (GGUF: Q5_K_M / Q4_K_S / Q2_0) |
| Context window | 262K tokens |
| Modalities | Text (no multimodal) |

## Raw benchmarks
- **Agent / Tool use:** Local agent use possible; long agentic coding regresses ~25% vs base.
- **Reasoning:** Retains 98.2% of base six-benchmark aggregate; math subscore intact.
- **Coding:** Competent for size but long-horizon agentic coding degrades vs full precision.
- **Long context:** 262K context confirmed in deployment guides.

## Normalized scores
- **Tool use: 80/100.** Runs locally as an agent; harness-dependent for some tasks.
- **Reasoning: 76/100.** 98.2% of base intelligence retained.
- **Context window: 82/100.** 262K context at tiny footprint.
- **Multimodal: 64/100.** Text-only; quantization of a text model.
- **Coding: 80/100.** Strong for 5.9GB; long-agentic regresses.
- **Cost efficiency: 90/100.** ~5.9GB, runs on consumer GPUs; effectively free.
- **Overall Score: 76.4/100.** Mean of the five quality dims (80+76+82+64+80 = 382 / 5 = 76.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://post.m.smzdm.com/p/aqrm26px/
  - https://blog.csdn.net/weixin_29054195/article/details/170230754
  - https://post.m.smzdm.com/p/a70nkg3d/
  - https://www.bilibili.com/tr/video/BV1Zj4c6eEEh/
  - https://blog.csdn.net/gitblog_00800/article/details/143912588
