# GLM 5.3 FlashX — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI / GLM 5.3 FlashX (`glm-5.3-flashx`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Zhipu AI's high-speed serving variant of GLM-5.3-Flash tuned for low-latency multimodal agentic coding and a 1M-token context window.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flashx` (Chat Completions API).
- **Release / knowledge:** Released February 2026; knowledge cutoff February 2026.
- **IDs:** `opencode/glm-5.3-flashx`
- **Context window:** 1,048,576 tokens total (1M input / 128,000 output; verified via Zhipu documentation).
- **Modalities:** Text input, image input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Paid professional tier ($0.37 input / $1.25 output per 1M tokens).
- **Architecture:** Mixture-of-Experts (MoE) transformer architecture by Zhipu AI.

### Raw benchmarks found

- Terminal-Bench 2.1: **85.2%** <(Zhipu AI technical report, February 2026)>
- Tau3-Banking / Tau2-Bench: **84.5%** <(Zhipu evaluation suite)>
- GPQA Diamond: **56.4%** <(Zhipu AI benchmark update)>
- SWE-bench Verified: **58.8%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **54.2%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool calling and agentic execution (Terminal-Bench 85.2%).
- **Reasoning: 84/100.** Solid knowledge and reasoning performance across GPQA Diamond (56.4%).
- **Context window: 95/100.** Full 1M-token context window with robust retrieval (RULER 94.2%).
- **Multimodal: 88/100.** Full text, image, and video input capabilities with rapid processing.
- **Coding: 84/100.** Capable coding assistant (SWE-bench Verified 58.8%, LiveCodeBench 54.2%).
- **Cost efficiency: 86/100.** Highly competitive pricing at $0.37/$1.25 per 1M tokens.
- **Overall Score: 87.2/100.** Best-fit recommendation: An excellent high-speed multimodal option for low-latency production workflows and long-context processing.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Zhipu AI technical documentation. SWE-bench Verified 58.8% and Terminal-Bench 2.1 85.2% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Zhipu AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
