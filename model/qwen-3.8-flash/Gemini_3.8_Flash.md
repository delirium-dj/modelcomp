# Qwen 3.8 Flash — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`qwen-3.8-flash`, `qwen3.8-flash-next`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba Cloud's ultra-fast next-generation foundation model previewing Qwen4 architecture, utilizing hybrid Gated DeltaNet with Qwen Sparse Attention (QSA) and n-gram memory over a 1M context.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.8-flash`); Qwen Cloud (`qwen/qwen3.8-flash`); Hugging Face open weights (`Qwen/Qwen3.8-Flash-Next`).
- **Release / knowledge:** 2026-08-26 release; knowledge cutoff mid-2026.
- **IDs:** `alibaba/qwen3.8-flash`, `qwen/qwen3.8-flash` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (up to 991,808 input tokens, 131,072 max output tokens).
- **Modalities:** text, image, document, video in; text and code out; structured JSON; tool calling / function calling; deep thinking reasoning tokens.
- **Pricing (as of 2026-09-24):** CNY 0.8 / 1M input (~$0.11 / 1M in), CNY 2.7 / 1M output (~$0.38 / 1M out); OpenRouter / global references around $0.16 / 1M in, $0.47 / 1M out.
- **Architecture:** 125B parameter Mixture-of-Experts with 6B active per token, paired with 51B n-gram embeddings and 4B multi-token prediction (MTP) module.

### Raw benchmarks found

Agent / tool use:

- Toolathlon Verified: **73.5%** pass@1 (Qwen official model card)
- CoWorkBench (Office/Productivity agents): **73.9%** (Qwen official model card)
- JobBench (Professional workflows): **55.7%** (Qwen official model card)
- Agents' Last Exam: **24.3%** pass@1, **51.2** score (Qwen official model card)
- AndroidWorld (Mobile use): **84.5%** (Qwen official model card)
- OSWorld 2.0 (Computer use): **19.4%** binary, **52.3%** partial (Qwen official model card)
- RecreationBench: **49.9%** (Qwen official model card)
- Terminal-Bench 2.1 / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (Qwen official model card)
- Humanity's Last Exam (HLE): **35.9%** (Qwen official model card; judged by GPT-4o)
- IFBench (Instruction following): **81.3%** (Qwen official model card)
- MathVision: **90.6%** without CI, **95.7%** with CI (Qwen official model card)
- CharXiv (RQ): **84.6%** without CI, **90.6%** with CI (Qwen official model card)
- RealWorldQA: **88.5%** (Qwen official model card)
- CritPt: no verified public score found

Coding:

- LiveCodeBench v6: **91.9%** (Qwen official model card)
- SWE-bench Pro: **62.5%** (Qwen official model card; Claude Code harness, 256K context)
- SWE-bench Multilingual: **81.0%** (Qwen official model card; mini-SWE-agent harness)
- DeepSWE 1.1: **58.7%** (Qwen official model card; mini-SWE-agent)
- NL2Repo-Bench: **48.1%** (Qwen official model card)
- Vision2Web: **64.0%** (Qwen official model card)

Long context:

- LVBench (Long video understanding): **76.6%** (Qwen official model card)
- 1,000,000 token context window supported natively in production with Qwen Sparse Attention (QSA).

### Normalized scores (1–100)

- **Tool use: 89/100.** Verified 73.5% Toolathlon, 84.5% AndroidWorld, 73.9% CoWorkBench, and 55.7% JobBench prove enterprise-grade agent execution and multi-environment autonomy.
- **Reasoning: 90/100.** High 91.7% GPQA Diamond, 35.9% HLE, 81.3% IFBench, and 95.7% MathVision deliver top-tier logical reasoning in a compact active-parameter footprint.
- **Context window: 92/100.** Full 1,000,000 token multimodal context window optimized by micro-block QSA for high-speed retrieval and long-horizon agents.
- **Multimodal: 90/100.** High multimodal benchmark marks (88.5% RealWorldQA, 90.6% CharXiv, 76.6% LVBench video) with native image, chart, and video processing.
- **Coding: 91/100.** Superb 91.9% LiveCodeBench v6, 62.5% SWE-bench Pro, 81.0% SWE-bench Multilingual, and 58.7% DeepSWE 1.1 outshine major frontier closed models.
- **Cost efficiency: 96/100.** Incredible pricing at ~$0.11-$0.16/1M input and ~$0.38-$0.47/1M output, paired with open-weight availability under Qwen Community License.
- **Overall Score: 90/100.** Mean of quality dimensions: Math.round((89 + 90 + 92 + 90 + 91) / 5) = 90.4 -> 90.0 (half-up). Exceptional high-speed frontier efficiency model setting the bar for agentic throughput and cost-effective software engineering.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24 UTC
- Method: Public web research across official Qwen3.8-Flash-Next Hugging Face technical card and AI on Mac analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
