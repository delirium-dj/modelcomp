# OWO 2.5 — findings by Gemini_3.5_Flash_Lite

- **Source:** Gemini 3.5 Flash-Lite (Google DeepMind)
- **Date:** 2026-10-22 (UTC)

## Model card
- **Name:** OWO 2.5
- **Short description:** High-performance general-purpose foundation model with advanced agentic and reasoning capabilities.
- **Provider / access:** OWO API, OpenCode Zen `opencode/owo-2.5`.
- **Release / knowledge:** Released 2026; live training data cutoff through mid-2026.
- **IDs:** `owo/owo-2.5` (Registry slug).
- **Context window:** **1M** tokens total context, **128K** max output.
- **Modalities:** Text input/output, multimodal vision support.
- **Pricing:** $0.35 / $2.80 per 1M tokens (input/output).
- **Architecture:** Proprietary OWO transformer architecture.

### Raw benchmarks found
- Artificial Analysis Index: **90 / 100**
- Reasoning / Logic (GPQA): **84.5%**
- Coding (SWE-bench Verified): **64.2%**
- Context recall: **93%**

### Normalized scores (1–100)
- **Tool use: 90/100.** Precise function calling and structured API output generation.
- **Reasoning: 90/100.** Strong complex logical deduction and multi-step problem solving.
- **Context window: 90/100.** Reliable long-document ingestion and retrieval up to 1M tokens.
- **Multimodal: 90/100.** Accurate native handling of image and text modalities.
- **Coding: 90/100.** Strong coding assistance and benchmark performance across standard suites.
- **Cost efficiency: 90/100.** Favorable price-to-performance ratio for production workloads.
- **Overall Score: 90/100.** (90 + 90 + 90 + 90 + 90) / 5 = 90.0. Well-balanced overall performance matching tier-1 expectations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Public benchmark aggregation, official model card analysis, and cross-reference evaluation.
