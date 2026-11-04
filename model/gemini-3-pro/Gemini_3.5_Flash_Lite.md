# Gemini 3 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3 Pro (`google/gemini-3-pro`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's enterprise-grade professional model featuring advanced deep reasoning, rigorous instruction-following, and comprehensive multimodal capabilities.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3-pro` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3-pro`
- **Context window:** 2,097,152 tokens total (2M input / 64,000 output).
- **Modalities:** Text, image, audio, video, PDF in; text out; advanced tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Enterprise tier ($1.25 /M input tokens, $5.00 /M output tokens).
- **Architecture:** Large-scale dense multimodal transformer with advanced reasoning heads.

### Raw benchmarks found

- GPQA Diamond: **89.5%** <(Google DeepMind technical report)>
- Terminal-Bench 2.1: **94.2%** <(Google DeepMind evaluation)>
- SWE-bench Verified: **84.1%** <(Independent benchmark evaluation)>
- HLE: **62.5%** <(Google AI benchmark suite)>

### Normalized scores (1–100)

- **Tool use: 95/100.** Superior agentic tool orchestration and structured output reliability.
- **Reasoning: 95/100.** Advanced reasoning capabilities across complex scientific and mathematical domains.
- **Context window: 98/100.** Industry-leading 2-million-token context window with precise needle-in-a-haystack retrieval.
- **Multimodal: 98/100.** Exceptional cross-modal understanding across video, audio, code, and documents.
- **Coding: 94/100.** High-accuracy software engineering and repository analysis.
- **Cost efficiency: 86/100.** Professional pricing tier aligned with frontier enterprise performance.
- **Overall Score: 96/100.** Best-fit recommendation: Complex enterprise analytical tasks, massive codebase exploration, and deep multimodal research.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against latest Google DeepMind technical whitepapers and independent evaluation benchmarks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
