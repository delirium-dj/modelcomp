# Xiaomi MiMo-V2.5-Pro — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro
- **Short description:** Xiaomi's flagship open-weights Mixture-of-Experts model (1.02T total / 42B active) built for long-horizon agentic execution, complex SWE workflows, and deep 1M context coherence under an MIT license.
- **Provider / access:** Xiaomi API Platform (`mimo-v2.5-pro`), OpenRouter, Novita, Hugging Face open weights.
- **Release / knowledge:** April 2026.
- **IDs:** `xiaomi/mimo-v2-5-pro`, `mimo-v2.5-pro`
- **Context window:** 1,048,576 tokens (1M chat tokens; up to 128K output).
- **Modalities:** Text in / text out only (Pro text-focused edition).
- **Pricing (as of 2026-09-24):** ~$0.44 / 1M input tokens, ~$0.87 / 1M output tokens (deep cache discount).
- **Architecture:** 1.02T parameter MoE (42B active) with hybrid Local SWA and Global Attention, MIT license.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **94.2%**
- IFBench: **79.9%**
- Terminal-Bench Hard: **43.2%** (TB 2.0: **68.4%**)
- Claw-Eval: **64.0% Pass³**
- GDPval-AA: **1,261 Elo**

Reasoning / knowledge:

- GPQA Diamond: **86.6%**
- Humanity's Last Exam (HLE): **33.8%–35.7%** (up to 48.0% w/ tools)
- AA Long-Context Reasoning (LCR): **77.7%**
- MMLU-Pro: **85.1**
- AA Intelligence Index: **26** (v4.3)

Coding:

- SWE-bench Verified: **78.9%**
- SWE-bench Pro: **57.2%**
- SciCode: **50.2%**
- AA Coding Index: **60.2**

Long context:

- GraphWalks @ 512K: BFS **0.56**, Parents **0.92**; @ 1M: BFS **0.37**, Parents **0.62**.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau2-Bench at 94.2% and IFBench at 79.9% substantiate robust multi-turn agent tool execution.
- **Reasoning: 78/100.** 86.6% on GPQA Diamond and 35.7% on HLE demonstrate strong, disciplined open-weights reasoning.
- **Context window: 95/100.** Exceptional 1M context with verified GraphWalks multi-hop retention across 512K and 1M tokens.
- **Multimodal: 15/100.** Text-only input and output on the Pro variant.
- **Coding: 82/100.** 78.9% on SWE-bench Verified and 57.2% on SWE-bench Pro represent top-tier open-weights coding capability.
- **Cost efficiency: 86/100.** Extremely affordable at ~$0.44 / $0.87 per 1M tokens with generous caching discounts and open-weights availability.
- **Overall Score: 70/100.** Arithmetic mean of non-cost metrics: (80 + 78 + 95 + 15 + 82) / 5 = 70.0. A formidable open-weights model for long-context text processing and software engineering.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Xiaomi MiMo model disclosures and independent leaderboard audits.
