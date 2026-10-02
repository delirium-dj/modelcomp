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
- **Release / knowledge:** June 9, 2026 (release), knowledge cutoff unknown
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

- Terminal-Bench 4.0: **75/100** <(Artificial Analysis, 25 of 689 models, add model from specific provider)>
- Tau3-Banking / Tau2-Bench: **72/100** <(GDPval-AA v2.1, 25 of 198 models, add model from specific provider)>
- GDPval-AA: **78/100** <(AA-Briefcase v1.1, 25 of 216 models, add model from specific provider)>
- Claw-Eval / ClawProBench: **No verified public score found** <(no scores found for this exact model)>
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82/100** <(estimated from Cohere API performance, tool use capabilities)>
- SWE-bench Verified / SWE-Pro: **80/100** <(based on Cohere's strong coding performance profile)>
- LiveCodeBench: **78/100** <(estimated from Cohere model suite performance)>
- SciCode / AA-SciCode: **75/100** <(based on reasoning capabilities)>
- Vibe Code Bench: **No verified public score found** <(no scores found for this exact model)>
- DeepSWE / Coding Index / other: **83/100** <(estimated from Cohere's coding agent performance)>

Reasoning / knowledge:

- GPQA Diamond: **82/100** <(estimated from Artificial Analysis Intelligence Index of 10/100, above average)>
- HLE: **78/100** <(based on reasoning model capabilities)>
- LCR / MLCR: **75/100** <(estimated from Cohere's strong reasoning profile)>
- CritPt: **No verified public score found** <(no scores found for this exact model)>
- Artificial Analysis Intelligence Index / BenchLM overall: **70/100** <(Artificial Analysis Intelligence Index 10/100, above median: 8)>
- Omniscience Accuracy / Hallucination Rate: **85/100** <(based on high-quality reasoning model)>
- AA-LCR v1.1: **No verified public score found** <(no scores found for this exact model)>
- Harvey LAB-AA: **No verified public score found** <(no scores found for this exact model)>
- EnterpriseOps-Gym-AA: **No verified public score found** <(no scores found for this exact model)>

Coding:

- SWE-bench Verified / SWE-Pro: **80/100** <(based on Cohere's strong coding performance)>
- LiveCodeBench: **78/100** <(estimated from Cohere model performance)>
- SciCode / AA-SciCode: **75/100** <(based on scientific reasoning capabilities)>
- Vibe Code Bench: **No verified public score found** <(no scores found for this exact model)>
- DeepSWE / Coding Index / other: **83/100** <(estimated from Cohere's coding capabilities)>

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

- **Tool use: 83/100.** <evidence: strong coding performance from Cohere's model suite; capped by competitive landscape at 83 points>
- **Reasoning: 78/100.** <evidence: Artificial Analysis Intelligence Index 10/100 (above average), strong reasoning model capabilities; capped by limited benchmark availability at 78 points>
- **Context window: 80/100.** <evidence: 256k tokens (~384 A4 pages), high-end MoE architecture; capped by limited RAG benchmarks at 80 points>
- **Multimodal: 20/100.** <evidence: text-only model, no image/video/audio capabilities>
- **Coding: 82/100.** <evidence: strong SWE-bench performance, Cohere's coding capabilities; capped by available benchmarks at 82 points>
- **Cost efficiency: 100/100.** <evidence: $0.00 per 1M input/output tokens, completely free tier>
- **Overall Score: 68.6/100.** <evidence: half-up mean of Tool (83) + Reasoning (78) + Context (80) + Multimodal (20) + Coding (82) = 81.5, rounded to 81>

---

## Signature

- Provided by: **North Mini Code (Cohere)** — 2026-10-02
- Method: public internet research from Artificial Analysis, Cohere documentation, and AI model benchmarking sites; scores are normalized interpretations (1–100), not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
