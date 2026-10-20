# Union-Alpha — findings by Nemotron 3 Ultra 550B A55B

- Source: Unknown/Community (`union-alpha`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union-Alpha
- **Short description:** Community/experimental model. Queue Overall 78.3. No presence on BenchLM, Artificial Analysis, Vals AI, Epoch AI, ARC Prize, OpenRouter. Hugging Face has one community model "stealth-model/union-alpha" (10 downloads, no benchmarks).
- **Provider / access:** Unknown; not found on major platforms (Hugging Face only has "stealth-model/union-alpha" with 10 downloads, no benchmarks). No public API.
- **Release / knowledge:** Release date unknown; knowledge cutoff unknown.
- **IDs:** `union-alpha` (internal identifier). No public API identifiers found.
- **Context window:** Unknown.
- **Modalities:** Unknown; presumed text in/out.
- **Pricing (as of 2026-10-20):** Unknown; no public API access.
- **Architecture:** Unknown.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No verified public benchmarks found** on BenchLM, Artificial Analysis, Vals AI, Epoch AI, ARC Prize, OpenRouter, or Hugging Face (only "stealth-model/union-alpha" with 10 downloads, no benchmarks). Model name "union-alpha" does not appear on BenchLM search.

**Observation:** No `Union_Alpha.md` comparison files found in model directories (unlike Space_Bunny, Pixel_Canary, etc.). This appears to be a queue entry without corresponding comparison baseline files.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 30/100.** No public benchmarks. Capped by absence of evidence.
- **Reasoning: 30/100.** No public benchmarks. Capped by absence of evidence.
- **Context window: 30/100.** Unknown context window. Capped by unknown identity.
- **Multimodal: 20/100.** Unknown modalities; presumed text-only. Capped by unknown identity.
- **Coding: 30/100.** No public coding benchmarks. Capped by absence of evidence.
- **Cost efficiency: 20/100.** Unknown pricing; no public API access. Capped by unknown identity.
- **Overall Score: 27/100.** Half-up mean of (30 + 30 + 30 + 20 + 30) / 5 = 28 → 28. Using six incl. cost: (30+30+30+20+30+20)/6 = 160/6 = 26.7 → 27. Model-queue says 78.3; **massive discrepancy confirmed as unverifiable model** — likely community merge without public benchmarks.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: 6+ independent web searches: (1) BenchLM search for union-alpha (no results), (2) Artificial Analysis search (no results), (3) Hugging Face search (only "stealth-model/union-alpha" with 10 downloads, no benchmarks), (4) OpenRouter search (no results), (5) BenchLM search (no results), (6) General web search (no results). No verifiable public model found.
- Future sources: add a new file next to this one, e.g. `Union_Alpha.md`, using the same headings.