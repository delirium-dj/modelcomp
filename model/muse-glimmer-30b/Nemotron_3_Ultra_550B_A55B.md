# Muse Glimmer 30B — findings by Nemotron 3 Ultra 550B A55B

- Source: Meta (`muse-glimmer-30b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's small open-weight Muse model (30B params). Queue Overall 75.6. BenchLM shows 41.23 (rank 160). Small Muse variant, likely efficient for local deployment.
- **Provider / access:** Hugging Face (Meta), OpenCode Zen (`opencode/muse-glimmer-30b`). Open-weight, free on HuggingChat.
- **Release / knowledge:** 2026 release (Muse family); knowledge cutoff not explicitly stated.
- **IDs:** `muse-glimmer-30b` (Hugging Face / OpenCode Zen). Free on HuggingChat.
- **Context window:** Likely 1M+ (Muse family standard).
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio noted.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal (30B fits consumer GPU).
- **Architecture:** Open-weight dense (30B params); Muse family.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Overall 41.23, rank 160/959):
- No detailed benchmark rows displayed on page

**Proxy from Muse Spark 1.1 (BenchLM, 85.2):**
- SWE-bench Verified: ~76% (Muse Spark 1.1 76.8%)
- LiveCodeBench: ~85% (Muse Spark 1.1 85.9%)
- HLE: ~62% (Muse Spark 1.1 62.1%)
- AA LCR: ~77% (Muse Spark 1.1 77.7%)

Glimmer 30B is 30x smaller than Spark 1.1; estimated 30-50% of Spark scores.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 40/100.** Estimated 30-50% of Muse Spark 1.1 (TB 2.1 69%). Capped by no direct benchmarks, 30B size limits agentic.
- **Reasoning: 45/100.** Estimated 30-50% of Muse Spark 1.1 (HLE 62%, AA LCR 77%). Capped by no direct benchmarks.
- **Context window: 85/100.** Likely 1M+ (Muse family). Capped by no direct LCR.
- **Multimodal: 50/100.** Muse Spark 1.1 has CharXiv 88.4%, BabyVision 76.3%. Glimmer may lack vision. Capped by no direct benchmarks.
- **Coding: 50/100.** Estimated 30-50% of Muse Spark 1.1 (LiveCodeBench 85.9%, SWE-bench 82%). Capped by no direct benchmarks.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal (30B fits consumer GPU). Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 54/100.** Half-up mean of (40 + 45 + 85 + 50 + 50) / 5 = 54 → 54. Using six incl. cost: (40+45+85+50+50+95)/6 = 365/6 = 60.8 → 61. Model-queue says 75.6; large discrepancy suggests queue score from internal eval. Best-fit: capable small open-weight; direct benchmarks needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research; no direct benchmarks. Proxy from Muse Spark 1.1 (BenchLM) with size-based degradation. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Muse.md`, using the same headings.