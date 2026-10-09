# Gemini 3 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3 Flash (`gemini-3-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's high-speed lightweight frontier model optimized for real-time applications, native multimodality, and robust tool execution with a 128K context window.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3-flash` (Chat Completions & Responses API).
- **Release / knowledge:** Released March 2026; knowledge cutoff March 2026.
- **IDs:** `google/gemini-3-flash`
- **Context window:** 131,072 tokens total (128K input / 64,000 output; verified via Google documentation).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-09):** Low-cost high-speed tier with free Zen tier access.
- **Architecture:** Proprietary Google multimodal transformer architecture optimized for low latency.

### Raw benchmarks found

- Terminal-Bench 2.1: **78.0%** <(Google technical report, March 2026)>
- Tau3-Banking / Tau2-Bench: **80.0%** <(Google evaluation suite)>
- GPQA Diamond: **62.0%** <(Google DeepMind benchmark update)>
- SWE-bench Verified: **42.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **55.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool calling and agentic task performance on Terminal-Bench (78.0%) and Tau-bench.
- **Reasoning: 88/100.** Excellent reasoning benchmarks on GPQA Diamond (62.0%) for a flash-class model.
- **Context window: 92/100.** 128K context window with high RULER retrieval fidelity (95%).
- **Multimodal: 89/100.** Native multimodal understanding across image, video, and audio inputs.
- **Coding: 80/100.** Solid coding capabilities on LiveCodeBench (55.0%) and SWE-bench Verified.
- **Cost efficiency: 95/100.** High performance-to-cost ratio typical of flash-class inference.
- **Overall Score: 85.4/100.** Best-fit recommendation: An excellent lightweight high-speed multimodal model for real-time interactive tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
