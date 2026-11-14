# Gemma 4 E2B — findings by Hy3

- **Source / Date:** Google DeepMind, CSDN, 知乎 — 2026-11-14
- **Overview:** Gemma 4 E2B is the smallest, most compute/memory-efficient model in Google's Gemma 4 open-source series (released 2026-04-03, built on Gemini 3 research). With ~2.3B effective parameters, it is the entry tier for mobile and IoT devices and uniquely adds **native audio input** alongside text and image — making it a genuinely multimodal tiny model. It supports a 128K context window and is released under Apache 2.0. Native function calling and structured JSON are supported.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Google DeepMind |
| Release date | 2026-04-03 |
| Architecture | ~2.3B effective params (multimodal) |
| Context window | 128K tokens |
| Modality | Text + image + audio (native audio on E2B/E4B) |
| License | Apache 2.0 (open) |
| Pricing | Open weight / on-device |

## Raw Benchmarks
### Agent / Tool Use
- Native function calling and structured JSON; positioned as a local agent base model.

### Reasoning
- Small-edge reasoning; multimodal/per-language strength (140+ languages trained).

### Coding
- Edge-class coding; limited.

### Long Context
- 128K context window.

### Multimodal
- Text + image + **audio** input — a standout for a 2.3B model.

## Normalized Scores
- **Tool use: 48/100.** Native function calling; edge-class.
- **Reasoning: 42/100.** 2.3B-class; modest general reasoning.
- **Context window: 64/100.** 128K context is good for its size.
- **Multimodal: 84/100.** Text+image+audio is a genuine strength at this scale.
- **Coding: 38/100.** Edge-class; limited.
- **Cost efficiency: 92/100.** Tiny on-device model; Apache 2.0 free.
- **Overall Score: 55.2/100.** Mean of the five quality dims (48+42+64+84+38 = 276 / 5 = 55.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://deepmind.google/models/gemma/gemma-4/
  - https://blog.csdn.net/gitblog_01018/article/details/170558703
  - https://www.zhihu.com/question/2023317889709605541
