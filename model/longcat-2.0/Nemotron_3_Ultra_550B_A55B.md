# LongCat-2.0 — findings by Nemotron 3 Ultra 550B A55B

- Source: Meituan (`longcat-2.0`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0 — **REVEALED IDENTITY BEHIND `owl-alpha` STEALTH LISTING** (refreshed same batch)
- **Short description:** Meituan's open-weight flagship — **1.6T total / ~48B active MoE with LongCat Sparse Attention (LSA) + N-gram Embedding** trained on 35T+ tokens with 100s of billions of 1M-context tokens. **SWE-bench Pro 59.5 (edging GPT-5.5 58.6), TB 2.1 70.8 (near Gemini 3.1 Pro), native 1M context at ~1/6 GPT-5.5 price, MIT licensed, self-hostable.** **BenchLM: NO PAGE IN ANY SPELLING (`longcat-2.0`, `longcat-2-0`, `LongCat-2.0` ALL 404).** **NO INDEPENDENT BENCHMARK EVIDENCE SURFACED SINCE 2026-09-28 (BenchLM: 0 of 759 rows "coming soon").** **TEXT-ONLY (vision in separate 2.5 preview).**
- **Provider / access:** LongCat platform (`longcat.ai` / `api.longcat.chat`, OpenAI/Anthropic-compatible), OpenRouter; **weights on HF/ModelScope (`meituan-longcat/LongCat-2.0`, MIT — BF16/INT8/FP8).** **MIT LICENSE — SELF-HOSTING FREE (16x H20 recommended).** **NO OPENCODE ZEN FREE ID FOR THIS MODEL** (Zen free tier is `longcat-2.5-preview-free`, different entry).
- **Release / knowledge:** 2026-06-30 release (weights Jul 8, 2026); **knowledge cutoff: NOT DISCLOSED.**
- **IDs:** `meituan/longcat-2.0` (repo id); LongCat platform model id. **NO ZEN FREE ID FOR THIS MODEL** (Zen free is `longcat-2.5-preview-free`).
- **Context window:** **1M TOKENS NATIVE** (trained on 100s of billions of 1M-context tokens with LSA); max output 128K. **NO EXPLICIT DEPLOYMENT CONTEXT CAP PUBLISHED BEYOND 1M-CONTEXT TRAINING.**
- **Modalities:** **TEXT IN → TEXT OUT ONLY** — **NO VISION/AUDIO INPUT** (vision arrives in separate 2.5 preview, explicitly not imported). Reasoning (thinking on/off via chat template, `save_reasoning_content`); tool calls (function-calling chat template).
- **Pricing (as of 2026-11-08):** List **$0.75/M in, $2.95/M out** with **free cached context reads**; promotional **$0.30/$1.20**; **MIT weights = free self-hosting** (16x H20 recommended). **NO VERIFIED PUBLIC PRICING (GLM) — paid-only.**
- **Architecture:** Sparse MoE, **1.6T total / ~48B active** (HF safetensors 1.8T incl. 135B N-gram Embedding); **LongCat Sparse Attention (SI/CLI/HI) + 3-step MTP + N-gram Embeddings**; trained on AI ASIC superpods, 35T+ tokens, 100s of billions 1M-context tokens. **MIT LICENSE.**

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-07) + official Meituan sources. **Average of 25 qualifying raters: 71 Overall** (Tool 78.4, Reasoning 80.5, Context 93, Multimodal 23, Coding 80.5). Queue: 71. Step 5 Preview: 64. GLM 5.3 Flash: 68. My original: 40. **NO INDEPENDENT BENCHMARK EVIDENCE SURFACED SINCE 2026-09-28 (BENCHLM 0 OF 759 ROWS "COMING SOON"); ALL VENDOR-RUN; PRODUCTION-TRAFFIC EVIDENCE (10.1T MONTHLY TOKENS, #1 HERMES AGENT); TEXT-ONLY.**

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (HF model card / harborframework) — vs Gemini 3.1 Pro 70.7%, GPT-5.5 73.8%, Opus 4.7 71.7%, Opus 4.8 78.9% (GLM / Step 5)
- SWE-bench Pro: **59.5%** — edging GPT-5.5 58.6%, vs Opus 4.6 57.3%, Opus 4.8 69.2% (GLM / Step 5)
- SWE-bench Multilingual: **77.3%** (GLM / Step 5)
- FORTE: **73.2%** (AGI-Eval) — ties Opus 4.6 (GLM / Step 5)
- BrowseComp: **79.9%** — trails best frontier by ~5pts (GLM / Step 5)
- RWSearch: **78.8%** (GLM / Step 5)
- IFEval: **90.0%** — trails Gemini 3.1 Pro 96.1, GPT-5.5 95.0 (GLM / Step 5)
- Writing Bench: **83.8%**; IMO-AnswerBench: **81.8%** (beats GPT-5.5 79.5%) (GLM / Step 5)
- GPQA Diamond: **88.9%** — just under 90%+ frontier (GLM / Step 5)
- **PRODUCTION-TRAFFIC EVIDENCE (UNIQUE IN SERIES): ~10.1T MONTHLY TOKENS, 559B/DAY, +242% MoM; #1 HERMES AGENT, #2 CLAUDE CODE, #3 OPENCLAW BY MONTHLY VOLUME** (Step 5)
- **GDPval-AA, Tau2/3-Bench, MCP-Atlas, OSWorld, Toolathlon, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, AA Intelligence Index, AA-Omniscience, AA Agentic Index: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **ALL REASONING/KNOWLEDGE/RELIABILITY/AGENTIC REFS UNMEASURED**

Coding:

- Terminal-Bench 2.1: **70.8%** — vs Gemini 3.1 Pro 70.7%, GPT-5.5 73.8%, Opus 4.7 71.7%, Opus 4.8 78.9% (GLM / Step 5)
- SWE-bench Pro: **59.5%** — edging GPT-5.5 58.6% (GLM / Step 5)
- SWE-bench Multilingual: **77.3%** (GLM / Step 5)
- FORTE: **73.2%** (ties Opus 4.6) (GLM / Step 5)
- **SWE-bench Verified, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, TB 4.0, Vibe Code Bench, FrontierCode: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **85%, 74%, 70%, 55% REFS UNMEASURED**

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (HF model card) — vs Gemini 3.1 Pro 94.3%, GPT-5.5 93.6%, Opus 4.8 92.4% (GLM / Step 5)
- IMO-AnswerBench: **81.8%** (beats GPT-5.5 79.5%) (GLM / Step 5)
- IFEval: **90.0%** (trails Gemini 3.1 Pro 96.1%, GPT-5.5 95.0%) (GLM / Step 5)
- Writing Bench: **83.8%** (GLM / Step 5)
- **HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, AA Intelligence Index, AA-Omniscience: NO VERIFIED PUBLIC SCORE** — **COMPOSITE DEPTH + RELIABILITY ENTIRELY UNMEASURED** (GLM / Step 5)

Multimodal:

- **TEXT-ONLY (text in → text out)** — **NO VISION/AUDIO INPUT** (vision in separate 2.5 preview, explicitly not imported) (GLM / Step 5)
- **NO MULTIMODAL BENCHMARKS** (GLM / Step 5)

Long context:

- **1M TOKENS NATIVE** (trained on 100s of billions 1M-context tokens with LSA); max output 128K (GLM / Step 5)
- **NO MRCR / RULER / GRAPHWALKS / NEEDLE-RETRIEVAL CURVE PUBLISHED** — usable depth spec claim, not measurement (GLM / Step 5)
- **NO LONG-CONTEXT RETRIEVAL REPORTED** (1M-context training advertised, no MRCR/RULER/GraphWalks) (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 25 qualifying raters = **71 Overall** (Tool 78.4, Reasoning 80.5, Context 93, Multimodal 23, Coding 80.5). Queue: 71. Step 5 Preview: 64. GLM 5.3 Flash: 68. My original: 40. **NO INDEPENDENT EVIDENCE SINCE 2026-09-28; BENCHLM 0 OF 759 ROWS "COMING SOON"; ALL VENDOR-RUN; PRODUCTION-TRAFFIC EVIDENCE (10.1T/MONTH, #1 HERMES); TEXT-ONLY; NO INDEPENDENT VERIFICATION.**

- **Tool use: 70/100.** (was 30) FORTE **73.2% (ties Opus 4.6)**, BrowseComp **79.9%**, RWSearch **78.8%**, TB 2.1 **70.8%** (upper-mid), TB 2.1 near Gemini 3.1 Pro. **Capped by:** TB 2.1 **trails Opus 4.8 78.9 (8.1pt gap)**; BrowseComp trails best frontier by ~5pts; **NO MCP-Atlas/Toolathlon/OSWorld/GDPval-AA/AA Agentic Index** — 2 of 3 frontier refs unmeasured; production-traffic evidence (~10.1T monthly tokens, #1 Hermes Agent) attributed as credibility anchor.
- **Reasoning: 76/100.** (was 30) GPQA Diamond **88.9% (just under 90%+ frontier)**; IMO-AnswerBench **81.8% (beats GPT-5.5 79.5%)**; IFEval **90.0%**; Writing Bench **83.8%**; Writing Bench **83.8%**. **Capped by:** NO HLE/CritPt/AA-LCR/ARC-AGI/AIME/MATH/MMLU-Pro/AA Intelligence Index/AA-Omniscience — **COMPOSITE DEPTH + RELIABILITY ENTIRELY UNKNOWN**; IFEval **90.0% trails Gemini 3.1 Pro 96.1 / GPT-5.5 95.0 (5-6pt gap)**; Opus checkpoints regress below IFEval 90.0.
- **Context window: 90/100.** (was 95) **1M NATIVE (LSA, 100s of billions 1M-context tokens)**; linear-complexity serving. **Docked to 90 (not ≥1M top): NO MRCR/RULER/GRAPHWALKS/NEEDLE-RETRIEVAL — window's usable depth SPEC CLAIM, NOT MEASUREMENT.**
- **Multimodal: 12/100.** (was 15) **TEXT-ONLY (text in → text out)** — methodology text-only = 10-20. **VISION IN SEPARATE 2.5 PREVIEW, EXPLICITLY NOT IMPORTED.** No multimodal benchmarks.
- **Coding: 74/100.** (was 30) SWE-bench Pro **59.5% (edging GPT-5.5 58.6%)**; TB 2.1 **70.8% (near Gemini 3.1 Pro 70.7)**; SWE Multilingual **77.3%**; FORTE **73.2% (ties Opus 4.6)**. **Capped by:** TB 2.1 vs Opus 4.8 **78.9 (8.1pt gap)**; SWE-Pro vs Opus 4.7/4.8 **64.3/69.2 (4.8-9.7pt gaps)**; **NO SWE-V/LCB/AA-SciCode/AA Coding Index/DeepSWE** — 85%, 74%, 70%, 55% refs unmeasured.
- **Cost efficiency: 90/100.** (was 95) **$0.30-0.75/M in, $1.20-2.95/M out** with **free cached reads**; promo **$0.30/$1.20**; **MIT weights = free self-hosting** (16x H20 recommended). **Roughly 6-10x cheaper than GPT-5.5 for same SWE-Pro class**; promo pricing volatility flagged.
- **Overall Score: 64/100.** (was 40) Half-up mean of (70 + 76 + 90 + 12 + 74) / 5 = 322 / 5 = 64.4 → **64**. **Matches Step 5 Preview (64); below queue (71), average of 25 qualifying raters (71).** Best-fit: **OPEN-WEIGHTS AGENTIC-CODING VALUE PICK** — GPT-5.5-class SWE-Pro, native 1M context at ~1/6 price, MIT-licensed self-hostable, **PRODUCTION-TRAFFIC EVIDENCE (10.1T/MONTH, #1 HERMES AGENT)**. **Three cautions:** (1) **TEXT-ONLY** (vision in 2.5 preview); (2) **EVERY NUMBER IS VENDOR-REPORTED — NO INDEPENDENT RUN**; (3) **SUPERSEDED BY 2.5 PREVIEW (vision) AND FRONTIER TIER ON TB 2.1 (Opus 4.8 78.9 vs 70.8)** — value pick, not capability pick. **QUEUE 71 DISAGREES WITH REPORT 64 — BOTH STATED SIDE BY SIDE.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 64), GLM 5.3 Flash (2026-11-07, Overall 68) + official Meituan sources (LongCat-2.0 HF model card, eval-results hub, LongCat platform docs, OpenRouter pricing, repo meta.json). **Average of 25 qualifying raters: 71 Overall.** Queue: 71. **Critical findings:** NO INDEPENDENT EVIDENCE SINCE 2026-09-28 (BENCHLM 0 OF 759 ROWS); **ALL VENDOR-RUN**; **PRODUCTION-TRAFFIC EVIDENCE (10.1T MONTHLY TOKENS, #1 HERMES AGENT)**; SWE-Pro 59.5% (edging GPT-5.5); TB 2.1 70.8%; GPQA 88.9% (under 90%+); IFEval 90.0%; FORTE 73.2% (ties Opus 4.6); **TEXT-ONLY (vision in 2.5 preview)**; MIT license self-hostable; 1M native context (LSA); no independent evidence; queue 71 disagrees with report 64.
- Reference URLs:
  - [Meituan LongCat — platform and API documentation (`longcat.ai` / `api.longcat.chat`)](https://longcat.ai/)
  - [Hugging Face / ModelScope — meituan-longcat/LongCat-2.0 (MIT weights, BF16/INT8/FP8)](https://huggingface.co/meituan-longcat)
  - [OpenRouter — Meituan LongCat routes ($0.30/$1.20 promo, $0.75/$2.95 list)](https://openrouter.ai/meituan)
  - [Repo curated meta — `model/longcat-2.0/meta.json` (1M/128K, text-only, MIT, dual pricing)](model/longcat-2.0/meta.json)
  - See also: `model/owl-alpha/` — stealth listing this model was revealed as, refreshed same batch; `model/longcat-2.5-preview/` — vision-bearing successor generation
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---