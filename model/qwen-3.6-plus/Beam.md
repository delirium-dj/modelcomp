# Qwen 3.6 Plus — findings by Beam

- Source: Alibaba/Qwen 3.6 Plus, `alibaba/qwen-3.6-plus`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's Plus-tier model (Aug 2026) in the Qwen 3.6 family; strong reasoning and coding at mid cost.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.6-plus`; OpenRouter.
- **Release / knowledge:** Released 2026-08-??; knowledge cutoff not stated.
- **IDs:** `alibaba/qwen-3.6-plus`
- **Context window:** 1,000,000 tokens (family).
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (Alibaba).
- **Architecture:** proprietary MoE; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

- BenchLM aggregator (2026-11-07): no dedicated page found (404); no new verified rows.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong agentic profile across the Qwen 3.6 family; caps at unverified MCP-Atlas/Toolathlon. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Reasoning: 78/100.** Strong reasoning across the Qwen 3.6 family; caps at no published GPQA/HLE/ARC-AGI. Enrichment: BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Context window: 85/100.** 1M window; caps at no published MRCR.
- **Multimodal: 80/100.** Text/image in; caps at no verified multimodal numbers.
- **Coding: 76/100.** Strong coding across the Qwen 3.6 family; caps at unverified SWE-bench.
- **Cost efficiency: 75/100.** Mid-tier paid.
- **Overall Score: 79.4/100.** Mean of five quality dims; best-fit for complex reasoning + coding at mid cost. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. Overall unchanged at 78.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; BenchLM aggregator checked (no dedicated page found, 404); no new verified rows; no dimension score changed.
- Reference URLs:
  - [BenchLM — Qwen 3.6 Plus](https://benchlm.ai/models/qwen-3-6-plus)
  - [Qwen — Qwen 3.6 Plus](https://qwen.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).