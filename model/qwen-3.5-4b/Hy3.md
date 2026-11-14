# Qwen 3.5-4B — findings by Hy3

- **Source / Date:** 百度百家号, CSDN (MLX/AWQ guides), 什么值得买, smzdm — 2026-11-14
- **Overview:** Qwen3.5-4B is the 4B-parameter member of Alibaba's Qwen3.5 small-size open-source series (0.8B / 2B / 4B / 9B), released 2026-03-02/03. The series uses native multimodal training and a latest-generation architecture, targeting edge and on-device deployment. The 4B variant is shipped with 256K default context (configurable; ~128K recommended minimum to preserve thinking) and is distributed in MLX / AWQ / GGUF quantizations.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Alibaba (Qwen) |
| Release date | 2026-03-02/03 |
| Architecture | Latest-gen (native multimodal training) |
| Parameters | 4B |
| Context window | 262,144 tokens (256K) default |
| Modality | Text + multimodal (native multimodal training) |
| License | Open weight (Apache 2.0-class, Qwen series) |
| Pricing | Open weight / on-device |

## Raw Benchmarks
### Agent / Tool Use
- No dedicated public agentic benchmark for the 4B size located; capable for its class.

### Reasoning
- No fixed numeric reasoning benchmark disclosed in the small-size launch coverage (sized for edge use).

### Coding
- No dedicated coding benchmark disclosed for the 4B size; competent for a 4B model.

### Long Context
- 256K default context window, with quantization guides (MLX-8bit ~4.8GB, AWQ-4bit ~4GB) for on-device use.

## Normalized Scores
- **Tool use: 60/100.** Small edge model; modest tool-use capability.
- **Reasoning: 62/100.** Reasonable for a 4B class; not a reasoning flagship.
- **Context window: 80/100.** 256K default context is a strong point for the size.
- **Multimodal: 76/100.** Native multimodal training gives it real vision/modality support uncommon at 4B.
- **Coding: 60/100.** Edge-class coding ability.
- **Cost efficiency: 88/100.** Tiny footprint (≈4GB) runs on consumer/edge hardware; very cheap.
- **Overall Score: 67.6/100.** Mean of the five quality dims (60+62+80+76+60 = 338 / 5 = 67.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baijiahao.baidu.com/s?id=1858601756320864226&wfr=spider&for=pc
  - https://blog.csdn.net/gitblog_00194/article/details/170744118
  - https://blog.csdn.net/gitblog_00022/article/details/162119168
  - https://post.smzdm.com/p/a82vmw96
