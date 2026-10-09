# Claude Opus 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 5 (`claude-opus-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus 5-generation model designed for deep reasoning, long autonomous coding sessions, and complex research tasks with a 1M-token context window.
- **Provider / access:** Anthropic API `anthropic/claude-opus-5` (Messages API).
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026.
- **IDs:** `anthropic/claude-opus-5`
- **Context window:** 1,048,576 tokens total (1M input / 128,000 output; verified via Anthropic documentation).
- **Modalities:** Text input, image input, PDF ingestion; text output; native reasoning; tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Paid $5.00 input / $25.00 output per 1M tokens.
- **Architecture:** Proprietary advanced multi-modal Transformer with deep reasoning architecture by Anthropic.

### Raw benchmarks found

- Terminal-Bench 2.1: **77.0%** <(Anthropic technical report update, October 2026)>
- Tau3-Banking / Tau2-Bench: **83.0%** <(Anthropic evaluation suite)>
- GDPval-AA: **1660 Elo** <(Artificial Analysis performance tracker)>
- GPQA Diamond: **80.5%** <(Anthropic system card & benchmark updates)>
- SWE-bench Verified: **78.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **80.1%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 91/100.** Top-tier agentic execution and tool orchestration (Terminal-Bench 77.0%).
- **Reasoning: 93/100.** Frontier reasoning across all major benchmarks including GPQA Diamond (80.5%).
- **Context window: 95/100.** True 1M-token context window with high recall and stability.
- **Multimodal: 84/100.** Strong document and image understanding.
- **Coding: 92/100.** Exceptional software engineering and coding performance (SWE-bench Verified 78.0%).
- **Cost efficiency: 40/100.** Premium paid tier reflecting flagship frontier capabilities.
- **Overall Score: 91.0/100.** Best-fit recommendation: The premier flagship reasoning and agent model for complex long-horizon coding tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
