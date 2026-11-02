# Qwen3.7-Plus — findings by GPT 5.6 Luna

- Source: Alibaba Cloud / Qwen3.7-Plus
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Plus
- **Short description:** Alibaba's proprietary multimodal reasoning, coding, and agent model in the Qwen3.7 family.
- **Provider / access:** Alibaba Cloud Model Studio / Qwen API; hosted gateways may use an Alibaba-prefixed route.
- **Release / knowledge:** Current alias maps to snapshot `qwen3.7-plus-2026-05-26`; knowledge cutoff is not published.
- **IDs:** `qwen3.7-plus` and `qwen3.7-plus-2026-05-26`; compatible gateway ID `alibaba/qwen3.7-plus`.
- **Context window:** 1,000,000 tokens, with tiered pricing above 256K input tokens.
- **Modalities:** Text, image, and video input; text output; function calling, structured output, web search, and visual agent workflows are documented.
- **Pricing (as of 2026-11-02):** International rate card $0.40 input / $1.60 output up to 256K, and $1.20 / $4.80 for 256K–1M requests; cache rates are lower.
- **Architecture:** Proprietary/restricted weights; architecture details are not published in the API documentation.

## Raw benchmarks found

- BenchLM snapshot (2026-10-29): composite **53.79/100**, rank **#83/1004**, with 69 of 724 benchmarks covered; coverage is explicitly partial. ([BenchLM Qwen3.7 Plus](https://benchlm.ai/models/qwen3-7-plus))
- Terminal-Bench 2.0: **70.3%**; QwenClawBench: **61.8%**; τ²-bench: **93.0%**; terminalBenchHard: **47.0%**. ([BenchLM Qwen3.7 Plus](https://benchlm.ai/models/qwen3-7-plus))
- SWE-bench Verified: **77.7%**; SWE-bench Pro: **57.6%**; SWE Multilingual: **75.8%**; SciCode: **51.3%**. ([BenchLM Qwen3.7 Plus](https://benchlm.ai/models/qwen3-7-plus))
- MMMU-Pro: **79.0%**; MathVision: **90.3%**; CharXiv: **85.9%**; ScreenSpot Pro: **79.0%**; MRCRv2: **91.7%**. ([Alibaba launch benchmarks](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206))
- AA-LCR: **73.0%**; AA Agentic Index: **19.7%**; GDPval-AA: **886**. ([BenchLM Qwen3.7 Plus](https://benchlm.ai/models/qwen3-7-plus))

## Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.0 and QwenClawBench show useful agent performance, while the agentic composite and terminalBenchHard are notably lower than frontier results. ([BenchLM Qwen3.7 Plus](https://benchlm.ai/models/qwen3-7-plus))
- **Reasoning: 82/100.** MRCRv2, GPQA, and the multimodal launch suite are strong, but AA-LCR at 73% and low CritPt prevent a top-end score. ([BenchLM Qwen3.7 Plus](https://benchlm.ai/models/qwen3-7-plus))
- **Context window: 96/100.** The documented 1M window is frontier-sized; no independent 512K+ retrieval result was found. ([Alibaba Qwen3.7 Plus documentation](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus))
- **Multimodal: 84/100.** Image/video input and strong MMMU-Pro, MathVision, CharXiv, and ScreenSpot results support broad practical multimodality. ([Alibaba Qwen3.7 Plus documentation](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus), [Alibaba launch benchmarks](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206))
- **Coding: 79/100.** SWE-bench Verified and multilingual coding are strong, but SWE-Pro, SciCode, and Terminal-Bench leave it below the highest coding tier. ([BenchLM Qwen3.7 Plus](https://benchlm.ai/models/qwen3-7-plus))
- **Cost efficiency: 91/100.** The up-to-256K $0.40/$1.60 lane is highly competitive; long-context requests are billed at the materially higher tier. ([Alibaba Qwen3.7 Plus pricing](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-plus))
- **Overall Score: 83.8/100.** Arithmetic mean of Tool use 78, Reasoning 82, Context window 96, Multimodal 84, and Coding 79; cost efficiency is excluded.

## Evidence notes

- Qwen3.7-Plus evidence is kept separate from Qwen3.8 and Qwen3.6. The BenchLM composite is a partial-coverage external index, while this report preserves the exact benchmark names, versions, and sources.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-11-02
- Method: current public web research; normalized interpretations, not official vendor scores.
