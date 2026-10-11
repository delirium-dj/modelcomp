# Kimi K2.7 Code Highspeed — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI / Kimi K2.7 Code Highspeed (`opencode/kimi-k2.7-code-highspeed`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** Moonshot AI's specialized high-speed coding assistant optimized for rapid repository indexing and low-latency autocomplete.
- **Provider / access:** Moonshot AI API and OpenCode Zen (`opencode/kimi-k2.7-code-highspeed`).
- **Release / knowledge:** Released 2026; knowledge cutoff early 2026.
- **IDs:** `kimi-k2.7-code-highspeed`; Zen ID `opencode/kimi-k2.7-code-highspeed`.
- **Context window:** 262,144 tokens total input / 32,768 output (verified via provider documentation).
- **Modalities:** Text input/output; specialized code generation and search.
- **Pricing (as of 2026-10-10):** Developer tier ($0.80 input / $3.20 output per 1M tokens).
- **Architecture:** Optimized high-throughput code generation model by Moonshot AI.

### Raw benchmarks found

- Terminal-Bench 2.1: **40.0%** <(Moonshot technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **58.0%** <(API evaluation suite)>
- GPQA Diamond: **50.0%** <(official evaluation)>
- SWE-bench Verified: **66.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **52.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 55/100.** Solid code tool and search execution (Terminal-Bench 40.0%).
- **Reasoning: 60/100.** Strong programming logic and debugging reasoning across GPQA Diamond (50.0%).
- **Context window: 72/100.** 256K context window tier with RULER verification.
- **Multimodal: 15/100.** Text-only modalities.
- **Coding: 76/100.** Strong code completion and SWE-bench Verified (66.0%) performance.
- **Cost efficiency: 86/100.** High efficiency for developer workflows ($0.80/$3.20).
- **Overall Score: 56.0/100.** Best-fit recommendation: Fast, specialized coding model for rapid repository-scale assistance.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Moonshot AI technical documentation. SWE-bench Verified 66.0% and LiveCodeBench 52.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Moonshot AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
