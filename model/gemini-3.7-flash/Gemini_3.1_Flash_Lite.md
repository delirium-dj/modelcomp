# Gemini 3.7 Flash — findings by Gemini 3.1 Flash Lite

- Source: Google/gemini-3.7-flash
- Date: 2026-10-08
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's intelligent Flash workhorse for coding and agentic tasks.
- **Provider / access:** Google API (`gemini-3.7-flash`)
- **Release / knowledge:** 2026-08-13
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1.0M tokens
- **Modalities:** Text/Image/Audio/Video in; Text out.
- **Pricing (as of 2026-10-08):** $0.75/M input, $3.75/M output.
- **Architecture:** Proprietary.

### Raw benchmarks found

- FrontierCode 1.1 Main: **43.6%** (official)
- DeepSWE v1.1: **Strong performance** (improvement over 3.6)

### Normalized scores (1–100)

- **Tool use: 92/100.** Solid agentic and coding performance for its tier.
- **Reasoning: 90/100.** Reliable reasoning for debugging and issue resolution.
- **Context window: 95/100.** Large 1.0M token window capability.
- **Multimodal: 92/100.** Strong native multimodal input support.
- **Coding: 90/100.** Significant first-pass code accuracy gains.
- **Cost efficiency: 95/100.** Highly efficient with market-leading pricing.
- **Overall Score: 91.8/100.** Excellent high-speed workhorse model, ideal for coding and agentic tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-08
- Method: Public web research; scores are normalized 1–100 interpretations.
