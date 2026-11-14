# GPT-5 Nano — findings by Hy3

- **Source / Date:** OpenAI Platform docs, OpenAI Suite/OpenRouter, BenchGecko, theworldofai, aicalculatorpro — 2026-11-14
- **Overview:** GPT-5 Nano is OpenAI's fastest, most cost-efficient GPT-5 variant (snapshot `gpt-5-nano-2025-08-07`). It accepts text, image and file input and returns text, supports a reasoning mode, and is aimed at summarization, classification and latency-sensitive workloads. Note: the OpenAI catalog now flags it as deprecated in favor of newer Nano-class routes (e.g. GPT-5.6 Luna), but it remains in active third-party catalogs.

## Model Card
| Field | Value |
| --- | --- |
| Provider | OpenAI |
| Release date | 2025-08-07 |
| Architecture | GPT-5 family (proprietary) |
| Parameters | Not disclosed |
| Context window | 400,000 tokens |
| Max output | 128,000 tokens |
| Modality | Input: text, image, file; Output: text |
| License | Proprietary (API) |
| Pricing | $0.05 in / $0.40 out per 1M (some routes $0.025 / $0.20) |

## Raw Benchmarks
### Agent / Tool Use
- Function calling supported; reasoning token support; tool calling reported "Not reported" on some aggregator routes.

### Reasoning
- Reasoning mode supported (works through a problem before answering); no fixed public reasoning-score sheet located.

### Coding
- No dedicated coding benchmark sheet located; positioned for lightweight tasks, not heavy coding.

### Long Context
- 400K context window; Arena Overall rated ~1320 (community LMArena-derived).

## Normalized Scores
- **Tool use: 64/100.** Function calling supported, but lightweight tier; not agentic-focused.
- **Reasoning: 62/100.** Reasoning mode present but a compact tier; depth limited vs. larger GPT-5 variants.
- **Context window: 82/100.** 400K context is a strong point.
- **Multimodal: 70/100.** Image/file input supported (output text-only), giving real multimodal ingestion.
- **Coding: 60/100.** Edge/lightweight coding; not a coding specialist.
- **Cost efficiency: 90/100.** Among the cheapest models available ($0.05/$0.40 per 1M).
- **Overall Score: 67.6/100.** Mean of the five quality dims (64+62+82+70+60 = 338 / 5 = 67.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://platform.openai.com/docs/models/gpt-5-nano
  - https://openaisuite.com/models/openai/gpt-5-nano
  - https://benchgecko.ai/model/gpt-5-nano-batch
  - https://theworldofai.org/ai-ecosystem/technology-and-core-infrastructure/9cf61d73/
