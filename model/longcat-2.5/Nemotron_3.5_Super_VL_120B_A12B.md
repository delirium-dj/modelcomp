# LongCat 2.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: apivale.com (`apivale.com/blog/longcat-2-5-api-setup-benchmarks/`), modelbenchmark.io (`modelbenchmark.io/models/longcat-2-5`), Vercel AI Gateway (`vercel.com/ai-gateway/models/longcat-2.5-preview`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5
- **Short description:** Meituan's multimodal reasoning model for coding and agentic workflows, released September 2026; successor to LongCat 2.0; 1M-token context; text+image input, text output; supports tool calling and optional thinking; not open weights.
- **Provider / access:** Meituan LongCat API (`meituan/longcat-2.5`, Chat Completions + Anthropic Messages compatible); Vercel AI Gateway route (`meituan/longcat-2.5-preview`); APIVALE proxy (`infer/meituan/longcat-2.5`).
- **Release / knowledge:** Released 2026-09-25 (modelbenchmark.io) / September 2026; knowledge cutoff not stated.
- **IDs:** `meituan/longcat-2.5` (APIVALE), `meituan/longcat-2.5-preview` (Vercel AI Gateway). No Free ID confirmed on OpenCode Zen.
- **Context window:** 1,000,000 tokens declared (all three sources); max output 131K tokens (modelbenchmark.io, Vercel).
- **Modalities:** Text and image in; text out; tool calling yes (Vercel); optional thinking/reasoning (Vercel); structured output/JSON not explicitly confirmed.
- **Pricing (as of 2026-10-20):** Uncached input $0.30/1M, cached input $0.006/1M, output $1.20/1M via Vercel AI Gateway; direct/list $0.75 input / $2.95 output / $0.015 cache read via modelbenchmark.io/nano-gpt. Paid API, no Free tier confirmed.
- **Architecture:** Sparse MoE; 1.6-trillion total parameters, ~48 billion active parameters per token (apivale); LongCat Sparse Attention (LSA); proprietary (weights not public).

### Raw benchmarks found

Coding:

- SWE-bench Lite: **88.6%** (apivale.com; approaches Claude Sonnet 5 at 92.4%)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 35/100.** Supports tool calling and optional thinking (Vercel AI Gateway), but no agent/tool benchmark scores (Terminal-Bench, BrowseComp, OSWorld, etc.) found.
- **Reasoning: 35/100.** No reasoning benchmark scores (GPQA, HLE, MMLU, ARC-AGI, Intelligence Index) found; only the SWE-bench Lite coding result provides a proxy.
- **Context window: 75/100.** Verified 1M-token context with 131K max output; no long-context retrieval score (LCR, MRCR, RULER) found.
- **Multimodal: 35/100.** Text+image in, text out; no vision benchmark scores (MMMU, MMMU-Pro, etc.) found.
- **Coding: 60/100.** SWE-bench Lite 88.6% is strong, approaching Claude Sonnet 5 (92.4%); but no SWE-bench Verified, LiveCodeBench, or HumanEval scores found to corroborate.
- **Cost efficiency: 70/100.** Low pricing ($0.30 input / $1.20 output per 1M, cached $0.006 via Vercel) but paid — no Free tier confirmed; strong value per dollar but not free.
- **Overall Score: 48/100.** Half-up mean of (35 + 35 + 75 + 35 + 60) / 5 = 48.0 → 48. Best-fit recommendation: low-cost long-context coding model with 1M window; weak independent benchmark evidence beyond SWE-bench Lite — treat scores as provisional.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (apivale.com benchmarks + modelbenchmark.io specs/pricing + Vercel AI Gateway pricing/modalities); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.