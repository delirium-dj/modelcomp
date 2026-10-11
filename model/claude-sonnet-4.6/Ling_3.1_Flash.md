# Claude Sonnet 4.6 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-sonnet-4.6`; API `claude-sonnet-4-6`, claude.ai, Claude Cowork, Claude Code, Bedrock, Google Cloud, Microsoft Foundry)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's February-2026 Sonnet flagship ("most capable Sonnet yet"; now Active-legacy, retirement not before 2027-02-17, superseded by Sonnet 5/5.5) — OSWorld-Verified 78.5%, τ²-Bench 75.7%, GPQA Diamond 87.4–89.9%, SWE-bench Verified 75.2% (80.2% with Anthropic's prompt modification), with a 1M context at standard pricing; the default model on Free/Pro plans.
- **Provider / access:** Anthropic API (adaptive thinking — extended thinking deprecated; default effort `high`; context compaction beta), claude.ai, Claude Cowork, Claude Code, Amazon Bedrock, Google Cloud, Microsoft Foundry (Claude Platform on AWS); Batch API 50% off ($1.50/$7.50) with 300K max output (beta); US-only inference at 1.1×. `noFreeId`.
- **Release / knowledge:** 2026-02-17; reliable knowledge cutoff Aug 2025, training-data cutoff Jan 2026.
- **IDs:** `anthropic/claude-sonnet-4.6` / `claude-sonnet-4-6`. NOTE: the repo `meta.json` is stale — it says "200K" context and "Paid-tier pricing"; the model has had a 1M-token window at standard pricing since launch (beta) / pricing normalization (Claude 4.6+ includes the full 1M at standard rates).
- **Context window:** 1,000,000 tokens (standard pricing — a 900K request bills like a 9K one); 128K max output (300K Batch API beta).
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $3.00/$15.00 per 1M input/output; cache read $0.30/M (10% of input); 5m cache write $3.75/M, 1h $6.00/M; blended (3:1) $6.00/M; 55 tok/s, 0.73s TTFT.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **72.5%** (Anthropic launch table; AI Wiki and AI Release Tracker agree) — essentially tied with Opus 4.6's 72.7% and far ahead of GPT-5.3 Codex's 64.7%; NOTE: modelpricewatch reads **78.5%**, a single-source outlier; Box's insurance benchmark: **94%** ("highest-performing model we've tested for computer use")
- τ²-Bench: **75.7%** composite (themodelbeat); Sierra/BenchLM composite (2026-04-30): **87.5%** — Retail 86.2% / Airline 70.0% / Telecom 98.0%; launch-table Telecom **97.9%** / Retail **91.7%**
- APEX: **43.0%** (themodelbeat; rose from 23.7% on 2026-09-22)
- Terminal-Bench 2.0: **59.1%** (Anthropic launch table, thinking off, Terminus-2 harness, 5–15 samples/task) — well under the frontier bar; Terminal-Bench 2.1: 67.0% (RankedAGI) / 63.1% (AA) / 59.1% (modelpricewatch); Model Beat reads Terminal-Bench at **53.4%** — see the 2026-10-08 section
- Vending-Bench Arena: outperforms Sonnet 4.5 (invests in capacity early, pivots to profitability) — figure not captured; Vending Bench 2: $7,204.14 (rank 4)
- AA Intelligence Index: **30** (Max, current v4.3.2 — "above average… but somewhat expensive… slower than average and very verbose"; 230M output tokens vs an 82M median) — the launch-era read (Feb 2026, pre-v4.3.2 index revision) was **51**: an 8-point jump over Sonnet 4.5's 43, tied with GPT-5.2 xhigh, 2 behind Opus 4.6 — the smallest Sonnet–Opus gap AA had measured; the Non-reasoning (High) variant reads **25 (estimated)**, #5 of 61
- MCP Atlas: **61.3%** (Anthropic launch table) / **69.5%** (AI Release Tracker) — two lab reads 8.2 points apart; BrowseComp: **74.7%** single-agent / **82.07%** multi-agent (system-card update; run with web search/fetch, tool calling, compaction at 50K up to 10M total tokens, max effort, no thinking); Toolathlon: see the 2026-10-08 section

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (Anthropic launch table) / **87.4%** (Model Beat) — just under the 90%+ frontier band; NOTE: NxCode's guide and AI/TLDR's own runs read **74.1%** — a conflicting third-party figure 13–16 points below the vendor read
- Humanity's Last Exam (with tools: search, fetch, code execution, programmatic tool calling, compaction at 50K up to 3M total tokens, max effort, adaptive thinking): **49%** (Anthropic launch table) / **46.8%** (Sonnet 5 launch comparison) — clears the 40%+ band; no-tools reads **33.2%** (launch table) / **33.6%** (Model Beat) / **34%** (AA's current page); modelpricewatch's 19.1% is the outlier — configuration-dependent
- ARC-AGI-2: **58.3%** (launch table, max effort, 120K thinking budget) / **60.4%** at high effort (Model Beat; ARC-AGI-1: 86.5%)
- AIME 2024/2025: **85.8%** (Model Beat) / **83%** (modelpricewatch); launch-table "Math": 89%
- FrontierMath: **32.4%**; FrontierMath Tier 4: **8.x%**
- SimpleQA Verified: **35.5%** (rose from 29.0% on 2026-08-28); MMLU-Pro: **85.2%**; MMMLU: **89.3%** (#4 of 34); WeirdML: 66.1%; HumanEval: **93.5%**; NYT Connections: 58% (vs Sonnet 4.5's 49%)
- AA-Omniscience: **12** (AA's current page; the Non-reasoning variant reads −4); LMSYS Chatbot Arena: **1472.6 Elo**

Coding:

- SWE-bench Verified: **79.6%** (Anthropic launch table, averaged over 10 trials) — **80.2%** with Anthropic's prompt modification; **75.2%** (Epoch AI / Model Beat, the independent read); at launch the Verified field had converged at 79–81% (Opus 4.6 80.8%, Gemini 3.1 Pro 80.6%, MiniMax M2.5 80.2%, GPT-5.4 ~80%)
- LiveCodeBench: **72.4%** (modelpricewatch); Code LiveBench **87.0%** (rank 7); Agentic Code LiveBench 63.3% (rank 6)
- WebDev Arena: **1521** (Epoch); Code Arena 1525 (rank 1)
- SciCode: **50.1%** (rose from 46.8% on 2026-09-08) — under the 55% reference
- SWE-bench Pro: **58.1%** (RankedAGI, rank 12) / **56.8%** (Morphllm, May 2026 — behind Opus 4.7's 64.3% and GPT-5.4's 57.7%, ahead of Gemini 3.1 Pro's 54.2%); SWE-bench Multilingual: **75.9%** (system card); SWE-Atlas: Codebase QnA 31.2 / 70.3 pass@1, Refactoring 32.21, Test Writing 31.76
- DeepSWE 1.1: **30%** (AA's independent test) / 29.9% (BenchSift, high effort, mini-swe-agent; pass@4 56.6%, $5.52/task) / 31.8% v1; Next.js Evals: **45%** (AI Release Tracker — the 2026-10-08 section's 58% read conflicts); AA Coding Agent Index: 49.4

Long context / multimodal:

- 1M window; context compaction (beta) increases effective length; MRCR v2 (8-needle) **84.9%** at 128K average; AA-LCR v1.1 **80%** (AA's own, current page; the Non-reasoning variant reads 68%); GraphWalks in the system card (figure not captured); no ≥98%-at-512K+ retrieval figure
- Matches Opus 4.6 on OfficeQA (enterprise documents: charts, PDFs, tables) per Anthropic; MMMU-Pro **74.5%** without tools / **75.6%** with tools (above Opus 4.6's 73.9%), MMMU **89.3%**, CharXiv Reasoning **72.4%**, LAB-Bench FigQA in the system card; no Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 77/100.** τ²-Bench Telecom **97.9%** / Retail **91.7%**, OSWorld-Verified **72.5%** (consensus; modelpricewatch's 78.5% is a single-source outlier), BrowseComp **74.7%** single-agent / **82.07%** multi-agent and MCP Atlas **61.3–69.5%** lead the Sonnet tier, with Toolathlon Pass@1 49.4%, the Claw-Eval #1 Score (81.4%), SRE-Skills-Bench **90.4%** (Rootly — led general SRE 88.0% and tied AWS networking 97.1%) and Finance Agent v1.1 **63.3%** supporting; the Terminal-Bench spread (53.4% Model Beat / 59.1% launch / 63.1% AA / 67.0% RankedAGI), Terminal-Bench 4.0 at **3%** (AA) and the AA Intelligence Index of 30 (v4.3.2) cap the score.
- **Reasoning: 77/100.** GPQA Diamond **89.9%** (vendor) / **87.4%** (Model Beat) sits just under the 90%+ frontier band — though NxCode and AI/TLDR's own runs read **74.1%**, a conflicting third-party figure — with HLE **49%** with tools (launch table; clears the 40%+ band; no-tools reads 33.2–34.6%), ARC-AGI-2 58.3–60.4%, MMMU-Pro 74.5% and CharXiv Reasoning 72.4% supporting; FrontierMath 32.4%, SimpleQA Verified 35.5%, CritPt **3%** and the AA-Omniscience score of 12 (AA's current page) cap the score.
- **Context window: 95/100.** 1M-token window at standard pricing (no >200K surcharge) with context compaction in beta; MRCR v2 (8-needle) **84.9%** at 128K average and AA-LCR v1.1 **80%** (AA's own), but no ≥98%-at-512K+ retrieval figure, so 100 is not justified.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); OfficeQA parity with Opus 4.6, MMMU-Pro 74.5% (above Opus 4.6's 73.9%) and MMMU 89.3% support, no Video-MMMU figure captured.
- **Coding: 74/100.** SWE-bench Verified **79.6%** (vendor 10-trial; 75.2% Epoch's independent read), Code LiveBench **87.0%** (rank 7), SWE-bench Pro **56.8–58.1%** and SWE-bench Multilingual **75.9%** are solid Sonnet-tier results with WebDev Arena 1521 and HumanEval 93.5% supporting; DeepSWE **29.9–32.0%**, SciCode 50.1% (under the 55% reference), Next.js Evals **45%** (AI Release Tracker; the 58% read in the 2026-10-08 section conflicts) and the AA Coding Agent Index of 49.4 cap the score.
- **Cost efficiency: 60/100.** $3/$15 per 1M (blended $6.00/M) is the methodology's ~60 anchor exactly; 10%-of-input cache reads ($0.30/M) and half-rate Batch API ($1.50/$7.50) are offsets — AA's usage-weighted blend reads $2.31/M and $2.49/task (vs Fable 5's $7.70/$8.75), the cheapest per-task read in the family; the 1.1× US-only-inference multiplier is a premium.
- **Overall Score: 78/100.** (77+77+95+65+74)/5 = 77.6 → 78 — a strong February-2026 Sonnet (OSWorld 72.5%, τ²-Bench 97.9%/91.7%, GPQA ~88–90%, MCP Atlas 61.3–69.5%, 1M context at $3/$15 with 10% cache reads) whose Terminal-Bench spread (53.4–67.0%), DeepSWE (29.9–32.0%), the GPQA third-party conflict (74.1%) and HLE configuration variance place it below the October-2026 agentic frontier.

---

## Update 2026-10-08 (6-day re-research)

Fills the MCP Atlas, BrowseComp, Toolathlon, DeepSWE, SWE-bench Pro, MRCR and MMMU gaps:

- **MCP Atlas: 69.5%** (AI Release Tracker); **BrowseComp: 74.7%** (RankedAGI, rank 17); **Toolathlon Pass@1: 49.4%** (RankedAGI, rank 5)
- **DeepSWE: 31.8% v1 / 29.9% v1.1** (high effort, mini-swe-agent, BenchSift; pass@4 56.6%, $5.52/task, 76.2K output tokens, ~47 min; RankedAGI reads 32.0%)
- **SWE-bench Pro: 58.1%** (RankedAGI, rank 12); SWE-bench Verified **79.6%** (RankedAGI; vs 75.2% 10-trial / 80.2% prompt-mod)
- **MRCR v2 (8-needle): 84.9%** at 128K average (AI Release Tracker) — fills the long-context gap
- Terminal-Bench 2.1: **67.0%** (RankedAGI, rank 11) / **63.1%** (AA's own run) / 59.1% (modelpricewatch); Terminal-Bench 2.0: **59.1%** (RankedAGI) — fills the TB 2.0 gap
- **HLE: 34.6%** no-tools / **46.8%** with tools (Sonnet 5 launch comparison table; vs themodelbeat's 33.6% / modelpricewatch's 19.1% — configuration-dependent)
- Code LiveBench **87.0%** (rank 7); Agentic Code LiveBench 63.3% (rank 6); AA Coding Agent Index 49.4; CyberGym 65.2%; Svelte Bench 100.0%
- **MMMU-Pro: 74.5%**; CharXiv Reasoning 72.4%; Finance Agent v2 51%; CursorBench v3.1 49%; Next.js Evals 58%; Blueprint-Bench 2 6.7%; BullshitBench v2 91%; BU Bench 62%
- GDPval-AA 1675–1676 (rank 7); GDPval-AA v2 1395; Vending Bench 2 $7,204.14 (rank 4); NYT Connections 85.7%; Arena Elo Text 1472 / Code 1521 (Code Arena 1525, rank 1)
- SWE-Atlas: Codebase QnA 31.2 score / 70.3 pass@1, Refactoring 32.21, Test Writing 31.76
- τ²-Bench: Telecom **97.9%**, Retail **91.7%** (llm-stats)
- **Claw-Eval (arXiv 2604.06132, Peking University)**: General 81.3/81.4/68.3; Multi-turn 81.9/89.5/65.8; **Overall 81.4/82.9/67.8 — #1 Score of 14 models** (Pass³ 2nd to Opus 4.6's 70.4); Multimodal 50.9/43.6/23.8 (Video 15.4, Doc & Image 40.9, Code 25.9)
- **Scores revised** (see Normalized scores): Tool 74→77, Reasoning 76→77, Coding 72→74, Overall 76→78 on the filled gaps

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**Score revisions: none.** Tool use 77 / Reasoning 77 / Context 95 / Multimodal 65 / Coding 74 / Cost 60 / Overall 78 all unchanged — the new reads fill the AA-current-page components and the launch-era table, and surface two source conflicts (OSWorld, GPQA) that are documented without moving a band:

- **AA's current page (v4.3.2) components filled in:** AA-Briefcase v1.1 **1063**, GDPval-AA v2.1 **1232** (vs 1633 Elo at launch — the benchmark-version difference; AI Release Tracker reads 1676, modelpricewatch 1675–1676), AutomationBench-AA **20%**, Terminal-Bench 4.0 **3%**, SciCode **50%**, HLE **34%**, GDP.pdf **16%**, CritPt **3%**, AA-Omniscience **12**, AA-LCR v1.1 **80%**. Blended price $2.31/M, cost per task $2.49, $4,925 to run the Intelligence Index. The Non-reasoning (High) variant: Index 25 (estimated), HLE 13%, CritPt 1%, AA-Omniscience −4, AA-LCR 68%.
- **Launch-era context (Feb 2026):** Intelligence Index **51** (pre-v4.3.2 revision) — an 8-point jump over Sonnet 4.5's 43, tied with GPT-5.2 xhigh, 2 behind Opus 4.6, the smallest Sonnet–Opus gap AA had measured; Sonnet 4.6 led AA's GDPval-AA and TerminalBench boards at launch, slightly ahead of Opus 4.6 (within the 95% CI). AA also measured the token cost of the launch run: 74M output tokens in max effort (~3× Sonnet 4.5's 25M, 28% more than Opus 4.6's 58M; 47M of it in HLE alone) — the verbosity pattern that persists on the current page (230M vs an 82M median).
- **OSWorld-Verified conflict resolved:** the Anthropic launch table, AI Wiki and AI Release Tracker all read **72.5%** (essentially tied with Opus 4.6's 72.7%); modelpricewatch's **78.5%** is a single-source outlier. The consensus figure is now carried; Tool use stays 77 (72.5% is still a near-Opus computer-use result, and the τ²-Bench/BrowseComp/Claw-Eval rows are unchanged).
- **GPQA Diamond conflict noted:** vendor **89.9%** and Model Beat **87.4%** vs NxCode's guide and AI/TLDR's own runs at **74.1%** — a 13–16-point third-party discrepancy with no resolution; Reasoning stays 77 with the conflict documented (the vendor read is the launch-table figure; the third-party read would sit mid-band).
- **MCP Atlas spread:** 61.3% (Anthropic launch table) vs 69.5% (AI Release Tracker) — two lab reads 8.2 points apart; both carried.
- **System-card structure confirmed** (sections: SWE-bench Verified/Multilingual, Terminal-Bench 2.0, OSWorld, MCP-Atlas, Finance Agent + Real-World Finance, Vending-Bench 2, CyberGym, long context (MRCR v2, GraphWalks), multimodal (LAB-Bench FigQA, MMMU-Pro, CharXiv), WebArena/WebArena-Verified, MMMLU, agentic search (BrowseComp, Test-Comp, Multi-Comp)). Safety rows: single-turn harmlessness 99.38%, prompt-injection success 1.29% without safeguards (vs Sonnet 4.5's 49.36%) — "the best degree of alignment we have yet seen in any Claude model".
- **Lineup status:** Active-legacy on the platform docs ("consider migrating to Claude Sonnet 5.5"; retirement not sooner than 2027-02-17); the free tier now defaults to Sonnet 4.6 with file creation, connectors, skills and compaction. Head-to-head vs the current frontier: Fable 5 (Max, Opus 4.8 fallback) leads 50→30 on the Intelligence Index (Briefcase 1540/1063, GDPval-AA v2.1 1610/1232, AutomationBench 54%/20%, TB 4.0 42%/3%, SciCode 61%/50%, HLE 55%/34%, CritPt 29%/3%, Omniscience 43/12, LCR 82%/80%) at $7.70 blended/$8.75 per task vs Sonnet 4.6's $2.31/$2.49 — a ~3.5× price gap for a 20-point intelligence gap.
- Score impact: none. The consensus OSWorld figure (72.5% vs the 78.5% outlier) and the documented GPQA third-party conflict are material to interpretation but not to band placement; every other new row (AA components, τ² composite 87.5%, SRE-Skills-Bench 90.4%, SWE-bench Pro 56.8%, HumanEval 93.5%, SWE-bench Multilingual 75.9%, BrowseComp multi-agent 82.07%) corroborates existing scores.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (Anthropic Sonnet 4.6 launch post + system card + platform docs, Artificial Analysis, AI/TLDR, AI Release Tracker, AI Wiki, Model Beat/Epoch AI, modelpricewatch, RankedAGI, Rootly, Sierra/BenchLM, Morphllm); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4_6.md`, using the same headings.
