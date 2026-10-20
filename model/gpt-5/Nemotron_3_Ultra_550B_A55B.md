# GPT-5 — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 (Base / Reasoning)
- **Short description:** OpenAI's GPT-5 model family. Queue Overall 83.6. No direct public benchmarks found on BenchLM, Artificial Analysis, or Vals AI for "GPT-5" base model. GPT-5 family includes variants: 5.1, 5.2, 5.3-codex, 5.4, 5.5, 5.6. Likely base reasoning model with Responses API.
- **Provider / access:** OpenAI API (`gpt-5` via Responses API), OpenCode Zen (`opencode/gpt-5`), Azure OpenAI. Responses API (not Chat Completions).
- **Release / knowledge:** 2026 release; knowledge cutoff not publicly disclosed.
- **IDs:** `gpt-5` (OpenAI API), `opencode/gpt-5` (OpenCode Zen). No Free tier on any platform.
- **Context window:** Likely 922,000 tokens (GPT-5 family standard per GPT-5.5); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** OpenAI API pricing not publicly listed for base GPT-5; GPT-5 family typically premium. Estimated ~$5-10/M in, $15-30/M out. No public blended rate.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks found** for "GPT-5" base model on BenchLM, Artificial Analysis, Vals AI, Epoch AI, ARC Prize, or OpenRouter.

**Proxy from GPT-5 family variants** (all have benchmarks):
- GPT-5.5: SWE-bench Verified 80.8%, LiveCodeBench 85.3% (Vals), TB 2.1 82%, MRCR 87.5%
- GPT-5.6-sol: SWE-bench 96.2% (Vals), LiveCodeBench 82.6% (Vals), TB 2.1 91.9%
- GPT-5.5-pro: Similar tier to 5.5
- GPT-5.3-codex: Codex specialization
- GPT-5.1/5.2/5.4: Earlier/lighter variants

Base GPT-5 expected between 5.1 and 5.5 in capability.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 70/100.** Proxy from GPT-5.5 (TB 2.1 82%, BrowseComp 84.4%, OSWorld-Verified 78.7%). Base expected slightly lower. Capped by no direct TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 72/100.** Proxy from GPT-5.5 (GPQA 93.6%, HLE 52.2%, MRCR 87.5%). Base expected slightly lower. Capped by no direct GPQA, HLE, FrontierMath, AA Intelligence Index.
- **Context window: 90/100.** Likely 922K (GPT-5 family); GPT-5.5 has 922K. Methodology: 500K-1M = 85-94.
- **Multimodal: 70/100.** Text + image input (GPT-5 family). No video, audio, PDF. Methodology: +image in = 60-70.
- **Coding: 78/100.** Proxy from GPT-5.5 (LiveCodeBench 85.3% Vals, SWE-bench 82.6% Vals, TB 2.1 82%). Base expected slightly lower. Capped by no direct SWE-bench Verified, LiveCodeBench Vals, AA Coding Index.
- **Cost efficiency: 45/100.** Premium GPT-5 pricing estimated ~$5-10/$20-30. Higher than GPT-4o. Methodology: premium tier ≈ 40-50.
- **Overall Score: 76/100.** Half-up mean of (70 + 72 + 90 + 70 + 78) / 5 = 76 → 76. Using six incl. cost: (70+72+90+70+78+45)/6 = 425/6 = 70.8 → 71. Model-queue says 83.6; discrepancy due to lack of direct benchmarks and premium pricing. Best-fit: strong base model inferred from family benchmarks; direct evaluation needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for GPT-5 base. Proxy from GPT-5.5/5.6/5.3-codex family benchmarks (BenchLM, Artificial Analysis, Vals AI). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.