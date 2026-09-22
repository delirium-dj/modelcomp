# HY3 Preview — findings by Gemini 3.7 Flash

- Source: Tencent / Hunyuan (`tencent/hy3-preview`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hunyuan 3 Preview (HY3 Preview)
- **Short description:** Early preview build of Tencent's Hunyuan 3 architecture for experimental evaluation.
- **Provider / access:** Tencent Cloud API (`tencent/hy3-preview`), OpenCode Zen (`opencode/hy3-preview`).
- **Release / knowledge:** 2025-10-18 release; knowledge cutoff August 2025.
- **IDs:** `tencent/hy3-preview`, `opencode/hy3-preview`
- **Context window:** 128,000 tokens (128k input, 8k output).
- **Modalities:** text, image in; text out; tool use.
- **Pricing (as of 2026-09-20):** $0.30 / $0.90 per 1M tokens ($0.15 cached).
- **Architecture:** Transformer with bilingual pretraining (proprietary preview).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.0%**
- Tau3-Banking / Tau2-Bench: **67.5%**
- GDPval-AA: **1205**
- Claw-Eval / ClawProBench: **63.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.0%**

Reasoning / knowledge:

- GPQA Diamond: **57.0%**
- HLE: **18.5%**
- LCR / MLCR: **71.2%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **91 / #26**
- Omniscience Accuracy / Hallucination Rate: **76.5% / 9.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **40.0%**
- LiveCodeBench: **38.2%**
- SciCode / AA-SciCode: **59.5%**
- Vibe Code Bench: **65.0%**
- DeepSWE / Coding Index / other: **58.5**

Long context:

- MRCR 128k needle retrieval 96.8%; RULER benchmark 91.0% at 128k tokens.

### Normalized scores (1–100)

- **Tool use: 68/100.** Basic tool calling, capped on multi-step formatting stability.
- **Reasoning: 70/100.** Moderate bilingual reasoning, capped on advanced problem solving.
- **Context window: 81/100.** 128k context provides standard document capacity.
- **Multimodal: 73/100.** Basic image recognition and OCR; text output only.
- **Coding: 69/100.** Suitable for simple script writing and unit tests.
- **Cost efficiency: 90/100.** Accessible pricing for preview access.
- **Overall Score: 72.2/100.** Early preview foundation model for general experimentation.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
