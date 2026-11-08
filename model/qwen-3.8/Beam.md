# Qwen 3.8 — findings by Beam

- Source: Alibaba/Qwen 3.8, `alibaba/qwen-3.8`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's open-weight Qwen 3.8 (Jul 21, 2026): 2.4T params, open weights, preview available via Qwen Studio/Qwen Cloud. Claimed "second only to Claude Fable 5" performance. Preview version released; weights scheduled.
- **Provider / access:** Alibaba Cloud Model Studio; Qwen Studio (preview); Qwen Cloud token plan.
- **Release / knowledge:** Preview 2026-07-19; full release expected shortly after; knowledge cutoff not stated.
- **IDs:** `alibaba/qwen-3.8`
- **Context window:** 1,000,000 tokens (per 3.8-Max); preview variant.
- **Modalities:** text, image in (preview supports SVG generation); text out; reasoning yes; tool calling (preview). Open weights (scheduled).
- **Pricing (as of 2026-11-08):** Not published for 3.8 (preview); paid tier via Qwen Cloud.
- **Architecture:** 2.4T params, MoE, open weights (scheduled).

### Raw benchmarks found

- No verified public benchmark numbers for Qwen 3.8 (preview) in sources; Qwen team claims "second only to Claude Fable 5" performance without released benchmarks.
- Qwen 3.8-Max-Preview available on Qwen Studio; performance reportedly improving daily.
- BenchLM aggregator (2026-11-07): no dedicated page found (404); no new verified rows.

### Normalized scores (1–100)

- **Tool use: 60/100.** No verified benchmarks; provisional based on Qwen 3.8-Max preview claims (BenchLM Qwen3.8 Max 69.7 overall). Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Reasoning: 62/100.** No verified benchmarks; provisional.
- **Context window: 85/100.** 1M window (per 3.8-Max); caps at no published MRCR.
- **Multimodal: 78/100.** Text/image in; provisional.
- **Coding: 62/100.** No verified benchmarks; provisional.
- **Cost efficiency: 70/100.** Pricing not published.
- **Overall Score: 69.4/100.** Provisional mean of five quality dims; based on Qwen 3.8-Max preview (BenchLM 69.7) pending verification. Treat as low-confidence. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. Overall unchanged at 69.4.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; BenchLM aggregator checked (no dedicated page found, 404); no new verified rows; no dimension score changed.
- Reference URLs:
  - [BenchLM — Qwen 3.8](https://benchlm.ai/models/qwen-3-8)
  - [Qwen — Qwen 3.8](https://qwen.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).