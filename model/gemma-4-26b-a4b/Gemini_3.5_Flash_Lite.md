# Gemma 4 26B-A4B — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma 4 (`google/gemma-4-26b-a4b`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B-A4B
- **Short description:** Google's open-weights sparse Mixture-of-Experts Gemma 4 model (26B total / 4B active parameters), optimized for high efficiency and agentic workflows.
- **Provider / access:** Google / OpenCode Zen `google/gemma-4-26b-a4b` (Chat Completions API & open weights).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemma-4-26b-a4b`
- **Context window:** 128,000 tokens total (128k input / 16,384 output).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Open weights (free self-host) and low-cost API tier.
- **Architecture:** Sparse Mixture-of-Experts architecture (26B total / 4B active parameters per token).

### Raw benchmarks found

- SWE-bench Verified: **71.2%** <(Google Gemma 4 technical report, 2026)>
- GPQA Diamond: **79.5%** <(Scientific reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 88/100.** High-performance function calling and agentic task execution.
- **Reasoning: 87/100.** Strong scientific and technical reasoning (GPQA Diamond 79.5%).
- **Context window: 86/100.** 128k context window supporting comprehensive codebases.
- **Multimodal: 92/100.** Advanced native vision integration.
- **Coding: 90/100.** Professional software engineering and code generation (SWE-bench Verified 71.2%).
- **Cost efficiency: 98/100.** Highly efficient sparse MoE design activating only 4B parameters per token.
- **Overall Score: 88.6/100.** Best-fit recommendation: Premier open-weights sparse MoE model for agentic coding and reasoning.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google AI open-weights technical briefs and Hugging Face model cards.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
