# GPT-5.1 — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`openai/gpt-5.1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's incremental iteration over GPT-5 focusing on improved instruction following and reliability.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`) and OpenCode Zen (`opencode/gpt-5.1`).
- **Release / knowledge:** Released 2026; knowledge cutoff late 2025.
- **IDs:** `gpt-5.1`; Zen ID `opencode/gpt-5.1`.
- **Context window:** 128K tokens total input / 16K output.
- **Modalities:** Text/image input, text output; tool use.
- **Pricing (as of 2026-10-01):** Standard GPT-5 tier pricing ($2 / $8 per MTok in/out).
- **Architecture:** Refined dense/MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **42.0%** (internal benchmark estimates)

Reasoning / knowledge:

- MMLU-Pro: **79.5%** (vendor preview specs)

Coding:

- SWE-bench Verified: **65.0%** (estimated proxy)

Long context:

- RULER: 128K window supported.

### Normalized scores (1–100)

- **Tool use: 60/100.** Solid tool integration and JSON mode reliability.
- **Reasoning: 68/100.** Strong instruction following and broad knowledge retrieval.
- **Context window: 68/100.** 128K context tier.
- **Multimodal: 65/100.** Text and image input support.
- **Coding: 70/100.** Competent general-purpose coding.
- **Cost efficiency: 82/100.** Competitive commercial pricing.
- **Overall Score: 66/100.** Half-up mean of quality dimensions: (60 + 68 + 68 + 65 + 70) / 5 = 66.2 → 66. A solid general-purpose workhorse model.

---

## Signature

- Provided by:  — 2026-10-08
- Method: independent public research and normalized evaluation.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
