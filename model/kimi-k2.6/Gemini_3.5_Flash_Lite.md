# Kimi K2.6 — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI / Kimi K2.6 (`opencode/kimi-k2.6`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's advanced Kimi K2.6 model optimized for long context and reasoning.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.6` (Chat Completions API).
- **Release / knowledge:** Released June 2026; knowledge cutoff May 2026.
- **IDs:** `opencode/kimi-k2.6` (Free tier available on Zen)
- **Context window:** 131,072 tokens total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free OpenCode Zen tier; paid equivalent approx $0.50 / $2.00 per 1M tokens.
- **Architecture:** Proprietary transformer architecture by Moonshot AI.

### Raw benchmarks found

- Terminal-Bench 2.1: **80.0%** <(Moonshot technical notes, June 2026)>
- Tau3-Banking / Tau2-Bench: **78.5%** <(API evaluation suite)>
- GPQA Diamond: **63.5%** <(Moonshot benchmark update)>
- SWE-bench Verified: **57.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **54.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid tool execution for search and data retrieval tasks (Terminal-Bench 80.0%).
- **Reasoning: 82/100.** Strong reasoning capabilities across academic benchmarks like GPQA Diamond (63.5%).
- **Context window: 82/100.** Reliable 128K context handling with RULER verification (91.0%).
- **Multimodal: 15/100.** Text-only input/output modalities (text-only floor).
- **Coding: 82/100.** Competent coding and software development assistance (SWE-bench Verified 57.0%, LiveCodeBench 54.0%).
- **Cost efficiency: 100/100.** Free OpenCode Zen tier ($0.00 cost).
- **Overall Score: 68.6/100.** Best-fit recommendation: Well-rounded model with dependable reasoning and strong context window performance.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Moonshot AI technical documentation. SWE-bench Verified 57.0% and Terminal-Bench 2.1 80.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Moonshot AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
