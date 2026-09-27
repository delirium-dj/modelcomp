- Source: Google/Gemini 3.6 Flash
- Date: 2026-09-27
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's July 2026 high-efficiency multimodal workhorse model, succeeded by the 3.8 series.
- **Provider / access:** Google AI Studio (`gemini-3.6-flash`)
- **Release / knowledge:** 2026-07-21
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,048,576 tokens
- **Modalities:** text, image, audio, video in; text out
- **Pricing (as of 2026-09-27):** Paid-tier pricing, Free tier on Google AI Studio
- **Architecture:** proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%**
- Tau3-Banking / Tau2-Bench: **83.0%** (OSWorld Verified)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **38%**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **34** (Intelligence Index composite)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **58.7%** (SWE-bench Pro)
- LiveCodeBench: **88.1%**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 85/100.** Strongly backed by 83% OSWorld and 78.0% Terminal-Bench 2.1.
- **Reasoning: 60/100.** Measured at 34 on the Artificial Analysis Intelligence Index and 38% HLE.
- **Context window: 98/100.** Verified 1M token context limit.
- **Multimodal: 95/100.** Native support for audio, video, and large visual document analysis.
- **Coding: 80/100.** Supported by 58.7% SWE-bench Pro score.
- **Cost efficiency: 100/100.** Generous free tier via AI Studio.
- **Overall Score: 84/100.** Excellent fast and free multimodal workhorse model.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-27
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
