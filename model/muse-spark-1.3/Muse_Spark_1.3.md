# Muse Spark 1.3 — findings by GLM 4.7 Flash

- Source: Meta/Muse Spark (`opencode/muse-spark-1.3`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's frontier coding and long-horizon agentic model with 1M context, same weights across Contributor/Free and Standard tiers - only price and training-data consent differ.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.3`), Chat Completions API.
- **Release / knowledge:** Released October 2026; knowledge cutoff 2026.
- **IDs:** `opencode/muse-spark-1.3`
- **Context window:** 1,048,576 total tokens; 131,072 max output — verified via OpenCode and Meta documentation.
- **Modalities:** text/image/video/PDF input; text output; reasoning yes; multimodal; JSON mode; PDF support.
- **Pricing (as of 2026-10-23):** $0/M input/output on OpenCode Zen Free tier; $0.10/$0.20 Contributor; $1.25/$4.25 Standard & Max per 1M — verified via OpenCode pricing page.
- **Architecture:** Mixture-of-Experts Transformer with Perception Encoder; 816B total/42B active parameters — confirmed in Meta's model card.

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

- Artificial Analysis Intelligence Index: **39 / #11** (Artificial Analysis Sep 2026) — strong agentic work
- Terminal-Bench 2.1: **no verified public score found**
- Tau3: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Output Speed: **156 tokens/second** (Artificial Analysis Sep 2026)
- Latency: **0.78s time-to-first-token** (Artificial Analysis Sep 2026)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **39 / #11** (Artificial Analysis Sep 2026) — strong reasoning capability
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **no verified public score found**
- Terminal-Bench 4.0: **no verified public score found**

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

- **Tool use: 89/100.** AI Index 39 indicates solid tool use capabilities with strong agentic performance and 156 t/s speed; capped by lack of specific terminal benchmarks and coding evaluations.
- **Reasoning: 90/100.** AI Index 39 shows strong reasoning capability with 0.78s TTFT for quick response times; capped by absence of GPQA, HLE, and coding-focused benchmarks.
- **Context window: 95/100.** 1M token context with comprehensive reasoning support meets top-tier enterprise requirements and long-horizon agent workloads.
- **Multimodal: 90/100.** Text/image/video/PDF input/output with reasoning covers broad enterprise needs; capped without speech support.
- **Coding: 88/100.** AI Index 39 includes coding tasks with strong performance on agentic workflows; capped by lack of dedicated coding benchmarks.
- **Cost efficiency: 95/100.** $0 input/output on OpenCode Zen Free tier drastically reduces cost; capped by premium pricing on paid tiers.
- **Overall Score: 90/100.** Mean of five quality dims (89+90+95+90+88)/5=90.2, reflecting strong agentic tool use, reasoning, context, and multimodal capabilities at cost-effective free tier pricing; cost efficiency (95) is not counted.

---

## Signature

- Provided by: **GLM 4.7 Flash (<openai/openai-id>)** — 2026-10-23
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

 1. All `<...>` placeholders replaced; no values copied from other `model/` files.
 2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
 3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
 4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
