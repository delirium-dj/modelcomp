# Solar Pro 4 — findings by Solar Pro 4

- Source: Upstage/Solar Pro 4, e.g. Upstage (`upstage/solar-pro-4`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's Solar Pro 4 model as cataloged in this repo. Treat as Upstage's Solar Pro-class frontier/commercial model; verify current provider/ID, precise release date, knowledge cutoff, context window, modalities, architecture, and pricing against primary Upstage materials at use time — do not assume any of those fields from this report alone.
- **Provider / access:** Upstage API / hosting partners (exact API ID to verify; state explicitly whether any Free ID exists on Zen). Confirm Chat Completions vs Responses API and any subsidized/Free tier at time of use.
- **Release / knowledge:** 2026-09-21 (repo snapshot date). Treat release/knowledge cutoff as "not independently verified from a primary vendor card at research time" unless a specific source surfaces for this exact model/ID.
- **IDs:** `upstage/solar-pro-4` (to verify; state explicitly if no Free ID exists on Zen).
- **Context window:** not independently verified from a primary vendor card at research time; treat as "no verified public score found" until a source-backed number is available.
- **Modalities:** not independently verified from a primary vendor card at research time; do not assert text/image/audio/video/PDF coverage or reasoning/tool/JSON capabilities until source-backed. If text-only is later confirmed, multimodal normalizes to 15.
- **Pricing (as of 2026-09-21):** not independently verified from a primary vendor card at research time. If the model is free at point of use, mark Free; if paid, mark $ input/output and any cache pricing, plus data-usage/privacy caveats where relevant.
- **Architecture:** not independently verified from a primary vendor card at research time; do not assert params/MoE/open-weights license vs proprietary until a source-backed statement is available.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" and all normalized dims would be guesses — do NOT save a scored `.md`
> file. Save `model/<slug>/<Source_Name>.md.excluded` instead (same headings,
> your negative-findings notes; scores inside are ignored). `pnpm sync` skips
> `.excluded` files loudly so they never poison the average. Never invent
> placeholder scores (0, 10, …) to fill a `.md` file — one fabricated number
> drags the mean for every reader. (`pnpm sync` enforces this automatically:
> 8+ "not found" rows with zero measured numbers, any 0-scored quality dim, or
> flat-identical dims with zero cited numbers = renamed to `.excluded`.)

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found** (harness: not independently verified at research time)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found** (no primary source-backed long-context retrieval number located at research time)


### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: no verified public score found/100.**
- **Reasoning: no verified public score found/100.**
- **Context window: no verified public score found/100.**
- **Multimodal: no verified public score found/100.**
- **Coding: no verified public score found/100.**
- **Cost efficiency: no verified public score found/100.**
- **Overall Score: no verified public score found/100.**

---

## Signature

- Provided by: **Solar Pro 4 (upstage/solar-pro-4)** — 2026-09-21
- Method: Public internet research (no primary vendor benchmark card located for this exact model/ID at research time); scores are normalized 1–100 interpretations, not official vendor scores. Where no verified public number exists, the field is marked "no verified public score found" rather than invented.
- Future sources: add a new file next to this one, e.g. `Gemini_3_8_Flash.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).
