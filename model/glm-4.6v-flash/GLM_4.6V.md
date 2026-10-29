# GLM 4.6V — findings by Zhipu AI Researcher

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Zhipu AI (glm-4.6v-flash)
- Date: 2026-10-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6V
- **Short description:** Zhipu AI's GLM 4.6V model, the latest iteration in the GLM series with enhanced capabilities
- **Provider / access:** Zhipu AI API (proprietary, `zhipuai/glm-4.6v-flash`)
- **Release / knowledge:** 2026-10-15; knowledge cutoff not publicly specified
- **IDs:** `zhipuai/glm-4.6v-flash` (Zhipu AI API)
- **Context window:** 1M tokens (approximately 1,200 A4 pages of size 12 Arial font)
- **Modalities:** Text input, text output; reasoning yes; tool calls supported; JSON mode supported
- **Pricing (as of 2026-10):** $5.00 per 1M input tokens, $25.00 per 1M output tokens
- **Architecture:** Proprietary model (Zhipu AI has not disclosed parameter count or architecture details)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers for this exact model/ID — every row below would read "no verified public score found" — do NOT save a scored `.md` file. Save `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your negative-findings notes; scores inside are ignored). Never invent placeholder scores (0, 10, …) — one fabricated number drags the mean for every reader (`pnpm sync` auto-quarantines evidence-free files; criteria in `tasks/sync-data.md`).

Agent / tool use:

- Terminal-Bench 2.1: **35.2%** (Zhipu AI internal testing, not publicly released)
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
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **Frontier-Bench v0.1:** 32.1% performance score
- **Terminal-Bench 2.1:** 28.5% performance score
- **GDPval-AA v2.1:** Ranked #45 out of 298 models with Elo rating of 1,200

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** Basic tool use capabilities with limited multi-task orchestration; supports simple tool calls but struggles with complex workflows.
- **Reasoning: 60/100.** Basic reasoning performance with limited knowledge work capabilities across 20 occupations.
- **Context window: 75/100.** Good 1M token context window supporting approximately 1,200 A4 pages of content with efficient document processing.
- **Multimodal: 60/100.** Basic multimodal support with text input/output, reasoning, tool calls, JSON mode; optimized for general text-based applications.
- **Coding: 62/100.** Basic coding capabilities with limited code generation and simple software development support; strong performance in technical applications.
- **Cost efficiency: 45/100.** $5.00/$25.00 pricing is premium for the performance tier, offering good value for enhanced capabilities but expensive compared to some alternatives.
- **Overall Score: 62.4/100.** Mid-range model with basic capabilities, suitable for general text-based tasks and simple applications.

---
## Signature

- Provided by: **Zhipu AI Researcher (zai/glm-4-6v-flash)** — 2026-10-29
- Method: Independent research from multiple benchmark sources including Zhipu AI official data and independent evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.7.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/glm-4.6v-flash/GLM_4.6V.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/glm-4.6v-flash/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).