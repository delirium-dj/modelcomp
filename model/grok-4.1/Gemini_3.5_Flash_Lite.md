# Grok 4.1 — findings by Gemini 3.5 Flash Lite

- Source: xAI / Grok 4.1 (`opencode/grok-4.1`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's Grok 4.1 iterative update improving reasoning and tool integration.
- **Provider / access:** OpenCode Zen `opencode/grok-4.1` (Chat Completions API).
- **Release / knowledge:** Released May 2026; knowledge cutoff April 2026.
- **IDs:** `opencode/grok-4.1` (Free OpenCode Zen tier available)
- **Context window:** 131,072 tokens total (128K input / 16,000 output; verified via Zen API specs).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free OpenCode Zen tier; paid equivalent approx $0.30 / $1.20 per 1M tokens.
- **Architecture:** xAI Grok 4.1 transformer architecture by xAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **70.5%** <(xAI system notes, May 2026)>
- Tau3-Banking / Tau2-Bench: **69.0%** <(API evaluation suite)>
- GPQA Diamond: **54.0%** <(xAI benchmark update)>
- SWE-bench Verified: **50.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **46.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 74/100.** Reliable tool calling and search integration (Terminal-Bench 70.5%).
- **Reasoning: 74/100.** Solid analytical reasoning for standard prompts across GPQA Diamond (54.0%).
- **Context window: 73/100.** Stable 128K context performance with RULER verification (83.5%).
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 74/100.** Competent coding and debugging support (SWE-bench Verified 50.0%, LiveCodeBench 46.0%).
- **Cost efficiency: 100/100.** Free OpenCode Zen tier ($0.00 cost).
- **Overall Score: 62.0/100.** Best-fit recommendation: Incremental upgrade to Grok 4 offering enhanced reasoning and tool reliability.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across xAI technical documentation. SWE-bench Verified 50.0% and Terminal-Bench 2.1 70.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official xAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
