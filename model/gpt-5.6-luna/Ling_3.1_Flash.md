# GPT-5.6 Luna — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-5.6-luna`; API `gpt-5.6-luna`; OpenAI API, ChatGPT Work, Codex, Azure, Amazon Bedrock, OpenAI Flex/Fast)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's fastest, most affordable GPT-5.6 tier (nano-class; 80% price cut on 2026-07-30) — Terminal-Bench 2.1 84.7%, GPQA Diamond 92.3%, FrontierMath Tier 1–3 78.6%, DeepSWE v1.1 67.2%, SWE-bench Pro 62.7%, Agents' Last Exam 50.3% (near Sol's 52.7%) across a 1.05M context at $0.20/$1.20 per 1M; the strongest price-performance point in the GPT-5.6 family.
- **Provider / access:** OpenAI API (reasoning effort none/low/medium-default/high/xhigh/max), ChatGPT Work and Codex (Free/Go: Terra; Plus/Pro/Business/Enterprise: Terra and Luna), Azure, Amazon Bedrock, OpenAI Flex (50% off) and Fast (2×). `noFreeId`.
- **Release / knowledge:** GPT-5.6 family GA 2026-07-09; Luna price cut 2026-07-30; knowledge cutoff 2026-02-16 (OpenAI API docs); EU AI Act training summary: multilingual public/partner/synthetic (GPT-5.4/5.5-generated)/human data, some data no later than June 2026, ~2018–Feb 2026 window; not a fine-tune of a prior model.
- **IDs:** `openai/gpt-5.6-luna` / `gpt-5.6-luna`. (The repo `meta.json` is accurate: 1,050,000/128K, text/image in, $0.20/$1.20.)
- **Context window:** 1,050,000 tokens in; 128,000 out.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $0.20/$1.20 per 1M input/output; cached input $0.02/M (10%); cache writes 1.25× uncached input ($0.25/M); >272K prompts billed 2× input and 1.5× output for the full request; Flex $0.10/$0.60; Fast $0.40/$2.40; web search $10/1K calls; 143 tok/s (max), 0.85s TTFT (non-reasoning).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

GPT-5.6 family launch (OpenAI, 2026-07-09; Luna column):

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (vs Sol 88.8%, Terra 87.4%, GPT-5.5 85.6%, Fable 5 83.1%, Opus 4.8 78.9%)
- DeepSWE v1.1: **67.2%** (vs Sol 72.7%, Terra 69.6%, GPT-5.5 67%, Fable 5 69.7%, Opus 4.8 59%)
- SWE-bench Pro: **62.7%** (vs Sol 64.6%, Terra 63.4%, GPT-5.5 59.4%, Fable 5 80%, Opus 4.8 69.2%)
- AA Coding Agent Index v1.1: **74.6** (vs Sol 80 SOTA, Terra 77.4, GPT-5.5 76.4, Fable 5 77.2, Opus 4.8 72.5)
- Agents' Last Exam: **50.3%** (vs Sol 52.7%, Terra 50.4%, GPT-5.5 46.9%, Fable 5 40.5%, Opus 4.8 45.2%)
- GDPval-AA v2: **1591.8 Elo** (vs Sol 1747.8, Terra 1593, GPT-5.5 1493.7, Fable 5 1759.6, Opus 4.8 1600.1)
- BrowseComp: **83.3%** (vs Sol 90.4%/Ultra 92.2%, Terra 87.5%, GPT-5.5 84.4%, Opus 4.8 85.9%)
- OSWorld 2.0: **45.6%** (vs Sol 62.6%, Terra 50.2%, GPT-5.5 47.5%, Fable 5 47.5%, Opus 4.8 54.8%)
- BenchCAD: **63.1%** (73.9% with Python tool; vs Sol 70.6%/83.4%)
- Capture-the-Flag: **85.2%**; SEC-Bench Pro: **48.9%**; ExploitBench: **33.2%**; ExploitGym: **12.4%**
- Management Consulting Tasks (internal): **35.4%**; Big Finance Bench: **36%**; HealthBench Professional: **55.7%**
- Toolathlon: **53.4%**; CyberGym: **77.9%**; ApprenticeBench (GUI): **7%**; APEX-Agents Original (max, Mercor): **43.0%**; APEX-Agents-AA: **35.8%**; SWE Atlas Codebase QnA (Mercor mini-swe-agent, 250 steps, 1h, max): **46.0%**; Finance Agent Benchmark 2 (max, Vals): **55.0%**
- AutomationBench 1.0.6 effort ladder (OpenAI, 2026-09-22): **1.8%** low / **4.3%** medium / **17.0%** max — the harder 1.0.6 suite is a cap
- DeepSWE v1.1 effort ladder (OpenAI, 2026-09-22): **1.2%** low / **42.4%** high / **62.2%** max — the Sep-22 max re-read sits 5 points under the launch 67.2% (conflict kept)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (vs Sol 94.6%, GPT-5.5 93.6%, Fable 5 92.6%, Opus 4.8 92%, Gemini 3.1 Pro 94.3%)
- FrontierMath Tier 1–3 (v2): **78.6%**; Tier 4 (v2): **58.5%** (vs Sol 89%/83%, Fable 5 87%/87.8%, Opus 4.8 80%/56.1%)
- AA Intelligence Index v4.1 (launch): **51.2** (vs Sol 58.9, Terra 55, GPT-5.5 54.8, Fable 5 59.9, Opus 4.8 55.7, Gemini 3.5 Flash 50.2)
- LifeSciBench: **51.2%**; GeneBench Pro: **10.8%**; MedChemBench (internal): **30.4%**
- GPQA Diamond (Epoch AI harness, max): **91.6%** (evaluated 2026-07-09 — independent confirmation of the 92.3% vendor read); SimpleQA Verified (Epoch AI harness, max): **41.0%** (evaluated 2026-08-10)
- GDP.pdf: **22.7%**; HLAB (Harvey's Legal Agent Benchmark, max, Vals): **1.3%**
- MMMU-Pro: **78.4%** no tools / **79.5%** with tools (OpenAI) — the first MMMU figure for this model

Independent (Artificial Analysis, current, per effort — max unless noted):

- Intelligence Index: **37.3** (xhigh 34.6, high 32.1, medium 25.0, low 21.0, non-reasoning 15.5)
- Coding Index: **71.4**; Agentic Index: **42.1**
- HLE: **39.5%** (high 33.4%); AA-LCR: **83.7%**; GDPval-AA: **48.2%**; CritPt: **20.6%**; SciCode: **53.6%**
- AA-Omniscience: accuracy **42.7%**, non-hallucination **7.4%** (very weak)
- MRCR v2 8-needle 256K–512K: **41.3%**; 512K–1M: **41.3%** (weak needle retrieval at depth)
- GraphWalks BFS 256K f1: **81.3%**; 1M f1: **51.2%**
- Internal Research Debugging: **50.8%**; KernelGen 1P: **22.4%**; NanoGPT: **1.66%**; PostTrainBench Lite: **29.6%**; RSI Index: **41.9%**
- More independent (BenchLM/Mercor/Cognition/Vals/Epoch, 2026-10): SWE-bench Verified **76.2%** (Mercor mini-swe-agent, 1000 steps, 3h, max) vs **93.0%** (vals.ai minimal bash harness) — a 17-point harness spread, both independent; SWE-bench Multilingual **92.4%** (Mercor); FrontierCode 1.1 Extended **55.1%** (Cognition/Devin); CursorBench 3.2 **61.1%** / 4.0 **35.9%**; VulcanBench v3 **85.5%**; Terminal-Bench 3.0 **14.3%** (vs Sol 34.6% — a cap); LMArena Text **1430** / Vision **1259** (xhigh)

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 84.7% nearly reaches the 85% frontier bar, with DeepSWE v1.1 67.2%, SWE-bench Pro 62.7%, the AA Coding Agent Index of 74.6, BrowseComp 83.3% and Agents' Last Exam 50.3% (near Sol's 52.7%) supporting; OSWorld 2.0 45.6%, SEC-Bench Pro 48.9%, MRCR v2 41.3% and the AA Agentic Index of 42.1 (max) cap the score. Toolathlon 53.4%, CyberGym 77.9% and Finance Agent Benchmark 2 55.0% (Vals) fill; AutomationBench 1.0.6 (1.8–17.0% by effort), ApprenticeBench 7% and APEX-Agents-AA 35.8% cap.
- **Reasoning: 78/100.** GPQA Diamond 92.3%, FrontierMath Tier 1–3 78.6% and HLE 39.5% (max) are frontier-adjacent, with FrontierMath Tier 4 58.5% supporting; the AA Intelligence Index of 37.3 (max, current Index — 51.2 on the launch v4.1), CritPt 20.6% and AA-Omniscience non-hallucination of 7.4% cap the score.
- **Context window: 90/100.** 1.05M-token window (128K out) with AA-LCR 83.7% (max) and GraphWalks BFS 81.3% at 256K; MRCR v2 at 41.3% (256K–1M) and GraphWalks 51.2% at 1M show weak needle retrieval at depth, so this stays below the 95+ band.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); MMMU-Pro 78.4%/79.5% (OpenAI), BenchCAD 63.1%/73.9% (with Python) and LMArena Vision 1259 (xhigh) fill the band; no audio/video input.
- **Coding: 77/100.** Terminal-Bench 2.1 84.7% (vendor) / 80.9% (AA) / 79.03% (vals.ai) and the AA Coding Agent Index (74.6 at launch, 71.4 max on the current index) lead, with SWE-bench Verified 93.0% (vals.ai, rank 9/86, bash-only harness, $0.04/test), DeepSWE v1.1 67.0–67.2% ($0.61/task) and SWE-bench Pro 62.7% supporting — SWE-bench Verified now spans **76.2%** (Mercor full mini-swe-agent) to **93.0%** (vals.ai minimal bash), a harness-dependent spread with both reads kept; LiveBench Agentic Coding 48.4%, SciCode 53.6%, KernelGen 1P 22.4%, NanoGPT 1.66%, PostTrainBench Lite 29.6%, Terminal-Bench 3.0 14.3% and FrontierCode Extended 55.1% (Cognition) cap the score.
- **Cost efficiency: 95/100.** $0.20/$1.20 per 1M (blended ~$0.40/M at 3:1) with 10%-of-input cache reads ($0.02/M) and a 50%-off Flex tier ($0.10/$0.60) sits between the ~$0.10/$0.20≈97–99 and ~$1.25/$4.25≈88 anchors; the >272K repricing (2× input, 1.5× output for the whole request) is the main caveat. OpenAI's own efficiency math: BrowseComp 84.04% at $1.33 vs GPT-5.5's 84.36% at $33.27 (≈25× cheaper for equal accuracy), 98% of GPT-5.5's extraction accuracy at 1/18 the cost, and 78% of 106 hard browser tasks for ~$14 (SOTA 80% for ~$235).
- **Overall Score: 78/100.** (78+78+90+65+77)/5 = 77.6 → 78 — a nano-priced model with frontier-adjacent reasoning (GPQA 91.7–92.3%, FrontierMath T1-3 78.6%) and near-frontier agentic coding (TB2.1 84.7%, SWE-bench Verified 93.0%, DeepSWE 67.2%) at $0.20/$1.20, held back by weak needle retrieval (MRCR 41.3%), OSWorld 2.0 (45.6%) and AA-Omniscience non-hallucination (7.4%).

---

## Update 2026-10-08 (6-day re-research)

Full independent scorecard found (The Model Gap, 2026-08-26; Datacurve; Writingmate; goml):

- SWE-bench Verified: **93.0%** (vals.ai, rank 9/86, minimal bash-tool harness, $0.04/test) — fills the gap; ~29× cheaper than Sol's 96.2% ($1.15/test) for a 3.2-point gap
- Terminal-Bench 2.1: **80.9%** (AA, e2b sandbox, pass@1 averaged over 3 repeats) / **79.03% ± 0.99** (vals.ai's own Terminus-2 run) / **75.7% ± 1.3** (Codex harness, 5 attempts, run 2026-07-11) — three independent readings bracketing the vendor's 84.7%
- DeepSWE v1.1: **67.0% ± 4** (Datacurve, mini-swe-agent via Pier, max effort; $0.61/task, 73K output tokens, 102 steps) — ~11× cheaper than Sol's 73% ($6.46/task) for a 6-point gap
- Agents' Last Exam (Snorkel): **30.3%** pass rate (perfect-run share); the same Codex/xhigh run's partial-credit Score is **49.4%** — the two metrics are not interchangeable; ~3× cheaper than Sol ($235 vs $772) for a marginal gap
- ARC-AGI-2 (max): **59.6%** (ARC Prize, dated 2026-07-30 — the price-cut date, possibly a later checkpoint); ARC-AGI-1 90.7%
- LiveBench (2026-06-25 release, max effort): **73.6%** overall (Reasoning 85.6, Coding 82.9, Agentic Coding 48.4, Mathematics 87.2, Data Analysis 78.0, Language 72.6, Instruction Following 60.1; $0.169/successful task); GPQA Diamond 91.7% (vals.ai, rank 16/135 — saturated board)
- goml cross-check: AA Intelligence Index v4.1 (max) 51%, AA Coding Agent Index 75%, ~80% lower cost per task than Sol ($0.21 vs $1.04), Pareto-frontier position ahead of Terra
- Absent boards (checked, no Luna row): LiveCodeBench (vals.ai), Toolathlon-Verified (entire GPT-5.6 family), HMMT Feb 2026 (all GPT-5.6 tiers)
- **Coding revised 75→77** (SWE-bench Verified 93.0% is a strong fill); Overall 77→78 ((78+78+90+65+77)/5 = 77.6)

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**No score changes** — Tool 78 / Reasoning 78 / Context 90 / Multimodal 65 / Coding 77 / Cost 95, Overall stays 78. The pass added BenchmarkRegistry's 58-row primary-source ledger (Epoch AI, Mercor, Vals, OpenAI's 2026-09-22 effort ladders), BenchLM, the Vals SWE-bench leaderboard and OpenAI's builders-guide efficiency data:

- **New independent fills:** GPQA Diamond **91.6%** (Epoch AI harness — confirms the 92.3% vendor read); SimpleQA Verified **41.0%** (Epoch); SWE-bench Multilingual **92.4%** (Mercor mini-swe-agent, 1000 steps); FrontierCode 1.1 Extended **55.1%** (Cognition/Devin); CursorBench 3.2 **61.1%** / 4.0 **35.9%**; VulcanBench v3 **85.5%**; CyberGym **77.9%**; Toolathlon **53.4%**; Finance Agent Benchmark 2 **55.0%** (Vals); APEX-Agents Original **43.0%** (Mercor); LMArena Text **1430** / Vision **1259** (xhigh).
- **MMMU-Pro: 78.4%** no tools / **79.5%** with tools (OpenAI) — the first MMMU figure for this model; supports Multimodal 65 (no audio/video input).
- **SWE-bench Verified harness spread:** **76.2%** (Mercor full mini-swe-agent, 1000 steps/3h, max) vs **93.0%** (vals.ai minimal bash-only harness, $0.04/test) — a 17-point spread driven by harness strength; the Vals leaderboard's difficulty split is 96% (<15-min tasks) / 92% (15m–1h) / 86% (1–4h) / 67% (>4h). Both reads kept; the 10-08 93.0% row stands with the Mercor counterweight.
- **Newer OpenAI self-reports (2026-09-22):** OSWorld 2.0 (v2026.08.08) effort ladder **12.0%** low → **22.7%** medium → **35.9%** high → **48.0%** xhigh → **52.7%** max (vs the 45.6% launch read — version/effort-dependent, conflict kept); DeepSWE v1.1 **1.2%** low → **42.4%** high → **62.2%** max (5 points under the launch 67.2%); AutomationBench 1.0.6 **1.8%** low → **4.3%** medium → **17.0%** max (the harder suite is a cap).
- **New caps:** Terminal-Bench 3.0 **14.3%** (vs Sol 34.6%), ApprenticeBench **7%**, APEX-Agents-AA **35.8%**, HLAB (Harvey's Legal Agent) **1.3%** (Vals), GDP.pdf **22.7%**.
- **Efficiency evidence (OpenAI builders guide, 2026-08-13):** BrowseComp 84.04% at **$1.33** vs GPT-5.5 Extra High's 84.36% at **$33.27** (≈25× cheaper for equal accuracy); 98% of GPT-5.5's document-extraction accuracy at 1/18 the cost; 78% of 106 hard browser tasks for ~$14 (SOTA 80% for ~$235); a code-explorer workload cut inference cost 64%, response time 90% and gained 5 F1 points; customer data: prompt-cache reuse 24%→90%, 2.2× more context with 8.5× fewer output tokens at 87% lower cost than GPT-5.4 mini.
- **Specs filled in:** knowledge cutoff **2026-02-16** (OpenAI API docs); max input 922K tokens; median 120 tok/s, TTFT 112.58s (AA, 2026-10-11); EU AI Act training summary on file (multilingual corpus, Common Crawl, GPT-5.4/5.5-generated synthetic data, ~2018–Feb 2026).
- Still open: the OSWorld 2.0 45.6% (launch) vs 52.7% (v2026.08.08 max) gap, the DeepSWE 67.2% vs 62.2% re-read gap, and an independent Terminal-Bench 4.0 run (only TB 3.0 14.3% exists).
- Score impact: none — MMMU-Pro 78.4–79.5% fills the +image-in band without moving Multimodal 65; the SWE-bench Verified 76.2–93.0% harness spread and TB 3.0 14.3% cap Coding 77; GPQA 91.6% (Epoch) corroborates Reasoning 78; Overall stays (78+78+90+65+77)/5 = 77.6 → 78.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (OpenAI GPT-5.6 launch + Luna price-cut + builders-guide posts, OpenAI API docs, EU AI Act training summary, Artificial Analysis, BenchmarkRegistry, BenchLM, Mercor, Epoch AI, Vals, llm.ing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_6_Luna.md`, using the same headings.
