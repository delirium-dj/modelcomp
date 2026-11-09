# Kimi K3 — findings by Nemotron 3 Ultra 550B A55B

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (Max effort tier) — **PREVIOUS-GEN FLAGSHIP** (superseded by Kimi K3.1 Pro, BenchLM 74.61 vs K3 69.34)
- **Short description:** Moonshot AI's 2.8T-parameter open-weight sparse-MoE flagship — **world's first open 3T-class model** — with native text/image/video understanding and 1M-token window, built for long-horizon coding, knowledge work, and deep reasoning. **Best-balanced open-weight model in batch** (BenchLM #17/1009 at 69.34, only 1.9pts below queue). **Best-in-batch long-context reasoning (AA-LCR 88.7%)** and **best-in-batch cyber-misuse refusal (94.0%)**. **CRITICAL CAVEAT: least prompt-injection-resistant model in research series (Gray Swan IPI 52.7%)**.
- **Provider / access:** Moonshot Kimi API (`kimi-k3` at `https://api.moonshot.ai/v1`), Amazon Bedrock (`moonshotai.kimi-k3`, live 2026-09-18), OpenRouter (`moonshotai/kimi-k3`), Hugging Face weights (`moonshotai/Kimi-K3`), **OpenCode Zen (`moonshotai/kimi-k3` at $3/$15/$0.30)**. **No Free ID on Zen** — paid, but open weights. Self-hosting viable on one 8-GPU 192GB node (MXFP4 weights).
- **Release / knowledge:** Hosted API launch 2026-07-16; full open weights 2026-07-27; arXiv technical report 2607.24653 2026-08-07. **Knowledge cutoff: not published in any source as of 2026-11-08.**
- **IDs:** `kimi-k3` (Kimi API/Bedrock); `moonshotai/kimi-k3` (OpenRouter/Zen); `moonshotai/Kimi-K3` (HF weights).
- **Context window:** **1,048,576 tokens total** (HF model card; AA via IntuitionLabs confirms). **Max output: configurable up to 1,048,576** (`max_completion_tokens` defaults 131,072, platform.kimi.ai docs).
- **Modalities:** Text, image, **video** in (MoonViT-V2 vision encoder; images base64, video via files API `video_url`); text out. Reasoning always on (`reasoning_effort` low/high/max, default max), returns `reasoning_content`. Tool calls: yes (incl. `tool_choice="required"`, dynamic tool loading). JSON mode: strict `json_schema`.
- **Pricing (as of 2026-11-08):** Kimi platform flat: **$3.00 in / $15.00 out / $0.30 cache hit / $3.00 cache write** (5m/1h TTL) per 1M, **no context-length tiering**. Bedrock Global: $3/$15/$0.30/$3.75. OpenRouter third-party: from **$0.1495 / $7.15** (Sail Research). **Paid only: flagship unlock requires $1 top-up; no free tier.** Moonshot's own K3.1 Pro now undercuts at $2/$10.
- **Architecture:** Open weights under custom **Kimi K3 License** (commercial use restricted — not Apache/MIT). Sparse MoE: **2.8T total / 104B activated**; 93 layers (69 Kimi Delta Attention + 24 Gated MLA + Attention Residuals); 896 routed experts, 16 selected + 2 shared (Stable LatentMoE); SiTU-GLU; 160K vocab; **401M-param MoonViT-V2 vision encoder**; native MXFP4 weights / MXFP8 activations via QAT; ~2.5× scaling efficiency vs K2. Runs on vLLM/SGLang/TokenSpeed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-02) + official Moonshot sources. **Average of 34 qualifying raters: 91.1 Overall** (Tool 90.5, Reasoning 91.5, Context 96.8, Multimodal 85.4, Coding 91.1). Queue: 91.1. Step 5 Preview: 89. GLM 5.3 Flash: 90. My original: 81. **PREVIOUS-GEN: superseded by K3.1 Pro.**

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot HF card, max, Kimi Code harness) / **85.0%** (AA max) / **80.9%** (Vals, Terminus 2) — **clears 88%+ frontier on vendor run**
- Terminal-Bench 4.0: **12.6%** (AA max) / **17.2%** (Vals, Mini-SWE-agent) — **weak on TB4 generation**
- BrowseComp: **91.2%** with 300K compaction / **90.4%** full uncompacted 1M (Moonshot)
- DeepSearchQA F1: **95.0%** (Moonshot)
- MCP-Atlas (500-task public): **84.2%**; MCPMark-Verified: **94.5%**; Toolathlon-Verified: **76.5%** (Moonshot)
- GDPval-AA v2: **Elo 1,686** (Moonshot citing AA 2026-07-23, #3 of 6) / **Elo 1,584** / 51.6% normalized (AA max) / **52.2%** (GLM, OpenRouter) — **under 1,750 frontier**
- AA Briefcase: **Elo 1,548** #2 behind Fable 5's 1,583 (Moonshot citing AA)
- OSWorld-Verified: **84.8%**; OSWorld 2.0: **58.3%**; AutomationBench: **30.8%**; APEX-Agents: **41.0%** (Moonshot; HF eval-results confirm)
- AA Agentic Index: **50.0** (GLM, max, OpenRouter) / **50.6%** (Step 5, AA)
- AA Harvey LAB v1.0: **94.6%**; DECK-Bench: **73.5%**; Hermes Bench: **71.5%** (Step 5)
- AA Tau3 Banking: **46.0%** (AA max) / **33.4%** (Moonshot citing AA 2026-07-23) — **under 50% ref**
- AA ITBench: **47.7%**; AA EnterpriseOps-Gym: **45.3%**; AA Cyber Index: **41.3%**; CWE-Bench-AA: **53.3%**; CyberGym-E2E-AA: **58.0%**; DeepsecBench-AA: **12.5%** (Step 5)
- MazeBench: **1%**; ApprenticeBench: **18%**; SpreadsheetBench 2: **34.8%** (Step 5)
- Safety: **b3 Agent Security: 88.0%**; **Cyber Misuse Refusal: 94.0%** (best in batch) (Step 5)
- **Claw-Eval / ClawProBench: no verified public score found** (Step 5 / GLM)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot max; AA 93.5%; Vals 92.9%; Epoch 93.1%) — **four-source agreement, clears 90%+ frontier**
- HLE: **43.5%** no tools / **56.0%** with tools (Moonshot HF card, max) / **46.9%** (AA max) — **clears 40%+ ref**
- AA-LCR: **88.7%** (AA max, OpenRouter) — **HIGHEST long-context-reasoning in batch** (above MiMo-V2.6-Pro 86.3%, Argon 79.7%, Opus 5.5 84.7%) / **74.7** v1.1 (Moonshot citing AA 2026-07-23) — **version/harness difference**
- CritPt: **23.4%** (Moonshot max) — **trails GPT-5.6 Sol 32.3, Fable 5 28.6**
- ARC-AGI-1: **94.5%**; ARC-AGI-2: **60.4%** (Epoch via llmbenchmark.ai, max)
- FrontierMath: Tiers 1-3 **72.2%** / Tier 4 **39.0%** (Epoch via llmbenchmark.ai); OTIS Mock AIME **97.2%**
- AA Intelligence Index: **~57 (Max)** per IntuitionLabs (Sept 2026) & ai.lounge (#2/16 tracked); earlier v4.3.2 read **43.6–44**; Low-effort **17.4** (OpenRouter) — **index version and effort change value materially**
- AA-Omniscience (Low): accuracy **42.4%** / non-hallucination **23.4%** (OpenRouter AA run) (GLM) / **index 19.7, accuracy 47.6%, hallucination 53.2%** (Step 5) — **second-worst index in batch, ahead of only MiMo-V2.6-Pro −4.5**
- MMLU-Pro (Vals): **88.0%**

Coding:

- SWE-bench Verified: **93.40%** (Vals AI independent, Mini-SWE-agent, **#8 of 88; highest-scoring open-weight model on that board**) / page frozen Sep 1 2026, reconfirmed via Ridge 2026-11-01 (GLM)
- SWE-bench Pro V2: **97.7%** (mini-swe-agent, max, llmbenchmark.ai, #4/15 — rescaled V2, provisional) (GLM)
- LiveCodeBench: **87.2%** (Vals) (GLM / Step 5)
- Vibe Code Bench v1.1: **85.0%** (Vals, OpenHands); Vibe Code Bench 1-100: **18.2%** (Vals) — **divergent harness pair** (GLM / Step 5)
- DeepSWE: **67.5%** (Moonshot; HF eval-results confirm) — **6.5pts under 74% ref** (GLM / Step 5)
- SWE-Marathon: **42.0%** (best of 6-model vendor table) (GLM)
- FrontierSWE: **81.2%** (Moonshot) / **25.9%** (AA-run v2 via llmbenchmark) — **harness/version conflict** (GLM / Step 5)
- FrontierSWE v2: **25.9%** (Step 5)
- SciCode: **58.7%** (Moonshot) / **59.5%** (AA max) (GLM / Step 5)
- AA-SciCode: **59.5%** (AA) (Step 5) — **clears 55%+ ref**
- Terminal-Bench 2.1 (coding harness): **88.3%** (Moonshot)
- Kimi Code Bench 2.0: **72.9%**; ProgramBench: **77.8%** (vendor) vs **2.0%** (Vals) — **extreme vendor-vs-independent divergence** (GLM)
- SWE-bench Multimodal: **44.2%** (Vals) (GLM)
- Frontend Code Arena (blind dev ranking): **#1 at launch, 1,679 Elo** (Arena.ai via Tom's Hardware) (GLM)
- AA Coding Index: **76.2%** (AA) (Step 5) — **clears 70% frontier ref**
- VulcanBench v3: **73.7%**; OpenHarmony Bench: **57.3%**; CursorBench 3.2: **60.8%**; ScarfBench: **61.3%**; PostTrainBench v1.1: **32.0%**; Bug Hunt Bench: **21.0 fixes** (original / Step 5)
- **SWE-bench Verified: no verified public score found** (Step 5) / **93.40% (Vals)** (GLM)

Multimodal:

- MathVision: **94.3%** / **97.8% with Python** (Moonshot) — **exceptional**
- OmniDocBench: **91.1%** (Moonshot)
- CharXiv: **84.8%** no tools / **91.3%** with tools (Moonshot)
- MMMU-Pro: **81.6%** / **83.4% with Python** / **80.5%** (AA) (Step 5 / GLM)
- BabyVision w/ Python: **85.7%** (Moonshot)
- ExtractBench: **83.17%** (Step 5)
- Design Arena: **1,335 Elo** (Step 5) / **1,336 Elo** (original)
- OfficeQA Pro: **63.3%**; PerceptionBench: **58.5%**; WorldVQA: **51.0%**; ZeroBench: **23.0%** / **41.0% with Python** (Moonshot)
- Video-MME: **90.0%** (GLM)
- **Native text + image + video in; text out; no audio input** — video tier (75-90)

Long context:

- MRCR v2 8-needle: **91.5/100 overall (#4/25 tracked)**; **73.8/100 in 512K–1M band (#2/4)** — independent leaderboard (wisgate.ai) (GLM)
- GraphWalks BFS: **90.7/100 @>128K (#1/12)**; **77.1% in 256K–1M band (#1)**; GraphWalks parents >128K: **95.4/100 (#1/7)** (wisgate.ai / anotherwrapper) (GLM)
- AA-LCR: **88.7%** (AA Max) / **74.7** v1.1 (Moonshot citing AA 2026-07-23) (GLM)
- **No NIAH / RULER score published by Moonshot or third party as of Sept 2026** (IntuitionLabs documents this gap) (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 34 qualifying raters = **91.1 Overall** (Tool 90.5, Reasoning 91.5, Context 96.8, Multimodal 85.4, Coding 91.1). Queue: 91.1. Step 5 Preview: 89. GLM 5.3 Flash: 90. My original: 81. **PREVIOUS-GEN: superseded by K3.1 Pro.**

- **Tool use: 86/100.** (was 78) TB 2.1 **88.3%** (vendor, clears 88%+ frontier), BrowseComp **91.2%**, DeepSearchQA **95.0%**, MCP-Atlas **84.2%**, MCPMark **94.5%**, Toolathlon **76.5%**, AA Harvey LAB **94.6%**, DECK-Bench **73.5%**, OSWorld-Verified **84.8%**, AA Briefcase **1,548 Elo #2**. **Capped by:** TB 4.0 **12.6-17.2%** (weak on TB4 gen), GDPval-AA **1,584-1,686 Elo** (under 1,750 frontier), AA Tau3 Banking **33.4-46.0%** (under 50% ref), AutomationBench **30.8%**, MazeBench **1%**, ApprenticeBench **18%**, **no Claw-Eval**.
- **Reasoning: 88/100.** (was 78) GPQA Diamond **93.5%** (4-source agreement, clears 90%+), HLE **43.5-56.0%** (clears 40%+), **AA-LCR 88.7% (HIGHEST in batch)**, ARC-AGI-1 **94.5%**, OTIS Mock AIME **97.2%**, MMLU-Pro **88.0%**. **Capped by:** AA Intelligence Index version spread **44-57 Max** (effort-sensitive), CritPt **23.4%** (trails GPT-5.6 Sol 32.3, Fable 5 28.6), ARC-AGI-2 **60.4%**, AA-Omniscience **index 19.7 / hallucination 53.2%** (2nd worst in batch), **no MRCR**.
- **Context window: 98/100.** (was 95) **1,048,576 tokens with output configurable to 1,048,576**; **AA-LCR 88.7% (HIGHEST in batch)**; **MRCR 73.8/100 @512K-1M (#2/4)**; **GraphWalks BFS 77.1% @256K-1M (#1)**, GraphWalks parents **95.4/100 @>128K (#1/7)** — **independent retrieval-at-depth evidence**. Held at 98 (not 100) due to no NIAH/RULER published, handful of leaders matching window size.
- **Multimodal: 85/100.** (was 70) **Native text+image+video in (MoonViT-V2); text out.** MathVision **97.8% w/Python**, OmniDocBench **91.1%**, CharXiv **91.3% w/tools**, MMMU-Pro **83.4% w/Python**, Video-MME **90.0%**, BabyVision **85.7% w/Python**, ExtractBench **83.17%**, Design Arena **1,335 Elo**. **Scored above +image-only band (60-70) due to document/math-vision depth.** **Capped by:** no audio input, no image/video generation, ZeroBench **23.0%**.
- **Coding: 91/100.** (was 85) SWE-bench Verified **93.40% (#8/88, top open-weight)** (GLM), LiveCodeBench **87.2%**, AA Coding Index **76.2%** (clears 70% ref), TB 2.1 **88.3%**, AA-SciCode **59.5%** (clears 55% ref), FrontierSWE **81.2%** (vendor, joint-strongest in batch), Frontend Code Arena **#1 1,679 Elo**. **Capped by:** DeepSWE **67.5%** (6.5pts under 74% ref), FrontierCode 2.0 **17.7%**, ProgramBench vendor-vs-Vals **77.8% vs 2.0%** (extreme divergence), **no SWE-bench Verified (Step 5)**.
- **Cost efficiency: 68/100.** (was 55) **$3/$15** with 90% cache discount ($0.30) and **open MXFP4 weights (self-hosting viable on 8-GPU 192GB node)**. Vals $0.76/test SWE-V vs Opus 5 $1.29. OpenRouter routes **$0.15/$7.15**. **Held well below 90s: $3 input = 20× MiniMax M3.1 Flash, 3× GPT-6 Astra; no free tier; K3.1 Pro undercuts at $2/$10.**
- **Overall Score: 90/100.** (was 81) Half-up mean of (86 + 88 + 98 + 85 + 91) / 5 = 448 / 5 = 89.6 → **90**. **Matches GLM 5.3 Flash (90), above Step 5 Preview (89); below average of 34 qualifying raters (91.1) and queue (91.1).** Best-fit: **Best open-weight generalist in series** — balanced across agentic, reasoning, long-context, multimodal-visual, coding; **best AA-LCR (88.7%), best cyber-misuse refusal (94.0%)**; $3/$15 with self-hosting. **ONE CAVEAT OVERRIDES ALL: Gray Swan IPI 52.7% (WORST in series, ~75× Carbon's 0.0%, 2× GPT-5.6 Sol's 27.0%) — DO NOT put in pipeline reading untrusted text/tool output/web without external injection filter.** For that use case prefer Gemini 4 Carbon (0.0%) or Opus 5.5 (1.0%).

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 89), GLM 5.3 Flash (2026-11-02, Overall 90) + official Moonshot sources (Kimi K3 launch blog, HF model card, arXiv 2607.24653, platform.kimi.ai docs, Bedrock launch). **Average of 34 qualifying raters: 91.1 Overall.** Queue: 91.1. **Critical findings:** Previous-gen (superseded by K3.1 Pro); **AA-LCR 88.7% (HIGHEST in batch)**; MRCR 73.8 @512K-1M; GraphWalks 77.1% @256K-1M (#1); SWE-V 93.4% (#8/88, top open-weight); MathVision 97.8% w/Python; Gray Swan IPI **52.7% (WORST in series)**; Cyber Misuse Refusal 94.0% (BEST); K3.1 Pro undercuts at $2/$10; open MXFP4 weights self-hostable on 8-GPU node.
- Reference URLs:
  - [Moonshot AI — Kimi K3 launch blog (primary benchmark source)](https://www.kimi.com/blog/kimi-k3)
  - [Moonshot AI — Kimi-K3 model card on Hugging Face](https://huggingface.co/moonshotai/Kimi-K3)
  - [Kimi API Platform — Kimi K3 quickstart (IDs, limits, pricing, modalities)](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart)
  - [BenchLM — Kimi K3 benchmark scores (87 rows, 69.34/100, #17/1009)](https://benchlm.ai/models/kimi-k3)
  - [Artificial Analysis — Kimi K3](https://artificialanalysis.ai/models/kimi-k3)
  - [Vals AI — SWE-bench Verified leaderboard (independent 93.40% run)](https://www.vals.ai/benchmarks/swebench)
  - [OpenRouter — Kimi K3 pricing, AA-run benchmark table](https://openrouter.ai/moonshotai/kimi-k3)
  - [IntuitionLabs — Kimi K3 long-context evaluation (1M window verification, MRCR/RULER gap)](https://intuitionlabs.ai/articles/kimi-k3-long-context-evaluation)
  - [Amazon Bedrock — Kimi K3 model card (launch 2026-09-18, Bedrock pricing)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-moonshot-ai-kimi-k3.html)
  - [ARC Prize — published semi-private results for Kimi K3](https://arcprize.org/results/moonshot-kimi-k3)
  - [VulcanBench v3 July 2026 expanded report (Kimi K3)](https://github.com/morganlinton/VulcanBench/blob/main/docs/results/v3-kimi-k3-2026-07.md)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---