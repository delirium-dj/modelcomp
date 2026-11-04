# Muse Spark Open — findings by Qwen 3.8 Max

- Source: Meta Superintelligence Labs (`muse-spark-open`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open (benchmarked as the **Xhigh** reasoning variant)
- **Short description:** Meta Superintelligence Labs' **October-2026 open-weight MoE flagship** — **816B total / 42B active parameters**, natively multimodal (**text + image + speech + video in → text out**), **1M-token context**, billed as **"the most capable US open-weight model to date"** and built for coding / agentic / long-horizon repository work. Genuinely strong on graduate science (GPQA-D 89.0%), visual reasoning (MMMU-Pro 80.9%), long-context reasoning (AA-LCR 78.3%) and established tool-calling (MCP Atlas 89.2%, Terminal-Bench 2.1 76.4%) — **but collapses on the hardest frontier agentic tasks** (Terminal-Bench 4.0 8.1%, MazeBench 0%, GDP.pdf 18.6%), which drags its **AA Intelligence Index to 25**.
- **Provider / access:** Free open-weight checkpoint on Hugging Face (`meta-models/Muse-Spark-Open-816B-A42B`, BF16 + NVFP4) under the **Muse Model License**; hosted serving via OpenCode Zen `opencode/muse-spark-open` and other providers, or self-host on multi-GPU compute. Reasoning model (a non-reasoning variant may also exist).
- **Release / knowledge:** Released **October 15, 2026** (Meta Superintelligence Labs). Knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/muse-spark-open`; AA slug `muse-spark-open`; BenchLM slug `muse-spark-open`; HF `meta-models/Muse-Spark-Open-816B-A42B`.
- **Context window:** **1M total (1,048,576) / 128K max output (131,072)** — AA-confirmed (~1573 A4 pages). Long-context reasoning verified by AA-LCR 78.3% (though medical MLCR-AA is weak at 7.8%).
- **Modalities:** **Text + image + speech + video in → text out** (AA-confirmed; meta lists "text, code, image, video, audio in; text, JSON out"). The broadest input-modality tier; text-only output.
- **Pricing (as of 2026-11-04):** **Weights free** ($0 license, self-host). **Hosted serving $1.25 / $4.25** per 1M in/out (AA Cost #18/24, "expensive" for an open-weight model; 88% cache discount, $2.02/task). Self-hosting an 816B MoE carries real multi-GPU compute cost.
- **Architecture:** Open-weight **sparse MoE — 816B total / 42B active** per token; natively multimodal encoder; BF16 + NVFP4 checkpoints. Muse Model License (open-weight, not fully OSI-open).

### Raw benchmarks found

> Independent aggregators: **Artificial Analysis** (`muse-spark-open`, Xhigh) — **Intelligence Index #11/24 = 25** (3/4 units; above the open-weight-large median of 23, but far below the frontier — e.g. Gemini 4 Carbon = 60). Performance **#7/21** (TTFT 13.23s, **153 tok/s**, 7.2 min/task — quicker than average). Cost **#18/24** ($1.25/$4.25, 88% cache, $2.02/task — "expensive" for open-weight). Verbosity #11/24 (90.6M output tokens, fairly concise). **BenchLM** (`muse-spark-open`) — **50.48/100, #98 of 1008, 29 of 739 rows** (Meta / Open Weight / Reasoning; "partial coverage → conservative"). Rows mix the Meta scorecard, the HF model card, AA leaderboards, and OpenRouter.

Agent / tool use:

- **MCP Atlas: 89.2%** (Meta scorecard) — strong tool/MCP orchestration.
- **Terminal-Bench 2.1: 76.4%** (AA) — solid agentic terminal on the 2.1 split.
- **Toolathlon-Verified: 72.8%** (HF card); **JobBench: 61.8%** (Meta scorecard).
- **GDPval-AA Elo: 1401**; **AA Briefcase Elo: 1278** — respectable real-world/knowledge-work Elo.
- **BUT frontier-agentic collapses:** **Terminal-Bench 4.0: 8.1%** (AA), **MazeBench: 0%** (failed), **GDP.pdf: 18.6%** (AA), **AA AutomationBench: 49.7%**, **GDPval-AA (normalized): 45.1%**.

Reasoning / knowledge:

- **GPQA-Diamond: 89.0%** (AA) — frontier-level graduate science reasoning; the standout.
- **AA-LCR: 78.3%** (long-context reasoning) — good.
- **BUT weak breadth:** **CritPt: 14.9%** (physics reasoning), **MLCR-AA: 7.8%** (medical long-context — near-failure), **AA-HLE: 43.9%**, **AA-Omniscience Index: 25.8%** (Accuracy 42.0%), **Hallucination rate: 28.0%** (high), **AA Intelligence Index: 25**.

Coding:

- **DeepSWE: 60.0%** (Meta scorecard); **AA-SciCode: 58.4%** (AA); **SWE-Atlas Codebase QnA: 58.0%** (HF card) — mid-tier repository-scale coding.
- **Design Arena Website: 1301 Elo** (OpenRouter) — competent front-end/website code-gen; **Terminal-Bench 2.1 76.4%** doubles as agentic-coding. **No SWE-bench Verified row published.**

Multimodal:

- **AA-MMMU-Pro: 80.9%** (AA) — strong independent visual reasoning.
- **BabyVision: 80.2%**, **SimpleVQA: 73.6%** (Meta scorecard) — good visual grounding/VQA.
- **ZeroBench: 50.0%** (Meta scorecard) — mid. Quad-modal input (text+image+speech+video) AA-confirmed; text-only output.

Long context:

- **1M / 128K out**; **AA-LCR 78.3%** verifies good general long-context reasoning, but **MLCR-AA 7.8%** (medical) shows the effectiveness is domain-inconsistent.

Speed (not scored, but a strength):

- **153 tok/s**, TTFT 13.23s, **7.2 min/task** (AA Performance #7/21 — quicker than the 13.4-min median). Fast for an 816B MoE (42B active).

> Provenance: **rich but polarized, with strong independent AA coverage.** Unlike vendor-only models, most of the hardest datapoints are **AA-measured independently** (Intelligence Index 25, GPQA-D 89.0%, MMMU-Pro 80.9%, TB 2.1 76.4%, TB 4.0 8.1%, AA-LCR 78.3%, CritPt 14.9%, MLCR 7.8%, GDP.pdf 18.6%, AutomationBench 49.7%, HLE 43.9%, Omniscience 25.8%, hallucination 28%). The Meta scorecard / HF card supply the vendor rows (MCP Atlas 89.2%, DeepSWE 60.0%, JobBench 61.8%, Toolathlon 72.8%, BabyVision 80.2%, SimpleVQA 73.6%, ZeroBench 50.0%, HLE w/tools 61.0%, SWE-Atlas 58.0%). The independent AA composite (Index 25) and BenchLM (50.48) both sit **far below the curated cohort's 86.5**, signalling the cohort over-weighted the vendor strengths.
> Meta verification: **accurate** — Meta Superintelligence Labs open-weight MoE ✓, **816B total / 42B active** ✓ (AA total/active params), released Oct-2026 ✓ (Oct 15), **1M / 128K out** ✓, **text+image+speech+video → text** ✓ (AA "natively multimodal"), free HF weights ✓ (Muse Model License, BF16/NVFP4), agentic-coding / long-horizon focus ✓, "verified long-context retrieval" ✓ (AA-LCR 78.3%). The tradeoff ("open-weight serving trails closed-frontier flagships on top agentic/coding leaderboards") is **strongly confirmed** by TB 4.0 8.1% / MazeBench 0% / AA Index 25.

### Normalized scores (1–100)

- **Tool use: 74/100.** Genuinely strong on established tool-calling — **MCP Atlas 89.2%**, **Terminal-Bench 2.1 76.4%**, **Toolathlon-Verified 72.8%**, **JobBench 61.8%**, GDPval-AA Elo 1401 / Briefcase Elo 1278 — **but collapses on the hardest frontier-agentic tasks**: **Terminal-Bench 4.0 8.1%**, **MazeBench 0%**, **GDP.pdf 18.6%**, AutomationBench 49.7%. The dramatic TB 2.1 (76.4%) → TB 4.0 (8.1%) split is the story: reliable on known tool patterns, unreliable on novel/long-horizon agentic reasoning. Well below the cohort's 83.5, which discounted the AA-verified frontier collapses.
- **Reasoning: 70/100.** Anchored by a frontier-level **GPQA-Diamond 89.0%** and good **AA-LCR 78.3%**, but the breadth is weak — **CritPt 14.9%**, **MLCR-AA 7.8%**, **AA-HLE 43.9%**, **Omniscience Index 25.8%**, **28% hallucination**, and an **AA Intelligence Index of just 25**. One elite benchmark amid many poor ones; inconsistent rather than broadly strong. Below the cohort's 81.5, which credited GPQA-D without penalizing the AA composite.
- **Context window: 90/100.** A real, AA-confirmed **1M-token window (128K out)** with **AA-LCR 78.3%** verifying good general long-context reasoning and the standout citing "verified long-context retrieval." Held below the cohort's 96.5 (and below a GraphWalks-96%-verified 1M) because **MLCR-AA 7.8%** shows long-context effectiveness is domain-inconsistent, not uniformly top-tier.
- **Multimodal: 87/100.** The model's clearest strength — **quad-modal input (text+image+speech+video → text)** with strong independent **AA-MMMU-Pro 80.9%**, plus **BabyVision 80.2%** and **SimpleVQA 73.6%**. Scored above my base quad-modal tier (84) for the AAA-verified visual reasoning, but below the cohort's 91 because **ZeroBench 50.0%** is mid and output is text-only.
- **Coding: 73/100.** Mid-tier open-weight coding — **DeepSWE 60.0%**, **AA-SciCode 58.4%**, **SWE-Atlas Codebase QnA 58.0%**, with decent agentic-coding (**Terminal-Bench 2.1 76.4%**) and front-end (**Design Arena 1301 Elo**). **No SWE-bench Verified flagship row**; repo-scale numbers trail the frontier. Below the cohort's 80.
- **Cost efficiency: 86/100.** **Free open-weight ($0 license, self-host autonomy)** + fast **153 tok/s** is a compelling cost story for those who self-host, and hosted serving is mid ($1.25/$4.25, 88% cache, $2.02/task). Tempered below the cohort's 91.5 because AA ranks hosted cost **#18/24 ("expensive" for open-weight)** and an 816B MoE demands costly multi-GPU self-host compute. Not counted toward Overall.
- **Overall Score: 79/100.** Mean of Tool 74 + Reasoning 70 + Context 90 + Multimodal 87 + Coding 73 = 394 / 5 = 78.8 → 79. Best fit: **the strongest US open-weight model — a fast, 1M-context, natively multimodal 816B/42B MoE with elite GPQA-D / MMMU-Pro / MCP-Atlas peaks — that is genuinely above-average but unreliable on the hardest frontier agentic and knowledge-composite tasks.** **Divergence note:** 2-rater cohort average 86.5 vs my 79 → **−7.5** (a material downward divergence). The independent composites corroborate my read: **BenchLM 50.48/100 (#98/1008)** and **AA Intelligence Index 25 (#11/24 open-weight-large)** both sit far below the cohort's 86.5, which appears to have weighted the vendor scorecard (MCP Atlas 89.2%, GPQA-D 89.0%, MMMU-Pro 80.9%, 1M, multimodal) while discounting the AA-measured frontier collapses (**TB 4.0 8.1%, MazeBench 0%, MLCR 7.8%, CritPt 14.9%, GDP.pdf 18.6%, hallucination 28%**). My 79 lands between the harsh composites and the generous cohort, crediting the real multimodal/context/GPQA/tool strengths while respecting the independent weakness signals.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-04
- Method: public internet research (Artificial Analysis `muse-spark-open` Xhigh for Intelligence Index #11/24 = 25, Performance #7/21 at 153 tok/s / 7.2 min/task, Cost #18/24 at $1.25/$4.25 + 88% cache, 1M context, text+image+speech+video → text, 816B/42B MoE, Muse Model License, plus AA-measured GPQA-D 89.0% / MMMU-Pro 80.9% / TB 2.1 76.4% / TB 4.0 8.1% / AA-LCR 78.3% / CritPt 14.9% / MLCR-AA 7.8% / GDP.pdf 18.6% / AutomationBench 49.7% / HLE 43.9% / Omniscience 25.8% / hallucination 28% / GDPval-AA Elo 1401 / Briefcase Elo 1278; BenchLM `muse-spark-open` 50.48/100 #98/1008 with 29 rows relaying the Meta scorecard — MCP Atlas 89.2%, DeepSWE 60.0%, JobBench 61.8%, BabyVision 80.2%, SimpleVQA 73.6%, ZeroBench 50.0% — and HF card rows HLE w/tools 61.0%, Toolathlon 72.8%, SWE-Atlas 58.0%; curated `meta.json` verified accurate; WebSearch + Meta research blog for the Oct-15-2026 "most capable US open-weight model" framing). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta AI Research — Introducing Muse Spark Open (scorecard & methodology)](https://research.meta.ai/blog/muse-spark-open)
  - [Hugging Face — meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Artificial Analysis — Muse Spark Open](https://artificialanalysis.ai/models/muse-spark-open)
  - [BenchLM — Muse Spark Open benchmarks](https://benchlm.ai/models/muse-spark-open)
  - [OpenRouter — Meta Muse Spark Open benchmarks](https://openrouter.ai/meta/muse-spark-open/benchmarks)
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
