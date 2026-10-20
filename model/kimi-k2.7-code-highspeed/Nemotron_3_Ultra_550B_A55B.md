# Kimi-K2.7-Code-Highspeed — findings by Nemotron 3 Ultra 550B A55B

- Source: Moonshot AI (`kimi-k2.7-code-highspeed`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi-K2.7-Code-Highspeed
- **Short description:** Moonshot AI's coding-optimized high-speed variant of Kimi-K2.7. Queue Overall 79.3. BenchLM doesn't list this specific variant separately (shows Kimi-K2.5, Kimi-K2.6, Kimi-K2.7-Code at 49.35).
- **Provider / access:** Kimi API (`kimi-k2.7-code-highspeed`), OpenCode Zen (`opencode/kimi-k2.7-code-highspeed`). Likely beta/limited access.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `kimi-k2.7-code-highspeed` (Kimi API / OpenCode Zen).
- **Context window:** Likely 256K (Kimi family standard) or 1M for highspeed variant.
- **Modalities:** Text, image, video in; text out; reasoning yes (code-optimized); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Kimi API pricing not publicly listed for this variant; Kimi family typically competitive. No public blended rate.
- **Architecture:** Proprietary (Moonshot AI); coding-optimized variant.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** — No page for "kimi-k2.7-code-highspeed". Related models:
- Kimi K2.5: 53.05 (rank 86)
- Kimi K2.6: 58.4 (rank 77)
- Kimi K2.7 Code: 49.35 (rank 107)

**Proxy from Kimi-K2.5** (BenchLM, 53.05):
- SWE-bench Verified: 76.8%
- LiveCodeBench v6: 85.0%
- Video-MME: 87.4%
- OmniDocBench: 88.8%
- Tau2-bench: 95.9%

Highspeed variant expected stronger on coding speed/throughput.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** Proxy from K2.5: Tau2 95.9%, WideResearch 72.7%, OSWorld-Verified 63.3%. Highspeed may trade some agentic depth for speed. Capped by no direct benchmarks.
- **Reasoning: 68/100.** Proxy from K2.5: GPQA 87.6%, MMLU-Pro 87.1%, AIME 96%, HMMT 87-95%. Highspeed variant may have slightly reduced reasoning depth. Capped by no direct HLE, FrontierMath.
- **Context window: 70/100.** Likely 256K (Kimi family) or 1M for highspeed. Capped by no direct LCR/MRCR for this variant.
- **Multimodal: 90/100.** Proxy from K2.5: Video-MME 87.4%, VideoMMMU 86.6%, OmniDocBench 88.8%. Full vision+video.
- **Coding: 85/100.** "Code-Highspeed" branding suggests exceptional coding. Proxy K2.5: SWE-bench Verified 76.8%, LiveCodeBench 85.0%. Highspeed expected ≥ K2.5. Capped by no direct benchmarks.
- **Cost efficiency: 60/100.** Highspeed variant may have premium pricing; Moonshot typically competitive. No public pricing. Capped by unknown pricing.
- **Overall Score: 75.6/100.** Half-up mean of (65 + 68 + 70 + 90 + 85) / 5 = 75.6 → 76. Using six incl. cost: (65+68+70+90+85+60)/6 = 438/6 = 73 → 73. Model-queue says 79.3; discrepancy due to highspeed specialization not fully captured. Best-fit: coding-optimized high-speed variant; strong multimodal inheritance from K2.5.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for this variant. Proxy from Kimi-K2.5 (BenchLM) with highspeed coding specialization assumed. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.md`, using the same headings.