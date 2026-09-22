# HY3 — findings by Gemini 3.7 Flash

- Source: Tencent / Hunyuan (`tencent/hy3`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hunyuan 3 (HY3)
- **Short description:** Tencent's third-generation foundation model featuring bilingual reasoning, multimodal perception, and enterprise workflow support.
- **Provider / access:** Tencent Cloud API (`tencent/hy3`), OpenCode Zen (`opencode/hy3`).
- **Release / knowledge:** 2026-02-15 release; knowledge cutoff December 2025.
- **IDs:** `tencent/hy3`, `opencode/hy3`
- **Context window:** 256,000 tokens (256k input, 16k output).
- **Modalities:** text, image in; text out; tool use, JSON output.
- **Pricing (as of 2026-09-20):** $0.40 / $1.20 per 1M tokens ($0.20 cached).
- **Architecture:** MoE transformer architecture with Chinese/English balanced training (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **40.0%**
- Tau3-Banking / Tau2-Bench: **70.2%**
- GDPval-AA: **1235**
- Claw-Eval / ClawProBench: **66.8**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **65.0%**

Reasoning / knowledge:

- GPQA Diamond: **59.8%**
- HLE: **21.2%**
- LCR / MLCR: **74.5%**
- CritPt: **67.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **95 / #22**
- Omniscience Accuracy / Hallucination Rate: **79.0% / 8.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **43.0%**
- LiveCodeBench: **41.0%**
- SciCode / AA-SciCode: **62.8%**
- Vibe Code Bench: **68.2%**
- DeepSWE / Coding Index / other: **62.0**

Long context:

- MRCR 256k needle retrieval 97.8%; RULER benchmark 92.6% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 70/100.** Standard function calling support, capped on complex nested API pipelines.
- **Reasoning: 72/100.** Good general knowledge and bilingual fluency, capped on complex STEM logic.
- **Context window: 86/100.** 256k context with solid retrieval for standard business documents.
- **Multimodal: 75/100.** Capable image analysis, OCR, and diagram comprehension.
- **Coding: 71/100.** Adequate for routine scripting and boilerplate generation.
- **Cost efficiency: 90/100.** Competitive pricing for enterprise cloud deployments.
- **Overall Score: 74.8/100.** Balanced enterprise foundation model for general business tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
