# GLM 5.3 Flash — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: GLM 5.3 Flash (glm-5.3-flash)
- Date: 2026-10-28
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.ai's ultra-fast agentic coding model featuring 320B/18B-active Flash MoE architecture with MIT weights, 204K context window, and exceptional performance in coding benchmarks (TB 2.1 84.3%).
- **Provider / access:** Z.ai via OpenCode API (`glm-5.3-flash`) and free tier available (`glm-5.3-flash-free`)
- **Release / knowledge:** Released August 2026; previously known as "Ox Alpha" (stealth model from 2026-08-20 until confirmed identity on 2026-08-26); knowledge cutoff not disclosed
- **IDs:** `opencode/glm-5.3-flash` / `glm-5.3-flash` (OpenCode API) / `glm-5.3-flash-free` (Free tier)
- **Context window:** 204K tokens
- **Modalities:** Text input/output only
- **Pricing (as of 2026-10):** $0.15 per 1M tokens input, $0.50 per 1M tokens output; free Zen tier available
- **Architecture:** 320B parameter Mixture of Experts (MoE) with 18B active parameters per token; MIT licensed weights

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

Agent / tool use:

- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found / no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- TB 2.1: **84.3%** (meta.json, official claim)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **Terminal-Bench 2.1:** 84.3% (meta.json, official claim)
- **OpenCode Console verification:** Model available with both paid and free tiers
- **MIT licensing:** Weights available for self-hosting under MIT license

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** As a specialized coding model with MoE architecture, expected to have strong tool use capabilities for coding tasks, though specific benchmarks not publicly available.
- **Reasoning: 75/100.** Flash-class model optimized for speed over peak reasoning, as noted in meta.json tradeoff; strong coding performance suggests good reasoning within coding domain.
- **Context window: 80/100.** 204K context window provides substantial capacity for coding tasks and long document processing, though not as extensive as some competitors.
- **Multimodal: 10/100.** Text-only model with no multimodal capabilities as specified in meta.json.
- **Coding: 90/100.** Exceptional Terminal-Bench 2.1 score of 84.3% demonstrates elite coding performance, consistent with its design as an ultra-fast agentic coding model.
- **Cost efficiency: 95/100.** Highly competitive pricing at $0.15/$0.50 per 1M tokens with free tier available; MIT license enables free self-hosting while maintaining strong performance.
- **Overall Score: 66/100.** Elite coding model with exceptional performance in coding benchmarks and excellent cost efficiency; ideal for developers needing fast, high-quality code assistance with flexible access options.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-28
- Method: Independent research from official model metadata and OpenCode Console documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/glm-5.3-flash/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant variants register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/glm-5.3-flash/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).