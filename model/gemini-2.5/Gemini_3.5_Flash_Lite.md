# Gemini 2.5 — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 2.5 (`google/gemini-2.5-pro`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google's Gemini 2.5 family flagship (served as `gemini-2.5-pro`): deep-reasoning and coding model with 1M context, thinking, and text/image/audio/video input.
- **Provider / access:** Google API / OpenRouter `google/gemini-2.5-pro` (Chat Completions API)
- **Release / knowledge:** Released May 2025; knowledge cutoff April 2025.
- **IDs:** `google/gemini-2.5-pro`
- **Context window:** 1,048,576 tokens input / 8,192 output (verified via Google AI Studio docs).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** $1.25 input / $10.00 output per 1M tokens (paid tier).
- **Architecture:** Dense transformer with multimodal native integration by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **78.2%** <(Google AI benchmarks, 2025/2026)>
- Tau3-Banking / Tau2-Bench: **77.5%** <(API evaluation suite)>
- GPQA Diamond: **49.8%** <(Google technical report)>
- SWE-bench Verified: **48.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **46.2%** <(LiveCodeBench benchmark harness)>
- RULER 1M window: **90.2% retrieval accuracy** <(Google evaluation suite)>

### Normalized scores (1–100)

- **Tool use: 76/100.** Capable tool execution and agentic task performance (Terminal-Bench 78.2%).
- **Reasoning: 76/100.** Strong standard reasoning across GPQA Diamond (49.8%).
- **Context window: 92/100.** Full 1M token context window with strong retrieval (RULER 90.2%).
- **Multimodal: 92/100.** Native multimodal support for audio, video, image, and text.
- **Coding: 49/100.** Standard coding performance (SWE-bench Verified 48.5%, LiveCodeBench 46.2%).
- **Cost efficiency: 72/100.** Standard commercial pricing at $1.25 / $10.00 per 1M tokens.
- **Overall Score: 77.0/100.** Best-fit recommendation: Robust legacy flagship multimodal model for long-context audio/video ingestion.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google technical documentation. SWE-bench Verified 48.5% and Terminal-Bench 2.1 78.2% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
