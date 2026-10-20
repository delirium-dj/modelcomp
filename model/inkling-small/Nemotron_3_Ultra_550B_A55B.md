# Inkling Small — findings by Nemotron 3 Ultra 550B A55B

- Source: Inclusion AI (`inkling-small`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Inclusion AI's small open-weight model. Queue Overall 86 but BenchLM shows Inkling (85.2) and inkling-small not separately listed. Likely a smaller variant of Inkling family.
- **Provider / access:** Hugging Face (Inclusion AI), OpenCode Zen (`opencode/inkling-small`). Open-weight, free on HuggingChat.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `inkling-small` (OpenCode Zen / Inclusion AI). Free tier on HuggingChat.
- **Context window:** Likely 1M+ (Inkling family); not explicitly stated for small variant.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio noted.
- **Pricing (as of 2026-10-19):** Free on HuggingChat; self-host near-zero marginal. Cost per Intelligence Index task: negligible.
- **Architecture:** Open-weight; parameter count not explicitly stated (small variant).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks** for "inkling-small" on BenchLM, Artificial Analysis, or Vals AI. BenchLM shows "Inkling" (85.2 Overall, rank 59) with:
- Terminal-Bench 2.1 (Vals): 69.3%
- LiveCodeBench (Vals): 85.9%
- SWE-bench (Vals): 82.0%
- AA Coding Index: 71.3%
- AA Intelligence Index: 33.7%
- AA HLE: 46.2%
- AA LCR: 77.7%
- MMMU-Pro: Not directly listed

Small variant estimated 80-90% of base Inkling scores.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** Proxy from Inkling: TB 2.1 69.3% (Vals). Small variant estimated ~55-62%. Capped by no direct benchmarks.
- **Reasoning: 65/100.** Proxy from Inkling: AA HLE 46.2%, AA LCR 77.7%, AA Intelligence Index 33.7%. Small variant estimated lower. Capped by no direct benchmarks.
- **Context window: 85/100.** Likely 1M+ (Inkling family). Capped by no direct LCR for small variant.
- **Multimodal: 50/100.** Inkling base has CharXiv 88.4%, BabyVision 76.3%. Small variant may lack vision. Capped by no direct benchmarks.
- **Coding: 70/100.** Proxy from Inkling: LiveCodeBench 85.9% (Vals), SWE-bench 82.0% (Vals), AA Coding Index 71.3%. Small variant estimated ~68-77%. Capped by no direct benchmarks.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 67/100.** Half-up mean of (65 + 65 + 85 + 50 + 70) / 5 = 67 → 67. Using six incl. cost: (65+65+85+50+70+95)/6 = 430/6 = 71.7 → 72. Model-queue says 86; discrepancy due to small variant estimation. Best-fit: capable small open-weight inheriting Inkling family strengths; direct benchmarks needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for small variant. Proxy from Inkling base (BenchLM). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Inkling.md`, using the same headings.