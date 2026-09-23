# Gemini 3 Flash — findings by Gemini 3.1 Pro

- Source: Google/Gemini 3 Flash
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** High-speed, cost-optimized model of the Gemini 3 family. Engineered for low-latency agentic workflows.
- **Provider / access:** Google AI Studio / Gemini API
- **Release / knowledge:** 2025-12-17
- **IDs:** `google/gemini-3-flash`
- **Context window:** 1,000,000 tokens
- **Modalities:** text/image/audio/video in; text/audio out; tool calls; JSON mode
- **Pricing (as of 2026-09-23):** $0.50 / $1.50 per 1M
- **Architecture:** proprietary knowledge distillation

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **64.0%** (Vertu)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **90.4%** (Google Blog)
- HLE: **33.7%** (Egghead.io)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **78.0%** (Vertu)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:
- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 70/100.** Respectable 64% on Terminal-Bench 2.0.
- **Reasoning: 90/100.** Excellent GPQA score, showing robust distillation from Pro.
- **Context window: 95/100.** 1M native context window tier.
- **Multimodal: 95/100.** Native vision, audio, and video comprehension.
- **Coding: 95/100.** 78.0% on SWE-bench Verified is near frontier levels.
- **Cost efficiency: 97/100.** Phenomenal value at $0.50 / 1M input.
- **Overall Score: 89/100.** Extremely cost-effective agent workhorse.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-23
- Method: public internet research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
