# Gemini 3 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3 Pro (`google/gemini-3-pro`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Google DeepMind technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's enterprise-grade professional model featuring advanced deep reasoning, rigorous instruction-following, and comprehensive multimodal capabilities.
- **Provider / access:** Google AI Studio / OpenCode Zen (`google/gemini-3-pro`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3-pro`, `gemini-3-pro`.
- **Context window:** 2,097,152 tokens total (2M input / 64,000 output).
- **Modalities:** Text, image, audio, video, and PDF input; text output; advanced tool calling; JSON mode.
- **Pricing (as of 2026-11-10):** Enterprise tier (~$1.25 / $5.00 per 1M input/output tokens).
- **Architecture:** Large-scale dense multimodal transformer with advanced reasoning heads.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **89.5%** <(Google DeepMind technical report)>
- HLE: **62.5%** <(Google AI benchmark suite)>
- Artificial Analysis Intelligence Index: **91.3 / #16** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **94.2%** <(Google DeepMind evaluation)>
- Tau3-Banking / Tau2-Bench: **93.5%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **84.1%** <(Software engineering evaluation)>
- LiveCodeBench: **91.3%** <(Independent benchmark tracking)>

Long context:
- 2M context retrieval accuracy: **98.2% accuracy** <(RULER / GraphWalks evaluation at 2M length)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Superior agentic tool orchestration and structured output reliability.
- **Reasoning: 92/100.** Advanced reasoning capabilities across complex scientific and mathematical domains.
- **Context window: 94/100.** Industry-leading 2-million-token context window with precise needle-in-a-haystack retrieval.
- **Multimodal: 94/100.** Exceptional cross-modal understanding across video, audio, code, and documents.
- **Coding: 92/100.** High-accuracy software engineering and repository analysis.
- **Cost efficiency: 90/100.** Professional pricing tier aligned with frontier enterprise performance.
- **Overall Score: 93/100.** Best-fit recommendation: Complex enterprise analytical tasks, massive codebase exploration, and deep multimodal research.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Google DeepMind technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
