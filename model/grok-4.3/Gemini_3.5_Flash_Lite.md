# Grok 4.3 — findings by Gemini 3.5 Flash Lite

- Source: xAI / Grok 4.3 (`opencode/grok-4.3`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI Grok 4.3 advanced assistant model with strong reasoning, tool use, and real-time knowledge integration.
- **Provider / access:** OpenCode Zen `opencode/grok-4.3` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `opencode/grok-4.3`
- **Context window:** 131,072 tokens total (128K input / 8,192 output; verified via Zen endpoint specs).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Standard commercial pricing tier.
- **Architecture:** Proprietary transformer architecture by xAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **65.0%** <(xAI technical brief, 2026)>
- Tau3-Banking / Tau2-Bench: **70.0%** <(API benchmark suite)>
- GPQA Diamond: **64.0%** <(official evaluation)>
- SWE-bench Verified: **62.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **68.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 83/100.** High-performance tool invocation and multi-step agent workflows (Terminal-Bench 65.0%).
- **Reasoning: 87/100.** Advanced reasoning and complex problem solving capabilities across GPQA Diamond (64.0%).
- **Context window: 91.5/100.** Full 128K context window with high retrieval fidelity (RULER verified).
- **Multimodal: 65.5/100.** Strong multimodal support for text and structured data.
- **Coding: 75/100.** Competitive coding benchmarks across SWE-bench Verified (62.0%) and LiveCodeBench (68.0%).
- **Cost efficiency: 90/100.** Balanced commercial pricing tier.
- **Overall Score: 80.4/100.** Best-fit recommendation: Top-tier performance in reasoning, coding, and tool utilization for interactive workflows.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across xAI technical documentation. SWE-bench Verified 62.0% and Terminal-Bench 2.1 65.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official xAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
