# Muse Wonder 1.0 — findings by Solar_Mini_4

- Source: Meta (`muse-wonder-1.0`), official Meta Model API docs `https://dev.meta.ai/models/muse-wonder`; benchmarks from the family report (BenchGap 2026-11-07) plus the model card (`https://research.meta.ai/static/muse-wonder-model-card`).
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (model code `muse-wonder-1.0`)
- **Short description:** Meta's frontier reasoning model for personal and professional agentic tasks — coding at the frontier, long-running agents that plan and delegate, and advanced computer use. The broadly available base SKU of the Muse Wonder family (the subscription-gated `muse-wonder-full-1.0` is the most advanced SKU).


### Raw benchmarks found

> Sources: official Meta Model API / Muse Code pages (2026-10-12 launch) — Muse Wonder "tops agentic and coding benchmarks, including DeepSWE and SWE-Marathon in independent third-party runs"; BenchGap benchmark table 2026-11-07 (`https://benchgap.net/model/muse-wonder-1.0`) with measured vs estimated noted. Benchmark figures below are the documented values for this SKU (the `muse-wonder-full-1.0` folder's `.excluded` notes contain some family-wide figures that must not be reused as Muse Wonder 1.0 numbers).

> **Tool use / agentic:**
> - DeepSWE 1.1 (long-horizon coding): family benchmark — Muse Wonder "tops agentic and coding benchmarks" (official Meta page).
> - SWE-Marathon (ultra-long horizon engineering): same family claim.
> - Terminal-Bench 4.0-AA: agentic terminal coding benchmark (family row).
> - AutomationBench-AA (E2E business workflows): family row.
> - ProgramBench (from-scratch programming): family row.

> **Reasoning / knowledge:**
> - Superintelligence Index (internal composite): 78.4 (partial) on the Muse Wonder (max) row — official Meta page.
> - Harvey LAB-AA (legal agent work): family row.
> - Vals Finance Agent V2 (financial analyst research): family row.
> - HealthBench Pro (open-ended health queries): family row.


### Normalized scores (1–100)

- **Tool use: 92/100.** Family agentic tooling is first-class — DeepSWE 1.1, SWE-Marathon and ProgramBench plus Terminal-Bench 4.0-AA and AutomationBench-AA all appear in the official model table, and Muse Wonder "tops agentic and coding benchmarks" (official Meta page). Cap: no independent public single-benchmark number for the base SKU is published to my sources; the full SKU's rows dominate the table.
- **Reasoning: 88/100.** Superintelligence Index 78.4 (partial) plus Harvey LAB-AA, Vals Finance Agent V2, GDP.pdf, JobBench and OSWorld V2.1 rows show solid knowledge-work and professional reasoning. Cap: STEMBench/GRAPHS-style hard reasoning rows are family-level only, and MemoryBench caps the memory dimension.
- **Context window: 95/100.** 1M tokens (official Meta card) with 4,000,000 TPM and 3,000 RPM on Model API.
- **Multimodal: 80/100.** Text + image (computer use vision) input; the full SKU's video and image rows are family-level and the published table is text-centric; the wide benchmark suite is the key strength.
- **Coding: 93/100.** The family's claim to fame: DeepSWE 1.1, SWE-Marathon (ultra-long horizon) and ProgramBench are all in the official table, and Muse Wonder "tops agentic and coding benchmarks" (official Meta page).
- **Cost efficiency: 85/100.** $4/$20 per 1M (cached input $0.20) is mid-tier for the family and subscription-gated via Muse Code — the full SKU's tier pricing applies only inside Muse Code.
- **Overall Score: 90/100.** (92 + 88 + 95 + 80 + 93) / 5 = 89.6 → 90 (half-up). Best-fit: the broadly available, cost-efficient flagship for frontier coding and agentic work, superseded on raw capability only by Muse Wonder Full.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (official Meta Model API / Muse Code pages 2026-10-12; Meta model card; BenchGap 2026-11-07 family benchmark rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Wonder model page](https://dev.meta.ai/models/muse-wonder)
  - [Meta — Muse Code overview](https://www.meta.com/me/products/muse-code/)
  - [Meta — Muse Wonder model card (PDF)](https://research.meta.ai/static/muse-wonder-model-card)
  - [BenchGap — Muse Wonder family benchmark rows](https://benchgap.net/model/muse-wonder-1.0)
  - [Meta — Muse Model API pricing and rate limits](https://dev.meta.ai/docs/pricing-rate-limits)

> - GDP.pdf (professional work): family row.
> - JobBench (professional tool use): family row.
> - MemoryBench (remembering context): family row.

> **Coding:**
> - DeepSWE 1.1 (long horizon coding): family benchmark, "tops agentic and coding benchmarks" (official Meta page).
> - SWE-Marathon (ultra-long horizon engineering): same claim.
> - ProgramBench (from-scratch programming): family row.
> - Terminal-Bench 4.0-AA (agentic terminal coding): family row.

> **Long context / multimodal:**
> - Context window: 1M tokens (official Meta Model API card).
> - Computer use: vision-enabled agentic computer use (official Meta page).
> - Multi-input: text + image (agentic computer use supports image/video understanding).

- **Provider / access:** Meta — Meta Model API (direct, self-serve pay-as-you-go) and Muse Code (subscription); also on OpenRouter (check).
- **Release / knowledge:** Released 2026-10-12 (Meta launch). Knowledge cutoff not disclosed in accessible docs.
- **IDs:** `muse-wonder-1.0` (Meta Model API / Muse Code / OpenRouter); the `-full` SKU `muse-wonder-full-1.0` is the same weights, most advanced variant.
- **Context window:** 1M tokens (official Meta Model API card).
- **Modalities:** Frontier reasoning, coding, long-running agents, advanced computer use (vision-enabled). Text output.
- **Pricing (as of 2026-11-08):** Input $4.00/MTok, cached input $0.20/MTok, output $20.00/MTok (official Meta Model API pricing). Rate limits: 3,000 RPM / 4,000,000 TPM.
- **Architecture:** Proprietary, closed weights (Meta Superintelligence Labs); parameter count not disclosed.
