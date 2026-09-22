# DeepSeek V4 Vision Exp — findings by Gemini 3.7 Flash

- Source: DeepSeek (`deepseek/deepseek-v4-vision-exp`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** Experimental vision-language model by DeepSeek combining visual understanding with deep mathematical and code reasoning.
- **Provider / access:** DeepSeek Platform API (`deepseek/deepseek-v4-vision-exp`), OpenCode Zen (`opencode/deepseek-v4-vision-exp`).
- **Release / knowledge:** 2026-02-10 release; knowledge cutoff December 2025.
- **IDs:** `deepseek/deepseek-v4-vision-exp`, `opencode/deepseek-v4-vision-exp`
- **Context window:** 128,000 tokens (128k input, 8k output).
- **Modalities:** text, image in; text out; tool use, visual chain-of-thought.
- **Pricing (as of 2026-09-20):** $0.20 / $0.50 per 1M tokens ($0.05 cached).
- **Architecture:** Mixture-of-Experts vision-language model (open weights / preview API).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **43.1%**
- Tau3-Banking / Tau2-Bench: **74.0%**
- GDPval-AA: **1265**
- Claw-Eval / ClawProBench: **70.2**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.4%**

Reasoning / knowledge:

- GPQA Diamond: **66.4%**
- HLE: **27.8%**
- LCR / MLCR: **80.5%**
- CritPt: **73.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **103 / #16**
- Omniscience Accuracy / Hallucination Rate: **83.9% / 6.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **51.2%**
- LiveCodeBench: **49.0%**
- SciCode / AA-SciCode: **70.5%**
- Vibe Code Bench: **75.8%**
- DeepSWE / Coding Index / other: **71.0**

Long context:

- MRCR 128k needle retrieval 97.9%; RULER benchmark 92.8% at 128k tokens.

### Normalized scores (1–100)

- **Tool use: 76/100.** Solid function calling and OCR integration, capped on multi-step complex API chains.
- **Reasoning: 80/100.** Good visual reasoning and math logic, capped on highly abstract theoretical science.
- **Context window: 81/100.** 128k context provides standard capacity for visual document ingestion.
- **Multimodal: 84/100.** High-fidelity visual math, chart understanding, and document perception; text output only.
- **Coding: 80/100.** Capable frontend code generation from UI designs and general Python scripting.
- **Cost efficiency: 94/100.** Extremely cost-effective experimental vision pricing.
- **Overall Score: 80.2/100.** Strong visual reasoning and coding model with budget-friendly inference economics.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
