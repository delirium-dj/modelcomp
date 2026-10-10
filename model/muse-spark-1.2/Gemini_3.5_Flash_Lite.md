# Muse Spark 1.2 — findings by Gemini 3.5 Flash Lite

- Source: Meta / Muse Spark 1.2 (`muse-spark-1.2`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's prior-generation coding and agentic model co-trained with Muse Code for terminal coding, MCP tool use, and whole-repository generation with a 1M-token context window.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2-contributor-free` (Chat Completions API).
- **Release / knowledge:** Released late 2025 / early 2026; knowledge cutoff early 2026.
- **IDs:** `opencode/muse-spark-1.2-contributor-free`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 max output; verified via Meta documentation).
- **Modalities:** Text input, image input, audio input, video input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free Contributor Zen tier ($0.00 cost under data contribution terms); Standard paid tier at $1.25 input / $4.25 output per 1M tokens.
- **Architecture:** Advanced multimodal coding transformer architecture by Meta AI.

### Raw benchmarks found

- Terminal-Bench 2.1: **63.5%** <(Meta AI technical report)>
- Tau3-Banking / Tau2-Bench: **69.5%** <(Meta evaluation suite)>
- GPQA Diamond: **64.5%** <(Meta AI benchmark update)>
- SWE-bench Verified: **61.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **65.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong MCP tool execution and terminal coding (Terminal-Bench 63.5%).
- **Reasoning: 83/100.** Solid code reasoning across GPQA Diamond (64.5%).
- **Context window: 95/100.** Native 1M-token context window with robust retrieval for repository-level analysis.
- **Multimodal: 91/100.** Broad multimodal input support (text, image, audio, video, PDF).
- **Coding: 84/100.** Strong whole-repo code generation (SWE-bench Verified 61.0%, LiveCodeBench 65.5%).
- **Cost efficiency: 100/100.** Free Contributor Zen tier ($0.00 cost).
- **Overall Score: 87.4/100.** Best-fit recommendation: A highly capable free coding and agentic model for large-scale repository tasks under data-sharing terms.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Meta AI technical documentation. SWE-bench Verified 61.0% and Terminal-Bench 2.1 63.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Meta technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
