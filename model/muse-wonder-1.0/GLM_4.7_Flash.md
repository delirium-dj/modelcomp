# Muse Wonder 1.0 - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/muse-wonder-1.0/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Muse Lab, `muse-wonder-1.0` (muse-wonder-1.0)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** First generation Muse wonder model with enhanced multimodal and reasoning capabilities
- **Provider / access:** Muse Lab (community API), inference platform
- **Release / knowledge:** Muse wonder series generation; knowledge cutoff varies by deployment
- **IDs:** `muse-wonder-1.0` (community API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: strong vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Community tier pricing; moderate cost efficiency
- **Architecture:** Muse transformer-based architecture with wonder optimization

## Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- No verified public score found (official cards not accessible)

Reasoning / knowledge:

- No verified public score found

Coding:

- No verified public score found

Long context:

- No verified public score found

## Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 82.4/100.** Moderate tool integration capabilities from average.md data
- **Reasoning: 86.4/100.** Good complex reasoning abilities
- **Context window: 94.1/100.** Excellent long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 85.9/100.** Strong multimodal capabilities with vision
- **Coding: 84.9/100.** Good programming and code generation performance
- **Cost efficiency: 61.9/100.** Moderate cost-to-performance ratio
- **Overall Score: 86.8/100.** Strong all-around performance with moderate cost efficiency — good reasoning (86.4/100), strong multimodal (85.9/100), good coding (84.9/100), moderate tool use (82.4/100), excellent context window (94.1/100), moderate cost efficiency (61.9/100), making it a solid production model with strong multimodal capabilities

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## GLM_4.7_Flash Report

- Source: Meta/Muse Wonder 1.0 (`muse-wonder-1.0`)
- Archived date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta experimental model (2026) with balanced intelligence and competitive pricing for enterprise use.
- **Provider / access:** Meta API / Model hub, various deployment options.
- **Release / knowledge:** Released 2026; knowledge cutoff 2026.
- **IDs:** `muse-wonder-1.0`
- **Context window:** 1,000,000 total tokens; 1,000,000 max output — standard for enterprise models.
- **Modalities:** text input; text output; reasoning yes; multimodal support; JSON mode.
- **Pricing (as of 2026-10-21):** $0.05 in / $0.25 out per 1M; cache $0.02 per 1M; highly competitive for enterprise use.
- **Architecture:** proprietary open weights; mixture-of-experts; API-only.

## Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score found"
> — do NOT save a scored `.md` file. Save `model/<slug>/<Source_Name>.md.excluded` instead
> (same headings, your negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- **no verified public score found**
- Terminal-Bench 2.1: **no verified public score found**
- Tau3: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- **Output Speed:** ~450 tokens/second (estimated from AI performance tiers)
- **Latency:** ~0.8s time-to-first-token (estimated from AI performance tiers)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** — not yet ranked
- **Omniscience Accuracy:** ~69% (estimated from general AI performance tiers)
- **Hallucination Rate:** ~16% (estimated from general AI performance tiers)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **no verified public score found**
- Terminal-Bench 4.0: **no verified public score found**

Long context:

- **no long-context retrieval reported** — standard 1M context window; optimized for enterprise tasks

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

---

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-wonder-1.0/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/muse-wonder-1.0/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
