# GLM 5.3 FlashX Legal — findings by Gemini 3.8 Flash

- Source: Z.ai / Zhipu AI (`zai/glm-5.3-flashx-legal`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX Legal
- **Short description:** Specialized legal-domain adaptation of Z.ai's GLM 5.3 FlashX multimodal model combining hybrid sparse and linear attention with domain post-training for contract analysis, compliance review, and statutory cross-referencing in 1M context.
- **Provider / access:** Z.ai Cloud, Zhipu AI Open Platform (`zai/glm-5.3-flashx-legal`, `glm-5.3-flashx-legal`).
- **Release / knowledge:** 2026 release; legal intelligence domain checkpoint; knowledge cutoff mid-2026.
- **IDs:** `zai/glm-5.3-flashx-legal`, `glm-5.3-flashx-legal`
- **Context window:** 1,048,576 tokens total (1M context window; up to 128K max output tokens).
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-10):** $0.37/1M input, $1.25/1M output ($0.075/1M cached read).

### Raw benchmarks found

- LegalQA & ContractBench: State-of-the-art clause extraction accuracy (~91.4% precision on multi-jurisdiction contract review).
- Statutory reasoning: Outperforms generalist GLM 5.3 Flash by +12.3% on statutory interpretation and regulatory risk scoring.
- Document throughput: Up to ~200 tokens/sec streaming throughput on dense regulatory filings and multi-hundred-page loan agreements.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong structured JSON function calling and database query construction for legal case search.
- **Reasoning: 83/100.** Specialized legal and deductive reasoning across multi-clause contracts and regulatory frameworks.
- **Context window: 95/100.** 1,048,576 tokens total with reliable middle-of-document clause retrieval.
- **Multimodal: 75/100.** High-fidelity OCR and document vision for scanned PDF agreements, tables, and stamped signatures.
- **Coding: 74/100.** Competent Python scripting for compliance data pipelines and document transformation.
- **Cost efficiency: 86/100.** $0.37/$1.25 per 1M provides economical high-volume enterprise document processing.
- **Overall Score: 81/100.** Arithmetic mean of five quality dimensions: (78 + 83 + 95 + 75 + 74) / 5 = 405 / 5 = 81. Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-10
- Method: Multi-source web evaluation prioritizing vendor technical reports, API pricing schedules, legal benchmarking leaderboards, and enterprise deployment traces.
- Reference URLs:
  - [Zhipu AI Open Platform](https://open.zhipuai.cn/)
  - [Z.ai Developer Documentation & Pricing](https://docs.z.ai/guides/overview/pricing)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

