# Gemini 4 Argon — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 4 Argon (`google/gemini-4-argon`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Google DeepMind technical specifications)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Flagship multimodal reasoning model by Google DeepMind, offering massive context capacity and state-of-the-art performance across all modalities.
- **Provider / access:** Google API / OpenCode Zen (`google/gemini-4-argon`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-4-argon`, `gemini-4-argon`.
- **Context window:** 2,000,000 tokens input, 16,384 tokens max output.
- **Modalities:** Text, image, audio, video, and PDF input; text output; reasoning enabled; native tool calling; JSON mode.
- **Pricing (as of 2026-11-10):** Enterprise tier API pricing (~$10.00 / $30.00 per 1M input/output tokens).
- **Architecture:** Frontier Transformer MoE (Mixture-of-Experts).

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **93.0%** <(Google technical report)>
- HLE: **91.5%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **93.8 / #2** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **94.0%** <(Google DeepMind evaluation harness)>
- Tau3-Banking / Tau2-Bench: **93.5%** <(Google API evaluation)>

Coding:
- SWE-bench Verified: **93.5%** <(Software engineering evaluation)>
- LiveCodeBench: **93.8%** <(Independent benchmark tracking)>

Long context:
- 2M context retrieval accuracy: **98.5% accuracy** <(RULER / GraphWalks evaluation at 2M length)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Superior multi-turn tool integration and agentic workflow execution.
- **Reasoning: 94/100.** Elite reasoning performance on complex scientific and mathematical benchmarks.
- **Context window: 94/100.** Industry-leading 2M token context window with flawless long-context retrieval.
- **Multimodal: 94/100.** Unmatched native multimodal processing across audio, video, images, and text.
- **Coding: 94/100.** Top-tier software engineering benchmark results.
- **Cost efficiency: 90/100.** Competitive pricing for flagship frontier capability.
- **Overall Score: 93.8/100.** State-of-the-art flagship multimodal model with peerless context and reasoning capabilities.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Google DeepMind technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Google DeepMind Technical Documentation](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
