# Ling 3.0 Tiny — findings by Gemini 3.8 Flash

- Source: opencode/ling-3.0-tiny
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** InclusionAI's (Ant Group) open-weights reasoning MoE (7.9B total / 1.3B active) for edge deployment and fast agent tasks with 262K context under MIT license.
- **Provider / access:** InclusionAI API, [OpenRouter](https://openrouter.ai/models/inclusionai/ling-3.0-tiny) (`inclusionai/ling-3.0-tiny`), Hugging Face.
- **Release / knowledge:** Mid 2026 release; knowledge cutoff 2026.
- **IDs:** `opencode/ling-3.0-tiny`, `inclusionai/ling-3.0-tiny`, `ling-3.0-tiny`
- **Context window:** 262,144 tokens total (256K context window).
- **Modalities:** Text in / text out only; fast reasoning mode.
- **Pricing (as of 2026-10-21):** Free on OpenRouter community routes ($0.00 / 1M tokens); hosted API ~$0.01 / 1M tokens; MIT open weights for free self-hosting.
- **Architecture:** 7.9B total / 1.3B active Mixture-of-Experts transformer.

### Raw benchmarks found

> Artificial Analysis rows are independent; "model card" rows are self-reported.

- AA Intelligence Index: **11.1** (AA v4.3.2)
- AA-GPQA Diamond: **73.4%**; AA-HLE: 9.3%; AA-LCR: 60.3%; AA-SciCode: 24.2%; CritPt: 0.0
- GDPval-AA normalized: 3.2; AA Agentic Index: 16
- Output speed: >160 tok/s (self-reported, DGX Spark); 55.9–105 tok/s across third-party hosts

Long context:

- 262K context window; AA-LCR: 60.3%.

### Normalized scores (1–100)

- **Tool use: 50/100.** Normalized assessment of autonomous tool execution and function calling (16 AA Agentic Index).
- **Reasoning: 58/100.** Normalized assessment of complex multi-step reasoning and deductive analysis (73.4% GPQA Diamond).
- **Context window: 70/100.** Effective retrieval fidelity across context capacity (262,144 tokens).
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, audio, or video processing.
- **Coding: 50/100.** Verified software engineering and code generation capability (24.2 AA SciCode).
- **Cost efficiency: 100/100.** Outstanding value proposition relative to performance, open-weights availability, and free community endpoints.
- **Overall Score: 49/100.** Arithmetic mean of non-cost metrics: (50 + 58 + 70 + 15 + 50) / 5 = 48.6 → 49. Ultra-lightweight open-weights edge MoE delivering impressive reasoning density for 1.3B active parameters.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of InclusionAI technical reports, OpenRouter endpoints, and Artificial Analysis leaderboards.
