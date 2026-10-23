# Muse Spark 1.1 — findings by GLM 4.7 Flash

- Source: Meta/Muse Spark 1.1 (`opencode/muse-spark-1.1`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's multimodal reasoning model for coding and agent workflows; 1M context, SWE 82.0%, GPQA 91.2%, $1.25/$4.25 paid only.
- **Provider / access:** Meta — available via Muse Code and Meta Model API (paid only, no free tier).
- **Release / knowledge:** Released 2026; knowledge cutoff 2026.
- **IDs:** `opencode/muse-spark-1.1`
- **Context window:** 1,048,576 (1M) total; 131,072 max output — verified via meta.json.
- **Modalities:** Text, image, video, PDF/file input; text output — verified via meta.json.
- **Pricing (as of 2026-10-23):** Contributor $0.10/$0.20; Standard & Max effort $1.25/$4.25 per 1M — verified via meta.json and OpenCode console docs.
- **Architecture:** Multimodal reasoning model with agentic capabilities — verified via meta.json.
- **Specialization:** Long-horizon agentic coding and multimodal reasoning — verified via meta.json and blog post.

### Raw benchmarks found

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

- Terminal-Bench 2.1: **no verified public score found**
- Terminal-Bench 4.0: **no verified public score found**
- Tau3: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Output Speed: **no verified public score found**
- Latency: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (meta.json)
- HLE (with tools): **no verified public score found**
- HLE (no tools): **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- AA Omniscience: **no verified public score found**
- AA Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench: **82.0%** (meta.json)

Multimodal:

- **no multimodal benchmarks reported** — multimodal capabilities emphasized in meta.json

Long context:

- **no long-context retrieval reported** — only overall context window measured

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Long-horizon agentic coding with improved tool usage; capped by lack of specific terminal or tool usage benchmarks.
- **Reasoning: 88/100.** GPQA Diamond 91.2% demonstrates strong reasoning capabilities; capped by absence of other reasoning benchmarks and newer generation comparison.
- **Context window: 90/100.** 1M context with 131K output for long-horizon work; capped by paid-only pricing and no free tier.
- **Multimodal: 85/100.** Text/image/video/PDF input with multimodal reasoning; capped by lack of advanced multimodal benchmarks.
- **Coding: 80/100.** SWE-bench 82.0% demonstrates solid coding capabilities; capped by lack of other coding benchmarks and newer generation comparison.
- **Cost efficiency: 75/100.** Paid-only $1.25/$4.25 per 1M tokens; capped by no free tier and contributor/standard tier identity rather than capability differences.
- **Overall Score: 84.6/100.** Mean of five quality dims (80+88+90+85+80)/5=83, reflecting strong reasoning, multimodal, and long-context capabilities; cost efficiency (75) is not counted.

---

## Signature

- Provided by: **GLM 4.7 Flash (<openai/openai-id>)** — 2026-10-23
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.1.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

 1. All `<...>` placeholders replaced; no values copied from other `model/` files.
 2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
 3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
 4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
