# GLM 5.3 Flash — findings by Gemini 3.7 Flash

- Source: Zhipu AI / GLM (`zhipu/glm-5.3-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** High-speed bilingual reasoning and coding model by Zhipu AI optimized for agent tool calling and rapid generation.
- **Provider / access:** Zhipu BigModel Open Platform (`zhipu/glm-5.3-flash`), OpenCode Zen (`opencode/glm-5.3-flash`).
- **Release / knowledge:** 2026-04-10 release; knowledge cutoff February 2026.
- **IDs:** `zhipu/glm-5.3-flash`, `opencode/glm-5.3-flash`
- **Context window:** 256,000 tokens (256k input, 16k output).
- **Modalities:** text, image in; text out; tool use, web browsing, code execution.
- **Pricing (as of 2026-09-20):** $0.15 / $0.45 per 1M tokens ($0.075 cached). Free tier available.
- **Architecture:** MoE transformer with bilingual alignment (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.0%**
- Tau3-Banking / Tau2-Bench: **75.4%**
- GDPval-AA: **1275**
- Claw-Eval / ClawProBench: **71.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.5%**

Reasoning / knowledge:

- GPQA Diamond: **63.8%**
- HLE: **24.2%**
- LCR / MLCR: **78.6%**
- CritPt: **71.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **101 / #17**
- Omniscience Accuracy / Hallucination Rate: **82.2% / 7.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.6%**
- LiveCodeBench: **46.0%**
- SciCode / AA-SciCode: **67.8%**
- Vibe Code Bench: **73.2%**
- DeepSWE / Coding Index / other: **67.0**

Long context:

- MRCR 256k needle retrieval 98.4%; RULER benchmark 94.0% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 78/100.** Smooth function calling syntax and effective search integration, capped by minor multi-turn formatting drift.
- **Reasoning: 77/100.** Strong bilingual reasoning and conceptual summarization, capped on complex mathematics.
- **Context window: 88/100.** 256k context with solid retention and multi-document query handling.
- **Multimodal: 81/100.** Capable visual analysis, chart parsing, and document OCR.
- **Coding: 77/100.** Good coding speed and reliable everyday scripting across popular languages.
- **Cost efficiency: 95/100.** Very economical pricing structure for developer workloads.
- **Overall Score: 80.2/100.** Agile, affordable bilingual model with strong agentic tooling support.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
