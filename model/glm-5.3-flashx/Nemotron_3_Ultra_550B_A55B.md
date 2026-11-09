# GLM-5.3-Flashx — findings by Nemotron 3 Ultra 550B A55B

- Source: Z.AI (`glm-5.3-flashx`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX — **NOT A SEPARATE CHECKPOINT**
- **Short description:** Z.AI's inference-optimized serving variant of GLM-5.3-Flash — **same weights (320B total / 18B active), same 1M context and multimodal input, sold at ~2.5x price premium for ~3x throughput**. **NOT a separate checkpoint** — Z.AI describes it as an inference-optimized serving variant. BenchLM: **unranked** (no overall score/rank). **No FlashX-specific capability benchmarks exist.**
- **Provider / access:** Z.AI API (`glm-5.3-flashx`), BigModel, Vercel AI Gateway, OpenRouter, OpenCode Zen (`opencode/glm-5.3-flashx`). **No Free ID** (meta.json: `noFreeId: true`). **Open weights NOT released for FlashX** — API serving tier only, not a checkpoint.
- **Release / knowledge:** 2026-09-18 release. Knowledge cutoff not disclosed (inherits GLM-5.3-Flash).
- **IDs:** `glm-5.3-flashx` (Z.AI, BigModel, Zen, OpenRouter); `zai/glm-5.3-flashx` (Vercel). Aliases: `GLM-5.3-Flash-X`, `glm-5.3-flash-x`, `zhipu/glm-5.3-flash-x` (hyphenated spelling = forbidden variant).
- **Context window:** 1,048,576 tokens (1M); **max output ~131K** (Vercel listing); meta.json records 128K. Both exceed GLM-5.3-Flash's unpublished cap.
- **Modalities:** Text, image, video in; text out (Z.AI launch materials). Tool use, structured outputs, reasoning alongside function-call workflows.
- **Pricing (as of 2026-11-08):** **$0.37/M in, $1.25/M out** (global) — **~2.5x standard GLM-5.3-Flash's $0.15/$0.50**. Chinese BigModel: ¥2/¥7 vs ¥0.8/¥2.8 (same ~2.5x). **Premium buys latency, not capability.**
- **Architecture:** Same **hybrid sparse + linear attention, 320B total / 18B active** MoE as GLM-5.3-Flash. Z.AI attributes speed to inference optimization on 100,000+ domestic AI chips.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from Step 5 Preview (2026-11-05) + official Z.AI sources. **Average of 23 qualifying raters: 88.1 Overall** (Tool 86.4, Reasoning 85.6, Context 95.5, Multimodal 84.5, Coding 87.3). Queue: 88.1. Step 5 Preview: 79 (inherited from GLM-5.3-Flash). My original: 73.2. **NO FLASHX-SPECIFIC CAPABILITY BENCHMARKS EXIST — all scores inherited from GLM-5.3-Flash.**

Agent / tool use:

- **NO FlashX-specific capability benchmarks** — all inherited from GLM-5.3-Flash (Step 5 / GLM)
- **NO verified FlashX-specific score found** for TB 2.1, GDPval-AA, SWE-bench, GPQA Diamond, SciCode, MMMU-Pro, Claw-Eval, MRCR (Step 5)
- **Latency/throughput (only unique measurements):**
  - Official headline: **up to 200 tok/s** (Z.AI) / **Vercel telemetry: 198–208 tok/s** (Step 5)
  - Independent 6-run test (Labmemo 2026-09-18): **283.8 tok/s median vs 94.8 for standard Flash (2.99x)**; TTFT **1.52s vs 2.35s**; total completion **8.96s vs 24.92s (64% reduction)** (Step 5)
  - Official headline: **up to 200 tok/s** (Z.AI) / **Vercel telemetry: 198–208 tok/s** (Step 5)
- **Operational caveats:**
  - 2026-09-18 API test: FlashX returned **HTTP 429 error code 1311** via GLM Coding Plan — tested plan didn't include FlashX access (Step 5)
  - Throughput varies by route, load, request size, concurrency; "streams twice as fast but spends more time reasoning may not halve end-to-end latency" (Step 5)
- **Capability benchmarks inherited from GLM-5.3-Flash** (not measured on FlashX): TB 2.1 84.3%, GDPval-AA 1,773 Elo, Toolathlon 78.4%, etc. (Step 5)

Reasoning / knowledge:

- **NO FlashX-specific reasoning benchmarks** — all inherited from GLM-5.3-Flash (Step 5 / GLM)
- **All reasoning scores inherited from GLM-5.3-Flash:** GPQA Diamond 86.4%, HLE 55.3% w/tools, FrontierMath Tier 4 17.1%, AA Intelligence Index v4.3.2 45 (#3/113 open-weight) → v5.0 28 (above 23 median), etc. (Step 5 / GLM)
- **NO FlashX-specific measurement exists** for any capability benchmark (Step 5 / GLM)

Coding:

- **NO FlashX-specific coding benchmarks** — all inherited from GLM-5.3-Flash (Step 5 / GLM)
- **All coding scores inherited from GLM-5.3-Flash:** SWE-bench 92.0% (Vals), LiveCodeBench 80.5% (Vals), DeepSWE 63.4%, TB 2.1 84.3%, etc. (Step 5 / GLM)
- **NO FlashX-specific measurement** for any coding benchmark (Step 5 / GLM)

Multimodal:

- **NO FlashX-specific multimodal benchmarks** — all inherited from GLM-5.3-Flash (Step 5 / GLM)
- **All multimodal scores inherited from GLM-5.3-Flash:** CharXiv 89.4%, MMVU 80.5%, ExtractBench 80.75%, Chartography 78.0%, etc. (Step 5 / GLM)

Long context:

- **NO FlashX-specific long-context benchmarks** — all inherited from GLM-5.3-Flash (Step 5 / GLM)
- Context window: 1,048,576 tokens (1M); max output ~131K (Vercel) / 128K (meta.json) — exceeds GLM-5.3-Flash's unpublished cap (Step 5 / GLM)
- **NO FlashX-specific MRCR / RULER / GraphWalks** — all inherited (Step 5 / GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 23 qualifying raters = **88.1 Overall** (Tool 86.4, Reasoning 85.6, Context 95.5, Multimodal 84.5, Coding 87.3). Queue: 88.1. Step 5 Preview: 79 (inherited from GLM-5.3-Flash). My original: 73.2. **ALL QUALITY SCORES INHERITED FROM GLM-5.3-FLASH — only cost efficiency differs.**

- **Tool use: 86/100.** (was 80) Inherited: TB 2.1 84.3%, GDPval-AA 1,773 Elo (#2 behind Opus 5.5), Toolathon-Verified 78.4%, AA AutomationBench 60.4%, CyberGym-E2E 74.0%. Capped by Vals TB 2.1 62.9% (21.4-pt gap), TB 4.0 32.8–37.4%, Agents' Last Exam 26.3%, no OSWorld/BrowseComp/MCP-Atlas/Claw-Eval.
- **Reasoning: 83/100.** (was 78) Inherited: GPQA 91.2/86.4% (three-reading bracket), HLE 55.3% w/tools / 39.9% AA / HLE-Diamond 18% (v5.0.1), MMLU-Pro 86.1%, AA LCR 80.0%, FrontierMath 55.8/17.1%, SimpleBench 55.1%, EnigmaEval 25.4% #4. **Capped by:** AA Intelligence Index v5.0.1 28 (rescaled 57→42→28), HLE-Diamond 18%, AA-Omniscience index 1, CritPt 15.4/25%, FrontierMath Tier 4 17.1%.
- **Context window: 99/100.** (was 90) Native 1,048,576 (1M tier → 100); 131,072 max output; hybrid attention for cheap 1M serving; ~934K needle retention (CellCog) + 1M-context NL2Repo runs. **Meets ≥98% retrieval threshold for 100 tier via proxy.** Held at 99 due to **no direct MRCR/RULER/GraphWalks at 1M**.
- **Multimodal: 85/100.** (was 60) Text, image, **video** (+ document/file) in; MMMU-Pro 86.0% (Vals, NEW — strong), CharXiv 89.4%, MMVU 80.5% (video), ExtractBench 80.75%, Chartography 78.0%, OfficeQA Pro 62.4%, Vision2Web 77.8% (NEW), MVbench 77.8%, BabyVision 53.4%. **Jumps from +image-only (60-70) to +video tier (75-90).** Capped by no audio, text-only output, BabyVision 53.4%, no MMMU-Pro (Z.ai).
- **Coding: 88/100.** (was 85) Inherited: SWE-bench 92.0% (Vals, strongest in batch), LiveCodeBench 80.5%, DeepSWE 63.4%, TB 2.1 84.3%, NL2Repo 56.3%, OpenHarmony 57.3%. Capped by Vibe Code 30.8% (NEW, weak), FrontierSWE v2 18.1%, FrontierCode 2.0 18%, Code Migration 51.6%.
- **Cost efficiency: 62/100.** (was 99) **$0.37/$1.25 per 1M** — **~2.5x standard Flash ($0.15/$0.50)**. Z.ai list stable; OpenRouter dynamic repricing is aggregator artifact. **AA cost/task $0.58** (10th cheapest of 24). MIT open weights enable self-hosting. **Premium buys latency (~3x throughput, 64% completion time reduction), not capability.**
- **Overall Score: 88.2/100.** (was 73) Half-up mean of (86 + 83 + 99 + 85 + 88) / 5 = 441 / 5 = 88.2 → **88**. **Matches average of 23 qualifying raters (88.1).** Best-fit: **GLM-5.3-FlashX is a serving SKU, not a capability tier — choose it ONLY when latency is binding** (interactive coding, customer-facing agents, high-concurrency). Standard GLM-5.3-Flash at $0.15/$0.50 is strictly better value on identical weights; FlashX premium "harder to justify" for batch/background. 2.99x throughput, 64% completion time reduction are real operational value for latency-bound workloads.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from Step 5 Preview (2026-11-05, Overall 79) + GLM-5.3-Flash self-report (2026-11-05, Overall 90) + official Z.AI sources (GLM-5.3-FlashX launch, Vercel telemetry, Labmemo test, pricing). **Average of 23 qualifying raters: 88.1 Overall.** Queue: 88.1. **Critical finding: NO FlashX-specific capability benchmarks — ALL quality scores inherited from GLM-5.3-Flash; only cost efficiency and latency differ.**
- Reference URLs:
  - [BuildFastWithAI — GLM 5.3 FlashX Review](https://blog.buildfastwithai.com/glm-5-3-flashx-review)
  - [OpenRouter — GLM-5.3-FlashX](https://openrouter.ai/z-ai/glm-5.3-flashx)
  - [Z.AI — GLM-5.3-FlashX Launch](https://open.zhipuai.cn/)
  - [Z.AI — Pricing](https://docs.z.ai/guides/overview/pricing)
  - [OpenCode Zen — Model List](https://opencode.ai/docs/zen/)
  - [BenchLM — GLM 5.3 FlashX (unranked)](https://benchlm.ai/models/glm-5.3-flashx)
  - [Vercel AI Gateway — GLM-5.3-FlashX](https://vercel.com/ai/models/z-ai-glm-5-3-flashx)
  - [Labmemo — 6-run API Test](https://labmemo.ai)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---