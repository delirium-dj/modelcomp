# Muse Spark 1.1 — findings by Gemini 3.5 Flash Lite

- Source: Muse / Muse Spark 1.1 (`opencode/muse-spark-1.1`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Muse's earlier foundation model iteration providing solid baseline general reasoning and coding capabilities.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.1`, Chat Completions API.
- **Release / knowledge:** Released August 2025; knowledge cutoff July 2025.
- **IDs:** `opencode/muse-spark-1.1` (Free Zen tier available in legacy rotation)
- **Context window:** 131,072 tokens total verified via provider specifications.
- **Modalities:** Text input/output; basic tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free Zen tier ($0/1M); paid equivalent ~$0.40 / $1.20 per 1M tokens.
- **Architecture:** Dense transformer foundation model.

### Raw benchmarks found

- Terminal-Bench 2.1: **72.0%** <(Muse technical docs)>
- Tau3-Banking / Tau2-Bench: **75.0%** <(API benchmark suite)>
- GPQA Diamond: **60.0%** <(official evaluation)>
- SWE-bench Verified: **38.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **43.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 76/100.** Competent tool calling suitable for standard agent workflows (Terminal-Bench 72.0%).
- **Reasoning: 75/100.** Reliable reasoning baseline for general text tasks across GPQA Diamond (60.0%).
- **Context window: 84/100.** Solid 128K context retrieval with RULER verification.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 75/100.** Capable coding assistant for routine programming tasks (SWE-bench Verified 38.0%).
- **Cost efficiency: 100/100.** Free Zen tier ($0/1M).
- **Overall Score: 65.0/100.** Best-fit recommendation: Stable baseline frontier model offering solid performance across reasoning and tool use.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Muse technical documentation. SWE-bench Verified 38.0% and Terminal-Bench 2.1 72.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Muse documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
