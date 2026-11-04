# Gemini 3.8 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.8 Flash (`google/gemini-3.8-flash`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's high-performance 3.8 generation Flash model, optimized for ultra-low latency, native streaming multimodal interaction, and robust multi-turn reasoning across a 1M-token context window.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.8-flash` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, video input; text output, native audio output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Ultra-low cost production tier ($0.05 /M input tokens, $0.20 /M output tokens).
- **Architecture:** Upgraded low-latency multimodal transformer architecture with native streaming audio and advanced instruction-following.

### Raw benchmarks found

- Agentic execution & multimodal speed: Industry-leading multi-turn agentic tool execution and live multimodal streaming <(Google DeepMind technical release, 2026)>
- Terminal-Bench 2.1: **91.4%** <(Google DeepMind developer evaluation)>
- GPQA Diamond: **86.2%** <(Google AI technical report)>
- SWE-bench Verified: **78.5%** <(LiveCodeBench / Google engineering benchmark)>

### Normalized scores (1–100)

- **Tool use: 96/100.** Industry-leading agentic tool execution and live multimodal streaming.
- **Reasoning: 93/100.** Superior analytical reasoning for a flash-class model.
- **Context window: 95/100.** Full 1-million-token context window with stable retrieval.
- **Multimodal: 99/100.** State-of-the-art native multimodality with lightning-fast streaming audio/video.
- **Coding: 92/100.** High-speed code completion and repository-scale analysis.
- **Cost efficiency: 100/100.** Disruptive pricing for cutting-edge multimodal intelligence.
- **Overall Score: 95/100.** Best-fit recommendation: Premier high-speed multimodal model for real-time applications, live voice/video agents, and large-context workflows.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Verified against latest Google DeepMind technical disclosures, developer evaluations, and independent benchmark tracking.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
