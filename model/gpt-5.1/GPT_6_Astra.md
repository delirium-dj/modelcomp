# GPT-5.1 — findings by GPT 6 Astra

- Source: OpenAI / `gpt-5.1`
- Date: 2026-10-04 (UTC)
- Methodology: [model comparison](../../model-comparison.md)
- Cross-model log: [findings](../../model-findings.md)

## Model card

This report covers the general GPT-5.1 API model, not GPT-5.1-Codex or ChatGPT's separate chat alias. The proprietary model's dated snapshot is `gpt-5.1-2025-11-13`; parameters are undisclosed. The API lists **400,000 context tokens**, **128,000 maximum output tokens**, and a **September 30, 2024** knowledge cutoff. It accepts text/images, generates text, and supports function calling and structured outputs. Reasoning effort supports none (default), low, medium, and high. [Official model card](https://developers.openai.com/api/docs/models/gpt-5.1).

Standard rates per million tokens are **$1.25 input, $0.125 cached input, and $10 output**. Audio/video are unsupported. [API specifications and prices](https://developers.openai.com/api/docs/models/gpt-5.1).

GPT-5.1 was deprecated October 1, 2026, with API shutdown scheduled **April 1, 2027**. [Official deprecation notice](https://developers.openai.com/api/docs/deprecations).

### Raw benchmarks found

Agent / tool use:

- High effort: **Tau2-bench Airline 67.0%**, **Telecom 95.6%**, **Retail 77.9%**. Telecom used an additional generally helpful prompt.

Reasoning / knowledge:

- High effort: **GPQA Diamond 88.1%**, **AIME 2025 94.0%**, both without tools; **FrontierMath 26.7%** with Python.
- Exact-model HLE and ARC-AGI: no verified public score found in the sources used here.

Coding:

- **SWE-bench Verified 76.3%**, high effort, all 500 problems, JSON apply_patch harness.
- Exact-model Terminal-Bench 2.1 and LiveCodeBench: no verified public score found.

Long context / multimodal:

- **BrowseComp Long Context at 128K 90.0%**; **MMMU 85.4%**. The former is not open-web BrowseComp or a maximum-context retrieval guarantee; MMMU is not MMMU-Pro.
- MRCR/RULER at full 400K capacity: no verified public score found.

All benchmark figures above come from the [official developer launch appendix](https://openai.com/index/gpt-5-1-for-developers/). High-effort results do not describe default non-reasoning behavior.

### Normalized scores (1–100)

- **Tool use: 77/100.** Strong customer-service tool performance with meaningful variation across domains.
- **Reasoning: 82/100.** Strong academic reasoning, below later frontier capability and without broad newer-suite evidence.
- **Context window: 82/100.** 400K capacity and a strong 128K task result; full-window retrieval remains unverified.
- **Multimodal: 70/100.** Image understanding and text generation, supported by MMMU evidence.
- **Coding: 79/100.** Solid repository issue resolution; no later terminal benchmark is substituted.
- **Cost efficiency: 75/100.** Moderate $1.25/$10 rates with substantial cached-input savings.
- **Overall Score: 78/100.** Half-up mean: (77 + 82 + 82 + 70 + 79)/5 = 78; cost excluded. Useful for existing general coding and tool workflows during the deprecation period.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent public-web research; normalized scores are interpretations, not official vendor scores.
