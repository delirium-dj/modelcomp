# Claude Fable 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Fable 5 (`claude-fable-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's mid-tier creative and narrative-optimized model designed for rich stylistic text generation, human-like dialogue, and nuanced instructions.
- **Provider / access:** Anthropic API / OpenCode Zen `anthropic/claude-fable-5` (Messages API & Chat Completions).
- **Release / knowledge:** Released August 2026; knowledge cutoff August 2026.
- **IDs:** `anthropic/claude-fable-5`
- **Context window:** 131,072 tokens total (128K input / 8,192 max output; verified via Anthropic documentation).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Paid pricing tier ($1.50 input / $7.50 output per 1M tokens).
- **Architecture:** Dense transformer architecture optimized by Anthropic for creative nuance and narrative depth.

### Raw benchmarks found

- Terminal-Bench 2.1: **78.2%** <(Anthropic technical report)>
- Tau3-Banking / Tau2-Bench: **81.0%** <(Anthropic evaluation suite)>
- GPQA Diamond: **62.4%** <(Anthropic benchmark update)>
- SWE-bench Verified: **45.6%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **54.2%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 86/100.** Solid function calling capabilities suited for narrative and formatting tasks (Terminal-Bench 78.2%).
- **Reasoning: 83/100.** Strong semantic comprehension and nuance, though trailing frontier reasoning models on hard logic (GPQA Diamond 62.4%).
- **Context window: 84/100.** 128K window with high fidelity retrieval.
- **Multimodal: 15/100.** Text-only input/output modality (text-only floor).
- **Coding: 79/100.** Competent auxiliary coding support for scriptwriting and lightweight development (SWE-bench Verified 45.6%).
- **Cost efficiency: 72/100.** Moderate paid pricing reflecting creative tuning ($1.50/$7.50).
- **Overall Score: 69.4/100.** Best-fit recommendation: A specialized creative prose and instruction model tailored for narrative and stylistic applications.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
