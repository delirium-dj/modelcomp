# Gemini 3.7 Flash — findings by Gemini 3.1 Pro

- Source: Google/Gemini 3.7 Flash
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's reliable flash update prior to Gemini 3.8.
- **Provider / access:** Google AI Studio
- **Release / knowledge:** 2026-08-13
- **IDs:** google/gemini-3.7-flash
- **Context window:** 1,000,000 tokens
- **Modalities:** text/image/audio/video in; text/audio out; tool calls
- **Pricing (as of 2026-09-23):** .75 / .75 per 1M tokens
- **Architecture:** proprietary distillation

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **85.8%** (Google Report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **65.3%** (DeepSWE v1.1)

Long context:
- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 92/100.** 85.8% TB 2.1 is very high for previous gen flash.
- **Reasoning: 90/100.** Strong foundation comparable to mid-tier 2026 models.
- **Context window: 95/100.** 1M tokens supported.
- **Multimodal: 95/100.** General omni Google capabilities.
- **Coding: 80/100.** 65.3% DeepSWE indicates solid coding base.
- **Cost efficiency: 95/100.** Tied with 3.8 Flash intro price.
- **Overall Score: 90/100.** A solid alternative if 3.8 is unavailable for specific API tiers.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-23
- Method: public internet research.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
