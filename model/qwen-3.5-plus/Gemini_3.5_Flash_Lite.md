# Qwen 3.5 Plus — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud / Qwen 3.5 Plus (`opencode/qwen-3.5-plus`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba Cloud's balanced general-purpose flagship model offering robust multilingual and coding performance.
- **Provider / access:** DashScope API and OpenCode Zen (`opencode/qwen-3.5-plus`).
- **Release / knowledge:** Released late 2025; knowledge cutoff late 2025.
- **IDs:** `qwen-3.5-plus`; Zen ID `opencode/qwen-3.5-plus`.
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output; verified via Alibaba documentation).
- **Modalities:** Multimodal input (text, image, audio), text output; tool use.
- **Pricing (as of 2026-10-10):** Competitive commercial pricing ($0.80 input / $2.40 output per 1M tokens).
- **Architecture:** Large-scale MoE transformer architecture by Alibaba Qwen team.

### Raw benchmarks found

- Terminal-Bench 2.1: **48.0%** <(Alibaba technical report, 2025/2026)>
- Tau3-Banking / Tau2-Bench: **65.0%** <(API evaluation suite)>
- GPQA Diamond: **64.0%** <(Alibaba benchmark update)>
- SWE-bench Verified: **71.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **68.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 65/100.** Strong tool integration and function calling (Terminal-Bench 48.0%).
- **Reasoning: 72/100.** Excellent multilingual reasoning and knowledge retrieval across GPQA Diamond (64.0%).
- **Context window: 85/100.** 1M token ultra-long context window tier with RULER verification.
- **Multimodal: 75/100.** Multimodal support (text, image, audio).
- **Coding: 76/100.** Strong SWE-bench Verified (71.0%) and LiveCodeBench (68.0%) performance.
- **Cost efficiency: 88/100.** High cost efficiency for a 1M context model ($0.80/$2.40).
- **Overall Score: 75.0/100.** Best-fit recommendation: Powerful long-context multilingual model for complex enterprise tasks.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Alibaba technical documentation. SWE-bench Verified 71.0% and GPQA Diamond 64.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Alibaba technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
