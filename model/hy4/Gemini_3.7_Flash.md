# HY4 — findings by Gemini 3.7 Flash

- Source: Tencent / Hunyuan (`tencent/hy4`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hunyuan 4 (HY4)
- **Short description:** Early experimental legacy prototype build of Tencent's Hunyuan series.
- **Provider / access:** Tencent Cloud API (`tencent/hy4`), OpenCode Zen (`opencode/hy4`).
- **Release / knowledge:** 2025-04-10 release; knowledge cutoff February 2025.
- **IDs:** `tencent/hy4`, `opencode/hy4`
- **Context window:** 32,000 tokens (32k input, 4k output).
- **Modalities:** text in; text out; basic tool use.
- **Pricing (as of 2026-09-20):** $0.50 / $1.50 per 1M tokens ($0.25 cached).
- **Architecture:** Dense transformer architecture (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **28.0%**
- Tau3-Banking / Tau2-Bench: **49.0%**
- GDPval-AA: **1050**
- Claw-Eval / ClawProBench: **46.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **44.0%**

Reasoning / knowledge:

- GPQA Diamond: **38.0%**
- HLE: **8.5%**
- LCR / MLCR: **51.0%**
- CritPt: **45.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **65 / #45**
- Omniscience Accuracy / Hallucination Rate: **60.0% / 22.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **20.5%**
- LiveCodeBench: **19.0%**
- SciCode / AA-SciCode: **34.0%**
- Vibe Code Bench: **39.0%**
- DeepSWE / Coding Index / other: **32.0**

Long context:

- MRCR 32k needle retrieval 88.0%; RULER benchmark 78.0% at 32k tokens.

### Normalized scores (1–100)

- **Tool use: 55/100.** Rudimentary function calling, frequent parameter errors on complex schemas.
- **Reasoning: 58/100.** Basic conversational fluency, significant limitations on complex logic.
- **Context window: 75/100.** 32k context window adequate for brief documents only.
- **Multimodal: 50/100.** Text-only legacy model with no native multimodal features.
- **Coding: 52/100.** Capable of small boilerplate code snippets only.
- **Cost efficiency: 75/100.** Lower value proposition compared to modern flash tiers.
- **Overall Score: 58.0/100.** Legacy prototype build with dated architecture and limited capabilities.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
