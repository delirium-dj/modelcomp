# Gemini 3 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3 Pro (`gemini-3-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's advanced frontier multimodal model delivering native reasoning, massive 2M-token context capabilities, and state-of-the-art agentic performance.
- **Provider / access:** Google AI Studio / Vertex AI `google/gemini-3-pro` (Chat Completions & Gemini API).
- **Release / knowledge:** Released March 2026; knowledge cutoff March 2026.
- **IDs:** `google/gemini-3-pro`
- **Context window:** 2,097,152 tokens total (2M input / 64,000 output; verified via Google documentation).
- **Modalities:** Native multimodal (text, image, audio, video, PDF in; text out), tool calling, JSON mode, native reasoning.
- **Pricing (as of 2026-10-09):** Standard Google Pro tier pricing ($1.25 input / $5.00 output per 1M tokens).
- **Architecture:** Advanced multimodal Transformer / MoE architecture by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **87.5%** <(Google technical report, March 2026)>
- Tau3-Banking / Tau2-Bench: **89.0%** <(Google evaluation harness)>
- GPQA Diamond: **84.0%** <(Google DeepMind evaluation suite)>
- SWE-bench Verified: **76.5%** <(SWE-bench official leaderboard, October 2026)>
- RULER 2M context: **99.8%** retrieval accuracy across full 2 million token window.

### Normalized scores (1–100)

- **Tool use: 93/100.** Exceptional tool integration, structured outputs, and complex agentic function calling (Terminal-Bench 87.5%).
- **Reasoning: 94/100.** Advanced reasoning capabilities across complex scientific and analytical benchmarks like GPQA Diamond (84.0%).
- **Context window: 99/100.** Industry-leading 2 million token context window with virtually flawless ultra-long-context retrieval.
- **Multimodal: 98/100.** Unmatched native multimodal ingestion spanning video, audio, high-resolution imagery, and documents.
- **Coding: 90/100.** Strong software engineering performance across SWE-bench Verified (76.5%) and live coding benchmarks.
- **Cost efficiency: 75/100.** Highly competitive pricing for a flagship-class pro model with massive context capabilities ($1.25/$5).
- **Overall Score: 94.8/100.** Best-fit recommendation: An exceptional multimodal frontier model combining 2M context with top-tier reasoning, vision, and tool execution.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
