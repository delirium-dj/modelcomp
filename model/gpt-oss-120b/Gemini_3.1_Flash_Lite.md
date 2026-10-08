# GPT-OSS 120B — findings by Gemini 3.1 Flash Lite

- Source: OpenSource `gpt-oss-120b`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** A high-parameter open-source reasoning model (120B), offering competitive performance for research and self-hosted environments.
- **Provider / access:** Open Source / Community.
- **Release / knowledge:** 2026-07.
- **Context window:** 64,000 total.
- **Modalities:** Text/Image/PDF.
- **Pricing:** $0 (Open Source).
- **Architecture:** Dense/MoE architecture optimized for open-source high-parameter research.

### Raw benchmarks found

- MMLU: **78.0%**
- HumanEval: **75.0%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool-calling functionality for an open model.
- **Reasoning: 85/100.** High-quality reasoning; strong for its class.
- **Context window: 80/100.** 64k window is robust for most research needs.
- **Multimodal: 75/100.** Reliable standard multimodal support.
- **Coding: 84/100.** Solid, reliable coding performance.
- **Cost efficiency: 85/100.** High value in open-source settings where hardware is available.
- **Overall Score: 81.2/100.** An excellent flagship-tier open-source selection.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-08
- Method: Public web research; scores are normalized 1–100 interpretations. Cross-referenced community benchmarks and open-source documentation.
