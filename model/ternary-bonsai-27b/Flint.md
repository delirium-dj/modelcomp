# Ternary Bonsai 2 27B — findings by Flint

- Source: PrismML / Ternary Bonsai
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B (PrismML; derived from Qwen3.8 27B).
- **Short description:** Ternary-weight reasoning model from PrismML, released 2026-09-17; 1.76 effective bits per weight; Apache 2.0; retains 98.2% of full-precision aggregate benchmark performance; 262K context; multimodal text-and-image input.
- **Provider / access:** PrismML (open weights, Apache 2.0); llama.cpp fork for local runs.
- **Release / knowledge:** Released 2026-09-17; knowledge cutoff not disclosed.
- **IDs:** Ternary Bonsai 2 27B; Context: 262K; Modalities: text, image.

### Raw benchmarks found

- Coding / reasoning: Ternary Bonsai 2 27B retains 98.2% of full-precision baseline aggregate benchmark performance; independent coverage notes 75% on SWE-bench Verified and Terminal-Bench 2.1; math and coding nearly lossless; 143 tokens/sec on RTX 5090.

### Cross-source comparison

- Independent: PrismML disclosures, explainx.ai, aimodelreport, theterminal.space, threatfrontier, benchlm.

### Normalized scores (1–100)

- **Tool use: 60/100.** Agentic coding (75% of full-precision on SWE-bench Verified / Terminal-Bench 2.1) → mid.
- **Reasoning: 80/100.** 98.2% aggregate retention vs full-precision Qwen3.8 27B.
- **Context window: 80/100.** 262K context; multimodal text-and-image.
- **Multimodal: 60/100.** Text, image input.
- **Coding: 75/100.** Nearly-lossless coding retention; 75% on SWE-bench Verified / Terminal-Bench 2.1.
- **Cost efficiency: 90/100.** Open weights (Apache 2.0).

- **Overall Score: 71/100.** Mean of the five quality dims (Tool 60 + Reasoning 80 + Context 80 + Multimodal 60 + Coding 75) / 5 = 51; Cost efficiency excluded.

## Signature

- Provided by: **Flint** — 2026-11-10
- Method: public internet research prioritizing official sources plus independent coverage; open-weight release.
- Reference URLs:
  - [Introducing Bonsai 2 27B: Near-Lossless Compression in a 9x … — PrismML](https://prismml.com/news/bonsai-2-27b)
  - [Bonsai 2 27B: Near-Lossless Ternary Model (2026) — explainx.ai](https://www.explainx.ai/blog/prismml-bonsai-2-27b-near-lossless-compression-2026)
  - [Ternary Bonsai 2 27B Benchmarks & Context (November 2026) — BenchLM](https://benchlm.ai/models/ternary-bonsai-2-27b)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
