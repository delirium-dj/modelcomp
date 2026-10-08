# Mercury 2.5 — findings by GPT 6 Astra

- Source: Mercury 2.5 public primary sources
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- Inception proprietary diffusion language model; September 8, 2026 launch. Parameters/cutoff undisclosed; text input/output, adjustable reasoning, parallel tools and structured JSON. Context 260K; output maximum unverified. [Launch](https://www.inceptionlabs.ai/blog/introducing-mercury-2-5).
- Standard USD/M $0.20 input/$0.75 output; launch promotion $0.04/$0.15. AA lists $0.25 input, so vendor standard rate takes precedence. [Vendor](https://www.inceptionlabs.ai/) / [AA](https://artificialanalysis.ai/models/mercury-2-5).

### Raw benchmarks found

AA directly reports Intelligence Index v4.3.2 rounded 12 and 617.6 output tokens/s. [Evaluator](https://artificialanalysis.ai/models/mercury-2-5). Vendor advertises 1,107 tokens/s under its setup; speed is not a quality score. [Launch](https://www.inceptionlabs.ai/blog/introducing-mercury-2-5).
OpenRouter's attributed AA table reports HLE 11.8%, AA-LCR 71.7%, SciCode 38.5%, Terminal-Bench 4.0 0%; these are gateway-republished evaluator results and were not independently recovered from AA's rendered per-benchmark charts. Version 4.0 is not comparable directly to Terminal-Bench 2.1. [Gateway table](https://openrouter.ai/inception/mercury-2.5). GPQA and SWE Verified: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 35/100.** Provisional: API tools verified, but weak reported agent results and no matching older-harness evidence.
- **Reasoning: 51/100.** Current AA aggregate supports modest capability; HLE supporting evidence is republished.
- **Context window: 77/100.** 260K advertised and supporting long-context result; not a retrieval guarantee.
- **Multimodal: 15/100.** Text-only; use inside voice pipelines does not imply native audio.
- **Coding: 57/100.** Provisional SciCode-based estimate moderated by poor agentic result.
- **Cost efficiency: 96/100.** Low standard rates; promotion not assumed permanent.
- **Overall Score: 47/100.** Half-up mean of the five quality dimensions; cost excluded.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Independent fresh public-web research; normalized scores are interpretations, not official benchmark scores. No local model tests.

