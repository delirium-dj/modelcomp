- Source: OpenAI/GPT-5.5
- Date: 2026-09-27
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's April 2026 update to the GPT-5 line featuring native end-to-end multimodality and strong agentic/repository-level coding.
- **Provider / access:** OpenAI API (`gpt-5.5`)
- **Release / knowledge:** 2026-04-23
- **IDs:** `openai/gpt-5.5`
- **Context window:** 1,000,000 tokens
- **Modalities:** text, image, audio, video in; text out
- **Pricing (as of 2026-09-27):** Standard tier
- **Architecture:** proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (Terminal-Bench 2.0)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.4%**
- HLE: **45%** (Humanity's Last Exam)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **89.1%** (SWE-bench Verified)
- LiveCodeBench: **93%**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong tool/repo performance with 82.7% on Terminal-Bench 2.0.
- **Reasoning: 90/100.** Top tier knowledge confirmed by 94.4% on GPQA Diamond.
- **Context window: 98/100.** Verified 1M token context limit.
- **Multimodal: 95/100.** Native support for audio, video, image, and text.
- **Coding: 98/100.** Highly proficient coding via 89.1% SWE-Bench score.
- **Cost efficiency: 70/100.** Standard pricing without confirmed modern price drops yet.
- **Overall Score: 94/100.** Strong pre-6.0 era agentic model with full multimodality.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-27
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
