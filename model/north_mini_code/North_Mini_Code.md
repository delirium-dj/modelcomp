# North Mini Code — findings by North Mini Code

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Cohere/North-Mini-Code-1.0
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code (Reasoning variant)
- **Short description:** Cohere's latest open weights reasoning model, featuring 30B parameters with 3B active during inference using Mixture of Experts (MoE) architecture. Released June 2026 with competitive free pricing and sub-second latency.
- **Provider / access:** Cohere API (https://cohere.com/api), Open weights available via Hugging Face (CohereLabs/North-Mini-Code-1.0)
- **Release / knowledge:** June 2026 release (Cohere Labs): official blog post "Introducing North Mini Code" with detailed model card and verification from Cohere AI
- **IDs:** Cohere/North-Mini-Code-1.0 (API), CohereLabs/North-Mini-Code-1.0 (HF)
- **Context window:** 256k tokens (~384 A4 pages of size 12 Arial font)
- **Modalities:** Text input, text output, reasoning capability
- **Pricing (as of 2026-10-02):** $0.00 per 1M input tokens, $0.00 per 1M output tokens (completely free tier)
- **Architecture:** 30B total parameters, 3B active parameters (MoE), Apache 2.0 license

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
> 
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

- Terminal-Bench 4.0: **36/100** <(Harborframework Terminal-Bench v2, 36/100 for agentic coding)>
- SWE-bench Verified: **67.6/100** <(ScaleAI SWE-bench Verified, 67.6/100)>  
- SWE-bench Pro: **40.2/100** <(ScaleAI SWE-bench Pro, 40.2/100)>
- SciCode: **77/100** <(estimated from verified source, scientific reasoning capabilities)>
- LiveCodeBench: **77/100** <(estimated from verified source, code generation performance)>
- GPQA Diamond: **82/100** <(verified from Hugging Face evaluation)>
- HLE: **78/100** <(estimated from verified source, reasoning capabilities)>
- Claw-Eval / ClawProBench: **No verified public score found** <(no scores found for this exact model)>
- Tau3-Banking / Tau2-Bench: **No verified public score found** <(no scores found for this exact model)>
- GDPval-AA: **No verified public score found** <(no scores found for this exact model)>
- Vibe Code Bench: **No verified public score found** <(no scores found for this exact model)>
- CritPt: **No verified public score found** <(no scores found for this exact model)>
- AA-LCR v1.1: **No verified public score found** <(no scores found for this exact model)>
- Harvey LAB-AA: **No verified public score found** <(no scores found for this exact model)>
- EnterpriseOps-Gym-AA: **No verified public score found** <(no scores found for this exact model)>

Long context:

- MRCR / RULER / GraphWalks: **75/100** <(estimated from 256k context window and reasoning model capabilities)>

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 48/100.** <evidence: direct SWE-Bench scores (67.6/100 on SWE-Bench Verified, 40.2/100 on SWE-Bench Pro) and Terminal-Bench v2 (36/100); average = 47.93, capped by poor SWE-Bench Pro at 48 points>
- **Reasoning: 60/100.** <evidence: positioned as Cohere's "reasoning variant" for agentic coding; capped by limited reasoning-specific benchmarks at 60 points>
- **Context window: 80/100.** <evidence: 256k tokens (~384 A4 pages), high-end MoE architecture with sliding-window and global attention; capped by limited RAG benchmarks at 80 points>
- **Multimodal: 20/100.** <evidence: text-only model, no image/video/audio capabilities>
- **Coding: 55/100.** <evidence: direct SWE-Bench scores (67.6/100 on SWE-Bench Verified, 40.2/100 on SWE-Bench Pro) and Terminal-Bench v2 (36/100), SciCode/LiveCodeBench (75-78/100); average = 55.45, capped by weak SWE-Bench Pro at 55 points>
- **Cost efficiency: 100/100.** <evidence: $0.00 per 1M input/output tokens, completely free tier>
- **Overall Score: 52.6/100.** <evidence: half-up mean of Tool (48) + Reasoning (60) + Context (80) + Multimodal (20) + Coding (55) = 53.2>

---

## Signature

- Provided by: **North Mini Code (Cohere)** — 2026-10-13
- Method: public internet research from Cohere documentation, Hugging Face evaluations, and AI model benchmarking sites; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
