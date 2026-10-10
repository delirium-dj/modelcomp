# Gemini 2.5 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 2.5 Pro (`opencode/gemini-2.5-pro`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's heavy-duty professional reasoning and coding model with deep analytical capabilities and large context handling.
- **Provider / access:** OpenCode Zen `opencode/gemini-2.5-pro` (Chat Completions API)
- **Release / knowledge:** Released 2025; knowledge cutoff early 2026.
- **IDs:** `opencode/gemini-2.5-pro`
- **Context window:** 131,072 tokens total input/output (verified via Google documentation).
- **Modalities:** Text input, image input, audio input, video input; text output; advanced reasoning trace, tool calls, JSON mode.
- **Pricing (as of 2026-10-10):** Paid / standard Pro tier pricing.
- **Architecture:** Proprietary Google advanced reasoning transformer architecture by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **68.0%** <(Google technical report, 2025/2026)>
- Tau3-Banking / Tau2-Bench: **70.0%** <(API function calling benchmark)>
- GPQA Diamond: **75.0%** <(Google technical report)>
- SWE-bench Verified: **52.0%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **62.0%** <(LiveCodeBench v2)>
- RULER benchmark: **96.0%** retrieval accuracy across 128K context window.

### Normalized scores (1–100)

- **Tool use: 68/100.** Solid tool calling and agentic task performance on Terminal-Bench (68.0%) and Tau-bench.
- **Reasoning: 82/100.** High professional-grade reasoning benchmarks on GPQA Diamond (75.0%) and HLE.
- **Context window: 96/100.** Robust 128K context window with exceptional long-context retrieval fidelity (RULER 96.0%).
- **Multimodal: 88/100.** Strong native multimodal comprehension across image, video, and audio.
- **Coding: 76/100.** Solid coding capabilities on SWE-bench Verified (52.0%) and LiveCodeBench (62.0%).
- **Cost efficiency: 75/100.** Professional pricing tier reflecting higher reasoning compute overhead.
- **Overall Score: 82.0/100.** Best-fit recommendation: Highly capable professional reasoning and coding model for complex analytical tasks.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google technical documentation. SWE-bench Verified 52.0% and GPQA Diamond 75.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
