# Claude Opus 4.8 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 4.8 (`claude-opus-4.8`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship 4.8 reasoning model featuring advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking with a 200K-token context window.
- **Provider / access:** Anthropic API / OpenCode Zen `anthropic/claude-opus-4.8` (Messages API & Chat Completions).
- **Release / knowledge:** Released April 2026; knowledge cutoff April 2026.
- **IDs:** `anthropic/claude-opus-4.8`
- **Context window:** 200,000 tokens total (verified via Anthropic documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Paid enterprise tier ($15.00 input / $75.00 output per 1M tokens).
- **Architecture:** Proprietary Anthropic Opus architecture with advanced thinking mode.

### Raw benchmarks found

- Terminal-Bench 2.1: **90.0%** <(Anthropic technical report, April 2026)>
- Tau3-Banking / Tau2-Bench: **92.0%** <(Anthropic evaluation suite)>
- GPQA Diamond: **83.0%** <(Anthropic system card & benchmark updates)>
- SWE-bench Verified: **87.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **89.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 91/100.** Exceptional agentic tool utilization and multi-step execution (Terminal-Bench 90.0%).
- **Reasoning: 90/100.** Top-tier reasoning performance across complex benchmarks like GPQA Diamond (83.0%).
- **Context window: 92/100.** Highly reliable 200K context window processing with RULER verification.
- **Multimodal: 90/100.** Advanced multimodal text and image understanding.
- **Coding: 89/100.** Outstanding coding benchmarks on SWE-bench Verified (87.0%) and LiveCodeBench (89.0%).
- **Cost efficiency: 45/100.** Premium paid enterprise pricing tier ($15/$75).
- **Overall Score: 90.4/100.** Best-fit recommendation: A premier flagship model for complex enterprise workloads, advanced reasoning, and professional software engineering.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
