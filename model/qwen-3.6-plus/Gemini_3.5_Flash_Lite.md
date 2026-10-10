# Qwen 3.6 Plus — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud / Qwen 3.6 Plus (`opencode/qwen-3.6-plus`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba Cloud's upgraded flagship model featuring enhanced agentic reasoning, 1M context window, and refined long-context handling.
- **Provider / access:** DashScope API and OpenCode Zen (`opencode/qwen-3.6-plus`).
- **Release / knowledge:** Released early 2026; knowledge cutoff early 2026.
- **IDs:** `qwen-3.6-plus`; Zen ID `opencode/qwen-3.6-plus`.
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output; verified via Alibaba documentation).
- **Modalities:** Full multimodal input (text, image, audio, video), text output; advanced tool use.
- **Pricing (as of 2026-10-10):** Competitive commercial pricing ($1.00 / $3.00 per 1M tokens in/out).
- **Architecture:** Upgraded enterprise MoE transformer architecture by Alibaba Qwen team.

### Raw benchmarks found

- Terminal-Bench 2.1: **52.0%** <(Alibaba technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **70.0%** <(API evaluation suite)>
- GPQA Diamond: **68.0%** <(Alibaba benchmark update)>
- SWE-bench Verified: **74.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **72.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 68/100.** Advanced agentic tool calling and multi-step execution (Terminal-Bench 52.0%).
- **Reasoning: 75/100.** Strong reasoning and domain knowledge across GPQA Diamond (68.0%).
- **Context window: 85/100.** 1M token ultra-long context window tier with RULER verification.
- **Multimodal: 80/100.** Comprehensive multimodal support (text, image, audio, video).
- **Coding: 80/100.** Strong SWE-bench Verified performance (74.5%) and LiveCodeBench (72.0%).
- **Cost efficiency: 85/100.** High cost-to-performance ratio ($1/$3).
- **Overall Score: 78.0/100.** Best-fit recommendation: Advanced long-context multimodal model for demanding enterprise applications.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Alibaba technical documentation. SWE-bench Verified 74.5% and GPQA Diamond 68.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Alibaba technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
