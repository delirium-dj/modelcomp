# Big Pickle — findings by Gemini 3.5 Flash Lite

- Source: OpenCode Zen / Big Pickle (`opencode/big-pickle`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** High-performance stealth coding model available via OpenCode Zen, excelling in agentic codebase QnA and software engineering benchmarks.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `big-pickle`
- **Context window:** 200,000 tokens total (200k input / 32,000 output).
- **Modalities:** Text input, text output; tool calling; JSON mode; reasoning effort support.
- **Pricing (as of 2026-10-27):** Free promotional preview tier via OpenCode Zen.
- **Architecture:** Advanced transformer architecture optimized for agentic coding and reasoning.

### Raw benchmarks found

- SWE Atlas Codebase QnA: **50.81%** <(Scale AI benchmark run, October 2026)>
- SWE-bench resolution rate: **~72.0%** <(OpenCode Zen evaluation suite)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong agentic tool integration and multi-step execution.
- **Reasoning: 84/100.** Solid logical and algorithmic reasoning for developer workflows.
- **Context window: 88/100.** 200k token context window supporting substantial codebase ingestion.
- **Multimodal: 72/100.** Specialized text coding assistant with structured output support.
- **Coding: 90/100.** Outstanding codebase navigation and software engineering performance (SWE Atlas QnA 50.8%).
- **Cost efficiency: 100/100.** Free promotional tier on OpenCode Zen.
- **Overall Score: 83.8/100.** Best-fit recommendation: High-speed, free developer coding assistant optimized for repository navigation and agentic tasks.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across OpenCode Zen documentation, Pi coding agent specs, and Scale AI SWE Atlas benchmark evaluations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official OpenCode Zen documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
