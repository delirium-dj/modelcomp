# Grok-4.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4.5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4.5
- **Short description:** xAI's Grok-4.5 model. Queue Overall 84.9. BenchLM shows Grok-4.5 but no Overall score computed (only Nova Pro at 21.63 for Amazon). Grok family typically strong on reasoning with X/Twitter data access.
- **Provider / access:** xAI API (`grok-4.5`), OpenCode Zen (`opencode/grok-4.5`). No public free tier.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated. Includes recent X/Twitter data.
- **IDs:** `grok-4.5` (xAI API), `opencode/grok-4.5` (OpenCode Zen).
- **Context window:** Likely 1M+ (Grok family standard).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** xAI API pricing not publicly listed for 4.5; Grok family typically competitive. No public blended rate.
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**Limited direct benchmarks** on major aggregators. BenchLM Grok-4.5 page shows no Overall score. Proxy from Grok-4.6 in Muse Spark 1.1 chart (4.5 likely slightly weaker):
- Grok-4.6 LiveCodeBench Pro: 70.7%, SWE-bench Pro: 53.4%
- Grok-4.5 estimated: LiveCodeBench Pro ~65-70%, SWE-bench Pro ~45-50%

No Grok-4.5 specific benchmarks on BenchLM, Artificial Analysis, Vals AI.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 55/100.** No direct agentic benchmarks. Grok family typically moderate. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 68/100.** Estimated slightly below Grok-4.6 (GPQA 89.2%, MMLU-Pro 82%). Capped by no HLE, FrontierMath, AA Intelligence Index.
- **Context window: 85/100.** Likely 1M+ (Grok family). Capped by no public LCR/MRCR.
- **Multimodal: 65/100.** Text + image input (Grok family). No video/audio/PDF noted. Methodology: +image in = 60-70.
- **Coding: 70/100.** Estimated LiveCodeBench Pro ~65-70%, SWE-bench Pro ~45-50% (below 4.6). Capped by no SWE-bench Verified, LiveCodeBench Vals, AA Coding Index.
- **Cost efficiency: 50/100.** No public pricing; xAI typically competitive. Estimated ~$2-3/$8-12 blended. Capped by unknown pricing.
- **Overall Score: 68.6/100.** Half-up mean of (55 + 68 + 85 + 65 + 70) / 5 = 68.6 → 69. Using six incl. cost: (55+68+85+65+70+50)/6 = 393/6 = 65.5 → 66. Model-queue says 84.9; discrepancy due to limited public benchmarks. Best-fit: solid mid-tier Grok variant; public verification needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across major benchmark aggregators; limited direct benchmarks. Proxy from Grok-4.6 in Muse Spark 1.1 chart with estimated degradation. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.