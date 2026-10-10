# Gemini 3.1 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.1 Pro (`gemini-3.1-pro`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's high-performance multimodal reasoning model featuring a massive 2M-token context window, superior tool use, and advanced cross-modal ingestion.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.1-pro` (Chat Completions & Responses API).
- **Release / knowledge:** Released February 2026; knowledge cutoff January 2026.
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 2,097,152 tokens total (2M context / 64,000 max output; verified via Google AI documentation).
- **Modalities:** Text input, image input, audio input, video input, PDF ingestion; text output; native tool calling; JSON mode; native multimodal reasoning.
- **Pricing (as of 2026-10-10):** Free tier available; paid tier at standard enterprise rates.
- **Architecture:** Advanced native multimodal Transformer architecture by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **90.2%** <(Google AI technical report, October 2026)>
- Tau3-Banking / Tau2-Bench: **88.5%** <(Google AI evaluation suite)>
- GDPval-AA: **2120 Elo** <(Artificial Analysis performance tracker)>
- GPQA Diamond: **86.0%** <(Google AI model card & benchmark updates)>
- SWE-bench Verified: **76.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **73.0%** <(LiveCodeBench benchmark harness)>
- RULER 2M pass rate: **97.8%** <(Google DeepMind long-context evaluation)>

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong tool integration and robust function calling across multi-step workflows (Terminal-Bench 90.2%).
- **Reasoning: 93/100.** Excellent complex reasoning performance across GPQA Diamond (86.0%) and math/science benchmarks.
- **Context window: 98/100.** Industry-leading 2M context window with 97.8% RULER pass rate on massive document ingestion.
- **Multimodal: 92/100.** Native multimodal architecture handling video, audio, image, and text seamlessly.
- **Coding: 90/100.** Solid coding and software engineering benchmarks (SWE-bench Verified 76.5%).
- **Cost efficiency: 68/100.** Competitive free tier and favorable enterprise pricing relative to capability.
- **Overall Score: 92.8/100.** Best-fit recommendation: The premier 2M-context multimodal reasoning model for massive codebase and video/audio analysis.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Re-verified against Google DeepMind release notes. 2M context window and 97.8% RULER pass rate confirmed across independent evaluations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
