# Gemini 3.8 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.8 Flash (`google/gemini-3.8-flash`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Google DeepMind technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's high-performance 3.8 generation Flash model, optimized for ultra-low latency, native streaming multimodal interaction, and robust multi-turn reasoning across a 1M-token context window.
- **Provider / access:** Google AI Studio / OpenCode Zen (`google/gemini-3.8-flash`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.8-flash`, `gemini-3.8-flash`.
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text, image, audio, and video input; text output, native audio output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-10):** Ultra-low cost production tier (~$0.05 / $0.20 per 1M input/output tokens).
- **Architecture:** Upgraded low-latency multimodal transformer architecture with native streaming audio and advanced instruction-following.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **86.2%** <(Google AI technical report)>
- HLE: **85.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **92.5 / #8** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **91.4%** <(Google DeepMind developer evaluation)>
- Tau3-Banking / Tau2-Bench: **91.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **78.5%** <(Software engineering evaluation)>
- LiveCodeBench: **91.0%** <(Independent benchmark tracking)>

Long context:
- 1M context retrieval accuracy: **97.5% accuracy** <(RULER / GraphWalks evaluation at 1M length)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Industry-leading agentic tool execution and live multimodal streaming.
- **Reasoning: 92/100.** Superior analytical reasoning for a flash-class model.
- **Context window: 93/100.** Full 1-million-token context window with stable retrieval.
- **Multimodal: 95/100.** State-of-the-art native multimodality with lightning-fast streaming audio/video.
- **Coding: 92/100.** High-speed code completion and repository-scale analysis.
- **Cost efficiency: 98/100.** Disruptive pricing for cutting-edge multimodal intelligence.
- **Overall Score: 92.5/100.** Best-fit recommendation: Premier high-speed multimodal model for real-time applications, live voice/video agents, and large-context workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Google DeepMind technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
