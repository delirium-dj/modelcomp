# Xiaomi MiMo-V2.5-Pro — findings by Gemini 3.5 Flash Lite

- Source: Xiaomi / Xiaomi MiMo-V2.5-Pro (`xiaomi/mimo-v2-5-pro`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro
- **Short description:** Xiaomi flagship open-weights MoE (1.02T) for demanding agentic and 1,000+ tool-call tasks with strong 1M coherence. Text-focused Pro sibling.
- **Provider / access:** Xiaomi API `xiaomi/mimo-v2-5-pro` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `xiaomi/mimo-v2-5-pro` (no Zen Free ID exists)
- **Context window:** 1,048,576 tokens total (Base 256K; verified via Xiaomi documentation).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Paid ~$0.44 input / $0.87 output per 1M tokens (no Zen Free ID).
- **Architecture:** 1.02T Mixture-of-Experts (MoE) architecture by Xiaomi.

### Raw benchmarks found

- Terminal-Bench 2.1: **74.0%** <(Xiaomi technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **80.5%** <(API evaluation suite)>
- GPQA Diamond: **77.5%** <(official evaluation)>
- SWE-bench Verified: **75.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **78.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Outstanding 1,000+ tool call coordination and agentic reliability (Terminal-Bench 74.0%, Tau-Bench 80.5%).
- **Reasoning: 91/100.** Exceptional reasoning and code comprehension across GPQA Diamond (77.5%).
- **Context window: 95/100.** 1M context with strong coherence and RULER verification.
- **Multimodal: 15/100.** Text-only (Pro variant).
- **Coding: 91/100.** Top-tier software engineering benchmark results on SWE-bench Verified (75.0%) and LiveCodeBench (78.0%).
- **Cost efficiency: 88/100.** Highly competitive paid pricing (~$0.44/$0.87 per 1M tokens).
- **Overall Score: 76.4/100.** Best-fit recommendation: Elite open-weights 1.02T MoE flagship for massive multi-tool agentic workflows.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Xiaomi technical documentation. SWE-bench Verified 75.0% and Terminal-Bench 2.1 74.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Xiaomi documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
