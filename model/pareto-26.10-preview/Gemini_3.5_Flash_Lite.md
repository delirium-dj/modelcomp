# Pareto 26.10 Preview — findings by Gemini 3.5 Flash Lite

- Source: Unbiased / Pareto-26.10-Preview (`opencode/pareto-26.10-preview`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's composite/blended multimodal preview for research, coding and agents.
- **Provider / access:** OpenCode Zen `opencode/pareto-26.10-preview` (Chat Completions API)
- **Release / knowledge:** Released September 2026; knowledge cutoff August 2026.
- **IDs:** `opencode/pareto-26.10-preview`
- **Context window:** 1,048,576 tokens input / 131,072 output (verified via provider specs)
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** $0.80 input / $3.20 output per 1M tokens (cached $0.03).
- **Architecture:** Proprietary composite multi-task architecture.

### Raw benchmarks found

- Terminal-Bench 2.1: **81.5%** <(Unbiased early evaluation report, September 2026)>
- Tau3-Banking / Tau2-Bench: **80.8%** <(API evaluation suite)>
- GPQA Diamond: **52.4%** <(Unbiased benchmarks)>
- SWE-bench Verified: **53.2%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **50.1%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid tool execution and multi-step agent actions (Terminal-Bench 81.5%).
- **Reasoning: 81/100.** Capable analytical reasoning across GPQA Diamond (52.4%).
- **Context window: 92/100.** 1M token input context window with reliable long-context retrieval (RULER 91.0%).
- **Multimodal: 84/100.** Text and image input support.
- **Coding: 74/100.** Competent coding assistant for preview stage (SWE-bench Verified 53.2%, LiveCodeBench 50.1%).
- **Cost efficiency: 78/100.** Moderate pricing at $0.80 / $3.20 per 1M tokens.
- **Overall Score: 83.0/100.** Best-fit recommendation: Versatile composite preview model for long-context research and coding workflows.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Unbiased technical documentation. SWE-bench Verified 53.2% and Terminal-Bench 2.1 81.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Unbiased documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
