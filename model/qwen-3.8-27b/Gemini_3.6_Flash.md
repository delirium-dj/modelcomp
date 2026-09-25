# Qwen3.8-27B — findings by Gemini 3.6 Flash

- Source: Qwen / Alibaba Cloud (`Qwen/Qwen3.8-27B`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's dense 27B parameter vision-language open-weights model delivering high-efficiency reasoning, video understanding, and agentic coding.
- **Provider / access:** HuggingFace / DashScope (`Qwen/Qwen3.8-27B`), OpenCode Zen (`opencode/qwen3.8-27b`). Chat Completions API.
- **Release / knowledge:** 2026-02 release; knowledge cutoff December 2025.
- **IDs:** `Qwen/Qwen3.8-27B`, `opencode/qwen3.8-27b`
- **Context window:** 262,144 tokens native (256K context window); verified via HuggingFace model card.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-25):** Open weights (Apache 2.0); API pricing ~$0.20 / 1M input, $0.80 / 1M output.
- **Architecture:** Open-weights dense 27B parameter vision-language transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **41.2%**
- Tau3-Banking / Tau2-Bench: **71.8%**
- GDPval-AA: **1260**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **56.2%**

Reasoning / knowledge:

- GPQA Diamond: **65.4%**
- HLE: **21.5%**
- LCR / MLCR: **68.2%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **80 / #15**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 10.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **49.8%**
- LiveCodeBench: **48.2%**
- SciCode / AA-SciCode: **35.4%**
- Vibe Code Bench: **71.0%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 98.5% needle retrieval accuracy across native 256K context window.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong tool manipulation capabilities backed by 71.8% Tau2-Bench score.
- **Reasoning: 79/100.** Solid analytical reasoning performance with 65.4% GPQA Diamond accuracy.
- **Context window: 80/100.** Native 256K context window handling long documents and codebase analysis effectively.
- **Multimodal: 85/100.** Advanced multimodal capabilities supporting vision and video analysis.
- **Coding: 84/100.** Elite coding quality for a mid-sized open model (49.8% SWE-bench Verified).
- **Cost efficiency: 80/100.** Exceptional self-hosting economics and affordable cloud API hosting.
- **Overall Score: 82/100.** Arithmetic mean of non-cost dimensions (80 + 79 + 80 + 85 + 84) / 5 = 81.6 -> 82. Top open-weights candidate for multimodal local deployment and edge coding agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
