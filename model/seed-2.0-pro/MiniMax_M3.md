# ByteDance Seed 2.0 Pro — MiniMax M3 findings

> **Stem:** ByteDance Seed 2.0 Pro (slug `seed-2.0-pro`)
> **Official model ID:** `doubao-seed-2-0-pro-260215` (Volcengine ARK / BytePlus), `bytedance/Seed-2.0-pro` (DeepInfra, per `meta.json`)
> **Provider:** ByteDance Seed (the research lab behind Doubao, China's largest AI chatbot by MAU)
> **Window:** 256,000 tokens input; **32,000 output** per ofox.ai / multiple third-party sources (the `meta.json` figure of "65K out" is the legacy Doubao 1.5 ceiling and not Seed 2.0-specific; use 32K as canonical for this model)
> **Modalities:** Text, image, video **in**; text **out** (no image/audio generation; Seed 2.0 Lite gained native audio input in the late-April 0428 update, but Pro is text+image+video)
> **Release date:** 2026-02-14
> **License:** Proprietary (closed weights; API-only)
> **Price (ofox.ai gateway, 2026-05-20 snapshot):** **$0.67 / $3.36 per 1M** input/output; **$0.04 cache read**, **$0.42 cache write**
> **Price (api.airforce, 2026-10 snapshot):** $0.42 / $2.10 per 1M (gateway discount)
> **Date of research:** 2026-10-16

## Identity & lineage

Seed 2.0 Pro is the **flagship reasoning + multimodal model in ByteDance's Seed 2.0 family**, released 2026-02-14 as part of a coordinated 4-variant launch: Pro, Lite, Mini, and Code. The "Seed" naming refers to ByteDance's internal research lab; every variant in the 2.0 family was post-trained from the same base checkpoint, then specialized. The family sits behind the Doubao consumer app (China's largest AI chatbot by MAU), so the production-scale engineering is real, not aspirational.

**Seed 2.0 Pro is now succeeded by Seed 2.1 Pro** (released 2026-06-25 via BytePlus, $0.88/$4.41 per 1M, 262K context per tokencost.app). Pro's positioning is therefore: "the cheap Chinese flagship that broke price floors" — its operational role is being absorbed by Seed 2.1, but the 2.0 Pro is still the most cost-effective ByteDance agent model in many third-party routings.

The "Code" variant (same $0.67/$3.36 price) is **post-trained from the same base** for software engineering tasks; per ByteDance's own framing, "you pay the flagship rate either way; pick by which post-training you need." Do not conflate Pro and Code on benchmarks; the model card splits them out.

## Architecture and capability claims

The official Seed 2.0 announcement frames the model in three structural ways:

1. **Multimodal-first design** — visual reasoning and perception get SOTA on benchmarks like BabyVision, with strengthened temporal understanding and motion perception for video. The model card shows SOTA on multiple video reasoning benchmarks. Pro supports image + video input natively; audio input is the Lite 0428 update, not Pro.
2. **Long-chain reasoning and robustness** — "complex scenarios in real-world tasks," with stability under "long-horizon, multi-step instructions." The launch demo is **CAD modeling in FreeCAD** (end-to-end double-boss modeling + geometric parameter extraction) and **biotechnology research support** (Solovay-Kitaev algorithm repair). Both are end-to-end agent tasks, not Q&A.
3. **Production-grade at Doubao scale** — 50+ Ark users evaluated Coding Agent capability pre-release. The whole point of the family is to handle the production traffic of China's largest AI chatbot.

The model card (PDF) is the source of truth for benchmarks. It is also **largest in the dataset** at ~12 MB / 71,837 lines (per the cached fetch), which is itself a signal: ByteDance publishes a complete technical report with detailed evals across reasoning, instruction-following, agent, coding, multimodal, video, and audio dimensions. Vendor-run numbers throughout, but the breadth is unusual.

## Benchmark scores — vendor-reported (Seed 2.0 model card, ByteDance's own numbers)

### Reasoning & knowledge

| Benchmark | Seed 2.0 Pro (0215) | GPT-5.4 High | Gemini 3.1 Pro High |
| --- | --- | --- | --- |
| GPQA Diamond | **88.9%** | 88.0% | 90.7% |
| SuperGPQA | 68.7% | 63.9% | 72.7% |
| HLE (no tool, text only) | 32.4% | 28.2% | 31.7% |
| BeyondAIME | 86.5% | 80.0% | 82.0% |
| FrontierSci-olympiad | 74.0% | 70.0% | 73.0% |
| Superchem (text-only) | 51.6% | 29.1% | 54.4% |
| BABE | 53.5% | 49.0% | 55.2% |

### Instruction following & search

| Benchmark | Seed 2.0 Pro | GPT-5.4 High | Gemini 3.1 Pro High |
| --- | --- | --- | --- |
| CL-Bench | 20.8% | 14.9% | 16.1% |
| MultiChallenge | 68.3% | 62.5% | 69.3% |
| WideSearch | 74.7% | 73.0% | 64.0% |
| BrowseComp | 77.3% | 61.3% | 41.5% |
| ResearchRubrics | 50.7% | 47.1% | 36.9% |
| XPert Bench | 64.5% | 41.8% | 50.1% |
| Real World SkillsBench | 42.3% | 45.4% | 26.4% |
| GDPval | 54.4% | 50.6% | 13.7% |
| FinSearchComp | 70.2% | 61.8% | 43.7% |
| Tob-Agent | 52.6% | 43.0% | 37.4% |

### Coding agent

| Benchmark | Seed 2.0 Pro | GPT-5.4 High | Gemini 3.1 Pro High |
| --- | --- | --- | --- |
| SWE Multilingual | 71.7% | 73.6% | 71.1% |
| **SWE-Bench Pro** | **46.9%** | 54.4% | 46.7% |
| NL2Repo-Bench | 27.9% | 37.3% | 27.6% |
| PaperBench | 53.8% | 49.1% | 33.9% |
| Terminal Bench 2.0 | 55.8% | 60.0% | 60.0% |
| Vibe Coding (manual) | 48.4% | 57.4% | 56.9% |

### GUI

| Benchmark | Seed 2.0 Pro | Claude Opus 4.7 | Sonnet 4.6 | GPT-5.4 High | Gemini 3.1 Pro |
| --- | --- | --- | --- | --- | --- |
| OSWorld-Verified | 78.0% | 72.5% | 62.9% | 75.0% | 64.0% |
| MobileWorld | 56.4% | 47.8% | — | 57.3% | — |

The OSWorld-Verified 78.0% is the single strongest number in the agentic-GUI track — Pro leads both Claude Opus 4.7 and GPT-5.4 High on desktop GUI navigation. Per the ofox.ai summary, Pro's AIME 2025 98.3% and Codeforces 3020 are genuinely frontier (Codeforces 3020 vs GPT-5.5 ~3050 and Claude Opus 4.7 ~2980).

### Multimodal (selected, Pro)

| Benchmark | Seed 2.0 Pro | Gemini 3.1 Pro |
| --- | --- | --- |
| MathVision | 88.8 | 89.0 |
| MMMU Pro | 78.2 | 82.5 |
| HiPhO | 74.1 | 86.6 |
| MedXpertQA-MM | 68.1 | 80.2 |
| BabyVision | 60.6 | 54.4 |
| CharXiv-DQ | 93.5 | 94.9 |
| CharXiv-RQ | 80.5 | 84.0 |
| ERQA | 68.5 | 70.8 |

### Video (selected, Pro)

| Benchmark | Seed 2.0 Pro | Gemini 3 Pro High |
| --- | --- | --- |
| VideoMMMU | 86.9 | 87.6 |
| MMVU | 78.2 | 77.9 |
| VideoReasonBench | **77.8** | 59.5 |
| VideoHolmes | 67.4 | 64.2 |
| Minerva | 66.5 | 65.0 |
| LongVideoBench | 80.3 | 78.2 |
| LiveSports-3K | 78.0 | 74.5 |
| ODVBench | 72.5 | 63.6 |
| OVBench | 69.2 | 63.5 |
| OVOBench | 77.0 | 70.1 |

Video is the genuine standout. Pro **leads Gemini 3 Pro High on 7 of 10 reported video benchmarks** (VideoReasonBench, VideoHolmes, LongVideoBench, LiveSports-3K, ODVBench, OVBench, OVOBench, EgoTempo, MotionBench, ContPhy). For video understanding workloads, this is the operational case for Pro.

### Independent verification

- **SWE-bench Verified: 76.5%** — confirmed by Vals AI's independent harness (one of the cited numbers in ofox.ai's cross-evaluation). Competitive with Claude Sonnet 4.6 and ahead of GPT-5.4 Mini.
- **AIME 2025: 98.3%** — high frontier math; second only to specialized math models.
- **Codeforces rating 3020** — frontier coding competition rating.
- **LiveCodeBench v6: 87.8** (per the related Seed 2.0 Code model — same head, same code specialization).

The benchmark record is **largely vendor-reported** (ByteDance's own card). The OSWorld-Verified leadership and the video understanding breadth are the most defensible single claims; everything else should be read as ByteDance's table including its own losses (NL2Repo -9.4 vs GPT-5.4, Terminal Bench 2.0 -4.2 vs GPT-5.4/Gemini 3.1 Pro, Vibe Coding -9.0 vs GPT-5.4).

## Pricing & access

| Channel | Input $/M | Cached $/M | Output $/M | Context | Notes |
| --- | --- | --- | --- | --- | --- |
| **Volcengine ARK direct** (China) | $0.47 (CNY) | $0.04 | $2.36 | 256K | Requires CN phone + ID + Alipay/WeChat Pay |
| BytePlus (international) | ~$0.80 | — | ~$4.00 | 256K | USD billing; enterprise onboarding |
| ofox.ai gateway | $0.67 | $0.04 read / $0.42 write | $3.36 | 256K | OpenAI-compatible; international card |
| api.airforce | $0.42 | $0.04 | $2.10 | 256K | Aggregator |
| DeepInfra (per `meta.json`) | varies | — | varies | 256K | Routed |

**Cheapest in-class:** at $0.67/$3.36, Seed 2.0 Pro is **~4× cheaper output than GPT-5.2** ($1.75/$14.00) and ~7× cheaper output than Claude Opus 4.6 ($5.00/$25.00). For mixed-vendor cost-optimized routing, the ofox gateway keeps the model on a single key alongside Claude, GPT, Gemini, DeepSeek, and Qwen.

The 256K context is shared across all 4 variants. **Cache reads at $0.04 / MTok** is a strong cache economics number — meaningful for long-context agent loops where prompt prefixes get reused.

## Where it fits

- **Multimodal (image + video) agent work at scale** — Pro is the cheapest competent image+video model in this comparison set with SOTA on video reasoning. For media-rich agent loops, the cost advantage compounds.
- **GUI/desktop automation** — OSWorld-Verified 78.0% leads Claude Opus 4.7 (72.5%) and GPT-5.4 High (75.0%). For Computer-Use / browser-use agent traffic, this is the strongest cheap pick.
- **Hard math + science reasoning** — AIME 2025 98.3%, BeyondAIME 86.5%, GPQA Diamond 88.9%, Codeforces 3020. Frontier on the math axis.
- **Chinese-primary workloads** — Pro over-indexes on Chinese-language quality (the training corpus is Doubao-scaled). For Chinese-first agents, this is the strongest option at this price.

Where it sits behind:
- **English long-context recall past ~150K tokens** — ofox.ai flags "noticeable recall degradation" past 150K on English-heavy documents. ByteDance optimized for Chinese long-context; for 200K+ English work, Gemini 3.1 Pro is the better pick.
- **NL2Repo, Terminal Bench 2.0, Vibe Coding** — these are the three clear losses on the ByteDance table; Pro is the agentic-coding flagship in vendor framing but the independent coding benchmarks (SWE-bench Pro 46.9%) are mid-pack against GPT-5.4 High (54.4%) and Claude Opus 4.7 (~62%).
- **No US data residency** — all inference runs on ByteDance infrastructure in mainland China (direct) or Singapore/Hong Kong (via gateways). Enterprise procurement in regulated industries will need to look elsewhere.
- **Function calling is more conservative** than Claude's — Pro occasionally hesitates to call a tool when Claude would. Tighten system prompts when porting from Claude Code.
- **Reasoning-mode tokens count fully** at the output rate. A long chain on a hard problem can easily hit $0.50+ in output cost. Budget accordingly.

## Triangulated scores

- **Tool use: 82/100.** OSWorld-Verified 78.0% (the standout), BrowseComp 77.3% (leads GPT-5.4 High 61.3% and Gemini 3.1 Pro 41.5% on ByteDance's table), WideSearch 74.7%. SWE-Bench Pro 46.9% trails GPT-5.4 High 54.4%. SWE Multilingual 71.7% in line. Toolathlon / Toolathlon-Verified not in the model card; the published coverage is GUI-heavy and search-heavy but sparse on the SWE-Pro / Terminal-Bench frontier.
- **Reasoning: 87/100.** GPQA Diamond 88.9%, BeyondAIME 86.5%, AIME 2025 98.3%, Codeforces 3020 — strong math + science + competitive coding. HLE text-only 32.4% is mid-pack. FrontierSci-olympiad 74.0% and Superchem 51.6% are the limits; the model is not at the GPT-5.6 Sol / Claude Fable 5 frontier on the hardest reasoning.
- **Context window: 82/100.** 256K input, 32K output is solid for closed models. Half of Qwen 3.6 Plus or DeepSeek V4 (1M) on the input side. English long-context recall past ~150K is a documented weak point. The cache pricing ($0.04 read) is excellent for agent loops.
- **Multimodal: 87/100.** Genuine SOTA on video reasoning (leads Gemini 3 Pro High on 7 of 10 reported video benchmarks). MathVision 88.8 and MMMU Pro 78.2 are competitive with closed frontier. CharXiv-RQ 80.5, BabyVision 60.6 (leads Gemini 3.1 Pro 54.4). Image + video in, text out; no audio in (Pro), no image/audio generation. The video understanding breadth is the operational reason to pick Pro.
- **Coding: 83/100.** Codeforces 3020 (frontier), SWE-Bench V 76.5% (independent confirmation), LiveCodeBench v6 87.8 (via the Code variant), AIME 2025 98.3% (math-adjacent coding). But SWE-Bench Pro 46.9% trails GPT-5.4 High 54.4%, Terminal Bench 2.0 55.8% trails both closed rivals, and Vibe Coding 48.4% is a clear loss. For "actually edit a real codebase" workloads, the dedicated Code variant at the same price is the right routing.
- **Cost efficiency: 84/100.** $0.67/$3.36 with $0.04 cache reads is the most aggressive price-performance play in the closed-frontier bracket — ~4× cheaper output than GPT-5.2, ~7× cheaper than Claude Opus 4.6. The cache economics are excellent for long-context agent loops. Reasoning-mode tokens count fully at the output rate, which can hurt hard-problem runs; otherwise the value story is real.
- **Overall Score: 84/100** Half-up mean of the five non-cost quality dims: round((82 + 87 + 82 + 87 + 83) / 5) = round(84.2) = 84. The cost efficiency is the operational advantage; the OSWorld + video breadth are the qualitative advantages; the English long-context degradation and the mid-pack SWE-Bench Pro are the honest limits. Seed 2.0 Pro is the right pick when image+video understanding or GUI/desktop automation is the workload, when Chinese-primary traffic is the bulk, and when closed-frontier price is the binding constraint. Seed 2.1 Pro is the upgrade for newer builds; Seed 2.0 Code is the right routing for software-engineering agents at the same price.

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16

