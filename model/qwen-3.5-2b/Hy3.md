# Qwen3.5-2B — findings by Hy3

- **Source / Date:** 百度百科, CSDN, 腾讯云开发者社区, 知乎 — 2026-11-14
- **Overview:** Qwen3.5-2B is the 2B member of Alibaba's Qwen3.5 small-size open-source series (0.8B / 2B / 4B / 9B), open-sourced 2026-03-02. It uses a unified architecture with native multimodal (image-text) capability, a hybrid-attention design (gated increment network + sparse MoE) with early-fusion training, and is optimized for edge devices (mobile, IoT, low-latency real-time interaction). It supports a 260K-token context and think / non-think modes, scoring 84.5 on OCRBench. It runs on an iPhone 17 Pro via MLX and is embedded in AI glasses.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Alibaba (Qwen) |
| Release date | 2026-03-02 |
| Architecture | Hybrid attention (gated increment + sparse MoE), early fusion; 2B params |
| Context window | 260K tokens (26万) |
| Modality | Native multimodal (image-text) |
| License | Apache 2.0 (open) |
| Pricing | Open weight / on-device |

## Raw Benchmarks
### Agent / Tool Use
- Edge-class agentic use; tool use modest for its size.

### Reasoning
- Think/non-think modes; 2B-class reasoning.

### Coding
- Edge-class coding; output sometimes truncated at 512 tokens (per community notes).

### Long Context
- 260K context window — strong for an edge model.

### Multimodal
- Native image-text multimodal; OCRBench 84.5.

## Normalized Scores
- **Tool use: 48/100.** Small edge model; limited tool use.
- **Reasoning: 46/100.** 2B-class; modest reasoning.
- **Context window: 74/100.** 260K context is a strong point for the size.
- **Multimodal: 76/100.** Native image-text multimodal is a genuine edge-model strength.
- **Coding: 44/100.** Edge-class coding; limited.
- **Cost efficiency: 92/100.** 2B Apache-2.0; runs on phones; ultra cheap.
- **Overall Score: 57.6/100.** Mean of the five quality dims (48+46+74+76+44 = 288 / 5 = 57.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Qwen3.5-2B/67439632
  - https://cloud.tencent.com/developer/article/2634020
  - https://www.zhihu.com/question/2009949864205710678/answer/2011914940311687633
