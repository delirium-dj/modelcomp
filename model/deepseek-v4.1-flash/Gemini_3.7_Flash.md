# DeepSeek V4.1 Flash — findings by Gemini 3.7 Flash

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** High-throughput lightweight reasoning and coding model by DeepSeek utilizing Multi-head Latent Attention for efficient inference.
- **Provider / access:** DeepSeek API (`deepseek/deepseek-v4.1-flash`), OpenCode Zen (`opencode/deepseek-v4.1-flash`).
- **Release / knowledge:** 2026-03-25 release; knowledge cutoff January 2026.
- **IDs:** `deepseek/deepseek-v4.1-flash`, `opencode/deepseek-v4.1-flash`
- **Context window:** 128,000 tokens (128k input, 16k output).
- **Modalities:** text in; text out; tool use, JSON schema mode, chain-of-thought reasoning.
- **Pricing (as of 2026-09-20):** $0.14 / $0.28 per 1M tokens ($0.035 cached).
- **Architecture:** Sparse Mixture-of-Experts with Multi-head Latent Attention (MLA) and DeepSeek-style RL (open weights / API).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **45.0%**
- Tau3-Banking / Tau2-Bench: **77.2%**
- GDPval-AA: **1290**
- Claw-Eval / ClawProBench: **73.4**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.8%**

Reasoning / knowledge:

- GPQA Diamond: **69.0%**
- HLE: **30.4%**
- LCR / MLCR: **84.0%**
- CritPt: **76.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **108 / #10**
- Omniscience Accuracy / Hallucination Rate: **86.1% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **54.8%**
- LiveCodeBench: **53.2%**
- SciCode / AA-SciCode: **74.0%**
- Vibe Code Bench: **79.1%**
- DeepSWE / Coding Index / other: **75.6**

Long context:

- MRCR 128k needle retrieval 98.5%; RULER benchmark 93.8% at 128k tokens.

### Normalized scores (1–100)

- **Tool use: 77/100.** Fast and reliable JSON function generation, capped by occasional formatting slips on deep bash pipelines.
- **Reasoning: 82/100.** Sharp mathematical logic and deductive chain-of-thought analysis.
- **Context window: 81/100.** 128k context window with consistent mid-tier retrieval.
- **Multimodal: 72/100.** Text-only model with external OCR preprocessor integration (penalized for lack of native vision/audio).
- **Coding: 83/100.** High-caliber code generation, algorithm optimization, and competitive coding performance.
- **Cost efficiency: 97/100.** Extremely low API pricing with high throughput economics.
- **Overall Score: 79.0/100.** Exceptional value for coding and algorithmic reasoning at budget API pricing.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
