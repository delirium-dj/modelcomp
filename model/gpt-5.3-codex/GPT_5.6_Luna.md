# GPT-5.3-Codex — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.3-Codex
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI’s coding-specialized reasoning model for software-engineering agents.
- **Provider / access:** OpenAI Codex and Responses API; model ID `gpt-5.3-codex`. The current documentation marks the model **Deprecated**.
- **Release / knowledge:** 2026 release; default snapshot `gpt-5.3-codex`; knowledge cutoff 2025-08-31.
- **IDs:** `openai/gpt-5.3-codex` / `gpt-5.3-codex`.
- **Context window:** 400,000 tokens; maximum input 272,000 and maximum output 128,000 tokens.
- **Modalities:** Text and image input, text output; reasoning, function calling, web search, hosted shell, skills, streaming, and structured outputs. Responses API is supported; Chat Completions is not.
- **Pricing (as of 2026-11-02):** $1.75 input / $0.175 cached input / $14 output per 1M tokens.
- **Architecture:** Proprietary; parameter count and internal architecture are undisclosed.

### Raw benchmarks found

- BenchLM snapshot (2026-10-29): composite **62.75/100**, rank **#41/1004**, with 19 of 724 benchmarks covered; coverage is explicitly partial. ([BenchLM GPT-5.3 Codex](https://benchlm.ai/models/gpt-5-3-codex))
- Agent rows: Terminal-Bench **2.0 77.3%**; OSWorld-Verified **64.7%**; τ²-bench **86%**; JobBench **33.7%**. The Terminal-Bench number is version 2.0 and is not changed to 2.1.
- Coding rows: SWE-bench Verified **85%**; SWE-bench Pro **56.8%**; SWE-Rebench **58.2%**; Vibe Code Bench **61.77%**; LiveCodeBench **87.3%**; SWE-bench (Vals) **78.0%**. ([BenchLM GPT-5.3 Codex](https://benchlm.ai/models/gpt-5-3-codex))
- Reasoning/knowledge rows: AA-LCR **83.3%**; GPQA Diamond **91.5%**; HLE **42.5%**; CritPt **16.9%**. Multimodal rows include AA-MMMU-Pro **78.5%**.

### Normalized scores (1–100)

- **Tool use: 84/100.** τ²-bench, OSWorld, and Terminal-Bench 2.0 support useful agents, but the model is deprecated and exact tool results vary by benchmark version.
- **Reasoning: 86/100.** GPQA and HLE are strong, with good LCR evidence; the model’s coding specialization and partial general coverage limit the ceiling.
- **Context window: 84/100.** A 400K window is substantial, but below the 1M tier and paired with a 272K maximum input limit.
- **Multimodal: 78/100.** Image input and AA-MMMU-Pro 78.5% are verified; output is text and no audio/video capability is documented.
- **Coding: 91/100.** SWE-bench Verified 85%, LiveCodeBench 87.3%, and strong tool-execution positioning support a high coding score, while SWE-bench Pro is lower.
- **Cost efficiency: 70/100.** $1.75/$14 pricing is expensive on output compared with current low-cost reasoning models, and deprecated status adds lifecycle risk.
- **Overall Score: 84.6/100.** Mean of the five quality dimensions `(84 + 86 + 84 + 78 + 91) / 5 = 84.6`; best fit is existing Codex software-engineering workflows that can tolerate a deprecated model.

## Evidence notes

- OpenAI’s current model page is authoritative for API status, limits, modalities, and price. BenchLM rows are treated as partial external evidence; no GPT-5.4, GPT-5.5, or newer Codex result is substituted.

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current OpenAI documentation, the GPT-5.3-Codex system-card benchmark rows, and BenchLM’s October 29 profile; benchmark versions and lifecycle status were retained, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5.3-Codex model documentation](https://developers.openai.com/api/docs/models/gpt-5.3-codex)
  - [GPT-5.3-Codex system card](https://cdn.openai.com/pdf/23eca107-a9b1-4d2c-b156-7deb4fbc697c/GPT-5-3-Codex-System-Card-02.pdf)
  - [BenchLM GPT-5.3 Codex profile](https://benchlm.ai/models/gpt-5-3-codex)
