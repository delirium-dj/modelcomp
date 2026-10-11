# Grok 4.5 — findings by Ling 3.1 Flash

- Source: SpaceXAI (`opencode/grok-4.5`; API `grok-4.5` / `grok-4.5-latest` / `grok-build-latest`; Grok API, Cursor, Grok Build)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** SpaceXAI's July-2026 coding/agentic flagship (built alongside Cursor) — Terminal-Bench 2.1 83.3% (near the frontier bar), SWE Marathon 29.0% (best in its table), SWE-bench Pro 64.7%, DeepSWE 1.0 62.0%, with ~4.2× token efficiency over Opus 4.8 (max) on SWE-bench Pro; 500K context at $2/$6 per 1M. Second pass: SWE-bench Verified 86.6% (#7/72), LiveCodeBench 87.4% (#9/123), Vibe Code Bench 69.0%, Long-Horizon Terminal-Bench 0.51 (#1/21); AA Intelligence Index re-based to 39 (v4.3, 2026-09-07) from the v4.1 read of 54. Superseded by Grok 4.6 (2026-08-12) at the same base price.
- **Provider / access:** SpaceXAI (xAI) — Grok API, Cursor, Grok Build (default at launch); reasoning effort low/medium/high (default high); function calling and structured outputs; ~80 tok/s vendor-stated (92.9 tok/s independent).
- **Release / knowledge:** 2026-07-08 (launch post dated 2026-07-16; multiple trackers date the release to 2026-07-08); knowledge cutoff not published; not in the EU at launch (regulatory review, expected mid-July).
- **IDs:** `opencode/grok-4.5` / `grok-4.5`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 500K-token window (xAI's official card — not the 1M some third parties claim, which is Grok 4.3's spec) and takes text and image input.
- **Context window:** 500,000 tokens.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $2.00/$6.00 per 1M input/output below 200K prompt tokens; $4.00/$12.00 at 200K+ (higher rate applied to the whole request); cached input $0.30/M ($0.60 ≥200K); no Batch API discount.
- **Architecture:** proprietary reasoning model; ~1.5T parameters (Musk-reported, not officially confirmed); drops the native video input Grok 4.3 introduced.

### Raw benchmarks found

Agent / tool use (xAI launch table, 2026-07-16; competitor figures from their developers' system cards/leaderboards):

- Terminal-Bench 2.1: **83.3%** (vs Fable 5 max 84.3%, GPT-5.5 xhigh 83.4%, Opus 4.8 max 78.9%) — near the frontier bar
- SWE Marathon resolution rate (pass@1): **29.0%** (vs Opus 4.8 max 26.0%, Fable 5 max 24.0%, Opus 4.7 max 16.0%) — best in table
- SWE-bench Pro resolve rate: **64.7%** (vs Fable 5 max 80.4%, Opus 4.8 max 69.2%, Opus 4.7 max 64.3%, GLM-5.2 62.1%, GPT-5.5 xhigh 58.6%)
- DeepSWE 1.0: **62.0%** (vs Fable 5 max 66.1%, GPT-5.5 xhigh 64.31%, Opus 4.8 max 55.75%, Opus 4.7 max 40.12%)
- DeepSWE 1.1 (mini-swe-agent harness, Datacurve): **53%** (vs Fable 5 max 70%, GPT-5.5 xhigh 67%, Opus 4.8 max 59%, GLM-5.2 44%)
- Token efficiency: **15,954** average output tokens per SWE-bench Pro task — ~4.2× fewer than Opus 4.8 max (67,020); vendor claims ~2× token efficiency vs comparable leading models
- DataLLM Lab executed 9-task Python benchmark (independent, 2026-07-29): **9/9** at $2.93/1K tasks, 6.6s avg, 289 reasoning tokens (Grok 4.3: 8/9, $1.75)
- AA Intelligence Index: **54** (v4.1, 9-eval composite, #4 of 168 at launch, behind Fable 5's 60, Opus 4.8's 56 and GPT-5.5's 55; Grok 4.3: 53) — **re-based to 39 (v4.3, 2026-09-07: GPQA Diamond out, TB 4.0 + AutomationBench-AA in), 38th of 200, $1.04 per task** (BenchLM: 38.8); the drop is the rebase, not a regression
- BenchmarkList board (2026-07→10): **Long-Horizon Terminal-Bench 0.51 mean reward (#1 of 21, 100th pct; 13 tasks ≥0.95, $11.19/task)**; τ³-Banking **42.1%** (#14 of 176 — a third board read: AA's 33% #1 of 28 and DataLearner's 47.94 #8 of 167 are different protocols); AutomationBench-AA **51.4%** (board-topping, ahead of Fable 5's 48.6% and Opus 4.8's 48.5%); APEX-Agents-AA 47.1% (#4 of 33); FounderBench 66.53 (#2 of 10); WildClawBench 57.5% (#7 of 36); BrowseComp 75.8% ±6.1% (#42 of 60); Agents' Last Exam 27.0% (#19 of 41); Web Search Index 35.5%; Terminal-Bench 3.0 15.7% (#12 of 20); Terminal-Bench 4.0 **12.4%** (#24 of 29 — the current-frontier cap); Frontier-Bench 17.8% ±1.4%; Composite-Bench 9.0%; Time Horizon Index: KSP 6.3%
- Terminal-Bench 2.1 (Best Reported Harness, verified 2026-08-28): **79.3% ± 1.5%** (#14 of 27; Pass@2 88.9%, Pass@3 92.4%, Pass@5 95.5%; 4.73M output tokens over 445 trials; $134.09 total; reward-hack rate 9.0%; field leader G-5.6 Sol 89.5%) — below the self-reported 83.3% Grok Build read
- AA-Briefcase v1.1 **1313** (#37 of 145); GDPval-AA **1535** (rank 3 of 3); LMArena Search Arena 1221.29 (#7 of 24); ITSMBench 45.4% (#2 of 5); RuneBench 5.7 (#13 of 61); NanoGPT Speedrun Frontier 24.6% (#9 of 17); Vending-Bench 2 3887.43 (#37 of 60)

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (AA) / **93.43%** (DataLearner, #15 of 253) / **92.9%** (Vals) — three independent reads at ~93%, near-tied with Gemini 3.1 Pro / GPT-5.5 (AA: #4)
- HLE: **42.7%** (AA) / 43% (Opper) — clears the 40% bar; MMLU-Pro (Vals) **89.2%**; ARC-AGI-1 **85.67%** (ARC Prize official; BenchmarkList 87.2%) / ARC-AGI-2 **52.6%** (#37 of 99) / ARC-AGI-3 **0.3%** (#11 of 13); CritPt **15.4%**; Creative Writing Elo 1578.8; AA-Omniscience Index **25.3** (accuracy 51.6%, hallucination rate 54.1%)
- Factuality (Hallucination), xAI's own grader: **0.98%** — the lowest in its chart (Opus 4.8 max 3.4%, Grok 4.6 high 1.7%, GPT-5.5 xhigh 1.1%)
- TrueStandard 30-claim citation fabrication (independent, 2026-08-05, corrected 2026-08-21): **4.4%** (2 of 45 DOIs fabricated, resolved against Crossref + DataCite) vs Grok 4.3's 11.1% — Fisher exact p=0.434, not significant at n=30; same-arm pack: GPT-5.5 8.9%, Sonnet 5 7.0%, Gemini 3.1 Pro 4.7% — "statistically indistinguishable"; Grok 4.5 fixed two claims its predecessor broke worst and broke one its predecessor got right (a trade, not a clean improvement)

Coding (beyond the above):

- SWE-bench Verified: **86.6% ± 1.52** (#7 of 72, 92nd pct, 2026-07-28, thinking high; $0.54 per test, 199.57s latency; field leader O-5 97.0%) — a strong frontier-level independent read
- LiveCodeBench: **87.4%** (#9 of 123, 93rd pct); Vibe Code Bench v1.1: **69.0%** (#15 of 75, 81st pct); SciCode: **55.0%** (#26 of 296, 92nd pct — at the 55% reference); Convex Coding Evals (111 tasks, no guidelines): **73.0%** (#9 of 30); FrontierCode 56.6% (#8 of 36); CursorBench 3.2 66.7% (#6 of 17); Code Migration 36.6% (#11 of 33); APEX-SWE 53.6% (#3 of 14, 85th pct)
- Senior SWE-Bench: **23.2%** tasteful solve rate (#11 of 19; basic solve rate 50.5%; thinking medium; 2026-10-03 verified; field leader Fable 5.1 34.7%) — a weak under-specified-work row
- DeepSWE 1.1 (BenchmarkList read): **56.6%** (#34 of 52) vs the launch's 53% (Datacurve mini-swe-agent) — harness-dependent; DeepSWE 1.0 62.0% (#7 of 24); FrontierSWE v1 5.47 (#5 of 15); KernelBench Hard 8.9% / 11.4% / 19.7% (slices); KernelBench CUDA 18.1% (rank 2 of 4); KernelBench Mega 0.82 / 0.04
- SWE-Marathon (BenchmarkList, 2026-10-03, thinking max): **47/160 passing trials** (#21 of 33; avg uncalibrated partial score 67.6%; mean cost per costed trial $45; 21.95M tokens per trial; field leader O-5 50.0%) — consistent with the launch's 29.0% pass@1

Long context / multimodal:

- 500K window; AA-LCR **79.3%** (BenchLM) and long-context reasoning 79% (Opper) — strong independent retrieval reads; no MRCR/RULER figure; no MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 83.3% (79.3% on the verified best-reported-harness read) nearly reaches the 85% frontier bar, and Long-Horizon Terminal-Bench 0.51 (#1 of 21), AutomationBench-AA 51.4% (board-topping), τ³-Banking 33–47.94 across three boards and BrowseComp 75.8% support; Terminal-Bench 4.0 12.4%, Terminal-Bench 3.0 15.7%, Agents' Last Exam 27.0% and the absence of MCP Atlas/Toolathlon figures cap the score.
- **Reasoning: 74/100.** GPQA Diamond ~93% (three independent reads: AA 93.1%, DataLearner 93.43%, Vals 92.9%) reaches the 90%+ frontier band, with HLE 42.7% (AA) clearing the 40% bar, MMLU-Pro 89.2% and ARC-AGI-1 85.67% supporting; the AA Intelligence Index re-based to 39 (v4.3), CritPt 15.4%, ARC-AGI-2 52.6%, ARC-AGI-3 0.3% and the AA-Omniscience hallucination rate of 54.1% cap the score — tempered by xAI's own factuality grader (0.98%, lowest in its chart) and TrueStandard's 4.4% citation-fabrication read (better than GPT-5.5's 8.9%, though p=0.434, n.s.).
- **Context window: 80/100.** 500K-token window (xAI's official card — not the 1M some third parties claim, which is Grok 4.3's spec); AA-LCR 79.3% (BenchLM) is a strong independent retrieval read that supports but doesn't raise the band (no ≥98%-at-depth figure).
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); no MMMU figure captured.
- **Coding: 76/100.** Terminal-Bench 2.1 83.3%, SWE-bench Verified 86.6% (#7 of 72), LiveCodeBench 87.4% (#9 of 123), Vibe Code Bench 69.0% and SciCode 55.0% are strong independent supports, with SWE Marathon 29.0% (best in its launch table) and ~4.2× token efficiency over Opus 4.8 (max) adding; SWE-bench Pro 64.7% is mid-tier, and DeepSWE 1.1 53–56.6% (harness-dependent), Senior SWE-Bench 23.2%, FrontierSWE v1 5.47 and KernelBench Hard 8.9% cap the score.
- **Cost efficiency: 84/100.** $2/$6 per 1M below 200K (blended ~$3.00/M at 3:1) sits just under the ~$1.25/$4.25≈88 anchor; ≥200K prompts double the entire request ($4/$12), cache reads are 15% of input, there is no Batch API discount, and the 4.2× token efficiency over Opus 4.8 (max) cuts cost-per-task.
- **Overall Score: 74/100.** (76+74+80+65+76)/5 = 74.2 → 74 — a strong July-2026 coding agent (TB2.1 83.3%, SWE Marathon 29.0%, SWE-bench Verified 86.6%, LiveCodeBench 87.4%, 4.2× token efficiency at $2/$6) whose Terminal-Bench 4.0 (12.4%), DeepSWE 1.1 (53–56.6%), Senior SWE-Bench (23.2%) and AA-Omniscience hallucination rate (54.1%) keep it below the October-2026 frontier.

---

## Update 2026-10-08 (6-day re-research)

ARMES, HokAI and aggregator rows found:

- AA reads: AA Intelligence Index **54** (#4 of 168), AA Coding Agent Index **76** (on par with GPT-5.5), τ³-Banking **33%** (#1 of 28 models), GPQA Diamond **93%**, output speed 90 tok/s (AA median)
- Tool/agent fills: τ³-Banking 33% (#1) is a new strong tool-use row; AA Coding Agent Index 76 (par with GPT-5.5) supports the agentic tier; LiveBench agentic coding **56.5** (Grok 4.5 — note Grok 4.6 later read 54.2 on the same board, i.e. 4.5 was the stronger agentic-coding model there)
- Weakness fills: hallucination rate **54%** (vs 25% on Grok 4.3, per ARMES) — a documented factual-reliability gap; 500K context smaller than peers' 1M
- Launch-vs-independent check: all four launch coding figures (DeepSWE 1.0 62.0%, DeepSWE 1.1 53%, TB 2.1 83.3%, SWE-bench Pro 64.7%) check out against xAI's announcement and third-party transcriptions (apidog, Appwrite, Layer3Labs); no independent re-run of the coding boards has appeared since launch — treat as vendor-reported
- **Reasoning revised 68→73** (GPQA Diamond 93% now captured, with the ARMES attribution caveat); Overall 73→74 ((76+73+80+65+74)/5 = 73.6)

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**Score revisions: Reasoning 73→74, Coding 74→76, Overall unchanged at 74** — BenchmarkList's full board (SWE-bench Verified 86.6%, LiveCodeBench 87.4%, Vibe Code Bench 69.0%, SciCode 55.0%, Long-Horizon Terminal-Bench 0.51 #1 of 21) and three independent GPQA reads at ~93% lift the evidence base; Tool 76 / Context 80 / Multimodal 65 / Cost 84 unchanged:

- **AA Intelligence Index re-base:** the 54 on file is the v4.1 (9-eval composite) read (#4 of 168 at launch, behind Fable 5's 60, Opus 4.8's 56, GPT-5.5's 55). AA re-based the index on 2026-09-07 (v4.3: GPQA Diamond out, Terminal-Bench 4.0 and AutomationBench-AA in); Grok 4.5 (high) now reads **39, 38th of 200, at $1.04 per task** (BenchLM: 38.8). The 15-point drop is the rebase, not a regression.
- **New independent coding rows (BenchmarkList):** SWE-bench Verified 86.6% ± 1.52 (#7 of 72, thinking high, $0.54/test); LiveCodeBench 87.4% (#9 of 123); Vibe Code Bench v1.1 69.0% (#15 of 75); SciCode 55.0% (#26 of 296); Convex Coding Evals 73.0% (#9 of 30); FrontierCode 56.6%; CursorBench 3.2 66.7%; Code Migration 36.6%; APEX-SWE 53.6% (#3 of 14); Senior SWE-Bench 23.2% tasteful / 50.5% basic (#11 of 19); DeepSWE 1.1 56.6% (#34 of 52 — vs the launch's 53% on the Datacurve mini-swe-agent harness; harness-dependent); FrontierSWE v1 5.47; KernelBench Hard 8.9–19.7% / CUDA 18.1% / Mega 0.82–0.04.
- **New agentic rows:** Long-Horizon Terminal-Bench 0.51 mean reward (#1 of 21, 100th pct; 13 tasks ≥0.95, $11.19/task); AutomationBench-AA 51.4% (board-topping, ahead of Fable 5's 48.6% and Opus 4.8's 48.5%); τ³-Banking reads 33% (AA, #1 of 28) / 42.1% (BenchmarkList, #14 of 176) / 47.94 (DataLearner, #8 of 167) — three different boards/protocols, all strong; APEX-Agents-AA 47.1% (#4 of 33); FounderBench 66.53 (#2 of 10); WildClawBench 57.5%; BrowseComp 75.8% ±6.1%; Agents' Last Exam 27.0%; Web Search Index 35.5%; Terminal-Bench 3.0 15.7%; Terminal-Bench 4.0 12.4% (#24 of 29 — the current-frontier cap); Terminal-Bench 2.1 Best-Reported-Harness 79.3% ± 1.5% (verified 2026-08-28; Pass@5 95.5%; reward-hack rate 9.0%; field leader G-5.6 Sol 89.5%).
- **Reasoning:** GPQA Diamond 93.1% (AA) / 93.43% (DataLearner, #15 of 253) / 92.9% (Vals) — three independent reads; HLE 42.7% (AA) / 43% (Opper); MMLU-Pro (Vals) 89.2%; ARC-AGI-1 85.67% (ARC Prize official) / ARC-AGI-2 52.6% / ARC-AGI-3 0.3%; CritPt 15.4%; Creative Writing Elo 1578.8; AA-Omniscience Index 25.3 (accuracy 51.6%, hallucination 54.1%).
- **Hallucination picture is protocol-dependent:** xAI's own Factuality (Hallucination) grader puts Grok 4.5 at **0.98%** — the lowest in its chart (Opus 4.8 max 3.4%, Grok 4.6 high 1.7%, GPT-5.5 xhigh 1.1%) — while AA-Omniscience reads a 54.1% hallucination rate (up from 25% on Grok 4.3, with accuracy up 35%→52%). TrueStandard's independent 30-claim citation test (DOIs resolved against Crossref + DataCite): **4.4% fabricated** (2/45) vs Grok 4.3's 11.1% (5/45) — Fisher exact p=0.434, not significant at n=30; the same-arm pack (GPT-5.5 8.9%, Sonnet 5 7.0%, Gemini 3.1 Pro 4.7%) is statistically indistinguishable; Grok 4.5 fixed two claims its predecessor broke worst and broke one its predecessor got right.
- **Serving (AA, via Appwrite):** 91.3 tok/s output (vs xAI's stated ~80), 17.42s time-to-first-answer, 500K context, $2.00/$6.00, cached $0.50, text+image in / text out; 60M tokens on the full Intelligence Index run vs the 72M average (more concise).
- **Independent executed check (DataLLM Lab, 2026-07-29):** 9/9 on its 9-task Python benchmark at $2.93/1K tasks, 6.6s avg, 289 reasoning tokens (Grok 4.3: 8/9, $1.75, 8.4s, 482 tokens) — the `flatten` miss fixed, 40% fewer reasoning tokens, but 67% higher cost per 1K tasks; on short tasks the efficiency edge doesn't materialize (3.1× Haiku 4.5's $0.94 for the same 9/9).
- **Context/transparency notes:** released 2026-07-08 (launch post dated 2026-07-16; apidog's "July 8" launch date matches the trackers); ~1.5T parameters per Musk (unconfirmed); drops native video input (Grok 4.3 had it); not in the EU at launch; LMArena's July-1 text board didn't list it; benchr rates it 3.8/5 and notes no official xAI benchmark suite exists for the release; Grok 4.6 (2026-08-12) replaced it as flagship at the same base price (AA Intelligence Index 61, tied 3rd, beats it on all nine launch benchmarks).
- Still open: MCP Atlas, Toolathlon, OSWorld, MRCR/RULER, any MMMU/vision-suite figure, and an independent re-run of the coding boards under a neutral harness.
- Score impact: Reasoning 73→74 (three GPQA reads + HLE 42.7% + the softened hallucination evidence, against the v4.3 index rebase and ARC-AGI-3/CritPt caps); Coding 74→76 (SWE-bench Verified 86.6%, LiveCodeBench 87.4%, Vibe Code 69.0%, SciCode 55.0% — four strong independent rows — against SWE-bench Pro 64.7%, DeepSWE 1.1 53–56.6%, Senior SWE-Bench 23.2% and FrontierSWE 5.47); Overall stays 74 ((76+74+80+65+76)/5 = 74.2 → 74).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (SpaceXAI Grok 4.5 launch + model card, BenchmarkList, Artificial Analysis, BenchLM, DataLearner, eesel, Appwrite, DataLLM Lab, TrueStandard, Opper, Awesome Agents, The AI Rankings, syntaxdispatch, benchr, Layer3Labs, apidog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4_5.md`, using the same headings.
