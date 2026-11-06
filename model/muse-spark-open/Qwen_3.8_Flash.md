# Muse Spark Open — findings by Qwen 3.8 Flash

- Source: Meta (`Muse-Spark-Open-816B-A42B`, curated id `opencode/muse-spark-open`), cross-checked against Artificial Analysis (Intelligence Index v5.0.1), Meta's launch post, and Fireworks' Day-0 serving validation
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta Superintelligence Labs' **most capable US open-weight model to date** — an 816B-total / 42B-active sparse MoE, natively multimodal, built for long-horizon coding and agentic work (weights released 2026-10-15). Marketed as the first model in its class to run on a desktop (2× Apple M5 Ultra Mac Studios via MLX). The **open-weight sibling of the Muse Spark family** (distinct from the hosted `muse-spark-1.x` / `muse-wonder` tiers).
- **Provider / access:** open weights on Hugging Face (`meta-models/Muse-Spark-Open-816B-A42B`, BF16 + NVFP4), Amazon SageMaker, Google Model Garden, Microsoft Foundry; hosted API via **Fireworks, Together, Baseten, Modal, Groq, Nebius, OpenRouter** (AA counts 6 live providers). **Muse Model License** (commercial use allowed with restrictions).
- **Release / knowledge:** released **2026-10-15**; knowledge cutoff not published.
- **IDs:** curated `opencode/muse-spark-open`; HF `Muse-Spark-Open-816B-A42B`.
- **Context window:** **1M tokens** (AA + Meta); up to 131,072 max output per curated card. No published MRCR/RULER single-window retrieval absolute for this exact ID.
- **Modalities:** **text + image + speech + video in; text out** (AA); reasoning model (xhigh setting measured).
- **Pricing (as of 2026-11-06):** open weights — **$0 self-host**; hosted median **$1.25 / $4.25 per 1M** in/out (blended ~$0.78; AA Cost per Index task **$2.02**). AA 149 tok/s, time-to-first-answer 12.42s, 7.4 min/Index task.
- **Architecture:** 816B total / 42B active sparse MoE; ships with auto-tunable Helion GPU kernels (1.03–3.95× kernel speedups on NVIDIA/AMD).

### Raw benchmarks found

> Provenance tiers: (a) **Artificial Analysis independent** — Intelligence Index v5.0.1, AA-Omniscience; (b) **provider/vendor** — the capability absolutes below (AIME/GPQA/SWE/Terminal-Bench/MMMU/OCRBench) come from **Fireworks running Meta's API release** through its launch-validation suite, and the specialized-domain rows from **Vals AI / Rogo / Fireworks** harnesses — flagged inline; independent same-harness reproductions on the open weights are limited.

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta evals, each model in its own agent harness — not directly comparable across vendors)
- Harvey Legal Agent Benchmark (Vals AI): **25.4% (#1 of 75 models)**, ~4× Claude Opus 5 (6.7%)
- Finance Agent v2 (Vals AI): **60.6%** (within a point of Gemini 3.8 Flash at ~60% lower cost/test)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **25 (v5.0.1, xhigh)** (independent; above the 23 class median for large open weights). **~39 on the pre-v5 scale** per launch coverage / r/LocalLLaMA — a whole-cohort methodology rescale, not a regression.
- GPQA Diamond: **89.7%** (Fireworks launch suite on Meta's API release)
- AIME26: **91.1%** (Fireworks launch suite)
- AA-Omniscience hallucination rate: **33%** (independent; low — declines rather than guesses when unsure)

Coding:

- SWE-bench Verified: **84.3%** (Fireworks launch suite on Meta's API release; matched on SGLang)
- Rogo Big Finance Bench: **53.3% (top open-weights model; ahead of Claude Opus 5 at 49.2%)**

Long context / Multimodal:

- 1M window (listed); **no MRCR/RULER retrieval absolute published** for this exact ID.
- Image understanding **>80%** on both OCRBench and MMMU-Pro (Fireworks launch suite); MedScribe clinical documentation **90.1%** (Vals AI, within a point of Claude Opus 5's 91.0%).

### Normalized scores (1–100)

- **Tool use: 78/100.** Genuinely agentic for long-horizon work — #1 on Harvey's Legal Agent Benchmark and Terminal-Bench 2.1 82.9% show real multi-step tool use — but the general (non-vertical) tool absolutes (MCP-Atlas/GDPval) are vendor-harness numbers, capping confidence.
- **Reasoning: 72/100.** GPQA 89.7 / AIME 91.1 and a strikingly low 33% AA-Omniscience hallucination are excellent, yet the **independent AA Index is only 25 on v5.0.1** (above the open-weight median, but well below the ~55–60 closed frontier) — strong, not frontier, general reasoning.
- **Context window: 88/100.** A full **1M** window engineered to "stay coherent across very long sessions" is top-tier span; docked only for the absence of a published single-window retrieval absolute (MRCR/RULER).
- **Multimodal: 82/100.** Widest input set — **text + image + speech + video in** — with >80% OCRBench/MMMU-Pro and 90.1% MedScribe; capped because output remains **text-only** (no image/audio/video generation).
- **Coding: 80/100.** Its headline lane: SWE-bench Verified 84.3 + Terminal-Bench 2.1 82.9 + top open-weight on Rogo make it the strongest US open-weight coder; held below the ~88+ closed frontier coders because the absolutes are API-release (Fireworks/Meta) numbers rather than independent open-weights reproductions.
- **Cost efficiency: 86/100.** Open weights (self-host $0, incl. on 2× Mac Studios) plus hosted $1.25/$4.25 (blended ~$0.78, $2.02/task) and 149 tok/s give it best-in-class value; the paid hosted tier is above the open-weight median, and the license restricts some commercial use.
- **Overall Score: 80/100.** Half-up mean of the five quality dims (78+72+88+82+80)/5 = 80.0 (Cost excluded). Best fit: teams wanting a **US-built, sovereign, fully self-hostable open-weight coder/agent** with elite regulated-domain (legal/finance/clinical) results and a 1M window — as long as peak general reasoning (AA Index 25 v5) trails the closed frontier. **Independence note:** scored a touch below the queue aggregate (82.7); the vertical-leaderboard wins are real but the general AA Index and the vendor-harness coding absolutes don't reach the top open-weight ceiling across all five dims.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-06
- Method: public internet research — Meta AI Research "Introducing Muse Spark Open" launch post (2026-10-15, 816B/42B MoE, 1M ctx, natively multimodal, Muse Model License, MLX on Mac Studio, hosted partner list), Artificial Analysis model page (Intelligence Index **25 v5.0.1**, $1.25/$4.25, blended $0.78, $2.02/task, 149 tok/s, 12.42s TTFT, text+image+speech+video in / text out, 6 providers, 33% Omniscience hallucination), and Fireworks' Day-0 launch-validation numbers (SWE-bench Verified 84.3, GPQA Diamond 89.7, AIME26 91.1, Terminal-Bench 2.1 82.9, OCRBench/MMMU-Pro >80%, Harvey LAB 25.4 #1, Rogo Big Finance 53.3, Finance Agent v2 60.6, MedScribe 90.1). Vendor vs independent provenance flagged inline; index-version drift (pre-v5 ~39 → v5.0.1 25) noted. No values copied from peer reports; scores are normalized 1–100 interpretations, not official scores.
- Reference URLs:
  - [Meta AI Research — Introducing Muse Spark Open](https://research.meta.ai/blog/muse-spark-open)
  - [Hugging Face — meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Artificial Analysis — Muse Spark Open model page](https://artificialanalysis.ai/models/muse-spark-open)
  - [Fireworks — Muse Spark Open Day-0 launch benchmarks](https://fireworks.ai/blog/meta-muse-spark-open)
- Revisit trigger: Artificial Analysis or an independent lab publishing same-harness SWE-bench Verified / GPQA / MRCR rows against the **open weights** (not just Meta's API release), a published knowledge cutoff, or a non-reasoning / additional-effort Index row reconciling the 25 (v5.0.1) vs ~39 (pre-v5) figures.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
