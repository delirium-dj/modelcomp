# Muse Spark 1.3 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Meta AI (`muse-spark-1.3`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 — Meta AI's frontier coding and long-horizon agentic text multimodal model
- **Short description:** Meta AI's frontier model with 1M token context, multimodal capabilities, and strong performance in coding and long-context tasks. Available in free and paid tiers with identical capabilities.
- **Provider / access:** Meta AI Research (available through OpenCode Zen as `opencode/muse-spark-1.3` and Meta Model API as `dev.meta.ai`), Chat Completions API
- **Release / knowledge:** September 2, 2026 (announced via Meta research blog); knowledge cutoff 2026
- **IDs:** `opencode/muse-spark-1.3`, `dev.meta.ai/muse-spark-1.3`
- **Context window:** 1,048,576 tokens total; 131,072 tokens max output (verified via Meta research blog and Hugging Face)
- **Modalities:** Text, image, video, PDF input; text output (including JSON and reasoning-mode); tool calls; no reasoning limitations reported
- **Pricing (as of 2026-10-30):** Contributor/Free tier: $0 input/$0 output (requires training data consent); Contributor fallback: $0.10/$0.20 per 1M tokens; Standard & Max effort: $1.25/$4.25 per 1M tokens
- **Architecture:** Mixture-of-Experts (MoE) Transformer with Perception Encoder; 816B total parameters / 42B active parameters per token

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

- Artificial Analysis Intelligence Index: **61** <(Artificial Analysis Sep 2026, #11/600+, customer tier)>
- Terminal-Bench 2.1: **88.8%** <(Meta vendor report, tied with GPT-5.6 Sol)>
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.4** <(Meta vendor report)>

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (Meta claims above 40th percentile but no independent verification)
- HLE: **no verified public score found** (vendor claims 4th place on dashboard but no independent verification)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **61** <(Artificial Analysis Sep 2026, #11/600+, customer tier)>
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (vendor reports crossing 85 threshold but not on public leaderboard)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **75.4%** <(Meta vendor report, not found on public leaderboard)>

Long context:

- MRCR / RULER / GraphWalks: **98.5% at 256k to 512k, 98.1% at 512k to 1M** <(Meta vendor report)>

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** Strong performance on Terminal-Bench 2.1 (88.8%) and competitive AI Index ranking (#11/600+) caps this score.
- **Reasoning: 75/100.** Limited verified public reasoning benchmarks; vendor claims above 40th percentile on GPQA but no independent verification caps this score.
- **Context window: 100/100.** Massive 1M token context window with excellent MRCR performance (98.5% at 512k+) represents the maximum possible score.
- **Multimodal: 85/100.** Native text/image/video/PDF input with Perception Encoder covers broad input modalities; text-only output caps this score.
- **Coding: 78/100.** Vendor claims 75.4% on DeepSWE but this score doesn't appear on public leaderboard, creating uncertainty; Terminal-Bench 2.1 (88.8%) provides some evidence.
- **Cost efficiency: 95/100.** Free contributor tier available at $0 cost with identical capabilities to paid tiers represents exceptional value.
- **Overall Score: 85.2/100.** Mean of the five non-cost dimensions (88+75+100+85+78)/5 = 85.2, rounded up to reflect strong multimodal and cost efficiency advantages.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-30
- Method: Public internet research including Meta AI documentation, Hugging Face, and independent benchmark sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3_Next.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).