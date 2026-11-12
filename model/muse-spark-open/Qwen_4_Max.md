# Muse Spark Open — findings by Qwen 4 Max

- Source: Vendor (Meta Superintelligence Labs) + independent trackers; subject slug `muse-spark-open`
- Date: 2026-11-12 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Muse Spark Open (`muse-spark-open`; HF `meta-models/Muse-Spark-Open-816B-A42B`)
- **Short description:** Meta's open-weights release of the Muse Spark line — "the most capable US open-weight model to date"; natively multimodal MoE built for long-horizon coding and agentic work, with additional open-weights safety post-training. The Muse Spark 1.3 post had listed an open-weights release as roadmap; this is that release (Activepieces).
- **Provider/access:** Weights on Hugging Face (**BF16 and NVFP4**), Amazon SageMaker AI, Google Cloud Model Garden, Microsoft Foundry; **Muse Model License** (limited commercial terms — free for many developers, restrictions apply). Day-0 API on Baseten, Fireworks (US-only serverless, Zero Data Retention default, LoRA fine-tuning), Groq, Modal, Nebius, OpenRouter (`meta/muse-spark-open`), Together AI — 7 AA-tracked providers. Runs on SGLang (custom auto-tunable Helion kernels, 1.03–3.95× kernel speedups), vLLM, TensorRT-LLM, Transformers, **Apple MLX (2× M5 Ultra Mac Studio, 1 TB unified memory — first in-class desktop model)**, llama.cpp, Unsloth; TorchTitan fine-tuning.
- **Release/knowledge:** Released **October 15 2026** (Meta blog; AA FAQ). Knowledge cutoff not published.
- **IDs:** `muse-spark-open`; OpenRouter `meta/muse-spark-open`. Distinct from hosted Muse Spark 1.1/1.2/1.3 SKUs and from Muse Ember/Wonder/Glimmer.
- **Context window:** **1M tokens (1,048,576)** — Meta blog/HF/AA/Activepieces agree.
- **Modalities:** Natively multimodal: **text + image + speech + video in** (AA), text out. (Activepieces describes "text and images" only — simplified; AA/official omni spec wins, labelled.)
- **Pricing (as of 2026-11-12, per 1M tokens):** AA median **$1.25 in / $4.25 out, 88% cache discount**, blended $0.78 (7:2:1); **$2.02 per Intelligence Index task**. OpenRouter lists the same $1.25/$4.25. AA: "particularly expensive" vs open-weights medians ($0.43/$1.84). Self-host free under license terms.
- **Architecture:** MoE **816B total / 42B active**; reasoning model (AA tracks **xhigh**); default settings reason before answering (Activepieces). Trained/developed in the US; evaluated under Meta Superintelligence Scaling Framework (release thresholds met; full safety report pending).

### Raw benchmarks found

Vendor-reported (Meta scorecard/methodology report, via BenchLM + Fireworks; each model in its own agent harness):
- Agentic: **MCP Atlas 89.2**, Toolathlon-Verified 72.8, HLE w/ tools 61.0, JobBench 61.8.
- Coding: **Terminal-Bench 2.1 82.9** (ahead of GPT-5.6 Terra and Grok 4.5 per Fireworks Fig. 2), DeepSWE 60.0, SWE-Atlas Codebase QnA 58.0.
- Vision: ZeroBench 50.0, BabyVision 80.2, SimpleVQA 73.6.
- On-device demos (Muse Code + 2× M5 Ultra): shipped real iOS changes to Ice Cubes (bug fixes, features, full build); drove DaVinci Resolve end-to-end with frame-by-frame footage review.

Independent runs:
- **Fireworks launch validation** (final open weights on production stack; SGLang cross-check matched): **AIME26 91.1, GPQA-D 89.7, SWE-bench Verified 84.3**, OCRBench and MMMU-Pro both >80.
- **Vals AI** (via Fireworks; measured on Meta's API release): **Harvey Legal Agent Benchmark 25.4% — #1 of 75 models, ~4× Claude Opus 5 (6.7%)**; Finance Agent v2 60.6 (within a point of Gemini 3.8 Flash at ~60% lower cost); MedScribe 90.1 (Opus 5: 91.0) at 75–83% lower token prices.
- **Rogo Big Finance Bench 53.3%** — top open-weights, ahead of Opus 5 (49.2); Fireworks Specialized Intelligence Index hardest tier 17.3 vs GPT-6 Astra 16.5, >2.5× Opus 5.5 (6.6).
- Artificial Analysis (xhigh, live v5.0.1): **Intelligence Index 25** (BenchLM carries 24.9; #13/27 open-large class, median 23), GPQA-D 89.0, AA-HLE 43.9, LCR 78.3, CritPt 14.9, Omniscience net +25.8 (accuracy 42.0, **hallucination 28.0** — Fireworks cites 33% on Meta's API release, labelled conflict), GDPval-AA normalized 45.1%, SciCode 58.4, MMMU-Pro 80.9. Performance: **157 tok/s, TTFT 14.40s, 7.1 min/task** (class median 12.7); 90.6M output tokens (concise; median 104M).
- Cognition FrontierCode 2.0: **6.2** (weak on the hardest new agentic-coding eval). MazeBench 0 (ASCII). Design Arena Website 1301.
- Activepieces own test (3 automation tasks): 3/3 correct vs GPT-5.4 mini 2/3, but 14.8s median / $0.0024 per task (~18× slower, ~17× costlier than mini) — reasoning-on default penalizes simple flows.
- BenchLM aggregate: 51.16/100, **#95 of 1026** (25/815 rows, partial coverage).

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas 89.2 (near class-leading), Toolathlon-V 72.8, HLE-tools 61.0, JobBench 61.8, Harvey LAB #1/75 at 25.4% (~4× Opus 5), Finance Agent v2 60.6 — exceptional regulated-work agentic strength; GDPval normalized 45.1% is only mid-pack, keeping it below the 88+ frontier-orchestration tier.
- **Reasoning: 82/100.** HLE-tools 61.0, AIME26 91.1, GPQA 89.0–89.7, ZeroBench 50.0, CritPt 14.9, Omniscience +25.8 with 28–33% hallucination (declines when unsure — best-in-class reliability vs Opus 5.5 59% / Astra 51%); AA index 25 (v5.0.1) is above class median but below the 30+ live leaders; AIME/GPQA trail the 96+/93+ frontier.
- **Context window: 83/100.** Native 1M (1,048,576) with LCR 78.3 (AA) — good retrieval, no long-context surcharge reported, 157 tok/s keeps long sessions practical; below the LCR 82+ tier (Sonnet 5, GPT-5.2) and no MRCR-1M evidence.
- **Multimodal: 84/100.** Native text+image+speech+video: MMMU-Pro 80.9 (AA) / >80 (Fireworks), **BabyVision 80.2** (exceptional), ZeroBench 50.0, SimpleVQA 73.6, OCRBench >80; frame-level video review demoed in DaVinci Resolve; no published audio/speech evals despite speech input — caps below the audio-proven omni tier.
- **Coding: 82/100.** SWE-V 84.3 (Fireworks validation), TB2.1 82.9 (beats GPT-5.6 Terra/Grok 4.5), DeepSWE 60.0, SciCode 58.4, SWE-Atlas QnA 58.0, real iOS shipping demo; **FrontierCode 2.0 6.2** exposes a sharp weakness on the hardest frontier repos; Design Arena 1301 mid-tier.
- **Cost efficiency: 82/100.** $1.25/$4.25 with 88% cache ($0.78 blended) and $2.02/task — expensive for open weights (AA), but 157 tok/s, 14.4s TTFT, 7.1 min/task and concise 90.6M tokens make it one of the quickest in class; free self-host (BF16/NVFP4, MLX desktop, Helion kernels) and Fireworks ZDR/LoRA add value; Muse Model License restricts some commercial use; ~17× costlier than mini-class on trivial flows.
- **Overall Score: 83.0/100.** Mean of the five quality dimensions (Cost excluded): (84+82+83+84+82)/5 = 83.0. The strongest US open-weights release for regulated agentic work (legal/finance/clinical #1s) with frontier-adjacent coding and vision — above Ember-1 (80.8) and MiniMax M3 (81.0), below hosted Muse Spark 1.1 (85.2) and the 88+ closed frontier; FrontierCode 2.0 6.2 and mid-pack live AA index are the main drags.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Meta research blog, Hugging Face repo/collection, Artificial Analysis live xhigh page, BenchLM, Fireworks day-0 post with Vals/Rogo results, Activepieces guide + own test); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: hallucination rate (AA 28.0 vs Fireworks 33% on Meta's API release); GPQA (89.7 Fireworks validation vs 89.0 AA); modalities (AA text+image+speech+video vs Activepieces "text and images"); AA index (25 rounded live vs 24.9 BenchLM carried — same run); HLE (61.0 vendor tools vs 43.9 AA); TB2.1 82.9 vendor harness vs FrontierCode 2.0 6.2 Cognition (different benchmarks, not averaged); HF raw model card gated (401) — card scores taken via BenchLM's citations.
- Reference URLs:
  - [Introducing Muse Spark Open — Meta AI Research](https://research.meta.ai/blog/muse-spark-open)
  - [Muse-Spark-Open-816B-A42B — Hugging Face](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Muse Spark Open (xhigh) — Artificial Analysis](https://artificialanalysis.ai/models/muse-spark-open)
  - [Muse Spark Open Benchmark Scores — BenchLM](https://benchlm.ai/models/muse-spark-open)
  - [Muse Spark Open on Fireworks — Fireworks AI blog](https://fireworks.ai/blog/meta-muse-spark-open)
  - [Muse Spark Open: Benchmarks and Cost (2026 Guide) — Activepieces](https://www.activepieces.com/blog/muse-spark-open-benchmarks-and-cost-2026-guide)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.