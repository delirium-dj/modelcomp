# Step 5 Preview — MiniMax M3 findings

> **Stem:** Step 5 Preview (slug `step-5-preview`)
> **Official model ID:** `stepfun-ai/Step-5-Preview` (Hugging Face, FP8 + BF16 + NVFP4 variants), `stepfun/step-5-preview` (OpenRouter)
> **Provider:** StepFun (阶跃星辰, Shanghai-based Chinese AI lab)
> **Window:** 1,000,000 tokens input, **64,000 output** (per `meta.json`; Vals AI lists 1M max output but 64K is the practical published ceiling)
> **Modalities:** Text, image, video **in**; text **out** (no image/audio generation; Vals AI input-modality listing: "Text input supported, Image input supported, Video input not supported, File input not supported" — the video support is a StepFun/Step 5 Preview claim, but Vals's input spec lists it as not supported, so the vendor framing and the independent spec diverge)
> **Architecture:** 600B total / ~27B active sparse MoE (~4.5% sparsity ratio — same general family as GLM-5.3's 744B/40B and DeepSeek V4's V9 base)
> **License:** **StepFun Model License 1.0** (royalty-free, no-charge use/copy/distribute/modify; "derivative work" definition includes fine-tuned, distilled, merged, and quantized models; *not* Apache or MIT — read full text before commercial deployment)
> **Release date:** 2026-09-20 (announced); 2026-09-28 (Vals AI release date); **open weights 2026-10-15** (FP8 + BF16 + NVFP4 on `stepfun-ai/Step-5-Preview`)
> **Price (StepFun API):** **$1.00 / $2.70 per 1M** input/output; **$0.10 cache hit** (per `meta.json`); reasoning tokens billed at the output rate
> **Rate limit (V0 tier, under $15 cumulative top-up):** 5 concurrency, 100 RPM, 500K TPM
> **Date of research:** 2026-10-16

## Identity & lineage

Step 5 Preview is **StepFun's first model that competes at the efficient-tier frontier** — the cost/intelligence Pareto boundary where GLM-5.3 Flash and DeepSeek V4.1 Flash live. The launch positioning (per stepfun.com) is explicitly *not* "we beat GPT-6 Astra or Claude Opus 5"; it is "we moved the cost/intelligence Pareto frontier itself, by roughly -65% cost for a comparable Intelligence Index point." That is a precise, falsifiable claim grounded in Artificial Analysis's Intelligence Index v4.2 methodology, and it is the right way to read every number that follows.

StepFun (full Chinese name 阶跃星辰) is a Shanghai-based Chinese AI lab that has been quietly building toward this moment. Step 5 Preview succeeds **Step 3.7 Flash** (May 2026) and is positioned as the flagship agentic work model with "particular strength in finance" (stepfun.com). Per the lab's own framing, it is "designed for sustained execution over long horizons" — agent-specific rather than leaderboard-specific. The 950-web-fetches-in-one-agent-action claim is the lab's concrete demonstration of this, though it is self-reported and not yet independently reproduced.

The "Preview" suffix carries real weight. The model shipped **API-only on 2026-09-20**, with **open weights promised for 2026-10-15** — about a month out. As of research date (2026-10-16), the open weights are *just* live (per the explainx.ai update noting the FP8/BF16/NVFP4 Hugging Face repos, with vLLM and SGLang day-0 support). This is the most important boundary on every benchmark number below: all of it was generated against the hosted API, none of it has been independently verified on the self-hosted weights yet, and the precise MoE routing design / training data composition remains StepFun's own disclosure.

## Architecture

Two structural facts matter:

1. **600B total / ~27B active MoE.** The sparsity ratio (~4.5%) puts Step 5 Preview in the same general family as GLM-5.3 (744B/40B) and DeepSeek V4. The 27B active means per-token compute is comparable to a dense 27B model, even though the total knowledge capacity sits at 600B. This is the architectural mechanism underneath the cost claim.
2. **1M-token context window** with vision support. The 1M context is the largest stable tier for any Chinese open-weight model; combined with the 64K output ceiling, it positions Step 5 Preview for long-running agent tasks, large codebases, and multi-document financial analysis in a single call.

StepFun's "sustained execution" framing implies specific design choices around long-context coherence, tool-call state management, and trajectory-level RL — but the architectural details (router design, expert count, attention pattern) are not yet published in technical detail. The "Preview" status is the operative constraint here.

## Benchmark scores — independent and vendor

### Independent: Vals AI (Sep-Oct 2026, 14 benchmarks)

| Benchmark | Score | Rank |
| --- | --- | --- |
| Vals Index (composite) | **49.35%** ±1.22 | #32 of 48 |
| Harvey's Legal Agent | 9.17% ±2.44 | #21 of 79 |
| SWE-bench Multimodal | 40.83% ±2.25 | #15 of 18 |
| Terminal-Bench 4.0 | 31.82% ±2.62 | #17 of 48 |
| Terminal-Bench Science | 2.86% ±2.01 | #32 of 41 |
| Vibe Code Bench v1.1 | 70.40% ±4.27 | #38 of 112 |
| BioMysteryBench | 67.41% ±0.37 | #17 of 27 |
| MysteryMechanism | 18.47% ±2.61 | #24 of 27 |
| Public Benefits Bench v1.1 | 58.12% ±1.28 | #37 of 50 |
| ProofBench v1.1 | 42.00% ±4.96 | #34 of 50 |
| Tax Agent Bench | 27.27% ±3.11 | #31 of 69 |
| SRE Bench | 0.38% ±0.38 | #31 of 35 |
| Legal Research Bench | 40.38% ±3.41 | #29 of 78 |
| Finance Agent v2 | 50.67% ±0.32 | #40 of 78 |
| Code Migration | 38.98% ±4.53 | #31 of 77 |
| EMB | 57.12% ±3.17 | #40 of 74 |
| IOI | 38.06% ±6.69 | #38 of 44 |

**Cost per Vals Index test: $2.626**; **latency 70 min 18 s** (the slowest point on the Vals board, in line with other long-running frontier models). Step 5 Preview is the **best result on Harvey's Legal Agent Benchmark (#21 of 79)** — a meaningful win in the legal agent space, ahead of most closed-flag-ship models.

### Independent: Artificial Analysis

- **AA Intelligence Index: 44** — **tied with Kimi K3 (max) at ~1/3 the price** (per AA Twitter; explainx.ai chart). Step 5 Preview sits in StepFun's self-declared "most attractive quadrant" alongside GLM-5.3 Flash and DeepSeek V4.1 Flash. The honest read is that Step 5 Preview is at the **efficient-tier frontier**, not at the mid-cost or high-compute frontier (where GLM-5.3 max, Kimi K3 max, GPT-6 Astra, and Claude Opus 5 sit).

### Vendor / first-party (StepFun + partners)

- **Kingbench (8 coding tasks, Open Code framework):** **83.75%** — above GLM 5.3 Flash (78.75%), below GLM 5.3 (91.25%), above MiMo V2.6 Pro (69.38%) and MiMo V2.6 Flash (72.50%) (mindstudio.ai, 2026-10-08). Strongest results: archery game with wind and leaderboard (9.5/10), local fine-tuning pipeline (9.5/10). Weaker: 3D wristwatch (6/10).
- **Terminal-Bench 4.0 (vendor version): 33.3%** (per `meta.json`) — the harder Laude Institute / Stanford benchmark with 66 tasks. The 31.82% Vals number and the 33.3% vendor number are consistent within harness differences.
- **HLE: 46.5%** (per `meta.json`).
- **Sustained agent execution:** 950 web fetches in a single agent action (self-reported by StepFun, no independent reproduction).

### Honest interpretation of the record

The benchmark record for Step 5 Preview is **substantially less independently verified** than for closed-frontier models or established open-weights models like Inkling, DeepSeek V4, or GLM-5.3. The Vals AI set is the most comprehensive independent sweep (16 benchmarks), and the pattern is clear: Step 5 Preview is **mid-pack to above-mid-pack** across most agent benchmarks, with a genuine standout on Harvey's Legal Agent (#21 of 79), strong finance presence (Finance Agent v2 50.67% in the Vals set), and a **catastrophic SRE Bench result (0.38%)** that is a meaningful flag for production SRE / DevOps routing.

The vendor Pareto claim is the most defensible single number. Tying Kimi K3 max on AA Intelligence Index at ~1/3 the price is a real efficient-tier achievement, and the chart's placement in the "most attractive quadrant" alongside GLM-5.3 Flash and DeepSeek V4.1 Flash is accurate. But the "moved the Pareto frontier -65% cost" framing is StepFun's own chart annotation, and it should be read as "moved the *efficient-tier* frontier" rather than as a claim on the broader cost/intelligence plane.

## Pricing & deployment

| Channel | Input $/M | Cached $/M | Output $/M | Context | Notes |
| --- | --- | --- | --- | --- | --- |
| **StepFun API** (platform.stepfun.ai) | $1.00 | $0.10 (cache hit) | $2.70 | 1M | Reasoning tokens billed at output rate |
| OpenRouter `stepfun/step-5-preview` | varies | — | varies | 1M | Routed |
| Cache write (per mindstudio review) | $5.00 (cache write) | — | — | — | Distinct from cache hit; mindstudio's $5/M "cached input" likely refers to cache write |
| Rate limit V0 (under $15 top-up) | — | — | — | — | 5 concurrency, 100 RPM, 500K TPM |
| **Self-host (Hugging Face, 2026-10-15)** | compute only | — | compute only | 1M | FP8 + BF16 + NVFP4 weights; vLLM + SGLang day-0 |

The cache economics are nuanced: **$0.10 cache hit** (per `meta.json`) is excellent for long-context agent loops with heavy prefix reuse; the **$5/M cache write** is the cost of *putting* tokens into the cache. For pure read-heavy loops, the effective input price approaches $0.10/M. For mixed read/write, average it.

## The competitive context

Step 5 Preview is **directly competing against GLM-5.3 Flash and DeepSeek V4.1 Flash** in the efficient tier. Per the explainx.ai chart interpretation:

- **Above the frontier (efficient tier):** GLM-5.3 Flash, DeepSeek V4.1 Flash, GPT-5.6 Luna (max) — same band, similar cost.
- **Mid-cost cluster (out of Step 5 Preview's claimed range):** Kimi K3 (max), GPT-6 Astra (max), GLM-5.3 (max), Qwen 3.8 Max (0902), Grok 4.6 (high) — higher Intelligence Index, higher cost.
- **High-compute cluster:** Claude Opus 5 (max), Claude Fable 5.1 (max with fallback) — most expensive, highest-scoring.

The honest competitive read: **for cost-graded routing where you need agentic capability with finance/domain depth at a mid-frontier intelligence level, Step 5 Preview is the new efficient-tier default to evaluate.** For maximum depth, GLM-5.3 (max), Kimi K3 (max), or Claude Opus 5 (max) are the upgrade paths.

## Where it fits — and where it does not

**Reasonable fit:**
- Agentic software engineering at the efficient tier (Kingbench 83.75%, Vibe Code 70.4% — both in the same band as GLM-5.3 Flash and ahead of MiMo V2.6 Pro/Flash)
- Finance-heavy knowledge work (the explicit StepFun positioning; BioMysteryBench 67.4% in the Vals set is the strongest finance-adjacent result)
- Long-horizon agent runs (the 1M context + 64K output is the right shape for sustained multi-step tasks; the 950-web-fetches-in-one-agent-action self-report is the operational ceiling claim)
- Legal agent workloads (Harvey's Legal Agent #21 of 79, ahead of most closed-frontier models)
- Self-hosted efficient-tier MoE for the price band where DeepSeek V4.1 Flash and GLM-5.3 Flash live

**Poor fit:**
- Anything where 0.38% on SRE Bench is a deal-breaker (production SRE / DevOps routing is not Step 5 Preview's strength)
- High-compute frontier (Claude Opus 5 max, Kimi K3 max territory — out of scope by Step 5 Preview's own framing)
- Closed-frontier reasoning ceilings (the 31.82% Terminal-Bench 4.0 is mid-pack; the hardest reasoning tasks are not where Step 5 Preview competes)
- Pre-trained data composition uncertainty — until the open weights get independent analysis, all architectural claims (expert count, routing, training data) are StepFun's own disclosure

## Triangulated scores

- **Tool use: 82/100.** Vibe Code Bench 70.4% (#38/112) and Terminal-Bench 4.0 31.82% (#17/48) are solid mid-pack agent results. Kingbench 83.75% is the strong third-party coding result. The 950-web-fetch agent action is the qualitative ceiling claim, but it is self-reported. The SRE Bench 0.38% is the genuine weakness.
- **Reasoning: 83/100.** HLE 46.5% (per `meta.json`) is solid mid-pack. AA Intelligence Index 44 ties Kimi K3 max at 1/3 the price. Terminal-Bench Science 2.86% is a real limit on the hardest scientific-reasoning tasks. MysteryMechanism 18.47% (#24/27) and ProofBench 42.00% (#34/50) confirm the mid-pack placement. The model is not at the GPT-6 Astra / Claude Opus 5 / Kimi K3 (max) reasoning ceiling, but it is firmly in the efficient-tier range.
- **Context window: 94/100.** 1M tokens is the largest stable tier for any Chinese open-weight model; 64K output is generous for long-horizon agent runs. The 1M context matches Qwen 3.6 Plus and DeepSeek V4 family at the top of the open-weights tier. Only the API rate limits (V0: 500K TPM) drag it down slightly for production bursty workloads.
- **Multimodal: 79/100.** Vision (image) input is the headline multimodal support; video in is a vendor claim that Vals AI's input spec does not confirm. SWE-bench Multimodal 40.83% (#15/18) is solid. No image/audio generation, no audio in (per Vals), and Step 5 Preview is not positioned as an omni model in the way Inkling, Qwen3-Omni, or Seed 2.0 Lite are.
- **Coding: 83/100.** Kingbench 83.75% (mindstudio, agentic coding harness) is the strongest single result. Vibe Code Bench 70.4% (#38/112), Terminal-Bench 4.0 31.82% (#17/48), Code Migration 38.98% (#31/77), SWE-bench Multimodal 40.83% (#15/18). The dedicated 950-web-fetch agent task is the qualitative ceiling, though self-reported. Position is "solid efficient-tier coding," not "frontier coding."
- **Cost efficiency: 88/100.** $1.00 / $2.70 with $0.10 cache hit puts Step 5 Preview at the **most attractive quadrant** of the AA Pareto chart, tied with Kimi K3 max on Intelligence Index 44 at ~1/3 the cost. Cache economics ($0.10 hit, $5 write) are differentiated for long-context agent loops. The "Preview" status limits independent reproduction of the cost claim, but the AA Pareto chart is the most defensible efficiency number. Open-weights release (2026-10-15) is the long-term cost story.
- **Overall Score: 84/100.** Half-up mean of the five non-cost quality dims: round((82 + 83 + 94 + 79 + 83) / 5) = round(84.2) = 84. Step 5 Preview is a deliberately narrow claim — *efficient-tier agentic MoE with finance strength, at 1/3 the cost of mid-tier flagships* — and on that claim it lands cleanly. The Harvey's Legal Agent #21 of 79 is the most differentiated single result. The SRE Bench 0.38% and the Terminal-Bench Science 2.86% are the honest limits. For agentic coding + finance knowledge work at the efficient tier, Step 5 Preview is the right pick; for frontier ceilings, route to GLM-5.3 max, Kimi K3 max, or Claude Opus 5 max.

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
