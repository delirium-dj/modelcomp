# Muse Spark 1.1 — findings by Qwen 4 Max

- Source: Meta/muse-spark-1.1
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' July 9, 2026 upgrade of Muse Spark — a multimodal reasoning model built for agentic tasks with major gains in tool/computer use, coding, and multimodal understanding. Launch companion to Muse Image and the **first public preview of the Meta Model API**. Trained to orchestrate multi-agent systems (main agent plans/delegates, subagents execute/escalate), zero-shot generalizes to new native tools, MCP servers, and custom skills; actively manages its 1M context (remember/retrieve/compact). **Deprecated** per AA — Muse Spark 1.2 (then 1.3) succeeded it.
- **Provider / access:** Meta Model API (public preview at launch, OpenAI-compatible per Replit), Meta AI app / meta.ai ("Thinking" mode), OpenRouter (`meta/muse-spark-1.1`), LLM Gateway, kilo; partners Replit, Cline, Box, OpenClaw. Proprietary. AA tracks the **Xhigh** reasoning variant.
- **Release / knowledge:** Released 2026-07-09. Knowledge cutoff not stated in sources read. Safety: Advanced AI Scaling Framework — chem/bio, cyber, loss-of-control within safe margins; strong jailbreak/prompt-injection resistance, lower hallucination and sycophancy (vendor claims). Full posture in the Muse Spark 1.1 Evaluation Report.
- **IDs:** `muse-spark-1.1`; siblings Muse Spark (base), 1.2, 1.3, Spark Open; evaluation report at ai.meta.com/static-resource/muse-spark-1-1-evaluation-report.
- **Context window:** **1M tokens**, actively managed — remembers actions, retrieves from much earlier work, compacts while keeping critical steps. Vendor **MRCR 1M 54.1** (well above Gemini-class ~26, below Opus 4.6's 76); AA-LCR 77.7. No surcharge tier documented; 88% cache discount.
- **Modalities:** **Text, image, speech (audio), and video in; text out** (AA-confirmed; blog: inspects visual and audio, ultra-descriptive image/video captioning, visual-to-code; Replit: images, video, PDFs, built-in search with citations, parallel tool calling). CharXiv 88.4, BabyVision 76.3.
- **Pricing (as of 2026-11-12):** **$1.25 in / $4.25 out per 1M** (AA + LLM Gateway + kilo; uniform across hosts per third-party coverage), **88% cache discount**. AA cost-per-index-task N/A (deprecated). Performance: **187 tok/s**, TTFT 13.79s (Xhigh).
- **Architecture:** Proprietary, undisclosed; multimodal reasoning model with inference-time compute scaling ("Thinking"/effort levels up to xhigh); computer-use policy trained to script-vs-click and batch actions; harness-adaptive (planning mode, goal conditioning, subagent delegation, compaction).

### Raw benchmarks found

Vendor-reported (Muse Spark 1.1 Evaluation Report via BenchLM attribution):

- Agent/tool: MCP Atlas **88.1**, Toolathlon **75.6**, OSWorld-Verified **80.8**, WebArena-Verified **69.0**, DeepSearchQA **84.9**, TB2.1 **80.0**, Cybench **92.9**, JobBench **54.7**, GDPval-AA **1,375 Elo**, Finance Agent v2 57.2, CyberGym 59.0, OSWorld 2.0 **14.2**, ExploitGym **0.8**
- Coding: SWE-bench Pro **61.5**, DeepSWE **53.3**; Meta Internal Coding Bench "competitive with leading alternatives" (qualitative)
- Reasoning/knowledge: HLE w-tools **62.1**, HLE no-tools **52.2**, HealthBench Professional 59.3
- Multimodal/long-context: CharXiv **88.4**, BabyVision 76.3, MRCR 1M **54.1**

Independent runs:

- AA (Xhigh): live index **N/A** (deprecated); BenchLM carries historical **33.7** (version unstated — never compared with v5.0.1 indices); AA-HLE **46.2**, AA-GPQA **89.8**, AA-Omniscience Index **28.1** (accuracy 52.1, hallucination 50.0), AA-LCR **77.7**, CritPt **15.1**, GDPval-AA normalized **35.6%**, AA Coding **71.3**, AA Agentic **27.5**, AA-SciCode 58.8; 187 tok/s, TTFT 13.79s
- Vals AI: SWE-bench **82.0**, TB2.1 **69.3** (vs vendor 80.0 — harness gap labelled), LiveCodeBench **85.9**, GPQA-D **91.2**, MMLU-Pro **88.7**
- Other: Design Arena Website 1,267; BenchLM aggregate **65.44/100, #29 of 1026** (42/815 coverage, conservative per BenchLM)

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP Atlas 88.1, Toolathlon 75.6, OSWorld-V 80.8, DeepSearchQA 84.9, Cybench 92.9, zero-shot MCP/skill generalization and trained multi-agent orchestration — elite personal-agent capability; capped by OSWorld 2.0 **14.2**, ExploitGym 0.8, GDPval normalized 35.6%, AA Agentic 27.5, and Vals TB2.1 69.3.
- **Reasoning: 87/100.** HLE 62.1 w-tools / 52.2 no-tools (vendor — frontier-class), GPQA 91.2 (Vals) / 89.8 (AA), MMLU-Pro 88.7, HealthBench Pro 59.3, Omniscience 28.1 with 50% hallucination (best-in-class among its peers); capped by CritPt 15.1, AA-HLE 46.2 vs vendor 62.1 (tools/harness gap), and no FrontierMath/ARC rows published.
- **Context window: 86/100.** 1M actively managed with trained compaction/retrieval, MRCR 1M **54.1** (solid mid-pack deep retrieval), AA-LCR 77.7, 88% cache discount; deducted for retrieval well below Opus 4.6's 76 and no independent MRCR confirmation.
- **Multimodal: 84/100.** Text + image + audio + video in (AA-confirmed), CharXiv 88.4, BabyVision 76.3, visual-to-code and video-captioning strengths, perception-while-acting workflows (Marketplace agent demo); capped by no MMMU-Pro row and Design Arena 1,267 (mid-pack).
- **Coding: 83/100.** SWE-Pro 61.5, SWE-V 82.0 (Vals), TB2.1 80.0, LCB 85.9, AA Coding 71.3, SciCode 58.8, harness-adaptive with subagent delegation; capped by DeepSWE **53.3** (mid-pack vs 65–77 for coding-flagship peers), Vals TB2.1 69.3, and no FrontierCode/CursorBench evidence.
- **Cost efficiency: 85/100.** $1.25/$4.25 with 88% cache discount, 187 tok/s and 13.8s TTFT — strong price-performance for full-multimodal agentic work (well under the $2/$10 class); deducted for deprecated status (1.2/1.3 succeeded it at the same price point) and AA index/cost-per-task no longer computed.
- **Overall Score: 85.2/100.** Mean of the five quality dims (86+87+86+84+83)/5 = 85.2. Best-fit (historical): July–autumn 2026 personal/computer-use agents, multimodal workflow automation (video/audio inspection + browser action), and agentic coding at scale via the new Meta Model API; today prefer Muse Spark 1.3 — 1.1 remains notable for elite MCP Atlas/Toolathlon tool use and unusually good factuality (50% hallucination vs 80–96% for several peers).

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Meta's official launch blog fetched in full, the Muse Spark 1.1 Evaluation Report rows via BenchLM's source attribution, Artificial Analysis' live Xhigh page, LLM Gateway/kilo rate cards via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: TB2.1 80.0 (vendor) vs 69.3 (Vals) — harness gap; HLE 62.1 w-tools (vendor) vs 46.2 (AA) — tools/effort gap; GDPval-AA 1,375 Elo (vendor) vs 35.6% normalized (AA) — different metrics; AA Intelligence Index 33.7 historical/version-unstated vs live N/A (deprecated) — never compared with v5.0.1 indices. OSWorld-Verified 80.8 ≠ OSWorld 2.0 14.2 (different benchmark versions, both cited). Identity: Muse Spark 1.1 ≠ Muse Spark ≠ 1.2 ≠ 1.3 ≠ Spark Open; Muse Image is a separate media model launched the same week.
- Reference URLs:
  - [Introducing Muse Spark 1.1 — Meta AI](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/)
  - [Muse Spark 1.1 Evaluation Report — Meta AI](https://ai.meta.com/static-resource/muse-spark-1-1-evaluation-report)
  - [Muse Spark 1.1 (Xhigh) — Artificial Analysis](https://artificialanalysis.ai/models/muse-spark-1-1)
  - [Muse Spark 1.1 benchmark profile — BenchLM](https://benchlm.ai/models/muse-spark-1-1)
  - [Muse Spark 1.1 — OpenRouter](https://openrouter.ai/meta/muse-spark-1.1)
  - [Muse Spark 1.1 — LLM Gateway](https://llmgateway.io/models/muse-spark-1.1)
  - [Vals AI — Muse Spark 1.1 independent runs](https://www.vals.ai/models/meta_muse_spark_1_1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.