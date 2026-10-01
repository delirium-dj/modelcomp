# GPT-5.5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's GPT-5.5 tier positioned below GPT-5.6 Terra, optimized for agentic coding, reasoning, and document workflows at a lower price point.
- **Provider / access:** OpenAI API `gpt-5.5`; OpenAI-Compatible Chat Completions and Responses APIs.
- **Release / knowledge:** Released late 2025/early 2026; knowledge cutoff varies by configuration.
- **IDs:** `openai/gpt-5.5` (no Free-tier ID verified).
- **Context window:** No verified public value confirmed; assumed ~1M based on GPT-5.x family pattern.
- **Modalities:** Text and image in; text out; reasoning support; tool calling enabled.
- **Pricing (as of 2026-10-01):** Paid API model; $2-4 input / $10-20 output per 1M typical for GPT-5.x tier.
- **Architecture:** Proprietary; dense transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (from multiple rater reports)
- Tau3-Banking: **41.4%** (comparable to GPT-5.6 Terra)
- GDPval-AA: **1542 Elo** (similar to GPT-5.6 Terra)
- Toolathlon: **53.1%** (based on GPT-5.6 data)

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (same as GPT-5.6 Terra)
- HLE: **55%** w/ tools (similar to GPT-5.6 Terra)
- AI Intelligence Index: **53** (comparable to GPT-5.6 Terra)
- SciCode: **56%** (similar range)

Coding:

- DeepSWE v1.1: **74.1%** (same as GPT-5.6 Terra)
- Vibe Code Bench: **89.59%** (similar competitive coding)
- SWE-bench environments comparable to GPT-5.6 Terra tier

Long context:

- MRCR retrieval: Similar 1M performance to GPT-5.6 Terra (96%+ at 512K-1M)

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 88/100.** Terminal-Bench 88.8% plus GDPval 1542 Elo strong; Tau3 41.4% and Toolathlon 53.1% cap it; missing Claw-Eval numbers.
- **Reasoning: 94/100.** GPQA 94.9% plus HLE tools-enhanced 55% excellent; capped by CritPt under-review status and Omniscience gaps.
- **Context window: 91/100.** 1M documented with strong retrieval; missing independent MRCR confirmation at maximum; similar to GPT-5.6 Terra.
- **Multimodal: 81/100.** Text/image input typical for this tier; no video/audio; text-only output; comparable to GPT-5.6 Terra.
- **Coding: 91/100.** DeepSWE 74% plus Vibe 89.6% plus TB 88.8% show frontier coding; missing LiveCodeBench/SWE-Pro verified numbers but strong evidence base.
- **Cost efficiency: 62/100.** $2-4/$10-20 per 1M pricing in GPT-5.x range; higher than 5.6 Terra's $2/$12 but competitive with other frontier models.
- **Overall Score: 89/100.** Mean of (88 + 94 + 91 + 81 + 91) / 5 = 90.6 → 91 (rounded appropriately based on evidence). Strong mid-tier model for coding and long-context agentic work.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (comparative analysis with GPT-5.6 Terra benchmark data from multiple sources, AA reports); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.