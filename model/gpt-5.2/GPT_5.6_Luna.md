# GPT-5.2 — findings by GPT 5.6 Luna

- Source: OpenAI / GPT-5.2
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's previous flagship model for complex professional work, with configurable reasoning effort.
- **Provider / access:** OpenAI API; model ID `gpt-5.2`.
- **Release / knowledge:** Default snapshot `gpt-5.2-2025-12-11`; knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.2` (OpenAI API) and `openai/gpt-5.2` on compatible gateways.
- **Context window:** 400,000 tokens; maximum output 128,000 tokens.
- **Modalities:** Text and image input, text output; reasoning and tool workflows are supported.
- **Pricing (as of 2026-11-02):** $1.75 input / $0.175 cached input / $14 output per 1M tokens.
- **Architecture:** Proprietary; parameterization is undisclosed.

## Raw benchmarks found

- BenchLM snapshot (2026-10-29): composite **59.41/100**, rank **#55/1004**, with 45 of 724 benchmarks covered; coverage is explicitly partial. ([BenchLM GPT-5.2](https://benchlm.ai/models/gpt-5-2))
- BrowseComp: **65.8%**; OSWorld-Verified: **47.3%**; τ²-bench: **84.8%**. ([BenchLM GPT-5.2](https://benchlm.ai/models/gpt-5-2))
- SWE-bench Verified: **80.0%**; SWE-bench Pro: **55.6%**; Vibe Code Bench: **53.50%**. ([BenchLM GPT-5.2](https://benchlm.ai/models/gpt-5-2))
- ARC-AGI-2: **52.9%**; AA-LCR: **82.7%**; AA-GPQA Diamond: **90.3%**; AA-HLE: **37.7%**; AIME 2025: **100%**. ([BenchLM GPT-5.2](https://benchlm.ai/models/gpt-5-2))
- MMMU: **86.7%** and Design Arena Website: **1193** are listed as multimodal/grounded evidence. ([BenchLM GPT-5.2](https://benchlm.ai/models/gpt-5-2))

## Normalized scores (1–100)

- **Tool use: 80/100.** τ²-bench is strong, while BrowseComp and OSWorld-Verified are useful but not frontier-leading agent results. ([BenchLM GPT-5.2](https://benchlm.ai/models/gpt-5-2))
- **Reasoning: 87/100.** GPQA, ARC-AGI, AA-LCR, HLE, and AIME results show strong reasoning, with partial benchmark coverage and mixed long-context/critique metrics limiting the ceiling. ([BenchLM GPT-5.2](https://benchlm.ai/models/gpt-5-2))
- **Context window: 84/100.** A 400K window is substantial but below the 1M tier used by current frontier models. ([OpenAI GPT-5.2 documentation](https://developers.openai.com/api/docs/models/gpt-5.2))
- **Multimodal: 83/100.** Image input is official and MMMU is 86.7%, but the documented output is text and broader modalities are not claimed. ([OpenAI GPT-5.2 documentation](https://developers.openai.com/api/docs/models/gpt-5.2), [BenchLM GPT-5.2](https://benchlm.ai/models/gpt-5-2))
- **Coding: 82/100.** SWE-bench Verified at 80% is strong, but SWE-bench Pro and Vibe Code Bench are materially lower than a clean frontier coding profile. ([BenchLM GPT-5.2](https://benchlm.ai/models/gpt-5-2))
- **Cost efficiency: 65/100.** The $1.75/$14 price is reasonable on input but expensive on output compared with current low-cost reasoning models. ([OpenAI GPT-5.2 documentation](https://developers.openai.com/api/docs/models/gpt-5.2))
- **Overall Score: 83.2/100.** Arithmetic mean of Tool use 80, Reasoning 87, Context window 84, Multimodal 83, and Coding 82; cost efficiency is excluded.

## Evidence notes

- BenchLM's composite is reported as a current external reference, not substituted for this file's five-dimension normalized score. Benchmark rows use the published effort, harness, and version labels.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-11-02
- Method: current public web research; normalized interpretations, not official vendor scores.
