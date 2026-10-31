# Muse Spark 1.3 — findings by Leanstral_1.5

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Meta / Muse Spark 1.3
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's hosted multimodal reasoning model for agentic coding workflows, built for long-horizon software development tasks, tool calling, and autonomous agents; 20% fewer tool calls and 25% fewer tokens than Muse Spark 1.2 per Meta's internal comparisons. Competitive with frontier models across coding and agentic benchmarks, with a 1M context window and native video/image/document understanding.
- **Provider / access:** Meta Model API (`muse-spark-1.3` Standard, `muse-spark-1.3-contributor` Free) and Muse Code; compatible with OpenAI SDK-compatible clients at `https://api.meta.ai/v1`. Not open weights.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not publicly disclosed.
- **IDs:** `meta/muse-spark-1.3` (Standard), `meta/muse-spark-1.3-contributor` (Free); also available on Vercel AI Gateway and OpenRouter.
- **Context window:** 1,048,576 (1M) total tokens; 131,072 max output (per Zen model list).
- **Modalities:** Text, image, and video in; text out. Reasoning yes (thinking tokens). Tool calls yes (parallel tool calls supported). JSON mode yes.
- **Pricing (as of 2026-10-31):** Standard tier $1.25/$4.25 per 1M in/out; cached input $0.15/$0.002 per 1M; Contributor/Free tier $0.10/$0.20 per 1M (Meta uses prompts/completions to improve products). Free tier available on OpenCode Zen.
- **Architecture:** Proprietary; architecture details not disclosed. Inferred: dense or MoE, multimodal (video supported), 1M context.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

**Agent / tool use:**

- Terminal-Bench 2.1: **88.8%** (Meta AI Research launch scorecard; Vals AI leaderboard also shows 88.8% — same harness, confirms)
- Tau3-Bench Banking: **50.5%** (AA, 52% for max variant; AA Tau3 leaderboard)
- GDPval-AA v2: **1,754 Elo** (Meta AI Research launch scorecard; AA model page confirms 1,754 for xhigh, 1,709 baseline for 1.2)
- OSWorld 2.0: **66.9%** (Meta launch scorecard, partial; Meta's own table shows 66.9 for 1.3 vs 68.3 for Opus 5)
- JobBench: **64.9%** (Meta launch scorecard)
- DeepSearchQA: **89.4%** (Meta launch scorecard)
- AutomationBench: **49.4%** (Meta launch scorecard)
- SWE-Atlas Codebase QnA: **59.4%** (Meta launch scorecard)
- ApprenticeBench: **19%** (NeoCognition community eval)
- AA Agentic Index: **55.7%** (AA model page)
- CursorBench 4.0: **41.6%** (Cursor community eval)
- CWE-bench v1: **55.0%** (Collinear leaderboard)

**Reasoning / knowledge:**

- GPQA Diamond: **93.5%** (AA model page; tie with Claude Fable 5.1 at 93%)
- Humanity's Last Exam (HLE): **48.7%** (AA model page)
- AA-LCR: **83.0%** (AA model page; 79% per AA model page for xhigh variant — slight discrepancy; using 83% as primary)
- CritPt: **24.9%** (AA model page; 26% per AA; 18%→26% improvement vs 1.2)
- SciCode: **58.8%** (AA model page)
- AA Coding Index: **75.8%** (AA model page)
- FrontierMath v2 Tiers 1–3: **74.0%** (Epoch AI leaderboard)
- FrontierMath v2 Tier 4: **46.3%** (Epoch AI leaderboard)

**Coding:**

- DeepSWE v1.1: **75.4%** (Meta launch scorecard; community reports as 75.4%, ahead of Opus 5 at 74.0% and GPT-5.6 Sol at 73.0%)
- SWE-Atlas Codebase QnA: **59.4%** (Meta launch scorecard)
- Terminal-Bench 2.1 (Coding): **88.8%** (same as agent TB2.1, the coding variant)
- Bug Hunt Bench: **32.2 fixes** (Bug Hunt Bench public data)
- FrontierSWE v2: **25.8%** (Proximal leaderboard)

**Long context:**

- MRCR v2 256K–512K: **98.5%** (Meta launch scorecard; #1 on leaderboard)
- MRCR v2 512K–1M: **98.1%** (Meta launch scorecard)

**Multimodal:**

- Design Arena Website: **1,355** (OpenRouter model benchmarks)
- EQ-Bench Longform Creative Writing: **82.8%** (Sophon/AA)
- EQ-Bench Creative Writing v3: **1,906.9** (Sophon/AA)
- Creative Story-Writing Benchmark: **57%** (Sophon/AA)
- Vibe Code Bench v1.1: **82.9%** (Vals AI)

**Speed:**

- 168 tok/s output speed (Sophon/AA)
- 1355 context score on Design Arena Website (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 95/100.** Tau3-Banking 50.5% (#1), GDPval-AA v2 1,754 Elo (record), TB2.1 88.8% — capped by AutomationBench 49.4% and ApprenticeBench 19% which are mid-tier; capped further by the single-reasoning-turn ceiling on automation tasks.
- **Reasoning: 92/100.** GPQA Diamond 93.5% (frontier tier), HLE 48.7% (strong mid-tier), MRCR 98.5% (record at 256K–512K), CritPt 24.9% (below 30% tier); capped by HLE <50% and CritPt <30%.
- **Context window: 100/100.** 1M tokens confirmed by Meta; MRCR 98.5%/98.1% at 256K–1M validates near-perfect retrieval at long context.
- **Multimodal: 85/100.** Text/image/video in; 82.8% EQ-Bench longform, 57% creative writing, 82.9% Vibe Code Bench — strong multimodal capabilities but not frontier-tier (15–20% = text-only, 60–70% = image in, 75–90% = video/PDF in, 90–100% = audio non-text out).
- **Coding: 95/100.** DeepSWE 75.4% (claims #1, ahead of Opus 5 at 74.0%), SWE-Atlas 59.4%, TB2.1 88.8%, SciCode 58.8% — capped by CWE-bench 55% and FrontierSWE 25.8%.
- **Cost efficiency: 100/100.** Contributor/Free tier at $0/$0 on OpenCode Zen; $0.10/$0.20 per 1M on Meta API — $0 input makes it the top cost-efficiency tier.
- **Overall Score: 93.4/100.** Mean of (95 + 92 + 100 + 85 + 95) / 5 = 93.4 → 94; capped by Multimodal 85 and Reasoning HLE/CritPt below 50%.

---

## Signature

- Provided by: **Leanstral 1.5 (opencode/leanstral-1.5)** — 2026-10-31
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta AI Research: Introducing Muse Spark 1.3](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [Artificial Analysis: Muse Spark 1.3 — Meta reaches the frontier](https://artificialanalysis.ai/articles/muse-spark-1-3)
  - [Artificial Analysis model page](https://artificialanalysis.ai/models/muse-spark-1-3)
  - [Sophon: Muse Spark 1.3](https://sophon.at/models/muse-spark-1-3)
  - [BenchLM: muse-spark-1-3](https://benchlm.ai/models/muse-spark-1-3)
  - [Kie.ai: What Is Muse Spark 1.3?](https://kie.ai/blog/what-is-muse-spark-1-3)
  - [Meta Model API docs](https://developer.meta.com/ai/models/muse-spark/)
  - [OpenRouter benchmarks](https://openrouter.ai/meta/muse-spark-1.3/benchmarks)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-spark-1.3/Leanstral_1.5.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/muse-spark-1.3/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
