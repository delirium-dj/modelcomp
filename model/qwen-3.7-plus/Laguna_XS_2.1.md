# Qwen 3.7 Plus — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, llm-stats, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba Qwen team's mid-tier 3.7-generation model; leads internal QwenWorldBench agentic-simulation board ahead of Qwen3.7 Max.
- **Provider / access:** Alibaba Qwen (paid API); OpenCode Zen `opencode/qwen-3.7-plus`; OpenRouter `qwen/qwen3.7-plus`.
- **Release / knowledge:** Released 2026-06-03; knowledge cutoff undisclosed.
- **IDs:** `opencode/qwen-3.7-plus`, `qwen/qwen3.7-plus-20260602`.
- **Context window:** 1,000,000 tokens (1M) / 131K max output; verified via CloudPrice specs.
- **Modalities:** Text, image, PDF in; text out; no video/audio.
- **Pricing (as of 2026-10-01):** $0.32 input / $1.28 output per 1M tokens (5 providers on CloudPrice); no free tier.
- **Architecture:** Proprietary; Qwen 3.7 family; 1M context with strong coding optimization.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **70.3%**
- Claw-Eval: **62.7%**
- BFCL v4: **72.9%**
- MCP Atlas: **73.2%**
- OSWorld-Verified: **73.3%**
- QwenWorldBench (internal): **0.621, rank #1 of 2**
- VITA-Bench: **45.6%**
- DeepPlanning: **62.3%**

Reasoning / knowledge:

- GPQA Diamond: **90.3%**
- HLE: **34.7%**
- MMLU-Pro: **88.5%**
- HMMT Feb 2026: **92.9%**
- CharXiv: **85.9%**
- LCR: **0.7**
- AI Intelligence Index: **30.8** (#89)
- BenchLM overall: **65.68** (#42)

Coding:

- SWE-bench Verified: **77.7%**
- SWE-bench Pro: **57.6%**
- LiveCodeBench: **89.6%**
- NL2Repo: **41.1%**
- SciCode: **50.0%**
- Coding Index: **55.9%**

Long context:

- No MRCR/RULER retrieval claims published for this cut.

Multimodal:

- Text/image/PDF input supported; no video/audio.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 86/100.** Claw 62.7%, OSWorld 73.3%, MCP Atlas 73.2%, BFCL 72.9%; strong orchestration but capped by VITA 45.6% tail and no GDPval/Tau3 data.
- **Reasoning: 88/100.** GPQA 90.3% + MMLU-Pro 88.5% + HMMT 92.9% + CharXiv 85.9% excellent reasoning; capped by HLE 34.7% mid-band, LCR 0.7 tail.
- **Context window: 95/100.** Full 1M + 131K output verified; no retrieval saturation proof caps from 100.
- **Multimodal: 75/100.** Text/image/PDF in; no video/audio; good document handling.
- **Coding: 87/100.** SWE-V 77.7% + LiveCode 89.6% + SWE-Pro 57.6%; strong coding ability; capped by SciCode 0.5 tail.
- **Cost efficiency: 93/100.** $0.32/$1.28 per 1M is exceptionally cost-effective for a model in this tier.
- **Overall Score: 86/100.** Mean of (86+88+95+75+87)/5 = 86.2 → 86. Best fit: budget-friendly agentic coding at 1M context.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (BenchLM, llm-stats, CloudPrice); score-derived comparative analysis; normalized 1-100 interpretations, not official vendor scores. Reference report available via Muse Spark 1.3.
- Future sources: add a new file next to this one, e.g. `Qwen_4.0.md`, using the same headings.