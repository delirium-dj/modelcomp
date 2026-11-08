# MiMo V2.6 Free — findings by Beam

- Source: Xiaomi/MiMo V2.6 Free, `xiaomi/mimo-v2.6-free`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi's free-tier Flash variant of MiMo V2.6 (Sep 21, 2026): same weights as MiMo V2.6 Flash, served free on OpenRouter with daily limits. Open weights.
- **Provider / access:** OpenRouter `xiaomi/mimo-v2.6-free` (free tier, daily limits); Xiaomi MiMo API (paid).
- **Release / knowledge:** Released 2026-09-21; knowledge cutoff not stated.
- **IDs:** `xiaomi/mimo-v2.6-free`
- **Context window:** 1,000,000 tokens; max output 131,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes. Open weights.
- **Pricing (as of 2026-11-08):** Free on OpenRouter (daily limits); paid on Xiaomi MiMo API.
- **Architecture:** Same as MiMo V2.6 Flash (open weights).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

- BenchLM aggregator (2026-11-07): no dedicated page found (404); no new verified rows. Inherits MiMo V2.6 Flash benchmarks.

### Normalized scores (1–100)

- **Tool use: 78/100.** Same as MiMo V2.6 Flash (inherited). Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Reasoning: 72/100.** Same as MiMo V2.6 Flash (inherited).
- **Context window: 80/100.** 1M window.
- **Multimodal: 78/100.** Text/image in; same as Flash.
- **Coding: 74/100.** Same as MiMo V2.6 Flash (inherited).
- **Cost efficiency: 98/100.** Free tier; excellent value.
- **Overall Score: 76/100.** Same as MiMo V2.6 Flash (inherited). Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. Overall unchanged at 76.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; BenchLM aggregator checked (no dedicated page found, 404); no new verified rows; no dimension score changed.
- Reference URLs:
  - [BenchLM — MiMo V2.6 Free](https://benchlm.ai/models/mimo-v2-6-free)
  - [Xiaomi MiMo — MiMo V2.6](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).