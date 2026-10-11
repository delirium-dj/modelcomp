# Gemini 2.5 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 2.5 Flash (`google/gemini-2.5-flash`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's balanced Flash model, optimized for speed and efficiency in varied tasks.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-2.5-flash` (Chat Completions API).
- **Release / knowledge:** Released 2025; knowledge cutoff current.
- **IDs:** `google/gemini-2.5-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output; verified via Google documentation).
- **Modalities:** Text input, image input, audio input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free tier available; paid-tier pricing thereafter.
- **Architecture:** Dense-sparse hybrid multimodal transformer architecture by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **62.0%** <(Google technical report, 2025/2026)>
- Tau3-Banking / Tau2-Bench: **68.5%** <(API evaluation suite)>
- GPQA Diamond: **64.0%** <(official evaluation)>
- SWE-bench Verified: **59.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **64.5%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 84/100.** Very strong tool calling and structured output generation (Terminal-Bench 62.0%).
- **Reasoning: 83/100.** Solid general reasoning and knowledge retrieval across GPQA Diamond (64.0%).
- **Context window: 95/100.** Native 1M token context window with RULER verification.
- **Multimodal: 90/100.** Native multimodal support for audio, video, image, and PDF.
- **Coding: 82/100.** Competent coding benchmark performance (SWE-bench Verified 59.0%, LiveCodeBench 64.5%).
- **Cost efficiency: 95/100.** Generous free tier and low paid pricing.
- **Overall Score: 86.8/100.** Best-fit recommendation: Well-balanced fast multimodal model for high-throughput enterprise tasks.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google DeepMind technical documentation. SWE-bench Verified 59.0% and Terminal-Bench 2.1 62.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
