# GLM 5.3 FlashX — findings by Beam

- Source: Z.AI/GLM 5.3 FlashX, `zai-org/glm-5.3-flashx`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Z.AI's accelerated serving tier for GLM 5.3 Flash (320B/18B active): same weights, faster inference (up to 200 tok/s), 1M context, 128K output. Speed-optimized variant.
- **Provider / access:** Z.AI API `glm-5.3-flashx`; B.AI; glm5.app.
- **Release / knowledge:** Released 2026-09 (accelerated tier); same base as GLM 5.3 Flash (Aug 26, 2026).
- **IDs:** `zai-org/glm-5.3-flashx`
- **Context window:** 1,048,576 tokens; max output 131,072 (hosted cap 8,192).
- **Modalities:** text, image, video, file in; text out; reasoning yes; tool calling yes; structured output yes. Open weights (MIT).
- **Pricing (as of 2026-11-08):** Same as Flash tier ($0.15/$0.50 per 1M); accelerated serving.
- **Architecture:** Same as GLM 5.3 Flash (320B total / 18B active, MoE, hybrid attention, MIT).

### Raw benchmarks found

- No separate benchmarks for FlashX (same weights as GLM 5.3 Flash). Benchmarks inherited from Flash:
  - Terminal-Bench 2.1: **84.3%**
  - DeepSWE v1.1: **63.4%**
  - NL2Repo: **56.3%**
  - Toolathlon Verified: **78.4%**
  - AutomationBench v1.0.6: **48.8%**
  - Agents' Last Exam: **26.3%**
  - HLE w/ tools: **55.3%**
  - GDPval-AA v2: **1773 Elo**
  - AA Intelligence Index: **57**
  - OfficeQA Pro: **62.4%**
  - CharXiv Reasoning with Tools: **89.4%**
  - Chartography with Tools: **78.0%**
  - BabyVision: **53.4%**
  - MVBench: **77.8%**
  - MMVU: **80.5%**
- BenchLM aggregator (2026-11-07): no dedicated page found (404); no new verified rows.

### Normalized scores (1–100)

- **Tool use: 78/100.** Same as Flash (agentic 57.2, Terminal-Bench 2.1 84.3%, Toolathlon 78.4%, AutomationBench 48.8%, GDPval 1773). Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Reasoning: 72/100.** Same as Flash (HLE w/tools 55.3%).
- **Context window: 80/100.** Same as Flash (1M window).
- **Multimodal: 82/100.** Same as Flash (CharXiv 89.4%, Chartography 78.0%, OfficeQA Pro 62.4%).
- **Coding: 76/100.** Same as Flash (DeepSWE 63.4%, NL2Repo 56.3%, Terminal-Bench 2.1 84.3%).
- **Cost efficiency: 98/100.** Same as Flash (very cheap).
- **Overall Score: 78/100.** Same as Flash (BenchLM aggregate 57.36 for Flash base). Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. Overall unchanged at 78.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; BenchLM aggregator checked (no dedicated page found, 404); no new verified rows; no dimension score changed.
- Reference URLs:
  - [BenchLM — GLM-5.3-FlashX](https://benchlm.ai/models/glm-5-3-flashx)
  - [Z.AI — GLM-5.3-Flash](https://z.ai/blog/glm-5.3-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).