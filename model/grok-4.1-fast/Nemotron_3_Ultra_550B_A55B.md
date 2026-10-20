# Grok-4.1-Fast-Reasoning — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4.1-fast-reasoning`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4.1-Fast (Reasoning)
- **Short description:** xAI's fast reasoning variant of Grok-4.1. Queue Overall 79.3. BenchLM shows Overall 45.85 (rank 140/956). 2M context window.
- **Provider / access:** xAI API (`grok-4.1-fast-reasoning`), OpenCode Zen (`opencode/grok-4.1-fast-reasoning`). No public free tier.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated. Includes X/Twitter data.
- **IDs:** `grok-4.1-fast-reasoning` (xAI API), `opencode/grok-4.1-fast-reasoning` (OpenCode Zen).
- **Context window:** 2,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** xAI API pricing not publicly listed; "Fast" reasoning tier typically moderate cost. No public blended rate.
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Overall 45.85, rank 140/956):
- No detailed benchmark rows displayed on page

**Variant:** Grok 4.1 Fast (Non-reasoning) — Overall 36.44 (rank 156)

**Proxy from Grok-4.6 launch post** (4.1 is earlier generation):
- 4.6 improves significantly over 4.1 in all dimensions

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 40/100** Overall 45.85 suggests limited agentic capability. No direct TB, BrowseComp, OSWorld, GDPval. Capped by limited data.
- **Reasoning: 50/100** Reasoning variant with Overall 45.85. No direct GPQA, HLE, FrontierMath, AA Intelligence Index. Capped by no reasoning-specific benchmarks.
- **Context window: 95/100** 2M context (BenchLM). Methodology: ≥2M = 95-100.
- **Multimodal: 65/100** Text + image (Grok family). No video/audio/PDF noted. Methodology: +image in = 60-70.
- **Coding: 45/100** Overall 45.85 suggests moderate coding. Capped by no SWE-bench, LiveCodeBench, AA Coding Index.
- **Cost efficiency: 50/100** "Fast" reasoning tier typically moderate cost; xAI competitive. Estimated ~$2-3/$8-12 blended. Capped by unknown pricing.
- **Overall Score: 59/100** Half-up mean of (40 + 50 + 95 + 65 + 45) / 5 = 59 → 59. Using six incl. cost: (40+50+95+65+45+50)/6 = 345/6 = 57.5 → 58. Model-queue says 79.3; massive discrepancy — queue score likely for different variant or internal eval. Best-fit: early fast reasoning variant; superseded by 4.5/4.6; public verification needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; BenchLM Grok-4.1-Fast-Reasoning page (Overall 45.85). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.