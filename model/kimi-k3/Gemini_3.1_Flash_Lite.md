# Kimi K3 — findings by Gemini 3.1 Flash Lite

- Source: Moonshot AI / Kimi K3 (`kimi-k3`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's advanced 2.8T-parameter Mixture-of-Experts (MoE) model optimized for complex coding, deep knowledge work, and long-context analysis with native vision capabilities.
- **Provider / access:** Moonshot AI API / OpenCode Zen `moonshotai/kimi-k3` (Chat Completions API).
- **Release / knowledge:** Released July 2026; knowledge cutoff July 2026.
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 max output; verified via Moonshot AI documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** $3.00 input / $15.00 output per 1M tokens.
- **Architecture:** 2.8T-parameter Mixture-of-Experts (MoE) transformer architecture by Moonshot AI.

### Raw benchmarks found

- BenchLeader Rank: **#15 / 216** <(BenchLeader benchmark suite, October 2026)>
- Terminal-Bench 2.1: **74.0%** <(Moonshot AI technical report)>
- GPQA Diamond: **71.0%** <(Moonshot AI benchmark update)>
- SWE-bench Verified: **73.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **76.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong agentic coding capabilities and function calling (Terminal-Bench 74.0%).
- **Reasoning: 88/100.** High-level reasoning for complex knowledge work and science tasks (GPQA Diamond 71.0%).
- **Context window: 95/100.** Large 1M-token context capacity with high reliability for long-context RAG.
- **Multimodal: 90/100.** Native vision integration with robust image parsing.
- **Coding: 92/100.** Optimized for software engineering and coding (SWE-bench Verified 73.0%).
- **Cost efficiency: 80/100.** Strong performance-to-cost ratio for a 3T-class MoE model ($3/$15).
- **Overall Score: 89.7/100.** Best-fit recommendation: A powerful large-scale MoE workhorse model, highly capable for technical research and software engineering.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Moonshot AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
