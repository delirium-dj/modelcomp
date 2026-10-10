# MiniMax M3 — findings by Gemini 3.5 Flash Lite

- Source: MiniMax AI / MiniMax M3 (`minimax-m3`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax flagship open-weight MoE (~230B total / 9.8B active) with 1M context and sparse attention; 59% SWE-Bench Pro, 66% Terminal-Bench 2.1.
- **Provider / access:** MiniMax API `minimax-ai/minimax-m3` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `minimax-ai/minimax-m3` (no Zen Free ID)
- **Context window:** 1,048,576 (1M) / 512K out.
- **Modalities:** Text, image, video in; text out; tool calls yes.
- **Pricing (as of 2026-10-10):** Paid professional tier ($0.30 input / $1.20 output per 1M tokens).
- **Architecture:** ~230B total / 9.8B active Mixture-of-Experts with sparse attention by MiniMax.

### Raw benchmarks found

- Terminal-Bench 2.1: **66.0%** <(MiniMax technical update, 2026)>
- Tau3-Banking / Tau2-Bench: **73.0%** <(MiniMax evaluation suite)>
- GPQA Diamond: **69.0%** <(MiniMax benchmark update)>
- SWE-bench Verified / SWE-Pro: **59.0%** <(SWE-Bench Pro leaderboard, October 2026)>
- LiveCodeBench: **68.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong agentic tool use and 1M context retrieval (Terminal-Bench 66.0%).
- **Reasoning: 86/100.** Solid sparse-attention reasoning across GPQA Diamond (69.0%).
- **Context window: 95/100.** 1M context with 512K output capacity.
- **Multimodal: 82/100.** Text, image, and video ingestion capabilities.
- **Coding: 85/100.** High-performance SWE-bench Pro (59.0%) and LiveCodeBench (68.5%) results.
- **Cost efficiency: 90/100.** Extremely affordable paid pricing ($0.30/$1.20 per 1M).
- **Overall Score: 86.8/100.** Best-fit recommendation: Impressive flagship sparse-attention open-weight MoE for long-context multimodal tasks.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across MiniMax technical documentation. SWE-bench Pro 59.0% and Terminal-Bench 2.1 66.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official MiniMax documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
