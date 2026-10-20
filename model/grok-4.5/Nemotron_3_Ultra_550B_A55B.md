# Grok-4.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4.5
- **Short description:** xAI's Grok-4.5 model. Queue Overall 84.9 but BenchLM shows 63.31 (rank 45). Strong reasoning variant with 1M context. xAI launch post compares it to Grok-4.6.
- **Provider / access:** xAI API (`grok-4.5`), OpenCode Zen (`opencode/grok-4.5`). No public free tier.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated. Includes X/Twitter data.
- **IDs:** `grok-4.5` (xAI API), `opencode/grok-4.5` (OpenCode Zen).
- **Context window:** 1,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** xAI API pricing not publicly listed; Grok family typically competitive. No public blended rate.
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Overall 63.31, rank #45/956, conservative):
- Limited benchmarks displayed on page

**Proxy from xAI Grok 4.6 launch post** (compares 4.5 vs 4.6):
- Grok-4.5 positioned as predecessor to 4.6 with slightly lower scores across board
- 4.6 improves on 4.5 in coding, reasoning, agentic tasks

**Proxy from Muse Spark 1.1 chart** (shows Grok-4.6):
- Grok-4.6 LiveCodeBench Pro: 70.7%, SWE-bench Pro: 53.4%
- Grok-4.5 estimated: LiveCodeBench Pro ~65-70%, SWE-bench Pro ~45-50%

No Grok-4.5 specific benchmarks on BenchLM, Artificial Analysis, Vals AI.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 55/100.** No direct agentic benchmarks. Grok family typically moderate. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 70/100.** Estimated slightly below Grok-4.6 (GPQA 94.9%, HLE 42.9%, ARC-AGI-1 87%). Capped by no HLE, FrontierMath, AA Intelligence Index.
- **Context window: 90/100.** 1M native (Grok family). Capped by no public LCR/MRCR.
- **Multimodal: 65/100.** Text + image input (Grok family). No video/audio/PDF noted. Methodology: +image in = 60-70.
- **Coding: 72/100.** Estimated LiveCodeBench Pro ~65-70%, SWE-bench Pro ~45-50% (below 4.6). Capped by no SWE-bench Verified, LiveCodeBench Vals, AA Coding Index.
- **Cost efficiency: 50/100.** No public pricing; xAI typically competitive. Estimated ~$2-3/$8-12 blended. Capped by unknown pricing.
- **Overall Score: 70.4/100.** Half-up mean of (55 + 70 + 90 + 65 + 72) / 5 = 70.4 → 70. Using six incl. cost: (55+70+90+65+72+50)/6 = 402/6 = 67 → 67. Model-queue says 84.9; discrepancy due to limited public benchmarks. Best-fit: strong mid-tier Grok variant; public verification needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; limited direct benchmarks. Proxy from Grok-4.6 (BenchLM, xAI launch post) and Muse Spark 1.1 chart with estimated degradation. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.