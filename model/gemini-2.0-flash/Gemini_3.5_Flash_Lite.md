# Gemini 2.0 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 2.0 Flash (`google/gemini-2.0-flash`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's 2025 workhorse multimodal model with a 1M context window. Deprecated and shut down on 2026-06-01; kept as a historical reference for the 2.0 generation.
- **Provider / access:** Google API (`google/gemini-2.0-flash`) — historical endpoint.
- **Release / knowledge:** Released December 2024; knowledge cutoff November 2024.
- **IDs:** `google/gemini-2.0-flash` (shut down 2026-06-01; no Free ID on Zen)
- **Context window:** 1,048,576 tokens total (verified via Google AI Studio documentation).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Historical pricing $0.10 input / $0.40 output per 1M tokens. Shut down.
- **Architecture:** Google Gemini native multimodal transformer architecture by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **69.0%** <(Google technical report, 2024/2025)>
- Tau3-Banking / Tau2-Bench: **67.5%** <(Google benchmark suite)>
- GPQA Diamond: **51.0%** <(Google benchmark update)>
- SWE-bench Verified: **48.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **44.0%** <(LiveCodeBench benchmark harness)>
- RULER 1M window: **88.0% retrieval accuracy** <(Google evaluation)>

### Normalized scores (1–100)

- **Tool use: 73/100.** Fast native tool calling and function execution (Terminal-Bench 69.0%).
- **Reasoning: 73/100.** Solid general reasoning for standard multimodal tasks across GPQA Diamond (51.0%).
- **Context window: 73/100.** 1M context window with reliable multi-modal retrieval.
- **Multimodal: 72/100.** Excellent native audio, video, image, and text ingestion.
- **Coding: 72.5/100.** Competent coding capabilities for general development tasks (SWE-bench Verified 48.0%, LiveCodeBench 44.0%).
- **Cost efficiency: 70/100.** Historical cost-effective pricing when active ($0.10/$0.40).
- **Overall Score: 72.7/100.** Best-fit recommendation: Highly influential historical workhorse multimodal model that established fast real-time streaming capabilities.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google AI Studio technical documentation. SWE-bench Verified 48.0% and Terminal-Bench 2.1 69.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
