# MiMo-V2.6-Free — findings by Nemotron 3 Ultra 550B A55B

- Source: Xiaomi (`mimo-v2.6-free` = OpenCode Zen free tier of `mimo-v2.6-flash`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free — **NOT A SEPARATE MODEL** (identity correction)
- **Short description:** Xiaomi's MiMo-V2.6-Flash weights served on **OpenCode Zen's $0 FREE TIER**. **Third shared-weights access tier in corpus** (after GLM-5.3-FlashX, Muse Spark 1.3 Contributor/Max). **NEGATIVE FINDING: neither BenchLM nor AA maintains a page for `mimo-v2-6-free` ID (both 404); DuckDuckGo returns no results.** All capability figures inherited from shared MiMo-V2.6-Flash weights (see `model/mimo-v2.6-flash/`) — **lineage data, not free-tier measurements.** Free lane constraints: **200K/32K context/output caps** (vs 1M/128K native), **training-data use during free period** (Zen docs), time-limited.
- **Provider / access:** **OpenCode Zen FREE TIER ($0 in/out)** (`opencode/mimo-v2-6-free`), paid fallback `xiaomi/mimo-v2.6-flash` at $0.14/$0.28 (MiMo-V2.6-Flash card). Weights on HF `XiaomiMiMo/MiMo-V2.6-Flash-RL` (MIT license). Token Harbor free route `mimo-v2.6-flash:free` (availability unverified per GLM).
- **Release / knowledge:** V2.6 generation is Xiaomi's 2026 line. **Knowledge cutoff: not disclosed.**
- **IDs:** `opencode/mimo-v2-6-free` (Zen free); `xiaomi/mimo-v2.6-flash` (paid fallback); `XiaomiMiMo/MiMo-V2.6-Flash-RL` (HF, MIT).
- **Context window:** **ZEN FREE LANE: 200,000 tokens total / 32,768 max output** (vs native 1,048,576 / 131,072). **5× reduction in window.**
- **Modalities:** **Text, image, video, audio in; text out** (repo meta.json) — full omni-modal input on free route (unusual for $0 tier).
- **Pricing (as of 2026-11-08):** **$0 in/out on Zen free lane** — methodology's 100 anchor. **Caveats: time-limited; training-data trade (Zen docs: "team is using this time to collect feedback and improve the model" — not zero-retention).** Paid fallback $0.14/$0.28 (MiMo-V2.6-Flash card, cheapest in series). Relace promo $0.087/$0.187.
- **Architecture:** Sparse MoE, **309B total / 15B active** (same as Flash); MIT-licensed weights. ~180 GB VRAM at Q4_K_M (multi-GPU tier); 33–42 tok/s.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Xiaomi sources. **Average of 27 qualifying raters: 87.4 Overall** (Tool 86.3, Reasoning 81.9, Context 94.3, Multimodal 88.7, Coding 86.1). Queue: 87.4. Step 5 Preview: 67. GLM 5.3 Flash: 85. My original: 62. **IDENTITY CORRECTION: NOT A SEPARATE MODEL — ZEN FREE TIER OF FLASH WEIGHTS; 200K/32K CAP; TRAINING-DATA TRADE.**

Agent / tool use (inherited from Flash weights — lineage data, not free-tier measurements):

- SWE-bench Verified: **92.0%** (repo meta.json, Xiaomi-reported) — **strongest single coding figure for family** (Step 5 / GLM)
- Terminal-Bench 2.1: **87.6%** (Xiaomi technical report) — under 88%+ frontier (Step 5 / GLM)
- CyberGym: **95.1%** (Xiaomi) — **HIGHEST CYBERGYM IN SERIES** (Step 5 / GLM)
- OSWorld-Verified: **80.8%**; Toolathlon-Verified: **73.6%**; JobBench: **61.2%**; AutomationBench: **52.3%** (Step 5 / GLM)
- DeepSWE: **67.8%**; AA-SciCode: **51.3%**; ProgramBench: **26.0%** (Step 5 / GLM)
- Vals TB 4.0: **24.24% ±1.51** #29/59 (NEW, beats Gemini 3.7 Flash 12.12%, Muse Spark 1.3 10.61%) (GLM)
- TB Science (Vals): **4.29%**; SRE Bench: **4.20%**; HLAB-Vals: **13.33%** (weak) (GLM)
- CyberBench v1.1 (Vals): **75.36% ±5.42** #7/47 (NEW, strong) (GLM)
- GDPval-AA: **55.4%** normalized (AA) (Step 5 / GLM)
- Vals professional (NEW): Finance Agent v2.1 **63.32%** #12/35; MedScribe **85.28%**; SAGE **83.26%**; Public Benefits **67.59%**; EMB **68.88%**; BioMysteryBench **69.26%**; MysteryMechanism **21.62%** (GLM)
- **τ³-Banking, τ²-Bench, MCP-Atlas, Claw-Eval: NO VERIFIED PUBLIC SCORE** (Step 5 / GLM) — 2 of 3 frontier refs unmeasured

Reasoning / knowledge (inherited from Flash):

- AA-HLE: **35.1%** — **FAILS 40%+ FRONTIER REF** (Step 5 / GLM)
- AA-LCR: **74.3%** (Step 5 / GLM)
- CritPt: **12.0%** (Step 5 / GLM)
- AA Intelligence Index: **37.9** (v4.3.2) → **26.7** (v5.0, ComputePrices/EveryLocalAI + BenchLM Nov 4) — **rebase, not capability drop** (GLM)
- ProofBench v1.1 (Vals): **63.00%** (NEW — strong; beats Gemini 3.7 Flash 58.0, Muse Spark 1.3 55.0) (GLM)
- AA-Omniscience: **index −10.8, accuracy 27.2%, hallucination 52.2%** (BenchLM Nov 4 refresh — minor updates from −12.7/27.0/54.4) — **WORST KNOWLEDGE-RELIABILITY IN SERIES (more incorrect than correct)** (Step 5 / GLM)
- IOI (Vals): **47.67%**; BioMysteryBench: **69.26%**; SAGE: **83.26%** (GLM)
- **GPQA Diamond, MLCR: NO VERIFIED PUBLIC SCORE FOR FLASH** (GLM)

Coding (inherited from Flash):

- DeepSWE v1.1: **67.9%** (vs Pro 71.9) — **6.1pts UNDER 74% FRONTIER REF** (GLM / Step 5)
- Vibe Code Bench v1.1 (Vals): **78.96% ±4.04** #31/123 (NEW — beats Gemini 3.7 Flash, GPT-5.6 Terra) (GLM)
- AA-SciCode: **51.3%** — **3.7pts UNDER 55%+ FRONTIER REF** (GLM / Step 5)
- MiMo Code Bench: **61.2%**; ProgramBench: **26.0%** / Vals **0.50%** (GLM)
- MiMo VisualCoding: **71.5%**; SEC Bench Pro: **47.5%** (GLM)
- SWE-bench Verified: **92.0%** (meta.json, Xiaomi) — **headline figure** (Step 5 / GLM)
- **SWE-bench Pro, LiveCodeBench, AA Coding Index: NO VERIFIED PUBLIC SCORE** (GLM)

Multimodal:

- AA-MMMU-Pro: **73.1%** (only measured vision row) (GLM / Step 5)
- Repo meta.json confirms **text, image, video, audio in; text out** on free route — unusual for $0 tier.

Long context:

- Native: **1,048,576 / 131,072**; **ZEN FREE LANE: 200,000 / 32,768** (5× reduction) (Step 5)
- AA-LCR: **74.3%** (Step 5 / GLM)
- **NO MRCR / RULER / GraphWalks FOR EXACT MODEL** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 27 qualifying raters = **87.4 Overall** (Tool 86.3, Reasoning 81.9, Context 94.3, Multimodal 88.7, Coding 86.1). Queue: 87.4. Step 5 Preview: 67. GLM 5.3 Flash: 85. My original: 62. **IDENTITY CORRECTION: NOT SEPARATE MODEL — ZEN FREE TIER OF FLASH; 200K/32K CAP; TRAINING-DATA TRADE.**

- **Tool use: 74/100.** (was 65) Inherited: TB 2.1 **87.6%**, CyberGym **95.1% (HIGHEST IN SERIES)**, OSWorld-Verified **80.8%**, Toolathlon **73.6%**, Vals TB 4.0 **24.24%** (beats Gemini 3.7 Flash 12.12%, Muse Spark 1.3 10.61%), CyberBench **75.36% #7/47**, Finance Agent **63.32% #12/35**. **No free-route measurement exists**; 200K cap doesn't change tool-use capability, only single-task context span. **Capped by:** TB 4.0 **24.24%**, TB Science **4.29%**, ExploitGym **6.0%**, **NO τ³-Banking/τ²-Bench/MCP-Atlas/Claw-Eval** — 2 of 3 frontier refs unmeasured.
- **Reasoning: 45/100.** (was 45) Inherited, **SERIES' WORST KNOWLEDGE-RELIABILITY**: AA-Omniscience **−10.8 (27.2% accuracy — more incorrect than correct)**; CritPt **12.0%**; AA-HLE **35.1% (FAILS 40%+ REF)**; AA Index **37.9→26.7 (v5 rebase)**; ProofBench **63.0%** (NEW, beats Gemini 3.7 Flash 58.0, Muse Spark 1.3 55.0). **Free lane inherits unchanged.**
- **Context window: 80/100.** (was 85) **RE-SCORED DOWN FROM INHERITED 95 FOR THIS ACCESS TIER.** Weights support 1M natively; **ZEN FREE LANE CAPS AT 200K/32K** — methodology's 200K–500K band (65-84). Scored 80 (mid-tier) because 200K is still generous but 1/5 of native window. Long-horizon work must fit cap or move to paid host.
- **Multimodal: 68/100.** (was 55) Inherited: AA-MMMU-Pro **73.1%**; repo meta.json confirms **full omni-modal (text/image/video/audio in; text out) on free route** — unusual for $0 tier. Scored at +image-in band ceiling (60-70) marginally above on single MMMU-Pro figure.
- **Coding: 70/100.** (was 60) Inherited: TB 2.1 **87.6%**, DeepSWE **67.8%**, SciCode **51.3%**, meta.json **SWE-V 92.0% (headline)**. **Free lane's 32K output cap = real constraint for repo-scale patches.**
- **Cost efficiency: 100/100.** (was 95) **$0 IN/OUT ON ZEN FREE LANE** — methodology's 100 anchor, highest cost score in series. **CAVEATS MUST TRAVEL: time-limited; training-data trade (Zen docs: "collect feedback and improve the model" — not zero-retention).** Paid fallback $0.14/$0.28 (cheapest in series) preserves option when free lane ends.
- **Overall Score: 67/100.** (was 62) Half-up mean of (74 + 45 + 80 + 68 + 70) / 5 = 67.4 → **67**. **Far below queue (87.4), average of 27 qualifying raters (87.4).** Best-fit: **BEST ZERO-COST CODING MODEL IN SERIES** — 309B/15B MIT MoE, CyberGym 95.1% (HIGHEST), TB 2.1 87.6%, SWE-V 92.0%, full omni-modal input at $0. Use for high-volume coding, bug-fix loops, multimodal agent work inside 200K. **TWO HARD CAUTIONS:** (1) **AA-Omniscience −10.8 (WORST IN SERIES) — NEVER USE AS FACTUAL ASSISTANT**; (2) free lane caps output at 32K, may train on traffic — move confidential/long-output work to paid $0.14/$0.28 host.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 67), GLM 5.3 Flash (2026-11-05, Overall 85) + official Xiaomi sources (MiMo-V2.6 technical report, HF model card, mimo.mi.com, OpenCode Zen free-tier docs, repo meta.json). **Average of 27 qualifying raters: 87.4 Overall.** Queue: 87.4. **Critical findings:** IDENTITY CORRECTION — not separate model, **Zen free tier of Flash weights (200K/32K cap, training-data trade)**; CyberGym 95.1% (HIGHEST IN SERIES); SWE-V 92.0% (headline); AA-Omniscience −10.8 (WORST IN SERIES); AA-HLE 35.1% (fails 40% ref); free lane 200K/32K vs native 1M/128K; MIT weights self-hostable; $0 with caveats (time-limited, training-data trade).
- Reference URLs:
  - [OpenCode Zen — Console models and free-model list (free-tier access, 200K/32K cap, training-data note)](https://opencode.ai/docs/zen/)
  - [Xiaomi — MiMo V2.6 Flash model page](https://mimo.mi.com/models/en-US/mimo-v2.6-flash)
  - [Xiaomi — MiMo-V2.6-Flash-RL model card on Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
  - [Xiaomi — MiMo-V2.6 technical report (source of shared-weight capability rows)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf)
  - See also: `model/mimo-v2.6-flash/` — shared-weight capability tier, refreshed earlier this session
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---