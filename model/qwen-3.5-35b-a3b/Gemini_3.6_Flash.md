# Qwen 3.5 35B — findings by Gemini 3.6 Flash

- Source: Qwen / Alibaba Cloud (`qwen/qwen3.5-35b-a3b`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B
- **Short description:** Alibaba's 36B total / 3B active MoE open-weights model designed for low-cost, high-efficiency multimodal agent execution.
- **Provider / access:** OpenRouter (`qwen/qwen3.5-35b-a3b`) / HuggingFace `Qwen/Qwen3.5-35B-A3B`
- **Release / knowledge:** 2026-02 release; knowledge cutoff 2025-12
- **IDs:** `qwen/qwen3.5-35b-a3b`
- **Context window:** 262,144 native (extensible to ~1,010,000 via YaRN); 65,536 max output tokens (verified via Qwen model card)
- **Modalities:** Text, image, video input; text output; function calling; JSON mode
- **Pricing (as of 2026-10-23):** $0.14 / 1M input, $1.00 / 1M output (OpenRouter); Apache 2.0 open weights ($0 self-host)
- **Architecture:** Open weights (Apache 2.0 license), 36B total / 3B active Mixture-of-Experts (A3B MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.0%**
- Tau3-Banking / Tau2-Bench: **35.5%** (AA harness)
- GDPval-AA: **1310**
- Claw-Eval / ClawProBench: **50.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **43.0%**

Reasoning / knowledge:

- GPQA Diamond: **84.2%**
- HLE: **29.5%**
- LCR / MLCR: **64.5%**
- CritPt: **54.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **44 / #39**
- Omniscience Accuracy / Hallucination Rate: **84.8% / 6.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **69.2%**
- LiveCodeBench: **74.6%**
- SciCode / AA-SciCode: **38.0%**
- Vibe Code Bench: **51.0%**
- DeepSWE / Coding Index / other: **53.5%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **94.8% retrieval accuracy at 256K context length**

### Normalized scores (1–100)

- **Tool use: 74/100.** Effective 3B-active tool invocation on Terminal-Bench 2.1 (71.0%) and GDPval (1310).
- **Reasoning: 82/100.** Strong GPQA Diamond reasoning score (84.2%) and HLE (29.5%).
- **Context window: 75/100.** 262,144 native context window with 65,536 max output headroom.
- **Multimodal: 82/100.** Vision and video multimodal input processing with text output generation.
- **Coding: 83/100.** Solid coding performance with 69.2% on SWE-bench Verified and 74.6% on LiveCodeBench.
- **Cost efficiency: 95/100.** Outstanding open-weights MoE cost efficiency at $0.14 / $1.00 per 1M tokens ($0 self-host).
- **Overall Score: 79/100.** Half-up mean of five quality dimensions `(74 + 82 + 75 + 82 + 83) / 5 = 79.2 -> 79`; optimal economic choice for high-volume multimodal agent pipelines.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
