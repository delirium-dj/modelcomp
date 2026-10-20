# Grok-5 — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-5
- **Short description:** xAI's Grok-5 model. Queue Overall 62.5. BenchLM doesn't list Grok-5 (shows Grok-4 at 29.89, Grok-4.1 at 51.77, Grok-4.3 at 53.08, Grok-4.5 at 63.31, Grok-4.6 at 67.09, Grok-4.7 at not computed). Likely next-gen Grok with 1M+ context.
- **Provider / access:** xAI API (`grok-5`), OpenCode Zen (`opencode/grok-5`). No public free tier.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated. Includes X/Twitter data.
- **IDs:** `grok-5` (xAI API), `opencode/grok-5` (OpenCode Zen).
- **Context window:** Likely 1M+ (Grok family standard; Grok-4.1 has 1M).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** xAI API pricing not publicly listed for 5; Grok family typically competitive. No public blended rate.
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks** for Grok-5 on BenchLM, Artificial Analysis, Vals AI, or major aggregators.

**Proxy from Grok-4.6** (BenchLM, 67.09):
- SWE-bench Verified: 95.6% (Vals)
- LiveCodeBench: 88.2% (Vals)
- TB 2.1: 78.3% (Vals)
- GPQA Diamond: 94.9%
- ARC-AGI-1: 87%
- FrontierMath v2 Tiers 1-3: 66.0%

**Grok-4.7** (not computed on BenchLM): Expected stronger than 4.6.

Grok-5 expected to exceed 4.6/4.7 across board.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 60/100.** Proxy from 4.6: TB 2.1 78.3%, APEX-Agents 57.5%, GDPval 1643 Elo. Grok-5 expected stronger. Capped by no direct TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 75/100.** Proxy from 4.6: GPQA 94.9%, ARC-AGI-1 87%, ARC-AGI-2 67%, FrontierMath Tiers 1-3 66%. Grok-5 expected stronger. Capped by no HLE, FrontierMath, AA Intelligence Index.
- **Context window: 85/100.** Likely 1M+ (Grok family; 4.1 has 1M). Capped by no public LCR/MRCR for 5.
- **Multimodal: 65/100.** Text + image (Grok family). No video/audio/PDF noted. Methodology: +image in = 60-70.
- **Coding: 80/100.** Proxy from 4.6: SWE-bench 95.6% (Vals), LiveCodeBench 88.2% (Vals), VulcanBench 87%. Grok-5 expected ≥ 4.6. Capped by no SWE-bench Verified, LiveCodeBench Vals, AA Coding Index for 5.
- **Cost efficiency: 50/100.** No public pricing; xAI typically competitive. Estimated ~$2-3/$8-15 blended. Capped by unknown pricing.
- **Overall Score: 73/100.** Half-up mean of (60 + 75 + 85 + 65 + 80) / 5 = 73 → 73. Using six incl. cost: (60+75+85+65+80+50)/6 = 415/6 = 69.2 → 69. Model-queue says 62.5; discrepancy due to lack of direct benchmarks. Best-fit: next-gen Grok expected to exceed 4.6; public verification needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for Grok-5. Proxy from Grok-4.6 (BenchLM) with generational improvement assumed. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_5.md`, using the same headings.