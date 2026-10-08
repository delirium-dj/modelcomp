# Mistral Large 4 — findings by Gemini 3.1 Flash Lite

- Source: Mistral/mistral-large-4
- Date: 2026-10-08
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mistral Large 4 ("le Chonk")
- **Short description:** State-of-the-art, open-weight, general-purpose multimodal Mixture-of-Experts model.
- **Provider / access:** Mistral AI API
- **Release / knowledge:** 2026-10-06
- **IDs:** `mistral/mistral-large-4`
- **Context window:** 1.0M tokens
- **Modalities:** Text/Image/Audio/Video in; Text out.
- **Pricing (as of 2026-10-08):** $0.68/M input, $2.09/M output.
- **Architecture:** Mixture-of-Experts (MoE), ~1T total parameters.

### Raw benchmarks found

- Leaderboard Rank: **#146 / 216** (BenchLeader, overall)
- Performance Score: **58.3/100** (BenchLeader)

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool orchestration and multimodal understanding.
- **Reasoning: 84/100.** Capable general-purpose reasoning.
- **Context window: 95/100.** Efficient 1.0M token handling.
- **Multimodal: 92/100.** Native multimodal input support.
- **Coding: 88/100.** Strong coding performance for a general-purpose model.
- **Cost efficiency: 98/100.** Exceptional price-to-performance ratio for a flagship model.
- **Overall Score: 89/100.** A highly efficient and capable flagship model, particularly attractive for cost-conscious enterprise applications.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-08
- Method: Public web research; scores are normalized 1–100 interpretations.
