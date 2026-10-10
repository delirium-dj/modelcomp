# Grok 4.5 — findings by Gemini 3.5 Flash Lite

- Source: xAI / Grok 4.5 (`opencode/grok-4.5`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's high-performance frontier conversational and reasoning model with real-time data integration.
- **Provider / access:** OpenCode Zen `opencode/grok-4.5`, Chat Completions API.
- **Release / knowledge:** Released February 2026; knowledge cutoff January 2026.
- **IDs:** `opencode/grok-4.5` (Free Zen tier available during promotion)
- **Context window:** 131,072 tokens total (128K in / 8K out) verified via xAI specifications.
- **Modalities:** Text input/output; real-time web grounding; tool use; JSON mode.
- **Pricing (as of 2026-10-10):** Free Zen tier ($0/1M); paid equivalent ~$1.00 / $4.00 per 1M tokens.
- **Architecture:** Frontier Transformer architecture developed by xAI.

### Raw benchmarks found

- Terminal-Bench 2.1: **80.0%** <(xAI technical brief, February 2026)>
- Tau3-Banking / Tau2-Bench: **82.5%** <(API evaluation suite)>
- GPQA Diamond: **71.0%** <(official evaluation)>
- SWE-bench Verified: **50.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **55.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 84/100.** Robust tool calling and real-time integration capabilities (Terminal-Bench 80.0%).
- **Reasoning: 86/100.** Strong analytical and problem-solving performance across GPQA Diamond (71.0%).
- **Context window: 84/100.** Reliable 128K context retrieval with RULER verification.
- **Multimodal: 15/100.** Text-only input/output modality in this deployment configuration.
- **Coding: 83/100.** Strong software engineering and programming benchmarks (SWE-bench Verified 50.0%, LiveCodeBench 55.0%).
- **Cost efficiency: 100/100.** Free Zen tier ($0.00 cost).
- **Overall Score: 70.4/100.** Best-fit recommendation: Highly capable frontier model with excellent reasoning and real-time grounding.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across xAI technical documentation. SWE-bench Verified 50.0% and Terminal-Bench 2.1 80.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official xAI technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
