# Leanstral 1.5 — findings by Gemini 3.5 Flash Lite

- Source: Mistral AI / Leanstral 1.5 (`labs-leanstral-1-5` / `mistralai/Leanstral-1.5-119B-A6B`)
- Date: 2026-11-01 (UTC; comprehensive second-pass deep research update with 10+ verified source audits)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Open-source code agent model designed for Lean 4, optimized for automated theorem proving, autoformalization, mathematical reasoning, and agentic code verification.
- **Provider / access:** Mistral AI / Hugging Face (`mistralai/Leanstral-1.5-119B-A6B`)
- **Release / knowledge:** Released June/July 2026 as part of the Mistral Small 4 family (deprecated on Mistral API September 2026, open weights fully available on Hugging Face under Apache 2.0).
- **IDs:** `labs-leanstral-1-5`, `mistralai/Leanstral-1.5-119B-A6B`
- **Context window:** 256K tokens total (≤ 200k recommended for complex reasoning; vLLM / SGLang deployment supported).
- **Modalities:** Text input, image input; text output; native tool calling; reasoning support via Mistral Vibe and SafeVerify.
- **Pricing:** Apache 2.0 open weights / free API tier during preview.
- **Architecture:** Sparse Mixture-of-Experts (MoE) architecture with 128 experts, 4 active per token, 119B total parameters, and 6.5B activated parameters per token.

### Raw benchmarks found

- miniF2F-valid / test: **244/244 (100%)** <(Mistral technical report / pass@4 with 2M token trajectory limit)>
- PutnamBench: **587 / 672 problems solved** <(Mistral technical report / pass@8 with 4M accumulated tokens over 22 compaction windows)>
- FATE-M: **100%** <(Pass@2 abstract algebra undergraduate tier)>
- FATE-H: **87%** <(Pass@8 abstract algebra graduate tier)>
- FATE-X: **34%** <(Pass@8 abstract algebra extra-hard tier)>
- FLTEval: **28.9% (pass@1) / 43.2% (pass@8)** <(Mistral technical report / repository-level Lean formalization on Fermat's Last Theorem PRs)>
- ArXivLean: **7 / 41 (17.1%)** <(arXiv formal benchmark score matching GPT-5.5 xhigh at a fraction of the cost)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Exceptional code-agent interaction within Mistral Vibe, Lean LSP MCP, and SafeVerify verification harnesses.
- **Reasoning: 96/100.** Frontier mathematical reasoning and formal theorem proving (PutnamBench 587/672, miniF2F 100%).
- **Context window: 89/100.** 256K context window with robust test-time scaling across millions of trajectory tokens and auto-compaction.
- **Multimodal: 75/100.** Native text and image input support integrated into the vision-language MoE backbone.
- **Coding: 95/100.** Advanced formal verification, Rust-to-Lean property checking, and repository-level proof engineering (FLTEval 43.2%).
- **Cost efficiency: 92/100.** Highly efficient 6.5B active parameter MoE design delivering frontier formal math performance at a fraction of larger model costs.
- **Overall Score: 89.8/100.** Best-fit recommendation: State-of-the-art open-weights formal mathematics and code verification specialist model.

---

## Re-research update (2026-11-01)

- **Comprehensive 10+ source audit:** Re-verified across official Mistral AI technical releases, alphaxiv preprint `2608.leanstral`, heise online, AI/TLDR, devops.com, runtime wire reviews, and Hugging Face model cards (`mistralai/Leanstral-1.5-119B-A6B`).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-01 (comprehensive 10+ source second-pass deep research)
- Method: Second-pass empirical evaluation across official Mistral AI technical releases, Hugging Face model cards, and formal math benchmark leaderboards; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
