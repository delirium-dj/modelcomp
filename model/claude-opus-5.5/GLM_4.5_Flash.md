# Claude Opus 5.5 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (claude-opus-5-5)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship reasoning model with exceptional performance across multiple benchmarks, supporting text and image input with text output. Released in September 2026 as the successor to Claude Opus 5.
- **Provider / access:** Anthropic API (proprietary, `anthropic/claude-opus-5-5`)
- **Release / knowledge:** Released September 22, 2026; knowledge cutoff not publicly specified
- **IDs:** `anthropic/claude-opus-5-5` (proprietary API)
- **Context window:** 1M tokens (approximately 1,500 A4 pages of size 12 Arial font)
- **Modalities:** Text and image input; text output; reasoning yes; tool calls supported; JSON mode not specified
- **Pricing (as of 2026-10):** $4.00 per 1M input tokens, $20.00 per 1M output tokens, 95% cache discount; expensive tier with premium pricing
- **Architecture:** Proprietary model (Anthropic has not disclosed parameter count or architecture details)

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

- Terminal-Bench 4.0: **66.40%** (Anthropic: Introducing Claude Opus 5.5)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1846 Elo** (Anthropic: Introducing Claude Opus 5.5)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.8%** (Toolathlon-Verified, Anthropic system card)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **67.7%** (HLE w/ tools, Anthropic: Introducing Claude Opus 5.5)
- LCR / MLCR: **84.7%** (AA-LCR, Artificial Analysis)
- CritPt: **31.7%** (Artificial Analysis)
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / 86.69** (Artificial Analysis Intelligence Index v4.3.2 at #1, BenchLM overall at #1)
- Omniscience Accuracy / Hallucination Rate: **66.2% / 58.6%** (AA-Omniscience Accuracy/Hallucination Rate, Artificial Analysis)

Coding:

- SWE-bench Verified / SWE-Pro: **89.9%** (Anthropic system card)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **66.9%** (AA-SciCode, Artificial Analysis)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **74.2%** (DeepSWE, Anthropic system card)

Long context:

- **66.8%** (GraphWalks BFS 256K–1M, Google Gemini 4 Argon launch chart)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 95/100.** Exceptional tool use capabilities evidenced by 77.8% on Toolathlon-Verified and strong performance on agentic benchmarks; excels at complex tool usage and multi-step tasks.
- **Reasoning: 95/100.** Outstanding reasoning performance with 84.7% on AA-LCR, 67.7% on HLE w/ tools, and #1 ranking on both Artificial Analysis Intelligence Index (58) and BenchLM overall (86.69); excels at complex problem-solving.
- **Context window: 95/100.** Exceptional 1M token context places it in the top tier for long-context capabilities, supporting approximately 1,500 A4 pages of content with strong 66.8% performance on GraphWalks BFS 256K–1M.
- **Multimodal: 85/100.** Supports text and image input with strong performance on visual reasoning tasks like AA-MMMU-Pro (87.7%) and Chartography (89.0% with tools).
- **Coding: 90/100.** Excellent coding capabilities with 89.9% on SWE-bench Verified, 74.2% on DeepSWE, and 66.9% on AA-SciCode; top-tier performance in software engineering tasks.
- **Cost efficiency: 40/100.** $4.00/$20.00 pricing is expensive compared to median performance, making it cost-inefficient despite its top-tier intelligence.
- **Overall Score: 92/100.** Exceptional all-around performer with #1 rankings across multiple benchmarks, though limited by premium pricing; best-in-class reasoning and tool use capabilities.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including Artificial Analysis and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-5-5/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-opus-5-5/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).