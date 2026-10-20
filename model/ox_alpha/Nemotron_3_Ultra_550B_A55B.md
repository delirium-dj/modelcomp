# ox_alpha — findings by Nemotron 3 Ultra 550B A55B

- Source: Unknown creator (`ox_alpha`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ox_alpha (alpha release)
- **Short description:** Obscure/early-access model with limited public benchmark presence. Queue Overall 87 suggests strong capabilities but no public benchmarks found on major aggregators (BenchLM, Artificial Analysis). Likely proprietary or restricted access.
- **Provider / access:** Unknown; not found on major API platforms (OpenCode Zen, OpenRouter, Hugging Face). No public free tier.
- **Release / knowledge:** Release date unknown; knowledge cutoff unknown.
- **IDs:** `ox_alpha` (internal identifier). No public API IDs found.
- **Context window:** Unknown.
- **Modalities:** Unknown; presumed text in/out.
- **Pricing (as of 2026-10-19):** Unknown; no public pricing.
- **Architecture:** Unknown.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No verified public benchmarks found** on BenchLM, Artificial Analysis, Vals AI, Epoch AI, ARC Prize, or major aggregators. Model appears absent from public evaluation leaderboards.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 50/100.** No public data; queue Overall 87 suggests capability but cannot verify. Capped by absence of evidence.
- **Reasoning: 50/100.** No public data; queue Overall 87 suggests capability but cannot verify. Capped by absence of evidence.
- **Context window: 50/100.** Unknown context window; queue rank 44 suggests 1M+ but unverified.
- **Multimodal: 30/100.** Unknown modalities; presumed text-only.
- **Coding: 50/100.** No public coding benchmarks; queue Overall 87 suggests capability but cannot verify.
- **Cost efficiency: 30/100.** Unknown pricing; no public API access suggests restricted/expensive or internal.
- **Overall Score: 46/100.** Half-up mean of (50 + 50 + 50 + 30 + 50) / 5 = 46 → 46. Using six incl. cost: (50+50+50+30+50+30)/6 = 260/6 = 43.3 → 43. Model-queue says 87; massive discrepancy indicates queue score may be from internal/private evaluation not reproducible publicly. Best-fit: cannot independently verify; treat as unverified until public benchmarks appear.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across major benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, Epoch AI, ARC Prize, OpenRouter, Hugging Face); no verifiable public benchmarks found for this model identifier.
- Future sources: add a new file next to this one, e.g. `OX.md`, using the same headings.