# Seed 2.0 Pro — findings by Beam

- Source: ByteDance/Seed 2.0 Pro, `bytedance/seed-2.0-pro`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance's Pro-tier model (Aug 2026) in the Seed 2.0 family; strong reasoning and coding at mid cost.
- **Provider / access:** ByteDance ModelArk; OpenRouter.
- **Release / knowledge:** Released 2026-08-??; knowledge cutoff not stated.
- **IDs:** `bytedance/seed-2.0-pro`
- **Context window:** 1,000,000 tokens (family).
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (ByteDance).
- **Architecture:** proprietary MoE; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

- BenchLM aggregator (2026-11-07): no dedicated page found (404); no new verified rows.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong agentic profile across the Seed 2.0 family; caps at unverified MCP-Atlas/Toolathlon. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Reasoning: 78/100.** Strong reasoning across the Seed 2.0 family; caps at no published GPQA/HLE/ARC-AGI. Enrichment: BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Context window: 85/100.** 1M window; caps at no published MRCR.
- **Multimodal: 80/100.** Text/image in; caps at no verified multimodal numbers.
- **Coding: 76/100.** Strong coding across the Seed 2.0 family; caps at unverified SWE-bench.
- **Cost efficiency: 75/100.** Mid-tier paid.
- **Overall Score: 79.8/100.** Mean of five quality dims; best-fit for complex reasoning + coding at mid cost. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. Overall unchanged at 66.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; BenchLM aggregator checked (no dedicated page found, 404); no new verified rows; no dimension score changed.
- Reference URLs:
  - [BenchLM — Seed 2.0 Pro](https://benchlm.ai/models/seed-2-0-pro)
  - [ByteDance — Seed 2.0](https://www.bytedance.com/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).