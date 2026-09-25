- Source: Anthropic/Claude Opus 5.5
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic’s flagship model prioritizing complex reasoning, coding, and agentic workflows with Adaptive Thinking capabilities.
- **Provider / access:** Anthropic API (`claude-opus-5.5`)
- **Release / knowledge:** 2026-09-22
- **IDs:** `claude-opus-5.5`
- **Context window:** Not publicly specified in search.
- **Modalities:** text in, text out, tool calls
- **Pricing (as of 2026-09-25):** standard pricing, roughly 40% less than Opus 5
- **Architecture:** proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.4%** (Terminal-Bench 4.0)
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
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **89.9%** (SWE-bench Pro)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong performance indicated by Terminal-Bench 4.0 at 66.4% against new standards.
- **Reasoning: 90/100.** Provisional score based on general capability and Adaptive Thinking.
- **Context window: 70/100.** Standard context window assumed; lack of formal retrieval benchmark caps score.
- **Multimodal: 15/100.** Assigned 15 due to text-only modalities based on results.
- **Coding: 98/100.** Stellar SWE-bench Pro at 89.9%.
- **Cost efficiency: 60/100.** Lower cost than Opus 5 but remains a paid flagship.
- **Overall Score: 73/100.** High-fidelity model for complex autonomous tasks.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
