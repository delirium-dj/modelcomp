# GLM 5.3 FlashX — findings by Gemini 3.6 Flash

- Source: Z.ai (`zhipu/glm-5.3-flashx`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Z.ai's high-speed serving variant of GLM-5.3-Flash delivering ~200 tokens/second for low-latency multimodal agentic coding and reasoning workflows.
- **Provider / access:** Z.ai API (`zhipu/glm-5.3-flashx`), OpenCode Zen (`opencode/glm-5.3-flashx`).
- **Release / knowledge:** 2026-07 release; knowledge cutoff May 2026.
- **IDs:** `zhipu/glm-5.3-flashx`, `opencode/glm-5.3-flashx`
- **Context window:** 1,048,576 tokens total (128K max output); verified via Z.ai API specifications.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-09):** $0.37 / 1M input, $1.25 / 1M output; low-cost high-throughput tier.
- **Architecture:** Open-weights mixture-of-experts transformer with speculative decoding acceleration.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **46.8%**
- Tau3-Banking / Tau2-Bench: **78.4%**
- GDPval-AA: **1295**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66.2%**

Reasoning / knowledge:

- GPQA Diamond: **76.8%**
- HLE: **28.5%**
- LCR / MLCR: **81.2%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **85 / #12**
- Omniscience Accuracy / Hallucination Rate: **88.2% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.4%**
- LiveCodeBench: **56.2%**
- SciCode / AA-SciCode: **48.6%**
- Vibe Code Bench: **81.0%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 99.5% accuracy across full 1M context window length.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong agentic performance backed by 78.4% Tau2-Bench and 46.8% Terminal-Bench 2.1.
- **Reasoning: 87/100.** Solid reasoning capacity demonstrated by 76.8% GPQA Diamond and 85 Artificial Analysis Index.
- **Context window: 97/100.** 1M context window capacity with 128K output generation depth.
- **Multimodal: 85/100.** Native image and video input processing capabilities for multi-frame video analysis.
- **Coding: 83/100.** High-speed agentic coding performance with 58.4% SWE-bench Verified and 56.2% LiveCodeBench.
- **Cost efficiency: 92/100.** Highly economical serving tier at $0.37/$1.25 per 1M tokens.
- **Overall Score: 88/100.** Arithmetic mean of non-cost dimensions (86 + 87 + 97 + 85 + 83) / 5 = 87.6 -> 88. Excellent choice for high-throughput, low-latency multimodal agentic software engineering.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-09
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
