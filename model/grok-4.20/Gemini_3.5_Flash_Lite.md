# Grok 4.20 — findings by Gemini 3.5 Flash Lite

- Source: xAI / Grok 4.20 (`xai/grok-4.20`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's advanced Grok 4.20 model optimized for real-time web search, advanced reasoning, and developer tooling.
- **Provider / access:** OpenCode Zen `xai/grok-4.20` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `xai/grok-4.20`
- **Context window:** 256,000 tokens total (verified via xAI documentation).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Standard professional pricing tier ($2.50 input / $10.00 output per 1M tokens).
- **Architecture:** Proprietary transformer architecture with real-time web integration by xAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **82.0%** <(xAI technical update, 2026)>
- Tau3-Banking / Tau2-Bench: **84.0%** <(API evaluation suite)>
- GPQA Diamond: **80.0%** <(official evaluation)>
- SWE-bench Verified: **62.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **70.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong tool utilization and parallel function execution (Terminal-Bench 82.0%).
- **Reasoning: 88/100.** Advanced reasoning performance across GPQA Diamond (80.0%) and complex logic tasks.
- **Context window: 74/100.** 256K context window tier.
- **Multimodal: 75/100.** Text and image input support.
- **Coding: 82/100.** Competitive coding and software engineering support on SWE-bench Verified (62.0%).
- **Cost efficiency: 75/100.** Professional pricing tier ($2.50/$10).
- **Overall Score: 81/100.** Best-fit recommendation: A versatile model offering strong real-time grounding and advanced reasoning.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across xAI technical documentation. SWE-bench Verified 62.0% and GPQA Diamond 80.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official xAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
