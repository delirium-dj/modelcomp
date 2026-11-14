# Llama 3.2 Vision Instruct — findings by Hy3

- **Source / Date:** aiwiki.ai, BenchLeader, atlas.village.dev, sophon.at, benched.ai — 2026-11-14
- **Overview:** Llama 3.2 Vision Instruct is Meta's open-weight multimodal model family (released 2024-09-24/25), available in 11B and 90B Vision-Instruct variants built on a Llama 3.1 text backbone with a separately trained image encoder and cross-attention adapter. It accepts text + images and outputs text for visual recognition, image reasoning, captioning, document understanding and assistant chat. The 11B fits ~20GB in bf16 (under 10GB at 4-bit); the 90B is the highest-quality member. Context window is 128K.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Meta |
| Release date | 2024-09-24/25 |
| Architecture | Llama 3.1 text backbone + vision encoder + cross-attention adapter |
| Parameters | 11B or 90B (Vision-Instruct) |
| Context window | 128K tokens |
| Modality | Text + image input; text output |
| License | Llama 3.2 Community License (open weight) |
| Pricing | Open weight / API (~$0.35–0.72 per 1M blended) |

## Raw Benchmarks
### Agent / Tool Use
- Not an agentic model; tool use limited.

### Reasoning
- General reasoning modest for a 2024-era vision model; text backbone preserved.

### Coding
- Not coding-focused; limited coding capability.

### Long Context
- 128K context window.

### Multimodal (documented)
- 11B Instruct: MMMU 50.7, ChartQA 83.4, DocVQA 88.4, AI2D 91.1, MathVista 51.5, VQAv2 75.2
- 90B Instruct: MMMU 60.3, DocVQA 90.1, AI2D 92.3, MMLU 86.0 (CoT)
- BenchLeader overall index 35.6 (lower half); weakest in multimodal (16) per that aggregator — but vision-specific benchmarks above are strong.

## Normalized Scores
- **Tool use: 44/100.** Not agentic; minimal tool use.
- **Reasoning: 54/100.** 2024-era general reasoning; modest.
- **Context window: 72/100.** 128K context is solid.
- **Multimodal: 84/100.** Vision is its core strength (DocVQA 88–90, AI2D 91–92).
- **Coding: 44/100.** Not coding-focused.
- **Cost efficiency: 80/100.** Open weight, cheap to self-host; low API price.
- **Overall Score: 59.6/100.** Mean of the five quality dims (44+54+72+84+44 = 298 / 5 = 59.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://aiwiki.ai/wiki/llama_3_2_vision
  - https://www.benchleader.com/models/llama-3-2-11b-vision
  - https://benched.ai/models/llama-3-2-instruct-90b-vision
