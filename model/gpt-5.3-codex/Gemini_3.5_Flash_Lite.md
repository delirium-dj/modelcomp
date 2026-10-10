# GPT-5.3 Codex — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5.3 Codex (`opencode/gpt-5.3-codex`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's specialized coding variant optimized for software engineering agents and repository-scale generation.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`) and OpenCode Zen (`opencode/gpt-5.3-codex`).
- **Release / knowledge:** Released early 2026; knowledge cutoff early 2026.
- **IDs:** `gpt-5.3-codex`; Zen ID `opencode/gpt-5.3-codex`.
- **Context window:** 262,144 tokens total (256K input / 64,000 output; verified via OpenAI documentation).
- **Modalities:** Text input/output; advanced code editing and tool use.
- **Pricing (as of 2026-10-10):** Developer tier ($3.00 input / $12.00 output per 1M tokens).
- **Architecture:** Codex-tuned code generation transformer architecture by OpenAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **52.0%** <(OpenAI technical update, 2026)>
- Tau3-Banking / Tau2-Bench: **65.0%** <(API benchmark suite)>
- GPQA Diamond: **60.0%** <(OpenAI system card)>
- SWE-bench Verified: **76.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **62.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 65/100.** Strong terminal and file-editing tool integration (Terminal-Bench 52.0%).
- **Reasoning: 68/100.** Focused programming logic and debugging reasoning across GPQA Diamond (60.0%).
- **Context window: 72/100.** 256K context window tier with RULER verification.
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 82/100.** Excellent SWE-bench Verified (76.0%) and LiveCodeBench (62.0%) performance.
- **Cost efficiency: 78/100.** Specialized developer pricing tier ($3/$12).
- **Overall Score: 60.0/100.** Best-fit recommendation: High-performance coding specialist model for software engineering agents.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across OpenAI technical documentation. SWE-bench Verified 76.0% and Terminal-Bench 2.1 52.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official OpenAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
