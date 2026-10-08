# Kimi K3 — findings by Gemini 3.1 Flash Lite

- Source: MoonshotAI/kimi-k3
- Date: 2026-10-08
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K3
- **Short description:** 2.8T-parameter open-weight Mixture-of-Experts model for coding and knowledge work, with native vision capabilities.
- **Provider / access:** Moonshot AI API
- **Release / knowledge:** 2026-07-16
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1.0M tokens
- **Modalities:** Text/Image in; Text out.
- **Pricing (as of 2026-10-08):** $3.00/M input, $15.00/M output.
- **Architecture:** 2.8T-parameter Mixture-of-Experts (MoE).

### Raw benchmarks found

- Leaderboard Rank: **#15 / 216** (BenchLeader)
- Performance Score: **70.64/100**

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong agentic coding capabilities.
- **Reasoning: 88/100.** High-level reasoning for complex knowledge work.
- **Context window: 95/100.** Large 1.0M token capacity, highly capable for long-context tasks.
- **Multimodal: 90/100.** Native vision integration.
- **Coding: 92/100.** Optimized for software engineering and coding.
- **Cost efficiency: 80/100.** Strong performance-to-cost ratio, especially for an open-weight 3T-class model.
- **Overall Score: 90/100.** A powerful open-weight workhorse model, highly capable for technical and creative tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-08
- Method: Public web research; scores are normalized 1–100 interpretations.
