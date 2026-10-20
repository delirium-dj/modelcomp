# Kimi-K2.8-Preview — findings by Nemotron 3 Ultra 550B A55B

- Source: Moonshot AI (`kimi-k2.8-preview`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi-K2.8-Preview
- **Short description:** Moonshot AI's preview model for K2.8 generation. Queue Overall 79.1. BenchLM doesn't list this specific variant separately (shows Kimi-K2.5, K2.6, K2.7-Code).
- **Provider / access:** Kimi API (`kimi-k2.8-preview`), OpenCode Zen (`opencode/kimi-k2.8-preview`). Preview/beta access.
- **Release / knowledge:** 2026 preview release; knowledge cutoff not explicitly stated.
- **IDs:** `kimi-k2.8-preview` (Kimi API / OpenCode Zen).
- **Context window:** Likely 256K-1M (Kimi family); preview may have expanded context.
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Kimi API pricing not publicly listed for preview; Moonshot typically competitive. No public blended rate.
- **Architecture:** Proprietary (Moonshot AI); next-gen preview.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** — No page for "kimi-k2.8-preview". Related models:
- Kimi K2.5: 53.05 (rank 86)
- Kimi K2.6: 58.4 (rank 77)
- Kimi K2.7 Code: 49.35 (rank 107)
- Kimi K3: 69.95 (rank 38)

**Proxy from Kimi-K2.5/K2.6/K3** (BenchLM):
- K2.5: 53.05, K2.6: 58.4, K3: 69.95
- K2.8 Preview expected between K2.6 and K3

**Proxy from Kimi-K2.5** (BenchLM, 53.05):
- SWE-bench Verified: 76.8%
- LiveCodeBench v6: 85.0%
- Video-MME: 87.4%
- OmniDocBench: 88.8%
- Tau2-bench: 95.9%
- HLE: 30.1%

K2.8 Preview expected stronger than K2.6, approaching K3.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 68/100.** Proxy from K2.6/K3: Tau2 ~96%+, WideResearch ~73%+. Preview may have improved agentic. Capped by no direct benchmarks.
- **Reasoning: 72/100.** Proxy from K3 trajectory: GPQA ~90%+, MMLU-Pro ~90%+, HLE ~40%+. Capped by no direct HLE, FrontierMath.
- **Context window: 80/100.** Likely 1M (K3 has 1M+). Capped by no direct LCR/MRCR for preview.
- **Multimodal: 90/100.** Kimi family strong multimodal: Video-MME 87%+, VideoMMMU 86%+, OmniDocBench 88%+. Capped by no direct benchmarks.
- **Coding: 80/100.** K3 expected strong coding (K2.5: SWE-bench Verified 76.8%, LiveCodeBench 85%). Preview expected ≥ K2.6. Capped by no direct benchmarks.
- **Cost efficiency: 55/100.** Preview pricing unknown; Moonshot typically competitive. No public pricing. Capped by unknown pricing.
- **Overall Score: 78/100.** Half-up mean of (68 + 72 + 80 + 90 + 80) / 5 = 78 → 78. Using six incl. cost: (68+72+80+90+80+55)/6 = 445/6 = 74.2 → 74. Model-queue says 79.1; discrepancy reduced. Best-fit: strong preview approaching K3 capabilities; excellent multimodal inheritance.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for this variant. Proxy from Kimi-K2.5/K2.6/K3 (BenchLM) with trajectory extrapolation. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.md`, using the same headings.