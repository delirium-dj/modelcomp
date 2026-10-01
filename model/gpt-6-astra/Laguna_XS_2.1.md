# GPT-6 Astra — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship reasoning model for coding, research, document workflows, and computer use, positioned above GPT-5.6 Sol with 1M context and staged rollout.
- **Provider / access:** OpenAI API `gpt-6-astra`; OpenAI-Compatible Chat Completions and Responses APIs; OpenCode Zen `opencode/gpt-6-astra`.
- **Release / knowledge:** Released 2026-09-03; knowledge cutoff 2026-04-30 per OpenAI documentation.
- **IDs:** `openai/gpt-6-astra`; `opencode/gpt-6-astra` (no Free-tier ID).
- **Context window:** 1,050,000 tokens total (1M); 128,000 max output; verified in OpenAI model docs.
- **Modalities:** Text, image, PDF in; text out; reasoning support; native tool calling enabled.
- **Pricing (as of 2026-10-01):** $10 in / $50 out per 1M tokens; cached $1 input / $12.50 write; price doubling at 272K input. Paid API model.
- **Architecture:** Proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.3%** (BenchLM verified record)
- Tau3-Banking: **41.4%** (BenchLM AI mirror, rank #11/14)
- GDPval-AA v2: **1542 Elo** (Artificial Analysis, max effort)
- SWE Atlas Codebase QnA: **62%** (Artificial Analysis, 2026-09-09)
- OSWorld 2.0: **72.6%** (OpenAI best-reported)

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI best-reported, #1/464 on BenchmarkList)
- HLE: **55%** (AA max, tools variant 57.2% reported separately)
- LCR v1.1: **81%** (AA max)
- CritPt: **32%** (AA max, under review)
- AI Intelligence Index: **53** (AA v4.3.2 max), **88.69** (BenchLM v5.7, #1 of 194)
- OmniSense Accuracy: **62.6%**, Hallucination: **51%** (BenchLM mirror)
- SciCode: **56%** (AA max)

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI best-reported, #2/33)
- Vibe Code Bench v1.1: **89.59%** (BenchLM, #4/103)
- Terminal-Bench 4.0: **59%** (AA max)

Long context:

- MRCR v2 8-needle: **100% at 256K-512K**, **96.3% at 512K-1M** (OpenAI vendor-reported)

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 88/100.** TB 2.1 87.3% and OSWorld 72.6% show strong agent capability; Tau3 41.4% and Banking GDPval 1542 Elo fall below frontier anchors; capped by lack of Claw-Eval and missing SWE-Pro/LiveCodeBench verified scores.
- **Reasoning: 94/100.** GPQA 96% plus HLE tools-enhanced 57.2% place at frontier; capped by CritPt 32% (under review) and Omniscience 62.6% not reaching top-tier.
- **Context window: 99/100.** Full 1M+ documented with strong MRCR retrieval (100% at 256K-512K, 96.3% at 512K-1M); perfect lower-range prevents 100; missing independent RULER confirmation.
- **Multimodal: 80/100.** Text/image/PDF input; no audio/video; text-only output caps the score at the PDF-input tier.
- **Coding: 92/100.** DeepSWE 74.1% + Vibe 89.6% + TB 87.3% indicate frontier coding; capped by lacking verified SWE-bench Verified/LiveCodeBench numbers and TB 4.0 59%.
- **Cost efficiency: 30/100.** $10/$50 per 1M is high-end paid pricing; significantly above competitors like Gemini 3.8 Flash ($0.00075/$0.00225); cost excluded from Overall.
- **Overall Score: 91/100.** Mean of (88 + 94 + 99 + 80 + 92) / 5 = 90.6 → 91. Best-fit: high-budget long-context research and coding agents; excels at reasoning and tool use but expensive for routine workloads.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (OpenAI launch docs, Artificial Analysis, BenchmarkList, BenchLM); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.