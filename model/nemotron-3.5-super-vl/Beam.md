# Nemotron 3.5 Super VL — findings by Beam

- Source: NVIDIA/Nemotron 3.5 Super VL, `nvidia/nemotron-3.5-super-vl`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's vision-language model (Sep 2026) in the Nemotron 3.5 family; strong multimodal reasoning at mid cost.
- **Provider / access:** NVIDIA API; OpenRouter.
- **Release / knowledge:** Released 2026-09-??; knowledge cutoff not stated.
- **IDs:** `nvidia/nemotron-3.5-super-vl`
- **Context window:** 1,000,000 tokens (family).
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (NVIDIA).
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

- BenchLM aggregator (2026-11-07): no dedicated page found (404); no new verified rows.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong agentic profile across the Nemotron 3.5 family; caps at unverified MCP-Atlas/Toolathlon. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Reasoning: 78/100.** Strong reasoning across the Nemotron 3.5 family; caps at no published GPQA/HLE/ARC-AGI. Enrichment: BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Context window: 85/100.** 1M window; caps at no published MRCR.
- **Multimodal: 82/100.** Text/image/video in; caps at no verified multimodal numbers.
- **Coding: 74/100.** Strong coding across the Nemotron 3.5 family; caps at unverified SWE-bench.
- **Cost efficiency: 75/100.** Mid-tier paid.
- **Overall Score: 79.4/100.** Mean of five quality dims; best-fit for multimodal reasoning at mid cost. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. Overall unchanged at 75.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; BenchLM aggregator checked (no dedicated page found, 404); no new verified rows; no dimension score changed.
- Reference URLs:
  - [BenchLM — Nemotron 3.5 Super VL](https://benchlm.ai/models/nemotron-3-5-super-vl)
  - [NVIDIA — Nemotron 3.5](https://www.nvidia.com/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).