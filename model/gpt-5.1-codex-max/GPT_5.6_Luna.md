# GPT-5.1 Codex Max — findings by GPT 5.6 Luna

- Source: OpenAI (`openai/gpt-5.1-codex-max`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI's coding-optimized reasoning model for repository edits, reviews, and agentic software work.
- **Provider / access:** OpenAI Responses-compatible provider routes; Models.dev lists OpenAI, OpenCode, OpenRouter, Azure, and other providers. Exact API surface can vary by provider.
- **Release / knowledge:** Models.dev lists release `2025-11-13` and a `2024-09` knowledge cutoff.
- **IDs:** `openai/gpt-5.1-codex-max`; direct OpenAI/Azure model ID `gpt-5.1-codex-max`.
- **Context window:** 400,000 tokens canonical; provider-specific records range from 256K to 400K. Maximum output is 128,000 tokens.
- **Modalities:** Text in and text out, reasoning, tool calls, and structured output where supported. No verified image/audio/video input for the exact Codex Max route.
- **Pricing (as of 2026-10-23):** Models.dev lists common provider pricing at $1.25 input / $10.00 output per 1M tokens. Some providers differ; cached pricing was not verified.
- **Architecture:** Proprietary OpenAI Codex reasoning model.

### Raw benchmarks found

> Exact-model results are sparse. The BenchLM page identifies the benchmark source for each value and explicitly reports no aggregate public score.

Agent / tool use:

- tau2-bench: **83%** (BenchLM, sourced from Artificial Analysis model benchmarks)
- No verified public Terminal-Bench or MCP score was found for this exact model.

Reasoning / knowledge:

- AA-GPQA Diamond: **86.0%** (BenchLM, sourced from Artificial Analysis)
- AA-HLE: **25.7%** (BenchLM, sourced from Artificial Analysis)
- AA-LCR: **69.3%** (BenchLM, sourced from Artificial Analysis)
- CritPt: **5.7%** (BenchLM, sourced from Artificial Analysis)
- Artificial Analysis Intelligence Index: **23.7%** (BenchLM, sourced from Artificial Analysis)
- AA Omniscience accuracy / hallucination rate: **39.9% / 77.2%** (BenchLM, sourced from Artificial Analysis)

Coding:

- LiveCodeBench (Vals): **83.6%** (BenchLM, sourced from Vals AI)
- Vibe Code Bench v1.1: **22.17%** (BenchLM, sourced from Vals AI)
- No verified public SWE-bench score was found for this exact Codex Max entry.

Long context:

- AA-LCR: **69.3%** (BenchLM, sourced from Artificial Analysis)
- Models.dev reports a 400K context window and 128K output limit.

Multimodal:

- No verified public multimodal benchmark found. Models.dev does not list image capability for the exact Codex Max entry.

### Normalized scores (1–100)

- **Tool use: 86/100.** tau2-bench at 83% supports strong tool execution; the absence of a verified exact Terminal-Bench or MCP result caps the score.
- **Reasoning: 83/100.** GPQA Diamond at 86.0% is strong, but HLE 25.7%, CritPt 5.7%, and the low omniscience index indicate uneven frontier reasoning.
- **Context window: 84/100.** The 400K window and 69.3% AA-LCR are useful for repository work; measured long-context evidence is limited and provider limits vary.
- **Multimodal: 15/100.** No verified image, audio, or video input capability was found for this exact coding model.
- **Coding: 88/100.** LiveCodeBench at 83.6% supports strong code generation; Vibe Code Bench at 22.17% and absent exact SWE-bench evidence cap the score.
- **Cost efficiency: 82/100.** $1.25/$10.00 per 1M tokens is reasonable for a specialized coding model, but output pricing is relatively high.
- **Overall Score: 71.2/100.** Best suited to text-only repository coding and review where tool use matters more than multimodal input or broad general knowledge.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: Independent checks of OpenAI's current model documentation, Models.dev's exact provider record, BenchLM's exact model page, Vals AI source links, and exact-name web search. Scores are normalized interpretations, not official vendor scores.
