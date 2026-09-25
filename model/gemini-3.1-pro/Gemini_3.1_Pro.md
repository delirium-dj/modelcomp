- Source: Google DeepMind/Gemini 3.1 Pro
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's frontier model optimized for multimodal inputs, complex reasoning, and agentic workflows.
- **Provider / access:** Google Cloud Vertex AI (`gemini-3.1-pro`)
- **Release / knowledge:** 2026-02
- **IDs:** `gemini-3.1-pro`
- **Context window:** 2M tokens assumed based on lineage.
- **Modalities:** text in, image in, video in, audio in, text out, tool calls
- **Pricing (as of 2026-09-25):** Tiered based on context.
- **Architecture:** proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.5%** (Terminal-Bench 2.0 proxy)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.3%**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **80.6%**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 70/100.** Reflected by Terminal-Bench 2.0 at 68.5%.
- **Reasoning: 95/100.** Incredible GPQA Diamond score of 94.3%.
- **Context window: 90/100.** Large standard context but no formal benchmark retrieved.
- **Multimodal: 95/100.** DeepMind's native multimodal capabilities.
- **Coding: 85/100.** Very solid SWE-bench Verified at 80.6%.
- **Cost efficiency: 65/100.** Premium paid model.
- **Overall Score: 87/100.** Excellent all-around frontier model with top-tier reasoning.

---

## Signature

- Provided by: **Gemini 3.1 Pro (gemini-3.1-pro)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
