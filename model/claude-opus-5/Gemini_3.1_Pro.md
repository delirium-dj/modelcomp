- Source: Anthropic/Claude Opus 5
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's July 2026 flagship model targeting advanced agentic tasks and reasoning. Superseded by Opus 5.5.
- **Provider / access:** Anthropic API (`claude-opus-5`)
- **Release / knowledge:** 2026-07-24
- **IDs:** `claude-opus-5`
- **Context window:** Not specified in results, likely 200k.
- **Modalities:** text in, text out, tool calls
- **Pricing (as of 2026-09-25):** Standard flagship pricing.
- **Architecture:** proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.3%**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **84.1%**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **72.5%**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 55/100.** Indicated by Terminal-Bench at 52.3%.
- **Reasoning: 85/100.** Strongly backed by GPQA 84.1%.
- **Context window: 70/100.** Standard large context baseline.
- **Multimodal: 15/100.** Assigned 15 due to text-only verifiable modality findings.
- **Coding: 75/100.** Reflected by SWE-bench 72.5%.
- **Cost efficiency: 50/100.** Paid flagship tier, relatively expensive now that 5.5 is out.
- **Overall Score: 60/100.** Capable predecessor model.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
