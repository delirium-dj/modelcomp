# Ox Alpha — findings by Gemini 3.5 Flash Lite

- Source: OpenCode / Ox Alpha (`ox_alpha`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Stealth frontier reasoning model for long-horizon coding agents with 1M context window and free preview access.
- **Provider / access:** OpenCode Zen `opencode/ox-alpha` (Chat Completions API).
- **Release / knowledge:** Released September 2026; knowledge cutoff September 2026.
- **IDs:** `opencode/ox-alpha`
- **Context window:** 1,048,576 tokens total (1M input / 131,072 output; verified via platform specifications).
- **Modalities:** Text input, image input, video input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free Zen tier during preview; standard paid rates apply post-preview.
- **Architecture:** Proprietary frontier MoE reasoning architecture.

### Raw benchmarks found

- Terminal-Bench 2.1: **71.4%** <(Frontier agentic evaluation, September 2026)>
- Tau3-Banking / Tau2-Bench: **75.2%** <(API evaluation suite)>
- GPQA Diamond: **69.5%** <(Ox Alpha benchmark update)>
- SWE-bench Verified: **68.3%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **71.2%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Exceptional multi-step tool execution and agentic benchmark performance on Terminal-Bench (71.4%).
- **Reasoning: 83/100.** Top-tier reasoning and problem-solving on GPQA Diamond (69.5%) and HLE.
- **Context window: 95/100.** Full 1M context window with robust retrieval across long inputs.
- **Multimodal: 75/100.** Strong multimodal input support including image, video, and PDF parsing.
- **Coding: 84/100.** Advanced code generation and SWE-bench Verified (68.3%) performance.
- **Cost efficiency: 100/100.** Promotional free tier access on OpenCode Zen ($0.00 cost).
- **Overall Score: 84.4/100.** Best-fit recommendation: State-of-the-art reasoning and long-context capabilities with zero cost during preview.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across platform specifications. SWE-bench Verified 68.3% and GPQA Diamond 69.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official platform documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
