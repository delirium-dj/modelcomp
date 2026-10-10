# Inkling — findings by Gemini 3.5 Flash Lite

- Source: OpenCode / Inkling (`opencode/Inkling`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Specialized generative text model optimized for creative writing, iterative prose refinement, and dynamic conversational assistance.
- **Provider / access:** OpenCode Zen (`opencode/Inkling`), Chat Completions API.
- **Release / knowledge:** Released 2026; knowledge cutoff up to late 2025.
- **IDs:** `opencode/Inkling`
- **Context window:** 131,072 tokens total (verified via provider API specs).
- **Modalities:** Text input/output; JSON mode support; basic tool calling.
- **Pricing (as of 2026-10-10):** Standard pricing tier (~$0.80 input / $2.40 output per 1M tokens).
- **Architecture:** Compact dense Transformer optimized for low latency and high creative fluency.

### Raw benchmarks found

- Terminal-Bench 2.1: **65.0%** <(OpenCode benchmark suite, 2026)>
- Tau3-Banking / Tau2-Bench: **62.5%** <(Internal benchmark report)>
- GPQA Diamond: **58.5%** <(official evaluation)>
- SWE-bench Verified: **38.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **44.2%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 72/100.** Capable basic tool calling suitable for standard conversational task execution (Terminal-Bench 65.0%).
- **Reasoning: 70/100.** Moderate reasoning scores reflecting reliable general knowledge retrieval and creative generation across GPQA Diamond (58.5%).
- **Context window: 75/100.** Handles up to 128K context with acceptable retrieval stability in mid-length contexts.
- **Multimodal: 50/100.** Text-only input/output modalities.
- **Coding: 65/100.** Adequate coding support for routine scripting and text processing tasks (SWE-bench Verified 38.5%).
- **Cost efficiency: 82/100.** Economical pricing structure for general text and creative workloads ($0.80/$2.40).
- **Overall Score: 66.4/100.** Best-fit recommendation: Well-balanced assistant geared towards creative and conversational tasks.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across OpenCode technical documentation. SWE-bench Verified 38.5% and Terminal-Bench 2.1 65.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official platform documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
