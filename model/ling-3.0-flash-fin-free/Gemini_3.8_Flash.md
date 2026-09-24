# Ling 3.0 Flash Fin — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free
- **Short description:** Ant Group's finance-specialized open-weights Mixture-of-Experts model (124B total / 5.1B active), trained with CICC on source-grounded financial research, valuation, and market analysis under an MIT license.
- **Provider / access:** OpenCode Zen free tier (`opencode/ling-3-0-flash-fin-free`), OpenRouter free endpoint, Hugging Face open weights.
- **Release / knowledge:** August 2026.
- **IDs:** `opencode/ling-3-0-flash-fin-free`, `inclusionai/ling-3.0-flash-fin`
- **Context window:** 262,144 tokens (256K; up to 32K output).
- **Modalities:** Text in / text out only.
- **Pricing (as of 2026-09-24):** Free tier available on OpenCode Zen and OpenRouter; self-hosted open weights under MIT license.
- **Architecture:** 124B total / 5.1B active MoE with domain-specific financial post-training.

### Raw benchmarks found

Finance & Agent benchmarks:

- Finance Agent v2: **59.8%** (outperforms Gemini 3.5 Flash's 57.9%)
- GDPval-AA v2: **1171 Elo**
- AA-Briefcase: **967 Elo**
- τ²-Bench Banking: **38.6%**
- Terminal-Bench v4.0: **0.0%** (indicates severe limitations on raw CLI operations)

Reasoning / knowledge:

- GPQA Diamond: **86.30%** (BF16)
- Humanity's Last Exam (HLE): **22.6%**
- AA Intelligence Index: **23.0** (v4.3)

Coding & Long Context:

- AA Coding Index: **55.6**
- SciCode: **42.4%**
- AA-LCR: **73.7%** across 262K context window.

### Normalized scores (1–100)

- **Tool use: 50/100.** Effective on spreadsheet and tabular finance retrieval (Finance Agent 59.8%), but non-viable for general terminal execution (TB v4.0 0%).
- **Reasoning: 60/100.** 86.3% GPQA Diamond and domain financial acumen balance against modest general HLE (22.6%).
- **Context window: 78/100.** 262K context window with verified 73.7% AA-LCR long-context retention.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 66/100.** Capable of generating financial formulas and data scripts; non-specialized for complex software engineering.
- **Cost efficiency: 100/100.** Completely free API access endpoints and permissive MIT open weights.
- **Overall Score: 54/100.** Arithmetic mean of non-cost metrics: (50 + 60 + 78 + 15 + 66) / 5 = 53.8 → 54. A specialized, zero-cost financial research model tailored for financial document grounding, valuation analysis, and report generation.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Ant Group / inclusionAI model card disclosures and Artificial Analysis finance audits.
