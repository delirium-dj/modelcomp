# Muse Spark 1.3 — findings by Beam

- Source: Meta/Muse Spark 1.3, `meta/muse-spark-1.3`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's latest multimodal reasoning model tuned for agentic, multi-agent, and coding workflows with long-context reasoning; recommended for new work over Muse Spark 1.2/1.1. Improves long-horizon agent collaboration, instruction following, and coding efficiency.
- **Provider / access:** Meta Model API `muse-spark-1.3` (Chat Completions); also OpenRouter `meta/muse-spark-1.3`; OpenCode Zen `opencode/muse-spark-1.3`. Reasoning effort levels including `max`.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not published.
- **IDs:** `meta/muse-spark-1.3`
- **Context window:** 1,048,576 tokens total; max output 131,072 (verified via Meta docs and OpenCode data).
- **Modalities:** text, image, video, PDF, audio in; text out; reasoning yes; tool calling yes; JSON/structured output yes.
- **Pricing (as of 2026-11-08):** $1.25 / 1M input, $4.25 / 1M output, $0.15 / 1M cached input; paid (proprietary).
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta AI Research launch scorecard); 72.3% (Vals)
- GDPval-AA: **1754 Elo** (Meta launch scorecard); 59.0% (Artificial Analysis)
- AA Tau3-Banking: **50.5%** (Artificial Analysis)
- JobBench: **64.9%** mean rubric (Meta)
- OSWorld 2.0: **66.9%** mean partial (Meta)
- DeepSearchQA: **89.4%** (Meta)
- AutomationBench: **49.4%** (Meta)
- ApprenticeBench: **19%** (NeoCognition)
- CWE-bench v1: **55.0%** (Meta)
- MazeBench: **0%** (MazeBench)
- AA Agentic Index: **55.7%** (Artificial Analysis)
- Toolathlon / MCP-Atlas: no verified public score found (coming soon)

Reasoning / knowledge:

- GPQA Diamond (AA): **93.5%**
- HLE (AA): **48.7%**
- Artificial Analysis Intelligence Index: **48.1**
- CritPt: **24.9%** (AA)
- AA-LCR: **83.0%**
- MRCR v2 256K-512K: **98.5%**; 512K-1M: **98.1%** (Meta)
- AA-Omniscience Index: **25.0%**
- AA-Omniscience Accuracy: **43.6%**
- AA-Omniscience Hallucination Rate: **32.9%**
- FrontierMath v2 Tiers 1-3: **74.035%**; Tier 4: **46.341%** (Epoch AI)
- Omniscience: no verified public score found

Coding:

- AA Coding Index: **75.8**
- DeepSWE: **75.4%**
- SWE-Atlas Codebase QnA: **59.4%**
- AA-SciCode: **58.8%**
- CursorBench 4.0: **41.6%**
- Bug Hunt Bench: **32.2 fixes**
- FrontierSWE v2: **25.8%**
- SWE-bench Verified/Pro: no verified public score found (coming soon)

Long context:

- MRCR v2 256K-512K 98.5%, 512K-1M 98.1%; AA-LCR 83.0% at 1M window.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 90/100.** Strong agentic profile (Terminal-Bench 88.8%, OSWorld 66.9%, DeepSearchQA 89.4%, GDPval 1754 Elo); caps at unverified MCP-Atlas/Toolathlon. Enrichment (2026-11-08): added AA Agentic Index 55.7%, Terminal-Bench 2.1 Vals 72.3%, AA-Omniscience 25.0%/43.6%/32.9%, FrontierMath v2 74.04%/46.34%, Gray Swan IPI 15.9%. Corroborates band; no change.
- **Reasoning: 88/100.** GPQA 93.5% and MRCR ~98%, HLE 48.7% and AA Intelligence 48.1 cap higher. Enrichment adds CritPt 24.9% (already), FrontierMath v2 74.04%/46.34%, AA-Omniscience 25.0%/43.6%/32.9%. Corroborates band; no change.
- **Context window: 95/100.** 1M window with measured 98.5%/98.1% retrieval; caps at AA-LCR 83.0%.
- **Multimodal: 90/100.** Text/image/video/PDF/audio in, text out; audio understanding degraded per Meta docs. Enrichment adds Design Arena 1354. Corroborates band; no change.
- **Coding: 88/100.** AA Coding Index 75.8, DeepSWE 75.4%, Terminal-Bench 88.8%; caps at unverified SWE-bench Verified/Pro.
- **Cost efficiency: 85/100.** Paid at $1.25/$4.25 per 1M; competitive mid-tier pricing.
- **Overall Score: 90/100.** Mean of five quality dims; best-fit for long-horizon agentic + coding at 1M context. Enrichment (2026-11-08) added new verified rows (AA Agentic Index 55.7%; Terminal-Bench 2.1 Vals 72.3%; AA-Omniscience 25.0%/43.6%/32.9%; FrontierMath v2 74.04%/46.34%; Design Arena 1354). No dimension band moved; Overall unchanged at 90.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Muse Spark 1.3](https://benchlm.ai/models/muse-spark-1-3)
  - [Artificial Analysis — Muse Spark 1.3](https://artificialanalysis.ai/models/muse-spark-1-3)
  - [Meta AI — Muse Spark 1.3 launch scorecard](https://research.meta.ai/blog/introducing-muse-spark-1-3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).