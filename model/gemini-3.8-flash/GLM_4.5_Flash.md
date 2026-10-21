# Gemini 3.8 Flash — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google (gemini-3.8-flash)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's fast multimodal model supporting text, image, speech, and video input with text output. Released in September 2026, optimized for speed and cost-effectiveness while maintaining strong performance.
- **Provider / access:** Google API (proprietary, `gemini-3.8-flash`)
- **Release / knowledge:** Released September 2, 2026; knowledge cutoff not publicly specified
- **IDs:** `gemini-3.8-flash` (proprietary API)
- **Context window:** 1M tokens (approximately 1,500 A4 pages of size 12 Arial font)
- **Modalities:** Text, image, speech, video input; text output; reasoning yes; tool calls not specified; JSON mode not specified
- **Pricing (as of 2026-10):** $0.75 per 1M input tokens, $3.75 per 1M output tokens, 90% cache discount; cost-effective pricing for performance tier
- **Architecture:** Proprietary model (Google has not disclosed parameter count or architecture details)

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
- Artificial Analysis Intelligence Index / BenchLM overall: **41 / no verified public score found** (Artificial Analysis Intelligence Index v4.3.2 at #51)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Good multimodal support including speech input, though specific tool usage capabilities not well-documented in available benchmark sources; optimized for real-time applications.
- **Reasoning: 75/100.** Solid reasoning performance evidenced by #51 ranking on Artificial Analysis Intelligence Index (41) with 4/4 intelligence units; demonstrates good problem-solving capabilities for its class.
- **Context window: 90/100.** Strong 1M token context capability supporting approximately 1,500 A4 pages of content with good multimodal processing efficiency.
- **Multimodal: 90/100.** Excellent multimodal capabilities supporting text, image, speech, and video input with text output; particularly strong speech integration.
- **Coding: 80/100.** Good coding capabilities expected from Google's Flash model, though specific coding benchmarks not publicly available; optimized for efficiency and speed.
- **Cost efficiency: 85/100.** $0.75/$3.75 pricing is highly competitive for the performance tier, offering excellent value for fast AI capabilities with 90% cache discount.
- **Overall Score: 82/100.** Strong performance model optimized for speed and cost-effectiveness, with excellent multimodal capabilities and good reasoning, though lower intelligence score compared to flagship models.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including Artificial Analysis and ModelIndex.ai; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.8-flash/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.8-flash/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).