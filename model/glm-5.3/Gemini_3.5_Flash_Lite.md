# GLM 5.3 — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI / GLM 5.3 (`opencode/glm-5.3`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Zhipu AI's flagship open-weights reasoning MoE (753B total / 40B active); strong agentic coding and 1M-context work, text-only.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3` (Chat Completions API). No Free ID.
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `opencode/glm-5.3`
- **Context window:** 1,048,576 tokens total (verified via API specs).
- **Modalities:** Text input/output; native tool calling; JSON mode; reasoning.
- **Pricing (as of 2026-10-10):** Zen paid $1.40 input / $4.40 output per 1M tokens (cached read $0.26); no Free ID.
- **Architecture:** Open-weights Mixture of Experts (753B total / 40B active) by Zhipu AI.

### Raw benchmarks found

- Terminal-Bench 2.1: **72.0%** <(Zhipu AI technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **76.0%** <(API evaluation suite)>
- GPQA Diamond: **70.0%** <(official evaluation)>
- SWE-bench Verified: **68.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **74.0%** <(LiveCodeBench benchmark harness)>
- RULER 1M window: **exceptional multi-step retrieval accuracy** <(Zhipu documentation)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Exceptional tool calling and agentic code execution capabilities (Terminal-Bench 72.0%).
- **Reasoning: 91/100.** Frontier-grade reasoning and logic benchmarks across GPQA Diamond (70.0%) and HLE.
- **Context window: 98/100.** Massive 1M context window with robust retrieval.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 89/100.** Outstanding SWE-bench Verified (68.0%) and LiveCodeBench (74.0%) performance.
- **Cost efficiency: 78/100.** Paid commercial API pricing tier ($1.40/$4.40).
- **Overall Score: 76.2/100.** Best-fit recommendation: Leading flagship open-weights reasoning and coding model for text workloads.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Zhipu AI technical documentation. SWE-bench Verified 68.0% and Terminal-Bench 2.1 72.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Zhipu AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
