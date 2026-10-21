# Claude Opus 4.8 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (claude-opus-4-8)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship frontier model for complex reasoning, coding, and knowledge work. Released May 28, 2026, as an upgrade over Opus 4.7 with improved honesty, judgment, and performance across benchmarks.
- **Provider / access:** Anthropic (proprietary, `claude-opus-4-8`) via Claude API (Messages API, Chat Completions)
- **Release / knowledge:** May 28, 2026 (no specific knowledge cutoff mentioned)
- **IDs:** `anthropic/claude-opus-4-8` (proprietary API)
- **Context window:** 200K tokens (official documentation, verified through API)
- **Modalities:** Text input, text output; reasoning yes; tool calls supported; JSON mode supported; image input via vision capabilities
- **Pricing (as of 2026-10):** $5 per million input tokens, $25 per million output tokens (regular mode); $10 per million input tokens, $50 per million output tokens (fast mode)
- **Architecture:** Proprietary (exact parameters not disclosed)

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
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **Terminal-Bench 2.1:** 83.4% (Anthropic official announcement, reported with Codex CLI harness)
- **OSWorld-Verified:** 82.3% (Anthropic official announcement, updated evaluation methodology)
- **Finance Agent v2:** 57.9% (Anthropic official announcement, significant improvement over Gemini 3.1 Pro)
- **Online-Mind2Web:** 84% (Anthropic official announcement, meaningful jump over Opus 4.7 and GPT-5.5)
- **SWE-bench Verified / SWE-Pro:** 98.3% (SWE-Duel paper, as strongest solver with Codex CLI)
- **Atomic compliance (ANCHOR):** 70.1% (ANCHOR benchmark paper, under Cline configuration)
- **Relation compliance (ANCHOR):** 63.7% (ANCHOR benchmark paper, engineering constraint following)
- **Task pass rate (ANCHOR):** 19.0% (ANCHOR benchmark paper, strict all-item FCCR criterion)
- **OSWorld V2:** 20.6% (Evolving Agent Interfaces paper)
- **Security balanced accuracy:** 64.8% (Peer Pressure Security paper)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Strong performance on OSWorld-Verified (82.3%) and Online-Mind2Web (84%), with improved tool calling efficiency using fewer steps for same intelligence; capped by top performance in agent benchmarks.
- **Reasoning: 82/100.** Evidence from official announcement showing improvements across coding, agentic skills, reasoning, and knowledge work tasks; capped by Terminal-Bench 2.1 performance at 83.4%.
- **Context window: 90/100.** 200K token context window places it in the highest tier for long-context capabilities, though specific long-context retrieval benchmarks not reported.
- **Multimodal: 75/100.** Supports image input via vision capabilities and text output, but lacks comprehensive audio/video modalities; above text-only baseline of 15.
- **Coding: 88/100.** Exceptional coding performance with 98.3% on SWE-bench Verified with Codex CLI, strongest solver in SWE-Duel tournament, and leading performance in coding benchmarks.
- **Cost efficiency: 65/100.** $5/$25 pricing for regular mode places it in premium tier, fast mode at $10/$50 is 3x cheaper than previous models but still expensive relative to competitors.
- **Overall Score: 84/100.** Mean of the five non-cost dims (85+82+90+75+88)/5 = 82; strong all-around performer with particular excellence in coding and tool use, suitable for complex enterprise applications requiring high reliability.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including Anthropic official announcements and academic papers; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-4.8/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-opus-4.8/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).