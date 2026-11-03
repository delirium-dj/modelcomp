# Muse Spark 1.3 — findings by Leanstral 1.5

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's frontier agentic model optimized for coding and long-horizon workflows, supporting native multimodal (text, image, video) perception. Trained for competitive coding, agentic tool use, and complex multi-step tasks.
- **Provider / access:** Meta Model API `dev.meta.ai/v1/chat/completions`; also available via Muse Code IDE extension and OpenRouter. Chat Completions API.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not separately disclosed (coding-focused model).
- **IDs:** `meta/muse-spark-1.3` (standard), `meta/muse-spark-1.3-contributor` (contributor tier, used for product improvement)
- **Context window:** 1,000,000 tokens (~1,500 A4 pages); input / max output not separately disclosed; verified at 1M from official docs
- **Modalities:** Text, image, and video in; text out; reasoning yes (max reasoning mode); tool calls; JSON mode
- **Pricing (as of 2026-11-03):** Contributor tier: $0.10 / $0.20 per 1M input/output tokens. Standard tier: $1.25 / $4.25 per 1M input/output tokens. Cache discount 88% reported by AA. Free tier available via `muse-spark-1.3-contributor`.
- **Architecture:** Proprietary; model size not disclosed by Meta. Described as trained for agentic workflows and competitive coding.

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

- MRCR 256K–512K: **64.9%** (Meta internal benchmark, as reported on Meta Spark 1.3 blog post)
- MRCR 512K–1M: **61.6%** (Meta internal benchmark, as reported on Meta Spark 1.3 blog post)
- DeepSWE v1.1: **74.0%** (Meta internal benchmark, as reported on Meta Spark 1.3 blog post)
- Terminal-Bench 2.1: **52.7%** (Meta internal benchmark, as reported on Meta Spark 1.3 blog post)
- Terminal-Bench 4.0: **no verified public score found** (AA reports Kimi K3.1 Pro at 67.2%, Gemini 4 Carbon at 65.2%; Muse Spark 1.3 not in AA leaderboard for this eval)
- GDPVal-AA v2: **1710 Elo** (Meta internal benchmark, as reported on AA GDPval leaderboard; Meta Muse Spark 1.3 (Max) ranks #18 at 1681 Elo on GDPval-AA v2.1)
- JobBench: **57.8%** (Meta internal benchmark, as reported on Meta Spark 1.3 blog post)
- Agentic IF Index (Internal): **88.8%** (Meta internal benchmark, as reported on Meta Spark 1.3 blog post)
- AutomationBench (Zapier): **no verified public score found** (Gemini 4 Carbon leads at 77.8%, Muse Spark not listed on AA leaderboard)
- OSWorld 2.0: **59.4%** (Meta internal benchmark, as reported on Meta Spark 1.3 blog post)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (Gemini 4 Carbon leads at 69.1%)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **36 / 100** (Artificial Analysis, rank #32/60 in class)
- AA-Omniscience Net Score: **no verified public score found** (Gemini 4 Carbon leads at 54)

Coding:

- DeepSWE v1.1: **74.0%** (same as above — listed under agent/tool use, also a coding benchmark)
- SWE-bench Verified: **no verified public score found** (DeepSeek V4.1 Flash leads at 73.0% on AA; Muse Spark not listed)
- LiveCodeBench: **no verified public score found** (FrontierCode 2.0 leaderboard shows DeepSeek V4.1 Flash leading; Muse Spark not ranked)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- FrontierCode 2.0 (AA implementation): **no verified public score found** (private benchmark, 132 tasks)

Long context:

- MRCR 256K–512K: **64.9%** (as listed above)
- MRCR 512K–1M: **61.6%** (as listed above)
- GraphWalks 256K–1M: **no verified public score found** (Gemini 4 Carbon leads at 96.2%)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 76/100.** Strong agentic tool-use scores from Meta's internal benchmarks (JobBench 57.8%, Agentic IF 88.8%, OSWorld 59.4%, MRCR long-context retrieval 61.6–64.9%). Capped by lack of independent AA benchmark data — all scores come from Meta's own blog post, and the model ranks poorly on the AA Intelligence Index (#32/60, score 36). Without independent replication these numbers should be treated as directional.
- **Reasoning: 65/100.** No independent reasoning benchmarks found (GPQA, HLE, LCR, CritPt all absent). AA Intelligence Index of 36 is below median for reasoning models, but this aggregates many capabilities. No verified public reasoning scores found; capped by data absence.
- **Context window: 65/100.** Verified 1M context window from official docs. MRCR scores show 61.6–64.9% at 256K–1M window — consistent with 1M capability but no independent long-context retrieval benchmarks found (GraphWalks, RULER all absent). No longer-context scores beyond what Meta reports.
- **Multimodal: 90/100.** Officially supports text, image, and video input; text output. Meta blog confirms "Native multimodal perception — Muse Spark perceives video, images and documents." Video input is a differentiator among frontier models. 15 points for text-only would understate this model's multimodal capabilities.
- **Coding: 74/100.** Strong DeepSWE v1.1 at 74.0% (per Meta blog) and competitive coding performance cited. However, no independent SWE-bench or LiveCodeBench scores found — Muse Spark not ranked on AA's SWE leaderboards. Capped by lack of third-party verification.
- **Cost efficiency: 90/100.** $0.10/$0.20 per 1M tokens on contributor tier (free) or $1.25/$4.25 standard — among the lowest pricing for a frontier-class model. 88% cache discount reported by AA. Excellent cost efficiency; $0 capped at 100, and paid tier is cheap relative to competitors.
- **Overall Score: 74/100.** Mean of Tool (76) + Reasoning (65) + Context (65) + Multimodal (90) + Coding (74) = 74.0. Scores are provisional — heavy reliance on Meta's own benchmarks without independent replication, particularly for reasoning and tool use.

---

## Signature

- Provided by: **Leanstral 1.5 (opencode/leanstral-1.5)** — 2026-11-03
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Heavy reliance on Meta's official blog post benchmarks; independent benchmark data from Artificial Analysis used where available.
- Reference URLs:
  - [Muse Spark 1.3 — Meta Research](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [Muse Spark 1.3 — Official Product Page](https://dev.meta.ai/models/muse-spark/)
  - [Artificial Analysis — Muse Spark 1.3 (Max)](https://www.artificialanalysis.com/models/muse-spark-1-3)
  - [Artificial Analysis — Muse Spark 1.3 Providers](https://www.artificialanalysis.com/models/muse-spark-1-3/providers)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
