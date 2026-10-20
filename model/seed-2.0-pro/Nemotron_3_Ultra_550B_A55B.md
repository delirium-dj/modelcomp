# Seed 2.0 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: ByteDance (`seed-2.0-pro`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance's Seed 2.0 Pro model. Queue Overall 84.7. BenchLM doesn't list Seed 2.0 Pro with Overall score (shows Seed 2.1 Pro/ Turbo, Seed 1.6 family). ByteDance Seed family typically competitive Chinese models.
- **Provider / access:** ByteDance Volcano Engine API, OpenCode Zen (`opencode/seed-2.0-pro`). Limited international access.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `seed-2.0-pro` (Volcano Engine / OpenCode Zen). No public free tier.
- **Context window:** 256K (Seed 2.0 family per BenchLM); max output not explicitly stated.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio noted.
- **Pricing (as of 2026-10-19):** Volcano Engine pricing not publicly listed internationally; typically competitive in China. No public blended rate.
- **Architecture:** Proprietary (ByteDance); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**Limited direct benchmarks** on major aggregators. BenchLM shows Seed 2.1 Pro/ Turbo, Seed 1.6 family but not Seed 2.0 Pro with scores.

Proxy from Seed 1.6 Flash (not on BenchLM with scores) and general Seed family reputation: strong Chinese language, competitive coding.

No Seed 2.0 Pro specific benchmarks on BenchLM, Artificial Analysis, Vals AI.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 55/100.** No direct agentic benchmarks. Seed family typically moderate agentic. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 65/100.** Seed family strong on Chinese benchmarks; international benchmarks limited. Capped by no HLE, GPQA, MMLU-Pro, FrontierMath, AA Intelligence Index.
- **Context window: 70/100.** 256K (Seed 2.0 family per BenchLM). Methodology: 256K = 65-75.
- **Multimodal: 40/100.** Presumed text-only. No vision/audio benchmarks for Seed 2.0 Pro. Methodology: text-only = 20-30, slight bump for potential.
- **Coding: 60/100.** Seed family competitive but no public LiveCodeBench, SWE-bench, AA Coding Index for 2.0 Pro. Capped by absence of evidence.
- **Cost efficiency: 50/100.** Volcano Engine pricing not public internationally; typically competitive in China. No public blended rate. Capped by unknown pricing.
- **Overall Score: 58/100.** Half-up mean of (55 + 65 + 70 + 40 + 60) / 5 = 58 → 58. Using six incl. cost: (55+65+70+40+60+50)/6 = 340/6 = 56.7 → 57. Model-queue says 84.7; large discrepancy indicates queue score from internal/Chinese eval not reproducible on international benchmarks. Best-fit: cannot independently verify on international benchmarks; likely strong in Chinese context.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across major benchmark aggregators; limited direct benchmarks for Seed 2.0 Pro. BenchLM shows Seed family but not this variant with scores. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Seed_2.md`, using the same headings.