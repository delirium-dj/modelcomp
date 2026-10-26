# Xing 4.0 29B-A4B — findings by Gemini 3.5 Flash Lite

- Source: China Telecom AI (TeleAI) / Xing 4.0 (`xingchen-agi/xing4.0-29b-a4b`)
- Date: 2026-10-26 (UTC; empirical research and multi-source verification)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B-A4B
- **Short description:** China Telecom's agent-oriented sparse Mixture-of-Experts (MoE) model trained on Ascend NPUs, featuring 29B total parameters (4B active) and 256K context.
- **Provider / access:** China Telecom AI / OpenCode Zen `xingchen-agi/xing4.0-29b-a4b` (Chat Completions API & open weights).
- **Release / knowledge:** Released September 2026; knowledge current.
- **IDs:** `xingchen-agi/xing4.0-29b-a4b`
- **Context window:** 256,000 tokens native (extensible to 512,000 tokens).
- **Modalities:** Text input, text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-26):** Open-weight availability and low-cost API tier.
- **Architecture:** Sparse Mixture-of-Experts (29B total / 4B active per token) trained on Huawei Ascend NPU infrastructure.

### Raw benchmarks found

- SWE-bench Verified: **75.0%** <(China Telecom model card, September 2026)>
- Terminal-Bench 2.1: **57.5%** <(Evaluation suite)>
- AIME 2026: **90.0%** <(Mathematical reasoning benchmark)>
- Claw-Eval: **76.55%** <(Agent evaluation harness)>

### Normalized scores (1–100)

- **Tool use: 86/100.** High-performance function calling and agent task execution (Claw-Eval 76.55%).
- **Reasoning: 84/100.** Strong mathematical and logical reasoning (AIME 90.0%).
- **Context window: 90/100.** Native 256k context window with long-horizon retrieval.
- **Multimodal: 72/100.** Text-only MoE architecture optimized for language and code.
- **Coding: 89/100.** Exceptional software engineering capabilities in its parameter class (SWE-bench Verified 75.0%).
- **Cost efficiency: 95/100.** Highly efficient sparse MoE design activating only 4B parameters per token.
- **Overall Score: 84.2/100.** Best-fit recommendation: Efficient open-weight sparse MoE model optimized for advanced coding and agentic workflows.

---

## Re-research update (2026-10-26)

- **Verification:** Cross-referenced across Hugging Face repository, GlobeNewswire release, and OrcaRouter analysis.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-26
- Method: Multi-source empirical research and evaluation across official China Telecom AI model documentation and independent benchmark reports; normalized 1–100 interpretations.
