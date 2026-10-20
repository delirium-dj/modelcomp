# Grok-4.6 — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4.6`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4.6
- **Short description:** xAI's Grok-4.6 model. Queue Overall 86.1. Limited public benchmarks on major aggregators (BenchLM, Artificial Analysis). Grok family typically strong on reasoning/coding with Twitter/X data access.
- **Provider / access:** xAI API (`grok-4.6`), OpenCode Zen (`opencode/grok-4.6`). No public free tier.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated. Likely includes recent X/Twitter data.
- **IDs:** `grok-4.6` (xAI API), `opencode/grok-4.6` (OpenCode Zen).
- **Context window:** Likely 1M+ (Grok family standard); not publicly specified.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** xAI API pricing not publicly listed for Grok-4.6; Grok family typically competitive (~$1–$3/M in, $3–$10/M out). No public blended rate.
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**Limited public benchmarks found** on major aggregators. Grok-4.5 (21.63) and Grok-4 (29.89) appear on BenchLM but not Grok-4.6. Grok-4.6 appears in other models' comparison tables (e.g., Meta Muse Spark chart shows Grok-4.6 LiveCodeBench Pro 70.7%, SWE-bench Pro 53.4%).

Proxy from Meta Muse Spark 1.1 chart:
- LiveCodeBench Pro: **70.7%**
- SWE-bench Pro: **53.4%**
- MMLU-Pro: **82%**
- GPQA Diamond: **89.2%** (from Arcee Trinity chart)
- HealthBench Hard: **14.8%**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 60/100.** No direct agentic benchmarks. Proxy from Grok-4.6 in Muse chart suggests moderate. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 70/100.** GPQA Diamond 89.2% (near 90%+), MMLU-Pro 82%, LiveCodeBench Pro 70.7%. Capped by no HLE, FrontierMath, AA Intelligence Index.
- **Context window: 85/100.** Likely 1M+ (Grok family). Capped by no public LCR/MRCR.
- **Multimodal: 65/100.** Text + image input (Grok family). No video/audio/PDF noted. Methodology: +image in = 60-70.
- **Coding: 72/100.** LiveCodeBench Pro 70.7%, SWE-bench Pro 53.4%. Capped by no SWE-bench Verified, LiveCodeBench Vals, AA Coding Index.
- **Cost efficiency: 50/100.** No public pricing; xAI typically competitive. Estimated ~$2/$8 blended. Capped by unknown pricing.
- **Overall Score: 70.4/100.** Half-up mean of (60 + 70 + 85 + 65 + 72) / 5 = 70.4 → 70. Using six incl. cost: (60+70+85+65+72+50)/6 = 402/6 = 67 → 67. Model-queue says 86.1; discrepancy due to limited public benchmarks. Best-fit: strong reasoning/coding implied by family and proxy scores; public verification needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across major benchmark aggregators; limited direct benchmarks. Proxy from Meta Muse Spark 1.1 comparison chart. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.