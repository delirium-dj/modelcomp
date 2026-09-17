# AI Model Comparison

Purpose: structured, comparable findings about AI models researched on the internet.
Each model uses the same fields and the same 1–100 scales so new models can be added and compared directly.

- Last updated: 2026-09-17 (UTC) — v2 adds 8 unique models (9 requested names, 1 duplicate merged, 3 with no Zen Free ID found; see `Requested-name resolution`)
- Maintainer note: scores in this file are **normalized interpretations (1–100)**, not official vendor scores. Raw benchmark numbers are listed separately with sources.
- How to add a model: copy the per-model template in `Per-model template` and fill raw benchmarks first, then derive 1–100 scores using `Scoring methodology`.

## Comparison summary (1–100, higher is better)

| Model | Tool use | Reasoning | Context window | Multimodal | Coding | Cost efficiency | Overall Score |
|---|---|---|---|---|---|---|---|
| Big Pickle (`opencode/big-pickle`) | 55 | 60 | 70 | 15 | 70 | 100 | 62 |
| Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`) | 95 | 92 | 100 | 85 | 95 | 100 | 95 |
| Ling 3.0 Flash Fin Free (`opencode/ling-3.0-flash-fin-free`) | 68 | 70 | 72 | 15 | 72 | 100 | 66 |
| MiMo V2.5 Free (`opencode/mimo-v2.5-free`) — also listed as Xiaomi MiMo-V2.5 Free, same ID | 78 | 72 | 70 | 95 | 78 | 100 | 82 |
| Muse Spark 1.2 Free (`opencode/muse-spark-1.2-contributor-free`) | 90 | 88 | 100 | 90 | 88 | 100 | 93 |
| Nemotron 3 Ultra Free (`opencode/nemotron-3-ultra-free`) | 78 | 75 | 97 | 20 | 80 | 100 | 75 |
| Nemotron 3.5 Lightning Free (`opencode/nemotron-3.5-lightning-free`) | 50 | 62 | 72 | 15 | 58 | 100 | 60 |
| GLM 5.1 Coding (`glm-5.1` — requested as Free, no Free ID found on Zen) | 85 | 80 | 70 | 15 | 88 | 75 | 69 |
| MiniMax M2.7 (`minimax-m2.7` — requested as Free, no Free ID found on Zen) | 80 | 75 | 70 | 15 | 82 | 90 | 69 |
| Xiaomi MiMo-V2.5-Pro (`mimo-v2.5-pro` — requested as Free, no Free ID found on Zen) | 82 | 78 | 100 | 15 | 82 | 85 | 74 |

### Requested-name resolution

- `Ling 3.0Flash Fin Free` → `Ling 3.0 Flash Fin Free` (`opencode/ling-3.0-flash-fin-free`).
- `MiMo V2.5 Free` and `Xiaomi MiMo-V2.5 Free` → same Zen ID `opencode/mimo-v2.5-free` (models.dev `mimo-v2.5-free.toml`, 200K/32K cap). Listed once.
- `Muse Spark 1.2 Free` → `opencode/muse-spark-1.2-contributor-free` (listed in Zen docs dev history as Free/Free/Free; current Zen page spotlights 1.3 Free — treat 1.2 Free as prior free tier, same weights as `muse-spark-1.2`).
- `GLM 5.1 Coding Free` → no `glm-5.1-*-free` ID on Zen as of 2026-09-17. Closest is paid `opencode/glm-5.1` ($1.40/$4.40). Scored on paid pricing; cost would be 100 if a $0 promo appears.
- `MiniMax M2.7 Free` → no `minimax-m2.7-free` ID on Zen as of 2026-09-17. Closest is paid `opencode/minimax-m2.7` ($0.30/$1.20). Cost scored 90 on paid pricing.
- `Xiaomi MiMo-V2,5-Pro Free` (comma typo) → `MiMo-V2.5-Pro` (`mimo-v2.5-pro`, Xiaomi native, MIT, 1M). No Zen Free ID found. Cost scored 85 on Xiaomi platform pricing ($0.435 miss / $0.87 out, or $1.00/$3.00 routes).

`Overall Score` = rounded mean of the 6 dimensions: `(Tool + Reasoning + Context + Multimodal + Coding + Cost) / 6`.

- Big Pickle: (55 + 60 + 70 + 15 + 70 + 100) / 6 = 61.7 → **62**
- Muse Spark 1.3 Free: (95 + 92 + 100 + 85 + 95 + 100) / 6 = 94.5 → **95**
- Ling 3.0 Flash Fin Free: (68 + 70 + 72 + 15 + 72 + 100) / 6 = 66.2 → **66**
- MiMo V2.5 Free: (78 + 72 + 70 + 95 + 78 + 100) / 6 = 82.2 → **82**
- Muse Spark 1.2 Free: (90 + 88 + 100 + 90 + 88 + 100) / 6 = 92.7 → **93**
- Nemotron 3 Ultra Free: (78 + 75 + 97 + 20 + 80 + 100) / 6 = 75.0 → **75**
- Nemotron 3.5 Lightning Free: (50 + 62 + 72 + 15 + 58 + 100) / 6 = 59.5 → **60**
- GLM 5.1 Coding (paid pricing): (85 + 80 + 70 + 15 + 88 + 75) / 6 = 68.8 → **69**
- MiniMax M2.7 (paid pricing): (80 + 75 + 70 + 15 + 82 + 90) / 6 = 68.7 → **69**
- Xiaomi MiMo-V2.5-Pro (paid pricing): (82 + 78 + 100 + 15 + 82 + 85) / 6 = 73.7 → **74**

> Cost efficiency here scores the **evaluated Free tier** on OpenCode Zen (`$0` input/output during the limited free period = 100). Paid fallback pricing is noted per model for long-term comparison.

---

## Big Pickle

- **Name:** Big Pickle
- **Short description:** Free stealth reasoning model on OpenCode Zen for deliberate analysis, multi-step problem solving, and tool use. Identity undisclosed by OpenCode; community consensus is GLM-4.6 by Zhipu AI / Z.AI. Described as roughly Claude Sonnet 4.5/4.6-class on coding at zero token cost during the free period.
- **Provider / access:** OpenCode Zen (`opencode/big-pickle`), `https://opencode.ai/zen/v1/chat/completions` (Chat Completions only, NOT Responses API)
- **Release / knowledge:** 2025-10-17 (models.dev); knowledge cutoff 2025-01
- **IDs:** `big-pickle`
- **Context window:** 200,000 tokens total (160,000 input / 32,000 output per models.dev)
- **Modalities:** text input, text output only; reasoning = yes; `tool_call` = true; `structured_output` = true; `attachment` = false
- **Pricing (as of 2026-09-17):** Free / Free / Free cached on Zen (limited time). Paid equivalent often cited as GLM-4.6 (~$0.60 / $2.20 per 1M) or GLM-5.2 family. During free period collected data may be used to improve the model — do not send confidential repos.
- **Architecture (attributed base, unverified by vendor):** 357B MoE, 32B active (GLM-4.6 reports)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **49.4%** (rank 118/154, 24th percentile — BenchmarkList)
- Terminal-Bench Hard: **25.0%** (rank 90/327)
- Terminal-Bench 2.0: **28.1%**
- Tau3-Banking: **10.5%** (rank 63/141, 56th percentile)
- Tau2-Bench Telecom: **70.5%** (BenchmarkList) / **76.9%** τ²-bench (BenchLM — source variance noted)
- GDPval-AA: **934** Elo (vs 1,754 for Muse Spark 1.3)
- Claw-Eval / ClawProBench: **no verified public Claw-Eval score found** for `big-pickle` as of 2026-09-17. Closest proxy found: ClawProBench 56.2945 (34th percentile, n=48) for `glm-4.6` — treat as provisional, not equivalent.
- SWE Atlas Codebase QnA (direct `big-pickle` eval via mini-swe-agent): **50.8% (63/124)**

Reasoning / knowledge:

- GPQA Diamond: **63.2%** (BenchLM AA-GPQA) / **0.81** (ApX aggregate) — source variance noted
- HLE: **5.5%**
- LCR (AA-LCR): **28.3%**
- CritPt: **0.0%**
- FrontierMath v2 Tier 4: **2.128%**
- Omniscience Accuracy 21.4%, Hallucination Rate 67.6%, Index -31.7%
- Artificial Analysis Intelligence Index (GLM-4.6 proxy): **~23.4% normalized / rank ~76**; BenchLM overall **53.94/100, #107/411**

Coding:

- SWE-bench Verified: **0.68**
- LiveCodeBench: **81.0%** (rank 55/123)
- SciCode / AA-SciCode: **38.4% / 33.1%**
- Vibe Code Bench v1.1: **3.09–3.1%** (very low)
- SWE Atlas Codebase QnA (direct): **50.8%**

Long context:

- 200K total context, 32K max output — no MRCR 256K+ score possible; MRCR-class retrieval not reported.

### Normalized scores (1–100)

- **Tool use: 55/100.** Mid-low frontier. Tau3 10.5% and TB 2.1 49.4% lag frontier (Muse 50.5% / 88.8%, Fable/GPT-5.6 84–89%). Tau2 70%+ and SWE-Atlas 50.8% keep it above weak models. No verified Claw-Eval score — penalized for missing data.
- **Reasoning: 60/100.** Adequate multi-step / tool-integrated reasoning, clear gain over GLM-4.5 per Zhipu, but HLE 5.5%, CritPt 0%, LCR 28.3% are far below frontier (Muse HLE 48.7%, LCR 83%, GPQA 93.5%).
- **Context window: 70/100.** 200K covers most single-feature work but is 1/5 of 1M tier. Per methodology: 200K tier = 70. 32K max output is tightest in fleet — chunk large generations.
- **Multimodal: 15/100.** Text-only in/out. No image, audio, video, or PDF understanding reported.
- **Coding: 70/100.** LiveCodeBench 81% and SWE-bench 0.68 are solid; community rates Sonnet 4.5-class for daily-driver coding. Dragged down by Vibe 3.1% and SciCode ~33–38% vs frontier 58–75%.
- **Cost efficiency: 100/100.** $0/$0 on Zen free tier. Paid fallback (GLM-4.6 $0.60/$2.20) would be ~92/100 — still very cheap.
- **Overall Score: 62/100.** Mean of above. Best fit: zero-cost daily driver; escalate to paid frontier on 2 failures or whole-repo / 1M-context jobs.

---

## Muse Spark 1.3 Free

- **Name:** Muse Spark 1.3 Free
- **Short description:** Free Contributor-tier access to Meta’s Muse Spark 1.3 — hosted multimodal reasoning model for coding and long-horizon agentic workflows. Same weights/capabilities as standard `muse-spark-1.3`; lower price in exchange for allowing Meta to use prompts/completions for training.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.3-contributor-free`), `https://opencode.ai/zen/v1/responses`; also Meta Model API (`muse-spark-1.3-contributor`) and Muse Code. Standard ID: `meta/muse-spark-1.3`.
- **Release:** 2026-09-02 by Meta (Meta Superintelligence Labs). Not open-weights as of 2026-09-17.
- **Context window:** **1,048,576 tokens (1M)**. Max output up to 1,048,576 (Vercel) / 131,072 on some Zen listings — endpoint-dependent.
- **Modalities:** text + image + video + PDF input; text output; reasoning = yes. No image/audio/video output reported.
- **Pricing:**
  - Zen Free tier (`muse-spark-1.3-contributor-free`): **Free / Free / Free** (limited time)
  - Contributor paid: **$0.10 input / $0.20 output / $0.002 cached** per 1M
  - Standard: **$1.25 input / $4.25 output / $0.15 cached** per 1M (unchanged from 1.2)
  - Meta reports ~20% fewer tool calls and ~25% fewer tokens vs 1.2; $0.55 per Intelligence Index task — cheapest at 59+ intelligence (peers $0.94–$0.95).
- **Variants:** `xhigh` (generally available, Intelligence Index 61), `max` (limited preview, Index 62, uses ~62% more reasoning tokens on GDPval, ~28% more on Tau3).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (BenchLM; ties GPT-5.6 Sol, edges Opus 5 86%; AA run: 85% xhigh / 86% max vs 80% for 1.2)
- AA Tau3 Banking: **50.5%** (BenchLM) / **47% xhigh / 52% max** (Artificial Analysis, #1 among all models for max)
- GDPval-AA v2: **1754 Elo** (BenchLM) / **1709 xhigh / 1754 max** (AA, +94/+139 over 1.2’s 1615)
- AA Terminal-Bench 2.1: **84.3%**; Terminal-Bench 4.0: **33.3%**
- OSWorld 2.0: **66.9%**; AutomationBench 49.4% / AA-Automation 57.9%; JobBench 64.9%; DeepSearchQA 89.4%; Agentic Index 55.7%; Briefcase 1589
- Claw-Eval: **no verified public Claw-Eval score found** as of 2026-09-17 — listed as N/A, not 0.
- Efficiency: **~20% fewer tool calls, ~25% fewer tokens** vs 1.2 (Meta engineer comparisons)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61 (xhigh) / 62 (max)** — tied 1st–3rd with GPT-5.6 Sol max, Grok 4.6 high; behind Fable 5.1 max 66
- MRCR v2 256K–512K: **98.5%**; 512K–1M: **98.1%** (vs GPT-5.6 Sol 91.5% / 73.8% — best-in-class long-context retrieval)
- AA-LCR: **83.0%**; MLCR-AA 41.1%; CritPt **24.9%**
- AA-GPQA Diamond: **93.5%**; AA-HLE: **48.7%**; Omniscience Accuracy 43.6%, Hallucination 32.9%, Index 25.0%
- Speed: ~165–186 tok/s, TTFT ~42–46s (fast decode, slow first token on reasoning mode)

Coding:

- DeepSWE v1.1: **75.4** (beats Opus 5 74.0, GPT-5.6 Sol 73.0)
- Terminal-Bench 2.1: **88.8** (coding-terminal crossover)
- SWE-Atlas Codebase QnA: **59.4%** (vs Big Pickle direct 50.8%)
- AA-SciCode: **58.8%**; AA Coding Index **75.8%**; CursorBench 4.0 41.6%

### Normalized scores (1–100)

- **Tool use: 95/100.** Frontier agentic: TB 2.1 88.8%, Tau3 #1 (52% max), GDPval 1754, plus measured efficiency gain. Deduct 5 for high TTFT (~46s) and max-variant token hunger.
- **Reasoning: 92/100.** Frontier: GPQA 93.5%, HLE 48.7%, MRCR ~98% to 1M, LCR 83%, Index 61–62. Deduct for CritPt 24.9% and higher abstention lowering Omniscience accuracy.
- **Context window: 100/100.** Full 1M tier with 98.1% retrieval at 512K–1M where peers degrade to 73.8%.
- **Multimodal: 85/100.** Strong input (text/image/video/PDF), text-only output. No audio in/out or image/video generation → not 95+.
- **Coding: 95/100.** DeepSWE SOTA 75.4, TB 88.8, SciCode 58.8, SWE-Atlas 59.4. Cleaner style, fewer turns per Meta. Deduct 5 as Opus 5 still leads GDPval (1824 vs 1754) and some narrow agent slices.
- **Cost efficiency: 100/100.** Free tier = 0 cost. For reference: paid Contributor ($0.10/$0.20) would be ~98/100; Standard ($1.25/$4.25, $0.55/task Pareto-frontier) would be ~88/100.
- **Overall Score: 95/100.** Mean of above. Best fit: default for long-horizon coding/agentic work when free tier available; otherwise cheapest frontier-cost option at this intelligence.

## Ling 3.0 Flash Fin Free

- **Name:** Ling 3.0 Flash Fin Free
- **Short description:** Finance-enhanced MoE reasoning model by InclusionAI / Ant Group for financial research, multi-step investment workflows, and tool-intensive tasks, retaining strong coding/math. Free tier on OpenCode Zen.
- **Provider / access:** OpenCode Zen (`opencode/ling-3.0-flash-fin-free`), `https://opencode.ai/zen/v1/chat/completions`; also Vercel AI Gateway (`inclusionai/ling-3.0-flash-fin-free`, free through 2026-09-25 per changelog)
- **Release:** 2026-08-27 (Vercel changelog); base Ling-3.0-flash 2026-07-27. Thinking mode enabled by default (temp 1.0, top_p 0.95, top_k 20 for Fin).
- **IDs:** `ling-3.0-flash-fin-free`
- **Context window:** **262,144 (Zen/Pi) / 256,000 (Vercel/HF)**; 32,768 / 32,000 max output. Base architecture natively 256K, scalable to 1M per Ant. Independent test confirmed hard limit 262,144.
- **Modalities:** text input, text output only; reasoning = yes; function calling = yes. No image/audio/video reported on Zen.
- **Pricing:** Free / Free / Free on Zen (limited time, data may be used to improve model). Base: 124B total, 5.1B active, hybrid-linear MoE (35 KDA + 7 MLA, 512 routed + 1 shared, 8 active).
- **Privacy:** free-period data may be used to improve the model — no confidential financial filings.

### Raw benchmarks found

- Terminal-Bench: vendor evaluation protocol documented (AA Terminus 2 harness, 256K, temp 0.6) but **no public numeric TB score found** as of 2026-09-17.
- Tau3-banking-AA: vendor lists as evaluated (AA leaderboard, GPT-5.4-mini user/judge) but **no public numeric score found**.
- Claw-Eval: **no verified public score found**.
- MCP-Atlas / SkillsBench / SWE-Bench Pro / Multilingual / MiniAppBench / AntSWEBench / GDPval v2-AA / FinFIRST / FinSearchComp / FinCRAFT / Finance Agent / APEX-Agents / SpreadsheetBench: vendor claims “strong” — numbers not published in sources fetched.
- Independent eval (frangelbarrera, 845 records, 12 phases): overall **7.0/10**; MMLU+GPQA 35/35 (100%, small sample); tool-calling schema 45/45 valid, 0/10 invented params; HumanEval 19/19 syntactically valid; logic recall 11/12.
- BenchLM base `ling-3-0-flash`: **53.9/100, #110/228**, strongest Instruction Following #24 (Fin variant likely similar + finance lift).

### Normalized scores (1–100)

- **Tool use: 68/100.** 10,000+ interactive envs, function calling, finance tool workflows; penalized for no public TB/Tau3/Claw numbers.
- **Reasoning: 70/100.** Efficient hybrid reasoning, strong instruction following; small-sample MMLU/GPQA perfect but not frontier-scale evidence (no HLE/CritPt/MRCR).
- **Context window: 72/100.** 262K tier (200–500K band). Scalable to 1M per vendor but Zen cap is 262K/32K.
- **Multimodal: 15/100.** Text-only on Zen.
- **Coding: 72/100.** Vendor SWE-Pro/Multilingual/MiniApp claims + independent coding 8/10; no SWE-Verified/LiveCode public number.
- **Cost efficiency: 100/100.** $0 on Zen free tier.
- **Overall Score: 66/100.** Niche pick for finance + efficient execution; verify on SWE-Pro/Tau3 before general coding use.

---

## MiMo V2.5 Free

- **Name:** MiMo V2.5 Free (also requested as Xiaomi MiMo-V2.5 Free — same model)
- **Short description:** Native omni-modal open-weights MoE by Xiaomi for text, image, video, audio understanding plus strong agentic coding. Free capped tier on OpenCode Zen.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2.5-free`), `https://opencode.ai/zen/v1/chat/completions`. Native: Xiaomi API Platform / AI Studio, Hugging Face `XiaomiMiMo/MiMo-V2.5` (MIT).
- **Release:** 2026-04-22 / 2026-04-24 (Zen). Knowledge 2024-12 (models.dev).
- **IDs:** `mimo-v2.5-free` (Zen cap); native `mimo-v2.5`
- **Context window:** **200,000 Zen cap / 32,000 out** (models.dev, Pi). Native base: **1M** (256K base checkpoint + 1M instruct). Zen score uses 200K cap.
- **Modalities:** models.dev: **text, image, audio, video in; text out**; reasoning = yes; tool_call = true; attachment = true; open_weights = true. Pi lists text+image (partial view) — full is 4-input per models.dev.
- **Pricing:** Free / Free / Free on Zen (limited time, data may be used). Native Xiaomi Token Plan: Input cache miss $0.14 / hit $0.0028, Output $0.28 per 1M. BenchmarkList tracker: $0.105 in / $0.28 out.
- **Architecture:** 310B total, 15B active, hybrid SWA/GA 5:1 (128 window), 3-layer MTP, 729M ViT + audio encoder, 48T tokens pre-train.

### Raw benchmarks found (base `mimo-v2.5`; Zen Free shares weights, capped context)

- Terminal-Bench 2.1: **63.7%** (rank 43/172, 75th pct); Terminal-Bench 2.0: **65.8%** (HF eval); Terminal-Bench Hard: **41.7%** (rank 29/326, 91st pct)
- Tau2 Telecom: **90.6%** (rank 49/332, 85th pct); Tau3-Banking: **8.7%** (BenchmarkList, 42nd pct) vs **69.5% Tau3 Bench** (RankedAGI, different harness — variance flagged)
- GDPval-AA: **1,148 Elo** (rank 66/334, 80th pct)
- Claw-Eval: vendor table Claw-Eval Text **65.8** (vs Opus 4.6 65.4, K2.6 66.7); ClawProBench **60.39** (rank 13/48, 74th pct); general subset **62.3** Pareto-frontier per Xiaomi
- Reasoning: Intelligence Index **38** (AA); HLE **27.2%**; GPQA **81.6%**; MMLU Pro **82.9%**; MMMU Pro 80.0%
- Coding: SWE Verified **71.0%**; SWE Pro **56.1%**; LiveCodeBench **81.5%**; SciCode **43.1%**; Vibe **42.2%**; MiMo Coding Bench **62.3** (tie K2.6); Coding Agent **71.8**; RankedAGI Coding 68.3 / Agentic 72.7 / Overall 64.0
- BenchLM `mimo-v2-5`: **58.3/100, #74/218**

### Normalized scores (1–100)

- **Tool use: 78/100.** TB Hard 91st pct, Tau2 90.6%, GDPval 80th pct, Claw top-quartile. Dragged by Tau3-Banking 8.7% on one harness.
- **Reasoning: 72/100.** GPQA 81.6%, MMLU Pro 82.9%, solid but below 90%+ frontier.
- **Context window: 70/100.** Zen Free capped 200K/32K. Native 1M would be 100 — note cap for long-repo work.
- **Multimodal: 95/100.** Full 4-input omni (text/image/video/audio), text out. Best input coverage in this file.
- **Coding: 78/100.** SWE 71%, SWE-Pro 56.1%, LiveCode 81.5%, Vibe 42.2% — well-rounded mid-frontier.
- **Cost efficiency: 100/100.** $0 Zen free.
- **Overall Score: 82/100.** Best free omni + balanced agent/coding; use native 1M endpoint when Zen cap binds.

---

## Muse Spark 1.2 Free

- **Name:** Muse Spark 1.2 Free
- **Short description:** Prior-gen Meta coding/agent model, co-trained with Muse Code for terminal coding, MCP tool use, whole-repo generation. Free Contributor tier shares weights with standard 1.2.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.2-contributor-free` in dev docs; current page spotlights 1.3 Free), `https://opencode.ai/zen/v1/responses`. Meta API `muse-spark-1.2-contributor` / `muse-spark-1.2`, Muse Code.
- **Release:** 2026-08-05 (Meta). Proprietary, reasoning yes.
- **Context window:** **1M (1,048,576 / 1,049K)**; max out up to 944K (CloudPrice) — endpoint-dependent.
- **Modalities:** text, image, speech/audio, video, PDF in; text out (AA: text/image/speech/video; CloudPrice adds audio+PDF). Function calling, structured output, prompt caching.
- **Pricing:** Zen Free: Free/Free/Free (limited time). Contributor paid $0.10/$0.20/$0.002; Standard $1.25/$4.25/$0.15. Speed 217–305 tok/s, TTFT ~14–15.8s.

### Raw benchmarks found

- Terminal-Bench 2.1: **82.9%** (BenchLM; Meta harness via Muse Code; AA 80%)
- GDPval-AA v2: **1,631 Elo** (BenchLM; AA +260 over 1.1’s 1,371)
- Tau3-Banking: **~27%** (AA: 25%→27% from 1.1)
- MCP Atlas: **90.3%** (highest in Meta comparison set; vs Opus 5 85.8%, Fable 5 83.3%)
- Claw-Eval: **no verified public score found**.
- DeepSWE 1.1: **59.3%** (vs 1.1 53.0%, Opus 5 max 65.0%, Terra 64.8%)
- Coding Index **72.2%**; SciCode **56.4%**; SWE-bench Vals **86.6%**; FrontierSWE v2 12.0%; Meta internal coding 70.6%
- Reasoning: Index **47 (AA xhigh) / 56.8% (BenchLM)**; GPQA **90.4%**; HLE **45.5%**; LCR **83.3%**; CritPt **17.7%**; MMLU-Pro Vals 88.3%; Omni Acc 45.4% / Hallu 33.3%
- BenchLM overall **71.88/100, #11/411**

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 82.9% + MCP Atlas SOTA 90.3% + GDPval 1631. One step below 1.3 (88.8%/1754/50.5%).
- **Reasoning: 88/100.** GPQA 90.4%, HLE 45.5%, LCR 83.3%, Index 47. CritPt 17.7% caps higher.
- **Context window: 100/100.** Full 1M tier.
- **Multimodal: 90/100.** Broadest input in file (text/image/audio/speech/video/PDF), text out.
- **Coding: 88/100.** Strong whole-repo/MCP coding; DeepSWE 59.3% trails 1.3’s 75.4% and Opus 65%.
- **Cost efficiency: 100/100.** $0 free tier.
- **Overall Score: 93/100.** Near-frontier free fallback when 1.3 Free unavailable.

---

## Nemotron 3 Ultra Free

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA flagship open-weights hybrid Mamba-Transformer MoE for frontier reasoning, orchestration, and long-running agents. Fast (5× throughput claim) with low hallucination.
- **Provider / access:** OpenCode Zen (`opencode/nemotron-3-ultra-free`), `https://opencode.ai/zen/v1/chat/completions` (NVIDIA free endpoints, trial terms). Native: build.nvidia.com NIM, Hugging Face `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B` (BF16/NVFP4), OpenRouter `:free`.
- **Release:** 2026-06-04/06 (NVIDIA). License OpenMDW-1.1, open weights + recipes.
- **Context window:** **1M** (262,144 default serve len, set `--context-length 1048576` for full). Max out 65,536 (OpenRouter). RULER 1M 94.7%.
- **Modalities:** text in/out (no image input per AA comparison); reasoning yes. Verify multimodality before non-text use.
- **Pricing:** Free on Zen/NVIDIA trial (trial: do not submit personal/confidential data, logged for security/improvement, nocredit). Native efficiency claim: 30% lower cost-to-task via fewer tokens/turn.
- **Architecture:** 550B total, 55B active, hybrid Mamba-2 + MoE + select attention, MTP + DFlash/DSpark, FP8 KV.

### Raw benchmarks found (BF16 unless noted; NVFP4 within ~1–2pp)

- Terminal-Bench 2.1: **56.4%** (53.9 NVFP4); Terminal-Bench 2.0: **54%** (NVIDIA blog table)
- GDPVal: **46.7% Gym / 47.9% NVFP4**; GDPVal-AA Elo **1,448** (NVIDIA blog) / **1,378** (AA article, ~DeepSeek V4 Flash level) — harness variance
- TauBench V3 avg **70.9%** (Airline 81.5%, Retail 86.4%/88.4%); BrowseComp 44.4%/41.4%
- Claw-Eval: **no verified public Claw-Eval score found** for Ultra as of 2026-09-17.
- PinchBench **90.0%** (89.8 NVFP4, within 1.3 of best); ProfBench Search **56.0%** (ties K2.6 1T); EnterpriseOps-Gym 33%
- Reasoning: GPQA **87.0%**; HLE **26.7%**; SciCode subtask 44.6%; CritPt 3.1%; Omni Acc 24.1% / Non-Hallu **78.7%** (highest in comparison); IFBench 81.7%; LCR **65.4%**; RULER 94.7%; LongBench v2 61.9%; IOI 2025 570; LiveCode v6 89.0%; Index **38 (AA Reasoning) / 48 (AA v4.0 article)**
- Coding: SWE Verified **71.9%** (69.7 NVFP4, 65–70.4% across Pi/OpenHands/Hermes/OpenCode); Multilingual **67.7%**; MMLU-Pro 86.8%
- BenchLM `nemotron-3-ultra`: **46.35/100 (est.), #158/224**, 19 rows

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau V3 70.9%, Pinch 90%, ProfBench 56%, GDPVal mid. TB 56.4% below 80%+ frontier.
- **Reasoning: 75/100.** GPQA 87%, RULER 94.7%, best-in-class non-hallu 78.7%; HLE 26.7%/CritPt 3.1% cap higher.
- **Context window: 97/100.** True 1M with 94.7% RULER (just under 98% bar for 100).
- **Multimodal: 20/100.** Text-only per current evidence; family is “multimodal” but Ultra endpoint not verified for image/audio.
- **Coding: 80/100.** SWE 71.9%, LiveCode 89%, harness-consistent.
- **Cost efficiency: 100/100.** $0 free/trial.
- **Overall Score: 75/100.** Best open orchestration/fast long-agent pick with strong honesty (low hallu).

---

## Nemotron 3.5 Lightning Free

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** Compact open 30B MoE (3B active) for high-volume, low-latency execution layer in always-on agents (OpenClaw/Hermes/NemoClaw). Not a frontier reasoner — pairs with Ultra/frontier planners via NeMo Switchyard.
- **Provider / access:** OpenCode Zen (`opencode/nemotron-3.5-lightning-free`), NVIDIA NIM `nvidia/nemotron-3.5-lightning-30b-a3b` (BF16/NVFP4), Ollama `nemotron-3.5-lightning:30b-a3b-q8_0` (35GB).
- **Release:** 2026-08-11 (NVIDIA). OpenMDW-1.1, Mamba-2 + MoE + MTP + DFlash/DSpark, reasoning parser `nemotron_v3`.
- **Context window:** **262,144 native** (NIM default `--max-model-len`); some trackers list 1M extended. Max out not separately published; use 262K for scoring.
- **Modalities:** **text-only**, reasoning-capable (NVIDIA docs).
- **Pricing:** Free on Zen/NVIDIA trial (same trial privacy as Ultra). Native claim: 4× throughput, 30% faster task completion vs peers; 10k tasks 30% faster than Qwen3.6-35B at similar accuracy. Paid ref $0.05/$0.20 (llm-stats).

### Raw benchmarks found (BF16 / NVFP4)

- Terminal-Bench 2.1: **24.58% / 23.46%**; Terminal-Bench 2.0: **23.5%** (BenchLM lane)
- Tau3 Banking: **9.28% / 9.48%** (NVIDIA); llm-stats **0.093** — consistent
- GDPval-AA v2: **832 / 865 Elo**
- Claw-Eval: **no verified public score found**.
- PinchBench **85.37% / 83.43%**; BrowseComp 36.97%/36.81%
- Reasoning: MMLU Pro **81.94%/81.62%**; Omni 17.5/16.63; GPQA **75.44%/75.57%**; HLE 11.72%/10.47%; SciCode 32.6%/31.38%; IFBench 71.88%/72.88%; LCR 52.0%/49.19%
- Coding: SWE Verified **51.56%/52.80%**; Multilingual 39.33%/36.47%
- BenchLM lane: Agentic 27.1 (#142/151), Coding 31.5 (#166/183) — small-model lane, not frontier lane.

### Normalized scores (1–100)

- **Tool use: 50/100.** Pinch 85% good for size, but TB ~24% and Tau3 ~9% are execution-tier, not orchestration-tier.
- **Reasoning: 62/100.** GPQA 75% + MMLU Pro 82% strong for 3B-active; HLE 11.7%/LCR 52% cap higher.
- **Context window: 72/100.** 262K tier.
- **Multimodal: 15/100.** Text-only.
- **Coding: 58/100.** SWE ~52% solid for size; TB/SciCode low vs mid-frontier.
- **Cost efficiency: 100/100.** $0 free; fastest/cheapest execution per task by design.
- **Overall Score: 60/100.** Use as routed executor (Switchyard) + local single-GPU, not primary planner/coder.

---

## GLM 5.1 Coding

- **Name:** GLM 5.1 Coding (requested as GLM 5.1 Coding Free)
- **Short description:** Z.AI flagship open-weights MoE for agentic engineering and long-horizon (up to 8h) autonomous coding: SWE-Pro SOTA, NL2Repo/Terminal-Bench gains, sustained optimization over hundreds of rounds/thousands of calls.
- **Provider / access:** OpenCode Zen paid `opencode/glm-5.1` (`https://opencode.ai/zen/v1/chat/completions`). **No `glm-5.1-*-free` ID on Zen as of 2026-09-17** — scored on paid pricing. Weights: Hugging Face `zai-org/GLM-5.1` (MIT), api.z.ai / BigModel.cn, Claude Code / OpenClaw compatible.
- **Release:** 2026-04-07. 754B total (744B in some trackers), 40B active, MoE. Knowledge 2025-11.
- **Context window:** **200,000–205,752** (200K Zen-class, 202,752 arch, 205K BenchGecko); 128K out. In 200K tier.
- **Modalities:** text in/out; reasoning, function calling, structured output, MCP tools. No vision.
- **Pricing (verified, not free):** **$1.40 in / $4.40 out / $0.26 cached** (Z.ai/VentureBeat; Zen GLM 5.x band). Cheapest routes $0.97–$1.05 in / $3.04–$3.50 out. Coding Plans $48.60–$432/quarter.

### Raw benchmarks found (Z.ai self-reported + third-party)

- SWE-Bench Pro: **58.4%** (SOTA in Z.ai set; vs GPT-5.4 57.7, Opus 4.6 57.3, GLM-5 55.1); SWE Verified **74.2%** (BenchGecko); Arena Code **1,530 Elo** (#3, behind Opus 4.6 1,542/1,548)
- Terminal-Bench 2.0: **63.5% Terminus-2 / 69.0% best (Claude Code)** (vs GLM-5 56.2, Opus 4.6 65.4, Gemini 3.1 Pro 68.5, GPT-5.4-Codex 75.1)
- NL2Repo **42.7%** (vs GLM-5 35.9, Opus 4.6 49.8); CyberGym **68.7%** (vs Opus 66.6); BrowseComp 68.0%/79.3% w/ context mgmt; MCP-Atlas public **71.8%**; Tool-Decathlon 40.7%; Tau3 **70.6%** (vs Qwen3.6-Plus 70.7, Opus 72.4); Vending 2 $5,634
- Claw-Eval: **no isolated verified Claw-Eval number found** for 5.1 (use MCP-Atlas/Tool-Decathlon as proxy).
- Reasoning: HLE **31.0% / 52.3% w/ tools**; GPQA **86.2%**; AIME 2026 95.3%; IMO 83.8%; Index **32 (AA Reasoning)**; BenchGecko avg 70.4 (#49), coding 65.4 (#30), reasoning 62.1 (#45)
- Coding breadth: LiveBench Coding 75.4%, Reasoning 72.5%, OTIS AIME 92.2%

### Normalized scores (1–100)

- **Tool use: 85/100.** Tau3 70.6%, MCP-Atlas 71.8%, BrowseComp 79.3% w/ mgmt, TB2.0 69% best — long-horizon standout.
- **Reasoning: 80/100.** GPQA 86.2%, HLE-tools 52.3%, AIME 95%+; base HLE 31% caps frontier.
- **Context window: 70/100.** 200K tier, 128K out.
- **Multimodal: 15/100.** Text-only.
- **Coding: 88/100.** SWE-Pro SOTA 58.4% + Verified 74.2% + NL2Repo 42.7%.
- **Cost efficiency: 75/100.** Paid $1.40/$4.40 (no free ID). Would be 100 at $0 promo.
- **Overall Score: 69/100.** Top paid open coding/long-horizon pick; re-score to ~73 if free tier appears.

---

## MiniMax M2.7

- **Name:** MiniMax M2.7 (requested as MiniMax M2.7 Free)
- **Short description:** MiniMax self-improving frontier MoE for agentic coding, multi-agent collaboration, skill orchestration, and office/productivity tasks. Successor to M2.5; M2.7-highspeed 66% faster same quality.
- **Provider / access:** OpenCode Zen paid `opencode/minimax-m2.7` (`https://opencode.ai/zen/v1/chat/completions`). **No `minimax-m2.7-free` ID on Zen as of 2026-09-17.** Native MiniMax API/Token Plan, Groq Enterprise, Vercel AI Gateway, Ollama cloud. HF `MiniMaxAI/MiniMax-M2.7`.
- **Release:** 2026-03-18. 229–230B total, ~10B active, 62-layer MoE (256 experts), 29.2T tokens. MIT, open weights.
- **Context window:** **196,608–204,800 (200K class)** (Groq 196,608/131K out; Vercel 204.8K/131.1K; ref 205K). Use 200K tier.
- **Modalities:** text in/out; tool use, JSON mode, reasoning (interleaved thinking), dynamic tool search, Agent Teams. **No vision/document understanding** per LLMRef.
- **Pricing (verified, not free):** **$0.30 in / $1.20 out / $0.06 cached** (MiniMax/Vercel; OpenRouter $0.279/$1.20). M3 supersedes for 1M/multimodal/computer-use; M2.7 is cheaper text-only route.

### Raw benchmarks found

- SWE-Pro: **56.22%** (≈ Opus best, matches GPT-5.3-Codex); SWE Verified **72.2%** (NVIDIA Table 10); SWE Multilingual **76.5**; Multi SWE **52.7**; VIBE-Pro **55.6%** (≈ Opus 4.6); NL2Repo **39.8%**
- Terminal Bench 2 / 2.1: **57.0%** (vendor) / **55.5%** (NVIDIA Table 10)
- GDPval-AA: **1,495 Elo** (highest open; vs GPT-5.3); Gym GDPVal **47.6%**
- Toolathon **46.3%** (top tier); MM Claw **62.7%** (≈ Sonnet 4.6); Skill adherence **97%** (40 skills >2K tokens); MLE Lite **66.6%** (2nd only to Opus 4.6/GPT-5.4)
- Claw-Eval: MM Claw 62.7% as proxy; **no isolated Claw-Eval Avg/Pass number found**.
- Reasoning: LCR **69.8%** (NVIDIA table); MMLU-Pro 81.9%; Omni Acc 20.5% / Non-Hallu 74.4%; IFBench 74.6%; Z.ai table HLE-col **28.0**, GPQA **87.0**, MCP-Atlas 48.8%, Tool-Decathlon **46.3%**, Tau3-col **67.6%**
- Self-evolution: internal scaffold +30% over 100+ rounds (vendor claim).

### Normalized scores (1–100)

- **Tool use: 80/100.** Toolathon 46.3% + MM Claw 62.7% + 97% skill adherence + dynamic tool search + Agent Teams.
- **Reasoning: 75/100.** LCR 69.8%, GPQA 87%, solid; no HLE/MRCR frontier evidence.
- **Context window: 70/100.** 200K class, 131K out (good out limit).
- **Multimodal: 15/100.** Text-only.
- **Coding: 82/100.** SWE-Pro 56.2% + Verified 72.2% + Multilingual 76.5% + VIBE 55.6%.
- **Cost efficiency: 90/100.** $0.30/$1.20 cheap paid (no $0 ID). Would be 100 at $0.
- **Overall Score: 69/100.** Best-value paid text coding/agent; re-score to ~70–71 if free promo appears (cost 100 → 70.3).

---

## Xiaomi MiMo-V2.5-Pro

- **Name:** Xiaomi MiMo-V2.5-Pro (requested as Xiaomi MiMo-V2,5-Pro Free — comma typo)
- **Short description:** Xiaomi flagship open-weights (MIT) MoE for demanding agentic, complex SWE, and 1,000+ tool-call long-horizon tasks with strong 1M coherence. Text-focused Pro sibling to omni V2.5.
- **Provider / access:** Xiaomi API Platform / AI Studio (`mimo-v2.5-pro`), Hugging Face `XiaomiMiMo/MiMo-V2.5-Pro` (+ Base 256K). **No Zen `mimo-v2.5-pro-free` ID as of 2026-09-17.**
- **Release:** 2026-04-22. 1.02T total, 42B active, hybrid SWA/GA 6:1 (128 window) + 3-layer MTP, 27T tokens FP8, 32K native → 1M extended. Post-train: SFT → domain RL → MOPD.
- **Context window:** **1M** (Base 256K). GraphWalks: BFS 0.56 / Parents 0.92 at 1M (vs V2 Pro 0.00 collapse).
- **Modalities:** **text-only** (AA: Pro image = No, V2.5 image = Yes). Reasoning yes. No audio/video verified for Pro.
- **Pricing (verified, not free):** Xiaomi: In miss **$0.435** / hit **$0.0036**, Out **$0.87**; other routes $1.00/$3.00 (blended $0.54–$1.50). AA price $0.18 per 1M blended tracker.
- **Showcase:** 8,192-line desktop video-editor app over 1,868 calls / 11.5h autonomous (vendor).

### Raw benchmarks found

- Tau2: **94.2%** (Sophon, best); IFBench **79.9%**; LCR **73.3–77.7%**; SciCode **50.2%**; TB Hard **43.2%**; GPQA **86.6%**; HLE **35.7%**; MMLU-Pro 85.1% / base 68.5%; Intelligence Index **42.9–43** (AA); Coding Index **60.2**; Speed 34–37 tok/s, TTFT 3.78–4.56s
- Base-model table (pre-post-train, for context only): BBH 88.4, MMLU 89.4, DROP 86.3, HumanEval+ 75.6, LiveCode v6 39.6, AgentLess SWE 35.7 — do not mix with instruct scores above.
- Vendor claims: #1 open on GDPVal-AA and ClawEval; rivals Opus 4.6 on demanding agents.
- Claw-Eval: vendor #1-open claim but **no isolated public Claw-Eval Avg number in fetched sources** — listed as claim, not score.
- BenchmarkList/Sophon: ECI 148.08 #60/346, Open #26/137, 24 evals, 45 benchmarks tracker.

### Normalized scores (1–100)

- **Tool use: 82/100.** Tau2 94.2%, IFBench 79.9%, 1k+ call coherence, vendor #1-open GDPVal/Claw claims. TB Hard 43.2% caps higher.
- **Reasoning: 78/100.** GPQA 86.6%, HLE 35.7%, LCR ~75%, Index 43 — strong open, below 90%+ frontier.
- **Context window: 100/100.** 1M with demonstrated 1M GraphWalks retention.
- **Multimodal: 15/100.** Text-only for Pro (use V2.5 Free for omni).
- **Coding: 82/100.** Vendor frontier-coding + Coding Index 60.2 + SciCode 50.2%; base-code numbers excluded.
- **Cost efficiency: 85/100.** Paid open rates ($0.435/$0.87) cheap for 1T class; would be 100 at $0.
- **Overall Score: 74/100.** Top open long-horizon Pro; pair with V2.5 Free when vision/audio needed.

---

## Scoring methodology (v1, 2026-09-17)

All dimensions 1–100, higher = better. Score raw benchmarks first, then normalize.

- **Tool use:** Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, OSWorld/AutomationBench, tool-call efficiency. Frontier ref: TB2.1 ~88%+, Tau3 ~50%+, GDPval ~1750+ → 90–100. Mid: TB2.1 ~45–60%, Tau3 ~10–25%, GDPval ~900–1200 → 50–70. Missing Claw-Eval = note N/A, slight penalty (no hallucinated score).
- **Reasoning:** GPQA Diamond, HLE, MRCR/LCR, CritPt, Intelligence Index. Frontier ref: GPQA 90%+, HLE 40%+, MRCR 95%+ to 1M, Index 60+ → 90–100. Mid: GPQA 60–80%, HLE <10%, LCR <40%, Index 20–35 → 55–65.
- **Context window:** tiered. ≥1M = 95–100 (100 if ≥98% retrieval at 512K+). 500K–1M = 85–94. 200K–500K = 65–84 (200K = 70). 100K–200K = 50–64. <100K scales down to 10–49. Max output <64K noted as caveat, not separate score.
- **Multimodal:** text-only = 10–20. +image in = 60–70. +video/PDF in = 75–90. +audio in or any non-text out = 90–100. This file: Big Pickle 15, Muse 85.
- **Coding:** SWE-bench Verified, DeepSWE, LiveCodeBench, SciCode, SWE-Atlas, Terminal-Bench. Frontier ref: DeepSWE 74%+, TB2.1 85%+, SciCode 55%+, Coding Index 70%+ → 90–100. Mid: LiveCode 80% but Vibe <10% and SciCode <40% → 65–75.
- **Cost efficiency:** inverse pricing on evaluated tier. $0 = 100. ~$0.10/$0.20 = 97–99. ~$0.60/$2.20 = ~92. ~$1.25/$4.25 = ~88 (adjusted + for $0.55/task Pareto lead). $3/$15 = ~60. $10/$50 = ~30. Free tiers flagged as time-limited + training-data caveat.
- **Overall Score:** arithmetic mean of 6 dimensions, rounded to integer. Equal weight v1 — revisit if team wants coding/tool-use weighted higher for agent use-case.

## Caveats

- `Big Pickle` is stealth — vendor has not disclosed weights. Scores combine direct `big-pickle` evals (SWE-Atlas 50.8%, Zen specs) with `glm-4.6` proxy benchmarks. Re-verify on `https://opencode.ai/zen/v1/models` — stealth models can be swapped without notice.
- `Muse Spark 1.3 Free` shares weights with standard 1.3; difference is pricing + training-data consent. Do not use Free tier for confidential code.
- No verified public **Claw-Eval** scores were found for either original model ID as of 2026-09-17. Do not compare Claw-Eval until both have same-harness numbers.
- Benchmark sources disagree on some GLM-4.6 numbers (e.g., Tau2 70.5% vs 76.9%, GPQA 63.2% vs 0.81) due to harness/version differences — both listed where found.
- v2 notes: `MiMo V2.5 Free` Zen cap is 200K/32K (native 1M — use native endpoint for 1M work). `Ling Fin Free` has vendor “strong” claims without public numbers — scored provisionally. `Nemotron Lightning` 262K native (1M extended per some trackers — scored 262K). `GLM 5.1`, `MiniMax M2.7`, `MiMo-V2.5-Pro` have **no Zen Free ID** — cost scored on verified paid pricing; overall would rise ~1–4 pts at $0. `MiMo V2.5` vs `Pro`: V2.5 = omni (95 multimodal), Pro = text-only long-horizon (15 multimodal, 100 context). Tau3 numbers vary by harness (AA vs RankedAGI vs vendor) — harness listed per score.

## Sources

- OpenCode Zen docs (endpoints, pricing, free-tier + privacy notes, model IDs) — https://opencode.ai/docs/zen — verified 2026-09-17
- models.dev `big-pickle.toml` (200K context, 32K out, tool_call, text-only) — https://github.com/anomalyco/models.dev/blob/dev/providers/opencode/models/big-pickle.toml
- Pi models `big-pickle` (200K / 32K / $0) — https://pi.dev/models/opencode/big-pickle
- Community skill `big-pickle.md` (GLM-4.6 consensus, Sonnet-class, 200K/32K, exit plan) — https://github.com/AftabIbrahimKazi/inkwake/blob/master/skills/models/opencode/big-pickle.md
- Grokipedia `Big Pickle model` (OpenCode Zen coding agent, GLM-4.6 consensus) — https://grokipedia.com/page/Big_Pickle_model
- Big Pickle SWE-Atlas direct eval 50.8% (63/124) — https://github.com/PhillipChaffee/big-pickle-swe-atlas
- GLM-4.6 agent/coding table (Together AI) — https://www.together.ai/models/glm-4-6
- BenchmarkList `z-ai-glm-4.6` (TB 2.1 49.4%, Tau3 10.5%, GDPval 934, SciCode 38.4%, LiveCode 81.0%, Vibe 3.1%) — https://benchmarklist.com/models/z-ai-glm-4.6
- BenchLM `glm-4-6` (overall 53.94 #107/411, τ² 76.9%, Vibe 3.09%, LCR 28.3%, HLE 5.5%, GPQA 63.2%) — https://benchlm.ai/models/glm-4-6
- ApX `GLM-4.6` (357B MoE, 200K, SWE-bench 0.68, GPQA 0.81, MMLU Pro 0.82) — https://apxml.com/models/glm-46
- ModelScope GLM-4.6 summary (128K→200K, coding/reasoning/agent gains) — https://www.modelscope.cn/models/ZhipuAI/GLM-4.6/summary
- Meta Research `Introducing Muse Spark 1.3` (2026-09-02, agentic/coding focus, 20% fewer calls, 25% fewer tokens) — http://research.meta.ai/blog/introducing-muse-spark-1-3
- kie.ai `What Is Muse Spark 1.3?` (1M context, $0.10/$0.20 Contributor vs $1.25/$4.25 Standard, IDs) — https://kie.ai/blog/what-is-muse-spark-1-3
- Artificial Analysis `Muse Spark 1.3: Meta reaches the frontier` (Index 61/62, Tau3 47%/52%, TB 85%/86%, GDPval 1709/1754, $0.55/task) — https://artificialanalysis.ai/articles/muse-spark-1-3
- Artificial Analysis model page `Muse Spark 1.3 (xhigh)` (1M, text/image/video in, $1.25/$4.25, 165 tok/s) — https://artificialanalysis.ai/models/muse-spark-1-3-xhigh
- BenchLM `muse-spark-1-3` (TB 88.8%, GDPval 1754, Tau3 50.5%, DeepSWE 75.4%, SWE-Atlas 59.4%, SciCode 58.8%, MRCR 98.5%/98.1%, LCR 83%, GPQA 93.5%, HLE 48.7%) — https://benchlm.ai/models/muse-spark-1-3
- Vercel AI Gateway changelog (1M, PDF input, Contributor = same weights, pricing table) — https://vercel.com/changelog/muse-spark-1-3-now-available-on-ai-gateway.md
- DataCamp / ExplainX / News.az summaries (MRCR table, DeepSWE 75.4 > Opus 74.0, TB 88.8 tie) — https://www.datacamp.com/pl/blog/muse-spark-1-3 and https://www.explainx.ai/blog/meta-muse-spark-1-3-launch-benchmarks-pricing-september-2026
- Terminal-Bench leaderboards (TB 4.0 / 2.0 context) — http://www.tbench.ai/ and https://benchlm.ai/benchmarks/terminalbench21
- OpenCode Zen current Free list (Big Pickle, MiMo-V2.5 Free, Ling Fin Free, Nemotron Ultra/Lightning Free, Muse 1.3 Contributor Free; paid glm-5.1, minimax-m2.7) — https://opencode.ai/docs/zen + https://dev.opencode.ai/docs/zen — verified 2026-09-17
- Ling 3.0-flash HF (124B/5.1B, 256K→1M, 10k envs, temp 0.6) — https://huggingface.co/inclusionAI/Ling-3.0-flash and Fin variant — https://huggingface.co/inclusionAI/Ling-3.0-flash-Fin
- Pi Ling Fin Free (262,144/32,768, text-only, $0) — https://pi.dev/models/opencode/ling-3-0-flash-fin-free — Vercel Fin Free (256K/32K, finance MoE) — https://vercel.com/ai-gateway/models/ling-3.0-flash-fin-free + changelog 2026-08-27
- BenchLM Ling 3.0 Flash (53.9 #110/228) — https://benchlm.ai/models/ling-3-0-flash — Independent Ling eval 7.0/10, 845 records — https://github.com/frangelbarrera/Ling-3-flash-evaluation
- models.dev mimo-v2.5-free.toml (200K/32K, text/image/audio/video, open_weights) — https://github.com/anomalyco/models.dev/blob/dev/providers/opencode/models/mimo-v2.5-free.toml — Pi MiMo V2.5 Free (200K/32K) — https://pi.dev/models/opencode/mimo-v2-5-free
- Xiaomi MiMo-V2.5 (310B/15B, 1M, omni) — http://mimo.xiaomi.com/mimo-v2-5 and Pro (1.02T/42B, 1M) — http://mimo.xiaomi.com/mimo-v2-5-pro — HF V2.5 — https://huggingface.co/XiaomiMiMo/MiMo-V2.5
- BenchmarkList mimo-v2.5 (TB2.1 63.7%, Hard 41.7%, Tau2 90.6%, GDPval 1148, SWE 71%, Vibe 42.2%, Index 38) — https://benchmarklist.com/models/xiaomi-mimo-v2.5 — RankedAGI mimo-v2-5 (SWE-Pro 56.1%, TB2.0 65.8%, Tau3 69.5%) — https://rankedagi.com/models/mimo-v2-5
- AA MiMo-V2.5 vs Pro (Index 38 vs 43, 1M both, Pro no image) — https://artificialanalysis.ai/models/comparisons/mimo-v2-5-0424-vs-mimo-v2-5-pro — Sophon Pro (Tau2 94.2%, GPQA 86.6%, HLE 35.7%, 1.1M) — https://sophon.at/models/mimo-v2-5-pro
- BenchLM muse-spark-1-2 (TB 82.9%, GDPval 1631, DeepSWE 59.3%, GPQA 90.4%, HLE 45.5%, 71.88 #11) — https://benchlm.ai/models/muse-spark-1-2 — AA 1.2 article (GDPval +260, TB +2, Tau3 +2) — https://artificialanalysis.ai/articles/muse-spark-1-2 — Benchgen 1.2 (MCP Atlas 90.3%) — https://benchgen.com/models/meta/muse-spark-1-2
- NVIDIA Nemotron 3 Ultra blog (550B/55B, 5× throughput, GDPVal 1448, TB2.0 54%, RULER 95%) — https://developer.nvidia.com/blog/nvidia-nemotron-3-ultra-powers-faster-more-efficient-reasoning-for-long-running-agents — build.nvidia card (TB2.1 56.4, SWE 71.9, Tau V3 Airline 81.5 Retail 86.4, GPQA 87, LCR 65.4) — https://build.nvidia.com/nvidia/nemotron-3-ultra-550b-a55b — AA Ultra 38 / article Elo 1378 — https://artificialanalysis.ai/articles/nvidia-nemotron-3-ultra-released
- NVIDIA Nemotron 3.5 Lightning blog (30B/3B, execution layer) — https://developer.nvidia.com/blog/nvidia-nemotron-3-5-lightning-delivers-fast-accurate-specialized-task-execution-for-long-running-agents — NIM docs 262,144 ctx, text-only — https://docs.nvidia.com/nim/large-language-models/2.0.10/get-started/advanced/get-started-nemotron-3.5-lightning.html — build.nvidia card (SWE 51.56, TB 24.58, Tau3 9.28, GDPval 832, GPQA 75.44) — https://build.nvidia.com/nvidia/nemotron-3.5-lightning-30b-a3b
- Z.ai GLM-5.1 blog (SWE-Pro 58.4, TB2.0 63.5/69.0, Tau3 70.6, HLE 31/52.3 tools, GPQA 86.2) — https://z.ai/blog/glm-5.1 — HF zai-org/GLM-5.1 — https://huggingface.co/zai-org/GLM-5.1 — AA GLM-5.1 (Index 32, 200K, $1.20/$4.40) — https://artificialanalysis.ai/models/glm-5-1
- MiniMax M2.7 official (SWE-Pro 56.22%, TB2 57%, GDPval 1495, Toolathon 46.3%, MM Claw 62.7%) — https://www.minimax.io/models/text/m27 — HF MiniMaxAI/MiniMax-M2.7 — https://huggingface.co/MiniMaxAI/MiniMax-M2.7 — Groq docs (229B/10B, 196K, SWE-Pro 56.2% TB2 57% VIBE 55.6%) — https://console.groq.com/docs/model/minimaxai/minimax-m2.7 — LLMRef M2.7 (205K, $0.279/$1.20, text-only) — https://www.llmreference.com/model/minimax-m2.7

## Per-model template (copy for new models)

```markdown
## <Model Name>

- **Name:**
- **Short description:**
- **Provider / access:**
- **Release / knowledge:**
- **IDs:**
- **Context window:**
- **Modalities:**
- **Pricing:**

### Raw benchmarks found
- Terminal-Bench:
- Tau3 / Tau2:
- Claw-Eval:
- GDPval / OSWorld / Automation:
- Reasoning (GPQA / HLE / MRCR / LCR / CritPt / Index):
- Coding (SWE-bench / DeepSWE / LiveCode / SciCode / SWE-Atlas):
- Cost per task / speed (if available):

### Normalized scores (1–100)
- **Tool use: /100.**
- **Reasoning: /100.**
- **Context window: /100.**
- **Multimodal: /100.**
- **Coding: /100.**
- **Cost efficiency: /100.**
- **Overall Score: /100.**
```

## Changelog

- 2026-09-17: created file, added Big Pickle and Muse Spark 1.3 Free with v1 methodology.
- 2026-09-17: v2 — added Ling 3.0 Flash Fin Free, MiMo V2.5 Free (= Xiaomi MiMo-V2.5 Free duplicate), Muse Spark 1.2 Free, Nemotron 3 Ultra Free, Nemotron 3.5 Lightning Free, GLM 5.1 Coding (no Free ID, paid pricing), MiniMax M2.7 (no Free ID, paid pricing), Xiaomi MiMo-V2.5-Pro (no Free ID, paid pricing). Updated summary, calculations, caveats, sources.
