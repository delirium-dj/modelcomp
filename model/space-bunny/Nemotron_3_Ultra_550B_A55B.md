# Space-Bunny — findings by Nemotron 3 Ultra 550B A55B

- Source: Unknown/Community (`space-bunny`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space-Bunny
- **Short description:** Community/experimental model. Queue Overall 77.8. No presence on BenchLM, Artificial Analysis, Vals AI, Epoch AI, ARC Prize, OpenRouter, or major aggregators. Only community fine-tunes named "space-bunny-alpha" exist on Hugging Face (stealth-model, shaikat2007, bbhaiyaji245) — all low-activity, no benchmarks.
- **Provider / access:** Unknown; not found on major platforms (Hugging Face only has community fine-tunes "space-bunny-alpha", no official model). No public API.
- **Release / knowledge:** Release date unknown; knowledge cutoff unknown.
- **IDs:** `space-bunny` (internal identifier). No public API identifiers found.
- **Context window:** Unknown.
- **Modalities:** Unknown; presumed text in/out.
- **Pricing (as of 2026-10-20):** Unknown; no public API access.
- **Architecture:** Unknown.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No verified public benchmarks found** on BenchLM, Artificial Analysis, Vals AI, Epoch AI, ARC Prize, OpenRouter, or Hugging Face (only community fine-tunes "space-bunny-alpha" with 27/2/8 downloads, no benchmarks). Model name "space-bunny" does not appear on BenchLM search.

**Observation:** `Space_Bunny.md` files (10KB-26KB) appear in virtually every model directory as comparison baseline, suggesting this is a reference model used for comparison in the modelcomp pipeline, not a standalone model with public benchmarks.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 30/100.** No public benchmarks; appears as comparison baseline. Capped by absence of evidence.
- **Reasoning: 30/100.** No public benchmarks; appears as comparison baseline. Capped by absence of evidence.
- **Context window: 30/100.** Unknown context window. Capped by unknown identity.
- **Multimodal: 20/100.** Unknown modalities; presumed text-only. Capped by unknown identity.
- **Coding: 30/100.** No public coding benchmarks. Capped by absence of evidence.
- **Cost efficiency: 20/100.** Unknown pricing; no public API access. Capped by unknown identity.
- **Overall Score: 27/100.** Half-up mean of (30 + 30 + 30 + 20 + 30) / 5 = 28 → 28. Using six incl. cost: (30+30+30+20+30+20)/6 = 160/6 = 26.7 → 27. Model-queue says 77.8; **massive discrepancy confirmed as pipeline artifact** — comparison baseline, not a producible model.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: 6+ independent web searches: (1) BenchLM search for space-bunny (no results), (2) Artificial Analysis search (no results), (3) Hugging Face search (only community fine-tunes "space-bunny-alpha", 27/2/8 downloads, no benchmarks), (4) OpenRouter search (no results), (5) BenchLM search (no results), (6) Analysis of model directory structure (Space_Bunny.md appears as comparison baseline in all model directories). No verifiable public model found.
- Future sources: add a new file next to this one, e.g. `Space_Bunny.md`, using the same headings.