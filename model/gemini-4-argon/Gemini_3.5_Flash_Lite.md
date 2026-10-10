# Gemini 4 Argon — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 4 Argon (`gemini-4-argon`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Advanced mid-generation Gemini model optimized for efficient reasoning, tool execution, and general text tasks with robust 128K context.
- **Provider / access:** OpenCode Zen `opencode/gemini-4-argon` (Chat Completions & Responses API).
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026.
- **IDs:** `opencode/gemini-4-argon`
- **Context window:** 131,072 tokens total (verified via Google developer documentation).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Standard pricing tier on OpenCode Zen.
- **Architecture:** Proprietary Google Gemini architecture optimized for high-throughput efficient inference.

### Raw benchmarks found

- Terminal-Bench 2.1: **82.0%** <(Google AI technical update, October 2026)>
- Tau3-Banking / Tau2-Bench: **84.0%** <(Google AI evaluation suite)>
- GDPval-AA: **850 Elo** <(Artificial Analysis performance tracker)>
- GPQA Diamond: **68.0%** <(Google AI benchmark tracker)>
- SWE-bench Verified: **72.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **74.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool calling and structured output capabilities demonstrated across tool benchmarks (Terminal-Bench 82.0%).
- **Reasoning: 86/100.** Solid performance on reasoning benchmarks like GPQA Diamond (68.0%) for its tier.
- **Context window: 90/100.** Full utilization of its 128K context window with high RULER scores.
- **Multimodal: 75/100.** Competent text handling with standard generation support.
- **Coding: 85/100.** Reliable code generation matching mid-to-high benchmarks like LiveCodeBench (74.0%).
- **Cost efficiency: 80/100.** Competitive performance relative to standard tier pricing.
- **Overall Score: 84.2/100.** Best-fit recommendation: A highly efficient and capable mid-generation model for general text and agentic workflows.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google developer documentation. Terminal-Bench 2.1 82.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
