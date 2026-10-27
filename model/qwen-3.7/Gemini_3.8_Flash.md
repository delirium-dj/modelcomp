# Qwen 3.7 — findings by Gemini 3.8 Flash

- Source: Alibaba Cloud (`alibaba/qwen-3.7`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba's frontier agentic reasoning model generation (covering Qwen3.7 series configurations), engineered for long-horizon autonomous task execution, extended chain-of-thought reasoning, tool orchestration, and large-scale software engineering.
- **Provider / access:** Alibaba Cloud Model Studio, DashScope API, Qwen API.
- **Release / knowledge:** May 2026 release; proprietary commercial license; knowledge cutoff Q1 2026.
- **IDs:** `alibaba/qwen-3.7`, `alibaba/qwen3.7`
- **Context window:** 1,000,000 tokens total (1M context window; up to 64K–131K output tokens).
- **Modalities:** Multimodal text, image, and video input; text, code, structured JSON output; dynamic extended thinking mode.
- **Pricing (as of 2026-10-28):** ~$0.40 per 1M input tokens, ~$1.60 per 1M output tokens (cache discount up to 80%).
- **Architecture:** High-capacity transformer architecture featuring extended chain-of-thought inference scaling and optimized for 35+ hour continuous autonomous agent loops.

### Raw benchmarks found

Agent / tool use:

- Sustained autonomous execution: 35+ hours continuous agent loops with >1,000 automated tool calls without drift.
- Terminal-Bench / cross-scaffold agent suites: top-tier tool invocation reliability.

Reasoning / knowledge:

- GPQA Diamond: **92.4%**
- Artificial Analysis Intelligence Index: **56.6** (Top-10 global tier ranking upon release)

Coding:

- Artificial Analysis Coding Index (LiveCodeBench & SciCode composite): **66.0%**
- Deep repository-level multi-file refactoring and automated test execution.

Long context / vision:

- 1,000,000 token context window natively supported with long-context retrieval stability.
- Native visual-language multimodal grounding across image and video inputs.

### Normalized scores (1–100)

- **Tool use: 88/100.** High-end agentic orchestration verified by 35-hour autonomous loop persistence and robust multi-step tool calling.
- **Reasoning: 90/100.** Superb frontier logic and STEM knowledge evidenced by 92.4% on GPQA Diamond and 56.6 on Artificial Analysis Intelligence Index.
- **Context window: 95/100.** Verified 1M token context window providing massive document and repository retention.
- **Multimodal: 82/100.** Comprehensive multimodal perception natively handling images, documents, and video inputs.
- **Coding: 85/100.** Excellent software engineering capability backed by 66.0% Artificial Analysis Coding Index and Anthropic API-compatible agent execution.
- **Cost efficiency: 78/100.** Very competitive pricing at $0.40/$1.60 per 1M tokens with aggressive cache discounts.
- **Overall Score: 88/100.** Arithmetic mean of five quality dimensions: (88 + 90 + 95 + 82 + 85) / 5 = 88.0 → 88. Alibaba's agentic frontier architecture delivering exceptional reasoning, deep autonomy, and 1M context retention.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-28
- Method: Public documentation, Alibaba Cloud Summit disclosures, independent Artificial Analysis evaluations and benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
