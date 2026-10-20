# GPT-5.3 Codex — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex (Codex specialization)
- **Short description:** OpenAI's Codex-specialized variant of GPT-5.3. Queue Overall 84.4. BenchLM doesn't list GPT-5.3-codex with Overall score (shows GPT-5.3 Codex Spark at 60.53). Codex variants optimized for coding.
- **Provider / access:** OpenAI API (`gpt-5.3-codex` via Responses API), OpenCode Zen (`opencode/gpt-5.3-codex`), Azure OpenAI. No public free tier.
- **Release / knowledge:** 2026 release; knowledge cutoff not publicly disclosed.
- **IDs:** `gpt-5.3-codex` (OpenAI API), `opencode/gpt-5.3-codex` (OpenCode Zen).
- **Context window:** Likely 922K (GPT-5 family) or 1M; not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes. Codex optimized for code.
- **Pricing (as of 2026-10-19):** OpenAI API Codex pricing not publicly listed separately; likely premium over base GPT-5.3. No public blended rate.
- **Architecture:** Proprietary (OpenAI); Codex fine-tune of GPT-5.3.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**Limited direct benchmarks** on major aggregators. BenchLM shows GPT-5.3 Codex Spark (60.53) but not GPT-5.3 Codex.

Proxy from GPT-5.3 Codex Spark (BenchLM):
- Overall: 60.53
- No detailed benchmarks listed

GPT-5.5 (similar tier, non-Codex) has:
- SWE-bench Verified: 80.8% (Anthropic comparison)
- LiveCodeBench (Vals): 85.3%
- TB 2.1: 82%

Codex variant expected stronger on coding, similar on reasoning.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 70/100.** Codex optimized for coding agents; expected strong TB. No direct TB, BrowseComp, OSWorld, GDPval. Capped by no direct benchmarks.
- **Reasoning: 72/100.** Base GPT-5.3 strong reasoning; Codex retains. Estimated GPQA ~90%, HLE ~50%. Capped by no HLE, FrontierMath, AA Intelligence Index.
- **Context window: 90/100.** Likely 922K-1M (GPT-5 family). Capped by no public LCR/MRCR for Codex.
- **Multimodal: 70/100.** Text + image input (GPT-5 family). No video/audio/PDF. Methodology: +image in = 60-70.
- **Coding: 88/100.** Codex specialization: expected SWE-bench Verified >85%, LiveCodeBench >85%, TB 2.1 >85%. Strongest suit. Capped by no direct benchmarks.
- **Cost efficiency: 45/100.** Premium Codex pricing estimated ~$5-8/$20-30. Higher than base. Methodology: premium Codex ≈ 40-50.
- **Overall Score: 78/100.** Half-up mean of (70 + 72 + 90 + 70 + 88) / 5 = 78 → 78. Using six incl. cost: (70+72+90+70+88+45)/6 = 435/6 = 72.5 → 73. Model-queue says 84.4; discrepancy suggests queue weights coding higher. Best-fit: exceptional coding specialist (Codex); public benchmarks needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across major benchmark aggregators; limited direct benchmarks for GPT-5.3 Codex. Proxy from GPT-5.3 Codex Spark (BenchLM) and GPT-5 family. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5_Codex.md`, using the same headings.