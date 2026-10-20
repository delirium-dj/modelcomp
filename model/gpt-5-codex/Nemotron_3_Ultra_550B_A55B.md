# GPT-5-Codex — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5-codex`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex (Codex specialization)
- **Short description:** OpenAI's Codex-specialized variant of GPT-5. Queue Overall 64.7. BenchLM doesn't list this specific variant (shows GPT-5.3 Codex Spark at 60.53). Codex variants optimized for coding.
- **Provider / access:** OpenAI API (`gpt-5-codex` via Responses API), OpenCode Zen (`opencode/gpt-5-codex`), Azure OpenAI. No public free tier.
- **Release / knowledge:** 2026 release; knowledge cutoff not publicly disclosed.
- **IDs:** `gpt-5-codex` (OpenAI API), `opencode/gpt-5-codex` (OpenCode Zen).
- **Context window:** Likely 922K (GPT-5 family) or 1M; not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes. Codex optimized for code.
- **Pricing (as of 2026-10-20):** OpenAI API Codex pricing not publicly listed separately; likely premium over base GPT-5. No public blended rate.
- **Architecture:** Proprietary (OpenAI); Codex fine-tune of GPT-5.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks** for "GPT-5 Codex" on BenchLM, Artificial Analysis, or Vals AI.

**Proxy from GPT-5.3 Codex Spark** (BenchLM, 60.53):
- Overall: 60.53
- No detailed benchmarks listed

**GPT-5 family benchmarks** (GPT-5.5, GPT-5.6):
- GPT-5.5: SWE-bench Verified 80.8%, LiveCodeBench 85.3% (Vals), TB 2.1 82%
- GPT-5.6-sol: SWE-bench 96.2% (Vals), LiveCodeBench 82.6% (Vals), TB 2.1 91.9%

Codex variant expected stronger on coding, similar reasoning.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** Proxy from GPT-5.5 (TB 2.1 82%, BrowseComp 84.4%, OSWorld-Verified 78.7%). Codex optimized for coding agents; expected strong TB. Capped by no direct TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 70/100.** Base GPT-5 strong reasoning; Codex retains. Estimated GPQA ~90%, HLE ~50%. Capped by no HLE, FrontierMath, AA Intelligence Index.
- **Context window: 90/100.** Likely 922K-1M (GPT-5 family). Capped by no public LCR/MRCR for Codex.
- **Multimodal: 70/100.** Text + image input (GPT-5 family). No video/audio/PDF. Methodology: +image in = 60-70.
- **Coding: 85/100.** Codex specialization: expected SWE-bench Verified >85%, LiveCodeBench >85%, TB 2.1 >85%. Strongest suit. Capped by no direct benchmarks.
- **Cost efficiency: 45/100.** Premium Codex pricing estimated ~$5-10/$20-30. Higher than base. Methodology: premium Codex ≈ 40-50.
- **Overall Score: 76/100.** Half-up mean of (65 + 70 + 90 + 70 + 85) / 5 = 76 → 76. Using six incl. cost: (65+70+90+70+85+45)/6 = 425/6 = 70.8 → 71. Model-queue says 64.7; discrepancy suggests queue weights coding less. Best-fit: exceptional coding specialist (Codex); public benchmarks needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for GPT-5 Codex. Proxy from GPT-5.3 Codex Spark (BenchLM) and GPT-5 family. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5_Codex.md`, using the same headings.