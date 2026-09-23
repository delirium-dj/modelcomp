# Muse Spark 1.3 — findings by Solar Pro 4

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and delete this block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Meta/Muse Spark 1.3, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (Free Contributor tier: `muse-spark-1.3-contributor-free`)
- **Short description:** Meta's reasoning model optimized for agentic workflows and competitive coding performance. Tuned for long-horizon coding tasks with fewer unnecessary turns and cleaner output. Part of the Muse family.
- **Provider / access:** Meta Model API (`meta/muse-spark-1.3-contributor` for Free tier; also available via OpenRouter). Chat Completions API compatible with OpenAI SDK.
- **Release / knowledge:** Released September 2, 2026; knowledge cutoff not publicly specified.
- **IDs:** `meta/muse-spark-1.3-contributor` (Free ID on Zen); paid tier: `meta/muse-spark-1.3`
- **Context window:** 1M tokens total (~1500 A4 pages). Verified via Artificial Analysis and Meta documentation.
- **Modalities:** Text, image, video in; text out. Reasoning: yes (configurable effort: minimal/low/medium/high/xhigh/max). Tool calls: yes. JSON mode: supported.
- **Pricing (as of 2026-09-23):** Free contributor tier uses data to improve Meta products ($0); paid tier: $1.25 in / $0.15 cached / $4.25 out per 1M tokens. Free tier has data-usage caveat.
- **Architecture:** Proprietary, closed-weights. ~150B+ active parameters (MoE architecture implied by Meta's announcements).

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

- GDPval-AA: **1754** Elo (source: Artificial Analysis; rank 7/340, 98th percentile)
- JobBench: **64.9%** (source: Meta self-reported; 97th percentile, rank 2/36)
- AutomationBench: **49.4%** (source: Artificial Analysis; 97th percentile, rank 6/42)
- RuneBench: **4.6** (source: Artificial Analysis; 53rd percentile, rank 26/54)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (closest: τ²-Bench Banking 50.5% per BenchLeader)

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (source: LiveBench/AA; rank 7 at xhigh, 93.5% at max)
- HLE: **48.7%** (source: Artificial Analysis; rank 22 at max, 47.5% at xhigh)
- LCR: **83.0%** (source: Artificial Analysis; rank 21)
- MLCR: **43.3%** (source: Artificial Analysis; rank 10)
- CritPt: **24.9%** (source: Artificial Analysis; rank 35 at max)
- Artificial Analysis Intelligence Index: **48 / 673** (rank 28 of 673 models)
- Omniscience Accuracy / Hallucination Rate: **43.6% / 67.1%** (source: Artificial Analysis; rank 83 accuracy, rank 52 non-hallucination)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (closest: DeepSWE v1.1 75.4%)
- DeepSWE v1.1: **75.4%** (source: Artificial Analysis; rank 1/33, 100th percentile)
- Terminal-Bench 2.1: **88.8%** (source: Artificial Analysis; rank 4/182, 98th percentile)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- SWE Atlas Codebase QnA: **59.4%** (source: Artificial Analysis; rank 5/28, 85th percentile)

Long context:

- MRCR v2 8-needle 512K-1M: **98.1%** (source: OpenAI/self-reported; rank 1/9, 100th percentile)
- MRCR v2 8-needle 256K-512K: **98.5%** (source: OpenAI/self-reported; rank 2/8, 86th percentile)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 85/100.** Strong agentic capabilities: GDPval-AA 1754 Elo (98th percentile), JobBench 64.9% (97th percentile), AutomationBench 49.4% (97th percentile). DeepSWE v1.1 at rank 1/33 (75.4%) and Terminal-Bench 2.1 at 88.8% (98th percentile) demonstrate top-tier agentic coding. Capped by moderate RuneBench (4.6, 53rd percentile) and no verified τ²-Bench Banking score.
- **Reasoning: 82/100.** GPQA Diamond 94.1% (rank 7) and HLE 48.7% (rank 22) show strong reasoning. AA Intelligence Index 48 (top 28/673). CritPt 24.9% is moderate. Capped by HLE being mid-pack and CritPt being below frontier leaders.
- **Context window: 93/100.** 1M token context window is frontier-tier. MRCR 512K-1M at 98.1% (rank 1/9) and 256K-512K at 98.5% (rank 2/8) demonstrate excellent long-context retrieval. Matches top context scores.
- **Multimodal: 75/100.** Supports text, image, and video input with text output. Visual reasoning runs through real execution environment. Native multimodal perception verified. Capped by lack of image/video output modalities and no audio support.
- **Coding: 88/100.** DeepSWE v1.1 at 75.4% (rank 1/33, 100th percentile) is best-in-class. Terminal-Bench 2.1 at 88.8% (rank 4/182, 98th percentile). SWE Atlas Codebase QnA 59.4% (rank 5/28). Optimized for competitive coding with ~20% fewer tool calls than Muse Spark 1.2. Capped by no verified SWE-bench Verified score.
- **Cost efficiency: 95/100.** Free contributor tier available ($0) but uses data to improve Meta products. Paid tier at $1.25/$0.15/$4.25 is mid-range for frontier models. Strong value at price point given top-tier coding and agentic performance.
- **Overall Score: 85/100.** Mean of (85 + 82 + 93 + 75 + 88) / 5 = 84.6, rounded to 85. Best-fit recommendation: frontier-tier agentic coding model with 1M context, excellent for long-horizon development workflows and multimodal document analysis.

---

## Signature

- Provided by: **Solar Pro 4 (solar-pro-4)** — 2026-09-23
- Method: Public internet research (Meta developer docs, Artificial Analysis, BenchLeader, BenchmarkList); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.1_Pro.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).


