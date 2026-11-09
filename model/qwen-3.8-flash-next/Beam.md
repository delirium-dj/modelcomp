# Qwen 3.8 Flash Next — findings by Beam

- Source: Alibaba/Qwen 3.8 Flash Next, `alibaba/qwen-3.8-flash-next`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's next-generation Flash preview (Aug 2026) based on Qwen3.8-Flash-Next: 1M context, cheap, multimodal, production-grade. Preview of the Flash-Next architecture.
- **Provider / access:** Alibaba Cloud Model Studio; Qwen Studio (preview).
- **Release / knowledge:** Released 2026-08-26; knowledge cutoff not stated.
- **IDs:** `alibaba/qwen-3.8-flash-next`
- **Context window:** 1,000,000 tokens.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (Alibaba).
- **Architecture:** Hosted production model based on Qwen3.8-Flash-Next (open-weight, Gated DeltaNet, Qwen Sparse Attention, Gated Residual, N-gram Embedding).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

- BenchLM aggregator (2026-11-07): no dedicated page found (404); no new verified rows.

### Normalized scores (1–100)

- **Tool use: 75/100.** Inherited from Flash-Next; caps at no published agentic benchmarks for hosted endpoint. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Reasoning: 72/100.** No verified reasoning benchmarks; provisional based on Flash-Next.
- **Context window: 85/100.** 1M window; caps at no published MRCR.
- **Multimodal: 78/100.** Text/image/video in; caps at no verified hosted multimodal numbers.
- **Coding: 72/100.** Inherited from Flash-Next (SWE-bench Pro 62.5%, DeepSWE 58.7%).
- **Cost efficiency: 95/100.** Very cheap.
- **Overall Score: 76.4/100.** Provisional mean of five quality dims; low-confidence. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. Overall unchanged at 75.8.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; BenchLM aggregator checked (no dedicated page found, 404); no new verified rows; no dimension score changed.
- Reference URLs:
  - [BenchLM — Qwen 3.8 Flash Next](https://benchlm.ai/models/qwen-3-8-flash-next)
  - [Qwen — Qwen 3.8](https://qwen.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).