# Muse Spark 1.3 — findings by GLM 5.3 Flash

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (Free tier on OpenCode Zen is listed as "Muse Spark 1.3 Free" / Muse Spark 1.3 Contributor Free)
- **Short description:** Meta's multimodal reasoning model for agentic workflows and coding — multi-step tool loops, browser/long-horizon tasks, and long-context reasoning — positioned as the cost-efficient, latency-sensitive workhorse under Muse Wonder. Third 2026 Muse Spark generation (1.1 April, 1.2 August); Artificial Analysis now flags it deprecated in favor of Muse Wonder (2026-10-12).
- **Provider / access:** Meta Model API `https://api.meta.ai/v1` (OpenAI-compatible; Responses, Chat Completions, and Messages endpoints) with IDs `muse-spark-1.3` (Standard) and `muse-spark-1.3-contributor` (Contributor). Also on OpenRouter as `meta/muse-spark-1.3` and `meta/muse-spark-1.3-contributor`; on OpenCode Zen as `muse-spark-1.3-contributor-free` via `https://opencode.ai/inference/openai/v1` (Responses API; flagged `deprecated` in Zen's catalog as of 2026-11).
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff not officially published (AA comparison tables leave it blank).
- **IDs:** `muse-spark-1.3` (Standard), `muse-spark-1.3-contributor` (Contributor, $0.10/$0.20), `muse-spark-1.3-contributor-free` (OpenCode Zen Free, limited-time promo with contributor data terms)
- **Context window:** 1,048,576 tokens total with 131,072 max output (Meta Model API docs state 1,048,576; max output per models.dev catalog) — verified across Meta docs, AA model pages, and models.dev
- **Modalities:** text, image, video, and PDF input (audio accepted but officially "not fully supported"/degraded on 1.3 — Meta recommends 1.2 for audio); text output only; reasoning yes with effort levels `minimal`→`max` (`max` not available on the contributor variant); tool calls yes; structured output/JSON yes; web-search grounding tool ($2.50 per 1,000 queries)
- **Pricing (as of 2026-11-01):** Standard mode $1.25 in / $4.25 out / $0.15 cached per 1M; Contributor mode $0.10 in / $0.20 out / $0.002 cached per 1M; OpenCode Zen Free tier $0 in / $0 out / $0 cached — prompts, code, files, and outputs may be used to train future Meta models (contributor terms), promo is limited-time and now flagged deprecated on Zen. Rate limits: 3,000 RPM / 4M TPM (Standard); 150 RPM / 3M TPM (Contributor).
- **Architecture:** proprietary, closed weights, parameters undisclosed (AA lists weights "not available"; no public MoE/param spec). Do not conflate with the separate open-weight sibling Muse Spark Open (816B MoE, 42B active, released 2026-10-15).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta launch scorecard 2026-09-02, max effort; AA independent run 84.3% max / 85.4% xhigh; Vals AI 72.3%)
- Terminal-Bench 4.0: **33.3%** (Artificial Analysis, max effort; Vals AI 10.6%) — sharply weaker on the recalibrated v4.0 harness
- Tau3-Bench Banking: **50.5%** (Artificial Analysis, max — ranked #1 of all models at launch; xhigh 47.2%)
- GDPval-AA v2: **1,754 Elo** (Meta scorecard / AA, max; xhigh 1,709; AA-GDPval 59.0%)
- AA Agentic Index: **55.7** (Artificial Analysis; xhigh 51.5)
- AutomationBench: **49.4%** (Meta launch scorecard; AA AutomationBench-AA 58%, max)
- OSWorld 2.0: **66.9%** (Meta launch scorecard)
- JobBench: **64.9%** (Meta launch scorecard)
- DeepSearchQA: **89.4%** (Meta launch scorecard; best among tracked models per AI Release Tracker)
- SWE Atlas Codebase QnA: **59.4%** (Meta launch scorecard; best among tracked models per AI Release Tracker)
- MCP Atlas / BFCL v4: no verified public score found (aggregator estimates 87.5% and 77.2% only — unverified)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Artificial Analysis, max; xhigh 94.1%)
- HLE: **48.7%** (AA, no tools, max; xhigh 47.5%; HLE-Diamond v5.0 component 34%)
- AA-LCR: **83.0%** (AA; a 4-point regression vs Muse Spark 1.2's 87%)
- CritPt: **24.9%** (AA, max; CritPt v2 Hard Subset 46%, max)
- SciCode: **58.8%** (AA-SciCode, max)
- FrontierMath v2: **74.0%** Tiers 1–3 / **46.3%** Tier 4 (benchgap, measured)
- Artificial Analysis Intelligence Index: **36 / #30 of 58** (AA Index v5.0 current — below the median of 37; launch-day coverage on 2026-09-02 scored 62 (max) / 61 (xhigh) on the pre-v5.0 index before the rebase)
- ARC-AGI-2: no verified public score found (aggregator estimate 84.1%, low confidence — unverified)
- AA-Omniscience: Accuracy **43.6%** / non-hallucination rate **74.8%** (max)

Coding:

- SWE-bench Verified: **83.9%** (Artificial Analysis run via the Muse Code harness, max — best of 3 configs: 83.9 / 68.1 / 51.9; xhigh 82.0%; Meta published no score of its own; benchgap's 94.3% is an unverified estimate)
- SWE-bench Pro: no verified public score found (benchgap estimate 69.6% — unverified)
- DeepSWE 1.1: **75.4%** (Meta launch scorecard / AA Lab; level with Claude Opus 5 at 74.0% and GPT-5.6 Sol at 73.0%)
- AA Coding Index: **75.8** (max; xhigh 76.5)
- LiveCodeBench: no verified public score found (aggregator estimates only, v6 ~88.8% — unverified)
- Vibe Code Bench v1.1: **82.9%** (Vals AI)
- FrontierSWE v2: **25.8%** (measured)
- CursorBench 4.0: **41.6%** (Cursor evals, best listed effort)
- ProgramBench: **2.5%** (mini-SWE-agent harness)

Long context:

- MRCR v2 (8-needle): **98.5%** @256k–512k and **98.1%** @512k–1M (Meta launch scorecard; best among tracked models per AI Release Tracker)
- GraphWalks BFS 256K–1M: no verified public score found (aggregator estimate 71.9% — unverified)
- RULER: no verified public score found

### Normalized scores (1–100)

- **Tool use: 86/100.** #1-at-launch Tau3-Bench Banking 50.5%, GDPval-AA 1,754 Elo, Terminal-Bench 2.1 88.8% (Meta max) / 84.3% (AA) and Agentic Index ~55.7 mark it as a top-tier tool-loop agent, capped by the much weaker recalibrated Terminal-Bench 4.0 (33.3% AA / 10.6% Vals) and mid-pack AutomationBench (49.4–58%).
- **Reasoning: 84/100.** GPQA Diamond 93.5%, HLE 48.7% (no tools), AA-LCR 83% and FrontierMath Tiers 1–3 74% are frontier-grade, but CritPt 24.9% and the post-rebase AA Intelligence Index v5.0 of 36 (#30/58, below median) cap it below the true frontier.
- **Context window: 97/100.** 1,048,576-token window with 131,072 max output verified in Meta's docs, plus best-in-class MRCR v2 retrieval at 512k–1M (98.1%); capped only by the small AA-LCR regression (83% vs 1.2's 87%) and unverified GraphWalks.
- **Multimodal: 72/100.** Strong text/image/video/PDF input with tool calls, structured output and search grounding, but text-only output and officially degraded audio understanding on 1.3 keep it below full-omni peers.
- **Coding: 85/100.** DeepSWE 1.1 75.4% is level with Claude Opus 5 (74.0%) and GPT-5.6 Sol (73.0%), AA Coding Index 75.8 and Vals Vibe Code Bench 82.9% confirm strength, while no Meta-published SWE-bench Verified (AA-run 83.9% best-of-3), FrontierSWE v2 25.8%, ProgramBench 2.5% and CursorBench 4.0 41.6% cap it.
- **Cost efficiency: 100/100.** $0 access on OpenCode Zen's contributor-free tier (with the caveat that prompts/outputs train future Meta models and the promo is now flagged deprecated/limited-time); even the paid contributor tier ($0.10/$0.20) was the cheapest frontier-tier access at launch (AA: $0.55 per Intelligence Index task vs $0.94–0.95 for GPT-5.6 Sol / Grok 4.6 peers).
- **Overall Score: 85/100.** Mean of the five non-cost dims (86+84+97+72+85)/5 = 84.8 → 85 — best-fit for high-volume, latency- and cost-sensitive agentic and coding workloads needing a verified 1M context at near-zero cost, not for the hardest recalibrated agent suites (Terminal-Bench 4.0) where newer models lead.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Model API — Models (Muse Spark 1.3 specs, modalities, context)](https://dev.meta.ai/docs/models)
  - [Meta Model API — Pricing and rate limits (Standard/Contributor pricing, Free-tier data terms)](https://dev.meta.ai/docs/pricing-rate-limits)
  - [Artificial Analysis — Muse Spark 1.3: Meta reaches the frontier (launch benchmarks)](https://artificialanalysis.ai/articles/muse-spark-1-3)
  - [Artificial Analysis — Muse Spark 1.3 (Max) model page (Index v5.0, deprecated status)](https://artificialanalysis.ai/models/muse-spark-1-3)
  - [OpenRouter — Meta: Muse Spark 1.3 (API access, AA/Vals/Design Arena score tables)](https://openrouter.ai/meta/muse-spark-1.3)
  - [models.dev — meta/muse-spark-1.3 (context/output tokens, release date)](https://models.dev/models/meta/muse-spark-1.3)
