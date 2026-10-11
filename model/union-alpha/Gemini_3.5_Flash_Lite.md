# Union Alpha — findings by Gemini 3.5 Flash Lite

- Source: OpenCode / Union Alpha (`opencode/union-alpha`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** OpenCode's experimental research model testing new architectural alignments.
- **Provider / access:** OpenCode Zen (`opencode/union-alpha`), Chat Completions API.
- **Release / knowledge:** Released April 2026; knowledge cutoff January 2026.
- **IDs:** `opencode/union-alpha` (standard access)
- **Context window:** 131,072 tokens total (verified via platform documentation).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Standard pricing tier on OpenCode Zen.
- **Architecture:** Experimental transformer architecture by OpenCode research.

### Raw benchmarks found

- Terminal-Bench 2.1: **81.0%** <(OpenCode research log, April 2026)>
- Tau3-Banking / Tau2-Bench: **79.5%** <(API evaluation suite)>
- GPQA Diamond: **74.0%** <(official evaluation)>
- SWE-bench Verified: **60.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **63.0%** <(LiveCodeBench benchmark harness)>
- RULER 128K window: **90.0% retrieval accuracy** <(platform documentation)>

### Normalized scores (1–100)

- **Tool use: 82/100.** Competent tool usage for basic developer tasks (Terminal-Bench 81.0%).
- **Reasoning: 84/100.** Good reasoning performance for an experimental release across GPQA Diamond (74.0%).
- **Context window: 78/100.** Standard 128K context window with RULER verification.
- **Multimodal: 70/100.** Basic text modalities.
- **Coding: 84/100.** Solid coding benchmarks on SWE-bench Verified (60.0%) and LiveCodeBench (63.0%).
- **Cost efficiency: 55/100.** Standard pricing tier.
- **Overall Score: 80.0/100.** Best-fit recommendation: Promising experimental research model for specialized developer workflows.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across OpenCode platform documentation. SWE-bench Verified 60.0% and Terminal-Bench 2.1 81.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official OpenCode documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
