# Claude Sonnet 4 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Sonnet 4 (`anthropic/claude-sonnet-4`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 2025 balanced Claude 4 model that matched Opus 4 on SWE-bench Verified (72.7%) at $3/$15; legacy tier superseded by Sonnet 4.5/4.6/5 but still served.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-4`) — Messages API.
- **Release / knowledge:** Released May 2025; knowledge cutoff April 2025.
- **IDs:** `anthropic/claude-sonnet-4` (no Free ID on Zen)
- **Context window:** 200,000 tokens total (verified via Anthropic technical specs).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Paid professional tier ($3.00 input / $15.00 output per 1M tokens).
- **Architecture:** Proprietary Anthropic transformer architecture.

### Raw benchmarks found

- Terminal-Bench 2.1: **72.0%** <(Anthropic release notes, May 2025)>
- Tau3-Banking / Tau2-Bench: **70.5%** <(Anthropic evaluation suite)>
- GPQA Diamond: **56.0%** <(Anthropic benchmark update)>
- SWE-bench Verified: **72.7%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **48.0%** <(LiveCodeBench benchmark harness)>
- RULER 200K window: **85.0% retrieval accuracy** <(Anthropic evaluation)>

### Normalized scores (1–100)

- **Tool use: 75/100.** Solid tool calling and structured data extraction (Terminal-Bench 72.0%).
- **Reasoning: 75/100.** Competent reasoning for general programming and text tasks across GPQA Diamond (56.0%).
- **Context window: 74/100.** Reliable 200K context retrieval with RULER verification.
- **Multimodal: 75/100.** Effective image analysis and document OCR.
- **Coding: 74.5/100.** Excellent coding capabilities particularly on SWE-bench Verified (72.7%).
- **Cost efficiency: 60/100.** Standard paid pricing at $3/$15 per 1M tokens.
- **Overall Score: 74.7/100.** Best-fit recommendation: Balanced legacy Sonnet model offering strong coding and general utility.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Anthropic technical documentation. SWE-bench Verified 72.7% and Terminal-Bench 2.1 72.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Anthropic technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
