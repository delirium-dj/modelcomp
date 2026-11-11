# Muse Spark 1.2 — findings by Qwen 4 Max

- Source: Meta/muse-spark-1.2
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 (Meta Model API)
- **Short description:** Meta's mid-tier agentic/coding model (Aug 5, 2026), launched alongside **Muse Code** (beta), a terminal coding agent it powers. Successor to Spark 1.1 (Jul 9) and predecessor to Spark 1.3 (Sep 2, which jumped DeepSWE 59.3→75.4 and added 98.5 MRCR). Solid general agent/coding at a low price: Terminal-Bench 2.1 **82.9**, SWE-bench (Vals) **86.6**, GPQA-Diamond **90.4**, VulcanBench v3 **87.0**; but long-horizon coding is weak (DeepSWE **59.3**, FrontierSWE v2 **12.0**) and the AA Intelligence Index is **39.6**. BenchLM **65.35/100, #30 of 1020** (28/812 coverage — conservative).
- **Provider / access:** Meta Model API (sole tracked provider; OpenAI-SDK-compatible), meta.ai playground, Muse Code terminal agent, OpenRouter (`meta/muse-spark-1.2`). Proprietary, hosted-only. **Data-use note:** the standard API may use prompts/completions to improve Meta's products; a discounted **contributor tier** (~$0.10 in / $0.20 out) exists in exchange for data sharing and is excluded from standard price comparisons.
- **Release / knowledge:** Released 2026-08-05 (llm-stats + official research.meta.ai blog). Knowledge cutoff not stated in the sources read. Spark line supports active context management (remembers actions, retrieves earlier context).
- **IDs:** `muse-spark-1.2`; siblings Spark 1.1, Spark (base), Spark 1.3, Spark Open. Family: Muse Spark (Meta). Distinct from the Muse Wonder / Ember / Glimmer lines.
- **Context window:** **1M tokens input / 131.1K output** (llm-stats). Cached input $0.15/M (12% of input). AA-LCR **79.0%**. TTFT p95 **1.79s**, output ~54 c/s — fast. No long-context surcharge documented.
- **Modalities:** Text + image input, text output (llm-stats). Design Arena Website **1310** (OpenRouter). No video/audio; no published MMMU-Pro/CharXiv.
- **Pricing (as of 2026-11-11):** **$1.25 in / $4.25 out** per 1M, cached input **$0.15** (Meta Model API standard). Contributor/data-sharing tier ~$0.10/$0.20 (excluded from standard comparisons). Proprietary license.
- **Architecture:** Proprietary; not disclosed. Model page: `developer.meta.com/ai/models/muse-spark/`. Reasoning model.

### Raw benchmarks found

Vendor (Meta model page) + independent runs (BenchLM Nov 10 profile; AA/Vals/Proximal/VulcanBench/Cursor/OpenRouter as cited):

- Agentic: Terminal-Bench 2.1 **82.9** vendor (AA **80.1**, Vals **69.7** — three harnesses); GDPval-AA **1631** vendor / AA normalized **48.6%**; AA Agentic Index **44.0**; AA EnterpriseOps-Gym **47.3**; MazeBench 0% (ASCII)
- Coding: DeepSWE **59.3** (vendor); SWE-bench (Vals) **86.6**; VulcanBench v3 **87.0** (effort study); AA-SciCode **57.4**; AA Coding Index **72.2**; FrontierSWE v2 **12.0** (Proximal — very weak on ultra-long-horizon); TB2.1 82.9
- Reasoning/knowledge: AA-GPQA Diamond **90.4**; AA-HLE **45.5**; AA Intelligence Index **39.6** (version unstated); CritPt **17.7**; AA-Omniscience net **27.2** (accuracy 45.4, hallucination 33.3); MMLU-Pro (Vals) **88.3**
- Long context: AA-LCR **79.0**
- Multimodal: Design Arena Website **1310** (OpenRouter)
- Safety (prior independent run): Gray Swan IPI ASR@15 **24.2** (moderate prompt-injection susceptibility)
- BenchLM aggregate **65.35/100, #30 of 1020** (28/812). Family: Wonder Full 69.07, Spark 1.1 65.44, Wonder 63.03, Spark 59.95, Ember 56.29, Spark Open 51.16, Glimmer 30B 32.62; Spark 1.3 not computed.

### Normalized scores (1–100)

- **Tool use: 83/100.** TB2.1 82.9 (AA 80.1), GDPval-AA 1631, EnterpriseOps-Gym 47.3 and the Muse Code agent make it a capable mid-tier agent; capped by AA Agentic 44.0, GDPval normalized 48.6%, Vals TB2.1 69.7 and MazeBench 0 — below the Wonder/Opus frontier on business workflows.
- **Reasoning: 82/100.** GPQA-Diamond 90.4, MMLU-Pro 88.3 and Omniscience net +27.2 (33.3% hallucination) are solid; capped by AA-HLE 45.5, AA index 39.6 and CritPt 17.7 — knowledge breadth and hard physics reasoning trail the frontier.
- **Context window: 91/100.** 1M input / 131K output, 12% cache reads, active context management, fast 1.79s TTFT and AA-LCR 79.0; capped by unexceptional long-context retrieval (no MRCR published for 1.2, unlike 1.3's 98.5) and no MLCR figure.
- **Multimodal: 72/100.** Text+image input with Design Arena 1310; capped by the image-only ceiling and no published MMMU-Pro/CharXiv/video or grounded-vision benchmarks.
- **Coding: 82/100.** SWE-bench (Vals) 86.6, TB2.1 82.9, VulcanBench v3 87.0, SciCode 57.4 and Muse Code integration; capped hard by DeepSWE 59.3 and FrontierSWE v2 **12.0** — long-horizon/hard-repo engineering is well below the frontier (Spark 1.3 later fixed much of this).
- **Cost efficiency: 87/100.** $1.25/$4.25 with 12% cache reads and 1.79s TTFT — cheap for a 1M-context agentic model; a ~$0.10/$0.20 contributor tier exists but requires data sharing (excluded from standard comparisons, privacy trade-off). Anchored between $0.75/$3.75→95 and $2/$10→80.
- **Overall Score: 82.0/100.** Mean of the five quality dims (83+82+91+72+82)/5 = 82.0. Best-fit: cost-sensitive terminal coding agents (Muse Code), general agentic automation and high-throughput 1M-context work where frontier long-horizon coding isn't required; a solid mid-tier Aug-2026 model, clearly superseded by Spark 1.3 (DeepSWE 75.4, MRCR 98.5, free tier) and outclassed on reasoning/coding depth by the Wonder/Opus/Fable frontier.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (BenchLM's sourced Nov 10 profile, llm-stats' full rate card/specs read live, Meta's official launch blog and developer model page via search snippet, and WebSearch corroboration); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: Terminal-Bench 2.1 vendor **82.9** vs AA **80.1** vs Vals **69.7** (three harnesses); GDPval-AA vendor 1631 vs AA normalized 48.6%; pricing standard **$1.25/$4.25** vs a data-sharing **contributor tier ~$0.10/$0.20** (llm-stats marks it "excluded from standard comparisons" — not averaged into the cost score). AA Intelligence Index 39.6 is version-unstated and not cross-compared with other models' labelled versions. FrontierSWE v2 (12.0) ≠ DeepSWE (59.3) ≠ SWE-bench Verified (86.6); TB2.1 ≠ TB4.0. Gray Swan IPI 24.2 is a prior independent prompt-injection run. Identity: Muse Spark 1.2 ≠ 1.1 ≠ 1.3 ≠ Spark base ≠ Spark Open; superseded mid-tier model scored on its own documented capability.
- Reference URLs:
  - [Introducing Muse Code and Muse Spark 1.2 — Meta research blog](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2)
  - [Muse Spark model page — Meta developer portal](https://developer.meta.com/ai/models/muse-spark/)
  - [Muse Spark 1.2 benchmark profile — BenchLM](https://benchlm.ai/models/muse-spark-1-2)
  - [Muse Spark 1.2 Benchmarks, Pricing & Context Window — llm-stats](https://llm-stats.com/models/muse-spark-1.2)
  - [Muse Spark 1.2 — Artificial Analysis](https://artificialanalysis.ai/models/muse-spark-1-2)
  - [Muse Spark 1.2 — Vals AI](https://www.vals.ai/models/meta_muse_spark_1_2)
  - [Muse Spark 1.2 Contributor API: Performance, limits and risks — GingerLabs](https://gingerlabs.ai/blog/muse-spark-1-2-contributor-api-performance-limits-and-risks)
  - [FrontierSWE v2 leaderboard — Proximal](https://www.frontierswe.com/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.