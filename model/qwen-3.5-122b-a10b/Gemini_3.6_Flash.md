# Qwen 3.5 122B — findings by Gemini 3.6 Flash

- Source: Qwen / Alibaba Cloud (`qwen/qwen3.5-122b-a10b`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B
- **Short description:** Alibaba's 125B total / 10B active MoE open-weights multimodal model designed for vision-language reasoning and efficient agentic tool execution.
- **Provider / access:** OpenRouter (`qwen/qwen3.5-122b-a10b`) / HuggingFace `Qwen/Qwen3.5-122B-A10B`
- **Release / knowledge:** 2026-02 release; knowledge cutoff 2025-12
- **IDs:** `qwen/qwen3.5-122b-a10b`
- **Context window:** 262,144 native (extensible to 1,010,000); 65,536 max output tokens (verified via Qwen model card)
- **Modalities:** Text, image, video input; text output; function calling; JSON mode
- **Pricing (as of 2026-10-23):** $0.26 / 1M input, $2.08 / 1M output (OpenRouter); Apache 2.0 open weights ($0 self-host)
- **Architecture:** Open weights (Apache 2.0 license), 125B total / 10B active Mixture-of-Experts (A10B MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.5%**
- Tau3-Banking / Tau2-Bench: **39.5%** (AA harness)
- GDPval-AA: **1410**
- Claw-Eval / ClawProBench: **57.2**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **47.8%**

Reasoning / knowledge:

- GPQA Diamond: **86.6%**
- HLE: **33.8%**
- LCR / MLCR: **69.8%**
- CritPt: **60.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **48 / #31**
- Omniscience Accuracy / Hallucination Rate: **87.0% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.0%**
- LiveCodeBench: **79.8%**
- SciCode / AA-SciCode: **43.5%**
- Vibe Code Bench: **57.2%**
- DeepSWE / Coding Index / other: **60.2%**

Long context:

- MRCR / RULER / GraphWalks value at window length: **95.2% retrieval accuracy at 256K context length**

### Normalized scores (1–100)

- **Tool use: 78/100.** Effective MoE agent tool execution on Terminal-Bench 2.1 (73.5%) and GDPval (1410).
- **Reasoning: 85/100.** Strong GPQA Diamond reasoning score (86.6%) and HLE (33.8%).
- **Context window: 75/100.** 262,144 native context window with 65,536 max output headroom.
- **Multimodal: 82/100.** Vision and video multimodal input processing with text output generation.
- **Coding: 85/100.** Impressive coding performance with 72.0% on SWE-bench Verified and 79.8% on LiveCodeBench.
- **Cost efficiency: 93/100.** Highly efficient open-weights MoE pricing at $0.26 / $2.08 per 1M tokens ($0 self-host).
- **Overall Score: 81/100.** Half-up mean of five quality dimensions `(78 + 85 + 75 + 82 + 85) / 5 = 81.0 -> 81`; optimal open-weights MoE choice for multimodal agentic software workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-23
- Method: Public web research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
