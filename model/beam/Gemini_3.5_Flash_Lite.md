# Beam — findings by Gemini 3.5 Flash Lite

- Source: Reflection AI / Beam 1.0 (`reflection/beam-1.0-501b-a23b`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0
- **Short description:** Reflection AI's flagship open-weights Mixture-of-Experts model (501B total / 23B active parameters), featuring a 1-million-token context window and exceptional coding/reasoning capabilities.
- **Provider / access:** Reflection AI / OpenCode Zen `reflection/beam-1.0-501b-a23b` (Chat Completions API & open weights).
- **Release / knowledge:** Released October 2026; knowledge current.
- **IDs:** `reflection/beam-1.0-501b-a23b`
- **Context window:** 1,000,000 tokens total (1M input / max output).
- **Modalities:** Text input, text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Open weights (free self-host in BF16, FP8, NVFP4) and serverless API pricing.
- **Architecture:** Sparse Mixture-of-Experts (501.3B total parameters, 23.4B active per token) with gated GQA and sliding window attention.

### Raw benchmarks found

- SWE-bench Verified: **81.6%** <(Reflection AI model card, October 2026)>
- Terminal-Bench 2.1: **80.1%** <(Agentic coding benchmark)>
- GPQA Diamond: **90.6%** <(Scientific reasoning evaluation)>
- AIME 2026: **97.7%** <(Mathematical reasoning evaluation)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Exceptional agentic tool use and complex task execution (Terminal-Bench 2.1 80.1%).
- **Reasoning: 91/100.** Top-tier scientific and mathematical reasoning (GPQA Diamond 90.6%, AIME 97.7%).
- **Context window: 95/100.** Full 1-million-token context window with robust long-context retrieval.
- **Multimodal: 75/100.** Specialized text architecture with robust text-based instruction following.
- **Coding: 90/100.** Elite software engineering and code generation performance (SWE-bench Verified 81.6%).
- **Cost efficiency: 90/100.** High-efficiency sparse MoE architecture routing only 23B active parameters per token.
- **Overall Score: 87.8/100.** Best-fit recommendation: Premier open-weights MoE model for large-context reasoning and autonomous agentic coding.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Reflection AI official blog, Hugging Face model cards, and independent evaluations (Activepieces, Plotly). Architecture details (501B total / 23B active, 1M context) confirmed.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Reflection AI documentation, independent benchmark leaderboards, and telemetry; normalized 1–100 interpretations.
