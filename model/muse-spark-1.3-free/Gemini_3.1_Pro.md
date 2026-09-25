- Source: Meta/Muse Spark 1.3
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor Free
- **Short description:** An AI model released by Meta designed for coding, agentic workflows, and long-context reasoning. Accessible via third-party free tiers.
- **Provider / access:** OpenCode (`opencode/muse-spark-1.3-contributor-free`)
- **Release / knowledge:** 2026-09-02
- **IDs:** `opencode/muse-spark-1.3-contributor-free`
- **Context window:** Not publicly specified.
- **Modalities:** text in, text out, tool calls
- **Pricing (as of 2026-09-25):** Free tier available.
- **Architecture:** proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Beam.ai)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.4** (Beam.ai)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (closest proxy DeepSWE v1.1)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **75.4%** (Beam.ai)

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong performance indicated by Terminal-Bench 2.1 at 88.8%, capped by lack of diverse tool benchmarks.
- **Reasoning: 60/100.** Provisional score based on general capability, capped by missing verified knowledge benchmarks.
- **Context window: 70/100.** Standard context window assumed; lack of formal retrieval benchmark caps score.
- **Multimodal: 15/100.** Assigned 15 due to text-only modalities.
- **Coding: 75/100.** Solid DeepSWE at 75.4%, but lacking SWE-Bench and LCB caps score.
- **Cost efficiency: 100/100.** Free.
- **Overall Score: 62/100.** A solid free coding assistant.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
