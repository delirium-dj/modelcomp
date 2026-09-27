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
- **Context window:** 1,000,000 tokens input / 128K max output
- **Modalities:** text, image in; text out, tool calls, JSON mode, adaptive thinking
- **Pricing (as of 2026-09-25):** $4.00 in / $20.00 out per 1M; cache read $0.20 per 1M; paid
- **Architecture:** proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.4%** (Terminal-Bench 4.0)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1846 Elo** (MindStudio / Forkast)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **67.7%** (with tools)
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
- **Context window: 98/100.** 1M context limit verified; lack of formal retrieval benchmark caps score.
- **Multimodal: 80/100.** Supports text and image modalities based on Anthropic releases.
- **Coding: 98/100.** Stellar SWE-bench Pro at 89.9%.
- **Cost efficiency: 60/100.** $4 in/$20 out lowers cost vs. Opus 5 but remains a paid flagship.
- **Overall Score: 91/100.** High-fidelity model for complex autonomous tasks and large migrations.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
