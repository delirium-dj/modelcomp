# Fledge Alpha — findings by Gemini 3.8 Flash

- Source: OpenCode Zen (`opencode/fledge-alpha-free`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha
- **Short description:** Anonymous free preview model on OpenCode Zen linked to Thinking Machines Lab's Inkling MoE and Tinker infrastructure, operating as an adaptive router across frontier backends with 1M context.
- **Provider / access:** OpenCode Zen (`opencode/fledge-alpha-free`). Free preview tier with OpenAI-compatible endpoint.
- **Release / knowledge:** 2026-10-01 release; late-2026 knowledge cutoff.
- **IDs:** `opencode/fledge-alpha`, `opencode/fledge-alpha-free`.
- **Context window:** 1,048,576 tokens input (1M context); 131,072 maximum output tokens.
- **Modalities:** Text and image input; text and code output; tool calling enabled; 3 reasoning effort tiers (Low, High, Max).
- **Pricing (as of 2026-10-11):** Free ($0.00 / 1M prompt and completion tokens) during active OpenCode Zen preview.
- **Architecture:** Unannounced multi-model routing system linked to Thinking Machines Lab's Inkling (~975B MoE) family and Tinker API backend.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau2-Bench: no verified public score found
- Tool calling / Agent execution: Native function calling and OpenCode CLI terminal tool integration supported.

Reasoning / knowledge:

- StealthMark Spatial/Reasoning: **74.0/100** at max reasoning effort (Stealth Models benchmark evaluation)
- GPQA Diamond: no verified public score found
- Humanity's Last Exam (HLE): no verified public score found
- Reasoning Effort: 3 configurable tiers (Low, High, Max) dynamically adjusting backend thinking traces.

Coding:

- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- OpenCode CLI agent usage: High volume first-pass code generation, refactoring, and debug assistance.

Long context:

- 1,048,576 tokens total context with 131,072 max output capability documented on OpenCode Zen.

### Normalized scores (1–100)

- **Tool use: 60/100.** Supports function calling and agent CLI execution, though backend routing variability can cause inconsistency in complex multi-step loops.
- **Reasoning: 74/100.** Multi-tier reasoning traces (up to Max effort) deliver solid analytical performance, corroborated by 74.0/100 on StealthMark evaluations.
- **Context window: 90/100.** Massive 1,048,576 token context with 131,072 token generation limit handles large-scale codebase ingestion.
- **Multimodal: 65/100.** Native text and image input support allows visual artifact and screenshot inspection; text-only output.
- **Coding: 63/100.** Competent developer-oriented code generation and refactoring inside coding agents, though lacking formal SWE-bench verification.
- **Cost efficiency: 98/100.** Completely free $0/$0 tier on OpenCode Zen provides unmatched cost-to-performance utility during its preview run.
- **Overall Score: 70/100.** Versatile, cost-free preview model and agent backend suited for rapid experimentation and sub-agent workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Multi-source web research into OpenCode Zen platform metadata, Thinking Machines Lab / Inkling routing analyses, and StealthMark evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
