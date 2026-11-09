# Kimi K2.6 — findings by Nemotron 3 Ultra 550B A55B

- Source: Moonshot AI (`kimi-k2.6`, canonical dotted slug)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6 (Reasoning) — **PREVIOUS-GEN** (superseded by Kimi K3 69.46, K3.1 Pro 75.07; AA MARKS DEPRECATED, only 10k-input workload benchmarked; successor to K2.5 52.87)
- **Short description:** Moonshot's **open-weight trillion-parameter MoE (1T total / 32B active)** — **strongest reliability in batch (AA-Omniscience hallucination 40.5%, THIRD-LOWEST IN SERIES)** and **genuine research/browsing strength (DeepSearchQA 92.5%, WideResearch 80.8%, BrowseComp 83.2%, V\* 96.9% HIGHEST IN SERIES)**. **256K WINDOW (1/4 OF 1M STANDARD) = BINDING CONSTRAINT**. Agentic execution weak (OSWorld 2.0 4.6%, AA Agentic Index 22.1%). **Modified MIT license (commercial use allowed w/ restrictions)**.
- **Provider / access:** **OPEN WEIGHTS** on HF (`moonshotai/Kimi-K2.6`); Kimi first-party API + **14 providers (AA)**; **OpenCode Zen (`moonshotai/kimi-k2-6`) at $0.95/$4.00 + $0.16 cache (83% discount, blended ~$0.70/M)**. Self-hosting available. **NO FREE ID ON ZEN** (Step 5 / GLM).
- **Release / knowledge:** 2026-04-20 release; **knowledge cutoff: NOT DISCLOSED**.
- **IDs:** `kimi/kimi-k2.6` (state: NO FREE ID ON ZEN); `moonshotai/Kimi-K2.6` (HF); `moonshotai/kimi-k2-6` (Zen); `kimi_kimi-k2.6` (Vals, ARC). **FOLDER NOTE: hyphen variant `kimi-k2-6` was removed from disk per slug-identity rules; authoritative folder is dotted `kimi-k2.6`.**
- **Context window:** **262,144 tokens total / 65,536 max output** (models.dev verified; AA rounds 260K; BenchLM 256K) — **1/4 OF 1M STANDARD**.
- **Modalities:** **TEXT + IMAGE + VIDEO IN; TEXT OUT** (GLM / BenchLM); reasoning yes; tool calls yes; JSON mode not verified. **MMMU-Pro 79.4%, MathVision 87.4%, V\* 96.9%, CharXiv 80.4%.**
- **Pricing (as of 2026-11-08):** **$0.95 in / $4.00 out per 1M** (Kimi API via AA); **83% cache discount ($0.16 cached)**; blended ~$0.70/M (7:2:1 ratio). **NO FREE TIER VERIFIED**. Open weights = self-host escape.
- **Architecture:** **1T total / 32B active MoE**; open weights under Modified MIT license; HF: `moonshotai/Kimi-K2.6`.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash re-research 2026-11-05) + Moonshot tech blog/model card + AA + Vals + Epoch + BenchLM (56 rows). **Average of 28 qualifying raters: 86.3 Overall** (Tool 86.7, Reasoning 87.4, Context 85.2, Multimodal 83.5, Coding 88.3). Queue: 86.3. Step 5 Preview: 75. GLM 5.3 Flash: 80. My original: 86.3 (queue). **PREVIOUS-GEN (AA DEPRECATED); 256K WINDOW (1/4 OF 1M); OPEN WEIGHTS (MODIFIED MIT); STRONGEST RELIABILITY (AA-OMNI 40.5% HALLUCINATION, 3RD-LOWEST IN SERIES); RESEARCH/BROWSING ELITE (DEEPSEARCHQA 92.5%, V* 96.9% HIGHEST IN SERIES); AGENTIC EXECUTION WEAK (OSWORLD 2.0 4.6%, AA AGENTIC 22.1%).**

Agent / tool use:

- τ²-bench: **95.9% (AA)** — **ELITE, AMONG STRONGEST IN SERIES** (GLM / Step 5)
- DeepSearchQA: **92.5%** (Moonshot tech blog) (GLM / Step 5)
- WideResearch: **80.8%** (HF model card) (GLM / Step 5)
- BrowseComp: **83.2%** (Moonshot tech blog) (GLM / Step 5)
- OSWorld-Verified: **73.1%** (Moonshot tech blog) (GLM / Step 5)
- Toolathlon: **50.0%** (Moonshot tech blog) (Step 5)
- Terminal-Bench 2.0: **66.7%** (Moonshot tech blog) / **TB 2.1 (Vals): 53.6%** — **13.1-PT HARNESS GAP** (GLM / Step 5)
- TB-Hard (AA): **43.9%** (BenchLM Nov 5) (GLM)
- Claw-Eval: **62.3%** (Claw-Eval leaderboard via BenchLM) — **ONE OF ONLY THREE MEASURED IN SERIES** (GLM / Step 5)
- MCP Atlas: **55.9%** (HF model card) (GLM / Step 5)
- GDPval-AA: **1,115 Elo / 26.9-27.0% normalized** — **FAR UNDER 1,750 REF** (GLM / Step 5)
- APEX-Agents-AA: **28.5%**; AA Agentic Index: **22.1%** (BenchLM) (GLM / Step 5)
- ResearchClawBench: **18.0%**; OSWorld 2.0: **4.6%** (OSWorld 2.0 paper) (GLM / Step 5)
- Gert Labs: **56.82%** (GLM / Step 5)
- τ³-Banking, Terminal-Bench 4.0, JobBench, MazeBench, ALE: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- **RESEARCH/BROWSING ELITE (DEEPSEARCHQA 92.5%, τ² 95.9%, BROWSECOMP 83.2%) vs EXECUTION WEAK (OSWORLD 2.0 4.6%, AA AGENTIC 22.1%)** (Step 5)

Reasoning / knowledge:

- GPQA Diamond: **90.5% (Moonshot HF)** / **91.1% (AA)** — **CLEARS 90%+ REF ON BOTH**; **AA MEASURES ABOVE VENDOR (UNUSUAL DIRECTION)** / **89.1% (Vals)** — **2.0PT SPREAD** (GLM / Step 5)
- HLE: **34.7% (Moonshot HF)** / **37.5% (AA-HLE)** — **FAILS 40%+ REF ON BOTH** (GLM / Step 5)
- AIME26: **96.4%**; HMMT Feb 2026: **92.7%** (Moonshot HF) (GLM / Step 5)
- AA-LCR: **81.0%** (AA) (GLM / Step 5)
- CritPt: **8.0%** (AA) (GLM / Step 5)
- AA Intelligence Index: **27.0** (AA) (GLM / Step 5)
- AA-Omniscience: **Index 5.3, accuracy 32.6%, hallucination rate 40.5%** — **THIRD-LOWEST HALLUCINATION IN SERIES** (behind Grok 4.7 20.0%, Grok 4.3 25.0%) (GLM / Step 5)
- AA-IFBench: **76.0%** (GLM / Step 5)
- MMLU-Pro (Vals): **87.6%** (GLM / Step 5)
- MMAnswerBench: **86.0%** (GLM)
- FrontierMath v2: Tiers 1-3 **57.2%**, Tier 4 **25.6%** (Epoch) — **CONFLICT: prior 38.97%/14.58% from same source; EPOCH RE-SCORED UPWARD** (GLM / Step 5)
- ARC-AGI, MRCR: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Coding:

- SWE-bench Verified: **80.2% (Moonshot HF)** / **76.2% (Vals)** — **4.0-PT GAP** (GLM / Step 5)
- LiveCodeBench v6: **89.6% (Moonshot HF)** / **86.8% (Vals)** — **2.8PT SPREAD, STRONGEST CODING FIGURE** (GLM / Step 5)
- SWE-bench Pro: **58.6%** (Moonshot HF) (GLM / Step 5)
- SWE Multilingual: **76.7%** (Moonshot tech blog) (GLM / Step 5)
- SciCode: **52.2% (Moonshot HF)** / **51.5% (AA-SciCode)** — **UNDER 55%+ REF** (GLM / Step 5)
- AA Coding Index: **61.8%** — **UNDER 70% REF** (GLM / Step 5)
- Vibe Code Bench: **37.9%** (Vals v1.1); CursorBench 3.1: **47.6%** (GLM / Step 5)
- Terminal-Bench 2.0 (coding harness): **66.7%** (see agentic) (GLM)
- DeepSWE / SWE Atlas: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Multimodal — **SURPRISINGLY STRONG**:

- V\*: **96.9%** (Moonshot tech blog) — **HIGHEST V* IN SERIES** (GLM / Step 5)
- MathVision: **87.4%** (GLM / Step 5)
- MMMU-Pro: **79.4% / 80.1% w/ Python** (Moonshot HF / AA agree exactly) (GLM / Step 5)
- CharXiv: **80.4%** (GLM / Step 5)
- MMAnswerBench: **86.0%** (GLM)
- Design Arena Website: **1,268-1,274 Elo** (GLM / Step 5)
- OmniDocBench, ExtractBench, BabyVision, ZeroBench: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Long context:

- AA-LCR: **81.0%** (AA) — **MEASURED, STRONG FOR TIER** (GLM / Step 5)
- **262K WINDOW (200K-500K BAND); NO MRCR/RULER VERIFICATION** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 28 qualifying raters = **86.3 Overall** (Tool 86.7, Reasoning 87.4, Context 85.2, Multimodal 83.5, Coding 88.3). Queue: 86.3. Step 5 Preview: 75. GLM 5.3 Flash: 80. My original: 86.3 (queue). **PREVIOUS-GEN (AA DEPRECATED); 256K WINDOW; OPEN WEIGHTS (MODIFIED MIT); AA-OMNI HALLUCINATION 40.5% (3RD-LOWEST); RESEARCH ELITE; AGENTIC WEAK.**

- **Tool use: 62/100.** (was 60) **GENUINELY SPLIT — MODEL'S SIGNATURE.** Research/browsing ELITE: DeepSearchQA **92.5%**, τ²-bench **95.9% (AA, AMONG STRONGEST IN SERIES)**, BrowseComp **83.2%**, WideResearch **80.8%**, Claw-Eval **62.3% (1 OF 3 IN SERIES)**. Execution WEAK: TB 2.1 **53.6%** (13.1pt gap from vendor TB 2.0 66.7%), MCP Atlas **55.9%**, GDPval-AA **1,115 Elo (FAR UNDER 1,750)**, AA Agentic Index **22.1%**, OSWorld 2.0 **4.6%**. TB 4.0, τ³, JobBench, MazeBench, ALE: **UNMEASURED**.
- **Reasoning: 72/100.** (was 75) GPQA **90.5-91.1% (CLEARS 90%+ ON 2 OF 3 HARNESSES; AA ABOVE VENDOR UNUSUAL)**; AIME26 **96.4%**; HMMT **92.7%**; AA-LCR **81.0%**. **STANDOUT: AA-OMNI HALLUCINATION 40.5% (3RD-LOWEST IN SERIES)**. CAPPED BY: AA-HLE **37.5% (UNDER 40%)**; CritPt **8.0%**; FrontierMath T4 **25.6%**; AA Index **27.0**; NO ARC-AGI/MRCR.
- **Context window: 85/100.** (was 85) **262K (200K-500K BAND CEILING)** — **1/4 OF 1M STANDARD**; AA-LCR **81.0%** (window measurably usable); open weights = not vendor-gated. **HELD AT BAND CEILING: NO MRCR/RULER; QUARTER OF 1M STANDARD.**
- **Multimodal: 84/100.** (was 85) TEXT+IMAGE+VIDEO IN; **V* 96.9% (HIGHEST IN SERIES)**, MathVision **87.4%**, MMMU-Pro **79.4-80.1%**, CharXiv **80.4%**, Design Arena **1,268 Elo**. HELD AT 84 (NOT VIDEO TIER 75-90): NO VIDEO INPUT DEMONSTRATED, NO AUDIO, TEXT-ONLY OUTPUT.
- **Coding: 74/100.** (was 75) LiveCodeBench **86.8-89.6%** (STRONG); SWE-V **76.2-80.2%** (SOLID MID-FRONTIER); SWE Multilingual **76.7%**. CAPPED BY: AA Coding Index **61.8% (8PTS UNDER 70% REF)**; SciCode **51.5-52.2% (UNDER 55% REF)**; Vibe Code **37.9%**; CursorBench **47.6%**; NO DeepSWE/FrontierCode.
- **Cost efficiency: 85/100.** (was 85) **$0.95/$4.00 + 83% CACHE ($0.16); BLENDED ~$0.70/M**; open weights = real self-host escape. HELD AT 85 (NOT 88): ~6× M3.1 Flash input price for lower index; NO FREE TIER; 256K keeps prompt costs down without premium.
- **Overall Score: 75/100.** (was 86.3) Half-up mean of (62 + 72 + 85 + 84 + 74) / 5 = 377 / 5 = 75.4 → **75**. **FAR BELOW QUEUE (86.3), AVERAGE OF 28 QUALIFYING RATERS (86.3), GLM 5.3 FLASH (80).** Best-fit: **BEST RESEARCH-AND-BROWSING OPEN-WEIGHT MODEL IN BATCH** — DeepSearchQA 92.5%, τ²-bench 95.9%, BrowseComp 83.2%, V* 96.9%, **AA-OMNI HALLUCINATION 40.5% (3RD-LOWEST IN SERIES)** = unusually trustworthy for retrieval-heavy factual work. **TWO CAUTIONS:** (1) Agentic execution WEAK (AA Agentic Index 22.1%, OSWorld 2.0 4.6%) = researcher not agent; (2) **256K CONTEXT = 1/4 OF 1M STANDARD** = long-doc work won't fit. **PREFER KIMI K3 (69.46) UNLESS LOWER PRICE OR OPEN WEIGHTS DECISIVE.** AA MARKS DEPRECATED. Queue 86.3 = roster artefact (different weighting).

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 75), GLM 5.3 Flash re-research (2026-11-05, Overall 80) + Moonshot tech blog/model card, AA, Vals, Epoch, BenchLM (56 rows, 57.53, #57). **Average of 28 qualifying raters: 86.3 Overall.** Queue: 86.3. **Critical findings:** PREVIOUS-GEN (AA DEPRECATED); **256K WINDOW (1/4 OF 1M)**; **OPEN WEIGHTS (MODIFIED MIT)**; **AA-OMNI HALLUCINATION 40.5% (3RD-LOWEST IN SERIES)**; **RESEARCH/BROWSING ELITE (DEEPSEARCHQA 92.5%, V* 96.9% HIGHEST)**; **AGENTIC EXECUTION WEAK (OSWORLD 2.0 4.6%, AA AGENTIC 22.1%)**; TB 2.0 66.7% VS TB 2.1 53.6% (13.1PT HARNESS GAP); GPQA AA 91.1% VS VENDOR 90.5% (AA ABOVE VENDOR UNUSUAL); FRONTIERMATH V2 RE-SCORED UPWARD (EPOCH); **FOLDER: HYPHEN VARIANT `kimi-k2-6` REMOVED PER SLUG RULES, AUTHORITATIVE IS DOTTED `kimi-k2.6`**; QUEUE 86.3 VS REPORT 75 (11.3PT GAP).
- Reference URLs:
  - [Hugging Face — moonshotai/Kimi-K2.6 (open weights, Modified MIT, model card with eval tables)](https://huggingface.co/moonshotai/Kimi-K2.6)
  - [Artificial Analysis — Kimi K2.6 (14 providers, AA-GPQA 91.1%, AA-LCR 81.0%, AA-Omni 40.5% hallucination, deprecated marker)](https://artificialanalysis.ai/models/kimi-k2.6)
  - [BenchLM — Kimi K2.6 (56 rows, 57.53/100, #57/1015; attributes independent numbers to AA, Vals, Epoch, Cursor, Gert Labs, Claw-Eval, ResearchClawBench, OSWorld 2.0, OpenRouter)](https://benchlm.ai/models/kimi-k2.6)
  - [Epoch AI — FrontierMath v2 leaderboard (Tiers 1-3 57.2%, Tier 4 25.6%, re-scored upward from prior pass)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [Claw-Eval leaderboard](https://claw-eval.com/)
  - [OSWorld 2.0 paper (4.6% for Kimi K2.6)](https://os-world.github.io/)
  - [Repo curated meta — `model/kimi-k2.6/meta.json` (262K/65K, image+video, $0.95/$4.00, Modified MIT)](model/kimi-k2.6/meta.json)
  - See also: `model/kimi-k3/` (69.46) — successor refreshed earlier; `model/kimi-k3.1/` — next tier up
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---