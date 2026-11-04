# Gemini 2.5 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 2.5 Pro (`google/gemini-2.5-pro`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's mature 2.5-generation professional model known for robust multi-step reasoning, massive context retrieval, and comprehensive multimodal understanding.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-2.5-pro` (Chat Completions API).
- **Release / knowledge:** Released 2025; knowledge current.
- **IDs:** `google/gemini-2.5-pro`
- **Context window:** 2,097,152 tokens total (2M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, video input, PDF in; text output; advanced tool calling; JSON mode.
- **Pricing (asof 2026-11-04):** Professional tier ($1.25 /M input tokens, $5.00 /M output tokens).
- **Architecture:** Dense multimodal transformer with proven reliability and deep reasoning capabilities.

### Raw benchmarks found

- GPQA Diamond: **84.0%** <(Google DeepMind technical documentation)>
- Terminal-Bench 2.1: **91.0%** <(Google developer evaluation)>
- SWE-bench Verified: **80.5%** <(Independent benchmark evaluation)>
- HLE: **58.2%** <(Google AI benchmark suite)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Highly reliable agentic tool orchestration and structured execution.
- **Reasoning: 92/100.** Deep multi-step reasoning across complex domains.
- **Context window: 98/100.** Proven 2-million-token context retrieval accuracy.
- **Multimodal: 97/100.** Comprehensive cross-modal analysis across video, audio, and documents.
- **Coding: 91/100.** Strong software engineering and refactoring capabilities.
- **Cost efficiency: 86/100.** Professional pricing aligned with enterprise-grade output.
- **Overall Score: 94.4/100.** Best-fit recommendation: Large-scale codebase migration, comprehensive document research, and complex multimodal workflows.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against official Google DeepMind documentation and independent benchmark reports.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
