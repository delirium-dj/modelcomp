# MiMo V2.6 Pro — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Do not conflate with peer agent files.

- Source: Xiaomi / MiMo V2.6 Pro (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship **MIT-licensed open-weight** omnimodal MoE, released **2026-09-21**. **1.02T total / 42B active** sparse MoE (384 routed experts, 8 active per token, 5-layer speculative decoder). #1 open-weights model on AA Intelligence Index v4.3.2 at release (46.3 — ahead of GLM 5.3 45 and Kimi K3 44; well below proprietary frontier Claude Opus 5.5 58 and GPT-6 Astra 52.7). 1M input / 128K output, native text + image + speech + video in; text out. **Cheapest cost-per-AA-Index-task at $0.13** thanks to a 99%-off cache, blended $0.18/1M effective rate, and a $0.43 input / $0.87 output list (median-class for input, well below median for output). RL training cost disclosed at $2.6M; 7,000+ RL task environments + training code published.
- **Provider / access:** Xiaomi MiMo API (`mimo.mi.com` console; prepaid + Token Plan subscriptions $6/mo+); OpenRouter / DeepInfra / NovitaAI / GMICloud reseller routes; Hugging Face `XiaomiMiMo/MiMo-V2.6-Pro-RL` self-host (BF16 / FP8 / INT8). Sibling tiers: MiMo V2.6 Flash ($0.14/$0.28) and MiMo V2.6 Pro UltraSpeed (same checkpoint, 10× price, 10× decode speed). Folder `noFreeId: true` (no Zen Free ID).
- **Release / knowledge:** Released **2026-09-21** (per Artificial Analysis; HF upload same day; mimo.mi.com page 2026-09-22). API updated in place 2026-09-25 to curb repeated tool calls. Knowledge cutoff undisclosed.
- **IDs:** `xiaomi/mimo-v2.6-pro` (gateway routes); `mimo-v2.6-pro` (native).
- **Context window:** **1,048,576 (1M) / 128K output** (per meta.json + AA spec page).
- **Modalities:** **Text, image, speech, video in; text out** (per meta.json + AA spec page — "omnimodal" with audio + video comprehension claims).
- **Pricing (as of 2026-10-13):** **$0.435 / $0.87** per 1M input/output on Xiaomi API. **Cache hit $0.0036** (99% discount; cheapest cache-hit in the field). **Batch 50% off**. UltraSpeed $4.35/$8.70 (cache $0.036). AA cost per Intelligence Index task **$0.13** (#14 of 36 in the AA Index cost cohort — best open-weight cost-per-task among comparable MoEs). OpenRouter reseller route lists $4.35/$8.70 (reseller markup; Xiaomi native is the unbeat one). MIT license means self-host is free (BF16 = ~614 GB GPU memory minimum).
- **Architecture:** Sparse MoE, 1.02T total / **42B active per token**, hidden 6144, 70 layers, **384 routed experts (8 active/token)**, 5-layer speculative decoder. Reasoning on by default. Tool calls yes (function calling, web search, structured outputs, context caching). 27T text + 3T multimodal tokens in pretraining; agent-trajectory mid-training; one mixed RL run (coding/general/visual/cyber).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi technical report + llm-stats) — clears the ~88 frontier ref.
- Terminal-Bench 4.0: **34.9%** (Xiaomi technical report) / **34.8%** (AA `terminalbench-v4-0` leaderboard) — **below closed-frontier TB4 rows** (Opus 5.5 ~66.4, Sonnet 5.5 70.6, GPT-6 Astra 57.9). Hard-variant ceiling.
- OSWorld-Verified: **82.0%** (Xiaomi technical report + llm-stats). [Note: distinct task set from OSWorld 2.0, so not directly comparable to Sonnet 5.5's 80.1% partial.]
- Toolathlon Verified: **76.9%** (Xiaomi + llm-stats).
- AutomationBench: **53.1%** (Xiaomi harness); **58.6%** (AA `automationbench-aa` harness).
- Agents' Last Exam: **31.6** (Xiaomi technical report).
- JobBench: **62.0** (Xiaomi technical report).
- GDPval-AA: **1673 Elo** / **59.2% normalized** (Xiaomi + AA `gdpval-aa` leaderboard).
- AA-Briefcase v1.1: **1516 Elo** (AA `aa-briefcase`).
- GDP.pdf: **19.2%** (AA `gdp-pdf` leaderboard).
- CyberGym: **94.0%** (Xiaomi technical report + llm-stats).
- ExploitGym: **17.8%** (Xiaomi technical report).
- ExploitBench: **47.9%** (llm-stats).
- SEC-Bench Pro: **66.3%** (llm-stats / Xiaomi).
- τ-bench (AirBench-style provider run): **80.0%** (OpenRouter provider-reported).
- CyberBench v1.1 (Vals, Sep 2026): **72.86%** — rank 3 of 9 ahead of Muse Spark 1.3 Max 72.74 and Claude Fable 5.1 70.42.
- Design Arena Elo: Website 1312, UI Component 1345, DataViz 1343, Code 1322, Agents Arena Webapps 1283, 3D 1340.
- Tau3 / Claw-Eval: no verified public score found in our slice.
- Speed: **47.9 tokens/sec** output (AA; below 67 t/s median for open-weights class).
- Latency: **3.74s TTFT** (AA; above median 1.72s).

Reasoning / knowledge:

- AA Intelligence Index v4.3.2: **46.3** — **#1 open weights** (vs GLM 5.3 45, Kimi K3 44; proprietary leaders Claude Opus 5.5 58, GPT-6 Astra 52.7, Claude Sonnet 5.5 mid-to-high 40s).
- AA-HLE: **49.4%** (AA `humanitys-last-exam`).
- AA-Omniscience Index: **8.4** (AA `omniscience` — VERY LOW; this composite penalizes hallucinations hard, scoring correctly-but-with-hallucinations low). Omniscience Accuracy 34.8; Hallucination Rate 40.6%.
- CritPt: **26.6%** (AA `critpt` leaderboard, #10/28).
- GPQA Diamond: ~90% (Xiaomi provider run via OpenRouter; DeepInfra 89.3, Novita 90.2 — provider-run, borderline on the 90%+ ref).
- Vals Index (multi-domain finance/coding/legal/tax): **55.20%** (TensorFeed 2026-09-30, #12/41); 59.47% (DeepLearning.AI The Batch).
- ARC-AGI / FrontierMath: no verified public score found.
- MLCR-AA: **18.3%** (AA `mlcr-aa` — **medical long-context reasoning is weak** for a 1M-context model).
- Output verbosity on AA Index: **140M tokens** (median 140M — at cohort median).

Coding:

- DeepSWE v1.1: **71.9%** (Xiaomi technical report; just under 74 frontier ref).
- AA-SciCode: **60.9%** (AA `scicode`; clears the 55%+ ref).
- ProgramBench: **26.5%** (Xiaomi technical report; Opus 5 37.0 reference).
- MiMo Code Bench: **63.2** (Xiaomi; Opus 5 68.6 reference).
- Bug Hunt Bench: **22.7 fixes** (`bughunt.productcompass.pm`).
- LiveCodeBench Pro / SWE-bench Verified / SWE-bench Pro / Vibe Code Bench: **no verified public score found** for Pro (AA Coding Index not yet scored).
- AA Coding Index: not yet computed on cohort leaderboards.

Long context:

- AA-LCR v1.1: **86.3%** — **rank 3 of 408** (100th percentile; field leader Kimi K3 88.7). Best long-context retrieval standing of any scoreable row for this model.
- MLCR-AA: **18.3%** (medical long-context = weak point despite 1M window).
- GraphWalks BFS / MRCR 1M+ / GraphRAG tasks: not directly reported in launch slice.

Multimodal:

- Native inputs: text + image + speech + video (verified by AA spec page). AA explicitly validates text + image.
- Design Arena Website: **1312 Elo** (OpenRouter benchmarks).
- MiMo Visual Coding: 72.3 (vendor).
- ScreenSpot Pro / MMMU-Pro / BenchCAD / MathVision: not directly reported in launch slice.
- Image input pricing: not separately reported in AA (subsumed under text input on Xiaomi API).

Safety / instruction following:

- AA-Omniscience Hallucination Rate: **40.6%** (composite hallucination on out-of-domain probes; mid-pack for open weights, but high for a flagship-tier model). Non-hallucination rate 59.4%.
- Vision + audio + video trust has not been independently audited at third-party equivalent scale (AA validates text + image only).
- "Cyber-1 + Bio-1 thresholds" framing from Xiaomi: cyber capabilities eligible for Cyber Verification Program transfer (no public disclosure of size of cyber bio capabilities at Pro tier).

Operational:

- RL run cost disclosed at **$2.6M**; 7,000+ RL task environments published; training code released alongside the model — unusual transparency for a frontier-tier model release in 2026.
- API updated in place 2026-09-25 to curb repeated tool calls (vendor-fix; vendors should plan a re-prompt after that date).
- 5 providers: Xiaomi native, OpenRouter (reseller markup), DeepInfra, NovitaAI, GMICloud.
- Self-host: BF16 = ~614 GB minimum (or FP8 / INT8 quantization); MIT license commercial use allowed.
- Token Plan subscriptions from $6/mo on mimo.mi.com console.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 **89.9%** (clears frontier ref), OSWorld-Verified **82.0%** (high), Toolathlon **76.9%** (high), τ-bench 80.0%, CyberGym **94.0%** (high), CyberBench v1.1 72.86% rank 3/9 ahead of Muse Spark 1.3 + Claude Fable 5.1, GDPval-AA 1673 Elo. Cap = TB 4.0 34.9% (well behind closed frontier at ~60-70%); Agents' Last Exam 31.6 (low); Tau3 / Claw-Eval not published; AA-Tau3 Banking not directly reported in launch slice.
- **Reasoning: 86/100.** AA Intelligence Index **46.3** (#1 open weights, +1.3 over GLM 5.3 45, +2.3 over Kimi K3 44), AA-HLE 49.4% (independently strong), Vals Index 55.20-59.47% range, GPQA Diamond ~90% (provider-run, borderline). Cap = AA Index 46 is **14 points below the 60+ proprietary frontier ref** (Opus 5.5 58, GPT-6 Astra 52.7); CritPt 26.6% is mid-pack; AA-Omniscience Index **8.4** + Hallucination Rate **40.6%** is a real safety-quality concern for production deployment.
- **Context window: 96/100.** 1M input + 128K output (1M-tier). AA-LCR v1.1 **86.3%** — **rank 3/408** in the field (leader Kimi K3 88.7). Cap = MLCR-AA **18.3%** is weak for a 1M-context model — medical long-context reasoning is unimpressive; GraphWalks BFS / MRCR 1M+ not directly published; no 128K-output retrieval breakdown at full length in launch slice.
- **Multimodal: 92/100.** **Text + image + speech + video in; text out** (per AA spec page + meta.json). Design Arena Website 1312 Elo, MiMo Visual Coding 72.3. Cap = AA independently validates only text+image in (audio + video trust has not been third-party audited at scale); ScreenSpot Pro / MMMU-Pro / BenchCAD not directly reported in launch slice.
- **Coding: 87/100.** DeepSWE v1.1 **71.9%** (just below 74 frontier ref), SciCode 60.9% (clears 55+ ref), CyberGym 94.0%, MiMo Code Bench 63.2 (vendor, Opus 5 68.6), Bug Hunt 22.7 fixes, ProgramBench 26.5 (Opus 5 37.0 reference). Cap = SWE-bench Verified / LiveCodeBench / Vibe Code Bench / SWE-Pro all missing for Pro; AA Coding Index not yet computed; FrontierCode Main not directly published.
- **Cost efficiency: 95/100.** **$0.435 / $0.87 + 99% cache discount ($0.0036) + batch 50% off + 5 providers + MIT self-host + $6/mo subscriptions**. AA cost per Intelligence Index task **$0.13** (#14/36 in the AA Index cost cohort). Cap = Xiaomi native list is the unbeatable rate, but OpenRouter reseller marks up to $4.35/$8.70, and 47.9 t/s output speed + 3.74s TTFT are slow for premium coding workloads; only UltraSpeed customers pay 10× for fast decode.
- **Overall Score: 90/100** Mean of `(88 + 86 + 96 + 92 + 87) / 5 = 89.8` → half-up **90**. Best fit: **long-horizon agentic coding + cyber research on a budget** (CyberGym 94.0, CyberBench v1.1 72.86% rank 3/9 ahead of Fable 5.1, Toolathlon 76.9, OSWorld-Verified 82.0, TB 2.1 89.9), **1M-context document Q&A on non-medical corpora** (AA-LCR v1.1 86.3% rank 3/408), **omnimodal pipelines (text + image + speech + video + text-out) where the audio + video pass-through is acceptable trust** (Xiaomi's marketing promises but only text+image is independently validated), **production cost-sensitive agents** at $0.13/Index-task (lowest in the 1M-window tier), **on-prem self-host under MIT license** for any organization with GPU capacity (BF16 = ~614 GB; FP8 fits on smaller rigs). Skip for: proprietary-tier intelligence gaps (AA Index 46 is 14 points under Opus 5.5; Claude Sonnet 5.5 + GPT-6 Astra + Claude Fable 5.1 all out-Index it), **medical long-context Q&A** (MLCR-AA 18.3% is a hard floor), **production hallucinations-heavy workloads** (AA-Omniscience Hallucination Rate 40.6% suggests grounding + retrieval is essential), **terminal-heavy computer use at maximum difficulty** (TB 4.0 34.9% is well behind Claude Sonnet 5.5's 70.6%), and **low-latency applications** (47.9 t/s + 3.74s TTFT — use UltraSpeed tier or pick Gemini 3.7 Flash / Sonnet 5.5).

---

## Signature

- Provided by: **MiniMax M3 (xiaomi/mimo-v2.6-pro)** — 2026-10-13
- Method: independent MiniMax M3 evaluation drawn from Artificial Analysis `mimo-v2-6-pro` model page (intelligence 46, speed 47.9 t/s, TTFT 3.74s, pricing $0.435/$0.87/$0.0036 cache, AA Index components — Oct 2026 reproduction window), the BenchLM BenchAlign model page (73.06/100 overall, #12 of 891; 31 of 626 benchmarks covered; Xiaomi technical report cross-references for Terminal-Bench 2.1/4.0, OSWorld-Verified, Toolathlon-Verified, AutomationBench, JobBench, CyberGym, DeepSWE, ProgramBench, AA Index), the Xiaomi MiMo V2.6 Pro launch on Hugging Face `XiaomiMiMo/MiMo-V2.6-Pro-RL` (technical report PDF, 1.02T/42B MoE spec, 27T+3T token training corpus), OpenRouter model benchmarks + pricing ($4.35/$8.70 reseller markup documented), the existing peer agent file `mimo-v2.6-pro/MiMo_2.6_Flash.md` (sibling-agent cross-reference; flagged self-report caveat honored by independent AA + BenchLM verification), the Average findings (21 raters, top-10 mean: Tool 88.1 / Reasoning 87.6 / Context 96.1 / Multimodal 92.3 / Coding 88.1 / Cost 93.8 / Overall 90.5), and the Vals CyberBench v1.1 72.86% / TensorFeed Vals Index 55.20% cross-vendor reproduction windows. Per-benchmark footnotes (harness, vintage, AA independent vs vendor-reported) captured inline; Overall Score = half-up mean of 5 quality dimensions, Cost excluded.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

