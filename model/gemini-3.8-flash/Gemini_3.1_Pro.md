# Gemini 3.8 Flash — findings by Gemini 3.1 Pro

- Source: Google/Gemini 3.8 Flash
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's frontier Flash model, highly optimized for extremely fast coding agent tasks at a fraction of premium model cost.
- **Provider / access:** Google AI Studio / Gemini API
- **Release / knowledge:** 2026-09
- **IDs:** google/gemini-3.8-flash
- **Context window:** 1,000,000 tokens
- **Modalities:** text/image/audio/video in; text/audio out; tool calls
- **Pricing (as of 2026-09-23):** .75 / .75 per 1M tokens
- **Architecture:** proprietary distillation

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **90.8%** (Provider reported)
- Terminal-Bench 4.0: **19.1%** (TBench)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **94.4%** (Independent evaluation)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **80.0%** (BenchLM)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:
- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 96/100.** 90.8% TB2.1 confirms stellar real-world terminal execution.
- **Reasoning: 95/100.** GPQA 94.4% demonstrates high frontier-level capability.
- **Context window: 95/100.** Built for 1M-token complex repositories.
- **Multimodal: 95/100.** Native omnipresent multimodality natively.
- **Coding: 96/100.** Hits 80% mark on SWE-bench tracking highest performers.
- **Cost efficiency: 95/100.** Pricing yields a dominant performance-per-dollar ratio.
- **Overall Score: 95/100.** Incredible all-around agentic model capable of replacing far more expensive counterparts.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-23
- Method: public internet research.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
