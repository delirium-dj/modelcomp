# DeepSeek V4 Vision Exp — findings by Nemotron 3 Ultra 550B A55B

- Source: DeepSeek (`deepseek-v4-flash-vision-exp`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp (Experimental vision model)
- **Short description:** DeepSeek's **first native multimodal experimental model in the V4 family**, built on V4-Flash-0731 base by adding a vision encoder. **Real vendor name: `DeepSeek-V4-Flash-Vision-Exp` (API: `deepseek-v4-flash-vision-exp`)** — repo folder slug `deepseek-v4-vision-exp` is an abbreviation matching no vendor/tracker ID. BenchLM and LLMLearner 404 on repo spelling. **Experimental multimodal model with near-parity to Opus 4.8 on multimodal agent benchmarks (2:2 tie) at fraction of price.** Weights MIT-licensed (~168 GB), API only realistic path.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash-vision-exp`), DeepInfra, OpenCode Zen (`opencode/deepseek-v4-vision-exp`, **free Zen tier** per meta.json). Weights open MIT (Hugging Face, 2026-08-31). No self-hosting in practice (~168 GB).
- **Release / knowledge:** 2026-08-21 release (llm-stats); announced 2026-08-22; weights 2026-08-31. **Knowledge cutoff not disclosed.**
- **IDs:** `deepseek-v4-flash-vision-exp` (DeepSeek API), `deepseek/deepseek-v4-flash-vision-exp` (DeepInfra), `opencode/deepseek-v4-vision-exp` (Zen).
- **Context window:** **CRITICAL CONFLICT — 1.0M in/out per llm-stats on DeepSeek/DeepInfra (both providers, 1M/1M) vs 200K in repo meta.json — 5x discrepancy, unresolved.** Conservative reading (200K) used for scoring.
- **Modalities:** Text, image in; text out. **No video input** despite "multimodal" label. Text, image in; text out.
- **Pricing (as of 2026-11-08):** DeepSeek API **$0.22/M in, $0.007/M cached, $0.66/M out**; DeepInfra **$0.44/M in, $0.14/M cached, $1.32/M out** — **2x spread on same weights**. DeepSeek API: 97% cache discount. Free Zen tier (meta.json). **2x spread on same weights.**
- **Architecture:** MoE with vision encoder added to V4-Flash-0731 base. **Parameter count contested: 304.6B total / 256 experts (~168 GB) vs 284B total / 13B active.** Both agree local inference impractical (~168 GB).

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from Step 5 Preview (2026-11-06) + official DeepSeek sources. **Average of 26 qualifying raters: 85.9 Overall** (Tool 86.1, Reasoning 83.5, Context 94.5, Multimodal 80.6, Coding 84.9). Queue: 85.9. Step 5 Preview: 69. My original: 74. **NO INDEPENDENT BENCHMARKS — all 4 benchmarks vendor-reported.**

Agent / tool use:

- **ApexBench: 36.5** (vendor) — "close to Opus 4.8"; one independent write-up records Opus 4.8 higher → **loss** in 2:2 tie (Step 5)
- **ZeroBench: 35.0** (vendor) — **winning vs Opus 4.8's 34.0** by 1.0 pt (Step 5)
- **Agents' Last Exam: 27.3** (vendor) — **winning vs Opus 4.8's 25.7** by 1.6 pts (Step 5)
- Chartography: **64.3** (vendor) — no Opus 4.8 comparison published (Step 5)
- Fourth eval in tie series: **loss** per one write-up, benchmark unnamed (Step 5)
- **No independent benchmarks** — all 4 vendor-reported (Step 5)
- **NO verified public scores for: TB (all harnesses), τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA, AA Agentic Index, τ²-bench, τ³-Banking, BrowseComp, MCP-Atlas, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA, AA Agentic Index** — all three frontier references entirely unmeasured (Step 5)

Reasoning / knowledge:

- **NO verified public scores for: GPQA, HLE, MMLU-Pro, CritPt, AA-LCR, MRCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, AIME, FrontierMath** — reasoning depth and reliability **entirely unmeasured** (Step 5)
- **NO verified public scores for: GPQA, HLE, MMLU-Pro, CritPt, AA-LCR, MRCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, AIME, FrontierMath** — reliability entirely unknown (Step 5)
- DeepSeek claims vision variant **retains V4-Flash text scores unchanged** — no independent verification (Step 5)
- ApexBench **36.5** (vendor, "close to Opus 4.8") — one write-up says Opus 4.8 higher → **loss** (Step 5)
- ZeroBench **35.0** — **winning vs Opus 4.8's 34.0** by 1.0 pt (Step 5)
- Agents' Last Exam **27.3** — **winning vs Opus 4.8's 25.7** by 1.6 pts (Step 5)
- Chartography **64.3** — no Opus 4.8 comparison (Step 5)
- Fourth eval in 2:2 tie: **loss** per one write-up, benchmark unnamed (Step 5)
- DeepSeek claims vision variant **retains V4-Flash text scores unchanged** — no independent verification (Step 5)
- **GPQA, HLE, MMLU-Pro, CritPt, AA-LCR, MRCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, AIME, FrontierMath: NO VERIFIED PUBLIC SCORE FOUND** (Step 5)

Coding:

- **NO verified public coding benchmarks** — SWE-bench (all), LiveCodeBench, DeepSWE, AA Coding Index, AA-SciCode, Terminal-Bench, FrontierCode, NL2Repo, AA-SciCode: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5)
- DeepSeek claims vision variant **retains V4-Flash text/coding scores unchanged** — no independent verification (Step 5)
- **SWE-bench (all), LiveCodeBench, DeepSWE, AA Coding Index, AA-SciCode, Terminal-Bench, FrontierCode, NL2Repo: NO VERIFIED PUBLIC SCORE FOUND** (Step 5)

Multimodal:

- **ZeroBench: 35.0** (vendor) — **winning vs Opus 4.8's 34.0** by 1.0 pt (Step 5)
- Chartography: **64.3** (vendor) — no Opus 4.8 comparison (Step 5)
- ApexBench: **36.5** (vendor) — "close to Opus 4.8"; one write-up says Opus 4.8 higher → **loss** (Step 5)
- Agents' Last Exam: **27.3** — **winning vs Opus 4.8's 25.7** by 1.6 pts (Step 5)
- **NO verified public scores for: MMMU-Pro, CharXiv, OmniDocBench, RealWorldQA, ExtractBench, BabyVision, Design Arena, Video-MME, OmniDocBench, MathVision, ExtractBench, BabyVision** (Step 5)
- **Video input: NO** — despite "multimodal" label (Step 5)
- **No video input** despite "multimodal" label (Step 5)

Long context:

- **CONTEXT WINDOW CONFLICT: 1.0M in/out per llm-stats on both providers (DeepSeek, DeepInfra) vs 200K in repo meta.json — 5x discrepancy, UNRESOLVED** (Step 5)
- **1.0M in/out per llm-stats on both providers (DeepSeek, DeepInfra) — 1M/1M** (Step 5)
- **200K in repo meta.json** — **5x discrepancy, unresolved** (Step 5)
- **NO AA-LCR, MRCR, GraphWalks figure exists** — window's usable depth unverified on either reading (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 26 qualifying raters = **85.9 Overall** (Tool 86.1, Reasoning 83.5, Context 94.5, Multimodal 80.6, Coding 84.9). Queue: 85.9. Step 5 Preview: 69. My original: 74. **NO INDEPENDENT BENCHMARKS — all 4 scores vendor-reported; context conflict 5x; reliability entirely unknown.**

- **Tool use: 65/100.** (was 60) Anchored on **near-parity claim with Opus 4.8 on multimodal agent benchmarks** — 2:2 tie (Agents' Last Exam 27.3, ApexBench 36.5, ZeroBench 35.0, 1 loss). Opus 4.8 is mid-tier in series, so parity = mid-tier result. **Capped by:** NO independent benchmarks; all 3 frontier refs unmeasured; total absence of TB, τ³-Banking, MCP-Atlas, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA, AA Agentic Index.
- **Reasoning: 55/100.** (was 70) Anchored at mid-band as placeholder. Positive: claims retains V4-Flash text scores. Negative: **ApexBench 36.5 (parity with mid-tier Opus 4.8)**, vision added without measured regression. **Capped by:** NO GPQA/HLE/CritPt/AA-LCR/MRCR/AA Intelligence Index/ARC-AGI/AIME/FrontierMath — reliability ENTIRELY UNKNOWN. ApexBench 36.5 parity with mid-tier Opus 4.8 is applied-reasoning result.
- **Context window: 88/100.** (was 90) **CONFLICT: 1M in/out per llm-stats (both providers) vs 200K in meta.json — 5x discrepancy, UNRESOLVED.** If 1M: ≥1M tier (95+); if 200K: 200K–500K band (65-84). Scored at 200K tier ceiling (88) due to unresolved conflict. NO AA-LCR/MRCR/GraphWalks on either reading.
- **Multimodal: 80/100.** (was 80) Text + image in; ZeroBench **35.0 (win vs Opus 4.8 34.0)**, Chartography **64.3**, ApexBench **36.5** (2:2 tie vs Opus 4.8). Native video input: NO. **Capped by:** ZeroBench 35.0 weak absolute figure even though beats Opus 4.8; visual suite = 2 benchmarks; NO video/audio input; MMMU-Pro/CharXiv/ExtractBench/BabyVision/ZeroBench/OmniDocBench/MathVision all unmeasured.
- **Coding: 62/100.** (was 70) Anchored at mid-band as placeholder — **NO coding benchmarks of ANY kind**; only signal = inherited V4-Flash base. Scored at mid-band lower edge on assumption that tying Opus 4.8 on agent benchmarks implies mid-tier coding — **explicitly an inference from lineage, not measurement.** SWE-bench/LiveCodeBench/DeepSWE/AA-SciCode/AA Coding Index/NL2Repo all absent.
- **Cost efficiency: 88/100.** (was 95) DeepSeek API **$0.22/$0.007/$0.66** (97% cache discount) — near methodology ≈88 anchor. MIT open weights = free self-hosting (legal right, not practical at ~168 GB). **DeepInfra 2x ($0.44/$0.14/$1.32) for same weights/context.** Free Zen tier (time-limited, may collect training data). ~168 GB makes self-hosting impractical.
- **Overall Score: 70/100.** (was 74) Half-up mean of (65 + 55 + 88 + 80 + 62) / 5 = 350 / 5 = 70 → **71**. **Below average of 26 qualifying raters (85.9).** Best-fit: **Experimental multimodal model with 2:2 Opus 4.8 tie on 4 vendor-reported benchmarks at $0.22/$0.66 — winning ZeroBench 35.0 vs 34.0, Agents' Last Exam 27.3 vs 25.7.** **Three cautions:** (1) NO independent benchmarks — all 4 vendor-reported; (2) context window 1M (llm-stats) vs 200K (meta.json) — 5x conflict; (3) reliability/coding/reasoning NO measurement — do not use for factual/knowledge work. Treat as preview for image-to-code/screenshot-to-UI, benchmark yourself, re-score when independent tracker picks it up.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from Step 5 Preview (2026-11-06, Overall 69) + official DeepSeek sources (API docs, llm-stats, independent write-ups, meta.json). **Average of 26 qualifying raters: 85.9 Overall.** Queue: 85.9. **Critical findings:** Real name `DeepSeek-V4-Flash-Vision-Exp`; true API ID `deepseek-v4-flash-vision-exp`; 2:2 Opus 4.8 tie on 4 vendor-reported benchmarks; ZeroBench 35.0 win; context 1M (llm-stats) vs 200K (meta.json) 5x conflict; weights MIT but ~168 GB impractical; NO independent benchmarks; reliability/coding entirely unmeasured.
- Reference URLs:
  - [DeepSeek API Updates](https://api-docs.deepseek.com/updates/)
  - [LLM Stats — DeepSeek-V4-Flash-Vision-Exp](https://llm-stats.com/models/deepseek-v4-flash-vision-exp)
  - [Eggstriker — DeepSeek V4 Flash Vision Exp Benchmarks](https://www.eggstriker.com/en/blog/deepseek-v4-flash-vision-exp-2026)
  - [MindStudio — Multimodal Agent Benchmarks](https://www.mindstudio.ai/blog/deepseek-v4-flash-vision-benchmarks)
  - [CLDNavi — MIT Weights Guide](https://cldnavi.com/en/blog/deepseek-v4-flash-vision-guide-2026/)
  - [iWeaver — Vision API Cost Analysis](https://www.iweaver.ai/blog/deepseek-v4-flash-vision-exp/)
  - [4sapi — Open Multimodal Agent Guide](https://blog.4sapi.com/blog/deepseek-v4-vision-exp-multimodal-guide/)
  - [CellCog — MIT Weights Confirmed](https://cellcog.ai/blog/deepseek-v4-flash-vision-exp/)
  - [Repo meta.json](model/deepseek-v4-vision-exp/meta.json)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---