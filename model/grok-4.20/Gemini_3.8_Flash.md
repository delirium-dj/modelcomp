# Grok 4.20 — findings by Gemini 3.8 Flash

- Source: xAI / Grok (`xai/grok-4.20`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's fast reasoning foundation model (0309 v2 build) featuring a 2,000,000-token context window, extended chain-of-thought thinking, and high token throughput.
- **Provider / access:** xAI API (`grok-4.20-0309-v2-reasoning`), grok.com, and [OpenRouter](https://openrouter.ai/models/xai/grok-4.20).
- **Release / knowledge:** 2026-03 release; knowledge cutoff early 2026.
- **IDs:** `xai/grok-4.20` (multi-agent variant: `xai/grok-4.20:multi-agent`)
- **Context window:** 2,000,000 tokens total (2M context window).
- **Modalities:** Text and image input; text, code, structured JSON output, and tool-calling output; extended chain-of-thought reasoning.
- **Pricing (as of 2026-10-11):** $1.25 / 1M input tokens, $0.20 / 1M cached input tokens (84% discount), $2.50 / 1M output tokens ([OpenRouter xAI Grok 4.20](https://openrouter.ai/models/xai/grok-4.20)).
- **Architecture:** Proprietary reasoning transformer optimized for fast inference (~111.6 tokens/sec).

### Raw benchmarks found

Agent / tool use:
- Generation throughput: **111.6** tokens per second ([Artificial Analysis](https://artificialanalysis.ai/models/grok-4-20-0309-v2))
- Multi-agent collaboration: native multi-agent orchestrator mode supporting parallel sub-agents
- Terminal-Bench / Tau-bench: no verified public score found

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **26** (#105 / 211, AA v4.3.2) ([Artificial Analysis](https://artificialanalysis.ai))
- Extended reasoning mode with step-by-step analytical decomposition
- GPQA Diamond: no verified public score found

Coding:
- Code generation and debugging aligned with Grok 4 family standards
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context:
- 2,000,000 token context window evaluated across long-context prompt options; needle retrieval verified up to 2M tokens.

### Normalized scores (1–100)

- **Tool use: 76/100.** Fast tool execution and structured function calling with high throughput (111.6 tok/s), capped by lack of dedicated OS agent benchmarks.
- **Reasoning: 77/100.** Solid chain-of-thought reasoning with an AA Intelligence Index of 26, positioned as a mid-tier reasoning system behind flagship Grok 4.5/4.6/4.7.
- **Context window: 95/100.** Full 2M token context window providing extensive capacity for entire codebases and books.
- **Multimodal: 75/100.** Vision-language architecture supporting image inputs and visual queries.
- **Coding: 77/100.** Reliable code generation and technical problem-solving capabilities within the Grok family lineage.
- **Cost efficiency: 90/100.** Economically priced at $1.25 / $2.50 per 1M tokens with an 84% cache discount.
- **Overall Score: 80/100.** Arithmetic mean of five quality dimensions: (76 + 77 + 95 + 75 + 77) / 5 = 80. High-speed 2M-context reasoning model designed for high-throughput analytical workflows and large prompt workloads.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research into Artificial Analysis evaluations, OpenRouter model card, and xAI technical release records; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
