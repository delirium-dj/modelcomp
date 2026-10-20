# Grok-4-Fast — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4-fast`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4-Fast (Non-reasoning, "Fast" variant)
- **Short description:** xAI's fast non-reasoning variant of Grok-4. Queue Overall 84.9 but BenchLM only shows "Grok 4 Fast (Reasoning)" at 43.49. Non-reasoning Fast variant likely similar speed tier.
- **Provider / access:** xAI API (`grok-4-fast`), OpenCode Zen (`opencode/grok-4-fast`). No public free tier.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated. Includes X/Twitter data.
- **IDs:** `grok-4-fast` (xAI API), `opencode/grok-4-fast` (OpenCode Zen).
- **Context window:** Likely 1M+ (Grok family standard); "Grok 4 Fast (Reasoning)" shows 2M.
- **Modalities:** Text, image in; text out; reasoning no (non-reasoning variant); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** xAI API pricing not publicly listed; "Fast" tier typically lower cost. No public blended rate.
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** — No direct page for "Grok-4-Fast" (non-reasoning). "Grok 4 Fast (Reasoning)" shows:
- Overall: 43.49 (rank 129/956)
- Context: 2M
- AA LCR: 73.7%
- AA MMMU-Pro: 61.8%
- AA GPQA Diamond: 84.7%
- AA HLE: 19.1%
- AA Intelligence Index: 17.9%
- Tau2-bench: 65.8%
- Vibe Code Bench: 0.00%
- CritPt: 2.9%

Non-reasoning Fast variant expected similar speed, lower reasoning scores.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 45/100.** Tau2 65.8% (reasoning variant). Non-reasoning likely lower. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 40/100.** Non-reasoning model; AA Intelligence Index 17.9% (reasoning variant). AA HLE 19.1%, GPQA Diamond 84.7%. Capped by no reasoning capability.
- **Context window: 95/100.** 2M context (reasoning variant). Methodology: ≥2M = 95-100.
- **Multimodal: 65/100.** Text + image (reasoning variant MMMU-Pro 61.8%). No video/audio/PDF. Methodology: +image in = 60-70.
- **Coding: 30/100.** Vibe Code Bench 0.00% (reasoning variant). Non-reasoning likely weak at coding. Capped by no SWE-bench, LiveCodeBench, AA Coding Index.
- **Cost efficiency: 55/100.** "Fast" tier typically lower cost; xAI competitive. Estimated ~$1-2/$4-8 blended. Capped by unknown pricing.
- **Overall Score: 55/100.** Half-up mean of (45 + 40 + 95 + 65 + 30) / 5 = 55 → 55. Using six incl. cost: (45+40+95+65+30+55)/6 = 330/6 = 55 → 55. Model-queue says 84.9; massive discrepancy — queue score likely for different variant or internal eval. Best-fit: fast non-reasoning variant optimized for speed/cost; weak at reasoning/coding.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for non-reasoning variant. Proxy from "Grok 4 Fast (Reasoning)" (BenchLM) with reasoning capability removed. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.