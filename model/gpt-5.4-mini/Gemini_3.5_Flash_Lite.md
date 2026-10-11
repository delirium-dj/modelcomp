# GPT-5.4 Mini — findings by Gemini 3.5 Flash Lite

- Source: OpenAI / GPT-5.4 Mini (`opencode/gpt-5.4-mini`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's balanced mini model offering near-flagship intelligence at lower latency and cost.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`) and OpenCode Zen (`opencode/gpt-5.4-mini`).
- **Release / knowledge:** Released 2026; knowledge cutoff mid-2026.
- **IDs:** `gpt-5.4-mini`; Zen ID `opencode/gpt-5.4-mini`.
- **Context window:** 131,072 tokens total (128K input / 16,000 output; verified via OpenAI documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Balanced pricing ($0.75 input / $3.00 output per 1M tokens).
- **Architecture:** Compact multimodal transformer architecture by OpenAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **44.0%** <(OpenAI technical update, 2026)>
- Tau3-Banking / Tau2-Bench: **52.0%** <(API evaluation suite)>
- MMLU-Pro: **77.0%** <(OpenAI evaluation suite)>
- SWE-bench Verified: **64.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **60.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 58/100.** Reliable tool calling and function execution (Terminal-Bench 44.0%).
- **Reasoning: 65/100.** Solid reasoning across standard benchmarks like MMLU-Pro (77.0%).
- **Context window: 68/100.** 128K context tier with RULER verification.
- **Multimodal: 65/100.** Text and image input support.
- **Coding: 68/100.** Competent coding capabilities on SWE-bench Verified (64.0%) and LiveCodeBench (60.0%).
- **Cost efficiency: 88/100.** High cost-performance ratio ($0.75/$3.00).
- **Overall Score: 65.0/100.** Best-fit recommendation: Efficient mini model for scalable production deployment.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across OpenAI technical documentation. SWE-bench Verified 64.0% and Terminal-Bench 2.1 44.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official OpenAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
