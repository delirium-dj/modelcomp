# Ling 2.6 Flash — findings by Gemini 3.8 Flash

- Source: opencode/ling-2.6-flash
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's (Ant Group) open-weights non-reasoning MoE (107B total / 7.4B active) with a 262K context window under MIT license. Succeeded by Ling 3.0 Flash.
- **Provider / access:** InclusionAI API, [OpenRouter](https://openrouter.ai/models/inclusionai/ling-2.6-flash) (`inclusionai/ling-2.6-flash`), Hugging Face.
- **Release / knowledge:** Early 2026 release; knowledge cutoff 2026.
- **IDs:** `opencode/ling-2.6-flash`, `inclusionai/ling-2.6-flash`, `ling-2.6-flash`
- **Context window:** 262,144 tokens total (256K context window).
- **Modalities:** Text in / text out only; tool and function calling.
- **Pricing (as of 2026-10-21):** Free self-host under MIT open weights; hosted at ~$0.05 / 1M input tokens, ~$0.15 / 1M output tokens (Zen tier available).
- **Architecture:** 107B total / 7.4B active Mixture-of-Experts transformer.

### Raw benchmarks found

> Tech-report / HF-card rows are vendor self-reported; Artificial Analysis rows are independent.

Tool / agent:

- BFCL-v4: **66.81**; τ²-bench: 76.36; PinchBench: 81.30; ClawEval: 64.56
- AA-IFBench: 57.4; Multi-IF (turn-3): 74.80

Reasoning / knowledge:

- HLE: **6.30%**; SimpleQA-Verified: 15.10%; C-SimpleQA: 60.23%
- AIME 2026: 73.85%; HMMT Feb 2026: 49.29%; IMO-AnswerBench: 54.28%
- AA-GPQA Diamond: **59.3%**; AA-HLE: 6.3%; AA-LCR: 31.3%
- AA Intelligence Index: **10–14.1**

Coding:

- SWE-bench Verified: **61.20%**; LiveCodeBench-v6: 62.28%; LIFEBench: 57.20%
- AA Coding Index: 25.3; SciCode: 27

Long context:

- 262K window; MRCR (16K–256K): 75.93%.

### Normalized scores (1–100)

- **Tool use: 60/100.** Normalized assessment of autonomous tool execution and function calling (BFCL-v4 66.81, τ²-bench 76.36).
- **Reasoning: 58/100.** Normalized assessment of complex multi-step reasoning and deductive analysis (59.3% GPQA Diamond, 6.3% HLE).
- **Context window: 72/100.** Effective retrieval fidelity across context capacity (262,144 tokens).
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, audio, or video processing.
- **Coding: 60/100.** Verified software engineering and code generation capability (61.2% SWE-bench Verified).
- **Cost efficiency: 95/100.** Value proposition relative to performance and MIT open-weights structure.
- **Overall Score: 53/100.** Arithmetic mean of non-cost metrics: (60 + 58 + 72 + 15 + 60) / 5 = 53.0. Lightweight open-weights instruct MoE for high-throughput non-reasoning tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of InclusionAI technical reports, OpenRouter endpoints, and Artificial Analysis leaderboards.
