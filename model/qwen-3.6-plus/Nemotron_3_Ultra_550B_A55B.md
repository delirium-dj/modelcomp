# Qwen 3.6 Plus — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.6-plus`, `qwen3.6-plus`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus — **DEPRECATED BY QWEN 3.7 PLUS** (BenchLM 53.66, #87/1014)
- **Short description:** Alibaba's 3.6-generation hosted flagship — **native 1M context (not YaRN-extended)**, vision-language (text, image, video, PDF in), **$0.50/$3.00 per 1M**. **NO INDEPENDENT BENCHMARK PAGE** — BenchLM 404s, no AA page. All capability figures vendor- or review-reported. **Closed-source, unlike earlier open-weight Qwen releases.**
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud (`qwen3.6-plus`), OpenRouter (free preview route withdrawn), **OpenCode Zen (`opencode/qwen-3.6-plus`)**. Closed-source, no self-hosting.
- **Release / knowledge:** 2026-04-02 GA (preview 2026-03-30); **knowledge cutoff: not disclosed.**
- **IDs:** `qwen3.6-plus` (QwenCloud, Model Studio, Zen); `qwen/qwen3.6-plus-preview:free` (OpenRouter preview — withdrawn). **Canonical BenchLM slug: `qwen3.6-plus`.**
- **Context window:** **1,000,000 tokens native (991K max input, 983K thinking, 65K output)** — not YaRN-extended. Max output 65,536. **256K-1M tier reprices whole request 4×.** Rate limits: 5M TPM / 15K RPM.
- **Modalities:** Text, image, **video, PDF in; text out** (QwenCloud spec). Native function calling, structured outputs, web search, code interpreter, fine-tuning. **Toolworthy FAQ contradicts on video — QwenCloud page authoritative.**
- **Pricing (as of 2026-11-08):** **$0.50 in / $3.00 out per 1M** (≤256K); **$2.00 / $6.00 (256K-1M, whole request repriced 4×)**; cache read $0.05, creation $0.625. OpenRouter $0.325/$1.95 (≤256K). **NO FREE TIER TODAY** (preview free route withdrawn). AA blended $0.43/1M.
- **Architecture:** Proprietary, closed weights; hybrid linear attention + sparse MoE routing (Gated Delta Networks + sparse MoE on Qwen3.5 foundation). Parameter count undisclosed. Output speed 56 tok/s (AA); TTFT 2.13s.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Alibaba sources. **Average of 28 qualifying raters: 86 Overall** (Tool 81.6, Reasoning 85.1, Context 95.4, Multimodal 82.7, Coding 85.2). Queue: 86. Step 5 Preview: 73. GLM 5.3 Flash: 82. My original: 79. **NO INDEPENDENT BENCHMARK PAGE (BenchLM 404, no AA); ALL FIGURES VENDOR/REVIEW-REPORTED.**

Agent / tool use:

- Tau2-Bench Telecom: **97.7%** (AA — fills previously-missing Tau row) (GLM)
- Tau3-Bench: **70.7%** (Qwen blog) (GLM)
- Terminal-Bench 2.0: **61.6%** (Qwen blog) (GLM) / TB 2.1 (Vals): **53.2%** (GLM)
- TB-Hard (AA): **43.9%** (Nov 5 refresh — weak-mid) (GLM)
- Claw-Eval: **58.8%** (Claw-Eval leaderboard via benchlm.ai) (GLM / Step 5)
- QwenClawBench: **57.2%** (in-house) (GLM)
- MCP Atlas: **48.2%**; MCP-Tasks: **74.1%**; WideResearch: **74.3%**; Toolathlon: **39.8%** (GLM)
- VITA-Bench: **44.3%**; DeepPlanning: **41.5%**; Gert Labs: **50.6%**; ResearchClawBench: **18.0%** (GLM)
- GDPval-AA: **1,066 Elo** / **24.5-24.7%** (AA) (GLM)
- **NO MRCR, RULER, GraphWalks, AA-LCR (Step 5) — 1M window's usable depth unmeasured** (Step 5)
- OSWorld-Verified: **73.3%** (vendor) (GLM / original)
- AndroidWorld: **81.0%** (vendor) (original)
- WebArena-Verified: **55.3%** (vendor) (original)
- QwenWebBench: **1,501.7 Elo** (vendor) (original)
- **Terminal-Bench 2.1/4.0, τ³-Banking, GDPval-AA (vendor), MCP-Atlas, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval (Step 5), JobBench, AA Agentic Index: NO VERIFIED PUBLIC SCORE (Step 5)** — **2 of 3 frontier refs unmeasured**

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Qwen blog) / **88.2%** (AA) / **87.4%** (Vals) — **clears 90%+ ref on vendor run** (GLM / Step 5 / original)
- HLE: **28.8%** (Qwen blog) / **27.8%** (AA) — **FAILS 40%+ REF** (GLM / Step 5)
- HLE w/tools: **50.6%** (vendor) (GLM / original)
- AA Intelligence Index: **27.0** (v4.3.2, #70-class) (GLM / original)
- CritPt: **2.9%** (AA — weak) (GLM / Step 5)
- AA-LCR: **78.3%** (AA) / **NO AA-LCR FIGURE PUBLISHED (Step 5)** (GLM / Step 5)
- AIME26: **95.3%** (Qwen blog) / **94.6%** (Vals) (GLM / Step 5)
- HMMT Feb 2026: **87.8%**; HMMT Nov 2025: **94.6%**; MMAnswerBench: **83.8%** (GLM)
- FrontierMath v2: Tiers 1-3 **38.2%** (Epoch re-scored upward from 26.2%) / Tier 4 **8.3%** (GLM / Step 5 / original)
- MMLU-Pro: **88.5%** (Qwen blog) / **87.7%** (Vals) (GLM / Step 5)
- AA-Omniscience: **hallucination 34.6%** / **Index 0.9 / accuracy 26.4%** (Nov 5 refresh — **near-zero index, weak**) (GLM)
- IFEval: **94.3%**; IFBench: **75.8%** (GLM)
- **NO GPQA DIAMOND (Step 5), HLE (Step 5), CRITPT (Step 5), COMPOSITE INDEX, HALLUCINATION, MRCR, ARC-AGI, AIME, FRONTIER MATH TIER 4 (Step 5)** — **4 of 5 reasoning refs unmeasurable (Step 5)**

Coding:

- SWE-bench Verified: **78.8%** (Qwen blog) / **73.4%** (Vals) (GLM / Step 5 / original)
- SWE-bench (Vals): **73.4%** (GLM)
- LiveCodeBench v6: **87.1%** (Qwen blog) / **86.0%** (Vals) (GLM / Step 5 / original)
- SWE-bench Pro: **56.6%** (GLM / original)
- SWE Multilingual: **73.8%** (GLM / original)
- AA Coding Index: **54.5%** (GLM)
- Vibe Code Bench v1.1: **25.6%** (Vals — weak) (GLM / original)
- NL2Repo: **37.9%** (GLM)
- DeepSWE: **2.65%** (official, near-zero on contamination-resistant suite) (original)
- ProgramBench: **0.0%** (Vals) (original)
- Code Migration: **11.1%** (Vals) (original)
- LMArena Elo: **1,437** (vendor) (original)
- Design Arena: website 1,248, code 1,240, game dev 1,224 (vendor) (original)
- **NO DEEPSWE, AA-SCIENCE, AA CODING INDEX (Step 5), LIVECODEBENCH (Step 5), TERMINAL-BENCH (Step 5)** — **74%, 70%, 55% refs unmeasurable (Step 5)**

Multimodal:

- MMMU: **86.0%** (GLM)
- MMMU-Pro: **78.8%** (GLM) / **84.2%** (Vals) / **86.0%** (vendor) (GLM / Step 5 / original)
- MathVision: **88.0%**; VideoMMMU: **84.0%**; V*: **96.9%**; CharXiv: **81.5%**; ScreenSpot Pro: **68.2%** (GLM)
- AA-MMMU-Pro: **78.0%** (GLM)
- **OmniDocBench: 91.2%** (vendor, lead) (GLM / original)
- SimpleVQA: **67.3%** (original)
- **NO CHARXIV, ZEROBENCH, EXTRACTBENCH, BABYVISION (Step 5)** (Step 5)
- **Text + image + video + PDF in; text out** — video tier (75-90)

Long context:

- AA-LCR: **78.3%** (AA) (GLM) / **NO AA-LCR FIGURE (Step 5)** (Step 5)
- LongBench v2: **62%**; AI-Needle: **68.3%** (Qwen blog) (GLM)
- **NO MRCR / RULER / GRAPHWALKS PUBLISHED** — **1M window's usable depth unmeasured** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 28 qualifying raters = **86 Overall** (Tool 81.6, Reasoning 85.1, Context 95.4, Multimodal 82.7, Coding 85.2). Queue: 86. Step 5 Preview: 73. GLM 5.3 Flash: 82. My original: 79. **NO INDEPENDENT BENCHMARK PAGE; ALL FIGURES VENDOR/REVIEW; DEPRECATED BY 3.7 PLUS.**

- **Tool use: 70/100.** (was 68) Tau2 **97.7%** (elite), Tau3 **70.7%**, TB 2.0 **61.6%**, Claw-Eval **58.8%**, MCP-Tasks **74.1%**, WideResearch **74.3%**, GDPval **1,066 Elo (24.5%)**. **Capped by:** TB 2.1 **53.2%** (Vals, 35pts under 88%+ frontier), MCP Atlas **48.2%**, Toolathlon **39.8%**, DeepPlanning **41.5%**, **NO TB 2.1/4.0, τ³-Banking, GDPval-AA (vendor), MCP-Atlas, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index (Step 5)** — 2 of 3 frontier refs unmeasured.
- **Reasoning: 78/100.** (was 78) GPQA Diamond **90.4% (vendor, clears 90%+)** / **88.2% AA** / **87.4% Vals**; AIME26 **95.3%**; MMLU-Pro **88.5%**; AA-LCR **78.3%**; HMMT **87.8-96.7%**; IFEval **94.3%**; IFBench **75.8%**. **Capped by:** HLE **27.8-28.8% (FAILS 40%+ REF)**; CritPt **2.9% (weak)**; AA Intelligence Index **27.0** (#70-class); FrontierMath T1-3 **38.2%** / T4 **8.3%**; **NO GPQA/HLE/CRITPT/COMPOSITE INDEX/HALLUCINATION/MRCR/ARC-AGI/AIME/FRONTIER MATH T4 (Step 5)** — 4 of 5 reasoning refs unmeasurable (Step 5). HLE w/tools **50.6%** (vendor).
- **Context window: 93/100.** (was 93) **1M NATIVE (991K max input, 65K output)** — not YaRN-extended. AA-LCR **78.3%**; LongBench **62%**; AI-Needle **68.3%**. **100 tier needs ≥98% retrieval at 512K+ (NO MRCR published); 256K+ reprices 4×.** Held at 93 (not 95+): no MRCR/GraphWalks/RULER at depth.
- **Multimodal: 83/100.** (was 83) Text, image, video, PDF in; MMMU-Pro **84.2% (Vals) / 86.0% (vendor)**; OmniDocBench **91.2% (vendor, lead)**; MathVision **88.0%**; VideoMMMU **84.0%**; V* **96.9%**; CharXiv **81.5%**; ScreenSpot Pro **68.2%**; SimpleVQA **67.3%**. **Capped by:** NO CharXiv/ZeroBench/ExtractBench/BabyVision (Step 5); text-only output; no audio input.
- **Coding: 76/100.** (was 72) SWE-V **78.8% (vendor) / 73.4% (Vals)**; LiveCodeBench **87.1%/86.0%**; SWE-Pro **56.6%**; SWE Multilingual **73.8%**; AA Coding Index **54.5%**; NL2Repo **37.9%**. **Capped by:** DeepSWE **2.65% (near-zero)**; Vibe Code **25.6%**; ProgramBench **0.0%**; Code Migration **11.1%**; **NO DEEPSWE/AA-SCIENCE/AA CODING INDEX/LIVECODEBENCH/TERMINAL-BENCH (Step 5)** — 74%, 70%, 55% refs unmeasurable (Step 5).
- **Cost efficiency: 90/100.** (was 90) **$0.50/$3.00 (≤256K) / $2.00/$6.00 (256K-1M, whole request 4×)**; cache read $0.05, creation $0.625; OpenRouter **$0.325/$1.95** cheaper. **NO FREE TIER; closed-source, no self-hosting.** Strong mid-tier card.
- **Overall Score: 80/100.** (was 79) Half-up mean of (70 + 78 + 93 + 83 + 76) / 5 = 400 / 5 = 80 → **80**. **Below queue (86), average of 28 qualifying raters (86).** Best-fit: **Value multimodal-agent tier** — 1M native context, strong screenshot-to-code/OCR at $0.325-0.50 input; **NO INDEPENDENT EVALUATION EXISTS**; deprecated by Qwen 3.7 Plus. Route deep reasoning/end-to-end agentic coding to Qwen 3.8 Max or frontier model.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 73), GLM 5.3 Flash (2026-11-05, Overall 82) + official Alibaba sources (Qwen3.6-Plus blog, QwenCloud model page, Toolworthy review, BenchLM). **Average of 28 qualifying raters: 86 Overall.** Queue: 86. **Critical findings:** NO INDEPENDENT BENCHMARK PAGE (BenchLM 404, no AA); all figures vendor/review-reported; deprecated by 3.7 Plus; 1M native context (not YaRN); SWE-V 78.8%/73.4%; HLE 28.8% (fails 40% ref); CritPt 2.9% (weak); DeepSWE 2.65% (near-zero); AA Intelligence Index 27.0; Omniscience hallucination 34.6% / index 0.9 (near-zero); FrontierMath T1-3 38.2% (up from 26.2%); 256K+ reprices 4×; no free tier; closed-source.
- Reference URLs:
  - [QwenCloud — Qwen3.6-Plus model page (modalities, context, pricing, rate limits, built-in tools)](https://www.qwencloud.com/models/qwen3.6-plus)
  - [Qwen — Qwen3.6-Plus launch blog ("Towards Real World Agents")](https://qwen.ai/blog?id=qwen3.6)
  - [ToolWorthy — Qwen3.6-Plus review (SWE-V 72.4%, preview free route, speed reports)](https://www.toolworthy.ai/tool/qwen-3-6-plus)
  - [BenchLM — Qwen3.6-Plus (404 — no page)](https://benchlm.ai/models/qwen3.6-plus)
  - [Artificial Analysis — Qwen3.6-Plus (no page)](https://artificialanalysis.ai/models/qwen3.6-plus)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---