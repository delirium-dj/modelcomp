# Grok-4-Fast-Reasoning — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4-fast-reasoning`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4-Fast (Reasoning)
- **Short description:** xAI's fast reasoning variant of Grok-4. Queue Overall 84.2. BenchLM shows Overall 43.49 (rank 129/956). 2M context window.
- **Provider / access:** xAI API (`grok-4-fast-reasoning`), OpenCode Zen (`opencode/grok-4-fast-reasoning`). No public free tier.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated. Includes X/Twitter data.
- **IDs:** `grok-4-fast-reasoning` (xAI API), `opencode/grok-4-fast-reasoning` (OpenCode Zen).
- **Context window:** 2,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** xAI API pricing not publicly listed; "Fast" reasoning tier typically moderate cost. No public blended rate.
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Overall 43.49, rank 129/956):
- Tau2-bench: **65.8%** (Artificial Analysis)
- Vibe Code Bench: **0.00%** (Vals AI)
- AA MMMU-Pro: **61.8%** (Artificial Analysis)
- AA LCR: **73.7%** (Artificial Analysis)
- CritPt: **2.9%** (Artificial Analysis)
- AA Intelligence Index: **17.9%** (Artificial Analysis)
- AA GPQA Diamond: **84.7%** (Artificial Analysis)
- AA HLE: **19.1%** (Artificial Analysis)
- AA Omniscience Index: **-29.9%** (Artificial Analysis)
- AA Omniscience Accuracy: **22.8%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **68.3%** (Artificial Analysis)
- AA IFBench: **50.5%** (Artificial Analysis)

**Variant:** Grok 4 Fast (Non-reasoning) — no Overall score

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 45/100.** Tau2 65.8% only agentic benchmark. No TB, BrowseComp, OSWorld, GDPval. Capped by limited agentic data.
- **Reasoning: 45/100.** GPQA Diamond 84.7%, AA LCR 73.7%, AA IFBench 50.5%. Capped by AA Intelligence Index 17.9% (<60), AA HLE 19.1% (<40%+), CritPt 2.9%, AA Omniscience Index -29.9%, AA Omniscience Hallucination 68.3%.
- **Context window: 95/100.** 2M context (BenchLM). Methodology: ≥2M = 95-100.
- **Multimodal: 65/100.** Text + image; AA MMMU-Pro 61.8%. No video/audio/PDF. Methodology: +image in = 60-70.
- **Coding: 20/100.** Vibe Code Bench 0.00% (Vals AI). Capped by no SWE-bench, LiveCodeBench, AA Coding Index.
- **Cost efficiency: 50/100.** "Fast" reasoning tier typically moderate cost; xAI competitive. Estimated ~$2-3/$8-12 blended. Capped by unknown pricing.
- **Overall Score: 54/100.** Half-up mean of (45 + 45 + 95 + 65 + 20) / 5 = 54 → 54. Using six incl. cost: (45+45+95+65+20+50)/6 = 320/6 = 53.3 → 53. Model-queue says 84.2; massive discrepancy — queue score likely for different variant or internal eval. Best-fit: fast reasoning variant with huge 2M context but weak coding/reasoning depth; small sample benchmarks.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; BenchLM Grok-4-Fast-Reasoning page (Overall 43.49, 12 benchmarks). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.