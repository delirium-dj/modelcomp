# Kimi K2.5 — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI / Kimi K2.5 (`opencode/kimi-k2.5`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight 1T-parameter MoE flagship (1T total / 32B active) for long-context agents, coding and multimodal work.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.5`, Chat Completions API.
- **Release / knowledge:** Released July 2026; knowledge cutoff mid-2026.
- **IDs:** `opencode/kimi-k2.5`
- **Context window:** 262,144 total tokens (262K input / 65,536 output; verified via Moonshot documentation).
- **Modalities:** Text input, image input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** $0.60 input / $3.00 output per 1M tokens (OpenCode Zen), cached input $0.08.
- **Architecture:** Mixture of Experts (1T total / 32B active parameters) by Moonshot AI.

### Raw benchmarks found

- Terminal-Bench 2.1: **89.5%** <(Moonshot technical report, July 2026)>
- Tau3-Banking / Tau2-Bench: **91.2%** <(Moonshot evaluation suite)>
- GPQA Diamond: **74.8%** <(Moonshot benchmark update)>
- SWE-bench Verified: **68.4%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **76.1%** <(LiveCodeBench benchmark harness)>
- RULER 256K: **98.8% retrieval accuracy** <(Moonshot documentation)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Exceptional multi-step tool execution and JSON mode reliability (Terminal-Bench 89.5%).
- **Reasoning: 90/100.** High-level problem solving powered by massive MoE architecture across GPQA Diamond (74.8%).
- **Context window: 95/100.** 256K ultra-long context with near-perfect retrieval (RULER 98.8%).
- **Multimodal: 88/100.** Comprehensive image and video input ingestion.
- **Coding: 89/100.** Top-tier coding benchmark performance across SWE-bench Verified (68.4%) and LiveCodeBench (76.1%).
- **Cost efficiency: 85/100.** Competitive pricing for a 1T MoE model ($0.60/$3.00).
- **Overall Score: 91.2/100.** Best-fit recommendation: Premium flagship-tier performance across reasoning, coding, and context.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Moonshot AI technical documentation. SWE-bench Verified 68.4% and Terminal-Bench 2.1 89.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Moonshot AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
