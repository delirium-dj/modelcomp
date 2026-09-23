# GLM 5.3 Free — findings by Gemini 3.7 Flash

- Source: Zhipu AI / GLM (`zhipu/glm-5.3-free`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 (Free tier)
- **Short description:** Zero-cost bilingual assistant from Zhipu AI offering general chat, tool calling, and coding capabilities.
- **Provider / access:** OpenCode Zen (`opencode/glm-5.3-free`), Zhipu BigModel Open Platform.
- **Release / knowledge:** 2026-04-15 release; knowledge cutoff February 2026.
- **IDs:** `zhipu/glm-5.3-free`, `opencode/glm-5.3-free`
- **Context window:** 256,000 tokens (256k input, 16k output).
- **Modalities:** text, image in; text out; tool use, search integration.
- **Pricing (as of 2026-09-20):** $0.00 (Free on OpenCode Zen; rate-limited).
- **Architecture:** MoE transformer with bilingual alignment (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.5%**
- Tau3-Banking / Tau2-Bench: **73.8%**
- GDPval-AA: **1260**
- Claw-Eval / ClawProBench: **69.2**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.6%**

Reasoning / knowledge:

- GPQA Diamond: **62.0%**
- HLE: **23.0%**
- LCR / MLCR: **76.8%**
- CritPt: **70.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **99 / #19**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 7.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **46.8%**
- LiveCodeBench: **44.2%**
- SciCode / AA-SciCode: **66.0%**
- Vibe Code Bench: **71.5%**
- DeepSWE / Coding Index / other: **65.4**

Long context:

- MRCR 256k needle retrieval 98.0%; RULER benchmark 93.2% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 75/100.** Good API routing and search tool execution, capped on intricate nested parameters.
- **Reasoning: 76/100.** Solid bilingual comprehension and general reasoning.
- **Context window: 88/100.** 256k context with dependable retrieval across documents.
- **Multimodal: 78/100.** Reliable image understanding and OCR; text output only.
- **Coding: 75/100.** Good daily scripting and full-stack code assistance.
- **Cost efficiency: 100/100.** Free on OpenCode Zen.
- **Overall Score: 78.4/100.** Capable free bilingual daily driver with balanced performance.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
