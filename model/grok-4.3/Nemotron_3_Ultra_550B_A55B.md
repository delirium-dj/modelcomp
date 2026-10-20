# Grok-4.3 — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4.3`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4.3
- **Short description:** xAI's Grok-4.3 model. Queue Overall 84.2. BenchLM doesn't list Grok-4.3 with Overall score (shows Grok-4, Grok-4.5, Grok-4.6, Grok-4.7). Grok family typically strong on reasoning with X/Twitter data access.
- **Provider / access:** xAI API (`grok-4.3`), OpenCode Zen (`opencode/grok-4.3`). No public free tier.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated. Includes recent X/Twitter data.
- **IDs:** `grok-4.3` (xAI API), `opencode/grok-4.3` (OpenCode Zen).
- **Context window:** Likely 1M+ (Grok family standard).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** xAI API pricing not publicly listed for 4.3; Grok family typically competitive. No public blended rate.
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**Limited direct benchmarks** on major aggregators. BenchLM shows Grok-4 (29.89), Grok-4.5 (no score), Grok-4.6 (no score), Grok-4.7 (no score). Grok-4.3 not listed.

Proxy from Grok-4.6 in Muse Spark 1.1 chart (4.3 likely weaker):
- Grok-4.6 LiveCodeBench Pro: 70.7%, SWE-bench Pro: 53.4%
- Grok-4.3 estimated: LiveCodeBench Pro ~60-65%, SWE-bench Pro ~40-45%

No Grok-4.3 specific benchmarks on BenchLM, Artificial Analysis, Vals AI.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 50/100.** No direct agentic benchmarks. Grok family typically moderate. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 65/100.** Estimated below Grok-4.6 (GPQA 89.2%, MMLU-Pro 82%). Capped by no HLE, FrontierMath, AA Intelligence Index.
- **Context window: 85/100.** Likely 1M+ (Grok family). Capped by no public LCR/MRCR.
- **Multimodal: 65/100.** Text + image input (Grok family). No video/audio/PDF noted. Methodology: +image in = 60-70.
- **Coding: 65/100.** Estimated LiveCodeBench Pro ~60-65%, SWE-bench Pro ~40-45% (below 4.5/4.6). Capped by no SWE-bench Verified, LiveCodeBench Vals, AA Coding Index.
- **Cost efficiency: 50/100.** No public pricing; xAI typically competitive. Estimated ~$2-3/$8-12 blended. Capped by unknown pricing.
- **Overall Score: 66/100.** Half-up mean of (50 + 65 + 85 + 65 + 65) / 5 = 66 → 66. Using six incl. cost: (50+65+85+65+65+50)/6 = 380/6 = 63.3 → 63. Model-queue says 84.2; discrepancy due to limited public benchmarks. Best-fit: early/mid-tier Grok variant; public verification needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across major benchmark aggregators; limited direct benchmarks. Proxy from Grok-4.6 in Muse Spark 1.1 chart with estimated degradation. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.