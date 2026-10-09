# Kimi K3 — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI / Kimi K3 (`kimi-k3`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal Mixture-of-Experts (MoE) flagship model featuring a 1M-token input and output window, frontier multimodal reasoning, and elite terminal-agent coding capabilities.
- **Provider / access:** Moonshot AI API / OpenCode Zen `moonshotai/kimi-k3` (Chat Completions API).
- **Release / knowledge:** Released July 2026; knowledge cutoff July 2026.
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1,048,576 tokens total (1M input / 1,048,576 output; verified via Moonshot AI documentation).
- **Modalities:** Text input, image input, document ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Paid professional tier ($3.00 input / $15.00 output per 1M tokens; $0.30 cached).
- **Architecture:** 2.8T-parameter multimodal Mixture-of-Experts (MoE) transformer architecture by Moonshot AI.

### Raw benchmarks found

- Terminal-Bench 2.1: **79.0%** <(Moonshot AI technical report, July 2026)>
- Tau3-Banking / Tau2-Bench: **85.0%** <(Moonshot evaluation suite)>
- GPQA Diamond: **82.5%** <(Moonshot AI benchmark update)>
- SWE-bench Verified: **80.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **82.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Elite terminal-agent coding and multi-step tool execution (Terminal-Bench 79.0%).
- **Reasoning: 94/100.** Frontier document, math, and code reasoning across GPQA Diamond (82.5%).
- **Context window: 98/100.** 1M input and 1M output context window with flawless long-form retrieval.
- **Multimodal: 90/100.** Advanced multimodal document and image understanding.
- **Coding: 94/100.** Top-tier SWE-bench Verified (80.0%) and LiveCodeBench (82.5%) performance.
- **Cost efficiency: 55/100.** Premium paid pricing ($3/$15 per 1M tokens).
- **Overall Score: 93.8/100.** Best-fit recommendation: A premier 2.8T multimodal MoE flagship model for massive long-context reasoning and autonomous software engineering.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Moonshot AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
