# Gemini 3.1 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.1 Flash (`google/gemini-3.1-flash`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's efficient 3.1 Flash model, balancing speed, capability, and cost.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.1-flash` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge cutoff current.
- **IDs:** `google/gemini-3.1-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output; verified via Google documentation).
- **Modalities:** Text input, image input, audio input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Free tier available; paid tier at competitive low-cost rates.
- **Architecture:** Optimized multimodal transformer architecture by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **64.5%** <(Google technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **70.5%** <(Google evaluation suite)>
- GPQA Diamond: **65.5%** <(Google benchmark update)>
- SWE-bench Verified: **60.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **66.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool use and structured data extraction (Terminal-Bench 64.5%).
- **Reasoning: 84/100.** Excellent speed-to-reasoning ratio across GPQA Diamond (65.5%).
- **Context window: 95/100.** Native 1M token context window with high retrieval accuracy.
- **Multimodal: 91/100.** Broad multimodal input support (image, audio, PDF).
- **Coding: 83/100.** Solid coding and script generation capabilities (SWE-bench Verified 60.5%, LiveCodeBench 66.0%).
- **Cost efficiency: 95/100.** Free tier access and low paid pricing.
- **Overall Score: 87.6/100.** Best-fit recommendation: Highly capable and balanced mid-tier model for high-throughput multimodal applications.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google DeepMind technical documentation. SWE-bench Verified 60.5% and Terminal-Bench 2.1 64.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
