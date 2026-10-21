# Ling 3.0 Flash — findings by Gemini 3.8 Flash

- Source: opencode/ling-3.0-flash
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's (Ant Group) open-weights reasoning MoE (124B total / 5.1B active) for coding agents, complex reasoning, and high-speed tool use with dynamic thinking mode under MIT license.
- **Provider / access:** InclusionAI API, [OpenRouter](https://openrouter.ai/models/inclusionai/ling-3.0-flash) (`inclusionai/ling-3.0-flash`), Hugging Face.
- **Release / knowledge:** Mid 2026 release; knowledge cutoff 2026.
- **IDs:** `opencode/ling-3.0-flash`, `inclusionai/ling-3.0-flash`, `ling-3.0-flash`
- **Context window:** 262,144 tokens total (256K context window).
- **Modalities:** Text in / text out only; switchable reasoning (thinking) mode.
- **Pricing (as of 2026-10-21):** $0.075 / 1M input tokens, $0.22 / 1M output tokens (80% prompt cache discount); MIT open weights.
- **Architecture:** 124B total / 5.1B active MoE with hybrid fast/deep reasoning engine.

### Raw benchmarks found

> "Model card" rows are InclusionAI self-reported; Vals AI / Artificial Analysis rows are independent.

Reasoning / knowledge:

- GPQA Diamond: **85.0%** self / 85.5% (AA); HLE: 22.7% self / 23.7% (AA)
- AIME 2026: **93.2%**; HMMT Feb 2026: 87.0%; IMO-AnswerBench: 83.7%
- MMLU-Pro: 82.01%; CritPt: 1.7; AA Intelligence Index: **20.1** (AA v4.3.2)

Coding / agent:

- SWE-bench Pro: **56.6%** self; SWE-bench Multilingual: 72.4% self; SWE-bench Verified: **65.2%** (Vals)
- Terminal-Bench 2.1: 57.0% self / **50.19%** (Vals); LiveCodeBench v5: 82.8% self / **83.99%** (Vals)
- SciCode: 41.2% self / 42.0% (AA); BFCL-v4: 73.0%; MCP-Atlas: 65.5%; skillsBench: 44.8% self / 27.95% (Vals)
- GDPval-AA: 1,107 self; BrowseComp: 72.2%; DRACO: 70.4%; IFBench: 74.5%

Long context:

- 262K window; AA-LCR: 73.0%.

### Normalized scores (1–100)

- **Tool use: 68/100.** Normalized assessment of autonomous tool execution and function calling (73.0 BFCL-v4, 65.5 MCP-Atlas).
- **Reasoning: 68/100.** Normalized assessment of complex multi-step reasoning and deductive analysis (85.5% GPQA Diamond, 93.2% AIME).
- **Context window: 78/100.** Effective retrieval fidelity across context capacity (262,144 tokens).
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, audio, or video processing.
- **Coding: 72/100.** Verified software engineering and code generation capability (65.2% SWE-bench Verified, 83.99% LiveCodeBench).
- **Cost efficiency: 97/100.** Exceptional value proposition relative to performance and pricing structure ($0.075 / $0.22).
- **Overall Score: 60/100.** Arithmetic mean of non-cost metrics: (68 + 68 + 78 + 15 + 72) / 5 = 60.2 → 60. Highly cost-effective open-weights reasoning MoE for developer pipelines and autonomous agents.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of InclusionAI technical reports, Vals AI independent tests, and Artificial Analysis leaderboards.
