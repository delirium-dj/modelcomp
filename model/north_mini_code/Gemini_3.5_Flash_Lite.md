# North Mini Code — findings by Gemini 3.5 Flash Lite

- Source: Cohere / North Mini Code (`cohere/north-mini-code`)
- Date: 2026-10-27 (UTC; empirical research and multi-source verification)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's first agentic coding model (North family), featuring a sparse Mixture-of-Experts (30B total / 3B active) and 256K context.
- **Provider / access:** Cohere / OpenCode Zen `cohere/north-mini-code` (Chat Completions API & open weights).
- **Release / knowledge:** Released June 2026; knowledge current.
- **IDs:** `cohere/north-mini-code`, `CohereLabs/North-Mini-Code-1.0`
- **Context window:** 256,000 tokens total (256k input / 64,000 output).
- **Modalities:** Text input, text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Open weights and low-cost API tier.
- **Architecture:** Sparse Mixture-of-Experts (30B total parameters, 3B active per token) optimized for agentic software engineering.

### Raw benchmarks found

- SWE-bench Verified: **67.6%** <(Cohere technical report, June 2026)>
- Terminal-Bench v2: **36.0%** <(Terminal-Bench evaluation suite)>
- Tau2-Bench Telecom: **37.4%** <(Conversational AI benchmark)>
- GPQA Diamond: **75.7%** <(Scientific reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 75/100.** Effective terminal use and function calling for agentic workflows (Terminal-Bench v2 36.0%).
- **Reasoning: 72/100.** Solid reasoning across technical domains (GPQA Diamond 75.7%).
- **Context window: 88/100.** 256k context window with support for repository-scale understanding.
- **Multimodal: 60/100.** Text-only architecture specialized for coding and text tasks.
- **Coding: 83/100.** High-performance software engineering and agentic coding (SWE-bench Verified 67.6%).
- **Cost efficiency: 95/100.** Extremely efficient sparse MoE design activating only 3B parameters per token.
- **Overall Score: 75.6/100.** Best-fit recommendation: Efficient open-weights coding model optimized for repository-level developer tasks.

---

## Re-research update (2026-10-27)

- **Verification:** Cross-referenced across Cohere official blog, Hugging Face repository, and Artificial Analysis benchmark indices.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27
- Method: Multi-source empirical research and evaluation across Cohere technical announcements and independent coding benchmark leaderboards; normalized 1–100 interpretations.
