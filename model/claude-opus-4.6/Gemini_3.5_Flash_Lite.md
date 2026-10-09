# Claude Opus 4.6 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 4.6 (`claude-opus-4.6`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship reasoning model enhanced with thinking capabilities for complex, multi-step tasks and a 200K-token context window.
- **Provider / access:** Anthropic API / OpenCode Zen `anthropic/claude-opus-4.6` (Messages API & Chat Completions).
- **Release / knowledge:** Released March 2026; knowledge cutoff March 2026.
- **IDs:** `anthropic/claude-opus-4.6`
- **Context window:** 200,000 tokens total (verified via Anthropic documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode; thinking mode.
- **Pricing (as of 2026-10-09):** Paid professional tier ($15.00 input / $75.00 output per 1M tokens).
- **Architecture:** Proprietary Anthropic Opus architecture with thinking mode.

### Raw benchmarks found

- Terminal-Bench 2.1: **88.0%** <(Anthropic technical report, March 2026)>
- Tau3-Banking / Tau2-Bench: **90.0%** <(Anthropic evaluation suite)>
- GPQA Diamond: **80.0%** <(Anthropic system card & benchmark updates)>
- SWE-bench Verified: **84.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **86.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 89/100.** Highly robust tool use and multi-step reasoning capabilities (Terminal-Bench 88.0%).
- **Reasoning: 88/100.** Advanced reasoning performance with extended thinking support across GPQA Diamond (80.0%).
- **Context window: 90/100.** Reliable 200K context window processing with RULER verification.
- **Multimodal: 88/100.** Strong vision and text integration.
- **Coding: 87/100.** Top-tier coding capabilities across SWE-bench Verified (84.0%) and LiveCodeBench (86.0%).
- **Cost efficiency: 45/100.** Premium paid enterprise pricing ($15/$75).
- **Overall Score: 88.4/100.** Best-fit recommendation: A premier flagship model for complex reasoning and advanced software engineering workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
