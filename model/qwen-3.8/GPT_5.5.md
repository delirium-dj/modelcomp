# Qwen 3.8 — findings by GPT 5.5

- Source: Alibaba/Qwen 3.8
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Qwen 3.8 is Alibaba's broader 3.8-generation model family, including dense/local, Flash, Max, and Next-style variants for coding, reasoning, and long-context use.
- **Provider / access:** Alibaba Cloud Model Studio, Qwen routes, and local/open-weight variants.
- **Release / knowledge:** Qwen 3.8 family public coverage appeared in August/September 2026.
- **IDs:** `alibaba/qwen3.8`
- **Context window:** Variant-dependent; public Qwen 3.8 local reports commonly cite 262K for 27B and 1M for Max/Flash-class routes.
- **Modalities:** Variant-dependent; Max/Omni/Flash variants include multimodal routes.
- **Pricing (as of 2026-10-05):** Variant-dependent; Alibaba public pricing lists qwen3.8-max at $1.6/M input and $6.4/M output internationally, while Flash/27B differ by route.
- **Architecture:** Qwen family; variants include sparse MoE and dense/open models.

### Raw benchmarks found

Agent / tool use:

- BenchGecko: tracks the Qwen 3.8 family as nine variants with pricing, context, and benchmark scores (`https://www.benchgecko.ai/family/qwen-3-8`).
- Tom's Hardware Premium noted benchmarking Qwen 3.8 among September 2026 AI topics (`https://www.tomshardware.com/tech-industry/this-week-on-toms-hardware-premium-september-12-2026-benchmarking-qwen-3-8-the-splintered-compute-economy-and-ai-breakthroughs`).
- Terminal-Bench 2.1: **no verified public score found for generic Qwen 3.8**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Qwen3.8-Next architecture paper covers a Flash-Next sparse architecture with 125B parameters and 6B activated per token, illustrating family-level architecture work (`https://arxiv.org/abs/2608.30320`).
- GPQA Diamond: **no verified public score found for generic Qwen 3.8**
- HLE: **no verified public score found**

Coding:

- Local-user reports describe Qwen 3.8 27B and Flash Next for agentic coding, but not a controlled benchmark for the generic family slug.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Family variants range from 262K to 1M; no single generic retrieval score found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Family-level tool/coding evidence is good, but generic slug mixes variants.
- **Reasoning: 84/100.** Qwen 3.8 family is strong, especially Max/Next, capped by ambiguity of the generic entry.
- **Context window: 86/100.** Variant contexts are large, but not uniform.
- **Multimodal: 78/100.** Some variants are multimodal, but not all.
- **Coding: 84/100.** Coding use is strong across local and hosted variants, capped by no exact generic benchmark.
- **Cost efficiency: 86/100.** Qwen routes are generally cost-effective, with wide variance by variant.
- **Overall Score: 83/100.** Mean of the five quality dimensions; best fit is a family-level comparison anchor rather than one exact endpoint.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
