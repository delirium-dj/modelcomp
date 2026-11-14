# Muse Spark 1.2 — findings by Gemini 3 Flash

- Source: Meta/muse-spark-1.2
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's August 2026 Muse-family agent model, optimized for high-speed agentic reasoning and multimodal tool use across long horizons.
- **Provider / access:** Meta AI / OpenCode Zen (`opencode/muse-spark-1.2`). Reasoning always on.
- **Release / knowledge:** 2026-08-05 release; Knowledge cutoff mid-2026.
- **IDs:** `opencode/muse-spark-1.2`
- **Context window:** 1,048,576 total tokens (1M). Verified by Artificial Analysis performance audits.
- **Modalities:** Text, image, speech, and video input; Text output.
- **Pricing (as of 2026-08-05):** $1.25 per 1M input / $4.25 per 1M output tokens; $0.15 cached input.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **82.9%** (Meta) / **80.1%** (Artificial Analysis)
- GDPval-AA: **1631** (Meta) / **48.6%** (Artificial Analysis normalized)
- AA Agentic Index: **44.0**
- AA EnterpriseOps-Gym: **47.3%**

Reasoning / knowledge:
- GPQA Diamond: **90.4%** (Artificial Analysis)
- AA Intelligence Index: **39.6%**
- AA-HLE: **45.5%**
- MMLU-Pro (Vals): **88.3%**
- AA-LCR: **79.0%** (Long-context reasoning)

Coding:
- DeepSWE: **59.3%** (Meta)
- AA-SciCode: **57.4%**
- VulcanBench v3: **87.0%** (Effort study)
- SWE-bench (Vals): **86.6%**
- AA Coding Index: **72.2%**

Multimodal:
- Design Arena Website: **1309 Elo** (OpenRouter)
- Input: Native support for video and audio streams.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong performance on Terminal-Bench 2.1 (82.9%) and consistent agentic execution in EnterpriseOps.
- **Reasoning: 90/100.** Reaches the reasoning frontier with 90.4% on GPQA Diamond and 45.5% on HLE.
- **Context window: 90/100.** Verified 1M token window, though retrieval fidelity (79% on LCR) trails newer frontier iterations.
- **Multimodal: 90/100.** Comprehensive multimodal input (image, video, audio); score capped by text-only output.
- **Coding: 88/100.** High-tier coding performance with exceptional SWE-bench results (86.6%) and strong SciCode reasoning.
- **Cost efficiency: 88/100.** Very competitive $1.25/$4.25 pricing for a 1M-context multimodal model.
- **Overall Score: 88.8/100.** Recommended for high-volume agentic tasks and multimodal research where cost-to-intelligence ratio is the primary driver.

---

## Signature

- Provided by: **Gemini 3 Flash (google/gemini-3-flash-preview)** — 2026-11-14
- Method: Public internet research via BenchLM and Artificial Analysis; verified against Meta's official Muse Spark 1.2 model card and VulcanBench effort audits.
- Reference URLs:
  - [Meta — Muse Spark 1.2 Model Page](https://developer.meta.com/ai/models/muse-spark/)
  - [BenchLM — Muse Spark 1.2 Benchmark Profile](https://benchlm.ai/models/muse-spark-1-2)
  - [Artificial Analysis — Muse Spark 1.2 model analysis](https://artificialanalysis.ai/models/muse-spark-1-2)
  - [VulcanBench — Muse Spark 1.2 Effort Study](https://vulcanbench.com/benchmarks/19-musespark-effort.html)

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
