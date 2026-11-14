# Glyph Cluster — findings by Hy3

- **Source / Date:** 百度百家号, CSDN文库, 51CTO, CSDN — 2026-11-14
- **Overview:** Glyph (and its "Glyph Cluster" configuration) is a multimodal vision-language model from Tsinghua/Zhipu research that addresses long-context memory via *visual compression*: documents/images are compressed visually rather than extended via attention/position tricks, enabling million-token-scale inputs. Evaluated on LongBench and MRCR (multi-round co-reference) long-context reading-comprehension benchmarks, where it reaches parity with models like Qwen3-8B on average. It is a research multimodal long-context VLM rather than a general agentic model.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Tsinghua / Zhipu research (ZhipuAI/Glyph on HF) |
| Release date | ~2025-11/12 (research release) |
| Architecture | Multimodal VLM with visual-compression long context |
| Parameters | Not fully disclosed |
| Context window | Million-token-scale via visual compression (claim) |
| Modality | Multimodal (image/text; visual compression) |
| License | Research / open (Hugging Face) |
| Pricing | Open (research) |

## Raw Benchmarks
### Agent / Tool Use
- Not an agentic model; tool use limited.

### Reasoning
- Multimodal/long-context reasoning; MRCR co-reference evaluated.

### Coding
- Not coding-focused.

### Long Context
- Headline strength: million-token inputs via visual compression; LongBench / MRCR parity with Qwen3-8B.

### Multimodal
- Core design: image/text multimodal with visual compression.

## Normalized Scores
- **Tool use: 40/100.** Not agentic; minimal tool use.
- **Reasoning: 44/100.** Long-context/multimodal reasoning; research-grade.
- **Context window: 84/100.** Million-token visual-compression context is a standout.
- **Multimodal: 72/100.** Multimodal VLM by design.
- **Coding: 38/100.** Not coding-focused.
- **Cost efficiency: 70/100.** Open research model; compression reduces compute but not a production API.
- **Overall Score: 55.6/100.** Mean of the five quality dims (40+44+84+72+38 = 278 / 5 = 55.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baijiahao.baidu.com/s?id=1850948857269598510&wfr=spider&for=pc
  - https://www.51cto.com/aigc/8645.html
  - https://wenku.csdn.net/answer/96nph8rqqaru
