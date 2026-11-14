# Gemma 4 E4B — findings by Hy3

- **Source / Date:** 百度百科, CSDN, 53AI, 百度百家号 — 2026-11-14
- **Overview:** Gemma 4 E4B is the edge-device model in Google's Gemma 4 open-source series (released 2026-04-02/03, built on Gemini 3 research). It has ~4.5B effective parameters (8B including embeddings), quantized to ~3.6GB, and is designed for smartphones/edge. It accepts text, image and audio multimodal input, supports 128K context, and is released under Apache 2.0 with minimal commercial restrictions. Native function calling and structured JSON are supported.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Google DeepMind |
| Release date | 2026-04-03 |
| Architecture | ~4.5B effective (8B w/ embeddings); "effective-parameter" design |
| Context window | 128K tokens |
| Modality | Text + image + audio (native audio on E2B/E4B) |
| License | Apache 2.0 (open) |
| Pricing | Open weight / on-device |

## Raw Benchmarks
### Agent / Tool Use
- Native function calling and structured JSON output; positioned as a local agent base model.

### Reasoning
- Multi-step planning and complex logic reasoning advertised; small-model level.

### Coding
- Code generation capability advertised; edge-class, not frontier.

### Long Context
- 128K context window.

## Normalized Scores
- **Tool use: 58/100.** Native function calling; edge-class agent capability.
- **Reasoning: 54/100.** Small edge model; modest general reasoning.
- **Context window: 68/100.** 128K context is good for its size.
- **Multimodal: 82/100.** Genuine text+image+audio input is a standout for an edge model.
- **Coding: 50/100.** Edge-class coding; limited.
- **Cost efficiency: 90/100.** ~3.6GB quantized; runs on smartphones; Apache 2.0 free.
- **Overall Score: 62.4/100.** Mean of the five quality dims (58+54+68+82+50 = 312 / 5 = 62.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Gemma%204/67573534
  - https://baike.baidu.com/item/E4B/67932719
  - https://www.53ai.com/news/OpenSourceLLM/2026040397423.html
