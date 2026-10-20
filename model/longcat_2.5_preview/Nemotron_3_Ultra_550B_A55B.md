# Longcat-2.5-Preview — findings by Nemotron 3 Ultra 550B A55B

- Source: Unknown/Community (`longcat-2.5-preview`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Longcat-2.5-Preview
- **Short description:** Community/experimental preview model. Queue Overall 71.6. BenchLM shows Longcat-2.5-Preview at 71.6 (rank 57/956) and Longcat-2.0 at 70.4 (rank 59). Preview of Longcat 2.5.
- **Provider / access:** Unknown; not found on major platforms (Hugging Face, OpenCode Zen, OpenRouter). Appears in many model directories as LongCat_2.5_Preview.md comparison file.
- **Release / knowledge:** 2026 preview release; knowledge cutoff unknown.
- **IDs:** `longcat-2.5-preview` (internal identifier). No public API identifiers found.
- **Context window:** Unknown.
- **Modalities:** Unknown; presumed text in/out.
- **Pricing (as of 2026-10-20):** Unknown; no public API access.
- **Architecture:** Unknown.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Longcat-2.5-Preview, Overall 71.6, rank 57/956):
- No detailed benchmark rows displayed on page

**Sibling:** Longcat-2.0 (Overall 70.4, rank 59)

**Observation:** LongCat_2.5_Preview.md files appear in virtually every model directory as comparison baseline (like Space_Bunny), suggesting this is a reference model used for comparison in the modelcomp pipeline.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 55/100.** BenchLM Overall 71.6 suggests moderate agentic. No direct TB, BrowseComp, OSWorld, GDPval. Capped by no detailed benchmarks.
- **Reasoning: 60/100.** BenchLM Overall 71.6 suggests moderate reasoning. No direct GPQA, HLE, FrontierMath. Capped by no detailed benchmarks.
- **Context window: 55/100.** Unknown context window; Overall 71.6 suggests 1M+ but unverified. Capped by unknown.
- **Multimodal: 40/100.** Unknown modalities; presumed text-only. Capped by unknown identity.
- **Coding: 55/100.** BenchLM Overall 71.6 suggests moderate coding. No direct SWE-bench, LiveCodeBench. Capped by no detailed benchmarks.
- **Cost efficiency: 30/100.** Unknown pricing; no public API access. Capped by unknown identity.
- **Overall Score: 53/100.** Half-up mean of (55 + 60 + 55 + 40 + 55) / 5 = 53 → 53. Using six incl. cost: (55+60+55+40+55+30)/6 = 295/6 = 49.2 → 49. Model-queue says 71.6; **discrepancy — appears as comparison baseline in pipeline, not a producible model with public benchmarks**.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; BenchLM Longcat-2.5-Preview page (Overall 71.6, no detailed benchmarks). Model appears as comparison baseline (LongCat_2.5_Preview.md) in all model directories. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Longcat.md`, using the same headings.