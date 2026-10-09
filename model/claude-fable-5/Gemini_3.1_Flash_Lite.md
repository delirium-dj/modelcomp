# Claude Fable 5 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic / Claude Fable 5 (`claude-fable-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's high-performance reasoning model optimized for ambitious coding, deep research, and professional agentic workflows with a 1M-token context window.
- **Provider / access:** Anthropic API / OpenCode Zen `anthropic/claude-fable-5` (Messages API & Chat Completions).
- **Release / knowledge:** Released June 2026; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 max output; verified via Anthropic developer documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode; reasoning effort configuration.
- **Pricing (as of 2026-10-09):** Paid $5.00 input / $25.00 output per 1M tokens.
- **Architecture:** Proprietary advanced dense/MoE hybrid reasoning architecture by Anthropic.

### Raw benchmarks found

- Terminal-Bench 2.1: **75.0%** <(Anthropic technical update, June 2026)>
- Tau3-Banking / Tau2-Bench: **81.0%** <(Anthropic evaluation suite)>
- GDPval-AA: **1640 Elo** <(Artificial Analysis performance tracker)>
- GPQA Diamond: **79.0%** <(Anthropic system card & benchmark updates)>
- SWE-bench Verified: **75.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **78.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Highly capable agentic tool orchestration and multi-step execution (Terminal-Bench 75.0%).
- **Reasoning: 93/100.** Strong performance for multi-step reasoning and complex problem solving (GPQA Diamond 79.0%).
- **Context window: 95/100.** Reliable 1M-token context window with high recall and stability.
- **Multimodal: 92/100.** Good vision and multimodal support for professional workflows.
- **Coding: 94/100.** Very capable in software engineering and development tasks (SWE-bench Verified 75.0%).
- **Cost efficiency: 70/100.** High-performance tier with substantial cost effectiveness ($5/$25).
- **Overall Score: 93.6/100.** Best-fit recommendation: A robust and capable model for complex, ambitious professional tasks and long-context analysis.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
