# Longcat-2.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Unknown/Community (`longcat-2.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Longcat-2.5
- **Short description:** Community/experimental model. Queue Overall not directly listed (Longcat-2.5-Preview at 71.6, Longcat-2.0 at 70.4). BenchLM shows Longcat-2.5-Preview at 71.6, Longcat-2.0 at 70.4.
- **Provider / access:** Unknown; not found on major platforms (Hugging Face, OpenCode Zen, OpenRouter). Appears as LongCat_2.5_Preview.md comparison file in many model directories.
- **Release / knowledge:** Release date unknown; knowledge cutoff unknown.
- **IDs:** `longcat-2.5` (internal identifier). No public API identifiers found.
- **Context window:** Unknown.
- **Modalities:** Unknown; presumed text in/out.
- **Pricing (as of 2026-10-20):** Unknown; no public API access.
- **Architecture:** Unknown.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct BenchLM page** for "longcat-2.5" (only -preview and -2.0).

**Proxy from Longcat-2.5-Preview** (BenchLM, 71.6, rank 57):
- No detailed benchmarks

**Proxy from Longcat-2.0** (BenchLM, 70.4, rank 59):
- No detailed benchmarks

**Observation:** LongCat_2.5_Preview.md and Longcat-2.5-preview.md appear as comparison baselines in virtually every model directory, suggesting this is a reference model used for comparison in the modelcomp pipeline.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 55/100.** Proxy from Preview (71.6 Overall). No direct TB, BrowseComp, OSWorld, GDPval. Capped by no detailed benchmarks.
- **Reasoning: 60/100.** Proxy from Preview (71.6 Overall). No direct GPQA, HLE, FrontierMath. Capped by no detailed benchmarks.
- **Context window: 55/100.** Unknown context window. Capped by unknown identity.
- **Multimodal: 40/100.** Unknown modalities; presumed text-only. Capped by unknown identity.
- **Coding: 55/100.** Proxy from Preview (71.6 Overall). No direct SWE-bench, LiveCodeBench. Capped by no detailed benchmarks.
- **Cost efficiency: 30/100.** Unknown pricing; no public API access. Capped by unknown identity.
- **Overall Score: 53/100.** Half-up mean of (55 + 60 + 55 + 40 + 55) / 5 = 53 → 53. Using six incl. cost: (55+60+55+40+55+30)/6 = 295/6 = 49.2 → 49. **Discrepancy with pipeline usage** — appears as comparison baseline, not a producible model with public benchmarks.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; BenchLM Longcat-2.5-Preview (71.6) and Longcat-2.0 (70.4). Model appears as comparison baseline in all model directories. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Longcat.md`, using the same headings.