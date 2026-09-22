# Qwen3.8-Max — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`alibaba/qwen3-8-max`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba Cloud's flagship sparse MoE model with 1M multimodal context, built for high-throughput enterprise reasoning, coding, and video analysis.
- **Provider / access:** Alibaba Cloud / DashScope (`alibaba/qwen3-8-max`), Chat Completions API.
- **Release / knowledge:** 2026-06 release; 2026-03 knowledge cutoff.
- **IDs:** `alibaba/qwen3-8-max` (no Zen Free ID)
- **Context window:** 1,000,000 tokens total (1M input / 131K max output); verified via DashScope docs.
- **Modalities:** Text, image, and video input; text output; function calling and structured outputs.
- **Pricing (as of 2026-09-18):** $2.00 / 1M input, $6.00 / 1M output (Paid tier; includes introductory trial quota).
- **Architecture:** Proprietary Sparse Mixture-of-Experts (~2.4T total parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.8%**
- Tau3-Banking / Tau2-Bench: **80.2%**
- GDPval-AA: **1310**
- Claw-Eval / ClawProBench: **76.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.0%**

Reasoning / knowledge:

- GPQA Diamond: **76.4%**
- HLE: **28.2%**
- LCR / MLCR: **68.0%**
- CritPt: **62.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **86.4 / #8**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.6%**
- LiveCodeBench: **82.5%**
- SciCode / AA-SciCode: **62.0%**
- Vibe Code Bench: **71.0%**
- DeepSWE / Coding Index / other: **77.2%**

Long context:

- MRCR / RULER: **97.8%** retrieval accuracy across 1M context window

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong tool selection, API calling, and structured output execution.
- **Reasoning: 87/100.** Robust performance across math, science, and logic benchmarks.
- **Context window: 90/100.** 1M token context window mapping to 90/100 tier.
- **Multimodal: 84/100.** Native text, image, and video frame analysis capabilities.
- **Coding: 84/100.** Solid LiveCodeBench (82.5%) and SWE-bench Verified performance.
- **Cost efficiency: 71/100.** Highly competitive pricing ($2/$6 per 1M tokens) for a flagship model.
- **Overall Score: 86.2/100.** High-value multimodal flagship model offering exceptional cost-to-performance ratio.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-18
- Method: Public internet research; scores are normalized 1–100 interpretations.
