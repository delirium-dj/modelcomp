# Muse Spark 1.2 — findings by Nemotron 3 Ultra 550B A55B

- Source: Meta (`muse-spark-1.2`, `muse-spark-1.2-contributor`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 (Contributor tier available) — **TWO GENERATIONS BEHIND** (superseded by Muse Spark 1.3 2026-09-02, then Muse Wonder 2026-10-12; BenchLM 65.41, #28/1009)
- **Short description:** Meta's 1.2-generation workhorse with **notably good reliability for a Meta model** (AA-Omniscience hallucination rate 33.3%, third-best in batch) and solid coding (SWE-bench 86.6% Vals, VulcanBench v3 87.0%, AA Coding Index 72.2%). **Strictly dominated on price-equal terms by Muse Spark 1.3 (same $1.25/$4.25 rate card, 8 BenchLM points higher).** Weakness concentrated in agentic execution (MazeBench 0%, GDPval 1,631 Elo vs 1,750 frontier) and deep reasoning (CritPt 17.7%, no ARC-AGI/FrontierMath/MRCR).
- **Provider / access:** Meta Model API (`muse-spark-1.2` Standard, `muse-spark-1.2-contributor` Contributor), OpenRouter (`meta/muse-spark-1.2`), Muse Code, Vercel AI Gateway, **OpenCode Zen (`opencode/muse-spark-1-2`) at $1.25/$4.25/$0.15** — identical rate card as newer 1.3. **Zen's `muse-spark-1.2-contributor-free` row UNVERIFIED vs Meta pricing.**
- **Release / knowledge:** 2026-08-05 release (alongside Muse Code); lineage: Spark 2026-04-08 → 1.1 2026-07-09 → 1.2 2026-08-05 → 1.3 2026-09-02 → Spark Open 2026-10-15. **Knowledge cutoff: not disclosed by Meta.**
- **IDs:** `muse-spark-1.2` / `muse-spark-1.2-contributor` (Meta API); `meta/muse-spark-1.2[-contributor]` (OpenRouter); `opencode/muse-spark-1.2-contributor-free` (Zen, unverified). No Free tier on Meta.
- **Context window:** **1,048,576 tokens (1M)**; **max output 131,072** (LiteLLM confirmed); no long-context premium (Meta docs).
- **Modalities:** Text, images, video, **audio**, PDF in (LMSpeed); text out. Reasoning + tool use; web-search grounding $2.50/1,000 queries. **Recorded as inferred from lineage (1.3 documents text+image+video+audio) — not vendor-verified for this SKU.**
- **Pricing (as of 2026-11-08):** Standard: **$1.25 in / $0.15 cached / $4.25 out per 1M**. Contributor: **$0.10 in / $0.20 out / $0.002 cached** (92%/95%/98.7% off Standard) in exchange for training rights. **Catch: Contributor rate limits 100 RPM / 3M TPM vs Standard 3,000 RPM / 4M TPM (30× request cut, per-team, rolling 5-hour window, select countries).** Batch 50% off. Search grounding $2.50/1,000 queries.
- **Architecture:** Proprietary, closed weights; parameter count undisclosed. Self-improvement training loop, co-trained with Muse Code agent (rejection-sampled harness trajectories, compaction/subagent recipes). **Spark Open (2026-10-15) is separate 816B model, not 1.2's weights.**

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Meta sources. **Average of 32 qualifying raters: 90 Overall** (Tool 88.1, Reasoning 88.2, Context 97, Multimodal 88.8, Coding 87.6). Queue: 90. Step 5 Preview: 75. GLM 5.3 Flash: 88. My original: 83. **TWO GENS BEHIND: strictly dominated by 1.3 at same price.**

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta launch table, xhigh, Muse Code harness) / **69.7%** (Vals independent, #14/50) — **13.2pt vendor-vs-independent gap** (Step 5 / GLM)
- GDPval-AA: **1,631 Elo** (#17/89 per LMSpeed; +260 at launch, #5 then) / **48.6% normalized** (AA) — **119 Elo under 1,750 frontier** (Step 5 / GLM)
- AA Agentic Index: **44.0%** (AA) / **43.2%** (Magica refresh, minor drift) (GLM)
- AA EnterpriseOps-Gym: **47.3%** (AA measured — NEW) (GLM)
- MCP Atlas: **90.3%** (Scale AI harness, launch — highest Meta-compared score) (GLM)
- Long-horizon case: **1,000+ tool calls over 24h** optimizing KDA/MLA GPU kernels (Meta case study — demonstration, not benchmark) (GLM)
- MazeBench ASCII: **0%** (Step 5 / GLM)
- **τ³-Banking, τ²-Bench, OSWorld, BrowseComp, Toolathlon, JobBench, ALE, Claw-Eval: NO VERIFIED PUBLIC SCORE** — **entire agentic reference set beyond TB 2.1 and GDPval absent** (Step 5 / GLM)

Reasoning / knowledge:

- AA-GPQA Diamond: **90.4%** (AA, #35/225 per LMSpeed) — **just clears 90%+ frontier** (Step 5 / GLM)
- AA-HLE: **45.5%** (AA, #29/244) — **clears 40%+ frontier** (Step 5 / GLM)
- AA-Omniscience: **index 27.2, accuracy 45.4%, hallucination 33.3%** (AA) — **third-best reliability in batch** (behind MiniMax M3.1 Flash, GPT-6.1 Sol) (Step 5) / launch reading **index 22 / hallucination 28% / accuracy 38% / attempt rate 67%** (heavy abstention) — **different snapshots, both cited** (GLM)
- MMLU-Pro (Vals): **88.3%** (Step 5 / GLM)
- AA-LCR v1.1: **79.0%** (Step 5 / GLM)
- CritPt: **17.7%** (AA) (Step 5 / GLM)
- AA Intelligence Index: **54** at launch (AA, xhigh — tied GPT-5.5/Grok 4.5, #12/185 per Breaking The Lines) — **CONFLICT with current-scale 39.6** (BenchLM/AA rebase); **versions not comparable, both cited** (GLM) / **39.6** (Step 5)
- **ARC-AGI-1/2, FrontierMath, MRCR: NO VERIFIED PUBLIC SCORE** — **three of five reasoning references unmeasurable** (Step 5 / GLM)

Coding:

- SWE-bench (Vals): **86.6%** (independent) (Step 5 / GLM)
- DeepSWE 1.1: **59.3%** (#16/23 per LMSpeed — **14.7pts under 74%+ frontier ref**) (Step 5 / GLM)
- AA-SciCode: **57.4%** — **clears 55%+ ref** (Step 5 / GLM)
- AA Coding Index: **72.2%** — **clears 70%+ frontier ref** (Step 5 / GLM)
- FrontierSWE v2: **12.0%** (Proximal — **one of two weakest in launch batch**) (Step 5 / GLM)
- VulcanBench v3: **87.0%** (Step 5 / GLM)
- Meta Internal Coding Bench: **70.6%** (internal, unverifiable methodology) (GLM)
- **SWE-bench Verified, LiveCodeBench, Vibe Code Bench, FrontierCode: NO VERIFIED PUBLIC SCORE** (Step 5 / GLM)

Multimodal:

- Design Arena Website: **1,312 Elo** (OpenRouter via BenchLM, 2026-11-04; drift 1319→1315→1312 flagged) (Step 5) / Magica reads best **1,328** (#10 Data Viz, 56.6% win rate) (GLM)
- **MMMU-Pro, CharXiv, ExtractBench, ZeroBench: NO VERIFIED PUBLIC SCORE** (Step 5 / GLM)
- **Multimodal coverage INFERRED from lineage (1.3 documents text+image+video+audio) — NOT VENDOR-VERIFIED FOR THIS SKU** (Step 5)

Long context:

- Window: **1M tokens, no long-context premium**; AA-LCR v1.1: **79.0%** (only measured retrieval-adjacent number) (GLM)
- **MRCR / RULER at window length: NO VERIFIED PUBLIC SCORE** (GLM)
- Max output confirmed: **131,072** (LiteLLM) (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 32 qualifying raters = **90 Overall** (Tool 88.1, Reasoning 88.2, Context 97, Multimodal 88.8, Coding 87.6). Queue: 90. Step 5 Preview: 75. GLM 5.3 Flash: 88. My original: 83. **TWO GENS BEHIND: strictly dominated by 1.3 at same price.**

- **Tool use: 70/100.** (was 78) TB 2.1 **82.9% Meta / 69.7% Vals (13.2pt gap, vendor just under 88% ref)**; GDPval-AA **1,631 Elo (119 under 1,750 frontier)**; AA Agentic Index **44.0%**; MCP Atlas **90.3%** (highest Meta-compared); AA EnterpriseOps-Gym **47.3%**; 1,000+ tool-call session design (demo). **Capped by:** MazeBench **0%**; **τ³/τ²/OSWorld/BrowseComp/MCP-Atlas/Toolathlon/JobBench/ALE/Claw-Eval: ALL ABSENT** — two of three frontier refs uncheckable.
- **Reasoning: 76/100.** (was 72) GPQA Diamond **90.4%** (just clears 90%+), HLE **45.5%** (clears 40%+), MMLU-Pro **88.3%**, AA-Omniscience **33.3% hallucination (third-best in batch)**. **Capped by:** AA Intelligence Index **54 launch vs 39.6 rebase CONFLICT**; CritPt **17.7%**; **ARC-AGI-1/2, FrontierMath, MRCR: ALL MISSING** — three of five reasoning references unmeasurable. Abstention-heavy Omniscience (attempt rate 67%).
- **Context window: 97/100.** (was 95) **1M/131K verified**; AA-LCR **79.0%**. **Held at tier floor (not 99-100): no MRCR/GraphWalks/RULER at window length.**
- **Multimodal: 75/100.** (was 90) **INFERRED from 1.3 lineage (text+image+video+audio+PDF in); text out.** Design Arena **1,312 Elo** (drift 1319→1315→1312). **Explicitly inference, not vendor claim for 1.2 SKU** — no MMMU-Pro/CharXiv/ExtractBench/ZeroBench. Scored at +image-in band ceiling (60-70) marginally above on single Design Arena result. If 1.2 modality set narrower than 1.3 → drops sharply.
- **Coding: 78/100.** (was 78) SWE-bench **86.6%** (Vals), VulcanBench **87.0%**, AA Coding Index **72.2%** (clears 70% ref), AA-SciCode **57.4%** (clears 55% ref). **Capped by:** DeepSWE **59.3% (14.7pts under 74% ref)**, FrontierSWE v2 **12.0%** (one of weakest), TB 2.1 **82.9%** (just under 85% ref), **NO SWE-V/LiveCodeBench/Vibe Code/FrontierCode**.
- **Cost efficiency: 86/100.** (was 95) **$1.25/$4.25** (methodology ≈88 anchor) — **was Pareto-leader at launch. NOW: strictly dominated by Muse Spark 1.3 on IDENTICAL rate card (8 BenchLM points higher) and Spark Open (self-hosting).** Contributor $0.10/$0.20 (never free; Meta docs) with 100 RPM cap, training consent. Zen $0 row unverified.
- **Overall Score: 79.2/100.** (was 83) Half-up mean of (70 + 76 + 97 + 75 + 78) / 5 = 396 / 5 = 79.2 → **79**. **Below queue (90), average of 32 qualifying raters (90).** Best-fit: **SUPERSEDED SKU WITH NO REMAINING REASON TO SELECT.** Every dimension matched or beaten by same-price/cheaper Meta model — **Muse Spark 1.3 shares $1.25/$4.25 card and scores 8 BenchLM points higher; Spark Open adds open weights.** One asset: reliability (33.3% hallucination, third-best). **Migrate to 1.3 or Open.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 75), GLM 5.3 Flash (2026-11-05, Overall 88) + official Meta sources (Muse Spark 1.2 model page, dev.meta.ai pricing docs, LiteLLM, LMSpeed, Magica, BenchLM refresh). **Average of 32 qualifying raters: 90 Overall.** Queue: 90. **Critical findings:** Two gens behind (1.3, Wonder); strictly dominated by 1.3 at same $1.25/$4.25; TB 2.1 82.9% Meta / 69.7% Vals (13.2pt gap); GDPval 1,631 Elo (119 under frontier); AA-Omniscience 33.3% hallucination (third-best); MazeBench 0%; AA Intelligence Index 54 launch vs 39.6 rebase CONFLICT; ARC/FrontierMath/MRCR missing; DeepSWE 59.3% (14.7 under 74%); FrontierSWE v2 12.0%; multimodal inferred not verified; Zen $0 row unverified.
- Reference URLs:
  - [Meta — Muse Spark 1.2 model page (primary benchmark source)](https://developer.meta.com/ai/models/muse-spark/)
  - [Meta dev.meta.ai — pricing/models docs (authoritative rate card)](https://dev.meta.ai/docs/pricing-rate-limits)
  - [BenchLM — Muse Spark 1.2 benchmark scores (24 rows, 65.41/100, #28/1009)](https://benchlm.ai/models/muse-spark-1-2)
  - [Artificial Analysis — Muse Spark 1.2](https://artificialanalysis.ai/models/muse-spark-1-2)
  - [Vals AI — Muse Spark 1.2 leaderboard results](https://www.vals.ai/models/meta_muse_spark_1_2)
  - [VulcanBench Report 19 — Muse Spark 1.2 effort study (87.0% VulcanBench v3)](https://vulcanbench.com/benchmarks/19-musespark-effort.html)
  - [OpenRouter — Muse Spark 1.2 benchmarks and pricing](https://openrouter.ai/meta/muse-spark-1.2/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---