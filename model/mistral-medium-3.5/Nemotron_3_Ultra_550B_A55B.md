# Mistral-Medium-3.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Mistral AI (`mistral-medium-3.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral-Medium-3.5
- **Short description:** Mistral AI's medium-tier model. Queue Overall 74.9. BenchLM doesn't list this specific variant (shows Mistral Large 4 at 21.63). Mistral family typically strong open-weight models.
- **Provider / access:** Mistral API (`mistral-medium-3.5`), OpenCode Zen (`opencode/mistral-medium-3.5`), Hugging Face (likely). No public free tier.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `mistral-medium-3.5` (Mistral API / OpenCode Zen).
- **Context window:** Likely 128K-256K (Mistral family standard); Mistral Large 4 has 128K.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Mistral API pricing not publicly listed for this variant; Mistral typically competitive. No public blended rate.
- **Architecture:** Proprietary (Mistral AI); likely MoE or dense medium-scale.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks found** on BenchLM, Artificial Analysis, or Vals AI for "Mistral-Medium-3.5". BenchLM shows Mistral Large 4 (21.63).

**Proxy from Mistral family:**
- Mistral Large 4 (BenchLM): 21.63, 128K context
- Mistral Medium 3 (not on BenchLM with score)
- Mistral 7B/8x7B: open-weight, smaller

**Expected positioning:** Medium 3.5 between Large 4 and smaller models. Estimated Overall 50-65.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 50/100.** No direct agentic benchmarks. Medium tier typically moderate. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 55/100.** Medium tier expected moderate reasoning. No GPQA, HLE, FrontierMath, AA Intelligence Index. Capped by absence of evidence.
- **Context window: 60/100.** Estimated 128K-256K (Mistral family). Methodology: 128K = 55-65.
- **Multimodal: 65/100.** Text + image (Mistral family). No video/audio/PDF noted. Methodology: +image in = 60-70.
- **Coding: 55/100.** Medium tier expected moderate coding. No SWE-bench, LiveCodeBench, AA Coding Index. Capped by absence of evidence.
- **Cost efficiency: 60/100.** Mistral typically competitive pricing. Medium tier ~$1-2/$4-8 estimated. Capped by unknown pricing.
- **Overall Score: 57/100.** Half-up mean of (50 + 55 + 60 + 65 + 55) / 5 = 57 → 57. Using six incl. cost: (50+55+60+65+55+60)/6 = 345/6 = 57.5 → 58. Model-queue says 74.9; discrepancy due to limited public benchmarks. Best-fit: expected solid medium-tier model; public verification needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for this variant. Proxy from Mistral family (BenchLM Mistral Large 4). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Mistral.md`, using the same headings.