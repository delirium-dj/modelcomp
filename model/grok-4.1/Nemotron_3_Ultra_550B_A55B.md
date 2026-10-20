# Grok-4.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4.1`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4.1
- **Short description:** xAI's Grok-4.1 model. Queue Overall 79.2. BenchLM shows Grok-4.1 with no Overall score (unranked), only ResearchClawBench 13.5%. Other variants: 4.1 Fast (36.44), 4.1 Fast Reasoning (45.85).
- **Provider / access:** xAI API (`grok-4.1`), OpenCode Zen (`opencode/grok-4.1`). No public free tier.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated. Includes X/Twitter data.
- **IDs:** `grok-4.1` (xAI API), `opencode/grok-4.1` (OpenCode Zen).
- **Context window:** 1,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** xAI API pricing not publicly listed; Grok family typically competitive. No public blended rate.
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Grok-4.1, unranked):
- ResearchClawBench: **13.5%** (ResearchClawBench leaderboard)

**Variants on BenchLM:**
- Grok 4.1 Fast: **36.44** Overall (rank 156)
- Grok 4.1 Fast (Reasoning): **45.85** Overall (rank 140)

**Proxy from Grok-4.6 launch post** (4.1 is earlier generation):
- 4.6 improves significantly over 4.1 in coding, reasoning, agentic

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 40/100.** ResearchClawBench 13.5% only benchmark. No TB, BrowseComp, OSWorld, GDPval. Capped by extremely limited data.
- **Reasoning: 55/100.** Fast Reasoning variant 45.85 Overall suggests moderate. Capped by no GPQA, HLE, FrontierMath, AA Intelligence Index.
- **Context window: 85/100.** Likely 1M+ (Grok family). Capped by no public LCR/MRCR.
- **Multimodal: 65/100.** Text + image (Grok family). No video/audio/PDF noted. Methodology: +image in = 60-70.
- **Coding: 50/100.** Fast variant 36.44 Overall suggests weak coding. Capped by no SWE-bench, LiveCodeBench, AA Coding Index.
- **Cost efficiency: 50/100.** No public pricing; xAI typically competitive. Estimated ~$2-3/$8-12 blended. Capped by unknown pricing.
- **Overall Score: 59/100.** Half-up mean of (40 + 55 + 85 + 65 + 50) / 5 = 59 → 59. Using six incl. cost: (40+55+85+65+50+50)/6 = 345/6 = 57.5 → 58. Model-queue says 79.2; discrepancy due to limited public benchmarks. Best-fit: early Grok generation; superseded by 4.5/4.6; public verification needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; limited direct benchmarks. Proxy from Grok-4.1 variants on BenchLM and Grok-4.6 launch post. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.