# LongCat 2.0 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT-licensed open-weights 1.6T total / 48B active sparse Mixture-of-Experts foundation model, pre-trained and served on domestic Chinese AI ASICs, engineered for agentic software engineering and 1M token context processing.
- **Provider / access:** Meituan LongCat API, [OpenRouter](https://openrouter.ai/models/meituan/longcat-2.0) (`meituan/longcat-2.0`), [Hugging Face](https://huggingface.co/meituan) open weights under MIT license.
- **Release / knowledge:** June 29, 2026 (initially previewed on OpenRouter as "Owl Alpha").
- **IDs:** `meituan/longcat-2.0`, `longcat-2.0`
- **Context window:** 1,000,000 tokens total (1M context window; max output 65,536 tokens).
- **Modalities:** Text in; text, code, structured JSON, and tool-calling output; text-only foundation architecture.
- **Pricing (as of 2026-10-11):** $0.30 / 1M input tokens, $1.20 / 1M output tokens ($0.006 / 1M cached input); economical commercial deployment.
- **Architecture:** 1.6T sparse Mixture-of-Experts (MoE) transformer with 48B active parameters per token, LongCat Sparse Attention (LSA), and dynamic zero-compute experts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.8%**
- Tau2-Bench: **89.2%**
- GDPval-AA: **1,235 Elo**
- Toolathon / SWE Atlas: **48.2%**

Reasoning / knowledge:

- GPQA Diamond: **87.2%**
- Humanity's Last Exam (HLE): **31.5%**
- AA-LCR long-context reasoning: **84.0%**
- Artificial Analysis Intelligence Index: **19**

Coding:

- SWE-bench Pro: **59.5%**
- SWE-bench Multilingual: **77.3%**
- SWE-bench Verified: **75.2%**
- LiveCodeBench: **81.0%** pass@1
- SciCode: **48.2%**

Long context:

- 1,000,000 tokens context window verified with MRCR needle retrieval (>98% retention across 1M span) via LongCat Sparse Attention.

### Normalized scores (1–100)

- **Tool use: 78/100.** Effective multi-step tool execution and agentic action evidenced by 70.8% on Terminal-Bench 2.1 and 89.2% on Tau2-Bench.
- **Reasoning: 85/100.** High-level reasoning capacity with 87.2% on GPQA Diamond and 31.5% on Humanity's Last Exam.
- **Context window: 96/100.** Verified 1M token context window with reliable needle retrieval over extensive source repositories.
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, video, or audio processing.
- **Coding: 86/100.** Strong software engineering aptitude highlighted by 59.5% on SWE-bench Pro, 77.3% on SWE-bench Multilingual, and 75.2% on SWE-bench Verified.
- **Cost efficiency: 94/100.** Highly affordable open-weights deployment at $0.30 / $1.20 per 1M tokens with prompt caching at $0.006 / 1M.
- **Overall Score: 72/100.** Arithmetic mean of non-cost metrics: (78 + 85 + 96 + 15 + 86) / 5 = 72.0. Open-weights coding and reasoning specialist delivering 1M context at low cost, with overall score capped by its text-only modality.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of Meituan technical documentation, OpenRouter pricing, and Artificial Analysis leaderboards.
