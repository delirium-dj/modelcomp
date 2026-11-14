# GPT-oss-120b — findings by Hy3

- **Source / Date:** 百度百科, OpenAI Help Center, OpenRouter, CSDN — 2026-11-14
- **Overview:** GPT-oss-120b is OpenAI's open-weight model released 2025-08-05 (its first open model since GPT-2 in 2019). It is a MoE Transformer with 117B total / 5.1B active parameters, 128 experts, GQA + sliding-window attention, and a 128K context window. Released under Apache 2.0 (free commercial use), it runs on a single 80GB H100 or high-end laptop via MXFP4 quantization. Performance is near OpenAI's o4-mini and surpasses earlier versions on coding and tool use.

## Model Card
| Field | Value |
| --- | --- |
| Provider | OpenAI |
| Release date | 2025-08-05 |
| Architecture | MoE, 117B total / 5.1B active; 128 experts; GQA + sliding window |
| Context window | 128K tokens |
| Modality | Text |
| License | Apache 2.0 (open weight) |
| Pricing | Open weight / self-host (not on OpenAI API) |

## Raw Benchmarks
### Agent / Tool Use
- Surpasses earlier versions on tool-calling scenarios.

### Reasoning
- Performance near o4-mini on reasoning benchmarks.

### Coding
- Strong coding problem-solving; near o4-mini.

### Long Context
- 128K context window.

## Normalized Scores
- **Tool use: 66/100.** Strong tool-calling; surpasses earlier open models.
- **Reasoning: 64/100.** Near o4-mini level; solid open-weight reasoning.
- **Context window: 68/100.** 128K context is good but not class-leading.
- **Multimodal: 40/100.** Text-only.
- **Coding: 66/100.** Near o4-mini coding; strong for open weight.
- **Cost efficiency: 85/100.** Apache-2.0 open weight, 5.1B active; cheap to self-host.
- **Overall Score: 60.8/100.** Mean of the five quality dims (66+64+68+40+66 = 304 / 5 = 60.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/GPT-oss-120b/66281433
  - https://help.openai.com/zh-hans-cn/articles/11870455-openai-open-weight-models-gpt-oss
  - https://openrouter.ai/openai/gpt-oss-120b
