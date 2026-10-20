# Step 5 Preview — findings by Nemotron 3 Ultra 550B A55B

- Source: StepFun (`step-5-preview`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's preview model. Queue Overall 85 but BenchLM shows Step-5-Preview with limited benchmarks (only 906 Big_Pickle tokens, no Overall score computed). Likely early preview with limited public evaluation.
- **Provider / access:** StepFun API, OpenCode Zen (`opencode/step-5-preview`). Preview access, not generally available.
- **Release / knowledge:** 2026 preview release; knowledge cutoff not explicitly stated.
- **IDs:** `step-5-preview` (StepFun API / OpenCode Zen). Preview access only.
- **Context window:** Not publicly specified.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio noted.
- **Pricing (as of 2026-10-19):** Preview pricing not public; StepFun typically competitive. No public blended rate.
- **Architecture:** Proprietary (StepFun); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**Very limited public benchmarks** on BenchLM. Step-5-Preview page shows:
- Only 5 benchmark rows displayed
- Big_Pickle: 906 tokens (very low coverage)
- No Overall score computed (unranked)
- No TB, LiveCodeBench, SWE-bench, GPQA, HLE, MMLU-Pro

Other models' directories include Step_5_Preview.md comparison files but no scores extracted.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 40/100.** No public agentic benchmarks. Preview status suggests limited. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 50/100.** No public HLE, GPQA, MMLU, FrontierMath. Preview status. Capped by absence of evidence.
- **Context window: 50/100.** Unknown context window. Capped by no public LCR/MRCR.
- **Multimodal: 30/100.** Presumed text-only. No vision/audio benchmarks.
- **Coding: 45/100.** No public LiveCodeBench, SWE-bench, AA Coding Index. Preview status. Capped by absence of evidence.
- **Cost efficiency: 40/100.** Preview pricing unknown; StepFun typically competitive but no public data. Capped by unknown pricing.
- **Overall Score: 43/100.** Half-up mean of (40 + 50 + 50 + 30 + 45) / 5 = 43 → 43. Using six incl. cost: (40+50+50+30+45+40)/6 = 255/6 = 42.5 → 43. Model-queue says 85; massive discrepancy indicates queue score from internal/private evaluation not reproducible publicly. Best-fit: cannot independently verify; treat as unverified preview until public benchmarks appear.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across major benchmark aggregators (BenchLM Step-5-Preview page); extremely limited public benchmarks (only 5 rows, no Overall score). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Step_5.md`, using the same headings.