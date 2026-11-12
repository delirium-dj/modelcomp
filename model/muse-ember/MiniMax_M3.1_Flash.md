# Muse Ember 1.0 — findings by MiniMax M3.1 Flash

- Source: Meta (`muse-ember-1.0`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0 (the "Crouton Alpha" stealth preview that Meta revealed on 2026-11-09 under the Muse Ember name)
- **Short description:** Meta's smallest and most efficient model — released 2026-11-09 as the first model trained using Muse Wonder Full, aimed at the repeatable subtasks agents run all day (tool calls, coding subtasks, routing, extraction, long-document parsing) rather than at frontier hard problems. Meta positions it on the Artificial Analysis cost-per-task efficiency frontier: at list price it delivers more intelligence per dollar than Claude Haiku 5.5 or GPT-6 Luna at any reasoning setting.
- **Provider / access:** Meta Model API and Muse Code — model id **`muse-ember-1.0`** (Responses API). OpenCode Zen exposes the same id at `https://opencode.ai/inference/openai/v1/responses` (Zen list checked 2026-11-12: Muse Ember 1.0, Muse Wonder 1.0 and the Muse Spark line are present). OpenRouter `meta/muse-ember` and Vercel AI Gateway `meta/muse-ember` list the same checkpoint at the same price. Also available on Google Cloud Model Garden and Oracle Cloud.
- **Release / knowledge:** Released **2026-11-09** (Meta AI Research blog "Introducing Our Smallest, Most Efficient Model: Muse Ember"; the same day it appeared on the AA leaderboard as "Muse Ember (Max)" and "Muse Ember (Xhigh)"). Previously visible in the wild as the stealth preview **Crouton Alpha**. Knowledge cutoff not disclosed; models.dev lists no `knowledge` value.
- **IDs:** `muse-ember-1.0` (Meta Model API / Muse Code / OpenCode Zen), `meta/muse-ember` (OpenRouter, Vercel AI Gateway, models.dev canonical id).
- **Context window:** **1,048,576 tokens (1M)**, with **up to 512K output tokens** per Meta's launch post; models.dev records `context` 1048576 and an OpenCode Zen route cap of **270,000 output tokens**, and AA's record carries `contextWindowTokens` 1048576.
- **Modalities:** **Text, image, audio and video in → text out** ("Muse Ember natively understands text, images, audio, and video" — Meta's launch post); OpenRouter's live row lists the input modalities as text, image, video, file and audio. Reasoning is **always on** with effort settings **medium / high / xhigh / max** (Meta's tables report max reasoning unless noted). Tool calling is supported (the model is explicitly built for tool sequences); the Responses API is the documented interface.
- **Pricing (as of 2026-11-12):** **$0.10 input / $0.50 output per 1M tokens**, **$0.004 cached input** for prompts up to 200K; above 200K the price rises to **$0.30 in / $1.50 out** and $0.012 cached (Meta's launch post; OpenRouter, Vercel AI Gateway and models.dev carry the identical rows). The same launch post quotes an Artificial Analysis cost per task of **$0.116** (xhigh) to **$0.136** (max) at list price, against $2.39 per task for Muse Spark 1.3 (max).
- **Architecture:** Proprietary (weights not published) — Meta describes Ember as a compact reasoning model built on the Muse Wonder Full training recipe, with "the same core safety training and testing" as larger Meta models.

### Raw benchmarks found

> Meta's launch post reproduces the Artificial Analysis charts at **max** reasoning; AA's own model record for the same checkpoint is cited separately where the two differ (the AutomationBench row differs because Meta quotes the public chart while AA stores its strict pass@1 run). "Internal evaluation" rows are Meta's own suite, not an independent harness.

Agent / tool use:

- AutomationBench-AA: **37.8%** at max reasoning (Meta, reproducing the AA public chart; strict pass@1) — AA's own record for the same checkpoint stores **68.08%** (`automationbench-aa`) at max and 66.71% at xhigh, so the public chart and the stored run disagree sharply and both are quoted rather than one being chosen.
- Agents' Last Exam: **61.6%** at max (Meta internal evaluation, Linux subset) vs 57.0% (Claude Haiku 5.5 max) and 57.1% (GPT-6 Luna max).
- AA-Briefcase: **1520.92 Elo** (AA, `aa-briefcase`; 1526.95 at xhigh).
- Terminal-Bench 4.0: **40.9%** at max (Meta, mini-swe-agent harness; AA records 40.91% at max and 35.35% at xhigh).
- Terminal-Bench-Science 0.1: **20.0%** (AA, `terminal-bench-science`).
- GDPval-AA: **no verified public score found** for this model id.
- Tau3-Banking / Tau2-Bench, Claw-Eval / ClawProBench, Toolathlon / MCP-Atlas: **no verified public score found** for this model id.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **36.0** at max reasoning / **34.1** at xhigh (AA model record) — Meta's launch post quotes 36 and compares against Muse Spark 1.3 (max) at 37, Claude Haiku 5.5 (max) at 36 and GPT-6 Luna (max) at 28.
- HLE-Diamond: **25.1%** at max / 23.6% at xhigh (AA, `hle-diamond`).
- MLCR: **18.3%** (AA, `mlcr-aa`).
- CritPt v2 hard: **39.0%** at max / 38.5% at xhigh (AA, `critpt-v2-hard`).
- Omniscience Accuracy / Hallucination Rate: **21.1% accuracy / 17.4% hallucination rate** (AA: accuracy 0.2107, non-hallucination 0.8264 → hallucination rate 17.4%).
- Personal Superintelligence Index: **46.8** at max (Meta internal composite of eight evaluations — Agents' Last Exam, AutomationBench, FocusBench, JobBench, OfficeQA Pro, GDP.pdf, GDP.xlsx and VBT).
- GPQA Diamond: **no verified public score found** for this model id.
- BenchLM-style overall ranking: **no verified public score found**.

Coding:

- Coding Agent Index-AA: **46** at max (AA, via Meta's chart) vs 37 (Claude Haiku 5.5 max) and 31 (GPT-6 Luna max).
- FrontierCode 2.0-AA: **27.2%** at max (AA, via Meta's chart; AA's stored row is 27.17%) vs 34.9% (Claude Haiku 5.5 max) and 25.2% (GPT-6 Luna max) — the benchmark where Ember trails its price peers.
- Terminal-Bench 4.0: **40.9%** (see above).
- Terminal-Bench-Science 0.1: **20.0%** (AA).
- SWE-bench Verified / SWE-Pro / DeepSWE / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found** for this model id.

Long context:

- 1M-token context with up to 512K output (Meta launch post); AA's record carries `contextWindowTokens` 1048576.
- MRCR / RULER / GraphWalks retrieval at 512K+: **no long-context retrieval percentage published for this model** — Meta describes the window but publishes no needle-at-1M measurement.

Multimodal:

- OSWorld 2.1: **69.5%** partial credit / **33.8%** binary (Meta internal) vs 68.9% / 27.8% (Claude Haiku 5.5 max) and 50.5% / 17.0% (GPT-6 Luna max).
- PerceptionBench (with tools): **80.6%** (Meta internal) vs 78.6% (Claude Haiku 5.5 max) and 62.8% (GPT-6 Luna max).
- GDP.pdf-AA: **22.8%** (AA, via Meta's chart; AA's stored row is 22.8% at max).
- MMMU-Pro: **no verified public score found** for this model id.

Efficiency / throughput (context for the cost score):

- Cost per Artificial Analysis task: **$0.116** (xhigh) / **$0.136** (max) (Meta, list pricing) vs $0.092–$0.411 (Claude Haiku 5.5 across settings) and $0.073–$0.152 (GPT-6 Luna).
- Output speed: **447.7 tok/s** at max, 451.9 tok/s at xhigh; time to first answer token 4.8s (AA).

### Normalized scores (1–100)

- **Tool use: 63/100.** Agents' Last Exam 61.6% and AA-Briefcase 1520.9 Elo are solid, and AutomationBench-AA is strong on AA's stored run (68.1%); Terminal-Bench 4.0 at 40.9%, the disputed AutomationBench chart row and the absence of any public Tau3, GDPval, Toolathlon or MCP-Atlas row for this id cap the score.
- **Reasoning: 56/100.** An AA Index of 36.0 (max) / 34.1 (xhigh) sits just above the rubric's mid band (Index 20–35 → 55–65), with HLE-Diamond 25.1%, MLCR 18.3%, CritPt v2 hard 39.0% and no published GPQA row; Meta's own PSI composite (46.8) is an internal index, not an independent measurement.
- **Context window: 96/100.** A documented **1M-token** window with up to 512K output (270K on the Zen route) falls in the ≥1M tier (95–100); no published retrieval measurement at 512K+ rules out 100.
- **Multimodal: 92/100.** Native text, image, **audio** and video input is the rubric's "+audio in" band (90–100), supported by OSWorld 2.1 at 69.5% partial and PerceptionBench 80.6%; text-only output keeps it below the ceiling.
- **Coding: 60/100.** Coding Agent Index-AA 46 and Terminal-Bench 4.0 40.9% show solid agentic-terminal work for a small model, but FrontierCode 2.0-AA at 27.2% trails even Haiku 5.5, and there is no public SWE-bench, DeepSWE, LiveCodeBench or SciCode row for this id.
- **Cost efficiency: 96/100.** $0.10 / $0.50 per 1M with a $0.004 cache read, and an Artificial Analysis cost per task of $0.116–$0.136 that Meta claims is the leaderboard's efficiency frontier — just under the rubric's $0.10/$0.20 ceiling because output and long-prompt tiers are dearer.
- **Overall Score: 73.4/100.** Best fit: high-volume agentic subtasks — tool calling, coding fixes, extraction and long-document parsing — where cost per task dominates; for the hardest novel problems Meta itself points to Muse Wonder.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research — Meta AI Research's launch post read directly, the Artificial Analysis model record for `muse-ember` (max and xhigh variants), and live OpenRouter / Vercel AI Gateway / models.dev catalogue rows for price, context, modalities and throughput; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Our Smallest, Most Efficient Model: Muse Ember — Meta AI Research (2026-11-09)](https://research.meta.ai/blog/muse-ember)
  - [Muse Ember evaluation report — Meta AI Research (PDF)](https://research.meta.ai/static/muse-ember-evaluation-report)
  - [Artificial Analysis — Muse Ember model page (Index 36.0 max / 34.1 xhigh, prices, speed)](https://artificialanalysis.ai/models/muse-ember)
  - [OpenRouter — meta/muse-ember (1M context, $0.10/$0.50, audio/video input)](https://openrouter.ai/meta/muse-ember)
  - [OpenCode Zen model list and pricing (Muse Ember 1.0 route)](https://opencode.ai/docs/zen)
  - [Meta Model API / Muse Code developer entry point](https://developer.meta.com/ai/)
