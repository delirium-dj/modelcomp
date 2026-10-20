# Nemotron-3-Ultra-Free — findings by Nemotron 3 Ultra 550B A55B

- Source: NVIDIA (`nemotron-3-ultra-free`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron-3-Ultra-Free
- **Short description:** NVIDIA's free tier version of Nemotron-3-Ultra. Queue Overall 71.6. BenchLM doesn't list this specific variant (shows Nemotron-3-Ultra at 46.77, Nemotron-3.5-Super-VL at 49.38). Free tier suggests reduced capability vs full Ultra.
- **Provider / access:** NVIDIA API (`nemotron-3-ultra-free`), Hugging Face (likely), OpenCode Zen (`opencode/nemotron-3-ultra-free`). Free tier.
- **Release / knowledge:** 2026 release (Nemotron 3 family); knowledge cutoff not explicitly stated.
- **IDs:** `nemotron-3-ultra-free` (NVIDIA API / OpenCode Zen). Free tier.
- **Context window:** Likely 128K-256K (reduced from full Ultra); full Nemotron-3-Ultra has unknown context.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio noted.
- **Pricing (as of 2026-10-20):** Free tier on NVIDIA API; no public pricing for paid tiers. Self-host not available (proprietary).
- **Architecture:** Proprietary (NVIDIA); reduced-capability free tier of Nemotron-3-Ultra.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks found** for "Nemotron-3-Ultra-Free" on BenchLM, Artificial Analysis, or Vals AI. BenchLM shows Nemotron-3-Ultra (46.77).

**Proxy from Nemotron-3-Ultra** (BenchLM, 46.77):
- No detailed benchmarks displayed

**Sibling models on BenchLM:**
- Nemotron-3.5-Super-VL: 49.38
- Nemotron-3.5-Bolt-74B-A9B: 45.25
- Nemotron-3.5-Lightning-30B-A3B-NVFP4: 25.66

Free tier expected 70-80% of full Ultra.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 40/100.** Proxy from full Ultra (46.77 Overall). Free tier estimated 70-80%. Capped by no direct benchmarks.
- **Reasoning: 45/100.** Proxy from full Ultra. Free tier estimated reduced reasoning. Capped by no GPQA, HLE, FrontierMath, AA Intelligence Index.
- **Context window: 55/100.** Likely reduced from full Ultra (128K-256K vs unknown full). Capped by no direct LCR/MRCR.
- **Multimodal: 30/100.** Text-only (Nemotron 3 family). No vision/audio. Methodology: text-only = 20-30.
- **Coding: 40/100.** Proxy from full Ultra. Free tier estimated reduced coding. Capped by no SWE-bench, LiveCodeBench, AA Coding Index.
- **Cost efficiency: 85/100.** Free tier on NVIDIA API; no self-host (proprietary). Methodology: free API tier ≈ 80-90.
- **Overall Score: 42/100.** Half-up mean of (40 + 45 + 55 + 30 + 40) / 5 = 42 → 42. Using six incl. cost: (40+45+55+30+40+85)/6 = 295/6 = 49.2 → 49. Model-queue says 71.6; **large discrepancy — free tier cannot match queue score**.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for free tier. Proxy from Nemotron-3-Ultra (BenchLM) with estimated free-tier degradation. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.md`, using the same headings.