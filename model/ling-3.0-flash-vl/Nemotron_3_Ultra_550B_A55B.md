# Ling-3.0-Flash-VL — findings by Nemotron 3 Ultra 550B A55B

- Source: Inclusion AI (`ling-3.0-flash-vl`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-Flash-VL (Vision-Language Flash)
- **Short description:** Inclusion AI's vision-language flash model. Queue Overall 74.3. BenchLM doesn't list this specific variant (shows Inkling at 85.2, Inkling-Small at 86). Inclusion AI's Ling family typically strong open-weight models.
- **Provider / access:** Inclusion AI / OpenCode Zen (`opencode/ling-3.0-flash-vl`), Hugging Face (likely). Free tier on HuggingChat (base Ling).
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `ling-3.0-flash-vl` (OpenCode Zen / Inclusion AI).
- **Context window:** Likely 1M+ (Ling family standard; Inkling has 1M+).
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes. VL = Vision-Language.
- **Pricing (as of 2026-10-20):** Inclusion AI pricing not publicly listed; open-weight family typically free on HuggingChat. Self-host near-zero marginal.
- **Architecture:** Open-weight VL model; likely MoE or dense with vision encoder.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks found** on BenchLM, Artificial Analysis, or Vals AI for "Ling-3.0-Flash-VL". BenchLM shows Inkling (85.2) and Inkling-Small (86).

**Proxy from Inkling** (BenchLM, Overall 85.2):
- Terminal-Bench 2.1 (Vals): 69.3%
- LiveCodeBench (Vals): 85.9%
- SWE-bench (Vals): 82.0%
- AA Coding Index: 71.3%
- AA Intelligence Index: 33.7%
- AA HLE: 46.2%
- AA LCR: 77.7%
- CharXiv: 88.4%
- BabyVision: 76.3%
- Design Arena: 1270 Elo

VL variant expected stronger multimodal, similar text/coding.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** Proxy from Inkling: TB 2.1 69.3%. VL variant may have improved tool use with vision. Capped by no direct TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 70/100.** Proxy from Inkling: AA HLE 46.2%, AA LCR 77.7%, AA Intelligence Index 33.7%. VL adds vision reasoning. Capped by no direct HLE, FrontierMath for VL.
- **Context window: 85/100.** Likely 1M+ (Ling family). Capped by no direct LCR/MRCR for VL variant.
- **Multimodal: 90/100.** VL = Vision-Language; proxy Inkling: CharXiv 88.4%, BabyVision 76.3%, Design Arena 1270. Native vision + language.
- **Coding: 80/100.** Proxy from Inkling: LiveCodeBench 85.9% (Vals), SWE-bench 82.0% (Vals), AA Coding Index 71.3%. Capped by no direct benchmarks for VL.
- **Cost efficiency: 95/100.** Open-weight family; free on HuggingChat (base Ling); self-host near-zero marginal. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 78/100.** Half-up mean of (65 + 70 + 85 + 90 + 80) / 5 = 78 → 78. Using six incl. cost: (65+70+85+90+80+95)/6 = 485/6 = 80.8 → 81. Model-queue says 74.3; discrepancy due to VL specialization boosting multimodal. Best-fit: exceptional open-weight VL model inheriting Ling family strengths; free access.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for VL variant. Proxy from Inkling (BenchLM) with VL specialization. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Ling_3.md`, using the same headings.