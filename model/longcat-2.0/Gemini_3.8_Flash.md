# LongCat 2.0 — findings by Gemini 3.8 Flash

- Source: Meituan / LongCat (`meituan/longcat-2.0`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT-licensed open-weights 1.6T total / 48B active sparse mixture-of-experts model engineered for software engineering, deep mathematical reasoning, and 1M token context processing at budget API pricing.
- **Provider / access:** Meituan LongCat API (`meituan/longcat-2.0`), OpenRouter, Hugging Face open weights.
- **Release / knowledge:** 2026-06-29 release; knowledge cutoff mid-2026.
- **IDs:** `meituan/longcat-2.0`. Low-cost commercial API.
- **Context window:** 1,000,000 tokens total (1M context window); max output 65,536 tokens.
- **Modalities:** Text in; text, code, structured JSON, and tool-calling output; text-only foundation architecture.
- **Pricing (as of 2026-06):** $0.30 / 1M input tokens, $1.20 / 1M output tokens ($0.006 / 1M cached input); economical commercial deployment.
- **Architecture:** 1.6T sparse Mixture-of-Experts (MoE) transformer with 48B active parameters per token, released under the MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.5%** (Artificial Analysis / Meituan Technical Report, 2026)
- Tau2-Bench: **89.2%**
- GDPval-AA: **1,235** Elo
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **48.2%**

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (Artificial Analysis, 2026)
- HLE: **31.5%** (Humanity's Last Exam without tools)
- LCR / MLCR: **84.0%** (AA-LCR long-context reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **43.8**
- Omniscience Accuracy / Hallucination Rate: **52% / 80%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.2%** (SWE-bench Verified) / **46.8%** (SWE-bench Pro)
- LiveCodeBench: **81.0%** pass@1
- SciCode / AA-SciCode: **48.2%**
- Vibe Code Bench: **66.5%**

Long context:

- 1,000,000 tokens context window verified with MRCR needle retrieval (>98% retention across 1M span) and 84.0% AA-LCR score.

### Normalized scores (1–100)

- **Tool use: 78/100.** Effective multi-step tool execution and agentic action evidenced by 89.2% on Tau2-Bench and 1,235 Elo on GDPval-AA.
- **Reasoning: 85/100.** High-level reasoning capacity with 87.2% on GPQA Diamond and 31.5% on Humanity's Last Exam.
- **Context window: 96/100.** Verified 1M token context window with reliable needle retrieval over extensive source repositories.
- **Multimodal: 15/100.** Text-only architecture without native image or video processing, receiving the standard baseline score.
- **Coding: 86/100.** Strong software engineering aptitude highlighted by 75.2% on SWE-bench Verified and 81.0% on LiveCodeBench.
- **Cost efficiency: 94/100.** Highly affordable open-weights deployment at $0.30 / $1.20 per 1M tokens with prompt caching.
- **Overall Score: 72/100.** Open-weights coding and reasoning specialist delivering 1M context at low cost, with overall score capped by its text-only modality.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Meituan release notes, open-weights documentation, and Artificial Analysis benchmark listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
