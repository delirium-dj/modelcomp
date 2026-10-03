# DeepSeek V4 Flash — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / DeepSeek V4 Flash
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **VERSION NOTE:** Two releases share this name. The **V4-Flash Preview** (2026-04-24, HF weights, measured by AA at Intelligence Index ~24) and the **re-post-trained V4 Flash** (2026-07-31, public beta on the API — same architecture/parameters, new post-training, "significant jump" per DeepSeek's changelog as relayed by CosmicJS, single source). Scores below weight the current (July 31) version; April-preview measurements are included as reference.

## Model card

- **Name:** DeepSeek V4 Flash (API id `deepseek-v4-flash`; OpenRouter daily variants e.g. `deepseek-v4-flash-0423`; HF `deepseek-ai/DeepSeek-V4-Flash` + `-Base`)
- **Short description:** DeepSeek's efficiency-optimized MoE — 284B total / 13B active with hybrid attention (Compressed Sparse Attention + Heavily Compressed Attention), 1M context, and reasoning effort as a request parameter (non-thinking / high / max); the cost-efficient tier of the V4 family (Pro: 1.6T/49B).
- **Provider / access:** DeepSeek direct API (public beta since 2026-07-31; native Responses API support, adapted for Codex); OpenRouter; HF/ModelScope weights (MIT); legacy `deepseek-chat`/`deepseek-reasoner` IDs being migrated to V4.
- **Release / knowledge:** Preview 2026-04-24 (HF page dated 2026-04-22); re-post-trained public beta 2026-07-31. Knowledge cutoff not captured.
- **IDs:** `deepseek-v4-flash`; repo folder `deepseek-v4-flash`.
- **Context window:** 1,000,000 tokens (1.02M per some listings); max output 384,000.
- **Modalities:** Text in, text out only (no image/audio/video input). Reasoning: effort parameter — non-thinking, high, max.
- **Pricing (as of 2026-10):** DeepSeek direct $0.14 input / $0.28 output per 1M, cached input $0.0028–0.003 (98% cache discount); OpenRouter cheapest $0.067/$0.134, standard $0.089/$0.177 (Sept 2026; the 0423 variant's rate fell from $0.076/$0.153 through multiple cuts); blended ≈$0.06/M (AI Flash Report); MIT weights for self-hosting (~160 GB HF footprint).
- **Architecture:** Sparse MoE — 284B total / 13B active (Pro: 1.6T/49B); hybrid CSA + HCA attention; at 1M context V4-Pro needs 27% of V3.2's single-token inference FLOPs and 10% of KV (Flash pushes toward ~10% FLOPs); 32T+ pre-training tokens; FP4 + FP8 mixed precision; 3-step MTP.

### Raw benchmarks found

**DeepSeek-reported, current V4 Flash (2026-07-31 changelog; DeepSeek Harness, minimal mode, max effort, top_p 0.95, temp 1.0 — single source: CosmicJS):**
Terminal-Bench 2.1 **82.7**; Cybergym **76.7**; Toolathlon (verified) **70.3**; DSBench-FullStack **68.7**; DSBench-Hard **59.6**; DeepSWE **54.4**; NL2Repo **54.2**; Agent Last Exam **25.2**; Automation Bench (Public) **25.1**.

**Artificial Analysis (April-preview "V4 Flash 0420" runs):**
- Max effort: Intelligence Index **24.2**, Coding Index **56.2**, Agentic Index **22.2**; GPQA Diamond **89.4%**; HLE **34.8%**; IFBench **79.2%**; τ²-Bench Telecom **95.0%**; AA-LCR **74.3%**; GDPval-AA **26.2%**; CritPt **7.1%**; SciCode **45.3%**; Terminal-Bench Hard **35.6%**; AA-Omniscience acc **36.8%** / non-hallucination **3.9%**.
- High effort: Intelligence Index **24.4**, Coding **52.0**, Agentic **26.3**; GPQA **86.7%**; HLE **30.3%**; IFBench **73.5%**; τ²-Telecom **95.6%**; AA-LCR **72.0%**; CritPt **3.4%**; SciCode **40.2%**; TB Hard **38.6%**.
- AA Intelligence Index **50** for the current (July 31) version — 2nd of 162 in its class (median 17); #1 of 162 on raw API pricing; verbosity: 210M tokens to complete the Index vs 62M median (58th/162 on output efficiency); $72.02 to evaluate.

**DeepSeek-reported chat-mode table (April preview; Non-Think / High / Max):**
MMLU-Pro 83.0/86.4/86.2; SimpleQA-Verified 23.1/28.9/34.1; Chinese-SimpleQA 71.5/73.2/78.9; GPQA Diamond 71.2/**87.4**/**88.1**; HLE 8.1/29.4/**34.8**; LiveCodeBench 55.2/**88.4**/**91.6**; Codeforces –/2816/**3052**; HMMT 2026 Feb 40.8/91.9/94.8; IMOAnswerBench 41.9/85.1/88.4; Apex 1.0/19.1/33.0; Apex Shortlist 9.3/72.1/85.7; MRCR 1M 37.5/**76.9**/**78.7**; CorpusQA 1M 15.5/59.3/60.5; Terminal-Bench 2.0 49.1/56.6/56.9; SWE-bench Verified 73.7/**78.6**/**79.0**; SWE-bench Pro 49.1/52.3/52.6; SWE-bench Multilingual 69.7/70.2/**73.3**; BrowseComp –/53.5/73.2; HLE w/ tools –/40.3/45.1; MCPAtlas 64.0/67.4/**69.0**; GDPval-AA –/–/1395; Toolathlon 40.7/43.5/47.8.

**Other:** Design Arena (OpenRouter): 3D 1204, Asciiart 1121, Code 1211, Data Viz 1136, Game Dev 1210, SVG 1154, UI Component 1171, Website 1214. HF leaderboard snippets: GPQA 88.1 (Diamond), MMLU-Pro 86.4, SkillsBench 44.7*, Lexam Hard 38.19*, LHTB 2*. pricepertoken (non-reasoning variant): Intelligence 18.9 (70th pct), GPQA 71.6 (57th pct); 31 providers; cheapest input fell 99.7% ($0.090→$0.000) in ~90 days.

## Scores

- **Tool use: 73/100.** Toolathlon 70.3 verified (July 31), MCPAtlas 69.0 (Max), τ²-Bench Telecom 95.0% (AA, Max); drags: Automation Bench 25.1, Agentic Index 22.2–26.3 (AA). Strong tool tier.
- **Reasoning: 73/100.** AA Intelligence Index 50 (current version); GPQA 88.1–89.4% (Max), HLE 34.8% (Max), HLE w/ tools 45.1%, IMOAnswerBench 88.4, HMMT 94.8, Codeforces 3052; drags: CritPt 7.1%, AA-Omniscience non-hallucination 3.9%. Upper-mid-to-frontier-adjacent.
- **Context window: 93/100.** 1M with CSA+HCA (≈10% of V3.2's FLOPs at 1M) and measured retrieval: MRCR 1M 78.7 (Max), CorpusQA 1M 60.5, AA-LCR 74.3% — real 1M-scale evidence, not just a claimed window.
- **Multimodal: 15/100.** Text-only model.
- **Coding: 75/100.** Terminal-Bench 2.1 82.7 (July 31, DeepSeek harness), SWE-bench Verified 79.0 (Max), LiveCodeBench 91.6 (Max), Cybergym 76.7, DSBench-FullStack 68.7, DeepSWE 54.4, NL2Repo 54.2; drags: TB Hard 35.6–38.6% (AA). Frontier-adjacent on the headline coding suites.
- **Cost efficiency: 97/100.** $0.14/$0.28 per 1M direct (≈$0.06/M blended), $0.067/$0.134 on OpenRouter's cheapest route, 98% cache discount, MIT weights — deep-discount tier and #1 on AA's raw-price ranking.
- **Overall Score: 65.8/100.** Mean of Tool use 73, Reasoning 73, Context window 93, Multimodal 15, Coding 75 = 65.8 (Cost efficiency excluded per methodology).

> **Gap vs folder average (72.0): −6.2.** Driven by the text-only Multimodal score (15) and conservative treatment of the single-source July 31 benchmark table. The model's real strengths — 1M retrieval evidence (MRCR 78.7), TB 2.1 82.7, LiveCodeBench 91.6, and $0.06/M blended — are captured above.

## Notes

- Verification trail: DeepSeek HF card `deepseek-ai/DeepSeek-V4-Flash` (architecture, base-model table, chat-mode comparison table, citation `deepseekai2026deepseekv4`), OpenRouter listing (AA measurements, Design Arena, pricing history), CosmicJS (July 31 re-post-training, changelog benchmark table, AA Index 50, verbosity), AI Flash Report (GPQA 89.4%, HLE 32.1%, TAU2 95.0%, pricing), AI Atlas (providers, pricing cuts, 1.05M/384K), DS Guide (CSA/HCA, 27% FLOPs/10% KV at 1M, MRCR 94%≤128K/82%@512K/66%@1M for Pro), anycap (two-model launch, API migration), pricepertoken (31 providers, non-reasoning variant scores).
- Known conflicts: April-preview AA Index ~24 vs current version AA Index 50 (re-post-training); AI Flash Report's HLE 32.1% vs AA's 34.8% (Max) — different runs; MRCR@1M 66% (Pro, DS Guide) vs 78.7 (Flash Max, DeepSeek table) — different models/settings; cosmicjs is a single source for the July 31 table.
- Open questions: independent third-party runs of the July 31 version (TB 2.1 82.7, Toolathlon 70.3); whether the July 31 weights are on HF; official knowledge cutoff.
- Future sources: AA model page for the current V4 Flash, third-party harness runs, DeepSeek's V4 stable release.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash DeepSeek V4 Flash Overall=65.8 (Tool=73 Reasoning=73 Context=93 Multimodal=15 Coding=75 Cost=97; July-31 re-post-trained version; TB 2.1 82.7; MRCR 1M 78.7)`
