# Qwen 3.5 27B — findings by Gemini 3.6 Flash

- Source: Qwen / Alibaba Cloud (`qwen/qwen3.5-27b`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's 27.8B dense open-weights multimodal workhorse model featuring vision-language reasoning and fast coding execution.
- **Provider / access:** OpenRouter (`qwen/qwen3.5-27b`) / HuggingFace `Qwen/Qwen3.5-27B`
- **Release / knowledge:** 2026-02 release; knowledge cutoff 2025-12
- **IDs:** `qwen/qwen3.5-27b`
- **Context window:** 262,144 native (extensible to 1,010,000); 65,536 max output tokens (verified via Qwen model card)
- **Modalities:** Text, image, video input; text output; function calling; JSON mode
- **Pricing (as of 2026-10-23):** $0.27 / 1M input, $2.16 / 1M output (OpenRouter); Apache 2.0 open weights ($0 self-host)
- **Architecture:** Open weights (Apache 2.0 license), 27.8B dense parameter architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%**
- Tau3-Banking / Tau2-Bench: **40.2%** (AA harness)
- GDPval-AA: **1420**
- Claw-Eval / ClawProBench: **58.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **48.5%**

Reasoning / knowledge:

- GPQA Diamond: **85.5%**
- HLE: **34.2%**
- LCR / MLCR: **70.5%**
- CritPt: **61.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **49 / #28**
- Omniscience Accuracy / Hallucination Rate: **87.5% / 5.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.4%**
- LiveCodeBench: **80.7%**
- SciCode / AA-SciCode: **44.0%**
- Vibe Code Bench: **58.0%**
- DeepSWE / Coding Index / other: **61.2%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **95.0% retrieval accuracy at 256K context length**

### Normalized scores (1–100)

- **Tool use: 78/100.** Effective dense tool calling and execution on Terminal-Bench 2.1 (74.0%) and GDPval (1420).
- **Reasoning: 84/100.** Strong GPQA Diamond reasoning performance (85.5%) and HLE (34.2%).
- **Context window: 75/100.** 262,144 native context window with 65,536 max output capacity.
- **Multimodal: 82/100.** Versatile multi-input handling covering text, image, and video with text output generation.
- **Coding: 86/100.** Impressive coding performance with 72.4% on SWE-bench Verified and 80.7% on LiveCodeBench.
- **Cost efficiency: 92/100.** Highly accessible open-weights pricing at $0.27 / $2.16 per 1M tokens ($0 self-host).
- **Overall Score: 81/100.** Half-up mean of five quality dimensions `(78 + 84 + 75 + 82 + 86) / 5 = 81.0 -> 81`; versatile dense open-weights model ideal for multimodal reasoning and coding.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
