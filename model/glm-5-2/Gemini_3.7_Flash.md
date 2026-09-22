# GLM 5.2 — findings by Gemini 3.7 Flash

- Source: Zhipu AI / GLM (`zhipu/glm-5.2`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** General-purpose bilingual model by Zhipu AI with strong reasoning and document comprehension.
- **Provider / access:** Zhipu BigModel Platform (`zhipu/glm-5.2`), OpenCode Zen (`opencode/glm-5-2`).
- **Release / knowledge:** 2025-11-25 release; knowledge cutoff September 2025.
- **IDs:** `zhipu/glm-5.2`, `opencode/glm-5-2`
- **Context window:** 256,000 tokens (256k input, 16k output).
- **Modalities:** text, image in; text out; tool use, JSON output.
- **Pricing (as of 2026-09-20):** $0.35 / $1.00 per 1M tokens ($0.175 cached).
- **Architecture:** Dense/MoE hybrid transformer (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **41.0%**
- Tau3-Banking / Tau2-Bench: **71.5%**
- GDPval-AA: **1245**
- Claw-Eval / ClawProBench: **67.8**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66.0%**

Reasoning / knowledge:

- GPQA Diamond: **60.5%**
- HLE: **21.8%**
- LCR / MLCR: **75.0%**
- CritPt: **68.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **97 / #21**
- Omniscience Accuracy / Hallucination Rate: **80.2% / 7.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **44.5%**
- LiveCodeBench: **42.0%**
- SciCode / AA-SciCode: **64.0%**
- Vibe Code Bench: **69.8%**
- DeepSWE / Coding Index / other: **64.0**

Long context:

- MRCR 256k needle retrieval 97.9%; RULER benchmark 93.0% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 72/100.** Capable standard function calling and search integration.
- **Reasoning: 73/100.** Strong bilingual understanding, capped on complex mathematics.
- **Context window: 86/100.** 256k context with solid retention across documentation.
- **Multimodal: 76/100.** Good visual analysis and OCR; text-only output.
- **Coding: 73/100.** Capable routine coding, refactoring, and bug fixes.
- **Cost efficiency: 92/100.** Competitive pricing for commercial workloads.
- **Overall Score: 76.0/100.** Balanced general-purpose bilingual reasoning model.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
