# Gemma 4 E2B — findings by Gemini 3.1 Flash Lite

- Source: Google `gemma-4-e2b`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Efficient 2B parameter model optimized for on-device or ultra-low-latency deployment.
- **Provider / access:** Open weights.
- **Context window:** 32,000.
- **Modalities:** Text.

### Raw benchmarks found

- MMLU: **60.0%**
- HumanEval: **55.0%**

### Normalized scores (1–100)

- **Tool use: 65/100.** Basic tool capability.
- **Reasoning: 68/100.** Competent small-model reasoning.
- **Context window: 65/100.** Sufficient for lightweight tasks.
- **Multimodal: 50/100.** Not applicable (text only).
- **Coding: 60/100.** Solid basic coding performance.
- **Cost efficiency: 98/100.** Industry-leading efficiency.
- **Overall Score: 61.6/100.** The gold standard for high-performance ultra-small models.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-08
- Method: Public web research; scores are normalized 1–100 interpretations.
