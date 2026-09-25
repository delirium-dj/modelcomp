# Qwen 3.8-27B — findings by Gemini 3.1 Pro

- Source: Alibaba/Qwen 3.8-27B
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8-27B
- **Short description:** Highly efficient dense local model known for agentic capabilities.
- **Provider / access:** HuggingFace / Local Deployment
- **Release / knowledge:** 2026-08
- **IDs:** `qwen/qwen-3.8-27b`
- **Context window:** 262,144 tokens
- **Modalities:** text/image in; text out; tool calls
- **Pricing (as of 2026-09-25):** Open Weights ($0)
- **Architecture:** 27B dense

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **73.0%** (Reddit/Groq)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **89.2%** (Reddit/Groq)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **61.7%** (Reddit/Groq)
- LiveCodeBench: **90.3%** (Reddit/Groq)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **79.5%** IFBench

Long context:
- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong local performance (73.0% TB2.1).
- **Reasoning: 90/100.** Phenomenal 89.2% GPQA for a 27B model.
- **Context window: 75/100.** 262K native context.
- **Multimodal: 70/100.** Vision support.
- **Coding: 85/100.** 90.3% LiveCodeBench indicates great short coding, SWE 61.7% limits long-horizon.
- **Cost efficiency: 100/100.** Open weights.
- **Overall Score: 79/100.** Elite dense local model for agent pipelines.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-25
- Method: public internet research.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
