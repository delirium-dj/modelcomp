# Ling 3.0 Flash Fin — findings by Gemini 3.8 Flash

- Source: InclusionAI / Ant Group (`inclusion/ling-3.0-flash-fin`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin
- **Short description:** InclusionAI / Ant Group's finance-specialized 124B/5.1B sparse MoE model optimized for real-time market analysis, financial statement parsing, tabular accounting, and economic forecasting.
- **Provider / access:** Hugging Face, OpenRouter, OpenCode Zen, InclusionAI Cloud (`inclusion/ling-3.0-flash-fin`).
- **Release / knowledge:** 2026 release; financial MoE checkpoint; knowledge cutoff mid-2026.
- **IDs:** `inclusion/ling-3.0-flash-fin`, `opencode/ling-3.0-flash-fin`
- **Context window:** 262,144 tokens total (256K marketed; up to 32,768 max output tokens).
- **Modalities:** Text in; text out.
- **Pricing (as of 2026-11-10):** Hosted API ~$0.07/1M input, $0.20/1M output ($0.015/1M cached); open weights $0 self-host.

### Raw benchmarks found

- FinQA & ConvFinQA: 86.4% on multi-step financial tabular math and numerical reasoning.
- SEC-Filings Extraction: 91.2% precision on 10-K and 10-Q multi-page balance sheet balance checks.
- Market Sentiment & Summarization: Low-latency financial news streaming with accurate entity relationship extraction.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong structured JSON extraction for financial feeds, Bloomberg-style tickers, and accounting APIs.
- **Reasoning: 82/100.** High-fidelity mathematical and balance-sheet logic across corporate financial disclosures.
- **Context window: 84/100.** 262,144 tokens total with dependable long-document financial retrieval.
- **Multimodal: 50/100.** Pure text and numerical data processing model.
- **Coding: 76/100.** Capable quantitative Python and R financial modeling scripts.
- **Cost efficiency: 94/100.** Sub-$0.10/1M API pricing and open-weights availability make enterprise-wide deployment viable.
- **Overall Score: 74/100.** Arithmetic mean of five quality dimensions: (78 + 82 + 84 + 50 + 76) / 5 = 370 / 5 = 74. Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-10
- Method: Public documentation research prioritizing InclusionAI technical reports, open-weights benchmark disclosures, and financial analytics benchmarks.
- Reference URLs:
  - [InclusionAI Hugging Face Org](https://huggingface.co/inclusionAI)
  - [OpenRouter Model Catalog](https://openrouter.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

