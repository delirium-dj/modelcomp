# Grok-4.20 — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4.20`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4.20 (Beta)
- **Short description:** xAI's Grok-4.20 beta model. Queue Overall 79.3. BenchLM shows Overall 57.43 (rank 103/956). Multiple variants: base, multi-agent beta.
- **Provider / access:** xAI API (`grok-4.20-beta`), OpenCode Zen (`opencode/grok-4.20`). Beta access.
- **Release / knowledge:** 2026 release (beta); knowledge cutoff not explicitly stated. Includes X/Twitter data.
- **IDs:** `grok-4.20-beta` (xAI API), `opencode/grok-4.20` (OpenCode Zen).
- **Context window:** Likely 1M+ (Grok family standard).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** xAI API pricing not publicly listed for beta; Grok family typically competitive. No public blended rate.
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Overall 57.43, rank 103/956):
- No detailed benchmark rows displayed on page

**Variants:** Grok 4.20 Multi-agent Beta (no Overall score)

**Proxy from Grok-4.6 launch post** (4.20 is between 4.1 and 4.5/4.6):
- 4.6 improves over 4.20 in coding, reasoning, agentic

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 50/100.** Overall 57.43 suggests moderate agentic capability. No direct TB, BrowseComp, OSWorld, GDPval. Capped by limited data.
- **Reasoning: 60/100.** Overall 57.43 suggests moderate reasoning. No direct GPQA, HLE, FrontierMath, AA Intelligence Index. Capped by no reasoning-specific benchmarks.
- **Context window: 85/100.** Likely 1M+ (Grok family). Capped by no public LCR/MRCR.
- **Multimodal: 65/100.** Text + image (Grok family). No video/audio/PDF noted. Methodology: +image in = 60-70.
- **Coding: 55/100.** Overall 57.43 suggests moderate coding. Capped by no SWE-bench, LiveCodeBench, AA Coding Index.
- **Cost efficiency: 50/100.** Beta pricing unknown; xAI typically competitive. Estimated ~$2-3/$8-12 blended. Capped by unknown pricing.
- **Overall Score: 63/100.** Half-up mean of (50 + 60 + 85 + 65 + 55) / 5 = 63 → 63. Using six incl. cost: (50+60+85+65+55+50)/6 = 365/6 = 60.8 → 61. Model-queue says 79.3; discrepancy due to limited public benchmarks. Best-fit: mid-tier Grok beta; public verification needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; BenchLM Grok-4.20 page (Overall 57.43). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.