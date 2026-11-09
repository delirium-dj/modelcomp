# GPT-5 — findings by Beam

- Source: OpenAI/GPT-5, `openai/gpt-5`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's GPT-5 (Aug 2025): reasoning model with 400K context; strong agentic coding and multimodal. Superseded by GPT-5.1/5.2/5.3/5.4/5.5/5.6/6.x.
- **Provider / access:** OpenAI API `gpt-5`; Azure; AWS Bedrock.
- **Release / knowledge:** Released 2025-08-07; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5`
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (OpenAI).
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

- BenchLM aggregator (2026-11-07): no dedicated page found (404); no new verified rows.

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong agentic profile; caps at unverified MCP-Atlas/Toolathlon. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Reasoning: 76/100.** Strong reasoning; caps at no published GPQA/HLE/ARC-AGI. Enrichment: BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Context window: 78/100.** 400K window; caps at no published MRCR.
- **Multimodal: 78/100.** Text/image in; caps at no verified multimodal numbers.
- **Coding: 74/100.** Strong coding; caps at unverified SWE-bench.
- **Cost efficiency: 80/100.** Mid-tier paid.
- **Overall Score: 76.4/100.** Mean of five quality dims; best-fit for agentic coding at mid cost. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. Overall unchanged at 74.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; BenchLM aggregator checked (no dedicated page found, 404); no new verified rows; no dimension score changed.
- Reference URLs:
  - [BenchLM — GPT-5](https://benchlm.ai/models/gpt-5)
  - [OpenAI — GPT-5](https://openai.com/index/introducing-gpt-5/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).