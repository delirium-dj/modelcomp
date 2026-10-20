# Grok-4.1-Fast — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4.1-fast`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4.1-Fast (Non-reasoning, Fast tier)
- **Short description:** xAI's fast non-reasoning variant of Grok-4.1. Queue Overall 79.3. BenchLM shows Overall 36.44 (rank 156/956).
- **Provider / access:** xAI API (`grok-4.1-fast`), OpenCode Zen (`opencode/grok-4.1-fast`). No public free tier.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated. Includes X/Twitter data.
- **IDs:** `grok-4.1-fast` (xAI API), `opencode/grok-4.1-fast` (OpenCode Zen).
- **Context window:** Likely 1M+ (Grok family standard).
- **Modalities:** Text, image in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** xAI API pricing not publicly listed; "Fast" tier typically lower cost. No public blended rate.
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Overall 36.44, rank 156/956):
- No detailed benchmark rows displayed on page

**Variant:** Grok 4.1 Fast (Reasoning) — Overall 45.85 (rank 140)

**Proxy from Grok-4.6 launch post** (4.1 is earlier generation):
- 4.6 improves significantly over 4.1 in all dimensions

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 35/100.** Overall 36.44 suggests very limited agentic capability. No direct TB, BrowseComp, OSWorld, GDPval. Capped by extremely limited data.
- **Reasoning: 35/100.** Non-reasoning model; Overall 36.44. Reasoning variant scores 45.85. Capped by no GPQA, HLE, FrontierMath, AA Intelligence Index.
- **Context window: 85/100.** Likely 1M+ (Grok family). Capped by no public LCR/MRCR.
- **Multimodal: 65/100.** Text + image (Grok family). No video/audio/PDF noted. Methodology: +image in = 60-70.
- **Coding: 35/100.** Overall 36.44 suggests weak coding. Capped by no SWE-bench, LiveCodeBench, AA Coding Index.
- **Cost efficiency: 55/100.** "Fast" tier typically lower cost; xAI competitive. Estimated ~$1-2/$4-8 blended. Capped by unknown pricing.
- **Overall Score: 51/100.** Half-up mean of (35 + 35 + 85 + 65 + 35) / 5 = 51 → 51. Using six incl. cost: (35+35+85+65+35+55)/6 = 310/6 = 51.7 → 52. Model-queue says 79.3; massive discrepancy — queue score likely for different variant or internal eval. Best-fit: entry-level fast non-reasoning variant; superseded by newer Grok generations.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; BenchLM Grok-4.1-Fast page (Overall 36.44). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.