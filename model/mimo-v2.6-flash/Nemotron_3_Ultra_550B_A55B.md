# MiMo-V2.6-Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Xiaomi (`mimo-v2.6-flash`, `mimo-v2.6-flash-free`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash (RL checkpoint) — **BEST-RANKED OPEN-WEIGHT FLASH** (BenchLM 54.78, #76/1009; above MiMo-V2-Flash 39.3)
- **Short description:** Narrow specialist with **CyberGym 95.1% (HIGHEST IN RESEARCH SERIES, above Pro's 94.0%)** and **TB 2.1 87.6%** — set against **WORST knowledge-reliability in series (AA-Omniscience −10.8, accuracy 27.2%)**. Cheap open-weight defensive-security/terminal-coding tool. **24 benchmarks only (2nd-thinnest evidence base).**
- **Provider / access:** Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash-RL`), Xiaomi MiMo Platform, OpenRouter, **OpenCode Zen (`xiaomi/mimo-v2.6-flash` paid at $0.14/$0.28; `mimo-v2.6-flash-free` FREE tier, training-data caveat)**. Self-hosting (MIT license, ~180 GB VRAM at Q4_K_M). 11+ providers (Novita, DeepInfra, Kyma, StreamLake, OpenCode Go, EmpirioLabs, Relace promo $0.087/$0.187).
- **Release / knowledge:** Sept 2026 (RL checkpoint ~2026-09-21); **knowledge cutoff: not disclosed.**
- **IDs:** `xiaomi/mimo-v2.6-flash` (Zen/OpenRouter); `mimo-v2.6-flash-free` (Zen free); `XiaomiMiMo/MiMo-V2.6-Flash-RL` (HF/ModelScope). Community "Uncensored/Abliterated" fine-tunes exist ($0.50/$1.50) — not this model.
- **Context window:** **1,048,576 tokens (1M)**; **max output 131,072** (LiteLLM confirmed).
- **Modalities:** **Text, image, video, AUDIO in** (681M MiMo ViT + 308M AudioTokenizer + 127M audio patch encoder); text out. Reasoning (RL model, `--reasoning-parser mimo`); tool calls; JSON mode not independently verified. **Model card does not state modality set — recorded as inferred-in-place, not vendor-verified** (Step 5).
- **Pricing (as of 2026-11-08):** **FREE on Zen (`mimo-v2.6-flash-free`; training-data caveat, limited-time)**. **Paid VERIFIED at $0.14/$0.28 per 1M** (cache read $0.0028; batch 50%; input range $0.087–$0.189 across providers). **CHEAPEST RATE CARD IN ENTIRE RESEARCH SERIES** (half MiniMax M3.1 Flash's $0.15/$0.60, 1/8th GPT-5.5 Pro). MIT open weights.
- **Architecture:** Sparse MoE (MIT license). **309B total / 15B active** (HF safetensors 311B); hybrid SWA/GA backbone (48 layers, SWA 128, 256 experts / 8 activated); 5-layer speculative MTP decoder. 33–42 tok/s measured.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Xiaomi sources. **Average of 30 qualifying raters: 88.7 Overall** (Tool 86.5, Reasoning 83.6, Context 96.5, Multimodal 91.1, Coding 86.1). Queue: 88.7. Step 5 Preview: 70. GLM 5.3 Flash: 85. My original: 70. **CHEAPEST IN SERIES; 24 benchmarks only; AA-Omniscience −10.8 (WORST).**

Agent / tool use:

- CyberGym: **95.1%** (vendor) — **HIGHEST CYBERGYM IN RESEARCH SERIES** (above Pro 94.0%, DeepSeek V4.1 Flash 88.1%) (Step 5 / GLM)
- Terminal-Bench 2.1: **87.6%** (vendor, #16/193 per BenchmarkList; vs Pro 89.9%, Opus 5 89.1%) — **0.4pts short of 88%+ frontier** (GLM / Step 5)
- Terminal-Bench 4.0: **28.8%** (vendor) / **24.24% ±1.51** (Vals, NEW — beats Gemini 3.7 Flash 12.12%, Muse Spark 1.3 10.61% on same harness) (GLM / Step 5)
- TB Science (Vals): **4.29%** (weak); SRE Bench: **4.20%**; HLAB-Vals: **13.33%** (GLM)
- Toolathlon-Verified: **73.6%**; AutomationBench v1.0.6: **52.3%**; OSWorld-Verified: **80.8%**; JobBench: **61.2%**; Agents' Last Exam: **27.6%** (GLM / Step 5)
- CyberBench v1.1 (Vals): **75.36% ±5.42** #7/47 (NEW, strong) (GLM)
- MiMo Cyber Bench: **77.2%**; ExploitBench: **25.3%**; ExploitGym: **6.0%**; SEC Bench Pro: **47.5%** (GLM)
- GDPval-AA: **55.5%** normalized (AA); **no Elo figure published** (GLM) / **55.4%** (Step 5) — **under 1,750+ frontier**
- Vals Finance Agent v2.1: **63.32%** #12/35 (NEW); Finance Index: **57.15%**; Legal Index: **68.99%**; Science Index: **31.72%** (GLM)
- Vals professional (NEW): MedScribe **85.28%**; SAGE **83.26%**; EMB **68.88%**; BioMysteryBench **69.26%**; MysteryMechanism **21.62%**; Public Benefits **67.59%** (GLM)
- AA Agentic Index: **36.5** (v5-era) (GLM)
- **τ³-Banking, BrowseComp, MCP-Atlas, Toolathlon, Claw-Eval, MazeBench: NO VERIFIED PUBLIC SCORE** (Step 5 / GLM) — **2 of 3 frontier refs unmeasured**

Reasoning / knowledge:

- AA Intelligence Index: **37.9** (v4.3.2) → **26.7** (v5.0-era, ComputePrices/EveryLocalAI Nov 2, 46th percentile) — **rebase, not capability drop**; Coding Index 22.1, Agentic 36.5 on v5 (GLM)
- AA-HLE: **35.1%** — **FAILS 40%+ FRONTIER REF** (Step 5 / GLM)
- AA-LCR: **74.3%** (Step 5 / GLM)
- CritPt: **12.0%** (Step 5 / GLM)
- ProofBench v1.1 (Vals): **63.00% ±4.85** (NEW — strong; beats Gemini 3.7 Flash 58.0, Muse Spark 1.3 55.0) (GLM)
- AA-Omniscience: **index −12.7, accuracy 27.0%, hallucination 54.4%** (GLM) / **index −10.8, accuracy 27.2%, hallucination 52.2%** (Step 5) — **NEGATIVE INDEX = WORST IN SERIES (substantially more incorrect than correct)**
- **GPQA Diamond, HLE (vendor), FrontierMath, ARC-AGI, MRCR: NO VERIFIED PUBLIC SCORE** — **primary reasoning reference + every maths/physics ref absent** (Step 5 / GLM)
- MMLU-Pro/AGIEval/C-Eval: base-model internal rows from technical report (GLM)

Coding:

- DeepSWE v1.1: **67.9%** (vs Pro 71.9%, Opus 5 74.0%) — **6.1pts under 74% frontier ref** (GLM / Step 5)
- Vibe Code Bench v1.1 (Vals): **78.96% ±4.04** #31/123 (NEW — beats Gemini 3.7 Flash 70.39%, GPT-5.6 Terra 74.59%) (GLM)
- AA-SciCode: **51.3%** — **3.7pts UNDER 55% FRONTIER REF** (GLM / Step 5)
- MiMo Code Bench: **61.2%**; ProgramBench: **26.0%** / Vals **0.50%** (GLM)
- TB 2.1 (coding harness): **87.6%**; MiMo VisualCoding: **71.5%** (GLM)
- **SWE-bench Verified, AA Coding Index, LiveCodeBench, SWE-bench Pro: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **70%-index & SWE-bench refs unmeasured**

Multimodal:

- AA-MMMU-Pro: **73.1%** (only measured vision row) (GLM / Step 5)
- **CharXiv, ExtractBench, ZeroBench, BabyVision: NO VERIFIED PUBLIC SCORE** (Step 5 / GLM)
- **Text, image, video, audio in (dedicated encoders); text out** — meets omni-tier floor (90-100)

Long context:

- 1M window; AA-LCR: **74.3%** (Step 5 / GLM)
- **NO MRCR / RULER / GraphWalks AT DEPTH** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 30 qualifying raters = **88.7 Overall** (Tool 86.5, Reasoning 83.6, Context 96.5, Multimodal 91.1, Coding 86.1). Queue: 88.7. Step 5 Preview: 70. GLM 5.3 Flash: 85. My original: 70. **CHEAPEST IN SERIES; 24 benchmarks; AA-Omniscience −10.8 (WORST).**

- **Tool use: 78/100.** (was 78) CyberGym **95.1% (HIGHEST IN SERIES)**, TB 2.1 **87.6% #16/193** (0.4pts under 88% frontier), OSWorld-Verified **80.8%**, Toolathlon **73.6%**, JobBench **61.2%**, CyberBench **75.36% #7/47**, Finance Agent **63.32% #12/35**, MedScribe **85.28%**, GDPval-AA **55.5% normalized**. **Capped by:** TB 4.0 **24.24-28.8%**, TB Science **4.29%**, ExploitGym **6.0%**, Agents' Last Exam **27.6%**, AutomationBench **52.3%**, **NO τ³-Banking/BrowseComp/MCP-Atlas/Claw-Eval/MazeBench** — 2 of 3 frontier refs unmeasured.
- **Reasoning: 60/100.** (was 55) ProofBench **63.0%** (NEW, beats Gemini 3.7 Flash 58.0, Muse Spark 1.3 55.0), AA-LCR **74.3%**, AA Index v4.3.2 **37.9** (offsets v5.0 rebase to 26.7). **Capped by:** AA-HLE **35.1% (FAILS 40%+ ref)**, **AA-Omniscience −12.7 (WORST IN SERIES — more incorrect than correct)**, CritPt **12.0%**, **GPQA Diamond, FrontierMath, ARC-AGI, MRCR: ALL ABSENT** — primary reasoning ref + every maths/physics ref missing.
- **Context window: 95/100.** (was 90) **1M/131K verified** (≥1M tier); AA-LCR **74.3%**. **Held at tier floor: NO MRCR/GraphWalks/RULER; AA-LCR 74.3% weakest in batch.**
- **Multimodal: 70/100.** (was 55) **Omni-input (text+image+video+audio via dedicated encoders); text out.** AA-MMMU-Pro **73.1%**. **Scored at +image-in band ceiling (60-70) on single measured row — EXPLICITLY AN INFERENCE (model card states no modality set).** If Xiaomi confirms omni-modal → 90s; if text-only → 10-20.
- **Coding: 74/100.** (was 72) TB 2.1 **87.6%** (clears 85% ref), Vibe Code **78.96% #31/123** (beats Gemini 3.7 Flash, GPT-5.6 Terra), DeepSWE **67.9%** (6.1pts under 74% ref), MiMo VisualCoding **71.5%**, MiMo Code Bench **61.2%**. **Capped by:** AA-SciCode **51.3% (3.7pts UNDER 55% ref)**, DeepSWE **67.9% (under 74% ref)**, ProgramBench **26.0%/0.50%**, TB 4.0 **24.24%**, **NO SWE-V/AA Coding Index/LiveCodeBench/SWE-Pro** — 70%-index & SWE-bench refs unmeasured.
- **Cost efficiency: 98/100.** (was 95) **CHEAPEST RATE CARD IN SERIES: $0.14/$0.28** (half MiniMax M3.1 Flash, 1/8th GPT-5.5 Pro); **FREE on Zen** (training-data caveat); promos to $0.087/$0.187; MIT open weights (self-host ~180 GB VRAM). **Held just under 99: not $0 route, no published cost/task measurement.**
- **Overall Score: 75/100.** (was 70) Half-up mean of (78 + 60 + 95 + 70 + 74) / 5 = 377 / 5 = 75.4 → **75**. **Below queue (88.7), average of 30 qualifying raters (88.7).** Best-fit: **Outstanding cheap defensive-security/terminal-coding specialist** — **CyberGym 95.1% (HIGHEST IN SERIES)**, TB 2.1 87.6%, OSWorld-Verified 80.8%, Vibe Code 78.96%, ProofBench 63.0%, **omni-input at $0.14/$0.28 (cheapest in series) + MIT open weights**. **TWO HARD CAUTIONS:** (1) **AA-Omniscience −10.8 (WORST IN SERIES) — must firewall from factual/retrieval workloads**; (2) evidence base 24 benchmarks (2nd-thinnest), mostly vendor-run — 70 is floor on evidence, not ceiling.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 70), GLM 5.3 Flash (2026-11-05, Overall 85) + official Xiaomi sources (MiMo-V2.6 technical report, HF model card, MiMo platform pricing). **Average of 30 qualifying raters: 88.7 Overall.** Queue: 88.7. **Critical findings:** Cheapest in series ($0.14/$0.28 + Free Zen); **CyberGym 95.1% (HIGHEST IN SERIES)**; TB 2.1 87.6%; omni-input (text/image/video/audio); **AA-Omniscience −10.8 (WORST IN SERIES)**; AA-HLE 35.1% (fails 40% ref); 24 benchmarks only (2nd-thinnest); GPQA/FrontierMath/ARC/MRCR all missing; AA-SciCode 51.3% (under 55% ref); DeepSWE 67.9% (under 74% ref); Vibe Code 78.96% (beats Gemini 3.7 Flash/GPT-5.6 Terra).
- Reference URLs:
  - [Xiaomi — MiMo-V2.6-Flash-RL model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
  - [Xiaomi — MiMo-V2.6 technical report (source of most benchmark rows; also supplies Pro's numbers)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf)
  - [BenchLM — MiMo-V2.6-Flash benchmark scores (24 rows, 54.78/100, #76/1009)](https://benchlm.ai/models/mimo-v2-6-flash)
  - [Artificial Analysis — MiMo-V2.6-Flash](https://artificialanalysis.ai/models/mimo-v2-6-flash)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---