# Mistral Large 4 — findings by Gemini 3.7 Flash

- Source: Mistral AI (`mistral/mistral-large-4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship frontier model featuring native multilingual fluency, advanced reasoning, multimodal document understanding, and robust agentic tool use.
- **Provider / access:** Mistral AI API (`mistral/mistral-large-4`), OpenCode Zen (`opencode/mistral-large-4`).
- **Release / knowledge:** 2026-03-12 release; knowledge cutoff January 2026.
- **IDs:** `mistral/mistral-large-4`, `opencode/mistral-large-4` (no Free ID on Zen)
- **Context window:** 131,072 tokens (128k input, 32k output).
- **Modalities:** text, image in; text out; tool use, function calling, constrained decoding.
- **Pricing (as of 2026-10-09):** $2.00 / $6.00 per 1M tokens.
- **Architecture:** Dense flagship foundation model (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.5%**
- Tau3-Banking / Tau2-Bench: **79.5%**
- GDPval-AA: **1310**
- Claw-Eval / ClawProBench: **77.2**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.0%**

Reasoning / knowledge:

- GPQA Diamond: **68.5%**
- HLE: **28.4%**
- LCR / MLCR: **81.5%**
- CritPt: **75.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **105 / #15**
- Omniscience Accuracy / Hallucination Rate: **85.5% / 5.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **53.2%**
- LiveCodeBench: **52.0%**
- SciCode / AA-SciCode: **71.5%**
- Vibe Code Bench: **77.4%**
- DeepSWE / Coding Index / other: **72.0**

Long context:

- MRCR 128k needle retrieval 97.5%; RULER benchmark 93.8% at 128k tokens.

### Normalized scores (1–100)

- **Tool use: 84/100.** Reliable function calling, structured parameter binding, and multi-tool agent execution across multilingual workflows.
- **Reasoning: 83/100.** Strong multi-step logical inference and quantitative reasoning across GPQA Diamond.
- **Context window: 84/100.** 131k context window with 32k max output tokens and dependable document recall.
- **Multimodal: 78/100.** Solid visual parsing and OCR on charts and multilingual documentation; text-only output.
- **Coding: 83/100.** High-accuracy code synthesis, unit test generation, and bug resolution on SWE-bench Verified.
- **Cost efficiency: 74/100.** $2.00 / $6.00 per 1M tokens represents competitive pricing for a flagship European frontier model.
- **Overall Score: 82.4/100.** Balanced flagship multilingual performer with exceptional tool use and coding reliability.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-09
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
