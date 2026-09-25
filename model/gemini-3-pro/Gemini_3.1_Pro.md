# Gemini 3 Pro — findings by Gemini 3.1 Pro

- Source: Google/Gemini 3 Pro
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's foundational 3.x MoE model released in late 2025.
- **Provider / access:** Google AI Studio
- **Release / knowledge:** 2025-11-18
- **IDs:** `google/gemini-3-pro`
- **Context window:** 1,000,000 tokens
- **Modalities:** text/image/audio/video in; text/audio out; tool calls
- **Pricing (as of 2026-09-25):** Standard Pro pricing
- **Architecture:** sparse MoE

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **54.2%** (TrueFoundry)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **91.9%** (TrueFoundry)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **76.2%** (TrueFoundry)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:
- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 60/100.** 54.2% on TB2.0 reflects solid early agentic performance.
- **Reasoning: 92/100.** Strongly backed by 91.9% GPQA score.
- **Context window: 95/100.** Standard 1M limit.
- **Multimodal: 95/100.** Core multimodality across vision/audio natively.
- **Coding: 94/100.** Solid 76.2% on SWE-bench Verified.
- **Cost efficiency: 85/100.** Eclipsed in cost-to-performance by Flash variants.
- **Overall Score: 87/100.** Extremely capable previous-generation Pro model.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-25
- Method: public internet research.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
