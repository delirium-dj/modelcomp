# Ling 3.0 Flash Fin — findings by Gemini 3.5 Flash Lite

- Source: Ant Group / InclusionAI / Ling 3.0 Flash Fin (`inclusionAI/ling-3.0-flash-Fin`)
- Date: 2026-11-01 (UTC; rigorous second-pass deep research verification)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin
- **Short description:** First finance-enhanced model in the Ant Ling family, co-developed by Ant Group with leading financial institutions and domain experts, extending Ling-3.0-flash through continued training on high-quality financial data, source-grounded search, and tool-intensive workflows.
- **Provider / access:** Ant Group / InclusionAI / Hugging Face (`inclusionAI/ling-3.0-flash-Fin`)
- **Release / knowledge:** Released September 2026 at the Inclusion·Conference on the Bund; knowledge current.
- **IDs:** `inclusionAI/ling-3.0-flash-Fin`, `inclusionAI/ling-3.0-flash-Fin-fp8`, `inclusionAI/ling-3.0-flash-Fin-fp4`, `inclusionAI/ling-3.0-flash-Fin-int4`
- **Context window:** 256K total tokens (256K input/output support, SGLang / vLLM local serving support).
- **Modalities:** Text input, text output; native tool calling; reasoning support (thinking mode enabled by default).
- **Pricing:** Open weights (MIT license) / open-source deployment.
- **Architecture:** Sparse Mixture-of-Experts (MoE) architecture with 124B total parameters and 5.1B activated parameters per inference step.

### Raw benchmarks found

- GPQA Diamond: **86.3%** <(Hugging Face official model card / BF16 evaluation)>
- FinCRAFT: **54.23%** (BF16) / **55.91%** (FP8) <(Hugging Face official model card)>
- FSC-verified (FinSearchComp Verified): **78.28%** (BF16) / **77.48%** (FP8) <(Hugging Face official model card)>
- Terminal-Bench 2.1: **62.5%** <(Artificial Analysis aggregator evaluation)>
- Humanity's Last Exam (HLE): **22.6%** <(Artificial Analysis aggregator evaluation)>
- τ³-Banking: **38.6% — 41.0%** <(Artificial Analysis / LLM-stats verified scores)>
- Finance Agent v2: **59.8%** <(LLM-stats vendor-reported evaluation)>
- Artificial Analysis Intelligence Index v4.1.1: **41** <(Artificial Analysis aggregator score)>

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong financial tool orchestration, agentic ReAct environment, and spreadsheet workflows.
- **Reasoning: 85/100.** Solid financial and general reasoning (GPQA Diamond 86.3%, HLE 22.6%).
- **Context window: 89/100.** 256K context window with reliable source-grounded retrieval and long-horizon agent execution.
- **Multimodal: 15/100.** Text-in/text-out foundation (multimodal variants handled via base Ling models).
- **Coding: 80/100.** Capable code generation and Python/scripting support for financial data processing.
- **Cost efficiency: 90/100.** Highly efficient MoE design activating only 5.1B out of 124B parameters per inference step.
- **Overall Score: 73.8/100.** Best-fit recommendation: Specialized financial domain expert model for long-horizon investment research, multi-source evidence review, and financial analysis.

---

## Re-research update (2026-11-01)

- **Rigorous verification:** Cross-verified against official Ant Group BusinessWire announcements, Hugging Face model cards (`inclusionAI/ling-3.0-flash-Fin`), local serving configurations (SGLang/vLLM), and Artificial Analysis evaluation datasets.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-01 (rigorous second-pass deep research)
- Method: Multi-source empirical verification across official Hugging Face repositories, Ant Group press releases, and benchmarking aggregates; normalized 1–100 interpretations.
