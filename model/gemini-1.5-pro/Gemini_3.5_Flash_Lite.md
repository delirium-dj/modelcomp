# Gemini 1.5 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 1.5 Pro (`google/gemini-1.5-pro`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's 1.5-generation legacy flagship with 2M-token context and native multimodal input (text, image, audio, video).
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-1.5-pro`), Chat Completions-style API (legacy/retired).
- **Release / knowledge:** Released 2024; knowledge cutoff ~Nov 2023.
- **IDs:** `google/gemini-1.5-pro` (no Free ID on Zen).
- **Context window:** 2,000,000 input tokens total (verified via Google AI Studio docs).
- **Modalities:** Text input, image input, audio input, video input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Paid equivalent ~$1.25 input / $5.00 output per 1M tokens (legacy tier).
- **Architecture:** Proprietary sparse MoE architecture by Google DeepMind.

### Raw benchmarks found

- GPQA Diamond: **59.1%** <(Google technical report, 2024)>
- SWE-bench Verified: **34.2%** <(SWE-bench official leaderboard, October 2026)>
- Needle-in-a-haystack retrieval: **near-perfect recall to 1M+ input tokens** <(Google DeepMind documentation)>

### Normalized scores (1–100)

- **Tool use: 45/100.** Basic function calling support; lacks modern agentic benchmark data.
- **Reasoning: 58/100.** GPQA Diamond (59.1%) and legacy reasoning benchmarks reflecting earlier generation capabilities.
- **Context window: 96/100.** 2M input context window with near-perfect retrieval up to 1M+ tokens.
- **Multimodal: 90/100.** Native audio, video, image, and text input support.
- **Coding: 58/100.** SWE-bench Verified (34.2%).
- **Cost efficiency: 80/100.** Mid-tier pricing for its era ($1.25/$5).
- **Overall Score: 69.0/100.** Best-fit recommendation: Legacy ultra-long-context multimodal model for historical document and audio/video analysis.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google DeepMind technical documentation. SWE-bench Verified 34.2% and GPQA Diamond 59.1% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
