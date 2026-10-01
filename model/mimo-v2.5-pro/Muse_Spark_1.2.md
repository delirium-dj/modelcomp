# MiMo V2.5 Pro — findings by Muse Spark 1.2

- Source: Xiaomi/MiMo V2.5 Pro (`xiaomi/mimo-v2-5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's most capable open-weights flagship MoE (1.02T total / 42B active) with hybrid sliding-window + global attention and 3-layer MTP for efficient 1M-context agentic trajectories spanning thousands of tool calls. Built for demanding software engineering and long-horizon tasks with token-efficient frontier-tier performance.
- **Provider / access:** Xiaomi via HuggingFace `XiaomiMiMo/MiMo-V2.5-Pro` (MIT open-weights), ModelScope, API Platform/AI Studio (`mimo-v2.5-pro`). OpenRouter `xiaomi/mimo-v2.5-pro`.
- **Release / knowledge:** 2026-04-27 (Xiaomi announcement; HuggingFace release 2026-04-27, Base 256K variant also)
- **IDs:** `xiaomi/mimo-v2-5-pro` (no Free ID on Zen — paid only)
- **Context window:** 1,048,576 (1M) for Pro (Base 256K) — verified via Xiaomi release page, HuggingFace, Artificial Analysis 1M. Max output 1M (same window). Pre-training 27T tokens native 32K, extended to 1M.
- **Modalities:** text-only (Pro: text in; text out; no image/audio/video per curated meta and Xiaomi docs) — reasoning yes (hybrid thinking via MTP); tool calls yes (thousands-tool-call agentic coherence); JSON mode via tool scaffolds
- **Pricing (as of 2026-04-27):** ~$0.435 in / $0.87 out per 1M (Xiaomi official; OpenRouter $0.3045/$0.609 avg paid; GMICloud $0.304/$0.609) — paid only, no free tier; 256K–1M doubled $0.87/$1.74 on legacy Xi pricing but now unified $0.435/$0.87 with free cache write promos; Token Plan credits available
- **Architecture:** MoE 1.02T total / 42B active, 385 experts? Actually 384 routed experts + 1 dense layer, top-8 per token, 70 layers (69 MoE +1 dense), 128 heads/8 KV GQA, hybrid attention SWA:GA 6:1 with 128 window (KV-cache ~7× reduction), 3-layer MTP dense FFNs tripling throughput; FP8 mixed precision (E4M3), 27T pre-train

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1,581 Elo** vendor-reported (Xiaomi, VentureBeat 2026-04-27; vs Kimi K2.6/GLM 5.1) / **GPT? 34.3% normalized** on Artificial Analysis open-router sheet
- ClawEval Pass^3: **63.8–64%** (Xiaomi 63.8% using ~70K tokens/trajectory — 40–60% fewer than Opus 4.6/Gemini 3.1 Pro/GPT-5.4) / VentureBeat quotes upper-left frontier efficiency
- Terminal-Bench Hard: **43.2%** (Artificial Analysis via OpenRouter sheet) / Terminal-Bench 2.1 suite frontier context but no Lite version for Pro separately
- τ²-Bench Telecom: **94.2%** reasoning mode (Artificial Analysis via OpenRouter/TheModelBeat) / 72.5% non-reasoning
- Toolathon / MCP-Atlas: **no verified public score found** for Pro on those harnesses (MiMo Coding Bench internal suite is the vendor agentic proxy)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (τ²-Telecom is the published agentic proxy)

Reasoning / knowledge:

- GPQA Diamond: **66.7%** vendor base 5-shot (HuggingFace table MiMo-V2.5-Pro Base vs Kimi-K2 48.1%) / **86.6%** Artificial Analysis reasoning mode (OpenRouter sheet) / 76.2% non-reasoning
- HLE: **35.7%** reasoning (Artificial Analysis, TheModelBeat) / 14.8% non-reasoning; no-tools vs with-tools not split by vendor
- BBH: **88.4** 3-shot (HuggingFace base vs Kimi 88.7), MMLU **89.4** 5-shot (base vs DeepSeek 90.1), MMLU-Redux **92.8**, MMLU-Pro **68.5** (base)
- Artificial Analysis Intelligence Index: **26.4** (OpenRouter), **26** (Artificial Analysis) — well above median 17; Coding Index **60.2**, Agentic Index **22.7**
- LCR / MLCR (AA-LCR): **79.7%** reasoning mode (Artificial Analysis) / 41.7% non-reasoning / HuggingFace GraphWalks: **0.56 BFS / 0.92 Parents at 512K**, **0.37 / 0.62 at 1M** (Xiaomi long-context eval; V2 Pro collapses to 0.00 at 1M)
- CritPt: **4.0%** reasoning (Artificial Analysis) / 1.1% non-reasoning
- Omniscience: **22.4% accuracy, 75.3% non-hallucination rate** reasoning; BenchLeader confirms Instruction Following 77 strongest, Maths 43 weakest
- IFBench: **79.9%** reasoning / 42.7% non-reasoning

Coding:

- SciCode: **50.6%** reasoning (Artificial Analysis) / 46.8? BenchmarkList prior
- LiveCodeBench v6: **39.6%** 1-shot (HuggingFace base vs DeepSeek n/a, Kimi 26.3)
- SWE-Bench AgentLess: **35.7%** 3-shot (HuggingFace vs Kimi 28.2)
- SWE-bench Verified / SWE-Pro / DeepSWE / Vibe: **no verified public score found** for Pro on those specific harnesses (ClawEval/MiMo Bench are vendor coding proxies)
- Design Arena Elo: **~1277–1286** across code/web (OpenRouter Design Arena)
- HumanEval+: **75.6%** 1-shot, MBPP+ **74.1%** 3-shot (HuggingFace base)

Long context:

- GraphWalks **0.56/0.92 at 512K, 0.37/0.62 at 1M** BFS/Parents (Xiaomi) plus AA-LCR 79.7% reasoning — **no independent MRCR/RULER 1M needle from external harness** beyond these

### Normalized scores (1–100)

- **Tool use: 80/100.** ClawEval 63.8% at ~70K tokens (token-efficient frontier), τ²-Bench Telecom 94.2%, GDPval 1581 Elo, and thousand-tool-call coherence support strong agentic tool use; capped below 90 by sub-50 Terminal Hard 43.2% and missing Tau3/GDPval-AA cross-harness.
- **Reasoning: 79/100.** GPQA 86.6% reasoning (66.7% base 5-shot) with HLE 35.7% and BBH 88.4 / MMLU 89.4 place it mid-frontier for open-weight; CritPt 4.0% and non-reasoning HLE 14.8% cap it below closed frontier >85.
- **Context window: 92/100.** 1M verified (Base 256K) with hybrid SWA 6:1 + MTP preserving coherence to 1M (GraphWalks 0.37/0.62 at 1M vs predecessor 0.00) and AA-LCR 79.7% — top open-weight long-context; capped below 100 by 1M-native degradation vs perfect needle 100% models.
- **Multimodal: 15/100.** Text-only per curated meta and Xiaomi Pro spec (no image/audio/video in for Pro) — text-only anchor (template: 15 if text-only).
- **Coding: 78/100.** SciCode 50.6%, LiveCodeBench 39.6%, AgentLess 35.7%, HumanEval+ 75.6% with open-weight Coding Index 60.2 map to solid coding tier; capped by no SWE-bench Verified/LiveCodeBench frontier numbers and Design Arena mid-tier Elo.
- **Cost efficiency: 78/100.** Paid ~$0.435/$0.87 — highly competitive open-weight pricing (blended $0.653/M, well below $3/$15 frontier), plus MIT open-weights local-run savings; capped below free-tier by still-paid API.
- **Overall Score: 69/100.** Mean of the five non-cost dims (80+79+92+15+78)/5 = 68.8 → 69; best-fit as token-efficient open-weight 1M agentic coding pick for long-horizon tasks — escalate to multimodal or higher-reasoning closed models for image/video needs or maximal HLE.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Xiaomi mimo.xiaomi.com MiMo-V2.5-Pro release 2026-04-27, HuggingFace XiaomiMiMo/MiMo-V2.5-Pro, Artificial Analysis 26/26.4 Index, OpenRouter bench sheet, VentureBeat, LLMBoard, BenchLeader, TheModelBeat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
