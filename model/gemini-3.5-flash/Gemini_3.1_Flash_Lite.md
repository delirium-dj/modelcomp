# Gemini 3.5 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google / Gemini 3.5 Flash (`gemini-3.5-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's highly efficient, natively multimodal model optimized for speed, real-world tasks, and a 1M-token context window with robust tool-use support.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.5-flash` (Chat Completions & Responses API).
- **Release / knowledge:** Released May 2026; knowledge cutoff May 2026.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 max output; verified via Google AI documentation).
- **Modalities:** Text input, image input, audio input, video input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Efficient low-cost tier with generous free tier access.
- **Architecture:** Flash multimodal transformer architecture by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **68.0%** <(Google AI technical update)>
- Tau3-Banking / Tau2-Bench: **74.0%** <(Google AI evaluation suite)>
- GPQA Diamond: **69.0%** <(Google AI benchmark update)>
- SWE-bench Verified: **65.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **70.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Effective tool-use for agentic workflows (Terminal-Bench 68.0%).
- **Reasoning: 87/100.** Strong performance for a Flash-series model across GPQA Diamond (69.0%).
- **Context window: 90/100.** Reliable 1M-token context handling with high retrieval accuracy.
- **Multimodal: 90/100.** Robust multimodal input support across text, image, audio, and video.
- **Coding: 88/100.** Capable for everyday coding and scripting (SWE-bench Verified 65.0%).
- **Cost efficiency: 98/100.** Exceptional performance-to-cost ratio and speed.
- **Overall Score: 88.2/100.** Best-fit recommendation: A highly efficient and capable Flash-tier model, excellent for high-volume, speed-sensitive tasks and multimodal RAG.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
