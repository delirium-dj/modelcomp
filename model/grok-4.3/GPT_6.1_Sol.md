# Grok 4.3 — findings by GPT 6.1 Sol

- Source: xAI / SpaceXAI / `grok-4.3`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** Proprietary reasoning/vision model emphasizing instruction following and configurable tools, with a million-token context and inexpensive output. Different from Grok4.20,4.5,4.6,4.7 and Grok Build0.1 [S1–S5].
- **Provider / access:** Current official model page identifies `grok-4.3`; xAI API base `https://api.x.ai/v1` supports Chat Completions/Responses, while OpenRouter offers `x-ai/grok-4.3` with standard/ZDR/priority routes [S1,S4,S5,S10]. No current Zen alias established just from local `opencode/grok-4.3` metadata.
- **Release / status:** Independent AA/Vals and gateway agree on **2026-04-30**, snapshot **`x-ai/grok-4.3-20260430`** [S2–S4]. Candidate vendor launch URLs were inaccessible/404; the exact-model vendor API page is directly verified. AA labels its tracked evaluation deprecated in favor4.6 and refreshes only default10K performance; this is not a verified vendor shutdown [S2].
- **IDs:** `grok-4.3`, official alias `grok-4.3-latest`, gateway `x-ai/grok-4.3` [S1,S4]. Effort labels refer to configurations, not separately established weights. No free Zen ID verified.
- **Context window:** Official **1,000,000 tokens** [S1]; current gateway **900,000 maximum completion**, no separate prompt cap advertised [S4]. Vals advertises/sets **1,000,000 output**, while OpenRouter descriptive prose says “no output token limit” [S3,S5]. These statements do not override the900K gateway cap or remove shared-context constraints. No unconditional1M input-plus1M output promise.
- **Modalities:** Official text/image input → text [S1]. Vals/gateway also expose files [S3,S4]. Official file API documents **attachment_search retrieval** over PDFs/text, not unconditional native PDF-page vision; file search adds tool-call charges [S6]. No audio/video/non-text generation assigned; voice/Imagine are separate API products [S10].
- **Reasoning / tools:** Official efforts **none/low/medium/high/xhigh**, default **low**, function calling and structured outputs [S1]. AA/Vals results below use **high** [S2,S3], not default low. General server-side search/code/MCP documentation describes platform tools, not proof every feature is supported identically on this older ID [S6,S7].
- **Pricing (as of 2026-10-20):** Official **<200K prompt: $1.25 input /$2.50 output /$0.20 cached per1M**; **≥200K: $2.50/$5/$0.40 for every token in the request** [S1]. Batch supports a documented **20% discount**. Gateway standard routes match, priority doubles those rates again, search listed **$0.005/call** [S4]. OpenRouter prose says “exceeding200K total tokens”; vendor and actual metadata instead use **prompt length**, an important billing distinction [S1,S4,S5].
- **Architecture / knowledge:** Proprietary weights; parameter counts and exact architecture undisclosed in inspected primary sources. AA's exact-model record has `knowledgeCutoffDate:null`; live search access is not a pretraining cutoff [S2].

### Raw benchmarks found

In addition to rendered independent pages, this run parsed AA's own public page hydration **`currentModel`** JSON, tying all below AA figures to **UUID `948892b5-db03-4118-a4a8-ccd51ed871ea`, slug `grok-4-3`, effort high** [S2]. Extracting the selected model record, rather than searching an all-model chart for nearby numbers, avoids misattribution. Fractions are converted to percentages; raw Elo/index values retain their scales.

Agent / tool use:

- **Tau2 telecom 97.66%**, AA exact-model `tau2`; **Tau3-Banking 12.37%**, `tauBanking` [S2]. The independently inspected banking methodology uses **97 tasks**, approximately **700 policy documents /195K tokens**, backend-state grading and pass@1 averaged over repeats [S8]. Near-perfect telecom therefore does not establish reliable policy-heavy banking agency.
- AA **Terminal-Bench2.1 39.70%**, **TB4.0 0.00%**, current selected record [S2]. Independent Vals **TB2.1 41.95% ±2.62**, temperature0.7/top-p0.95/high; its own profile rank66/75 differs from the multi-harness table's67th row because display populations differ [S3,S9].
- AA AutomationBench objective/partial score **1.38%**, APEX-Agents **17.04%**, AnalystAgent **8.75%**, EnterpriseOps-Gym **26.26%**, GDPval-AA current **937.89 Elo** [S2]. Objective fraction is not necessarily all-or-nothing task pass rate.
- Vals SkillsBench **40.64% ±4.62**, Finance Agentv2 **37.73% ±0.37**, Legal Research **15.38% ±2.51**, Tax Agent **6.18% ±1.73**, EMB **18.39% ±1.67** [S3]. Strong LegalBench closed-form knowledge does not establish equivalent legal workflow success.
- No verified Claw-Eval/MCP-Atlas model-specific score found. ResearchClawBench **12.4%** appears secondarily [S11]; a different benchmark, not Claw-Eval by renaming.

Reasoning / knowledge:

- AA high **GPQA Diamond90.10%**, **HLE37.21%**, **CritPt8.00%**, exact selected record [S2]. Vals GPQA **91.41% ±1.41**, MMLU Pro **85.84% ±0.33**, LegalBench **84.46% ±0.42** independently corroborate broad academic strength [S3].
- AA Intelligence Index **24.8801→25**, **v4.3.2**, `intelligenceIndexIsEstimated:false` [S2]. BenchLM's **37.6** is an older/unmatched record [S11]; exact old index version was not established, so not used as current quality or claimed a model regression.
- AA IFBench **81.29%**, exact high record [S2]. Local “83.3%, #1” is not established as the current high-profile score or current rank.
- AA Omniscience accuracy **34.78%**, hallucination rate **25.76%**, reliability index **17.98** [S2]. This gives **74.24% non-hallucination under that metric**, not universal83% truthfulness. AA page also contains lower-effort records with different abstention/hallucination trade-offs, so effort must be named; low hallucination with low accuracy does not imply knowing all answers.
- Independent runtime: **94.0 output tokens/s**, **21.42s TTFT**, **87M** index output tokens, **$0.2054≈$0.21/task** [S2]. Quality index, decode speed, response latency and task success remain different quantities.
- FrontierMathv2 **42.807% tiers1–3 /14.634% tier4** appear as secondary Epoch attributions [S11]. Exact run not directly verified. No primary ARC/AIME score found for this exact model in inspected sources.

Coding:

- Independent Vals SWE-bench **71.40% ±2.02**, LiveCodeBench **84.49% ±1.02**, high [S3].
- Vals Vibe Code Benchv1.1 **19.40% ±4.24**, Code Migration **6.79% ±1.20**, ProgramBench **0.00%** [S3]. These materially constrain end-to-end engineering despite good isolated-code results.
- AA SciCode **48.26%**, exact selected record [S2]; secondary earlier47.3 is not substituted for the current value.
- TB2.1 **39.70/41.95%** across AA/Vals supports moderate terminal agency [S2,S3]. No verified SWE-Pro/DeepSWE/Atlas model-specific measurement found in inspected material.

Long context:

- **1M configured capacity**, primary;900K gateway output cap [S1,S4].
- AA-LCR **73.0%** in the current exact-model evaluation array; BenchLM/OpenRouter-attributed older **64.3%** is a different dated record [S2,S11]. AA's long-context methodology spans roughly10K–100K tokens, not a full1M recall test [S8].
- No verified MRCR/RULER result or98%+ retrieval at512K+ found. A large context limit plus moderate shorter-window reasoning does not establish perfect full-window recall.

Multimodal:

- AA MMMU-Pro **78.09%** and GDP.pdf all-pass **5.8%**, exact selected model record [S2]. Vals MMMU-Pro **83.06% ±0.90**, high [S3]. Exact harness/subset causes of this gap not verified; no averaging or automatic preference for higher value.
- Native image input is explicit; PDFs through the vendor Files API use agentic attachment search [S1,S6]. Full-document all-pass reasoning is substantially harder than multiple-choice visual questions. No video/audio quality borrowed from later Grok products.

### Research trail and comparison

At least three fresh queries: [Bing official/model benchmark](https://www.bing.com/search?q=%22Grok+4.3%22+official+model+benchmark&setlang=en&cc=us) returned broad Grok links; [Google independent review/benchmark](https://www.google.com/search?q=%22grok-4.3%22+independent+review+benchmark&hl=en) an interstitial; [DuckDuckGo pricing/context/tools](https://html.duckduckgo.com/html/?q=%22Grok+4.3%22+pricing+context+tools) a bot challenge. Vendor candidate `x.ai/blog/grok-4.3` returned403; both dot/dash news URL candidates and overview URL returned404. None is evidence the verified API model is fictional.

Usable direct evidence came from the exact official model page, official file/tool docs, AA's rendered page **and selected-model JSON**, Vals profile and independently documented terminal methodology, and actual provider metadata. The AA record check resolved otherwise secondary submetrics and surfaced the distinction between telecom and policy-intensive banking. No standalone official4.3 technical/model-card PDF was located through inspected sources; architecture and undisclosed benchmarks remain unknown.

Key conflicts preserved: **low default vs high evaluations**, **900K actual gateway cap vs “no limit” prose/1M Vals setting**, **prompt vs total-token price threshold**, **current AA25 vs secondary37.6**, **current high IF81.29 vs local83.3**, **74.24% metric-specific non-hallucination vs unqualified83%**, **AA/Vals visual and terminal differences**, and **old Vals index62.6 vs its current46.98 aggregate** as changing test coverage rather than direct model regression. BenchLM also duplicates several scores under AA/non-AA labels; duplicate reporting is not independent replication.

### Normalized scores (1–100)

- **Tool use: 65/100.** Strong Tau2 telecom and functional tool APIs coexist with Tau3-Banking12.37%, TB2.1~40%, TB4zero and weak professional workflow results; single-domain tool success cannot justify frontier autonomy [S1–S3,S8].
- **Reasoning: 82/100.** Independent GPQA90–91%, HLE37.21 and good IFBench support strong reasoning; AA index25, CritPt8%, low knowledge recall and workflow weaknesses cap broad capability [S2,S3].
- **Context window: 95/100.** Primary1M capacity meets the capacity tier; no verified full-window retrieval quality supports100, and gateway output limits/≥200K billing apply [S1,S2,S4].
- **Multimodal: 75/100.** Native image input, verified visual scores and PDF-search interfaces support useful visual/document input; low GDP.pdf5.8, retrieval-mediated PDF handling, no native audio/video and text-only output cap breadth [S1–S3,S6].
- **Coding: 77/100.** Independent SWE71.4/LCB84.49 and SciCode48.26 support useful coding; Vibe19.4/migration6.79 and weak terminal agency materially limit end-to-end reliability [S2,S3].
- **Cost efficiency: 86/100.** $1.25/$2.50 base, $0.20 cache,20% batch discount and AA$0.21/task provide affordable paid work; full-request≥200K doubling, priority/tool charges and Vals TB$0.98/test despite41.95% success cap success-adjusted value [S1,S2,S4,S9].
- **Overall Score: 79/100.** Half-up mean `(65 + 82 + 95 + 75 + 77) / 5 = 78.8 → 79`; cost excluded. Best fit: supervised long-text/image analysis and constrained function-calling, with high-effort evaluation settings distinguished from low defaults.

### Sources

- [S1] https://docs.x.ai/developers/models/grok-4.3 — exact official model page,1M context, aliases, native modalities, low default, pricing boundary and20% batch discount.
- [S2] https://artificialanalysis.ai/models/grok-4-3 — independent v4.3.2/runtime and exact high `currentModel` hydration record; UUID/metric conversion explained above.
- [S3] https://www.vals.ai/models/grok_grok-4.3 — independent exact-model results/uncertainty, high settings and datedApril30 update.
- [S4] https://openrouter.ai/api/v1/models/x-ai/grok-4.3/endpoints — current provider snapshot,900K completion cap, standard/priority and long-context price overrides; no inference performed.
- [S5] https://openrouter.ai/x-ai/grok-4.3/benchmarks — descriptive model page; no-limit and total-token billing prose qualified against actual metadata/vendor terms.
- [S6] https://docs.x.ai/developers/files — primary Files/attachment_search processing, supported PDFs and per-tool charging; platform examples currently show newer models.
- [S7] https://docs.x.ai/developers/tools/overview — primary tools/transport documentation, distinguished from exact older-model support guarantees.
- [S8] https://artificialanalysis.ai/evaluations/tau3-banking — independent97-task banking setup and evaluator's benchmark definitions, including shorter-window AA-LCR methodology.
- [S9] https://www.vals.ai/benchmarks/terminal-bench-2-1 — independent Terminus2/pass@1 methodology and Grok41.95%/$0.98/test row; inspected during this batch.
- [S10] https://docs.x.ai/developers/release-notes — platform API and separate voice/Imagine releases, not a located exact4.3 launch card.
- [S11] https://benchlm.ai/models/grok-4-3 — secondary source discovery, updated2026-10-19; historical and duplicated entries not adopted as current independent replications.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20
- Method: Sequential independent web research with at least three distinct searches, primary exact-model API/docs, direct AA/Vals and benchmark methodology, exact selected-model public page-data extraction and live gateway comparison. No peer findings read. Scores are editorial normalized assessments, with parameter, metric, date and source conflicts retained.
