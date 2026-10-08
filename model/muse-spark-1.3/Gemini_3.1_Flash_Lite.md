# Muse Spark 1.3 — findings by Gemini 3.1 Flash Lite

- Source: Meta/muse-spark-1.3
- Date: 2026-10-08
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's latest reasoning model for agentic workflows, long-context retrieval, and coding.
- **Provider / access:** Meta API (`muse-spark-1.3`)
- **Release / knowledge:** 2026-09-02
- **IDs:** `meta/muse-spark-1.3`
- **Context window:** 1.0M tokens (verified by Meta docs)
- **Modalities:** Text/Image/Audio/Video/PDF in; Text out. Tool calls, JSON mode.
- **Pricing (as of 2026-10-08):** $1.25/M input, $0.150/M cached input, $4.25/M output.
- **Architecture:** Proprietary (MoE expected based on capabilities).

### Raw benchmarks found

- Terminal-Bench 2.1: **94.2%** (BenchLeader)
- Toolathon: **93.8%** (BenchLeader)
- GPQA Diamond: **88.9%** (BenchLeader)
- SWE-bench Verified: **85.1%** (BenchLeader)
- Artificial Analysis Intelligence Index: **91.2** (Rank #5)

### Normalized scores (1–100)

- **Tool use: 95/100.** Strong agentic capabilities, optimized for tool-use and multi-step tasks.
- **Reasoning: 94/100.** High scores on complex reasoning tasks like GPQA.
- **Context window: 95/100.** Large 1.0M token window supports long-context retrieval.
- **Multimodal: 95/100.** Wide input support (text/image/audio/video/PDF).
- **Coding: 92/100.** Improved over 1.2, strong performance on SWE-bench.
- **Cost efficiency: 85/100.** Competitive pricing for the capabilities offered.
- **Overall Score: 94/100.** Highly capable agentic model, recommended for complex automation.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-10-08
- Method: Public web research; scores are normalized 1–100 interpretations.
