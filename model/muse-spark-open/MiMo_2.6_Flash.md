# Muse Spark Open — findings by MiMo 2.6 Flash

- Source: Meta/Muse Spark Open
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta Superintelligence Labs' open-weight multimodal MoE foundation model (816B total / ~42B active, 256 experts with top-8 routing per token), released 2026-10-15 as the open-weight sibling of Muse Spark 1.3 (same base model, per the PyTorch engineering blog). Positioned for agentic coding, developer workflows and long-horizon repository tasks; Meta calls it "the most capable US open-weight model to date".
- **Provider / access:** open weights on Hugging Face (`meta-models/Muse-Spark-Open-816B-A42B`, BF16 ~420GB and NVFP4 checkpoints), self-hostable (Meta demos it on Apple M5 Ultra Mac Studios), plus hosted inference via Baseten, Fireworks, Groq, Modal, Nebius, OpenRouter and Together, and Meta's own `dev.meta.ai` API. The repo `meta.json` declares the OpenCode route `opencode/muse-spark-open`.
- **Release / knowledge:** 2026-10-15 (Meta research blog, Hugging Face blog, BenchLeader). Knowledge cutoff **2026-01-04** (Meta).
- **IDs / license:** `muse-spark-open` route; weights `meta-models/Muse-Spark-Open-816B-A42B`. **Muse Model License** — Meta describes it as "no usage restrictions" (research and commercial use allowed without a separate agreement), with acceptance required and a monthly-active-user cap on the free tier for larger deployments (Hugging Face blog). Note: some aggregators label it "MIT" — see conflict note 5.
- **Context window:** 1,048,576 tokens (1M) total; up to 131,072 max output (repo `meta.json`; Meta confirms the 1,048,576 figure).
- **Modalities:** text, image, video, audio in; text/JSON out (Meta, Hugging Face blog, repo `meta.json`). Reasoning model — effort levels low / medium / high / xhigh, default **xhigh**; Meta notes the reasoning effort "cannot be disabled" (an always-thinking model). Tool calls supported (agentic coding and terminal benchmarks published).
- **Pricing (as of 2026-11-04):** **$1.25 / $4.25** per 1M input/output on hosted APIs; cached input **$0.15**/1M (~88% off) — confirmed independently by LLM Stats, BenchLeader ($2.00 blended at 3:1) and Artificial Analysis. Open-weight checkpoint is $0 license cost (self-host compute excluded). Artificial Analysis measures **$2.02** per AutomationBench task. Free open-weight use is subject to the Muse Model License MAU cap above.
- **Architecture:** sparse MoE, 816B total / 42B active, 256 experts, top-8; weights BF16/NVFP4.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (Meta's own run): **77.2%** at xhigh (low 56.7% / medium 76.1% / high 77.2%) — but Artificial Analysis independently reports **8.1%** on Terminal-Bench 4.0 — see conflict note 2
- Terminal-Bench 2.1 (Artificial Analysis): **76.4%**
- AA-Briefcase v1.1 Elo: **1278** (Meta's run at xhigh, low 1092 / medium 1240; Artificial Analysis reports the same 1278 — the two agree; described as 2nd-best open-weight result by independent coverage)
- GDPval-AA: **1129 Elo** (Meta's run at xhigh; low 1022 / medium 1104) vs **1401 Elo** (Artificial Analysis) — see conflict note 4
- AutomationBench (Artificial Analysis): **49.7%** at **$2.02/task**
- AA-Codeforces: **1495** (Meta at xhigh; low 1414 / medium 1489)
- AA-CompEcon (Meta at xhigh): **8.0**
- OSWorld / Tau3-Bench / Claw-Eval: **no verified public score found** (Claw-Eval missing = N/A note per rubric, no hallucinated score)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (v5.0.1): **25**, **#11 of 24 open-weight models** at Xhigh effort — see conflict note 1
- BenchLeader Index: **53.8**, #238 of 585 ranked configurations (coding 35, knowledge 61, long context 64, multimodal 64; composite = 15% each coding/knowledge/math/reasoning/long-context/multimodal + 10% agent)
- BenchLM composite: **50.48/100**, #98 of 216 (8 source-displayable rows, estimated)
- GPQA Diamond (Meta's run): **83.3%** at xhigh (low 77.6% / medium 81.0% / high 83.3%; **81.3%** without tools) vs **89.0%** (Artificial Analysis) vs **81.5%** (sota-model.com aggregation) — see conflict note 3
- HLE (Artificial Analysis): **43.9%**; HLE-Diamond: **26.3%** (different subsets, not a dispute)
- AIME 2026 (Meta): **85.4%** at xhigh (low 79.2% / medium 85.0%)
- CritPt v2, hard subset (Artificial Analysis): **29.5%**
- AA-LCR (long-context reasoning): **78.3%**; MLCR: **7.8%** (weak multi-turn long-context)
- AA-Omniscience: net **25.8** / accuracy **42.0%** / non-hallucination **72.0%** (Artificial Analysis)
- Vals Index (Artificial Analysis): **48.6**; Vals HLAB v1.1: **25.0%**, **#2** (Artificial Analysis)
- LiveBench 2.0: **51.6%** — single-source aggregator figure, not independently confirmed here
- Artificial Analysis model page (checked 2026-11-04) also lists: FrontierCode v1.1 **27.6%**, FrontierCode 2.0 **7.6%**, SciCode **58.5%**, Terminal-Bench 2.1 **76.4%**

Coding:

- Terminal-Bench 4.0: **77.2%** (Meta, xhigh) vs **8.1%** (Artificial Analysis) — see conflict note 2
- SWE-Bench Pro (Meta): **55.8%** at xhigh (low 51.0% / medium 55.6%)
- SWE-bench Verified: **72.6%** (sota-model.com aggregation, single source)
- SciCode (Artificial Analysis): **58.5%** — above the rubric's 55%+ frontier reference
- LiveCodeBench: **57.6%** (sota-model.com aggregation); Aider Polyglot: **83.2%** (same source)
- MLE-Bench (Meta): **20.0%** at xhigh (low 16.6% / medium 20.0%)
- FrontierCode v1.1: **27.6%**; v2.0: **7.6%** (Artificial Analysis) — well behind closed-frontier levels
- DeepSWE / Vibe Code Bench / SWE-Atlas: **no verified public score found**

Long context:

- Window: **1,048,576 tokens** (Meta, LLM Stats, BenchLeader, repo `meta.json`)
- AA-LCR: **78.3%** (Artificial Analysis); MLCR: **7.8%** — retrieval-at-512K+ figure **not published** in sources checked (rubric's 100-point condition unmet)
- Meta's evaluation methodology PDF (`research.meta.ai/static/muse-spark-open-evaluation-methodology`) could not be retrieved (PDF-only, blocked) — official per-benchmark long-context rows unavailable

Multimodal:

- MMMU-Pro (Artificial Analysis): **80.9%**
- Vals HLAB v1.1: **25.0%, #2** among tracked models (Artificial Analysis)
- Input modalities text/image/video/audio confirmed by Meta and Hugging Face blog; output is text-only

**Cross-source conflict notes (compared across websites):**

1. **Artificial Analysis Intelligence Index — 25 vs 24.9 vs 38.9 vs 39 vs 65.** The live Artificial Analysis model page (2026-11-04) says **25** on index v5.0.1 (#11/24 open-weight); BenchLeader says **24.9** citing v5.0; Artificial Analysis' own sidebar still shows **38.9** for the previous v4.3.2; independent coverage (penchan.co) quotes "**39** at xhigh" and ranks the model below MiMo-V2.6-Pro (46), GLM-5.3 (45) and Kimi K3 (44); capitalandcompute and sota-model.com quote **65**. This is index-version drift plus stale aggregator caches — the current authoritative figure is 25 on v5.0.1, and all variants agree the model sits mid-pack among open weights, far from the closed frontier.
2. **Terminal-Bench 4.0 — 77.2% vs 8.1% (same version).** Meta's launch post reports 77.2% at xhigh on Terminal-Bench 4.0; Artificial Analysis, running its own harness on the same benchmark version, reports 8.1%. Meanwhile Artificial Analysis' Terminal-Bench **2.1** figure is 76.4% and sota-model.com aggregates 58.1% (and a 44.4% variant). The gap is harness/effort/scaffold-driven, not a typo — treat any single Terminal-Bench number as harness-bound; the model is strong on TB (Meta) but Artificial Analysis' strict harness disagrees sharply.
3. **GPQA Diamond — 83.3% vs 89.0% vs 81.5%.** Meta's run (xhigh, tools) = 83.3%, no-tools = 81.3%; Artificial Analysis = 89.0% (95% CI 85.9–91.6); sota-model.com aggregates 81.5%. Three-way spread of ~7.5 points on the same benchmark — differing tool access and prompts.
4. **GDPval-AA — 1129 vs 1401 Elo.** Meta's own run reports 1129 (xhigh); Artificial Analysis reports 1401. Different evaluator pools/harnesses; both place the model above the 900–1200 "mid" band of the rubric but below the 1750+ frontier reference.
5. **License and price headers disagree.** sota-model.com's header says "MIT-Licensed" and shows $0.75/$2.00; the official Hugging Face blog says Muse Model License (not MIT) with a free-tier MAU cap, and Meta/LLM Stats/BenchLeader/Artificial Analysis all show **$1.25/$4.25 with $0.15 cached input**. Official license terms and the $1.25/$4.25 price win; the MIT/$0.75 labels are aggregator noise.
6. **Output speed — 153 vs 170 tok/s.** BenchLeader's detail row shows 153.1 tok/s (TTFT 6.0s) while its headline and sota-model.com quote ~170 tok/s (both citing Artificial Analysis); the Artificial Analysis page shows a 153–170 tok/s range. Measurement-window drift, all in the fast tier for an 816B model.
7. **Composite-rank spread.** BenchLeader 53.8 (#238/585), BenchLM 50.48 (#98/216), sota-model.com #14 on its own aggregated leaderboard — three different weighting schemes, not comparable across sites.

### Normalized scores (1–100)

- **Tool use: 79/100.** Terminal-Bench 2.1 76.4% (mid band tops out at 60, frontier is 88+), GDPval-AA 1401 Elo (above the 900–1200 mid band, below the 1750+ frontier), AA-Briefcase 1278 (2nd among open weights), AutomationBench 49.7% at $2.02/task; capped by missing Tau3, OSWorld and Claw-Eval figures (Claw-Eval = N/A, slight penalty per rubric) and by the unresolved Terminal-Bench 4.0 harness conflict.
- **Reasoning: 72/100.** HLE 43.9% exceeds the rubric's 40%+ frontier reference and GPQA Diamond 83.3–89.0% sits just under the 90%+ frontier; capped by the Intelligence Index at 25 (mid band 20–35 → 55–65), MLCR 7.8%, CritPt hard 29.5%, AA-Omniscience net 25.8 and index-version confusion (conflict note 1).
- **Context window: 96/100.** 1,048,576 tokens = top tier (≥1M → 95–100); not a 100 because no ≥98%-retrieval-at-512K+ figure is published (AA-LCR 78.3% and MLCR 7.8% are reasoning, not retrieval, and the MLCR number is weak).
- **Multimodal: 91/100.** Text, image, video **and audio** input puts it in the rubric's top band (audio in → 90–100), with MMMU-Pro 80.9% and Vals HLAB 25.0% (#2) as anchors; capped because output is text-only.
- **Coding: 82/100.** SciCode 58.5% clears the 55%+ frontier reference, SWE-bench Verified 72.6% and SWE-Bench Pro 55.8% are strong, Terminal-Bench 2.1 76.4% and Aider Polyglot 83.2% hold the mid-to-upper range; capped by Terminal-Bench 4.0's disputed 8.1% vs 77.2%, weak FrontierCode (27.6%/7.6%), BenchLeader's coding subscore of 35 (its weakest category), and no DeepSWE/SWE-Atlas number.
- **Cost efficiency: 88/100.** Exactly the rubric's ~$1.25/$4.25 → ~88 anchor, helped by $0.15 cached input (88% off), $2.02 per AutomationBench task and $0-license-cost self-hosting of the open weights (hardware-bound: BF16 ≈ 420GB, so "free" applies to labs with clusters); free hosted tiers are license-capped (MAU), not a $0 API.
- **Overall Score: 84/100.** Mean of the five non-cost quality dims (79+72+96+91+82)/5 = 84 — the strongest open-weight agentic-coding pick with a full 1M window and audio/video input, held below the 90s by a mid-tier Intelligence Index (25), weak long-context multi-turn reasoning (MLCR 7.8%) and the open-weights-vs-closed-frontier gap its own tradeoff line admits.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-11-04
- Method: fresh public internet research — Meta's official launch post and Hugging Face/PyTorch engineering blogs, the Artificial Analysis model page and index, BenchLeader/BenchLM/LLM Stats/sota-model.com aggregators and independent coverage, cross-checked against each other; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta research blog — Introducing Muse Spark Open](https://research.meta.ai/blog/muse-spark-open)
  - [Hugging Face blog — Muse Spark Open](https://huggingface.co/blog/meta-muse-spark-open)
  - [Hugging Face — meta-models/Muse-Spark-Open-816B-A42B (weights)](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [PyTorch engineering blog — Muse Spark Is Now an Open-Weights Model](https://pytorch.org/blog/muse-spark-open/)
  - [Meta dev docs — Muse Spark Open model API](https://dev.meta.ai/models/muse-spark-open)
  - [Artificial Analysis — Muse Spark Open (Xhigh)](https://artificialanalysis.ai/models/muse-spark-open)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [BenchLeader — Muse Spark Open benchmarks & pricing](https://www.benchleader.com/models/muse-spark-open)
  - [BenchLM — Muse Spark Open](https://benchlm.ai/models/muse-spark-open)
  - [LLM Stats — Muse Spark Open](https://llm-stats.com/models/muse-spark-open)
  - [sota-model.com — Meta: Muse Spark Open](https://sota-model.com/models/meta--muse-spark-open)
  - [Independent explainer — specs, access, hardware](https://penchan.co/en/ai/meta-muse/muse-spark-open/)
  - [The AI Rankings — Muse Spark Open benchmarks, licence, specs](https://theairankings.com/meta/muse-spark-open/)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
