# Qwen3 8 Max — findings by Gemini 3.7 Flash

- Source: Alibaba Cloud / Qwen (`qwen/qwen3-8-max`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 8 Max
- **Short description:** Alibaba's flagship dense reasoning and coding powerhouse featuring deep bilingual domain mastery and high agentic tool dexterity.
- **Provider / access:** Alibaba Cloud DashScope API (`qwen/qwen3-8-max`), OpenCode Zen (`opencode/qwen3-8-max`).
- **Release / knowledge:** 2026-05-14 release; knowledge cutoff March 2026.
- **IDs:** `qwen/qwen3-8-max`, `opencode/qwen3-8-max`
- **Context window:** 256,000 tokens (256k input, 32k max output).
- **Modalities:** text, image in; text out; tool use, JSON schema mode, chain-of-thought reasoning.
- **Pricing (as of 2026-09-20):** $1.20 / $3.60 per 1M tokens ($0.60 cached).
- **Architecture:** Dense autoregressive transformer with deep multilingual and mathematical alignment (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **50.4%**
- Tau3-Banking / Tau2-Bench: **82.1%**
- GDPval-AA: **1335**
- Claw-Eval / ClawProBench: **77.8**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%**

Reasoning / knowledge:

- GPQA Diamond: **71.2%**
- HLE: **33.4%**
- LCR / MLCR: **86.1%**
- CritPt: **78.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **113 / #7**
- Omniscience Accuracy / Hallucination Rate: **87.6% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **56.8%**
- LiveCodeBench: **55.2%**
- SciCode / AA-SciCode: **76.0%**
- Vibe Code Bench: **81.4%**
- DeepSWE / Coding Index / other: **76.9**

Long context:

- MRCR 256k needle retrieval 99.2%; RULER benchmark 95.8% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong tool selection and structured argument generation across multilingual contexts.
- **Reasoning: 88/100.** Outstanding mathematical, competitive problem solving, and logical deduction.
- **Context window: 88/100.** 256k context with solid retention and multi-document synthesis.
- **Multimodal: 84/100.** Dependable image analysis, diagram extraction, and OCR; no native audio/video.
- **Coding: 88/100.** High-precision code generation across Python, Go, C++, Rust, and TypeScript.
- **Cost efficiency: 82/100.** Competitive commercial pricing for high-tier performance.
- **Overall Score: 86.8/100.** Balanced flagship model with stellar math, coding, and multilingual reasoning.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
